class Rogue {
  constructor(thiefs, assassins, guardians) {
    this.thiefs = thiefs;
    this.assassins = assassins;
    this.guardians = guardians;
  }
  play() {
    this.thiefs = [new Thief(), new Thief(), new Thief(), new Thief()];
    this.assassins = [new Assassin(), new Assassin()];
    this.guardians = [new Guardian(), new Guardian()];
  }
  quantityPieces() {
    if (this.thiefs.length > 4) {
      this.thiefs = this.thiefs.slice(0, 4);
    }
    if (this.assassins.length > 2) {
      this.assassins = this.assassins.slice(0, 2);
    }
    if (this.guardians.length > 2) {
      this.guardians = this.guardians.slice(0, 2);
    }
  }
}

class Thief {
  constructor() {
    this.typeMove = 3;
    this.damage = 1;
    this.health = 5;
    this.alive = true;
  }
}
class Assassin {
  constructor() {
    this.typeMove = 3;
    this.damage = 4;
    this.health = 5;
    this.alive = true;
  }
}

class Guardian {
  constructor() {
    this.typeMove = 2;
    this.damage = 0;
    this.health = 8;
    this.alive = true;
  }
  healGuardian() {
    if (this.guardian.health < 8) {
      this.guardian.health = this.guardian.health + 1;
    }
  }
}
