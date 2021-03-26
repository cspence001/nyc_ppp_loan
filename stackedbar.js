var trace1 = {
    x: [20, 14, 23],
    y: ['giraffes', 'orangutans', 'monkeys'],
    name: 'SF Zoo',
    orientation: 'h',
    marker: {
      color: 'rgba(55,128,191,0.6)',
      width: 1
    },
    type: 'bar'
  };
  
  var trace2 = {
    x: [12, 18, 29],
    y: ['giraffes', 'orangutans', 'monkeys'],
    name: 'LA Zoo',
    orientation: 'h',
    type: 'bar',
    marker: {
      color: 'rgba(255,153,51,0.6)',
      width: 1
    }
  };
  
  var trace3 = {
    x: [22, 13, 9],
    y: ['giraffes', 'orangutans', 'monkeys'],
    name: 'NY Zoo',
    orientation: 'h',
    type: 'bar',
    marker: {
      color: 'rgb(193, 66, 66)',
      width: 1
    }
  };
  
  var trace4 = {
    x: [22, 13, 9],
    y: ['giraffes', 'orangutans', 'monkeys'],
    name: 'NY Zoo',
    orientation: 'h',
    type: 'bar',
    marker: {
      color: 'rgb(193, 66, 66)',
      width: 1
    }
  };

  var trace5 = {
    x: [22, 13, 9],
    y: ['giraffes', 'orangutans', 'monkeys'],
    name: 'NY Zoo',
    orientation: 'h',
    type: 'bar',
    marker: {
      color: 'rgb(193, 66, 66)',
      width: 1
    }
  };
  
  var data = [trace1, trace2, trace3, trace4, t];
  
  var layout = {
    title: 'Colored Bar Chart',
    barmode: 'stack'
  };
  
  Plotly.newPlot('myDiv', data, layout);
  