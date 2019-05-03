import {html,render} from 'lit-html';
import '@/components/router/index';
import {createBrowserHistory} from 'history';
import routeList from '@/config/routes.js';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { cache } from 'lit-html/directives/cache.js';
window.appHistory = createBrowserHistory();

const unListen = appHistory.listen(() => SwitchRouter())
let newRouteList = routeList.map(item=>{
    item.cacheComponent = item.component
    item.component = unsafeHTML(item.component.getHTML())
    return item;
})
const root = document.getElementById('root');
const SwitchRouter =  ()=>{
    for (let route of newRouteList){
        if (appHistory.location.pathname === route.path){
            render(html`${cache(route.cache ? route.cacheComponent : route.component)}`, root)
            break;
        }
      
    }
}
SwitchRouter()