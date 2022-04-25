// Store the wallet amount to your local storage with key "amount"
document.getElementById("add_to_wallet").addEventListener("click",addamount);

let wallet = JSON.parse(localStorage.getItem("amount")) || [];

function addamount(){
    let amount = document.getElementById("amount").value;

    wallet+=amount;
    localStorage.setItem("amount",JSON.stringify(wallet))
    window.location.reload();
}
document.getElementById("wallet").innerText=wallet