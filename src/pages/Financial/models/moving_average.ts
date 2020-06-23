class MovingAverage {
  public series: Series[];
  public days: Date[];

  constructor({ series, intervalEMA, intervalSMA, intervalBollinger }: MovingAverageProps) {
    this.series = [...series];
    this.days = series[0].data.map((d) => d.x);

    if (intervalSMA > 0 && this.series[0].data.length >= intervalSMA) {
      this.simpleMovingAverage(this.series, intervalSMA);
    }

    if (intervalEMA > 0 && this.series[0].data.length >= intervalEMA) {
      this.exponencialMovingAverage(this.series, intervalEMA);
    }

    if (intervalBollinger > 0 && this.series[0].data.length >= intervalBollinger) {
      this.bollingerBands(this.series, intervalBollinger);
    }
  }

  private simpleMovingAverage(series: Series[], interval: number) {
    series.push({
      type: "line",
      stroke: "smooth",
      markerSize: 1,
      name: `SMA-${interval}`,
      data: [],
    });
    let location = series.findIndex((v) => v.name === `SMA-${interval}`);

    let total: number;
    for (let i = interval; i < series[0].data.length; i++) {
      total = 0;

      for (let j = i - interval; j < i; j++) {
        total += series[0].data[j].y[3];
      }
      series[location].data.push({
        x: series[0].data[i].x,
        y: +(total / interval).toFixed(2),
      });
    }
  }

  private exponencialMovingAverage(series: Series[], interval: number) {
    const K = 2 / (interval + 1);
    const EMA = (Price, EMAp) => (Price - EMAp) * K + EMAp;

    series.push({
      type: "line",
      stroke: "smooth",
      name: `EMA-${interval}`,
      data: [],
    });

    let location = series.findIndex((v) => v.name === `EMA-${interval}`);

    let total = 0;
    for (let i = 0; i < interval; i++) {
      total += series[0].data[i].y[3];
    }
    total /= interval;

    for (let i = interval; i < series[0].data.length; i++) {
      total = EMA(series[0].data[i].y[3], total);

      series[location].data.push({
        x: series[0].data[i].x,
        y: +total.toFixed(2),
      });
    }
  }

  private bollingerBands(series: Series[], interval: number) {
    series.push({
      type: "line",
      stroke: "smooth",
      markerSize: 1,
      name: `high-${interval}`,
      data: [],
    });

    series.push({
      type: "line",
      stroke: "smooth",
      markerSize: 1,
      name: `low-${interval}`,
      data: [],
    });

    series.push({
      type: "line",
      stroke: "smooth",
      markerSize: 1,
      name: `close-${interval}`,
      data: [],
    });

    [`high-${interval}`, `low-${interval}`, `close-${interval}`].forEach((name) => {
      pushMovingAverages(series, name);
    });

    function standardDeviation(values: number[], avg: number) {
      let summed = values.reduce<number>((acc, value) => {
        return acc + (value - avg) ** 2;
      }, 0);

      return +Math.sqrt(summed / 3).toFixed(2);
    }

    function smaOrBand(values: number[], total: number, name: string) {
      let avg = total / interval;

      switch (name) {
        case `high-${interval}`:
          return avg + 2 * standardDeviation(values, avg);

        case `low-${interval}`:
          return avg - 2 * standardDeviation(values, avg);

        case `close-${interval}`:
          return avg;
      }
    }

    function pushMovingAverages(series: Series[], name: string) {
      let location = series.findIndex((v) => v.name === name);

      let total: number;

      let values: number[];

      for (let i = interval; i < series[0].data.length; i++) {
        total = 0;
        values = [];

        for (let j = i - interval; j < i; j++) {
          total += series[0].data[j].y[3];
          values.push(series[0].data[j].y[3]);
        }
        series[location].data.push({
          x: series[0].data[i].x,
          y: +smaOrBand(values, total, name).toFixed(2),
        });
      }
    }
  }
}

export default MovingAverage;

interface MovingAverageProps {
  series: Series[];
  intervalEMA: number;
  intervalSMA: number;
  intervalBollinger: number;
}

interface Series {
  name: string;
  type: string;
  data: Data[];

  stroke?: string;
  markerSize?: number;
}

interface Data {
  x: Date;
  y: number | number[];
}
