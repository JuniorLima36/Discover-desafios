># Sobre o desafio
## [Layout](https://efficient-sloth-d85.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3bb55a63-dacf-4ca9-a85f-33eb8e7cab00%2FUntitled.png?id=e6b675b0-67e8-433e-9cc2-1fae674aa724&table=block&spaceId=08f749ff-d06d-49a8-a488-9846e081b224&width=2000&userId=&cache=v2)
- Essa é uma série de desafios básicos para que você possa praticar seus conhecimentos em HTML. 

># 1. Glossário
Nesse desafio você deve criar um glossário com com no mínimo 4 tags HTML e suas definições.

## Iniciando o projeto

Primeiro vamos criar o arquivo HTML. Você pode dar qualquer nome para este arquivo, desde que use a extensão `.html`. Exemplo: **glossary.html** 

Para criar a estrutura base do HTML no Visual Studio Code, você pode digitar `!` e `TAB` em seguida. Feito isso, você vai ficar com uma estrutura parecida com o código abaixo:
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Glossário</title>
  </head>
  <body>

  </body>
</html>
```
Lembre-se de dar um título para o documento usando a tag <title> 
<title>Glossário</title>

### Criando uma lista de descrição

- Adicione um título para a página  
  ❓
  (https://app.rocketseat.com.br/node/o-guia-estelar-de-html/group/trabalhando-com-elementos/lesson/titulos-e-paragrafos)
    
- Para criar o glossário, você deve usar uma lista de descrição (`<dl>`)
    
  ❓ Veja mais sobre lista de descrição  
  (https://app.rocketseat.com.br/node/o-guia-estelar-de-html/group/trabalhando-com-elementos/lesson/lista-de-descricao)
    
- O termo da descrição deve estar em **negrito**
  - Bônus: o termo da descrição pode ser um link que leva para a documentação sobre o elemento HTML

## Como deve ficar a página ao final?

Ao finalizar o desafio você vai ter um resultado parecido com o da imagem abaixo. 

Lembrando que as imagens e textos abaixo são ilustrativos e você pode adicionar seu próprio conteúdo conforme as instruções acima.

[Como deve ficar](https://efficient-sloth-d85.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa9af2636-4364-4443-9989-d9f8a2ec26d4%2FUntitled.png?id=5f1fde2d-e482-4212-82d7-c734200aa6d3&table=block&spaceId=08f749ff-d06d-49a8-a488-9846e081b224&width=2000&userId=&cache=v2)

----
># 2. Formulário de contato

Nesse desafio você vai criar um formulário para contato.

Para esse desafio, recomendamos que você assista ao curso [Formulários de Outro Planeta](https://app.rocketseat.com.br/node/formularios-de-outro-planeta), caso ainda não tenha assistido. 

## Iniciando o projeto

Primeiro vamos criar o arquivo HTML. Você pode dar qualquer nome para este arquivo, desde que use a extensão `.html`. Exemplo: **contato.html** 

Para criar a estrutura base do HTML no Visual Studio Code, você pode digitar `!` e `TAB` em seguida. Feito isso, você vai ficar com uma estrutura parecida com o código abaixo:
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Contato</title>
  </head>
  <body>

  </body>
</html>
```
💡 Lembre-se de dar um título para o documento usando a tag `<title>` 
`<title>Contato</title>`

### Criando o formulário

- Dentro do formulário adicione um `fieldset` com `legend` "Entre em contato"
- Adicione um `select` para que o usuário possa escolher o assunto do contato (ex: suporte, sugestão e reclamação)
- Adicione campos para que o usuário possa escrever seu **nome completo** e **e-mail**
    - Lembre-se de usar o `type` correto para cada tipo de input
- Adicione uma área de texto para que o usuário possa enviar uma **mensagem**
- Adicione um campo com um `checkbox` e o texto "Aceito receber novidades por e-mail"
- O formulário deve ter um botão "Enviar"  

💡 Para adicionar quebra de linha, você pode usar a tag `<br>`

## Como deve ficar a página ao final?

Ao finalizar o desafio você vai ter um resultado parecido com o da imagem abaixo. 

Lembrando que as imagens e textos abaixo são ilustrativos e você pode adicionar seu próprio conteúdo conforme as instruções acima.

[Como deve ficar](https://efficient-sloth-d85.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F804d9af6-6d68-42f8-be92-17659f892ae5%2Fform-contato.png?id=e9abb6ff-af6d-40c4-b7c8-1354cb9cf8c3&table=block&spaceId=08f749ff-d06d-49a8-a488-9846e081b224&width=1880&userId=&cache=v2)

----

># 3. Lista de compras

Nesse exercício você deve criar uma lista de compras que tenha no mínimo 4 itens. 

Pode ser uma lista de compras de mercado, uma lista de itens que você deseja comprar, ou qualquer outro tipo de lista de compras.

## Iniciando o projeto

Primeiro vamos criar o arquivo HTML. Você pode dar qualquer nome para este arquivo, desde que use a extensão `.html`. Exemplo: **shopping-list.html** 

Para criar a estrutura base do HTML no Visual Studio Code, você pode digitar `!` e `TAB` em seguida. Feito isso, você vai ficar com uma estrutura parecida com o código abaixo:
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Lista de Compras</title>
  </head>
  <body>

  </body>
</html>
```
💡 Lembre-se de dar um título para o documento usando a tag `<title>` 
`<title>Lista de Compras</title>`

### Criando a lista

- A página deve ter um Título `h1` e um separador (`hr`) logo abaixo
- Cada item da lista deve ser um input do tipo `checkbox`
- O primeiro item deve estar marcado como `checked`  
❓ Veja essa aula sobre checkbox
(https://app.rocketseat.com.br/node/formularios-de-outro-planeta/group/tags-de-entrada-de-dados/lesson/checkbox)

## Como deve ficar a página ao final?

Ao finalizar o desafio você vai ter um resultado parecido com o da imagem abaixo. 

Lembrando que as imagens e textos abaixo são ilustrativos e você pode adicionar seu próprio conteúdo conforme as instruções acima.

[Como deve ficar](https://efficient-sloth-d85.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F1e46ee28-ee1f-4ea2-a2f4-7588c1d52e3c%2Fshopping-list.png?id=e195b080-84b2-423b-840c-04c5b32ecf02&table=block&spaceId=08f749ff-d06d-49a8-a488-9846e081b224&width=1550&userId=&cache=v2)

----

># 4. Quiz

Nesse desafio você deve criar um quiz de perguntas e respostas. 

Adicione no mínimo 3 perguntas com 4 opções de respostas cada. 

Você pode escolher qual o tema do quiz.

## Iniciando o projeto

Primeiro vamos criar o arquivo HTML. Você pode dar qualquer nome para este arquivo, desde que use a extensão `.html`. Exemplo: **quiz.html** 

Para criar a estrutura base do HTML no Visual Studio Code, você pode digitar `!` e `TAB` em seguida. Feito isso, você vai ficar com uma estrutura parecida com o código abaixo:
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Quiz</title>
  </head>
  <body>

  </body>
</html>
```
💡 Lembre-se de dar um título para o documento usando a tag `<title>` 
`<title>Quiz</title>`

### Criando o Quiz

Quiz é um jogo de perguntas e respostas. Uma forma simples de criar um quiz, é adicionando um formulário, e usar a lista ordenada para criar as perguntas e inputs do tipo radio para as opções de respostas.

- Primeiro você pode adicionar um formulário na página
```
<form action="">
   <!-- Aqui você vai adicionar as perguntas e opções de respostas -->
</form>
```
💡 Não precisa se preocupar com os atributos do form pois, nesse momento, vamos focar apenas na estrutura HTML do quiz e o mesmo não precisa ser enviado.

### Listando as perguntas e respostas

Podemos criar uma lista ordenada (`ol`) para fazer a lista de perguntas e respostas. A estrutura ficaria algo parecido com a estrutura abaixo:
```
<ol>
  <li>
    <h3>Pergunta 1</h3>
    <div>
      <input type="radio" name="question-1" id="question-1-a" value="A" />
      <label for="question-1-a">A) opção 1</label>
    </div>
    <div>
      <input type="radio" name="question-1" id="question-1-b" value="B" />
      <label for="question-1-b">B) opção 2</label>
    </div>
    <div>
      <input type="radio" name="question-1" id="question-1-c" value="C" />
      <label for="question-1-c">C) opção 3</label>
    </div>
    <div>
      <input type="radio" name="question-1" id="question-1-d" value="D" />
      <label for="question-1-d">D) opção 4</label>
    </div>
  </li>
<!-- Adicionar as outras perguntas dentro de um li -->
</ol>
```
❓ Aula sobre listas  
(https://app.rocketseat.com.br/node/o-guia-estelar-de-html/group/trabalhando-com-elementos/lesson/listas)

❓ Input type="radio"  
(https://app.rocketseat.com.br/node/formularios-de-outro-planeta/group/tags-de-entrada-de-dados/lesson/radio)

## Como deve ficar a página ao final?

Ao finalizar o desafio você vai ter um resultado parecido com o da imagem abaixo. 

Lembrando que as imagens e textos abaixo são ilustrativos e você pode adicionar seu próprio conteúdo conforme as instruções acima.

[Como deve ficar](https://efficient-sloth-d85.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F46ab8824-d2ed-4c03-b9e9-e08e219bfc94%2Fquiz.png?id=ca11024b-0aa4-4ac3-b0e1-8f2e5fde9f13&table=block&spaceId=08f749ff-d06d-49a8-a488-9846e081b224&width=2000&userId=&cache=v2)

----

># 5. Blog Post
Nesse desafio você deve criar a estrutura **HTML** para a página de post de um blog.

## Iniciando o projeto

Primeiro vamos criar o arquivo HTML, você pode dar qualquer nome para este arquivo, desde que use a extensão `.html`. Exemplo: **blog-post.html** 

Para criar a estrutura base do HTML no Visual Studio Code, você pode digitar `!` e `TAB` em seguida. Feito isso, você vai ficar com uma estrutura parecida com o código abaixo:
````
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>

  </body>
</html>
````
💡 Lembre-se de dar um título para o documento usando a tag `<title>` 
`<title>Blog Post</title>`

## Informações da página

Nessa seção você vai encontrar as instruções e dicas para resolver o desafio.

Então, bora codar! 👨‍💻👩‍💻

- Adicione um `header` com o nome do blog em negrito e adicione links para páginas "Home", "Sobre" e "Contato".

- 💡  Os links não precisam levar para nenhuma página, para isso basta adicionar um `#` no `href` da tag `a`  
(https://app.rocketseat.com.br/node/o-guia-estelar-de-html/group/links/lesson/conhecendo-a-tag-ancora)

- O post do blog deve ficar dentro da tag article

- ❓ Nesse curso, você pode ver mais sobre como deixar o HTML semântico   
(https://app.rocketseat.com.br/node/html-que-faz-sentido-para-todos)

- E aqui neste outro pode ver mais sobre a tag **article**
(https://app.rocketseat.com.br/node/html-que-faz-sentido-para-todos/lesson/article)

## A estrutura do post
- Adicione um **título** para o post  
❓ (https://app.rocketseat.com.br/node/o-guia-estelar-de-html/group/trabalhando-com-elementos/lesson/titulos-e-paragrafos)

### O post deve ter:
- Uma imagem  
💡 Para que a imagem não fique muito grande, você pode usar o atributo `width` adicionando uma largura de 400px, por exemplo `width="400px"`  
(https://app.rocketseat.com.br/node/o-guia-estelar-de-html/group/conceitos-7/lesson/atributos)  
❓ Imagens no HTML  
(https://app.rocketseat.com.br/node/posso-ver-e-ouvir-o-html/group/images/lesson/images)  
💡 Sites onde você pode encontrar imagens grátis para usar nos seus projetos: [Unsplash](https://unsplash.com/), [Pexels](https://www.pexels.com/pt-br/), [Pixabay](https://pixabay.com/pt/).
- Adicione uma citação  
❓(https://app.rocketseat.com.br/node/o-guia-estelar-de-html/group/trabalhando-com-elementos/lesson/citacoes)
- Crie mínimo 3 parágrafos (você pode usar o `lorem` para criar o texto dos parágrafos)
- Adicione também um separador `<hr>`
- Adicione um `aside` com as informações sobre o autor do post
    - data da postagem
    - adicione uma imagem do autor
    - nome do autor
    - um pequeno texto sobre o autor  
❓(https://app.rocketseat.com.br/node/html-que-faz-sentido-para-todos/lesson/aside)

## Como deve ficar a página ao final?

Ao finalizar o desafio você vai ter um resultado parecido com o da imagem abaixo. 

Lembrando que as imagens e textos abaixo são ilustrativos e você pode adicionar seu próprio conteúdo conforme as instruções acima.

[Como deve ficar](https://efficient-sloth-d85.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F86096e7a-a513-4eab-9119-1b9151f936a2%2Fblog-post.png?id=4bb01d05-0a21-49ab-a49a-8e5afc3c596e&table=block&spaceId=08f749ff-d06d-49a8-a488-9846e081b224&width=2000&userId=&cache=v2)