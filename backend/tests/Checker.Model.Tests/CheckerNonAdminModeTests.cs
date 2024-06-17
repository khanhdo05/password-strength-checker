namespace Checker.Model.Tests;

public class CheckerNonAdminModeTests
{
    // assert helper method
    // bool admin is false to test non-admin mode
    private static void AssertCorrectStrength(string password, bool expectedStrength)
    {
        var checker = new Checker(password);
        Assert.Equal(checker.IsStrong(false), expectedStrength);
    }
    
    // Weak Password
    [Fact]
    public void WhenPasswordHasLessThan7CharactersReturnsFalse()
    {
        AssertCorrectStrength("a", false);
    }
    [Fact]
    public void WhenPasswordHasMoreThan7CharactersButDoesNotHaveAtLeastOneDigitReturnsFalse()
    {
        AssertCorrectStrength("278397635492!)0", false);
    }
    [Fact]
    public void WhenPasswordHasLessThan7CharactersButHaveBothAlphabeticAndDigitReturnsFalse()
    {
        AssertCorrectStrength("44aap0", false);
    }
    
    // Strong Password
    [Theory]
    [InlineData ("hellowor9")]
    [InlineData ("msllkkkj9hduu8")]
    [InlineData ("10!@44444m40o")]
    public void WhenPasswordHasOver7CharactersAtLeast1Alphabetic1DigitReturnsTrue(string password)
    {
        AssertCorrectStrength(password, true);
    }
}

