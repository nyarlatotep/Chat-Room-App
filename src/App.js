import './App.css';
import { AuthenticatedApp } from './components/AuthenticatedApp/index';
import { UnauthenticatedApp } from './components/UnauthenticatedApp/index';
import { useAuth } from './hooks/useAuth';

export default function App () {
	const { user } = useAuth();

	return (
		<div className='container'>
			<h1>💬Chat Room</h1>
			{ user ? <AuthenticatedApp /> : <UnauthenticatedApp /> }
		</div>
	);
}