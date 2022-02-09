import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import DopeNft from "../utils/dopeNft.js";
const CONTRACT_ADDRESS = "0x0eCC5Bf2C9F3936Ed3E28800c44b18Ce98A42cD6";
const TOTAL_MINT_COUNT = 50;


const MintCount = () =>{
    const [mintCount, setmintCount] = useState(0);

    const getNftCount = async () => {
        try {
          const { ethereum } = window;
          console.log('here', CONTRACT_ADDRESS);
          if (ethereum) {
              const provider = new ethers.providers.Web3Provider(ethereum);
              const signer = provider.getSigner();
              const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, DopeNft.abi, signer);
              let nftAmount = await connectedContract.getTotalMints();
              let amount = parseInt(nftAmount)
              setmintCount(amount);
          }
      } catch (error) {
        console.log(error);
      }
    }
  
  
  useEffect(()=>{
      getNftCount()
  }, []);


  return(
    <div>
        <p className="header-small gradient-text-count"> Minted:&nbsp;{mintCount} / {TOTAL_MINT_COUNT}</p>
    </div>
  )};

  export default MintCount;
