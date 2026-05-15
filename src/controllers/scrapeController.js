const { procesarHTML } = require('../services/scrapeService');

const obtenerDatos = async (req, res) => {

    try {

        const datos = await procesarHTML();

        res.status(200).json(datos);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });
    }
};

module.exports = { obtenerDatos };