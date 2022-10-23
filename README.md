## 🚀 Descrição do Projeto
Esse é um case de teste da Shopper.com.br
criado para avaliar meus conhecimentos sobre desenvolvimento de software. 
A proposta é criar um formulário simples de cadastro de pedidos de supermercado.
Junto desse documento recebi um arquivo products.csv , que é uma lista com produtos 
disponíveis e seus respectivos preços e estoque com as seguintes definições:
- id = id do produto
- name = nome do produto
- price = preço do produto em reais. 
- qty_stock = quantidade em estoque
## 📋 Funcionalidades
### Abaixo estão os requisitos que o sistema deve atender:
1- O sistema deve ter um formulário de cadastro de pedidos

2- O usuário deve entrar com Nome do Cliente, Data de Entrega e uma lista de compras 

3- A lista de compras é composta por um ou mais produtos e a quantidade solicitada para 
cada um deles.

4- O usuário pode alterar a quantidade de itens já cadastrados ou excluir um item que ele 
não queira mais. 

5- A cada alteração na lista de compras o sistema deve calcular o valor total do pedido.

6- Todas essas informações devem ser salvas em um banco de dados que você vai modelar.

7- Cada pedido salvo deve debitar a quantidade do produto correspondente de seu estoque.

8- O sistema deve alertar o usuário caso a quantidade solicitada não esteja disponível no 
estoque.

9- O sistema também deve ter uma função para mostrar o estoque atual exibindo: Nome do 
produto e a quantidade em estoque.

## 📋 Funcionalidades
No front-end o cliente cria um pequenocadastro com o nome e data de entrega, onde é gerado um id que é salvo no local storage.
- Após o cadastro ele é direcionado para página de compras onde pode adicionar o produto que deseja quantas vezes quiser, dependendo da quantidade em estoque.
É possível visualizar os produtos adicionados ao carrinho com os preços de total da compra, também excluir algum produto em que adicionou demais ou erradamente. O aplicativo pode ser acessado pelo link:
http://ec2-44-210-91-174.compute-1.amazonaws.com:3000

- No back-end foram criados endpoints para as requisições onde são ligados ao banco de dados mysql, onde são salvos os dado do cliente. Os endpoints podem ser acessados pelo link da API:
https://documenter.getpostman.com/view/21554008/2s84Dst1nj

### Tecnologias usadas:
<div style="display: inline_block">
  <img aline="center" width="100px" height="45px" alt="JAVASCRIPT" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-             badge&logo=javascript&logoColor=black" />
  <img aline="center" width="100px" height="45px" alt="REACT" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img aline="center" width="100px" height="45px" alt="CSS3" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
  <img aline="center" width="80px" height="45px" alt="HTML5" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
  <img aline="center" width="100px" height="45px" alt="TYPESCRIPT" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
  <img aline="center" width="100px" height="45px" alt="NODE.JS" src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" />
  <img aline="center" width="100px" height="45px" alt="EXPRESS.JS" src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" />
  <img aline="center" width="100px" height="45px" alt="MATERIAL-UI" src="https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white" />
  <img aline="center" width="100px" height="45px" alt="MYSQL" src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white" />
  <img aline="center" width="100px" height="45px" alt="STYLED-COMPONENTS" src="data:image/png;base64,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" />
</div>

## ✒️ Autor

## INTEGRANTE
Perfil      | Link do perfil no GITHUB
--------- | ------
[<img src="https://avatars.githubusercontent.com/KlebsonBicalhodeSousa" width="75px;"/>](https://github.com/KlebsonBicalhodeSousa) | [KlebsonBicalhodeSousa](https://github.com/KlebsonBicalhodeSousa)

