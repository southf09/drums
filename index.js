const buttons = document.querySelectorAll('.drum')

// for(let i = 0; i < buttons.length; i++){
//     buttons[i].addEventListener('click', () => {
//         alert('Clicked me!');
//     })
// }

for(let button of buttons){
    button.addEventListener('click', () => {
        let sound = new Audio('/sounds/crash.mp3');
        sound.play();
    })
}