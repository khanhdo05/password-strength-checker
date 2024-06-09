import { expect, test } from 'vitest'
import PasswordStrengthChecker from './passwordStrengthChecker.ts'

function testPasswordStrength(password: string, admin: boolean, expectedStrength: boolean) {
    const checker = new PasswordStrengthChecker(password)
    expect(checker.isStrong(admin)).toBe(expectedStrength)
}

describe("Non-admin mode", () => {
    describe("Weak password", () => {
        test("When password has less than 7 characters, strength is weak", () => {
            testPasswordStrength("a", false, false)
        })
        test("when password has more than 7 characters but doesn't have at least one alphabetic character, strength is weak", () => {
            testPasswordStrength("278397635492!)0", false, false)
        })
        test("when password has more than 7 characters but doesn't have at least one digit, strength is weak", () => {
            testPasswordStrength("helloitsme@o", false, false)
        })
        test("when password has less than 7 characters but have both alphabetic character and digit character", () => {
            testPasswordStrength("44aap0", false, false)
        })
    })

    describe("Strong password", () => {
        test.each([
                "hellowor9",
                "msllkkkj9hduu8",
                "10!@44444m40o"
            ]
        )("when password has over 7 characters, at least 1 alphabetic character, 1 digit, strength is strong", (password) => {
            testPasswordStrength(password, false, true)
        })
    })
})

describe("Admin mode", () => {
    describe("Weak password", () => {
        test("when password has over 10 characters, at least 1 alphabetic character, 1 digit, but no special character, strength is weak", () => {
            testPasswordStrength("helloworld1234567", true, false)
        })

        test.each([
            "44444444444444444@",
            "knsfjvbsfkdjfhvjdfn",
            "dnkvd!",
            "@@@@@@@@@",
            "a",
            "234a"
        ])("when password doesn't fulfill basic requirement, contains a special character, strengthh is weak", (password) => {
            testPasswordStrength(password, true, false)
        })
    })

    describe("Strong password", () => {
        test("when password has over 10 characters, at least 1 alphabetic character, 1 digit, 1 special character, strength is strong", () => {
            testPasswordStrength("abcdefb90@m", true, true)
        })
    })
})

