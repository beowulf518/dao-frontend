import React from "react";
import { Box } from '@material-ui/core'
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import '../../App.scss';

const Btn_hotstop = ({ posx, posy }) => {


    return (
        <>
            <button style={{
                'top': posy,
                'left': posx,
            }} className="tip-button" ><img src="../../icon-tip-button.svg" alt="tip button icon" /></button>
        </>
    );
};

const Btn_Cus = styled(Box)`


`

export default Btn_hotstop;