import styled, { css } from 'styled-components';

import { IInputStyled } from './types';

export const InputContainer = styled.div<IInputStyled>`
    width: 98%;
    
    display: flex;
    align-items: center;
    justify-content: flex-start;
    
    ${({ variant }) => variant === "primary" && css`
        height: 60px;
        font-size: 30px;

        input {
            background-color: #4A493E;

            width: 100%;
            height: 60px;

            font-size: 30px;
            
            border-radius: 7.5px 7.5px 0 0;
            border: 0;

            padding-right: 2.5%;
            text-align: right;
            color: #FFFFFF;
        }
  	`}

    ${({ variant }) => variant === "secondary" && css`
        margin-bottom: 10px;

        input {
            background-color: #454436;

            width: 100%;
            height: 20px;

            font-size: 15px;

            border-radius: 0 0 7.5px 7.5px;
            border: 0;

            padding-right: 2.5%;
            text-align: right;
        
            color: #FFFFFF;
        }
  	`}
`;
