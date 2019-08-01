/*import { all, takeLatest } from "redux-saga/effects";

import { Types as PlaylistsTypes } from "../ducks/playlists";

import { getPlaylists } from "./playlists";

export default function* rootSaga() {
  yield all([takeLatest(PlaylistsTypes.GET_REQUEST, getPlaylists)]);
}*/

import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([]);
}
