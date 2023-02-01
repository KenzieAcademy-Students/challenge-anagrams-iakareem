// Your Code Here.
const input = document.getElementById("myInput");
const result = document.getElementById("result");

function findAnagrams() {
  const sortStr = (str) => {
    return str.split("").sort().join("");
  };

  const searchFunctionality = function (words, inputWord) {
    let filtered = words.filter((word) => sortStr(word) === sortStr(inputWord));
    result.innerHTML = filtered.join(", ");
    return filtered;
  };
  searchFunctionality(words, input.value);
}
