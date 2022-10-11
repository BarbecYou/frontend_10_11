document.addEventListener('DOMContentLoaded', () => {
    const veletlenSzamok = [];
    for (let i = 0; i < 20; i++){
        veletlenSzamok[i] = Math.floor(Math.random() * 30 + 1);
        console.log(veletlenSzamok[i]);
    }
    t = veletlenSzamok.filter((e) => e%5==0)
    console.log(t);
})