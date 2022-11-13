
# POC TS - BOOKS

Projeto de conceitual de aprendizagem de TypeScript.



    type Book ={
    id?: number,
    title: string,
    author: string,
    value: number,
    pages: number
    }

## Documentação da API

#### Retorna todos os livros

```http
  GET /book
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `null` | `null` | Basta apenas fazer a requisição.  |

#### Retorna um livro

```http
  GET /book/:id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `number` | **Obrigatório**. O ID do item que você quer |


#### Insere um livro

```http
    POST /book
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `Book`      | `Object` | **Obrigatório**. apresentar o Object (Book),**Não obrigatório** apresentar o ID|

#### Atualiza um livro

```http
    PUT /book
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `Book`      | `Object` | **Obrigatório**. apresentar o Object (Book)   |

#### Deleta um livro

```http
    DELETE /book
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `Book`      | `Object` | **Obrigatório**. apresentar o Object (Book)   |

## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`PORT`

`DATABASE_URL`

