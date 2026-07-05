const SECRET_CODE = "VINILAAND";

const unlockBtn = document.getElementById("unlockBtn");
const ticketContainer = document.getElementById("ticketContainer");

unlockBtn.onclick = function () {

    const code = prompt("Enter Secret Code");

    if (code !== SECRET_CODE) {
        alert("Wrong Code!");
        return;
    }

    unlockBtn.style.display = "none";

    players.forEach(ticket => {

        ticketContainer.innerHTML += `

        <div class="ticket">

            <h2>🎟 Ticket ${ticket.id}</h2>

            <div class="player">
                <img src="${ticket.brazil.image}">
                <h3>🇧🇷 ${ticket.brazil.name}</h3>
            </div>

            <hr>

            <div class="player">
                <img src="${ticket.norway.image}">
                <h3>🇳🇴 ${ticket.norway.name}</h3>
            </div>

        </div>

        `;

    });

};
