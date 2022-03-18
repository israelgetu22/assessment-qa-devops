import { Builder, Capabilities, By } from "selenium-webdriver";

require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeEach(async () => {
  driver.get("http://localhost:3000/");
});

afterAll(async () => {
  driver.quit();
});

test("Title shows up when page loads", async () => {
  const title = await driver.findElement(By.id("title"));
  const displayed = await title.isDisplayed();
  expect(displayed).toBe(true);
});

// test("Draw button displays", async () => {
//   const title = await driver.findElement(By.id("choices"));
//   const displayed = await title.isDisplayed();

//   expect(displayed).toBe(true);
//   await driver.sleep(5000);
// });

test(" “Add to Duo”  ALLbutton displays", async () => {
  const allBtn = await driver.findElement(By.id("see-all"));
  await allBtn.click();
  await driver.sleep(5000);
});

//let displayedBot = await driver.findElement(By.xpath('(//div[@id="all-bots"]/div[@class="bot-card outline"])[1]'))

// test(" “Removed from Duo”, that it goes back to “choices", async () => {
//   const title = await driver.findElement(By.id("choices"));
//   const displayed = await title.isDisplayed();
//   //   await RemToDuo(driver);
//   expect(displayed).toBe(true);
//   await driver.sleep(5000);
// });
