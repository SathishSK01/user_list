const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const userDetails = require('../user_list/db_module/module');

app.post('/storeData', async (req, res) => {
  try {
    const newData = req.body;
    const storedRecord = await userDetails.create(newData);
    res.json({ message: 'Data stored successfully', data: storedRecord });
  } catch (error) {
    console.error('Error storing data in the database:', error);
    res.status(500).json({ message: 'This user name is already present' });
  }
});

app.get('/users', async (req, res) => {
  try {
    const { name } = req.query;
    const users = await userDetails.find({ name });
    res.json(users);
  } catch (error) {
    console.error('Error getting user data', error);
    res.status(500).json({ message: 'Internal server Error' });
  }
});

app.get('/users/sort', async (req, res) => {
  try {
    const { order } = req.query;
    const sortOrder = order === 'asc' ? 1 : -1;
    const users = await userDetails.find().sort({ age: sortOrder }); 
    res.json(users);
  } catch (error) {
    console.error('Data not found', error);
    res.status(500).json({ message: 'Internal server Error' });
  }
});

app.get('/paginate', async (req, res) => {
  try {
    const { limit, offset } = req.query;
    const users = await userDetails
      .find()
      .limit(parseInt(limit))
      .skip(parseInt(offset));
    res.json(users);
  } catch (error) {
    console.error('Pagination error', error);
    res.status(500).json({ message: 'Internal server Error' });
  }
});

module.exports = app;
