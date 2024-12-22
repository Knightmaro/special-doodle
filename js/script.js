function createStars() {
    const container = document.querySelector('.starry-background');
    for(let i = 0; i < 200; i++) {
        const star = document.createElement('div');
        star.className = 'stars';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 4}s`;
        container.appendChild(star);
    }
}