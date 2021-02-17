'use strict'
// ------------------------------------------------------------------
// CRUD 
// ------------------------------------------------------------------
// - Create New Saying
function postSaying(newSaying){
    let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ newSaying })
      }

    fetch(`${base_url}characters/${selectedAvatar.id}/sayings`, configObj)
        .then(response => response.json())
        .then(json => {
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
            debugger 
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
    let selected = selectedAvatar.my_sayings.find(x => x.id === parseInt(saying.id))
    let btnType = event.target.value

    if (btnType === 'edit'){
        saying.innerHTML  = `
        <textarea class="form-control" rows="4" id="update-name">${selected.phrase}</textarea>
        <button type="button" class="btn update-btn" value="update"><i class="check"></i></button>
    `
    } else if (btnType === 'delete'){
        deleteSaying(selected)
    } else if (btnType === 'update'){
        let updatedPhrase = saying.querySelector('.form-control').value
        selected.phrase = updatedPhrase
            updateSaying(selected)   
    }
}