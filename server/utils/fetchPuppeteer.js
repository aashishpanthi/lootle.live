import puppeteer from "puppeteer";

export default async function fetchPuppeteer(
  url,
  priceLocation,
  nameLocation,
  imageLocation
) {
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
    const data = await page.evaluate(
      (nameLocation, priceLocation, imageLocation) => {
        const name = document.querySelector(nameLocation).innerText;
        const price = document.querySelector(priceLocation).innerText;
        const image = document.querySelector(imageLocation).src;
        return { name, price, image };
      },
      nameLocation,
      priceLocation,
      imageLocation
    );
    await browser.close();
    return data;
  } catch (error) {
    throw error;
  }
}
