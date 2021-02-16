const base_url = 'http://localhost:3000/'

class Avatar{
    static all = [];

    constructor({id, name, title, imageUrl, knockout_phrase, my_sayings}){
        this.id = id
        this.name = name
        this.title = title
        this.imageUrl = imageUrl
        this.knockout_phrase = knockout_phrase
        this.damage = 0
        this.my_sayings = my_sayings
        Avatar.all.push(this)
        this.element = document.createElement('div')
    }

    // Initial Character Select box w/ event
    renderSelection(){
        this.element.innerHTML = `${this.name}`
        this.element.id = this.id
        this.element.addEventListener('click', selectAvatar)
        return this.element
    }
    // - append above render to the list of characters
    attachToSelectionList(){
        characters.appendChild(this.renderSelection())
    }

    // Render Selected Character to 'Battleground' - show/hide respective div's
    renderImage(){
        my_avatar.innerHTML = `Image of ${this.name}`
        battleground.style.display = 'flex'
        my_avatar.parentElement.style.display = 'block'
    }

    // Renders Edit section (does not Show) - add all sayings with buttons
    renderEdit(){
        edit_name.value = this.name        
        this.my_sayings.forEach(saying => {
            const ele = document.createElement('div')
            ele.className = 'saying-list'
            ele.id = `${saying.id}`
            ele.addEventListener('click',handleSayingClick)
            ele.innerHTML = `
                <button class="edit-btn">...</button>
                <p>${saying.phrase}</p>
                <button class="delete-btn">X</button>
            `
            edit_sayings.appendChild(ele)
        })
    }
}
// ------------------------------------------------------------------
// CRUD 
// ------------------------------------------------------------------
// - Index /Characters
function getCharacters(){
    fetch(`${base_url}characters`)
    .then(resp => resp.json())
    .then(json => {
        json.data.forEach(character => {
            const avatar = new Avatar(character.attributes)
            avatar.attachToSelectionList()
        })
    })
}

// - Show /Characters/:id
function showCharacter(id){
    
    fetch(`${base_url}characters/${id}`)
    .then(resp => resp.json())
    .then(json => {
        //Sets const obj of the selected Avatar
        selectedAvatar = Avatar.all.find(x => x.id === id)
        selectedAvatar.renderEdit()
        selectedAvatar.renderImage()
    })
}

// ------------------------------------------------------------------
// EVENTS 
// ------------------------------------------------------------------
// (Click) to Select Avatar
// - fetch data / render
function selectAvatar(e){
    let avatarId = parseInt(e.target.id)
    showCharacter(avatarId)
    characters.style.display = 'none'
    btn_edit_avatar.style.display = 'flex'
}

function updateCharacter(e){
    btn_edit_avatar.style.display = 'block'
    getItems()
    items.parentElement.style.display = 'block' 
    edit_info.parentElement.style.display = 'none' 
}

function handleSayingClick(){
    console.log('clicked')
}