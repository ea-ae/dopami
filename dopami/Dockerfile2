# syntax=docker/dockerfile:1

# Development
FROM mcr.microsoft.com/dotnet/core/sdk:6.0 AS dev

ENV ASPNETCORE_URLS=http://+:9002
ENV ASPNETCORE_ENVIRONMENT="Development"
EXPOSE 9002
WORKDIR /srv

CMD ["/bin/bash", "-c", "dotnet restore && dotnet run"]

# Production
FROM mcr.microsoft.com/dotnet/core/aspnet:6.0 as prod

ENV ASPNETCORE_URLS=http://+:9002
ENV ASPNETCORE_ENVIRONMENT="Production"
EXPOSE 9002
WORKDIR /srv

# dotnet publish -c Release (((-o bin/publish))) => /bin/Release/net6.0
COPY ./bin/Release/net6.0/publish .
ENTRYPOINT ["dotnet", "dopami.dll"]
