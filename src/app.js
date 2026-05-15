const express = require('express');
const scrapeRoutes = require('./routes/scrapeRoutes');

const app = express();

app.use(express.json());

app.use('/api', scrapeRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});