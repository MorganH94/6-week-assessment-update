const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });
});

describe("game functionality", () => {
  test("clicking the Draw button displays the div with id = 'choices'", () => {
    const drawButton = document.querySelector("#draw-button");
    const choicesDiv = document.querySelector("#choices");
    expect(choicesDiv.classList.contains("hidden")).toBe(true);
    drawButton.click();
    expect(choicesDiv.classList.contains("hidden")).toBe(false);
  });

  test("when a bot is 'Removed from Duo', it goes back to 'choices'", () => {
    const botToRemove = document.querySelector("#bot-1");
    const addBotButton = document.querySelector("#add-bot-1");
    const removeBotButton = document.querySelector("#remove-bot-1");
    const choicesDiv = document.querySelector("#choices");
    const playerDuoDiv = document.querySelector("#player-duo");
    addBotButton.click();
    expect(playerDuoDiv.contains(botToRemove)).toBe(true);
    removeBotButton.click();
    expect(choicesDiv.contains(botToRemove)).toBe(true);
  });
});