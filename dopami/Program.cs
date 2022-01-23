using Microsoft.Extensions.FileProviders;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container

builder.Services.AddControllersWithViews();
var app = builder.Build();

// Middleware

if (app.Environment.IsDevelopment()) app.UseDeveloperExceptionPage();
app.UseRouting();
app.MapControllers();

app.Run();
