class Floco {
  constructor(largura) {
    this.x = 0;
    this.y = 0;
    this.baseX = Math.random() * 1000;
    this.velocidadeY = Math.random() * 2;
    this.el = document.createElement('img');
    this.el.src = 'imagens/flocoDeNeve.png';
    this.el.alt = 'Floco de Neve';
    this.el.style.width = `${largura}px`;
    document.querySelector('#floco').appendChild(this.el);
  }

    movimentar() {
      this.y += this.velocidadeY;
      this.x = this.baseX;

        if (this.y >= window.innerHeight) {
            this.y = 0;
            this.baseX = Math.random() * window.innerWidth;
        }

        this.el.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
}

let flocos = [];
let i;

for(i=0; i<10; i++){
    flocos.push(new Floco(Math.random()*35+5));
}

setInterval(() => {
    for (let i = 0; i < flocos.length; i++) {
        flocos[i].movimentar();
    }
}, 33);

let novoEl = document.querySelector('#novo');
novoEl.addEventListener('click', () => {
  let largura = document.getElementById('largura').value;
  flocos.push(new Floco(largura));
});
