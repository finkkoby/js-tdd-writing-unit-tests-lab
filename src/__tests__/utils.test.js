// Your tests here
import { isPalindrome } from "../utils"

describe('isPalindrome', () => {
    it("returns true if the word passed in is a palindrome", () => {
        const word = 'racecar'
        const bool = isPalindrome(word)
        expect(bool).toBe(true)
    })

    it("returns false is the word passed in is NOT a palindrome", () => {
        const word = 'car'
        const bool = isPalindrome(word)
        expect(bool).toBe(false)
    })

    it("is case insensitive", () => {
        const word = 'RaceCar'
        const bool = isPalindrome(word)
        expect(bool).toBe(true)
    })

    it("returns false for an empty string", () => {
        const word = ''
        const bool = isPalindrome(word)
        expect(bool).toBe(false)
    })

    it("throws an error for any input containing non-alphabetic characters", () => {
        const word = 'tic-tac'
        expect(() => {
            isPalindrome(word)
        }).toThrow()
    })

    it("throws an error for any non-string input", () => {
        const word = [1, 2, 3]
        expect(() => {
            isPalindrome(word)
        }).toThrow()
    })
})