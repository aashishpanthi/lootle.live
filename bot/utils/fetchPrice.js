import fetchPuppeteer from "./fetchPuppeteer.js";

const fetchPrice = async (url, priceLocation, siteName) => {
  try {
    const returnedPrice = await fetchPuppeteer(url, priceLocation);

    let price = returnedPrice;

    if (siteName === "daraz.com.np") {
      price = returnedPrice.substring(4);
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
