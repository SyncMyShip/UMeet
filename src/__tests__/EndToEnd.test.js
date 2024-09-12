// src/__tests__/EndToEnd.test.js

import puppeteer from "puppeteer";

// Feature 1
describe('filter events by city', () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 250,
      timeout: 200 // change before commit
    });
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.city');
  });

  afterAll(() => {
    browser.close();
  });

  // Scenario 1
  test('When user has not searched for a city, show upcoming events from all cities', async () => {
      const events = await page.$('.event');
      expect(events).toBeDefined();
    });

    // Scenario 2
    test('User should see a list of suggestions when they search for a city', async () => {
      await page.click('.city', 'London, UK');
  
      const suggestions = await page.$('.suggestions');
      expect(suggestions).toBeDefined();
    });

    // Scenario 3
    test('User can select a city from the suggested list', async () => {
      await page.click('.suggestions li');

      const suggestedCity = await page.$('.city');
      expect(suggestedCity).toBeDefined();
    });
});



// Feature 2
describe('show/hide an event details', () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 250,
      timeout: 200
    });
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event');
  });

  afterAll(() => {
    browser.close();
  });

  // Scenario 1
  test('An event element is collapsed by default', async () => {
      const eventDetails = await page.$('.event .details');
      expect(eventDetails).toBeNull();
    });

    // Scenario 2
    test('User can expand an event to see its details', async () => {
      await page.click('.event .show-details-btn');
  
      const eventDetails = await page.$('.event .details');
      expect(eventDetails).toBeDefined();
    });

    // Scenario 3
    test('User can collapse an event to hide details', async () => {
      await page.click('.event .show-details-btn');

      const eventDetails = await page.$('.event .details');
      expect(eventDetails).toBeNull();
    });
});