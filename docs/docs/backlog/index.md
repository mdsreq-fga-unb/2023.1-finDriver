---
sidebar_position: 3
---

# Backlog

## Backlog do Produto
Aqui você encontrará a lista de requisitos que estão aguardando para serem trabalhados e incluídos ao FinDriver. Eles foram organizados por priorização, de acordo com sua importância e valor.


<br>

### **Histórico de Revisão**

| Data | Versão | Descrição | Autor |
|------| ------ | --------- | ----- |
| 30/11/2022 | 1.0 | Primeira versão do backlog do produto | [Bruna Lima](https://github.com/libruna) |
| 30/11/2022 | 1.1 | Adicionando os requisitos não funcionais | [Murilo Perazzo](https://github.com/murilopbs) |
| 06/12/2022 | 1.2 | Adicionada nova feature ao backlog do produto e ajustes | [Maria Abritta](https://github.com/MariaAbritta) e [Bruna Lima](https://github.com/libruna) |
| 20/12/2022 | 1.3 | Ajuste FEAT01 do backlog do produto | [Bruna Lima](https://github.com/libruna) |
| 09/01/2023 | 1.4 | Atualização das FEAT05 e FEAT06 do backlog do produto | [Bruna Lima](https://github.com/libruna) |
| 20/01/2023 | 1.5 | Adicionadas US16 e US17 na FEAT06 | [Bruna Lima](https://github.com/libruna) |

### Sumário
- Backlog do Produto
- Requisitos não funcionais
- MVP1
- MVP2
- Referências

## Backlog do Produto 
O Backkog do Produto é um artefato da metodologia ágil SCRUM, que consiste em uma lista dos requisitos funcionais emergentes para o desenvolvimento do produto. A estrutura SAFe foi utilizada para auxiliar o planejamento e desenvolvimento desse artefato.

| **Tema** | **Épico** | **História de Usuário** | 
|----------------------------- |------------ |------------------------- | 
| **[TE01]**<br>Gerenciamento de usuário  | **[EP01]**<br>Autenticação de usuário **[EP02]**<br>Visualização de dados do usuário | | 
| **[TE02]**<br>Gerenciamento de corridas | **[EP03]**<br>Cadastro de corridas **[EP04]**<br>Visualização de dados das corridas | | 
| **[TE03]**<br>Gerenciamento de despesas | **[EP05]**<br>Cadastro de despesas **[EP06]**<br>Visualização de despesas | |
| **[TE04]**<br>Ferramentas de Cálculo    | **[EO07]**<br>Disponibilização dos cálculos **[EP08]**<br>Visualização dos resultados dos cálculos | | 
| **[TE05]**<br>Gerenciamento do histórico| **[EP09]**<br>Disponibilização do histórico para o usuário **[EP10]**<br>Visualização do histórico | |

### User Roles
É o personagem fictício da user story que representa o consumidor ideal do produto, no caso do GetPet o cliente, o motorista e o usuário que é uma generalização dos dois anteriores. Todas as histórias são escritas a partir da perspectiva de um tipo de consumidor.

- **Cliente:** Pessoa que tem a necessidade de se transportar com um pet ou de transportar somente o pet. A frequência de uso do aplicativo vai depender das necessidades de cada cliente, mas a experiência deve ser ágil, confortável e segura. <br>
- **Motorista:** Pessoa que deseja ganhar uma fonte de renda realizando corridas pet friendly. A frequência de uso do aplicativo vai depender da demanda por transporte e disposição do motorista, mas a experiência deve ser prática e fácil. <br>
- **Usuário:** Refere-se tanto ao cliente quanto ao motorista. <br>
<br>

<br>

## Requisitos não funcionais

<br>

Os requisitos não funcionais (RNFs) definem os atributos do sistema, como segurança, confiabilidade, desempenho, capacidade de manutenção, usabilidade. Eles servem como restrições ou constrangimentos no design do sistema em diferentes pendências.

<br>

N° | Classificação | Requisitos Não Funcionais
:---------: |  :-------: |  :-------:
RNF01 | Requisitos de Implementação | A parte do Back-End do sistema deve ser desenvolvido em Dart/Flutter
RNF02 | Requisitos de Implementação | A parte do Front-End do sistema deve ser desenvolvido em Dart/Flutter
RNF03 | Requisitos de Implementação | O sistema deve ser desenvolvido em orientação a objetos
RNF04 | Requisitos de Portabilidade | A aplicação deve ser android mobile 
RFN05 | Requisitos de Usabilidade | A aplicação deve ser responsiva
RFN06 | Requisitos de Confiabilidade | O sistema deve funcionar 24/7
RFN07 | Requisitos de Usabilidade | A interface da aplicação deve ser de fácil manipulação
RFN08 | Requisitos de Suportabilidade | O sistema deve ser testável em Dart/Flutter

<br>

## MVP1

 - **Objetivo:** Oferecer as funcionalidades necessárias para conectar os usuários da plataforma promovendo o serviço de transporte.

  | Feature | Estimativa (Sprints) |
  |---------|----------------------|
  | [FEAT01] Perfil de usuário | 1 |
  | [FEAT04] Conectar usuários | 2 |
  | [FEAT05] Protocolos de viagem | 2 |

<br>

## MVP2

  - **Objetivo:** Prover as funcionalidades necessárias para os usuários gerenciarem o próprio perfil, viagens e acesso ao sistema, além da avaliação do motorista.

  | Feature | Estimativa (Sprints) |
  |---------|----------------------|
  | [FEAT02] Visualização de dados  | 1 |
  | [FEAT03] Autenticação de usuário  | 1 |
  | [FEAT06] Feedback de viagem | 1 |
  
<br>

## Referências 
- Material do moodle da disciplina
- [SAFe](https://www.scaledagileframework.com/#)