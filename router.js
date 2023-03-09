import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/routes/home/index'
import News from '@/routes/news/index'
import Article from '@/routes/article/index'
import PressBox from '@/routes/pressbox/index'
import PressBoxdDownload from '@/routes/pressboxdownload/index'
import Auth from '@/routes/auth/index'
import SearchResult from '@/routes/searchresult/index'
import Maintenance from '@/routes/maintenance/index'

Vue.use(Router)


export function createRouter() {

    const routes = [
        ...Home,
        ...News,
        ...Article,
        ...PressBox,
        ...PressBoxdDownload,
        ...Auth,
        ...SearchResult,
        ...Maintenance

    ]

    return new Router({
        mode: 'history',
        routes
    })
}
