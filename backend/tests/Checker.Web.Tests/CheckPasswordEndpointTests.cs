using System.Net;
using System.Net.Http.Json;
using  Microsoft.AspNetCore.Mvc.Testing;

namespace Checker.Web.Tests;

public class CheckPasswordEndpointTests
{
    private readonly HttpClient _client;

    public CheckPasswordEndpointTests()
    {
        WebApplicationFactory<Program> factory = new();
        _client = factory.CreateClient();
    }

    [Fact]
    public async Task TestEndpointOk()
    {
        var response = await _client.PostAsJsonAsync("/controller/check", new
        {
            Password = "HelloWorld@",
            IsAdmin = false
        });
        
        Assert.Equal(HttpStatusCode.OK, response.StatusCode);
    }
    
    [Theory]
    [InlineData("hellowor9", false, true)]
    [InlineData("msllkkkj9hduu8", false, true)]
    [InlineData("278397635492!)0", false, false)]
    [InlineData("helloworld1!11", true, true)]
    [InlineData("dnkvd!", true, false)]
    public async Task TestResponse(string password, bool isAdmin, bool expected)
    {
        var response = await _client.PostAsJsonAsync("/controller/check", new
        {
            Password = password,
            IsAdmin = isAdmin
        });

        var content = await response.Content.ReadFromJsonAsync<CheckerController.UpdatedStateResponse>();
        Assert.Equal(new CheckerController.UpdatedStateResponse {
            IsStrong = expected
        }, content);
    }
}