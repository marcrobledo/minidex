/* Minidex - Game data - Gen VII Let's go */
const GENERATION=7;
const GAME_ID='letsgo';
const GAMES=[
	['Let\'s go, Pikachu!'],
	['Let\'s go, Eevee!','Let\'s go, Évoli!','Let\'s go, Evoli!']
];
const REGIONAL_DEXES=[
	{
		name:['Kanto Pokédex',,'Kanto-Pokédex',,'Pokédex de Kanto',,'关都地区宝可梦'],
		ids:(function(){var a=[];for(var i=1;i<=151;i++)a.push(i);return a})().concat([808,809])
	}
];
const REGION_NAME=['Kanto',,,,,,'关都地区'];
const NATIONAL_DEX=false;
const MAX_NATIONAL=809;


const Icons={
	WIDTH:1156,
	HEIGHT:616,
	ICON_WIDTH:68,
	ICON_HEIGHT:56,

	ICONS:[0,1,2,3,5,6,7,9,10,11,13,14,15,16,17,18,20,21,22,24,26,28,29,30,31,32,34,36,38,40,41,42,43,44,45,46,47,48,50,52,53,54,55,56,57,58,59,60,61,62,63,65,67,69,71,72,73,74,75,76,77,78,79,80,81,82,84,85,86,87,88,89,90,91,92,94,96,98,99,100,101,103,104,105,106,107,108,109,110,112,114,115,116,117,118,120,121,122,123,124,125,126,127,128,130,131,133,134,135,136,137,138,139,140,141,142,144,145,146,147,148,149,150,151,152,153,154,155,157,158,159,161,162,163,165,166,167,168,169,170,171,172,173,175,176,177,178,179,180,181,182,184,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,185,186]
}
