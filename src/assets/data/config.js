import { readable } from 'svelte/store';

const exponentialRate = 1.15

const config = readable({
    ExponentialRate: exponentialRate,
    formulaFunction: (level, basePrice) => {
       return Math.floor(basePrice*exponentialRate**level)
    }
});


export default config