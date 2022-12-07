import { fetchCheerio } from "./fetchCheerio.js";
import fetchPuppeteer from "./fetchPuppeteer.js";

export const getPNI = async (URL, site) => {
  const { priceLocation, nameLocation, imageLocation, type } = site;

  try {
    // const {
    //   name,
    //   price: returnedPrice,
    //   image,
    // } = await fetchCheerio(
    //   URL,
    //   priceLocation,
    //   nameLocation,
    //   imageLocation,
    //   type
    // );

    const {
      name,
      price: returnedPrice,
      image,
    } = await fetchPuppeteer(URL, priceLocation, nameLocation, imageLocation);

    let price = returnedPrice.replace(/([$,₹A-Za-z])/g, "").trim(); //Removing all the special characters
    const priceArray = `${price}`.split(".");
    if (priceArray.length > 1) {
      price = Number(`${priceArray[0]}.${priceArray[1].substring(0, 2)}`); //Validating the price
    }

    return { price, name, image };
  } catch (error) {
    throw error;
  }
};
