FROM node:16

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy app source code
COPY . .

# Expose the application port
EXPOSE 3000

# Start the app
CMD ["node", "app.js"]
