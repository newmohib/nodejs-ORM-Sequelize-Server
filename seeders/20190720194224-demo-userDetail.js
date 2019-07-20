'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('userDetails', [{
      firstName: 'Mohibur',
      lastName: 'Rahamn',
      email: 'mohib@gamil.com',
      phone: '01812334720',
      gender:'mail',
      birthDate: new Date(),
      username: new Date(),
      password: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('userDetails', null, {});
  }
};
