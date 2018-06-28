FROM nginx:latest
MAINTAINER Will Clark
COPY nginx.conf /etc/nginx/nginx.conf
RUN rm -r /usr/share/nginx/html && mkdir /usr/share/nginx/html
COPY web /etc/nginx/html