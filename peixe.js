var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,

  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

var game = new Phaser.Game(config);

var peixinho;

function preload () {
  this.load.image('mar', 'assets/bg_azul-escuro.png');
  this.load.image('logo', 'assets/logo-inteli_branco.png');
  this.load.image('peixe', 'assets/peixes/peixinho_laranja.png');
  this.load.image('tartaruga', 'assets/peixes/tartaruga.png');
  this.load.image('tubarao', 'assets/peixes/tubarao.png');
  this.load.image('concha', 'assets/peixes/concha.png');
}

function create () {
  this.add.image(400, 300, 'mar');
  this.add.image(400, 525, 'logo').setScale(0.5);
  this.add.image(400, 500, 'tubarao').setOrigin(-1.6, 4.4).setScale(0.9);
  this.add.image(400, 500, 'tartaruga').setOrigin(2, 4.8).setScale(0.9).setFlip(true, false);
  this.add.image(400, 500, 'concha').setOrigin(-4.5, 0);
  this.add.image(400, 500, 'concha').setOrigin(5.5, 0);
  
  peixinho = this.add.image(400, 300, 'peixe').setOrigin(0.5, 0.5).setFlip(true, false);
}

function update () {
  peixinho.y = this.input.y;
  peixinho.x = this.input.x;
}