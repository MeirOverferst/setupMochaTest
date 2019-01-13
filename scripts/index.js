const convert = str => {
    return parseInt(str);
}

const reverse = phrase => {
    if (typeof phrase !== "string") {
        return false;
    }
    return phrase.split("").reverse().join("");
}

const returnInfo = prsn =>


    module.exports = { convert: convert, reverse: reverse }