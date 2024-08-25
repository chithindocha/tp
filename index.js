const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// POST endpoint
app.post('/bfhl', (req, res) => {
  try {
    const { data } = req.body;
    
    if (!Array.isArray(data)) {
      throw new Error('Invalid input: data must be an array');
    }

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const lowercaseAlphabets = alphabets.filter(item => item.toLowerCase() === item);
    const highestLowercaseAlphabet = lowercaseAlphabets.length > 0 ? [lowercaseAlphabets.sort().pop()] : [];

    const response = {
      is_success: true,
      user_id: "Lavanya_rai", // Replace with your actual user_id
      email: "lavanya.rai2021@vitbhopal.ac.in", // Replace with your actual email
      roll_number: "21BCE11345", // Replace with your actual roll number
      numbers,
      alphabets,
      highest_lowercase_alphabet: highestLowercaseAlphabet
    };

    res.json(response);
  } catch (error) {
    res.status(400).json({ is_success: false, error: error.message });
  }
});

// GET endpoint
app.get('/bfhl', (req, res) => {
  res.json({ operation_code: 1 });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});