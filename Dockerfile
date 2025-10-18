### Multi-stage Dockerfile for Create React App
# 1) Build stage: uses Node to install deps and build the production bundle
# 2) Production stage: serves the build with nginx and includes SPA fallback

FROM node:18-alpine AS build
WORKDIR /app

# copy package manifests and install dependencies
COPY package.json package-lock.json* ./
RUN npm ci --silent

# copy source and build
COPY . .
RUN npm run build

# production image
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html

# add custom nginx config for SPA routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
