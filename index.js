// index.js
document.addEventListener('DOMContentLoaded', (event) => {
    const mapDiv = document.getElementById('map');
    const mapImage = document.getElementById('map-image');

    let offsetX = 0, offsetY = 0;
    let scale = 1;
    const panSpeed = 50; // Adjust the pan speed as needed
    const edgeBuffer = 100; // Distance from the edge to start panning

    function adjustPosition(cursorX, cursorY) {
        const rect = mapDiv.getBoundingClientRect();
        const imageRect = mapImage.getBoundingClientRect();
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        // Check if the cursor is within the edge buffer from the viewport edges
        if (cursorX < edgeBuffer) {
            offsetX += panSpeed / scale; // Move right
        } else if (cursorX > windowWidth - edgeBuffer) {
            offsetX -= panSpeed / scale; // Move left
        }

        if (cursorY < edgeBuffer) {
            offsetY += panSpeed / scale; // Move down
        } else if (cursorY > windowHeight - edgeBuffer) {
            offsetY -= panSpeed / scale; // Move up
        }

        // Ensure the image does not move outside of the container bounds
        offsetX = Math.max(Math.min(offsetX, 0), -(imageRect.width * scale - rect.width));
        offsetY = Math.max(Math.min(offsetY, 0), -(imageRect.height * scale - rect.height));

        mapImage.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${scale})`;
    }

    function handleMouseMove(e) {
        const cursorX = e.clientX;
        const cursorY = e.clientY;
        adjustPosition(cursorX, cursorY);
    }

    function handleWheel(e) {
        e.preventDefault();
        scale += e.deltaY * -0.001;
        scale = Math.min(Math.max(0.5, scale), 3);
        mapImage.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${scale})`;
        adjustPosition(event.clientX, event.clientY); // Recalculate position after zooming
    }

    window.addEventListener('mousemove', handleMouseMove);
    mapDiv.addEventListener('wheel', handleWheel);
});
