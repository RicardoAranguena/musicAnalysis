
	var xAchseOption1, xAchseArray1=[];
	var yAchse1Option1, yAchse1Array1=[];
	var kreisGrosseOption1, kreisGrosseArray1=[];
	var colorFilterOption1, colorFilterArray1=[];
	
	var sliderLinks1, sliderRechts1;

	
	var loudnessTop1, loudnessBottom1;

	

$(document).ready(function(){

	//so bald man betätigt den Buttton von Slider, "range" uebernimmt  die neue ausgewählte Grenze
	//wert wird gespeichert in range im Form 0.3;0.8
	$(".slider").click(function(){
		var a=$(this).find('input[type="slider"]');
		var range = a.val();
		var array = range.split(';');
	     sliderLinks1 =array[0];
		 sliderRechts1 = array[1];
		console.log("wert right 1: " + sliderLinks1);
	
		console.log("wert right 2: " + sliderRechts1);
	
	});
	
//sejchas=====================================================================================================
//die ausgewahlte Tags werden bei anderen Selectboxes ausgeblendet

	$('#xAchse1').change(function(){
			$("#yAchse1 option").show();
			$("#kreisGrosse1Select1 option").show();
		    $("#colorFilter1 option").show();
	
			$("#yAchse1 option[value="+$(this).val()+"]").hide();
			//$("#kreisGrosse1Select1 option[value="+$(this).val()+"]").hide();
			//$("#colorFilter1 option[value="+$(this).val()+"]").hide();
	
	});

	$('#yAchse1').change(function(){
			$("#xAchse11 option").show();
			//$("#kreisGrosse1Select1 option").show();
			//$("#colorFilter1 option").show();
	
	
			$("#xAchse11 option[value="+$(this).val()+"]").hide();
			//$("#kreisGrosse1Select1 option[value="+$(this).val()+"]").hide();
			//$("#colorFilter1 option[value="+$(this).val()+"]").hide();
	
			//$("#kreisGrosse1Select1 option[value="+$("#xAchse1").val()+"]").hide();
			//$("#colorFilter1 option[value="+$("#xAchse1").val()+"]").hide();
	});


	$('#kreisGrosse1Select1').change(function(){
			$("#xAchse1 option").show();
			$("#yAchse1 option").show();
		    $("#colorFilter1 option").show();
	
			//$("#xAchse1 option[value="+$(this).val()+"]").hide();
			//$("#yAchse1 option[value="+$(this).val()+"]").hide();
			$("#colorFilter1 option[value="+$(this).val()+"]").hide();
			// $("#kreisGrosse1Select1 option[value="+$("#xAchse1").val()+"]").hide();
			//$("#colorFilter1 option[value="+$("#xAchse1").val()+"]").hide();
	        //$("#colorFilter1 option[value="+$("#yAchse1").val()+"]").hide();
	});

	$('#colorFilter1').change(function(){
			//$("#xAchse1 option").show();
			//$("#xAchse1 option[value="+$(this).val()+"]").hide();
			//$("#yAchse1 option[value="+$(this).val()+"]").hide();
	//		$("#kreisGrosse1Select1 option[value="+$(this).val()+"]").hide();
			});
	
			// Achse select
	$('#achsen1').change(function(){
		xAchseArray1 = [];
		yAchse1Array1 = [];
		
		xAchseOption1 = $("#xAchse1 option:selected");
		for (var i = 0; i < parsedCSV.length; i++) {
			if 	(xAchseOption1.val() ==="danceability")	{ 
				xAchseArray1.push(((parsedCSV[i][xAchseOption1.val()]*1000)/2) +100);
				//console.log("arreglando el arreglo vamos a ver !!!!!! xAchse array " + xAchseArray1[i] +" in die position " + i);
			}else if (xAchseOption1.val() ==="energy") 	{ 
				xAchseArray1.push(((parsedCSV[i][xAchseOption1.val()]*1000)/2) +100);
				//console.log("xAchse array " + xAchseArray1[i] +" in die position " + i);
			}else if (xAchseOption1.val() ==="tempo")  	{ 
				//für tempo sollen wir sehen wie wir die daten von spotify bekommen. Wenn es ist tempo 120.000 man kann nicht *1000/2+100 machen
				xAchseArray1.push(parsedCSV[i][xAchseOption1.val()] +100);
				//console.log("xAchse array " + xAchseArray1[i] +" in die position " + i);
			}else if (xAchseOption1.val() ==="playcount"){
				xAchseArray1.push(parsedCSV[i][xAchseOption1.val()] +100);
				//console.log("xAchse array " + xAchseArray1[i] +" in die position " + i);
			}else if (xAchseOption1.val() ==="loudness")		{ 
				xAchseArray1.push(parsedCSV[i]["loudness"] +100);//loudness has to be bigger than -200 db
				//console.log("xAchse array " + xAchseArray1[i] +" in die position " + i);
			}	else if (xAchseOption1.val() ==="jahr")	{ xAchse = xAchseOption1.val();  
				xAchseArray1.push(parsedCSV[i]["jahr"] +100);
				//console.log("xAchse array " + xAchseArray1[i] +" in die position " + i);
			}
		}//end for	
			
		//wort an die achsen schreiben
		var titleX = container.append("rect").attr("x",250).attr("y",505).attr("width",160).attr("height",45).attr("fill","white");
		if(xAchseOption1.val()!="leer"){
			var xText =  container.append("text").attr("x",300).attr("y",520).attr("id","xAchseText").text(xAchseOption1.val());
		}
		yAchse1Option1 = $("#yAchse1 option:selected");
			for (var i = 0; i < parsedCSV.length; i++) {
				if 	(yAchse1Option1.val() ==="danceability")	{ 
					yAchse1Array1.push((parsedCSV[i]["danceability"]*1000)/2);
					//console.log("yAchse1 array " + yAchse1Array1[i] +" in die position " + i);
				}else if (yAchse1Option1.val() ==="energy") { 
					yAchse1Array1.push((parsedCSV[i]["energy"]*1000)/2);
					//console.log("yAchse1 array " + yAchse1Array1[i] +" in die position " + i);
				}else if (yAchse1Option1.val() ==="tempo") { 
					yAchse1Array1.push((parsedCSV[i]["tempo"]*1000)/2);
					//console.log("yAchse1 array " + xAchseArray1[i] +" in die position " + i);
				}else if (yAchse1Option1.val() ==="playcount") { 
					yAchse1Array1.push((parsedCSV[i]["playcount"]*1000)/2);
					//console.log("yAchse1 array " + xAchseArray1[i] +" in die position " + i);
				}else if (yAchse1Option1.val() ==="loudness")	{
					yAchse1Array1.push((parsedCSV[i]["loudness"]*1000)/2);
					//console.log("yAchse1 array " + xAchseArray1[i] +" in die position " + i);
				}else if (yAchse1Option1.val() ==="jahr")	{ 
					yAchse1Array1.push((parsedCSV[i]["jahr"]*1000)/2);
					//console.log("yAchse1 array " + xAchseArray1[i] +" in die position " + i);
				}
					
			}//end for
			
		//wort an die achsen schreiben
		var titleY = container.append("rect").attr("x",50).attr("y",170).attr("width",46).attr("height",160).attr("fill","white");
		if(yAchse1Option1.val()!="leer"){
			var yText =  container.append("text").attr("x",220).attr("y",-70).attr("transform","rotate(90)").attr("id","yAchse1Text").text(yAchse1Option1.val());
		}
	});
					
	$("#kreisGrosse1").change(function(){
		kreisGrosseOption1 = $("#kreisGrosse1Select1 option:selected");
		var type = kreisGrosseOption1.val();
		kreisGrosseArray1=[];
		
		for (var i = 0; i < parsedCSV.length; i++) {
			if	(type ==="danceability"){ 
				kreisGrosseArray1.push(parsedCSV[i][type]*20); 
// 				console.log("kreisGrosseOption1 variable " + type + " array : " + kreisGrosseArray1); 
			}
			else if (type ==="energy")		{ 
				kreisGrosseArray1.push(parsedCSV[i][type]*20); 
// 				console.log("kreisGrosseOption1 variable " + type + " array : " + kreisGrosseArray1); 
			}
			else if (type ==="playcount")	{ 
				kreisGrosseArray1.push((parsedCSV[i][type]*20)/10); 
// 				console.log("kreisGrosseOption1 variable " + type + " array : " + kreisGrosseArray1); 
			}
			else if (type ==="tempo")		{ 
				kreisGrosseArray1.push((parsedCSV[i][type]*20)/100); 
// 				console.log("kreisGrosseOption1 variable " + type + " array : " + kreisGrosseArray1); 
			}
			else if (type ==="loudness")	{ 
				kreisGrosseArray1.push(((parsedCSV[i][type]*20)*(-1))/10); 
// 				console.log("kreisGrosseOption1 variable " + type + " array : " + kreisGrosseArray1); 
			}
			
		}
	});
	
	function initGenreTable(){
	var array = [];
	var k = 0;
		for (var i = 0; i < parsedCSV.length; i++) {
			var genre = parsedCSV[i]["genre"];
			var saved = false;
			for(var j = 0; j < array.length; j++){
				if(genre === array[j]){
					saved = true;
					break;
				}
			}
			if(!saved){
				array[k++] = genre;
			}
		}
		var table = document.getElementById('tableColor');
		table.innerHTML = "";
		var tr;
		for(var i = 0; i < array.length; i++){
			if(i % 3 == 0 && i != 0){
				table.appendChild(tr);
			}
			if(i % 3 == 0){
				tr = document.createElement('tr');
			}
			var td = document.createElement('td');
			td.setAttribute('bgcolor', colorGenre(array[i]));
			var font = document.createElement('font');
			font.setAttribute('color', 'white');
			font.innerHTML = array[i];
			td.appendChild(font);
			tr.appendChild(td);
		}
	};


	function colorGenre(genre) {
           if (genre ==="dance") {return "red"}
           else if (genre ==="deepHouse") {return "green"}
           else if (genre ==="house") {return "blue"}
           else if (genre ==="latinParty") {return "pink"}
           else if (genre ==="Deep House") {return "orange"}
           else if (genre ==="House") {return "yellow"}
           else if (genre ==="Lounge / Nu Jazz / House") {return "silver"}
           else if (genre ==="Dance") {return "purple"}
           else if (genre ==="TropicalHouse") {return "brown"}
           else{ return "black" };
	};

	$("#colorDanceability1").hide();
	$("#colorEnergy1").hide();
	$("#colorTempo1").hide();
	$("#colorGenre1").hide();
	$("#colorKey1").hide();

	$('#colorFilter1').change(function(){
		colorFilterOption1 = $('#colorFilter1 option:selected');
	
		colorFilterArray1=[];
		for (var i = 0; i < parsedCSV.length; i++) {

			if (colorFilterOption1.val()==="leer"){
				$("#colorDanceability1").hide();
 				$("#colorEnergy1").hide();//toggle before 
				$("#colorTempo1").hide();
				$("#colorGenre1").hide();
				$("#colorKey1").hide();
			}
			
			if (colorFilterOption1.val()==="danceability"){
				$("#colorDanceability1").show();
				$("#colorEnergy1").hide();
				$("#colorTempo1").hide();
				$("#colorGenre1").hide();
				$("#colorKey1").hide();
				
				colorFilterArray1.push(parsedCSV[i][colorFilterOption1.val()]); 
				//console.log("the option selected for color is" + colorFilterOption1.val()+ " and the colorFilterArray1 is "+ colorFilterArray1[i]); 
				}
			
			if (colorFilterOption1.val()==="energy"){
				$("#colorDanceability1").hide();
 				$("#colorEnergy1").show();
				$("#colorTempo1").hide();
				$("#colorGenre1").hide();
				$("#colorKey1").hide();
				colorFilterArray1.push(parsedCSV[i][colorFilterOption1.val()]); 
			}
			if (colorFilterOption1.val()==="tempo"){
				$("#colorDanceability1").hide();
				$("#colorEnergy1").hide();
 				$("#colorTempo1").show();
				$("#colorGenre1").hide();
				$("#colorKey1").hide();
				colorFilterArray1.push(parsedCSV[i][colorFilterOption1.val()]); 
				
			}
			if (colorFilterOption1.val()==="genre"){

				$("#colorDanceability1").hide();
				$("#colorEnergy1").hide();
				$("#colorTempo1").hide();
				$("#colorGenre1").show();
				$("#colorKey1").hide();
				initGenreTable();
				
				colorFilterArray1.push(parsedCSV[i][colorFilterOption1.val()]); 

			}
			if (colorFilterOption1.val()==="key"){ //key is the color of the circles
				$("#colorDanceability1").hide();
				$("#colorEnergy1").hide();
				$("#colorTempo1").hide();
				$("#colorGenre1").hide();
				$("#colorKey1").show();
				colorFilterArray1.push(parsedCSV[i][colorFilterOption1.val()]); 

			}//end if option 5
		
		}
	});//end color filter


		// sliders werden gebildet, fuer jede Attribut - eigene Slider
	buildSliders();
	buildSliders();
	
	
	
	function cleanerRight(){ //noch anzupassen
		
				var cleaner = container.append("rect").attr("x",600).attr("y",0).attr("width",700).attr("height",700).attr("fill","white");
			var test=  container.append("text").attr("x",10).attr("y",10).attr("id","xAchseText").text("cleaner right");
							
				var axeX = container.append("line").attr("x1",100).attr("y1",500).attr("x2",600).attr("y2",500).attr("stroke","red").attr("stroke-width",2);
				var xSpike = container.append("polygon").attr("points","100,0 95,20 105,20").style("fill","red").style("stroke","red").style("stroke-width",2);
				
				var axeY = container.append("line").attr("x1",100).attr("y1",0).attr("x2",100).attr("y2",500).attr("stroke","red").attr("stroke-width",2);
				var xSpike = container.append("polygon").attr("points","600,500 580,495 580,505	").style("fill","red").style("stroke","red").style("stroke-width",2);
				
				var separationLineX = container.append("line").attr("x1",350).attr("y1",20).attr("x2",350).attr("y2",480).attr("stroke","black").attr("stroke-width",1);
				var separationLineY = container.append("line").attr("x1",120).attr("y1",250).attr("x2",580).attr("y2",250).attr("stroke","black").attr("stroke-width",1);
				
				var origin =  container.append("text").attr("x",80).attr("y",520).attr("id","xAchseText").text("0");
				var yPlus =  container.append("text").attr("x",80).attr("y",20).attr("id","xAchseText").text("+");
				var xPlus =  container.append("text").attr("x",580).attr("y",520).attr("id","xAchseText").text("+");

 				var xText =  container.append("text").attr("x",300).attr("y",520).attr("id","xAchseText").text(xAchseOption1.val());
 				var yText =  container.append("text").attr("x",220).attr("y",-70).attr("transform","rotate(90)").attr("id","yAchse1Text").text(yAchse1Option1.val());

				return;
	}
			

	$('#showButton1').click(function(){ 
		cleanerRight();
		//poner el siguiente for como funcion aparte para poder usarlo en los click de las notas
		for (var i = 0; i < parsedCSV.length; i++) {
				var circle = container.append('circle')
				.attr('cx', xAchseArray1[i] )
				.attr('cy',yAchse1Array1[i]);
				circle.attr('r',kreisGrosseArray1[i]);
				if(colorFilterOption1.val()==="key"){
						circle.attr('fill',colorKey(colorFilterArray1[i]));
				}
		}
	});

//this functions are for the showing of only the circles of a note. The rest will be fuzzy

//make all the circles transparent but the c
// if clicked again turned normal
	$(".C1").click(function(){	       
		cleanerRight();
		if($(this).attr('clickState')=="0"){
			for (var i = 0; i < parsedCSV.length; i++) {
				if(colorFilterArray1[i]=="0"){
					var circle = container.append('circle')
					.attr('cx', xAchseArray1[i] )
					.attr('cy', yAchse1Array1[i])
					.attr('r',kreisGrosseArray1[i])
					.attr('fill',"green");		
				}else{
					var circle2 = container.append('circle')
					.attr('cx', xAchseArray1[i] )
					.attr('cy',yAchse1Array1[i])
					.attr('r',kreisGrosseArray1[i])
					.attr('fill',"black")
					.attr('fill-opacity',"0.2");		
				}
			}
			$(this).attr("clickState",1);
		}else{
			//regreso a lo normal
			for (var i = 0; i < parsedCSV.length; i++) {
				var circle = container.append('circle')
				.attr('cx', xAchseArray1[i] )
				.attr('cy',yAchse1Array1[i]);
				circle.attr('r',kreisGrosseArray1[i]);
				if(colorFilterOption1.val()==="key"){
						circle.attr('fill',colorKey(colorFilterArray1[i]));
				}
			}
			$(this).attr("clickState",0);
		}
	});
	
	$(".CS1").click(function(){	       
	cleanerRight();
		if($(this).attr('clickState')=="0"){
			for (var i = 0; i < parsedCSV.length; i++) {
				if(colorFilterArray1[i]=="1"){
					var circle = container.append('circle')
					.attr('cx', xAchseArray1[i] )
					.attr('cy', yAchse1Array1[i])
					.attr('r',kreisGrosseArray1[i])
					.attr('fill',"green");		
				}else{
					var circle2 = container.append('circle')
					.attr('cx', xAchseArray1[i] )
					.attr('cy',yAchse1Array1[i])
					.attr('r',kreisGrosseArray1[i])
					.attr('fill',"black")
					.attr('fill-opacity',"0.2");		
				}
			}
			$(this).attr("clickState",1);
		}else{
			//regreso a lo normal
			for (var i = 0; i < parsedCSV.length; i++) {
				var circle = container.append('circle')
				.attr('cx', xAchseArray1[i] )
				.attr('cy',yAchse1Array1[i]);
				circle.attr('r',kreisGrosseArray1[i]);
				if(colorFilterOption1.val()==="key"){
						circle.attr('fill',colorKey(colorFilterArray1[i]));
				}
			}
			$(this).attr("clickState",0);
		}
	 });
	
	
	$(".D1").click(function(){	       
		window.cleaner();
		if($(this).attr('clickState')=="0"){
			for (var i = 0; i < parsedCSV.length; i++) {
				if(colorFilterArray1[i]=="2"){
					var circle = container.append('circle')
					.attr('cx', xAchseArray1[i] )
					.attr('cy', yAchse1Array1[i])
					.attr('r',kreisGrosseArray1[i])
					.attr('fill',"green");		
				}else{
					var circle2 = container.append('circle')
					.attr('cx', xAchseArray1[i] )
					.attr('cy',yAchse1Array1[i])
					.attr('r',kreisGrosseArray1[i])
					.attr('fill',"black")
					.attr('fill-opacity',"0.2");		
				}
			}
			$(this).attr("clickState",1);
		}else{
			//regreso a lo normal
			for (var i = 0; i < parsedCSV.length; i++) {
				var circle = container.append('circle')
				.attr('cx', xAchseArray1[i] )
				.attr('cy',yAchse1Array1[i]);
				circle.attr('r',kreisGrosseArray1[i]);
				if(colorFilterOption1.val()==="key"){
						circle.attr('fill',colorKey(colorFilterArray1[i]));
				}
			}
			$(this).attr("clickState",0);
		}
	 });
	$(".DS1").click(function(){	       
		window.cleaner();
		if($(this).attr('clickState')=="0"){
			for (var i = 0; i < parsedCSV.length; i++) {
				if(colorFilterArray1[i]=="3"){
					var circle = container.append('circle')
					.attr('cx', xAchseArray1[i] )
					.attr('cy', yAchse1Array1[i])
					.attr('r',kreisGrosseArray1[i])
					.attr('fill',"green");		
				}else{
					var circle2 = container.append('circle')
					.attr('cx', xAchseArray1[i] )
					.attr('cy',yAchse1Array1[i])
					.attr('r',kreisGrosseArray1[i])
					.attr('fill',"black")
					.attr('fill-opacity',"0.2");		
				}
			}
			$(this).attr("clickState",1);
		}else{
			//regreso a lo normal
			for (var i = 0; i < parsedCSV.length; i++) {
				var circle = container.append('circle')
				.attr('cx', xAchseArray1[i] )
				.attr('cy',yAchse1Array1[i]);
				circle.attr('r',kreisGrosseArray1[i]);
				if(colorFilterOption1.val()==="key"){
						circle.attr('fill',colorKey(colorFilterArray1[i]));
				}
			}
			$(this).attr("clickState",0);
		}
	 });
	$(".E1").click(function(){	       
		window.cleaner();
		if($(this).attr('clickState')=="0"){
			for (var i = 0; i < parsedCSV.length; i++) {
				if(colorFilterArray1[i]=="4"){
					var circle = container.append('circle')
					.attr('cx', xAchseArray1[i] )
					.attr('cy', yAchse1Array1[i])
					.attr('r',kreisGrosseArray1[i])
					.attr('fill',"green");		
				}else{
					var circle2 = container.append('circle')
					.attr('cx', xAchseArray1[i] )
					.attr('cy',yAchse1Array1[i])
					.attr('r',kreisGrosseArray1[i])
					.attr('fill',"black")
					.attr('fill-opacity',"0.2");		
				}
			}
			$(this).attr("clickState",1);
		}else{
			//regreso a lo normal
			for (var i = 0; i < parsedCSV.length; i++) {
				var circle = container.append('circle')
				.attr('cx', xAchseArray1[i] )
				.attr('cy',yAchse1Array1[i]);
				circle.attr('r',kreisGrosseArray1[i]);
				if(colorFilterOption1.val()==="key"){
						circle.attr('fill',colorKey(colorFilterArray1[i]));
				}
			}
			$(this).attr("clickState",0);
		}
	 });
	$(".F1").click(function(){	       
		window.cleaner();
		if($(this).attr('clickState')=="0"){
			for (var i = 0; i < parsedCSV.length; i++) {
				if(colorFilterArray1[i]=="5"){
					var circle = container.append('circle')
					.attr('cx', xAchseArray1[i] )
					.attr('cy', yAchse1Array1[i])
					.attr('r',kreisGrosseArray1[i])
					.attr('fill',"green");		
				}else{
					var circle2 = container.append('circle')
					.attr('cx', xAchseArray1[i] )
					.attr('cy',yAchse1Array1[i])
					.attr('r',kreisGrosseArray1[i])
					.attr('fill',"black")
					.attr('fill-opacity',"0.2");		
				}
			}
			$(this).attr("clickState",1);
		}else{
			//regreso a lo normal
			for (var i = 0; i < parsedCSV.length; i++) {
				var circle = container.append('circle')
				.attr('cx', xAchseArray1[i] )
				.attr('cy',yAchse1Array1[i]);
				circle.attr('r',kreisGrosseArray1[i]);
				if(colorFilterOption1.val()==="key"){
						circle.attr('fill',colorKey(colorFilterArray1[i]));
				}
			}
			$(this).attr("clickState",0);
		}
	 });
	$(".FS1").click(function(){	       
		window.cleaner();
		if($(this).attr('clickState')=="0"){
			for (var i = 0; i < parsedCSV.length; i++) {
				if(colorFilterArray1[i]=="6"){
					var circle = container.append('circle')
					.attr('cx', xAchseArray1[i] )
					.attr('cy', yAchse1Array1[i])
					.attr('r',kreisGrosseArray1[i])
					.attr('fill',"green");		
				}else{
					var circle2 = container.append('circle')
					.attr('cx', xAchseArray1[i] )
					.attr('cy',yAchse1Array1[i])
					.attr('r',kreisGrosseArray1[i])
					.attr('fill',"black")
					.attr('fill-opacity',"0.2");		
				}
			}
			$(this).attr("clickState",1);
		}else{
			//regreso a lo normal
			for (var i = 0; i < parsedCSV.length; i++) {
				var circle = container.append('circle')
				.attr('cx', xAchseArray1[i] )
				.attr('cy',yAchse1Array1[i]);
				circle.attr('r',kreisGrosseArray1[i]);
				if(colorFilterOption1.val()==="key"){
						circle.attr('fill',colorKey(colorFilterArray1[i]));
				}
			}
			$(this).attr("clickState",0);
		}
	 });
	$(".G1").click(function(){	       
		window.cleaner();
		if($(this).attr('clickState')=="0"){
			for (var i = 0; i < parsedCSV.length; i++) {
				if(colorFilterArray1[i]=="7"){
					var circle = container.append('circle')
					.attr('cx', xAchseArray1[i] )
					.attr('cy', yAchse1Array1[i])
					.attr('r',kreisGrosseArray1[i])
					.attr('fill',"green");		
				}else{
					var circle2 = container.append('circle')
					.attr('cx', xAchseArray1[i] )
					.attr('cy',yAchse1Array1[i])
					.attr('r',kreisGrosseArray1[i])
					.attr('fill',"black")
					.attr('fill-opacity',"0.2");		
				}
			}
			$(this).attr("clickState",1);
		}else{
			//regreso a lo normal
			for (var i = 0; i < parsedCSV.length; i++) {
				var circle = container.append('circle')
				.attr('cx', xAchseArray1[i] )
				.attr('cy',yAchse1Array1[i]);
				circle.attr('r',kreisGrosseArray1[i]);
				if(colorFilterOption1.val()==="key"){
						circle.attr('fill',colorKey(colorFilterArray1[i]));
				}
			}
			$(this).attr("clickState",0);
		}	 });
	$(".GS1").click(function(){	       
		window.cleaner();
		if($(this).attr('clickState')=="0"){
			for (var i = 0; i < parsedCSV.length; i++) {
				if(colorFilterArray1[i]=="8"){
					var circle = container.append('circle')
					.attr('cx', xAchseArray1[i] )
					.attr('cy', yAchse1Array1[i])
					.attr('r',kreisGrosseArray1[i])
					.attr('fill',"green");		
				}else{
					var circle2 = container.append('circle')
					.attr('cx', xAchseArray1[i] )
					.attr('cy',yAchse1Array1[i])
					.attr('r',kreisGrosseArray1[i])
					.attr('fill',"black")
					.attr('fill-opacity',"0.2");		
				}
			}
			$(this).attr("clickState",1);
		}else{
			//regreso a lo normal
			for (var i = 0; i < parsedCSV.length; i++) {
				var circle = container.append('circle')
				.attr('cx', xAchseArray1[i] )
				.attr('cy',yAchse1Array1[i]);
				circle.attr('r',kreisGrosseArray1[i]);
				if(colorFilterOption1.val()==="key"){
						circle.attr('fill',colorKey(colorFilterArray1[i]));
				}
			}
			$(this).attr("clickState",0);
		}	 });
	$(".A1").click(function(){	       
		window.cleaner();
		if($(this).attr('clickState')=="0"){
			for (var i = 0; i < parsedCSV.length; i++) {
				if(colorFilterArray1[i]=="9"){
					var circle = container.append('circle')
					.attr('cx', xAchseArray1[i] )
					.attr('cy', yAchse1Array1[i])
					.attr('r',kreisGrosseArray1[i])
					.attr('fill',"green");		
				}else{
					var circle2 = container.append('circle')
					.attr('cx', xAchseArray1[i] )
					.attr('cy',yAchse1Array1[i])
					.attr('r',kreisGrosseArray1[i])
					.attr('fill',"black")
					.attr('fill-opacity',"0.2");		
				}
			}
			$(this).attr("clickState",1);
		}else{
			//regreso a lo normal
			for (var i = 0; i < parsedCSV.length; i++) {
				var circle = container.append('circle')
				.attr('cx', xAchseArray1[i] )
				.attr('cy',yAchse1Array1[i]);
				circle.attr('r',kreisGrosseArray1[i]);
				if(colorFilterOption1.val()==="key"){
						circle.attr('fill',colorKey(colorFilterArray1[i]));
				}
			}
			$(this).attr("clickState",0);
		}
	 });
	$(".AS1").click(function(){	       
		window.cleaner();
		if($(this).attr('clickState')=="0"){
			for (var i = 0; i < parsedCSV.length; i++) {
				if(colorFilterArray1[i]=="10"){
					var circle = container.append('circle')
					.attr('cx', xAchseArray1[i] )
					.attr('cy', yAchse1Array1[i])
					.attr('r',kreisGrosseArray1[i])
					.attr('fill',"green");		
				}else{
					var circle2 = container.append('circle')
					.attr('cx', xAchseArray1[i] )
					.attr('cy',yAchse1Array1[i])
					.attr('r',kreisGrosseArray1[i])
					.attr('fill',"black")
					.attr('fill-opacity',"0.2");		
				}
			}
			$(this).attr("clickState",1);
		}else{
			//regreso a lo normal
			for (var i = 0; i < parsedCSV.length; i++) {
				var circle = container.append('circle')
				.attr('cx', xAchseArray1[i] )
				.attr('cy',yAchse1Array1[i]);
				circle.attr('r',kreisGrosseArray1[i]);
				if(colorFilterOption1.val()==="key"){
						circle.attr('fill',colorKey(colorFilterArray1[i]));
				}
			}
			$(this).attr("clickState",0);
		}
	 });
	$(".B1").click(function(){	       
		window.cleaner();
		if($(this).attr('clickState')=="0"){
			for (var i = 0; i < parsedCSV.length; i++) {
				if(colorFilterArray1[i]=="11"){
					var circle = container.append('circle')
					.attr('cx', xAchseArray1[i] )
					.attr('cy', yAchse1Array1[i])
					.attr('r',kreisGrosseArray1[i])
					.attr('fill',"green");		
				}else{
					var circle2 = container.append('circle')
					.attr('cx', xAchseArray1[i] )
					.attr('cy',yAchse1Array1[i])
					.attr('r',kreisGrosseArray1[i])
					.attr('fill',"black")
					.attr('fill-opacity',"0.2");		
				}
			}
			$(this).attr("clickState",1);
		}else{
			//regreso a lo normal
			for (var i = 0; i < parsedCSV.length; i++) {
				var circle = container.append('circle')
				.attr('cx', xAchseArray1[i] )
				.attr('cy',yAchse1Array1[i]);
				circle.attr('r',kreisGrosseArray1[i]);
				if(colorFilterOption1.val()==="key"){
						circle.attr('fill',colorKey(colorFilterArray1[i]));
				}
			}
			$(this).attr("clickState",0);
		}
	 });
		
});//end document ready
