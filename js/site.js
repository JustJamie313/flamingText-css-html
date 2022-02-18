function speakThis(text){
    let utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
}
function goToURL(url){
    window.location.href = url;
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
    let factor = 500;

    setInterval(function(){
        randomizeFlames(factor);
    },Math.random()*factor);
})