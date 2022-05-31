const bcrypt = require('bcrypt');
const { SALT_ROUNDS } = require('../../config/variables');

module.exports = {
  async up(queryInterface) {
    const testUser = {
      username: 'test',
      displayName: 'Микрогеннадий Макрогеннадьевич',
      password: await bcrypt.hash('qwerty', SALT_ROUNDS),
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    await queryInterface.bulkInsert('Users', [
      testUser,
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users');
  },
};
