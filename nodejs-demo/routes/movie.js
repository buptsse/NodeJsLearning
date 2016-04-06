var Movie = require('./../models/Movie.js');
exports.movieAdd = function(req, res) {
if(req.params.name){//update
return res.render('movie', {
title:req.params.name+'|电影|管理|moive.me',
label:'编辑电影:'+req.params.name,
movie:req.params.name
});
} else {
return res.render('movie',{
title:'新增加|电影|管理|moive.me',
label:'新增加电影',
movie:false
});
}
};
// exports.doMovieAdd = function(req, res) {
// res.send({'success':true});
// };

exports.doMovieAdd = function(req, res) {
    // console.log(req);
    // var json = req.body['content'];
    var json = JSON.parse(req.body.content);
    console.log(json)
    console.log('doMovieAdd-----')
    if(json._id){//update

    } else {//insert

        Movie.save(json, function(err){
            if(err) {
            	    console.log('doMovieAdd-----fail')

                res.send({'success':false,'err':err});
            } else {
            	            	    console.log('doMovieAdd-----success')

                res.send({'success':true});
            }
        }); 
    }
};


exports.movieJSON = function(req, res) {
Movie.findByName(req.params.name,function(err, obj){
res.send(obj);
});
}
