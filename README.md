<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Instructions for Setting Up and Running the Rivalz NFT Generation Script</title>
</head>
<body>
    <h1>Instructions for Automatic Rivalz NFT Generation</h1>
    <p>This script is designed for the automatic generation of Rivalz NFTs every 12 hours.</p>
    
    <h2>Installation and Setup Steps</h2>

    <ol>
        <li><strong>Clone the repository:</strong>
            <pre><code>git clone https://github.com/dknodes/rivalz_fragment.git</code></pre>
        </li>
        
        <li><strong>Navigate to the project folder:</strong>
            <pre><code>cd rivalz_fragment</code></pre>
        </li>
        
        <li><strong>Run screen (if it's not installed, install it):</strong>
            <pre><code>screen -r rivalz_fragment</code></pre>
        </li>
        
        <li><strong>Install dependencies:</strong>
            <pre><code>npm install</code></pre>
            If the command is not found, install <code>npm</code> on your system.
        </li>
        
        <li><strong>Create a .env configuration file:</strong>
            <pre><code>nano .env</code></pre>
        </li>

        <li><strong>Fill in the .env file with the following parameters:</strong>
            <pre><code>
PRIVATE_KEY = private_key1 private_key2 private_key3
JSON_RPC_PROVIDER_URL = https://rivalz2.rpc.caldera.xyz/http
TIMEOUT = 5000
            </code></pre>
            Enter the private keys of your wallets. If you only have one wallet, just enter its private key.
        </li>

        <li><strong>Save the .env file:</strong>
            <p>Press <code>Ctrl + X</code>, then <code>Y</code> to save the changes.</p>
        </li>

        <li><strong>Run the script:</strong>
            <pre><code>npm start</code></pre>
        </li>

        <li><strong>Check the logs:</strong>
            <p>If everything is set up correctly, you will see transaction logs.</p>
        </li>
    </ol>

    <h2>How the Script Works</h2>
    <p>The script will run every 12 hours and automatically claim NFTs. It is important that your wallets have enough SEPOLIA RIVALZ2 tokens. You can get test tokens daily from the faucet for each wallet.</p>
    
    <h3>Notes</h3>
    <ul>
        <li>Make sure your wallet has enough SEPOLIA RIVALZ2 tokens to complete the transactions.</li>
        <li>If you encounter issues, make sure all dependencies are properly installed and that the .env file is configured correctly.</li>
    </ul>

</body>
</html>
