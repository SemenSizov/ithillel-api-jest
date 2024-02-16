const axios = require('axios');
const { CarsController } = require('../../src/controllers/CarsController');

describe('Cars', () => {
	let client;

	// beforeAll(async ()=>{
	//   const authResp = await axios.post('https://qauto.forstudy.space/api/auth/signin', {
	//     email: 'john_doe@test.com',
	//     password: "John_D0e",
	//     remember: false
	//   })

	//   const sid = authResp.headers['set-cookie'][0].split(';')[0]
	//   client = axios.create({
	//     baseURL: 'https://qauto.forstudy.space/api',
	//     validateStatus: (status)=>{return status >= 200 && status < 500;},
	//     headers : {
	//       Cookie: sid
	//     }
	//   })
	// })

	test.skip('could be created', async () => {
		const createCarResp = await client.post('/cars', {
			carBrandId: 1,
			carModelId: 1,
			mileage: 122,
		});
		console.log(createCarResp.data);
		console.log(createCarResp.status);
	});

	test('create car', async () => {
		const carsController = new CarsController();
		await carsController.login();
		const createCarResp = await carsController.createCar({
			carBrandId: 1,
			carModelId: 1,
			mileage: 122,
		});
		expect(createCarResp.status).toBe(201);
	});

  
});
