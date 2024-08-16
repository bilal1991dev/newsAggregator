# Use an official Node.js image as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app for production
RUN npm run build

# Install serve to run the application
RUN npm install -g serve

# Expose the port the app will run on
EXPOSE 3000

# Command to run the app
CMD ["serve", "-s", "build"]
