# Utiliza la imagen oficial de Node.js 18
FROM node:18

# Directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copia los archivos de tu proyecto (package.json y package-lock.json)
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código fuente de tu proyecto
COPY . .

# Expón el puerto 3000 (o el puerto que uses)
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]