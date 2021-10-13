const counTemplate = document.createElement('template');
counTemplate.innerHTML = `
    <style>
        .grid-container {
            display: grid;
            grid-template-columns: 100% 100% 100%;
            user-select: none;

            font-family: 'Varela Round', sans-serif;
        }

    </style>

    <div class = "grid-container">
        <div id="gridItem-less">
            <label>-</label>
        </div>

        <div>
            <label id = "label-num">0</label>
        </div>

        <div id = "gridItem-plus">
            <label>+</label>
        </div>
    </div>

`


class Counter extends HTMLElement{
    
    constructor(){
        super();

        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(counTemplate.content.cloneNode(true));
    }
    
    subItem(lblValue){
        if(lblValue != 0) {
            this.shadowRoot.querySelector('#label-num').innerHTML = parseInt(lblValue) - 1;
        }
    }

    addItem(lblValue){
        if(lblValue != 10) {
            this.shadowRoot.querySelector('#label-num').innerHTML = parseInt(lblValue) + 1;
        }
    }

    getCountValue(){
        return parseInt(this.shadowRoot.querySelector('#label-num').innerHTML);
    }

    resetCountValue(){
        this.shadowRoot.querySelector('#label-num').innerHTML = 0;
    }

    connectedCallback(){
        this.shadowRoot.querySelector('#gridItem-less').
        addEventListener('click', () => this.subItem( this.shadowRoot.querySelector('#label-num').innerHTML));

        this.shadowRoot.querySelector('#gridItem-plus').
        addEventListener('click', () => this.addItem(this.shadowRoot.querySelector('#label-num').innerHTML));
    }

}

window.customElements.define('counter-item',Counter);