# syntax=docker/dockerfile:1

# Development
FROM mcr.microsoft.com/dotnet/sdk:6.0 AS dev
ENV ASPNETCORE_URLS=http://+:9002
ENV ASPNETCORE_ENVIRONMENT="Development"
EXPOSE 9002
WORKDIR /app
ENTRYPOINT dotnet restore && dotnet run

# Production
FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
ENV ASPNETCORE_URLS=http://+:9002
WORKDIR /app
EXPOSE 9002

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /app
COPY dopami.csproj .
RUN dotnet restore .
COPY . .
RUN dotnet build -c Release

FROM build AS publish
RUN dotnet publish -c Release -o /publish

FROM base AS prod
ENV ASPNETCORE_ENVIRONMENT="Production"
WORKDIR /app
COPY --from=publish /publish .
ENTRYPOINT ["dotnet", "dopami.dll"]
