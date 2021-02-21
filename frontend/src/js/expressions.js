'use strict'
let timer = 0
let executeInterval = false

// ------------------------------------------------------------------
// OBJECT 
// ------------------------------------------------------------------
class Expression{
    static all = [];

    constructor({id, title, imageUrl, face_id, category}){
        this.id = id
        this.title = title
        this.imageUrl = imageUrl
        this.face_id = face_id
        this.category = category
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
    // face.style.backgroundImage = `url(src/images/expressions/${facePic.imageUrl})`
  }

const resetFace = function(){
    getFace('happy')
}

const scaredFace = function() {
    getFace('nervous')
}

let startCrying = setInterval(() => {if (executeInterval){cry()}}, 1000)

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

function expressionLevel(){
    let rage = selectedAvatar.damage

    if (rage <= 4){ getFace('happy') } else
    if (rage < 10){ getFace('wink') } else
    if (rage < 15){ getFace('tired') } else    
    if (rage < 20){ getFace('nervous') } else    
    if (rage < 25){ getFace('surprised') } else    
    if (rage < 30){ getFace('angry') } else
    if (rage < 35){ getFace('scream') } else  
    if (rage < 40){ getFace('mad') } else  
    if (rage < 45){ getFace('rage') } else
    if (rage >= 45){ getFace('scream big') } else
    { getFace('confused')}
}





  