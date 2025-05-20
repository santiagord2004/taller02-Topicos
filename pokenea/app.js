// app.js
const express = require('express');
const app = express();
const pokeneaRoutes = require('./routes/pokeneaRoutes');
const path = require('path'); 


const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, './views')); 

app.use('/pokeneas', pokeneaRoutes); 


// Not found Routes(404)
app.use((req, res, next) => {
  res.status(404).json({ error: "Not Found" });
});

// Error manager
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});