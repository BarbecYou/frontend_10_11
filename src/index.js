

document.addEventListener('DOMContentLoaded', () => {
    const veletlenSzamok = [];
    for (let i = 0; i < 20; i++){
        veletlenSzamok[i] = Math.floor(Math.random() * 30 + 1);
        console.log(veletlenSzamok[i]);
    }

    document.getElementById('kivalogatas').addEventListener('click', () => {
        t = veletlenSzamok.filter((e) => e%5==0)
        console.log(t);
    });
    document.getElementById('hozzaadBtn').addEventListener('click', () => {
        veletlenSzamok.push(parseInt(document.getElementById('szamBemenet').value));
        console.log(veletlenSzamok);
    })
    console.log(new Szazlabu(200).toString());
});

class Szazlabu{

    constructor(labakSzama){
        this.labakSzama = labakSzama;
    }

    toString(){
        return `${this.labakSzama} lábú százlábú`;
    }
}