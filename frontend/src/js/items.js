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
            ele.addEventListener('mouseover', clearBubble )
            items.appendChild(ele)
        })

    })
}

// ------------------------------------------------------------------
// EVENTS 
// ------------------------------------------------------------------
function throwItem(e){

    // debugger
    let itemId = parseInt(e.target.parentElement.id)
    selectedItem = Item.all.find(x => x.id === itemId)

    throwEvent()
    setTimeout(explodeItem, 750);
}

function throwEvent(){
    throwedItem.style.display = 'block'
    throwedItem.style.backgroundImage = `url(src/images/items/${selectedItem.throw_imageUrl})`
    throwedItem.className = `animate__animated animate__backInRight`
    throwedItem.style.display = 'block'
}

function explodeItem(){
    throwedItem.style.display = 'none'
    itemSplat.innerHTML = `<img src="src/images/items/${selectedItem.splat_imageUrl}" />`
    itemSplat.className = 'animate__animated animate__heartBeat'//"gettinInYoFace "
    itemSplat.style.display = 'block'
    hitAvatar()
    setTimeout(clearItem, 500)
}

function clearItem(){
    throwedItem.style.backgroundImage = ``
    expressionLevel()
    itemSplat.style.backgroundImage = ``
    throwedItem.className = ``
    itemSplat.className = ``
    itemSplat.style.display = `none`
    avatar.className = 'animate__animated animate__rubberBand'
}

const clearBubble = function(){
    speechBubble.className = ''
    speechBubble.style.display = 'none'

}

const showBubble = function(){
    speechBubble.className = 'animate__animated animate__tada'
    speechBubble.style.display = 'block'}


function hitAvatar(){
    
    selectedAvatar.damage += selectedItem.damage   

    if (selectedAvatar.damage >= 50){
        itemSection.style.display = 'none'
        saying.textContent = selectedAvatar.knockout_phrase
        progressBar.innerHTML = `
        <div class="progress-bar" role="progressbar" style="width:100%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="50"></div>
    `   
        executeInterval = true
        showBubble()
        startCrying


    } else {
        saying.textContent = selectedAvatar.randomSaying()
        progressBar.innerHTML = `
            <div class="progress-bar" role="progressbar" style="width: ${(selectedAvatar.damage/50)*100}%" aria-valuenow="${selectedAvatar.damage}" aria-valuemin="0" aria-valuemax="50"></div>
        `
        showBubble()
    }
    
}