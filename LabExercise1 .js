//QUESTION 1 078S
console.log("");
console.log("QUESTION 1 OUTPUT");
function capitalizeFistLetters(str) {
    let words = str.toLowerCase();
    words = words.split(' ');
    //console.log(words);

    for (let i = 0; i < words.length; i++) {
          let fLetter = words[i][0].toUpperCase();
          let rest = words[i].slice(1);          
          words[i] = fLetter + rest;
      }
      return words.join(' ');
  }
  
  console.log(capitalizeFistLetters("the quick brown fox")); 

  
//QUESTION 2
console.log(" ");
console.log("QUESTION 2 OUTPUT");
function max(x, y, z) {
    let largestNum = x;

    if (y > largestNum) {
        largestNum = y;
    }
    if (z > largestNum) {
        largestNum = z;
    }

    return largestNum;
}
console.log(max (1,0,1));
console.log(max (0,-10,-20));
console.log(max (1000,510,440));


//QUESTION 3
console.log(" ");
console.log("QUESTION 3 OUTPUT");
function right(str) {

    if (str.length > 3){
        let last = str.slice(-3);
        let start = str.slice(0, -3);
        return last + start;
    }
    return str;
  }
  console.log(right("Python"));
  console.log(right("JavaScript"));
  console.log(right("Hi"));  


//QUESTION 4
console.log(" ");
console.log("QUESTION 4 OUTPUT");
function angle_Type(angle) {
    if (angle > 0 && angle < 90) {
        return "Acute angle";
    }    
    if (angle === 90) {
        return "Right angle";
    }
    if (angle > 90 && angle < 180) {
        return "Obtuse angle";
    }    
    if (angle === 180) {
        return "Straight angle"; 
    }
}
console.log(angle_Type(47)); 
console.log(angle_Type(90)); 
console.log(angle_Type(145)); 
console.log(angle_Type(180)); 

  