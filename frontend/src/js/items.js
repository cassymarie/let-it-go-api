'use strict'
const progressBar = document.querySelector('.progress')
// ------------------------------------------------------------------
// OBJECT 
// ------------------------------------------------------------------
class Item{
    static all = [];

    constructor({id, name, damage, count, base_imageUrl, throw_imageUrl, splat_imageUrl, base_transition, throw_transition, splat_transition}){
        this.id = id
        this.name = name
        this.damage = damage
        this.count = count
        this.base_imageUrl = base_imageUrl
        this.throw_imageUrl = throw_imageUrl
        this.splat_imageUrl = splat_imageUrl
        this.base_transition = base_transition
        this.throw_transition = throw_transition
        this.splat_transition = splat_transition
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
            ele.className = 'col-sm select-item'
            ele.innerHTML = `<img src="src/images/items/${i.base_imageUrl}" class="item-thumbnail" />`
            ele.addEventListener('click', throwItem)
            ele.addEventListener('mouseover', getNervous)
            // ele.addEventListener('mouseout', expressionLevel)
            items.appendChild(ele)
        })

    })
}

// ------------------------------------------------------------------
// EVENTS 
// ------------------------------------------------------------------
function throwItem(e){
    let itemId = parseInt(e.target.parentElement.id)
    selectedItem = Item.all.find(x => x.id === itemId)

    throwEvent()
    setTimeout(explodeItem, 750);
}

function throwEvent(){
    
    // thrown_item.style.backgroundImage = `url(src/images/items/${selectedItem.base_imageUrl})`
    thrown_item.className = `animate__animated animate__backInRight`
    thrown_item.style.display = 'block'
}

function explodeItem(){
    // thrown_item.style.backgroundImage = `url(src/images/items/${selectedItem.splat_imageUrl})`
    hitAvatar()
    
    thrown_item.className = "gettinInYoFace "
    setTimeout(clearItem, 2000)
}

function clearItem(){
    thrown_item.style.backgroundImage = ``
    thrown_item.className = ``
    thrown_item.style.display = `none`
    avatar.className = 'animate__animated animate__bounceIn'
}

function hitAvatar(){
    
    selectedAvatar.damage += selectedItem.damage   

    if (selectedAvatar.damage >= 50){
        saying.value = selectedAvatar.knockout_phrase
        progressBar.innerHTML = `
        <div class="progress-bar" role="progressbar" style="width:100%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="50"></div>
    `   
        executeInterval = true
        startCrying

    } else {
        saying.textContent = selectedAvatar.randomSaying()
        progressBar.innerHTML = `
            <div class="progress-bar" role="progressbar" style="width: ${(selectedAvatar.damage/50)*100}%" aria-valuenow="${selectedAvatar.damage}" aria-valuemin="0" aria-valuemax="50"></div>
        `
    }
}