// routes/index.js
const express = require('express');
const router = express.Router();
const axios = require('axios');
router.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Deals under $5
router.get('/allDeals/:pageNumber', async (req, res) => {
  try {
    const pageNum = req.params.pageNumber;
    console.log(req.params.pageNumber);
    const response = await axios.get(`https://www.cheapshark.com/api/1.0/deals?pageNumber=${pageNum}&pageSize=30&sortBy=price&desc=0&storeID=1`);
    res.status(200).json(response.data); // Send the data back as a JSON response
  } catch (error) {
    console.error('Error fetching data from API:', error);
    res.status(500).send('An error occurred while fetching data.');
  }
});

router.get('/allDeals', async (req, res) => {
  try {
    const { pageNumber, pageSize, sortBy } = req.query;
    const response = await axios.get(`https://www.cheapshark.com/api/1.0/deals?pageNumber=${pageNumber}&pageSize=${pageSize}&sortBy=${sortBy}`);
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching data from API:', error);
    res.status(500).send('An error occurred while fetching data.');
  }
});


router.get('/dealsUnder5Dollars', async (req, res) => {
  try {
    const response = await axios.get('https://www.cheapshark.com/api/1.0/deals?sortBy=price&desc=0&upperPrice=5');
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
    const response = await axios.get('https://www.cheapshark.com/api/1.0/deals?sortBy=price&desc=0&lowerPrice=5&upperPrice=10');
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
    const response = await axios.get('https://www.cheapshark.com/api/1.0/deals?sortBy=price&desc=0&lowerPrice=10&upperPrice=25');
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
    const response = await axios.get('https://www.cheapshark.com/api/1.0/deals?sortBy=price&desc=0&lowerPrice=25');
    console.log(response.data); // Log the data to the console
    res.status(200).json(response.data); // Send the data back as a JSON response
  } catch (error) {
    console.error('Error fetching data from API:', error);
    res.status(500).send('An error occurred while fetching data.');
  }
});

module.exports = router;

