FROM node:18 as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV VITE_API_URL=http://backend:5000/api
ENV VITE_HOST=0.0.0.0
ENV VITE_PORT=5173
ENV VITE_CLIENT_PORT=5173 

RUN npm run build

EXPOSE 5173

CMD ["npm", "run", "dev"]