export type ToastType = 'error' | 'success';

export interface ToastProps {
	title: string;
	message: string;
	type: ToastType;
}

export interface ToastStyle {
	container: string;
	iconBg: string;
	icon: React.ReactNode;
}
