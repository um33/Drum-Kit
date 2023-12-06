
for(var i=0; i < document.querySelectorAll("button").length; i++){
    document.querySelectorAll("button")[i].addEventListener("click",function (){
    var buttonHtml = this.innerHTML;
    makeSound(buttonHtml);
    buttonAnimantion(buttonHtml);
});
}

document.addEventListener("keypress", function(event){
    var eventHtml = event.key;
    makeSound(eventHtml);
    buttonAnimantion(eventHtml);
    });

function makeSound(event){
    switch (event) {
        case "w":
            var audio = new Audio("/sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("/sounds/kick-bass.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("/sounds/snare.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("/sounds/tom-1.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("/sounds/tom-2.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("/sounds/tom-3.mp3");
            audio.play();
            break;
        default:
            var audio = new Audio("/sounds/tom-4.mp3");
            audio.play();
            break;
       } 
}
function buttonAnimantion(currentKey){
    var button = document.querySelector("." + currentKey);
    button.classList.add("pressed");
    setTimeout(function (){ button.classList.remove("pressed")},100);
}