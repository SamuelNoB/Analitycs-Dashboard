# Use a imagem oficial do Node.js com Alpine como base
FROM node:alpine

# Crie e defina o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Instale o Yarn
RUN apk add --no-cache yarn

# Copie os arquivos de configuração da aplicação
COPY package*.json yarn.lock ./

# Instale as dependências da aplicação
RUN yarn install --frozen-lockfile

# Copie o restante dos arquivos da aplicação
COPY . .

# Construa a aplicação Next.js
RUN yarn build

# Exponha a porta em que a aplicação irá rodar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["yarn", "start"]
