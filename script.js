document.addEventListener("DOMContentLoaded", function () {

    // =====================================
    // Wedding Countdown
    // =====================================

    const countdown = document.getElementById("countdown");

    const weddingDate =
        new Date("2026-08-18T14:00:00+08:00").getTime();

    function updateCountdown() {

        if (!countdown) {
            return;
        }

        const distance = weddingDate - Date.now();

        if (distance <= 0) {
            countdown.textContent = "💍 Today is our Wedding Day!";
            return;
        }

        const days = Math.floor(distance / 86400000);

        const hours =
            Math.floor((distance % 86400000) / 3600000);

        const minutes =
            Math.floor((distance % 3600000) / 60000);

        const seconds =
            Math.floor((distance % 60000) / 1000);

        countdown.textContent =
            `${days} Days ${hours} Hours ` +
            `${minutes} Minutes ${seconds} Seconds`;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);


    // =====================================
    // RSVP Submission
    // =====================================

    const form = document.getElementById("rsvpForm");

    const submissionFrame =
        document.getElementById("rsvpSubmissionFrame");

    const successMessage =
        document.getElementById("successMessage");

    const submitButton =
        document.getElementById("rsvpSubmitButton");

    if (
        !form ||
        !submissionFrame ||
        !successMessage ||
        !submitButton
    ) {
        console.error("One or more RSVP elements are missing.");
        return;
    }

    let submissionStarted = false;
    let confirmationTimer;

    function showConfirmation() {

        if (!submissionStarted) {
            return;
        }

        submissionStarted = false;

        clearTimeout(confirmationTimer);

        // Hide the form so the guest cannot submit repeatedly.
        form.style.display = "none";

        successMessage.style.display = "block";

        successMessage.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }

    form.addEventListener("submit", function () {

        submissionStarted = true;

        submitButton.disabled = true;
        submitButton.textContent = "Submitting...";

        successMessage.style.display = "none";

        /*
         * Fallback confirmation:
         * Some browsers do not reliably report the Google Forms
         * iframe load event.
         */
        confirmationTimer =
            setTimeout(showConfirmation, 1500);
    });

    submissionFrame.addEventListener("load", function () {

        // Ignore the iframe's initial blank load.
        if (!submissionStarted) {
            return;
        }

        showConfirmation();
    });

});
