import styled, { css } from 'styled-components';

import { IButtonStyled } from './types';

export const ButtonContainer = styled.button<IButtonStyled>`

	background-color: #FA340D;
	color: #000000;
	
	margin: 2.5px 2.5px;
	border: 2.5px solid #000000;
	padding: 15px;
	border-radius: 10px;
	font-size: 24px;
	flex: 1;
	cursor: pointer; 
	
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); 
	transition: all 0.2s ease; 

	&:hover {
		opacity: 0.8;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
		transform: translateY(2.5px); 
	}

	${({ variant }) => variant === "extraRight" && css`
    	width: calc(50% - 5px);
    	flex: 0 0 calc(50% - 5px); 
  	`}
`;
