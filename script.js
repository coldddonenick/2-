document.addEventListener("DOMContentLoaded", function () {
    const blocks = document.querySelectorAll(".block");

    function checkVisibility() {
        blocks.forEach(block => {
            const rect = block.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                block.classList.add("visible");
                setTimeout(() => {
                    block.classList.add("disappearing");
                }, 5000); // Исчезновение через 5 секунд после появления
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility();
});
