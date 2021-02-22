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
    avatarFace.style.backgroundImage = `url(src/images/expressions/${pic.face_id}/${pic.category}/${pic.imageUrl})`
  }

const randoFace = function(cat){
    let list = selectedAvatar.myExpressions().filter(x => x.category === cat)
    let randoFace = list[randomNumber(list.length)].title
    getFace(randoFace)
}

let startCrying = setInterval(() => {if (executeInterval){cry()}}, 1000)

function cry(){
    clearItem()
    if (timer === 10){
        executeInterval = false
        timer = 0
        clearInterval(startCrying)
        clearBubble()
        avatar.className = 'animate__animated animate__bounceOut'
        setTimeout(endBattle, 1000)
    }

    if (timer < 2){
        if (timer % 2 == 0){ getFace('quiver_1') } 
        else { getFace('quiver_2') }} else 
    if (timer >= 2 && timer < 6 ){
        if (timer % 2 == 0){ getFace('tears_1') } 
        else { getFace('tears_2') }} else 
    if (timer >= 6 && timer < 10){
        if (timer % 2 == 0){ getFace('cry_1') } 
        else { getFace('cry_2') }
    }
    timer += 1
}

function expressionLevel(){
    let rage = selectedAvatar.damage

    if (rage < 8){ randoFace('happy') } else
    if (rage >= 8 && rage < 16){ randoFace('taunt') } else    
    if (rage >= 16 && rage < 25){ randoFace('nervous') } else    
    if (rage >= 25 && rage < 35){ randoFace('stunned') } else    
    if (rage >= 35){ randoFace('angry') }
}





  