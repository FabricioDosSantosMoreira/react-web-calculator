import { InputContainer } from "./styles";
import { IInputProps } from './types';

const Input = ( {value, variant }: IInputProps ) => {
    return (
      	<InputContainer variant={variant}>
         	<input disabled value={value} />
      	</InputContainer>
    );
}
  
export default Input;
