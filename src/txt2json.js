const fs = require("fs")

const conv = (typ) => {
    let input = fs.readFileSync("./" + typ + ".txt", "utf8").split("\n").map(q => q.trim())
    fs.writeFileSync("./" + typ + ".json", JSON.stringify(input))
}

conv("nouns")
conv("adjectives")
conv("adverbs")
conv("verbs")