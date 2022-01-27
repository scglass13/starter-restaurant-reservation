
exports.up = function(knex) {
  return knex.schema.createTable("tables")
};

exports.down = function(knex) {
  
};
