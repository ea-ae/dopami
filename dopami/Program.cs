using Microsoft.Extensions.FileProviders;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews();

var app = builder.Build();

// Middleware.

if (app.Environment.IsDevelopment()) {
    app.UseDeveloperExceptionPage();
}

app.UseStaticFiles(new StaticFileOptions {
    FileProvider = new PhysicalFileProvider(
           Path.Combine(builder.Environment.ContentRootPath, "Client/dist")),
    RequestPath = "",

});

app.UseRouting();

app.MapControllers();

//app.MapControllerRoute(
//    name: "default",
//    pattern: "{controller}/{action=Index}");

// app.MapFallbackToFile("404.html");

app.Run();
