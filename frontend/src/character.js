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
    
    let saying = event.target.parentElement
    let selected = selectedAvatar.my_sayings.find(x => x.id === parseInt(saying.id))

    saying.innerHTML  = `
        <textarea class="form-control" rows="4" id="update-name">${selected.phrase}</textarea>
        <button type="button" class="btn update-btn">OK</button>
    `
    debugger
    console.log('clicked')
}