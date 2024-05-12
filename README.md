<div align="center">
<strong>

<img src="https://i.imgur.com/KRUqtdw.png" width="70%"></img>
</br>
</br>
<img src="https://i.imgur.com/5Fs3U6N.png" width="70%"></img>

<h1>FindYourBlock</h1>
<p>Carnaval chegando e todos querendo saber onde serão os blocos, divulgue os seus e veja a localização de outros!
</p>
</div>
</br>


## 📚 | Informações do projeto
<p>Este projeto foi desenvolvido com o intuito de estudar e testar as funcionalidades de Server/User Side Rendering implementadas no NextJS 13,  além de estudar como implementar um banco de dados utilizando o PrismaORM no mesmo.<br/> 
A UI utilizada como base para este projeto foi retirada do desafio <a href="https://boracodar.dev"> BoraCodar 7</a>, da Rocketseat. </p>

## ⚙️ | Tecnologias, linguagens e ferramentas utilizadas:
  - Typescript
  - React
  - NextJS
  - ORM Prisma
  - Sqlite

## ▶️ | Como rodar
**Para rodar o projeto em sua máquina local é necessário as seguintes ferramentas:**
- [NodeJs](https://nodejs.org/en/)
- [git](https://git-scm.com/) Apenas para clonar o repositório (Opcional)
<p>Tendo todas as ferramentas necessárias instaladas em sua máquina, siga o seguinte passo a passo para rodar a aplicação em um ambiente de desenvolvimento/testes (Não produção):</p>

**📍1°-** Clone o repositório <a href="https://github.com/LuisHenriqueDaSilv/FindYourBlock">LuisHenriqueDaSilv/FindYourBlock</a> em sua máquina:

```shell 
git clone https://github.com/LuisHenriqueDaSilv/FindYourBlock.git
```

**📍2°-** Execute os seguintes comandos em seu terminal (Um a um)

```shell 
cd web # Entra no diretório da aplicação
npm install # Instala todas as dependecias citadas no package.json
npx prisma migrate dev --name production # Faz com que o banco de dados seja criado com todas as tabelas necessarias
npx prisma db seed # Popula o banco de dados com alguns blocos de carnaval (OPCIONAL)
npm run build #Gera a build otimizada para produção
npm start #Inicia a aplicação.
```
<p>✅-Caso nenhum imprevisto ocorra durante a execução do projeto, devemos ter a aplicação acessível no endereço local "<a href="http://localhost:3000/">http://localhost:3000/</a>".</p>
