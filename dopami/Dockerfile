# syntax=docker/dockerfile:1

# Development
FROM mcr.microsoft.com/dotnet/sdk:6.0 AS dev
ENV ASPNETCORE_URLS=http://+:9002
ENV ASPNETCORE_ENVIRONMENT="Development"
EXPOSE 9002
WORKDIR /app
COPY . .
# CMD ["/bin/bash", "-c", "dotnet restore && dotnet run"]
ENTRYPOINT dotnet restore && dotnet run

# Production
FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
ENV ASPNETCORE_URLS=http://+:9002
EXPOSE 9002

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /app
COPY dopami.csproj .
RUN dotnet restore .
COPY . .
RUN dotnet build -c Release
RUN dotnet publish -c Release -o /publish

FROM base AS prod
ENV ASPNETCORE_ENVIRONMENT="Production"
WORKDIR /app
COPY --from=build /publish .
ENTRYPOINT ["dotnet", "dopami.dll"]
