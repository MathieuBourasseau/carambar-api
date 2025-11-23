export class CoreController {
  
  // 404: Resource not found
  json404(req, res, message = "Page non trouvée") {
    res.status(404).json({ 
      status: 'error', 
      code: 404, 
      message: message 
    });
  }

  // 400: Bad request (e.g. missing 'question' field)
  json400(req, res, message = "Requête incorrecte") {
    res.status(400).json({ 
      status: 'error', 
      code: 400, 
      message: message 
    });
  }

  // 500: Server error (e.g. database is not responding)
  json500(req, res, error) {
    console.error(error); // Log error on server side for debugging
    res.status(500).json({ 
      status: 'error', 
      code: 500, 
      message: "Erreur interne du serveur" 
    });
  }
}