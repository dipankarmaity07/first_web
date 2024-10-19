# Use the official Node.js image as the base image
FROM node:20

# Set the working directory to the '06-user-action' folder in the container
WORKDIR /app

# Copy the package.json and package-lock.json (if available)
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the rest of the application files into the container
COPY . .

WORKDIR /app/dipu


# Expose the port the app runs on (if needed, e.g., if it's a web app)
# EXPOSE 3000  # Adjust the port based on your application

# Define the entry point for the container
CMD ["npm", "start"]
