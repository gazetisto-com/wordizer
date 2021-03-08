const nouns = ["time", "year", "people", "way", "day", "man", "thing", "woman", "life", "child", "world", "school", "state", "family", "student", "group", "country", "problem", "hand", "part", "place", "case", "week", "company", "system", "program", "question", "work", "government", "number", "night", "point", "home", "water", "room", "mother", "area", "money", "story", "fact", "month", "lot", "right", "study", "book", "eye", "job", "word", "business", "issue", "side", "kind", "head", "house", "service", "friend", "father", "power", "hour", "game", "line", "end", "member", "law", "car", "city", "community", "name", "president", "team", "minute", "idea", "kid", "body", "information", "back", "parent", "face", "others", "level", "office", "door", "health", "person", "art", "war", "history", "party", "result", "change", "morning", "reason", "research", "girl", "guy", "moment", "air", "teacher", "force", "education"]
const verbs = ["be", "have", "do", "say", "go", "can", "get", "would", "make", "know", "will", "think", "take", "see", "come", "could", "want", "look", "use", "find", "give", "tell", "work", "may", "should", "call", "try", "ask", "need", "feel", "become", "leave", "put", "mean", "keep", "let", "begin", "seem", "help", "talk", "turn", "start", "might", "show", "hear", "play", "run", "move", "like", "live", "believe", "hold", "bring", "happen", "must", "write", "provide", "sit", "stand", "lose", "pay", "meet", "include", "continue", "set", "learn", "change", "lead", "understand", "watch", "follow", "stop", "create", "speak", "read", "allow", "add", "spend", "grow", "open", "walk", "win", "offer", "remember", "love", "consider", "appear", "buy", "wait", "serve", "die", "send", "expect", "build", "stay", "fall", "cut", "reach", "kill", "remain"]
const adverbs = ["boldly", "bravely", "brightly", "cheerfully", "deftly", "devotedly", "eagerly", "elegantly", "faithfully", "fortunately", "gleefully", "gracefully", "happily", "honestly", "innocently", "justly", "kindly", "merrily", "obediently", "perfectly", "politely", "powerfully", "safely", "victoriously", "warmly", "vivaciously", "angrily", "anxiously", "badly", "boastfully", "foolishly", "hopelessly", "irritably", "jealously", "lazily", "obnoxiously", "poorly", "rudely", "selfishly", "wearily", "always", "eventually", "finally", "frequently", "hourly", "never", "occasionally", "often", "rarely", "regularly", "seldom", "sometimes", "usually", "weekly", "yearly", "promptly", "quickly", "rapidly", "slowly", "speedily", "tediously", "accidentally", "awkwardly", "blindly", "coyly", "crazily", "defiantly", "deliberately", "doubtfully", "dramatically", "dutifully", "enormously", "evenly", "exactly", "hastily", "hungrily", "inquisitively", "loosely", "madly", "mortally", "mysteriously", "nervously", "only", "seriously", "shakily", "sharply", "silently", "solemnly", "sternly", "technically", "unexpectedly", "wildly"]
const adjectives = ["other", "new", "good", "high", "old", "great", "big", "American", "small", "large", "national", "young", "different", "black", "long", "little", "important", "political", "bad", "white", "real", "best", "right", "social", "only", "public", "sure", "low", "early", "able", "human", "local", "late", "hard", "major", "better", "economic", "strong", "possible", "whole", "free", "military", "true", "federal", "international", "full", "special", "easy", "clear", "recent", "certain", "personal", "open", "red", "difficult", "available", "likely", "short", "single", "medical", "current", "wrong", "private", "past", "foreign", "fine", "common", "poor", "natural", "significant", "similar", "hot", "dead", "central", "happy", "serious", "ready", "simple", "left", "physical", "general", "environmental", "financial", "blue", "democratic", "dark", "various", "entire", "close", "legal", "religious", "cold", "final", "main", "green", "nice", "huge", "popular", "traditional", "cultural"]

const nounsN = nouns.length;
const verbsN = verbs.length;
const adverbsN = adverbs.length;
const adjectivesN = adjectives.length;

const maxN = nounsN * verbsN * adverbsN * adjectivesN

const n2w = (num) => {
    if (num > maxN) return null
    if (num < 0) return null
    let q4 = num % nounsN
    num = Math.floor(num / nounsN)
    let q3 = num % adjectivesN
    num = Math.floor(num / adjectivesN)
    let q2 = num % verbsN
    let q1 = Math.floor(num / verbsN)

    return adverbs[q1] + "-" + verbs[q2] + "-" + adjectives[q3] + "-" + nouns[q4]
}

const w2n = (words) => {
    let word = words.toLowerCase().split("-")
    if (word.length !== 4) return -1
    let num = 0;
    num += adverbs.indexOf(word[0])
    num *= verbsN
    num += verbs.indexOf(word[1])
    num *= adjectivesN
    num += adjectives.indexOf(word[2])
    num *= nounsN
    num += nouns.indexOf(word[3])
    return num
}

/*
console.log("MAX", max)
console.log(n2w(0), w2n(n2w(0)))
console.log(n2w(max - 1), w2n(n2w(max - 1)))
for (let i = 0; i < 10; i++) {
    let num = Math.floor(Math.random() * maxN)
    console.log(num, n2w(num), w2n(n2w(num)))
}
*/

module.exports = {
    max() {
        return maxN
    },
    n2w,
    w2n,
    gen() {
        return Math.floor(Math.random() * maxN)
    }
}