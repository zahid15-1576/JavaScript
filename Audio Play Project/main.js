for(i=0; i<=3; i++){
    document.querySelectorAll(".mybutton")[i].addEventListener("click", function(){

        var text = this.innerHTML;
        console.log(text);
        audio(text);
        
    })
}


function audio(text){
    switch(text){
        case "A":
            var audio = new Audio('audio/1.mp3');
            audio.play();
            break;

        case "B":
            var audio = new Audio('audio/2.mp3');
            audio.play();
            break;
    }
}
