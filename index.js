const buttons = document.querySelectorAll('.drum');
// const numberOfButtons = document.querySelectorAll('.drum').length;

// for(let i = 0; i < buttons.length; i++){
//     buttons[i].addEventListener('click', () => {
//         alert('Clicked me!');
//     })
// }

for(let button of buttons){
    button.addEventListener('click', function(){
        // console.log(this.innerHTML);
        this.classList.add('pressed');
    })
}

// for(let i = 0; i < numberOfButtons; i++){
//     document.querySelectorAll('.drum')[i].addEventListener('click', () => {
//         console.log(this);
//     })
// }

// let sound = new Audio('/sounds/crash.mp3');
//         sound.play();


//Constructer function for a housekeeper
