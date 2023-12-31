const middleWareTest = (req, res, next) => {
    const { method, url } = req
    const time = new Date().getHours()
    console.log(method, url, time);

    //Con next, continuo la rotta
    next();

    //con res, mando una risposta direttamente dal middleware
    // res.send(`${time}`);
}