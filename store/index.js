import Vuex from 'vuex'

import global from '@/store/global'

const createStore = _ => {
    return new Vuex.Store({
        modules: {},
        ...global
    })
}

export default createStore
