'use strict'
// ------------------------------------------------------------------
// OBJECT 
// ------------------------------------------------------------------
class Item{
    static all = [];

    debugger

    constructor({id, name, damage, base_imageUrl, splat_imageUrl}){
        this.id = id
        this.name = name
        this.damage = damage
        this.image = base_imageUrl
        this.splat = splat_imageUrl
        Item.all.push(this)
        this.element = document.createElement('div')
    }
}

// ------------------------------------------------------------------
// CRUD 
// ------------------------------------------------------------------
function getItems(){
    fetch(`${base_url}items`)
    .then(resp => resp.json())
    .then(json => {
        json.data.forEach(item => {
            const i = new Item(item.attributes)
            let ele = i.element
            ele.id = i.id
            ele.innerHTML = `${i.name}`
            ele.addEventListener('click', throwItem)
            items.appendChild(ele)
        })
    })
}

function throwItem(e){
    let itemId = parseInt(e.target.id)
    let item = Item.all.find(x => x.id === itemId)
    hitAvatar(item.damage)
    
}

function hitAvatar(itemDamage){
    
        selectedAvatar.damage += itemDamage   

    if (selectedAvatar.damage >= 50){
        saying.value = selectedAvatar.knockout_phrase
        selectedAvatar.damage = 0
    } else {
        // debugger
        saying.textContent = selectedAvatar.randomSaying()
        console.log(`Damage: ${selectedAvatar.damage}/50`)
    }

       
}