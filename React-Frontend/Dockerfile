# Use the official Node.js image as a base image
FROM node:latest

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the remaining application files
COPY . .

# Build the React app
RUN npm run build


# Command to run your application
CMD ["npm", "start"]

