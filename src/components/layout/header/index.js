import React, { useEffect, useState } from "react";
import { Box, Modal } from '@material-ui/core'
import { MdClose } from 'react-icons/md'
import "../../styles_global.scss";
import styled from 'styled-components'
import "./styles.scss";
import WalletModel from "../../wallet_modal";
import {
	injected,
	walletConnect,
	trustWallet,
	binance_wallet,
	walletlink,
} from "../../../utils/connectors";
import _ from "lodash";
import { useWeb3React } from '@web3-react/core'


import metamask from "../../../assets/wallet_icons/metamask.png";
import walletconnect from "../../../assets/wallet_icons/walletconnect.png";
import coinbase from "../../../assets/wallet_icons/coinbase.png";
import fortmatic from "../../../assets/wallet_icons/fortmatic.png";
import portis from "../../../assets/wallet_icons/portis.png";
import cache from '../../../utils/cache'

export default function Header() {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const { web3Loading, getweb3 } = WalletModel()
	const [modalShow, setModalShow] = useState("none")
	const [wallet, set_wallet] = useState([true, true, true, true, true]);
	const [wallet_loading, set_loading] = useState(false);
	const [show_btn, set_show] = useState(false);


	const DESKTOP_CONNECTORS = {
		MetaMask: injected,
		WalletConnect: walletConnect,
		BinanceWallet: binance_wallet,
		TrustWallet: trustWallet,
		Coinbase: walletlink,
	};

	const MOBILE_CONNECTORS = {
		MetaMask: injected,
		TrustWallet: trustWallet,
		BinanceWallet: binance_wallet,
	};
	const walletConnectors = DESKTOP_CONNECTORS;
	const { account,connector,active,error , activate, deactivate } = useWeb3React();

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

	const [wallet_address, set_address] = useState('RESERVE NOW');

	const connectWallet1 = (currentConnector) => {
		set_loading(true);
		activate(currentConnector);
		setOpen(false);

	}

	async function connectWallet() {
		if (show_btn === false) {
			set_loading(true);
			await getweb3().then((response) => {
				console.log(response)
				response.eth.getAccounts().then((result) => {
					setOpen(false);
					set_show(true)
					var temp = result[0].toString();
					set_address(temp);
					set_loading(false);
					// response.eth.getBalance(result[0]).then((result) => {
					// 	 console.log('balance:', parseFloat(result).toFixed(1))

					// })
				})
			})
		}
		else {
			set_loading(false);
		}
	}

	async function disconnect() {

		// await window.ethereum.request({
		// 	method: "wallet_requestPermissions",
		// 	params: [
		// 	  {
		// 		eth_accounts: {}
		// 	  }
		// 	]
		//   });

		//   set_address("RESERVE NOW");

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
				{web3Loading ? <button className="button-blue-border" disabled>Loading...</button> :
					<>{show_btn ? <button className="button-blue-border" style={{
						marginRight: '2%'
					}} >3.0 FAITH Reserved</button> : ''}
						<button className="button-blue-border" style={{
							marginRight: '2%'
						}} onClick={() => { show_btn?disconnect():handleOpen() }}>{show_btn ? wallet_address.slice(0, 6) + "..." + wallet_address.slice(wallet_address.length - 5, wallet_address.length - 1) : "RESERVE NOW"}</button>
						{show_btn ? <button className="button-blue-border" >...</button> : ''}</>}
			</div>

			<Modal
				open={open}
				// onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
				style={{
					backdropFilter: 'blur(10px)'
				}}
			>
				<Box sx={style1}>
					<Box display="flex" justifyContent="center" marginBottom="2%" fontSize="72px" lineHeight="72px" fontWeight="200" sx={{
						'background': 'linear-gradient(150deg,  #E4CB6F 20%,#DB5994 50% ,#7735BD 60%)',
						'-webkit-background-clip': 'text',
						'-webkit-text-fill-color': 'transparent'
					}}>RESERVE</Box>
					<Box sx={style2}>
						<Box display="flex" flex="1" flexDirection="column" width="100%">
							<Box display="flex" fontSize='24px' fontWeight='bold' color='white' lineHeight='28px' marginTop="2%" justifyContent="flex-end" marginRight="2%"
								onClick={() => {
									handleClose();
									set_wallet([true, true, true, true, true]);
									set_loading(false);
								}}><MdClose fontSize="24px" color="white"></MdClose></Box>
							<Box display="flex" fontSize='24px' color='white' lineHeight='28px' justifyContent="center" marginTop="2%" >CONNECT TO A WALLET</Box>
							<Box display="flex" fontSize='16px' ineHeight='19px' flexDirection="column" marginTop="2%">
								<Box display="flex" flex="1" justifyContent="center" fontSize="16px" lineHeight="19px" color="black" fontWeight="bold">By connecting a wallet, you agree to Faith Connexion’s</Box>
								<Box display="flex" flex="1" justifyContent="center" fontSize="16px" lineHeight="19px" color="black" fontWeight="bold"><Box color="white" style={{ textDecoration: 'underline' }}>Terms of Service</Box>{'\u00a0'} and acknowledge that you have read and </Box>
								<Box display="flex" flex="1" justifyContent="center" fontSize="16px" lineHeight="19px" color="black" fontWeight="bold">understand the {'\u00a0'} <Box color="white" style={{ textDecoration: 'underline' }}>FAITH TRIBE protocol disclaimer.</Box></Box>
							</Box>
						</Box>
						<Box display="flex" flex="4" flexDirection="column" alignItems="center" width="100%" marginTop="10%" marginBottom="10%" alignItems="center" justifyContent="center">
							<Meta display='flex' width="80%" flex='1' marginTop="1%" marginBottom="1%" wallet0={wallet[0]} >
								<Box sx={{
									cursor: 'pointer',
									display: 'flex',
									transition: 'ease-out 0.4s',
									alignItems: 'center',
									border: '1px solid white',
									width: "100%",
									boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
									paddingLeft: '10%',
									height: 65
								}} onClick={() => {
									set_wallet([true, false, false, false, false]);
									connectWallet();
								}} >
									<img src={metamask} width="40px" height="40px"></img><Box fontWeight='bold' marginLeft='10%' color='white' fontSize='16px'>METAMASK</Box>
									{show_btn ? <Box fontWeight='bold' marginLeft='15%' color='white' fontSize='16px' marginRight="15%">{wallet_address.slice(0, 9) + "..." + wallet_address.slice(wallet_address.length - 7, wallet_address.length - 1)}</Box> : (wallet_loading ? <Box fontWeight='bold' marginLeft='15%' color='white' fontSize='16px'>Initializing...</Box> : '')}
								</Box>
							</Meta>
							<Wallet display='flex' width="80%" flex='1' marginTop="1%" marginBottom="1%" wallet1={wallet[1]}>
								<Box sx={{
									cursor: 'pointer',
									display: 'flex',
									transition: 'ease-out 0.4s',
									alignItems: 'center',
									border: '1px solid white',
									width: "100%",
									boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
									paddingLeft: '10%',
									height: 65
								}} onClick={() => {
									set_wallet([false, true, false, false, false]);
									connectWallet1(walletConnectors['WalletConnect']);
								}} >
									<img src={walletconnect} width="40px" height="40px"></img><Box fontWeight='bold' marginLeft='10%' color='white' fontSize='16px'>WALLETCONNECT</Box>
									{wallet_loading ? <Box fontWeight='bold' marginLeft='15%' color='white' fontSize='16px'>Please install wallet.</Box> : ''}
								</Box>
							</Wallet>
							<Coin display='flex' width="80%" flex='1' marginTop="1%" marginBottom="1%" wallet2={wallet[2]}>
								<Box sx={{
									cursor: 'pointer',
									display: 'flex',
									transition: 'ease-out 0.4s',
									alignItems: 'center',
									border: '1px solid white',
									width: "100%",
									boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
									paddingLeft: '10%',
									height: 65
								}} onClick={() => {
									set_wallet([false, false, true, false, false]);
									connectWallet1(walletConnectors['Coinbase'])
								}}  >
									<img src={coinbase} width="40px" height="40px"></img><Box fontWeight='bold' marginLeft='10%' color='white' fontSize='16px'>COINBASE</Box>
									{wallet_loading ? <Box fontWeight='bold' marginLeft='15%' color='white' fontSize='16px'>Please install wallet.</Box> : ''}
								</Box>
							</Coin>
							<Fort display='flex' width="80%" flex='1' marginTop="1%" marginBottom="1%" wallet3={wallet[3]}>
								<Box sx={{
									cursor: 'pointer',
									display: 'flex',
									transition: 'ease-out 0.4s',
									alignItems: 'center',
									border: '1px solid white',
									width: "100%",
									boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
									paddingLeft: '10%',
									height: 65
								}} onClick={() => {
									set_wallet([false, false, false, true, false]);
									connectWallet1();
								}} >
									<img src={fortmatic} width="40px" height="40px"></img><Box fontWeight='bold' marginLeft='10%' color='white' fontSize='16px'>FORTMATIC</Box>
									{wallet_loading ? <Box fontWeight='bold' marginLeft='15%' color='white' fontSize='16px'>Please install wallet.</Box> : ''}
								</Box>
							</Fort>
							<Port display='flex' width="80%" flex='1' marginTop="1%" marginBottom="1%" wallet4={wallet[4]}>
								<Box sx={{
									cursor: 'pointer',
									display: 'flex',
									transition: 'ease-out 0.4s',
									alignItems: 'center',
									border: '1px solid white',
									width: "100%",
									boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
									paddingLeft: '10%',
									height: 65
								}} onClick={() => {
									set_wallet([false, false, false, false, true]);
									connectWallet1();
								}} >
									<img src={portis} width="40px" height="40px"></img><Box fontWeight='bold' marginLeft='10%' color='white' fontSize='16px'>PORTIS</Box>
									{wallet_loading ? <Box fontWeight='bold' marginLeft='15%' color='white' fontSize='16px'>Please install wallet.</Box> : ''}
								</Box>
							</Port>

						</Box>
					</Box>
					{/* <Box display='flex' flexDirection='column' height="100%" width='100%'>
                        <Box display='flex' alignItems="center" height="100%" flex='1' >
                            <Box sx={{
                                width: '100%',
                                cursor: 'pointer',
                                display: 'flex',
                                padding: '16px',
                                transition: 'ease-out 0.4s',
                                alignItems: 'center',
                                borderRadius: '12px',
                                flexDirection: 'row',
                                backgroundColor: '#FCFCFC',
                                boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
                                height: '50%',
                            }} onClick={() => { handleConnect(walletConnectors['MetaMask']) }}>
                                <img src={metamask} width="40px" height="40px"></img><Connect_btn_letter fontWeight='bold' margin='20px' color='#337ab7' fontSize='1.25rem'>MetaMask</Connect_btn_letter>
                            </Box>
                        </Box>
                        <Box display='flex' alignItems="center" height="100%" flex='1'>
                            <Box sx={{
                                width: '100%',
                                cursor: 'pointer',
                                display: 'flex',
                                padding: '16px',
                                transition: 'ease-out 0.4s',
                                alignItems: 'center',
                                borderRadius: '12px',
                                flexDirection: 'row',
                                backgroundColor: '#FCFCFC',
                                boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
                                height: '50%',
                            }} onClick={() => { handleConnect(walletConnectors['WalletConnect']) }}>
                                <img src={walletconnect} width="40px" height="40px"></img><Connect_btn_letter fontWeight='bold' margin='20px' color='#337ab7' fontSize='1.25rem'>WalletConnect</Connect_btn_letter>
                            </Box>
                        </Box>
                        <Box display='flex' alignItems="center" height="100%" flex='1'>
                            <Box sx={{
                                width: '100%',
                                cursor: 'pointer',
                                display: 'flex',
                                padding: '16px',
                                transition: 'ease-out 0.4s',
                                alignItems: 'center',
                                borderRadius: '12px',
                                flexDirection: 'row',
                                backgroundColor: '#FCFCFC',
                                boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
                                height: '50%',
                            }} onClick={() => { handleConnect(walletConnectors['BinanceWallet']) }}>
                                <img src={binance} width="40px" height="40px"></img><Connect_btn_letter fontWeight='bold' margin='20px' color='#337ab7' fontSize='1.25rem'>BinanceWallet</Connect_btn_letter>
                            </Box>
                        </Box>
                        <Box display='flex' alignItems="center" height="100%" flex='1'>
                            <Box sx={{
                                width: '100%',
                                cursor: 'pointer',
                                display: 'flex',
                                padding: '16px',
                                transition: 'ease-out 0.4s',
                                alignItems: 'center',
                                borderRadius: '12px',
                                flexDirection: 'row',
                                backgroundColor: '#FCFCFC',
                                boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
                                height: '50%',
                            }} onClick={() => { handleConnect(walletConnectors['TrustWallet']) }}>
                                <img src={trust} width="40px" height="40px"></img><Connect_btn_letter fontWeight='bold' margin='20px' color='#337ab7' fontSize='1.25rem'>TrustWallet</Connect_btn_letter>
                            </Box>
                        </Box>
                    </Box> */}
				</Box>
			</Modal>
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
	display: ${({ wallet0 }) => wallet0 ? 'flex !important' : 'none !important'};
	width: 80%;
	flex: 1;
	margin-top : 1%;
	margin-bottom: 1%;
`
const Wallet = styled(Box)`
display: ${({ wallet1 }) => wallet1 ? 'flex !important' : 'none !important'};
	width: 80%;
	flex: 1;
	margin-top : 1%;
	margin-bottom: 1%;
`
const Coin = styled(Box)`
display: ${({ wallet2 }) => wallet2 ? 'flex !important' : 'none !important'};
	width: 80%;
	flex: 1;
	margin-top : 1%;
	margin-bottom: 1%;
`
const Fort = styled(Box)`
display: ${({ wallet3 }) => wallet3 ? 'flex !important' : 'none !important'};
	width: 80%;
	flex: 1;
	margin-top : 1%;
	margin-bottom: 1%;
`
const Port = styled(Box)`
display: ${({ wallet4 }) => wallet4 ? 'flex !important' : 'none !important'};
	width: 80%;
	flex: 1;
	margin-top : 1%;
	margin-bottom: 1%;
`
