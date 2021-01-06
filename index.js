const puppeteer = require('puppeteer');
const cron = require('node-cron');

const urls = [
  'https://www.hometalk.com/38108472/homemade-gym-part-i-olympic-rings?utm_source=pinterest&utm_medium=syndication&utm_campaign=dttah&date=20201228&ps=soc_btn&utm_cover_photo=4983181&utm_syndication_post=158851',
  'https://www.hometalk.com/42035283/garden-bench-with-plants-plots-simple-build?utm_source=pinterest&utm_medium=syndication&utm_campaign=dttah&date=20201228&ps=soc_btn&utm_cover_photo=43508&utm_syndication_post=154468',
  'https://www.hometalk.com/43288796/up-cycled-ugly-black-macetas-de-flores?utm_source=pinterest&utm_medium=syndication&utm_campaign=dttah&date=20201228&ps=soc_btn&utm_cover_photo=49118&utm_syndication_post=207536',
  'https://www.hometalk.com/17250743/green-toilet-bowl-cleaner?utm_source=pinterest&utm_medium=syndication&utm_campaign=dttah&date=20201228&ps=syn_soc&utm_syndication_post=292408&utm_media=3425339',
  'https://www.hometalk.com/8933087/how-to-upcycle-cheap-flower-pots?utm_source=pinterest&utm_medium=syndication&utm_campaign=dttah&date=20201228&ps=soc_btn&utm_cover_photo=78059&utm_syndication_post=158382',
]
// const sleep = duration => new Promise(resolve => setTimeout(resolve, duration));

const browserPromise = puppeteer.launch({
  args: [
    '--no-sandbox'
  ],
});

async function run () {
  console.log('started');

  const browser = await browserPromise;
  const context = await browser.createIncognitoBrowserContext();
  const startTime = new Date().getTime();
  const page = await context.newPage();
  let i = 0;
  while (startTime + 60000 > new Date().getTime()) {
    i++;
    // console.log(60 - ((new Date().getTime() - startTime) / 1000))
    const url = urls[Math.floor(Math.random() * urls.length)];

    await page.goto(url);
  }

  context.close();
  console.log(i);
  console.log('ended');
}

cron.schedule('*/2 * * * *', run);
