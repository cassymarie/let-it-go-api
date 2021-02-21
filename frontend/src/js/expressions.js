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

class Face{
    static all = [];
    constructor({id, name, initial}){
        this.id = id
        this.name = name
        this.initial = initial
        Face.all.push(this)
    }
}

// ------------------------------------------------------------------
// CRUD
// ------------------------------------------------------------------
function getExpressions(){
    fetch(`${base_url}faces`)
    .then(resp => resp.json())
    .then(json => {

        json.data.forEach(face => {
            new Face(face.attributes)
        })
        json.included.forEach(expression => {new Expression(expression.attributes)})
    })
}



const getFace = function(description) {
    let arr = selectedAvatar.myExpressions()
    let pic = arr.find(x => x.title === description)
    debugger
    avatarFace.style.backgroundImage = `url(src/images/expressions/${pic.face_id}/${pic.category}/${pic.imageUrl})`
  }

const resetFace = function(){
    getFace('happy')
}

const scaredFace = function() {
    getFace('nervous')
}

let startCrying = setInterval(() => {if (executeInterval){cry()}}, 1000)

function cry(){
    if (timer === 12){
        executeInterval = false
        timer = 0
        clearInterval(startCrying)
        avatar.className = 'animate__animated animate__bounceOut'

    }

    if (timer < 3){
        if (timer % 2 == 0){ getFace('quiver_1') } 
        else { getFace('quiver_2') }} else 
    if (timer >= 3 && timer < 7 ){
        if (timer % 2 == 0){ getFace('tears_1') } 
        else { getFace('tears_2') }} else 
    if (timer >= 7 && timer < 12){
        if (timer % 2 == 0){ getFace('cry_1') } 
        else { getFace('cry_2') }
    }
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





  