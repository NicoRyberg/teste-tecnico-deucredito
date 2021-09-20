# Teste Técnico DEUcrédito

## Estrutura do projeto

Neste repositório, você encontra um serviço backend em fastAPI. A lógica do backend está no arquivo "server/main.py". As seguintes funções já estão pré-configuradas:
- O serviço já está servindo arquivos estáticos no endpoint '/static'
- No endpoint '/dashboard' o serviço está renderizando o arquivo templates/dashboard.html.

Os dados que serão mostrados ao usuário encontram-se na pasta "data", divididos em dois arquivos json:
- products.json
- invoices.json - O campo 'product_id' é uma chave estrangeira para o campo 'id' do products.json

## Sua tarefa

Você deve mostrar dois gráficos na página mostrada quando o cliente acessar o endpoint '/dashboard'.

- O primeiro gráfico deverá mostrar a informação **quantidade vendida / produto**: soma dos campo 'quantity' (invoices.json) para todos os 'product_ids' (invoices.json) iguais
  - **Desafio complementar (caso sobre tempo)**: mostrar o nome do produto ao invés do ID do produto.

            - através do endpoint '/dashboard/produto' - ele exibe um JSON com a quantidade vendida de cada produto

- O segundo gráfico deverá mostrar a informação **quantidade vendida / dia**: soma dos campo 'quantitiy' (invoices.json) de todos os produtos para cada dia (campo 'date' do invoices.json)

        - através do endpoint '/dashboard/data' - ele exibe um JSON com a quantidade vendida por data

- **Desafio complementar (caso sobre tempo)**: Mostar um terceiro gráfico com a informação **quantidade vendida / tipo de produto**: soma dos campos 'quantity' (invoices.json) para todos os 'type' (products.json) iguais.

        - através do endpoint '/dashboard/tipo' - ele exibe um JSON com a quantidade vendida por tipo

## Setting up your development environment

### Installing the libraries
Run the following commands:
  - `pip install pipenv`
  - `pipenv install`

### Running the API for development
Initialize your app in an VM using the Pipenv:

- `pipenv shell`

Then run the following commands:

- `uvicorn server.main:app --reload`

And your app will be running on http://localhost:8000/
