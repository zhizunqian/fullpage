$(function(){
	$(".sec2inner div a").each(function(){
		$(this).bind("mouseover",function(){
			move(this).set("background-position","100% 0px").end();
		}).bind("mouseout",function(){
			move(this).set("background-position","0% 0px").end();
		})
	})
	var diyi=function(index){
		move(".daohang").set("opacity",0).end();
	}

	var dier=function(index){
		$("#fp-nav ul li a span").each(function(){
			move(this).set("background","#000").end();
		});
		// $(".daohang").css({opacity:1});
		move(".sec2inner div:nth-child(1) a").set("transform","scale(1.1,1.1)").duration("0.05s").then().set("transform","scale(1,1)").pop().end();

		move(".sec2inner div:nth-child(2) a").delay("0.05s").set("transform","scale(1.1,1.1)").duration("0.05s").then().set("transform","scale(1,1)").pop().end();

		move(".sec2inner div:nth-child(3) a").delay("0.1s").set("transform","scale(1.1,1.1)").duration("0.05s").then().set("transform","scale(1,1)").pop().end();

		move(".sec2inner div:nth-child(4) a").delay("0.15s").set("transform","scale(1.1,1.1)").duration("0.05s").then().set("transform","scale(1,1)").pop().end();

		move(".sec2inner div:nth-child(5) a").delay("0.2s").set("transform","scale(1.1,1.1)").duration("0.05s").then().set("transform","scale(1,1)").pop().end();

		move(".sec2inner div:nth-child(6) a").delay("0.25s").set("transform","scale(1.1,1.1)").duration("0.05s").then().set("transform","scale(1,1)").pop().end();
		move(".daohang").set("opacity",1).end();
	}
	var dierlikai=function(index){
	$("#fp-nav ul li a span").each(function(){
			move(this).set("background","#fff").end();
		})	
	}
	var disanSectionin=function(index){
		move(".sec31").set("opacity",1).duration("0.2s").end();
		move(".sec32").set("opacity",1).duration("0.4s").delay("0.2s").end();
		move(".sec33").set("opacity",1).delay("0.6s").end();
		move(".daohang").set("opacity",1).end();
	}
		var disanlikai=function(index){
		move(".daohang").set("opacity",1).end();
			move(".sec3").set("margin-top","170px").end();
			$(".sec31").css({opacity:0});
				$(".sec32").css({opacity:0});
				$(".sec33").css({opacity:0});
	}
	var disi=function(index){
		move(".sec42").set("opacity","1").duration("0.02s").end();
		move(".sec412 div").delay("0.2s").set("width","117px").set("height","117px").set("margin-top","0").end();
		move(".sec411 div").set("opacity",1).end();
		move(".daohang").set("opacity",1).end();
	}
	var disilikai=function(index){
		move(".sec42").set("opacity","0").duration("0.02s").end();
		move(".sec412 div").delay("0.02s").set("width","0").set("height","0").set("margin-top","0").end();
		// move(".sec41,.sec42").set("margin-top","170px").end();
		move(".sec411 div").set("opacity",1).end();
		move(".daohang").set("opacity",1).end();

	}
	var diwu=function(index){
		move(".sec5").set("opacity",1).y(20).duration("0.6s").end();
		move(".daohang").set("opacity",1).end();
	}
	var diwulikai=function(index){
		move(".sec5").set("transform","translate3d(0,-100px,0)").then().set("opacity",0).set("transform","translate3d(0,0,0)").pop().duration("0.2s").end();
	}
	var diliu=function(index){
		move(".sec6").set("opacity",1).y(-30).duration("0.6s").end();
		move(".daohang").set("opacity",1).end();
	}
	var diliulikai=function(index){
		move(".sec6").set("transform","translate3d(0,-400px,0)").then().set("opacity",0).set("transform","translate3d(0,0,0)").pop().duration("0.6s").end();
	}
	var diqi=function(index){
		move(".sec7").set("opacity",1).set("margin-left","-470px").duration("0.6s").end();
		move(".daohang").set("opacity",1).end();
	}
	var diqilikai=function(index){
		move(".sec7").set("opacity",0).then().set("margin-left","-490px").set("margin-top","70px").pop().duration("0.6s").end();
		move(".daohang").set("opacity",1).end();
	}
	var diba=function(index){
		move(".sec81").set("opacity",1).duration("0.2s").set("transform","translate3d(0,10px,0)").end();
		move(".daohang").set("opacity",1).end();
		move(".sec82tu:nth-child(1)").delay("0.3s").set("margin-left","-453px").end();
		move(".sec82tu:nth-child(2)").delay("0.3s").set("margin-left","157px").end();
		move(".sec82tu:nth-child(3)").set("opacity","1").end();
		move(".sec82tu:nth-child(2)").set("opacity","1").end();
		move(".sec82tu:nth-child(1)").set("opacity","1").end();
	}
	var dibalikai=function(index){
		move(".sec81").set("opacity",0).then().set("transform","translate3d(0,0px,0)").pop().duration("0.6s").end();
		move(".sec82tu:nth-child(2)").set("margin-left","-148px").end();
		move(".sec82tu:nth-child(1)").set("margin-left","-148px").end();
	}
	var dijiu=function(index){
		move(".daohang").set("opacity",1).end();
		move(".sec9").set("opacity",1).set("margin-top","30px").end();
	}
	var dijiulikai=function(index){
		move(".sec9").set("margin-top","-80px").then().set("opacity",0).pop().end();
	}




	$("#fp").fullpage({
		controlArrows:true,
		verticalCentered:true,
		anchors:["s1","s2","s3","s4","s5","s6","s7","s8","s9"],
		easing:"linear",
		// paddingTop:70,
		scrollingSpeed:1000,
		fixedElements:".daohang",
		navigation:true,
		navigationPosition:"left",
		afterLoad:function(link,index){
			switch(link){
				case "s1":diyi(index);break;
				case "s2":dier(index);break;
				case "s3":disanSectionin(index);break;
				case "s4":disi(index);break;
				case "s5":diwu(index);break;
				case "s6":diliu(index);break;
				case "s7":diqi(index);break;
				case "s8":diba(index);break;
				case "s9":dijiu(index);break;
			}
		},
		onLeave:function(index,toindex){
			if(index==2){
				dierlikai(index);
			}
			if(index==4){
				$(".kuai").css({transform:"translate3d(0,0,0)"})
			}
			if(index==3){
				disanlikai(index);
			}
			if(index==4){
				disilikai(index);
			}
			if(index==5){
				diwulikai(index);
			}
			if(index==6){
				diliulikai(index);
			}
			if(index==7){
				diqilikai(index);
			}
			if(index==8){
				dibalikai(index);
			}
			if(index==9){
				dijiulikai(index);
			}
		}

	})
})