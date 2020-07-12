const MORE_INFO=[
	{
		getInfo:function(nationalId, encounters){
			if(nationalId===79)
				return ['Available in v1.1.0 update',,,,'Disponible en actualización v1.1.0'];
			else if(getPokemonDexIndexRegional(nationalId)>=400 && getPokemonDexIndexRegional(nationalId)<=610)
				return ['Available in v1.2.0 update',,,,'Disponible en actualización v1.2.0'];
			return null;
		}
	},{
		title:['Max Raid den map',,,,'Mapa de nidos'],
		getInfo:function(nationalId, encounters){
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
		getInfo:function(nationalId, encounters){
			for(var i=0; i<encounters.length; i++){ //search a raid encounter
				if(encounters[i][1] & Ar && /raid_/.test(encounters[i][2])){
					return '../resources/swsh_dlc1_map.png';
				}
			}
			return null;
		}
	},{
		title:'Serebii',
		getInfo:function(nationalId){
			//return 'https://www.serebii.net/pokedex-swsh/'+formatDexNumber(nationalId)+'.shtml';
			if(nationalId===83)
				return 'https://www.serebii.net/pokedex-swsh/farfetch\'d/';
			else if(nationalId===865)
				return 'https://www.serebii.net/pokedex-swsh/sirfetch\'d/';
			else if(nationalId===438)
				return 'https://www.serebii.net/pokedex-swsh/mimejr./';
			else if(nationalId===122)
				return 'https://www.serebii.net/pokedex-swsh/mr.mime/';
			else if(nationalId===866)
				return 'https://www.serebii.net/pokedex-swsh/mr.rime/';
			else if(nationalId===772)
				return 'https://www.serebii.net/pokedex-swsh/type:null/';
			return 'https://www.serebii.net/pokedex-swsh/'+getPokeNameEn(nationalId).slug()+'/';
		}
	},{
		title:'Bulbapedia',
		getInfo:function(nationalId){
			return 'https://bulbapedia.bulbagarden.net/wiki/'+getPokeNameEn(nationalId).replace(/ /g,'_')+'_(Pok%C3%A9mon)'
		}
	},{
		title:'Smogon',
		getInfo:function(nationalId){
			return 'https://www.smogon.com/dex/ss/pokemon/'+getPokeNameEn(nationalId).slug()+'/';
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