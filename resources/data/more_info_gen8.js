const MORE_INFO=[
	{
		getInfo:function(nationalId, name, encounters){
			if(nationalId===79)
				return ['Available in v1.1.0 update',,,,'Disponible en actualización v1.1.0'];
			else if(getPokemonDexIndexRegional(nationalId)>=400 && getPokemonDexIndexRegional(nationalId)<=610)
				return ['Available in v1.2.0 update',,,,'Disponible en actualización v1.2.0'];
			return null;
		}
	},{
		title:['Max Raid den map',,,,'Mapa de nidos'],
		getInfo:function(nationalId, name, encounters){
			for(var i=0; i<encounters.length; i++){ //search a raid encounter
				if(/raid_/.test(encounters[i][2])){
					if(MinidexSettings.lang===4)
						return '../resources/swsh_wild_area_map_es.png';
					else
						return '../resources/swsh_wild_area_map.png';
				}
			}
			return null;
		}
	},{
		title:['Max Raid den map (Isle of Armor)',,,,'Mapa de nidos (Isla de la armadura)	'],
		getInfo:function(nationalId, name, encounters){
			for(var i=0; i<encounters.length; i++){ //search a raid encounter
				if(encounters[i][1] & Ar && /raid_/.test(encounters[i][2])){
					return '../resources/swsh_dlc1_map.png';
				}
			}
			return null;
		}
	},{
		title:'Serebii',
		getInfo:function(nationalId,name){
			//return 'https://www.serebii.net/pokedex-swsh/'+formatDexNumber(nationalId)+'.shtml';
			if(nationalId===83)
				return 'https://www.serebii.net/pokedex-swsh/farfetch\'d/';
			if(nationalId===122)
				return 'https://www.serebii.net/pokedex-swsh/mr.mime/';
			if(nationalId===772)
				return 'https://www.serebii.net/pokedex-swsh/type:null/';
			return 'https://www.serebii.net/pokedex-swsh/'+name.slug()+'/';
		}
	},{
		title:'Bulbapedia',
		getInfo:function(nationalId,name){
			return 'https://bulbapedia.bulbagarden.net/wiki/'+name.replace(/ /g,'_')+'_(Pok%C3%A9mon)'
		}
	},{
		title:'Smogon',
		getInfo:function(nationalId,name){
			return 'https://www.smogon.com/dex/ss/pokemon/'+name.slug()+'/';
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