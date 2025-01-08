const track = document.getElementById("image-track")


window.onmousedown = e =>{
track.dataset.mouseDownAt = e.clientX;
console.log("hi")
}

window.onmousemove = e =>{
    // if(track.dataset.mouseDownAt === "0") return;
    // const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX
    // Math.min(Math.max(mouseDelta, -maxDelta), maxDelta)
    // track.dataset.percentage = (mouseDelta/maxDelta)*100
    // track.style.transform = `translate(${track.dataset.percentage}%, -50%)`
    // Math.min(track.dataset.percentage, 0)
    // Math.max(track.dataset.percentage, -100)
    if(track.dataset.mouseDownAt === "0") return;
const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX
maxDelta = window.innerWidth/2
const percentage = (mouseDelta/maxDelta)*-100
var nextPercentage = parseFloat(track.dataset.prevPercentage)+ percentage;
track.dataset.percentage = nextPercentage;
track.style.transform = `translate(${nextPercentage}%, -50%)`
Math.min(nextPercentage, 0)
Math.max(nextPercentage, -100)
}


window.onmouseup = e => {
    track.dataset.mouseDownAt = "0" 
    track.dataset.prevPercentage = track.dataset.percentage
}


for(const image of track.getElementsByClassName("image")){
    // image.style.objectPosition = `${nextPercentage + 100} 50%`
    track.animate({
    transform : `translate(${nextPercentage}%, -50%)`
    }, {duration: 1200, fill: "forwards"})

    image.animate({
        objectPosition: `${nextPercentage+100}% center`
    }, {duration: 1200, fill: "forwards"})
}

