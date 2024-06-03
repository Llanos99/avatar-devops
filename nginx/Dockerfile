FROM node:18 as build

WORKDIR /app

COPY ../web/package*.json ./
RUN npm install

COPY . .

RUN npm run build

# Etapa 2: Servir la aplicación con Nginx
FROM nginx:stable-alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]