const puppeteer = require('puppeteer');
const fs = require('fs');
(async () => {
    const URL = 'https://rusoil.net/news'
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    const VEIWPORT = {width: 1920, height: 1080}
    await page.setViewport(VEIWPORT)
    await page.goto(URL);
    await page.screenshot({path: 'img.png'})

    let arr = await page.evaluate(()=> {
        let text = Array.from(document.querySelectorAll('.news-card__content'), el=> el.innerText)
        return Object.assign({}, text)
    })
    console.log(arr)
    let res = JSON.stringify(arr)
    fs.writeFileSync('result.json', res)
    await browser.close()
})();
// const puppeteer = require('puppeteer');

// (async () => {
//   // Launch the browser and open a new blank page
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();

//   // Navigate the page to a URL
//   await page.goto('https://developer.chrome.com/');

//   // Set screen size
//   await page.setViewport({width: 1080, height: 1024});

//   // Type into search box
//   await page.type('.devsite-search-field', 'automate beyond recorder');

//   // Wait and click on first result
//   const searchResultSelector = '.devsite-result-item-link';
//   await page.waitForSelector(searchResultSelector);
//   await page.click(searchResultSelector);

//   // Locate the full title with a unique string
//   const textSelector = await page.waitForSelector(
//     'text/Customize and automate'
//   );
//   const fullTitle = await textSelector?.evaluate(el => el.textContent);

//   // Print the full title
//   console.log('The title of this blog post is "%s".', fullTitle);

//   await browser.close();
// })();