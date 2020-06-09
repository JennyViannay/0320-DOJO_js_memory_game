const cards = document.getElementsByClassName('card');

let firstCard = '';
let firstUrl = '';

let clickCount = 0;
let foundPairs = 0;

let max = cards.length; 



// boucler sur toutes les cards 
for (let i = 0; i < max ; i++) {
    cards[i].addEventListener('click', event => {
        clickCount++
        let imgId = cards[i].getAttribute('data-id')
        let blockImg = document.getElementById(imgId)
        blockImg.classList.toggle('hidden')
        let currentUrl = blockImg.getAttribute('src')
        if (currentUrl === firstUrl){
            foundPairs++
            blockImg.classList.add('display')
            firstCard.classList.add("display")
            if (foundPairs === max/2){
                alert('tu as gagné gg à toi avec '+clickCount+' clics')
            }
        } else if (firstCard !== '') {
            firstCard.classList.add("hidden")
        }
        firstUrl = blockImg.getAttribute('src')
        firstCard = blockImg
    })
}
