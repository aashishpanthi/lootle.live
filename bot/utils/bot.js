import { getAllTracks, getAllSites, updateHistory } from "./functions.js";
import getPrice from "./fetchPrice.js";

const runBot = async () => {
  try {
    const tracks = await getAllTracks();
    const sites = await getAllSites();

    tracks.map(async (track) => {
      const { _id, url, site, history } = track;
      const { priceLocation } = sites.filter((s) => s.name === site)[0];

      try {
        const price = await getPrice(url, site, priceLocation);

        const newHistory = {
          price,
        };

        updateHistory(_id, [...history, newHistory]);
      } catch (error) {
        console.log(error);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export default runBot;
