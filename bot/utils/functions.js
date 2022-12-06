import Track from "../models/TrackModel.js";
import Site from "../models/SiteModel.js";

// Get all Tracks
export const getAllTracks = async () => {
  try {
    const allTracks = await Track.find({ informed: false });
    return allTracks;
  } catch (error) {
    console.log(error);
  }
};

// Get all Sites
export const getAllSites = async () => {
  try {
    const allSites = await Site.find();
    return allSites;
  } catch (error) {
    console.log(error);
  }
};

// update history
export const updateHistory = async (_id, history) => {
  try {
    await Track.findOneAndUpdate(
      { _id },
      { history },
      { runValidators: true, returnNewDocument: true }
    );
    return true;
  } catch (error) {
    return false;
  }
};

// update informed status
export const updateStatus = async (_id, informed) => {
  try {
    await Track.findOneAndUpdate(
      { _id },
      { informed },
      { runValidators: true, returnNewDocument: true }
    );

    return true;
  } catch (error) {
    return false;
  }
};
