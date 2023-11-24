const express = require('express');
const fs = require('fs/promises');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const commentsFilePath = path.join(__dirname, 'comments.json');

// Загрузка комментариев из файла
async function loadComments() {
    try {
        const content = await fs.readFile(commentsFilePath, 'utf-8');
        return JSON.parse(content) || [];
    } catch (error) {
        return [];
    }
}

// Сохранение комментариев в файл
async function saveComments(comments) {
    await fs.writeFile(commentsFilePath, JSON.stringify(comments, null, 2), 'utf-8');
}

// Получение списка комментариев
app.get('/api/comments', async (req, res) => {
    const comments = await loadComments();
    res.json(comments);
});

// Добавление нового комментария
app.post('/api/comments', async (req, res) => {
    const { username, comment } = req.body;

    if (!username || !comment) {
        return res.status(400).json({ error: 'Имя пользователя и комментарий обязательны' });
    }

    const newComment = { username, comment, timestamp: new Date() };
    const comments = await loadComments();
    comments.push(newComment);
    await saveComments(comments);

    res.json(newComment);
});

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
