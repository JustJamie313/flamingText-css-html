runFunction();
function runFunction(){
    let textElementArray = document.querySelectorAll('.gradient');
    textElementArray.forEach(element =>{
        element.style = `animation-duration: ${Number(2500-(Math.random()*1000)).toFixed(2)}ms`;
    });
    if(document.querySelector('input[name=version]:checked').value === 'js'){
        setTimeout(runFunction,2500);
    } else {
        textElementArray.forEach(element =>{
            element.style = ``;
        });
    }
}