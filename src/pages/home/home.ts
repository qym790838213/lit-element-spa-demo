import {LitElement,html,property,customElement} from 'lit-element';
import styles from './home.less';
import './news-list';

@customElement('home-page')
export default class Home extends LitElement {
    shadowRoot:any;
    constructor(){
        super()
        
    }

    @property()
    title="Home";
    dataList = <any>[];
    
    getData(){
        let oldDataList = this.dataList
        let id = oldDataList.length + 1;
        oldDataList.concat({ id, title: `title${id}`, content: `cotent${id}`, dateStr: '2019/05/04' })
        this.dataList = oldDataList.concat({ id, title: `title${id}`, content: `cotent${id}`, dateStr: '2019/05/04' })
        this.requestUpdate();
    }
    render(){
        return html`
        <style>
            ${styles}
        </style>
        <div class='wrapper'>
            <h2 class='title'>Welcome to HomePage</h2>
            <button @click=${()=>this.getData()}>get Data</button>
        </div>
        <new-list .dataList=${this.dataList}></new-list>
        `
    }
}
