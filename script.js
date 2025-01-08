const track = document.getElementById("image-track");

// Variables to handle mouse movement
let isDragging = false;
let startX = 0;

window.onmousedown = (e) => {
    isDragging = true;
    track.dataset.mouseDownAt = e.clientX;
};

window.onmousemove = (e) => {
    if (!isDragging || track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
    const maxDelta = window.innerWidth / 2;

    // Calculate percentage
    const percentage = (mouseDelta / maxDelta) * -100;
    let nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;

    // Constrain the percentage
    nextPercentage = Math.max(Math.min(nextPercentage, 0), -100);

    // Update data and styles
    track.dataset.percentage = nextPercentage;
    track.style.transform = `translate(${nextPercentage}%, -50%)`;

    // Update object positions of images
    for (const image of track.getElementsByClassName("image")) {
        image.style.objectPosition = `${nextPercentage + 100}% 50%`;
    }
};

window.onmouseup = () => {
    isDragging = false;
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
};
