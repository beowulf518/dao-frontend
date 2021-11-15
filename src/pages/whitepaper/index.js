import React, { useEffect, useState } from "react";
import styled from 'styled-components'
import { Box, Modal } from '@material-ui/core'
import { MdClose } from 'react-icons/md'
import { FaMediumM } from 'react-icons/fa'
import { BsArrowDown, BsDiscord, BsTwitter, BsTelegram} from 'react-icons/bs';

import back_img1 from "../../assets/right_panel_reserve2.png";
import eth1 from '../../assets/eth1.png';
import faith1 from '../../assets/faith1.png';


export default function Whitepaper() {


	return (
		<Reserve_body >

		</Reserve_body >
	);
}

const Before = styled(Box)`
	display: ${({ flag_success }) => flag_success ? 'none' : 'flex'};
`

const Success = styled(Box)`
	display: ${({ flag_success }) => flag_success ? 'flex' : 'none'};
`

const Btn_reserve = styled(Box)`

	&:hover {
		cursor: pointer;
		box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
	}

	&:active {
		cursor: pointer;
		border-image: linear-gradient(#DB5994, #E4CB6F, #06A9C0) 1 1 1;
		background-color: grey;
	}
`

const Btn_reserve1 = styled(Box)`

	width: 100%;
	height: 39px !important;
	background: black;
	border: 1px solid #06A9C0;
	font-family: Roboto;
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 19px;
	color: #FFFFFF;
	cursor: pointer;
	&:hover {
		border-image: linear-gradient(#E4CB6F, #DB5994, #06A9C0) 1 1 1;
		background-color: black;
	}

	&:active {
		border-image: linear-gradient(#DB5994, #E4CB6F, #06A9C0) 1 1 1;
		background-color: #000;
	}
`

const Box_letter = styled(Box)`
	background: linear-gradient(150deg,  #659900 20%,#DB5994 50% ,#7735BD 60%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`

const Box_letter1 = styled(Box)`
	font-style: normal;
	font-weight: 200;
	font-size: 36px;
	line-height: 36px;
	text-align: center;
	text-transform: uppercase;
	background: linear-gradient(150deg,  #659900 20%,#DB5994 50% ,#7735BD 60%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`

const Reserve_body = styled(Box)`
	width: 100%;
	height: 100vh;
	background-color: black;
	background-image: url(${back_img1});
	background-repeat: repeat-y;
	background-size: cover;
	display: flex;
	flex-direction: column;
	align-items: center;
`
