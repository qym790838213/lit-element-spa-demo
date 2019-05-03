import { LitElement, html, customElement, property } from 'lit-element';
import { repeat } from 'lit-html/directives/repeat';
import styles from './new-list.less';


interface DataItem {
    id: string;
    title?: string;
    content?: string;
    dateStr: string;
}

const NewItem = (item: DataItem) => html`

<lit-link to="/news?id=${item.id}">
    <div class='itemWrapper'>
        <div class='header'>
            <h2 class='title'>${item.title}</h2>
            <span class='date'>${item.dateStr}</span>
        </div>
        <p class='content'>${item.content}</p>
    </div>
</lit-link>`;

@customElement('new-list')
class NewList extends LitElement {

    @property()
    dataList: DataItem[] = [];

    render() {
        return html`
        <style>${styles}</style>
            ${repeat(
            this.dataList,
            (item, index) => item.id,
            item => NewItem(item)
        )}
        `;
    }
}