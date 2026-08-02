// =========================
// Wedding Countdown
// =========================

const weddingDate = new Date("August 18, 2026 14:00:00").getTime();

const countdown = setInterval(function () {

    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const timer = document.getElementById("countdown");

    if (timer) {
        timer.innerHTML =
            days + " Days " +
            hours + " Hours " +
            minutes + " Minutes " +
            seconds + " Seconds";
    }

    if (distance < 0) {
        clearInterval(countdown);

        if (timer) {
            timer.innerHTML = "Today is our Wedding Day!";
        }
    }

}, 1000);


// =========================
// Smooth Scroll
// =========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });

    });

});


// =========================
// Fade In Animation
// =========================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

});

document.querySelectorAll(".fade-in").forEach(el => {
    observer.observe(el);
});


// =========================
// View Invitation Button
// =========================

const inviteButton = document.querySelector(".btn-custom");

if (inviteButton) {

    inviteButton.addEventListener("mouseover", function () {
        inviteButton.style.transform = "scale(1.05)";
    });

    inviteButton.addEventListener("mouseout", function () {
        inviteButton.style.transform = "scale(1)";
    });

}
