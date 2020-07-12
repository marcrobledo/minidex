const MORE_INFO=[
	{
		title:'Serebii',
		getInfo:function(nationalId){
			return 'https://www.serebii.net/pokedex-rs/'+formatDexNumber(nationalId)+'.shtml';
		}
	},{
		title:'Bulbapedia',
		getInfo:function(nationalId){
			return 'https://bulbapedia.bulbagarden.net/wiki/'+getPokeNameEn(nationalId).replace(/ /g,'_')+'_(Pok%C3%A9mon)'
		}
	},{
		title:'Smogon',
		getInfo:function(nationalId){
			return 'https://www.smogon.com/dex/rs/pokemon/'+getPokeNameEn(nationalId).slug()+'/';
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