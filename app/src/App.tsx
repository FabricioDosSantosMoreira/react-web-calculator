import { FaAngleRight } from "react-icons/fa";
import { MdHistory } from "react-icons/md";

import { evaluate } from 'mathjs';
import { useState } from "react"

import { Container, Content, Row, Column, CalculatorContent, HistoryContent } from './components/styles';
import Button from './components/Button'
import Input from './components/Input'


const App = () => {

	const [expression, setExpression] = useState('0');
	const [history, setHistory] = useState<string[]>([]);;


	const handleClearExpression = () => { setExpression('0') };


	const handleCancelEntry = () => {
		setExpression(prev => `${prev.slice(0, -1)}`);

		// If all expressions chars are cleared, set it to '0'
		if (expression.length === 1) {
			setExpression('0');
		}
	};


	const handleAppendChar = (char: string) => {
		if (expression === 'NaN') {
			setExpression('0');
		}

		var lastChar = expression[expression.length - 1];
		var char_includes_op = ['+', '-', '*', '/', '%'].includes(char);

		// Prevents appending multiple operators or decimals
		if (['+', '-', '*', '/', '%'].includes(lastChar) && char_includes_op) {
			return;
		}
	
		// Prevent appending multiple decimals in the same number
		if (char === '.') {
			var last_decimal_idx = -1;
			var last_operation_idx = -1;

			for (let idx = 0; idx < expression.length; idx++) {
				if (expression[idx] === '.') {
					last_decimal_idx = idx;
				}
				if (['+', '-', '*', '/', '%'].includes(expression[idx])) {
					last_operation_idx = idx;
				}
			}

			if (last_decimal_idx > last_operation_idx) {
				return;
			}
		}

		if (lastChar === '0' && char !== '0' && char_includes_op) {
			setExpression(prev => `${prev === '0' ? '0' : prev}${char}`)
		}
		else {
			setExpression(prev => `${prev === '0' ? '' : prev}${char}`);
		}
	};


	const handleResolveExpression = () => {
		const result = evaluateExpression(expression).toString();

		handleAppendToHistory(expression, result);
        setExpression(result);
	};


	const evaluateExpression = (expression: string): string => {
		try {
			const result = evaluate(expression).toString();
			return result;
		} catch (error) {
			return 'NaN';
		}
	};


	const handleAppendToHistory = (expression: string, result: string) => {
		if (result !== 'NaN' && result != expression) {
			setHistory(prevHistory => [...prevHistory.slice(-4), `${expression.toString()} = ${result.toString()}`]);
		};
	}


  return(
	<Container>
		<Content>
			<CalculatorContent>
				<Column>
					<Input value={expression} variant="primary" />
					<Input value={evaluateExpression(expression)} variant="secondary"/>
				</Column>
				
				<Row> 
				<Button label="C" onClick={() => handleClearExpression()}/>
				<Button label="CE" onClick={() => handleCancelEntry()}/>
				<Button label="%" onClick={() => handleAppendChar('%')}/>
				<Button label="/" onClick={() => handleAppendChar('/')}/>
				</Row>
				<Row> 
				<Button label="7" onClick={() => handleAppendChar('7')}/>
				<Button label="8" onClick={() => handleAppendChar('8')}/>
				<Button label="9" onClick={() => handleAppendChar('9')}/>
				<Button label="*" onClick={() => handleAppendChar('*')}/>
				</Row>
				<Row> 
				<Button label="4" onClick={() => handleAppendChar('4')}/>
				<Button label="5" onClick={() => handleAppendChar('5')}/>
				<Button label="6" onClick={() => handleAppendChar('6')}/>
				<Button label="-" onClick={() => handleAppendChar('-')}/>
				</Row>
				<Row> 
				<Button label="1" onClick={() => handleAppendChar('1')}/>
				<Button label="2" onClick={() => handleAppendChar('2')}/>
				<Button label="3" onClick={() => handleAppendChar('3')}/>
				<Button label="+" onClick={() => handleAppendChar('+')}/>
				</Row>
				<Row> 
				<Button label="." onClick={() => handleAppendChar('.')}/>
				<Button variant="extraRight" label="0" onClick={() => handleAppendChar('0')}/>
				<Button label="=" onClick={() => handleResolveExpression()}/>
				</Row>
			</CalculatorContent>

			<HistoryContent>
				<h1><MdHistory/>History</h1>

				<ul>
					{history.map((entry, index) => (
						<li key={index}>
							<FaAngleRight /> {entry}
						</li>
					))}
				</ul>
			</HistoryContent>
		</Content>
	</Container>
  )
};

export default App;
