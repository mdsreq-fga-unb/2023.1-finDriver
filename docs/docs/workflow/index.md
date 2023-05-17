---
sidebar_position: 6
---

# Workflow de Integração Contínua
### **Histórico de Revisão**

|**Data**|**Versão**|**Descrição**|**Autor**|
|:------:|:--------:|:-----------:|:-------:|
| 16/05/2023 | 1.0 | Definição do WorkFlow| [Pedro Eduardo Santo Sousa](https://github.com/PedroEduardoSS)|

### Introdução
Nessa seção se encontra a estrutura do workflow de testes, que será realizado
por meio do GitHub Actions.

### Testes
Será adotado o modelo de testes unitários, dividindo o código em pequenas partes
(função ou método de objeto) e testando cada uma delas. Contudo, é importante que todas
as partes testadas funcionem integralmente, juntas, garantindo a qualidade e a estabilidade.


O projeto será organizado da seguinte maneira: cada dev irá criar um fork do repositório
principal, depois trabalhará em uma branch própria. Então realizará o merge e resolverá os conflicts, se houver. Finalmente, será enviada a **pull** **request**, acionando a
**action** e realizando todos os testes na **branch** **main**.

## Referências 
- Material do moodle da disciplina