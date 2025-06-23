const Notifs = document.querySelectorAll(".Notif");
const Counter = document.getElementById("Counter");
var CounterNum = Number(Counter.innerText);

Notifs.forEach((item) =>
    item.addEventListener("click", () => {
        if(item.classList.contains("UnRead")){
            item.classList.remove("UnRead");
            CounterNum --;
            Counter.innerText = CounterNum;
        }
    })
);


function MarkAllRead() {
    for (i = 0; i < Notifs.length; i++) {
        Notifs[i].classList.remove("UnRead");
    }
    Counter.innerText = "0";
}