import ReactDOM from 'react-dom/client';
import React from 'react';

import GlobalStyles from './components/global';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as Element);

root.render(
	<React.StrictMode>
		<GlobalStyles />
		<App />
	</React.StrictMode>
);
