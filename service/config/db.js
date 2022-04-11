import Sequelize from 'sequelize'
var sequelize = new Sequelize('test_database','root','QWAszx1103!',{
  host:'106.13.199.161',
  dialect:'mysql',
  operatorsAliases:false,
  dialectOptions:{
      //字符集
      charset:'utf8mb4',
      collate:'utf8mb4_unicode_ci',
      supportBigNumbers: true,
      bigNumberStrings: true
  },
  pool:{
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
  },
  timezone: '+08:00'  //东八时区
});

export default sequelize