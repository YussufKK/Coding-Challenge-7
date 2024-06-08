document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('feedbackForm');
    const feedbackDisplay = document.getElementById('feedbackDisplay');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const rating = document.getElementById('rating').value;
        const comments = document.getElementById('comments').value.trim();

        if (!name || !rating || !comments) {
            alert("Please fill out all fields.");
            return;
        }

        const feedbackEntry = document.createElement('div');
        feedbackEntry.innerHTML = `
            <h3>${name}</h3>
            <p>Rating: ${rating}</p>
            <p>Comments: ${comments}</p>
            <hr>
        `;

        feedbackDisplay.appendChild(feedbackEntry);

        form.reset();
    });
});