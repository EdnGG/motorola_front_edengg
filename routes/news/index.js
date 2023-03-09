import News from '@/pages/News'

export default [
    {
        path: '/news',
        name: 'news',
        meta: {
            layout: 'default',
            translation: ['news']
        },
        component: News
    }
]
