import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  gauge: Chart;
  gaugeNoFormat: Chart;
  gaugeInline: Chart;

  ngOnInit() {
        this.gaugeNoFormat = new Chart({
            chart: {
                type: 'solidgauge',
                backgroundColor: '#3e4858 ',
              },
              lang: {
                noData: '데이터가 없습니다.',
              },
              title: {
                useHTML: true,
                text: '<div class="chart-label-txt">20</div><br><div class="chart-label-per-txt">%</div>',
                align: 'center',
                verticalAlign: 'middle',
              },
              yAxis: {
                min: 0,
                max: 100,
                lineWidth: 0,
                tickPositions: [],
                stops: [
                  [1, '#9CFFB8'],
                ],
              },
        
              pane: {
                startAngle: 0,
                endAngle: 360,
                background: [{
                  outerRadius: '100%',
                  innerRadius: '88%',
                  borderColor: '#1D222A',
                  borderWidth: 0
                }],
              },
              plotOptions: {
                pie: {
                  dataLabels: { enabled: false }
                },
                solidgauge: {
                  dataLabels: { enabled: false },
                  linecap: 'round',
                  stickyTracking: false,
                  rounded: false
                }
              },
              series: [
                {
                  name: 'deviceStatus',
                  type: "solidgauge",
                  data: [
                    {
                      y: 20,
                      innerRadius: '88%',
                    }
                  ],
                }
              ],
              tooltip: { enabled: false },
              legend: { enabled: false },
              credits: { enabled: false }
    });


  }
}

export function centeredGaugeFormatter(): number | string {
    return Math.abs((this.y - 50) * 2);
}

export function centeredGaugeNoFormatter(): number | string {
    return Math.abs(this.y);
}