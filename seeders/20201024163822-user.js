"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          firstName: "John",
          lastName: "Doe",
          email: "johndoe@mail.com",
          gitHubID: 1234,
          gitHubUsername: "johndoe",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Rick",
          lastName: "Doe",
          email: "rickdoe@mail.com",
          gitHubID: 1234,
          gitHubUsername: "rickdoe",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Sally",
          lastName: "Doe",
          email: "sallydoe@mail.com",
          gitHubID: 1234,
          gitHubUsername: "sallydoe",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
