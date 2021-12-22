function border(){

        document.getElementById("fboys").style.borderBottom="0px";
}
function border1(){
    document.getElementById("fboys").style.borderBottom="3px solid #5465FF";
}


function lDivcolor(element){

    console.log("Clicked");
    for(let i=0;i<7;i++){
    document.getElementsByClassName('ldiv')[i].classList.remove('color');
    }

    document.getElementById(element).classList.add('color');
    
    for(let i=0;i<7;i++){
        document.getElementsByClassName('rdiv')[i].style.display='none';
        }
     document.getElementsByClassName(element)[0].style.display='block';
}

function readmore(i){
    
    if(document.getElementsByClassName("second")[i].style.display=="none"){
        document.getElementsByClassName("readmore")[i].innerHTML="Read less...";
        document.getElementsByClassName("second")[i].style.display="block";
        document.getElementsByClassName("rdiv")[i].style.overflow="scroll";
    }
    else{
        document.getElementsByClassName("readmore")[i].innerHTML="Read more...";
        document.getElementsByClassName("second")[i].style.display="none";
        document.getElementsByClassName("rdiv")[i].style.overflow="hidden";
    }

}