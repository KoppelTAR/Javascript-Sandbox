const myBox = document.querySelector('.box')
const pictureArray = new Array("comp.jpg", "in.jpg", "index.jpg","tumblr_lzpvmrrseC1r03kk7o1_1280.jpg");

myBox.addEventListener("click",choosePic);

let rndPrevVal = 0;

function UpdateRndPrevVal(rnd) {
    rndPrevVal = rnd;
}
function choosePic() {
    let rnd = Math.floor(Math.random()* pictureArray.length);


    
    
    if (rnd === rndPrevVal) {
        console.log(rnd);
        choosePic();

    }
    else {
        document.getElementById("myPicture").src = `img/${pictureArray[rnd]}`;
        UpdateRndPrevVal(rnd);
    }
    
    
}


/*
function choosePic() {
     var randomNum = Math.floor(Math.random() * PictureArray.length);
     var randomNum2 = Math.floor(Math.random() * PictureArray.length);
     if (count != randomNum) 
    {
        document.getElementById("myPicture").src = PictureArray[randomNum];
        console.log(count);
        console.log(randomNum);
        count = randomNum
    }
    else 
    {
        if (randomNum2 == count) {
            if (randomNum > 1 || randomNum < 2) {
                document.getElementById("myPicture").src = PictureArray[randomNum+1];
                console.log(count);
                console.log(randomNum);
                console.log('random greater 1 or smaller than 2');
            }
            else {
                document.getElementById("myPicture").src = PictureArray[randomNum-1];
                console.log(count);
                console.log(randomNum);
            }
        } 
        else {
            document.getElementById("myPicture").src = PictureArray[randomNum];
            console.log(count);
            console.log(randomNum);
            console.log('used second random');
            count = randomNum   
        }
    }
     //document.getElementById("myPicture").src = PictureArray[randomNum];
    }
/*/