import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";

@Component({
  selector: "applinechart",
  templateUrl: "./line-chart.component.html",
  styleUrls: ["./line-chart.component.css"],
})
export class LineChartComponent implements OnInit {
  chartOptions: {};
  Highcharts = Highcharts;
  constructor() {}

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: "spline",
      },
      title: {
        text: "Monthly Visitor chat",
      },
      subtitle: {
        text: "Source: Medico.com",
      },
      xAxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      yAxis: {
        title: {
          text: "Percentage",
        },
        labels: {
          formatter: function () {
            return this.value + "°";
          },
        },
      },
      tooltip: {
        crosshairs: true,
        shared: true,
      },
      plotOptions: {
        spline: {
          marker: {
            radius: 4,
            lineColor: "#666666",
            lineWidth: 1,
          },
        },
      },
      series: [
        {
          name: "Previous",
          marker: {
            symbol: "square",
          },
          data: [
            7.0,
            6.9,
            9.5,
            14.5,
            18.2,
            21.5,
            25.2,
            {
              y: 26.5,
              marker: {
                symbol:
                  "url(https://www.highcharts.com/samples/graphics/sun.png)",
              },
            },
            23.3,
            18.3,
            13.9,
            9.6,
          ],
        },
        {
          name: "Current",
          marker: {
            symbol: "diamond",
          },
          data: [
            {
              y: 3.9,
              marker: {
                symbol:
                  "url(https://www.highcharts.com/samples/graphics/snow.png)",
              },
            },
            4.2,
            5.7,
            8.5,
            11.9,
            15.2,
            17.0,
            16.6,
            14.2,
            10.3,
            6.6,
            4.8,
          ],
        },
      ],
    };
  }
}
