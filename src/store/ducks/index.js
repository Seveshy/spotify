import { combineReducers } from "redux";

import playlists from "./playlists";
import playlistsDetails from "./playlistDetails";

export default combineReducers({
  playlists,
  playlistsDetails
});
