import express from 'express';
import fs from 'fs-extra';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;
const DATA_FILE = './daten.json';

app.use(bodyParser.json());

async function readData() {
  try {
    return await fs.readJSON(DATA_FILE);
  } catch (err) {
    console.error("Fehler beim Lesen der Daten", err.message);
    return [];
  }
}

async function writeData(data) {
  try {
    await fs.writeJSON(DATA_FILE, data, { spaces: 2 });
  } catch (err) {
    console.error("Fehler beim Schreiben der Daten", err.message);
  }
}

app.get('/books', async (req, res) => {
  const books = await readData();
  res.json(books);
});

app.get('/books/search', async (req, res) => {
    const books = await readData();
    const { title, year } = req.query;
  
    let filtered = books;
  
    if (title) {
      const lowerTitle = title.toLowerCase();
      filtered = filtered.filter(book =>
        book.title.toLowerCase().includes(lowerTitle)
      );
    }
  
    if (year) {
      filtered = filtered.filter(book => book.year === parseInt(year));
    }
  
    res.json(filtered);
  });
  

  app.post('/books', async (req, res) => {
    let { title, year } = req.body;
    title = title.trim();    
  
    if (!title || !year) {
      return res.status(400).json({ message: "Bitte 'title' und 'year' angeben." });
    }
  
    if (parseInt(year) < 1895) {
      return res.status(400).json({ message: "Jahr muss ≥ 1895 sein (Beginn der Filmtechnik)." });
    }
  
    const books = await readData();
    const titleExists = books.some(book => book.title.toLowerCase() === title.toLowerCase());
  
    if (titleExists) {
      return res.status(409).json({ message: "Ein Buch mit diesem Titel existiert bereits." });
    }
  
    const newBook = {
      id: Date.now(),
      title,
      year
    };
  
    books.push(newBook);
    await writeData(books);
    res.status(201).json(newBook);
  });
  

app.put('/books/:id', async (req, res) => {
  let { title, year } = req.body;
  title = title.trim();    

  const books = await readData();
  const index = books.findIndex(book => book.id === bookId);

  if (index === -1) {
    return res.status(404).json({ message: "Buch nicht gefunden." });
  }

  if (!title || !year) {
    return res.status(400).json({ message: "Bitte 'title' und 'year' angeben." });
  }

  if (parseInt(year) < 1895) {
    return res.status(400).json({ message: "Jahr muss ≥ 1895 sein." });
  }

  const duplicate = books.find(book => book.title.toLowerCase() === title.toLowerCase() && book.id !== bookId);
  if (duplicate) {
    return res.status(409).json({ message: "Ein anderes Buch mit diesem Titel existiert bereits." });
  }

  books[index] = { ...books[index], title, year };
  await writeData(books);
  res.json(books[index]);
});


app.delete('/books/:id', async (req, res) => {
  const books = await readData();
  const bookId = parseInt(req.params.id);
  const newBooks = books.filter(book => book.id !== bookId);

  if (newBooks.length === books.length) {
    return res.status(404).json({ message: 'Buch nicht gefunden' });
  }

  await writeData(newBooks);
  res.json({ message: 'Buch gelöscht' });
});

app.listen(PORT, () => {
  console.log(`Tolkien API läuft auf http://localhost:${PORT}`);
});
