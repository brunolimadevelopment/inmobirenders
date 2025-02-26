# Use uma imagem base do Node.js
FROM node:20

# Define o diretório de trabalho no container
WORKDIR /app

# Copia o package.json e package-lock.json para o diretório do container
COPY package*.json ./

# Instala as dependências do projeto, incluindo o Astro
RUN npm install

# Copia todo o código do projeto para dentro do container
COPY . .

# Instala o Astro globalmente no container (caso queira uma instalação global)
RUN npm install -g astro

# Expõe a porta 3000 para o serviço Astro
EXPOSE 4322

# Comando para iniciar o site Astro
CMD ["npm", "run", "dev"]
