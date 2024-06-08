import { expect, test } from 'vitest'
import {isOnlyNumbers, PasswordStrengthChecker, PasswordStrengthScoring} from './PasswordStrengthChecker.ts'

describe("password is very weak", () => {
    test("default empty input", () => {
        expect(PasswordStrengthChecker("")).toBe("very weak")
    })
    describe("when password length is less than 6", () => {
        test.each([
            "@",
            "9M",
            "23/",
            "meow",
            "cAt0",
            "nUmP0"
        ])("when password is {%s}, strength is very weak", (password) => {
            expect(PasswordStrengthChecker(password)).toBe("very weak")
        })
    describe("when password length is greater than 6, less than 8, but contains only 1 type of character", () => {
        test.each([
            "1827608",
            "aokemndu",
            "OSMWKNJ"
        ])("when password is {%s}, strength is very weak", (password) => {
            expect(PasswordStrengthChecker(password)).toBe("very weak")
        })
    })
    })
})

describe("password is weak", () => {
    describe("when password length is between 6 and 8 characters", () => {
        test.each([
            "H9smol",
            "Batter0!"
        ])("when password is {%s}, strength is weak", (password) => {
            expect(PasswordStrengthChecker(password)).toBe("weak")
        })
    })
})