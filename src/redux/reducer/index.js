import { combineReducers } from "redux";
import { CakeReducer } from "./CakeReducer";
import { chocolateReducer } from "./ChocolateReducer";
import { icecreamReducer } from "./IcecreamReducer";

const rootReducer = combineReducers({CakeReducer , icecreamReducer , chocolateReducer})

export default rootReducer