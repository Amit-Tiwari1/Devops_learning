let count = 0

function changeCount(){
const getAllH2Tags = document.querySelectorAll("h2");
getAllH2Tags[0].innerHTML= count;
count = count + 1
}

setInterval(changeCount,1000)

