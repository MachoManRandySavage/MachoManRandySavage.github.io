var prev = document.getElementById("prev");
var next = document.getElementById("next");
var Jord = document.getElementById('Jord');
var imagePos = 0;
var JordClose = document.getElementById("JordClose");
var comic = document.getElementById('image');
//This makes the previous button change pages.
prev.addEventListener('click', function(){
    imagePos--;
    if(imagePos < 0){
        imagePos = 0;
    }
    galleryChange();
});
//This makes the next button change pages.
next.addEventListener('click', function(){
    imagePos++;
    galleryChange();
});
//this sometimes positions the images at the bottom to be at the middle of the screen. It doesn't work sometimes.
var left = screen.width/2 - 361/2;
var lef = screen.width/2 - 285/2;
Jord.style.left = left + 'px';
JordClose.style.left = lef + "px";
// These are the comic pages. 
function galleryChange(){
    switch(imagePos){
        case 0:
            comic.src="Jordancomic1.jpg";
        break;
        case 1:
            comic.src="Jordancomic2.jpg";
            break;
        case 2:
        comic.src="Jordancomic3.jpg";
        break;
        case 3:
            comic.src="Jordancomic4.jpg";
            break;
            case 4:
                comic.src="Jordancomic5.jpg";
                break;
                case 5:
                    comic.src="Jordancomic6.jpg";
                    break;
                    case 6:
                        comic.src="Jordancomic7.jpg";
                        break;
                        case 7:
                            comic.src="Jordancomic8.jpg";
                            break;
                            case 8:
                                comic.src="Jordancomic9.jpg";
                                break;
                                case 9:
                                    comic.src="Jordancomic10.jpg";
                                    break;
                                    case 10:
                                        comic.src="Jordancomic11.jpg";
                                        break;
                                        case 11:
                                        comic.src="Jordancomic12.jpg";
                                        break;
                                        case 12:
                                        comic.src="Jordancomic13.jpg";
                                        break;
                                        case 13:
                                        comic.src="Jordancomic14.jpg";
                                        break;
                                        case 14:
                                        comic.src="Jordancomic15.jpg";
                                        break;
                                        case 15:
                                        comic.src="Jordancomic16.jpg";
                                        break;
                                        case 16:
                                        comic.src="Jordancomic17.jpg";
                                        break;
                                        case 17:
                                        comic.src="Jordancomic18.jpg";
                                        break;
                                        case 18:
                                        comic.src="Jordancomic19.jpg";
                                        break;
                                        case 19:
                                        comic.src="Jordancomic20.jpg";
                                        break;
                                        case 20:
                                        comic.src="Jordancomic21.jpg";
                                        break;
                                        case 21:
                                        comic.src="Jordancomic22.jpg";
                                        break;
                                        case 22:
                                        comic.src="Jordancomic23.jpg";
                                        break;
                                        
    }
}
