import fetchPuppeteer from "./fetchPuppeteer.js";
import { fetchCheerio } from "./fetchCheerio.js";

const fetchPrice = async (url, priceLocation, siteName) => {
  try {
    let price;
    if (
      siteName == "cnbc.com" ||
      siteName == "amazon.com" ||
      siteName == "flipkart.com" ||
      siteName == "amazon.in" ||
      siteName == "amazon.co.uk" ||
      siteName == "walmart.com"
    ) {
      const returnedPrice = await fetchCheerio(url, priceLocation);

      price = returnedPrice;
    } else {
      const returnedPrice = await fetchPuppeteer(url, priceLocation);

      price = returnedPrice;
    }

    if (siteName === "daraz.com.np") {
      price = price.substring(4);
    }

    price = price.replace(/([$,£₹A-Za-z])/g, "").trim(); //Removing all the special characters

    const priceArray = `${price}`.split(".");
    if (priceArray.length > 1) {
      price = Number(`${priceArray[0]}.${priceArray[1].substring(0, 2)}`); //Validating the price
    }

    // return current price
    return price;
  } catch (error) {
    throw error;
  }
};

export default fetchPrice;
