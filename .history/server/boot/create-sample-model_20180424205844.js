module.exports = function (app) {
  app.dataSources.bandkit.automigrate('Act', function (err) {
    if (err) throw err;

    app.models.Act.create([{
      name: 'Bel Cafe',
      slug: 'Vancouver'
    }, {
      name: 'Three Bees Coffee House',
      slug: 'San Mateo'
    }, {
      name: 'Caffe Artigiano',
      cslugity: 'Vancouver'
    }], function (err, acts) {
      if (err) throw err;

      console.log('Models created: \n', acts);
    });
  });
};
