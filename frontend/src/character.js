'use strict'
const base_url = 'http://localhost:3000/'
// ------------------------------------------------------------------
// OBJECT 
// ------------------------------------------------------------------
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
        this.element.addEventListener('click', selectAvatar)
        this.element.innerHTML = `<img src="src/images/characters/${this.imageUrl}" class="img-thumbnail"/>`
        this.element.id = this.id
        this.element.className = 'select-avatar'
        this.element.title = `${this.title}`
        
        return this.element
    }
    
    // - append above render to the list of characters
    attachToSelectionList(){
        characters.appendChild(this.renderSelection())
    }

    // Render Selected Character to 'Battleground' - show/hide respective div's
    renderImage(){
        my_avatar.style.backgroundImage = `url(src/images/characters/${this.imageUrl})`;
        battleground.style.display = 'flex'
        my_avatar.parentElement.style.display = 'block'
    }

    // Renders Edit section (does not Show) - add all sayings with buttons
    renderEdit(){
        setCharacter() 
        edit_sayings.innerHTML = ""      
        this.my_sayings.forEach(saying => {
            const ele = document.createElement('div')
            ele.className = 'saying-list'
            ele.id = `${saying.id}`
            ele.addEventListener('click',handleSayingClick)
            ele.innerHTML = `
                <p>${saying.phrase}</p>
                <button id="edit-${saying.id}" class="crud-btn" value="edit"><i class="bi-pencil crud-btn" value="edit"></i></button>
                <button id="delete-${saying.id}" class="crud-btn" value="delete"><i class="bi-trash crud-btn" value="delete"></i></button>
            `
            edit_sayings.appendChild(ele)
        })
        hideAddSaying()
    }

    randomSaying(){
        let phraseList = this.my_sayings.map((saying)=>saying.phrase)
        return phraseList[randomNumber(phraseList.length)]
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

// - Update /Characters/:id
function updateCharacter(myAvatar){
    let configObj = {
    method: "PATCH",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({ myAvatar })
    }

fetch(`${base_url}characters/${myAvatar.id}`, configObj)
    .then(response => response.json())
    .then(json => {
        selectedAvatar.name = json.name
        selectedAvatar.knockout_phrase = json.knockout_phrase
        selectedAvatar.renderEdit()
    })
}

// ------------------------------------------------------------------
// EVENTS 
// ------------------------------------------------------------------
// (Click) to Select Avatar
// - fetch data / render
function selectAvatar(e){
    let avatarId = ''
    if (e.target.tagName === "DIV"){
        avatarId = parseInt(e.target.id)
    } else {
        avatarId = parseInt(e.target.parentElement.id)
    }
    showBattleground()
    showCharacter(avatarId)
}

// show edit section / hide item selection
function showEditAvatar(e){
    items.parentElement.style.display = 'none' 
    edit_info.parentElement.style.display = 'block' 
    btn_edit_avatar.style.display = 'none'
}

// Displays the div:battleground
function showBattleground(){
    startup.style.display = 'none'
    battleground.style.display = 'flex'
    btn_edit_avatar.style.display = 'flex'
}

function editCharacter(){
    edit_character.innerHTML = `
    <input type="text" name="image" value="${selectedAvatar.name}" id="edit-name" class="form-control"/>
    <input type="text" name="image" value="${selectedAvatar.knockout_phrase}" id="edit-knockout_phrase" class="form-control"/>
    <button id="update-character" class="crud-btn" value="update">
        <i class="bi-check crud-btn" value="update"></i>
    </button>
`
    let updateBtn = edit_character.querySelector('#update-character')
    updateBtn.addEventListener('click', handleUpdateCharacter)
}

function setCharacter() {
    edit_character.innerHTML = `
        <h3 class="edit-character-info">${selectedAvatar.name}</h3>
        <p class="edit-character-info">${selectedAvatar.knockout_phrase}</p>
        <button id="set-character" class="crud-btn set-character" value="update">
            <i class="bi-check crud-btn" value="update"></i>
        </button>
    `
    let editBtn = edit_character.querySelector('#set-character')
    edit_character.addEventListener('dblclick', editCharacter)
    editBtn.addEventListener('click', editCharacter)
}

function handleUpdateCharacter(e){
    // debugger
    e.preventDefault()
    let newName = edit_character.querySelector('#edit-name').value
    let newKO = edit_character.querySelector('#edit-knockout_phrase').value
    let updateAvatar = {id: selectedAvatar.id, name: newName, knockout_phrase: newKO}
    updateCharacter(updateAvatar)
}