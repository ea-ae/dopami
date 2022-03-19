# syntax=docker/dockerfile:1

# Production
FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
ENV ASPNETCORE_URLS=http://+:9002
EXPOSE 9002

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /app
COPY dopami/dopami.csproj ./
RUN dotnet restore .
COPY dopami/ ./
RUN dotnet build -c Release
RUN dotnet publish -c Release -o /out

FROM base AS prod
ENV ASPNETCORE_ENVIRONMENT="Production"
WORKDIR /app
COPY --from=build /out ./
ENTRYPOINT ["dotnet", "dopami.dll"]

# Testing
FROM mcr.microsoft.com/dotnet/sdk:6.0 AS test
ENV ASPNETCORE_ENVIRONMENT="Production"
WORKDIR /app
COPY dopami/dopami.csproj dopami/
RUN dotnet restore dopami/
COPY tests/tests.csproj tests/
RUN dotnet restore tests/
COPY ./ ./
RUN dotnet build -c Release tests/tests.csproj
CMD dotnet test -c Release --no-build tests/tests.csproj
