const API_URL = 'http://localhost:3000';

async function loadBooks() {
    const title = document.getElementById('searchTitle').value.trim();
    const year = document.getElementById('searchYear').value;
    let url = `${API_URL}/books`;
  
    const params = new URLSearchParams();
  
    if (title) params.append('title', title);
    if (year) params.append('year', year);
  
    if (params.toString()) {
      url += `/search?${params.toString()}`;
    }
  
    const res = await fetch(url);
    const books = await res.json();
    const list = document.getElementById('bookList');
    list.innerHTML = '';
  
    books.forEach(book => {
      const div = document.createElement('div');
      div.className = 'book';
      div.innerHTML = `
        <span>${book.title}</span> (${book.year}) 
        <button onclick="deleteBook(${book.id})">🗑️</button>
      `;
      list.appendChild(div);
    });
  }  

async function addBook() {
  const title = document.getElementById('titleInput').value.trim();
  const year = parseInt(document.getElementById('yearInput').value);
  const message = document.getElementById('message');

  const res = await fetch(`${API_URL}/books`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, year })
  });

  const data = await res.json();
  if (!res.ok) {
    message.className = 'error';
    message.textContent = data.message || 'Fehler beim Hinzufügen.';
  } else {
    message.className = 'success';
    message.textContent = `Buch "${data.title}" wurde hinzugefügt.`;
    document.getElementById('titleInput').value = '';
    document.getElementById('yearInput').value = '';
    loadBooks();
  }
}

async function deleteBook(id) {
  await fetch(`${API_URL}/books/${id}`, { method: 'DELETE' });
  loadBooks();
}

document.getElementById('searchTitle').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') loadBooks();
  });
  document.getElementById('searchYear').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') loadBooks();
  });
  

loadBooks();
