'use strict'
let timer = 0
let executeInterval = false

// ------------------------------------------------------------------
// OBJECT 
// ------------------------------------------------------------------
class Expression{
    static all = [];

    constructor({id, description, imageUrl}){
        this.id = id
        this.description = description
        this.imageUrl = imageUrl
        Expression.all.push(this)
    }
}

// ------------------------------------------------------------------
// CRUD
// ------------------------------------------------------------------
function getExpressions(){
    fetch(`${base_url}expressions`)
    .then(resp => resp.json())
    .then(json => {
        json.forEach(face => {new Expression(face)})
    })
}

const getFace = function(description) {
    let facePic = Expression.all.find(x => x.description === description)
    face.style.backgroundImage = `url(src/images/expressions/${facePic.imageUrl})`
  }

const resetFace = function(){
    getFace('happy')
}

const scaredFace = function() {
getFace('nervous')
}

let startCrying = setInterval(() => {if (executeInterval){cry()}}, 1000)

// function startCrying(){
//     if (executeInterval){setInterval(cry(), 1000)}
// }

function cry(){
    if (timer === 5){
        getFace('mad')
        executeInterval = false
        timer = 0
        clearInterval(startCrying)
    }
    if (timer % 2 == 0){ getFace('cry1') } 
    else { getFace('cry2') }
    timer += 1
}




  