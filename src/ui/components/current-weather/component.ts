import Component, { tracked } from '@glimmer/component';

export default class CurrentWeather extends Component {
  @tracked
  temperature: any;

  constructor(options) {
    super(options);
    this.loadTemp();
  }

  async loadTemp() {
    let request = await fetch('http://api.openweathermap.org/data/2.5/weather?zip=11222,us&APPID=626368547316c7c85e5a5564d608798b&units=metric');
    let json = await request.json();
    this.temperature = json.main.temp;
  }

};
