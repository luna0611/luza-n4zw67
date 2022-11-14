d3.csv(
  'https://raw.githubusercontent.com/mwaskom/seaborn-data/master/titanic.csv',
  function (error, data) {
    if (error) {
      console.log('Error al leer el fichero titanic.csv');
    } else {
      //Incorporación de gráficos
      // .....
      console.log('Hola');
    }
  }
);

var visualization = d3plus
  .viz()
  .container('#viz1')
  .data([
    { year: 1991, name: 'alpha', value: 15 },
    { year: 1992, name: 'alpha', value: 20 },
  ])
  .type('bar')
  .id('name')
  .x('year')
  .y('value')
  .draw();

d3.json(
  'https://raw.githubusercontent.com/raul27868/07MBIG-Visualizacion-Actividades-Guiadas/master/columnas.json',
  function (data) {
    var visualization = d3plus
      .viz()
      .container('#viz2')
      .data(data)
      .type('bar')
      .id('name')
      .x('year')
      .y('value')
      .axes({ ticks: 'false' })
      .draw();
  }
);
