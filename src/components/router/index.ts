import {LitElement,html,customElement, property} from 'lit-element';

interface Window {
    appHistory: any
}


@customElement('lit-link')
export default class Link extends LitElement{

    @property()
    to:string='';

    constructor(){
        super();
    }

    goTo(){
    
        window.appHistory.push(this.to)
    }
    render(){
        return html`
            <a @click=${()=>this.goTo()}>
                <slot></slot>
            </a>
        `
    }
}