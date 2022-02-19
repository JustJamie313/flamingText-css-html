let intervals = [];
function randomizeFlames(factor){
    let letters = document.querySelectorAll('.gradient');
    for(let a=0;a<letters.length;a++){
        letters[a].style.animationPlayState = 'paused';
        setTimeout(function(){
            letters[a].style.animationPlayState = 'running';
        },Math.random()*factor);
    }
}
function setFlameType(type){
    document.querySelector('#currentVersion').innerHTML = `Current Version: <span>${type.toUpperCase()}</span><br>Is Random?: <span id="isRandom" value="${type}">${(type==='css')?'No':'Yes'}</span>`;
    let addTo = document.querySelector('body');
    switch(type){
        case 'css':
            for(let a=intervals.length;a>-1;a--){
                clearInterval(intervals[a]);
            }
            intervals = [];
            let addStyle = document.createElement('style');
            
            addStyle.id = 'addedStyle';
            addTo.appendChild(addStyle);
            addStyle.innerHTML = `h1.gradient:nth-child(1){
                animation-delay: 345ms;
            }
            h1.gradient:nth-child(3){
                animation-delay: 456ms;
            }
            h1.gradient:nth-child(5){
                animation-delay: 254ms;
            }
            h1.gradient:nth-child(7){
                animation-delay: 145ms;
            }
            h1.gradient:nth-child(6){
                animation-delay: 789ms;
            }
            h1.gradient:nth-child(4){
                animation-delay: 34ms;
            }
            h1.gradient:nth-child(2){
                animation-delay: 563ms;
            }`;
        break;
        case 'js':
            let addedStyle = document.querySelector('#addedStyle');
            try{
                addTo.removeChild(addedStyle);
            } catch{}
            let factor = 200;
            let newI = setInterval(function(){
                if(type === 'js'){
                    randomizeFlames(factor);
                }
            },Math.random()*factor);
            intervals.push(newI);
        break;
    }
}
window.addEventListener('load',()=>{
    let flameType = document.querySelector('input[name=version]:checked').value;
    setFlameType(flameType);

    let versions = document.querySelectorAll('input[type=radio]');
    for(let a=0;a<versions.length;a++){
        versions[a].addEventListener('change',event=>{
            flameType = event.target.value;
            setFlameType(flameType);
        });
    }
    
})