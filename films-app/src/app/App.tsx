import { BrowserRouter } from 'react-router-dom';
import AppRouter from '@app/Router';
import { ApolloProvider } from '@apollo/client';
import client from '@app/apolloClient';

function App() {
	return (
		<ApolloProvider client={client}>
			<BrowserRouter>
				<AppRouter />
			</BrowserRouter>
		</ApolloProvider>
	);
}

export default App;
