# Step 1: Create parent image
FROM node:20

# Step 2: Set the working directory
WORKDIR /app

# Step 3: Copy the all package files, ignoring unneeded files
COPY package*.json .

# Step 4: Install node modules
RUN npm install

# Step 3: Copy the Next.js app, ignoring unneeded files
COPY . .

# Step 7: Expose the correct port (Next.js default port is 3000)
EXPOSE 3000

# Step 8: Set up a default command to run the application
CMD ["npm", "run", "dev"]