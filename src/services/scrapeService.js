const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

const procesarHTML = async () => {

    const rutaHTML = path.join(__dirname, '../data/index.html');

    const html = fs.readFileSync(rutaHTML, 'utf-8');

    const $ = cheerio.load(html);

    const productos = [];

    $('.producto').each((i, el) => {

        productos.push({
            titulo: $(el).find('.titulo').text(),
            precio: $(el).find('.precio').text(),
            stock: $(el).find('.stock').text()
        });
    });

    if (productos.length === 0) {
        throw new Error('No se encontraron productos');
    }

    return productos;
};

module.exports = { procesarHTML };