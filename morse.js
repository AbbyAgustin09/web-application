const morseCode = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
    'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
    'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..',

    '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....',
    '6': '-....', '7': '--...', '8': '---..', '9': '----.', '0': '-----',

    '.': '.-.-.-', ',': '--..--', '?': '..--..', "'": '.----.', '!': '-.-.--',
    '/': '-..-.', '(': '-.--.', ')': '-.--.-', '&': '.-...', ':': '---...',
    ';': '-.-.-.', '=': '-...-', '+': '.-.-.', '-': '-....-', '_': '..--.-',
    '"': '.-..-.', '$': '...-..-', '@': '.--.-.'
  };

  const reverseMorseCode = {};
  for (const char in morseCode) {
    if (morseCode.hasOwnProperty(char)) {
      reverseMorseCode[morseCode[char]] = char;
    }
  }
  
  function textToMorse() {
    const inputText = document.getElementById('inputText').value.toUpperCase();
    let result = '';
  
    for (let i = 0; i < inputText.length; i++) {
      const char = inputText[i];
      if (char === ' ') {
        result += '   ';
      } else if (morseCode[char]) {
        result += morseCode[char] + ' ';
      }
    }
  
    document.getElementById('outputText').value = result.trim();
  }
  
  function morseToText() {
    const inputText = document.getElementById('inputText').value.trim();
    const morseArray = inputText.split(' ');
  
    let result = '';
  
    for (let i = 0; i < morseArray.length; i++) {
      const morseChar = morseArray[i];
      if (morseChar === '') {
        result += ' '; 
      } else if (reverseMorseCode[morseChar]) {
        result += reverseMorseCode[morseChar];
      }
    }
  
    document.getElementById('outputText').value = result;
  }