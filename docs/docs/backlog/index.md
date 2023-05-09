---
sidebar_position: 3
---

# Requisitos do Produto

### **Histórico de Revisão**


### Sumário
- Backlog do Produto
- Requisitos não funcionais
- MVP1
- MVP2
- Referências

## Backlog do Produto 
O Backkog do Produto é um artefato da metodologia ágil SCRUM, que consiste em uma lista dos requisitos funcionais emergentes para o desenvolvimento do produto. A estrutura SAFe foi utilizada para auxiliar o planejamento e desenvolvimento desse artefato.

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