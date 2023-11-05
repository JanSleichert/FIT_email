const jmeno = prompt(`Zadej své jméno (bez diakritiky)`).trim().slice(0, 3).toLowerCase()
const prijmeni = prompt(`Zadej své příjmení(bez diakritiky)`).trim().slice(0, 5).toLocaleLowerCase()
document.body.innerHTML += `Vygenerovaná emailová adresa je ${prijmeni}${jmeno}@fit.cvut.cz.`
