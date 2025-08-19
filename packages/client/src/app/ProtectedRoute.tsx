import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { Navigate, Outlet } from 'react-router-dom';
import { userStore } from '@entities/user/model/user-store';

const ProtectedRouteComponent: FC = () => {
	if (!userStore.isAuthenticated) {
		return <Navigate to="/login" replace />;
	}

	return <Outlet />;
};

 
export const ProtectedRoute = observer(ProtectedRouteComponent);

export default ProtectedRoute;
