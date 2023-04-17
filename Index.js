// Variables

var debounce = false;
var state = false;
const icon_wrapper = document.getElementsByClassName("icon-wrapper")
const menu = document.getElementsByClassName("menu")[0];
const side_arrow_button = document.getElementById("side-arrow");
const side_arrow_image = side_arrow_button.childNodes[1];

// Functions

function fixImageDrag() {
    const images = document.getElementsByTagName('img')
    for (i = 0; i < images.length; i++) {
        images[i].ondragstart = () => {
            return false;
        }
    }
}

function bootstrap() {
    // Get all images and fix the drag thing
    fixImageDrag();
}

// Connections

side_arrow_button.onclick = () => {

    // Give the side arrow its properties
    side_arrow_button.classList.add("disabled");
   side_arrow_button.style.width = "2.5rem";
   side_arrow_button.style.height = "2.5rem";
   side_arrow_button.style.backgroundColor = "rgb(30,30,30)";
   side_arrow_button.style.border = "5px solid white";
   side_arrow_button.style.boxShadow = "0 0 10px white";
   side_arrow_button.style.marginLeft = "0rem";
   
   // Give the arrow image its properties
    side_arrow_image.style.width = "30px";
    side_arrow_image.style.height = "30px";
    side_arrow_image.style.filter = "invert(1) drop-shadow(0 0 5px white)";

    // Give menu its properties
    menu.classList.add("open");

    // Give icon wrappers their properties
    for (i = 0; i < icon_wrapper.length; i++) {
        icon_wrapper[i].classList.add("open-icon-wrapper");
        icon_wrapper[i].classList.add("disabled");
    }

}

// Main

bootstrap();
