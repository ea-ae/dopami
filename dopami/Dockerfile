# Stage 1: Define base image that will be used for production

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 9002
ENV ASPNETCORE_URLS=http://+:9002
ENV ASPNETCORE_ENVIRONMENT="Production"

# Stage 2: Build and publish the code

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /app
# COPY ../dopami.sln ./
COPY dopami.csproj .
RUN dotnet restore .
COPY . .
RUN dotnet build -c Release

FROM build AS publish
RUN dotnet publish -c Release -o /publish

# Stage 3: Build and publish the code

FROM base AS prod
WORKDIR /app
COPY --from=publish /publish .
ENTRYPOINT ["dotnet", "dopami.dll"]
