const MORE_INFO=[
	{
		title:'Serebii',
		getInfo:function(nationalId){
			return 'https://www.serebii.net/pokedex-rs/'+formatDexNumber(nationalId)+'.shtml';
		}
	},{
		title:'Bulbapedia',
		getInfo:function(nationalId,name){
			return 'https://bulbapedia.bulbagarden.net/wiki/'+name.replace(/ /g,'_')+'_(Pok%C3%A9mon)'
		}
	},{
		title:'Smogon',
		getInfo:function(nationalId,name){
			return 'https://www.smogon.com/dex/rs/pokemon/'+name.slug()+'/';
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