const express = require('express');
const multer = require('multer');
const uuid = require('uuid').v4;

const app = express();
app.use(express.static((__dirname, '/public')));



app.listen(3002, () => console.log('worked'));