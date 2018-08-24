
require.config({
	paths:{
		jquery:'jquery-1.10.2.min'
	}
});

require(['jquery','window'],function($,w){
	$('#a').click(function(){
		new w.Window().alert("welcome!");
	});
});



