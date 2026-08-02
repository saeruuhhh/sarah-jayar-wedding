document.addEventListener("DOMContentLoaded", function () {

    // =====================================
    // Wedding Countdown
    // August 18, 2026 at 2:00 PM
    // Philippine time
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

            countdown.textContent =
                "💍 Today is our Wedding Day!";

            return;
        }

        const days =
            Math.floor(distance / 86400000);

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

    const form =
        document.getElementById("rsvpForm");

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

        console.error(
            "RSVP setup error: one or more RSVP elements are missing."
        );

        return;
    }

    let submissionStarted = false;

    form.addEventListener("submit", function () {

        submissionStarted = true;

        successMessage.style.display = "none";

        submitButton.disabled = true;

        submitButton.textContent = "Submitting...";
    });

    submissionFrame.addEventListener("load", function () {

        // Ignore the iframe's initial blank-page load.
        if (!submissionStarted) {
            return;
        }

        submissionStarted = false;

        form.reset();

        submitButton.disabled = false;

        submitButton.textContent = "Submit RSVP";

        successMessage.style.display = "block";

        successMessage.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    });

});
