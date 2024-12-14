import { ethers } from 'ethers';
import cron from 'node-cron';
import * as dotenv from 'dotenv';


// Load environment variables from .env file
dotenv.config();

// Variables
const RPC = process.env.RPC;
const PRIVATE_KEYS = process.env.PRIVATE_KEYS;
const TIMEOUT = parseInt(process.env.TIMEOUT, 10) || 5000; // Default to 5 seconds if not set

// Validate environment variables
if (!RPC) {
    console.error('Error: RPC is not defined in the .env file.');
    process.exit(1);
}

if (!PRIVATE_KEYS) {
    console.error('Error: PRIVATE_KEYS is not defined in the .env file.');
    process.exit(1);
}

// Split the private keys into an array
const privateKeysArray = PRIVATE_KEYS.split(' ').filter(key => key);

if (privateKeysArray.length === 0) {
    console.error('Error: No private keys found in PRIVATE_KEYS.');
    process.exit(1);
}

// Ethers.js Provider
const provider = new ethers.JsonRpcProvider(RPC);

// Receiver's address and data
const RECEIVER_ADDRESS = '0xf0a66d18b46d4d5dd9947914ab3b2ddbdc19c2c0';
const DATA = '0x4e71d92d';
const GAS_LIMIT = 300000; // 300,000 gas limit

// Function to create a signer
const createSigner = (privateKey) => {
    return new ethers.Wallet(privateKey, provider);
};

// Function to send transactions for a single wallet
const sendTransactions = async (signer, walletIndex) => {
    const walletAddress = signer.address;

    // Construct the transaction object
    const tx = {
        gasLimit: GAS_LIMIT,
        from: walletAddress,
        to: RECEIVER_ADDRESS,
        data: DATA,
    };

    try {
        for (let i = 0; i < 20; i++) {
            console.log(`Wallet ${walletIndex + 1}: Sending transaction ${i + 1}...`);

            const txResponse = await signer.sendTransaction(tx);
            console.log(`Wallet ${walletIndex + 1} - Transaction ${i + 1} Hash:`, txResponse.hash);

            // Optionally wait for the transaction to be mined
            const receipt = await txResponse.wait();
            console.log(`Wallet ${walletIndex + 1} - Transaction ${i + 1} mined in block:`, receipt.blockNumber);

            // Delay between each transaction to avoid nonce issues
            await new Promise(resolve => setTimeout(resolve, TIMEOUT));
        }
        console.log(`Wallet ${walletIndex + 1}: Finished. Auto Mint Will Trigger In 12H`);
    } catch (error) {
        console.error(`Wallet ${walletIndex + 1}: Error sending transaction:`, error);
    }
};

// Main function to execute transactions for all wallets
const main = async () => {

    // Create signers for all private keys
    const signers = privateKeysArray.map(pk => createSigner(pk));

    // Send transactions for all signers in parallel
    const transactionPromises = signers.map((signer, index) => sendTransactions(signer, index));

    await Promise.all(transactionPromises);
};

// Execute the main function immediately and schedule it with cron
main().then(() => {
    // Schedule the task to run every 12 hours
    cron.schedule('0 */12 * * *', async () => {
        await main();
    });
});