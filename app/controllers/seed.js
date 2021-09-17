/*!
 * Module dependencies.
 */

exports.index = function(req, res) {
  res.render('seed/index', {
    title: 'Seed to mongodb'
  });
};

exports.write = function(req, res) {
  res.json({name: "mahesh"})

};

