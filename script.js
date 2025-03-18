document.addEventListener("DOMContentLoaded", function() {
    const eventsList = document.getElementById("events-list");

    // Use a sports API (like SportRadar, API-FOOTBALL, or another free service)
    const apiURL = "https://api.api-tennis.com/tennis/?method=get_events&APIkey=YOUR_API_KEY";

    fetch(apiURL)
    .then(response => response.json())
    .then(data => {
        eventsList.innerHTML = "";
        data.result.forEach(event => {
            let listItem = document.createElement("li");
            listItem.textContent = `${event.tournament} - ${event.date}`;
            eventsList.appendChild(listItem);
        });
    })
    .catch(error => {
        eventsList.innerHTML = "<li>Error loading events.</li>";
        console.error("Error fetching data:", error);
    });
});
