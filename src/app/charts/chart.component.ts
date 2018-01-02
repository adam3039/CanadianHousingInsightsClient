import { Chart } from 'angular-highcharts';
import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { StatsService } from '../services/stats.service';
import * as highcharts from 'highcharts/highcharts';
import { ChartData } from '../models/stats/chart-data';

@Component({
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.less'],
    encapsulation: ViewEncapsulation.None
})
export class ChartComponent {

    display = false;
    private scope: string;
    private statId: number;
    private cityId: number;
    private provinceId: number;

    chart: Chart;
    chartData: ChartData;

    constructor(private activatedRoute: ActivatedRoute, private statsService: StatsService, private router: Router) {
        this.activatedRoute.queryParams.subscribe((queryParams: Params) => {
            this.scope = queryParams['scope'];
            this.statId = queryParams['statId'];
            this.cityId = queryParams['cityId'];
            this.provinceId = queryParams['provinceId'];
        });

        if (this.scope === 'national') {
            this.statsService.getNationalChartData(this.statId).subscribe(chartData => {
                this.chartData = chartData;
                this.initializeChart(this.chartData);
            });
        } else if (this.scope === 'provincial') {
            this.statsService.getProvincialChartData(this.statId, this.provinceId).subscribe(chartData => {
                this.chartData = chartData;
                this.initializeChart(this.chartData);
            });
        } else if (this.scope === 'local') {
            this.statsService.getLocalChartData(this.statId, this.cityId).subscribe(chartData => {
                this.chartData = chartData;
                this.initializeChart(this.chartData);
            });
        }
    }

    onHide() {
        this.statsService.chartModalClosed();
        this.router.navigate([{ outlets: { modal: null } }]);
    }

    initializeChart(chartData: ChartData) {
        this.applyTheme();
        this.chart = new Chart({
            chart: {
                type: 'line',
                zoomType: 'x',
                defaultSeriesType: 'line',
                alignTicks: true
            },
            title: {
                text: this.chartData.title
            },
            subtitle: {
                text: this.chartData.title
            },
            xAxis: {
                type: 'datetime',
                dateTimeLabelFormats: {

                },
                title: {
                    text: 'Date'
                }
            },
            yAxis: [
                {
                    labels: {
                        format: '{value}',
                    },
                    title: {
                        text: this.chartData.yAxisOne
                    }
                },
                {
                    labels: {
                        format: '{value}',
                    },
                    opposite: true,
                    title: {
                        text: this.chartData.yAxisTwo
                    }
                }],
            credits: {
                enabled: false
            }
        });
        for (let s = 0; s < this.chartData.count; s++) {
            const series = JSON.parse(this.chartData.series[s]);
            const xdata: any[] = new Array();
            for (let n = 0; n < series.length; n++) {
                const tuple = series[n];
                const mstDate = new Date(tuple[0]);
                const date = new Date(mstDate.getUTCFullYear(), mstDate.getUTCMonth(), mstDate.getUTCDate());
                const year = date.getFullYear();
                const month = date.getMonth();
                const day = date.getDate();

                xdata.push([Date.UTC(year, month, day), tuple[1]]);

            }
            this.chart.addSerie({
                yAxis: this.chartData.seriesAxis[s],
                name: this.chartData.seriesName[s],
                data: xdata
            });
        }
        this.display = true;
    }

    applyTheme() {
        highcharts.createElement('link', {
            href: 'https://fonts.googleapis.com/css?family=Unica+One',
            rel: 'stylesheet',
            type: 'text/css'
        }, null, document.getElementsByTagName('head')[0]);

        highcharts.theme = {
            colors: ['#2b908f', '#90ee7e', '#f45b5b', '#7798BF', '#aaeeee', '#ff0066',
                '#eeaaee', '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
            chart: {
                backgroundColor: 'rgba(255,255,255,0.0)',
                style: {
                    fontFamily: '\'Unica One\', sans-serif'
                },
                plotBorderColor: '#606063'
            },
            title: {
                style: {
                    color: '#E0E0E3',
                    textTransform: 'uppercase',
                    fontSize: '20px'
                }
            },
            subtitle: {
                style: {
                    color: '#E0E0E3',
                    textTransform: 'uppercase'
                }
            },
            xAxis: {
                gridLineColor: '#707073',
                labels: {
                    style: {
                        color: '#E0E0E3'
                    }
                },
                lineColor: '#707073',
                minorGridLineColor: '#505053',
                tickColor: '#707073',
                title: {
                    style: {
                        color: '#A0A0A3'

                    }
                }
            },
            yAxis: {
                gridLineColor: '#707073',
                labels: {
                    style: {
                        color: '#E0E0E3'
                    }
                },
                lineColor: '#707073',
                minorGridLineColor: '#505053',
                tickColor: '#707073',
                tickWidth: 1,
                title: {
                    style: {
                        color: '#A0A0A3'
                    }
                }
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.85)',
                style: {
                    color: '#F0F0F0'
                }
            },
            plotOptions: {
                series: {
                    dataLabels: {
                        color: '#B0B0B3'
                    },
                    marker: {
                        lineColor: '#333'
                    }
                },
                boxplot: {
                    fillColor: '#505053'
                },
                candlestick: {
                    lineColor: 'white'
                },
                errorbar: {
                    color: 'white'
                }
            },
            legend: {
                itemStyle: {
                    color: '#E0E0E3'
                },
                itemHoverStyle: {
                    color: '#FFF'
                },
                itemHiddenStyle: {
                    color: '#606063'
                }
            },
            credits: {
                style: {
                    color: '#666'
                }
            },
            labels: {
                style: {
                    color: '#707073'
                }
            },

            drilldown: {
                activeAxisLabelStyle: {
                    color: '#F0F0F3'
                },
                activeDataLabelStyle: {
                    color: '#F0F0F3'
                }
            },

            navigation: {
                buttonOptions: {
                    symbolStroke: '#DDDDDD',
                    theme: {
                        fill: '#505053'
                    }
                }
            },

            // scroll charts
            rangeSelector: {
                buttonTheme: {
                    fill: '#505053',
                    stroke: '#000000',
                    style: {
                        color: '#CCC'
                    },
                    states: {
                        hover: {
                            fill: '#707073',
                            stroke: '#000000',
                            style: {
                                color: 'white'
                            }
                        },
                        select: {
                            fill: '#000003',
                            stroke: '#000000',
                            style: {
                                color: 'white'
                            }
                        }
                    }
                },
                inputBoxBorderColor: '#505053',
                inputStyle: {
                    backgroundColor: '#333',
                    color: 'silver'
                },
                labelStyle: {
                    color: 'silver'
                }
            },

            navigator: {
                handles: {
                    backgroundColor: '#666',
                    borderColor: '#AAA'
                },
                outlineColor: '#CCC',
                maskFill: 'rgba(255,255,255,0.1)',
                series: {
                    color: '#7798BF',
                    lineColor: '#A6C7ED'
                },
                xAxis: {
                    gridLineColor: '#505053'
                }
            },

            scrollbar: {
                barBackgroundColor: '#808083',
                barBorderColor: '#808083',
                buttonArrowColor: '#CCC',
                buttonBackgroundColor: '#606063',
                buttonBorderColor: '#606063',
                rifleColor: '#FFF',
                trackBackgroundColor: '#404043',
                trackBorderColor: '#404043'
            },

            // special colors for some of the
            legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
            background2: '#505053',
            dataLabelsColor: '#B0B0B3',
            textColor: '#C0C0C0',
            contrastTextColor: '#F0F0F3',
            maskColor: 'rgba(255,255,255,0.3)'
        };

        // Apply the theme
        highcharts.setOptions(highcharts.theme);
    }
}
