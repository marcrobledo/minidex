/* Minidex - Game data - Gen VIII BDSP */
const GENERATION=8;
const GAME_ID='bdsp';
const GAMES=[
	['Brilliant Diamond','Diamant Étincelant','Strahlender Diamant','Diamante Lucente','Diamante Brillante',,'晶灿钻石'],
	['Shining Pearl','Perle Scintillante','Leuchtende Perle','Perla Splendente','Perla Reluciente',,'明亮珍珠']
];
const REGIONAL_DEXES=[
	{
		name:['Sinnoh Pokédex',,'Sinnoh-Pokédex',,'Pokédex de Sinnoh',,'神奥地区宝可梦'],
		ids:[387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,63,64,65,129,130,406,315,407,41,42,169,74,75,76,95,208,408,409,410,411,66,67,68,54,55,412,413,414,265,266,267,268,269,415,416,417,418,419,420,421,422,423,214,190,424,425,426,427,428,92,93,94,200,429,198,430,431,432,118,119,339,340,433,358,434,435,307,308,436,437,77,78,438,185,439,122,440,113,242,173,35,36,441,172,25,26,163,164,442,443,444,445,446,143,201,447,448,194,195,278,279,203,449,450,298,183,184,451,452,453,454,455,223,224,456,457,72,73,349,350,458,226,459,460,215,461,480,481,482,483,484,490]
	},{
		name:['Extras',,,,,,'额外'],
		ids:[1,4,7,10,13,16,19,20,21,22,23,27,28,29,30,32,33,37,39,43,44,46,48,49,50,51,52,56,57,58,60,61,69,70,79,81,83,84,86,87,88,90,96,98,100,102,104,108,110,111,112,114,115,116,117,120,123,127,128,131,132,133,137,138,140,142,144,145,146,147,148,150,151,152,155,158,161,162,166,168,170,171,174,175,177,179,180,187,188,191,193,202,204,206,207,209,211,213,216,218,219,220,222,225,227,229,231,234,235,236,238,239,240,241,243,244,245,246,247,249,250,252,255,258,261,262,263,270,271,273,274,277,280,281,283,285,287,290,294,296,299,300,302,303,304,305,309,311,312,313,314,316,318,319,320,321,322,323,324,325,327,328,329,331,332,333,335,336,337,338,341,342,343,345,347,351,352,354,355,356,357,359,361,362,363,364,365,366,369,370,371,372,374,377,378,379,380,381,382,383,384,385,465,479,485,486,487,488,491,492,493],
		nonNumeric:true
	}
];
const REGION_NAME=['Sinnoh',,,,,,'神奥地区'];
const NATIONAL_DEX=true;
const MAX_NATIONAL=493;


const Icons={
	WIDTH:1040,
	HEIGHT:630,
	ICON_WIDTH:40,
	ICON_HEIGHT:30,

	ICONS:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,449,452,453,454,455,456,457,458,459,461,463,465,466,467,468,469,470,471,472,473,474,475,476,477,478,479,480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,495,496,497,498,499,500,501,502,503,504,505,506,507,508,509,510,511,512,513,514,515,516,517,518,519,520,526,527,528,529,530,531,532,533,535,536,537,538,539,541]
}
