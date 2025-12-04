# Use an official Node.js runtime as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /azolla-frontend

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the entire project to the container
COPY . .

# Build the React application
RUN npm run build

# Expose the port that the application will run on
EXPOSE 3000

# Define the command to start the application
CMD [ "npm", "run", "start" ]