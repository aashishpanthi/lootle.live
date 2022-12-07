import axios from "axios";
import * as cheerio from "cheerio";

const fetchPrice = async (url, site, priceLocation) => {
  try {
    const { data } = await axios.get(url, {
      headers: {
        Accept: "application/json",
        "User-Agent": "axios 0.21.1",
      },
    });

    const $ = cheerio.load(data);

    let price = $(priceLocation)
      .text()
      .replace(/([$,₹])/g, "");

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
