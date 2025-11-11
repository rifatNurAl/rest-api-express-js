const express = require("express");
const app = express();

app.use(express.json());

// Sample dataset
let data = [
  { id: 1, firstname: "Foysal", lastname: "Rifat" },
  { id: 2, firstname: "Ariyan", lastname: "Fahad" },
];

// =============================
// POST /data 
app.post("/data", (req, res) => {
  if (!req.is("application/json")) {
    return res.status(415).json({ error: "Unsupported Media Type" });
  }

  const newItem = req.body;
  data.push(newItem);
  res.status(201).json(newItem);
});


// ====================================
// Start Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
