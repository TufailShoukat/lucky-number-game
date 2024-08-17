
const luckyNumbers = [
    7, 13, 21, 3, 8, 11, 17, 22, 5, 14,
    23, 9, 18, 27, 2, 19, 12, 25, 4, 16
];

var allBoxes  = document.getElementsByClassName("box");

for(var i = 0; i < allBoxes.length; i++){
    allBoxes[i].addEventListener("click" ,function() {
        clearAll();
        const randomNumber = luckyNumbers[Math.floor(Math.random() * luckyNumbers.length)];
        this.style.backgroundColor = "white";
        this.style.color = "black";
        this.innerText = randomNumber;
        
        Swal.fire({
            title: `Your Lucky Number is ${randomNumber}!`,
            text: "Good Luck!",
            icon: 'success',
            confirmButtonText: 'Cool',
            background: '#333',
            color: '#ffcc00',
            confirmButtonColor: '#ffcc00',
            backdrop: `
              rgba(0,0,0,0.8)
              url("https://media.giphy.com/media/l0Exk8EUzSLsrErEQ/giphy.gif")
              left top
              no-repeat
            `,
            showClass: {
                popup: 'animated fadeInDown faster'
            },
            hideClass: {
                popup: 'animated fadeOutUp faster'
            }
        });
    }) 
}

function clearAll() {
    for(var i = 0; i < allBoxes.length; i++){
        allBoxes[i].style.backgroundColor = "#333";
        allBoxes[i].style.color = "white";
        allBoxes[i].innerText = i + 1;
    }
}
