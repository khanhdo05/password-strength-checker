const StrengthScoreEvaluation = [
    {score: 100, strength: "very strong"},
    {score: 75, strength: "strong"},
    {score: 50, strength: "moderate"},
    {score: 25, strength: "weak"},
    {score: 0, strength: "very weak"}
]

function isOnlyNumbers(str: string): boolean {
    const regex = /^\d+$/;
    return regex.test(str);
}

function isOnlyLowercase(str: string): boolean {
    const regex = /^[a-z]+$/;
    return regex.test(str);
}

function isOnlyUppercase(str: string): boolean {
    const regex = /^[A-Z]+$/;
    return regex.test(str);
}

function BasedOnLengthGivesBaseScore(password: string) {
    const length = password.length
    switch (true) {
        case (length == 0): {
            return 0
        }
        case (length < 6): {
            return 24
        }
        case (length >= 6 && length <= 8): {
            return 49
        }
        default: {
            return 0
        }
    }
}

function DecreaseScoreIfSameCharacterType(password: string) {
    if (isOnlyNumbers(password)) {
        return -24
    } else if (isOnlyUppercase(password) || isOnlyLowercase(password)) {
        return -49
    }
    return 0
}

function PasswordStrengthScoring(password: string) {
    let score = 0
    score += BasedOnLengthGivesBaseScore(password) + DecreaseScoreIfSameCharacterType(password)
    return score
}

export function PasswordStrengthChecker(password: string) {
    const score : number = PasswordStrengthScoring(password)
    const scoreEvaluationPair = StrengthScoreEvaluation.find(pair => score >= pair.score)

    // null check
    if (!scoreEvaluationPair) {
        return "very weak"
    }

    return scoreEvaluationPair.strength
}