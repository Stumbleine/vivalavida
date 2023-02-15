import { configureStore } from "@reduxjs/toolkit";
import AccountSlice from "./AccountSlice";
import AuthSlice from "./AuthSlice";
import SongSlice from "./SongSlice";
import PlayerSlice from "./PlayerSlice";
import SettingSlice from "./SettingSlice";

const localStorageMiddleware = ({ getState }) => {
  return (next) => (action) => {
    const result = next(action);
    const st = getState();
    const appState = {
      auth: st.auth,
      account: st.account,
      player: st.player,
    };
    localStorage.setItem("app", JSON.stringify(appState));
    return result;
  };
};

const reHydrateStore = () => {
  if (localStorage.getItem("app") !== null) {
    return JSON.parse(localStorage.getItem("app"));
  }
};

export default configureStore({
  reducer: {
    auth: AuthSlice,
    account: AccountSlice,
    song: SongSlice,
    player: PlayerSlice,
    setting: SettingSlice,
    // artist: artistSlice
    // users: UsersSlice,
    // album: albumSlice
  },
  middleware: (curryGetDefaultMiddleware) =>
    curryGetDefaultMiddleware().concat(localStorageMiddleware),
  preloadedState: reHydrateStore(),
});
