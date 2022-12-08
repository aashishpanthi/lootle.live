import axios from "axios";
import * as cheerio from "cheerio";

export const fetchCheerio = async (URL, priceLocation) => {
  try {
    const { data } = await axios.get(URL, {
      headers: {
        Accept: "application/json",
        "User-Agent": "axios 0.21.1",
      },
    });

    const $ = cheerio.load(data);

    let price = $(priceLocation)
      .text()
      .replace(/([$,₹£A-Za-z])/g, "")
      .trim();

    return price;
  } catch (error) {
    throw error;
  }
};
