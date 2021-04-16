const fuzz = require("fuzzball");

const ratio = fuzz.ratio("Sifat Nabil", "Nabil Sifat");
const tokenSetRatio = fuzz.token_set_ratio("Sifat Nabil", "Nabil Nabil Sifat");
const tokenSortRatio = fuzz.token_sort_ratio("sifat nabil", "Nabil sifat");
const initialMatchRatio = fuzz.token_sort_ratio("Sifat Nabil", "S. Nabil");
const initialMatchRatio2 = fuzz.token_sort_ratio("Sifat Nabil", "Sifat");

console.log(ratio);
console.log(tokenSetRatio);
console.log(tokenSortRatio);
console.log(initialMatchRatio);
console.log(initialMatchRatio2);
