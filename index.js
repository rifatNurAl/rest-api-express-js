const express = require("express");
const app = express();

app.use(express.json());



// ====================================
// Start Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
