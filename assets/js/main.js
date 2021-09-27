const html = document.documentElement;
const canvas = document.getElementById('canvas_animation');
const context = canvas.getContext('2d');

const currentFrame = index => (
    `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index.toString().padStart(4,'0')}.jpg`
)

const frameCount = 147;

canvas.height = 770;
canvas.width = 1158;

const img = new Image();
img.src = currentFrame(1);

img.onload = function(){
    context.drawImage(img, 0, 0)
}

const updateImage = index =>{
    img.src = currentFrame(index)
    context.drawImage(img, 0, 0);
}

window.addEventListener('scroll', () => {
    const scrollTop = html.scrollTop;
    const maxScrollTop = html.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop / maxScrollTop;
    const frameIndex = Math.min(frameCount - 1,
         Math.ceil(scrollFraction * frameCount)
    );
    requestAnimationFrame( () => updateImage(frameIndex + 1))
});

// const flightPath = {
//     curviness: 2.5,
//     autoRotate:true,
//     values:[
//         {x:200, y:-20},
//         {x:300,y:20},
//         {x:550,y:100},
//         {x:800,y:-100},
//         {x:1100,y:30},
//         {x:900,y:0},
//         {x:window.innerWidth,y:-250}
//     ]
// };

// const tween = new TimelineLite();

// tween.add(
//     TweenLite.to(".paper_plane", 1,{
//         bezier:flightPath,
//         ease: Power1.easeInOut
//     })
// );

// const controll = new ScrollMagic.Controller();

// const scene = new ScrollMagic.Scene({
//     triggerElement:'section',
//     duration:1000,
//     triggerHook: 0
// })

// .setTween(tween)
// .setPin('section')
// .addTo(controll);


preloadImages()
