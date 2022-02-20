let displayObject;
window.addEventListener('load',function(){
    displayObject = new DisplayClass(document.querySelector('input[name=version]:checked').value,document.querySelector('#flamingText').innerHTML);
    displayObject.buildHTML().then(()=>{
        displayObject.randomize();
    });
    

    let radios = document.querySelectorAll('input[name=version]');
    radios.forEach(element=>{
        element.addEventListener('click',function(event){
            displayObject.updateType(event.target.value);
        });
    });

    document.querySelector('#customText').addEventListener('change',function(event){
        document.querySelector('#flamingText').innerHTML = event.target.value;
        displayObject.updateText(event.target.value);
    })
});
class DisplayClass{
    constructor(type,text){
        this.type = type,
        this.text = text
    }
    buildHTML(){
        let promise = new Promise((resolve,reject)=>{
            let textArray = [];
            console.log(this.text.length);
            for(let a=0;a<this.text.length;a++){
                textArray.push(this.text[a]);
                if(this.text[a] === ' '){
                    textArray.push('&nbsp;');
                }
            }
            let flamingText = document.querySelector('#flamingText');
            flamingText.innerHTML = '';
            textArray.forEach(element => {
                let letter = document.createElement('h1');
                letter.classList.add('gradient');
                letter.innerHTML = `&#8203;${element}`;
                flamingText.appendChild(letter);
            });
            resolve();
        });
        
        return promise;
    }
    randomize(){
        let outputString = '';
        let id='';
        let tag = '';
        let src;
        switch(this.type){
            case 'css':
                for(let a=0;a<this.text.length;a++){
                    outputString += `h1.gradient:nth-child(${a+1}){animation-duration: ${Number(3500-Math.random()*2000).toFixed(2)}ms}`;
                }
                id='addedStyle';
                tag='style';
            break;
            case 'js':
                id='addedScript';
                tag='script';
                src='js/animation.js';
            break;
        }
        let newElement = document.createElement(tag);
        if(src){
            newElement.src = src;
        }
        newElement.id = 'addedStyle';
        newElement.innerHTML = outputString;
        document.querySelector('body').appendChild(newElement);
    }
    clearRandomize(){
        try{
            document.querySelector('body').removeChild(document.querySelector('#addedStyle'));
            document.querySelector('body').removeChild(document.querySelector('#addedScript'));
            let textElementArray = document.querySelectorAll('.gradient');
            textElementArray.forEach(element =>{
                element.style = `unset`;
            });
        } catch(error){

        }
    }
    updateType(type){
        this.clearRandomize();
        this.type = type;
        this.randomize();
    }
    updateText(text){
        this.clearRandomize();
        this.text = text;
        this.buildHTML().then(this.randomize());
        // this.randomize();
    }
}

{/* <h1 class='gradient'>&#8203;D<h1 class='gradient'>&#8203;o<h1 class='gradient'>&#8203;m<h1 class='gradient'>&#8203;e<h1 class='gradient'>&#8203;s<h1 class='gradient'>&#8203;n<h1 class='gradient'>&#8203;e</h1></h1></h1></h1></h1></h1></h1></div> */}