using Xunit.Abstractions;

namespace Checker.Model.Tests;

public class CheckerAdminModeTests
{
    // assert helper method
    // bool admin is true to test admin mode
    private static void AssertCorrectStrength(string password, bool expectedStrength)
    {
        var checker = new Checker(password);
        Assert.Equal(checker.IsStrong(true), expectedStrength);
    }
    
    // Weak Password
    [Fact]
    public void WhenPasswordHasOver10CharactersAtLeast1Alphabetic1DigitButNoSpecialCharacterReturnsFalse()
    {
        AssertCorrectStrength("helloworld1234567", false);
    }
    [Theory]
    [InlineData ("44444444444444444@")]
    [InlineData ("knsfjvbsfkdjfhvjdfn")]
    [InlineData ("dnkvd!")]
    [InlineData ("@@@@@@@@@")]
    [InlineData ("a")]
    [InlineData ("234a")]
    public void WhenPasswordDoesNotFulfillBasicRequirementContainsASpecialCharacterReturnsFalse(string password)
    {
        AssertCorrectStrength(password, false);
    }
    
    // Strong Password
    [Theory]
    [InlineData ("abcdefb90@m")]
    [InlineData ("12345678a@B")]
    [InlineData ("helloworld1!11")]
    public void WhenPasswordHasOver10CharactersAtLeast1Alphabetic1Digit1SpecialCharacterReturnsTrue(string password)
    {
        AssertCorrectStrength(password, true);
    }
}
