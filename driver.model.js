module.exports = (sequelize, Sequelize) => {
    const Driver = sequelize.define("driver", {
        fullName: {
            type: Sequelize.STRING
        },
        firstName: {
            type: Sequelize.STRING
        },
        lastName: {
            type: Sequelize.STRING
        }, 
        age: {
            type: Sequelize.INTEGER
        },
        preverdVehicle: {
            type: Sequelize.STRING
        },
        hoursWorked: {
            type: Sequelize.INTEGER
        }
    });

    return Driver;
}