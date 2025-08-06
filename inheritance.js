class Kendaraan {
  constructor(merk) {
    this.merk = merk;
  }

  info() {
    console.log(`Ini adalah kendaraan merk ${this.merk}`);
  }
}

class Motor extends Kendaraan {
  constructor(merk, tipe) {
    super(merk);
    this.tipe = tipe;
  }

  jalan() {
    console.log(`Motor ${this.merk} tipe ${this.tipe} sedang berjalan`);
  }
}

const motor1 = new Motor("Honda", "Vario");
motor1.info();  
motor1.jalan(); 
