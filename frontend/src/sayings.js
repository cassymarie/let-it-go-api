'use strict'
// ------------------------------------------------------------------
// CRUD 
// ------------------------------------------------------------------
// - Create New Saying
function postSaying(newSaying){
    fetch(`${base_url}characters/${selectedAvatar.id}/sayings`, configObject= {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          phrase: newSaying.phrase.value,
        })
      }).then(function(response) {
        return response.json();
      }).then(function(json) {
        const avatar = new Avatar(character.attributes)
        avatar.attachToSelectionList()
        debugger;
      });
}

// - Update Saying
function updateSaying(saying){
    let formData = { saying }
      
      let configObj = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      }

    fetch(`${base_url}characters/${selectedAvatar.id}/sayings/${saying.id}`, configObj)
        .then(response => response.json())
        .then(json => {
            edit_sayings.innerHTML = ""
            selectedAvatar.renderEdit()
      })
}