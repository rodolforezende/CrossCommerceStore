# CrossCommerceStore

Se trata de uma API responsável por extrair um conjunto de número da basse de dados do link: [http://challenge.dienekes.com.br/api/numbers](http://challenge.dienekes.com.br/api/numbers).

O principal objetivo da aplicação é unir os dados extraídos e apresentá-los de forma ordenada.

## Tecnologias
Foi utilizado como tecnologia principal o NodeJS, utilizado como arquiterura o modelo MSC.

## Como utilizar?

Siga os códigos abaixo 👇 

```
git clone git@github.com:rodolforezende/CrossCommerceStore.git
```

Acesse o diretório clonado:

```
cd CrossCommerceStore
```

Depois de feito o clone, abra o diretório onde foi clonado em seu terminal e digite o seguinte código:

```
npm install
```

Após completado as instalação das dependências, inicie o servidor com o seguinte comando em seu terminal:

```
npm run start:dev
```

Abra o seu POSTMAN e/ou seu INSOMNIA (ou qualquer ferramenta de requisições HTTP de preferência)

Coloque como endereço, fazendo uma requisição GET a seguinte URL:

```
http://locahost:3001
```

Ao clicar na opção SEND da sua ferramenta de quesições HTTP, haverá uma espera para o retorno em torno de 2 minutos, assim você obterá um retorno parecido com isso:
<p align="center">
    <img height="300"src="./img/Captura de tela 2021-12-12 154752.png">
  </p>
  
## Conclusão

Se trata de um projeto realizado afim de consolidar meus conhecimento em NodeJS, onde todos estão convidados e sintam-se a vontade para darem o Code Review ou até mesmo fazerem implementações no mesmo.

Estou aberto para qualquer feedback, dicas ou orientações.
