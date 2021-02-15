class ProductList {
	arr = [];

	add(n) {
		this.arr.push(n);
	} 

	product(m) {
		m--;
		if (this.arr.length < m) { return 'Requested product is greater than size of ProductList'; }
		let values = [];
		let result = 0;
		const arrReversed = this.arr.reverse();
		while (m >= 0) {
			let val = arrReversed[m];
			if (result === 0) result = val;
			else {
				result = result * val;
			}
			m--;
		}
		return result;
	}
}