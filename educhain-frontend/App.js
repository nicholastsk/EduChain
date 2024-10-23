{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import React, \{ useState, useEffect \} from 'react';\
import \{ ethers \} from 'ethers';\
import EduChainABI from './EduChainABI.json'; // ABI from the EduChain contract\
\
function App() \{\
    const [account, setAccount] = useState('');\
    const [contract, setContract] = useState(null);\
\
    useEffect(() => \{\
        async function loadMetaMask() \{\
            const \{ ethereum \} = window;\
            if (ethereum) \{\
                const accounts = await ethereum.request(\{ method: 'eth_requestAccounts' \});\
                setAccount(accounts[0]);\
                const provider = new ethers.providers.Web3Provider(ethereum);\
                const signer = provider.getSigner();\
                const contractAddress = '0xYourEduChainContractAddress';\
                const eduChainContract = new ethers.Contract(contractAddress, EduChainABI, signer);\
                setContract(eduChainContract);\
            \}\
        \}\
        loadMetaMask();\
    \}, []);\
\
    const enrollCourse = async (courseId, price) => \{\
        if (contract) \{\
            const tx = await contract.enrollCourse(courseId, \{ value: ethers.utils.parseEther(price.toString()) \});\
            await tx.wait();\
            alert('Enrolled successfully!');\
        \}\
    \};\
\
    return (\
        <div>\
            <h1>EduChain Platform</h1>\
            <p>Connected Account: \{account\}</p>\
            <button onClick=\{() => enrollCourse(0, 0.1)\}>Enroll in Course #0 for 0.1 ETH</button>\
        </div>\
    );\
\}\
\
export default App;\
}