var exp=require('express');
var app=exp();

app.use(exp.static('images'));

app.listen(9000,function(){
console.log("exp app started");
});

app.use(function(req,res,next){
	console.log("in general middleware");
	next();
});

app.get('/home',function(req,res){
	console.log("in home route");
	res.write("In home route");
	res.end();
});

app.get('/login',function(req,res){
	res.sendFile(__dirname+"/login.html");
	//next();
	});
	
app.use('/home',function(req,res,next){
	console.log(req.url+"in home middleware");
	next();
});	
