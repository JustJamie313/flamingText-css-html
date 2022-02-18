function speakThis(text){
    let utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
}
function randomizeFlames(factor){
    let letters = document.querySelectorAll('.gradient');
    for(let a=0;a<letters.length;a++){
        letters[a].style.animationPlayState = 'paused';
        setTimeout(function(){
            letters[a].style.animationPlayState = 'running';
        },Math.random()*factor);
    }
}
window.addEventListener('load',()=>{
    feather.replace();
    let factor = 50;
    setInterval(function(){
        randomizeFlames(factor);
    },Math.random()*factor);
})
// To view the CSS ONLY version, comment out lines 5-19 above.