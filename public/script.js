const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');

document.addEventListener("keydown", function(event) {
    jump();
});

function jump() {
    if (dino.classList !="jump") {
        dino.classList.add("jump")
    }
    setTimeout(function() {
    dino.classList.remove("jump")
    }, 500)
}

let isAlive = setInterval(function() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"))
    let cactusleft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))
    if (cactusleft < 50 && cactusleft > 0 && dinoTop >= 140) {
        alert(rand)
        setTimeout(function(){
            window.location.reload()
       }, 5);
    }
}, 10)

var numPool = [ "Мог бы и лучше", "Слабовато", "Хватит фигней маяться", "У меня нет идей что написать", 
"Тебе не надоело проигрывать?", "На этой странице есть секрет)","game over","На этой странице точно есть секрет)",
"not found","err//2%i8ha/dg/i7sd~as","Жду распродажи в стиме","Это уже 4 лаба по информатике",
"Реакт не такая простая вещь(","Пишу этот текст в 23:36","Это моя 3 игра"],
rand = numPool[Math.floor(Math.random() * numPool.length)];



