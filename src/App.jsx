import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Web3 from "web3";

import { loadContract } from "./utils/load-contract";
import Progressbar from "./components/ProgressBar/ProgressBar";
import detectEthereumProvider from "@metamask/detect-provider";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion/dist/framer-motion";

import { Parallax } from "react-scroll-parallax";

import bg from "./Images/img4.jpg";
import Options from "./components/Options/Options";
import Cards from "./Cards/Cards";

function App() {
  const [isConnected, setIsConnected] = useState(2);
  const [balance, setBalance] = useState(null);
  const [totalVote,setTotalVotes] = useState(null);
  const [web3Api, setWeb3Api] = useState({
    provider: null,
    web3: null,
    contract: null,
  });
  const [account, setAccount] = useState(null);
  const [reload, shouldReload] = useState(false);

  const reloadEffect = () => shouldReload(!reload);
  
  const setAccountListener = (provider) => {
    provider.on("accountsChanged", (accounts) => setAccount(accounts[0]));
  };


  
  useEffect(() => {
    const loadProvider = async () => {
      const provider = await detectEthereumProvider();
      const contract = await loadContract("funders", provider);
      if (provider) {
        setAccountListener(provider);
       // console.log(provider);
        setWeb3Api({
          web3: new Web3(provider),
          provider,
          contract,
        });
      } else {
        console.error("Please install MetaMask!");
      }
    };
    loadProvider();
  }, []);

  useEffect(() => {
    const getAccount = async () => {
      const accounts = await web3Api.web3.eth.getAccounts();
      setAccount(accounts[0]);
     

      console.log(account)  
    
    };

    web3Api.web3 && getAccount();
  }, [web3Api.web3,account]);


  async function connecttometamask() {
    const acc = await window.ethereum.request({
      method: "eth_requestAccounts",

     

    });
   
    if (acc) {
      setIsConnected(null);
    }
  }

  
 
   

  useEffect(() => {
    const loadBalance = async () => {
      const { contract, web3 } = web3Api;
      const balance = await web3.eth.getBalance(contract.address);
      setBalance(web3.utils.fromWei(balance, "ether"));
    };
    web3Api.contract && loadBalance();
   
  
    
  }, [web3Api, balance,reload]);

 const giveVote_f0=async()=>{
    const {contract,web3}= web3Api;
    await contract.giveVote0({
      from: account
    });
  }
  const giveVote_f1=async()=>{
    const {contract,web3}= web3Api;
    await contract.giveVote1({
      from: account
    });
  }
  const giveVote_f2=async()=>{
    const {contract,web3}= web3Api;
    await contract.giveVote2({
      from: account
    });
  }
  const giveVote_f3=async(party_number)=>{
    const {contract,web3}= web3Api;
    await contract.giveVote3({
      from: account
    });
  }

  const totalVote_f= async()=>{
    const {contract, web3}= web3Api;
    const t = await contract.totalVotes();
    setTotalVotes(t);
    //console.log(totalVote)
   
   
  };


  

  return (
    <div className="App">
      {isConnected ? (
        <>
          <video autoPlay loop muted id="myVideo">
            <source src="/Videos/code3.mp4" type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>

          <div class="content">
            <button className="button" onClick={connecttometamask}>
              <span>Connect Metamask</span>
            </button>
          </div>
        </>
      ) : (
        <>
          <video autoPlay loop muted id="myVideo">
            <source src="/Videos/code3.mp4" type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>

          <div className="whole-container">
            <div class="container">
                <h1>{totalVote? totalVote.words[0]:"hello"}</h1>
                <button onClick={giveVote_f0}>total votes</button>
                <Options accname={  account? account: "not connected"} giveeVote0= {giveVote_f0} giveeVote1= {giveVote_f1} giveeVote2= {giveVote_f3} giveeVote3= {giveVote_f3} />
               
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
