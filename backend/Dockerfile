FROM node:14

WORKDIR /app

COPY package*.json ./
RUN npm install

# Copiar el script wait-for-it.sh
COPY wait-for-it.sh /usr/local/bin/wait-for-it.sh
RUN chmod +x /usr/local/bin/wait-for-it.sh

COPY . .

EXPOSE 5000

CMD ["sh", "-c", "echo 'Waiting for MySQL...' && wait-for-it.sh mysql:3306 --timeout=30 --strict && echo 'Waiting for Redis...' && wait-for-it.sh redis:6379 --timeout=30 --strict && echo 'Starting backend...' && node index.js"]
