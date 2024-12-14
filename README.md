# Instructions for Automatic Rivalz NFT Generation

This script is designed for the automatic generation of Rivalz NFTs every 12 hours.

## Installation and Setup Steps

1. **Clone the repository:**
    ```bash
    git clone https://github.com/dknodes/rivalz_fragment.git
    ```

2. **Navigate to the project folder:**
    ```bash
    cd rivalz_fragment
    ```

3. **Run screen (if it's not installed, install it):**
    ```bash
    screen -r rivalz_fragment
    ```

4. **Install dependencies:**
    ```bash
    npm install
    ```
    If the command is not found, install `npm` on your system.

5. **Create a .env configuration file:**
    ```bash
    nano .env
    ```

6. **Fill in the .env file with the following parameters:**
    ```plaintext
    PRIVATE_KEY = private_key1 private_key2 private_key3
    RPC = https://rivalz2.rpc.caldera.xyz/http
    TIMEOUT = 5000
    ```
    Enter the private keys of your wallets. If you only have one wallet, just enter its private key.

7. **Save the .env file:**
    Press `Ctrl + X`, then `Y` to save the changes.

8. **Run the script:**
    ```bash
    npm start
    ```

9. **Check the logs:**
    If everything is set up correctly, you will see transaction logs.

10. **To exit from the screen session, follow these steps:**

    Press Ctrl + A (hold Ctrl and press A).
    Then, press D (this will detach you from the screen session

## How the Script Works

The script will run every 12 hours and automatically claim NFTs. It is important that your wallets have enough SEPOLIA RIVALZ2 tokens. You can get test tokens daily from the faucet for each wallet.

### Notes
- Make sure your wallet has enough SEPOLIA RIVALZ2 tokens to complete the transactions.
- If you encounter issues, make sure all dependencies are properly installed and that the .env file is configured correctly.

## Disclaimer

Use this script at your own risk. While the script is designed to automate the process of generating Rivalz NFTs, we do not take responsibility for any issues that may arise, including but not limited to data loss, security risks, or any other unforeseen consequences. Ensure that you understand the script and its operation before proceeding.

## Stay Updated:

For the latest updates and installation instructions, follow us on:
- [Telegram](https://t.me/dknodes)
- [Twitter](https://twitter.com/dknodes)
