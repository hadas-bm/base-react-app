
import namor from "namor";
import "./index.css";

const range = len => {
    const arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(i);
    }
    return arr;
};

const newPerson = () => {
    const statusChance = Math.random();
    return {
        nameAgent: namor.generate({ words: 1, numbers: 0 }),
        name: namor.generate({ words: 1, numbers: 0 }),
        NumAgent: Math.floor(Math.random() * 100),
        statusManager: statusChance > 0.66 ? true : false,
        statusActive: statusChance > 0.33 ? true : false,
        contantPerson: namor.generate({ words: 1, numbers: 0 }),
        lastSheiltaDat: "Jan 25 2015",
        lastShlifaDate: "Jan 19 2019",
        email: 'test@test.com',
        phone: '052-9632587',
        isRunningDuringIsum: statusChance > 0.33 ? true : false,
        isIsumHistory: false,
        isSaveContent: true,
        numStationShlifa: 5,
        FrequencyRetrievalInformation: '',
        protocolVersion: 1,
        systemEzuy: 2,
        adreesTravel: 'https://google.com',
        adressHestory: 'https://google.com'

    };
};

export function makeData(len = 5553) {
    return range(len).map(d => {
        return {
            ...newPerson(),
            children: range(10).map(newPerson)
        };
    });
}

