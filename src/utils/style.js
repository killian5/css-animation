export function Style(obj) {
	let result = '';
	for (let styleName in obj) {
		result += `${styleName}:${obj[styleName]};`;
	}
	return result;
}

// 保留7位小数
export function n(value) {
	const e = 1000000;
	return Math.round(value * e) / e;
}

export function px(value) {
	return Math.round(n(value)) + 'px';
}
