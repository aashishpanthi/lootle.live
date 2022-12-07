import puppeteer from "puppeteer";

export default async function fetchPuppeteer(url, priceLocation) {
  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox"],
      windowSize: {
        width: 1920,
        height: 1080,
      },
    });
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "networkidle2" });
    const data = await page.evaluate((priceLocation) => {
      const price = document.querySelector(priceLocation).innerText;
      return price;
    }, priceLocation);
    await browser.close();
    return data;
  } catch (error) {
    throw error;
  }
}
