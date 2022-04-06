import { createStore } from "redux";
import { mainReducer } from "./mainReducer";
export type storeType = ReturnType<typeof mainReducer>;
export const store = createStore(mainReducer);
