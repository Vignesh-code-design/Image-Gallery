// document.querySelectorAll('.pictures img').forEach(image => {
//     image.onclick = () => {
        
//     }
// });
    document.querySelector('.popup span').onclick = () => {
    document.querySelector('.popup').style.display = 'none';
}

let image=document.querySelectorAll('.image img');

let currentIndex=0;

function show(index){
        currentIndex=index;
        document.querySelectorAll('.pictures img').forEach(image => {
            
                document.querySelector('.popup').style.display = 'block';
        });
        displayImage(index);
}
 function displayImage(index){
    let a=index;
    if(a==0){
        document.querySelector('.prev').style.display='none';
    }
    else if(a==image.length-1){
        document.querySelector('.next').style.display='none';
    }

    let popupimage=document.querySelector('.popup img');
    popupimage.src = image[a].src;

    let pagecount=document.querySelector('.pagecounter');
    pagecount.textContent=`Page ${index + 1} of ${image.length}`;
}

function next(){
    
    currentIndex=(currentIndex+1);
    document.querySelector('.prev').style.display='block';

    displayImage(currentIndex);
}
function prev(){
    currentIndex=(currentIndex-1)//1
    document.querySelector('.next').style.display='block';
    displayImage(currentIndex);
}

document.addEventListener("keydown",event=>{
    if(event.key.startsWith("Arrow")){
        switch(event.key){
            case "ArrowLeft":
                prev();
                break;
            case "ArrowRight":
                next();
                break;
        }
    }
    else if(event.key.startsWith("Escape")){
        if(event.key=="Escape"){
            document.querySelector('.popup').style.display = 'none';

        }
    }
})