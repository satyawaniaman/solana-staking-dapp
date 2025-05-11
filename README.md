# Solana Staking Finance

A Next.js application for staking SOL tokens and earning yield on the Solana blockchain.

![Solana Staking UI](https://placeholder-for-screenshot.png)

## Features

- Stake SOL tokens and earn APY (~6-7% based on current rates)
- Unstake options (instant with fee or delayed with no fee)
- Connect with popular Solana wallets (Phantom, Slope, Ledger, Solflare)
- Real-time balance and rate information
- User-friendly interface built with Material UI
- Modern, responsive design with gradient effects and smooth animations
- Interactive staking guide for new users

## Getting Started

### Prerequisites

- Node.js 14.x or later
- pnpm (recommended) or npm
- A Solana wallet (Phantom, Slope, Ledger, or Solflare)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/solana-staking/solana-staking-ui.git
   cd solana-staking-ui
   ```

2. Install dependencies:

   ```bash
   pnpm install
   # or
   npm install
   ```

3. Run the development server:

   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Usage

1. Connect your Solana wallet using the "Connect wallet" button
2. Choose between "Stake" or "Unstake" tabs
3. Enter the amount of SOL you want to stake or unstake
4. For unstaking, choose between instant (with fee) or delayed (no fee)
5. Confirm the transaction in your wallet

## Hackathon Submission

### Project Description

Solana Staking Finance is a user-friendly platform that simplifies the process of staking SOL tokens on the Solana blockchain. Our mission is to make staking accessible to everyone, regardless of their technical expertise, while providing competitive yields and a seamless user experience.

### Problem Statement

Staking on Solana can be complex for new users, with technical barriers and confusing interfaces making it difficult for non-technical users to participate in securing the network and earning rewards.

### Solution

Our platform offers:

- A clean, intuitive interface that guides users through the staking process
- Educational resources built into the UI to help users understand staking
- Real-time data visualization of yields and network statistics
- Multiple unstaking options to provide flexibility
- Support for popular Solana wallets

### Technical Implementation

- **Frontend**: Next.js, React, TypeScript, Material UI
- **Blockchain Integration**: Solana Web3.js, Wallet Adapter
- **State Management**: React Context API
- **Styling**: CSS Modules with modern design principles

### Deployment

The application is deployed on Vercel and can be accessed at [https://solana-staking-finance.vercel.app](https://solana-staking-finance.vercel.app)

## Building for Production

```bash
pnpm build
pnpm start
# or
npm run build
npm run start
```

## Static Export (Optional)

To create a static export that can be deployed to any static hosting service:

1. Add the static export configuration to `next.config.js`:

   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     reactStrictMode: true,
     output: "export",
   };

   module.exports = nextConfig;
   ```

2. Build the static export:

   ```bash
   npm run build
   # or
   yarn build
   ```

3. The static files will be generated in the `out` directory, which can be deployed to any static hosting service.

## Technology Stack

- [Next.js](https://nextjs.org/) - React framework
- [Material UI](https://mui.com/) - UI components
- [Solana Web3.js](https://github.com/solana-labs/solana-web3.js) - Solana JavaScript API
- [Solana Wallet Adapter](https://github.com/solana-labs/wallet-adapter) - Wallet connection

## Configuration

The application connects to Solana clusters based on the configuration in `config/solana.config.ts`. It supports mainnet-beta, testnet, and devnet environments.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Solana Documentation](https://docs.solana.com/)
- [Material UI Documentation](https://mui.com/getting-started/usage/)

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## License

[MIT](LICENSE)
