// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get all markers
    const markers = document.querySelectorAll(".map-div img");

    // Iterate over each marker
    markers.forEach(marker => {
        // Add a click event listener to each marker
        marker.addEventListener("click", function() {
            // Hide all hidden divs first
            const hiddenDivs = document.querySelectorAll(".hidden-div");
            hiddenDivs.forEach(div => {
                div.style.display = "none";
            });

            // Show the corresponding hidden div
            const divId = marker.id + "-div";
            const targetDiv = document.getElementById(divId);
            if (targetDiv) {
                targetDiv.style.display = "block";
                targetDiv.style.top = "50%"; // Adjust as needed
                targetDiv.style.left = "50%"; // Adjust as needed
                targetDiv.style.transform = "translate(-50%, -50%)"; // Center the div
            }

            // Optional: Add a close button to each hidden div
            if (!targetDiv.querySelector("button")) {
                const closeButton = document.createElement("button");
                closeButton.innerHTML = "Close";
                targetDiv.appendChild(closeButton);

                // Add event listener to close button to hide the div
                closeButton.addEventListener("click", function() {
                    targetDiv.style.display = "none";
                });
            }
        });
    });
});

