let turn = 'x'
function game(id){
    let ele =document.getElementById(id)
    if (turn === 'x' && ele.innerHTML == '') {
        ele.innerHTML="x"
        turn='o';

    }else if(turn === 'o' && ele.innerHTML == ''){
        ele.innerHTML="o"
        turn='x';
    }
    win()
}


function win(){
    console.log("win");
}