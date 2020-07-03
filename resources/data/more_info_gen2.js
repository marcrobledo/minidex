const MORE_INFO=[
	{
		title:'Celebi egg glitch',
		getInfo:function(nationalId){
			if(nationalId===251)
				return 'https://bulbapedia.bulbagarden.net/wiki/Celebi_Egg_glitch'
			else
				return null
		}
	},{
		title:'Serebii',
		getInfo:function(nationalId){
			return 'https://www.serebii.net/pokedex-gs/'+formatDexNumber(nationalId)+'.shtml';
		}
	},{
		title:'Bulbapedia',
		getInfo:function(nationalId,name){
			return 'https://bulbapedia.bulbagarden.net/wiki/'+name.replace(/ /g,'_')+'_(Pok%C3%A9mon)'
		}
	},{
		title:'Smogon',
		getInfo:function(nationalId,name){
			return 'https://www.smogon.com/dex/gs/pokemon/'+name.slug()+'/';
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