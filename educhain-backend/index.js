const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const { ethers } = require('ethers');
const { create } = require('ipfs-http-client');
const multer = require('multer');
require('dotenv').config();

app.use(cors());
app.use(bodyParser.json());

// Set up IPFS client
const ipfs = create({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    headers: {
        authorization: 'Basic ' + Buffer.from(`${process.env.INFURA_PROJECT_ID}:${process.env.INFURA_PROJECT_SECRET}`).toString('base64'),
    },
});

// Ethereum provider and wallet setup
const provider = new ethers.providers.JsonRpcProvider(process.env.JSON_RPC_PROVIDER);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

// Set up port
const PORT = process.env.PORT || 3001;

// IPFS file upload route
const upload = multer();
app.post('/uploadCourse', upload.single('file'), async (req, res) => {
    try {
        const file = req.file;
        const { path } = await ipfs.add(file.buffer);
        res.json({ message: 'Course material uploaded to IPFS!', ipfsHash: path });
    } catch (error) {
        console.error('Error uploading to IPFS:', error);
        res.status(500).json({ error: 'Failed to upload course material' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`EduChain API running on port ${PORT}`);
});