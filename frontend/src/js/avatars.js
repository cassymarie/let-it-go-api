'use strict'
const base_url = 'http://localhost:3000/'
// ------------------------------------------------------------------
// OBJECT 
// ------------------------------------------------------------------
class Avatar{
    static all = [];

    constructor({id, name, knockout_phrase, face_id, character_id, my_sayings, image, title}){
        this.id = id
        this.name = name
        this.knockout_phrase = knockout_phrase
        this.face_id = face_id
        this.character_id = character_id
        this.damage = 0
        this.my_sayings = my_sayings
        this.image = image
        this.title = title
        Avatar.all.push(this)
        this.element = document.createElement('div')
    }

    // Initial Character Select box w/ event
    renderSelection(){
        this.element.addEventListener('click', selectAvatar)
        this.element.style.backgroundImage = `url(src/images/characters/${this.image})`
        this.element.id = this.id
        this.element.className = 'sml-avatar'
        this.element.title = `${this.name}`
        return this.element
    }
    
    // - append above render to the list of characters
    attachToSelectionList(){
        characters.appendChild(this.renderSelection())
    }

    // Render Selected Character to 'Battleground' - show/hide respective div's
    renderImage(){
        // my_avatar.style.backgroundImage = `url(src/images/characters/${this.imageUrl})`
        my_avatar.parentElement.style.display = 'block'
        // getFace('happy')
    }
    updatePolaroid(){
        // debugger
        polaroid.querySelector('.name-title').textContent = this.name
        polaroid.querySelector('.polaroid-avatar').style.backgroundImage = `url(src/images/characters/${this.image})`
        polaroid.querySelector('.polaroid-knockout').textContent = this.knockout_phrase
    }

    updateSayingsList(){
        edit_sayings.innerHTML = ''
        this.my_sayings.forEach(saying => {
            const ele = document.createElement('div')
            ele.className = 'saying-list'
            ele.id = `${saying.id}`
            ele.addEventListener('click',handleSayingClick)
            ele.innerHTML = `
                <div class="avatar-saying">${saying.phrase}</div>
                <button id="edit-${saying.id}" class="crud-btn" value="edit"><i class="bi-pencil crud-btn" value="edit"></i></button>
                <button id="delete-${saying.id}" class="crud-btn" value="delete"><i class="bi-trash crud-btn" value="delete"></i></button>
            `
            edit_sayings.appendChild(ele)
        })

    }


    // Renders Edit section (does not Show) - add all sayings with buttons
    renderPortfolio(){
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
function getAvatars(){
    fetch(`${base_url}avatars`)
    .then(resp => resp.json())
    .then(json => {
        json.data.forEach(character => {
            const avatar = new Avatar(character.attributes)
            avatar.attachToSelectionList()
        })
    })
}

// - Show /Characters/:id
function showAvatar(id){

    fetch(`${base_url}avatars/${id}`)
    .then(resp => resp.json())
    .then(json => {
        debugger

        //Sets const obj of the selected Avatar
        let found = json.data.attributes

        found.character_id = json.relationships.character.data.id

        

        return found
                 
    })
        // selectedAvatar = Avatar.all.find(x => x.id === id)
        // selectedAvatar.renderEdit()
        // selectedAvatar.renderImage()
    
}

// - Update /Characters/:id
function updateAvatar(myAvatar){
    let configObj = {
    method: "PATCH",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({ myAvatar })
    }

fetch(`${base_url}avatars/${myAvatar.id}`, configObj)
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
    let avatarId = parseInt(e.target.id)
    viewingAvatar = Avatar.all.find(x => x.id === avatarId)
    viewingAvatar.updatePolaroid()
    viewingAvatar.updateSayingsList()
}

function listSayings(avatar){
    avatar.my_sayings.map(saying => {

    })
}

// show edit section / hide item selection
function showEditAvatar(e){
    items.parentElement.style.display = 'none' 
    edit_info.parentElement.style.display = 'block' 
    btn_edit_avatar.style.display = 'none'
    battleground.style.display = 'flex'
    document.querySelector('#close-edit').addEventListener('click',closeEditAvatar)
}

function closeEditAvatar(){
    battleground.style.display = 'block'
    items.parentElement.style.display = 'block' 
    edit_info.parentElement.style.display = 'none' 
    btn_edit_avatar.style.display = 'block'
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
            <i class="bi-pencil crud-btn" value="update"></i>
        </button>
    `
    let editBtn = edit_character.querySelector('#set-character')
    edit_character.addEventListener('dblclick', editCharacter)
    editBtn.addEventListener('click', editCharacter)
}

function handleUpdateCharacter(e){
    e.preventDefault()
    let newName = edit_character.querySelector('#edit-name').value
    let newKO = edit_character.querySelector('#edit-knockout_phrase').value
    let updateAvatar = {id: selectedAvatar.id, name: newName, knockout_phrase: newKO}
    updateCharacter(updateAvatar)
}

function headshaking(){
    my_avatar.className = 'animate__animated animate__rubberBand'
    getFace('rage')
    setTimeout(resetAvatar, 1000);
}

function getNervous(){
    // animate__shakeX
    my_avatar.className = 'animate__animated animate__pulse'
    face.className = 'animate__animated animate__pulse'
    setTimeout(resetExpression, 1000);
}

function resetAvatar(){
    my_avatar.style.backgroundImage = ``
    my_avatar.className = ``
}

function resetExpression(){
    face.className = ``
    my_avatar.className = ``
}

function changeCharacter(){
    battleground.style.display = 'none'
    startup.style.display = 'block'
    selectedAvatar = ''
}

