import {
  getAllTracks,
  getAllSites,
  updateHistory,
  updateStatus,
} from "./functions.js";
import getPrice from "./fetchPrice.js";
import sendMail from "./sendMail.js";

const runBot = async () => {
  try {
    const tracks = await getAllTracks();
    const sites = await getAllSites();

    tracks.map(async (track) => {
      const { _id, url, site, demandPrice, history, user, type, name } = track;
      const { priceLocation } = sites.filter((s) => s.name === site)[0];

      try {
        const price = await getPrice(url, site, priceLocation);

        const newHistory = {
          price,
        };

        updateHistory(_id, [...history, newHistory]);

        if (price < demandPrice) {
          // make a custom message
          const message = `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta http-equiv="x-ua-compatible" content="ie=edge">
            <title>Welcome Email</title>
          </head>
          <body>
            <h2>The price of the ${type} you were tracking on <a href="https://lootle.live">lootle</a> is now in your budget. </h2>
            <br />
            <strong>${
              type.charAt(0).toUpperCase() + type.slice(1)
            } name:</strong> ${name}
            <br />
            <strong>Current price:</strong> $${price}
            <br />
            <strong>Your entered price:</strong> $${demandPrice}
            <br />
            <br />
            
            You can visit now and buy the ${type} <a href="${url}">here</a> before the price rises up. 
            
            <br />
            <br />
            If the above link doesn't work then you can copy and paste this link: 
            ${url}
            <br />
            <br />
  
            Regards, <br />
            <strong>Lootle Team <br />
            <a href="https://lootle.live">Lootle.live</a>, Buy everything cheap​</strong>
            <br />
            <small>This e-mail is auto generated from your lootle account. Please don't reply to this email as noone is watching over it. If you think this is SPAM, please report to <a href="mailto:aashish@lootle.live">aashish@lootle.live</a> for immediate action.</small>
          </body>
        </html>
          `;

          const titleName =
            name.length > 35 ? `${name.substring(0, 35)}...` : name;

          //mail the user
          sendMail(
            user,
            `Hurry up! The ${type}'s price of ${titleName} is low`,
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
