import { get } from "svelte/store";

import {playerData} from "../assets/data/playerData.js";
import {normalUpgradesData, rebirthPrice} from "../assets/data/upgradesData.js";
import config from '../assets/data/config'

const upgData = get(normalUpgradesData)
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
    
}

export const onUpgrade = (i) => {
    const plrData = get(playerData)
    const {buyQuantity} = plrData
    const upgradeData = upgData[i]

    const {totalPrice, canBuy} = checkifCanUpgrade(i, buyQuantity)
    if (canBuy) {
        plrData.pets -= totalPrice;
        plrData[upgradeData.upgrade[0]]+=upgradeData.upgrade[1]*buyQuantity
        plrData.upgradeLevels[i]+=buyQuantity;
        playerData.set(plrData)
    }
}

export const Rebirth = () => {
    const plrData = get(playerData)
    const {pets, rebirths} = plrData
    const price = cnfigData.formulaFunction(rebirths, rebirthPrice)
    if (pets>=price) {
        plrData.pets = 0
        plrData.petPower = 1
        plrData.pts = 0
        plrData.upgradeLevels = [0,0,0,0,0,0]
        plrData.rebirthing = true
        plrData.rebirths++
        playerData.set(plrData)
    }
}


