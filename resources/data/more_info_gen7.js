const MORE_INFO=[
	{
		title:['QR code',,,,'Código QR'],
		getInfo:function(nationalId){
			if(nationalId===25 && GAME_ID==='usum')
				return '../resources/gen7_qr_pikachu_cap.png'
			else if(nationalId===801)
				return '../resources/gen7_qr_magearna.png'
			return null
		}
	},{
		title:['Poké Pelago details',,,,'Detalles Poké Resort'],
		getInfo:function(nationalId, encounters){
			if(encounters.length && encounters[encounters.length-1][4]===LOCATIONS.length-1) /* poke pelago must be last location in database */
				if(GAME_ID==='sm')
					return 'https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9_Pelago#Pok.C3.A9mon_Sun_and_Moon'
				else if(GAME_ID==='usum')
					return 'https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9_Pelago#Pok.C3.A9mon_Ultra_Sun_and_Ultra_Moon'
				else
					null
			else
				return null
		}
	},{
		title:['Special Lycanroc',,,,'Lycanroc especial'],
		getInfo:function(nationalId){
			if(nationalId===744 || nationalId===745)
				return ['Lycanroc Dusk form can only be evolved from special event Rockruff',,,,'La forma crepuscular de Lycanroc solo puede evolucionarse desde un Rockruff especial de evento']
			else
				return null
		}
	},{
		title:'Serebii',
		getInfo:function(nationalId){
			return 'https://www.serebii.net/pokedex-sm/'+formatDexNumber(nationalId)+'.shtml';
		}
	},{
		title:'Bulbapedia',
		getInfo:function(nationalId){
			return 'https://bulbapedia.bulbagarden.net/wiki/'+getPokeNameEn(nationalId).replace(/ /g,'_')+'_(Pok%C3%A9mon)'
		}
	},{
		title:'Smogon',
		getInfo:function(nationalId){
			return 'https://www.smogon.com/dex/sm/pokemon/'+getPokeNameEn(nationalId).slug()+'/';
		}
	},{
		title:'Wikidex',
		getInfo:function(nationalId){
			if(MinidexSettings.lang===4){
				return 'https://www.wikidex.net/wiki/'+getPokeName(nationalId).replace(/ /g,'_')
			}else{
				return null;
			}
		}
	}
];