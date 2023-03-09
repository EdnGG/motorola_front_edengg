import SearchResult from '@/pages/SearchResult'

export default [{
    path: '/search_result/:search',
    name: 'searchresult',
    meta: {
        layout: 'default',
        translation: ['searchresult']
    },
    component: SearchResult
}]
