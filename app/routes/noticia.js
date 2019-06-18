module.exports = function (application) {
	
	application.get('/noticia/', function(req, res){			
		//Este render se refere ao arquivo /noticia/list.ejs
		//Que está dentro da pasta views
		res.render('noticia/list');
	});

	application.post('/noticia/list', function(req, res){
		application.app.controllers.noticia.list(application, req, res);
	});

	application.get('/noticia/show/:noticia_id', function(req, res){
		res.render('noticia/show.ejs', req.params); //Paramentros
	});	

	application.post('/noticia/getById', function(req, res){		
		application.app.controllers.noticia.getById(application, req, res);
	});	

	application.get('/noticia/add', function(req, res){
	
	});
		
	application.post('/noticia/add', function(req, res){
	
	});

	application.get('/noticia/edit/:noticia_id', function(req, res){
	
	});	
	
	application.post('/noticia/edit', function(req, res){
	
	});

	application.get('/noticia/delete/:noticia_id', function(req, res){
	
	});	
		
}