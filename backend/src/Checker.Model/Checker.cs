namespace Checker.Model;

public class Checker(string password)
{
    private bool IsLongerThan7()
    {
        return (password.Length > 7);
    }

    private bool IsLongerThan10()
    {
        return (password.Length > 10);
    }

    private bool ContainsAtLeastOneAlphabeticCharacter()
    {
        return System.Text.RegularExpressions.Regex.IsMatch(password, "[a-zA-Z]"); 
    }

    private bool ContainsAtLeastOneDigit()
    {
        return System.Text.RegularExpressions.Regex.IsMatch(password, "[0-9]"); 
    }

    private bool ContainsAtLeastOneSpecialCharacter()
    {
        return System.Text.RegularExpressions.Regex.IsMatch(password, "[^a-zA-Z0-9]");
    }

    private bool IsStrongBasicRequirement()
    {
        return IsLongerThan7() && ContainsAtLeastOneAlphabeticCharacter() && ContainsAtLeastOneDigit();
    }

    private bool IsStrongAdminAdditionalRequirement()
    {
        return IsLongerThan10() && ContainsAtLeastOneSpecialCharacter();
    }

    public bool IsStrong(bool admin)
    {
        var isStrongBasic = IsStrongBasicRequirement();
        if (admin)
        {
            return isStrongBasic && IsStrongAdminAdditionalRequirement();
        }
        return isStrongBasic;
    }
    
}







