	function cleanerLeft(xAchseTag,yAchseTag){
	
		var cleaner = container.append("rect").attr("x",0).attr("y",0).attr("width",600).attr("height",600).attr("fill","blue");
		var test=  container.append("text").attr("x",10).attr("y",10).attr("id","xAchseText").text("cleaner left");
		
		var axeX = container.append("line").attr("x1",100).attr("y1",500).attr("x2",600).attr("y2",500).attr("stroke","red").attr("stroke-width",2);
		var xSpike = container.append("polygon").attr("points","100,0 95,20 105,20").style("fill","red").style("stroke","red").style("stroke-width",2);
		
		var axeY = container.append("line").attr("x1",100).attr("y1",0).attr("x2",100).attr("y2",500).attr("stroke","red").attr("stroke-width",2);
		var xSpike = container.append("polygon").attr("points","600,500 580,495 580,505	").style("fill","red").style("stroke","red").style("stroke-width",2);
		
		var separationLineX = container.append("line").attr("x1",350).attr("y1",20).attr("x2",350).attr("y2",480).attr("stroke","black").attr("stroke-width",1);
		var separationLineY = container.append("line").attr("x1",120).attr("y1",250).attr("x2",580).attr("y2",250).attr("stroke","black").attr("stroke-width",1);
		
		var origin =  container.append("text").attr("x",80).attr("y",520).attr("id","xAchseText").text("0");
		var yPlus =  container.append("text").attr("x",80).attr("y",20).attr("id","xAchseText").text("+");
		var xPlus =  container.append("text").attr("x",580).attr("y",520).attr("id","xAchseText").text("+");

		var xText =  container.append("text").attr("x",300).attr("y",520).attr("id","xAchseText").text(xAchseTag);
		var yText =  container.append("text").attr("x",220).attr("y",-70).attr("transform","rotate(90)").attr("id","yAchseText").text(yAchseTag);

		return;
	}
	