function countWords(text) {
    text = text.replace(/\r?\n/g, " ")
    text = text.replace(/[ ]+/g, " ")
    text = text.replace(/^ /, "")
    text = text.replace(/ $/, "")
    let splitText = text.split(" ")
    let numberOfWords = splitText.length

    return text + " has " + numberOfWords + " words" 
}

console.log(countWords("Good morning"))

function isPalindrome(str) {
    const firstStr = str.replace(/[\W_]/g, "").toLowerCase()
    const strReversed = firstStr.split("").reverse().join("")
    
    return firstStr === strReversed ? (str + " is palindrome") : (str + " is not palindrome")
}

console.log(isPalindrome("Never odd or even"))

