// email mhasan.meet@gmail.com
// password #Frj5nHBFH!ZJmqP
// Goto login page
// https://www.startech.com.bd/account/login
// email selector #input-email
// password selector #input-password
// click login
// verify login page by selector
// take screenshot

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.waitFor(2000);
  await page.goto('https://www.startech.com.bd/account/login');

  await page.waitFor(2000);
  await page.type("#input-email", "mhasan.meet@gmail.com");

  await page.waitFor(2000);
  await page.type("#input-password", "Frj5nHBFH!ZJmqP");

  await page.waitFor(2000);
  await page.click('.btn');

  await page.waitFor(2000);
  await page.waitForSelector('.hidden-xs', { visible: true });

  await page.screenshot({ path: 'schrenshots/pic.png' });

  await browser.close();
})();
