const convert = str => {
    return parseInt(str);
}

let reverse = phrase => {
    if (typeof phrase !== "string") {
        return false;
    }
    return phrase.split("").reverse().join("");
}

module.exports = { convert: convert, reverse: reverse }