const puppeteer = require("puppeteer");
require('dotenv').config();


// TODO - supply your input here
const username = process.env.UC_USERNAME; // UC username 
const password = process.env.UC_PASSWORD; // UC password
const positionsToRank = 10; // The number of positions to rank in one go
// The ELCE PAL url where the script can start ranking
const url = "https://webapps2.uc.edu/elce/Student/Position";


async function rank() {
  // Launch browser and go to desired page
  const browser = await puppeteer.launch({ headless: false });
  const page = (await browser.pages())[0];
  await page.goto(url);

  // Enter username and password
  await page.waitForSelector("#password");
  await page.waitForSelector("#username");
  await page.type("#username", username);
  await page.type("#password", password);
  // Click login
  await page.click(".btn.btn-block.btn-lg");

  // ...
  // This is where you check your DUO Mobile app to accept push notification
  // Once that is done, the code below will run
  // ...


  // Query selectors for page  
  const rankButtonSelector = "td .btn.btn-danger.btn-md"
  const saveButtonSelector = "#saveButton"
  const veryInterestedSelector = "#PositionRankId_2"

  // Make sure rank button is present on page and set conditions
  await page.waitForSelector(rankButtonSelector);
  let hasRankButton = page.$(rankButtonSelector);
  let ranked = 0;

  // Start ranking
  while (hasRankButton && ranked < positionsToRank) {

    await page.click(rankButtonSelector); // click rank
    await page.waitForSelector(saveButtonSelector); // Wait for save button to appear
    await page.click(veryInterestedSelector); // click very interested
    await page.click(saveButtonSelector); // click save

    // Wait for rank button to appear and update conditions
    await page.waitForSelector(rankButtonSelector); 
    hasRankButton = page.$(rankButtonSelector);
    ranked += 1;
  }

  // Close browser after 20 seconds (if you want you can close it immediately by clicking 'x')
  await page.evaluate(async () => {
    console.log('Ranking automation completed.')
    console.log('Closing browser in 20 seconds.')
  })
  setTimeout(async () => {
    await page.evaluate(() => {alert('Close browser')})
    await browser.close();
  }, 20000)
}


rank();