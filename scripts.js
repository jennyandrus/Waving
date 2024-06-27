function wave() {
    const rightArm = document.querySelector('.right-arm');
    rightArm.style.transform = 'rotate(-45deg)';
    setTimeout(() => {
        rightArm.style.transform = 'rotate(0deg)';
    }, 1000);
}

