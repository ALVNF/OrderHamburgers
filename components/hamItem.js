const itemTemplate = document.createElement('template');
itemTemplate.innerHTML = `

    <style>
        .burgerItem{
            position: absolute;

            width: 35%;
            display:flex;
            justify-content: flex-start;
        }
        .burgerImg{
            border-radius: 90px;
        }

        .burgerLbl{
            position:absolute;
            left: 15%;
            top: 10%;
            
            font-family: 'Varela Round', sans-serif;
        }
        #burgerName{
            font-size: 20px;
        }

        #burgerIng{
            font-size: 15px;
        }

        .burgerCounter{
            position: absolute;
            right: -15%;
            top: 25%;
        }


    </style>

    <div class ="burgerItem">
       
        <img class="burgerImg" width="60" height = "60"/>

        <div class="burgerLbl">
            <label id="burgerName"> <slot name = "name" id = "nameSlot"/></label>
            <label id="burgerIng"> <slot name = "ingridients"/></label>
        </div>
        
        <div class="burgerCounter">
            <counter-item id="counter"></counter-item>
        </div>
    </div>

`

class HamItem extends HTMLElement{
    
    constructor(){
        super();

        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(itemTemplate.content.cloneNode(true));
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

window.customElements.define('ham-item',HamItem);