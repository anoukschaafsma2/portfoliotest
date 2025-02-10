document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleButton");
    const iconenContent = document.getElementById("iconenContent");

    toggleButton.addEventListener("click", function () {
        iconenContent.classList.toggle("hidden");
        iconenContent.classList.toggle("visible");

        // Optioneel: verander de tekst van de knop
        if (iconenContent.classList.contains("visible")) {
            toggleButton.textContent = "Verberg bronvermelding";
        } else {
            toggleButton.textContent = "Iconen bronvermelding";
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const scrollContainers = document.querySelectorAll(".telefoon, .smartwatch, .laptop");

    scrollContainers.forEach(container => {
        const arrow = document.createElement("span");
        arrow.innerHTML = "→"; // Pijl naar rechts
        arrow.classList.add("scroll-pijl");
        container.appendChild(arrow);

        container.addEventListener("scroll", () => {
            if (container.scrollLeft > 20) {
                arrow.classList.add("hidden");
            } else {
                arrow.classList.remove("hidden");
            }
        });
    });
});

