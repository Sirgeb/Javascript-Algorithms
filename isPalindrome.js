function isPalindrome(string) {
  string = string.toLowerCase();
  let charactersArr = string.split('');
  let validCharactersArr = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let lettersArr = [];
  
  charactersArr.forEach(char => {
    if (validCharactersArr.includes(char)) {
      lettersArr.push(char);
    }
  });

  if (lettersArr.join('') === lettersArr.reverse().join('')) {
    return true;
  } else {
    return false;
  }
}

isPalindrome("Madam I'm Adam");
