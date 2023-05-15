//componet lit
import { LitElement, html, css  } from 'lit-element';

export class R2Input extends LitElement {
    
    static styles = [css`
   
      
      .dark-input {
        width: 100%;
        margin-left: 2px;
        margin-right: 2px;
        padding: 10px;
        border: none;
        border-radius: 10px;
        background-color: #333;
        color: #fff;
        font-size: 16px;
      }
      
      .dark-input::placeholder {
        color: #aaa;
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
            <input type="text" class="dark-input" placeholder="Ingrese su texto aquí">
        `;
    }

    
   
}

customElements.define('r2-input', R2Input);