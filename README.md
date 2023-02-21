<div align="center">
<strong>

<img src="https://i.imgur.com/KRUqtdw.png" width="70%"></img>
</br>
</br>
<img src="https://i.imgur.com/5Fs3U6N.png" width="70%"></img>

<h1>#BoraCodar(7): Um site carnavalesco</h1>
<p>Carnaval chegando e todos querendo saber onde serão os blocos, não é mesmo? Então se liga no projeto que desenvolvi  no <a href="https://boracodar.dev">#BoraCodar</a> dessa semana.
Divulgue seus blocos e veja a localização de outros!
</p>

</br></br>

<h2>Ferramentas usadas:</h2>
<p>Este projeto foi desenvolvido por completo usando <a href="https://nextjs.org">NextJs</a> em sua mais nova versão 13, usando inclusive suas novas features de SSR.</p>

</br>


<strong>Como rodar?</strong>
<div align="left">

</br>
Primeiro, clone o repositório <a href="https://github.com/LuisHenriqueDaSilv/FindYourBlock">LuisHenriqueDaSilv/FindYourBlock</a> usando o seguinte comando:

```shell 
git clone https://github.com/LuisHenriqueDaSilv/FindYourBlock.git
```

</br>
Já com o repositório em sua máquina e ainda no diretório onde o repositório foi clonado,  rode a aplicação:

```shell 
cd web # Entra no diretório da aplicação
npm install # Instala todas as dependecias citadas no package.json
npx prisma migrate dev --name production # Faz com que o banco de dados seja criado com todas as tabelas necessarias
npx prisma db seed #OPCIONAL (Popula o banco de dados com alguns blocos de carnaval)
npm run build #Gera a build otimizada para produção
npm start #Inicia a aplicação.
```
Após isso a aplicação já deve ter sido iniciada e pode ser acessada em "<a href="http://localhost:3000/">http://localhost:3000/</a>".

</br>

</strong>
</div>
