'use strict'
const base_url = 'http://localhost:3000/'


// ------------------------------------------------------------------
// OBJECT 
// ------------------------------------------------------------------
class Avatar{
    static all = [];

    constructor({id, name, knockout_phrase, face_id, character_id, my_sayings, image, title, initialPic}){
        this.id = id
        this.name = name
        this.knockout_phrase = knockout_phrase
        this.face_id = face_id
        this.character_id = character_id
        this.damage = 0
        this.my_sayings = my_sayings
        this.image = image
        this.title = title
        this.initialPic = initialPic
        Avatar.all.push(this)
        this.element = document.createElement('div')
    }

    // Initial Character Selection w/ event
    renderSelection(){
        this.element.addEventListener('click', selectAvatar)
        this.element.addEventListener('mouseover', showAvatarPic)

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

    updatePolaroid(){
        let picClassName = ''
        if (hoverAvatar === '') {
            picClassName = 'polaroid'
            polaroid_name.innerHTML = `${this.name} <button id="edit-avatar" class="name-edit" value="update"><i class="bi-pencil-fill" value="update"></i> </button>`
            polaroid_name.querySelector("#edit-avatar").addEventListener('click', showEditAvatar)
        } else { 
            picClassName = 'polaroid  hover-view'
            polaroid_name.innerHTML = `${this.name}`
        }
        
        polaroid.style.display = 'block'
        polaroid.className = picClassName
        polaroid_image.style.backgroundImage = `url(src/images/characters/${this.image})`
        polaroid_saying.innerHTML = `
        <div class="knockout-saying">${this.knockout_phrase}</div>`
        btn_selectAvatar.innerHTML = `Select <br> ${viewingAvatar.name}`
    }

    editPolaroid(){
        polaroid_name.innerHTML = `
        <input type="text" value="${this.name}" id="edit-name" class="form-control name-title"/>`

        polaroid_saying.innerHTML = `
            <div class="knockout-title">Knockout Phrase</div>
            <textarea class="form-control knockout-saying" id="updated-knockout">${this.knockout_phrase}</textarea>
            <button type="submit" id="submit-avatar" class="submit-avatar" value="update">
                <i class="bi-check submit-avatar" value="update"></i>
            </button>`

        document.querySelector('#submit-avatar').addEventListener('click', handleUpdateCharacter)
    }

    updateSayingsList(){
        avatarSayings.style.display = 'block'
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
            hideAddSaying()
            
        })
    }

    // Render Selected Character to 'Battleground' - show/hide respective div's
    renderImage(){
        avatar.style.backgroundImage = `url(src/images/characters/${this.imageUrl})`
        
        avatar.parentElement.style.display = 'block'
        // getFace('happy')
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
        viewingAvatar.name = json.name
        viewingAvatar.knockout_phrase = json.knockout_phrase
        viewingAvatar.updatePolaroid()
    })
}

// ------------------------------------------------------------------
// EVENTS 
// ------------------------------------------------------------------
// (Click) to Select Avatar
// - fetch data / render
function selectAvatar(e){
    hoverAvatar = ''
    let avatarId = parseInt(e.target.id)
    viewingAvatar = Avatar.all.find(x => x.id === avatarId)
    viewingAvatar.updatePolaroid()
    viewingAvatar.updateSayingsList()
}

function chooseAvatar(){
    selectedAvatar = {...viewingAvatar}
    getItems()
    avatarConfig.style.display = 'none'
    pageBody.className = 'background-lower'
    battleground.style.display = 'block'
}

function showAvatarPic(e){
    let avatarId = parseInt(e.target.id)
    viewingAvatar = ''
    hoverAvatar = Avatar.all.find(x => x.id === avatarId)
    hideDirections()
    avatarSayings.style.display = 'none'
    hoverAvatar.updatePolaroid()
}

// show edit section / hide item selection
function showEditAvatar(){

    viewingAvatar.editPolaroid()
}

function handleUpdateCharacter(e){
    e.preventDefault()
    let newName = document.querySelector('#edit-name').value
    let newKO = document.querySelector('#updated-knockout').value
    let updatedInfo = {id: viewingAvatar.id, name: newName, knockout_phrase: newKO}
    updateAvatar(updatedInfo)
}

function headshaking(){
    avatar.className = 'animate__animated animate__rubberBand'
    getFace('rage')
    setTimeout(resetAvatar, 1000);
}

function getNervous(){
    // animate__shakeX
    avatar.className = 'animate__animated animate__pulse'
    face.className = 'animate__animated animate__pulse'
    setTimeout(resetExpression, 1000);
}

function resetAvatar(){
    avatar.style.backgroundImage = ``
    avatar.className = ``
}

function resetExpression(){
    face.className = ``
    avatar.className = ``
}

function changeCharacter(){
    battleground.style.display = 'none'
    startup.style.display = 'block'
    selectedAvatar = ''
}

