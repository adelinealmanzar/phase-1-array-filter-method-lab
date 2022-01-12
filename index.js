function findMatching(array, name) {
    return array.filter(el => el === name || el === name.toLowerCase());
}

function fuzzyMatch(array, letters) {
    return array.filter(el => el.slice(0, -3) === letters);
}

function matchName(array, nameToTest) {
    return array.filter(el => el.name === nameToTest)
}