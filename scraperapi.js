const axios = require ('axios')
const cheerio = require('cheerio')
const url = 'https://www.bbc.co.uk/sport/football';
const headlines = []
axios(url)
.then(response => {
  const html = response.data;
  const $ = cheerio.load(html)
  const newPrice = $('.gs-c-promo-heading').text()
  const seperatedTitles = newPrice.split(/(?<!\s)(?=[A-Z])/)
  seperatedTitles.forEach(title => {
    headlines.push({
      'title': title
    })
  })
  console.log(headlines)
})
.catch(console.error)