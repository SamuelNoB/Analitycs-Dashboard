export function formatBrazilianNumber(
	value: number | string,
	currency = false,
	decimal = 2
) {
	if (typeof value === 'string') {
		value = Number(value.replace(',', '.'));
	}
	if (currency === true) {
		return new Intl.NumberFormat('pt-BR', {
			style: 'currency',
			currency: 'BRL',
			maximumFractionDigits: decimal
		}).format(value);
	}
	const nu = Intl.NumberFormat('pt-BR', {
		style: 'decimal',
		maximumFractionDigits: decimal,
		minimumFractionDigits: decimal
	}).format(value);

	return nu;
}
