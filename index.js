//Generating the canvas - - game display 


const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
canvas.width = 1024
canvas.height = 576

c.fillStyle= 'white'
c.fillRect(0, 0, canvas.width, canvas.height)


//Generate new Image
const image = new Image()
image.src = './img/StartingVillage.png'

//Generate Player
const playerImage = new Image();
playerImage.src = './img/playerDown.png'



//Animation - generating infinite loop 

class Sprite {
    constructor({ position, velocity, image }) {
        this.position = position
        this.image = image
    }

    draw() {
        c.drawImage(this.image, -520, 0)  //default starting point
    }
}

const background = new Sprite({
    position: {
        x: -520,
        y: 0,
    },
    
    image: image
})

const keys = {
    w: {
        pressed:false
    },
    a: {
        pressed:false
    },
    s: {
        pressed:false
    },
    d: {
        pressed:false
    }
}


function animate() {
    window.requestAnimationFrame(animate);
    background.draw()
    c.drawImage(
        playerImage,
        //the following 4 arguments crops the sprites img
        0,
        0,
        playerImage.width /4,
        playerImage.height, 
        // actual coordinates of the image being rendered on screen
        480,  // x player starting point
        350,   // y player starting point
        playerImage.width /4,
        playerImage.height
    
    ) 
    
  //  if ()
}



//Controls

window.addEventListener('keydown', (e) => {
    
    switch (e.key) {
        case 'w':
            keys.w.pressed = true;
            break
       
        case 'a':
            keys.a.pressed = true;
            break
        
        case 's':
            keys.s.pressed = true;
            break
        
        case 'd':
            keys.d.pressed = true;
            break
            
    }
})

