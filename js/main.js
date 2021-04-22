const inputPassword = document.querySelector('.password');
const backgroundImg = document.querySelector('.background');

inputPassword.addEventListener('input', () => {
    const lengthValue = inputPassword.value.length
    const backgroundPercent = 20 - lengthValue * 2.5
    // console.log(backgroundPercent)

    backgroundImg.style.filter = `blur(${backgroundPercent}px)`;
})
