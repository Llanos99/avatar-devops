FROM nginx:alpine3.19

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./web/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

