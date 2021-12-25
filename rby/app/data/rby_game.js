/* Minidex - Game data - Gen I RBY */
const GENERATION=1;
const GAME_ID='rby';
const GAMES=[
	['Red','Rouge','Rot','Rosso','Rojo',,'红'],
	['Blue','Bleu','Blau','Blu','Azul',,'蓝'],
	['Yellow','Jaune','Gelb','Giallo','Amarillo',,'黄']
];
const REGIONAL_DEXES=[
	{
		name:['Kanto Pokédex',,'Kanto-Pokédex',,'Pokédex de Kanto',,'关都地区宝可梦'],
		ids:(function(){var a=[];for(var i=1;i<=151;i++)a.push(i);return a})()
	}
];
const REGION_NAME=['Kanto',,,,,,'关都地区'];
const NATIONAL_DEX=false;
const MAX_NATIONAL=151;


const Icons={
	WIDTH:760,
	HEIGHT:240,
	ICON_WIDTH:40,
	ICON_HEIGHT:30,

	ICONS:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151]
}


const MORE_INFO=[
	{
		title:'Mew glitch',
		getInfo:function(nationalId){
			if(nationalId===151)
				return 'https://bulbapedia.bulbagarden.net/wiki/Mew_glitch'
			else
				return null
		}
	}
];
