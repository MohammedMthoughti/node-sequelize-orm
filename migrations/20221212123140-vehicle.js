'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return await Promise.all[
      queryInterface.addColumn('Vehicles', 'createdAt', {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      }),
      queryInterface.addColumn('Vehicles', 'updatedAt', {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      })
    ]
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
