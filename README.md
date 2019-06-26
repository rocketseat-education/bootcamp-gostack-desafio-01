# Desafio 01. Conceitos do NodeJS

Crie uma aplicação do zero utilizando Express.

Essa aplicação será utilizada para armazenar projetos e suas tarefas.

## Rotas

- `POST /projects`: A rota deve receber `id` e `title` dentro corpo de cadastrar um novo projeto dentro de um array no seguinte formato: `{ id: "1", title: 'Novo projeto', tasks: [] }`; Certifique-se de enviar tanto o ID quanto o título do projeto no formato string com àspas duplas.

- `GET /projects`: Rota que lista todos projetos e suas tarefas;

- `PUT /projects/:id`: A rota deve alterar apenas o título do projeto com o `id` presente nos parâmetros da rota;

- `DELETE /projects/:id`: A rota deve deletar o projeto com o `id` presente nos parâmetros da rota;

- `POST /projects/:id/tasks`: A rota deve receber um campo `title` e armazenar uma nova tarefa no array de tarefas de um projeto específico escolhido através do `id` presente nos parâmetros da rota;

### Exemplo

Se eu chamar a rota `POST /projects` repassando `{ id: 1, title: 'Novo projeto' }` e a rota `POST /projects/1/tasks` com `{ title: 'Nova tarefa' }`, meu array de projetos deve ficar assim:

```js
[
  {
    id: "1",
    title: 'Novo projeto',
    tasks: ['Nova tarefa']
  }
]
```

## Middlewares

- Crie um middleware que será utilizado em todas rotas que recebem o ID do projeto nos parâmetros da URL que verifica se o projeto com aquele ID existe. Se não existir retorne um erro, caso contrário permita a requisição continuar normalmente;

- Crie um middleware global chamado em todas requisições que imprime (`console.log`) uma contagem de quantas requisições foram feitas na aplicação até então;

## Entrega

Esse desafio **não precisa ser entregue** e não receberá correção, mas você pode ver o resultado do código do desafio aqui: https://github.com/Rocketseat/bootcamp-gostack-desafio-01

Após concluir o desafio, adicionar esse código ao seu Github é uma boa forma de demonstrar seus conhecimentos para oportunidades futuras.

“Sua única limitação é você mesmo”!
