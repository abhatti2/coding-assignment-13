# Step 1: Build stage using a Node.js environment
FROM node:18-alpine AS build

# Set the working directory as per assignment requirements
WORKDIR /bhatti_ashbeel_ui_garden_build_checks

# Copy package.json and package-lock.json, then install dependencies
COPY package*.json ./
RUN npm install

# Copy the entire project and build the React app
COPY . .
RUN npm run build

# Step 2: Use Nginx to serve the build
FROM nginx:alpine

# Copy the custom nginx.conf file from the root directory to override the default Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built React files from the build stage to the appropriate Nginx directory
COPY --from=build /bhatti_ashbeel_ui_garden_build_checks/build /usr/share/nginx/html

# Expose port 8018 as per assignment requirements
EXPOSE 8018

# Label to identify the container for assignment purposes
LABEL maintainer="bhatti_ashbeel_coding_assignment13"

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
