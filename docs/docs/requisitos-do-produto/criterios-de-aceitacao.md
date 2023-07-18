---
sidebar_position: 4
---

# Critérios de Aceitação

### **Histórico de Revisão**

|  **Data**  | **Versão** |                  **Descrição**                   |                       **Autor**                       |
| :--------: | :--------: | :----------------------------------------------: | :---------------------------------------------------: |
| 15/05/2023 |    1.0     |      Construção dos Critérios de Aceitação       |    [Taynara Vitorino](https://github.com/taybalau)    |
| 16/05/2023 |    1.1     |        Mudança nos Criérios de Aceitação         | [Ana Catarina Santos](https://github.com/an4catarina) |
| 17/05/2023 |    1.2     |      Alteração na distribuição dos Criérios      |    [Victor Hugo](https://github.com/ViictorHugoo)     |
| 17/05/2023 |    1.3     | Atualização dos critérios e adição de algumas US | [Ana Catarina Santos](https://github.com/an4catarina) |

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
    <td>US02</td>
    <td>Autenticação de Usuário</td>
    <td>- O usuário deve ter acesso à tela de login;<br/>- Os campos a serem preenchidos devem ser:<br/>&nbsp;&nbsp;- E-mail;<br/>&nbsp;&nbsp;- Senha;<br/>- O sistema deve verificar se o e-mail inserido está cadastrado no sistema;<br/>- O sistema deve verificar se a senha está correta e seja associada ao e-mail inserido;<br/>&nbsp;&nbsp;- Caso negativo: Exibir mensagem de erro;<br/>&nbsp;&nbsp;- Caso positivo: O usuário deve ser autenticado e direcionado para a tela principal do sistema;<br/>- Na tela de login, o usuário deve ter acesso à uma opção que encaminha para o cadastro;<br/></td>
  </tr>
   <tr>
    <td>US03</td>
    <td>Deletar Perfl de Usuário</td>
    <td>- Na tela de configurações ou perfil do usuário, deve ter um botão ou opção claramente visível para fazer logout;<br/>- Ao selecionar a opção de logout, o usuário deve ser desconectado imediatamente e direcionado para a tela de login do aplicativo;<br/>- O usuário deve receber feedback visual ou uma mensagem clara de que o logout foi concluído com sucesso;<br/>- Após fazer logout, todas as informações de sessão ativas, como dados de autenticação, cookies ou tokens, devem ser completamente apagadas e invalidadas; </td>
  </tr>
   <tr>
    <td>US04</td>
    <td>Deletar Perfl de Usuário</td>
    <td>- O usuário deve ter acesso à uma opção de exclusão de perfil no sistema;<br/>- A opção deve estar clara e fácil de ser encontrada;<br/>- O usuário deve receber um aviso explícito que a exclusão permanente resultará na perda irreversível de todas as informações e dados associados ao seu perfil;<br/>- Para confirmar a exclusão, o usuário deverá colocar a sua senha;<br/>- O sistema deverá fazer uma dupla confirmação da exclusão;<br/>- Após confirmar a exclusão, o sistema deverá exibir uma mensagem de confirmação e encaminhar para a tela inicial de login;</td>
  </tr>
  <tr>
<td>US05</td>
<td>Visualização dos dados do usuário</td>
<td>
  - Na tela principal ou em uma seção específica do aplicativo, o usuário deve encontrar um botão ou opção claramente visível para acessar seu perfil;<br/>
  - Ao selecionar a opção de visualizar perfil, o usuário deve ser direcionado para uma tela dedicada que exiba suas informações pessoais e dados relevantes;<br/>
  - O perfil do usuário deve apresentar os dados do usuário;<br/>
  - Os dados exibidos no perfil devem ser atualizados em tempo real e refletir com precisão os dados do usuário armazenados no banco de dados;<br/>
  - Exibir a opção de edição de dados;<br/>
  - O usuário deve ter a opção de retornar à tela anterior ou à tela principal do aplicativo após visualizar seu perfil;
</td>
</tr>
  <tr>
    <td>US06</td>
    <td>Editar conta de Usuário</td>
    <td>- Deverá ter um perfil ou uma área onde o usuário possa acessar e editar seus dados pessoais;<br/>- Os dados a serem editáveis devem ser:<br/>&nbsp;&nbsp;- Nome;<br/>&nbsp;&nbsp;- E-mail;<br/>&nbsp;&nbsp;- Senha;<br/>- O sistema deve permitir que o usuário salve as alterações feitas;<br/>- O sistema deve validar os campos modificados e entregar uma resposta imediata caso algum campo esteja preenchido corretamente;<br/>- DPara modificar a senha, deverá ter uma dupla confirmação;<br/>- Exibir uma mensagem de erro caso alguma informação tenha sido preenchida erroneamente;<br/>- Após as informações serem salvas com sucesso, apresentar uma mensagem de sucesso e direcionar para o perfil do usuário com as informações já atualizadas;</td>
  </tr>
  <tr>
    <td>US07</td>
    <td>Cadastro de Corrida<br/></td>
<td>
  - Deverá ter uma tela ou uma função específica para o cadastro de corrida no aplicativo;<br/>
  - Os dados que devem ser inseridos devem ser:<br/>
    &nbsp;&nbsp;- Data;<br/>
    &nbsp;&nbsp;- Valor;<br/>
    &nbsp;&nbsp;- Quilometragem percorrida;<br/>
    &nbsp;&nbsp;- Aplicativo de corrida utilizado;<br/>
  - Os campos de quilometragem e valor deverão aceitar apenas valores numéricos;<br/>
  - O campo de data deverá permitir ao usuário selecionar ou inserir a data da corrida no formato YYYY/MM/DD;<br/>
  - O sistema deverá validar os campos de entrada, garantindo que não estejam errados, onde:<br/>
    &nbsp;&nbsp;- Deverá exibir uma mensagem de erro caso tenha algo errado;<br/>
    &nbsp;&nbsp;- Deverá exibir uma mensagem de êxito caso a operação tenha ocorrido com sucesso;
</td>
</tr>
  <tr>
    <td>US08</td>
    <td>Editar Corridas Cadastradas</td>
    <td>- O usuário deve ter acesso a uma tela ou função específica de edição de corridas cadastradas previamente;<br/>- O sistema deve exibir os detalhes da corrida selecionada pelo usuário em campos editáveis;<br/>- Os campos editáveis serão:<br/>&nbsp;&nbsp;- Data;<br/>&nbsp;&nbsp;- Valor;<br/>&nbsp;&nbsp;- Quilometragem percorrida;<br/>&nbsp;&nbsp;- Aplicativo de corrida utilizado;<br/>- O sistema deve validar os campos editáveis e garantir que os campos foram preenchidos corretamente<br/>- Caso tenha algum campo preenchido errado: <br/>- Exibir mensagem de erro;<br/>- Caso os campos tenham sido preenchidos corretamente:<br/>- Exibir mensagem de sucesso e direcionar para a tela da corrida;<br/></td>
  </tr>
  <tr>
    <td>US09</td>
    <td>Deletar Corridas Cadastradas</td>
    <td>- O usuário deverá ter acesso à funcionalidade de exclusão de corridas no sistema;<br/>- O sistema deve exibir uma lista de corridas previamente cadastradas pelo usuário, permitindo a identificação da corrida que o mesmo deseja excluir;<br/>- O usuário pode selecionar uma ou mais corridas para serem excluídas;<br/>- O sistema deve exibir uma confirmação de exclusão antes de apagar definitivamente as corridas selecionadas pelo usuário;<br/>- Com a exclusão, o sistema deve se adequar corretamente, atualizando as informações de controle financeiro;</td>
  </tr>
   <tr>
    <td>US11</td>
    <td>Visualização de corridas cadastradas</td>
<td>
  - Na tela principal ou em uma seção específica do aplicativo, o usuário deve encontrar uma opção claramente visível para acessar a lista das suas corridas cadastradas;<br/>
  - As corridas cadastradas devem ser exibidas de forma clara e organizada, apresentando todos os dados referentes à corrida;<br/>
  - As corridas devem ser ordenadas de forma consistente, por exemplo, por data, da mais recente para a mais antiga;<br/>
  - O usuário deve ter a opção de retornar à tela anterior ou à tela principal do aplicativo após visualizar suas corridas cadastradas;<br/>
  - As informações exibidas devem ser atualizadas em tempo real e refletir com precisão os dados do usuário armazenados no sistema.
</td>
  </tr>
  <tr>
    <td>US12</td>
    <td>Cadastrar Despesa</td>
<td>
  - O sistema deve oferecer ao usuário uma opção de cadastro de despesa;<br/>
  - Os campos a serem preenchidos devem ser:<br/>
    &nbsp;&nbsp;- Descrição do gasto;<br/>
    &nbsp;&nbsp;- Valor do gasto;<br/>
    &nbsp;&nbsp;- Data do gasto;<br/>
    &nbsp;&nbsp;- Tipo de gasto;<br/>
  - Com relação ao tipo de gasto, o sistema deve oferecer dados pré definidos para que o usuário escolha, sendo eles:<br/>
    &nbsp;&nbsp;- gasolina;<br/>
    &nbsp;&nbsp;- alimentação;<br/>
    &nbsp;&nbsp;- pedágio;<br/>
  - O sistema deve validar a entrada de dados, garantindo que tenham sido preenchidos corretamente, onde:<br/>
    &nbsp;&nbsp;- deverá enviar uma mensagem de falha em caso de erro;<br/>
    &nbsp;&nbsp;- deverá enviar uma mensagem de sucesso e encaminhar para a tela principal, caso a operação tenha ocorrido corretamente.
</td>
  </tr>
  <tr>
    <td>US13</td>
    <td>Editar Despesa Cadastrada</td>
    <td>- O usuário deve ter acesso a uma tela ou função específica de edição de despesas cadastradas previamente;<br/>- O sistema deve exibir os detalhes da despesa selecionada pelo usuário em campos editáveis;<br/>- Os campos editáveis serão:<br/>&nbsp;&nbsp;- Causa do gasto;<br/>&nbsp;&nbsp;- Valor do gasto;<br/>&nbsp;&nbsp;- Tipo do gasto;<br/>- O sistema deve validar os campos editáveis e garantir que os campos foram preenchidos corretamente<br/>- Caso tenha algum campo preenchido errado:<br/>&nbsp;&nbsp;- Exibir mensagem de erro;<br/>- Caso os campos tenham sido preenchidos corretamente:<br/>&nbsp;&nbsp;&nbsp;-Exibir mensagem de sucesso e direcionar para a tela do gasto;<br/></td>
  </tr>
  <tr>
    <td>US14</td>
    <td>Deletar Despesa Cadastrada<br/></td>
<td>
  - O usuário deve ter acesso a uma tela ou função específica de edição de despesas cadastradas previamente;<br/>
  - O sistema deve exibir os detalhes da despesa selecionada pelo usuário em campos editáveis;<br/>
  - Os campos editáveis serão:<br/>
    &nbsp;&nbsp;- Descrição do gasto;<br/>
    &nbsp;&nbsp;- Valor do gasto;<br/>
    &nbsp;&nbsp;- Tipo do gasto;<br/>
    &nbsp;&nbsp;- Data do gasto;<br/>
  - O sistema deve validar os campos editáveis e garantir que os campos foram preenchidos corretamente;<br/>
  - Caso tenha algum campo preenchido errado:<br/>
    &nbsp;&nbsp;- Exibir mensagem de erro;<br/>
  - Caso os campos tenham sido preenchidos corretamente:<br/>
    &nbsp;&nbsp;- Exibir mensagem de sucesso e direcionar para a tela do gasto.
</td>
  </tr>
    <tr>
    <td>US16</td>
    <td>Visualização das despesas cadastradas<br/></td>
<td>
  - O sistema deve fornecer uma opção clara e fácil de acessar para visualizar as despesas;<br/>
  - Ao selecionar a opção de visualização de despesas, o usuário deve ser direcionado para uma página ou tela onde as despesas estejam apresentadas de forma organizada;<br/>
  - As despesas devem ser exibidas de maneira legível e compreensível, mostrando informações relevantes, como data, descrição e valor;<br/>
  - As despesas devem ser ordenadas de forma lógica, por exemplo, do mais recente ao mais antigo, para facilitar a visualização;<br/>
  - As informações exibidas sobre cada despesa devem ser precisas e corresponder aos dados fornecidos pelo usuário;<br/>
  - A página ou tela de visualização de despesas deve ser intuitiva e fácil de usar, permitindo ao usuário navegar e explorar as informações de forma natural.
</td>
  </tr>
    <tr>
    <td>US17</td>
    <td>Calculo de média de despesas mensais, diárias e semanais<br/></td>
<td>
  - A tela inicial do sistema deve apresentar os resultados e as médias das despesas diárias, semanais e mensais de forma clara e visível para o usuário;<br/>
  - As médias das despesas devem ser calculadas com base nas despesas registradas nos períodos correspondentes: diário, semanal e mensal;<br/>
  - O cálculo das médias deve considerar apenas as despesas válidas e completas, excluindo despesas incompletas ou inválidas;<br/>
  - As médias das despesas diárias, semanais e mensais devem ser atualizadas automaticamente sempre que uma nova despesa for adicionada ou modificada;<br/>
  - A apresentação dos resultados e médias das despesas deve ser organizada e de fácil compreensão para o usuário.
</td>
  </tr>
    <tr>
    <td>US18</td>
    <td>Calculo de quilômetros<br/></td>
<td>
  - A tela inicial do sistema deve apresentar de forma clara e visível os resultados e as médias da quilometragem rodada diariamente, semanalmente e mensalmente;<br/>
  - As médias da quilometragem devem ser calculadas com base nos dados de quilometragem registrados nos períodos correspondentes: diário, semanal e mensal;<br/>
  - O cálculo das médias deve considerar apenas os dados de quilometragem válidos e completos, excluindo registros incompletos ou inválidos;<br/>
  - As médias da quilometragem diária e semanal devem ser atualizadas automaticamente sempre que um novo registro de quilometragem for adicionado ou modificado.
</td>
  </tr>
  <tr>
    <td>US19</td>
    <td>Visualizar histórico de despesas e ganhos</td>
    <td>- O usuário deve ter acesso a uma tela ou função específica para visualizar o histórico de despesas e ganhos;<br/>- O sistema deve exibir listas ou tabelas separadas com as seguintes informações:<br/>&nbsp;&nbsp;- As corridas cadastradas;<br/>&nbsp;&nbsp;- As despesas cadastradas;<br/>&nbsp;&nbsp;- As metas cadastradas;<br/>- O histórico deverá ser exibido em ordem cronológica, onde as entradas mais recentes deverão ser exibidas primeiro;<br/>- O usuário deve poder aplicar filtros ou realizar buscas específicas;<br/>- O usuário deve ter a opção de ordenar o histórico;</td>
  </tr>
  <tr>
    <td>[US21]</td>
    <td>Cadastrar e acompanhar metas de ganho</td>
    <td>
        - O usuário deve ter a opção de cadastrar uma meta de ganho definindo um valor específico a ser alcançado.<br/>
        - O sistema deve permitir que o usuário especifique a duração de tempo da meta, como por exemplo, uma meta diária, semanal ou mensal.<br/>
        - O sistema deve exibir claramente a meta de ganho definida pelo usuário.<br/>
        - O sistema deve enviar notificações ou alertas ao usuário quando a meta de ganho estiver próxima de ser alcançada ou quando o prazo estiver expirando.<br/>
        - O sistema deve permitir que o usuário acompanhe o histórico das metas de ganho anteriores.
    </td>
</tr>
<tr>
    <td>[US22]</td>
    <td>Visualizar metas de ganhos diários</td>
    <td>
        - O usuário deve ser capaz de visualizar suas metas contendo:<br/>
        &nbsp;&nbsp;- Valor da meta;<br/>
        &nbsp;&nbsp;- Valor já obtido;<br/>
        &nbsp;&nbsp;- Data final da meta;<br/>
        &nbsp;&nbsp;- Descrição.
    </td>
</tr>
<tr>
    <td>[US23]</td>
    <td>Editar metas de ganho</td>
    <td>
        - O usuário deve ser capaz de editar:<br/>
        &nbsp;&nbsp;- Valor da meta;<br/>
        &nbsp;&nbsp;- Data final;<br/>
        &nbsp;&nbsp;- Opção de notificação (no dia, um dia antes, uma semana antes ou não notificado);<br/>
        &nbsp;&nbsp;- Descrição.<br/>
        - O dado de valor deve ser formatado para aceitar vírgulas e estar no estilo "R$ valor,00".<br/>
        - A data deve ter um tipo de input específico de datas, para facilitar sua inserção.
    </td>
</tr>
<tr>
    <td>[US24]</td>
    <td>Excluir metas de ganho</td>
    <td>
        - O usuário deve ter a opção de excluir uma meta de ganho previamente cadastrada.<br/>
        - O sistema deve exibir uma confirmação ou solicitar uma confirmação adicional do usuário antes de prosseguir com a exclusão da meta de ganho.<br/>
        - Após a confirmação da exclusão, o sistema deve remover completamente a meta de ganho do sistema, incluindo todos os dados associados a ela.<br/>
        - O usuário deve receber feedback claro e visível confirmando que a meta de ganho foi excluída com sucesso.
    </td>
</tr>
<tr>
    <td>[US32]</td>
    <td>Cadastrar dados do carro</td>
    <td>
        - O usuário deve ter a opção de cadastrar os dados do seu carro, incluindo:<br/>
        &nbsp;&nbsp;- Marca do carro;<br/>
        &nbsp;&nbsp;- Modelo do carro;<br/>
        &nbsp;&nbsp;- Ano do carro;<br/>
        &nbsp;&nbsp;- Consumo de combustível do carro;<br/>
        &nbsp;&nbsp;- Quilometragem do carro;<br/>
        &nbsp;&nbsp;- Indicação se o carro é flex (sim ou não);<br/>
        - O sistema deve permitir que o usuário preencha essas informações de forma clara e intuitiva;<br/>
        - Após o cadastro, os dados do carro devem ser armazenados no sistema e associados à conta do usuário.
    </td>
</tr>
<tr>
    <td>[US33]</td>
    <td>Excluir carro cadastrado</td>
    <td>
        - O usuário deve ser capaz de excluir um carro cadastrado.<br/>
        - O usuário deve receber uma mensagem de confirmação, perguntando se deseja realmente excluir o carro.<br/>
        - Após a confirmação da exclusão, o carro cadastrado deve ser removido do sistema.<br/>
        - O usuário deve ser capaz de cadastrar um novo carro após a exclusão do anterior.
    </td>
</tr>
<tr>
    <td>[US34]</td>
    <td>Visualizar dados do carro cadastrado</td>
    <td>
        - O usuário deve ter a opção de visualizar os dados do carro cadastrado em sua conta.<br/>
        - O sistema deve exibir os principais detalhes do carro, que são:<br/>
        &nbsp;&nbsp;- Marca;<br/>
        &nbsp;&nbsp;- Modelo;<br/>
        &nbsp;&nbsp;- Ano;<br/>
        &nbsp;&nbsp;- Consumo de combustível;<br/>
        &nbsp;&nbsp;- Quilometragem;<br/>
        &nbsp;&nbsp;- O carro é flex?<br/>
        - Os dados do carro devem ser apresentados de forma clara e legível para o usuário.
    </td>
</tr>
</tbody>
</table>

## Referências

- Material do moodle da disciplina
