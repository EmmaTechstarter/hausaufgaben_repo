import express from 'express';
import fs from 'fs-extra';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;
const DATA_FILE = './daten.json';

app.use(bodyParser.json());

async function readData() {
  return fs.readJSON(DATA_FILE);
}

async function writeData(data) {
  return fs.writeJSON(DATA_FILE, data, { spaces: 2 });
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
  const books = await readData();
  const newBook = {
    id: Date.now(),
    title: req.body.title,
    year: req.body.year
  };
  books.push(newBook);
  await writeData(books);
  res.status(201).json(newBook);
});

app.put('/books/:id', async (req, res) => {
  const books = await readData();
  const bookId = parseInt(req.params.id);
  const index = books.findIndex(book => book.id === bookId);

  if (index === -1) {
    return res.status(404).json({ message: 'Buch nicht gefunden' });
  }

  books[index] = { ...books[index], ...req.body };
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
