const bcrypt = require('bcrypt');
const saltRounds = 10;

const User = sequelize.define('user', {
    uuid: {
        type: Sequelize.UUID
    },
    email: {
        type: Sequelize.STRING
    },
    password_hash: DataTypes.STRING,
    password: {
      type: DataTypes.VIRTUAL,
      set: function (val) {
         // Remember to set the data value, otherwise it won't be validated
         this.setDataValue('password', val);
         this.setDataValue('password_hash', this.salt + val);
       },
       validate: {
          isLongEnough: function (val) {
            if (val.length < 7) {
              throw new Error("Please choose a longer password")
           }
        }
      }
    },
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    }
  });
  
  // force: true will drop the table if it already exists
  User.sync({force: true}).then(() => {
    // Table created
    return User.create({
      firstName: 'John',
      lastName: 'Hancock',
      email: "test@123.com",
      password: "plaintextpassword"
    });
  });