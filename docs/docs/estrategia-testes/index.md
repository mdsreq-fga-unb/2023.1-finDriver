---
sidebar_position: 8
---

# Estratégia de Testes
### **Histórico de Revisão**

|**Data**|**Versão**|**Descrição**|**Autor**|
|:------:|:--------:|:-----------:|:-------:|
| 23/06/2023 | 1.0 | Definição da Estratégia de Testes| [Pedro Eduardo Santos Sousa](https://github.com/PedroEduardoSS)|

### Introdução
Nessa seção se encontra a estratégia de testes que deverá ser seguida pela equipe.

### Tipos de teste
- **Funcional**: A equipe deve  para garantir que o produto está funcionando de acordo com os requisitos definidos e seus respectivos critérios de aceitação.
- **Usabilidade**: O cliente precisa entender e usar o produto da forma como foi acordado com a equipe, também seguindo os requisitos, *user stories* e seus respectivos critérios de aceitação
- **Confiabilidade**: A equipe não estabeleceu um padrão de desempenho, mas será considerado a experiência do cliente para melhorias se alguma função não estiver se
comportando da maneira desejada.
- **Eficiência**: A equipe não estabeleceu e não tem experiência para definir e verificar
a eficiência em relação a tempo de processamento ou resposta da aplicação. Contudo,
a experiência do usuário será de suma importância para corrigir esses aspectos da melhor
forma o possível, caso ocorram.
- **Suportabilidade**: O produto precisa passar por mudanças frequentemente devido a integração contínua. Logo, cada desenvolvedor precisa implementar e testar seu código manualmente antes de enviar qualquer alteração para as branchs *develop* e *main*, além de seguir os padrões de codificação definidos para que sejam compreensíveis por toda a equipe, facilitando também as revisões de código.

### Níveis de Teste 
- **Unitário**: Obrigatório implementar, principalmente para as funções e classes mais importantes considerando somente os critérios de aceitação. O backend é prioridade, mas também serão feitos alguns testes de frontend. A biblioteca de teste usada pela equipe será o Jest.
- **Integração**: Será testado a integração entre os componentes, no caso, o será necessário testar se o front está chamando corretamente as funções do back. Será considerado a *user story* como um todo.
- **Sistema**: Será necessário verificar o sistema como um todo do ponto de vista técnico, ou seja, todas as funcionalidades definidas pelas *user stories* e passar por todos os critérios de aceitação.
- **Aceitação**: O cliente precisa experimentar o software e validar todo o produto de acordo com sua experiência e do que era esperado e acordado com a equipe.

### Técnicas de teste
- **Caixa Branca**: Deve-se testar as funcionalidades considerando a estrutura do código, se está seguindo os padrões de codificação definidos pela equipe e se o resultado esperado não tiver passado pela técnica da *caixa preta*.
- **Caixa Preta**: Deve-se verificar se as entradas e saídas correspondem com o esperado, sem considerar o código. Será útil para economizar tempo, sabendo como o código está implementado. Se não passar nessa técnica, será utilizado o método *caixa branca* 
- **TDD**: Não será utilizado pela equipe pelo fato de ninguém ter experiência e acabar
prejudicando o atual andamento do sistema.
- **Manual**: Todo desenvolvedor deverá testar o código manualmente na sua máquina e corrigir o mais rápido o possivel, agilizando o desenvolvimento. Em alguns casos, será o uso de ferramentas como Postman, quando se tratar de requisição e resposta.
- **Automática**: A cada integração, será chamada a Actions do github para rodar os testes do backend e frontend, verificando se não há nenhum teste falhando em alguma parte de todo o projeto.

### Tabelas de Estratégia de Testes para cada MVP

#### MVP 1
| Testes | Tipo                    | Nível                         | Técnica                          |
|:------:|-------------------------|-------------------------------|----------------------------------|
|  US01  | Funcional, Usabilidade e suportabilidade | Unitário, Integração, Sistema e Aceitação | Caixa Branca, Caixa Preta, Manual e Automática |
|  US02  | Funcional, Usabilidade e suportabilidade | Unitário, Integração, Sistema e Aceitação | Caixa Branca, Caixa Preta, Manual e Automática |
|  US03  | Funcional, Usabilidade e suportabilidade | Unitário, Integração, Sistema e Aceitação | Caixa Branca, Caixa Preta, Manual e Automática |
|  US04  | Funcional, Usabilidade e suportabilidade | Unitário, Integração, Sistema e Aceitação | Caixa Branca, Caixa Preta, Manual e Automática |
|  US05  | Funcional, Usabilidade e suportabilidade | Unitário, Sistema e Aceitação | Caixa Branca, Caixa Preta, Manual e Automática |
|  US06  | Funcional, Usabilidade e suportabilidade | Unitário, Integração, Sistema e Aceitação | Caixa Branca, Caixa Preta, Manual e Automática |
|  US07  | Funcional, Usabilidade e suportabilidade | Unitário, Integração, Sistema e Aceitação | Caixa Branca, Caixa Preta, Manual e Automática |
|  US08  | Funcional, Usabilidade e suportabilidade | Unitário, Integração, Sistema e Aceitação | Caixa Branca, Caixa Preta, Manual e Automática |
|  US09  | Funcional, Usabilidade e suportabilidade | Unitário, Integração, Sistema e Aceitação | Caixa Branca, Caixa Preta, Manual e Automática |
|  US10  | Funcional, Usabilidade e suportabilidade | Unitário, Integração, Sistema e Aceitação | Caixa Branca, Caixa Preta, Manual e Automática |
|  US11  | Funcional, Usabilidade e suportabilidade | Unitário, Sistema e Aceitação | Caixa Branca, Caixa Preta, Manual e Automática |
|  US12  | Funcional, Usabilidade e suportabilidade | Unitário, Integração, Sistema e Aceitação | Caixa Branca, Caixa Preta, Manual e Automática |
|  US13  | Funcional, Usabilidade e suportabilidade | Unitário, Integração, Sistema e Aceitação | Caixa Branca, Caixa Preta, Manual e Automática |
|  US14  | Funcional, Usabilidade e suportabilidade | Unitário, Integração, Sistema e Aceitação | Caixa Branca, Caixa Preta, Manual e Automática |
|  US15  | Funcional, Usabilidade e suportabilidade | Unitário, Integração, Sistema e Aceitação | Caixa Branca, Caixa Preta, Manual e Automática |
|  US16  | Funcional, Usabilidade e suportabilidade | Unitário, Integração, Sistema e Aceitação | Caixa Branca, Caixa Preta, Manual e Automática |
|  US17  | Funcional, Usabilidade e suportabilidade | Unitário, Sistema e Aceitação | Caixa Branca, Caixa Preta, Manual e Automática |
|  US18  | Funcional, Usabilidade e suportabilidade | Unitário, Sistema e Aceitação | Caixa Branca, Caixa Preta, Manual e Automática |
|  US19  | Funcional, Usabilidade e suportabilidade | Unitário, Sistema e Aceitação | Caixa Branca, Caixa Preta, Manual e Automática |

#### MVP 2
| Testes | Tipo                    | Nível                         | Técnica                          |
|:------:|-------------------------|-------------------------------|----------------------------------|
|  US20  | Funcional, Usabilidade e suportabilidade | Unitário, Integração, Sistema e Aceitação | Caixa Branca, Caixa Preta, Manual e Automática |
|  US21  | Funcional, Usabilidade e suportabilidade | Unitário, Integração, Sistema e Aceitação | Caixa Branca, Caixa Preta, Manual e Automática |
|  US22  | Funcional, Usabilidade e suportabilidade | Unitário, Sistema e Aceitação | Caixa Branca, Caixa Preta, Manual e Automática |
|  US23  | Funcional, Usabilidade e suportabilidade | Unitário, Integração, Sistema e Aceitação | Caixa Branca, Caixa Preta, Manual e Automática |
|  US24  | Funcional, Usabilidade e suportabilidade | Unitário, Integração, Sistema e Aceitação | Caixa Branca, Caixa Preta, Manual e Automática |
|  US25  | Funcional, Usabilidade e suportabilidade | Unitário, Integração, Sistema e Aceitação | Caixa Branca, Caixa Preta, Manual e Automática |
|  US26  | Funcional, Usabilidade e suportabilidade | Unitário, Integração, Sistema e Aceitação | Caixa Branca, Caixa Preta, Manual e Automática |
|  US27  | Funcional, Usabilidade e suportabilidade | Unitário, Integração, Sistema e Aceitação | Caixa Branca, Caixa Preta, Manual e Automática |
|  US28  | Funcional, Usabilidade e suportabilidade | Unitário, Integração, Sistema e Aceitação | Caixa Branca, Caixa Preta, Manual e Automática |
|  US29  | Funcional, Usabilidade e suportabilidade | Unitário, Integração, Sistema e Aceitação | Caixa Branca, Caixa Preta, Manual e Automática |
|  US30  | Funcional, Usabilidade e suportabilidade | Unitário, Integração, Sistema e Aceitação | Caixa Branca, Caixa Preta, Manual e Automática |
|  US31  | Funcional, Usabilidade e suportabilidade | Unitário, Integração, Sistema e Aceitação | Caixa Branca, Caixa Preta, Manual e Automática |
|  US32  | Funcional, Usabilidade e suportabilidade | Unitário, Integração, Sistema e Aceitação | Caixa Branca, Caixa Preta, Manual e Automática |
|  US33  | Funcional, Usabilidade e suportabilidade | Unitário, Integração, Sistema e Aceitação | Caixa Branca, Caixa Preta, Manual e Automática |
|  US34  | Funcional, Usabilidade e suportabilidade | Unitário, Integração, Sistema e Aceitação | Caixa Branca, Caixa Preta, Manual e Automática |
|  US35  | Funcional, Usabilidade e suportabilidade | Unitário, Integração, Sistema e Aceitação | Caixa Branca, Caixa Preta, Manual e Automática |
|  US36  | Funcional, Usabilidade e suportabilidade | Unitário, Integração, Sistema e Aceitação | Caixa Branca, Caixa Preta, Manual e Automática |
|  US37  | Funcional, Usabilidade e suportabilidade | Unitário, Integração, Sistema e Aceitação | Caixa Branca, Caixa Preta, Manual e Automática |
|  US38  | Funcional, Usabilidade e suportabilidade | Unitário, Integração, Sistema e Aceitação | Caixa Branca, Caixa Preta, Manual e Automática |
|  US39  | Funcional, Usabilidade e suportabilidade | Unitário, Sistema e Aceitação | Caixa Branca, Caixa Preta, Manual e Automática |
|  US40  | Funcional, Usabilidade e suportabilidade | Unitário, Integração, Sistema e Aceitação | Caixa Branca, Caixa Preta, Manual e Automática |

## Referências 
- Material do moodle da disciplina