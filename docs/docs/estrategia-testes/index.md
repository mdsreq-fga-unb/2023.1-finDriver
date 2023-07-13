---
sidebar_position: 8
---

# Estratégia de Testes
### **Histórico de Revisão**

|**Data**|**Versão**|**Descrição**|**Autor**|
|:------:|:--------:|:-----------:|:-------:|
| 23/06/2023 | 1.0 | Definição da Estratégia de Testes| [Pedro Eduardo Santos Sousa](https://github.com/PedroEduardoSS)|
| 30/06/2023 | 1.1 | Aprimoração da Estratégia de Testes| [Pedro Eduardo Santos Sousa](https://github.com/PedroEduardoSS)|
| 09/07/2023 | 1.2 | Objetivos e perspectivas| [Pedro Eduardo Santos Sousa](https://github.com/PedroEduardoSS)|
| 10/07/2023 | 1.3 | Atualização das estratégias| [Pedro Eduardo Santos Sousa](https://github.com/PedroEduardoSS)|
| 12/07/2023 | 1.4 | Adição da técnica automática nos testes funcionais de integração| [Pedro Eduardo Santos Sousa](https://github.com/PedroEduardoSS)|
| 13/07/2023 | 1.5 | Atualização das estratégias | [Pedro Eduardo Santos Sousa](https://github.com/PedroEduardoSS)|

### Introdução
Nessa seção se encontra a estratégia de testes que deverá ser seguida pela equipe.

### Tipos de teste
- **Funcional**: A equipe deve  para garantir que o produto está funcionando de acordo com os requisitos definidos e seus respectivos critérios de aceitação.
- **Usabilidade**: O cliente precisa entender e usar o produto da forma como foi acordado com a equipe, também seguindo os requisitos, *user stories* e seus respectivos critérios de aceitação

### Níveis de Teste 
- **Unitário**: Obrigatório implementar as funções e classes mais importantes considerando somente os critérios de aceitação. O backend é prioridade, mas também serão feitos alguns testes de frontend. A biblioteca de teste usada pela equipe será o Jest.
- **Integração**: Será testado a integração entre os componentes, no caso, o será necessário testar se o front está chamando corretamente as funções do back. Será considerado a *user story* como um todo.
- **Sistema**: Será necessário verificar o sistema como um todo do ponto de vista técnico, ou seja, todas as funcionalidades definidas pelas *user stories* e passar por todos os critérios de aceitação, além dos requisitos não funcionais. A principal ferramenta usada para testar a integração é o postman.
- **Aceitação**: O cliente precisa experimentar o software e validar todo o produto de acordo com sua experiência e do que era esperado e acordado com a equipe.

### Técnicas de teste
- **Caixa Branca**: Deve-se testar as funcionalidades considerando a estrutura do código, se está seguindo os padrões de codificação definidos pela equipe e se o resultado esperado não tiver passado pela técnica da *caixa preta*.
- **Caixa Preta**: Deve-se verificar se as entradas e saídas correspondem com o esperado, sem considerar o código. Será útil para economizar tempo, sabendo como o código está implementado. Se não passar nessa técnica, será utilizado o método *caixa branca* 
- **Manual**: Todo desenvolvedor deverá testar o código manualmente na sua máquina e o usuário de testar o produto quando este for entregue.
- **Automática**: A cada integração, será chamada a Actions do github para rodar os testes do backend e frontend, verificando se não há nenhum teste unitário falhando em alguma parte de todo o projeto.

### Tabelas de Estratégia de Testes para cada MVP

#### MVP1/MVP 2
|       Tipo      |    Nível   |    Técnica   |      Objetivo     | Perspectiva |
|:---------------:|:----------:|:------------:|:-----------------:|:-----------:|
|    Funcional    |  Unitário  |  Automática, Caixa Branca  | Qualidade Interna |   Técnica   |
|    Funcional    | Integração | Automática, Caixa Branca, Manual | Qualidade Interna |   Técnica   |
|   Usabilidade   |   Sistema  |    Caixa Preta, Manual    | Qualidade Externa |   Técnica   |
|   Usabilidade   |  Aceitação |    Manual    | Qualidade Externa |   Negócio   |

## Referências 
- Material do moodle da disciplina