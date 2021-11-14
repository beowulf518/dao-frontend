import React, { useEffect, useState } from "react";
import { Box, Modal, Backdrop } from '@material-ui/core'
import { MdClose } from 'react-icons/md'
import "../../styles_global.scss";
import styled from 'styled-components'
import "./styles.scss";
import WalletModel from "../../wallet_modal";

import metamask from "../../../assets/wallet_icons/metamask.png";
import walletconnect from "../../../assets/wallet_icons/walletconnect.png";
import coinbase from "../../../assets/wallet_icons/coinbase.png";
import fortmatic from "../../../assets/wallet_icons/fortmatic.png";
import portis from "../../../assets/wallet_icons/portis.png";

export default function Header() {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const { web3Loading, getweb3 } = WalletModel()
	const [modalShow, setModalShow] = useState("none")
	const [ wallet, set_wallet] = useState([true, true, true, true, true]);
	const [ wallet_loading, set_loading] = useState(false);

	const style1 = {
		display: "flex",
		flexDirection: 'column',
		alignItems: 'center',
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: '40%',

		boxShadow: 30,


	};
	const style2 = {
		display: "flex",
		flexDirection: 'column',
		alignItems: 'center',
		width: '100%',
		backgroundColor: '#2DAFB2',
		justifyContent: 'center',

	};

	const [wallet_address, set_address] = useState('');

	async function connectWallet() {
		set_loading(true);
		await getweb3().then((response) => {
			response.eth.getAccounts().then((result) => {
				set_address(result);
				// response.eth.getBalance(result[0]).then((result) => {
				// 	 console.log('balance:', parseFloat(result).toFixed(1))
					
				// })
			})
		})
	}

	const connectWallet1 =() =>{
		set_loading(true);
	}

	useEffect(() => {
		// document.getElementById("modal").style.display = modalShow
		// document.getElementById("main-container").style.opacity = modalShow === "block" ? 0.2 : 1
		// document.getElementById("header-title").style.opacity = modalShow === "block" ? 0.2 : 1
	})

	return (
		<div className="header-wrapper" id="header-wrapper">
			<div id="header-title">
				<div className="header-text">FAITH CONNEXION&nbsp;</div>
				<div className="header-text text-gradient">TRIBE</div>
			</div>
			<div className="connect-button-wrapper">
				{web3Loading ? <button className="button-blue-border" disabled>Loading...</button> : <button className="button-blue-border" onClick={()=>{handleOpen()}}>RESERVE NOW</button>}
			</div>


			{/* <div className="wallet-result-modal" id="modal">
				<h1>RESERVE FAITH TOKEN</h1>
				<div className="balance-card">
					<div className="balance-card-row">
						<div className="balance-title"><img src="/icon-ETH.svg" alt="ETH Icon" /><span>ETH</span></div>
						<div className="balance-value">0.0</div>
					</div>
					<div className="balance-card-row">
						<div><span className="balance-max">Balance: 21.33ETH</span><span>(MAX)</span></div>
					</div>
					<img src="/icon-exchange.svg" alt="Exchange Icon" className="icon-exchange" />
				</div>
				<div className="balance-card">
					<div className="balance-card-row">
						<div className="balance-title"><img src="/icon-FAITH.svg" alt="FAITH TOKEN Icon" /><span>FAITH TOKEN</span></div>
					</div>
				</div>
				<div className="button-wrapper">
					<button className="white-simple-button">RESERVE</button>
				</div>
				<div className="price-list">
					<span>Price tolarance</span><span>1%</span>
				</div>
				<div className="price-list">
					<span>Gas Price</span><span>1 GWI</span>
				</div>
				<div className="price-list">
					<span>Token Price</span><span>1ETH = 10FAITH</span>
				</div>
				<button className="button-close" onClick={() => setModalShow("none")}><img src="/btn-close.svg" alt="close button" /></button>
			</div> */}
		</div>
	);
}

const Meta = styled(Box)`
	display: ${({wallet0})=>wallet0?'flex !important':'none !important'};
	width: 80%;
	flex: 1;
	margin-top : 1%;
	margin-bottom: 1%;
`
const Wallet = styled(Box)`
display: ${({wallet1})=>wallet1?'flex !important':'none !important'};
	width: 80%;
	flex: 1;
	margin-top : 1%;
	margin-bottom: 1%;
`
const Coin = styled(Box)`
display: ${({wallet2})=>wallet2?'flex !important':'none !important'};
	width: 80%;
	flex: 1;
	margin-top : 1%;
	margin-bottom: 1%;
`
const Fort = styled(Box)`
display: ${({wallet3})=>wallet3?'flex !important':'none !important'};
	width: 80%;
	flex: 1;
	margin-top : 1%;
	margin-bottom: 1%;
`
const Port = styled(Box)`
display: ${({wallet4})=>wallet4?'flex !important':'none !important'};
	width: 80%;
	flex: 1;
	margin-top : 1%;
	margin-bottom: 1%;
`
