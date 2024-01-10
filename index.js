const express = require('express');
const app = express();
const PORT = 3000

app.get('/', (req, res) => {
    console.log("Welcome home...");
})
app.listen(PORT, () => {
    console.log(`Server started and running on port ${PORT}`);
})