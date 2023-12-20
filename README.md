# Ethereum Todo Application

<img width="1710" alt="Screenshot 2023-12-20 at 20 54 45" src="https://github.com/Matas28731449/eth-todo-app/assets/116190079/5191a92d-8b79-403b-9fdf-d8f9d71ff234">

## Intro

Developed a simple Todo Application for learning purposes utilizing Ethereum Smart Contracts

## Technology Stack

Back-end (Ganache / Solidity / Remix IDE)
Front-end (Semantic UI / TypeScript / React)

## Installation Process on Local Ethereum Network (e.g., Ganache)

1. Clone the GitHub repository:

   ```
   git clone https://github.com/Matas28731449/eth-todo-app.git
   ```

2. Navigate to the back-end directory:

   ```
   cd be/
   ```

3. Install required dependencies:

   ```
   npm install
   ```

4. Deploy a new smart contract (ensure Ganache is running):

   ```
   truffle migrate --reset
   ```

5. Find and copy the address of the newly deployed smart contract (located around line 3062 in `build/contracts/TodoApp.json`).

6. Paste the address into the front-end configuration (line 7):

   ```
   code ../../../fe/src/config.ts
   ```

7. Install required dependencies on the front end:

   ```
   cd ../../../fe/
   npm install
   ```

8. Run the front end of the application:
   ```
   npm start
   ```

## Unit tests

<img width="1710" alt="Screenshot 2023-12-20 at 22 19 15" src="https://github.com/Matas28731449/eth-todo-app/assets/116190079/63002a36-fb22-45d9-896a-67d2df220c7f">

## Testing on Sepolia testnet

[Contract creation transaction](https://sepolia.etherscan.io/tx/0xab52d2808201cbfaba338abc83ce02029ce7ea67950fe1fa68a46483c7240215)

[All executed transactions](https://sepolia.etherscan.io/address/0x70488B5f934F946037517646094F8Ad97b7B7774)