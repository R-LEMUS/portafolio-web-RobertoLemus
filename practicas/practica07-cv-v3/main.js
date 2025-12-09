document.addEventListener("DOMContentLoaded", () => {
    const bars = document.querySelectorAll(".bar span");

    bars.forEach(bar => {
        const width = bar.getAttribute("data-width");
        setTimeout(() => {
            bar.style.width = width;
        }, 300);
    });
});