const puppeteer = require("puppeteer");
const mail = "";
const pass = "";
const To_input = "";
const message = "";

(async function(){
 let browser = await puppeteer.launch({headless: false, defaultViewport: null, args: ['--start-fullscreen']});
 let page = await browser.newPage();
 
 await page.goto("https://www.instagram.com/");
 //console.log("Insta login page opened");
 await page.waitForSelector('input[name="username"]');
 await page.type('input[name="username"]', mail, {delay : 70});
 //console.log("Mail-id entered");
 //await page.waitForFileChooser('input[aria-label="Password"]');
 await page.type('input[aria-label="Password"]', pass, {delay : 70});
 //console.log("Password typed succesfully");
 await page.click(".sqdOP.L3NKy.y3zKF");
 //console.log("Successfully logged in into your account");

 await page.waitForSelector(".olLwo");  //waiting for save info page
 await page.click(".sqdOP.yWX7d.y3zKF"); //save info page "Not now" has been clicked

 await page.waitForSelector(".aOOlW.HoLwm"); //waiting for turn on/off notification page
 await page.click(".aOOlW.HoLwm"); //Turn of notification page "Not now" has been clicked

 await page.waitForSelector('svg[aria-label="Messenger"]');
 await page.click('svg[aria-label="Messenger"]'); //chat box icon

 await page.waitForSelector(".sqdOP.L3NKy.y3zKF");
 await page.click(".sqdOP.L3NKy.y3zKF"); //"Send message" button clicked

 await page. waitForSelector(".j_2Hd.uMkC7.M5V28");
 await page.type(".j_2Hd.uMkC7.M5V28", To_input); //typing in To-bar

 await page.waitForSelector('svg[aria-label="Toggle selection"]'); 
 await page.click('svg[aria-label="Toggle selection"]'); //putting a tick on the circle

 await page.waitForSelector(".rIacr");
 await page.click(".rIacr"); //clicking on the "Next" tab

 await page.waitForSelector('textarea[placeholder="Message..."]');
 await page.type('textarea[placeholder="Message..."]', message, {delay: 70}); //Write a message in placeholder/textarea

 await page.keyboard.press("Enter");

})();