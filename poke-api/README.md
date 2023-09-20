
# PokeApi

Uma página construída com react e utilizando uma api para mostrar diversas informações sobre o pokemon que você quiser!

## Documentação da API

## Stack utilizada

**Front-end:** React;
## API UTILIZADA

https://pokeapi.co/

#### loadAPI(poke)

Recebe um nome como parâmetro e retorna as informações do pokemon desejado.
#### Retorna um item

```http
  GET https://pokeapi.co/api/v2/pokemon/${poke}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Obrigatório**. O nome do pokemon |


## Instalação

Instale dessa forma

```bash
  git clone nomedorepo
  cd pokeApi
  cd poke-api 
  npm install
```

## Execução

Execute à partir de um comando

```bash
    npm start
```

### `npm start`

Roda o app em modo de desenvolvimento.\
Abre [http://localhost:3000](http://localhost:3000) para visualizar em seu navegador.

## Screenshots

![SCREENSHOT] (poke-api/public/Captura de tela de 2023-09-20 18-59-23.png)
