const userName = prompt("Come ti chiami?");
const lastName = prompt("Qual'è il tuo cognome?");
const prefColor = prompt("Qual'è il tuo colore preferito");
const number_21 = "21"

const password = userName + lastName + prefColor;

document.getElementById("my_password").innerHTML = password + number_21;