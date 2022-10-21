import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

const getStripe = () => {
	if (!stripePromise) {
		stripePromise = loadStripe(
			'pk_test_51LvL17GP93pdVsGz38BA8HT15IHEsLsjzz6UosXeqaUVdX1AxAzJB5foKuD1x6pc6DtLpvqpejx4tFGx0gbhUQus00Voot9kaz',
		);
	}

	return stripePromise;
};

export default getStripe;
