// Creating our Blog model
module.exports = function(sequelize, DataTypes) {
  var Blog = sequelize.define("Blog", {
    // Need to have e-mail automatically populated.
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    establishment: {
      type: DataTypes.STRING,
      allowNull: false
    },
    itemsOrdered: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    story: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return Blog;
};
