/* Minidex - Game data - Gen VIII SwSh */
const GENERATION=8;
const GAME_ID='swsh';
const GAMES=[
	['Sword','Épée','Schwert','Spada','Espada',,'剑'],
	['Shield','Bouclier','Schild','Scudo','Escudo',,'盾'],
	['The Isle of Armor','L\'île solitaire de l\'Armure','Die Insel der Rüstung','L\'isola solitaria dell\'armatura','La isla de la armadura',,'铠岛'],
	['The Crown Tundra','Les terres enneigées de la Couronne','Die Schneelande der Krone','Le terre innevate della corona','Las nieves de la corona',,'冠之雪原']
];
const REGIONAL_DEXES=[
	{
		name:['Galar Pokédex',,'Galar-Pokédex',,'Pokédex de Galar',,'伽勒尔地区宝可梦'],
		ids:[810,811,812,813,814,815,816,817,818,824,825,826,10,11,12,736,737,738,163,164,821,822,823,819,820,519,520,521,827,828,263,264,862,831,832,270,271,272,273,274,275,833,834,509,510,835,836,659,660,572,573,761,762,763,43,44,45,182,406,315,407,278,279,595,596,309,310,37,38,58,59,582,583,584,220,221,473,225,361,362,478,343,344,749,750,557,558,622,623,517,518,177,178,759,760,459,460,98,99,194,195,341,342,290,291,292,236,106,107,237,674,675,599,600,601,415,416,436,437,280,281,282,475,425,426,829,830,420,421,434,435,535,536,537,355,356,477,66,67,68,92,93,94,129,130,118,119,223,224,90,91,349,350,550,746,771,568,569,850,851,837,838,839,50,51,529,530,524,525,526,532,533,534,527,528,714,715,95,208,846,847,52,863,53,868,869,742,743,597,598,710,711,172,25,26,133,134,135,136,196,197,470,471,700,840,841,842,677,678,684,685,682,683,751,752,360,202,83,865,170,171,453,454,559,560,618,213,339,340,422,423,767,768,688,689,222,864,859,860,861,856,857,858,757,758,624,625,538,539,109,110,438,185,173,35,36,175,176,468,446,143,546,547,111,112,464,574,575,576,577,578,579,588,589,616,617,605,606,613,614,627,628,629,630,451,452,607,608,609,686,687,215,461,302,303,556,561,447,448,324,778,878,879,211,592,593,747,748,845,848,849,843,844,449,450,632,631,694,695,701,328,329,330,610,611,612,562,867,563,679,680,681,77,78,854,855,876,708,709,755,756,765,766,877,870,780,776,777,872,873,852,853,871,458,226,320,321,712,713,781,131,337,338,439,122,866,554,555,874,875,884,479,132,880,881,882,883,4,5,6,772,773,246,247,248,633,634,635,704,705,706,782,783,784,885,886,887,888,889,890],
		prefix:'G'
	},{
		name:['Isle of Armor','Isolarmure','Rüstungsinsel','Isola dell\'Armatura','Isla de la Armadura',,'铠岛'],
		ids:[79,80,199,427,428,440,113,242,819,820,174,39,40,824,825,826,753,754,840,841,842,661,662,663,403,404,405,707,624,625,63,64,65,280,281,282,475,98,99,72,73,129,130,223,224,458,226,278,279,451,452,206,626,108,463,833,834,194,195,704,705,706,621,616,617,588,589,1,2,3,7,8,9,543,544,545,590,591,764,114,465,453,454,172,25,26,570,571,765,766,341,342,845,118,119,846,847,120,121,891,892,587,702,877,81,82,462,686,687,746,318,319,506,507,508,128,241,123,212,127,214,557,558,767,768,871,747,748,852,853,90,91,769,770,425,426,339,340,298,183,184,60,61,62,186,54,55,293,294,295,527,528,227,524,525,526,744,745,757,758,559,560,619,620,782,783,784,27,28,104,105,115,324,843,844,551,552,553,627,628,629,630,111,112,464,636,637,170,171,320,321,592,593,690,691,692,693,116,117,230,548,549,415,416,102,103,132,137,233,474,893],
		prefix:'A'
	},{
		name:['Armor Extras',,,,'Extras Armadura'],
		ids:[722,725,726,727,728,729,730],
		nonNumeric:true,
		prefix:'A'
	},{
		name:['Crown Tundra','Couronneige','Kronen-Schneelande','Landa Corona','Nieves de la Corona',,'王冠雪原'],
		ids:[872,873,831,832,819,820,220,221,473,439,122,866,238,124,239,125,466,240,126,467,531,582,583,584,361,362,478,215,461,615,459,460,708,709,333,334,859,860,861,856,857,858,173,35,36,778,442,607,608,609,574,575,576,577,578,579,532,533,534,339,340,129,130,550,29,30,31,32,33,34,263,264,862,133,134,135,136,197,196,471,470,700,696,697,698,699,436,437,874,875,751,752,595,596,588,589,616,617,850,851,632,631,554,555,77,78,359,878,879,885,886,887,371,372,373,443,444,445,621,225,613,614,138,139,140,141,142,703,374,375,376,854,855,447,448,633,634,635,246,247,248,712,713,41,42,169,564,565,566,567,343,344,622,623,835,836,877,871,363,364,365,781,821,822,823,829,830,546,547,213,876,446,143,302,303,837,838,839,597,598,714,715,345,346,347,348,369,349,350,131,304,305,306,147,148,149,377,378,379,894,895,144,145,146,638,639,640,896,897,898],
		prefix:'C'
	},{
		name:['Crown Extras',,,,'Extras Corona'],
		ids:[150,243,244,245,249,250,380,381,382,383,384,480,481,482,483,484,485,486,487,488,641,642,643,644,645,646,647,716,717,718,785,786,787,788,789,790,791,792,793,794,795,796,797,798,799,800,803,804,805,806],
		nonNumeric:true,
		prefix:'C'
	},{
		name:['Home exclusives',,'Exklusiv bei Home',,'Exclusivos de Home',,'特殊精灵'],
		ids:[151,251,385,494,649,719,721,801,802,807,808,809],
		nonNumeric:true
	}
];
const REGION_NAME=['Galar',,,,,,'伽勒尔地区'];
const NATIONAL_DEX=false;
const MAX_NATIONAL=898;


const Icons={
	WIDTH:1632,
	HEIGHT:1848,
	ICON_WIDTH:68,
	ICON_HEIGHT:56,

	ICONS:[,1,2,3,5,6,7,9,10,11,13,14,15,,,,,,,,,,,,,17,27,29,31,33,34,35,36,37,38,39,40,41,43,45,46,47,48,49,50,51,,,,,52,54,56,60,62,63,,,64,65,66,67,68,69,70,71,72,73,74,,,,76,77,,,,78,80,82,84,86,87,88,,,,,,,90,91,92,93,94,96,,,97,98,,,100,101,103,104,106,107,108,109,110,112,113,114,115,116,117,118,119,120,121,122,123,125,126,127,128,129,130,131,132,133,135,136,138,139,140,141,142,143,144,145,146,147,149,151,153,155,156,157,158,159,,,,,,,,,,,,160,161,,,,,162,163,164,165,166,167,168,169,170,171,,,,172,173,174,175,176,,,,,,,,177,178,179,180,,181,,,183,,,,184,,185,,,186,187,188,189,190,,,,,191,192,193,195,196,197,198,199,,,200,,,201,,,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,,,227,229,,,,,,231,232,233,234,235,236,,,237,238,239,240,241,,,,,,,,242,243,244,245,246,247,,,248,,,,249,250,251,252,253,,,254,255,,,,,256,,,257,258,259,260,,,261,,,,262,263,264,,,265,266,,,267,268,269,270,271,272,273,274,275,276,277,278,279,280,,,,,281,282,,,283,284,285,286,287,288,289,,,,290,,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,,,,,,,,,,,,,,,,,,306,307,308,309,310,,,,,,,,311,312,,,,313,314,316,318,,320,321,322,323,,,,,,324,325,326,327,328,329,330,,331,332,333,334,335,336,337,338,339,340,341,342,343,,,,344,345,346,347,348,349,350,351,352,353,354,,355,356,,357,358,359,,360,361,362,368,369,370,371,372,373,374,375,377,,,,,,378,,,,,,,,,,,,379,380,381,382,383,,,,,,,384,385,386,387,388,,,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,,,,406,407,408,409,410,411,412,413,415,416,417,418,420,424,425,426,427,428,429,430,432,433,434,435,436,437,438,440,441,442,443,444,445,446,447,448,449,,,450,451,452,,,453,454,455,456,457,458,460,,462,463,464,465,466,467,468,,,,469,470,471,472,473,474,475,476,477,478,479,480,481,482,484,485,486,487,488,489,490,491,492,493,494,495,496,497,498,499,500,501,502,503,504,505,506,508,510,511,512,514,517,,519,,,,,,,,,,524,525,526,527,528,,,,,,,,,,,529,530,,531,532,534,535,536,538,539,540,541,542,543,544,545,546,547,548,549,550,551,552,553,554,555,556,557,558,559,560,561,562,563,564,565,566,567,568,569,570,571,572,574,575,578,,579,580,581,582,583,584,585,586,587,588,,,,,,589,590,591,,,,592,593,594,595,598,600,601,602,603,604,605,606,607,608,609,610,611,612,613,614,615,616,617,618,619,620,621,622,623,624,625,626,,,627,628,629,,630,631,632,633,634,635,636,637,638,639,640,641,642,643,644,645,646,647,648,649,650,653,655,656,657,658,659,660,661,662,664,665,666,668,669,670,672,673,674,676,677,678,679,680,682,683,684,686,687,688,689,690,691,692,693,695,696,697,698,699,701,702,703,705,706,708,711,712,713,714,717,718,720,721,722,723,724,725,726,728,729,730,732,733,734,735,736,737,738,739,749,750,751,752,753,754,756,758,760,761,763,764,765,766,767,769,770,771,772,774,776,778,779,782,784,785,786,787,788]
}


const MORE_INFO=[
	{
		getInfo:function(nationalId, encounters){
			if(REGIONAL_DEXES[0].ids.indexOf(nationalId)===-1){
				if(nationalId===79)
					return ['Available in v1.1.0 update',,,,'Disponible en actualización v1.1.0'];
				else if(REGIONAL_DEXES[1].ids.indexOf(nationalId)!==-1)
					return ['Available in v1.2.0 update',,,,'Disponible en actualización v1.2.0'];
				else if(REGIONAL_DEXES[2].ids.indexOf(nationalId)!==-1)
					return ['Available in v1.3.0 update',,,,'Disponible en actualización v1.3.0'];
			}
			return null;
		}
	},{
		title:['Max Raid den map: Wild Area',,,,'Mapa de nidos: Zona Silvestre'],
		getInfo:function(nationalId, encounters){
			for(var i=0; i<encounters.length; i++){ //search a raid encounter
				if(/raid_/.test(encounters[i][2])){
					if(MinidexSettings.lang===4)
						return './app/assets/swsh_map_wild_area_es.png';
					else
						return './app/assets/swsh_map_wild_area.png';
				}
			}
			return null;
		}
	},{
		title:['Max Raid den map: Isle of Armor',,,,'Mapa de nidos: Isla de la Armadura'],
		getInfo:function(nationalId, encounters){
			for(var i=0; i<encounters.length; i++){ //search a raid encounter
				if(encounters[i][1] & Ar && /raid_/.test(encounters[i][2])){
					return './app/assets/swsh_map_dlc1.png';
				}
			}
			return null;
		}
	},{
		title:['Max Raid den map: Crown of Tundra',,,,'Mapa de nidos: Nieves de la Corona'],
		getInfo:function(nationalId, encounters){
			for(var i=0; i<encounters.length; i++){ //search a raid encounter
				if(encounters[i][1] & Cr && /raid_/.test(encounters[i][2])){
					return './app/assets/swsh_map_dlc2.png';
				}
			}
			return null;
		}
	}
];