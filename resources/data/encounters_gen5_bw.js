const B=1<<0;
const W=1<<1;

const LOCATIONS=[
{
	name:['Nuvema Town','Renouet','Avenitia','Soffiolieve','Pueblo Arcilla'],encounters:[
		[495,,'starter'],
		[498,,'starter'],
		[501,,'starter']
	]
},{
	name:['Route 1',,,'Percorso 1','Ruta 1'],encounters:[
		[504,,'grass',50],
		[506,,'grass',50],
		[505,,'grass_dark',36],
		[507,,'grass_dark',39],
		[559,,'grass_dark',25],
		[531,,'grass_rustling',100],
		[550,,'surf',100],
		[550,,'surf_special',100],
		[349,,'fish',5],
		[550,,'fish',95],
		[349,,'fish_special',60],
		[350,,'fish_special',5],
		[550,,'fish_special',35],
		[83,,'swarm',40]
	]
},{
	name:['Route 2',,,'Percorso 2','Ruta 2'],encounters:[
		[504,,'grass',40],
		[506,,'grass',40],
		[509,,'grass',20],
		[531,,'grass_rustling',100],
		[360,,'swarm',40]
	]
},{
	name:['Striaton City','Ogoesse','Orion City','Levantopoli','Ciudad Gres'],encounters:[
		[550,,'surf',100],
		[550,,'surf_special',100],
		[118,,'fish',70],
		[550,,'fish',30],
		[118,,'fish_special',60],
		[119,,'fish_special',10],
		[550,,'fish_special',30]
	]
},{
	name:['Dreamyard','Vestiges du Rêve','Traumbrache','Cantiere dei Sogni','Solar de los Sueños'],encounters:[
		{group:['Ruins',,,,'Ruinas'],encounters:[
			[504,,'grass',40],
			[509,,'grass',40],
			[517,,'grass',20],
			[20,,'grass_dark',10],
			[49,,'grass_dark',10],
			[166,,'grass_dark',10],
			[168,,'grass_dark',10],
			[402,,'grass_dark',10],
			[505,,'grass_dark',20],
			[510,,'grass_dark',20],
			[517,,'grass_dark',10],
			[518,,'grass_rustling',5],
			[531,,'grass_rustling',95],
			[511,,'gift'],
			[513,,'gift'],
			[515,,'gift']
		]},
		{group:'basement',encounters:[
			[20,,'grass_dark',35],
			[166,,'grass_dark',5],
			[168,,'grass_dark',5],
			[402,,'grass_dark',35],
			[517,,'grass_dark',20],
			[518,,['interact','friday']]
		]}
	]
},{
	name:['Route 3',,,'Percorso 3','Ruta 3'],encounters:[
		[504,,'grass',20],
		[506,,'grass',10],
		[509,,'grass',10],
		[519,,'grass',40],
		[522,,'grass',20],
		[504,,'grass_dark',20],
		[506,,'grass_dark',10],
		[509,,'grass_dark',10],
		[519,,'grass_dark',40],
		[522,,'grass_dark',20],
		[531,,'grass_rustling',100],
		[550,,'surf',100],
		[550,,'surf_special',100],
		[118,,'fish',70],
		[550,,'fish',30],
		[118,,'fish_special',60],
		[119,,'fish_special',10],
		[550,,'fish_special',30],
		[313,B,'swarm',40],
		[314,W,'swarm',40]
	]
},{
	name:['Wellspring Cave',,'Grundwassersenke','Falda Sotterranea','Cueva Manantial'],encounters:[
		[524,,'cave',50],
		[527,,'cave',50],
		[529,,'dust_cloud',100],
		[550,,'surf',100],
		[550,,'surf_special',100],
		[60,,'fish',60],
		[61,,'fish',10],
		[550,,'fish',30],
		[61,,'fish_special',65],
		[62,,'fish_special',5],
		[550,,'fish_special',30]
	]
},{
	name:['Nacrene City','Maillard','Septerna City','Zefiropoli','Ciudad Esmalte'],encounters:[
		[138,,'revive_fossil'],
		[140,,'revive_fossil'],
		[142,,'revive_fossil'],
		[345,,'revive_fossil'],
		[347,,'revive_fossil'],
		[408,,'revive_fossil'],
		[410,,'revive_fossil'],
		[564,,'revive_fossil'],
		[566,,'revive_fossil'],
		[546,W,['trade',548]],
		[548,B,['trade',546]]
	]
},{
	name:['Pinwheel Forest','Forêt d\'Empoigne','Feld der Besinnung','Radura Filosofia','Claro Filosofía'],mossRock:true,encounters:[
		{group:'exterior',encounters:[
			[519,,'grass',30],
			[532,,'grass',20],
			[535,,'grass',40],
			[538,W,'grass',10],
			[539,B,'grass',10],
			[519,,'grass_dark',30],
			[532,,'grass_dark',20],
			[535,,'grass_dark',40],
			[538,W,'grass_dark',10],
			[539,B,'grass_dark',10],
			[531,,'grass_rustling',95],
			[538,B,'grass_rustling',5],
			[539,W,'grass_rustling',5]
		]},
		{group:'interior',encounters:[
			[519,,'grass',15],
			[540,,'grass',35],
			[543,,'grass',15],
			[546,B,'grass',35],
			[548,W,'grass',35],
			[520,,'grass_dark',15],
			[541,,'grass_dark',35],
			[544,,'grass_dark',15],
			[546,B,'grass_dark',35],
			[548,W,'grass_dark',35],
			[511,,'grass_rustling',10],
			[513,,'grass_rustling',10],
			[515,,'grass_rustling',10],
			[531,,'grass_rustling',65],
			[547,B,'grass_rustling',5],
			[549,W,'grass_rustling',5],
			[550,,'surf',100],
			[550,,'surf_special',100],
			[118,,'fish',70],
			[550,,'fish',30],
			[118,,'fish_special',60],
			[119,,'fish_special',10],
			[550,,'fish_special',30]
		]},
		{group:['Rumination Field',,,,'Claro Filosofía'],encounters:[
			[640,,'interact']
		]}
	]
},{
	name:['Castelia City','Volucité','Stratos City','Austropoli','Ciudad Porcelana'],encounters:[
		[570,,'gift']
	]
},{
	name:['Route 4',,,'Percorso 4','Ruta 4'],encounters:[
		[551,,'deep_sand',40],
		[554,,'deep_sand',40],
		[559,,'deep_sand',20],
		[592,,'surf',50],
		[594,,'surf_special',95],
		[593,,'surf_special',2.5],
		[98,,'fish',65],
		[366,,'fish',30],
		[370,,'fish',5],
		[369,,'fish_special',60],
		[370,,'fish_special',30],
		[99,,'fish_special',5],
		[367,B,'fish_special',5],
		[368,W,'fish_special',5],
		[449,,'swarm',40]
	]
},{
	name:['Desert Resort','Désert Délassant','Wüstenresort','Deserto della Quiete','Zona Desierto'],encounters:[
		[551,,'deep_sand',40],
		[554,,'deep_sand',30],
		[556,,'deep_sand',10],
		[557,,'deep_sand',10],
		{group:'entrance',encounters:[
			[559,,'deep_sand',10]
		]},
		{group:['Desert',,,,'Desierto'],encounters:[
			[559,,'deep_sand',5],
			[561,,'deep_sand',5],
			[555,,'interact']
		]}
	]
},{
	name:['Relic Castle','Château Enfoui','Alter Palast','Castello Sepolto','Castillo Ancestral'],encounters:[
		{group:['1F-B1F',,,,'P1-S2'],encounters:[
			[551,,'walk',50],
			[562,,'walk',50]
		]},
		{group:['B2F-B6F',,,,'S2-S6'],encounters:[
			[552,,'walk',50],
			[563,,'walk',50]
		]},
		{group:'b7f',encounters:[
			[28,,'walk',30],
			[95,,'walk',15],
			[552,,'walk',35],
			[563,,'walk',20]
		]},
		{group:['Volcarona\'s room',,,,'Sala de Volcarona'],encounters:[
			[344,,'walk',100],
			[637,,'interact']
		]}
	]
},{
	name:['Route 5',,,'Percorso 5','Ruta 5'],encounters:[
		[510,,'grass',20],
		[568,,'grass',20],
		[572,,'grass',30],
		[574,B,'grass',30],
		[577,W,'grass',30],
		[510,,'grass_dark',20],
		[568,,'grass_dark',20],
		[572,,'grass_dark',30],
		[574,B,'grass_dark',30],
		[577,W,'grass_dark',30],
		[531,,'grass_rustling',85],
		[573,,'grass_rustling',5],
		[587,,'grass_rustling',10],
		[235,,'swarm',40]
	]
},{
	name:['Driftveil Drawbridge',,'Glurak-Brücke','Ponte Charizard','Puente Charizard'],encounters:[
		[580,,'from_sky',100]
	]
},{
	name:['Driftveil City','Port Yoneuve','Marea City','Libecciopoli','Ciudad Fayenza'],encounters:[
		[592,,'surf',50],
		[594,,'surf_special',95],
		[593,,'surf_special',2.5],
		[98,,'fish',65],
		[170,,'fish',30],
		[370,,'fish',5],
		[170,,'fish_special',60],
		[370,,'fish_special',30],
		[99,,'fish_special',5],
		[171,,'fish_special',5],
		[550,,['trade',572]]
	]
},{
	name:['Cold Storage',,'Tiefkühlcontainer','Deposito Frigo','Almacenes Frigoríficos'],encounters:[
		[507,,'grass',35],
		[532,,'grass',20],
		[572,,'grass',15],
		[582,,'grass',30],
		[507,,'grass_dark',35],
		[572,,'grass_dark',20],
		[532,,'grass_dark',15],
		[582,,'grass_dark',30],
		[508,,'grass_rustling',5],
		[531,,'grass_rustling',90],
		[573,,'grass_rustling',5]
	]
},{
	name:['Route 6',,,'Percorso 6','Ruta 6'],encounters:[
		[520,,'grass',[15,15,15]],
		[541,,'grass',10],
		[582,,'grass',[,,,15]],
		[585,,'grass',35],
		[588,,'grass',25],
		[590,,'grass',15],
		[520,,'grass_dark',[15,15,15]],
		[541,,'grass_dark',10],
		[582,,'grass_dark',[,,,15]],
		[585,,'grass_dark',35],
		[588,,'grass_dark',25],
		[590,,'grass_dark',15],
		[521,,'grass_rustling',[2.5,2.5,2.5]],
		[531,,'grass_rustling',[70,70,70,75]],
		[542,,'grass_rustling',5],
		[587,,'grass_rustling',20],
		[550,,'surf',100],
		[550,,'surf_special',100],
		[60,,'fish',65],
		[61,,'fish',5],
		[550,,'fish',30],
		[61,,'fish_special',65],
		[186,,'fish_special',5],
		[550,,'fish_special',30],
		[590,,'interact'],
		[311,B,'swarm',40],
		[312,W,'swarm',40]
	]
},{
	name:['Chargestone Cave','Grotte Électrolithe','Elektrolithhöhle','Cava Pietrelettrica','Cueva Electrorroca'],magneticField:true,encounters:[
		[525,,'cave',10],
		[597,,'cave',20],
		[529,,'dust_cloud',100],
		{group:['1F-B1F',,,,'P1-S1'],encounters:[
			[595,,'cave',39],
			[599,,'cave',29],
			[602,,'cave',2]
		]},
		{group:'b2f',encounters:[
			[595,,'cave',36],
			[599,,'cave',26],
			[602,,'cave',8]
		]}
	]
},{
	name:['Mistralton Cave',,'Kammer der Weisung','Sala della Guida','Estancia Orientación'],encounters:[
		[525,,'cave',50],
		[527,,'cave',30],
		[610,,'cave',20],
		[529,,'dust_cloud',100],
		{group:['Guidance Chamber',,,,'Estancia Orientación'],encounters:[
			[638,,'interact']
		]}
	]
},{
	name:['Route 7',,,'Percorso 7','Ruta 7'],encounters:[
		[505,,'grass_tall',20],
		[523,,'grass_tall',20],
		[590,,'grass_tall',10],
		[585,,'grass_tall',20],
		[520,,'grass_tall',[30,30,30]],
		[613,,'grass_tall',[,,,30]],
		[505,,'grass_dark',20],
		[523,,'grass_dark',20],
		[590,,'grass_dark',10],
		[520,,'grass_dark',[30,30,30]],
		[585,,'grass_dark',20],
		[613,,'grass_dark',[,,,30]],
		[531,,'grass_rustling',[85,85,85,90]],
		[521,,'grass_rustling',[2.5,2.5,2.5]],
		[587,,'grass_rustling',10],
		[587,,['trade',525]],
		[161,,'swarm',40]
	]
},{
	name:['Celestial Tower',,'Turm des Himmels','Torre Cielo','Torre de los Cielos'],encounters:[
		{group:'2f',encounters:[
			[607,,'walk',100]
		]},
		{group:'3f',encounters:[
			[605,,'walk',15],
			[607,,'walk',85]
		]},
		{group:'4f',encounters:[
			[605,,'walk',30],
			[607,,'walk',70]
		]},
		{group:'summit',encounters:[
			[605,,'walk',50],
			[607,,'walk',50]
		]}
	]
},{
	name:['Route 17',,,'Percorso 17','Ruta 17'],encounters:[
		[592,,'surf',50],
		[594,,'surf_special',95],
		[593,,'surf_special',2.5],
		[456,,'fish',65],
		[116,,'fish',35],
		[117,,'fish_special',60],
		[211,,'fish_special',30],
		[457,,'fish_special',5],
		[230,,'fish_special',5]
	]
},{
	name:['Route 18',,,'Percorso 18','Ruta 18'],encounters:[
		[559,,'grass',40],
		[557,,'grass',30],
		[505,,'grass',20],
		[538,W,'grass',10],
		[539,B,'grass',10],
		[559,,'grass_dark',40],
		[558,,'grass_dark',30],
		[505,,'grass_dark',20],
		[538,W,'grass_dark',10],
		[539,B,'grass_dark',10],
		[531,,'grass_rustling',95],
		[538,B,'grass_rustling',5],
		[539,W,'grass_rustling',5],
		[592,,'surf',50],
		[594,,'surf_special',95],
		[593,,'surf_special',2.5],
		[456,,'fish',64],
		[116,,'fish',35],
		[170,,'fish',1],
		[117,,'fish_special',60],
		[211,,'fish_special',30],
		[230,,'fish_special',5],
		[457,,'fish_special',5],
		[102,,'swarm',40],
		[636,,'gift_egg']
	]
},{
	name:['P2 Laboratory',,'P2-Labor','Laboratorio P&P','Laboratorio P+P'],encounters:[
		[505,,'grass',36],
		[507,,'grass',36],
		[559,,'grass',14],
		[599,,'grass',14],
		[531,,'grass_rustling',95],
		[508,,'grass_rustling',5],
		[592,,'surf',50],
		[594,,'surf_special',95],
		[593,,'surf_special',2.5],
		[456,,'fish',65],
		[116,,'fish',35],
		[117,,'fish_special',60],
		[211,,'fish_special',30],
		[230,,'fish_special',5],
		[457,,'fish_special',5]
	]
},{
	name:['Twist Mountain','Mont Foré','Wendelberg','Monte Vite','Monte Tuerca'],iceRock:true,encounters:[
		[525,,'cave',[49,45,49,30]],
		[527,,'cave',[10,20,10,10]],
		[533,,'cave',[30,30,30,10]],
		[613,,'cave',[10,4,10,45]],
		[615,,'cave',[1,1,1,5]],
		[529,,'dust_cloud',100]
	]
},{
	name:['Icirrus City','Flocombe','Nevaio City','Mistralopoli','Ciudad Teja'],encounters:[
		[536,,'puddle',[40,40,40]],
		[616,,'puddle',[40,40,40]],
		[618,,'puddle',[20,20,20]],
		[618,,'surf',100],
		[618,,'surf_special',95],
		[537,,'surf_special',5],
		[339,,'fish',70],
		[618,,'fish',30],
		[339,,'fish_special',60],
		[618,,'fish_special',30],
		[340,,'fish_special',10]
	]
},{
	name:['Dragonspiral Tower','Tour Dragospire','Drachenstiege','Torre Dragospira','Torre Duodraco'],encounters:[
		{group:'entrance',encounters:[
			[520,,'grass',[30,30,30]],
			[582,,'grass',[,,,30]],
			[585,,'grass',30],
			[619,,'grass',30],
			[621,,'grass',[10,10,10]],
			[613,,'grass',[,,,10]],
			[583,,'grass_dark',[,,,30]],
			[586,,'grass_dark',[,,,30]],
			[619,,'grass_dark',[,,,30]],
			[614,,'grass_dark',[,,,10]],
			[531,,'grass_rustling',[85,85,85,90]],
			[587,,'grass_rustling',10],
			[521,,'grass_rustling',[5,5,5]]
		]},
		{group:'exterior',encounters:[
			[520,,'grass',[30,30,30]],
			[582,,'grass',[,,,30]],
			[585,,'grass',30],
			[619,,'grass',30],
			[621,,'grass',[10,10,10]],
			[613,,'grass',[,,,10]],
			[520,,'grass_dark',[30,30,30]],
			[583,,'grass_dark',[,,,30]],
			[586,,'grass_dark',30],
			[619,,'grass_dark',30],
			[621,,'grass_dark',[10,10,10]],
			[614,,'grass_dark',[,,,10]],
			[531,,'grass_rustling',[85,85,85,90]],
			[587,,'grass_rustling',10],
			[521,,'grass_rustling',[2.5,2.5,2.5]],
			[550,,'surf',100],
			[550,,'surf_special',100],
			[147,,'fish',65],
			[550,,'fish',30],
			[148,,'fish',5],
			[147,,'fish_special',60],
			[550,,'fish_special',30],
			[148,,'fish_special',9],
			[149,,'fish_special',1]
		]},
		{group:'1f',encounters:[
			[622,,'walk',50],
			[621,,'walk',30],
			[619,,'walk',20]
		]},
		{group:'2f',encounters:[
			[622,,'walk',100]
		]},
		{group:'inside',encounters:[
			[643,B,'interact'],
			[644,W,'interact']
		]}
	]
},{
	name:['Route 8',,,'Percorso 8','Ruta 8'],encounters:[
		[536,,'puddle',[40,40,40]],
		[616,,'puddle',[40,40,40]],
		[618,,'puddle',[20,20,20]],
		[618,,'surf',100],
		[537,,'surf_special',5],
		[618,,'surf_special',95],
		[339,,'fish',70],
		[618,,'fish',30],
		[339,,'fish_special',60],
		[340,,'fish_special',10],
		[618,,'fish_special',30],
		[453,,'swarm',[40,40,40]]
	]
},{
	name:['Moor of Icirrus',,'Moor von Nevaio','Palude Mistralopoli','Pantano Teja'],encounters:[
		[536,,'puddle',[40,40,40]],
		[616,,'puddle',[40,40,40]],
		[618,,'puddle',[20,20,20]],
		[618,,'surf',100],
		[618,,'surf_special',95],
		[537,,'surf_special',5],
		[339,,'fish',70],
		[618,,'fish',30],
		[339,,'fish_special',60],
		[340,,'fish_special',10],
		[618,,'fish_special',30]
	]
},{
	name:['Route 9',,,'Percorso 9','Ruta 9'],encounters:[
		[510,,'grass',10],
		[569,,'grass',20],
		[572,,'grass',20],
		[575,B,'grass',30],
		[578,W,'grass',30],
		[624,,'grass',20],
		[510,,'grass_dark',10],
		[569,,'grass_dark',20],
		[572,,'grass_dark',20],
		[575,B,'grass_dark',30],
		[578,W,'grass_dark',30],
		[624,,'grass_dark',20],
		[531,,'grass_rustling',80],
		[573,,'grass_rustling',5],
		[576,B,'grass_rustling',5],
		[579,W,'grass_rustling',5],
		[587,,'grass_rustling',10],
		[228,B,'swarm',40],
		[261,W,'swarm',40]
	]
},{
	name:['Route 10',,,'Percorso 10','Ruta 10'],encounters:[
		[507,,'grass',30],
		[538,W,'grass',10],
		[539,B,'grass',10],
		[590,,'grass',10],
		[626,,'grass',20],
		[627,W,'grass',30],
		[629,B,'grass',30],
		[507,,'grass_dark',30],
		[538,W,'grass_dark',10],
		[539,B,'grass_dark',10],
		[591,,'grass_dark',10],
		[626,,'grass_dark',20],
		[627,W,'grass_dark',30],
		[629,B,'grass_dark',30],
		[508,,'grass_rustling',5],
		[531,,'grass_rustling',80],
		[538,B,'grass_rustling',5],
		[539,W,'grass_rustling',5],
		[587,,'grass_rustling',10],
		[236,,'swarm',40],
		[590,,'interact'],
		[591,,'interact']
	]
},{
	name:['Victory Road','Route Victoire','Siegesstraße','Via Vittoria','Calle Victoria'],encounters:[
		{group:'exterior',encounters:[
			[611,,'rough',5],
			[619,,'rough',15],
			[627,W,'rough',35],
			[629,B,'rough',35],
			[631,,'rough',45]
		]},
		{group:['1F (middle and east)',,,,'P1 (centro y este)'],encounters:[
			[525,,'cave',20],
			[527,,'cave',10],
			[619,,'cave',10],
			[632,,'cave',40],
			[633,,'cave',20],
			[530,,'dust_cloud',100],
			[550,,'surf',100],
			[550,,'surf_special',100],
			[60,,'fish',65],
			[61,,'fish',5],
			[550,,'fish',30],
			[61,,'fish_special',65],
			[62,,'fish_special',5],
			[550,,'fish_special',30]
		]},
		{group:['1F (west)/2F-3F',,,,'P1 (oeste)/P2-P3'],encounters:[
			[525,,'cave',30],
			[527,,'cave',20],
			[619,,'cave',10],
			[632,,'cave',40],
			[530,,'dust_cloud',100],
		]},
		{group:['4F (middle)',,,,'P4 (centro)'],encounters:[
			[525,,'cave',30],
			[527,,'cave',20],
			[619,,'cave',10],
			[632,,'cave',40],
			[530,,'dust_cloud',100]
		]},
		{group:['4F (west and east)/5F-7F',,,,'P4 (oeste y este)/P5-P7'],encounters:[
			[525,,'cave',30],
			[527,,'cave',20],
			[619,,'cave',10],
			[632,,'cave',40],
			[530,,'dust_cloud',100]
		]},
		{group:['Trial Chamber','Salle Épreuve','Kammer der Prüfung','Sala del Cimento','Cámara de Pruebas'],encounters:[
			[525,,'cave',30],
			[527,,'cave',20],
			[619,,'cave',10],
			[632,,'cave',40],
			[530,,'dust_cloud',100],
			[639,,'interact']
		]}
	]
},{
	name:['N\'s Castle',,'Schloss von N','Palazzo di N','Palacio de N'],encounters:[
		[643,B,'interact'],
		[644,W,'interact']
	]
},{
	name:['Challenger\'s Cave',,'Höhle der Schulung','Caverna Ascesi','Gruta Superación'],encounters:[
		[75,,'cave',20],
		[302,,'cave',10],
		[303,,'cave',10],
		[525,,'cave',20],
		[527,,'cave',20],
		[530,,'dust_cloud',100],
		[550,,'surf',100],
		[550,,'surf_special',100],
		[60,,'fish',60],
		[61,,'fish',10],
		[550,,'fish',30],
		[61,,'fish_special',65],
		[62,,'fish_special',5],
		[550,,'fish_special',30],
		{group:'1f',encounters:[
			[108,,'cave',20]
		]},
		{group:['B1F-B2F',,,,'S1-S2'],encounters:[
			[108,,'cave',15],
			[447,,'cave',5]
		]}
	]
},{
	name:['Route 11',,,'Percorso 11','Ruta 11'],encounters:[
		[55,,'grass',20],
		[207,,'grass',15],
		[335,,'grass',10],
		[336,,'grass',10],
		[588,,'grass',5],
		[591,,'grass',10],
		[624,,'grass',5],
		[627,W,'grass',25],
		[629,B,'grass',25],
		[55,,'grass_dark',20],
		[207,,'grass_dark',15],
		[335,,'grass_dark',10],
		[336,,'grass_dark',10],
		[588,,'grass_dark',5],
		[591,,'grass_dark',10],
		[625,,'grass_dark',5],
		[628,W,'grass_dark',25],
		[630,B,'grass_dark',25],
		[472,,'grass_rustling',5],
		[531,,'grass_rustling',85],
		[587,,'grass_rustling',10],
		[418,,'surf',30],
		[550,,'surf',70],
		[418,,'surf_special',60],
		[419,,'surf_special',10],
		[550,,'surf_special',30],
		[118,,'fish',70],
		[550,,'fish',30],
		[118,,'fish_special',60],
		[119,,'fish_special',10],
		[550,,'fish_special',30],
		[46,W,'swarm',40],
		[285,B,'swarm',40]
	]
},{
	name:['Village Bridge',,'Dorfbrücke','Ponte Villaggio','Puente Villa'],encounters:[
		[55,,'grass',25],
		[400,,'grass',25],
		[629,B,'grass',20],
		[627,W,'grass',20],
		[335,,'grass',15],
		[336,,'grass',15],
		[55,,'grass_dark',25],
		[400,,'grass_dark',25],
		[630,B,'grass_dark',20],
		[628,W,'grass_dark',20],
		[335,,'grass_dark',15],
		[336,,'grass_dark',15],
		[531,,'grass_rustling',90],
		[587,,'grass_rustling',10],
		[550,,'surf',100],
		[550,,'surf_special',95],
		[131,,'surf_special',5],
		[318,,'fish',70],
		[550,,'fish',30],
		[318,,'fish_special',60],
		[550,,'fish_special',30],
		[319,,'fish_special',10]
	]
},{
	name:['Route 12',,,'Percorso 12','Ruta 12'],encounters:[
		[11,W,'grass',10],
		[14,B,'grass',10],
		[78,,'grass',10],
		[127,,'grass',5],
		[191,,'grass',20],
		[206,,'grass',5],
		[214,,'grass',5],
		[415,,'grass',20],
		[421,,'grass',10],
		[520,,'grass',15],
		[11,W,'grass_dark',10],
		[14,B,'grass_dark',10],
		[78,,'grass_dark',10],
		[127,,'grass_dark',5],
		[191,,'grass_dark',20],
		[206,,'grass_dark',5],
		[214,,'grass_dark',5],
		[415,,'grass_dark',20],
		[421,,'grass_dark',10],
		[520,,'grass_dark',15],
		[12,W,'grass_rustling',5],
		[15,B,'grass_rustling',5],
		[192,,'grass_rustling',5],
		[416,,'grass_rustling',5],
		[521,,'grass_rustling',2.5],
		[531,,'grass_rustling',70],
		[587,,'grass_rustling',10],
		[84,,'swarm',40]
	]
},{
	name:['Route 13',,,'Percorso 13','Ruta 13'],encounters:[
		[42,,'grass',15],
		[114,,'grass',25],
		[277,,'grass',20],
		[337,,'grass',10],
		[338,,'grass',10],
		[359,,'grass',10],
		[426,,'grass',10],
		[42,,'grass_dark',15],
		[114,,'grass_dark',25],
		[277,,'grass_dark',20],
		[337,,'grass_dark',10],
		[338,,'grass_dark',10],
		[359,,'grass_dark',10],
		[426,,'grass_dark',10],
		[169,,'grass_rustling',5],
		[465,,'grass_rustling',5],
		[531,,'grass_rustling',80],
		[587,,'grass_rustling',10],
		[120,,'surf',30],
		[278,,'surf',60],
		[279,,'surf',10],
		[120,,'surf_special',60],
		[121,,'surf_special',10],
		[222,,'surf_special',30],
		[98,,'fish',60],
		[90,,'fish',30],
		[370,,'fish',5],
		[99,,'fish_special',5],
		[90,,'fish_special',60],
		[91,,'fish_special',5],
		[370,,'fish_special',30],
		[353,,'swarm',40]
	]
},{
	name:['Giant Chasm','Grotte Cyclopéenne','Riesengrotte','Fossa Gigante','Boquete Gigante'],encounters:[
		{group:'entrance',encounters:[
			[42,,'grass',15],
			[114,,'grass',25],
			[277,,'grass',20],
			[337,,'grass',10],
			[338,,'grass',10],
			[359,,'grass',10],
			[426,,'grass',10],
			[42,,'grass_dark',15],
			[114,,'grass_dark',25],
			[277,,'grass_dark',20],
			[337,,'grass_dark',10],
			[338,,'grass_dark',10],
			[359,,'grass_dark',10],
			[426,,'grass_dark',10],
			[169,,'grass_rustling',5],
			[465,,'grass_rustling',5],
			[531,,'grass_rustling',80],
			[587,,'grass_rustling',10]
		]},
		{group:'cave',encounters:[
			[221,,'cave',25],
			[42,,'cave',20],
			[215,,'cave',10],
			[225,,'cave',10],
			[337,,'cave',10],
			[338,,'cave',10],
			[124,,'cave',10],
			[525,,'cave',5],
			[530,,'dust_cloud',100],
			[550,,'surf',70],
			[86,,'surf',30],
			[86,,'surf_special',60],
			[550,,'surf_special',30],
			[87,,'surf_special',10],
			[60,,'fish',65],
			[550,,'fish',30],
			[61,,'fish',5],
			[61,,'fish_special',65],
			[550,,'fish_special',30],
			[62,,'fish_special',5]
		]},
		{group:['Crater Forest',,,,'Bosque hundido'],encounters:[
			[35,,'grass',30],
			[221,,'grass',25],
			[132,,'grass',15],
			[337,,'grass',10],
			[338,,'grass',10],
			[375,,'grass',10],
			[35,,'grass_dark',30],
			[221,,'grass_dark',25],
			[132,,'grass_dark',15],
			[337,,'grass_dark',10],
			[338,,'grass_dark',10],
			[375,,'grass_dark',10],
			[531,,'grass_rustling',85],
			[473,,'grass_rustling',5],
			[36,,'grass_rustling',5],
			[376,,'grass_rustling',5]
		]},
		{group:['Deep cave',,,,'Cueva profunda'],encounters:[
			[221,,'cave',25],
			[42,,'cave',20],
			[215,,'cave',10],
			[225,,'cave',10],
			[337,,'cave',10],
			[338,,'cave',10],
			[124,,'cave',10],
			[525,,'cave',5],
			[530,,'dust_cloud',100],
			[550,,'surf',70],
			[86,,'surf',30],
			[86,,'surf_special',60],
			[550,,'surf_special',30],
			[87,,'surf_special',10],
			[60,,'fish',65],
			[550,,'fish',30],
			[61,,'fish',5],
			[61,,'fish_special',65],
			[550,,'fish_special',30],
			[62,,'fish_special',5],
			[646,,'interact']
		]}
	]
},{
	name:['Undella Town','Vaguelone','Ondula','Spiraria','Pueblo Arenisca'],encounters:[
		[278,,'surf',60],
		[279,,'surf',10],
		[458,,'surf',30],
		[222,,'surf_special',30],
		[226,,'surf_special',10],
		[320,,'surf_special',60],
		[90,,'fish',30],
		[223,,'fish',65],
		[370,,'fish',5],
		[90,,'fish_special',60],
		[91,,'fish_special',5],
		[224,,'fish_special',5],
		[370,,'fish_special',30],
		[446,,['trade',573]]
	]
},{
	name:['Undella Bay',,'Bucht von Ondula','Baia Spiraria','Bahía Arenisca'],encounters:[
		[278,,'surf',60],
		[279,,'surf',10],
		[458,,'surf',[30,30,30]],
		[363,,'surf',[,,,30]],
		[320,,'surf_special',[90,90,90,60]],
		[364,,'surf_special',[,,,30]],
		[226,,'surf_special',[5,5,5]],
		[365,,'surf_special',[,,,5]],
		[321,,'surf_special',5],
		[223,,'fish',65],
		[90,,'fish',30],
		[370,,'fish',5],
		[90,,'fish_special',60],
		[370,,'fish_special',30],
		[224,,'fish_special',5],
		[91,,'fish_special',5]
	]
},{
	name:['Route 14',,,'Percorso 14','Ruta 14'],encounters:[
		[39,,'grass',20],
		[55,,'grass',20],
		[213,,'grass',5],
		[334,,'grass',10],
		[357,,'grass',15],
		[426,,'grass',10],
		[606,,'grass',10],
		[619,,'grass',10],
		[39,,'grass_dark',20],
		[55,,'grass_dark',20],
		[213,,'grass_dark',5],
		[334,,'grass_dark',10],
		[357,,'grass_dark',15],
		[426,,'grass_dark',10],
		[606,,'grass_dark',10],
		[620,,'grass_dark',10],
		[40,,'grass_rustling',5],
		[531,,'grass_rustling',85],
		[587,,'grass_rustling',10],
		[418,,'surf',30],
		[550,,'surf',70],
		[418,,'surf_special',60],
		[419,,'surf_special',10],
		[550,,'surf_special',30],
		[118,,'fish',70],
		[550,,'fish',30],
		[118,,'fish_special',60],
		[119,,'fish_special',10],
		[550,,'fish_special',30],
		[193,,'swarm',40]
	]
},{
	name:['Abundant Shrine',,'Schrein der Ernte','Tempio Abbondanza','Santuario Abundancia'],encounters:[
		[37,,'grass',20],
		[164,,'grass',15],
		[198,B,'grass',5],
		[200,W,'grass',5],
		[234,,'grass',10],
		[358,,'grass',30],
		[437,,'grass',10],
		[546,B,'grass',10],
		[548,W,'grass',10],
		[37,,'grass_dark',20],
		[164,,'grass_dark',15],
		[198,B,'grass_dark',5],
		[200,W,'grass_dark',5],
		[234,,'grass_dark',10],
		[358,,'grass_dark',30],
		[437,,'grass_dark',10],
		[546,B,'grass_dark',10],
		[548,W,'grass_dark',10],
		[38,,'grass_rustling',5],
		[429,W,'grass_rustling',5],
		[430,B,'grass_rustling',5],
		[531,,'grass_rustling',75],
		[547,B,'grass_rustling',5],
		[549,W,'grass_rustling',5],
		[587,,'grass_rustling',10],
		[79,,'surf',30],
		[550,,'surf',70],
		[79,,'surf_special',60],
		[80,,'surf_special',5],
		[199,,'surf_special',5],
		[550,,'surf_special',30],
		[118,,'fish',70],
		[550,,'fish',30],
		[118,,'fish_special',60],
		[119,,'fish_special',10],
		[550,,'fish_special',30],
		[645,,'interact']
	]
},{
	name:['White Forest','Forêt Blanche','Weißer Wald','Foresta Bianca','Bosque Blanco'],encounters:[
		{group:['Leo',,,,'Pietro'],encounters:[
			[16,W,'grass'],
			[283,W,'surf']
		]},
		{group:['Jacques',,,,'Rober'],encounters:[
			[29,W,'grass'],
			[270,W,'surf']
		]},
		{group:['Ken'],encounters:[
			[32,W,'grass'],
			[341,W,'surf']
		]},
		{group:['Lynette',,,,'Romina'],encounters:[
			[43,W,'grass'],
			[283,W,'surf']
		]},
		{group:['Collin',,,,'Tristán'],encounters:[
			[63,W,'grass'],
			[270,W,'surf']
		]},
		{group:['Ryder',,,,'Pascual'],encounters:[
			[66,W,'grass'],
			[270,W,'surf']
		]},
		{group:['Piper',,,,'Esther'],encounters:[
			[69,W,'grass'],
			[283,W,'surf']
		]},
		{group:['Marie',,,,'Sole'],encounters:[
			[81,W,'grass'],
			[270,W,'surf']
		]},
		{group:['Dave',,,,'Honorio'],encounters:[
			[92,W,'grass'],
			[283,W,'surf']
		]},
		{group:['Shane',,,,'Olao'],encounters:[
			[111,W,'grass'],
			[283,W,'surf']
		]},
		{group:['Herman',,,,'Don'],encounters:[
			[137,W,'grass'],
			[194,W,'surf']
		]},
		{group:['Miki',,,,'Carme'],encounters:[
			[175,W,'grass'],
			[283,W,'surf']
		]},
		{group:['Pierce',,,,'Alonso'],encounters:[
			[179,W,'grass'],
			[283,W,'surf']
		]},
		{group:['Britney',,,,'Cira'],encounters:[
			[187,W,'grass'],
			[283,W,'surf']
		]},
		{group:['Robbie',,,,'Max'],encounters:[
			[239,W,'grass'],
			[283,W,'surf']
		]},
		{group:['Vincent',,,,'Vito'],encounters:[
			[240,W,'grass'],
			[341,W,'surf']
		]},
		{group:['Silvia',,,,'Azucena'],encounters:[
			[265,W,'grass'],
			[283,W,'surf']
		]},
		{group:['Ralph',,,,'Melas'],encounters:[
			[270,W,'grass'],
			[283,W,'surf']
		]},
		{group:['Miho',,,,'Lola'],encounters:[
			[273,W,'grass'],
			[283,W,'surf']
		]},
		{group:['Lena',,,,'Malena'],encounters:[
			[280,W,'grass'],
			[194,W,'surf']
		]},
		{group:['Karenna',,,,'Iraís'],encounters:[
			[287,W,'grass'],
			[270,W,'surf']
		]},
		{group:['Rosa',,,,'Lila'],encounters:[
			[293,W,'grass'],
			[270,W,'surf']
		]},
		{group:['Molly',,,,'Sarah'],encounters:[
			[298,W,'grass'],
			[270,W,'surf']
		]},
		{group:['Gene',,,,'Loeb'],encounters:[
			[304,W,'grass'],
			[283,W,'surf']
		]},
		{group:['Eliza',,,,'Dorita'],encounters:[
			[328,W,'grass'],
			[270,W,'surf']
		]},
		{group:['Grace',,,,'Pitu'],encounters:[
			[371,W,'grass'],
			[194,W,'surf']
		]},
		{group:['Carlos',,,,'Giuseppe'],encounters:[
			[396,W,'grass'],
			[341,W,'surf']
		]},
		{group:['Doug',,,,'Jerry'],encounters:[
			[403,W,'grass'],
			[270,W,'surf']
		]},
		{group:['Frederic',,,,'Cirilo'],encounters:[
			[406,W,'grass'],
			[194,W,'surf']
		]},
		{group:['Emi',,,,'Elisa'],encounters:[
			[440,W,'grass'],
			[341,W,'surf']
		]}
	]
},{
	name:['Route 15',,,'Percorso 15','Ruta 15'],encounters:[
		[22,,'grass',30],
		[105,,'grass',20],
		[115,,'grass',10],
		[207,,'grass',15],
		[247,,'grass',10],
		[538,W,'grass',15],
		[539,B,'grass',15],
		[22,,'grass_dark',30],
		[105,,'grass_dark',20],
		[115,,'grass_dark',10],
		[207,,'grass_dark',10],
		[247,,'grass_dark',10],
		[505,,'grass_dark',5],
		[538,W,'grass_dark',15],
		[539,B,'grass_dark',15],
		[248,,'grass_rustling',5],
		[472,,'grass_rustling',5],
		[531,,'grass_rustling',75],
		[538,B,'grass_rustling',5],
		[539,W,'grass_rustling',5],
		[587,,'grass_rustling',10],
		[56,,'swarm',40],
		[479,,['trade',132]]
	]
},{
	name:['Marvelous Bridge',,'Wunderbrücke','Ponte Meraviglie','Puente Progreso'],encounters:[
		[581,,'from_sky',100],
		[129,,'gift']
	]
},{
	name:['Route 16',,,'Percorso 16','Ruta 16'],encounters:[
		[510,,'grass',20],
		[568,,'grass',20],
		[572,,'grass',30],
		[574,B,'grass',30],
		[577,W,'grass',30],
		[510,,'grass_dark',20],
		[568,,'grass_dark',20],
		[572,,'grass_dark',30],
		[574,B,'grass_dark',30],
		[577,W,'grass_dark',30],
		[531,,'grass_rustling',85],
		[573,,'grass_rustling',5],
		[587,,'grass_rustling',10],
		[204,,'swarm',40]
	]
},{
	name:['Roaming Unova'],encounters:[
		[641,B,'roaming'],
		[642,W,'roaming']
	]
},{
	name:['Liberty Garden',,'Freiheitsgarten','Isola Libertà','Isla Libertad'],encounters:[
		[494,,'event']
	]
},{
	name:['Lostlorn Forest',,'Hain der Täuschung','Bosco Smarrimento','Bosque de los Perdidos'],encounters:[
		[520,,'grass',15],
		[541,,'grass',35],
		[543,,'grass',15],
		[546,B,'grass',35],
		[548,W,'grass',35],
		[520,,'grass_dark',15],
		[541,,'grass_dark',35],
		[543,,'grass_dark',15],
		[546,B,'grass_dark',35],
		[548,W,'grass_dark',35],
		[511,,'grass_rustling',10],
		[513,,'grass_rustling',10],
		[515,,'grass_rustling',10],
		[521,,'grass_rustling',2.5],
		[531,,'grass_rustling',45],
		[542,,'grass_rustling',5],
		[547,B,'grass_rustling',5],
		[549,W,'grass_rustling',5],
		[587,,'grass_rustling',10],
		[550,,'surf',100],
		[550,,'surf_special',100],
		[118,,'fish',70],
		[550,,'fish',30],
		[118,,'fish_special',60],
		[119,,'fish_special',10],
		[550,,'fish_special',30],
		[571,,'interact']
	]
}
];