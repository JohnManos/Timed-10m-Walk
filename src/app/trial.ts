export class Trial {
  comfortTime: string;
  fastTime: string;
  comfortVelocity: number;
  fastVelocity: number;
  meters: number;
  constructor(time: string, milisecs: number, meters: number, trialType: string) {
    this.addEntry(time, milisecs, meters, trialType);
  }
  addEntry(time: string, milisecs: number, meters: number, trialType: string) {
    if (trialType === 'comfort') {
      this.comfortTime = time;
      this.comfortVelocity = parseFloat((meters / (milisecs / 1000)).toFixed(3));
    }
    else if (trialType === 'fast') {
      this.fastTime = time;
      this.fastVelocity = parseFloat((meters / (milisecs / 1000)).toFixed(3));
    }
  }
}
