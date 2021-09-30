import React from 'react';
import '../styles/App.css';
import opensealogo from '../assets/opensea.svg'
const NftCard = ({opensea}) => {

    return(
    <div className="nft-card-wrapper">
      <button className="cta-button gradient-text-opensea"><a href={opensea} className="collection-link"><img height="20px" alt="opensea-logo" src={opensealogo}/> View Collection on OpenSea </a></button>
      <p className="sub-text-body">You can buy the first<a className="header-small gradient-text-count">&nbsp;#000</a> minted Alien here 👇 </p>
      <nft-card contractAddress="0x0ecc5bf2c9f3936ed3e28800c44b18ce98a42cd6" tokenId="0" network="rinkeby"> </nft-card>
      </div>
    )
};


export default NftCard;