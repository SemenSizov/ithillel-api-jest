const { UsersController } = require('../../src/controllers/UsersController');

const usersController = new UsersController();
describe('User profile', () => {
	beforeAll(async () => {
		await usersController.login();
	});

	test('should can edit first name', async () => {
		let profileResp = await usersController.getUserProfile();
		const updatedName = profileResp.data.data.name.split('').reverse().join('');
		const profile = {
			name: updatedName,
			lastName: profileResp.data.data.lastName,
			country: profileResp.data.data.country,
		};
		const editResponse = await usersController.updateUserProfile(profile);
		expect(editResponse.status).toBe(200);
		profileResp = await usersController.getUserProfile();
		expect(profileResp.data.data.name).toBe(updatedName);
	});

	test('should can edit last name', async () => {
		let profileResp = await usersController.getUserProfile();
		const updatedLastName = profileResp.data.data.lastName.split('').reverse().join('');
		const profile = {
			name: profileResp.data.data.name,
			lastName: updatedLastName,
			country: profileResp.data.data.country,
		};
		const editResponse = await usersController.updateUserProfile(profile);
		expect(editResponse.status).toBe(200);
		profileResp = await usersController.getUserProfile();
		expect(profileResp.data.data.lastName).toBe(updatedLastName);
	});

	test('should can edit country', async () => {
		let profileResp = await usersController.getUserProfile();
		const updatedCountry = profileResp.data.data.country
			? profileResp.data.data.country.split('').reverse().join('')
			: 'Ukraine';
		const profile = {
			name: profileResp.data.data.name,
			lastName: profileResp.data.data.lastName,
			country: updatedCountry,
		};
		const editResponse = await usersController.updateUserProfile(profile);
		expect(editResponse.status).toBe(200);
		profileResp = await usersController.getUserProfile();
		expect(profileResp.data.data.country).toBe(updatedCountry);
	});
});
