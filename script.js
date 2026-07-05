const container = document.getElementById("ticketContainer");

tickets.forEach(ticket => {

    container.innerHTML += `
        <div class="ticket">

            <div class="ticketHeader">
                <h2>Ticket #${ticket.id}</h2>
                <p>Brazil 🇧🇷 vs Norway 🇳🇴</p>
            </div>

            <div class="codeBox">
                <input
                    type="password"
                    id="code-${ticket.id}"
                    placeholder="Enter Secret Code">

                <button onclick="reveal(${ticket.id})">
                    Reveal Players
                </button>
            </div>

            <div class="players" id="players-${ticket.id}" style="display:none;">

                <div class="playerCard">
                    <img src="${ticket.brazil.image}">
                    <div class="team">🇧🇷 Brazil</div>
                    <div class="playerName">${ticket.brazil.name}</div>
                </div>

                <div class="playerCard">
                    <img src="${ticket.norway.image}">
                    <div class="team">🇳🇴 Norway</div>
                    <div class="playerName">${ticket.norway.name}</div>
                </div>

            </div>

        </div>
    `;

});

function reveal(id){

    const code = document.getElementById(`code-${id}`).value.trim();

    if(code !== REVEAL_CODE){
        alert("Wrong Secret Code");
        return;
    }

    document.getElementById(`players-${id}`).style.display = "block";
}
