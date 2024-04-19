# Build Project
FROM maven:3.8.4-openjdk-17 As build
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn clean package

# Run Application
FROM openjdk:17-alpine
WORKDIR /app
COPY --from=build /app/target/*.jar ./back-end.jar
EXPOSE 8080
CMD ["java", "-jar", "back-end.jar"]