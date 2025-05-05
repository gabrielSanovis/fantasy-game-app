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

- [APK BUILD](https://expo.dev/accounts/sanovis/projects/fantasy-game-app/builds/5bcf7e1a-3069-45a3-9ea7-948b8433686c) (link para build gerada com eas)

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



https://github.com/user-attachments/assets/b170d662-dfec-4487-85f3-96e6d861ddca
<div align="center">
     <img src="https://github.com/user-attachments/assets/b170d662-dfec-4487-85f3-96e6d861ddca" width="200" alt="Tela de Login" />
  <img src="https://github.com/user-attachments/assets/e1fb4d51-cbb2-49a0-bd44-d27fc05e134e" width="200" alt="Tela de Onboarding" />
  <img src="https://github.com/user-attachments/assets/6e4db7e5-0f0b-4d06-8a52-ed093dafc8bc" width="200" alt="Jogos ao Vivo" />
  <img src="https://github.com/user-attachments/assets/4b6b61c8-acab-4088-baab-497c9cfd6946" width="200" alt="Perfil de Time" />
  <img src="https://github.com/user-attachments/assets/aafd3be1-9d2f-4190-a834-1c9904dc3a5c" width="200" />
  <img src="https://github.com/user-attachments/assets/2120e511-584d-4bae-9b8d-b8303e4fec45" width="200" />
  <img src="https://github.com/user-attachments/assets/234d1791-cda8-488b-9b88-5b2606274ab4" width="200" />
  <img src="https://github.com/user-attachments/assets/4bd7e98d-95a6-4680-ae7e-1f5989953007" width="200" />

</div>
