# Use a Node.js base image
FROM node:20

# Install bun
RUN curl -fsSL https://bun.sh/install | bash

# Add bun to PATH
ENV PATH="/root/.bun/bin:${PATH}"

# Set the working directory for your app
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies using npm
RUN npm install

# Copy the rest of the app's files
COPY . .

# Expose any necessary ports (if required by your app)
EXPOSE 3000

# Run the app with bun
CMD ["bun", "run", "start"]
