// Fora de Uso

const btn = document.querySelector("button");
const divWar = document.querySelector(".check");

const msg = "Email Enviado Com Sucesso!!";

function ativar(msg) {
    const message = document.createElement("div");
    message.classList.add("warn_contact");
    message.innerText = msg;
    divWar.appendChild(message);

    setTimeout(() => {
        message.style.display = "none"
    }, 3000);
}

btn.addEventListener("click", () => {
    ativar(msg)
});