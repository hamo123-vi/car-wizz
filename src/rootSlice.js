import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        action: "",
        oldpassword: "",
        office_name: "",
        office_id: "",
        yscroll: "",
        reppassword: "",
        warehouse: "",
        active_page: "pocetna",
        opened_submenu: "",
        role: "",
        www: "",
        add_item_name: "",
        wnot: [],
        quantity: "",
        item: "",
        item_obj: {},
        warehouses: [],
        items: [],
        users: [],
        offices: [],
        user: {},
        me: {}
    },

    reducers: {
        enterFirstname: (state, action) => {state.firstname = action.payload},
        enterLastname: (state, action) => {state.lastname = action.payload},
        enterEmail: (state, action) => {state.email = action.payload},
        enterPassword: (state, action) => {state.password = action.payload},
        enterAction: (state, action) => {state.action = action.payload},
        enterOldPassword: (state, action) => {state.oldpassword = action.payload},
        enterRepPassword: (state, action) => {state.reppassword = action.payload},
        enterMe: (state, action) => {state.me = action.payload},
        enterQ: (state, action) => {state.quantity = action.payload},
        enterAIN: (state, action) => {state.add_item_name = action.payload},
        enterWh: (state, action) => {state.warehouses = action.payload},
        enterRole: (state, action) => {state.role = action.payload},
        enterItems: (state, action) => {state.items = action.payload},
        enterWhS: (state, action) => {state.warehouse = action.payload},
        enterItemObj: (state, action) => {state.item_obj = action.payload},
        enterWhS: (state, action) => {state.www = action.payload},
        enterWWW: (state, action) => {state.wnot = action.payload},
        enterItem: (state, action) => {state.item = action.payload},
        enterUser: (state, action) => {state.user = action.payload},
        enterUsers: (state, action) => {state.users = action.payload},
        enterOffices: (state, action) => {state.offices = action.payload},
        enterOfficeName: (state, action) => {state.office_name = action.payload},
        enterOfficeId: (state, action) => {state.office_id = action.payload},
        enterActivePage: (state, action) => {state.active_page = action.payload},
        enterYScroll: (state, action) => {state.yscroll = action.payload},
        enterOpenedSubmenu: (state, action) => {state.opened_submenu = action.payload}
    }
});

export const reducer = rootSlice.reducer;

export const {enterFullname, enterUsername, enterEmail, enterPassword,
                enterOldPassword, enterRepPassword,enterMe, enterWh, enterWhS,
            enterUsers, enterUser, enterWnot, enterWWW, enterRole, enterAIN,
        enterItems, enterItem, enterQ, enterItemObj, enterAction, enterOfficeName,
        enterOfficeId, enterOffices, enterActivePage, enterYScroll, enterOpenedSubmenu} = rootSlice.actions