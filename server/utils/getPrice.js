import axios from "axios";
import * as cheerio from "cheerio";

export const getPNI = async (URL, site) => {
  const { priceLocation, nameLocation, imageLocation, type } = site;

  try {
    const { data } = await axios.get(URL, {
      headers: {
        Accept: "application/json",
        "User-Agent": "axios 0.21.1",
      },
    });

    const $ = cheerio.load(data);
    let image;

    let name = $(nameLocation)
      .text()
      .trim()
      .replace(/(<([^>]+)>)/gi, "");

    let price = $(priceLocation)
      .text()
      .replace(/([$,₹])/g, "");

    if (type === "product") {
      image = $(imageLocation).attr("src");
    }

    const priceArray = `${price}`.split(".");
    console.log(priceArray);
    if (priceArray.length > 1) {
      price = Number(`${priceArray[0]}.${priceArray[1].substring(0, 2)}`); //Validating the price
    }

    return { price, name, image };
  } catch (error) {
    throw error;
  }
};
