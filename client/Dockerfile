# Set image from base on offical node lts alpine
ARG VERSION=lts-alpine
FROM node:$VERSION

# Set working directory
WORKDIR /app

# Copy all files
COPY . .

# Install dependencies
RUN npm install 
ENV PORT 3000
EXPOSE 3000
# Run yarb start script when container starts
CMD ["npm", "run", "dev"]