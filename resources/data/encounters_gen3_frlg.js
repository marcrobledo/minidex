const FR=1<<0;
const LG=1<<1;

const LOCATIONS=[
{
	name:['Pallet Town','Bourg Palette',,'Biancavilla','Pueblo Paleta'],encounters:[
		[72,,'surf',100],
		[129,,'fish_old',100],
		[98,FR,'fish_good',20],
		[98,LG,'fish_good',60],
		[116,FR,'fish_good',60],
		[116,LG,'fish_good',20],
		[129,,'fish_good',20],
		[54,FR,'fish_super',1],
		[79,LG,'fish_super',1],
		[90,FR,'fish_super',40],
		[98,LG,'fish_super',40],
		[99,LG,'fish_super',4],
		[116,FR,'fish_super',40],
		[117,FR,'fish_super',4],
		[120,LG,'fish_super',40],
		[130,,'fish_super',15],
		[1,,'starter'],
		[4,,'starter'],
		[7,,'starter']
	]
},{
	name:['Route 1',,,'Percorso 1','Ruta 1'],encounters:[
		[16,,'grass',50],
		[19,,'grass',50]
	]
},{
	name:['Viridian City','Jadielle','Vertania City','Smeraldopoli','Ciudad Verde'],encounters:[
		[54,FR,'surf',100],
		[79,LG,'surf',100],
		[129,,'fish_old',100],
		[60,,'fish_good',60],
		[118,,'fish_good',20],
		[129,,'fish_good',20],
		[54,FR,'fish_super',5],
		[60,,'fish_super',40],
		[61,,'fish_super',40],
		[79,LG,'fish_super',5],
		[130,,'fish_super',15]
	]
},{
	name:['Route 2',,,'Percorso 2','Ruta 2'],encounters:[
		[16,,'grass',45],
		[19,,'grass',45],
		[10,,'grass',5],
		[13,,'grass',5],
		[122,,['trade',63]]
	]
},{
	name:['Viridian Forest','Canada','Vertania Wald','Bosco Smeraldo','Bosque Verde'],encounters:[
		[10,,'grass',40],
		[11,FR,'grass',5],
		[11,LG,'grass',10],
		[13,,'grass',40],
		[14,FR,'grass',10],
		[14,LG,'grass',5],
		[25,,'grass',5]
	]
},{
	name:['Route 3',,,'Percorso 3','Ruta 3'],encounters:[
		[21,,'grass',35],
		[16,,'grass',30],
		[32,FR,'grass',14],
		[32,LG,'grass',1],
		[39,,'grass',10],
		[56,,'grass',10],
		[29,FR,'grass',1],
		[29,LG,'grass',14]
	]
},{
	name:['Route 4',,,'Percorso 4','Ruta 4'],encounters:[
		[19,,'grass',35],
		[21,,'grass',35],
		[23,FR,'grass',25],
		[27,LG,'grass',25],
		[56,,'grass',5],
		[72,,'surf',100],
		[129,,'fish_old',100],
		[116,FR,'fish_good',60],
		[116,LG,'fish_good',20],
		[98,FR,'fish_good',20],
		[98,LG,'fish_good',60],
		[129,,'fish_good',20],
		[116,FR,'fish_super',84],
		[98,LG,'fish_super',84],
		[130,,'fish_super',15],
		[54,FR,'fish_super',1],
		[79,LG,'fish_super',1],
		[129,,'gift']
	]
},{
	name:['Mt. Moon',,'Mondberg','Monte Luna','Mt. Moon'],encounters:[
		{group:'1f',encounters:[
			[41,,'cave',69],
			[74,,'cave',25],
			[46,,'cave',5],
			[35,,'cave',1]
		]},
		{group:'b1f',encounters:[
			[46,,'cave',100]
		]},
		{group:'b2f',encounters:[
			[41,,'cave',49],
			[74,,'cave',30],
			[46,,'cave',15],
			[35,,'cave',6]
		]}
	]
},{
	name:['Cerulean City',,'Azuria City','Celestopoli','Ciudad Celeste'],encounters:[
		[72,,'surf',100],
		[129,,'fish_old',100],
		[98,FR,'fish_good',20],
		[98,LG,'fish_good',60],
		[116,FR,'fish_good',60],
		[116,LG,'fish_good',20],
		[129,,'fish_good',20],
		[54,FR,'fish_super',1],
		[79,LG,'fish_super',1],
		[98,LG,'fish_super',84],
		[116,FR,'fish_super',84],
		[130,,'fish_super',15],
		[124,,['trade',61]]
	]
},{
	name:['Route 24',,,'Percorso 24','Ruta 24'],encounters:[
		[10,,'grass',20],
		[11,FR,'grass',1],
		[11,LG,'grass',4],
		[13,,'grass',20],
		[14,FR,'grass',4],
		[14,LG,'grass',1],
		[16,,'grass',15],
		[43,FR,'grass',25],
		[63,,'grass',15],
		[69,LG,'grass',25],
		[72,,'surf',100],
		[129,,'fish_old',100],
		[116,FR,'fish_good',60],
		[116,LG,'fish_good',20],
		[98,FR,'fish_good',20],
		[98,LG,'fish_good',60],
		[129,,'fish_good',20],
		[116,FR,'fish_super',84],
		[98,LG,'fish_super',84],
		[130,,'fish_super',15],
		[54,FR,'fish_super',1],
		[79,LG,'fish_super',1]
	]
},{
	name:['Route 25',,,'Percorso 25','Ruta 25'],encounters:[
		[10,,'grass',20],
		[11,FR,'grass',1],
		[11,LG,'grass',4],
		[13,,'grass',20],
		[14,FR,'grass',4],
		[14,LG,'grass',1],
		[16,,'grass',15],
		[43,FR,'grass',25],
		[63,,'grass',15],
		[69,LG,'grass',25],
		[54,FR,'surf',100],
		[79,LG,'surf',100],
		[129,,'fish_old',100],
		[60,,'fish_good',60],
		[118,,'fish_good',20],
		[129,,'fish_good',20],
		[60,,'fish_super',40],
		[61,,'fish_super',40],
		[130,,'fish_super',15],
		[54,FR,'fish_super',5],
		[79,LG,'fish_super',5]
	]
},{
	name:['Route 5',,,'Percorso 5','Ruta 5'],encounters:[
		[16,,'grass',40],
		[52,,'grass',35],
		[43,FR,'grass',25],
		[69,LG,'grass',25]
	]
},{
	name:['Route 6',,,'Percorso 6','Ruta 6'],encounters:[
		[16,,'grass',40],
		[52,,'grass',35],
		[43,FR,'grass',25],
		[69,LG,'grass',25],
		[54,FR,'surf',100],
		[79,LG,'surf',100],
		[129,,'fish_old',100],
		[60,,'fish_good',60],
		[118,,'fish_good',20],
		[129,,'fish_good',20],
		[60,,'fish_super',40],
		[61,,'fish_super',40],
		[130,,'fish_super',15],
		[54,FR,'fish_super',5],
		[79,LG,'fish_super',5]
	]
},{
	name:['Underground Path (Routes 5-6)','Souterrain','Tunnelpfad','Via Sotterranea','Vía Subterránea'],encounters:[
		[29,FR,['trade',32]],
		[32,LG,['trade',29]]
	]
},{
	name:['Vermilion City','Carmin sur Mer','Orania City','Aranciopoli','Ciudad Carmín'],encounters:[
		[72,,'surf',100],
		[129,,'fish_old',100],
		[98,FR,'fish_good',20],
		[98,LG,'fish_good',60],
		[116,FR,'fish_good',60],
		[116,LG,'fish_good',20],
		[129,,'fish_good',20],
		[54,FR,'fish_super',1],
		[79,LG,'fish_super',1],
		[90,FR,'fish_super',40],
		[116,FR,'fish_super',44],
		[120,LG,'fish_super',40],
		[130,,'fish_super',15],
		{group:'city',encounters:[
			[83,,['trade',21]],
			[98,LG,'fish_super',40],
			[116,LG,'fish_super',4]
		]},
		{group:'harbor',encounters:[
			[98,LG,'fish_super',44]
		]}
	]
},{
	name:['Route 11',,,'Percorso 11','Ruta 11'],encounters:[
		[23,FR,'grass',40],
		[27,LG,'grass',40],
		[21,,'grass',35],
		[96,,'grass',25],
		[72,,'surf',100],
		[129,,'fish_old',100],
		[116,FR,'fish_good',60],
		[116,LG,'fish_good',20],
		[98,FR,'fish_good',20],
		[98,LG,'fish_good',60],
		[129,,'fish_good',20],
		[116,FR,'fish_super',84],
		[98,LG,'fish_super',84],
		[130,,'fish_super',15],
		[54,FR,'fish_super',1],
		[79,LG,'fish_super',1],
		[30,FR,['trade',33]],
		[33,LG,['trade',30]]
	]
},{
	name:['Diglett\'s Cave','Cave Taupiqueur','Digdas Höhle','Grotta Diglett','Cueva Diglett'],encounters:[
		[50,,'cave',95],
		[51,,'cave',5]
	]
},{
	name:['Route 9',,,'Percorso 9','Ruta 9'],encounters:[
		[19,,'grass',40],
		[21,,'grass',35],
		[23,FR,'grass',25],
		[27,LG,'grass',25]
	]
},{
	name:['Rock Tunnel','Grotte','Felstunnel','Tunnel Roccioso','Túnel Roca'],encounters:[
		[74,,'cave',35],
		[41,,'cave',30],
		[56,,'cave',15],
		{group:'1f',encounters:[
			[66,,'cave',15],
			[95,,'cave',5]
		]},
		{group:'b1f',encounters:[
			[66,,'cave',10],
			[95,,'cave',10],
			[74,,'rock_smash',90],
			[75,,'rock_smash',10]
		]}
	]
},{
	name:['Route 10',,,'Percorso 10','Ruta 10'],encounters:[
		[100,,'grass',40],
		[21,,'grass',35],
		[23,FR,'grass',25],
		[27,LG,'grass',25],
		[72,,'surf',100],
		[129,,'fish_old',100],
		[116,FR,'fish_good',60],
		[116,LG,'fish_good',20],
		[98,FR,'fish_good',20],
		[98,LG,'fish_good',60],
		[129,,'fish_good',20],
		[116,FR,'fish_super',84],
		[98,LG,'fish_super',84],
		[130,,'fish_super',15],
		[54,FR,'fish_super',1],
		[79,LG,'fish_super',1]
	]
},{
	name:['Route 8',,,'Percorso 8','Ruta 8'],encounters:[
		[16,,'grass',30],
		[52,,'grass',30],
		[23,FR,'grass',20],
		[58,FR,'grass',20],
		[27,LG,'grass',20],
		[37,LG,'grass',20]
	]
},{
	name:['Route 7',,,'Percorso 7','Ruta 7'],encounters:[
		[52,,'grass',40],
		[16,,'grass',30],
		[43,FR,'grass',20],
		[69,LG,'grass',20],
		[58,FR,'grass',10],
		[37,LG,'grass',10]
	]
},{
	name:['Celadon City','Céladopole','Prismania City','Azzurropoli','Ciudad Azulona'],encounters:[
		[133,,'gift'],
		[54,FR,'surf',99],
		[79,LG,'surf',99],
		[109,,'surf',1],
		[129,,'fish_old',100],
		[129,,'fish_good',100],
		[129,,'fish_super',99],
		[88,,'fish_super',1],
		{group:['Game Corner','Casino','Prismania','Casinò','Casino'],encounters:[
			[63,,'gift'],
			[35,,'gift'],
			[147,,'gift'],
			[123,FR,'gift'],
			[127,LG,'gift'],
			[137,,'gift']
		]}
	]
},{
	name:['Pokémon Tower','Tour Pokémon','Pokémon-Turm','Torre Pokémon','Torre Pokémon'],encounters:[
		[105,,'interact'],
		{group:'3f',encounters:[
			[92,,'walk',90],
			[104,,'walk',9],
			[93,,'walk',1]
		]},
		{group:['4F-5F',,,,'P4-P5'],encounters:[
			[92,,'walk',86],
			[104,,'walk',9],
			[93,,'walk',5]
		]},
		{group:'6f',encounters:[
			[92,,'walk',85],
			[104,,'walk',9],
			[93,,'walk',6]
		]},
		{group:'7f',encounters:[
			[92,,'walk',75],
			[93,,'walk',15],
			[104,,'walk',10]
		]}
	]
},{
	name:['Saffron City',,'Saffronia City','Zafferanopoli','Ciudad Azafrán'],encounters:[
		[106,,'gift'],
		[107,,'gift']
	]
},{
	name:['Silph Co.','Sylphe SARL',,'Sliph SpA','Silph S.A.'],encounters:[
		[131,,'gift']
	]
},{
	name:['Route 12',,,'Percorso 12','Ruta 12'],encounters:[
		[43,FR,'grass',35],
		[69,LG,'grass',35],
		[16,,'grass',30],
		[48,,'grass',30],
		[44,FR,'grass',5],
		[70,LG,'grass',5],
		[72,,'surf',100],
		[129,,'fish_old',100],
		[116,FR,'fish_good',60],
		[116,LG,'fish_good',20],
		[98,FR,'fish_good',20],
		[98,LG,'fish_good',60],
		[129,,'fish_good',20],
		[116,FR,'fish_super',84],
		[98,LG,'fish_super',84],
		[130,,'fish_super',15],
		[54,FR,'fish_super',1],
		[79,LG,'fish_super',1],
		[143,,'interact']
	]
},{
	name:['Route 13',,,'Percorso 13','Ruta 13'],encounters:[
		[43,FR,'grass',35],
		[69,LG,'grass',35],
		[48,,'grass',30],
		[16,,'grass',20],
		[17,,'grass',5],
		[44,FR,'grass',5],
		[70,LG,'grass',5],
		[132,,'grass',5],
		[72,,'surf',100],
		[129,,'fish_old',100],
		[116,FR,'fish_good',60],
		[116,LG,'fish_good',20],
		[98,FR,'fish_good',20],
		[98,LG,'fish_good',60],
		[129,,'fish_good',20],
		[116,FR,'fish_super',84],
		[98,LG,'fish_super',84],
		[130,,'fish_super',15],
		[54,FR,'fish_super',1],
		[79,LG,'fish_super',1]
	]
},{
	name:['Route 14',,,'Percorso 14','Ruta 14'],encounters:[
		[43,FR,'grass',35],
		[69,LG,'grass',35],
		[48,,'grass',30],
		[132,,'grass',15],
		[16,,'grass',10],
		[17,,'grass',5],
		[44,FR,'grass',5],
		[70,LG,'grass',5]
	]
},{
	name:['Route 15',,,'Percorso 15','Ruta 15'],encounters:[
		[43,FR,'grass',35],
		[69,LG,'grass',35],
		[48,,'grass',30],
		[16,,'grass',20],
		[17,,'grass',5],
		[44,FR,'grass',5],
		[70,LG,'grass',5],
		[132,,'grass',5]
	]
},{
	name:['Fuchsia City','Parmanie','Fuchsania City','Fucsiapoli','Ciudad Fucsia'],encounters:[
		[54,FR,'surf',100],
		[79,LG,'surf',100],
		[129,,'fish_old',100],
		[60,,'fish_good',60],
		[118,,'fish_good',20],
		[129,,'fish_good',20],
		[118,,'fish_super',40],
		[119,,'fish_super',40],
		[130,,'fish_super',15],
		[54,FR,'fish_super',5],
		[79,LG,'fish_super',5]
	]
},{
	name:['Safari Zone',,'Safarizone','Zona Safari','Zona Safari'],encounters:[
		[29,LG,'grass',20],
		[30,LG,'grass',10],
		[32,FR,'grass',20],
		[33,FR,'grass',10],
		[102,,'grass',20],
		[54,FR,'surf',100],
		[79,LG,'surf',100],
		[129,,'fish_old',100],
		[60,,'fish_good',20],
		[118,,'fish_good',60],
		[129,,'fish_good',20],
		[54,FR,'fish_super',4],
		[79,LG,'fish_super',4],
		[118,,'fish_super',40],
		[119,,'fish_super',40],
		[147,,'fish_super',15],
		[148,,'fish_super',1],
		{group:['Center Area',,,,'Area central'],encounters:[
			[30,FR,'grass',5],
			[33,LG,'grass',5],
			[47,,'grass',5],
			[48,,'grass',15],
			[111,,'grass',20],
			[113,,'grass',1],
			[123,FR,'grass',4],
			[127,LG,'grass',4]
		]},
		{group:['Area 1',,,,'Área 1'],encounters:[
			[29,FR,'grass',5],
			[32,LG,'grass',5],
			[46,,'grass',15],
			[47,,'grass',5],
			[84,,'grass',20],
			[115,,'grass',4],
			[123,FR,'grass',1],
			[127,LG,'grass',1]
		]},
		{group:['Area 2',,,,'Área 2'],encounters:[
			[30,FR,'grass',5],
			[33,LG,'grass',5],
			[46,,'grass',15],
			[49,,'grass',5],
			[111,,'grass',20],
			[113,,'grass',4],
			[128,,'grass',1]
		]},
		{group:['Area 3',,,,'Área 3'],encounters:[
			[29,FR,'grass',5],
			[32,LG,'grass',5],
			[48,,'grass',15],
			[49,,'grass',5],
			[84,,'grass',20],
			[115,,'grass',1],
			[128,,'grass',4]
		]}
	]
},{
	name:['Route 18',,,'Percorso 18','Ruta 18'],encounters:[
		[19,,'grass',5],
		[20,,'grass',15],
		[21,,'grass',30],
		[22,,'grass',15],
		[84,,'grass',35],
		[108,FR,['trade',55]],
		[108,LG,['trade',80]]
	]
},{
	name:['Route 17',,'Radweg','Pista Ciclabile','Camino de bicis'],encounters:[
		[19,,'grass',5],
		[20,,'grass',25],
		[21,,'grass',30],
		[22,,'grass',5],
		[84,,'grass',35]
	]
},{
	name:['Route 16',,,'Percorso 16','Ruta 16'],encounters:[
		[84,,'grass',35],
		[19,,'grass',30],
		[21,,'grass',30],
		[20,,'grass',5],
		[143,,'interact']
	]
},{
	name:['Power Plant',,'Kraftwerk','Centrale Elettrica','Central Energía'],encounters:[
		[25,,'walk',25],
		[81,,'walk',30],
		[82,FR,'walk',10],
		[82,LG,'walk',15],
		[100,,'walk',30],
		[125,FR,'walk',5],
		[101,,'interact'],
		[145,,'interact']
	]
},{
	name:['Route 19',,,'Percorso 19','Ruta 19'],encounters:[
		[72,,'surf',100],
		[129,,'fish_old',100],
		[116,FR,'fish_good',60],
		[116,LG,'fish_good',20],
		[98,FR,'fish_good',20],
		[98,LG,'fish_good',60],
		[129,,'fish_good',20],
		[116,FR,'fish_super',80],
		[117,FR,'fish_super',4],
		[98,LG,'fish_super',80],
		[99,LG,'fish_super',4],
		[130,,'fish_super',15],
		[54,FR,'fish_super',1],
		[79,LG,'fish_super',1]
	]
},{
	name:['Seafoam Islands','Îles Écume','Seeschauminseln','Isole Spumarine','Islas Espuma'],encounters:[
		{group:'1f',encounters:[
			[54,FR,'cave',55],
			[79,LG,'cave',55],
			[41,,'cave',34],
			[42,,'cave',11]
		]},
		{group:'b1f',encounters:[
			[54,FR,'cave',40],
			[79,LG,'cave',40],
			[41,,'cave',34],
			[42,,'cave',11],
			[86,,'cave',10],
			[55,FR,'cave',5],
			[80,LG,'cave',5]
		]},
		{group:'b2f',encounters:[
			[54,FR,'cave',40],
			[79,LG,'cave',40],
			[86,,'cave',20],
			[41,,'cave',20],
			[42,,'cave',10],
			[55,FR,'cave',10],
			[80,LG,'cave',10]
		]},
		{group:'b3f',encounters:[
			[86,,'cave',40],
			[54,FR,'cave',20],
			[79,LG,'cave',20],
			[55,FR,'cave',15],
			[80,LG,'cave',15],
			[41,,'cave',10],
			[42,,'cave',10],
			[87,,'cave',5],
			[86,,'surf',60],
			[116,FR,'surf',30],
			[98,LG,'surf',30],
			[87,,'surf',5],
			[54,FR,'surf',4],
			[79,LG,'surf',4],
			[55,FR,'surf',1],
			[80,LG,'surf',1],
			[129,,'fish_old',100],
			[116,FR,'fish_good',60],
			[116,LG,'fish_good',20],
			[98,FR,'fish_good',20],
			[98,LG,'fish_good',60],
			[129,,'fish_good',20],
			[116,FR,'fish_super',80],
			[98,LG,'fish_super',80],
			[130,,'fish_super',16],
			[54,FR,'fish_super',4],
			[79,LG,'fish_super',4]
		]},
		{group:'b4f',encounters:[
			[86,,'cave',50],
			[42,,'cave',15],
			[55,FR,'cave',15],
			[80,LG,'cave',15],
			[54,FR,'cave',10],
			[79,LG,'cave',10],
			[87,,'cave',10],
			[86,,'surf',60],
			[116,FR,'surf',30],
			[98,LG,'surf',30],
			[87,,'surf',5],
			[54,FR,'surf',4],
			[79,LG,'surf',4],
			[55,FR,'surf',1],
			[80,LG,'surf',1],
			[129,,'fish_old',100],
			[116,FR,'fish_good',60],
			[116,LG,'fish_good',20],
			[98,FR,'fish_good',20],
			[98,LG,'fish_good',60],
			[129,,'fish_good',20],
			[116,FR,'fish_super',80],
			[98,LG,'fish_super',80],
			[130,,'fish_super',16],
			[54,FR,'fish_super',4],
			[79,LG,'fish_super',4],
			[144,,'interact']
		]}
	]
},{
	name:['Route 20',,,'Percorso 20','Ruta 20'],encounters:[
		[72,,'surf',100],
		[129,,'fish_old',100],
		[116,FR,'fish_good',60],
		[116,LG,'fish_good',20],
		[98,FR,'fish_good',20],
		[98,LG,'fish_good',60],
		[129,,'fish_good',20],
		[116,FR,'fish_super',80],
		[117,FR,'fish_super',4],
		[98,LG,'fish_super',80],
		[99,LG,'fish_super',4],
		[130,,'fish_super',15],
		[54,FR,'fish_super',1],
		[79,LG,'fish_super',1]
	]
},{
	name:['Cinnabar Island','Cramois\'île','Zinnoberinsel','Isola Cannella','Isla Canela'],encounters:[
		[72,,'surf',100],
		[129,,'fish_old',100],
		[116,FR,'fish_good',60],
		[116,LG,'fish_good',20],
		[98,FR,'fish_good',20],
		[98,LG,'fish_good',60],
		[129,,'fish_good',20],
		[90,FR,'fish_super',40],
		[116,FR,'fish_super',40],
		[98,LG,'fish_super',40],
		[120,LG,'fish_super',40],
		[130,,'fish_super',15],
		[117,FR,'fish_super',4],
		[80,LG,'fish_super',4],
		[54,FR,'fish_super',1],
		[79,LG,'fish_super',1],
		{group:['Pokémon Lab','Laboratoire Pokémon','Pokémon-Labor','Laboratorio Pokémon','Laboratorio Pokémon'],encounters:[
				[86,,['trade',77]],
				[101,,['trade',26]],
				[114,,['trade',48]],
				[138,,'revive_fossil'],
				[140,,'revive_fossil'],
				[142,,'revive_fossil']
			]
		}
	]
},{
	name:['Pokémon Mansion',,'Pokémon-Haus','Villa Pokémon','Mansión Pokémon'],encounters:[
		[20,,'walk',30],
		[37,LG,'walk',15],
		[58,FR,'walk',15],
		[88,FR,'walk',5],
		[88,LG,'walk',30],
		[89,LG,'walk',5],
		[109,FR,'walk',30],
		[109,LG,'walk',5],
		[110,FR,'walk',5],
		{group:['1F-3F',,,,'P1-P3'],encounters:[
			[19,,'walk',15]
		]},
		{group:'b1f',encounters:[
			[19,,'walk',5],
			[132,,'walk',10]
		]}
	]
},{
	name:['Route 21',,,'Percorso 21','Ruta 21'],encounters:[
		[114,,'grass',100],
		[72,,'surf',100],
		[129,,'fish_old',100],
		[116,FR,'fish_good',60],
		[116,LG,'fish_good',20],
		[98,FR,'fish_good',20],
		[98,LG,'fish_good',60],
		[129,,'fish_good',20],
		[116,FR,'fish_super',80],
		[117,FR,'fish_super',4],
		[98,LG,'fish_super',80],
		[99,LG,'fish_super',4],
		[130,,'fish_super',15],
		[54,FR,'fish_super',1],
		[79,LG,'fish_super',1]
	]
},{
	name:['Route 22',,,'Percorso 22','Ruta 22'],encounters:[
		[19,,'grass',45],
		[56,,'grass',45],
		[21,,'grass',10],
		[54,FR,'surf',100],
		[79,LG,'surf',100],
		[129,,'fish_old',100],
		[60,,'fish_good',60],
		[118,,'fish_good',20],
		[129,,'fish_good',20],
		[60,,'fish_super',40],
		[61,,'fish_super',40],
		[130,,'fish_super',15],
		[54,FR,'fish_super',5],
		[79,LG,'fish_super',5]
	]
},{
	name:['Route 23',,,'Percorso 23','Ruta 23'],encounters:[
		[56,,'grass',30],
		[22,,'grass',25],
		[23,FR,'grass',20],
		[27,LG,'grass',20],
		[21,,'grass',15],
		[24,FR,'grass',5],
		[28,LG,'grass',5],
		[57,,'grass',5],
		[54,FR,'surf',100],
		[79,LG,'surf',100],
		[129,,'fish_old',100],
		[60,,'fish_good',60],
		[118,,'fish_good',20],
		[129,,'fish_good',20],
		[60,,'fish_super',40],
		[61,,'fish_super',40],
		[130,,'fish_super',15],
		[54,FR,'fish_super',5],
		[79,LG,'fish_super',5]
	]
},{
	name:['Victory Road','Route Victoire','Siegesstraße','Via Vittoria','Calle Victoria'],encounters:[
		[66,,'cave',20],
		[74,,'cave',20],
		[41,,'cave',10],
		[24,FR,'cave',5],
		[28,LG,'cave',5],
		[42,,'cave',5],
		[67,,'cave',5],
		[105,,'cave',5],
		{group:['1F and 3F',,,,'P1 y P3'],encounters:[
			[95,,'cave',30]
		]},
		{group:'2f',encounters:[
			[95,,'cave',20],
			[57,,'cave',10]
		]}
	]
},{
	name:['Roaming Kanto'],encounters:[
		[243,,'roaming'],
		[244,,'roaming'],
		[245,,'roaming']
	]
},{
	name:['Cerulean Cave','Canada','Geheimdungeon','Grotta Ignota','Mazmorra Rara'],encounters:[
		[54,FR,'surf',65],
		[79,LG,'surf',65],
		[55,FR,'surf',35],
		[80,LG,'surf',35],
		[129,,'fish_old',100],
		[60,,'fish_good',60],
		[118,,'fish_good',20],
		[129,,'fish_good',20],
		[60,,'fish_super',40],
		[61,,'fish_super',40],
		[74,,'rock_smash',65],
		[75,,'rock_smash',35],
		{group:'1f',encounters:[
			[47,,'cave',25],
			[82,,'cave',20],
			[42,,'cave',14],
			[57,,'cave',11],
			[132,,'cave',11],
			[67,,'cave',10],
			[101,,'cave',5],
			[202,,'cave',4],
			[130,,'fish_super',15],
			[54,FR,'fish_super',5],
			[79,LG,'fish_super',5]
		]},
		{group:['2F and B1F',,,,'P2 y S1'],encounters:[
			[47,,'cave',14],
			[82,,'cave',10],
			[101,,'cave',4]
		]},
		{group:'2f',encounters:[
			[42,,'cave',25],
			[67,,'cave',20],
			[64,,'cave',11],
			[132,,'cave',11],
			[202,,'cave',5]
		]},
		{group:'b1f',encounters:[
			[64,,'cave',25],
			[132,,'cave',25],
			[42,,'cave',11],
			[67,,'cave',10],
			[202,,'cave',1],
			[130,,'fish_super',16],
			[54,FR,'fish_super',4],
			[79,LG,'fish_super',4],
			[150,,'interact']
		]}
	]
},{
	name:['Kindle Road','Route Tison','Glühweg','Via Vulcanica','Camino Candente'],encounters:[
		[77,,'grass',30],
		[21,,'grass',25],
		[22,,'grass',10],
		[52,,'grass',10],
		[74,,'grass',10],
		[53,,'grass',5],
		[54,FR,'grass',5],
		[79,LG,'grass',5],
		[78,,'grass',5],
		[72,,'surf',95],
		[73,,'surf',5],
		[129,,'fish_old',100],
		[116,FR,'fish_good',80],
		[98,LG,'fish_good',80],
		[129,,'fish_good',20],
		[116,FR,'fish_super',80],
		[98,LG,'fish_super',80],
		[130,,'fish_super',15],
		[117,FR,'fish_super',4],
		[99,LG,'fish_super',4],
		[54,FR,'fish_super',1],
		[79,LG,'fish_super',1],
		[74,,'rock_smash',95],
		[75,,'rock_smash',5]
	]
},{
	name:['Mt. Ember','Mont Braise','Glutberg','Monte Brace','Monte Ascuas'],encounters:[
		{group:['Base area',,,,'Base'],encounters:[
			[77,,'grass',35],
			[22,,'grass',25],
			[21,FR,'grass',15],
			[21,LG,'grass',10],
			[66,,'grass',10],
			[74,,'grass',10],
			[78,,'grass',5],
			[126,LG,'grass',5],
			[74,,'rock_smash',95],
			[75,,'rock_smash',5]
		]},
		{group:['Summit path Rooms 1 and 3',,,,'Camino cima Salas 1 y 3'],encounters:[
			[66,,'cave',50],
			[74,,'cave',50]
		]},
		{group:['Summit path Room 2',,,,'Camino cima Sala 2'],encounters:[
			[66,,'cave',40],
			[74,,'cave',40],
			[67,,'cave',20],
			[74,,'rock_smash',95],
			[75,,'rock_smash',5]
		]},
		{group:'summit',encounters:[
			[74,,'rock_smash',95],
			[75,,'rock_smash',5],
			[146,,'interact']
		]},
		{group:['Ruby path 1F',,,,'Camino hacia el Rubí P1'],encounters:[
			[74,,'cave',50],
			[66,,'cave',40],
			[67,,'cave',10],
			[74,,'rock_smash',65],
			[75,,'rock_smash',35]
		]},
		{group:['Ruby path B1F and B5F',,,,'Camino hacia el Rubí S1 y S5'],encounters:[
			[74,,'cave',70],
			[218,,'cave',30],
			[74,,'rock_smash',65],
			[75,,'rock_smash',35]
		]},
		{group:['Ruby path B2F and B4F',,,,'Camino hacia el Rubí S2 y S4'],encounters:[
			[218,,'cave',60],
			[74,,'cave',40],
			[74,,'rock_smash',65],
			[75,,'rock_smash',35]
		]},
		{group:['Ruby path B3F',,,,'Camino hacia el Rubí S3'],encounters:[
			[218,,'cave',100],
			[218,,'rock_smash',90],
			[219,,'rock_smash',10]
		]}
	]
},{
	name:['Four Island',,'Eiland Vier','Quartisola','Isla Quarta'],encounters:[
		[194,FR,'surf',70],
		[183,LG,'surf',70],
		[54,FR,'surf',30],
		[79,LG,'surf',30],
		[129,,'fish_old',100],
		[60,,'fish_good',60],
		[118,,'fish_good',20],
		[129,,'fish_good',20],
		[60,,'fish_super',40],
		[61,,'fish_super',40],
		[130,,'fish_super',15],
		[54,FR,'fish_super',5],
		[79,LG,'fish_super',5]
	]
},{
	name:['Five Island',,'Eiland Fünf','Quintisola','Isla Inta'],encounters:[
		[72,,'surf',65],
		[187,,'surf',30],
		[73,,'surf',5],
		[129,,'fish_old',100],
		[116,FR,'fish_good',80],
		[98,LG,'fish_good',80],
		[129,,'fish_good',20],
		[90,FR,'fish_super',40],
		[116,FR,'fish_super',40],
		[98,LG,'fish_super',40],
		[120,LG,'fish_super',40],
		[130,,'fish_super',15],
		[117,FR,'fish_super',4],
		[99,LG,'fish_super',4],
		[54,FR,'fish_super',1],
		[79,LG,'fish_super',1]
	]
},{
	name:['Five Isle Meadow',,'Eiland 5-Weide','Prato Quintisola','Prado Isla Inta'],encounters:[
		[161,,'grass',30],
		[16,,'grass',20],
		[17,,'grass',15],
		[187,,'grass',15],
		[52,,'grass',10],
		[53,,'grass',5],
		[54,FR,'grass',5],
		[79,LG,'grass',5],
		[72,,'surf',65],
		[187,,'surf',30],
		[73,,'surf',5],
		[129,,'fish_old',100],
		[116,FR,'fish_good',80],
		[98,LG,'fish_good',80],
		[129,,'fish_good',20],
		[116,FR,'fish_super',40],
		[211,FR,'fish_super',40],
		[98,LG,'fish_super',40],
		[223,LG,'fish_super',40],
		[130,,'fish_super',15],
		[117,FR,'fish_super',4],
		[99,LG,'fish_super',4],
		[54,FR,'fish_super',1],
		[79,LG,'fish_super',1]
	]
},{
	name:['Birth Island','Île Aurore','Entstehungsinsel','Isola Materna','Isla Origen'],encounters:[
		[alternateForm(386,1),FR,'event'],
		[alternateForm(386,2),LG,'event'],
	]
},{
	name:['Navel Rock','Roc Nombri','Nabelfels','Monte Cordone','Roca Ombligo'],encounters:[
		[249,,'event'],
		[250,,'event']
	]
},{
	name:['Berry Forest',,'Beerenforst','Bosco Baccoso','Bosque Baya'],encounters:[
		[17,,'grass',20],
		[44,FR,'grass',20],
		[70,LG,'grass',20],
		[16,,'grass',10],
		[43,FR,'grass',10],
		[69,LG,'grass',10],
		[48,,'grass',10],
		[96,,'grass',10],
		[49,,'grass',5],
		[54,FR,'grass',5],
		[79,LG,'grass',5],
		[97,,'grass',5],
		[102,,'grass',5],
		[54,FR,'surf',95],
		[79,LG,'surf',95],
		[55,FR,'surf',5],
		[80,LG,'surf',5],
		[129,,'fish_old',100],
		[118,,'fish_good',60],
		[60,,'fish_good',20],
		[129,,'fish_good',20],
		[118,,'fish_super',40],
		[119,,'fish_super',40],
		[130,,'fish_super',15],
		[54,FR,'fish_super',5],
		[79,LG,'fish_super',5],
		[97,,'interact']
	]
},{
	name:['Bond Bridge','Pont du Lien','Bundbrücke','Ponte Abbraccio','Puente Unión'],encounters:[
		[16,,'grass',30],
		[43,FR,'grass',20],
		[69,LG,'grass',20],
		[17,,'grass',15],
		[44,FR,'grass',10],
		[70,LG,'grass',10],
		[52,,'grass',10],
		[48,,'grass',5],
		[53,,'grass',5],
		[54,FR,'grass',5],
		[79,LG,'grass',5],
		[72,,'surf',95],
		[73,,'surf',5],
		[129,,'fish_old',100],
		[116,FR,'fish_good',80],
		[98,LG,'fish_good',80],
		[129,,'fish_good',20],
		[116,FR,'fish_super',80],
		[98,LG,'fish_super',80],
		[130,,'fish_super',15],
		[117,FR,'fish_super',4],
		[99,LG,'fish_super',4],
		[54,FR,'fish_super',1],
		[79,LG,'fish_super',1]
	]
},{
	name:['Canyon Entrance',,'Schluchteingang','Ingresso Canyon','Entrada al Cañón'],encounters:[
		[161,,'grass',30],
		[21,,'grass',20],
		[22,,'grass',15],
		[231,,'grass',15],
		[52,,'grass',10],
		[53,,'grass',5],
		[54,FR,'grass',5],
		[79,LG,'grass',5]
	]
},{
	name:['Cape Brink','Cap Falaise','Kap Kante','Capo Estremo','Cabo Extremo'],encounters:[
		[43,FR,'grass',30],
		[69,LG,'grass',30],
		[21,,'grass',20],
		[44,FR,'grass',15],
		[70,LG,'grass',15],
		[22,,'grass',10],
		[52,,'grass',10],
		[53,,'grass',5],
		[54,FR,'grass',5],
		[79,LG,'grass',5],
		[55,FR,'grass',5],
		[80,LG,'grass',5],
		[54,FR,'surf',95],
		[79,LG,'surf',95],
		[55,FR,'surf',5],
		[80,LG,'surf',5],
		[129,,'fish_old',100],
		[60,,'fish_good',60],
		[118,,'fish_good',20],
		[129,,'fish_good',20],
		[60,,'fish_super',40],
		[61,,'fish_super',40],
		[130,,'fish_super',15],
		[54,FR,'fish_super',5],
		[79,LG,'fish_super',5]
	]
},{
	name:['Green Path',,'Grüner Pfad','Via Verde','Vía Verde'],encounters:[
		[72,,'surf',95],
		[73,,'surf',5],
		[129,,'fish_old',100],
		[116,FR,'fish_good',80],
		[98,LG,'fish_good',80],
		[129,,'fish_good',20],
		[116,FR,'fish_super',40],
		[211,FR,'fish_super',40],
		[98,LG,'fish_super',40],
		[223,LG,'fish_super',40],
		[130,,'fish_super',15],
		[117,FR,'fish_super',4],
		[99,LG,'fish_super',4],
		[54,FR,'fish_super',1],
		[79,LG,'fish_super',1]
	]
},{
	name:['Icefall Cave',,'Eiskaskadenhöhle','Grotta Gelata','Cueva Glaciada'],encounters:[
		[42,,'cave',25],
		[41,,'cave',10],
		[129,,'fish_old',100],
		[129,,'fish_good',20],
		[130,,'fish_super',15],
		[54,FR,'fish_super',5],
		[79,LG,'fish_super',5],
		{group:'entrance',encounters:[
			[86,,'cave',40],
			[87,,'cave',20],
			[54,FR,'cave',5],
			[79,LG,'cave',5],
			[86,,'surf',60],
			[54,FR,'surf',30],
			[79,LG,'surf',30],
			[87,,'surf',5],
			[194,FR,'surf',5],
			[183,LG,'surf',5],
			[60,,'fish_good',60],
			[118,,'fish_good',20],
			[60,,'fish_super',40],
			[61,,'fish_super',40]
		]},
		{group:'inner_cave',encounters:[
			[220,,'cave',50],
			[86,,'cave',10],
			[225,FR,'cave',5],
			[215,LG,'cave',5]
		]},
		{group:'back_cave',encounters:[
			[86,,'cave',40],
			[87,,'cave',20],
			[54,FR,'cave',5],
			[79,LG,'cave',5],
			[72,,'surf',95],
			[73,,'surf',4],
			[131,,'surf',1],
			[116,FR,'fish_good',80],
			[98,LG,'fish_good',80],
			[90,FR,'fish_super',40],
			[116,FR,'fish_super',40],
			[98,LG,'fish_super',40],
			[120,LG,'fish_super',40],
			[117,FR,'fish_super',4],
			[99,LG,'fish_super',4]
		]}
	]
},{
	name:['Three Isle Port','Canada','Tri-Eiland-Hafen','Porto Terzisola','Puerto Isla Tera'],encounters:[
		[206,,'grass',100]
	]
},{
	name:['Lost Cave',,'Verlorene Höhle','Grotta Sperduta','Cueva Perdida'],encounters:[
		[93,,'cave',30],
		[92,,'cave',25],
		[41,,'cave',20],
		[42,,'cave',20],
		[198,FR,'cave',5],
		[200,LG,'cave',5],
		{group:['Item room',,,,'Sala de objetos'],encounters:[
			[93,,'cave',30],
			[41,,'cave',20],
			[92,,'cave',20],
			[198,FR,'cave',20],
			[200,LG,'cave',20],
			[42,,'cave',10]
		]}
	]
},{
	name:['Memorial Pillar',,'Gedenksäule','Colonna Rocciosa','Pilar Recuerdo'],encounters:[
		[187,,'grass',100],
		[72,,'surf',65],
		[187,,'surf',30],
		[73,,'surf',5],
		[129,,'fish_old',100],
		[116,FR,'fish_good',80],
		[98,LG,'fish_good',80],
		[129,,'fish_good',20],
		[116,FR,'fish_super',40],
		[211,FR,'fish_super',40],
		[98,LG,'fish_super',40],
		[223,LG,'fish_super',40],
		[130,,'fish_super',15],
		[117,FR,'fish_super',4],
		[99,LG,'fish_super',4],
		[54,FR,'fish_super',1],
		[79,LG,'fish_super',1]
	]
},{
	name:['Outcast Island',,'Fern-Eiland','Isola Solitaria','Isla Aislada'],encounters:[
		[72,,'surf',95],
		[73,,'surf',5],
		[129,,'fish_old',100],
		[116,FR,'fish_good',80],
		[98,LG,'fish_good',80],
		[129,,'fish_good',20],
		[116,FR,'fish_super',40],
		[211,FR,'fish_super',40],
		[98,LG,'fish_super',40],
		[223,LG,'fish_super',40],
		[130,,'fish_super',15],
		[117,FR,'fish_super',4],
		[99,LG,'fish_super',4],
		[54,FR,'fish_super',1],
		[79,LG,'fish_super',1]
	]
},{
	name:['Altering Cave','Grotte Métamo','Wandelhöhle','Grotta Mutevole','Cueva Cambiante'],encounters:[
		[41,,'walk',100],
		[179,,'event'],
		[190,,'event'],
		[204,,'event'],
		[213,,'event'],
		[216,,'event'],
		[228,,'event'],
		[234,,'event'],
		[235,,'event']
	]
},{
	name:['Pattern Bush',,'Musterbuschwald','Bosco Disegnato','Bosquejo'],encounters:[
		[10,,'grass',10],
		[11,FR,'grass',5],
		[11,LG,'grass',20],
		[13,,'grass',10],
		[14,FR,'grass',20],
		[14,LG,'grass',5],
		[165,FR,'grass',5],
		[165,LG,'grass',30],
		[167,FR,'grass',30],
		[167,LG,'grass',5],
		[214,,'grass',20]
	]
},{
	name:['Resort Gorgeous','Camp de Vacances','Ferienparadies','Perla dei Mari','Lugar de Recreo'],encounters:[
		[72,,'surf',65],
		[187,,'surf',30],
		[73,,'surf',5],
		[129,,'fish_old',100],
		[116,FR,'fish_good',80],
		[98,LG,'fish_good',80],
		[129,,'fish_good',20],
		[116,FR,'fish_super',40],
		[211,FR,'fish_super',40],
		[98,LG,'fish_super',40],
		[223,LG,'fish_super',40],
		[130,,'fish_super',15],
		[117,FR,'fish_super',4],
		[99,LG,'fish_super',4],
		[54,FR,'fish_super',1],
		[79,LG,'fish_super',1]
	]
},{
	name:['Ruin Valley','Canada','Ruinental','Valle Antica','Valle Ruinas'],encounters:[
		[177,,'grass',25],
		[21,,'grass',20],
		[22,,'grass',10],
		[52,,'grass',10],
		[193,,'grass',10],
		[194,FR,'grass',10],
		[183,LG,'grass',10],
		[53,,'grass',5],
		[54,FR,'grass',5],
		[79,LG,'grass',5],
		[202,,'grass',5],
		[194,FR,'surf',100],
		[183,LG,'surf',100],
		[129,,'fish_old',100],
		[60,,'fish_good',60],
		[118,,'fish_good',20],
		[129,,'fish_good',20],
		[60,,'fish_super',40],
		[61,,'fish_super',40],
		[130,,'fish_super',15],
		[54,FR,'fish_super',5],
		[79,LG,'fish_super',5]
	]
},{
	name:['Sevault Canyon',,'7-Schatzschlucht','Canyon Seption','Cañón Sétano'],encounters:[
		[74,,'grass',20],
		[231,,'grass',20],
		[22,FR,'grass',10],
		[22,LG,'grass',15],
		[52,,'grass',10],
		[104,,'grass',10],
		[105,,'grass',10],
		[53,,'grass',5],
		[95,,'grass',5],
		[227,FR,'grass',5],
		[246,,'grass',5],
		[74,,'rock_smash',65],
		[75,,'rock_smash',35]
	]
},{
	name:['Tanoby Chambers','Chambres Tanoby','Tanibo-Kammern','Sale Florabeto','Cámaras Sete'],encounters:[
		{group:['Monean Chamber','Chambre Anemune','Einamon-Kammer','Sala A-loe','Cámara Anémuna'],encounters:[
			[alternateForm(201,0),,'cave',99],
			[alternateForm(201,26),,'cave',1]
		]},
		{group:['Liptoo Chamber','Chambre Deulipe','Pezwulp-Kammer','Sala B-etulla','Cámara Tulipdos'],encounters:[
			[alternateForm(201,2),,'cave',50],
			[alternateForm(201,3),,'cave',30],
			[alternateForm(201,7),,'cave',14],
			[alternateForm(201,20),,'cave',5],
			[alternateForm(201,14),,'cave',1]
		]},
		{group:['Weepth Chamber','Chambre Prois','Dreiecke-Kammer','Sala C-iclamino','Cámara Trisante'],encounters:[
			[alternateForm(201,13),,'cave',60],
			[alternateForm(201,18),,'cave',30],
			[alternateForm(201,8),,'cave',8],
			[alternateForm(201,4),,'cave',2]
		]},
		{group:['Dilford Chamber','Chambre Jonquatre','Vierzisse-Kammer','Sala D-afne','Cámara Quarciso'],encounters:[
			[alternateForm(201,15),,'cave',40],
			[alternateForm(201,9),,'cave',20],
			[alternateForm(201,11),,'cave',20],
			[alternateForm(201,17),,'cave',14],
			[alternateForm(201,16),,'cave',6]
		]},
		{group:['Scufib Chamber','Chambre Hibicinq','Fünibisku-Kammer','Sala E-dera','Cámara Hibinca'],encounters:[
			[alternateForm(201,24),,'cave',40],
			[alternateForm(201,6),,'cave',25],
			[alternateForm(201,19),,'cave',20],
			[alternateForm(201,5),,'cave',13],
			[alternateForm(201,10),,'cave',2]
		]},
		{group:['Rixy Chamber','Chambre Irix','Lilechs-Kammer','Sala F-elce','Cámara Seiris'],encounters:[
			[alternateForm(201,21),,'cave',50],
			[alternateForm(201,22),,'cave',30],
			[alternateForm(201,23),,'cave',10],
			[alternateForm(201,12),,'cave',8],
			[alternateForm(201,1),,'cave',2]
		]},
		{group:['Viapois Chamber','Chambre Poinsept','Sieborbia-Kammer','Sala G-ardenia','Cámara Pasiete'],encounters:[
			[alternateForm(201,25),,'cave',99],
			[alternateForm(201,27),,'cave',1]
		]}
	]
},{
	name:['Tanoby Ruins','Ruines Tanoby','Tanibo-Ruinen','Rovine Florabeto','Ruinas Sete'],encounters:[
		[72,FR,'surf',95],
		[72,LG,'surf',90],
		[73,,'surf',5],
		[226,LG,'surf',5],
		[129,,'fish_old',100],
		[116,FR,'fish_good',80],
		[98,LG,'fish_good',80],
		[129,,'fish_good',20],
		[116,FR,'fish_super',40],
		[211,FR,'fish_super',40],
		[98,LG,'fish_super',40],
		[223,LG,'fish_super',40],
		[130,,'fish_super',15],
		[117,FR,'fish_super',4],
		[99,LG,'fish_super',4],
		[54,FR,'fish_super',1],
		[79,LG,'fish_super',1]
	]
},{
	name:['Trainer Tower',,'Trainerturm','Torre Allenatori','Torre Desafío'],encounters:[
		[72,FR,'surf',95],
		[72,LG,'surf',90],
		[73,,'surf',5],
		[226,LG,'surf',5],
		[129,,'fish_old',100],
		[116,FR,'fish_good',80],
		[98,LG,'fish_good',80],
		[129,,'fish_good',20],
		[116,FR,'fish_super',40],
		[211,FR,'fish_super',40],
		[98,LG,'fish_super',40],
		[223,LG,'fish_super',40],
		[130,,'fish_super',15],
		[117,FR,'fish_super',4],
		[99,LG,'fish_super',4],
		[54,FR,'fish_super',1],
		[79,LG,'fish_super',1]
	]
},{
	name:['Treasure Beach',,'Schatzgestade','Riva del Tesoro','Playa Tesoro'],encounters:[
		[21,,'grass',30],
		[114,,'grass',30],
		[22,,'grass',20],
		[52,,'grass',10],
		[53,,'grass',5],
		[54,FR,'grass',5],
		[79,LG,'grass',5],
		[72,,'surf',95],
		[73,,'surf',5],
		[129,,'fish_old',100],
		[116,FR,'fish_good',80],
		[98,LG,'fish_good',80],
		[129,,'fish_good',20],
		[116,FR,'fish_super',80],
		[98,LG,'fish_super',80],
		[130,,'fish_super',15],
		[117,FR,'fish_super',4],
		[99,LG,'fish_super',4],
		[54,FR,'fish_super',1],
		[79,LG,'fish_super',1]
	]
},{
	name:['Water Labyrinth','Canada','Wasserirrgarten','Labirinto Marino','Aquarinto'],encounters:[
		[72,,'surf',65],
		[187,,'surf',30],
		[73,,'surf',5],
		[129,,'fish_old',100],
		[116,FR,'fish_good',80],
		[98,LG,'fish_good',80],
		[129,,'fish_good',20],
		[116,FR,'fish_super',40],
		[211,FR,'fish_super',40],
		[98,LG,'fish_super',40],
		[223,LG,'fish_super',40],
		[130,,'fish_super',15],
		[117,FR,'fish_super',4],
		[99,LG,'fish_super',4],
		[54,FR,'fish_super',1],
		[79,LG,'fish_super',1],
		[175,,'gift_egg']
	]
},{
	name:['Water Path',,'Wasserweg','Via Marina','Vía Acuática'],encounters:[
		[161,,'grass',30],
		[21,,'grass',20],
		[22,,'grass',15],
		[43,FR,'grass',10],
		[69,LG,'grass',10],
		[52,,'grass',10],
		[44,FR,'grass',5],
		[70,LG,'grass',5],
		[53,,'grass',5],
		[54,FR,'grass',5],
		[79,LG,'grass',5],
		[72,,'surf',95],
		[73,,'surf',5],
		[129,,'fish_old',100],
		[116,FR,'fish_good',80],
		[98,LG,'fish_good',80],
		[129,,'fish_good',20],
		[116,FR,'fish_super',40],
		[211,FR,'fish_super',40],
		[98,LG,'fish_super',40],
		[223,LG,'fish_super',40],
		[130,,'fish_super',15],
		[117,FR,'fish_super',4],
		[99,LG,'fish_super',4],
		[54,FR,'fish_super',1],
		[79,LG,'fish_super',1]
	]
}
];