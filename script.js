let savedOpportunities =
    JSON.parse(localStorage.getItem("savedOpportunities")) || [];

let applications =
    JSON.parse(localStorage.getItem("applications")) || [];

function saveOpportunity(name) {

    if (!savedOpportunities.includes(name)) {
        savedOpportunities.push(name);

        localStorage.setItem(
            "savedOpportunities",
            JSON.stringify(savedOpportunities)
        );

        displaySaved();

        alert(name + " saved successfully!");
    } else {
        alert("Already saved!");
    }
}

function displaySaved() {

    const list = document.getElementById("savedList");

    list.innerHTML = "";

    if (savedOpportunities.length === 0) {
        list.innerHTML = "<li>No saved opportunities yet.</li>";
        return;
    }

    savedOpportunities.forEach(function(item) {

        const li = document.createElement("li");

        li.textContent = "❤️ " + item;

        list.appendChild(li);
    });
}

function applyOpportunity(name) {

    const application = {
        name: name,
        status: "Applied"
    };

    applications.push(application);

    localStorage.setItem(
        "applications",
        JSON.stringify(applications)
    );

    displayApplications();

    alert("Application submitted successfully!");
}

function displayApplications() {

    const container =
        document.getElementById("applicationList");

    container.innerHTML = "";

    if (applications.length === 0) {
        container.innerHTML =
            "<p>No applications yet.</p>";
        return;
    }

    applications.forEach(function(application) {

        const div = document.createElement("div");

        div.className = "application";

        div.innerHTML = `
            <strong>${application.name}</strong>
            <p>Status: ${application.status}</p>
        `;

        container.appendChild(div);
    });
}

function searchOpportunities() {

    const search =
        document.getElementById("searchInput")
        .value
        .toLowerCase();

    const cards =
        document.querySelectorAll(".card");

    cards.forEach(function(card) {

        const title =
            card.dataset.title.toLowerCase();

        if (title.includes(search)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

displaySaved();
displayApplications();
