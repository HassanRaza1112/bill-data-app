# Set image from base on offical node lts alpine
ARG VERSION=lts-alpine
FROM node:$VERSION

# Set working directory
WORKDIR /usr/src/app

# Copy all files
COPY package*.json ./

# Install dependencies
RUN npm install
RUN npm install -g nodemon 
COPY . .
ENV PORT 3000
EXPOSE 3000
# Run npm start script when container starts
CMD ["npm", "run", "start"]