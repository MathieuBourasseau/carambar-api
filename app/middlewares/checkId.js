export function checkId(req, res, next){

    const id = parseInt(req.params.id, 10);

    if(isNaN(id) || id <= 0 ) {
        return res.status(400)({
            status: "error",
            code : 400,
            message: "L'ID fourni doit être un nombre entier positif valide."
        })
    };

    req.params.id = id;
    next();
}