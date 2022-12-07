import axios from "axios";
import * as cheerio from "cheerio";

export const fetchCheerio = async (
  URL,
  priceLocation,
  nameLocation,
  imageLocation,
  type
) => {
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
      .replace(/([$,₹£A-Za-z])/g, "")
      .trim();

    if (type === "product") {
      image = $(imageLocation).attr("src");
    }

    return { price, name, image };
  } catch (error) {
    throw error;
  }
};
