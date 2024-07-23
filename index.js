// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get all markers
    const markers = document.querySelectorAll(".map-div img");

    // Iterate over each marker
    markers.forEach(marker => {
        // Add a click event listener to each marker
        marker.addEventListener("click", function() {
            // Create a new blank div
            const blankDiv = document.createElement("div");
            blankDiv.classList.add("blank-div");

            // Style the blank div (optional, you can move this to CSS)
            blankDiv.style.position = "absolute";
            blankDiv.style.width = "200px";
            blankDiv.style.height = "100px";
            blankDiv.style.backgroundColor = "white";
            blankDiv.style.border = "1px solid black";
            blankDiv.style.top = "50%";
            blankDiv.style.left = "50%";
            blankDiv.style.transform = "translate(-50%, -50%)";

            // Append the blank div to the map div
            document.getElementById("map").appendChild(blankDiv);

            // Optional: Add a close button to the blank div
            const closeButton = document.createElement("button");
            closeButton.innerHTML = "Close";
            closeButton.style.position = "absolute";
            closeButton.style.top = "5px";
            closeButton.style.right = "5px";
            blankDiv.appendChild(closeButton);

            // Add event listener to close button to remove the blank div
            closeButton.addEventListener("click", function() {
                blankDiv.remove();
            });
        });
    });
});
