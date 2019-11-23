// function reverseWords(string) {
//   let charactersArr = string.split('');
//   let reversedArr = charactersArr.reverse();
//   let reversedString = reversedArr.join("");

//   let arrOfWords = reversedString.split(" ")
//   let reversedWordArr = [];

//   for (let i = arrOfWords.length - 1; i >= 0; i--) {
//     reversedWordArr.push(arrOfWords[i]);
//   }

//   return reversedWordArr;
// }

function reverseWords(string) {
  let arrOfWords = string.split(" ");
  let reversedWordsArr = [];

  arrOfWords.forEach(word => {
    let reversedString = "";
    for (let i = word.length - 1; i >= 0; i--) {
      reversedString += word[i];
    }
    reversedWordsArr.push(reversedString);
  });

  return reversedWordsArr.join(" ");
}

console.log(reverseWords("welcome to our college of science"))