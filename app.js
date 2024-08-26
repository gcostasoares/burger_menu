document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.burger-menu-icon'); 
    let isOpen = false;

    burgerMenu.addEventListener('click', () => {

        const lineOne = document.querySelector('.line-1');
        const lineTwo = document.querySelector('.line-2');
        const lineThree = document.querySelector('.line-3');
        const layer = document.querySelector('.burger-menu-layer');
        if (!isOpen) {
        
            lineOne.style.opacity = '0';
            lineTwo.style.transform = 'rotate(45deg)';
            lineThree.style.transform = 'translateY(calc(-16px)) rotate(-45deg)';
            layer.style.right = '0';
            isOpen = true;
        } else {
            
            lineOne.style.opacity = '1';
            lineTwo.style.transform = 'rotate(0)';
            lineThree.style.transform = 'rotate(0) translateY(0)';
            layer.style.right = '-100vw';
            isOpen = false;
        }
    });
});
