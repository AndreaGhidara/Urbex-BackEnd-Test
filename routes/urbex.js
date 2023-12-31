const express = require('express');
const router = express.Router();


router.get('/urbex', (req, res) => {
    res.redirect('http://localhost:5173/')
});

router.get('/urbexLocation', (req, res) => {
    const City = urbexLocation.map((urbex, index) => {
        const { id, title, city } = urbex
        return { id: Number(index), title, city }
    })
    res.json(City)
})

//Richiesta con Query
router.get('/urbex/search', (req, res) => {
    //Creo una costante della query e il limite di oggetti
    const { query, limit } = req.query;

    //Faccio una coppia dell' array principale, importato in precedenza | Vedi riga 5 |
    let urbexFiltrate = [...urbexLocation]

    //Controllo se esiste la query
    if (query) {
        urbexFiltrate = urbexFiltrate.filter((urbex) => {
            //ricerco tramite query ogni city che inizia per la lettera che passerò
            return urbex.city.startsWith(query);
        })
    }

    //Controllo se esiste il limite
    if (limit) {
        urbexFiltrate = urbexFiltrate.slice(0, Number(limit))
    }

    //Anche se l' array e vuoto, la ricerca è andata a buon fine, quindi rispondiamo sempre con status 200
    if (urbexFiltrate < 1) {
        return res.status(200).json({ code: 200, sucess: true, message: "No city found", data: [] })
    }

    //Esempio url doppio contollo " http://localhost:3000/urbex/search?query=M&limit=1 "

    //Rispondo con status 200 (Di conferma) e parso a json l' oggetto Creato
    res.status(200).json(urbexFiltrate)
})

module.exports = router;