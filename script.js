const ticketContainer = document.getElementById("ticketContainer");

tickets.forEach(ticket => {

    const ticketCard = document.createElement("div");
    ticketCard.className = "ticket";

    ticketCard.innerHTML = `
        <div class="ticketHeader">
            <h2>🎟 Ticket #${ticket.id}</h2>
            <p>Brazil 🇧🇷 vs Norway 🇳🇴</p>
        </div>

        <div class="codeBox">
            <input
                type="password"
                id="code-${ticket.id}"
                placeholder="Enter Secret Code">

            <button onclick="revealPlayers(${ticket.id})">
                Reveal Players
            </button>
        </div>

        <div class="players" id="players-${ticket.id}">

            <div class="playerCard">
                <img src="${ticket.brazil.image}" alt="">
                <div class="team">🇧🇷 Brazil</div>
                <div class="playerName">${ticket.brazil.name}</div>
                <div class="playerNumber">#${ticket.brazil.number}</div>
            </div>

            <div class="playerCard">
                <img src="${ticket.norway.image}" alt="">
                <div class="team">🇳🇴 Norway</div>
                <div class="playerName">${ticket.norway.name}</div>
                <div class="playerNumber">#${ticket.norway.number}</div>
            </div>

        </div>
    `;

    ticketContainer.appendChild(ticketCard);

});

function revealPlayers(id){

    const input = document.getElementById(`code-${id}`);

    if(input.value.trim().toUpperCase() !== REVEAL_CODE){

        alert("Wrong Secret Code!");

        return;

    }

    document.getElementById(`players-${id}`).style.display = "block";

    input.style.display = "none";

    input.nextElementSibling.style.display = "none";

}
