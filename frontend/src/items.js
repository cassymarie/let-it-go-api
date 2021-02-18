'use strict'
const progressBar = document.querySelector('.progress')
// ------------------------------------------------------------------
// OBJECT 
// ------------------------------------------------------------------
class Item{
    static all = [];

    constructor({id, name, damage, base_imageUrl, splat_imageUrl}){
        this.id = id
        this.name = name
        this.damage = damage
        this.base_imageUrl = base_imageUrl
        this.splat_imageUrl = splat_imageUrl
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
            ele.className = 'container-md select-item'
            ele.innerHTML = `<img src="src/images/items/${i.base_imageUrl}" class="item-thumbnail" />`
            ele.addEventListener('click', throwItem)
            ele.addEventListener('mouseover', scaredFace)
            ele.addEventListener('mouseout', resetFace)
            items.appendChild(ele)
        })

    })
}

function throwItem(e){
    let itemId = parseInt(e.target.parentElement.id)
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
        progressBar.innerHTML = `
            <div class="progress-bar" role="progressbar" style="width: ${(selectedAvatar.damage/50)*100}%" aria-valuenow="${selectedAvatar.damage}" aria-valuemin="0" aria-valuemax="50"></div>
        `
        console.log(`Damage: ${selectedAvatar.damage}/50`)
    }

       
}