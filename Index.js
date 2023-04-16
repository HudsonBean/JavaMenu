// Variables



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

// Main

bootstrap();