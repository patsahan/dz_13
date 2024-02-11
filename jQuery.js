document.addEventListener("DOMContentLoaded", function() {
    const movingObject = document.getElementById("movingObject");
    const moveRectangleBtn = document.getElementById("moveRectangleBtn");
    const moveTriangleBtn = document.getElementById("moveTriangleBtn");
    const resizeOpacityBtn = document.getElementById("resizeOpacityBtn");
    
    let posX = 0;
    let posY = 0;
    let rectWidth = 200;
    let rectHeight = 100;
    
    moveRectangleBtn.addEventListener("click", moveInRectangle);
    moveTriangleBtn.addEventListener("click", moveInTriangle);
    resizeOpacityBtn.addEventListener("click", resizeAndChangeOpacity);
    
    function moveInRectangle() {
        if (posX < rectWidth && posY === 0) {
            posX += 10;
            movingObject.style.left = posX + "px";
        } else if (posX >= rectWidth && posY < rectHeight) {
            posY += 10;
            movingObject.style.top = posY + "px";
        } else if (posY >= rectHeight && posX > 0) {
            posX -= 10;
            movingObject.style.left = posX + "px";
        } else if (posX <= 0 && posY > 0) {
            posY -= 10;
            movingObject.style.top = posY + "px";
        }
    }
    
    function moveInTriangle() {
        if (posX < rectWidth && posY === 0) {
            posX += 10;
            movingObject.style.left = posX + "px";
            movingObject.style.top = posY + "px";
        } else if (posX >= rectWidth && posY < rectHeight) {
            posY += 10;
            movingObject.style.left = posX - (posY * Math.sqrt(3) / 2) + "px";
            movingObject.style.top = posY + "px";
        } else if (posY >= rectHeight && posX > 0) {
            posX -= 10;
            movingObject.style.left = posX + "px";
            movingObject.style.top = posY - rectHeight + "px";
        }
    }
    
    let isResized = false;
    function resizeAndChangeOpacity() {
        if (!isResized) {
            movingObject.style.width = "400px";
            movingObject.style.height = "400px";
            movingObject.style.opacity = 1;
            isResized = true;
        } else {
            movingObject.style.width = "50px";
            movingObject.style.height = "50px";
            movingObject.style.opacity = 0;
            isResized = false;
        }
    }
});