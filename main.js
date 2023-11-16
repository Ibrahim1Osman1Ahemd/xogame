let turn = 'x';
let title = document.getElementById('title');
let square1 = document.getElementById('square1')
let square2 = document.getElementById('square2')
let square3 = document.getElementById('square3')
let square4 = document.getElementById('square4')
let square5 = document.getElementById('square5')
let square6 = document.getElementById('square6')
let square7 = document.getElementById('square7')
let square8 = document.getElementById('square8')
let square9= document.getElementById('square9')

function win(){
    if(square1.innerHTML == square2.innerHTML && square2.innerHTML == square3.innerHTML && square1.innerHTML != ''){
        square1.style.background = '#008000a8'
        square2.style.background = '#008000a8'
        square3.style.background = '#008000a8'
        if(turn == 'o'){
            title.innerHTML = 'X win'
        }else{
            title.innerHTML = 'O win'
        }
    } else if(square4.innerHTML == square5.innerHTML && square5.innerHTML == square6.innerHTML && square6.innerHTML != ''){
        square4.style.background = '#008000a8'
        square5.style.background = '#008000a8'
        square6.style.background = '#008000a8'
        if(turn == 'o'){
            title.innerHTML = 'X win'
        }else{
            title.innerHTML = 'O win'
        }
    }else if(square7.innerHTML == square8.innerHTML && square8.innerHTML == square9.innerHTML && square8.innerHTML != ''){
        square7.style.background = '#008000a8'
        square8.style.background = '#008000a8'
        square9.style.background = '#008000a8'
        if(turn == 'o'){
            title.innerHTML = 'X win'
        }else{
            title.innerHTML = 'O win'
        }
    }else if(square1.innerHTML == square4.innerHTML && square4.innerHTML == square7.innerHTML && square7.innerHTML != ''){
        square1.style.background = '#008000a8'
        square4.style.background = '#008000a8'
        square7.style.background = '#008000a8'
        if(turn == 'o'){
            title.innerHTML = 'X win'
        }else{
            title.innerHTML = 'O win'
        }
    }else if(square2.innerHTML == square5.innerHTML && square5.innerHTML == square8.innerHTML && square8.innerHTML != ''){
        square2.style.background = '#008000a8'
        square5.style.background = '#008000a8'
        square8.style.background = '#008000a8'
        if(turn == 'o'){
            title.innerHTML = 'X win'
        }else{
            title.innerHTML = 'O win'
        }
    }else if(square3.innerHTML == square6.innerHTML && square6.innerHTML == square9.innerHTML && square9.innerHTML != ''){
        square3.style.background = '#008000a8'
        square6.style.background = '#008000a8'
        square9.style.background = '#008000a8'
        if(turn == 'o'){
            title.innerHTML = 'X win'
        }else{
            title.innerHTML = 'O win'
        }
    }else if(square1.innerHTML == square5.innerHTML && square5.innerHTML == square9.innerHTML && square5.innerHTML != ''){
        square1.style.background = '#008000a8'
        square5.style.background = '#008000a8'
        square9.style.background = '#008000a8'
        if(turn == 'o'){
            title.innerHTML = 'X win'
        }else{
            title.innerHTML = 'O win'
        }
    }else if(square3.innerHTML == square5.innerHTML && square5.innerHTML == square7.innerHTML && square5.innerHTML != ''){
        square3.style.background = '#008000a8'
        square5.style.background = '#008000a8'
        square7.style.background = '#008000a8'
        if(turn == 'o'){
            title.innerHTML = 'X win'
        }else{
            title.innerHTML = 'O win'
        }
    }
     else if(square1.innerHTML !='' 
     &&square2.innerHTML !=''
     &&square3.innerHTML !=''
     &&square4.innerHTML !=''
     &&square5.innerHTML !=''
     &&square6.innerHTML !=''
     &&square7.innerHTML !=''
     &&square8.innerHTML !=''
     &&square9.innerHTML !=''){
        title.innerHTML = 'Drow';
     };
    
}

function output(id){
    if(title.innerHTML == 'X win' | title.innerHTML  == 'O win'){
      return
    }
    
    if( id.innerHTML == ''){
        if(turn == 'x'){
            id.innerHTML = 'X'
            turn = 'o';
        }else{
            id.innerHTML = 'O'
            turn = 'x'
        }
    }

    trunis()
    win()
    // itsenogh()



}

function trunis(){
    if(turn == 'o'){
        title.innerHTML = 'O turn'
    }else{
        title.innerHTML = 'X turn'
    }
}

// function itsenogh(){
    
// }

function Reload(){

    console.log('j')
  location.reload(40000)
    
}

// function num(num1,num2,num3){
//     `sqaure${num1}`
// }

