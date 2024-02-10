document.addEventListener('DOMContentLoaded', event => {
    // Function to update time
    const updateTime = () => {
        const currentDate = new Date();
        let year = currentDate.getFullYear();
        let month = currentDate.getMonth() + 1; // Adding 1 because getMonth() returns 0-11
        let day = currentDate.getDate(); // Changed from getDay() to getDate() for the day of the month
        let hour = currentDate.getHours();
        let minutes = currentDate.getMinutes();
        let seconds = currentDate.getSeconds();

        // Format numbers to ensure two digits
        month = month < 10 ? `0${month}` : month;
        day = day < 10 ? `0${day}` : day;
        hour = hour < 10 ? `0${hour}` : hour;
        minutes = minutes < 10 ? `0${minutes}` : minutes;
        seconds = seconds < 10 ? `0${seconds}` : seconds;

        const fullTime = `${day}/${month}/${year} ${hour}:${minutes}:${seconds}`

        document.getElementById('copyright').innerHTML = `Copyright Flakio &copy; ${fullTime}`;
    };

    // Update time immediately and then set an interval to update every second (1000 milliseconds)
    updateTime();
    setInterval(updateTime, 1000);
});

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

function showMenu() {
    var element = document.body;
    element.classList.toggle("show-menu");
}

const form = document.getElementById('skill-form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const skill = form.elements['skills-choice'].value.trim(); // Trim whitespace
    const skillContainer = document.getElementById('skill-list-container');
    
    // Check if the skill already exists
    let existingSkills = skillContainer.getElementsByClassName('skill-item');
    let isUnique = true;
    for (let i = 0; i < existingSkills.length; i++) {
        if (existingSkills[i].textContent.includes(skill)) {
            isUnique = false;
            break;
        }
    }

    if (isUnique) {
        let uniqueId = Date.now(); // Append current timestamp for uniqueness

        skillContainer.innerHTML += `<div class="skill-item" id="${uniqueId}">${skill}<button class="deleteButton" data-id="${uniqueId}">X</button></div>`;
        form.reset()
    } else {
        alert("This skill has already been added."); // Feedback for duplicate entry
        
    }
});

// Use event delegation for dynamically added elements
document.addEventListener('click', function (event) {
    if (event.target && event.target.className === 'deleteButton') {
        const idToDelete = event.target.getAttribute('data-id');
        const elementToRemove = document.getElementById(idToDelete);
        if (elementToRemove) {
            elementToRemove.remove(); // Directly remove the skill item
        }
    }
});



