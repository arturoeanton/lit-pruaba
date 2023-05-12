class ComponentApp extends HTMLElement {
    constructor(){
        super();
    }
    
    
    // agregamos un evento que suma el numero de clicks
    // y lo muestra en el titulo
    // al hacer click en el componente
    connectedCallback(){
        this.innerHTML = `
            <h1>Clickme 0</h1>
        `;
        this.addEventListener('click', () => {
            const title = this.querySelector('h1');
            const currentClicks = parseInt(title.innerText.split(' ')[1]);
            title.innerText = `Clickme ${currentClicks + 1}`;
        });
    }
    

}
customElements.define('r2-clickme', ComponentApp);