const hamIndexTemplate = document.createElement('template');
hamIndexTemplate.innerHTML = `

    <style>
        .burgerItem{
            position: absolute;

            width: 35%;
            display:flex;
            justify-content: flex-start;
        }
        .burgerImg{
            border-radius: 90px;
            width:100px;
            height:100px
        }

        .burgerLbl{
            position:absolute;
            left: 20%;
            top: 15%;
            font-family: 'Varela Round', sans-serif;
        }
        #burgerName{
            font-size: 20px;
        }

        #burgerIng{
            font-size: 15px;
        }

    </style>

    <div class ="burgerItem">
       
        <img class="burgerImg" width="60" height = "60"/>

        <div class="burgerLbl">
            <label id="burgerName"> <slot name = "name" id = "nameSlot"/></label>
            <label id="burgerIng"> <slot name = "ingridients"/></label>
        </div>

    </div>

`

class HamIndex extends HTMLElement{
    
    constructor(){
        super();

        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(hamIndexTemplate.content.cloneNode(true));
    }

    callResetCount(){
        this.shadowRoot.querySelector('#counter').resetCountValue();
    }

    callGetCountVal(){
        return this.shadowRoot.querySelector('#counter').getCountValue();
    }

    getItemName(){
        return this.shadowRoot.querySelector('slot').assignedNodes()[0].textContent;
    }

    connectedCallback(){
        this.shadowRoot.querySelector('img').src = 
        this.getAttribute('avatar');
    }

}

window.customElements.define('ham-index',HamIndex);