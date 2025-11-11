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
// DELETE /data/:id
app.delete("/data/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = data.findIndex((item) => item.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "User not found" });
  }

  data.splice(index, 1);
  res.status(200).json({ message: "Deleted successfully" });
});

// ====================================
// PUT /data/:id
app.put("/data/:id", (req, res) => {
  if (!req.is("application/json")) {
    return res.status(415).json({ error: "Unsupported Media Type" });
  }

  const id = parseInt(req.params.id);
  const index = data.findIndex((item) => item.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "User not found" });
  }

  data[index] = { ...data[index], ...req.body };
  res.status(200).json(data[index]);
});

// ====================================
// POST /data/search 
app.post("/data/search", (req, res) => {
  if (!req.is("application/json")) {
    return res.status(415).json({ error: "Unsupported Media Type" });
  }

  const { firstname } = req.body;
  const filtered = data.filter((item) => item.firstname === firstname);

  if (filtered.length === 0) {
    return res.status(404).json({ error: "User not found" });
  }

  res.status(200).json(filtered);
});

// ====================================
// Start Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
