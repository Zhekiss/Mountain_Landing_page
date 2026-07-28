(function () {
    const cards = document.querySelectorAll(".facilities__card");
    const leftBtn = document.querySelector(".facilities__left-btn");
    const rightBtn = document.querySelector(".facilities__right-btn");
    const statsBars = document.querySelectorAll(
        ".facilities__nav__stats-bar span",
    );

    if (!cards.length || !leftBtn || !rightBtn) return;

    let currentIndex = 1;

    function updateCarousel() {
        cards.forEach((card) => {
            card.classList.remove("service-card__active");
            card.style.zIndex = "";
        });

        cards[currentIndex].classList.add("service-card__active");
        cards[currentIndex].style.zIndex = "10";

        statsBars.forEach((bar, i) => {
            bar.style.backgroundColor =
                i === currentIndex
                    ? "var(--primary-cyan)"
                    : "var(--neutral-dark-blue-2)";
        });
    }

    function goForward() {
        currentIndex = (currentIndex + 1) % cards.length;
        updateCarousel();
    }

    function goBackward() {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        updateCarousel();
    }

    rightBtn.addEventListener("click", goForward);
    leftBtn.addEventListener("click", goBackward);

    updateCarousel();
})();
