import { series } from './datosSeries.js';
function insertSeries(series) {
    var tbody = document.getElementById('series');
    console.log('Desplegando series.');
    series.forEach(function (s) {
        var tr = document.createElement('tr');
        var html = "  <td class=\"table-active\"> <b>".concat(s.id, "</b> </td>\n                              <td class=\"table-active\"> <a href=").concat(s.link, " target=\"_blank\">").concat(s.name, "</a> </td>\n                              <td class=\"table-active\"> ").concat(s.channel, " </td>\n                              <td class=\"table-active\"> ").concat(s.seasons, " </td>");
        tr.innerHTML = html;
        tbody.appendChild(tr);
    });
}
function insertAverage(series) {
    console.log('Calculando promedio.');
    var sum = 0;
    series.forEach(function (s) { sum += s.seasons; });
    var avrg = sum / series.length;
    console.log('Desplegando promedio.');
    var table = document.getElementById('tabla-series');
    var html = '<p> &nbsp; Seasons average: ' + avrg + '</p>';
    table.insertAdjacentHTML('afterend', html);
}
insertSeries(series);
insertAverage(series);
