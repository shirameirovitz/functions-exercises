//Question 1
function myReverse(str) {
  let backwords = str.split("").reverse().join("");
  return backwords;
}

//Question 2
function allCombinations(str) {
  let combinations = [];
  let arr = str.split("");
  for(let i=0; i < arr.length; i++) {
    let item = "";
    for(let j=i; j < arr.length; j++){
      item += arr[j];
      combinations.push(item);
    }
  }
  return combinations;
}

//Question 3
function allCaps(str) {
  let arr = str.split(" ");
  for(let i=0; i<arr.length; i++) {
    let word = arr[i].split("");
    word[0] = word[0].toUpperCase();
    arr[i]= word.join("");
  }
  return arr.join(" ");
}

//Question 4
function myPower(x, n) {
  let sum=1;
  for(let i=0;i<n;i++) {sum*=x;}
  return sum;
}

//Question 5
function getFirstNotRepeating(str) { //sbbaaa-> s
  let arr = str.split("");
  for(let i=0; i<(arr.length-1); i++) {
    if(!str.includes(arr[i], (i + 1))) {
      return arr[i];
    }
  }
  return "";
}

//Question 6 (Bonus)
function isPrefectNumber(num) {
  

}

// *** Playground ***
// Feel free to run and test your code here on your own

// *** End of Playground ***

// Don't touch me :)
exports.myReverse = myReverse;
exports.allCombinations = allCombinations;
exports.allCaps = allCaps;
exports.myPower = myPower;
exports.getFirstNotRepeating = getFirstNotRepeating;
exports.isPrefectNumber = isPrefectNumber;
