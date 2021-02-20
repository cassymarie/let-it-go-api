'user strict'

// ------------------------------------------------------------------
// CRUD 
// ------------------------------------------------------------------
// - Create a NewUser
function createUser(newUser){
    
    let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(newUser)
      }

    fetch(`${base_url}users`, configObj)
        .then(response => response.json())
        .then(json => {

            currUser = json["data"]["attributes"]
            let avatarsIncluded = json['included']

            avatarsIncluded.forEach(avatar => {
                const obj = new Avatar(avatar.attributes)
                obj.attachToSelectionList()
            })

      })
}

// ------------------------------------------------------------------
// EVENTS 
// ------------------------------------------------------------------
function handleSigninClick(){
    let errorfld = document.querySelector('#signin-error')
    let username = document.querySelector('#new-username')

    event.preventDefault()

    if (username.value !== '' ){
        errorfld.style.display = 'none'
        createUser({username: username.value})
        debugger
    } else {
        errorfld.style.display = 'block'
        errorfld.textContent = 'Username must NOT be blank'
    }
}