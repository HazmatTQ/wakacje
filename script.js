const d = new Date(2026, 11, 25)
/** dopisanie zera do liczby wpisanej
 * @param x liczba doktorej dopisujemy zero np. wpisane 3 wychodzi 03 wpisane 14 wychodzi 14
 * @author jankowalski
*/
function dopiszZero(x) {
    if (x < 10) {
        return "0" + x;
    }
    return String(x);
}
/**nazwa funkcji: pokazZegar
 * opis: pokazuje godzine
 * parametry: brak
 * @author jankowalski
 */
function pokazZegar() {
    const teraz = new Date;
    const g = dopiszZero(teraz.getHours());
    const m = dopiszZero(teraz.getMinutes());
    const s = dopiszZero(teraz.getSeconds());
    document.getElementById('zegar').textContent = g + ":" + m + ":" + s;
}
/**nazwa funkcji: pokazDate
 * opis: pokazuje dzisiejszą date
 * parametry: brak
 * @author jankowalski
*/
function pokazDate() {
    const teraz = new Date();
    document.getElementById("data").textContent = teraz.toLocaleDateString("pl-PL");
}
/**nazwa funkcji: pokazDzien
 * opis: pokazuje dzisiejszy dzien tygodnia
 * parametry: brak
 * @author jankowalski
*/
function pokazDzien() {
    const teraz = new Date();
    document.getElementById("dzien").textContent = teraz.toLocaleDateString("pl-PL", { weekday: "long" })
}
/**liczy ilosc dni do daty odejmując dwie daty od siebie
 * @param b jeden dzien
 * @param a drugi dzien
 * @author jankowalski
*/
function policz(a, b) {
    const r = b - a;
    return Math.ceil(r / 86400000);
}
/**nazwa funkcji: pokazDni
 * opis: pokazuje dni do wybranej daty oraz ją loguje
 * parametry: brak
 * @author jankowalski
*/
function pokazDni() {
    document.getElementById("dni").textContent = policz(new Date(), d);
    console.log(d)
}

//wywoływanie powyższych funkcji
pokazDzien();
pokazDate();
pokazZegar();
pokazDni();
setInterval(pokazZegar, 1000);