import { useState, useEffect  } from 'react'
import './App.css'

function App() {

  const [words, setWords] = useState([]);
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

  useEffect(() => {
    // Fetch 5 random words from the Random Word API
   fetch('https://random-word-api.herokuapp.com/word?number=5')
      .then(response => response.json())
      .then(data => setWords(data));
  }, []);

  return (
    <div className="App">
      <h1 style={{color: randomColor}}>{words.join(' ')}</h1>
      <div className="card">
        {/* Reloads the page  */}
        <button onClick={() => window.location.reload()} style={{color: randomColor}}>
          Reload
        </button>
        <p style={{color: randomColor}}>
          5 randomly generated words from the Random Word API
        </p>
      </div>
    </div>
  )
}

export default App

/*


    <script>
      var randomBackground = "#" + Math.floor(Math.random() * 16777215).toString(16);
      document.body.style.backgroundColor = randomBackground;

      // Generate a random text color
      var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
      document.getElementById("text").style.color = randomColor;

      // Generate a random string of 20 alphabet characters
      var randomText = "";
      for (var i = 0; i < 20; i++) {
        randomText += String.fromCharCode(65 + Math.floor(Math.random() * 26));
      }
      document.getElementById("text").innerHTML = randomText;
    </script>

*/

