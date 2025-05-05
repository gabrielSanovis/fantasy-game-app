# 🏆 Fantasy Game

## 📋 Sobre o Projeto

Fantasy Game é uma aplicação móvel onde usuários podem montar times virtuais com jogadores reais. A aplicação foi desenvolvida usando React Native com Expo, utilizando MVVM.

## 🛠️ Tecnologias

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Expo Router](https://docs.expo.dev/router/introduction/)
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)
- [React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/)

## 🏗️ Arquitetura

O projeto segue o 

```
src/
├── @types/             # Definições de tipos globais
├── app/                # Rotas e telas (Expo Router)
├── application/        # Lógica de aplicação e serviços
├── constants/          # Constantes da aplicação
├── domain/             # Entidades e regras de negócio
├── infrastructure/     # Implementações de APIs e serviços
├── presentation/       # Componentes e hooks de UI
└── status-bar/         # Configuração da barra de status
```

## 🚀 Setup do Projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão compatível com seu ambiente)
- [Yarn](https://yarnpkg.com/) ou [npm](https://www.npmjs.com/)
- [Expo CLI](https://docs.expo.dev/workflow/expo-cli/)

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/gabrielSanovis/fantasy-game-app.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd fantasygame
   ```

3. Instale as dependências:

   ```bash
   yarn install
   # ou
   npm install
   ```

4. Configurando:

   ```bash
   yarn install
   ```

### ▶️ Executando o Projeto

1. Inicie o servidor de desenvolvimento:

   ```bash
   npx expo start
   ```

2. Escolha o ambiente para executar:

   - Pressione `a` para Android
   - Escaneie o QR code com o app Expo Go no seu dispositivo

3. Para resetar o cache (se necessário):
   ```bash
   npx expo start --clear
   ```

## 📱 Funcionalidades

### Onboarding

A aplicação possui um fluxo de onboarding que orienta os novos usuários, apresentando as principais funcionalidades:

### Leaderboard

Lista os melhores jogadores

### Meu Time

Monte seu time do seu jeito

## 📁 Estrutura de Pastas

```
├── assets/             # Imagens e recursos estáticos
├── src/                # Código-fonte da aplicação        # 
│   ├── app/            # Rotas e configuração (Expo Router)
│   │   ├── (tabs)/     # Navegação por tabs
│   │   └── index.tsx   # Onboarding
│   ├── components/     # Componentes usando atomic design
│   ├── factories/      # Criação de models
│   ├── model/          # Models utilizados pelas Views
│   ├── store/          # Store relacionado ao zustand
│   ├── styles/         # Estilos globais
│   ├── types/          # Overrides d.ts
│   ├── utils/          # funções
│   ├── viewmodels/     # ViewModels do projeto
```

## ⚙️ Configurações Personalizadas

### Cores e Estilos

As cores do aplicativo são definidas em `src/styles/colors.ts` e seguem uma paleta consistente com variações para cada cor.

### Fontes

O projeto utiliza a família de fontes Poppins com diferentes pesos:

   - Roboto_400Regular,
   - Roboto_500Medium,
   - Roboto_600SemiBold,
   - Roboto_700Bold,
   - SairaCondensed_800ExtraBold

As fontes são carregadas no `src/app/_layout.tsx`.

### Reanimated e Animações

Para animações fluídas, o projeto usa Reanimated.

## 📸 Screenshots

<div align="center">

</div>
