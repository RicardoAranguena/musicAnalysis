$('#xAchse').change(function(){
		$("#yAchse option").show();
		$("#kreisGrosse option").show();
	    $("#colorFilter option").show();
		
		$("#yAchse option[value="+$(this).val()+"]").hide();
		$("#kreisGrosse option[value="+$(this).val()+"]").hide();
		$("#colorFilter option[value="+$(this).val()+"]").hide();
		//$("#yAchse option[value="+$(this).val()+"]").hide();  TO DO: jahr ausblenden
		});
		
$('#yAchse').change(function(){
		$("#xAchse option").show();
		$("#kreisGrosse option").show();
		$("#colorFilter option").show();
		
		$("#xAchse option[value="+$(this).val()+"]").hide();
		$("#kreisGrosseSelect option[value="+$(this).val()+"]").hide();
		$("#colorFilter option[value="+$(this).val()+"]").hide();
		});


$('#kreisGrosseSelect').change(function(){
		$("#xAchse option").show();
		$("#yAchse option").show();
	    $("#colorFilter option").show();
		$("#xAchse option[value="+$(this).val()+"]").hide();
		$("#yAchse option[value="+$(this).val()+"]").hide();
		$("#colorFilter option[value="+$(this).val()+"]").hide();	
		});
		
$('#colorFilter').change(function(){
		$("#xAchse option").show();
		$("#xAchse option[value="+$(this).val()+"]").hide();
		$("#yAchse option[value="+$(this).val()+"]").hide();
		$("#kreisGrosseSelect option[value="+$(this).val()+"]").hide();
		});
		
