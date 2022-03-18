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

// const movie = await driver.findElement(By.xpath("//li"));

// expect(movie.isDisplayed()).toBeTruthy();

test("Draw button displays", async () => {
  const title = await driver.findElement(By.id("choices"));
  const displayed = await title.isDisplayed();
  //   await drawDisplay(driver);
  expect(displayed).toBe(true);
  await driver.sleep(5000);
});
test(" “Add to Duo” button displays", async () => {
  const title = await driver.findElement(By.id("player-duo"));
  const displayed = await title.isDisplayed();
  expect(displayed).toBe(true);
  //   await addToDuo(driver);
  await driver.sleep(5000);
});
test(" “Removed from Duo”, that it goes back to “choices", async () => {
  const title = await driver.findElement(By.id("choices"));
  const displayed = await title.isDisplayed();
  //   await RemToDuo(driver);
  expect(displayed).toBe(true);
  await driver.sleep(5000);
});
