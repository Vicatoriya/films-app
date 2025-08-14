export const formatPhoneNumberInput = (rawValue: string): string => {
	let value = rawValue;
	if (
		value.startsWith('+375') ||
		(value.length > 0 && !value.startsWith('+'))
	) {
		const digits = value.replace(/[^0-9]/g, '');
		let formattedValue = '';
		if (digits.length > 0) {
			formattedValue = '+375';
			if (digits.length >= 4) {
				formattedValue += `(${digits.substring(3, 5)}`;
				if (digits.length >= 5) {
					formattedValue += ')';
				}
			} else {
				formattedValue = '+' + digits.substring(0, 3);
			}
			if (digits.length >= 6) {
				formattedValue += `-${digits.substring(5, 8)}`;
			}
			if (digits.length >= 9) {
				formattedValue += `-${digits.substring(8, 10)}`;
			}
			if (digits.length >= 11) {
				formattedValue += `-${digits.substring(10, 12)}`;
			}
		}
		value = formattedValue;
	} else if (value.length === 1 && value !== '+') {
		value = '+' + value;
	}
	return value;
};
