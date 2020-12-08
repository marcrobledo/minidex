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
		getInfo:function(nationalId){
			return 'https://bulbapedia.bulbagarden.net/wiki/'+getPokeNameEn(nationalId).replace(/ /g,'_')+'_(Pok%C3%A9mon)'
		}
	},{
		title:'Smogon',
		getInfo:function(nationalId){
			return 'https://www.smogon.com/dex/gs/pokemon/'+getPokeNameEn(nationalId).slug()+'/';
		}
	},{
		title:'中文百科52poke',
		getInfo:function(nationalId){
			return 'https://wiki.52poke.com/wiki/'+getPokeName(nationalId).replace(/ /g,'_')
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