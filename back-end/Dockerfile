FROM maven:3.9.6-eclipse-temurin-17 as build

WORKDIR /app

COPY ./java .
RUN mvn package

FROM eclipse-temurin:17-alpine

WORKDIR /app

COPY --from=build /app/target/*.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java","-jar","app.jar"]