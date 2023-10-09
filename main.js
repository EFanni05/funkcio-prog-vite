import './style.css'
import dolgozok from './dolgozok.json'


const man = dolgozok.filter(list => list.nem == "férfi").length
console.log(`Férfiak száma: ${man}`)
const woman = dolgozok.filter(list => list.nem == "nő").length
console.log(`Nők száma: ${woman}`);
const more = dolgozok.filter(dolgozok => dolgozok.fizetes > 150000)
console.table(more)
const nagy = dolgozok.filter(dolgozok => dolgozok.nev.includes("Nagy"))
console.table(nagy)
const young = dolgozok.filter(dolgozok => dolgozok.kor < 18).map(dolgozok =>({
  nev : dolgozok.nev,
  fizetes : dolgozok.fizetes
}))
console.table(young)
