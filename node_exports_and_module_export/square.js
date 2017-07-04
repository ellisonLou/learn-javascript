const { pow } = Math

module.exports = (width) => {
    return {
        area: () => pow(width, 2)
    }
}

console.log('require.main in squire.js: ', require.main);