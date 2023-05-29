function getPlayerInfo() {
  return('hello')
}

export default class Player {
  constructor(n, p, r) {
    this.name = n;
    this.points = p;
    this.region = r;
  }

  static fetchAll() {
    getPlayerInfo()
  }
}