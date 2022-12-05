import axios from "axios";
import * as cheerio from "cheerio";

export const getPNI = async (URL, site) => {
  const { priceLocation, nameLocation, imageLocation, type } = site;

  try {
    console.log("Hi");
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

    console.log(name);

    let price = $(priceLocation)
      .text()
      .replace(/([$,₹])/g, "");

    if (site.name == "flipkart.com") {
      try {
        const { data } = await axios.get(
          "https://api.exchangerate.host/convert?from=INR&to=USD"
        );

        price = price * data.result;
      } catch (error) {
        console.log(error);
      }
    }

    if (type === "product") {
      image = $(imageLocation).attr("src");

      console.log(image);
    }

    const priceArray = `${price}`.split(".");
    price = Number(`${priceArray[0]}.${priceArray[1].substring(0, 3)}`); //Validating the price

    return { price, name, image };
  } catch (error) {
    throw error;
  }
};
