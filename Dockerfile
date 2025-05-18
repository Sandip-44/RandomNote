# Use Node.js LTS base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies first for caching
COPY package*.json ./
RUN npm install

# Copy the rest of the code
COPY . .

# Build Nuxt (will generate .output folder for Nitro)
RUN npm run build

# Expose port 80 (we'll run Nuxt on it)
EXPOSE 80

# Tell Nuxt to listen on 0.0.0.0:80
ENV NUXT_PORT=80
ENV NUXT_HOST=0.0.0.0

# Start the Nuxt Nitro server
CMD ["node", ".output/server/index.mjs"]
