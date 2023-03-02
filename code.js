// Your Code Here.
const input = document.getElementById("myInput");
const result = document.getElementById("result");

const sortStr = (str) => {
  return str.split("").sort().join("");
};

let searchFunctionality = function (words, inputWord) {
  let filtered = words.filter((word) => sortStr(word) === sortStr(inputWord));
  result.innerHTML = filtered.join(", ")
  return filtered;
};

searchFunctionality(words, input.value)

const anagramFive = function (words) {
  let anag = []
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
  result.innerHTML = res.join(", ")
  return res
};

function findAnagrams() {
  searchFunctionality(words, input.value);
}

function closeAnagrams() {
  result.innerHTML = "";
}

anagramFive(words)
