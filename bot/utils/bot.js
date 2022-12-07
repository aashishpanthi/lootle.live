import {
  getAllTracks,
  getAllSites,
  updateHistory,
  updateStatus,
} from "./functions.js";
import getPrice from "./fetchPrice.js";
import sendMail from "./sendMail.js";
import EmailTemplate from "./emailTemplate.js";

const runBot = async () => {
  try {
    const tracks = await getAllTracks();
    const sites = await getAllSites();

    tracks.map(async (track) => {
      const { _id, url, site, demandPrice, history, user, type, name, image } =
        track;
      const { priceLocation, currency } = sites.filter(
        (s) => s.name === site
      )[0];

      try {
        const price = await getPrice(url, priceLocation, site);

        const newHistory = {
          price,
        };

        updateHistory(_id, [...history, newHistory]);

        let currencySymbol = "";
        if (currency === "INR") {
          currencySymbol = "₹";
        } else if (currency === "USD") {
          currencySymbol = "$";
        } else if (currency === "EUR") {
          currencySymbol = "€";
        } else if (currency === "GBP") {
          currencySymbol = "£";
        } else if (currency === "NPR") {
          currencySymbol = "रु";
        } else {
          currencySymbol = currency;
        }

        if (price < demandPrice) {
          // make a custom message
          const message = EmailTemplate(
            name,
            url,
            price,
            demandPrice,
            image,
            type,
            currencySymbol
          );

          const titleName =
            name.length > 35 ? `${name.substring(0, 35)}...` : name;

          //mail the user
          sendMail(
            user,
            `Hurry up! The ${type} price of ${titleName} is low`,
            message
          );

          updateStatus(_id, true); // if mail is sent
        }
      } catch (error) {
        console.log(error);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export default runBot;
