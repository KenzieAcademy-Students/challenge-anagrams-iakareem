// Your Code Here.
const input = document.getElementById("myInput");
const result = document.getElementById("result");

const sortStr = (str) => {
  return str.split("").sort().join("");
};

let isAnagramCheck = function (s, t) {
  let inputed = s.split("");
  for (let i = 0; i < t.length; i++) {
    if (inputed.includes(t[i])) {
      let idx = inputed.indexOf(t[i]);
      inputed.splice(idx, 1);
    } else {
      return false;
    }
  }
  return true;
};

let searchFunctionality = function (words, inputWord) {
  inputWord = inputWord.split(" ").join("").toLowerCase();
  let anag = new Set();
  for (let i = 0; i < words.length; i++) {
    if (isAnagramCheck(inputWord, words[i])) {
      anag.add(words[i]);
    }
  }
  result.innerHTML = [...anag].join(" ");
  // return filtered;
};
searchFunctionality(words, input.value);



const anagramFive = function (words) {
  let anag = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 4) {
      anag.push([words[i], words[i].split("").sort().join("")]);
    }
  }
  let obj = {};
  for (let j = 0; j < anag.length; j++) {
    if (obj[anag[j][1]]) {
      obj[anag[j][1]].push(anag[j][0]);
    } else {
      obj[anag[j][1]] = [anag[j][0]];
    }
  }
  let res = [];
  for (const key in obj) {
    if (obj[key].length > 1) {
      res = [...res, ...obj[key]];
    }
  }
  result.innerHTML = res.join(", ");
  return res;
};

function findAnagrams() {
  searchFunctionality(words, input.value);
}

function closeAnagrams() {
  result.innerHTML = "";
}

anagramFive(words);
