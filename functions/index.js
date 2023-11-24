const express = require('express');
const app = express();
const port = process.env.PORT || 5500;
const bodyParser = require('body-parser');
const fs = require('fs').promises;
const path = require('path');
const cors = require('cors');

app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.json());

// Роут для главной страницы
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

// Роут для получения комментариев
app.get('/api/comments', async (req, res) => {
  try {
    const comments = await loadComments();
    res.json(comments);
  } catch (error) {
    console.error('Error loading comments:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Роут для добавления комментария
app.post('/api/comments', async (req, res) => {
  try {
    const { username, comment } = req.body;

    if (!username || !comment) {
      return res.status(400).json({ error: 'Username and comment are required' });
    }

    const newComment = { username, comment, timestamp: new Date() };
    const comments = await loadComments();

    comments.push(newComment);

    // Сохранение комментариев в файл
    await saveComments(comments);

    res.json(newComment);
  } catch (error) {
    console.error('Error adding comment:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Middleware для обработки ошибок
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Слушаем указанный порт
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Функция для загрузки комментариев из файла
async function loadComments() {
  const filePath = path.join(__dirname, 'comments.json');
  try {
    const content = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(content) || [];
  } catch (error) {
    return [];
  }
}

// Функция для сохранения комментариев в файл
async function saveComments(comments) {
  const filePath = path.join(__dirname, 'comments.json');
  await fs.writeFile(filePath, JSON.stringify(comments, null, 2), 'utf-8');
}
