/*let Button=document.querySelector('.button');
let themeButton = document.querySelector('.tooltip-button');
let parent= document.querySelector('.squares');

themeButton.onclick = function () {
  
    let newItem=document.createElement('li');
    parent.append(newItem);
    let newBox=document.createElement('div');
    newBox.classList.add('button');
    newBox.classList.add('bright');
    newItem.append(newBox);
};*/


let comments_Section=document.querySelector('.commentsSection');
let commentForm=document.querySelector('.addForm');
let inputfield=document.querySelector('.inputField');
let mark=document.querySelectorAll('.mark');
let ans;
let charCounter=document.querySelector('.char-counter');
let submitButton=document.querySelector('.button');
for(let marks of mark){
    marks.onclick = function() {
        ans=marks.dataset.evaluation;
        //console.log(ans);
    }

}
inputfield.oninput=function(){
    
    charCounter.textContent=inputfield.value.length;
    if(inputfield.value.length>142){
        submitButton.disabled=true;
    }
    else{
        submitButton.disabled=false;
    }
}


commentForm.onsubmit=function(evt){
        evt.preventDefault();
        let newComment= document.createElement('li');
        comments_Section.append(newComment);
        newComment.classList.add('comment');
        let newEmodzi=document.createElement('div');
        newComment.append(newEmodzi);
        newEmodzi.classList.add('emodzi');
        if(ans==='verybad'){
            newEmodzi.classList.add('verybad');
            console.log('ans');
        }
        else if(ans==='bad'){
            newEmodzi.classList.add('bad');
        }
        else if(ans==='better'){
            newEmodzi.classList.add('better');
        }
        else if(ans==='ok'){
            newEmodzi.classList.add('ok');
        }
        else if(ans==='good'){
            newEmodzi.classList.add('good');
        }
        else{
            newEmodzi.classList.add('verygood');
        }
        let newP=document.createElement('p');
        
        newP.textContent=inputfield.value;
        inputfield.value='';
        charCounter.textContent='0';
        newComment.append(newP);
        
        
    }


  

   

