const menu = document.querySelector('#mobile-menu');
const menulinks = document.querySelector('.navbar__menu');
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li'); // FIXED
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () => { // FIXED
        select.classList.toggle('select-clicked'); // FIXED
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked'); // FIXED
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');

            options.forEach(opt => { // Ensure we remove 'active' from all options
                opt.classList.remove('active');
            });
            option.classList.add('active');
        });
    });
});




menu.addEventListener('click', function()
{
    menu.classList.toggle('is-active')
    menulinks.classList.toggle('active')
})

document.getElementById("feedbackform").addEventListener("submit", function(event) {
    event.preventDefault();
    const message = document.getElementById("msg").value;

    fetch("https://discord.com/api/webhooks/1338795167922262077/6e4G5oSuGZSTYKm9eYVCnF5ZNCm444OM_9UIK0qxq82kDKv1kCYzSYkFPvWmnMfKYY62", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: `📩 New Feedback: ${message}` })
    }).then(response => {
        if (response.ok) alert("Feedback sent to Discord!");
    }).catch(error => console.error("Error:", error));
});



document.addEventListener("DOMContentLoaded", function() {
    const feedbackForm = document.getElementById("feedbackForm");
    
    feedbackForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from refreshing the page
        
        // Get the value from the textarea
        const message = document.getElementById("msg").value;
        
        // Send feedback to the server (or Discord in your case)
        fetch("", { // Replace with your server URL
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message })
        })
        .then(response => {
            if (response.ok) {
                alert("Feedback sent successfully!");
                
                // Clear the textarea after successful submission
                document.getElementById("msg").value = "";
            } else {
                alert("Something went wrong. Please try again.");
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Error sending feedback. Please try again.");
        });
    });
});