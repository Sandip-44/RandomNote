# Use the official Node.js image as the base image
FROM node:16

# Set the working directory inside the container
WORKDIR /pages/index

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Nuxt.js application
RUN npm run build

# Expose the port Nuxt.js runs on (default is 3000)
EXPOSE 3000

# Start the Nuxt.js application
CMD ["npm", "start"]