// Your code here

export function isPalindrome(word) {
    for (let char of word) {
        if (/^[A-Za-z]+$/.test(word) === false || typeof(word) !== 'string') {
            throw "Invalid input."
        }
    }
    let reversed = word.split('').reverse().join('')
    return reversed.toLowerCase() === word.toLowerCase() && word.length > 0
}