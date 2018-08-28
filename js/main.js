
require.config({
	paths:{
		jquery:'jquery-1.10.2.min'
	}
});

require(['jquery','window'],function($,w){
	$('#a').click(function(){
		new w.Window().alert({
			title: "提示",
			content: "welcome!",
			handler4AlertBtn: function(){
				alert("you click the alert button");
			},
			handler4CloseBtn: function(){
				alert("you click the close button");
			},
			width:300,
			height:150,
			y:50,
			hasCloseBtn: true,
			skinClassName: "window_skin_a",
			text4AlertBtn: "OK"
		});
	});
});



