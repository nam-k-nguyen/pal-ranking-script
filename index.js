const puppeteer = require("puppeteer");
require('dotenv').config();
const fs = require("fs/promises");

var url4 = "https://webapps2.uc.edu/elce/Student/Position";

let username = process.env.UC_USERNAME;
let password = process.env.UC_PASSWORD;

async function scrape() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(url4);

  await page.screenshot({ path: "elce_pal_0.png" });

  await page.waitForSelector("#password");
  await page.waitForSelector("#username");

  await page.type("#username", username);
  await page.type("#password", password);
  await page.click(".btn.btn-block.btn-lg");

  await page.waitForSelector("td .btn.btn-danger.btn-md", { timeout: 100000 }).then(async () => {
    for (let i = 0; i < 20; i++) {
      await page.click("td .btn.btn-danger.btn-md"); // click rank
      await page.waitForSelector("#saveButton"); // wait for page load
      await page.click("#PositionRankId_2"); // very interested
      await page.click("#saveButton"); // save button
      await page.waitForSelector("td .btn.btn-danger.btn-md");
    }
    await page.screenshot({ path: "elce_pal.png", fullPage: true });
    await browser.close();
  });

}


console.log(username, password)