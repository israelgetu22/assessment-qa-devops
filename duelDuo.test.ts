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

test(" ALLbutton is Clicked", async () => {
  let allBtn = await driver.findElement(By.id("see-all"));
  await allBtn.click();

  let displayedBot = await driver.findElement(
    By.xpath('(//div[@id="all-bots"]/div[@class="bot-card outline"])[1]')
  );
  const displayed = await displayedBot.isDisplayed();
  expect(displayed).toBe(true);
  await driver.sleep(5000);
});

test("draw button shows up", async () => {
  const drawBtn = await driver.findElement(By.id("draw"));
  expect(drawBtn.isDisplayed).toBeTruthy();
  await driver.sleep(1000);
});

test("clicking the Draw button displays the div", async () => {
  const drawBtn = await driver.findElement(By.id("draw"));
  drawBtn.click();
  const choices = await driver.findElement(By.id("choices"));
  expect(choices.isDisplayed).toBeTruthy();
  await driver.sleep(1000);
});
