# FrontEnd TimerJob
## Descrição:
  Um contador de tempo de projeto dinâmico e intuitivo.

  ![tela inicial](/public/model/home.png)

  Após a primeira inicialização ele irá buscar no banco de dados todos os projetos que estiverem lá e mostrará na tela, já contabilizando em tempo real quanto tempo falta até o dia da entrega do projeto.

<br>
<br>

# Criando novo projeto:

Para criar um novo projeto basta clicar na opção "Adicionar Projeto" e este modal irá se abrir...

![Novo Projeto](/public/model/newproject.png)

Ao preencher os dados corretamente e clicar em "Salvar" uma notificação irá aparecer dizendo se a solicitação foi bem sucedida ou não, é importante esperar essa notificação pois em alguns casos ela pode levar alguns segundos para aparecer.
Caso a resposta da requisição seja negativa, basta clicar novamente em "Salvar" e aguardar novamente.
Já a resposta sendo positiva tudo que resta é recarregar a página para que a tela seja recarregada com as novas informações.

<br>
<br>

# Editando um projeto existente:
Para editar um projeto existente voçê pode passar o mouse por cima do nome do projeto em questão, assim aparecerá as opções de "apagar" ou "editar".

![apagar ou editar](/public/model/opname.png)

Ao clicar na opção "editar" irá abir um modal muito parecido com o antrior, a diferença é que agora você tem as informações atuais do projeto e a opção de mudar essas informações preenchendo os campos e clicando em "salvar" ou de apagar esse projeto clicando em "excluir".

![apagar ou salvar](/public/model/telaedit.png)

<br>


Ao clicar na opção "apagar" das opções no nome do projeto, a mesma tela que se abre ao apertar "excluir" no modal de editar, irá abrir novamente.

<br>


![modal delete](/public/model/delete.png)

Basta confirmar que quer realmente excluir este projeto do banco de dados.

# Atenção:
  Em todas as ações dentro da aplicação é importante aguardar o retorno visual se a ação foi realizada com sucesso ou não, já que em alguns casos esse retorno pode demorar um pouco para aparecer em tela. Caso bem sucedido basta recarregar a página para atualizar os dados, caso contrário tente novamente realizar a ação desejada!

# Muito obrigado e até a próxima:
By: GetHash Making Ideas Happen
