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
  await page.goto('https://bikroy.com/en/users/login?action=login&redirect-url=/');
  await page.waitFor(2000);
  await page.type("#input_email", "jemafad894@ofmailer.net");
  await page.waitFor(2000);
  await page.type("#input_password", "@jQNqDz-s?#7Fu9");
  await page.waitFor(2000);
  await page.click('.gtm-email-login');
  await page.waitFor(2000);
  await page.waitForSelector('.hide-for-inactive', {visible: true});

  await page.screenshot({path: 'schrenshots/$.png'});

  await browser.close();
})();

//jemafad894@ofmailer.net
//Goto thia page
//https://bikroy.com/en/users/login?action=login&redirect-url=/
//input email #input_email
//input password #input_password
//click login .gtn_email_login
//take screenshot
