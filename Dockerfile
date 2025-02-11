# Build stage
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build-env
WORKDIR /app

COPY Valentines/ .
RUN dotnet restore Valentines.csproj
RUN dotnet publish Valentines.csproj -c Release -o /out

# Runtime stage
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=build-env /out .

EXPOSE 80
ENTRYPOINT ["dotnet", "Valentines.dll"]
