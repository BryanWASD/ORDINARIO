//document.querySelector('.addparam').addEventListener('click',addparam);
//document.querySelector('showresults').addEventListener('click',showresults);


//var parametros = [];
//var valores = [];

//function addparam(){
//	let html = document.querySelector(".container").innerHTML;
//	let newHTML = "<div<input type="text" class="parametro"><input type="text" class="valor"></div>";
//	document.querySelector(".container").innerHTML = html + newHTML;
//}

//function showresults(){
//	for(var i = document.querySelectorAll('.parametro').length - 1; i>=0; i--){
//		parametros.push(document.querySelectorAll('.parametro')[i].value);
//		valores.push(parseInt(document.querySelectorAll('.valor')[i].value));
//	}
//	var data = [{
//		x: parametro,
//		y: valores,
//		type: "bar"
//	}];
//	Plotly.newPlot("grafico",data);
//}


const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];

  const data = {
    labels: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio'],
    datasets: [{
      label: 'Ventas del Mes',
      backgroundColor: [
          'rgba(255, 26, 104, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(0, 0, 0, 0.2)'
        ],
      borderColor: 'rgba(255, 255, 255, 0)',
      data: [10, 5, 10, 2, 20, 30, 45],
    }]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {}
  };

  const myChart = new Chart(
    document.getElementById('MiGrafica'),
    config
    );