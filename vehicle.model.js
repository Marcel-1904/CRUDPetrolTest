module.exports = (sequelize, Sequelize) => {
    const Vehicle = sequelize.define("vehicle", {
        vehicleType: {
            type: Sequelize.STRING
        }, 
        registration: {
            type: Sequelize.STRING
        },
        driver: {
            type: Sequelize.STRING
        },
        tankSize: {
            type: Sequelize.INTEGER
        }
    });

    return Vehicle;
}