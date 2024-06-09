class PasswordStrengthChecker {
    public readonly password:string

    public constructor(password:string) {
        this.password = password
    }

    private isLongerThan7(): boolean {
        return (this.password.length > 7)
    }

    private isLongerThan10(): boolean {
        return (this.password.length > 10)
    }

    private containsAtLeastOneAlphabeticCharacter(): boolean {
        const alphabeticRegex = /[a-zA-Z]/
        return alphabeticRegex.test(this.password)
    }

    private containsAtLeastOneDigit(): boolean {
        const digitRegex = /[0-9]/
        return digitRegex.test(this.password)
    }

    private containsAtLeastOneSpecialCharacter(): boolean {
        const specialCharPattern = /[^a-zA-Z0-9]/;
        return specialCharPattern.test(this.password);
    }

    private isStrongBasicRequirement(): boolean {
        return this.isLongerThan7() && this.containsAtLeastOneAlphabeticCharacter() && this.containsAtLeastOneDigit()
    }

    private isStrongAdminAdditionalRequirement(): boolean {
        return this.isLongerThan10() && this.containsAtLeastOneSpecialCharacter()
    }

    public isStrong(admin: boolean): boolean {
        const isStrongBasic: boolean = this.isStrongBasicRequirement()
        if (admin) {
            return isStrongBasic && this.isStrongAdminAdditionalRequirement()
        }
        return isStrongBasic
    }
}

export default PasswordStrengthChecker;







