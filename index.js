const puppeteer = require('puppeteer');
const cron = require('node-cron');

const url = 'https://www.hometalk.com/38108472/homemade-gym-part-i-olympic-rings?utm_source=pinterest&utm_medium=syndication&utm_campaign=dttah&date=20201228&ps=soc_btn&utm_cover_photo=4983181&utm_syndication_post=158851';
const url2 = 'https://www.hometalk.com/42035283/garden-bench-with-plants-plots-simple-build?utm_source=pinterest&utm_medium=syndication&utm_campaign=dttah&date=20201228&ps=soc_btn&utm_cover_photo=43508&utm_syndication_post=154468';
const url3 = 'https://www.hometalk.com/43288796/up-cycled-ugly-black-macetas-de-flores?utm_source=pinterest&utm_medium=syndication&utm_campaign=dttah&date=20201228&ps=soc_btn&utm_cover_photo=49118&utm_syndication_post=207536'
const url4 = 'https://www.hometalk.com/17250743/green-toilet-bowl-cleaner?utm_source=pinterest&utm_medium=syndication&utm_campaign=dttah&date=20201228&ps=syn_soc&utm_syndication_post=292408&utm_media=3425339'
const url5 = 'https://www.hometalk.com/8933087/how-to-upcycle-cheap-flower-pots?utm_source=pinterest&utm_medium=syndication&utm_campaign=dttah&date=20201228&ps=soc_btn&utm_cover_photo=78059&utm_syndication_post=158382'

const sleep = duration => new Promise(resolve => setTimeout(resolve, duration));

async function run () {
  console.log('started');
  const browser = await puppeteer.launch();
  const context = await browser.createIncognitoBrowserContext();

  let page = await context.newPage();
  await page.goto(url);
  await sleep(1500);
//   await page.screenshot({ path: `screenshots/${new Date().getTime().toString()}.png` });

  page = await context.newPage();
  await page.goto(url2);
  await sleep(1500);
//   await page.screenshot({ path: `screenshots/${new Date().getTime().toString()}.png` });

  page = await context.newPage();
  await page.goto(url3);
  await sleep(1500);
//   await page.screenshot({ path: `screenshots/${new Date().getTime().toString()}.png` });

  page = await context.newPage();
  await page.goto(url4);
  await sleep(1500);
//   await page.screenshot({ path: `screenshots/${new Date().getTime().toString()}.png` });

  page = await context.newPage();
  await page.goto(url5);
  await sleep(1500);
//   await page.screenshot({ path: `screenshots/${new Date().getTime().toString()}.png` });


  page = await context.newPage();
  await page.goto(url);
  await sleep(1500);
//   await page.screenshot({ path: `screenshots/${new Date().getTime().toString()}.png` });

  page = await context.newPage();
  await page.goto(url2);
  await sleep(1500);
//   await page.screenshot({ path: `screenshots/${new Date().getTime().toString()}.png` });

  page = await context.newPage();
  await page.goto(url3);
  await sleep(1500);
//   await page.screenshot({ path: `screenshots/${new Date().getTime().toString()}.png` });

  page = await context.newPage();
  await page.goto(url4);
  await sleep(1500);
//   await page.screenshot({ path: `screenshots/${new Date().getTime().toString()}.png` });


  page = await context.newPage();
  await page.goto(url5);
  await sleep(1500);
//   await page.screenshot({ path: `screenshots/${new Date().getTime().toString()}.png` });

  browser.close();
  console.log('ended');
}

cron.schedule('* * * * *', run);
