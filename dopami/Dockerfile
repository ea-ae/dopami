# syntax=docker/dockerfile:1

# Development
FROM mcr.microsoft.com/dotnet/core/sdk AS dev

ENV ASPNETCORE_URLS=http://+:9002
ENV ASPNETCORE_ENVIRONMENT="Development"
EXPOSE 9002
WORKDIR /srv

CMD ["/bin/bash", "-c", "dotnet restore && dotnet run"]

# Production
FROM mcr.microsoft.com/dotnet/core/aspnet as prod

ENV ASPNETCORE_URLS=http://+:9002
ENV ASPNETCORE_ENVIRONMENT="Production"
EXPOSE 9002
WORKDIR /srv

CMD ["/bin/bash", "-c", "dotnet restore && dotnet run"]
