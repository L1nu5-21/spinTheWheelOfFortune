export function wheel (element) {
    const spinButton = element.querySelector('#spin')
    const wheelElement = element.querySelector('#Wheel')
    const wheelImage = element.querySelector('#wheelImage')


    const spin = (wheelRandom) => {
        console.log(wheelRandom)
        spinButton.removeAttribute('disabled')
        wheelImage.classList.toggle('spin-stop')
        // wheelImage.classList.remove('spin-it')
        wheelElement.textContent = `The wheel giveth ${wheelRandom}!`
    }


    spinButton.addEventListener('click', () => {
        spinButton.setAttribute('disabled', true)
        const spinTime = 300
        const wheelRandom = Math.ceil(Math.random()*12)
        wheelImage.classList.remove('spin-stop')
        wheelImage.classList.add('spin-it')
        const animationTime = 1000 + ((wheelRandom - 1)*1000/12)

        setTimeout(() => {spin(wheelRandom)}, animationTime)
    })
}