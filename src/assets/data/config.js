import { readable } from 'svelte/store';

const exponentialRate = 1.01

const config = readable({
    ExponentialRate: exponentialRate,
    formulaFunction: (level, basePrice) => {
        return (level+1)**exponentialRate * basePrice
    }
});


export default config