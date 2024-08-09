var builder = WebApplication.CreateBuilder(args);
builder.Services.AddMvc();
builder.Services.AddRouting();
var app = builder.Build();
app.UseRouting();
app.MapControllers();
app.UseCors(c =>
{
    c.AllowAnyOrigin();
    c.AllowAnyMethod();
    c.AllowAnyHeader();
});

app.Run();

public partial class Program { }