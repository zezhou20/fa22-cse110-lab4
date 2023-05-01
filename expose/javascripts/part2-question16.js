
for (let obj in statistics) {
    if (obj.startsWith('r') || statistics[obj] % 2 === 1) {
        console.log(statistics[obj]);
    }
}
