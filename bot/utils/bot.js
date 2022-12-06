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
      const { priceLocation } = sites.filter((s) => s.name === site)[0];

      try {
        const price = await getPrice(url, site, priceLocation);

        const newHistory = {
          price,
        };

        updateHistory(_id, [...history, newHistory]);

        if (price < demandPrice) {
          // make a custom message
          const message = EmailTemplate(
            name,
            url,
            price,
            demandPrice,
            image,
            type
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
