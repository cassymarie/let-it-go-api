'use strict'

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
    // debugger
    let facePic = Expression.all.find(x => x.description === description)
    face.style.backgroundImage = `url(src/images/expressions/${facePic.imageUrl})`;
  }

  const resetFace = function(){
    getFace('happy')
  }

  const scaredFace = function() {
    getFace('winse')
  }