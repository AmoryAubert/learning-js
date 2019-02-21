var selectElementsStartingWithA = function(array) {
    return 'Write your method here';
}

var selectElementsStartingWithVowel = function(array) {
    return array;
}

var removeNullElements = function(array) {
    
    return array.filter(x => x != null);
}

var removeNullAndFalseElements = function(array) {
    
    return array.filter(x => x === 0 || Boolean(x));
}

var reverseWordsInArray = function(array) {
    let word="";let wordArray=[];let arrayReverse;
    for (let i = 0 ; i < array.length; i++)
    {
        word = array[i].toString();
        arrayReverse = word.split("").reverse();
        wordArray[i] = arrayReverse.toString().replace(/,/g,"");
    }
    return wordArray;
}

var everyPossiblePair = function(array) {
    Array.prototype.pairs = function (func) {
    for (var i = 0; i < this.length - 1; i++) {
        for (var j = i; j < this.length - 1; j++) {
            func([this[i], this[j+1]]);
        }
    }
}
let newArray=[];
array.sort().pairs(function(array){
    newArray.concat(array);
    newArray += array;
    console.log(array);
});
    return newArray;
}

var allElementsExceptFirstThree = function(array) {
    return array.slice(3,array.length);
}

var addElementToBeginning = function(array, element) {
    array = array.reverse();
    array[array.length]=element;
    return array.reverse();
}

var sortByLastLetter = function(array) {
    return 'Write your method here';
}

var getFirstHalf = function(string) {
    return 'Write your method here';
}

var makeNegative = function(number) {
    return -Math.abs(number);
}

var numberOfPalindromes = function(array) {
    return 'Write your method here';
}

var shortestWord = function(array) {
    return 'Write your method here';
}

var longestWord = function(array) {
    return 'Write your method here';
}

var sumNumbers = function(array) {
    return array.reduce(function(total,currentvalue,currentindex,tab){return total + currentvalue},0);
}

var repeatElements = function(array) {
    return array.toString().replace(/,/g,"").repeat(2).split("");
}

var stringToNumber = function(string) {
    return Number(string);
}

var calculateAverage = function(array) {
    return array.reduce(function(total,currentvalue,currentindex,tab){return total + (currentvalue/tab.length)},0);
}

var getElementsUntilGreaterThanFive = function(array) {
    return 'Write your method here';
}

var convertArrayToObject = function(array) {
    let obj = {};
    for (let i = 0; i < array.length; i+=2) {
          obj[array[i]]=array[i+1];
        }    
    return obj;
}

var getAllLetters = function(array) {
    function cleanArray(array) {
        let out = [], obj = {};
        for (let i = 0; i < array.length; i++) {
          obj[array[i]] = 0;
        }
        for (let j in obj) {
          out.push(j);
        }
        return out;
      }
    return cleanArray(array).toString().replace(/,/g,"").split("").sort();
}

var swapKeysAndValues = function(object) {
    return 'Write your method here';
}

var sumKeysAndValues = function(object) {
    return 'Write your method here';
}

var removeCapitals = function(string) {
    return 'Write your method here';
}

var roundUp = function(number) {
    return Math.floor(number)+1;
}

var formatDateNicely = function(date) {
    return date;
}

var getDomainName = function(string) {
    return string;
}

var titleize = function(string) {
    return 'Write your method here';
}

var checkForSpecialCharacters = function(string) {
    let good="ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz0123456789";
    let goodArray=good.split("");
    let stringArray=string.split("");
    let result;
    for (let i = 0; i < goodArray.length; i++){
        for (let j = 0; j < stringArray.length; j++){
            result = (stringArray[j].includes(goodArray[i]));
        }
        if (result == true){return false}
    }
    return true;
}

var squareRoot = function(number) {
    return Math.sqrt(number);
}

var factorial = function(number) {
    let factNumber=1;
    for (let i = 1; i < number+1 ; i++){
        factNumber = factNumber*i;
    }
    return factNumber;
}

var findAnagrams = function(string) {
    return 'Write your method here';
}

var convertToCelsius = function(number) {
    //(°F − 32) × 5/9
    return Math.round((number -32)*(5/9));
}

var letterPosition = function(array) {
    let newArray=[];
    for (let i = 0 ; i < array.length;i++){
        newArray[i]= (array[i].charCodeAt())-64;
        if (newArray[i] > 26){
            newArray[i]-= 32;
        }
    }
    return newArray;
}
