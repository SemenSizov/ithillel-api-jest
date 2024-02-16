const { CarsController } = require('../../src/controllers/CarsController');

const carsController = new CarsController();
test.only.each([1, 2, 3])('get car brand $id', async (id) => {
	await carsController.login();
	const brandReponse = await carsController.getCarsBrandById(id);
	expect(brandReponse.data.data.id).toBe(id);
});
