import { fetchCheerio } from "./fetchCheerio.js";
import fetchPuppeteer from "./fetchPuppeteer.js";

export const getPNI = async (URL, site) => {
  const {
    priceLocation,
    nameLocation,
    imageLocation,
    name: siteName,
    type,
  } = site;

  try {
    let price, name, image;
    if (
      type == "stock" ||
      siteName == "amazon.com" ||
      siteName == "flipkart.com" ||
      siteName == "amazon.in" ||
      siteName == "amazon.co.uk" ||
      siteName == "walmart.com"
    ) {
      const {
        name: returnedName,
        price: returnedPrice,
        image: returnedImage,
      } = await fetchCheerio(
        URL,
        priceLocation,
        nameLocation,
        imageLocation,
        type
      );

      name = returnedName.replace(/(\r\n|\n|\r)/gm, "").trim(); //Removing all the special characters
      price = returnedPrice;
      image = returnedImage;
    } else {
      const {
        name: returnedName,
        price: returnedPrice,
        image: returnedImage,
      } = await fetchPuppeteer(URL, priceLocation, nameLocation, imageLocation);

      price = returnedPrice;
      name = returnedName.replace(/(\r\n|\n|\r)/gm, "").trim(); //Removing all the special characters
      image = returnedImage;
    }

    if (siteName === "daraz.com.np") {
      price = price.substring(4);
    }

    price = price.replace(/([$,£₹A-Za-z])/g, "").trim(); //Removing all the special characters
    const priceArray = `${price}`.split(".");
    if (priceArray.length > 1) {
      price = Number(`${priceArray[0]}.${priceArray[1].substring(0, 2)}`); //Validating the price
    }

    return { price, name, image };
  } catch (error) {
    throw error;
  }
};
