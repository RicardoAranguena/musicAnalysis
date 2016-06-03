//'use strict';

		function buildSliders() {
			var danceability = $('#colorDanceability input');
			var energy = $('#colorEnergy input');
			var tempo = $('#colorTempo input');
			var jahr = $('#jahr input');
			
			danceability.slider({
				from: 0,
				to: 1,
				step: 0.001,
				smooth: false,
				round: 1,
				scale: [0, '|', .5, '|', 1],
				skin: "plastic"
			});
			
			energy.slider({
				from: 0,
				to: 1,
				step: 0.001,
				smooth: false,
				round: 1,
				scale: [0, '|', .5, '|', 1], 	
				skin: "plastic"
			});
			
			tempo.slider({
				from: 50,
				to: 200,
				step: 1,
				round: 0,
				scale: [50, '|', 125, '|', 200],
				skin: "plastic"
			});
			
			jahr.slider({
				from: 1990,
				to: 2016,
				step: 1,
				round: 0,
				scale: [ 1990, '|', 2000, '|', 2016],
				skin: "plastic"
			});
		}
		
		buildSliders();
		
		
		



		