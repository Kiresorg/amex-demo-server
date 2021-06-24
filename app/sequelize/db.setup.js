function applyExtraSetup(sequelize) {
	const { customer, order } = sequelize.models;

    customer.hasMany(order);
}


module.exports = { applyExtraSetup };
