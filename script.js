function getWordCount(str) {
    let words = str.trim().split(/\s+/);
    return str.trim() === '' ? 0 : words.length;
}

function counter(str) {
    let alphabets = 0;
    let numbers = 0;
    let totalEntries = 0;

    for (let char of str) {
        if (char.trim()) {
            totalEntries++;
        }
        if (/[a-zA-Z]/.test(char)) {
            alphabets++;
        } else if (/\d/.test(char)) {
            numbers++;
        }
    }

    document.getElementById("enteries").value = totalEntries;
    document.getElementById("numbers").value = numbers;
    document.getElementById("alphabets").value = alphabets;
}

function wordCounter() {
    let inputTxt = document.getElementById("inputBox").value;
    let words = getWordCount(inputTxt);
    document.getElementById("words").value = words;
    counter(inputTxt);
}
