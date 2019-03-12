const MORE_INFO=[
	{
		title:'Mew glitch',
		getInfo:function(gameInfo, nationalId){
			if(gameInfo.generation===1 && nationalId===151)
				return 'https://bulbapedia.bulbagarden.net/wiki/Mew_glitch'
			else
				return null
		}
	},{
		title:'Celebi egg glitch',
		getInfo:function(gameInfo, nationalId){
			if(gameInfo.generation===2 && nationalId===251)
				return 'https://bulbapedia.bulbagarden.net/wiki/Celebi_Egg_glitch'
			else
				return null
		}
	},{
		title:['Honey tree explanation',,,,'Explicación Árbol de miel'],
		getInfo:function(gameInfo, nationalId){
			if(gameInfo.generation===4 && gameInfo.id==='dppt' && nationalId===446)
				return 'https://bulbapedia.bulbagarden.net/wiki/Honey#Munchlax_trees'
			else
				return null
		}
	},{
		title:['QR code',,,,'Código QR'],
		getInfo:function(gameInfo, nationalId){
			if(gameInfo.id==='sm' || gameInfo.id==='usum')
				if(nationalId===25)
					return './resources/qr_pikachu_cap.png'
				else if(nationalId===801)
					return './resources/qr_magearna.png'
			return null
		}
	},{
		title:['Safari Zone details',,,,'Detalles Zona Safari'],
		getInfo:function(gameInfo, nationalId, name, encounters){
			if(gameInfo.id==='hgss' && encounters.length && encounters[encounters.length-1][4]==gameInfo.locations.length-1) /* safari zone must be last location in database */
				return 'https://bulbapedia.bulbagarden.net/wiki/Johto_Safari_Zone#Pok.C3.A9mon'
			else
				return null
		}
	},{
		title:['Poké Pelago details',,,,'Detalles Poké Resort'],
		getInfo:function(gameInfo, nationalId, name, encounters){
			if(encounters.length && encounters[encounters.length-1][4]==gameInfo.locations.length-1) /* poke pelago must be last location in database */
				if(gameInfo.id==='sm')
					return 'https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9_Pelago#Pok.C3.A9mon_Sun_and_Moon'
				else if(gameInfo.id==='usum')
					return 'https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9_Pelago#Pok.C3.A9mon_Ultra_Sun_and_Ultra_Moon'
				else
					null
			else
				return null
		}
	},{
		title:['Special Lycanroc',,,,'Lycanroc especial'],
		getInfo:function(gameInfo, nationalId){
			if(gameInfo.generation===7 && (nationalId===744 || nationalId===745))
				return ['Lycanroc Dusk form can only be evolved from special event Rockruff',,,,'La forma crepuscular de Lycanroc solo puede evolucionarse desde un Rockruff especial de evento']
			else
				return null
		}
	},{
		title:'Serebii',
		getInfo:function(gameInfo, nationalId){
			var dexId=''
			if(gameInfo.generation===2 && nationalId<=251)
				dexId='-gs';
			else if(gameInfo.generation===3 && nationalId<=386)
				dexId='-rs';
			else if(gameInfo.generation===4 && nationalId<=493)
				dexId='-dp';
			else if(gameInfo.generation===5 && nationalId<=649)
				dexId='-bw';
			else if(gameInfo.generation===6 && nationalId<=721)
				dexId='-xy';
			else if(gameInfo.generation===7 && nationalId<=809)
				dexId='-sm';
			return 'https://www.serebii.net/pokedex'+dexId+'/'+getCurrentDexNumber(nationalId, true)+'.shtml';
		}
	},{
		title:'Bulbapedia',
		getInfo:function(gameInfo, nationalId,name){
			return 'https://bulbapedia.bulbagarden.net/wiki/'+name.replace(/ /g,'_')+'_(Pok%C3%A9mon)'
		}
	},{
		title:'Smogon',
		getInfo:function(gameInfo, nationalId,name){
			var dexId='';
			if(gameInfo.generation===1 && nationalId<=151)
				dexId='rb';
			else if(gameInfo.generation===2 && nationalId<=251)
				dexId='gs';
			else if(gameInfo.generation===3 && nationalId<=386)
				dexId='rs';
			else if(gameInfo.generation===4 && nationalId<=493)
				dexId='dp';
			else if(gameInfo.generation===5 && nationalId<=649)
				dexId='bw';
			else if(gameInfo.generation===6 && nationalId<=721)
				dexId='xy';
			else if(gameInfo.generation===7 && nationalId<=807)
				dexId='sm';
			return 'https://www.smogon.com/dex/'+dexId+'/pokemon/'+name.clean()+'/';
		}
	},{
		title:'Wikidex',
		getInfo:function(gameInfo, nationalId,name){
			if(MinidexSettings.lang===4){
				return 'https://es.pokemon.wikia.com/wiki/'+name.replace(/ /g,'_')
			}else{
				return null;
			}
		}
	}
];