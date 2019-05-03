import { LitElement, html, customElement, property} from 'lit-element';
import { queryParams} from '@/utils/util.js';
@customElement('news-detail')
class NewsDetail extends LitElement{
    constructor(){
        super();
        let params:any = queryParams();
        this.id = params.id;
    }
    @property()
    id:string='';

    render(){
        return html`
            <div>News:${this.id} title${this.id} content${this.id}</div>
        `
    }
}
