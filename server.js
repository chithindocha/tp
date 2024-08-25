const express = require('express');
const cors = require('cors');
// app.use(cors({
//     origin: ['http://localhost:3000', 'https://frontend-rho-tawny.vercel.app/']
//   }));

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.post('/bfhl', (req, res) => {
    try {
      const { data } = req.body;
      
      if (!Array.isArray(data)) {
        throw new Error('Invalid input: data must be an array');
      }
  
      const numbers = data.filter(item => !isNaN(item));
      const alphabets = data.filter(item => isNaN(item) && item.length === 1);
      const highestAlphabet = alphabets.length > 0 ? [alphabets.sort((a, b) => b.localeCompare(a, undefined, {sensitivity: 'base'}))[0]] : [];
  
      const response = {
        is_success: true,
        user_id: "Lavanya_Rai", // Replace with your actual user_id
        email: "lavanya.rai2021@vitbhopal.ac.in", // Replace with your actual email
        roll_number: "21BCE11345", // Replace with your actual roll number
        numbers,
        alphabets,
        highest_alphabet: highestAlphabet
      };
  
      res.json(response);
    } catch (error) {
      res.status(400).json({ is_success: false, error: error.message });
    }
  });
// app.post('/bfhl', (req, res) => {
//   try {
//     const { data } = req.body;
    
//     if (!Array.isArray(data)) {
//       throw new Error('Invalid input: data must be an array');
//     }

//     const numbers = data.filter(item => !isNaN(item));
//     const alphabets = data.filter(item => isNaN(item));
//     const lowercaseAlphabets = alphabets.filter(item => item.toLowerCase() === item);
//     const highestLowercaseAlphabet = lowercaseAlphabets.length > 0 ? [lowercaseAlphabets.sort().pop()] : [];

//     const response = {
//       is_success: true,
//       user_id: "Lavanya_rai", // Replace with your actual user_id
//       email: "lavanya.rai2021@vitbhopal.ac.in", // Replace with your actual email
//       roll_number: "21BCE11345", // Replace with your actual roll number
//       numbers,
//       alphabets,
//       highest_alphabet: highestLowercaseAlphabet
//     };

//     res.json(response);
//   } catch (error) {
//     res.status(400).json({ is_success: false, error: error.message });
//   }
// });

app.get('/bfhl', (req, res) => {
  res.json({ operation_code: 1 });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});