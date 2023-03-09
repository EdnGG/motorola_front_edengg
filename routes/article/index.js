
import Article from '@/pages/Article'
import ArticlePreview from '@/pages/ArticlePreview'

export default [
    {
        path: '/article/:title',
        name: 'article',
        meta: {
            layout: 'default',
            translation: ['article']
        },
        component: Article
    },
    {
        path: '/article-preview/:title',
        name: 'article_preview',
        meta: {
            layout: 'default',
            translation: ['article']
        },
        component: ArticlePreview
    },
    // {
    //     path: '/article/:id/preview',
    //     name: 'article',
    //     meta: {
    //         layout: 'default',
    //         translation: ['article']
    //     },
    //     component: () => import( /* webpackChunkName: "js/article" */ 'VIEWS/ArticlePreview')
    // }
]
