$(document).ready(function(){

	new jPlayerPlaylist({
		jPlayer: "#jquery_jplayer_rarity",
		cssSelectorAncestor: "#jp_container_rarity"
	}, [
		{
			title: "Hell Over Mecca",
			mp3:"assets/audio/mp3/rarity-1.mp3"
		},
		{
			title: "Hardcore Holly",
			mp3:"assets/audio/mp3/rarity-2.mp3"
		},		
		{
			title: "Butta",
			mp3:"assets/audio/mp3/rarity-3.mp3"
		},		
		{
			title: "Terribly Wavy",
			mp3:"assets/audio/mp3/rarity-4.mp3"
		},
		{
			title: "So Throwed",
			mp3:"assets/audio/mp3/rarity-5.mp3"
		},
		{
			title: "Codeine Connie | Slizzard",
			mp3:"assets/audio/mp3/rarity-6.mp3"
		},
		{
			title: "Turnt Out",
			mp3:"assets/audio/mp3/rarity-7.mp3"
		},
		{
			title: "New Years New Tears (M.K.G.V) | KnowLoveNoLove",
			mp3:"assets/audio/mp3/rarity-8.mp3"
			// oga:"audio/am/ogg/am8.ogg"
		},
		{
			title: "Cold Nights",
			mp3:"assets/audio/mp3/rarity-9.mp3"
		},
		{
			title: "Before God",
			mp3:"assets/audio/mp3/rarity-10.mp3"
		},
		{
			title: "Carol Lee",
			mp3:"assets/audio/mp3/rarity-11.mp3"
		},
		{
			title: "Day Of The Dead",
			mp3:"assets/audio/mp3/rarity-12.mp3"
		},		
		{
			title: "Out Here",
			mp3:"assets/audio/mp3/rarity-13.mp3"
		},		
		{
			title: "Jerusalem",
			mp3:"assets/audio/mp3/rarity-14.mp3"
		},
		{
			title: "Fallen Gods",
			mp3:"assets/audio/mp3/rarity-15.mp3"
		},
		{
			title: "13166 Vaughn St",
			mp3:"assets/audio/mp3/rarity-16.mp3"
		}

	], {
		swfPath: "/bower_components/jplayer/jquery.jplayer",
		supplied: "mp3",
		// supplied: "oga, mp3",
		wmode: "window",
		smoothPlayBar: true,
		keyEnabled: true
	});

	$("#jplayer_inspector_1").jPlayerInspector({jPlayer:$("#jquery_jplayer_1")});
});