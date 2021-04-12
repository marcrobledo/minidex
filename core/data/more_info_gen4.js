const MORE_INFO=[
	{
		title:['Honey tree explanation',,,,'Explicación Árbol de miel'],
		getInfo:function(nationalId){
			if(GAME_ID==='dppt' && nationalId===446)
				return 'https://bulbapedia.bulbagarden.net/wiki/Honey#Munchlax_trees'
			else
				return null
		}
	},{
		title:['Safari Zone details',,,,'Detalles Zona Safari'],
		getInfo:function(nationalId, encounters){
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
		getInfo:function(nationalId){
			return 'https://bulbapedia.bulbagarden.net/wiki/'+getPokeNameEn(nationalId).replace(/ /g,'_')+'_(Pok%C3%A9mon)'
		}
	},{
		title:'Smogon',
		getInfo:function(nationalId){
			return 'https://www.smogon.com/dex/dp/pokemon/'+getPokeNameEn(nationalId).slug()+'/';
		}
	},{
		title:'Poképédia',
		getInfo:function(nationalId){
			if(MinidexSettings.lang===1)
				return 'https://www.pokepedia.fr/'+getPokeName(nationalId).replace(/ /g,'_');
			return null
		}
	},{
		title:'PokéWiki',
		getInfo:function(nationalId){
			if(MinidexSettings.lang===2)
				return 'https://www.pokewiki.de/'+getPokeName(nationalId).replace(/ /g,'_');
			return null
		}
	},{
		title:'Pokémon Central Wiki',
		getInfo:function(nationalId){
			if(MinidexSettings.lang===3)
				return 'https://wiki.pokemoncentral.it/'+getPokeName(nationalId).replace(/ /g,'_');
			return null
		}
	},{
		title:'Wikidex',
		getInfo:function(nationalId){
			if(MinidexSettings.lang===4)
				return 'https://www.wikidex.net/wiki/'+getPokeName(nationalId).replace(/ /g,'_');
			return null
		}
	},{
		title:'ポケモンWiki',
		getInfo:function(nationalId){
			if(MinidexSettings.lang===5)
				return 'https://wiki.ポケモン.com/wiki/'+getPokeName(nationalId).replace(/ /g,'_');
			return null
		}
	},{
		title:'中文百科52poke',
		getInfo:function(nationalId){
			if(MinidexSettings.lang===6)
				return 'https://wiki.52poke.com/wiki/'+getPokeName(nationalId).replace(/ /g,'_');
			return null
		}
	}
];