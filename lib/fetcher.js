const fetch = require('node-fetch')
const axios = require('axios')
const cheerio = require('cheerio')

exports.getBase64 = getBase64 = async (url) => {
    const response = await fetch(url, { headers: { 'User-Agent': 'okhttp/4.5.0' } });
    if (!response.ok) throw new Error(`unexpected response ${response.statusText}`);
    const buffer = await response.buffer();
    const videoBase64 = `data:${response.headers.get('content-type')};base64,` + buffer.toString('base64');
    if (buffer)
        return videoBase64;
};

exports.fetchJson = fetchJson = (url, options) => new Promise(async (resolve, reject) => {
    fetch(url, options)
        .then(response => response.json())
        .then(json => {
            // console.log(json)
            resolve(json)
        })
        .catch((err) => {
            reject(err)
        })
})

exports.fetchText = fetchText = (url, options) => new Promise(async (resolve, reject) => {
    fetch(url, options)
        .then(response => response.text())
        .then(text => {
            // console.log(text)
            resolve(text)
        })
        .catch((err) => {
            reject(err)
        })
})

exports.animek = (query) => {
    return new Promise((resolve, reject) => {
        axios.get(`https://www.anime-planet.com/anime/all?name=${query}`)
            .then(({
                data
            }) => {
                const hasil = []
                const $ = cheerio.load(data)
                $('#siteContainer > ul.cardDeck.cardGrid > li ').each(function (a, b) {
                        result = {
                            status: 200,
                            author: 'p',
                            judul: $(b).find('> a > h3').text(),
                            link: 'https://www.anime-planet.com' + $(b).find('> a').attr('href'),
                            thumbnail: 'https://www.anime-planet.com' + $(b).find('> a > div.crop > img').attr('src')
                        };
                        hasil.push(result);
                    });
                resolve(hasil)
            })
            .catch(reject)
    })
}