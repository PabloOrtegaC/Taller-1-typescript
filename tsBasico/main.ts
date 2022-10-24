import { Serie } from './serie.js';
import { series } from './datosSeries.js';

function insertSeries(series: Serie[]): void {
    let tbody: HTMLElement = document.getElementById('series')!;
    console.log('Desplegando series.');
    series.forEach(s => {
        let tr: HTMLElement = document.createElement('tr');
        let html: string = `  <td class="table-active"> <b>${s.id}</b> </td>
                              <td class="table-active"> <a href=${s.link} target="_blank">${s.name}</a> </td>
                              <td class="table-active"> ${s.channel} </td>
                              <td class="table-active"> ${s.seasons} </td>`;
        tr.innerHTML = html;
        tbody.appendChild(tr);
    });
}

function insertAverage(series: Serie[]): void {
    console.log('Calculando promedio.')
    let sum: number = 0;
    series.forEach(s => {sum += s.seasons});
    const avrg: number = sum / series.length;
    console.log('Desplegando promedio.')
    let table: HTMLElement = document.getElementById('tabla-series')!;
    const html: string = '<p> &nbsp; Seasons average: '+avrg+'</p>'
    table.insertAdjacentHTML('afterend', html)
}

insertSeries(series);
insertAverage(series);

