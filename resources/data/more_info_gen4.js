const MORE_INFO=[
	{
		title:['Honey tree explanation',,,,'Explicación Árbol de miel'],
		getInfo:function( nationalId){
			if(GAME_ID==='dppt' && nationalId===446)
				return 'https://bulbapedia.bulbagarden.net/wiki/Honey#Munchlax_trees'
			else
				return null
		}
	},{
		title:['Safari Zone details',,,,'Detalles Zona Safari'],
		getInfo:function(nationalId, name, encounters){
			if(GAME_ID==='hgss' && encounters.length && encounters[encounters.length-1][4]===LOCATIONS.length-1) /* safari zone must be last location in database */
				return 'https://bulbapedia.bulbagarden.net/wiki/Johto_Safari_Zone#Pok.C3.A9mon'
			else
				return null
		}
	},{
		title:'Serebii',
		getInfo:function(nationalId){
			return 'https://www.serebii.net/pokedex-dp/'+formatDexNumber(nationalId)+'.shtml';
		}
	},{
		title:'Bulbapedia',
		getInfo:function(nationalId,name){
			return 'https://bulbapedia.bulbagarden.net/wiki/'+name.replace(/ /g,'_')+'_(Pok%C3%A9mon)'
		}
	},{
		title:'Smogon',
		getInfo:function(nationalId,name){
			return 'https://www.smogon.com/dex/dp/pokemon/'+name.slug()+'/';
		}
	},{
		title:'Wikidex',
		getInfo:function(nationalId,name){
			if(MinidexSettings.lang===4){
				return 'https://pokemon.fandom.com/es/wiki/'+name.replace(/ /g,'_')
			}else{
				return null;
			}
		}
	}
];