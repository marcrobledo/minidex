/* Minidex - Encounters data - Gen VI ORAS */
const OR=1<<0;
const AS=1<<1;

/* to-do: translate mirage spots */
const LOCATIONS=[
{
	name:['Route 101',,,'Percorso 101','Ruta 101',,'101号道路'],encounters:[
		[261,,'grass',20],
		[263,,'grass',40],
		[265,,'grass',40],
		[261,,'horde',5],
		[263,,'horde',95],
		[506,,['grass','dexnav']],
		[540,,['grass','dexnav']],
		[570,,['grass','dexnav']],
		[252,,'starter'],
		[255,,'starter'],
		[258,,'starter'],
		{group:'postgame',encounters:[
			[152,,'starter'],
			[155,,'starter'],
			[158,,'starter']
		]},
		{group:['Delta Episode completed',,,,'Episodio Delta completado',,'完成EpisodeΔ后'],encounters:[
			[495,,'starter'],
			[498,,'starter'],
			[501,,'starter']
		]},
		{group:['Hall of Fame x2',,,,'Hall de la fama x2',,'第二次登入名人堂后'],encounters:[
			[387,,'starter'],
			[390,,'starter'],
			[393,,'starter']
		]}
	]
},{
	name:['Route 103',,,'Percorso 103','Ruta 103',,'103号道路'],encounters:[
		[261,,'grass',40],
		[263,,'grass',40],
		[278,,'grass',20],
		[261,,'horde',35],
		[263,,'horde',60],
		[278,,'horde',5],
		[422,,['grass','dexnav']],
		[441,,['grass','dexnav']],
		[506,,['grass','dexnav']],
		[72,,'surf',65],
		[278,,'surf',30],
		[279,,'surf',5],
		[72,,'fish_old',35],
		[129,,'fish_old',65],
		[72,,'fish_good',35],
		[129,,'fish_good',60],
		[320,,'fish_good',5],
		[320,,'fish_super',100]
	]
},{
	name:['Route 102',,,'Percorso 102','Ruta 102',,'102号道路'],encounters:[
		[261,,'grass',20],
		[263,,'grass',30],
		[265,,'grass',30],
		[270,AS,'grass',15],
		[273,OR,'grass',15],
		[280,,'grass',4],
		[283,,'grass',1],
		[263,,'horde',60],
		[270,AS,'horde',35],
		[273,OR,'horde',35],
		[280,,'horde',5],
		[506,,['grass','dexnav']],
		[535,,['grass','dexnav']],
		[574,,['grass','dexnav']],
		[183,,'surf',50],
		[184,,'surf',31],
		[283,,'surf',15],
		[284,,'surf',4],
		[118,,'fish_old',35],
		[129,,'fish_old',65],
		[118,,'fish_good',35],
		[129,,'fish_good',60],
		[341,,'fish_good',5],
		[341,,'fish_super',100]
	]
},{
	name:['Petalburg City','Clémenti-ville','Blütenburg City','Petalipoli','Ciudad Petalia',,'橙华市'],encounters:[
		[183,,'surf',50],
		[184,,'surf',31],
		[283,,'surf',15],
		[284,,'surf',4],
		[118,,'fish_old',35],
		[129,,'fish_old',65],
		[118,,'fish_good',35],
		[129,,'fish_good',60],
		[341,,'fish_good',5],
		[341,,'fish_super',100]
	]
},{
	name:['Route 104',,,'Percorso 104','Ruta 104',,'104号道路'],encounters:[
		[263,,'grass',40],
		[265,,'grass',40],
		[263,,'horde',95],
		[441,,['grass','dexnav']],
		[519,,['grass','dexnav']],
		[540,,['grass','dexnav']],
		[278,,'surf',95],
		[279,,'surf',5],
		[129,,'fish_old',100],
		[129,,'fish_good',100],
		[129,,'fish_super',100],
		{group:'south',encounters:[
			[276,,'grass',5],
			[278,,'grass',15],
			[278,,'horde',5]
		]},
		{group:'north',encounters:[
			[276,,'grass',15],
			[278,,'grass',5],
			[276,,'horde',5]
		]}
	]
},{
	name:['Petalburg Woods','Bois Clémenti','Blütenburgwald','Bosco Petalo','Bosque Petalia',,'橙华森林'],mossRock:true,encounters:[
		[263,,'grass',30],
		[265,,'grass',30],
		[266,,'grass',10],
		[268,,'grass',10],
		[276,,'grass',5],
		[285,,'grass',10],
		[287,,'grass',5],
		[263,,'horde',35],
		[265,,'horde',60],
		[285,,'horde',5],
		[46,,['grass','dexnav']],
		[546,,['grass','dexnav']],
		[708,,['grass','dexnav']]
	]
},{
	name:['Rustboro City','Mérouville','Metarost City','Ferrugipoli','Ciudad Férrica',,'卡那兹市'],encounters:[
		[138,,'revive_fossil'],
		[140,,'revive_fossil'],
		[142,,'revive_fossil'],
		[345,,'revive_fossil'],
		[347,,'revive_fossil'],
		[408,,'revive_fossil'],
		[410,,'revive_fossil'],
		[564,,'revive_fossil'],
		[566,,'revive_fossil'],
		[696,,'revive_fossil'],
		[698,,'revive_fossil'],
		[296,,['trade',287]]
	]
},{
	name:['Route 116',,,'Percorso 116','Ruta 116',,'116号道路'],encounters:[
		[263,,'grass',30],
		[276,,'grass',15],
		[290,,'grass',20],
		[293,,'grass',30],
		[300,,'grass',5],
		[263,,'horde',60],
		[290,,'horde',35],
		[300,,'horde',5],
		[133,,['grass','dexnav']],
		[519,,['grass','dexnav']],
		[595,,['grass','dexnav']]
	]
},{
	name:['Rusturf Tunnel','Tunnel Mérazon','Metaflurtunnel','Tunnel Menferro','Túnel Fervergal',,'卡绿隧道'],encounters:[
		[293,,'cave',100],
		[293,,'horde',100],
		[74,,'rock_smash',100]
	]
},{
	name:['Route 105',,,'Percorso 105','Ruta 105',,'105号水路'],encounters:[
		[72,,'surf',65],
		[278,,'surf',30],
		[279,,'surf',5],
		[98,,['surf','dexnav']],
		[592,,['surf','dexnav']],
		[690,OR,['surf','dexnav']],
		[692,AS,['surf','dexnav']],
		[72,,'fish_old',35],
		[129,,'fish_old',65],
		[72,,'fish_good',35],
		[129,,'fish_good',60],
		[320,,'fish_good',5],
		[320,,'fish_super',100]
	]
},{
	name:['Route 106',,,'Percorso 106','Ruta 106',,'106号水路'],encounters:[
		[72,,'surf',65],
		[278,,'surf',30],
		[279,,'surf',5],
		[98,,['surf','dexnav']],
		[592,,['surf','dexnav']],
		[690,OR,['surf','dexnav']],
		[692,AS,['surf','dexnav']],
		[72,,'fish_old',35],
		[129,,'fish_old',65],
		[72,,'fish_good',35],
		[129,,'fish_good',60],
		[320,,'fish_good',5],
		[320,,'fish_super',100]
	]
},{
	name:['Dewford Town','Village Myokara','Faustauhaven','Bluruvia','Pueblo Azuliza',,'武斗镇'],encounters:[
		[72,,'surf',65],
		[278,,'surf',30],
		[279,,'surf',5],
		[72,,'fish_old',35],
		[129,,'fish_old',65],
		[72,,'fish_good',35],
		[129,,'fish_good',60],
		[320,,'fish_good',5],
		[320,,'fish_super',100]
	]
},{
	name:['Granite Cave','Grotte Granite','Granithöhle','Grotta Pietrosa','Cueva Granito',,'石之洞窟'],encounters:[
		[41,,'horde',60],
		[95,,['cave','dexnav']],
		[532,,['cave','dexnav']],
		[610,,['cave','dexnav']],
		[74,,'rock_smash',84],
		[299,,'rock_smash',16],
		{group:'1f',encounters:[
			[41,,'cave',40],
			[63,,'cave',15],
			[74,,'cave',5],
			[296,,'cave',40],
			[74,,['horde_with',296],35],
			[296,,['horde_with',74],35],
			[296,,'horde',5]
		]},
		{group:'b1f',encounters:[
			[41,,'cave',30],
			[63,,'cave',20],
			[296,,'cave',20],
			[304,,'cave',30],
			[304,,'horde',40]
		]},
		{group:'b2f',encounters:[
			[41,,'cave',30],
			[63,,'cave',20],
			[303,OR,'cave',20],
			[302,AS,'cave',20],
			[304,,'cave',30],
			[302,AS,'horde',5],
			[303,OR,'horde',5],
			[304,,'horde',35]
		]}
	]
},{
	name:['Route 107',,,'Percorso 107','Ruta 107',,'107号水路'],encounters:[
		[72,,'surf',65],
		[278,,'surf',30],
		[279,,'surf',5],
		[98,,['surf','dexnav']],
		[592,,['surf','dexnav']],
		[690,OR,['surf','dexnav']],
		[692,AS,['surf','dexnav']],
		[72,,'fish_old',35],
		[129,,'fish_old',65],
		[72,,'fish_good',35],
		[129,,'fish_good',60],
		[320,,'fish_good',5],
		[320,,'fish_super',100],
		[170,,'dive',50],
		[171,,'dive',15],
		[366,,'dive',30],
		[369,,'dive',5]
	]
},{
	name:['Route 108',,,'Percorso 108','Ruta 108',,'108号水路'],encounters:[
		[72,,'surf',65],
		[278,,'surf',30],
		[279,,'surf',5],
		[98,,['surf','dexnav']],
		[592,,['surf','dexnav']],
		[690,OR,['surf','dexnav']],
		[692,AS,['surf','dexnav']],
		[72,,'fish_old',35],
		[129,,'fish_old',65],
		[72,,'fish_good',35],
		[129,,'fish_good',60],
		[320,,'fish_good',5],
		[320,,'fish_super',100]
	]
},{
	name:['Route 109',,,'Percorso 109','Ruta 109',,'109号水路'],encounters:[
		[72,,'surf',65],
		[278,,'surf',30],
		[279,,'surf',5],
		[98,,['surf','dexnav']],
		[592,,['surf','dexnav']],
		[690,OR,['surf','dexnav']],
		[692,AS,['surf','dexnav']],
		[72,,'fish_old',35],
		[129,,'fish_old',65],
		[72,,'fish_good',35],
		[129,,'fish_good',60],
		[320,,'fish_good',5],
		[320,,'fish_super',100]
	]
},{
	name:['Slateport City','Poivressel','Graphitport City','Porto Selcepoli','Ciudad Portual',,'凯那市'],encounters:[
		[72,,'surf',65],
		[278,,'surf',30],
		[279,,'surf',5],
		[72,,'fish_old',35],
		[129,,'fish_old',65],
		[72,,'fish_good',35],
		[129,,'fish_good',60],
		[320,,'fish_good',5],
		[320,,'fish_super',100]
	]
},{
	name:['Contest Hall','Centre de Concours','Wettbewerbshalle','Arena delle Virtù','Auditorio',,'华丽大赛会场'],encounters:[
		[alternateForm(25,1),,'gift']
	]
},{
	name:['Route 110',,,'Percorso 110','Ruta 110',,'110号道路'],encounters:[
		[309,,'grass',40],
		[263,,'grass',10],
		[316,,'grass',10],
		[43,,'grass',10],
		[278,,'grass',10],
		[312,OR,'grass',16],
		[311,AS,'grass',16],
		[100,,'grass',4],
		[81,,'horde',60],
		[311,AS,'horde',35],
		[311,,['horde_with',312],5],
		[312,OR,'horde',35],
		[312,,['horde_with',311],5],
		[422,,['grass','dexnav']],
		[568,,['grass','dexnav']],
		[441,,['grass','dexnav']],
		[72,,'surf',60],
		[278,,'surf',35],
		[279,,'surf',5],
		[72,,'fish_old',35],
		[129,,'fish_old',65],
		[72,,'fish_good',35],
		[129,,'fish_good',60],
		[320,,'fish_good',5],
		[320,,'fish_super',100]
	]
},{
	name:['Route 117',,,'Percorso 117','Ruta 117',,'117号道路'],encounters:[
		[43,,'grass',10],
		[183,,'grass',15],
		[263,,'grass',30],
		[283,,'grass',1],
		[313,OR,'grass',4],
		[313,AS,'grass',20],
		[314,OR,'grass',20],
		[314,AS,'grass',4],
		[315,,'grass',20],
		[43,,['horde_with',263],60],
		[183,,'horde',5],
		[263,,['horde_with',43],60],
		[315,,'horde',35],
		[19,,['grass','dexnav']],
		[535,,['grass','dexnav']],
		[585,,['grass','dexnav']],
		[183,,'surf',50],
		[184,,'surf',31],
		[283,,'surf',15],
		[284,,'surf',4],
		[118,,'fish_old',35],
		[129,,'fish_old',65],
		[118,,'fish_good',35],
		[129,,'fish_good',60],
		[341,,'fish_good',5],
		[341,,'fish_super',95],
		[342,,'fish_super',5]
	]
},{
	name:['Route 111',,,'Percorso 111','Ruta 111',,'111号道路'],encounters:[
		{group:'south',encounters:[
			[74,,'rock_smash',100],
			[183,,'surf',50],
			[184,,'surf',31],
			[283,,'surf',15],
			[284,,'surf',4],
			[118,,'fish_old',35],
			[129,,'fish_old',65],
			[118,,'fish_good',35],
			[129,,'fish_good',60],
			[339,,'fish_good',5],
			[339,,'fish_super',100]
		]},
		{group:['Desert',,,,'Desierto',,'沙漠'],encounters:[
			[27,,'deep_sand',40],
			[328,,'deep_sand',20],
			[331,,'deep_sand',20],
			[343,,'deep_sand',20],
			[27,,'horde',100],
			[443,,['deep_sand','dexnav']],
			[551,,['deep_sand','dexnav']],
			[557,,['deep_sand','dexnav']]
		]}
	]
},{
	name:['Route 112',,,'Percorso 112','Ruta 112',,'112号道路'],encounters:[
		[66,,'horde',35],
		[322,,'horde',65],
		[77,,['grass','dexnav']],
		[236,,['grass','dexnav']],
		[539,AS,['grass','dexnav']],
		[538,OR,['grass','dexnav']],
		{group:'south',encounters:[
			[66,,'grass',40],
			[322,,'grass',60],
		]},
		{group:'north',encounters:[
			[66,,'grass',35],
			[322,,'grass',65]
		]}
	]
},{
	name:['Fiery Path','Chemin Ardent','Feuriger Pfad','Cammino Ardente','Senda Ígnea',,'热焰小径'],encounters:[
		[66,,'cave',5],
		[88,OR,'cave',5],
		[88,AS,'cave',30],
		[109,OR,'cave',30],
		[109,AS,'cave',5],
		[218,,'cave',10],
		[322,,'cave',40],
		[324,,'cave',10],
		[88,AS,'horde',35],
		[109,OR,'horde',35],
		[218,,'horde',5],
		[322,,'horde',60],
		[50,,['cave','dexnav']],
		[236,,['cave','dexnav']],
		[524,,['cave','dexnav']]
	]
},{
	name:['Route 113',,,'Percorso 113','Ruta 113',,'113号道路'],encounters:[
		[327,,'grass',60],
		[27,,'grass',35],
		[227,,'grass',5],
		[227,,'horde',5],
		[327,,'horde',95],
		[559,,['grass','dexnav']],
		[626,,['grass','dexnav']],
		[707,,['grass','dexnav']]
	]
},{
	name:['Route 114',,,'Percorso 114','Ruta 114',,'114号道路'],encounters:[
		[271,AS,'grass',40],
		[274,OR,'grass',40],
		[283,,'grass',1],
		[333,,'grass',40],
		[335,OR,'grass',19],
		[336,AS,'grass',19],
		[270,AS,['horde_with',333],35],
		[273,OR,'horde',35],
		[333,AS,['horde_with',270],35],
		[333,,'horde',65],
		[200,,['grass','dexnav']],
		[451,,['grass','dexnav']],
		[535,,['grass','dexnav']],
		[183,,'surf',50],
		[184,,'surf',31],
		[283,,'surf',15],
		[284,,'surf',4],
		[118,,'fish_old',35],
		[129,,'fish_old',65],
		[118,,'fish_good',35],
		[129,,'fish_good',60],
		[339,,'fish_good',5],
		[339,,'fish_super',100],
		[74,,'rock_smash',100]
	]
},{
	name:['Meteor Falls','Site Météore','Meteorfälle','Cascate Meteora','Cascada Meteoro',,'流星瀑布'],encounters:[
		[337,AS,'cave',25],
		[338,OR,'cave',25],
		[35,,['cave','dexnav']],
		[621,,['cave','dexnav']],
		[633,,['cave','dexnav']],
		[118,,'fish_old',35],
		[129,,'fish_old',65],
		[118,,'fish_good',35],
		[129,,'fish_good',60],
		[339,,'fish_good',5],
		{group:['1F Entrance',,,,'P1 Entrada',,'1F 入口'],encounters:[
			[41,,'cave',75],
			[41,,'horde',100],
			[41,,'surf',80],
			[42,,'surf',4],
			[338,OR,'surf',16],
			[337,AS,'surf',16],
			[339,,'fish_super',100]
		]},
		{group:['1F Back/B1F Entrance',,,,'P1 Trasera/S1 Entrada',,'1F 出口/B1F 入口'],encounters:[
			[42,,'cave',75],
			[41,,'horde',100],
			[42,,'surf',80],
			[338,OR,'surf',20],
			[337,AS,'surf',20],
			[339,,'fish_super',95],
			[340,,'fish_super',5]
		]},
		{group:['B1F Back',,,,'S1 Trasera',,'B1F 出口'],encounters:[
			[42,,'cave',40],
			[371,,'cave',35],
			[41,,'horde',95],
			[371,,'horde',5],
			[42,,'surf',80],
			[338,OR,'surf',20],
			[337,AS,'surf',20],
			[339,,'fish_super',95],
			[340,,'fish_super',5]
		]}
	]
},{
	name:['Route 115',,,'Percorso 115','Ruta 115',,'115号道路'],encounters:[
		[39,,'grass',10],
		[276,,'grass',40],
		[278,,'grass',10],
		[333,,'grass',40],
		[333,,'horde',100],
		[519,,['grass','dexnav']],
		[200,,['grass','dexnav']],
		[35,,['grass','dexnav']],
		[72,,'surf',65],
		[278,,'surf',30],
		[279,,'surf',5],
		[72,,'fish_old',35],
		[129,,'fish_old',65],
		[72,,'fish_good',35],
		[129,,'fish_good',60],
		[320,,'fish_good',5],
		[320,,'fish_super',100]
	]
},{
	name:['Jagged Pass','Sentier Sinuroc','Steilpass','Passo Selvaggio','Desfiladero',,'凹凸山道'],encounters:[
		[66,,'grass',40],
		[322,,'grass',40],
		[325,,'grass',20],
		[66,,'horde',65],
		[325,,'horde',35],
		[56,,['grass','dexnav']],
		[77,,['grass','dexnav']],
		[236,,['grass','dexnav']]
	]
},{
	name:['Lavaridge Town','Vermilava','Bad Lavastadt','Cuordilava','Pueblo Lavacalda',,'釜炎镇'],encounters:[
		[175,,'gift_egg'],
		[360,,'gift_egg'],
		[352,,'interact']
	]
},{
	name:['Route 118',,,'Percorso 118','Ruta 118',,'118号道路'],encounters:[
		[264,,'grass',40],
		[278,,'grass',15],
		[309,,'grass',40],
		[352,,'grass',5],
		[264,,'grass_tall',40],
		[279,,'grass_tall',15],
		[309,,'grass_tall',40],
		[352,,'grass_tall',5],
		[278,,['horde','grass'],35],
		[309,,['horde','grass'],60],
		[352,,['horde','grass'],5],
		[278,,['horde','grass_tall'],35],
		[309,,['horde','grass_tall'],60],
		[352,,['horde','grass_tall'],5],
		[20,,['grass','dexnav']],
		[190,,['grass','dexnav']],
		[404,,['grass','dexnav']],
		[20,,['grass_tall','dexnav']],
		[190,,['grass_tall','dexnav']],
		[404,,['grass_tall','dexnav']],
		[72,,'surf',65],
		[278,,'surf',30],
		[279,,'surf',5],
		[72,,'fish_old',35],
		[129,,'fish_old',65],
		[72,,'fish_good',35],
		[129,,'fish_good',60],
		[318,,'fish_good',5],
		[318,,'fish_super',95],
		[319,,'fish_super',5]
	]
},{
	name:['Route 119',,,'Percorso 119','Ruta 119',,'119号道路'],encounters:[
		[44,,'grass_tall',40],
		[264,,'grass_tall',40],
		[352,,'grass_tall',5],
		[357,,'grass_tall',15],
		[43,,'horde',100],
		[72,,'surf',65],
		[278,,'surf',30],
		[279,,'surf',5],
		[72,,'fish_old',35],
		[129,,'fish_old',60],
		[349,,'fish_old',5],
		[129,,'fish_good',60],
		[318,,'fish_good',35],
		[349,,'fish_good',5],
		[318,,'fish_super',60],
		[319,,'fish_super',35],
		[349,,'fish_super',5],
		[349,,['fish','feebas_tile'],100],
		[352,,'interact']
	]
},{
	name:['Weather Institute','Centre Météo','Klima-Institut','Istituto Meteo','Instituto Meteorológico',,'天气研究所'],encounters:[
		[351,,'gift']
	]
},{
	name:['Fortree City','Cimetronelle','Baumhausen City','Forestopoli','Ciudad Arborada',,'茵郁市'],encounters:[
		[300,,['trade',327]]
	]
},{
	name:['Route 120',,,'Percorso 120','Ruta 120',,'120号道路'],encounters:[
		[44,,'grass_tall',40],
		[264,,'grass_tall',40],
		[352,,'grass_tall',5],
		[357,,'grass_tall',10],
		[359,,'grass_tall',5],
		[43,,'horde',60],
		[183,,'horde',35],
		[352,,'horde',5],
		[184,,'surf',66],
		[283,,'surf',30],
		[284,,'surf',4],
		[129,,'fish_old',65],
		[129,,'fish_good',60],
		[339,,'fish_good',5],
		[339,,'fish_super',100],
		{group:'east',encounters:[
			[72,,'fish_old',35],
			[72,,'fish_good',35],
			[352,,'interact']
		]},
		{group:'west',encounters:[
			[118,,'fish_old',35],
			[118,,'fish_good',35]
		]}
	]
},{
	name:['Route 121',,,'Percorso 121','Ruta 121',,'121号道路'],encounters:[
		[44,,'grass',30],
		[264,,'grass',30],
		[279,,'grass',5],
		[352,,'grass',5],
		[353,,'grass',30],
		[44,,'grass_tall',30],
		[264,,'grass_tall',30],
		[279,,'grass_tall',5],
		[352,,'grass_tall',5],
		[353,,'grass_tall',30],
		[278,,['horde','grass'],35],
		[352,,['horde','grass'],5],
		[353,,['horde','grass'],60],
		[278,,['horde','grass_tall'],35],
		[352,,['horde','grass_tall'],5],
		[353,,['horde','grass_tall'],60],
		[97,,['grass','dexnav']],
		[190,,['grass','dexnav']],
		[605,,['grass','dexnav']]
	]
},{
	name:['Safari Zone','Parc Safari','Safari-Zone','Zona Safari','Zona Safari',,'狩猎地带'],encounters:[
		[44,,'grass',30],
		[54,,'grass',20],
		[84,,'grass',30],
		[44,,'grass_tall',30],
		[54,,'grass_tall',20],
		[84,,'grass_tall',30],
		[43,,'horde',35],
		[54,,'horde',5],
		[84,,'horde',60],
		[14,,['grass','dexnav']],
		[17,,['grass','dexnav']],
		[427,,['grass','dexnav']],
		[54,,'surf',100],
		[118,,'fish_old',35],
		[129,,'fish_old',65],
		[118,,'fish_good',35],
		[129,,'fish_good',65],
		[119,,'fish_super',100],
		{group:['Area 1',,,,'Área 1',,'区域 1'],encounters:[
			[25,,'grass',20],
			[203,,'grass_tall',20]
		]},
		{group:['Area 2',,,,'Área 2',,'区域 2'],encounters:[
			[178,,'grass',20],
			[202,,'grass_tall',20]
		]},
		{group:['Area 3',,,,'Área 3',,'区域 3'],encounters:[
			[111,,'grass',20],
			[214,,'grass_tall',20]
		]},
		{group:['Area 4',,,,'Área 4',,'区域 4'],encounters:[
			[232,,'grass',20],
			[127,,'grass_tall',20]
		]}
	]
},{
	name:['Route 122',,,'Percorso 122','Ruta 122',,'122号水路'],encounters:[
		[72,,'surf',65],
		[278,,'surf',30],
		[279,,'surf',5],
		[456,,['surf','dexnav']],
		[592,,['surf','dexnav']],
		[594,,['surf','dexnav']],
		[72,,'fish_old',35],
		[129,,'fish_old',65],
		[72,,'fish_good',35],
		[129,,'fish_good',60],
		[320,,'fish_good',5],
		[320,,'fish_super',100]
	]
},{
	name:['Mt. Pyre','Mont Mémoria','Pyroberg','Monte Pira','Monte Pírico',,'送神山'],encounters:[
		{group:'interior',encounters:[
			[353,,'walk',65],
			[355,,'walk',35],
			[353,,'horde',100]
		]},
		{group:'exterior',encounters:[
			[37,,'grass',15],
			[278,,'grass',5],
			[307,,'grass',40],
			[353,,'grass',40],
			[37,,'horde',5],
			[307,,'horde',35],
			[353,,'horde',60],
			[58,,['grass','dexnav']],
			[436,,['grass','dexnav']],
			[605,,['grass','dexnav']]
		]},
		{group:'summit',encounters:[
			[37,,'grass',15],
			[307,,'grass',40],
			[353,,'grass',40],
			[358,,'grass',5],
			[37,,'horde',5],
			[307,,'horde',35],
			[353,,'horde',60],
			[58,,['grass','dexnav']],
			[436,,['grass','dexnav']],
			[605,,['grass','dexnav']]
		]}
	]
},{
	name:['Route 123',,,'Percorso 123','Ruta 123',,'123号道路'],encounters:[
		[44,,'grass_tall',30],
		[264,,'grass_tall',30],
		[279,,'grass_tall',5],
		[352,,'grass_tall',5],
		[353,,'grass_tall',30],
		[278,,'horde',35],
		[352,,'horde',5],
		[353,,'horde',60],
		[183,,'surf',50],
		[184,,'surf',16],
		[283,,'surf',30],
		[284,,'surf',4],
		[118,,'fish_old',35],
		[129,,'fish_old',65],
		[118,,'fish_good',35],
		[129,,'fish_good',60],
		[341,,'fish_good',5],
		[341,,'fish_super',95],
		[342,,'fish_super',5]
	]
},{
	name:['Lilycove City','Nénucrique','Seegrasulb','Porto Alghepoli','Ciudad Calagua',,'水静市'],encounters:[
		[75,,'rock_smash',100],
		[72,,'surf',65],
		[278,,'surf',30],
		[279,,'surf',5],
		[72,,'fish_old',35],
		[129,,'fish_old',65],
		[72,,'fish_good',35],
		[129,,'fish_good',60],
		[320,,'fish_good',5],
		[120,,'fish_super',5],
		[320,,'fish_super',95]
	]
},{
	name:['Team Aqua/Magma Hideout','Planque Aqua/Magma','Team Aquas/Magmas Versteck','Rifugio Idro/Magma','Guarida Aqua/Magma',,'熔岩队本部'],encounters:[
		[72,,'surf',100],
		[72,,'fish_old',35],
		[129,,'fish_old',65],
		[72,,'fish_good',35],
		[129,,'fish_good',60],
		[320,,'fish_good',5],
		[120,,'fish_super',5],
		[320,,'fish_super',95],
		[101,,'interact']
	]
},{
	name:['Route 124',,,'Percorso 124','Ruta 124',,'124号水路'],encounters:[
		[72,,'surf',50],
		[73,,'surf',15],
		[279,,'surf',35],
		[456,,['surf','dexnav']],
		[592,,['surf','dexnav']],
		[594,,['surf','dexnav']],
		[72,,'fish_old',35],
		[129,,'fish_old',65],
		[72,,'fish_good',35],
		[129,,'fish_good',60],
		[320,,'fish_good',5],
		[320,,'fish_super',100],
		[170,,'dive',50],
		[171,,'dive',15],
		[366,,'dive',30],
		[369,,'dive',5]
	]
},{
	name:['Mossdeep City','Algatia','Moosbach City','Verdeazzupoli','Ciudad Algaria',,'绿岭市'],encounters:[
		[72,,'surf',50],
		[73,,'surf',15],
		[279,,'surf',35],
		[72,,'fish_old',35],
		[129,,'fish_old',65],
		[72,,'fish_good',35],
		[129,,'fish_good',60],
		[320,,'fish_good',5],
		[320,,'fish_super',100],
		[374,,'gift'],
		[352,,'interact']
	]
},{
	name:['Route 125',,,'Percorso 125','Ruta 125',,'125号水路'],encounters:[
		[72,,'surf',50],
		[73,,'surf',15],
		[279,,'surf',35],
		[86,,['surf','dexnav']],
		[456,,['surf','dexnav']],
		[592,,['surf','dexnav']],
		[72,,'fish_old',35],
		[129,,'fish_old',65],
		[72,,'fish_good',35],
		[129,,'fish_good',60],
		[320,,'fish_good',5],
		[320,,'fish_super',100]
	]
},{
	name:['Shoal Cave','Grotte Tréfonds','Küstenhöhle','Grotta Ondosa','Cueva Cardumen',,'浅滩洞穴'],iceRock:true,encounters:[
		{group:['Main cave',,,,'Cueva principal',,'主洞穴'],encounters:[
			[42,,'cave',40],
			[363,,'cave',20],
			[87,,['cave','dexnav']],
			[225,,['cave','dexnav']],
			[613,,['cave','dexnav']],
			{group:['High tide',,,,'Marea alta',,'满潮'],encounters:[
				[364,,'cave',40],
				[41,,'horde',40],
				[363,,'horde',60],
				[42,,'surf',35],
				[72,,'surf',50],
				[73,,'surf',15],
				[72,,'fish_old',35],
				[129,,'fish_old',65],
				[72,,'fish_good',35],
				[129,,'fish_good',60],
				[320,,'fish_good',5],
				[320,,'fish_super',100]
			]},
			{group:['Low tide',,,,'Marea baja',,'干潮'],encounters:[
				[361,,'cave',5],
				[364,,'cave',35],
				[41,,'horde',60],
				[363,,'horde',40],
				[75,,'rock_smash',100]
			]},
		]},
		{group:['Ice room',,,,'Sala helada',,'冰之房间'],encounters:[
			[42,,'cave',20],
			[361,,'cave',40],
			[363,,'cave',10],
			[364,,'cave',30],
			[41,,'horde',60],
			[361,,'horde',5],
			[363,,'horde',35]
		]}
	]
},{
	name:['Route 127',,,'Percorso 127','Ruta 127',,'127号水路'],encounters:[
		[72,,'surf',50],
		[73,,'surf',15],
		[279,,'surf',35],
		[456,,['surf','dexnav']],
		[592,,['surf','dexnav']],
		[594,,['surf','dexnav']],
		[72,,'fish_old',35],
		[129,,'fish_old',65],
		[72,,'fish_good',35],
		[129,,'fish_good',60],
		[320,,'fish_good',5],
		[320,,'fish_super',100]
	]
},{
	name:['Route 128',,,'Percorso 128','Ruta 128',,'128号水路'],encounters:[
		[72,,'surf',50],
		[73,,'surf',15],
		[279,,'surf',35],
		[456,,['surf','dexnav']],
		[592,,['surf','dexnav']],
		[594,,['surf','dexnav']],
		[72,,'fish_old',35],
		[129,,'fish_old',65],
		[129,,'fish_good',60],
		[320,,'fish_good',5],
		[370,,'fish_good',35],
		[222,,'fish_super',5],
		[320,,'fish_super',35],
		[370,,'fish_super',60],
		[170,,'dive',50],
		[171,,'dive',15],
		[222,,'dive',4],
		[366,,'dive',30],
		[369,,'dive',1]
	]
},{
	name:['Seafloor Cavern','Caverne Fondmer','Tiefseehöhle','Antro Abissale','Caverna Abisal',,'海底洞窟'],encounters:[
		{group:'entrance',encounters:[
			[42,,'surf',55],
			[73,,'surf',45],
			[72,,'fish_old',35],
			[129,,'fish_old',65],
			[72,,'fish_good',35],
			[129,,'fish_good',60],
			[320,,'fish_good',5],
			[320,,'fish_super',100]
		]},
		{group:['Rooms 1/2/4',,,'Salas 1/2/4',,'房间 1/2/4'],encounters:[
			[42,,'cave',100],
			[41,,'horde',100],
			[75,,'rock_smash',100]
		]},
		{group:['Rooms 5/6',,,,'Salas 5/6',,'房间 5/6'],encounters:[
			[42,,'cave',100],
			[41,,'horde',100],
			[42,,'surf',35],
			[73,,'surf',65],
			[72,,'fish_old',35],
			[129,,'fish_old',65],
			[72,,'fish_good',35],
			[129,,'fish_good',60],
			[320,,'fish_good',5],
			[320,,'fish_super',100]
		]},
		{group:['Room 3/7/8/9',,,,'Salas 3/7/8/9',,'房间 3/7/8/9'],encounters:[
			[42,,'cave',100],
			[41,,'horde',100]
		]}
	]
},{
	name:['Route 126',,,'Percorso 126','Ruta 126',,'126号水路'],encounters:[
		[72,,'surf',50],
		[73,,'surf',15],
		[279,,'surf',35],
		[456,,['surf','dexnav']],
		[592,,['surf','dexnav']],
		[594,,['surf','dexnav']],
		[72,,'fish_old',35],
		[129,,'fish_old',65],
		[72,,'fish_good',35],
		[129,,'fish_good',60],
		[320,,'fish_good',5],
		[320,,'fish_super',100],
		[170,,'dive',50],
		[171,,'dive',15],
		[366,,'dive',30],
		[369,,'dive',5]
	]
},{
	name:['Sootopolis City','Atalanopolis','Xeneroville','Ceneride','Arrecípolis',,'琉璃市'],encounters:[
		[129,,'surf',100],
		[129,,'fish_old',100],
		[129,,'fish_good',100],
		[129,,'fish_super',95],
		[130,,'fish_super',5]
	]
},{
	name:['Cave of Origin','Grotte Origine','Urzeithöhle','Grotta dei Tempi','Cueva Ancestral',,'觉醒祠堂'],encounters:[
		[42,,'cave',69],
		[302,AS,'cave',31],
		[303,OR,'cave',31],
		[41,,'horde',100],
		[382,AS,'interact'],
		[383,OR,'interact']
	]
},{
	name:['New Mauville','New Lavandia','Neu Malvenfroh','Ciclanova','Malvalanova',,'新紫堇'],magneticField:true,encounters:[
		[81,,'cave',50],
		[100,,'cave',50],
		[81,,'horde',35],
		[100,,'horde',65],
		[100,,'interact']
	]
},{
	name:['Route 129',,,'Percorso 129','Ruta 129',,'129号水路'],encounters:[
		[72,,'surf',50],
		[73,,'surf',15],
		[279,,'surf',35],
		[456,,['surf','dexnav']],
		[592,,['surf','dexnav']],
		[594,,['surf','dexnav']],
		[72,,'fish_old',35],
		[129,,'fish_old',65],
		[72,,'fish_good',35],
		[129,,'fish_good',60],
		[320,,'fish_good',5],
		[320,,'fish_super',100],
		[170,,'dive',50],
		[171,,'dive',15],
		[366,,'dive',30],
		[369,,'dive',5]
	]
},{
	name:['Route 130',,,'Percorso 130','Ruta 130',,'130号水路'],encounters:[
		[72,,'surf',50],
		[73,,'surf',15],
		[279,,'surf',35],
		[456,,['surf','dexnav']],
		[592,,['surf','dexnav']],
		[594,,['surf','dexnav']],
		[72,,'fish_old',35],
		[129,,'fish_old',65],
		[72,,'fish_good',35],
		[129,,'fish_good',60],
		[320,,'fish_good',5],
		[116,,'fish_super',35],
		[117,,'fish_super',5],
		[320,,'fish_super',60],
		[170,,'dive',50],
		[171,,'dive',15],
		[366,,'dive',30],
		[369,,'dive',5]
	]
},{
	name:['Route 131',,,'Percorso 131','Ruta 131',,'131号水路'],encounters:[
		[72,,'surf',50],
		[73,,'surf',15],
		[279,,'surf',35],
		[456,,['surf','dexnav']],
		[592,,['surf','dexnav']],
		[594,,['surf','dexnav']],
		[72,,'fish_old',35],
		[129,,'fish_old',65],
		[72,,'fish_good',35],
		[129,,'fish_good',60],
		[320,,'fish_good',5],
		[116,,'fish_super',35],
		[117,,'fish_super',5],
		[320,,'fish_super',60]
	]
},{
	name:['Pacifidlog Town','Pacifiville','Floßbrunn','Orocea','Pueblo Oromar',,'暮水镇'],encounters:[
		[72,,'surf',50],
		[73,,'surf',15],
		[279,,'surf',35],
		[129,,'fish_old',65],
		[72,,'fish_old',35],
		[129,,'fish_good',60],
		[72,,'fish_good',35],
		[320,,'fish_good',5],
		[320,,'fish_super',100],
		[222,,['trade',182]]
	]
},{
	name:['Route 132',,,'Percorso 132','Ruta 132',,'132号水路'],encounters:[
		[72,,'surf',50],
		[73,,'surf',15],
		[279,,'surf',35],
		[456,,['surf','dexnav']],
		[592,,['surf','dexnav']],
		[594,,['surf','dexnav']],
		[72,,'fish_old',35],
		[129,,'fish_old',65],
		[72,,'fish_good',35],
		[129,,'fish_good',60],
		[320,,'fish_good',5],
		[116,,'fish_super',35],
		[117,,'fish_super',5],
		[320,,'fish_super',60]
	]
},{
	name:['Route 133',,,'Percorso 133','Ruta 133',,'133号水路'],encounters:[
		[72,,'surf',50],
		[73,,'surf',15],
		[279,,'surf',35],
		[456,,['surf','dexnav']],
		[592,,['surf','dexnav']],
		[594,,['surf','dexnav']],
		[72,,'fish_old',35],
		[129,,'fish_old',65],
		[72,,'fish_good',35],
		[129,,'fish_good',60],
		[320,,'fish_good',5],
		[116,,'fish_super',35],
		[117,,'fish_super',5],
		[320,,'fish_super',60]
	]
},{
	name:['Route 134',,,'Percorso 134','Ruta 134',,'134号水路'],encounters:[
		[72,,'surf',65],
		[278,,'surf',30],
		[279,,'surf',5],
		[456,,['surf','dexnav']],
		[592,,['surf','dexnav']],
		[594,,['surf','dexnav']],
		[72,,'fish_old',35],
		[129,,'fish_old',65],
		[72,,'fish_good',35],
		[129,,'fish_good',60],
		[320,,'fish_good',5],
		[116,,'fish_super',35],
		[117,,'fish_super',5],
		[320,,'fish_super',60]
	]
},{
	name:['Sealed Chamber','Sanctuaire','Siegelkammer','Sala Incisa','Cámara Sellada',,'布告石室'],encounters:[
		[41,,'surf',30],
		[42,,'surf',5],
		[72,,'surf',65],
		[72,,'fish_old',35],
		[129,,'fish_old',65],
		[72,,'fish_good',35],
		[129,,'fish_good',60],
		[320,,'fish_good',5],
		[116,,'fish_super',40],
		[320,,'fish_super',60]
	]
},{
	name:['Island Cave','Grotte de l\'Îlot','Inselhöhle','Grotta Insulare','Cueva Insular',,'小岛横穴'],encounters:[
		[378,,'interact'],
		[486,,'interact']
	]
},{
	name:['Desert Ruins','Ruines Désert','Wüstenruine','Rovine Sabbiose','Ruinas del Desierto',,'沙漠遗迹'],encounters:[
		[377,,'interact']
	]
},{
	name:['Ancient Tomb','Tombeau Antique','Grabmal','Tomba Antica','Tumba Antigua',,'古代坟墓'],encounters:[
		[379,,'interact']
	]
},{
	name:['Sea Mauville','Lavandia Sea','Seewoge Malvenfroh','Ciclamare','Malvamar',,'海紫堇'],encounters:[
		[72,,'fish_old',35],
		[129,,'fish_old',65],
		[72,,'fish_good',35],
		[129,,'fish_good',60],
		[320,,'fish_good',5],
		[320,,'fish_super',100],
		{group:'exterior',encounters:[
			[72,,'surf',65],
			[278,,'surf',34],
			[279,,'surf',1],
			[250,OR,'interact']
		]},
		{group:'interior',encounters:[
			[72,,'surf',100],
			[442,,'interact'],
			[249,AS,'interact']
		]}
	]
},{
	name:['Scorched Slab','Grotte Zénith','Sonnengrotte','Grottino Solare','Gruta Solar',,'天旱石窟'],encounters:[
		[42,,'cave',100],
		[41,,'surf',50],
		[42,,'surf',50],
		[118,,'fish_old',35],
		[129,,'fish_old',65],
		[118,,'fish_good',35],
		[129,,'fish_good',60],
		[339,,'fish_good',5],
		[339,,'fish_super',100],
		{group:['B1F-B3F',,,,'S1-S3'],encounters:[
			[41,,'horde',100],
		]},
		{group:'b3f',encounters:[
			[485,,'interact']
		]}
	]
},{
	name:['Soaring in the sky','Grand Envol','Überflieger','Ipervolo','Ultravuelo',,'天空'],encounters:[
		[276,,'flocks'],
		[278,,'flocks'],
		[279,,'flocks'],
		[333,,'flocks'],
		{group:'rare',encounters:[
			[198,,'flocks'],
			[425,,'flocks'],
			[628,,'flocks'],
		]},
		{group:['Dimensional Rifts',,,,'Brechas dimensionales',,'空间裂缝'],encounters:[
			[483,AS,'interact'],
			[484,OR,'interact'],
			[487,,'interact']
		]},
		{group:['Storm Clouds',,,,'Nubes tormentosas',,'暴风云'],encounters:[
			[641,OR,'interact'],
			[642,AS,'interact'],
			[645,,'interact']
		]}
	]
},{
	name:['Mirage Caves','Grotte Mirage','Wunderhöhlen','Grotta Miraggio','Cueva Espejismo',,'幻影洞窟'],encounters:[
		{group:['South of Route 107',,,,'Sur de Ruta 107',,'107号水路的南边'],encounters:[
			[201,,'cave',100]
		]},
		{group:['North of Fallarbor Town',,,,'Norte de Pueblo Pardal',,'秋叶镇的北边'],encounters:[
			[79,,'cave',40],
			[602,,'cave',60]
		]},
		{group:['West of Route 115',,,,'Oeste de Ruta 115',,'115号道路西边'],encounters:[
			[599,,'cave',60],
			[602,,'cave',40],
			[75,,'rock_smash',85],
			[525,,'rock_smash',15]
		]},
		{group:['North of Fortree City',,,,'Norte de Ciudad Arborada',,'茵郁市北边'],encounters:[
			[95,,'cave',10],
			[530,,'cave',30],
			[599,,'cave',30],
			[602,,'cave',30],
			[75,,'rock_smash',85],
			[525,,'rock_smash',15]
		]},
		{group:['North of Route 124',,,,'Norte de Ruta 124',,'124号水路北边'],encounters:[
			[563,,'cave',40],
			[599,,'cave',60],
			[75,,'rock_smash',85],
			[525,,'rock_smash',15]
		]},
		{group:['Southeast of Route 129',,,,'Sureste de Ruta 129',,'129号水路东南边'],encounters:[
			[95,,'cave',40],
			[602,,'cave',60],
			[75,,'rock_smash',85],
			[525,,'rock_smash',15]
		]},
		{group:['South of Route 131',,,,'Sur de Ruta 131',,'131号水路南边'],encounters:[
			[79,,'cave',10],
			[563,,'cave',30],
			[602,,'cave',60]
		]},
		{group:['North of Route 132',,,,'Norte de Ruta 132',,'132号水路北边'],encounters:[
			[132,,'cave',40],
			[530,,'cave',30],
			[602,,'cave',30]
		]}
	]
},{
	name:['Mirage Forests','Forêt Mirage','Wunderwald','Selva Miraggio','Bosque Espejismo',,'幻影森林'],encounters:[
		{group:['West of Route 105',,,,'Oeste de Ruta 105',,'105号水路西边'],encounters:[
			[205,,'grass',60],
			[440,,'grass',40],
			[75,,'rock_smash',100]
		]},
		{group:['South of Route 109',,,,'Sur de Ruta 109',,'109号水路南边'],encounters:[
			[191,,'grass',10],
			[531,,'grass',90]
		]},
		{group:['North of Route 111',,,,'Norte de Ruta 111',,'111号道路北边'],encounters:[
			[402,,'grass',60],
			[636,,'grass',40]
		]},
		{group:['West of Route 114',,,,'Oeste de Ruta 114',,'114号道路西边'],encounters:[
			[114,,'grass',30],
			[191,,'grass',30],
			[432,,'grass',30],
			[548,,'grass',10]
		]},
		{group:['North of Lilycove City',,,,'Norte de Ciudad Calagua',,'水静市北边'],encounters:[
			[114,,'grass',30],
			[191,,'grass',30],
			[421,,'grass',10],
			[432,,'grass',30]
		]},
		{group:['North of Route 124',,,,'Norte de Ruta 124',,'124号水路北边'],encounters:[
			[37,,'grass',10],
			[114,,'grass',30],
			[191,,'grass',30],
			[432,,'grass',30]
		]},
		{group:['East of Mossdeep City',,,,'Este de Ciudad Algaria',,'绿岭市东边'],encounters:[
			[114,,'grass',30],
			[191,,'grass',30],
			[431,,'grass',30],
			[572,,'grass',10]
		]},
		{group:['South of Route 132',,,,'Sur de Ruta 132',,'132号水路南边'],encounters:[
			[191,,'grass',60],
			[531,,'grass',10],
			[548,,'grass',30]
		]}
	]
},{
	name:['Mirage Islands','Ȋle Mirage','Wundereilande','Isola Miraggio','Isla Espejismo',,'幻影岛屿'],encounters:[
		{group:['West of Route 104',,,,'Oeste de Ruta 104',,'104号道路西边'],encounters:[
			[49,,'grass',30],
			[178,,'grass',30],
			[523,,'grass',30],
			[555,,'grass',10]
		]},
		{group:['West of Dewford Town',,,,'Oeste de Pueblo Azuliza',,'武斗镇西边'],encounters:[
			[49,,'grass',30],
			[114,,'grass',10],
			[178,,'grass',30],
			[523,,'grass',30]
		]},
		{group:['North of Route 113',,,,'Norte de Ruta 113',,'113号道路北边'],encounters:[
			[555,,'grass',60],
			[636,,'grass',40]
		]},
		{group:['North of Route 124',,,,'Norte de Ruta 124',,'124号水路北边'],encounters:[
			[49,,'grass',30],
			[53,,'grass',10],
			[178,,'grass',30],
			[523,,'grass',30]
		]},
		{group:['North of Route 125',,,,'Norte de Ruta 125',,'125号水路北边'],encounters:[
			[137,,'grass',40],
			[432,,'grass',60]
		]},
		{group:['South of Pacifidlog Town',,,,'Sur de Pueblo Oromar',,'暮水镇南边'],encounters:[
			[178,,'grass',10],
			[531,,'grass',90],
			[75,,'rock_smash',85],
			[688,,'rock_smash',15]
		]},
		{group:['South of Route 132',,,,'Sur de Ruta 132',,'132号水路南边'],encounters:[
			[132,,'grass',40],
			[517,,'grass',60]
		]},
		{group:['South of Route 134',,,,'Sur de Ruta 134',,'134号水路南边'],encounters:[
			[49,,'grass',30],
			[178,,'grass',30],
			[523,,'grass',30],
			[556,,'grass',10],
			[75,,'rock_smash',85],
			[688,,'rock_smash',15]
		]}
	]
},{
	name:['Mirage Mountains','Mont Mirage','Wunderberg','Monte Miraggio','Monte Espejismo',,'幻影山脉'],encounters:[
		{group:['West of Route 104',,,,'Oeste de Ruta 104',,'104号道路西边'],encounters:[
			[205,,'grass',30],
			[232,,'grass',30],
			[234,,'grass',10],
			[402,,'grass',30]
		]},
		{group:['North of Lilycove City',,,,'Norte de Ciudad Calagua',,'水静市北边'],encounters:[
			[205,,'grass',30],
			[232,,'grass',30],
			[402,,'grass',30],
			[627,,'grass',10]
		]},
		{group:['North of Route 125',,,,'Norte de Ruta 125',,'125号水路北边'],encounters:[
			[114,,'grass',10],
			[440,,'grass',30],
			[531,,'grass',60],
			[75,,'rock_smash',85],
			[558,,'rock_smash',15]
		]},
		{group:['Northeast of Route 125',,,,'Noreste de Ruta 125',,'125号水路东北边'],encounters:[
			[205,,'grass',30],
			[232,,'grass',30],
			[402,,'grass',30],
			[629,,'grass',10]
		]},
		{group:['East of Route 125',,,,'Este de Ruta 125',,'125号水路东边'],encounters:[
			[240,,'grass',40],
			[555,,'grass',60]
		]},
		{group:['Southeast of Route 129',,,,'Sureste de Ruta 129',,'129号水路东南边'],encounters:[
			[137,,'grass',10],
			[178,,'grass',60],
			[517,,'grass',30],
			[75,,'rock_smash',85],
			[558,,'rock_smash',15]
		]},
		{group:['South of Route 129',,,,'Sur de Ruta 129',,'129号水路南边'],encounters:[
			[239,,'grass',40],
			[523,,'grass',60]
		]},
		{group:['South of Route 131',,,,'Sur de Ruta 131',,'131号水路南边'],encounters:[
			[203,,'grass',10],
			[205,,'grass',30],
			[232,,'grass',30],
			[402,,'grass',30]
		]}
	]
},{
	name:['Ever Grande City','Eternara','Prachtopolis City','Iridopoli','Ciudad Colosalia',,'彩幽市'],encounters:[
		[72,,'surf',50],
		[73,,'surf',15],
		[279,,'surf',35],
		[72,,'fish_old',35],
		[129,,'fish_old',65],
		[129,,'fish_good',60],
		[320,,'fish_good',5],
		[370,,'fish_good',35],
		[222,,'fish_super',5],
		[320,,'fish_super',35],
		[370,,'fish_super',60]
	]
},{
	name:['Victory Road','Route Victoire','Siegesstraße','Via Vittoria','Calle Victoria',,'冠军之路'],encounters:[
		[129,,'fish_old',65],
		[129,,'fish_good',60],
		{group:['Entrance, 1F and B1F',,'入口、1F、B1F'],encounters:[
			[42,,'cave',20],
			[294,,'cave',20],
			[297,,'cave',15],
			[302,AS,'cave',10],
			[303,OR,'cave',10],
			[305,,'cave',20],
			[308,,'cave',15],
			[41,,'horde',60],
			[294,,'horde',5],
			[304,,'horde',35],
			[42,,'surf',35],
			[72,,'surf',50],
			[73,,'surf',15],
			[72,,'fish_old',35],
			[320,,'fish_good',5],
			[370,,'fish_good',35],
			[320,,'fish_super',40],
			[370,,'fish_super',60]
		]},
		{group:'2f',encounters:[
			[42,,'surf',100],
			[118,,'fish_old',35],
			[118,,'fish_good',35],
			[339,,'fish_good',5],
			[339,,'fish_super',100]
		]}
	]
},{
	name:['Mossdeep Space Center','Centre Spatial d’Algatia','Raumfahrtzentrum von Moosbach','Centro Spaziale di Verdeazzupoli','Centro Espacial de Algaria',,'绿岭宇宙中心'],encounters:[
		[352,,'interact']
	]
},{
	name:['Sky Pillar','Pilier Céleste','Himmelturm','Torre dei Cieli','Pilar Celeste',,'天空之柱'],encounters:[
		[42,,'walk',30],
		[168,,'walk',30],
		[302,AS,'walk',10],
		[303,OR,'walk',10],
		[344,,'walk',30],
		[42,,'horde',60],
		[168,,'horde',35],
		[333,,'horde',5],
		[384,,'interact'],
		[386,,'interact']
	]
},{
	name:['Battle Resort','Atoll de Combat','Kampfresort','Resort Lotta','Resort Batalla',,'对战名胜区'],encounters:[
		[73,,'surf',50],
		[226,,'surf',1],
		[279,,'surf',19],
		[458,,'surf',30],
		[129,,'fish_old',65],
		[72,,'fish_old',35],
		[129,,'fish_good',60],
		[72,,'fish_good',35],
		[223,,'fish_good',5],
		[223,,'fish_super',95],
		[224,,'fish_super',5],
		[319,,'gift'],
		[323,,'gift']
	]
},{
	name:['Crescent Isle','Île de l\'Arc','Sichelinsel','Isola Arcodiluna','Isla Creciente',,'弓形之島'],encounters:[
		[488,,'interact']
	]
},{
	name:['Fabled Cave','Grotte Évanescente','Rätselhafte Höhle','Grotta Sfuggente','Cueva Incierta',,'朦胧洞窟'],encounters:[
		[643,OR,'interact'],
		[644,AS,'interact']
	]
},{
	name:['Gnarled Den','Gouffre Informe','Höhle der Spaltung','Fossa Informe','Boquete Irregular',,'歪曲洞穴'],encounters:[
		[646,,'interact']
	]
},{
	name:['Nameless Cavern','Grotte Oubliée','Unerforschte Höhle','Caverna Ignota','Cueva Ignota',,'未知洞窟'],encounters:[
		[480,,'interact'],
		[481,,'interact'],
		[482,,'interact']
	]
},{
	name:['Pathless Plain','Plaine Sans Nom','Namenlose Ebene','Piana Senza Nome','Llanura Sinnombre',,'无名平原'],encounters:[
		[638,,['interact','sunday','wednesday','friday']],
		[639,,['interact','tuesday','saturday']],
		[640,,['interact','monday','thursday']]
	]
},{
	name:['Trackless Forest','Forêt Impénétrable','Wilder Wald','Foresta Vergine','Bosque Virgen',,'原始森林'],encounters:[
		[243,,'interact'],
		[244,,'interact'],
		[245,,'interact']
	]
},{
	name:['Special Demo Version (Japan)',,,,'Demo Especial (Japón)',,'特别体验版(日版)'],encounters:[
		[208,,'gift']
	]
},{
	name:['Special Demo Version',,,,'Demo Especial',,'特别体验版'],encounters:[
		[362,,'gift']
	]
}
];