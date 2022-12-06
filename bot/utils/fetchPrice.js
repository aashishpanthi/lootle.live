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

    if (site == "flipkart.com") {
      try {
        const { data } = await axios.get(
          "https://api.exchangerate.host/convert?from=INR&to=USD"
        );

        price = price * data.result;
      } catch (error) {
        console.log(error);
      }
    }

    const priceArray = `${price}`.split(".");
    price = Number(`${priceArray[0]}.${priceArray[1].substring(0, 3)}`); //Validating the price

    // return current price
    return price;
  } catch (error) {
    throw error;
  }
};

export default fetchPrice;
