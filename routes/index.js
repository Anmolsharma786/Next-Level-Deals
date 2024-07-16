// routes/index.js
const express = require('express');
const router = express.Router();
const axios = require('axios');
router.get('/', (req, res) => {
  res.send('Hello, world!');
});

//Deals under $5
router.get('/allDeals/:pageNumber', async (req, res) => {
  try {
      const pageNum = req.params.pageNumber;
      console.log(req.params.pageNumber);
      const response = await axios.get(`https://www.cheapshark.com/api/1.0/deals?pageNumber=${pageNum}&pageSize=30`);
      // console.log(response.data); // Log the data to the console
      // const totalPages = response.headers['x-total-page-count']
      res.status(200).json(response.data); // Send the data back as a JSON response
  } catch (error) {
      console.error('Error fetching data from API:', error);
      res.status(500).send('An error occurred while fetching data.');
  }
});


//Deals under $5
router.get('/dealsUnder5Dollars', async (req, res) => {
  try {
      const response = await axios.get('https://www.cheapshark.com/api/1.0/deals?upperPrice=5');
      console.log(response.data); // Log the data to the console
      res.status(200).json(response.data); // Send the data back as a JSON response
  } catch (error) {
      console.error('Error fetching data from API:', error);
      res.status(500).send('An error occurred while fetching data.');
  }
});


//Deals under $10 and above $5
router.get('/dealsUnder10Dollars', async (req, res) => {
  try {
      const response = await axios.get('https://www.cheapshark.com/api/1.0/deals?lowerPrice=5&upperPrice=10');
      console.log(response.data); // Log the data to the console
      res.status(200).json(response.data); // Send the data back as a JSON response
  } catch (error) {
      console.error('Error fetching data from API:', error);
      res.status(500).send('An error occurred while fetching data.');
  }
});


//Deals under $25 and above $10
router.get('/dealsUnder25Dollars', async (req, res) => {
  try {
      const response = await axios.get('https://www.cheapshark.com/api/1.0/deals?lowerPrice=10&upperPrice=25');
      console.log(response.data); // Log the data to the console
      res.status(200).json(response.data); // Send the data back as a JSON response
  } catch (error) {
      console.error('Error fetching data from API:', error);
      res.status(500).send('An error occurred while fetching data.');
  }
});

//Deals above $25
router.get('/dealsAbove25Dollars', async (req, res) => {
  try {
      const response = await axios.get('https://www.cheapshark.com/api/1.0/deals?lowerPrice=25');
      console.log(response.data); // Log the data to the console
      res.status(200).json(response.data); // Send the data back as a JSON response
  } catch (error) {
      console.error('Error fetching data from API:', error);
      res.status(500).send('An error occurred while fetching data.');
  }
});

module.exports = router;

