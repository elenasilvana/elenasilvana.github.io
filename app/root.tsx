import {
	isRouteErrorResponse,
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from 'react-router';

import type { Route } from './+types/root';
import './app.css';
import { NavBar } from './components/navbar';
import SelectionContext from './context/sectionContext';
import { useState } from 'react';
import { Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { themeOptions } from './theme/theme';
import EnhancedNavBar from './components/enhancedNavbar';

const theme = createTheme(themeOptions);

export function Layout({ children }: { children: React.ReactNode }) {
	const [selectedSection, setSelectedSection] = useState('about')
	const [sectionOnView, setSectionOnView] = useState('about')
	return (
		<html lang='en'>
			<head>
				<meta charSet='utf-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<title>ELE Portafolio</title>
				<Meta />
				<Links />
			</head>
			<body>
				<ThemeProvider theme={theme}>
					<CssBaseline enableColorScheme />
					<SelectionContext.Provider value={{
						selectedSection, 
						setSelectedSection,
						sectionOnView,
						setSectionOnView
						}}>
						<Container 
						 	maxWidth="xl"
							component="main"
							sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}
						>	
							<EnhancedNavBar />
						
								{/* <div>
									<NavBar />
								</div> */}
								{children}

						</Container>		
					</SelectionContext.Provider>
				</ThemeProvider>
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
	let message = 'Oops!';
	let details = 'An unexpected error occurred.';
	let stack: string | undefined;

	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? '404' : 'Error';
		details =
			error.status === 404
				? 'The requested page could not be found.'
				: error.statusText || details;
	} else if (import.meta.env.DEV && error && error instanceof Error) {
		details = error.message;
		stack = error.stack;
	}

	return (
		<main className='pt-16 p-4 container mx-auto'>
			<h1>{message}</h1>
			<p>{details}</p>
			{stack && (
				<pre className='w-full p-4 overflow-x-auto'>
					<code>{stack}</code>
				</pre>
			)}
		</main>
	);
}
