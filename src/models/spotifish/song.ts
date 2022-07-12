export class Song {

  constructor(
    private _name: string,
    private _duration: number
  ) {
  }

  get name(): string {
    return this._name;
  }

  get duration(): number {
    return this._duration;
  }

  getTime(): string {
    const sec: number = this.duration % 60;
    const min: number = Math.floor(this.duration / 60);
    const minStr: string = min < 10 ? '0' + min : min.toString();
    const secStr: string = sec < 10 ? '0' + sec : sec.toString();
    return minStr + ':' + secStr;
  }

}
