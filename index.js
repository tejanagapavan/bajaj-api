export default function handler(req, res) {
  if (req.method === 'POST') {
    const { data } = req.body;

    if (!Array.isArray(data)) {
      return res.status(400).json({ is_success: false, message: "Invalid input: 'data' must be an array" });
    }

    let odd_numbers = [];
    let even_numbers = [];
    let alphabets = [];
    let special_characters = [];
    let sum = 0;
    let allAlphaForConcat = [];

    data.forEach(item => {
      if (/^\d+$/.test(item)) { // number string
        let num = parseInt(item, 10);
        if (num % 2 === 0) {
          even_numbers.push(item);
        } else {
          odd_numbers.push(item);
        }
        sum += num;
      } else if (/^[a-zA-Z]+$/.test(item)) { // alphabets only
        alphabets.push(item.toUpperCase());
        allAlphaForConcat.push(item);
      } else {
        special_characters.push(item);
      }
    });

    let concatString = allAlphaForConcat.join('');
    let reversed = concatString.split('').reverse();
    for (let i = 0; i < reversed.length; i++) {
      reversed[i] = i % 2 === 0 ? reversed[i].toUpperCase() : reversed[i].toLowerCase();
    }
    const concat_string = reversed.join('');

    const response = {
      is_success: true,
      user_id: "L teja nagapavan_16052003", // Replace with your full name and DOB
      email: "tejanagapavan123@gmail.com",    // Replace with your email
      roll_number: "21MIS0125",         // Replace with your roll number
      odd_numbers,
      even_numbers,
      alphabets,
      special_characters,
      sum: sum.toString(),
      concat_string
    };

    res.status(200).json(response);
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
