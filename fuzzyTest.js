const FuzzyMatching = require("fuzzy-matching");

const fm = new FuzzyMatching(["nabil sifat", "nabil", "through", "Café"]);

console.log(fm.get("sifat nabil"));
