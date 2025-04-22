const express = require('express');
const cors = require('cors');
const fs = require('fs');
const xlsx = require('xlsx');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const filePath = './contact_data.xlsx';

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  let data = [];
  if (fs.existsSync(filePath)) {
    const workbook = xlsx.readFile(filePath);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    data = xlsx.utils.sheet_to_json(sheet);
  }

  data.push({ Name: name, Email: email, Message: message, Date: new Date().toLocaleString() });

  const newSheet = xlsx.utils.json_to_sheet(data);
  const newWorkbook = xlsx.utils.book_new();
  xlsx.utils.book_append_sheet(newWorkbook, newSheet, 'Contacts');
  xlsx.writeFile(newWorkbook, filePath);

  res.status(200).send('Saved to Excel!');
});

app.listen(5000, () => console.log('Server started on http://localhost:5000'));
