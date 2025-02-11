# Build stage
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build-env
WORKDIR /app

COPY MVC03/ .
RUN dotnet restore MVC03.csproj
RUN dotnet publish MVC03.csproj -c Release -o /out

# Runtime stage
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=build-env /out .

EXPOSE 80
ENTRYPOINT ["dotnet", "MVC03.dll"]
