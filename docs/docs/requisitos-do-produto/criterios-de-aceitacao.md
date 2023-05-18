---
sidebar_position: 4
---

# Critérios de Aceitação

### **Histórico de Revisão**

|**Data**|**Versão**|**Descrição**|**Autor**|
|:------:|:--------:|:-----------:|:-------:|
| 15/05/2023 | 1.0 | Construção dos Critérios de Aceitação | [Taynara Vitorino](https://github.com/taybalau)|
| 16/05/2023 | 1.1 | Mudança nos Criérios de Aceitação| [Ana Catarina Santos](https://github.com/an4catarina)|
| 17/05/2023 | 1.2 | Alteração na distribuição dos Criérios| [Victor Hugo](https://github.com/ViictorHugoo)|


## Critérios de Aceitação da História do Usuário 
Nessa seção é possível encontrat os critérios de aceitação das user stories apresentadas no backlog. Esses critérios são usados como base para verificar se uma funcionalidade foi implementada corretamente. 

<table>
<thead>
  <tr>
    <th>Número</th>
    <th>Nome</th>
    <th>Critérios de aceitação </th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>US01</td>
    <td>Cadastro de Usuário</td>
    <td>- O usuário deve ser capaz de acessar a tela de cadastro a partir da tela inicial do aplicativo;<br/>- Os campos obrigatórios a ser preenchidos serão:<br/>&nbsp;&nbsp;- Nome;<br/>&nbsp;&nbsp;- E-mail;<br/>&nbsp;&nbsp;- Senha;<br/>- Duas perguntas de segurança para garantir uma futura redefinição de senha;<br/>- O e-mail deve ser validado;<br/>- A senha deverá ter um comprimento mínimo e caracteres especiais;<br/>- Deverá ter uma dupla verificação da senha, o sistema deverá passar quando ambas estiverem iguais;<br/>- Exibir mensagem de erro caso o e-mail já tenha sido cadastrado;<br/>- Direcionar para a tela de login após o cadastro ser bem-sucedido;</td>
  </tr>
  <tr>
    <td>US06</td>
    <td>Editar conta de Usuário</td>
    <td>- O usuário deve ser capaz de acessar a tela de cadastro a partir da tela inicial do aplicativo;<br/>- Os campos obrigatórios a ser preenchidos serão:<br/>&nbsp;&nbsp;- Nome;<br/>&nbsp;&nbsp;- E-mail;<br/>&nbsp;&nbsp;- Senha;<br/>-Duas perguntas de segurança para garantir uma futura redefinição de senha;<br/>- O e-mail deve ser validado;<br/>- A senha deverá ter um comprimento mínimo e caracteres especiais;<br/>- Deverá ter uma dupla verificação da senha, o sistema deverá passar quando ambas estiverem iguais;<br/>- Exibir mensagem de erro caso o e-mail já tenha sido cadastrado;<br/>- Direcionar para a tela de login após o cadastro ser bem-sucedid;</td>
  </tr>
  <tr>
    <td>US07</td>
    <td>Cadastro de Corrida<br/></td>
    <td>- Deverá ter uma tela ou uma função específica para o cadastro de corrida no aplicativo;<br/>- Os dados que devem ser inseridos devem ser:<br/>&nbsp;&nbsp;&nbsp;- Data;<br/>&nbsp;&nbsp;&nbsp;- Valor;<br/>&nbsp;&nbsp;&nbsp;- Quilometragem percorrida;<br/>&nbsp;&nbsp;&nbsp;- Aplicativo de corrida utilizado;<br/>- Os campos de quilometragem e valor deverão aceitar apenas valores numéricos;<br/>- O campo de data deverá permitir ao usuário selecionar ou inserir a data da corrida no formato DD/MM/YYYY;<br/>- O sistema deverá validar os campos de entrada, garantindo que não estejam errados, onde:<br/>&nbsp;&nbsp;- Deverá exibir uma mensagem de erro caso tenha algo errado;<br/>&nbsp;&nbsp;- Deverá exibir uma mensagem de êxito caso a operação tenha ocorrido com sucesso;</td>
  </tr>
  <tr>
    <td>US09</td>
    <td>Deletar Corridas Cadastradas</td>
    <td>- O usuário deverá ter acesso à funcionalidade de exclusão de corridas no sistema;<br/>- O sistema deve exibir uma lista de corridas previamente cadastradas pelo usuário, permitindo a identificação da corrida que o mesmo deseja excluir;<br/>- O usuário pode selecionar uma ou mais corridas para serem excluídas;<br/>- O sistema deve exibir uma confirmação de exclusão antes de apagar definitivamente as corridas selecionadas pelo usuário;<br/>- Com a exclusão, o sistema deve se adequar corretamente, atualizando as informações de controle financeiro;</td>
  </tr>
  <tr>
    <td>US19</td>
    <td>Visualizar histórico de despesas e ganhos</td>
    <td>- O usuário deve ter acesso a uma tela ou função específica para visualizar o histórico de despesas e ganhos;<br/>- O sistema deve exibir listas ou tabelas separadas com as seguintes informações:<br/>&nbsp;&nbsp;- As corridas cadastradas;<br/>&nbsp;&nbsp;- As despesas cadastradas;<br/>&nbsp;&nbsp;- As metas cadastradas;<br/>- O histórico deverá ser exibido em ordem cronológica, onde as entradas mais recentes deverão ser exibidas primeiro;<br/>- O usuário deve poder aplicar filtros ou realizar buscas específicas;<br/>- O usuário deve ter a opção de ordenar o histórico;</td>
  </tr>
  <tr>
    <td>US08</td>
    <td>Editar Corridas Cadastradas</td>
    <td>- O usuário deve ter acesso a uma tela ou função específica de edição de corridas cadastradas previamente;<br/>- O sistema deve exibir os detalhes da corrida selecionada pelo usuário em campos editáveis;<br/>- Os campos editáveis serão:<br/>&nbsp;&nbsp;- Data;<br/>&nbsp;&nbsp;- Valor;<br/>&nbsp;&nbsp;- Quilometragem percorrida;<br/>&nbsp;&nbsp;- Aplicativo de corrida utilizado;<br/>- O sistema deve validar os campos editáveis e garantir que os campos foram preenchidos corretamente<br/>- Caso tenha algum campo preenchido errado: <br/>- Exibir mensagem de erro;<br/>- Caso os campos tenham sido preenchidos corretamente:<br/>- Exibir mensagem de sucesso e direcionar para a tela da corrida;<br/></td>
  </tr>
  <tr>
    <td>US02</td>
    <td>Autenticação de Usuário</td>
    <td>- O usuário deve ter acesso à tela de login;<br/>- Os campos a serem preenchidos devem ser:<br/>&nbsp;&nbsp;- E-mail;<br/>&nbsp;&nbsp;- Senha;<br/>- O sistema deve verificar se o e-mail inserido está cadastrado no sistema;<br/>- O sistema deve verificar se a senha está correta e seja associada ao e-mail inserido;<br/>&nbsp;&nbsp;- Caso negativo: Exibir mensagem de erro;<br/>&nbsp;&nbsp;- Caso positivo: O usuário deve ser autenticado e direcionado para a tela principal do sistema;<br/>- O usuário deve ter acesso a opção de recuperação de senha caso a tenha esquecido, fornecendo um mecanismo de redefinição da mesma;<br/>- Na tela de login, o usuário deve ter acesso à uma opção que encaminha para o cadastro;<br/></td>
  </tr>
  <tr>
    <td>US04</td>
    <td>Deletar Perfl de Usuário</td>
    <td>- O usuário deve ter acesso à uma opção de exclusão de perfil no sistema;<br/>- A opção deve estar clara e fácil de ser encontrada;<br/>- O usuário deve receber um aviso explícito que a exclusão permanente resultará na perda irreversível de todas as informações e dados associados ao seu perfil;<br/>- Para confirmar a exclusão, o usuário deverá colocar a sua senha;<br/>- O sistema deverá fazer uma dupla confirmação da exclusão;<br/>- Após confirmar a exclusão, o sistema deverá exibir uma mensagem de confirmação e encaminhar para a tela inicial de login;</td>
  </tr>
  <tr>
    <td>US12</td>
    <td>Cadastrar Despesa</td>
    <td>- O sistema deve oferecer ao usuário uma opção de cadastro de despesa;<br/>- Os campos a serem preenchidos devem ser:<br/>&nbsp;&nbsp;&nbsp;- Causa do gasto;<br/>&nbsp;&nbsp;&nbsp;- Valor do gasto;<br/>&nbsp;&nbsp;&nbsp;- Tipo de gasto;<br/>- Com relação ao tipo de gasto, o sistema deve oferecer dados pré definidos para que o usuário escolha, sendo eles:<br/>&nbsp;&nbsp;&nbsp;- gasolina;<br/>&nbsp;&nbsp;&nbsp;- alimentação;<br/>&nbsp;&nbsp;&nbsp;- pedágio;<br/>- O sistema deve permitir o anexo de imagens ou recibos para complementar as informações da despesa, caso necessário;<br/>- O sistema deve validar a entrada de dados, garantindo que tenham sido preenchidos corretamente, onde:<br/>&nbsp;&nbsp;&nbsp;- deverá enviar uma mensagem de falha em caso de erro;<br/>&nbsp;&nbsp;&nbsp;- deverá enviar uma mensagem de sucesso e encaminhar para a tela principal, caso a operação tenha ocorrido corretamente;<br/></td>
  </tr>
  <tr>
    <td>US13</td>
    <td>Editar Despesa Cadastrada</td>
    <td>- O usuário deve ter acesso a uma tela ou função específica de edição de despesas cadastradas previamente;<br/>- O sistema deve exibir os detalhes da despesa selecionada pelo usuário em campos editáveis;<br/>- Os campos editáveis serão:<br/>&nbsp;&nbsp;- Causa do gasto;<br/>&nbsp;&nbsp;- Valor do gasto;<br/>&nbsp;&nbsp;- Tipo do gasto;<br/>- O sistema deve validar os campos editáveis e garantir que os campos foram preenchidos corretamente<br/>- Caso tenha algum campo preenchido errado:<br/>&nbsp;&nbsp;- Exibir mensagem de erro;<br/>- Caso os campos tenham sido preenchidos corretamente:<br/>&nbsp;&nbsp;&nbsp;-Exibir mensagem de sucesso e direcionar para a tela do gasto;<br/></td>
  </tr>
  <tr>
    <td>US14</td>
    <td>Deletar Despesa Cadastrada<br/></td>
    <td>- O usuário deverá ter acesso à funcionalidade de exclusão de despesas cadastradas no sistema;<br/>- O sistema deve exibir uma lista de despesas previamente cadastradas pelo usuário, permitindo a identificação da despesa que o mesmo deseja excluir;<br/>- O usuário pode selecionar uma ou mais despesas para serem excluídas;<br/>- O sistema deve exibir uma confirmação de exclusão antes de apagar definitivamente as despesas selecionadas pelo usuário;<br/>- Com a exclusão, o sistema deve se adequar corretamente, atualizando as informações de controle financeiro;<br/></td>
  </tr>
  <tr>
    <td>US21</td>
    <td>Cadastrar meta</td>
    <td>- O usuário deverá ter à função de cadastro de de meta de ganho no sistema;<br/>- Ao cadastrar uma meta, os campos preenchíveis são:<br/>&nbsp;&nbsp;- Nome da meta;<br/>&nbsp;&nbsp;- Valor desejado para a meta;<br/>&nbsp;&nbsp;- Definir o tempo da meta de ganho, sendo as opções:<br/>&nbsp;&nbsp;&nbsp;&nbsp;- diário;<br/>&nbsp;&nbsp;&nbsp;&nbsp;- semanal;<br/>&nbsp;&nbsp;&nbsp;&nbsp;- mensal;<br/>- Data inicial e Data final, para metas em uma janela de tempo específica;<br/>- O sistema deve se adequar e lidar com a definição de metas simultâneas sem conflitos entre as mesmas;<br/>- O sistema deve validar a entrada de dados, garantindo que tenham sido preenchidos corretamente, onde:<br/>&nbsp;&nbsp;&nbsp;- deverá enviar uma mensagem de falha em caso de erro;<br/>&nbsp;&nbsp;&nbsp;- deverá enviar uma mensagem de sucesso e encaminhar para a tela da meta específica criada, em caso de sucesso;<br/></td>
  </tr>
  <tr>
    <td>US24</td>
    <td>Excluir meta</td>
    <td>- O usuário deverá ter acesso à funcionalidade de exclusão de metas de ganho cadastradas no sistema;<br/>- O sistema deve exibir uma lista de metas de ganho previamente cadastradas pelo usuário, permitindo a identificação da meta de ganho que o mesmo deseja excluir;<br/>- O usuário pode selecionar uma ou mais metas para serem excluídas;<br/>- O sistema deve exibir uma confirmação de exclusão antes de apagar definitivamente as metas selecionadas pelo usuário;</td>
  </tr>
  <tr>
    <td>US28</td>
    <td>Excluir manutenção cadastrada</td>
    <td>- O usuário deverá ter acesso à funcionalidade de exclusão de manutenções cadastradas no sistema;<br/>- O sistema deve exibir uma lista de manutenções previamente cadastradas pelo usuário, permitindo a identificação da manutenção que o mesmo deseja excluir;<br/>- O usuário pode selecionar uma ou mais manutenções para serem excluídas;<br/>- O sistema deve exibir uma confirmação de exclusão antes de apagar definitivamente as manutenções selecionadas pelo usuário;</td>
  </tr>
</tbody>
</table>

## Referências 
- Material do moodle da disciplina
