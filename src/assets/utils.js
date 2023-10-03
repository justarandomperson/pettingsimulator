import { get } from "svelte/store";

import {playerData} from "../assets/data/playerData.js";
import upgradesData from "../assets/data/upgradesData.js";
import config from '../assets/data/config'

const upgData = get(upgradesData)
const cnfigData = get(config)

export const checkifCanUpgrade = (i, buyQuantity) => {
    const plrData = get(playerData)
    const upgradeData = upgData[i];
    let totalPrice = 0
    let level = plrData.upgradeLevels[i]
    let money = plrData.pets
    let j = 0;
    let canBuy = true
    while (j<buyQuantity) {
        const price = cnfigData.formulaFunction(level, upgradeData.price)
        totalPrice+=price
        level++
        if (money >= price) {
          money-=price
        } else {
            canBuy = false
        }
        j++
    }
    return {totalPrice,canBuy}
}

export const buyMax = (basePrice,level,rate,money) => {
    const thing = money*(r-1)
    const thing2 = basePrice*(rate**level)
    const stuff = Math.log((thing/thing2)+1)
    const max = Math.floor(stuff)
    console.log(max)
}

export const onUpgrade = (i) => {
    const plrData = get(playerData)
    const {buyQuantity} = plrData

    const {totalPrice, canBuy} = checkifCanUpgrade(i, buyQuantity)

    if (canBuy) {
        const newData = plrData;
        newData.pets -= totalPrice;
        newData.upgradeLevels[i]+=buyQuantity;
    }
}


