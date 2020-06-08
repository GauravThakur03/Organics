export const GST = 18;

export const cartTotal = (items) => {
	return items.reduce((total, item) => {
      	total = total + item.prodQuant * item.prodPrice;
      	return total;
  	},0);
}