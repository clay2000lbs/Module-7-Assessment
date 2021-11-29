//Write a function that takes in an array of numbers. The function should return True if any two numbers in list sum to 0, and false otherwise.

const addToZero = (array) => {
    for(i = 0; i < array.length-1; i++) {
        for(j = (i + 1); j <  array.length; j++ ) {
            if(array[i] + array[j] == 0) {
                return true;
            }
        }
    }
    return false;
}
console.log(addToZero([1, 2, 3, -2]))
//constant space complexity

//Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

function hasUniqueChars(word) {
    stringArray = word.split("")
    let toMap = {};
    let resultToReturn = false;
    for (let i = 0; i < stringArray.length; i++) {
        if (toMap[stringArray[i]]) {
            resultToReturn = true;
            break;
        }
        toMap[stringArray[i]] = true;
    }

    if (resultToReturn) {
        console.log('Duplicate elements exist');
        }
        else {
            console.log('Duplicates dont exist ');
            }
        }

hasUniqueChars("Pool")
//constant space complexity

//A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”
//Write a function to check a sentence to see if it is a pangram or not.

const isPangram = (sentence) => {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
   let regex = /\s/g;
   let sentArr = sentence.toLowerCase().replace(regex, "");
  
   for(let i = 0; i < alphabet.length; i++){
    if(sentArr.indexOf(alphabet[i]) === -1){
      return false;
    }
   }
  
  return true;
}
console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
//constant space complexity

//Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

const findLongestWord = (arr) => {
    max = arr[0]
    for(i = 0; i < arr.length; i++) {
        if(arr[i].length > max.length) {
            max = arr[i]
        }
    }
    console.log(max.length)
}
findLongestWord(["hi", "hello", "nope"])
//constant space complexity