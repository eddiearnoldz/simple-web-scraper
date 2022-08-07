const axios = require ('axios')
const cheerio = require('cheerio')
const url = 'https://www.turmerry.com/collections/organic-cotton-sheet-sets/products/percale-natural-color-organic-sheet-sets';
axios(url)
.then(response => {
  const html = response.data;
  const $ = cheerio.load(html)
  const newPrice = $('.new-price').text()
  console.log(newPrice)
})
.catch(console.error)