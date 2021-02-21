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

    fetch(`${base_url}avatars/${viewingAvatar.id}/sayings`, configObj)
        .then(response => response.json())
        .then(json => {
            viewingAvatar.my_sayings.push(json)
            viewingAvatar.updateSayingsList()
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

    fetch(`${base_url}avatars/${viewingAvatar.id}/sayings/${saying.id}`, configObj)
        .then(response => response.json())
        .then(json => {
            viewingAvatar.updateSayingsList()
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

    fetch(`${base_url}avatars/${viewingAvatar.id}/sayings/${saying.id}`, configObj)
        .then(response => response.json())
        .then(json => {
            viewingAvatar.updateSayingsList()
      })
}

// ------------------------------------------------------------------
// EVENTS 
// ------------------------------------------------------------------ EDIT SAYINGS EVENTS
// - (Click) Saying List Item
function handleSayingClick(){

    let saying = event.target.parentElement
    let btnType = saying.value
    let lkupID = parseInt(saying.id.replace(`${btnType}-`,''))
    let selected = viewingAvatar.my_sayings.find(x => x.id === lkupID)

    if (btnType === 'edit'){
        saying.parentElement.innerHTML  = `
            <textarea class="avatar-saying form-control" rows="4" id="update-name">${selected.phrase}</textarea>
            <button id="update-${selected.id}" class="add-btn" value="update">
                <i class="bi-check add-btn" value="update"></i>
            </button>
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
    <button  type="submit" id="new-saying" class="crud-btn" value="add">
        <i class="bi-plus-square-fill crud-btn" value="add"> New Saying</i>
    </button>
`
    let addBtn = add_saying.querySelector('#new-saying')
    addBtn.addEventListener('click', showAddSaying)
    btn_selectAvatar.style.display = 'block'
}

function showAddSaying() {
    add_saying.innerHTML = `
        <textarea class="form-control" rows="3" id="new-phrase" placeholder="Add phrase here..."></textarea>
        <button type="submit" id="submit-saying" class="add-btn" value="update">
            <i class="bi-check add-btn" value="update"> Create</i> 
        </button>
    `
    btn_selectAvatar.style.display = 'none'
    let addBtn = add_saying.querySelector('#submit-saying')
    addBtn.addEventListener('click', handleAddSaying)
}

function handleAddSaying(e){
    e.preventDefault()
    let newPhrase = add_saying.querySelector('#new-phrase')
    let addSaying = {phrase: newPhrase.value, avatar_id: viewingAvatar.id}
    createSaying(addSaying)
}
//------------------------------------
// -- EVENTS : ANIMATION
