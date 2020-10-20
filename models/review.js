module.exports = function(sequelize, DataTypes) {
    var Review = sequelize.define("Review", {
        // Giving the Review model a name of type STRING
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        review: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        rating: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        players: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    });

    Review.associate = function(models) {
        // Associating Review with Posts
        // When an Review is deleted, also delete any associated Posts
        // Review.hasMany(models.Post, {
        //     onDelete: "cascade"
        // });
    };

    return Review;
};