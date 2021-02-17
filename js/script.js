const container = document.querySelector('.container');

let onLoad = ()=>{
    for(let i = 0; i < 70; i++){
        const block = document.createElement('div');
        block.classList.add('block');
        container.appendChild(block)
    }


    let animeBlock = ()=>{
        anime({
            targets: '.block',
            translateX: ()=>anime.random(-700, 700),
            translateY: ()=>anime.random(-500, 500),
            scale: ()=>anime.random(1,5),
            easing: 'linear',
            duration: 2000,
            delay: anime.stagger(10),
            complete: animeBlock
        });
    }
    animeBlock();
}







document.addEventListener("DOMContentLoaded", onLoad);
