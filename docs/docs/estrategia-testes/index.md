---
sidebar_position: 8
---

# Estratégia de Testes
### **Histórico de Revisão**

|**Data**|**Versão**|**Descrição**|**Autor**|
|:------:|:--------:|:-----------:|:-------:|
| 23/06/2023 | 1.0 | Definição da Estratégia de Testes| [Pedro Eduardo Santos Sousa](https://github.com/PedroEduardoSS)|
| 30/06/2023 | 1.1 | Aprimoração da Estratégia de Testes| [Pedro Eduardo Santos Sousa](https://github.com/PedroEduardoSS)|

### Introdução
Nessa seção se encontra a estratégia de testes que deverá ser seguida pela equipe.

### Tipos de teste
- **Funcional**: A equipe deve  para garantir que o produto está funcionando de acordo com os requisitos definidos e seus respectivos critérios de aceitação.
- **Usabilidade**: O cliente precisa entender e usar o produto da forma como foi acordado com a equipe, também seguindo os requisitos, *user stories* e seus respectivos critérios de aceitação
- **Suportabilidade**: O produto precisa passar por cada requisito não funcional definidos pela equipe.

### Níveis de Teste 
- **Unitário**: Obrigatório implementar, principalmente para as funções e classes mais importantes considerando somente os critérios de aceitação. O backend é prioridade, mas também serão feitos alguns testes de frontend. A biblioteca de teste usada pela equipe será o Jest.
- **Integração**: Será testado a integração entre os componentes, no caso, o será necessário testar se o front está chamando corretamente as funções do back. Será considerado a *user story* como um todo.
- **Sistema**: Será necessário verificar o sistema como um todo do ponto de vista técnico, ou seja, todas as funcionalidades definidas pelas *user stories* e passar por todos os critérios de aceitação.
- **Aceitação**: O cliente precisa experimentar o software e validar todo o produto de acordo com sua experiência e do que era esperado e acordado com a equipe.

### Técnicas de teste
- **Caixa Branca**: Deve-se testar as funcionalidades considerando a estrutura do código, se está seguindo os padrões de codificação definidos pela equipe e se o resultado esperado não tiver passado pela técnica da *caixa preta*.
- **Caixa Preta**: Deve-se verificar se as entradas e saídas correspondem com o esperado, sem considerar o código. Será útil para economizar tempo, sabendo como o código está implementado. Se não passar nessa técnica, será utilizado o método *caixa branca* 
- **Manual**: Todo desenvolvedor deverá testar o código manualmente na sua máquina e o usuário de testar o produto quando este for entregue.
- **Automática**: A cada integração, será chamada a Actions do github para rodar os testes do backend e frontend, verificando se não há nenhum teste unitário falhando em alguma parte de todo o projeto.

### Estratégias de teste
A seguir se encontra as relações entre os tipos, níveis e técnicas de teste. As estratégias variam a cada parte do desenvolvimento do produto.
1. Funcional -> Unitário -> Automática
2. Funcional -> Integração -> Caixa Preta
3. Funcional -> Sistema -> Caixa Branca
4. Usabilidade -> Aceitação -> Manual
5. Suportabilidade -> Sistema -> Manual

### Tabelas de Estratégia de Testes para cada MVP

#### MVP 1
| Testes | Estratégias               |
|:------:|:-------------------------:|
|  US01  |1 - 2 - 3 - 4 - 5|
|  US02  |1 - 2 - 3 - 4 - 5|
|  US03  |1 - 2 - 3 - 4 - 5|
|  US04  |1 - 2 - 3 - 4 - 5|
|  US05  |1 - 3 - 4 - 5|
|  US06  |1 - 2 - 3 - 4 - 5|
|  US07  |1 - 2 - 3 - 4 - 5|
|  US08  |1 - 2 - 3 - 4 - 5|
|  US09  |1 - 2 - 3 - 4 - 5|
|  US10  |1 - 2 - 3 - 4 - 5|
|  US11  |1 - 3 - 4 - 5|
|  US12  |1 - 2 - 3 - 4 - 5|
|  US13  |1 - 2 - 3 - 4 - 5|
|  US14  |1 - 2 - 3 - 4 - 5|
|  US15  |1 - 2 - 3 - 4 - 5|
|  US16  |1 - 2 - 3 - 4 - 5|
|  US17  |1 - 3 - 4 - 5|
|  US18  |1 - 2 - 3 - 4 - 5|
|  US19  |1 - 2 - 3 - 4 - 5|

#### MVP 2
| Testes | Estratégias               |
|:------:|:-------------------------:|
|  US20  |1 - 2 - 3 - 4 - 5|
|  US21  |1 - 2 - 3 - 4 - 5|
|  US22  |1 - 3 - 4 - 5|
|  US23  |1 - 2 - 3 - 4 - 5|
|  US24  |1 - 2 - 3 - 4 - 5|
|  US25  |1 - 2 - 3 - 4 - 5|
|  US26  |1 - 2 - 3 - 4 - 5|
|  US27  |1 - 2 - 3 - 4 - 5|
|  US28  |1 - 2 - 3 - 4 - 5|
|  US29  |1 - 2 - 3 - 4 - 5|
|  US30  |1 - 2 - 3 - 4 - 5|
|  US31  |1 - 2 - 3 - 4 - 5|
|  US32  |1 - 2 - 3 - 4 - 5|
|  US33  |1 - 2 - 3 - 4 - 5|
|  US34  |1 - 2 - 3 - 4 - 5|
|  US35  |1 - 2 - 3 - 4 - 5|
|  US36  |1 - 2 - 3 - 4 - 5|
|  US37  |1 - 2 - 3 - 4 - 5|
|  US38  |1 - 2 - 3 - 4 - 5|
|  US39  |1 - 3 - 4 - 5|
|  US40  |1 - 2 - 3 - 4 - 5|

## Referências 
- Material do moodle da disciplina