# TODO

## Overview

Este projeto é um agregador de notícias que coleta e exibe artigos de várias fontes em uma interface de usuário limpa e fácil de ler. Os usuários poderão buscar e filtrar artigos, além de personalizar seu feed de notícias.

## Estrutura do Projeto

1. **Configuração Inicial**

   - [ ] Configurar o projeto React
   - [ ] Configurar o Docker para containerização

2. **Integração com APIs de Notícias**

   - [ ] Selecionar pelo menos 3 fontes de dados
     - [ ] NewsAPI
     - [ ] OpenNews
     - [ ] NewsCred
     - [ ] The Guardian
     - [ ] New York Times
     - [ ] BBC News
     - [ ] NewsAPI.org
   - [ ] Configurar chamadas às APIs selecionadas

3. **Funcionalidades Principais**

   - [ ] Implementar busca por palavra-chave
   - [ ] Implementar filtragem de artigos por data, categoria e fonte
   - [ ] Implementar feed de notícias personalizado
     - [ ] Seleção de fontes preferidas
     - [ ] Seleção de categorias preferidas
     - [ ] Seleção de autores preferidos

4. **Interface do Usuário**

   - [ ] Design responsivo para dispositivos móveis
   - [ ] Interface limpa e fácil de ler
   - [ ] Componentes React
     - [ ] Header
     - [ ] Barra de busca e filtros
     - [ ] Lista de artigos
     - [ ] Componentes de artigo individual
     - [ ] Configurações de feed personalizado

5. **Melhores Práticas de Desenvolvimento**

   - [ ] Seguir os princípios DRY (Don't Repeat Yourself)
   - [ ] Seguir os princípios KISS (Keep It Simple, Stupid)
   - [ ] Seguir os princípios SOLID
     - [ ] Responsabilidade única
     - [ ] Aberto/fechado
     - [ ] Substituição de Liskov
     - [ ] Segregação de interface
     - [ ] Inversão de dependência

6. **Documentação**
   - [ ] Documentar o código
   - [ ] Documentar como rodar o projeto no Docker
   - [ ] Documentar as decisões de design e arquitetura

## Detalhamento das Tarefas

### Configuração Inicial

- **Configurar o projeto React**
  - [ ] Inicializar o projeto com Create React App
  - [ ] Configurar a estrutura de pastas
- **Configurar o Docker para containerização**
  - [ ] Criar um Dockerfile
  - [ ] Configurar docker-compose

### Integração com APIs de Notícias

- **Seleção de fontes de dados**
  - [ ] Decidir quais 3 APIs utilizar
- **Configurar chamadas às APIs selecionadas**
  - [ ] Implementar chamadas HTTP para as APIs
  - [ ] Gerenciar chaves de API de forma segura

### Funcionalidades Principais

- **Implementar busca por palavra-chave**
  - [ ] Desenvolver a funcionalidade de busca
- **Implementar filtragem de artigos**
  - [ ] Desenvolver a filtragem por data, categoria e fonte
- **Implementar feed de notícias personalizado**
  - [ ] Desenvolver a personalização do feed

### Interface do Usuário

- **Design responsivo**
  - [ ] Testar e ajustar para dispositivos móveis
- **Componentes React**
  - [ ] Desenvolver cada componente necessário

### Melhores Práticas de Desenvolvimento

- **Seguir os princípios de desenvolvimento**
  - [ ] Revisar o código para garantir conformidade

### Documentação

- **Documentação do código**
  - [ ] Adicionar comentários e explicações
- **Documentação do Docker**
  - [ ] Instruções claras para rodar o projeto

## Timeline

- **Semana 1**
  - Configuração inicial do projeto
  - Seleção e configuração das APIs
- **Semana 2**
  - Implementação da busca e filtragem
  - Desenvolvimento inicial da interface do usuário
- **Semana 3**
  - Finalização da interface do usuário
  - Implementação do feed personalizado
- **Semana 4**
  - Testes, revisão e documentação
  - Preparação para a entrega

## Referências

- [NewsAPI Documentation](https://newsapi.org/docs)
- [OpenNews Documentation](https://opennews.com)
- [NewsCred Documentation](https://newscred.com)
- [The Guardian API Documentation](https://open-platform.theguardian.com/documentation/)
- [New York Times API Documentation](https://developer.nytimes.com/apis)
- [BBC News API Documentation](https://www.bbc.co.uk/developer/portal)
- [Docker Documentation](https://docs.docker.com)
