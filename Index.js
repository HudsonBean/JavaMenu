// Variables

var debounce = false;
var state = false;
const icon_wrapper = document.getElementsByClassName("icon-wrapper");
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

function close() {

}

function open() {
    // Give the arrow image its properties
    side_arrow_image.style.width = "30px";
    side_arrow_image.style.height = "30px";
    side_arrow_image.style.filter = "invert(1) drop-shadow(0 0 5px white)";
    side_arrow_image.classList.add("open-side-arrow-image");

    // Give menu its properties
    menu.classList.add("open");

    // Give icon wrappers their properties
    for (i = 0; i < icon_wrapper.length; i++) {
        icon_wrapper[i].classList.add("open-icon-wrapper");
        icon_wrapper[i].classList.add("disabled");
    }

    setTimeout(() => {
        // Finish up properties since I tecnhically animated this with js
        

        // Give the arrow image its properties
        side_arrow_image.style.width = "28px";
        side_arrow_image.style.height = "28px";
        side_arrow_image.style.filter = "";
        side_arrow_button.style.transform = "rotateZ(180deg)"
        side_arrow_image.classList.remove("open-side-arrow-image");

        // Give icon wrappers their properties
        for (i = 0; i < icon_wrapper.length; i++) {
            icon_wrapper[i].classList.remove("disabled");
        }

        // Give icon wrapper spans their properties
        for(i = 0; i < icon_wrapper.length; i++) {
            icon_wrapper[i].children[1].style.display = "inline";
        }
    }, 35)

}

// Connections

side_arrow_button.onclick = () => {
    if (!debounce) {
        debounce = true;

        if(!state) { // Menu is closed
            open(); // Open the menu
        } else { // Menu is open
            close(); // Close the menu
        }

        debounce = false;
    }
}

// Main

bootstrap();
