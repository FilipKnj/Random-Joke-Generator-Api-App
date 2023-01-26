let c = console.log.bind(document);
const newBtn = document.querySelector('#newBtn'),
speakBtn = document.querySelector('#speakBtn'),
jokeDiv = document.querySelector('.joke p'),
url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single';

const randJoke = () => {
    fetch(url).then(res => res.json()).then(data => {
        jokeDiv.innerText = `${data.joke}`;
    })
};

newBtn.addEventListener('click',randJoke);

speakBtn.addEventListener('click', () => {
    let utterance = new SpeechSynthesisUtterance(`${jokeDiv.innerText}`);
    speechSynthesis.speak(utterance);
})