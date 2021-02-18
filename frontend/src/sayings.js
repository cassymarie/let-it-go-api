'use strict'
// ------------------------------------------------------------------
// CRUD 
// ------------------------------------------------------------------
// - Create New Saying
function createSaying(newSaying){
    let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(newSaying)
      }

    fetch(`${base_url}characters/${selectedAvatar.id}/sayings`, configObj)
        .then(response => response.json())
        .then(json => {
            selectedAvatar.my_sayings.push(json)
            edit_sayings.innerHTML = ""
            selectedAvatar.renderEdit()
      })
}

// - Update Saying
function updateSaying(saying){    
    let configObj = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ saying })
      }

    fetch(`${base_url}characters/${selectedAvatar.id}/sayings/${saying.id}`, configObj)
        .then(response => response.json())
        .then(json => {
            edit_sayings.innerHTML = ""
            selectedAvatar.renderEdit()
      })
}

// - Delete Saying
function deleteSaying(saying){    
    let configObj = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ saying })
      }

    fetch(`${base_url}characters/${selectedAvatar.id}/sayings/${saying.id}`, configObj)
        .then(response => response.json())
        .then(json => {
            
            selectedAvatar.my_sayings = json 
            edit_sayings.innerHTML = ""
            selectedAvatar.renderEdit()
      })
}

// ------------------------------------------------------------------
// EVENTS 
// ------------------------------------------------------------------
// - (Click) Saying List Item
function handleSayingClick(){

    let saying = event.target.parentElement
    let btnType = saying.value
    let lkupID = parseInt(saying.id.replace(`${btnType}-`,''))
    let selected = selectedAvatar.my_sayings.find(x => x.id === lkupID)

    if (btnType === 'edit'){
        saying.parentElement.innerHTML  = `
            <textarea class="form-control" rows="4" id="update-name">${selected.phrase}</textarea>
            <button id="update-${selected.id}" class="crud-btn" value="update"><i class="bi-check crud-btn" value="update"></i></button>
        `  
    } else if (btnType === 'delete'){
        deleteSaying(selected)
    } else if (btnType === 'update'){
        let updatedPhrase = saying.parentElement.querySelector('.form-control').value
        selected.phrase = updatedPhrase
            updateSaying(selected)   
    }
}

function hideAddSaying(){
    add_saying.innerHTML = `
    <button  type="submit" id="add-saying" class="crud-btn" value="add">
        <i class="bi-plus-square-fill crud-btn" value="add"></i>
    </button>
`
    let addBtn = add_saying.querySelector('#add-saying')
    addBtn.addEventListener('click', showAddSaying)
}


function showAddSaying() {
    add_saying.innerHTML = `
        <textarea class="form-control" rows="3" id="new-phrase" placeholder="Add phrase here..."></textarea>
        <button type="submit" id="submit-saying" class="crud-btn" value="update">
            <i class="bi-check crud-btn" value="update"></i>
        </button>
    `
    let addBtn = add_saying.querySelector('#submit-saying')
    addBtn.addEventListener('click', handleAddSaying)
}

function handleAddSaying(e){
    e.preventDefault()
    let newPhrase = add_saying.querySelector('#new-phrase')
    let addSaying = {phrase: newPhrase.value, character_id: selectedAvatar.id}
    createSaying(addSaying)
}