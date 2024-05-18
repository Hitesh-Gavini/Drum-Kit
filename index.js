console.log("first line");

for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    console.log("inside loop");
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    playSound(this.innerHTML);
    buttonHighlight(this.innerHTML);
});
}

console.log("above function");

document.addEventListener("keydown", function(event) {
    playSound(event.key);
    buttonHighlight(event.key);
});

function playSound(key){
    switch(key){
        case "w":
            var audio= new Audio("./sounds/tom-1.mp3");
            audio.play();
            console.log("inside switch");
            break;
        case "a":
            var audio= new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio= new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio= new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio= new Audio("./sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio= new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio=new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;

        default:
    }
}

function buttonHighlight(key){
    document.querySelector("."+key).classList.add("pressed");
    setTimeout(function(){document.querySelector("."+key).classList.remove("pressed");}, 100);

}