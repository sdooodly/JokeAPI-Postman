const getJokeBtn = document.getElementById('getJokeBtn');
const jokeText = document.getElementById('jokeText');

const apiUrl = 'https://v2.jokeapi.dev/joke/Any';

async function getJoke() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    
    if (data.type === 'single') {
      jokeText.textContent = data.joke;
    } else if (data.type === 'twopart') {
      jokeText.textContent = `${data.setup} ${data.delivery}`;
    }
  } catch (error) {
    console.log('Error:', error);
  }
}

getJokeBtn.addEventListener('click', getJoke);
