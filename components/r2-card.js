//componet lit
import { LitElement, html, css  } from 'lit-element';

export class R2Card extends LitElement {
    
    static styles = css`
    :host {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        -box-shadow: 0 0 20px #00000033;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
        padding-left: 0px;
        padding-right: 0px;
    }

    p {
      margin-top: 8px;
    }

    .card-header {
      text-align: left;
      border-bottom: 1px solid #d885af;
      padding: 6px;
      cursor: pointer;
      font-size: 18px;
      color: #ffffff;
    }

    .card-content {
      text-align: left;
      padding: 3px;
      margin-top: 0px;
      margin-bottom: auto;
      font-size: 16px;
      color: #ffffff;
    }

    .card-footer {
      border-top: 1px solid #d885af;
      text-align: left;
      padding: 3px;
      font-size: 14px;
      color: #ffffff;
    }

    .no-select {
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
  `;

  static properties = {
    title: { type: String },
    color: { type: String },
    width: { type: String },
    height: { type: String },
    padding: { type: String },
    borderRadius: { type: String },
    footer: { type: String },
    footer_hide: { type: Boolean },
    footer_color: { type: String },
    header_hide: { type: Boolean },
    header_color: { type: String},
  };

  constructor() {
    super();
    this.title = 'Title';
    this.color = '#2a2b2f';
    this.width = '250px';
    this.height = '300px';
    this.padding = '16px';
    this.borderRadius = '9px';
    this.footer = '.';
    this.header_hide = false;
    this.footer_hide = false;
    this.footer_color = '#c74385';
    this.header_color = '#c74385';
  }

  render() {
    return html`
        <style>
          :host {
            background-color: ${this.color};
            width: ${this.width};
            height: ${this.height};
            border-radius: ${this.borderRadius};
          }
         
          .header_color {
            background-color: ${this.header_color};
            border-radius: ${this.borderRadius} ${this.borderRadius} 0 0 ;
          }

          .header_color:hover {
            outline: 1px solid blue;
          }

          .footer_color {
            background-color: ${this.footer_color};
            border-radius: 0 0 ${this.borderRadius} ${this.borderRadius} ;
          }
        </style>
        ${this.header_hide ? '' : html`
          <header class="card-header header_color no-select">
            ${this.title}
          </header>
        `}

        <div class="card-content">
          <slot></slot>
        </div>
        
        ${this.footer_hide ? '' : html`
          <footer class="card-footer footer_color">
            <p>${this.footer}</p>
          </footer>
        `}
       
    `;
  }
   
}

customElements.define('r2-card', R2Card);