//console.log("Hello from script!");

const myButton = document.querySelector('button');
const myBox = document.querySelector('.box')
const colors = ['red', 'green','blue','yellow']
//console.log(myButton);
var count;

myButton.addEventListener('click', changeColor)

function changeColor(){
    let rnd = Math.floor(Math.random()* colors.length)
    let rnd2 = Math.floor(Math.random()* colors.length)
    if (count != rnd) 
    {
        myBox.style.backgroundColor = colors[rnd];
        console.log(count);
        console.log(rnd);
        count = rnd
    }
    else 
    {
        if (rnd2 == count) {
            if (rnd > 1 || rnd < 2) {
                myBox.style.backgroundColor = colors[rnd2+1];
            }
            else {
                myBox.style.backgroundColor = colors[rnd2-1];
            }
        } 
        else {
            myBox.style.backgroundColor = colors[rnd2];
            console.log(count);
            console.log(rnd);
            console.log('test');
            count = rnd2   
        }
    }
    
}
