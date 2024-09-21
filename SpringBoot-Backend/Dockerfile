# Use the official OpenJDK 8 image as a base image
FROM openjdk:8-jre-alpine

# Set the working directory
WORKDIR /app

# Copy the JAR file into the container
COPY target/employee-app-0.0.1-SNAPSHOT.jar /app/employee-app-0.0.1-SNAPSHOT.jar

# Expose the port your Spring Boot app will run on
EXPOSE 8081


# Command to run your application
CMD ["java", "-jar", "employee-app-0.0.1-SNAPSHOT.jar"]

