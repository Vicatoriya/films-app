import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from '@pages/login/index';
import { RegistrationPage } from '@pages/registration/index';
import { MainPage } from '@pages/main';

const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<Navigate to="/login" replace />} />
			<Route path="/login" element={<LoginPage />} />
			<Route path="reg" element={<RegistrationPage />} />
			<Route path="/films" element={<MainPage />} />
		</Routes>
	);
};

export default AppRouter;
