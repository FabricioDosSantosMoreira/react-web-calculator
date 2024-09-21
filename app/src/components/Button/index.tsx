import { ButtonContainer } from './styles';
import { IButtonProps } from './types';

const Button = ({ label, variant = "primary", onClick }: IButtonProps) => {
  	return (
    	<ButtonContainer variant={variant} onClick={onClick}>
			{label}
		</ButtonContainer>
  	)
};

export default Button;
