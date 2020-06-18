class MovingAverage {
  public series: Series[];

  constructor({ intervalEMA, intervalSMA, series }: MovingAverageProps) {
    this.series = [...series];

    
    if (intervalSMA > 0 && this.series[0].data.length >= intervalSMA) {
      this.simpleMovingAverage(this.series, intervalSMA);
    }

    if (intervalEMA > 0 && this.series[0].data.length >= intervalEMA) {
      this.exponencialMovingAverage(this.series, intervalEMA);
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

    let total: number;
    for (let i = interval; i < series[0].data.length; i++) {
      total = 0;

      for (let j = i - interval; j < i; j++) {
        total += series[0].data[j].y[3];
      }
      series[1].data.push({
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

    let total = 0;
    for (let i = 0; i < interval; i++) {
      total += series[0].data[i].y[3];
    }
    total /= interval;

    for (let i = interval; i < series[0].data.length; i++) {
      total = EMA(series[0].data[i].y[3], total);

      series[series.length - 1].data.push({
        x: series[0].data[i].x,
        y: +total.toFixed(2),
      });
    }
  }
}

export default MovingAverage;

interface MovingAverageProps {
  series: Series[];
  intervalEMA: number;
  intervalSMA: number;
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
