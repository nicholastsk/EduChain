**EduChain**
- EduChain is a decentralized platform designed to revolutionize the educational certification process. It allows educators to create courses, students to enroll and submit assignments, and offers NFT-based certificates for course completion. This system ensures the authenticity of learning achievements and makes education credentials globally recognized.

**Project Structure**
EduChain
├── educhain-backend
│   ├── index.js
│   ├── package.json
│   └── node_modules
├── educhain-frontend
│   ├── App.js
│   ├── EduChainABI.json
│   ├── package.json
│   └── node_modules
├── EduChain.sol
├── EduCert.sol
└── README.md

**Smart Contracts:**
- EduChain.sol: Smart contract for managing course creation and enrollment.
- EduCert.sol: Smart contract for issuing NFT certificates upon course completion.
- 
**Backend (Node.js + Express):**
- Backend API: Handles interactions between the smart contracts and the front-end.
- index.js: Main file for backend logic, serving as the API layer.
  
**Frontend (React.js):**
- Frontend: User interface for educators, students, and certificate verification.
- App.js: Main file for frontend logic.
- EduChainABI.json: ABI file used for interacting with the smart contract.

**Features**
- Course Creation: Educators can create new courses.
- Student Enrollment: Students can enroll in courses and submit assignments.
- Certificate Issuance: NFTs are issued as certificates to students upon course completion.
- MetaMask Integration: Wallet interaction for Ethereum-based transactions.

**Getting Started**
**Prerequisites**
- Node.js and npm
- MetaMask extension in your browser
- Remix IDE (for smart contract deployment)

**Setup**
**1. Clone the repository:**
git clone https://github.com/yourusername/EduChain.git

**2. Install Backend Dependencies: Navigate to the educhain-backend folder and run:**
npm install

**3. Install Frontend Dependencies: Navigate to the educhain-frontend folder and run:**
npm install

**Running the Application**
**1. Run Backend:**
cd educhain-backend
npm start

**2. Run Frontend:**
cd educhain-frontend
npm start

**Smart Contract Deployment (Remix IDE)**
- Open Remix IDE.
- Load the EduChain.sol and EduCert.sol files.
- Compile and deploy them using MetaMask and the Ethereum test network (Sepolia, for example).
- Use the contract address to interact with the frontend.
