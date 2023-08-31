import { Sequelize } from 'sequelize';

const Sequelize = new Sequelize('resumes', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

export default Sequelize;