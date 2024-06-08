import { expect, test } from 'vitest'
import { PasswordStrengthChecker } from './PasswordStrengthChecker.ts'

test('default empty input, password is very weak', () => {
    expect(PasswordStrengthChecker("")).toBe("very weak")
})

test('input less than 6 characters, password is very weak', () => {
    expect(PasswordStrengthChecker("aome2"))
})