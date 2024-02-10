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