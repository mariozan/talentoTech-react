# First Step
FROM node:20-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# Genero la carpeta dist con los archivos compilados
RUN npm run build 

# Second Step
FROM nginx:alpine
# Copio la carpeta compilada en el archivo de configuracion de nginx
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]