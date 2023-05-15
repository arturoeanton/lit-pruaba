//componet lit
import { LitElement, html, css  } from 'lit-element';
import './r2-button-magic.js';
import './r2-input.js';
import './r2-avatars.js';

export class R2SearchCards extends LitElement {
    
    static styles = [css`
    .list{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 16px;
    }

    form{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 16px;
        gap: 1.9rem;
    }

       
    `];
 
   static properties = {
        hover : { type: Boolean }
    };

    constructor(){
        super();
        this.hover = false;
    }

    render(){
        return html`
        <h1>${this.title}</h1>
        <form data-testid="form" class="serach">
            <r2-input placeholder="Search"></r2-input>
            <r2-button-magic hover> Buscar </r2-button-magic>
        </form>
        <ul  class="list">
           <slot></slot>
        </ul>
        `;
    }

    
   
}

customElements.define('r2-search-cards', R2SearchCards);