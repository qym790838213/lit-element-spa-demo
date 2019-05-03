import {html} from 'lit-html';
import '@/pages/home/home'
import '@/pages/news/news-detail'
const router = [
    {
        path: '/',
        component: html`<home-page></home-page>`,
        cache:true,
    },
    {
        path: '/news',
        component: html`<news-detail></news-detail>`,
    },
]
export default router;