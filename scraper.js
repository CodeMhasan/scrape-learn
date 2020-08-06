// const puppeteer = require('puppeteer');

// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto('https://example.com');
//   await page.screenshot({path: 'example.png'});

//   await browser.close();
// })();

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false});
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
  await page.waitForSelector('.hidden-xs', {visible: true});

  await page.screenshot({path: 'schrenshots/pic.png'});

  await browser.close();
})();

//mhasan.meet@gmail.com
//Goto thia page
//https://bikroy.com/en/users/login?action=login&redirect-url=/
//input email #input_email
//input password #Frj5nHBFH!ZJmqP
//click login .gtn_email_login
//take screenshot
