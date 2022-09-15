import { combineReducers, legacy_createStore} from "redux"
import dialoguesReducer from "./dialogues-reducer"
import profileReducer from "./profile-reducer"
import sidebarReducer from "./sidebar-reducer"



let reducers = combineReducers({
    profilePage:profileReducer,
    dialoguesPage:dialoguesReducer,
    sidebarPage:sidebarReducer
})

let store = legacy_createStore(reducers)


export default store