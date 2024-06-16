
    document.addEventListener("DOMContentLoaded", function() {
        const triggers = document.querySelectorAll(".acodeon .trigger");

        triggers.forEach(trigger => {
            trigger.addEventListener("click", function() {
                const acordeon = this.parentElement;
                acordeon.classList.toggle("open");
            });
        });
    });

