"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let express = require('express');
const app = express();
const PORT = 4000;
app.get('/', (req, res) => {
    res.send('Hello');
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});