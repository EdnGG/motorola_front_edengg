import LocalStorage from "localStorage";
import CONFIG from "@/plugins/common/page.config.js";
import JWT from "../utils/JWT";
import variables from "../utils/variables";

// import UserModel1 from "@/models/userModel.js";
import loginUser from "@/controllers/user.js";

export default {
    namespaced: true,
    state: {
        user: null,
        language: "en",
        alert: {
            open: false,
            message: "Message",
            variant: "success",
            color_text: "white",
            timeout: null,
        },
        loading: {
            show: false,
            title: "Loading",
            subtitle: "wait a moment...",
        },
        searching: null,
        pressbox: null,
        location: null,
        ip: null,
        preload_data: null,
    },
    getters: {
        ip(state) {
            return state.ip;
        },
        language(state) {
            return state.language;
        },
        getAlert: (state) => {
            return state.alert;
        },
        getLoad(state) {
            return state.loading;
        },
        getSearching(state) {
            return state.searching;
        },
        getSession: (state) => {
            // let sesion = localStorage.getItem('PressBox@session')
            // sesion = JSON.parse(sesion)
            // return sesion
        },
        getHeaders: (state) => {
            let headers = {
                ...CONFIG.server[CONFIG.env].headers,
            };

            if (LocalStorage.getItem("location") !== null) {
                headers.location = JSON.parse(
                    LocalStorage.getItem("location")
                ).location;
                localStorage.setItem("headers", JSON.stringify(headers));
            }

            return headers;
        },
        getPressbox: (state) => {
            return state.pressbox;
        },
        getLocation() {
            let location = JSON.parse(
                LocalStorage.getItem("location")
            ).location;
            location = JWT.verify(variables.seed, location);
            return location;
        },
        getPreloadData(state) {
            return state.preload_data;
        },
    },
    mutations: {
        setIP(state, ip) {
            state.ip = ip;
        },
        setLanguage(state, language) {
            state.language = language;
        },
        setAlert: (state, new_alert) => {
            state.alert.open = new_alert.open;
            state.alert.message =
                new_alert.message !== undefined ? new_alert.message : "";
            state.alert.variant =
                new_alert.variant !== undefined ? new_alert.variant : "success";
            state.alert.color_text =
                new_alert.color_text !== undefined
                    ? new_alert.color_text
                    : "white";
            state.alert.timeout =
                new_alert.timeout !== undefined ? new_alert.timeout : 2000;

            if (state.alert.timeout !== null) {
                setTimeout(() => {
                    state.alert.open = false;
                }, state.alert.timeout);
            }
        },
        setLoad(state, new_load) {
            state.loading.show = new_load.show;
            state.loading.title =
                new_load.title !== undefined ? new_load.title : "";
            state.loading.subtitle =
                new_load.subtitle !== undefined ? new_load.subtitle : "";
            state.loading.timeout =
                new_load.timeout !== undefined ? new_load.timeout : null;

            if (state.loading.timeout !== null) {
                setTimeout(() => {
                    state.loading.show = false;
                }, state.loading.timeout);
            }
        },
        setSearching(state, searching) {
            state.searching = searching;
        },
        setSession: (state, new_data) => {
            // localStorage.setItem('PressBox@session', JSON.stringify(new_data))
        },
        setPressbox(state, pressbox) {
            state.pressbox = pressbox;
        },
        setPreloadData(state, data) {
            state.preload_data = data;
        },
        // setUser(state, user) {
        //     state.user = user;
        // },
    },
    actions: {
        // async createUser({ commit }, payload) {
        //     try {
        //         const user = await loginUser(payload);
        //         commit("setUser", user);
        //     } catch (error) {
        //         console.log("Error en actions: ", error.message);
        //     }
        // },
    },
};
