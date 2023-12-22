# Analitycs-Dashboard

Painel de Analytics simples. Contém um gráfico de linhas contendo o total de visualizações por dia e também uma tabela contendo os links de maior acesso nos últimos 7 dias. Os dados são gerados aleatoriamente a cada acesso

O projeto foi feito utilizando as seguintes tecnologia:
* Front
  * React
  * ChakraUI
  * ApexCharts
* Back
  * NestJS

## Rodando o Projeto

### Com o Docker Compose

Certifique-se de ter o Docker e o Docker Compose instalados em sua máquina.

1. Clone o repositório:

   ```bash
   git clone git@github.com:SamuelNoB/Analitycs-Dashboard.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd Analitycs-Dashboard
   ```

3. Execute o Docker Compose para construir e iniciar os contêineres:

   ```bash
   docker-compose up --build
   ```

4. Acesse a aplicação em [http://localhost:3000](http://localhost:3000).

5. Para parar a execução, pressione `Ctrl+C` ou execute:

   ```bash
   docker-compose down
   ```

### Maneira Tradicional (Node.js, Yarn)

Certifique-se de ter o Node.js e o Yarn instalados em sua máquina.

1. Clone o repositório:

   ```bash
   git clone git@github.com:SamuelNoB/Analitycs-Dashboard.git
   ```

2. Navegue até o diretório do back-end:

   ```bash
   cd Analitycs-Dashboard/back
   ```

3. Instale as dependências:

   ```bash
   yarn install
   ```

4. Construa a aplicação:

   ```bash
   yarn build
   ```

5. Inicie a aplicação:

   ```bash
   yarn start
   ```

6. Inicie outro terminal e vá para

```bash
    cd Analitycs-Dashboard/front
```

7. Instale as dependências:

   ```bash
   yarn install
   ```

8. Construa a aplicação:

   ```bash
   yarn build
   ```

9. Inicie a aplicação:

   ```bash
   yarn start
   ```

10. Acesse a aplicação em [http://localhost:3000](http://localhost:3000).

11. Para parar a execução, pressione `Ctrl+C`.
