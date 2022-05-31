module.exports = {
  async up(queryInterface) {
    const names = ['Twilight Sparkle', 'Pinkie Pie', 'Applejack'];
    const ponies = names.map((name) => ({
      name,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert('Ponies', ponies);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Ponies');
  },
};
