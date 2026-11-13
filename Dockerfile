FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev
COPY . .
ENV NODE_ENV=production
EXPOSE 3000
# Run as the non-root user that comes with the node image
USER node
CMD ["npm", "start"]
