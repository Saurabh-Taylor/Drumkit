function handleClicks(params) {
    let buttonInnerHTML = this.innerHTML
    soundAnimation(buttonInnerHTML)

    animationKey(buttonInnerHTML)
 
}


let keyPressed = document.querySelectorAll(".drum")

keyPressed.forEach((Element)=>{
    Element.addEventListener("click",handleClicks)
})

document.body.addEventListener("keypress",(e)=>{
    soundAnimation(e.key)
    animationKey(e.key)
})

function soundAnimation(key) {
    switch (key) {
        case "w":
            let w = new Audio("./sounds/crash.mp3")
            w.play()
            break;
        case "a":
            let a = new Audio("./sounds/kick-bass.mp3")
            a.play()
            break;
        case "s":
            let s = new Audio("./sounds/snare.mp3")
            s.play()
            break;
        case "d":
            let d = new Audio("./sounds/tom-1.mp3")
            d.play()
            break;
        case "j":
            let j = new Audio("./sounds/tom-2.mp3")
            j.play()
            break;
        case "k":
            let k = new Audio("./sounds/tom-3.mp3")
            k.play()
            break;
        case "l":
            let l = new Audio("./sounds/tom-4.mp3")
            l.play()
            break;

    }
}

function animationKey(currentKey) {
    
    let activeButton = document.body.querySelector("." + currentKey)
    activeButton.classList.add("pressed")
    setTimeout(() => {
        activeButton.classList.remove("pressed")
    }, 100);

}

