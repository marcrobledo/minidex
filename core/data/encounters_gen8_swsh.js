/*
	NOTE: Isle of Armor is incomplete, missing flying & wanderer Pokémon and probably more
	
	
	https://www.pokeatlas.com/isle-of-armor
*/

const Sw=1<<0;
const Sh=1<<1;
const Ar=1<<2;
const Tu=1<<3;
const SwSh=Sw|Sh;
const SwAr=Sw|Ar;
const ShAr=Sh|Ar;
const SwTu=Sw|Tu;
const ShTu=Sh|Tu;


const RAID_POOLS=[,
[ //1676046420423018998
	[236,35], //Tyrogue
	[66,35], //Machop
	[532,20,30], //Timburr
	[559,[10,0],[30,0]], //Scraggy
	[67,,20,[10,30]], //Machoke
	[533,,20,[30,10]], //Gurdurr
	[106,,,20,25,[0,30]], //Hitmonlee
	[107,,,20,25,[30,0]], //Hitmonchan
	[560,,,[20,0],[25,0],[30,0]], //Scrafty
	[534,,,,[25,0],[20,10]], //Conkeldurr
	[68,,,,,10], //Machamp
	[237,,,,[0,25],[10,20]], //Hitmontop
	[453,[0,10],[0,30]], //Croagunk
	[454,,,[0,20],[0,25],[0,30]] //Toxicroak
],[ //1676045320911390787
	[280,35], //Ralts
	[517,30], //Munna
	[677,20,30], //Espurr
	[574,[10,0],[30,0]], //Gothita
	[605,5,20], //Elgyem
	[281,,20,40], //Kirlia
	[678,,,[20,0],[30,0]], //Meowstic
	[575,,,[20,0],[30,0]], //Gothorita
	[518,,,20,30,25], //Musharna
	[576,,,,[10,0],[25,0]], //Gothitelle
	[338,,,,,[25,0]], //Solrock
	[282,,,,,25], //Gardevoir
	[577,[0,10],[0,30]], //Solosis
	[alternateForm(678,1),,,[0,20],[0,30]], //Meowstic-1
	[578,,,[0,20],[0,30]], //Duosion
	[579,,,,[0,10],[0,25]], //Reuniclus
	[337,,,,,[0,25]] //Lunatone
],[ //1676044221399762576
	[438,35], //Bonsly
	[524,[35,20],[0,30]], //Roggenrola
	[688,[20,35],[30,0]], //Binacle
	[557,10,30], //Dwebble
	[111,,20,10], //Rhyhorn
	[525,,20,30], //Boldore
	[689,,,20,10], //Barbaracle
	[112,,,20,20,10], //Rhydon
	[185,,,20,20,25], //Sudowoodo
	[558,,,,[50,0],[25,20]], //Crustle
	[526,,,,[0,50],[20,25]], //Gigalith
	[213,,,,,20] //Shuckle
],[ //1676051917981160053
	[10,35], //Caterpie
	[736,35], //Grubbin
	[290,20,30], //Nincada
	[595,10,30], //Joltik
	[11,,20,[10,30]], //Metapod
	[632,,20,[30,10],,20], //Durant
	[737,,,20,10], //Charjabug
	[291,,,20,20,10], //Ninjask
	[12,,,20,20,25], //Butterfree
	[596,,,,50,25], //Galvantula
	[738,,,,,20] //Vikavolt
],[ //1676050818469531842
	[10,35], //Caterpie
	[415,35], //Combee
	[742,20,30], //Cutiefly
	[824,10,30], //Blipbug
	[595,,20,10], //Joltik
	[11,,20,30], //Metapod
	[825,,,20,10], //Dottler
	[596,,,20,20,10], //Galvantula
	[12,,,20,20,25], //Butterfree
	[743,,,,50,25], //Ribombee
	[416,,,,,20], //Vespiquen
	[826,,,,,20] //Orbeetle
],[ //1676049718957903631
	[92,35], //Gastly
	[355,30], //Duskull
	[425,20,30], //Drifloon
	[708,10,30], //Phantump
	[592,5,20], //Frillish
	[710,,20,40], //Pumpkaboo
	[93,,,20,[10,20]], //Haunter
	[356,,,20,20,[10,20]], //Dusclops
	[426,,,20,20,[25,20]], //Drifblim
	[709,,,,[50,40],[25,20]], //Trevenant
	[711,,,,,20], //Gourgeist
	[593,,,,,20] //Jellicent
],[ //1676048619446275420
	[129,35], //Magikarp
	[458,35], //Mantyke
	[223,20,30], //Remoraid
	[170,10,30], //Chinchou
	[320,,20,10], //Wailmer
	[550,,[20,0],[30,0]], //Basculin
	[224,,,20,10], //Octillery
	[226,,,20,20,10], //Mantine
	[171,,,20,20,25], //Lanturn
	[321,,,,50,25], //Wailord
	[746,,,,,20], //Wishiwashi
	[130,,,,,20], //Gyarados
	[alternateForm(550,1),,[0,20],[0,30]] //Basculin-1
],[ //1676056316027672897
	[833,35], //Chewtle
	[846,35], //Arrokuda
	[alternateForm(422,1),20,30], //Shellos-1
	[751,10,30], //Dewpider
	[320,,20,10], //Wailmer
	[550,,[20,0],[30,0]], //Basculin
	[746,,,20,10], //Wishiwashi
	[834,,,20,20,10], //Drednaw
	[847,,,20,20,25], //Barraskewda
	[752,,,,50,25], //Araquanid
	[alternateForm(423,1),,,,,20], //Gastrodon-1
	[321,,,,,20], //Wailord
	[alternateForm(550,1),,[0,20],[0,30]] //Basculin-1
],[ //1676055216516044686
	[833,35], //Chewtle
	[194,35], //Wooper
	[535,20,30], //Tympole
	[341,10,30], //Corphish
	[90,,20], //Shellder
	[536,,20,40], //Palpitoad
	[834,,,20,10], //Drednaw
	[195,,,20,20,10], //Quagsire
	[771,,,20,20,25], //Pyukumuku
	[91,,,,50,25], //Cloyster
	[537,,,,,20], //Seismitoad
	[342,,,,,20] //Crawdaunt
],[ //1675055760446190112
	[236,35], //Tyrogue
	[759,35,[0,20]], //Stufful
	[852,20,30], //Clobbopus
	[674,10,30], //Pancham
	[alternateForm(83,1),,[20,0]], //Farfetch’d-1
	[539,,[20,0],[40,0]], //Sawk
	[760,,,20,[33,20],[22,25]], //Bewear
	[675,,,20,[33,25],[22,10]], //Pangoro
	[701,,,20,[33,30],20], //Hawlucha
	[865,,,,[1,0],[1,0]], //Sirfetch’d
	[853,,,,,25], //Grapploct
	[870,,,,,10], //Falinks
	[538,,[0,20],[0,40]] //Throh
],[ //1675056859957818323
	[599,35], //Klink
	[alternateForm(52,2),35], //Meowth-2
	[436,20,30], //Bronzor
	[597,10,30], //Ferroseed
	[624,,20], //Pawniard
	[878,,20,40], //Cufant
	[600,,,20,25,10], //Klang
	[863,,,20,25,10], //Perrserker
	[437,,,20,25,30], //Bronzong
	[625,,,,25,30], //Bisharp
	[601,,,,,10], //Klinklang
	[879,,,,,10] //Copperajah
],[ //1675057959469446534
	[599,35,20], //Klink
	[436,35,20,40], //Bronzor
	[597,20,30], //Ferroseed
	[624,10,30], //Pawniard
	[208,,,20,25,10], //Steelix
	[598,,,20,25,10], //Ferrothorn
	[437,,,20,25,30], //Bronzong
	[625,,,,25,30], //Bisharp
	[303,,,,,[10,0]], //Mawile
	[777,,,,,10] //Togedemaru
],[ //1675059058981074745
	[439,35], //Mime Jr.
	[824,35], //Blipbug
	[177,20,30], //Natu
	[856,10,30], //Hatenna
	[825,,[20,0]], //Dottler
	[857,,20,40,15], //Hattrem
	[561,,,20,[10,25],[25,0]], //Sigilyph
	[178,,,20,25], //Xatu
	[876,,,[20,0],[25,0],[25,0]], //Indeedee
	[826,,,,,[25,0]], //Orbeetle
	[858,,,,,25], //Hatterene
	[alternateForm(77,1),,[0,20]], //Ponyta-1
	[alternateForm(876,1),,,[0,20],[0,25],[0,25]], //Indeedee-1
	[765,,,,[0,10],[0,25]], //Oranguru
	[alternateForm(78,1),,,,,[0,25]] //Rapidash-1
],[ //1675060158492702956
	[439,35], //Mime Jr.
	[360,35], //Wynaut
	[177,20,30], //Natu
	[343,10,30], //Baltoy
	[436,,20], //Bronzor
	[alternateForm(122,1),,20,40,15], //Mr. Mime-1
	[561,,,20,25], //Sigilyph
	[178,,,20,25], //Xatu
	[876,,,[20,0],[25,0],[25,0]], //Indeedee
	[344,,,,10,25], //Claydol
	[866,,,,,25], //Mr. Rime
	[202,,,,,25], //Wobbuffet
	[alternateForm(876,1),,,[0,20],[0,25],[0,25]] //Indeedee-1
],[ //1675061258004331167
	[837,35], //Rolycoly
	[524,[35,20],[0,30]], //Roggenrola
	[557,[20,35],[30,0]], //Dwebble
	[688,10,30], //Binacle
	[838,,20], //Carkol
	[525,,20,40], //Boldore
	[558,,,20,10], //Crustle
	[689,,,20,20,15], //Barbaracle
	[95,,,[20,0],[20,0],[25,30]], //Onix
	[839,,,[0,20],[50,20],25], //Coalossal
	[526,,,,[0,50],[30,25]], //Gigalith
	[464,,,,,5] //Rhyperior
],[ //1675062357515959378
	[50,35], //Diglett
	[749,35], //Mudbray
	[290,20,30], //Nincada
	[529,10,30], //Drilbur
	[95,,20], //Onix
	[339,,20,40], //Barboach
	[208,,,20,10], //Steelix
	[340,,,20,20,10], //Whiscash
	[660,,,20,20,25], //Diggersby
	[51,,,,50,25], //Dugtrio
	[530,,,,,30], //Excadrill
	[750,,,,,10] //Mudsdale
],[ //1675063457027587589
	[843,35], //Silicobra
	[alternateForm(562,1),35], //Yamask-1
	[449,20,30], //Hippopotas
	[220,[10,0],[30,20]], //Swinub
	[328,[0,10],[20,30]], //Trapinch
	[221,,20,40], //Piloswine
	[329,,,30,[20,30],[0,29]], //Vibrava
	[alternateForm(618,1),,,30,[30,20],[29,0]], //Stunfisk-1
	[867,,,,,1], //Runerigus
	[450,,,,[50,0],[25,35]], //Hippowdon
	[330,,,,[0,50],[35,25]], //Flygon
	[844,,,,,10] //Sandaconda
],[ //1675064556539215800
	[37,[35,0]], //Vulpix
	[850,35], //Sizzlipede
	[757,20,30], //Salandit
	[607,10,30], //Litwick
	[alternateForm(554,1),,[20,0]], //Darumaka-1
	[758,,[20,0],[40,20],[0,10]], //Salazzle
	[608,,[0,20],[20,40],[10,0]], //Lampent
	[38,,,[20,0],[20,0],[10,0]], //Ninetales
	[324,,,20,20,25], //Torkoal
	[851,,,,[50,0],[25,30]], //Centiskorch
	[631,,[0,20],,[0,50],[30,25]], //Heatmor
	[alternateForm(555,2),,,,,[10,0]], //Darmanitan-2
	[58,[0,35]], //Growlithe
	[59,,,[0,20],[0,20],[0,10]] //Arcanine
],[ //1675065656050844011
	[37,[10,0],[30,0]], //Vulpix
	[757,35,20], //Salandit
	[607,20,30], //Litwick
	[758,,[20,0],[40,20],[15,25],[20,30]], //Salazzle
	[608,,[0,20],[20,40],[35,0]], //Lampent
	[38,,,[20,0],[25,0],[30,0]], //Ninetales
	[324,,,[20,0],[25,15],[30,20]], //Torkoal
	[609,,,,,15], //Chandelure
	[776,,,,,[5,0]], //Turtonator
	[58,[0,10],[0,30]], //Growlithe
	[59,,,[0,20],[0,25],[0,5]] //Arcanine
],[ //1677890301423150395
	[37,[35,0]], //Vulpix
	[850,35], //Sizzlipede
	[757,20,30], //Salandit
	[607,10,30], //Litwick
	[alternateForm(554,1),,[20,0]], //Darumaka-1
	[758,,[20,0],[40,20],[0,10]], //Salazzle
	[838,,[0,20],[20,40],[10,0]], //Carkol
	[38,,,[20,0],[20,0],[10,0]], //Ninetales
	[324,,[0,20],20,20,25], //Torkoal
	[851,,,,50,25], //Centiskorch
	[839,,,,,30], //Coalossal
	[alternateForm(555,2),,,,,[10,0]], //Darmanitan-2
	[58,[0,35]], //Growlithe
	[59,,,[0,20],[0,20],[0,10]] //Arcanine
],[ //1677889201911522184
	[582,35], //Vanillite
	[220,35], //Swinub
	[459,20,35], //Snover
	[712,10,35], //Bergmite
	[225,,5], //Delibird
	[583,,25,40], //Vanillish
	[221,,,20,[10,35]], //Piloswine
	[713,,,20,[20,25],[10,30]], //Avalugg
	[460,,,20,[20,25],[25,30]], //Abomasnow
	[91,,,,[50,15],[25,20]], //Cloyster
	[584,,,,,[30,15]], //Vanilluxe
	[131,,,,,[10,5]] //Lapras
],[ //1677892500446406817
	[220,35], //Swinub
	[613,35], //Cubchoo
	[872,20,30], //Snom
	[215,10,30], //Sneasel
	[alternateForm(122,1),,20], //Mr. Mime-1
	[221,,20,40], //Piloswine
	[91,,,20,35], //Cloyster
	[614,,,20,25,[10,30]], //Beartic
	[866,,,20,25,30], //Mr. Rime
	[473,,,,15,[30,20]], //Mamoswine
	[873,,,,,[20,15]], //Frosmoth
	[461,,,,,[10,5]] //Weavile
],[ //1677891400934778606
	[361,35], //Snorunt
	[872,35], //Snom
	[alternateForm(554,1),[20,0],[30,0]], //Darumaka-1
	[215,[10,25],[30,40]], //Sneasel
	[alternateForm(122,1),,[20,30]], //Mr. Mime-1
	[459,,[20,25],40], //Snover
	[460,,,20,35], //Abomasnow
	[362,,,20,25,[20,30]], //Glalie
	[866,,,20,25,30], //Mr. Rime
	[873,,,,15,[30,20]], //Frosmoth
	[478,,,,,[10,15]], //Froslass
	[alternateForm(555,2),,,,,[10,0]], //Darmanitan-2
	[225,[0,5],[0,5]], //Delibird
	[875,,,,,[0,5]] //Eiscue
],[ //1677894699469663239
	[172,35], //Pichu
	[309,35], //Electrike
	[595,20,30], //Joltik
	[170,10,30], //Chinchou
	[737,,20], //Charjabug
	[25,,20,20,35], //Pikachu
	[310,,,20,25,[20,30]], //Manectric
	[171,,,20,25,30], //Lanturn
	[596,,,,15,[30,20]], //Galvantula
	[738,,,,,[10,15]], //Vikavolt
	[26,,,,,[10,5]] //Raichu
],[ //1677893599958035028
	[835,35], //Yamper
	[694,35], //Helioptile
	[848,20,30], //Toxel
	[170,10,30], //Chinchou
	[25,,20], //Pikachu
	[171,,20,40], //Lanturn
	[836,,,20,35], //Boltund
	[695,,,20,25,[35,30]], //Heliolisk
	[849,,,20,25,30], //Toxtricity
	[871,,,,15,20], //Pincurchin
	[777,,,,,[10,15]], //Togedemaru
	[877,,,,,5] //Morpeko
],[ //1677896898492919661
	[406,35], //Budew
	[273,[35,0]], //Seedot
	[761,20,30], //Bounsweet
	[43,10,30], //Oddish
	[274,,[20,0]], //Nuzleaf
	[315,,20,40], //Roselia
	[44,,,20,35], //Gloom
	[762,,,20,25,30], //Steenee
	[275,,,[20,0],[25,0],[30,0]], //Shiftry
	[763,,,,15,20], //Tsareena
	[45,,,,,15], //Vileplume
	[182,,,,,5], //Bellossom
	[270,[0,35]], //Lotad
	[271,,[0,20]], //Lombre
	[272,,,[0,20],[0,25],[0,30]] //Ludicolo
],[ //1677895798981291450
	[406,35], //Budew
	[829,35], //Gossifleur
	[546,20,30], //Cottonee
	[840,10,30], //Applin
	[420,,20], //Cherubi
	[315,,20,40], //Roselia
	[597,,,20,35], //Ferroseed
	[598,,,20,25,30], //Ferrothorn
	[421,,,20,25,30], //Cherrim
	[830,,,,15,[28,20]], //Eldegoss
	[547,,,,,[10,15]], //Whimsicott
	[841,,,,,[2,0]], //Flapple
	[842,,,,,[0,5]] //Appletun
],[ //1677881505330124707
	[710,40,5,,,1], //Pumpkaboo
	[708,35], //Phantump
	[755,15,35], //Morelull
	[315,,25,40], //Roselia
	[756,,,20,35], //Shiinotic
	[556,,,20,25,30], //Maractus
	[709,,,20,25,30], //Trevenant
	[711,,,,15,29], //Gourgeist
	[781,,,,,10] //Dhelmise
],[ //1677880405818496496
	[434,35], //Stunky
	[568,35], //Trubbish
	[451,20,30], //Skorupi
	[747,[10,0],[30,20]], //Mareanie
	[43,[0,10],[20,30]], //Oddish
	[315,,20,40], //Roselia
	[211,,,20,35], //Qwilfish
	[452,,,20,25,30], //Drapion
	[45,,,20,25,30], //Vileplume
	[748,,,,[15,0],[20,5]], //Toxapex
	[569,,,,,15], //Garbodor
	[435,,,,[0,15],[5,20]] //Skuntank
],[ //1676898541934693298
	[848,35], //Toxel
	[92,35], //Gastly
	[451,20,30], //Skorupi
	[43,10,30], //Oddish
	[44,,20], //Gloom
	[93,,20,40], //Haunter
	[109,,,20,35], //Koffing
	[211,,,20,25,30], //Qwilfish
	[45,,,20,25,30], //Vileplume
	[315,,,,15,20], //Roselia
	[849,,,,,15], //Toxtricity
	[alternateForm(110,1),,,,,5] //Weezing-1
],[ //1676899641446321509
	[519,35], //Pidove
	[163,35], //Hoothoot
	[177,20,30], //Natu
	[627,[10,0],[30,0]], //Rufflet
	[527,,20], //Woobat
	[520,,20,40], //Tranquill
	[521,,,20,35], //Unfezant
	[164,,,20,25,30], //Noctowl
	[528,,,20,25,30], //Swoobat
	[178,,,,15,20], //Xatu
	[628,,,,,[15,0]], //Braviary
	[561,,,,,5], //Sigilyph
	[629,[0,10],[0,30]], //Vullaby
	[630,,,,,[0,15]] //Mandibuzz
],[ //1676896342911436876
	[821,35], //Rookidee
	[714,35], //Noibat
	[278,20,30], //Wingull
	[177,10,30], //Natu
	[425,,20], //Drifloon
	[822,,20,40], //Corvisquire
	[426,,,20,35], //Drifblim
	[279,,,20,25,30], //Pelipper
	[178,,,20,25,30], //Xatu
	[823,,,,15,20], //Corviknight
	[701,,,,,15], //Hawlucha
	[845,,,,,5] //Cramorant
],[ //1676897442423065087
	[173,35], //Cleffa
	[175,35], //Togepi
	[742,20,30], //Cutiefly
	[684,[10,0],[30,0]], //Swirlix
	[35,,20], //Clefairy
	[755,,20,40], //Morelull
	[176,,,20,35], //Togetic
	[36,,,20,25,30], //Clefable
	[743,,,20,25,30], //Ribombee
	[756,,,,15,20], //Shiinotic
	[685,,,,,[15,0]], //Slurpuff
	[468,,,,,5], //Togekiss
	[682,[0,10],[0,30]], //Spritzee
	[683,,,,,[0,15]] //Aromatisse
],[ //1676894143888180454
	[439,35], //Mime Jr.
	[868,35], //Milcery
	[859,20,30], //Impidimp
	[280,10,30], //Ralts
	[35,,20], //Clefairy
	[281,,20,40], //Kirlia
	[860,,,20,35], //Morgrem
	[36,,,20,25,30], //Clefable
	[282,,,20,25,30], //Gardevoir
	[869,,,,15,20], //Alcremie
	[303,,,,,[15,0]], //Mawile
	[861,,,,,5], //Grimmsnarl
	[alternateForm(78,1),,,,,[0,15]] //Rapidash-1
],[ //1676895243399808665
	[509,35], //Purrloin
	[434,35], //Stunky
	[215,20,30], //Sneasel
	[686,10,30], //Inkay
	[624,,20], //Pawniard
	[510,,20,40], //Liepard
	[435,,,20,35], //Skuntank
	[461,,,20,25,30], //Weavile
	[687,,,20,25,30], //Malamar
	[625,,,,15,20], //Bisharp
	[342,,,,,15], //Crawdaunt
	[275,,,,,[5,0]], //Shiftry
	[302,,,,,[0,5]] //Sableye
],[ //1676891944864924032
	[827,35], //Nickit
	[alternateForm(263,1),35], //Zigzagoon-1
	[509,20,30], //Purrloin
	[859,10,30], //Impidimp
	[633,,[20,0]], //Deino
	[828,,20,40], //Thievul
	[alternateForm(264,1),,,20,35], //Linoone-1
	[860,,,20,25,30], //Morgrem
	[861,,,20,25,30], //Grimmsnarl
	[634,,,,[15,0],[20,0]], //Zweilous
	[862,,,,,15], //Obstagoon
	[635,,,,,[5,0]], //Hydreigon
	[629,,[0,20]], //Vullaby
	[630,,,,[0,15],[0,20]], //Mandibuzz
	[248,,,,,[0,5]] //Tyranitar
],[ //1676893044376552243
	[714,10,30], //Noibat
	[328,[35,20],[0,30]], //Trapinch
	[610,[20,35],[30,0]], //Axew
	[782,,[20,0]], //Jangmo-o
	[329,,20,40], //Vibrava
	[783,,,[20,0],[35,0]], //Hakamo-o
	[611,,,20,[25,35],[30,0]], //Fraxure
	[612,,,[20,0],[25,15],[30,20]], //Haxorus
	[330,,,[0,20],[15,25],[20,30]], //Flygon
	[776,,,,,[15,0]], //Turtonator
	[784,,,,,[5,0]], //Kommo-o
	[704,,[0,20]], //Goomy
	[705,,,[0,20],[0,25],[0,30]], //Sliggoo
	[780,,,,,[0,15]], //Drampa
	[706,,,,,[0,5]] //Goodra
],[ //1676907338027718986
	[714,35,30], //Noibat
	[840,35,30,40], //Applin
	[782,[20,0],[30,0]], //Jangmo-o
	[885,10,10], //Dreepy
	[886,,,10,10], //Drakloak
	[715,,,25,35,35], //Noivern
	[783,,,[25,0],[35,0],[35,0]], //Hakamo-o
	[784,,,,[20,0],[20,0]], //Kommo-o
	[841,,,,,[5,0]], //Flapple
	[887,,,,,5], //Dragapult
	[704,[0,20],[0,30]], //Goomy
	[705,,,[0,25],[0,35],[0,35]], //Sliggoo
	[706,,,,[0,20],[0,20]], //Goodra
	[842,,,,,[0,5]] //Appletun
],[ //1676908437539347197
	[659,35], //Bunnelby
	[163,35], //Hoothoot
	[519,20,30], //Pidove
	[572,10,30], //Minccino
	[694,,20], //Helioptile
	[759,,20,40], //Stufful
	[660,,,20,35], //Diggersby
	[164,,,20,25,30], //Noctowl
	[521,,,20,25,30], //Unfezant
	[695,,,,15,20], //Heliolisk
	[573,,,,,15], //Cinccino
	[760,,,,,5] //Bewear
],[ //1679873820400064589
	[819,35], //Skwovet
	[831,35], //Wooloo
	[alternateForm(263,1),20,40], //Zigzagoon-1
	[446,10,10], //Munchlax
	[876,,[10,0]], //Indeedee
	[820,,40,20,25,30], //Greedent
	[alternateForm(264,1),,,20,35], //Linoone-1
	[832,,,20,25,30], //Dubwool
	[660,,,,15,20], //Diggersby
	[628,,,,,[15,0]], //Braviary
	[143,,,,,5], //Snorlax
	[alternateForm(876,1),,[0,10]], //Indeedee-1
	[765,,,,,[0,15]] //Oranguru
],[ //1679872720888436378
	[535,35], //Tympole
	[90,35], //Shellder
	[170,20,30], //Chinchou
	[747,[10,0],[30,20]], //Mareanie
	[536,[0,10],[20,30]], //Palpitoad
	[846,,20,40], //Arrokuda
	[91,,,20,[10,20],[0,10]], //Cloyster
	[171,,,20,20,[10,25]], //Lanturn
	[746,,,[20,0],[20,50],25], //Wishiwashi
	[537,,,,[50,0],[25,20]], //Seismitoad
	[847,,,,,20], //Barraskewda
	[748,,,[0,20],[0,10],[20,0]] //Toxapex
],[ //1679871621376808167
	[alternateForm(422,1),35], //Shellos-1
	[98,35], //Krabby
	[341,20,30], //Corphish
	[833,10,30], //Chewtle
	[688,,20], //Binacle
	[771,,20,40], //Pyukumuku
	[99,,,20,10], //Kingler
	[342,,,20,20,10], //Crawdaunt
	[689,,,20,20,25], //Barbaracle
	[alternateForm(423,1),,,,50,25], //Gastrodon-1
	[593,,,,,20], //Jellicent
	[834,,,,,20] //Drednaw
],[ //13438842885794419703
	[92,35], //Gastly
	[alternateForm(562,1),35], //Yamask-1
	[854,20,30], //Sinistea
	[355,10,30], //Duskull
	[93,,20,30], //Haunter
	[710,,[20,0],[40,0],[20,0]], //Pumpkaboo
	[356,,,30,20], //Dusclops
	[867,,,,[0,20],[1,45]], //Runerigus
	[855,,,,[20,0],[45,0]], //Polteageist
	[711,,,,[40,0],[35,0]], //Gourgeist
	[477,,,,,15], //Dusknoir
	[94,,,,,4], //Gengar
	[alternateForm(222,1),,[0,20],[0,40],[0,20]], //Corsola-1
	[302,,,,,[0,1]], //Sableye
	[864,,,,[0,40],[0,35]] //Cursola
],[ //13438843985306047914
	[129,68], //Magikarp
	[349,2], //Feebas
	[846,20,30], //Arrokuda
	[833,10,30], //Chewtle
	[747,,20,20], //Mareanie
	[550,,[20,0],[40,0]], //Basculin
	[211,,,20,20], //Qwilfish
	[748,,,20,20,18], //Toxapex
	[771,,,,20,35], //Pyukumuku
	[130,,,,40,35], //Gyarados
	[131,,,,,10], //Lapras
	[350,,,,,2], //Milotic
	[alternateForm(550,1),,[0,20],[0,40]] //Basculin-1
],[ //13438845084817676125
	[447,35], //Riolu
	[436,35], //Bronzor
	[624,20,30], //Pawniard
	[599,10,30], //Klink
	[95,,20,20], //Onix
	[632,,[20,0],[40,20],[0,20]], //Durant
	[600,,[0,20],[20,40],[20,0]], //Klang
	[437,,,20,20,20], //Bronzong
	[625,,,,20,30], //Bisharp
	[208,,,,40,30], //Steelix
	[601,,,,,15], //Klinklang
	[448,,,,,5] //Lucario
],[ //13438837388236278648
	[767,35], //Wimpod
	[824,35], //Blipbug
	[588,[20,0],[30,20],[0,20]], //Karrablast
	[751,10,30], //Dewpider
	[616,[0,20],[20,30],[20,0]], //Shelmet
	[557,,20,40], //Dwebble
	[825,,,20,20], //Dottler
	[826,,,20,20,20], //Orbeetle
	[752,,,,20,30], //Araquanid
	[768,,,,40,30], //Golisopod
	[589,,,,,[15,0]], //Escavalier
	[292,,,,,5], //Shedinja
	[617,,,,,[0,15]] //Accelgor
],[ //13438838487747906859
	[679,35], //Honedge
	[alternateForm(562,1),35], //Yamask-1
	[854,20,30], //Sinistea
	[425,10,30], //Drifloon
	[680,,20,20], //Doublade
	[710,,[20,0],[40,0],[10,0]], //Pumpkaboo
	[426,,,20,10], //Drifblim
	[711,,,[20,0],[40,0],[29,0]], //Gourgeist
	[855,,,,20,30], //Polteageist
	[867,,,,,1], //Runerigus
	[681,,,,,5], //Aegislash
	[alternateForm(222,1),,[0,20],[0,40],[0,10]], //Corsola-1
	[302,,,[0,20],[0,20],[0,35]], //Sableye
	[864,,,,[0,40],[0,29]] //Cursola
],[ //13438839587259535070
	[447,35], //Riolu
	[66,35], //Machop
	[559,[20,0],[30,0]], //Scraggy
	[759,10,30], //Stufful
	[760,,20,20], //Bewear
	[870,,20,40,10], //Falinks
	[67,,,20,10], //Machoke
	[560,,,[20,0],[20,0],[35,0]], //Scrafty
	[68,,,,20,30], //Machamp
	[766,,,,[40,0],[25,0]], //Passimian
	[448,,,,,5], //Lucario
	[475,,,,,5], //Gallade
	[453,[0,20],[0,30]], //Croagunk
	[454,,,[0,20],[0,20],[0,35]], //Toxicroak
	[701,,,,[0,40],[0,25]] //Hawlucha
],[ //13438840686771163281
	[alternateForm(52,2),35], //Meowth-2
	[436,35], //Bronzor
	[624,20,30], //Pawniard
	[597,10,30], //Ferroseed
	[679,,20,30], //Honedge
	[437,,20,40], //Bronzong
	[863,,,,20,20], //Perrserker
	[598,,,30,20,10], //Ferrothorn
	[625,,,,20,25], //Bisharp
	[alternateForm(618,1),,,,40,25], //Stunfisk-1
	[879,,,,,15], //Copperajah
	[884,,,,,5] //Duraludon
],[ //13438832990189765804
	[686,35], //Inkay
	[280,35], //Ralts
	[alternateForm(122,1),20,30], //Mr. Mime-1
	[527,10,30], //Woobat
	[856,,20,20], //Hatenna
	[857,,20,40], //Hattrem
	[281,,,20,20], //Kirlia
	[528,,,20,20,20], //Swoobat
	[858,,,,20,30], //Hatterene
	[866,,,,40,30], //Mr. Rime
	[687,,,,,15], //Malamar
	[282,,,,,5] //Gardevoir
],[ //13438834089701394015
	[557,35], //Dwebble
	[438,35], //Bonsly
	[837,20,30], //Rolycoly
	[688,[10,0],[30,0]], //Binacle
	[838,,20,20], //Carkol
	[185,,[20,0],[40,0]], //Sudowoodo
	[689,,,[20,0],[20,0]], //Barbaracle
	[95,,,20,20,20], //Onix
	[558,,,,20,30], //Crustle
	[839,,,,40,30], //Coalossal
	[208,,,,,15], //Steelix
	[874,,,,,[5,0]], //Stonjourner
	[524,[0,10],[0,30]], //Roggenrola
	[246,,[0,20],[0,40]], //Larvitar
	[247,,,[0,20],[0,20]], //Pupitar
	[248,,,,,[0,5]] //Tyranitar
],[ //13439833545771248589
	[194,35], //Wooper
	[339,35], //Barboach
	[alternateForm(562,1),20,30], //Yamask-1
	[622,10,30], //Golett
	[536,,20,20], //Palpitoad
	[195,,20,40], //Quagsire
	[alternateForm(618,1),,,20,20], //Stunfisk-1
	[623,,,20,20,30], //Golurk
	[alternateForm(423,1),,,,20,35], //Gastrodon-1
	[537,,,,40,30], //Seismitoad
	[867,,,,,1], //Runerigus
	[464,,,,,4] //Rhyperior
],[ //13439832446259620378
	[37,[35,0]], //Vulpix
	[850,35], //Sizzlipede
	[607,20,30], //Litwick
	[4,10,30], //Charmander
	[5,,20,20], //Charmeleon
	[38,,[20,0],[40,0],[20,0],[30,0]], //Ninetales
	[631,,[0,20],20,20], //Heatmor
	[324,,,20,20,20], //Torkoal
	[758,,,,[40,20],30], //Salazzle
	[851,,,,,15], //Centiskorch
	[6,,,,,5], //Charizard
	[58,[0,35]], //Growlithe
	[59,,,,[0,40],[0,30]] //Arcanine
],[ //13439831346747992167
	[37,[35,0]], //Vulpix
	[850,35], //Sizzlipede
	[607,20,30], //Litwick
	[757,10,30], //Salandit
	[838,,20,20], //Carkol
	[608,,[20,0],[40,20],[0,20]], //Lampent
	[631,,[0,20],[20,40],[20,0]], //Heatmor
	[324,,,20,20,20], //Torkoal
	[38,,,,[20,0],[30,0]], //Ninetales
	[609,,,,40,30], //Chandelure
	[839,,,,,15], //Coalossal
	[776,,,,,[5,0]], //Turtonator
	[58,[0,35]], //Growlithe
	[59,,,,[0,20],[0,30]], //Arcanine
	[758,,,,,[0,5]] //Salazzle
],[ //13439830247236363956
	[582,35], //Vanillite
	[alternateForm(554,1),[35,0]], //Darumaka-1
	[alternateForm(122,1),20,30], //Mr. Mime-1
	[712,10,40], //Bergmite
	[361,,25,30], //Snorunt
	[225,,5,5], //Delibird
	[713,,,35,20], //Avalugg
	[362,,,30,20,10], //Glalie
	[584,,,,20,25], //Vanilluxe
	[866,,,,40,25], //Mr. Rime
	[131,,,,,35], //Lapras
	[alternateForm(555,2),,,,,[5,0]], //Darmanitan-2
	[613,[0,35]], //Cubchoo
	[875,,,,,[0,5]] //Eiscue
],[ //13439829147724735745
	[835,35], //Yamper
	[848,35], //Toxel
	[25,20,30], //Pikachu
	[595,10,30], //Joltik
	[170,,20,20], //Chinchou
	[171,,20,40], //Lanturn
	[836,,,20,20,10], //Boltund
	[849,,,20,20,20], //Toxtricity
	[871,,,,20,25], //Pincurchin
	[596,,,,40,25], //Galvantula
	[777,,,,,15], //Togedemaru
	[877,,,,,5] //Morpeko
],[ //13439828048213107534
	[172,35], //Pichu
	[309,35], //Electrike
	[848,20,30], //Toxel
	[694,10,30], //Helioptile
	[595,,20,20], //Joltik
	[25,,20,20,20,10], //Pikachu
	[alternateForm(479,5),,,20,20,20], //Rotom-5
	[alternateForm(479,4),,,,20,25], //Rotom-4
	[alternateForm(479,3),,,,40,25], //Rotom-3
	[alternateForm(479,2),,,,,15], //Rotom-2
	[alternateForm(479,1),,,,,5] //Rotom-1
],[ //13439826948701479323
	[406,35], //Budew
	[273,[35,0]], //Seedot
	[829,20,30], //Gossifleur
	[597,10,30], //Ferroseed
	[274,,[20,0],[20,0]], //Nuzleaf
	[840,,20,40], //Applin
	[315,,,20,20,10], //Roselia
	[275,,,[20,0],[20,0],[20,0]], //Shiftry
	[830,,,,20,25], //Eldegoss
	[598,,,,40,25], //Ferrothorn
	[407,,,,,15], //Roserade
	[841,,,,,[5,0]], //Flapple
	[270,[0,35]], //Lotad
	[271,,[0,20],[0,20]], //Lombre
	[272,,,[0,20],[0,20],[0,20]], //Ludicolo
	[842,,,,,[0,5]] //Appletun
],[ //13439825849189851112
	[420,35], //Cherubi
	[273,[35,0]], //Seedot
	[829,20,30], //Gossifleur
	[546,10,30], //Cottonee
	[274,,[20,0],[20,0]], //Nuzleaf
	[755,,20,40], //Morelull
	[421,,,20,20,10], //Cherrim
	[756,,,20,20,20], //Shiinotic
	[830,,,,20,25], //Eldegoss
	[547,,,,40,25], //Whimsicott
	[275,,,,,[15,0]], //Shiftry
	[781,,,,,5], //Dhelmise
	[270,[0,35]], //Lotad
	[271,,[0,20],[0,20]], //Lombre
	[272,,,,,[0,15]] //Ludicolo
],[ //13439824749678222901
	[434,35], //Stunky
	[568,35], //Trubbish
	[451,20,30], //Skorupi
	[109,10,30], //Koffing
	[747,,[20,0],[20,0]], //Mareanie
	[848,,20,40], //Toxel
	[569,,,20,20,10], //Garbodor
	[452,,,20,20,20], //Drapion
	[849,,,,20,25], //Toxtricity
	[435,,,,40,25], //Skuntank
	[alternateForm(110,1),,,,,15], //Weezing-1
	[748,,,,,[5,0]], //Toxapex
	[757,,[0,20],[0,20]], //Salandit
	[758,,,,,[0,5]] //Salazzle
],[ //13439823650166594690
	[177,35], //Natu
	[163,35], //Hoothoot
	[821,20,30], //Rookidee
	[278,10,30], //Wingull
	[12,,20,20], //Butterfree
	[822,,20,40], //Corvisquire
	[164,,,20,20,10], //Noctowl
	[279,,,20,20,20], //Pelipper
	[178,,,,20,25], //Xatu
	[701,,,,40,25], //Hawlucha
	[823,,,,,15], //Corviknight
	[225,,,,,5] //Delibird
],[ //13440790120887602934
	[175,35], //Togepi
	[755,35], //Morelull
	[859,20,30], //Impidimp
	[280,10,30], //Ralts
	[176,,20,20], //Togetic
	[756,,20,40], //Shiinotic
	[860,,,20,20,10], //Morgrem
	[303,,,[20,0],[20,0],[20,0]], //Mawile
	[282,,,,20,25], //Gardevoir
	[468,,,,40,25], //Togekiss
	[861,,,,,15], //Grimmsnarl
	[778,,,,,5], //Mimikyu
	[alternateForm(78,1),,,[0,20],[0,20],[0,20]] //Rapidash-1
],[ //13440791220399231145
	[827,35], //Nickit
	[alternateForm(263,1),35], //Zigzagoon-1
	[559,[20,0],[30,0]], //Scraggy
	[215,10,30], //Sneasel
	[510,,20,20], //Liepard
	[alternateForm(264,1),,20,40], //Linoone-1
	[828,,,20,20,10], //Thievul
	[675,,,20,20,20], //Pangoro
	[461,,,,20,25], //Weavile
	[560,,,,[40,0],[25,0]], //Scrafty
	[862,,,,,15], //Obstagoon
	[635,,,,,[5,0]], //Hydreigon
	[629,[0,20],[0,30]], //Vullaby
	[630,,,,[0,40],[0,25]], //Mandibuzz
	[248,,,,,[0,5]] //Tyranitar
],[ //13440787921864346512
	[328,[35,20],[0,30]], //Trapinch
	[840,35], //Applin
	[610,[20,35],[30,0]], //Axew
	[782,[10,0],[30,0]], //Jangmo-o
	[885,,20,20], //Dreepy
	[611,,[20,0],[40,0]], //Fraxure
	[783,,,[20,0],[20,0],[10,0]], //Hakamo-o
	[776,,,[20,0],[20,0],[20,0]], //Turtonator
	[784,,,,[20,0],[25,0]], //Kommo-o
	[886,,,,40,25], //Drakloak
	[612,,,,,[15,0]], //Haxorus
	[887,,,,,5], //Dragapult
	[704,[0,10],[0,30]], //Goomy
	[329,,[0,20],[0,40]], //Vibrava
	[705,,,[0,20],[0,20],[0,10]], //Sliggoo
	[780,,,[0,20],[0,20],[0,20]], //Drampa
	[706,,,,[0,20],[0,25]], //Goodra
	[330,,,,,[0,15]] //Flygon
],[ //13440789021375974723
	[659,35], //Bunnelby
	[519,35], //Pidove
	[819,20,40], //Skwovet
	[133,10,10,,,15], //Eevee
	[520,,25,20], //Tranquill
	[831,,25,40], //Wooloo
	[521,,,20,20,10], //Unfezant
	[832,,,20,20,20], //Dubwool
	[628,,,,[20,0],[25,0]], //Braviary
	[876,,,,[40,0],[25,0]], //Indeedee
	[143,,,,,5], //Snorlax
	[765,,,,[0,20],[0,25]], //Oranguru
	[alternateForm(876,1),,,,[0,40],[0,25]] //Indeedee-1
],[ //13440794518934115778
	[132,25,25,25,25,25] //Ditto
],[ //13440795618445743989
	[458,68], //Mantyke
	[341,2], //Corphish
	[846,20,30], //Arrokuda
	[833,10,30], //Chewtle
	[747,,20,20], //Mareanie
	[550,,[20,0],[40,0]], //Basculin
	[342,,,20,20], //Crawdaunt
	[748,,,20,20,15], //Toxapex
	[771,,,,20,35], //Pyukumuku
	[226,,,,40,35], //Mantine
	[131,,,,,10], //Lapras
	[134,,,,,5], //Vaporeon
	[alternateForm(550,1),,[0,20],[0,40]] //Basculin-1
],[ //13440792319910859356
	[686,35], //Inkay
	[436,35], //Bronzor
	[alternateForm(122,1),20,30], //Mr. Mime-1
	[527,10,30], //Woobat
	[856,,20,20], //Hatenna
	[857,,20,40], //Hattrem
	[437,,,20,20], //Bronzong
	[528,,,20,20,20], //Swoobat
	[687,,,,20,30], //Malamar
	[866,,,,40,30], //Mr. Rime
	[858,,,,,15], //Hatterene
	[196,,,,,5] //Espeon
],[ //13440793419422487567
	[827,35], //Nickit
	[alternateForm(263,1),35], //Zigzagoon-1
	[686,20,30], //Inkay
	[624,10,30], //Pawniard
	[510,,20,20], //Liepard
	[alternateForm(264,1),,20,40], //Linoone-1
	[828,,,20,20,10], //Thievul
	[675,,,20,20,20], //Pangoro
	[625,,,,20,25], //Bisharp
	[687,,,,40,25], //Malamar
	[862,,,,,15], //Obstagoon
	[197,,,,,5] //Umbreon
],[ //13440798916980628622
	[420,35], //Cherubi
	[761,35], //Bounsweet
	[829,20,30], //Gossifleur
	[546,10,30], //Cottonee
	[762,,20,20], //Steenee
	[597,,20,40], //Ferroseed
	[421,,,20,20,10], //Cherrim
	[598,,,20,20,20], //Ferrothorn
	[830,,,,20,25], //Eldegoss
	[763,,,,40,25], //Tsareena
	[547,,,,,15], //Whimsicott
	[470,,,,,5] //Leafeon
],[ //13440800016492256833
	[37,[10,0],[30,0]], //Vulpix
	[850,35], //Sizzlipede
	[607,20,30], //Litwick
	[838,,20,20], //Carkol
	[608,,[20,0],[40,20],[0,20]], //Lampent
	[631,,[0,20],[20,40],[20,0]], //Heatmor
	[324,,,20,20,20], //Torkoal
	[59,,,,[10,50],30], //Arcanine
	[38,,,,[50,10],30], //Ninetales
	[609,,,,,15], //Chandelure
	[136,,,,,5], //Flareon
	[58,[0,10],[0,30]] //Growlithe
],[ //13441641142887649023
	[835,35], //Yamper
	[848,35], //Toxel
	[25,20,30,,,15], //Pikachu
	[694,10,30], //Helioptile
	[170,,20,20], //Chinchou
	[171,,20,40], //Lanturn
	[836,,,20,20,10], //Boltund
	[849,,,20,20,20], //Toxtricity
	[695,,,,20,25], //Heliolisk
	[738,,,,40,25], //Vikavolt
	[135,,,,,5] //Jolteon
],[ //13441640043376020812
	[582,35], //Vanillite
	[872,35], //Snom
	[alternateForm(122,1),20,30], //Mr. Mime-1
	[712,10,40], //Bergmite
	[361,,25,30], //Snorunt
	[583,,5,5], //Vanillish
	[713,,,35,20], //Avalugg
	[873,,,30,20,35], //Frosmoth
	[584,,,,20,25], //Vanilluxe
	[866,,,,40,25], //Mr. Rime
	[478,,,,,10], //Froslass
	[471,,,,,5] //Glaceon
],[ //13441643341910905445
	[175,35], //Togepi
	[684,[35,0]], //Swirlix
	[859,20,30], //Impidimp
	[280,10,30], //Ralts
	[176,,20,20], //Togetic
	[860,,20,40], //Morgrem
	[685,,,[20,0],[20,0],[10,0]], //Slurpuff
	[868,,,20,20,20], //Milcery
	[282,,,,20,25], //Gardevoir
	[861,,,,40,25], //Grimmsnarl
	[468,,,,,15], //Togekiss
	[700,,,,,5], //Sylveon
	[682,[0,35]], //Spritzee
	[683,,,[0,20],[0,20],[0,10]] //Aromatisse
],[ //13441642242399277234
	[129,68], //Magikarp
	[751,2], //Dewpider
	[194,20,30], //Wooper
	[339,10,30], //Barboach
	[98,,20,20], //Krabby
	[746,,20,40], //Wishiwashi
	[99,,,20,20], //Kingler
	[340,,,20,20,10], //Whiscash
	[211,,,,20,35], //Qwilfish
	[195,,,,40,35], //Quagsire
	[752,,,,,10], //Araquanid
	[130,,,,,10] //Gyarados
],[ //13441636744841136179
	[458,68], //Mantyke
	[223,2], //Remoraid
	[320,20,30], //Wailmer
	[688,10,30], //Binacle
	[98,,20,20], //Krabby
	[771,,20,40], //Pyukumuku
	[99,,,20,20], //Kingler
	[550,,,[20,0],[20,0],[10,0]], //Basculin
	[211,,,,20,35], //Qwilfish
	[224,,,,40,35], //Octillery
	[321,,,,,10], //Wailord
	[226,,,,,10], //Mantine
	[alternateForm(550,1),,,[0,20],[0,20],[0,10]] //Basculin-1
],[ //4972150845118706103
	[37,[35,0]], //Vulpix
	[850,35], //Sizzlipede
	[607,20,30], //Litwick
	[4,10,30], //Charmander
	[5,,20,20], //Charmeleon
	[38,,[20,0],[40,0],[20,0],[30,0]], //Ninetales
	[631,,[0,20],20,20], //Heatmor
	[324,,,20,20,20], //Torkoal
	[758,,,,[40,20],30], //Salazzle
	[851,,,,,15], //Centiskorch
	[alternateForm(6,1),,,,,5], //Charizard-3
	[58,[0,35]], //Growlithe
	[59,,,,[0,40],[0,30]] //Arcanine
],[ //4972151944630334314
	[129,35], //Magikarp
	[846,35], //Arrokuda
	[833,20,30], //Chewtle
	[98,10,30], //Krabby
	[771,,20,20], //Pyukumuku
	[550,,[20,0],[40,0]], //Basculin
	[211,,,20,20], //Qwilfish
	[99,,,20,20,20], //Kingler
	[746,,,,20,30], //Wishiwashi
	[130,,,,40,30], //Gyarados
	[alternateForm(423,1),,,,,15], //Gastrodon-1
	[alternateForm(834,1),,,,,5], //Drednaw-1
	[alternateForm(550,1),,[0,20],[0,40]] //Basculin-1
],[ //4972153044141962525
	[406,35], //Budew
	[273,[35,0]], //Seedot
	[829,20,30], //Gossifleur
	[597,10,30], //Ferroseed
	[274,,[20,0],[20,0]], //Nuzleaf
	[840,,20,40], //Applin
	[315,,,20,20,10], //Roselia
	[275,,,[20,0],[20,0],[20,0]], //Shiftry
	[830,,,,20,25], //Eldegoss
	[598,,,,40,25], //Ferrothorn
	[407,,,,,15], //Roserade
	[alternateForm(841,1),,,,,[5,0]], //Flapple-1
	[270,[0,35]], //Lotad
	[271,,[0,20],[0,20]], //Lombre
	[272,,,[0,20],[0,20],[0,20]], //Ludicolo
	[alternateForm(842,1),,,,,[0,5]] //Appletun-1
],[ //4972145347560565048
	[37,[35,0]], //Vulpix
	[850,35], //Sizzlipede
	[607,20,30], //Litwick
	[757,10,30], //Salandit
	[838,,20,20], //Carkol
	[608,,20,40], //Lampent
	[631,,,20,20], //Heatmor
	[324,,,20,20,10], //Torkoal
	[38,,,,[20,0],[35,0]], //Ninetales
	[609,,,,40,35], //Chandelure
	[839,,,,,15], //Coalossal
	[alternateForm(851,1),,,,,5], //Centiskorch-1
	[58,[0,35]], //Growlithe
	[59,,,,[0,20],[0,35]] //Arcanine
],[ //4972146447072193259
	[447,[35,0]], //Riolu
	[66,[35,0]], //Machop
	[759,[20,0],[30,0]], //Stufful
	[alternateForm(83,1),[10,0],[30,0]], //Farfetch’d-1
	[760,,[20,0],[20,0]], //Bewear
	[67,,[20,0],[40,0],[10,0]], //Machoke
	[870,,,[20,0],[10,0]], //Falinks
	[701,,,[20,0],[20,0],[30,0]], //Hawlucha
	[448,,,,[20,0],[39,0]], //Lucario
	[475,,,,[40,0],[25,0]], //Gallade
	[865,,,,,[1,0]], //Sirfetch’d
	[alternateForm(68,1),,,,,[5,0]], //Machamp-1
	[679,[0,35]], //Honedge
	[alternateForm(562,1),[0,35]], //Yamask-1
	[854,[0,20],[0,30]], //Sinistea
	[92,[0,10],[0,30]], //Gastly
	[680,,[0,20],[0,20]], //Doublade
	[alternateForm(222,1),,[0,20],[0,40],[0,10]], //Corsola-1
	[93,,,[0,20],[0,10]], //Haunter
	[302,,,[0,20],[0,20],[0,30]], //Sableye
	[855,,,,[0,20],[0,39]], //Polteageist
	[864,,,,[0,40],[0,25]], //Cursola
	[867,,,,,[0,1]], //Runerigus
	[alternateForm(94,1),,,,,[0,5]] //Gengar-2
],[ //4972147546583821470
	[175,35], //Togepi
	[755,[35,0]], //Morelull
	[859,20,30], //Impidimp
	[280,10,30], //Ralts
	[176,,20,20], //Togetic
	[756,,20,40], //Shiinotic
	[860,,,20,20], //Morgrem
	[303,,,[20,0],[20,0],[10,0]], //Mawile
	[282,,,,20,35], //Gardevoir
	[468,,,,40,35], //Togekiss
	[861,,,,,15], //Grimmsnarl
	[alternateForm(869,9),,,,,5], //Alcremie-9
	[alternateForm(77,1),[0,35]], //Ponyta-1
	[alternateForm(78,1),,,[0,20],[0,20],[0,10]] //Rapidash-1
],[ //4972148646095449681
	[557,[35,0]], //Dwebble
	[438,[35,0]], //Bonsly
	[837,[20,0],[30,0]], //Rolycoly
	[688,[10,0],[30,0]], //Binacle
	[838,,[20,0],[20,0]], //Carkol
	[185,,[20,0],[40,0]], //Sudowoodo
	[689,,,[20,0],[20,0]], //Barbaracle
	[95,,,[20,0],[20,0],[10,0]], //Onix
	[558,,,,[20,0],[35,0]], //Crustle
	[208,,,,[40,0],[35,0]], //Steelix
	[874,,,,,[15,0]], //Stonjourner
	[alternateForm(839,1),,,,,[5,0]], //Coalossal-1
	[582,[0,35]], //Vanillite
	[613,[0,35]], //Cubchoo
	[alternateForm(122,1),[0,20],[0,30]], //Mr. Mime-1
	[712,[0,10],[0,40]], //Bergmite
	[361,,[0,25],[0,30]], //Snorunt
	[225,,[0,5],[0,5]], //Delibird
	[713,,,[0,35],[0,20]], //Avalugg
	[362,,,[0,30],[0,20],[0,10]], //Glalie
	[584,,,,[0,20],[0,35]], //Vanilluxe
	[866,,,,[0,40],[0,35]], //Mr. Rime
	[875,,,,,[0,15]], //Eiscue
	[alternateForm(131,1),,,,,[0,5]] //Lapras-1
],[ //4972140949514052204
	[447,35], //Riolu
	[436,35], //Bronzor
	[624,20,30], //Pawniard
	[599,10,30], //Klink
	[95,,20,20], //Onix
	[632,,[20,0],[40,20],[0,20]], //Durant
	[600,,[0,20],[20,40],[20,0]], //Klang
	[437,,,20,20,10], //Bronzong
	[625,,,,20,35], //Bisharp
	[208,,,,40,35], //Steelix
	[601,,,,,15], //Klinklang
	[alternateForm(884,1),,,,,5] //Duraludon-1
],[ //4972142049025680415
	[alternateForm(52,2),35], //Meowth-2
	[436,35], //Bronzor
	[624,20,30], //Pawniard
	[597,10,30], //Ferroseed
	[679,,20,20], //Honedge
	[437,,20,40], //Bronzong
	[863,,,20,20], //Perrserker
	[598,,,20,20,10], //Ferrothorn
	[625,,,,20,35], //Bisharp
	[alternateForm(618,1),,,,40,35], //Stunfisk-1
	[884,,,,,15], //Duraludon
	[alternateForm(879,1),,,,,5] //Copperajah-1
],[ //4973141505095534989
	[434,35], //Stunky
	[568,35], //Trubbish
	[451,20,30], //Skorupi
	[109,10,30], //Koffing
	[747,,[20,0],[20,0]], //Mareanie
	[848,,20,40], //Toxel
	[452,,,20,20], //Drapion
	[849,,,20,20,10], //Toxtricity
	[435,,,,20,35], //Skuntank
	[alternateForm(110,1),,,,40,35], //Weezing-1
	[748,,,,,[15,0]], //Toxapex
	[alternateForm(569,1),,,,,5], //Garbodor-1
	[757,,[0,20],[0,20]], //Salandit
	[758,,,,,[0,15]] //Salazzle
],[ //4973140405583906778
	[175,35], //Togepi
	[684,[35,0]], //Swirlix
	[859,20,30], //Impidimp
	[280,10,30], //Ralts
	[176,,20,20], //Togetic
	[860,,20,40], //Morgrem
	[685,,,[20,0],[20,0]], //Slurpuff
	[868,,,20,20,10], //Milcery
	[282,,,,20,35], //Gardevoir
	[861,,,,40,35], //Grimmsnarl
	[468,,,,,15], //Togekiss
	[alternateForm(858,1),,,,,5], //Hatterene-1
	[682,[0,35]], //Spritzee
	[683,,,[0,20],[0,20]] //Aromatisse
],[ //4973139306072278567
	[827,35], //Nickit
	[alternateForm(263,1),35], //Zigzagoon-1
	[559,[20,0],[30,0]], //Scraggy
	[859,10,30], //Impidimp
	[510,,20,20], //Liepard
	[alternateForm(264,1),,20,40], //Linoone-1
	[860,,,20,20], //Morgrem
	[828,,,20,20,10], //Thievul
	[675,,,,20,35], //Pangoro
	[560,,,,[40,0],[35,0]], //Scrafty
	[635,,,,,[15,0]], //Hydreigon
	[alternateForm(861,1),,,,,5], //Grimmsnarl-1
	[629,[0,20],[0,30]], //Vullaby
	[630,,,,[0,40],[0,35]], //Mandibuzz
	[248,,,,,[0,15]] //Tyranitar
],[ //4973138206560650356
	[177,35], //Natu
	[163,35], //Hoothoot
	[821,20,30], //Rookidee
	[278,10,30], //Wingull
	[12,,20,20], //Butterfree
	[822,,20,40], //Corvisquire
	[164,,,20,25], //Noctowl
	[279,,,20,20,10], //Pelipper
	[178,,,,20,35], //Xatu
	[701,,,,35,35], //Hawlucha
	[561,,,,,15], //Sigilyph
	[alternateForm(823,1),,,,,5] //Corviknight-1
],[ //4973137107049022145
	[767,30], //Wimpod
	[824,20], //Blipbug
	[588,[20,0],[25,20],[0,20]], //Karrablast
	[751,20,25], //Dewpider
	[616,[0,20],[20,25],[20,0]], //Shelmet
	[557,,20,30], //Dwebble
	[825,,,20,20], //Dottler
	[826,,,20,20,20], //Orbeetle
	[752,,,,20,25], //Araquanid
	[768,,,,30,30], //Golisopod
	[589,,,,,[15,0]], //Escavalier
	[alternateForm(12,1),10,10,10,10,10], //Butterfree-1
	[617,,,,,[0,15]] //Accelgor
],[ //4973136007537393934
	[341,40], //Corphish
	[98,25], //Krabby
	[846,25,25], //Arrokuda
	[833,10,25], //Chewtle
	[747,,20,20], //Mareanie
	[550,,[20,0],[30,0]], //Basculin
	[342,,,20,20], //Crawdaunt
	[748,,,20,20,15], //Toxapex
	[771,,,,20,25], //Pyukumuku
	[130,,,,30,35], //Gyarados
	[131,,,,,15], //Lapras
	[alternateForm(99,1),,10,10,10,10], //Kingler-1
	[alternateForm(550,1),,[0,20],[0,30]] //Basculin-1
],[ //4973134908025765723
	[767,35], //Wimpod
	[824,35], //Blipbug
	[588,[20,0],[30,20],[0,20]], //Karrablast
	[751,10,30], //Dewpider
	[616,[0,20],[20,30],[20,0]], //Shelmet
	[557,,20,30], //Dwebble
	[825,,,20,20], //Dottler
	[826,,,20,20,20], //Orbeetle
	[752,,,,20,25], //Araquanid
	[768,,,,30,30], //Golisopod
	[589,,,,,[15,0]], //Escavalier
	[alternateForm(826,1),,,10,10,10], //Orbeetle-1
	[617,,,,,[0,15]] //Accelgor
],[ //4973133808514137512
	[194,35], //Wooper
	[339,35], //Barboach
	[alternateForm(562,1),20,30], //Yamask-1
	[622,10,30], //Golett
	[536,,20,20], //Palpitoad
	[195,,20,40], //Quagsire
	[alternateForm(618,1),,,20,20], //Stunfisk-1
	[623,,,20,20,20], //Golurk
	[alternateForm(423,1),,,,20,25], //Gastrodon-1
	[537,,,,30,30], //Seismitoad
	[464,,,,,15], //Rhyperior
	[alternateForm(844,1),,,,10,10] //Sandaconda-1
],[ //7556351317940148695
	[819,8,8,8,25,10] //Skwovet
],[ //7556352417451776906
	[819,8,8,8,25,10] //Skwovet
],[ //7556353516963405117
	[819,8,8,8,25,10] //Skwovet
],[ //7556345820382007640
	[819,100,100,100,25,10] //Skwovet
],[ //2498979820391853709
	[819,10,20,20,25,10] //Skwovet
],[ //2447364886159768926
	[113,,,5,5,5], //Chansey
	[174,60,30], //Igglybuff
	[506,40,25], //Lillipup
	[427,,25,30], //Buneary
	[39,,20,25,25], //Jigglypuff
	[507,,,15,25], //Herdier
	[428,,,,15,20], //Lopunny
	[40,,,,15,20], //Wigglytuff
	[206,,,,,15], //Dunsparce
	[508,,,,,15] //Stoutland
],[ //15632276665898509590
	[242,,,5,5,5], //Blissey
	[506,60,30], //Lillipup
	[759,40,25], //Stufful
	[39,,25,25,25], //Jigglypuff
	[427,,20,25], //Buneary
	[206,,,15,25], //Dunsparce
	[832,,,,15,20], //Dubwool
	[428,,,,15,20], //Lopunny
	[508,,,,15,20], //Stoutland
	[760,,,,,20], //Bewear
	[40,,,,,15] //Wigglytuff
],[ //2447363786648140715
	[113,,,5,5,5], //Chansey
	[293,60,30], //Whismur
	[108,40,25,15,25], //Lickitung
	[241,,25,30,15,25], //Miltank
	[294,,20,25,25], //Loudred
	[626,,,,15,20], //Bouffalant
	[128,,,,15,20], //Tauros
	[295,,,,,15], //Exploud
	[463,,,,,15] //Lickilicky
],[ //15632275566386881379
	[242,,,5,5,5], //Blissey
	[293,60,30], //Whismur
	[128,40,25,,15,20], //Tauros
	[108,,25,30], //Lickitung
	[241,,20,25,25], //Miltank
	[626,,,15,25], //Bouffalant
	[295,,,,15,20], //Exploud
	[573,,,,15,20], //Cinccino
	[463,,,,,15] //Lickilicky
],[ //6984833918694526192
	[113,,,5,5,5], //Chansey
	[27,60,20,25], //Sandshrew
	[551,40,25], //Sandile
	[104,,25,30], //Cubone
	[552,,,25,25], //Krokorok
	[28,,,15,15,20], //Sandslash
	[844,,,,15,25], //Sandaconda
	[105,,,,15,20], //Marowak
	[553,,,,,15], //Krookodile
	[115,,,,,15] //Kangaskhan
],[ //14413583907274219616
	[242,,,5,5,5], //Blissey
	[27,60,30], //Sandshrew
	[104,40,25], //Cubone
	[328,,20,25], //Trapinch
	[552,,,25,25], //Krokorok
	[28,,,15,25], //Sandslash
	[105,,,,15,20], //Marowak
	[553,,,,15,20], //Krookodile
	[115,,,,15,20], //Kangaskhan
	[330,,,,,20], //Flygon
	[623,,,,,15] //Golurk
],[ //7956530560371257544
	[113,,,5,5,5], //Chansey
	[702,60,30,25,15,25], //Dedenne
	[81,40,25], //Magnemite
	[403,,25,30], //Shinx
	[877,,20,25], //Morpeko
	[404,,,15,25], //Luxio
	[82,,,,15,20], //Magneton
	[871,,,,15,20], //Pincurchin
	[405,,,,,15], //Luxray
	[462,,,,,15] //Magnezone
],[ //2024757571205803752
	[242,,,5,5,5], //Blissey
	[403,60,30], //Shinx
	[172,40,25], //Pichu
	[25,,25,30], //Pikachu
	[871,,20,25], //Pincurchin
	[404,,,25,25], //Luxio
	[26,,,15,25], //Raichu
	[836,,,,15,20], //Boltund
	[702,,,,15,20], //Dedenne
	[310,,,,15,20], //Manectric
	[405,,,,,20], //Luxray
	[462,,,,,15] //Magnezone
],[ //11635283243122928556
	[113,,,5,5,5], //Chansey
	[661,60,30], //Fletchling
	[527,40,25], //Woobat
	[627,,[25,0],[30,0]], //Rufflet
	[587,,20,25,15,20], //Emolga
	[662,,,15,25], //Fletchinder
	[628,,,,[15,0],[15,0]], //Braviary
	[528,,,,15,20], //Swoobat
	[663,,,,,15], //Talonflame
	[629,,[0,25],[0,30]], //Vullaby
	[630,,,,[0,15],[0,15]] //Mandibuzz
],[ //17629394089387610164
	[242,,,5,5,5], //Blissey
	[163,60,30], //Hoothoot
	[519,40,25], //Pidove
	[627,,[25,0],[30,0]], //Rufflet
	[520,,20,25], //Tranquill
	[528,,,25,25], //Swoobat
	[164,,,15,25], //Noctowl
	[521,,,,15,20], //Unfezant
	[663,,,,15,15], //Talonflame
	[587,,,,15,20], //Emolga
	[628,,,,,[20,0]], //Braviary
	[629,,[0,25],[0,30]], //Vullaby
	[630,,,,,[0,20]] //Mandibuzz
],[ //7854659797556875545
	[113,,,5,5,5], //Chansey
	[127,[60,0],[20,0],[25,0],[15,0],[20,0]], //Pinsir
	[557,40,25], //Dwebble
	[825,,25,30], //Dottler
	[558,,,15,25], //Crustle
	[123,,,,15,20], //Scyther
	[826,,,,,15], //Orbeetle
	[212,,,,,15], //Scizor
	[214,[0,60],[0,20],[0,25],[0,15],[0,20]] //Heracross
],[ //5999950843982638879
	[242,,,5,5,5], //Blissey
	[123,60,30,25,25], //Scyther
	[127,[40,0],[25,0],,,[20,0]], //Pinsir
	[213,,25,30], //Shuckle
	[544,,20,25], //Whirlipede
	[558,,,15,25], //Crustle
	[545,,,,15,20], //Scolipede
	[617,,,,15,20], //Accelgor
	[589,,,,15,20], //Escavalier
	[212,,,,,15], //Scizor
	[214,[0,40],[0,25],,,[0,20]] //Heracross
],[ //2997411918588892139
	[113,,,5,5,5], //Chansey
	[590,60,30], //Foongus
	[753,40,25], //Fomantis
	[548,,25,30], //Petilil
	[754,,20,25,15,20], //Lurantis
	[591,,,25,25,15], //Amoonguss
	[114,,,15,25], //Tangela
	[549,,,,15,20], //Lilligant
	[465,,,,,15] //Tangrowth
],[ //12562706121429926817
	[242,,,5,5,5], //Blissey
	[114,60,30], //Tangela
	[753,40,25], //Fomantis
	[590,,25,30], //Foongus
	[754,,20,25,15,20], //Lurantis
	[556,,,25,25], //Maractus
	[549,,,15,25,20], //Lilligant
	[591,,,,15,20], //Amoonguss
	[465,,,,15,20], //Tangrowth
	[460,,,,,15] //Abomasnow
],[ //6589539950519384197
	[113,,,5,5,5], //Chansey
	[661,60,30], //Fletchling
	[757,40,20,25], //Salandit
	[636,,25,15,25], //Larvesta
	[662,,,25,25], //Fletchinder
	[324,,,,15,15], //Torkoal
	[663,,,,15,20], //Talonflame
	[758,,,,15,20], //Salazzle
	[637,,,,,15] //Volcarona
],[ //3561902408726248099
	[242,,,5,5,5], //Blissey
	[636,60,25,30], //Larvesta
	[607,40,25], //Litwick
	[757,,20,25], //Salandit
	[324,,,25,25], //Torkoal
	[758,,,15,25], //Salazzle
	[663,,,,15,20], //Talonflame
	[609,,,,15,20], //Chandelure
	[637,,,,15,20], //Volcarona
	[38,,,,,[20,0]], //Ninetales
	[6,,,,,15], //Charizard
	[59,,,,,[0,20]] //Arcanine
],[ //8769170721942624824
	[113,,,5,5,5], //Chansey
	[524,60,30], //Roggenrola
	[111,40,25], //Rhyhorn
	[744,,25,30], //Rockruff
	[525,,20,25], //Boldore
	[112,,,25,15,25], //Rhydon
	[558,,,15,15,20], //Crustle
	[526,,,,15,20], //Gigalith
	[745,,,,,[15,0]], //Lycanroc
	[464,,,,,15], //Rhyperior
	[alternateForm(745,1),,,,,[0,15]] //Lycanroc-1
],[ //14477537978666912344
	[242,,,5,5,5], //Blissey
	[744,60,20,25], //Rockruff
	[438,40,25], //Bonsly
	[111,,25,30], //Rhyhorn
	[112,,,25,25], //Rhydon
	[213,,,15,25], //Shuckle
	[745,,,,[15,0],[20,0]], //Lycanroc
	[185,,,,15,20], //Sudowoodo
	[526,,,,15,20], //Gigalith
	[558,,,,,20], //Crustle
	[464,,,,,15], //Rhyperior
	[alternateForm(745,1),,,,[0,15],[0,20]] //Lycanroc-1
],[ //13305292637317525948
	[113,,,5,5,5], //Chansey
	[102,60,30], //Exeggcute
	[63,40,25], //Abra
	[280,,25,30], //Ralts
	[64,,20,[15,25],[25,0]], //Kadabra
	[281,,,25,25], //Kirlia
	[103,,,,15,20], //Exeggutor
	[282,,,,15,20], //Gardevoir
	[65,,,,,15], //Alakazam
	[121,,,,,15], //Starmie
	[765,,,[0,15],[0,25]] //Oranguru
],[ //16069264858016261892
	[242,,,5,5,5], //Blissey
	[605,60,20,25], //Elgyem
	[63,40,25], //Abra
	[alternateForm(79,1),,25,15,25], //Slowpoke-1
	[64,,,[25,0],[25,0]], //Kadabra
	[518,,,,15,20], //Musharna
	[876,,,,[15,0],[20,0]], //Indeedee
	[606,,,,15,20], //Beheeyem
	[65,,,,,20], //Alakazam
	[678,,,,,[15,0]], //Meowstic
	[765,,,[0,25],[0,25]], //Oranguru
	[alternateForm(876,1),,,,[0,15],[0,20]], //Indeedee-1
	[alternateForm(678,1),,,,,[0,15]] //Meowstic-1
],[ //6672704941776910536
	[113,,,5,5,5], //Chansey
	[543,60,30], //Venipede
	[451,40,25], //Skorupi
	[72,,20,25], //Tentacool
	[544,,,15,25], //Whirlipede
	[452,,,,15,20], //Drapion
	[73,,,,15,15], //Tentacruel
	[545,,,,,15] //Scolipede
],[ //17951961757311600360
	[242,,,5,5,5], //Blissey
	[747,60,30], //Mareanie
	[211,40,25,25,25], //Qwilfish
	[544,,20,25], //Whirlipede
	[591,,,15,25], //Amoonguss
	[748,,,,15,20], //Toxapex
	[545,,,,15,15], //Scolipede
	[452,,,,15,20], //Drapion
	[alternateForm(110,1),,,,,20] //Weezing-1
],[ //14284833672245134656
	[113,,,5,5,5], //Chansey
	[318,60,25,30], //Carvanha
	[624,40,25], //Pawniard
	[570,,20,25], //Zorua
	[319,,,25,25,15], //Sharpedo
	[687,,,15,15,20], //Malamar
	[452,,,,15,25], //Drapion
	[625,,,,15,20], //Bisharp
	[571,,,,,15] //Zoroark
],[ //7704513452465554544
	[242,,,5,5,5], //Blissey
	[570,60,25,30], //Zorua
	[318,40,25], //Carvanha
	[686,,20,25], //Inkay
	[552,,,25,25], //Krokorok
	[687,,,15,25], //Malamar
	[828,,,,15,20], //Thievul
	[571,,,,15,20], //Zoroark
	[319,,,,15,20], //Sharpedo
	[510,,,,,20], //Liepard
	[553,,,,,15] //Krookodile
],[ //13563999851587423716
	[113,,,5,5,5], //Chansey
	[619,60,25,30], //Mienfoo
	[852,40,25], //Clobbopus
	[559,,[20,0],[25,0]], //Scraggy
	[766,,,[25,0],[25,0]], //Passimian
	[560,,,[15,0],[15,0],[20,0]], //Scrafty
	[620,,,,15,15], //Mienshao
	[853,,,[0,25],[0,25],15], //Grapploct
	[453,,[0,20],[0,25]], //Croagunk
	[454,,,[0,15],[0,15],[0,20]] //Toxicroak
],[ //502513031628180988
	[242,,,5,5,5], //Blissey
	[619,60,30], //Mienfoo
	[559,[40,0],[25,0]], //Scraggy
	[539,,[25,0],[30,0],[15,0],[20,0]], //Sawk
	[620,,20,[25,15],15,20], //Mienshao
	[870,,,25,25,[0,15]], //Falinks
	[766,,,[15,0],[25,0]], //Passimian
	[560,,,,[15,0],[20,0]], //Scrafty
	[853,,,,,20], //Grapploct
	[865,,,,,[15,0]], //Sirfetch’d
	[453,[0,40],[0,25]], //Croagunk
	[538,,[0,25],[0,30],[0,15],[0,20]], //Throh
	[454,,,,[0,15],[0,20]] //Toxicroak
],[ //16341001078884806474
	[113,,,5,5,5], //Chansey
	[174,60,30], //Igglybuff
	[298,40,25], //Azurill
	[764,,25,15,25,15], //Comfey
	[39,,20,25], //Jigglypuff
	[183,,,25,25], //Marill
	[707,,,,15,25], //Klefki
	[184,,,,15,20], //Azumarill
	[40,,,,15,20], //Wigglytuff
	[282,,,,,15] //Gardevoir
],[ //9913932150092391706
	[242,,,5,5,5], //Blissey
	[173,60,30], //Cleffa
	[755,40,25], //Morelull
	[183,,25,30], //Marill
	[35,,20,25], //Clefairy
	[281,,,25,25], //Kirlia
	[707,,,15,25], //Klefki
	[764,,,,15,20], //Comfey
	[36,,,,15,20], //Clefable
	[282,,,,15,20], //Gardevoir
	[756,,,,,20], //Shiinotic
	[184,,,,,15] //Azumarill
],[ //342604449375897784
	[113,,,5,5,5], //Chansey
	[769,60,30], //Sandygast
	[592,40,25], //Frillish
	[104,,25,30], //Cubone
	[425,,20,25], //Drifloon
	[593,,,25,15,20], //Jellicent
	[426,,,15,15,20], //Drifblim
	[770,,,,15,15], //Palossand
	[105,,,,,15] //Marowak
],[ //8253110425161551320
	[242,,,5,5,5], //Blissey
	[769,60,25,30], //Sandygast
	[592,40,25], //Frillish
	[425,,20,25], //Drifloon
	[593,,,25,25], //Jellicent
	[426,,,15,25], //Drifblim
	[711,,,,15,20], //Gourgeist
	[alternateForm(711,1),,,,15,20], //Gourgeist-1
	[alternateForm(711,2),,,,15,20], //Gourgeist-2
	[alternateForm(711,3),,,,,20], //Gourgeist-3
	[770,,,,,[15,0]], //Palossand
	[864,,,,,[0,15]] //Cursola
],[ //5830741396702654597
	[113,,,5,5,5], //Chansey
	[707,60,30,,15,20], //Klefki
	[81,40,20,25], //Magnemite
	[624,,25,30], //Pawniard
	[227,,,25,25,15], //Skarmory
	[82,,,15,15,25], //Magneton
	[625,,,,15,20], //Bisharp
	[462,,,,,15] //Magnezone
],[ //17953607996949684899
	[242,,,5,5,5], //Blissey
	[81,60,30], //Magnemite
	[227,40,25,,15,20], //Skarmory
	[436,,25,30], //Bronzor
	[alternateForm(52,2),,20,25], //Meowth-2
	[82,,,25,25], //Magneton
	[601,,,15,25], //Klinklang
	[437,,,,15,20], //Bronzong
	[863,,,,15,20], //Perrserker
	[448,,,,,20], //Lucario
	[625,,,,,15] //Bisharp
],[ //12738905581603037598
	[113,,,5,5,5], //Chansey
	[782,[60,0],[30,0]], //Jangmo-o
	[116,40,25], //Horsea
	[840,,25,30], //Applin
	[117,,20,25], //Seadra
	[621,,,25,15,25], //Druddigon
	[783,,,[15,0],[25,0]], //Hakamo-o
	[130,,,,15,20], //Gyarados
	[841,,,,[15,0],[20,0]], //Flapple
	[230,,,,,15], //Kingdra
	[784,,,,,[15,0]], //Kommo-o
	[704,[0,60],[0,30]], //Goomy
	[705,,,[0,15],[0,25]], //Sliggoo
	[842,,,,[0,15],[0,20]], //Appletun
	[706,,,,,[0,15]] //Goodra
],[ //4426791916416848726
	[242,,,5,5,5], //Blissey
	[116,60,30], //Horsea
	[621,40,25,,15,20], //Druddigon
	[776,,[25,0],[30,0],[15,0],[20,0]], //Turtonator
	[782,,[20,0],[25,0]], //Jangmo-o
	[117,,,25,25], //Seadra
	[783,,,[15,0],[25,0]], //Hakamo-o
	[715,,,,15,20], //Noivern
	[230,,,,,20], //Kingdra
	[784,,,,,[15,0]], //Kommo-o
	[780,,[0,25],[0,30],[0,15],[0,20]], //Drampa
	[704,,[0,20],[0,25]], //Goomy
	[705,,,[0,15],[0,25]], //Sliggoo
	[706,,,,,[0,15]] //Goodra
],[ //4780541378243794326
	[113,,,5,5,5], //Chansey
	[60,60,30], //Poliwag
	[194,40,25], //Wooper
	[118,,25,30], //Goldeen
	[61,,20,15,25], //Poliwhirl
	[342,,,25,15,20], //Crawdaunt
	[119,,,,15,25], //Seaking
	[195,,,,15,20], //Quagsire
	[62,,,,,15], //Poliwrath
	[186,,,,,15] //Politoed
],[ //18345017229883237822
	[242,,,5,5,5], //Blissey
	[341,60,30], //Corphish
	[751,40,25], //Dewpider
	[118,,25,30], //Goldeen
	[61,,20,25], //Poliwhirl
	[342,,,25,15,20], //Crawdaunt
	[195,,,15,25], //Quagsire
	[119,,,,15,20], //Seaking
	[62,,,,15,20], //Poliwrath
	[752,,,,,20], //Araquanid
	[186,,,,,15] //Politoed
],[ //4780540278732166115
	[113,,,5,5,5], //Chansey
	[54,60,30], //Psyduck
	[833,40,25], //Chewtle
	[846,,25,30], //Arrokuda
	[339,,20,25], //Barboach
	[55,,,25,15,15], //Golduck
	[845,,,15,25], //Cramorant
	[847,,,,15,20], //Barraskewda
	[834,,,,15,20], //Drednaw
	[340,,,,,15] //Whiscash
],[ //18345016130371609611
	[242,,,5,5,5], //Blissey
	[846,60,30], //Arrokuda
	[535,40,25], //Tympole
	[54,,25,30], //Psyduck
	[536,,20,25], //Palpitoad
	[55,,,25,15,20], //Golduck
	[340,,,15,25], //Whiscash
	[847,,,,15,20], //Barraskewda
	[537,,,,15,20], //Seismitoad
	[130,,,,,20], //Gyarados
	[550,,,,,[15,0]], //Basculin
	[alternateForm(550,1),,,,,[0,15]] //Basculin-1
],[ //4780539179220537904
	[113,,,5,5,5], //Chansey
	[72,60,25,30], //Tentacool
	[98,40,25], //Krabby
	[223,,20,25], //Remoraid
	[73,,,25,25,15], //Tentacruel
	[746,,,15,25], //Wishiwashi
	[224,,,,15,25], //Octillery
	[226,,,,15,20], //Mantine
	[99,,,,15,20], //Kingler
	[91,,,,,15] //Cloyster
],[ //18345015030859981400
	[242,,,5,5,5], //Blissey
	[90,60,30], //Shellder
	[688,40,25], //Binacle
	[747,,25,30], //Mareanie
	[223,,20,25], //Remoraid
	[73,,,25,25], //Tentacruel
	[771,,,15,25], //Pyukumuku
	[224,,,,15,20], //Octillery
	[226,,,,15,20], //Mantine
	[689,,,,15,20], //Barbaracle
	[91,,,,,20], //Cloyster
	[748,,,,,15] //Toxapex
],[ //4780546875801935381
	[113,,,5,5,5], //Chansey
	[170,60,30], //Chinchou
	[692,[40,0],[25,0],[30,0]], //Clauncher
	[120,,20,25], //Staryu
	[320,,,25,25], //Wailmer
	[746,,,15,25], //Wishiwashi
	[321,,,,15,25], //Wailord
	[171,,,,15,20], //Lanturn
	[121,,,,15,20], //Starmie
	[693,,,,,[15,0]], //Clawitzer
	[319,,,,,15], //Sharpedo
	[690,[0,40],[0,25],[0,30]], //Skrelp
	[691,,,,,[0,15]] //Dragalge
],[ //18345022727441378877
	[242,,,5,5,5], //Blissey
	[692,[60,0],[30,0]], //Clauncher
	[120,40,25], //Staryu
	[320,,25,30], //Wailmer
	[279,,20,25], //Pelipper
	[171,,,25,15,20], //Lanturn
	[117,,,15,25], //Seadra
	[693,,,,[15,0],[20,0]], //Clawitzer
	[121,,,,15,20], //Starmie
	[319,,,,,15], //Sharpedo
	[690,[0,60],[0,30]], //Skrelp
	[691,,,,[0,15],[0,20]] //Dragalge
],[ //15336172135299617393
	[440,25,20,25], //Happiny
	[113,,,20,15,20], //Chansey
	[242,,,,,15] //Blissey
],[ //11188576017968089319
	[113,25,20,20,25], //Chansey
	[242,,,,15,15] //Blissey
],[ //16882931869395424672
	[113,,,5,6,7], //Chansey
	[415,40,20,15,25], //Combee
	[416,,,,15,15] //Vespiquen
],[ //4515385547978135952
	[242,,,5,6,7], //Blissey
	[415,40,20,25], //Combee
	[416,,,15,15,15] //Vespiquen
],[ //5701088864462885848
	[242,,,5,5,5], //Blissey
	[590,60,30], //Foongus
	[102,40,25], //Exeggcute
	[114,,25,25,25], //Tangela
	[315,,20,15,25], //Roselia
	[103,,,,15,25], //Exeggutor
	[3,,,,15,25], //Venusaur
	[465,,,,15,20], //Tangrowth
	[407,,,,,20], //Roserade
	[alternateForm(3,1),,,,,5] //Venusaur-1
],[ //5701092162997770481
	[242,,,5,5,5], //Blissey
	[129,60,30], //Magikarp
	[72,40,25], //Tentacool
	[120,,25,30], //Staryu
	[688,,20,25], //Binacle
	[73,,,25,15,25], //Tentacruel
	[130,,,15,15,25], //Gyarados
	[121,,,,15,20], //Starmie
	[689,,,,,20], //Barbaracle
	[alternateForm(9,1),,,,,5] //Blastoise-1
],[ //5701091063486142270
	[242,,,5,5,5], //Blissey
	[98,60,30], //Krabby
	[688,40,25], //Binacle
	[72,,25,30], //Tentacool
	[223,,20,25], //Remoraid
	[73,,,25,25], //Tentacruel
	[224,,,15,25], //Octillery
	[713,,,,15,25], //Avalugg
	[614,,,,15,25], //Beartic
	[99,,,,15,20], //Kingler
	[91,,,,,15], //Cloyster
	[alternateForm(99,1),,,,,10] //Kingler-1
],[ //5701094362021026903
	[242,,,5,5,5], //Blissey
	[833,60,30], //Chewtle
	[54,40,25], //Psyduck
	[339,,25,30], //Barboach
	[550,,[20,0],[25,0],[15,0],[20,0]], //Basculin
	[55,,,25,15,25], //Golduck
	[845,,,15,25], //Cramorant
	[847,,,,15,25], //Barraskewda
	[340,,,,,15], //Whiscash
	[alternateForm(834,1),,,,,10], //Drednaw-1
	[alternateForm(550,1),,[0,20],[0,25],[0,15],[0,20]] //Basculin-1
],[ //5701093262509398692
	[242,,,5,5,5], //Blissey
	[824,60,30], //Blipbug
	[742,40,25], //Cutiefly
	[595,,25,30], //Joltik
	[127,,[20,0],[25,0]], //Pinsir
	[825,,,25,25], //Dottler
	[291,,,15,25,15], //Ninjask
	[826,,,,15,25], //Orbeetle
	[596,,,,15,25], //Galvantula
	[743,,,,15,20], //Ribombee
	[alternateForm(826,1),,,,,10], //Orbeetle-1
	[214,,[0,20],[0,25]] //Heracross
],[ //5701096561044283325
	[242,,,5,5,5], //Blissey
	[843,60,25,30], //Silicobra
	[529,40,20,25], //Drilbur
	[28,,,25,25], //Sandslash
	[552,,,15,25], //Krokorok
	[844,,,,15,25], //Sandaconda
	[553,,,,15,15], //Krookodile
	[530,,,,15,20], //Excadrill
	[alternateForm(844,1),,,,,10] //Sandaconda-1
],[ //5701095461532655114
	[242,,,5,5,5], //Blissey
	[840,60,20,25], //Applin
	[420,40,25,30], //Cherubi
	[762,,,25,25], //Steenee
	[841,,,[15,0],[15,0],[25,0]], //Flapple
	[820,,,,15,20], //Greedent
	[763,,,,,15], //Tsareena
	[alternateForm(841,1),,,,,[10,0]], //Flapple-1
	[842,,,[0,15],[0,15],[0,25]], //Appletun
	[alternateForm(842,1),,,,,[0,10]] //Appletun-1
],[ //4665094036540599430
	[113,,,5,5,5], //Chansey
	[132,25,25,20,20,20] //Ditto
],[ //11519945754184084270
	[242,,,5,5,5], //Blissey
	[132,25,25,20,20,20] //Ditto
],[ //15818376695778914966
	[113,,,5,5,5], //Chansey
	[590,60,30], //Foongus
	[102,40,25,15,25], //Exeggcute
	[753,,25,30], //Fomantis
	[114,,20,25], //Tangela
	[754,,,25,15,20], //Lurantis
	[103,,,,15,25], //Exeggutor
	[591,,,,15,25], //Amoonguss
	[465,,,,,15], //Tangrowth
	[3,,,,,10] //Venusaur
],[ //7725829814153603264
	[113,,,5,5,5], //Chansey
	[129,60,30], //Magikarp
	[72,40,25], //Tentacool
	[120,,25,30], //Staryu
	[90,,20,25], //Shellder
	[73,,,25,15,25], //Tentacruel
	[130,,,15,15,25], //Gyarados
	[121,,,,15,20], //Starmie
	[91,,,,,15], //Cloyster
	[9,,,,,10] //Blastoise
],[ //6162140483756004486
	[113,,,5,5,5], //Chansey
	[744,50,20,20,40], //Rockruff
	[alternateForm(744,1),,,5,5], //Rockruff-1
	[745,,,,[20,10],20], //Lycanroc
	[alternateForm(745,1),,,,[10,20],20], //Lycanroc-1
	[alternateForm(745,2),,,,,5] //Lycanroc-2
],[ //6162171270081594394
	[242,,,5,5,5], //Blissey
	[744,50,20,20,30], //Rockruff
	[alternateForm(744,1),,,15,15], //Rockruff-1
	[745,,,,[30,15],[40,35]], //Lycanroc
	[alternateForm(745,1),,,,[15,30],[35,40]], //Lycanroc-1
	[alternateForm(745,2),,,,5,20] //Lycanroc-2
]];


const LOCATIONS=[
{name:['Events',,,,'Eventos'],encounters:[
	[alternateForm(52,3),,'event']
]},
{name:['Postwick',,,,'Pueblo Yarda'],encounters:[
	[810,,'starter'],
	[813,,'starter'],
	[816,,'starter'],
	[4,,['gift','postgame']]
]},
{name:['Slumbering Weald',,,,'Bosque Oniria'],encounters:[
	{group:'east',encounters:[
		[819,,'overworld',40],
		[821,,'overworld',30],
		[824,,'overworld',20],
		[736,,'overworld',10],
		[819,,'hidden',50],
		[821,,'hidden',20],
		[163,,'hidden',15],
		[824,,'hidden',10],
		[736,,'hidden',5]
	]},
	{group:'west',encounters:[
		[alternateForm(110,1),,'overworld',50],
		[517,,'overworld',30],
		[826,,'overworld',15],
		[823,,'overworld',5],
		[alternateForm(110,1),,'hidden',30],
		[517,,'hidden',25],
		[823,,'hidden',20],
		[826,,'hidden',15],
		[12,,'hidden',5],
		[alternateForm(618,1),,'hidden',5],
		[340,,'fish',60],
		[339,,'fish',20],
		[129,,'fish',20],
		[888,Sw,'interact'],
		[889,Sh,'interact']
	]}
]},
{name:['Route 1',,,,'Ruta 1'],encounters:[
	[819,,'overworld',50],
	[821,,'overworld',30],
	[831,,'overworld',15],
	[827,,'overworld',5],
	[819,,'hidden',40],
	[824,,'hidden',30],
	[10,,'hidden',15],
	[736,,'hidden',10],
	[163,,'hidden',5]
]},
{name:['Route 2',,,,'Ruta 2'],encounters:[
	{group:'main',encounters:[
		[819,,'overworld',38],
		[821,,'overworld',30],
		[827,,'overworld',15],
		[833,,'overworld',10],
		[835,,'overworld',5],
		[alternateForm(263,1),,'overworld',2],

		[824,,'hidden',40],
		[821,,'hidden',25],
		[273,Sw,'hidden',20],
		[270,Sh,'hidden',20],
		[509,,'hidden',10],
		[163,,'hidden',5],

		[129,,'fish',80],
		[833,,'fish',15],
		[846,,'fish',5],
		[833,,'wanderer_one'],
		[835,,'wanderer_one']
	]},{group:['Water surface',,,,'Superficie del agua'],encounters:[
		[846,,'surf',70],
		[847,,'surf',28],
		[130,,'surf',2],
		[131,,'wanderer_one']
	]},{group:['Lakeside',,,,'Por el lago'],encounters:[
		[alternateForm(263,1),,'overworld',50],
		[824,,'overworld',30],
		[827,,'overworld',15],
		[835,,'overworld',5],
		[829,,'hidden',35],
		[509,,'hidden',30],
		[273,Sw,'hidden',20],
		[270,Sh,'hidden',20],
		[824,,'hidden',10],
		[833,,'hidden',5],
		[862,,'wanderer_one'],
		[834,,'wanderer_one'],
		[129,,'fish',50],
		[833,,'fish',40],
		[129,,'fish',9],
		[349,,'fish',1]
	]}
]},
{name:['City of Motostoke',,,,'Ciudad Pistón'],encounters:[
	[129,,'fish',50],
	[833,,'fish',40],
	[339,,'fish',10],
	[819,,['trade',659]]
]},
{name:['Route 3',,,,'Ruta 3'],encounters:[
	[alternateForm(263,1),,'overworld',38],
	[829,,'overworld',30],
	[37,Sw,'overworld',15],
	[58,Sh,'overworld',15],
	[434,,'overworld',10],
	[568,,'overworld',5],
	[236,,'overworld',2],
	[821,,'hidden',35],
	[66,,'hidden',20],
	[674,,'hidden',20],
	[749,,'hidden',15],
	[599,,'hidden',9],
	[850,,'hidden',1],
	[819,,'shake_tree',80],
	[420,,'shake_tree',20],
	[822,,'wanderer'],
	{group:'west',encounters:[
		[837,,'overworld',99],
		[568,,'overworld',1]
	]}
]},
{name:['Galar Mine',,,,'Mina de Galar'],encounters:[
	[837,,'overworld',35],
	[532,Sw,'overworld',25],
	[524,Sh,'overworld',25],
	[527,,'overworld',15],
	[50,,'overworld',10],
	[529,,'overworld',10],
	[524,Sw,'overworld',5],
	[532,Sh,'overworld',5],

	[838,,'wanderer'],
	[527,,'wanderer'],
	[837,,'hidden',30],
	[532,Sw,'hidden',30],
	[524,Sh,'hidden',30],
	[50,,'hidden',15],
	[529,,'hidden',10],
	[527,,'hidden',10],
	[524,Sw,'hidden',5],
	[532,Sh,'hidden',5]
]},
{name:['Route 4',,,,'Ruta 4'],encounters:[
	[309,,'overworld',30],
	[alternateForm(52,2),,'overworld',23],
	[835,,'overworld',20],
	[710,,'overworld',21],
	[25,Sw,'overworld',5],
	[25,Sh,'overworld',1],
	[133,Sw,'overworld',1],
	[133,Sh,'overworld',5],
	[alternateForm(52,2),,'hidden',35],
	[831,,'hidden',25],
	[868,,'hidden',20],
	[595,,'hidden',10],
	[742,,'hidden',5],
	[406,,'hidden',4],
	[597,,'hidden',1],
	[819,,'shake_tree',100],
	[129,,'fish',70],
	[833,,'fish',20],
	[118,,'fish',10],
	[50,,'wanderer']
]},
{name:['Turrfield',,,,'Pueblo Hoyuelo'],encounters:[
	[342,,'wanderer_one'],
	[52,,['trade',alternateForm(52,2)]]
]},
{name:['Route 5',,,,'Ruta 5'],encounters:[
	[759,,'overworld',35],
	[684,Sw,'overworld',30],
	[682,Sh,'overworld',30],
	[572,Sw,'overworld',15],
	[572,Sh,'overworld',20],
	[202,,'overworld',10],
	[alternateForm(83,1),Sw,'overworld',5],
	[425,,'overworld',5],
	[825,,'hidden',26],
	[677,,'hidden',20],
	[274,Sw,'hidden',20],
	[271,Sh,'hidden',20],
	[684,Sw,'hidden',14],
	[682,Sh,'hidden',14],
	[840,,'hidden',10],
	[751,,'hidden',5],
	[290,,'hidden',5],
	[819,,'shake_tree',100],
	[129,,'fish',70],
	[833,,'fish',20],
	[118,,'fish',10],
	[830,,'wanderer'],
	[848,,'gift_egg']
]},
{name:['Town of Hulbury',,,,'Pueblo Amura'],encounters:[
	[846,,'fish',50],
	[170,,'fish',20],
	[833,,'fish',15],
	[550,Sw,'fish',10],
	[746,,'fish',5],
	[alternateForm(550,1),Sh,'fish',10],
	[546,,['trade',572]]
]},
{name:['Galar Mine No. 2',,,,'Mina de Galar n.º 2'],encounters:[
	[alternateForm(422,1),,'overworld',25],
	[767,,'overworld',25],
	[688,,'overworld',15],
	[559,Sw,'overworld',15],
	[453,Sh,'overworld',15],
	[714,,'overworld',10],
	[833,,'overworld',5],
	[213,,'overworld',5],
	[767,,'hidden',20],
	[714,,'hidden',20],
	[559,Sw,'hidden',15],
	[453,Sh,'hidden',15],
	[688,,'hidden',10],
	[213,,'hidden',10],
	[alternateForm(422,1),,'hidden',10],
	[833,,'hidden',10],
	[alternateForm(618,1),,'hidden',5],
	[339,,'fish',55],
	[833,,'fish',30],
	[341,,'fish',15],
	[alternateForm(618,1),,'wanderer'],
	[834,,'wanderer_one'],
	[423,,'wanderer_one']
]},
{name:['Motostoke Outskirts',,,,'Afueras de pistón'],encounters:[
	[164,Sw,'overworld',40],
	[164,Sh,'overworld',35],
	[185,,'overworld',30],
	[109,,'overworld',15],
	[856,,'overworld',10],
	[539,Sw,'overworld',5],
	[538,Sh,'overworld',5],
	[757,Sh,'overworld',5],
	[559,Sw,'hidden',35],
	[453,Sh,'hidden',35],
	[524,,'hidden',30],
	[624,,'hidden',20],
	[833,,'hidden',10],
	[859,,'hidden',5]
]},
{name:['Hammerlocke',,,,'Ciudad Artejo'],encounters:[
	[175,,['trade',848]]
]},
{name:['Route 6',,,,'Ruta 6'],encounters:[
	[alternateForm(562,1),,'overworld',35],
	[694,,'overworld',29],
	[51,,'overworld',20],
	[556,,'overworld',10],
	[610,Sw,'overworld',5],
	[328,Sh,'overworld',5],
	[328,Sw,'overworld',1],
	[610,Sh,'overworld',1],
	[843,,'hidden',30],
	[632,Sw,'hidden',20],
	[631,Sh,'hidden',20],
	[355,,'hidden',18],
	[451,,'hidden',10],
	[449,,'hidden',10],
	[631,Sw,'hidden',5],
	[632,Sh,'hidden',5],
	[324,,'hidden',5],
	[701,,'hidden',2],
	[820,,'shake_tree',100],
	[129,,'fish',70],
	[834,,'fish',20],
	[118,,'fish',10],
	[880,,'revive_fossil','fossil_880'],
	[881,,'revive_fossil','fossil_881'],
	[882,,'revive_fossil','fossil_882'],
	[883,,'revive_fossil','fossil_883']
]},
{name:['Stow-on-Side',,,,'Pueblo Ladera'],encounters:[
	[856,Sw,['trade',556]],
	[859,Sh,['trade',556]]
]},
{name:['Glimwood Tangle',,,,'Bosque Lumirinto'],encounters:[
	[860,,'overworld',20],
	[756,,'overworld',20],
	[857,Sw,'overworld',20],
	[857,Sh,'overworld',10],
	[682,Sh,'overworld',10],
	[854,,'overworld',10],
	[708,,'overworld',10],
	[684,Sw,'overworld',10],
	[alternateForm(77,1),Sh,'overworld',10],
	[876,Sw,'overworld',5],
	[alternateForm(876,1),Sh,'overworld',5],
	[766,Sw,'overworld',4],
	[765,Sh,'overworld',4],
	[alternateForm(854,1),,'overworld',1],

	[860,,'hidden',20],
	[756,Sw,'hidden',20],
	[857,Sw,'hidden',15],
	[756,Sh,'hidden',15],
	[857,Sh,'hidden',10],
	[alternateForm(77,1),Sh,'hidden',10],
	[854,,'hidden',10],
	[708,,'hidden',10],
	[684,Sw,'hidden',10],
	[682,Sh,'hidden',10],
	[766,Sw,'hidden',9],
	[765,Sh,'hidden',9],
	[876,Sw,'hidden',5],
	[alternateForm(876,1),Sh,'hidden',5],
	[alternateForm(854,1),,'hidden',1],
	[859,,'wanderer'],
	[860,,'wanderer']
]},
{name:['Ballonlea',,,,'Pueblo Plié'],encounters:[
	[562,,['trade',alternateForm(562,1)]]
]},
{name:['Route 7',,,,'Ruta 7'],encounters:[
	[863,,'overworld',30],
	[828,,'overworld',20],
	[596,,'overworld',20],
	[510,,'overworld',15],
	[686,,'overworld',10],
	[877,,'overworld',5],
	[848,,'hidden',25],
	[588,Sw,'hidden',[25,20,20,20,20,20,20,20,20]],
	[616,Sh,'hidden',[25,20,20,20,20,20,20,20,20]],
	[616,Sw,'hidden',5],
	[588,Sh,'hidden',5],
	[823,,'hidden',20],
	[510,,'hidden',10],
	[678,Sw,'hidden',10],
	[alternateForm(678,1),Sh,'hidden',10],
	[537,,'hidden',[5,10,10,10,10,10,10,10,10]],
	[820,,'shake_tree',100]
]},
{name:['Route 8',,,,'Ruta 8'],encounters:[
	{group:'main',encounters:[
		[622,,'overworld',25],
		[533,Sw,'overworld',25],
		[525,Sh,'overworld',25],
		[624,,'overworld',20],
		[525,Sw,'overworld',10],
		[533,Sh,'overworld',10],
		[627,Sw,'overworld',10],
		[629,Sh,'overworld',10],
		[777,,'overworld',5],
		[338,Sw,'overworld',5],
		[337,Sh,'overworld',5],		
		[844,,'hidden',30],
		[111,,'hidden',20],
		[356,,'hidden',15],
		[93,,'hidden',10],
		[437,,'hidden',10],
		[450,,'hidden',8],
		[452,,'hidden',5],
		[870,,'hidden',2],
		[558,,'wanderer'],
		[870,,'wanderer_one']
	]},
	{group:['Steamdrift Way',,,,'Senda Vaporosa'],encounters:[
		[872,,'overworld',40],
		[361,,'overworld',25],
		[215,,'overworld',20],
		[583,,'overworld',10],
		[539,Sw,'overworld',5],
		[872,,'hidden',40],
		[215,,'hidden',25],
		[459,,'hidden',20],
		[225,Sw,'hidden',10],
		[225,Sh,'hidden',15],
		[alternateForm(554,1),Sw,'hidden',5],
		[538,Sh,'overworld',5]
	]}
]},
{name:['Circhester',,,,'Pueblo Auriga'],encounters:[
	[538,Sw,['trade',583]],
	[539,Sh,['trade',583]]
]},
{name:['Route 9',,,,'Ruta 9'],encounters:[
	{group:'main',encounters:[
		[279,,'overworld',40],
		[747,Sw,'overworld',35],
		[593,Sh,'overworld',35],
		[alternateForm(423,1),,'overworld',15],
		[593,Sw,'overworld',5],
		[747,Sh,'overworld',5],
		[771,,'overworld',5],
		[845,,'hidden',40],
		[224,,'hidden',30],
		[99,,'hidden',25],
		[871,,'hidden',5],
		[362,,'wanderer_one'],
		[224,,'fish',60],
		[746,,'fish',30],
		[771,,'fish',10],
		[279,,'surf',40],
		[211,,'surf',30],
		[458,,'surf',25],
		[593,,'surf',5]
	]},
	{group:['Circhester Bay',,,,'Bahía de Auriga'],encounters:[
		[852,,'overworld',30],
		[224,,'overworld',24],
		[748,Sw,'overworld',20],
		[748,Sh,'overworld',5],
		[712,Sw,'overworld',15],
		[712,Sh,'overworld',20],
		[689,Sw,'overworld',10],
		[689,Sh,'overworld',20],
		[781,,'overworld',1],
		[853,,'wanderer'],
		[845,,'hidden',40],
		[alternateForm(423,1),,'hidden',30],
		[686,,'hidden',25],
		[871,,'hidden',5],
		[820,,'shake_tree',100],
		[458,,'fish',50],
		[320,,'fish',34],
		[226,,'fish',10],
		[321,,'fish',5],
		[131,,'fish',1],
		[320,,'surf',40],
		[458,,'surf',35],
		[223,,'surf',15],
		[226,,'surf',10]
	]},
	{group:['Outer Spikemuth',,,,'Afueras de Crampón'],encounters:[
		[712,,'overworld',40],
		[852,,'overworld',30],
		[747,,'overworld',24],
		[748,,'overworld',[5]],
		[593,,'overworld',[,5,5,5,5,5,5,5,5]],
		[781,,'overworld',1],
		[863,,'hidden',40],
		[828,,'hidden',30],
		[510,,'hidden',25],
		[877,,'hidden',5],
		[820,,'shake_tree',100]
	]}
]},
{name:['Route 10',,,,'Ruta 10'],encounters:[
	{group:'south',encounters:[
		[alternateForm(122,1),,'overworld',30],
		[613,,'overworld',30],
		[459,,'overworld',20],
		[362,,'overworld',10],
		[584,,'overworld',10],
		[600,,'hidden',30],
		[583,,'hidden',30],
		[112,,'hidden',25],
		[872,,'hidden',10],
		[alternateForm(554,1),Sw,'hidden',5],
		[583,Sh,'hidden',5]
	]},
	{group:'north',encounters:[
		[alternateForm(122,1),,'overworld',[35,40,40,40,40,40,40,40,40]],
		[459,,'overworld',30],
		[613,,'overworld',[20,15,15,15,15,15,15,15,15]],
		[215,,'overworld',14],
		[884,,'overworld',1],
		[583,,'hidden',30],
		[460,,'hidden',28],
		[614,,'hidden',25],
		[872,,'hidden',10],
		[alternateForm(554,1),Sw,'hidden',5],
		[583,Sh,'hidden',5],
		[874,Sw,'hidden',2],
		[875,Sh,'hidden',2],
		[460,,'wanderer'],
		[614,,'wanderer']
	]}
]},
{name:['Spikemuth',,,,'Pueblo Crampón'],encounters:[
	[122,Sw,['trade',862]]
]},
{name:['Wyndon',,,,'Ciudad Puntera'],encounters:[
	[884,Sw,['trade',873]]
]},
{name:['Battle Tower',,,,'Torre Batalla'],encounters:[
	[772,,['gift','postgame']]
]},	

{name:['Wild Area',,,,'Área Silvestre'],encounters:[
	[alternateForm(143,1),,'event'],
	[alternateForm(849,2),,'event']
]},
{name:['Meetup Spot',,,,'Punto de Encuentro'],encounters:[
	[alternateForm(25,9),,'gift'],
	[alternateForm(133,1),,'gift'],
	[alternateForm(79,1),,'gift']
]},
{name:['Rolling Fields',,,,'Pradera Radiante'],encounters:[
	[415,,'overworld',60],
	[659,,'overworld',[25,60,25,25,25,25,25,25,25]],
	[11,,'overworld',10],
	[236,,'overworld',[5,28,5,5,5,5,5,5,5]],
	[280,,'overworld',[,2,,,,,,,60]],
	[278,,'overworld',[,,60,25]],
	[309,,'overworld',[,,,60]],
	[37,Sw,'overworld',[,,,,,,60]],
	[58,Sh,'overworld',[,,,,,,60]],
	[582,,'overworld',[,,,,60,25]],
	[225,,'overworld',[,,,,,60]],
	[343,,'overworld',[,,,,,,,60]],

	[659,,'hidden',[40,,,20,20,5,5,5,20]],
	[572,,'hidden',[35,,,,5]],
	[761,,'hidden',[20]],
	[11,Sw,'hidden',[5]],
	[572,Sh,'hidden',[5]],
	[43,,'hidden',[,40]],
	[406,,'hidden',[,35]],
	[11,,'hidden',[,5,5,5,,,,,5]],
	[274,Sw,'hidden',[,,40]],
	[278,,'hidden',[,,35]],
	[595,,'hidden',[,,,40]],
	[309,,'hidden',[,,,35]],
	[343,,'hidden',[,,,,,,40,35]],
	[749,,'hidden',[,,,,,,35]],
	[37,Sw,'hidden',[,,,,,,20]],
	[582,,'hidden',[,,,,40]],
	[220,,'hidden',[,,,,35,40]],
	[225,,'hidden',[,,,,,35]],
	[361,,'hidden',[,,,,,20]],
	[557,,'hidden',[,,,,,,,40]],
	[622,,'hidden',[,,,,,,,20]],
	[517,,'hidden',[,,,,,,,,40]],
	[177,,'hidden',[,,,,,,,,35]],
	[270,Sh,'hidden',[,,40]],
	[58,Sh,'hidden',[,,,,,,20]],

	[819,,'shake_tree',80],
	[420,,'shake_tree',20],

	[50,,'underground',[80,20,80,80,80,80,20,20,80]],
	[524,,'underground',[20,80,20,20,20,20,80,80,20]],

	[95,,'wanderer'], //Onix
	[291,,'wanderer'], //Ninjask
	[660,,'wanderer'], //Diggersby
	[832,,'wanderer'], //Dubwool
	[315,,'wanderer',[100,100,100,,100,,100,100,100]], //Roselia
	[675,,'wanderer',[100,100,100,100,,,100]], //Pangoro
	[416,,'wanderer',[100]], //Vespiquen
	[750,,'wanderer',[100,100,,,,,100,100,100]], //Mudsdale
	[279,,'wanderer',[,,100]], //Pelipper
	[93,,'wanderer',[,,100,100]], //Haunter
	[25,,'wanderer',[,,,100]], //Pikachu
	[310,,'wanderer',[,,,100]], //Manectric
	[221,,'wanderer',[,,,,100,100]], //Piloswine
	[439,,'wanderer',[,,,,,100]], //Mime Jr.
	[558,,'wanderer',[,,,,,,,100]], //Crustle
	[282,,'wanderer',[,,,,,,,,100]], //Gardevoir
	[281,,'wanderer',[,,,,,,,,100]], //Kirlia

	generateRaidDen(1, 33, 62),
	generateRaidDen(2, 3, 51),
	generateRaidDen(3, 4, 46),
	generateRaidDen(4, 31, 90),
	generateRaidDen(5, 39, 65),
	generateRaidDen(6, 16, 52),
	generateRaidDen(7, 37, 64),
	generateRaidDen(8, 31, 90),
	generateRaidDen(9, 1, 48)
]},
{name:['Rolling Fields (Area 2)',,,,'Pradera Radiante (Area 2)'],encounters:[
	[674,,'overworld',60],
	[415,,'overworld',[25]],
	[11,,'overworld',10],
	[236,,'overworld',[5,28,5,5,5,5,5,5,5]],
	[280,,'overworld',[,2,,,,,,,25]],
	[278,,'overworld',[,,25]],
	[309,,'overworld',[,,,25]],
	[37,Sw,'overworld',[,,,,,,25]],
	[58,Sh,'overworld',[,,,,,,25]],
	[582,,'overworld',[,,,,25,25]],
	[343,,'overworld',[,,,,,,,25]]
]},
{name:['Dappled Grove',,,,'Arboleda Claroscuro'],encounters:[
	[43,,'overworld',[60,60,25,10]],
	[163,,'overworld',[25,28,,,10,,,10,10]],
	[659,,'overworld',[10,,10,,25,10,28,25]],
	[274,Sw,'overworld',[5,10,5,5,5,5,10,5,5]],
	[271,Sh,'overworld',[5,10,5,5,5,5,10,5,5]],
	[236,,'overworld',[,2]],
	[535,,'overworld',[,,60,60]],
	[309,,'overworld',[,,,25]],
	[343,,'overworld',[,,,,,,60,60]],
	[37,Sw,'overworld',[,,,,,,2]],
	[58,Sh,'overworld',[,,,,,,2]],
	[225,,'overworld',[,,,,60,60]],
	[582,,'overworld',[,,,,,25]],
	[509,,'overworld',[,,,,,,,,60]],
	[280,,'overworld',[,,,,,,,,25]],

	[273,Sw,'hidden',[40,20,20,20,,,,,35]],
	[270,Sh,'hidden',[40,20,20,20,,,,,35]],
	[406,,'hidden',[35,5,5,5,,,5,,5]],
	[659,,'hidden',[20,,,,5,5,20,20]],
	[761,,'hidden',[5,,,,,,,5]],
	[759,,'hidden',[,40]],
	[434,,'hidden',[,35]],
	[535,,'hidden',[,,40]],
	[736,,'hidden',[,,35,35]],
	[595,,'hidden',[,,,40]],
	[37,Sw,'hidden',[,,,,,,40]],
	[58,Sh,'hidden',[,,,,,,40]],
	[749,,'hidden',[,,,,,,35]],
	[459,,'hidden',[,,,,40]],
	[582,,'hidden',[,,,,35,35]],
	[361,,'hidden',[,,,,20,40]],
	[599,,'hidden',[,,,,,20]],
	[343,,'hidden',[,,,,,,,40]],
	[622,,'hidden',[,,,,,,,35]],
	[280,,'hidden',[,,,,,,,,40]],
	[509,,'hidden',[,,,,,,,,20]],

	[819,,'shake_tree',70],
	[420,,'shake_tree',30],

	[760,,'wanderer'], //Bewear
	[45,,'wanderer',[100,,,,,,,,100]], //Vileplume
	[275,Sw,'wanderer',[100,100,100,100,,,,,100]], //Shiftry
	[272,Sw,'wanderer',[100,100,100,100,,,,,100]], //Ludicolo
	[45,,'wanderer',[,100]], //Vileplume
	[537,,'wanderer',[,,100,100]], //Seismitoad
	[583,,'wanderer',[,,,,100,100]], //Vanillish
	[675,,'wanderer',[,,,,100,100]], //Pangoro
	[344,,'wanderer',[,,,,,,100,100]], //Claydol
	[675,,'wanderer',[,,,,,,100,100]], //Pangoro

	generateRaidDen(10, 26, 59),
	generateRaidDen(11, 4, 92),
	generateRaidDen(12, 26, 59),
	generateRaidDen(13, 26, 58),
	generateRaidDen(14, 28, 79)
]},
{name:['Watchtower Ruins',,,,'Antigua Atalaya'],encounters:[
	[622,,'overworld',[60]],
	[355,,'overworld',[25,60,50,35,15,,28,,25]],
	[425,,'overworld',[15,5,,10,60,,60]],
	[92,,'overworld',[,25,35,50,,25,,60,60]],
	[43,,'overworld',[,10]],
	[278,,'overworld',[,,10]],
	[509,,'overworld',[,,5,5,,15,,15,5]],
	[37,Sw,'overworld',[,,,,,,10]],
	[58,Sh,'overworld',[,,,,,,10]],
	[213,,'overworld',[,,,,,,2,25]],
	[225,,'overworld',[,,,,25,60]],
	[280,,'overworld',[,,,,,,,,10]],

	[622,,'hidden',[40,,,,,,40,40]],
	[425,,'hidden',[30,,,,10,10,10]],
	[761,,'hidden',[20,20]],
	[519,,'hidden',[10,,10,10,,,,10,10]],
	[355,,'hidden',[,40,40,20,30,20,30,20,20]],
	[66,Sw,'hidden',[,30]],
	[92,Sh,'hidden',[,30]],
	[92,Sw,'hidden',[,10]],
	[66,Sh,'hidden',[,10]],
	[535,,'hidden',[,,30]],
	[278,,'hidden',[,,20]],
	[309,,'hidden',[,,,40]],
	[736,,'hidden',[,,,30]],
	[37,Sw,'hidden',[,,,,,,20]],
	[58,Sh,'hidden',[,,,,,,20]],
	[361,,'hidden',[,,,,40,30]],
	[459,,'hidden',[,,,,20,40]],
	[557,,'hidden',[,,,,,,,30]],
	[509,,'hidden',[,,,,,,,,30]],

	[527,,'flying',[60,40,60,40,60,60,60,60,60]],
	[714,,'flying',[40,60,40,60,40,40,40,40,40]],

	[819,,'shake_tree',50],
	[420,,'shake_tree',50],

	[823,,'wanderer'], //Corviknight
	[426,,'wanderer',[100,,,,100,,100]], //Drifblim
	[623,,'wanderer',[100,,,,,,100,,100]], //Golurk
	[93,,'wanderer',[,100,100,100,,100,,100,100]], //Haunter
	[356,,'wanderer',[,100,100,100,,,,100]], //Dusclops
	[362,,'wanderer',[,,,,100,100]], //Glalie

	generateRaidDen(15, 2, 50),
	generateRaidDen(16, 6, 47),
	{group:['Raid Den #?',,,,'Nido #?'], encounters:[
		[246, [0,1], 'raid_event', 100],
		[782, [0,1], 'raid_event', 100]
	]},
]},
{name:['East Lake Axewell',,,,'Lago Axew (este)'],encounters:[
	[759,,'overworld',[50,50,35,25,25,25,10,10,25]],
	[43,,'overworld',[35,15,,10,,,,,15]],
	[761,,'overworld',[15]],
	[674,,'overworld',[,35,,5,10,15,5,5]],
	[278,,'overworld',[,,50]],
	[736,,'overworld',[,,15]],
	[309,,'overworld',[,,,60]],
	[749,,'overworld',[,,,,,,60,25]],
	[37,Sw,'overworld',[,,,,,,25]],
	[58,Sh,'overworld',[,,,,,,25]],
	[459,,'overworld',[,,,,60]],
	[361,,'overworld',[,,,,5,60]],
	[343,,'overworld',[,,,,,,,60]],
	[517,,'overworld',[,,,,,,,,60]],

	[43,,'hidden',[45,30,20,20]],
	[659,,'hidden',[30]],
	[519,,'hidden',[20]],
	[759,,'hidden',5],
	[406,,'hidden',[,45]],
	[572,,'hidden',[,20,,,20,20,15,15,20]],
	[278,,'hidden',[,,45]],
	[736,,'hidden',[,,30]],
	[595,,'hidden',[,,,45]],
	[309,,'hidden',[,,,30]],
	[749,,'hidden',[,,,,,,40]],
	[37,Sw,'hidden',[,,,,,,30]],
	[58,Sh,'hidden',[,,,,,,30]],
	[95,,'hidden',[,,,,,,10,10]],
	[361,,'hidden',[,,,,45]],
	[459,,'hidden',[,,,,30,30]],
	[582,,'hidden',[,,,,,45]],
	[557,,'hidden',[,,,,,,,40]],
	[343,,'hidden',[,,,,,,,30]],
	[509,,'hidden',[,,,,,,,,45]],
	[517,,'hidden',[,,,,,,,,30]],

	[278,,'surf',[55,5,5,15,10,5,70,5,25]],
	[592,,'surf',[25,55,35,,30,,15,10,60]],
	[90,,'surf',[15,15,45,10,20,5,10,30,5]],
	[118,,'surf',[5,25,15,5,,15,5,55,10]],
	[170,,'surf',[,,,70]],
	[582,,'surf',[,,,,40,75]],

	[129,,'fish',50],
	[118,,'fish',25],
	[90,,'fish',20],
	[746,,'fish',5],

	[519,,'flying',70],
	[12,,'flying',30],

	[alternateForm(110,1),,'wanderer'], //Weezing
	[569,,'wanderer',[100,100,100,100]], //Garbodor
	[178,,'wanderer',[100,100,,,100,100,100,100,100]], //Xatu
	[279,,'wanderer',[,,100,100]], //Pelipper
	[221,,'wanderer',[,,,,100,100]], //Piloswine
	[750,,'wanderer',[,,,,,,100,100]], //Mudsdale
	[437,,'wanderer',[,,,,,,,,100]], //Bronzong

	generateRaidDen(17, 39, 65),
	generateRaidDen(18, 31, 61),
	generateRaidDen(19, 29, 86),
	generateRaidDen(20, 31, 61),
	generateRaidDen(21, 7, 44)
]},
{name:['East Lake Axewell (Area 2)',,,,'Lago Axew (este, area 2)'],encounters:[
	[12,,'flying',[75,25,75,75,75,75,75,75,25]],
	[519,,'flying',[25,75,25,25,25,25,25,25,75]]
]},
{name:['West Lake Axewell',,,,'Lago Axew (oeste)'],encounters:[
	[535,,'overworld',[60,25,5,5,25,10,,,25]],
	[194,,'overworld',[25,,50,50,,,,,5]],
	[98,,'overworld',[10,,10,,,5]],
	[509,,'overworld',[5,10,,,5,,5,15,60]],
	[273,Sw,'overworld',[,60]],
	[270,Sh,'overworld',[,60]],
	[406,,'overworld',[,5]],
	[278,,'overworld',[,,35,35]],
	[309,,'overworld',[,,,10]],
	[557,,'overworld',[,,,,,,40,60]],
	[37,Sw,'overworld',[,,,,,,35]],
	[58,Sh,'overworld',[,,,,,,35]],
	[659,,'overworld',[,,,,,,20,25]],
	[361,,'overworld',[,,,,60]],
	[582,,'overworld',[,,,,10,60]],
	[599,,'overworld',[,,,,,25]],
	[177,,'overworld',[,,,,,,,,10]],

	[194,,'hidden',[40,30,40,,,,,40]],
	[98,,'hidden',[30,40,20,20,,,,,30]],
	[278,,'hidden',[20,,10,,20,,,,20]],
	[761,,'hidden',[10]],
	[674,,'hidden',[,25,,,,,10]],
	[236,,'hidden',[,5]],
	[535,,'hidden',[,,30,30]],
	[309,,'hidden',[,,,40]],
	[595,,'hidden',[,,,10]],
	[37,Sw,'hidden',[,,,,,,40]],
	[58,Sh,'hidden',[,,,,,,40]],
	[343,,'hidden',[,,,,,,30,20]],
	[659,,'hidden',[,,,,,10,20]],
	[582,,'hidden',[,,,,40,20]],
	[361,,'hidden',[,,,,30]],
	[225,,'hidden',[,,,,10,30]],
	[599,,'hidden',[,,,,,40]],
	[290,,'hidden',[,,,,,,,30]],
	[749,,'hidden',[,,,,,,,10]],
	[177,,'hidden',[,,,,,,,,40]],
	[280,,'hidden',[,,,,,,,,10]],

	[592,,'surf',[60,5,60,,5,10,25,5,10]],
	[118,,'surf',[25,60,25,10,,5,10,25,25]],
	[223,,'surf',[10,25,10,5,,,5,10,5]],
	[129,,'surf',[5,10,5,25,10,15,60,60,60]],
	[170,,'surf',[,,,60]],
	[582,,'surf',[,,,,60,70]],
	[90,,'surf',[,,,,25]],

	[129,,'fish',50],
	[118,,'fish',35],
	[223,,'fish',10],
	[746,,'fish',5],

	[834,,'wanderer'], //Drednaw
	[195,,'wanderer',[100,10,100,100,,,,,100]], //Quagsire
	[99,,'wanderer',[100]], //Kingler
	[536,,'wanderer',[,100,,,100,100,,100,100]], //Palpitoad
	[279,,'wanderer',[,,100,100]], //Pelipper
	[660,,'wanderer',[,,,,100,100,100,100]], //Diggersby

	generateRaidDen(22, 35, 63),
	generateRaidDen(23, 9, 91),
	generateRaidDen(24, 9, 75),
	generateRaidDen(25, 9, 75),
	generateRaidDen(26, 42, 44),
	generateRaidDen(27, 7, 44)
]},
{name:['Axew\'s Eye',,,,'Ojo de Axew'],encounters:[
	[760,,'overworld',[60,60,25,5,10,10,25,25,5]],
	[99,,'overworld',[25,5,,10]],
	[610,,'overworld',[10,10,10,,,,,,10]],
	[67,,'overworld',[5,25]],
	[342,,'overworld',[,,60,25]],
	[537,,'overworld',[,,5,60]],
	[558,,'overworld',[,,,,,,60,10]],
	[750,,'overworld',[,,,,,,10,60]],
	[37,Sw,'overworld',[,,,,,,5]],
	[58,Sh,'overworld',[,,,,,,5]],
	[459,,'overworld',[,,,,60,60]],
	[583,,'overworld',[,,,,25,5]],
	[225,,'overworld',[,,,,5]],
	[437,,'overworld',[,,,,,25]],
	[344,,'overworld',[,,,,,,,5,25]],
	[426,,'overworld',[,,,,,,,,60]],
	[521,,'hidden',[40,10,10,10,10,,30,,10]],
	[660,,'hidden',[30,20,20,20,20,10,20,10,20]],
	[760,,'hidden',[20]],
	[762,,'hidden',[10]],
	[315,,'hidden',[,40]],
	[44,,'hidden',[,30]],
	[279,,'hidden',[,,40]],
	[737,,'hidden',[,,30]],
	[342,,'hidden',[,,,40]],
	[310,,'hidden',[,,,30]],
	[37,Sw,'hidden',[,,,,,,40]],
	[58,Sh,'hidden',[,,,,,,40]],
	[750,,'hidden',[,,,,,,10,20]],
	[459,,'hidden',[,,,,40,30]],
	[583,,'hidden',[,,,,30]],
	[599,,'hidden',[,,,,,40]],
	[225,,'hidden',[,,,,,20]],
	[343,,'hidden',[,,,,,,,40]],
	[558,,'hidden',[,,,,,,,30]],
	[517,,'hidden',[,,,,,,,,40]],
	[510,,'hidden',[,,,,,,,,30]],

	[820,,'shake_tree',75],
	[420,,'shake_tree',25],

	[129,,'fish',50],
	[224,,'fish',25],
	[746,,'fish',20],
	[130,,'fish',5],

	[845,,'wanderer'], //Cramorant
	[612,,'wanderer',[100,100,100,,,,100,100,100]], //Haxorus
	[537,,'wanderer',[,,,100]], //Seismitoad
	[460,,'wanderer',[,,,,100,100]], //Abomasnow

	generateRaidDen(28, 38, 64)
]},
{name:['South Lake Miloch',,,,'Lago Milotic (sur)'],encounters:[
	[341,,'overworld',[30,10,10,30,10,,,,10]],
	[98,,'overworld',[30,10,10,30,10]],
	[434,,'overworld',[25,25,,,,,5,5]],
	[66,,'overworld',[10,50,10,,10,10,60,15]],
	[274,Sw,'overworld',[5,5]],
	[271,Sh,'overworld',[5,5]],
	[535,,'overworld',[,,45,28]],
	[129,,'overworld',[,,25]],
	[595,,'overworld',[,,,10]],
	[771,,'overworld',[,,,2]],
	[37,Sw,'overworld',[,,,,,,25]],
	[58,Sh,'overworld',[,,,,,,25]],
	[749,,'overworld',[,,,,,,10,55]],
	[582,,'overworld',[,,,,45,60]],
	[459,,'overworld',[,,,,25]],
	[599,,'overworld',[,,,,,25]],
	[225,,'overworld',[,,,,,5]],
	[557,,'overworld',[,,,,,,,25]],
	[425,,'overworld',[,,,,,,,,60]],
	[436,,'overworld',[,,,,,,,,25]],
	[280,,'overworld',[,,,,,,,,5]],

	[66,,'hidden',[40,20,20,10,10,10,,,20]],
	[278,,'hidden',[30,,10]],
	[535,,'hidden',[20,,40,,,,,10]],
	[341,,'hidden',[10,40,30,20,20,20,,,30]],
	[315,,'hidden',[,30,,,,,20]],
	[236,,'hidden',[,10]],
	[309,,'hidden',[,,,40]],
	[595,,'hidden',[,,,30]],
	[343,,'hidden',[,,,,,,40,20]],
	[37,Sw,'hidden',[,,,,,,30]],
	[58,Sh,'hidden',[,,,,,,30]],
	[290,,'hidden',[,,,,,,10,40]],
	[361,,'hidden',[,,,,40]],
	[582,,'hidden',[,,,,30]],
	[599,,'hidden',[,,,,,40]],
	[459,,'hidden',[,,,,,30]],
	[194,,'hidden',[,,,,,,,30]],
	[177,,'hidden',[,,,,,,,,40]],
	[280,,'hidden',[,,,,,,,,10]],

	[118,,'surf',[60,5,60,25,25,10,10,10,5]],
	[278,,'surf',[25,10,5,5,,,5,25,10]],
	[425,,'surf',[10,60,25,10,5,25,25,5,60]],
	[339,,'surf',[5,25,10,60,10,5,60,60,25]],
	[582,,'surf',[,,,,60,60]],

	[129,,'fish',50],
	[223,,'fish',40],
	[339,,'fish',9],
	[771,,'fish',1],

	[278,,'flying',85],
	[425,,'flying',15],

	[596,,'wanderer'], //Galvantula
	[67,,'wanderer'], //Machoke
	[828,,'wanderer'], //Thievul
	[435,,'wanderer',[100,100,,,100,100,,100,100]], //Skuntank
	[99,,'wanderer',[100,,,100]], //Kingler
	[342,,'wanderer',[100,,,100]], //Crawdaunt
	[536,,'wanderer',[,,100,100]], //Palpitoad
	[558,,'wanderer',[,,,,,,100]], //Crustle
	[426,,'wanderer',[,,,,,,,,100]], //Drifblim

	generateRaidDen(29, 5, 46),
	generateRaidDen(30, 1, 43),
	generateRaidDen(31, 8, 91),
	generateRaidDen(32, 41, 76),
	generateRaidDen(33, 41, 76)
]},
{name:['South Lake Miloch (2)',,,,'Lago Milotic (sur, area 2)'],encounters:[
	[66,,'overworld',[80,60,70,60,80,35,80,60,60]],
	[434,,'overworld',[15,35,25,35]],
	[236,,'overworld',5],
	[37,Sw,'overworld',[,,,,,,15]],
	[58,Sh,'overworld',[,,,,,,15]],
	[459,,'overworld',[,,,,15,60]],
	[557,,'overworld',[,,,,,,,35]],
	[436,,'overworld',[,,,,,,,,35]]
]},
{name:['Giant\'s Seat',,,,'Silla del Gigante'],encounters:[
	[436,,'overworld',[60,10,25,28,5,10,10,25]],
	[274,Sw,'overworld',[25,,60]],
	[271,Sh,'overworld',[25,,60]],
	[67,Sw,'overworld',[10]],
	[66,Sh,'overworld',[10]],
	[759,,'overworld',[5,,,,,,,5]],
	[66,,'overworld',[,60,,,10,,,10]],
	[92,,'overworld',[,28,10,,,,25,,10]],
	[236,,'overworld',[,2]],
	[194,,'overworld',[,,5]],
	[309,,'overworld',[,,,60]],
	[536,,'overworld',[,,,12]],
	[749,,'overworld',[,,,,,,60]],
	[37,Sw,'overworld',[,,,,,,5]],
	[58,Sh,'overworld',[,,,,,,5]],
	[459,,'overworld',[,,,,60,60]],
	[361,,'overworld',[,,,,25,25]],
	[225,,'overworld',[,,,,,5]],
	[622,,'overworld',[,,,,,,,60]],
	[355,,'overworld',[,,,,,,,,60]],
	[177,,'overworld',[,,,,,,,,28]],
	[517,,'overworld',[,,,,,,,,2]],

	[760,,'hidden',[40,20,30,30,30,5,20,20]],
	[660,,'hidden',[20]],
	[95,,'hidden',[20,20,,,,,20,20]],
	[520,,'hidden',[15]],
	[436,,'hidden',[5,5,5,5,5,30,5,5]],
	[67,,'hidden',[,40]],
	[93,,'hidden',[,15]],
	[195,,'hidden',[,,50]],
	[274,Sw,'hidden',[,,15]],
	[271,Sh,'hidden',[,,15]],
	[310,,'hidden',[,,,50]],
	[342,,'hidden',[,,,15]],
	[557,,'hidden',[,,,,,,40,15]],
	[750,,'hidden',[,,,,,,15,40]],
	[225,,'hidden',[,,,,50,50]],
	[220,,'hidden',[,,,,15,15]],
	[178,,'hidden',[,,,,,,,,50]],
	[760,Sw,'hidden',[,,,,,,,,30]],
	[436,Sh,'hidden',[,,,,,,,,30]],
	[510,,'hidden',[,,,,,,,,15]],
	[436,Sw,'hidden',[,,,,,,,,5]],
	[760,Sh,'hidden',[,,,,,,,,5]],

	[820,,'shake_tree',70],
	[420,,'shake_tree',30],

	[90,,'fish',60],
	[771,,'fish',25],
	[130,,'fish',10],
	[91,,'fish',5],

	[208,,'wanderer'], //Steelix
	[625,,'wanderer'], //Bisharp
	[884,,'wanderer'], //Duraludon
	[112,,'wanderer',[100]], //Rhydon
	[738,,'wanderer',[100,100,,,,,100,100]], //Vikavolt
	[437,,'wanderer',[,100,100,100]], //Bronzong
	[596,,'wanderer',[,,100,100]], //Galvantula
	[460,,'wanderer',[,,,,100,100]], //Abomasnow
	[362,,'wanderer',[,,,,100,100]], //Glalie
	[750,,'wanderer',[,,,,,,100]], //Mudsdale
	[623,,'wanderer',[,,,,,,,100]], //Golurk
	[356,,'wanderer',[,,,,,,,,100]], //Dusclops
	[518,,'wanderer',[,,,,,,,,100]], //Musharna

	generateRaidDen(34, 11, 84),
	generateRaidDen(35, 11, 49),
	generateRaidDen(36, 12, 45),
	generateRaidDen(37, 15, 51),
	generateRaidDen(38, 15, 83)
]},
{name:['North Lake Miloch',,,,'Lago Milotic (norte)'],encounters:[
	[434,,'overworld',[50,55,,,,,60,25,28]],
	[659,,'overworld',[30,,,,,,25,10]],
	[44,,'overworld',[20,10,20,30]],
	[509,,'overworld',[,35,30,10,25,5,,,10]],
	[536,,'overworld',[,,50,60]],
	[557,,'overworld',[,,,,,,10,5]],
	[37,Sw,'overworld',[,,,,,,5]],
	[58,Sh,'overworld',[,,,,,,5]],
	[582,,'overworld',[,,,,60,60]],
	[361,,'overworld',[,,,,10,10]],
	[225,,'overworld',[,,,,5]],
	[599,,'overworld',[,,,,,25]],
	[622,,'overworld',[,,,,,,,60]],
	[425,,'overworld',[,,,,,,,,60]],
	[280,,'overworld',[,,,,,,,,2]],

	[434,,'hidden',[40,40,20,20,20,20,30,20,20]],
	[759,,'hidden',[30,20,10,10,10,,10,,30]],
	[519,,'hidden',[20]],
	[660,,'hidden',[10]],
	[66,,'hidden',[,30]],
	[92,,'hidden',[,10]],
	[535,,'hidden',[,,40]],
	[736,,'hidden',[,,30,40]],
	[595,,'hidden',[,,,30]],
	[749,,'hidden',[,,,,,,40,10]],
	[343,,'hidden',[,,,,,,20,30]],
	[361,,'hidden',[,,,,40,10]],
	[459,,'hidden',[,,,,30,30]],
	[225,,'hidden',[,,,,,40]],
	[557,,'hidden',[,,,,,,,40]],
	[177,,'hidden',[,,,,,,,,45]],
	[280,,'hidden',[,,,,,,,,5]],

	[592,,'surf',[60,25,2,10,25,10,10,10,60]],
	[278,,'surf',[25,60,10,,10,,5,,5]],
	[425,,'surf',[10,5,,25,5,25,25,5,10]],
	[339,,'surf',[5,10,60,5,,5,60,60,25]],
	[118,,'surf',[,,28,60,,,,25]],
	[582,,'surf',[,,,,60,60]],

	[819,,'shake_tree',50],
	[420,,'shake_tree',50],

	[129,,'fish',58],
	[339,,'fish',40],
	[550,Sw,'fish',2],
	[alternateForm(550,1),Sh,'fish',2],

	[823,,'wanderer'], //Corviknight
	[510,,'wanderer'], //Liepard
	[836,,'wanderer'], //Boltund
	[448,,'wanderer',[100]], //Lucario
	[178,,'wanderer',[100,100,,,100,100,100,100,100]], //Xatu
	[537,,'wanderer',[,100,,100]], //Seismitoad
	[435,,'wanderer',[,,100,,,,100,100]], //Skuntank
	[279,,'wanderer',[,,100,100]], //Pelipper
	[583,,'wanderer',[,,,,100,100]], //Vanillish
	[426,,'wanderer',[,,,,,,,,100]], //Drifblim

	generateRaidDen(39, 29, 60),
	generateRaidDen(40, 10, 48),
	generateRaidDen(41, 10, 48),
	generateRaidDen(42, 29, 60),
	generateRaidDen(43, 41, 76),
	generateRaidDen(44, 41, 76)
]},
{name:['Motostoke Riverbank',,,,'Ribera de Pistón'],encounters:[
	[451,,'overworld',[40,,40,,,,,20]],
	[829,,'overworld',[25]],
	[509,,'overworld',[20,20,20,20,20,20,,20,20]],
	[831,,'overworld',[10,,,,5]],
	[446,,'overworld',[5]],
	[109,,'overworld',[,40]],
	[742,,'overworld',[,25,,,25,10,,,10]],
	[821,,'overworld',[,10]],
	[539,Sw,'overworld',[,5]],
	[538,Sh,'overworld',[,5]],
	[767,,'overworld',[,,25]],
	[833,,'overworld',[,,10]],
	[751,,'overworld',[,,5]],
	[835,,'overworld',[,,,40]],
	[747,Sw,'overworld',[,,,25]],
	[451,Sh,'overworld',[,,,25,,,30]],
	[451,Sw,'overworld',[,,,10,,,25]],
	[833,Sh,'overworld',[,,,10]],
	[848,,'overworld',[,,,5]],
	[111,Sw,'overworld',[,,,,,,40]],
	[757,Sh,'overworld',[,,,,,,25]],
	[509,Sw,'overworld',[,,,,,,20]],
	[324,Sh,'overworld',[,,,,,,20]],
	[324,Sw,'overworld',[,,,,,,10]],
	[837,Sh,'overworld',[,,,,,,10]],
	[837,Sw,'overworld',[,,,,,,5]],
	[509,Sh,'overworld',[,,,,,,10]],
	[111,Sh,'overworld',[,,,,,,5]],
	[215,,'overworld',[,,,,40,40]],
	[582,,'overworld',[,,,,10,25]],
	[624,,'overworld',[,,,,,5]],
	[185,,'overworld',[,,,,,,,25]],
	[111,,'overworld',[,,,,,,,25]],
	[837,,'overworld',[,,,,,,,10]],
	[35,,'overworld',[,,,,,,,,40]],
	[202,,'overworld',[,,,,,,,,25]],
	[355,,'overworld',[,,,,,,,,5]],

	[822,,'hidden',[35,30,20,10,20,20,20,10,20]],
	[164,,'hidden',[30,20,,,10,,10,20,10]],
	[830,,'hidden',[20]],
	[832,,'hidden',[10,10]],
	[561,,'hidden',5],
	[451,,'hidden',[,35]],
	[588,Sw,'hidden',[,,35]],
	[616,Sh,'hidden',[,,35]],
	[688,,'hidden',[,,30]],
	[616,Sw,'hidden',[,,10]],
	[588,Sh,'hidden',[,,10]],
	[alternateForm(422,1),,'hidden',[,,,35]],
	[767,,'hidden',[,,,30]],
	[836,,'hidden',[,,,20]],
	[111,,'hidden',[,,,,,,35,35]],
	[607,,'hidden',[,,,,,,30]],
	[215,,'hidden',[,,,,35,30]],
	[582,,'hidden',[,,,,30]],
	[624,,'hidden',[,,,,,35]],
	[597,,'hidden',[,,,,,10]],
	[95,,'hidden',[,,,,,,,30]],
	[677,,'hidden',[,,,,,,,,35]],
	[605,,'hidden',[,,,,,,,,30]],

	[550,Sw,'surf',[65,50,55,30,30,10,70,35,50]],
	[alternateForm(550,1),Sh,'surf',[65,50,55,30,30,10,70,35,50]],
	[846,,'surf',[30,45,40,65,15,20,25,60,45]],
	[458,,'surf',5],
	[582,,'surf',[,,,,50,65]],

	[820,,'shake_tree',50],
	[819,,'shake_tree',35],
	[420,,'shake_tree',15],

	[846,,'fish',50],
	[550,Sw,'fish',35],
	[alternateForm(550,1),Sh,'fish',35],
	[847,,'fish',10],
	[747,,'fish',5],

	[561,,'wanderer'], //Sigilyph
	[830,,'wanderer'], //Eldegoss
	[143,,'wanderer',[100,100,100,100,100,100,100,100]], //Snorlax
	[452,,'wanderer',[100,,100,100,,,100]], //Drapion
	[534,,'wanderer',[100,100,100,100,100,100,,,100]], //Conkeldurr
	[743,,'wanderer',[,100,,,100,100,,100,100]], //Ribombee
	[823,,'wanderer',[,,100,100,100,100,10,100]], //Corviknight
	[112,,'wanderer',[,,,,,,100,100]], //Rhydon
	[36,,'wanderer',[,,,,,,,,100]], //Clefable

	generateRaidDen(45, 40, 65),
	generateRaidDen(46, 24, 56),
	generateRaidDen(47, 14, 50),
	generateRaidDen(48, 30, 60)
]},
{name:['Bridge Field',,,,'Valle Entrepuentes'],encounters:[
	[alternateForm(263,1),,'overworld',[34,35,33,30,35,10,5,25,10]],
	[742,,'overworld',[30,25,,,,,20,,30]],
	[202,,'overworld',[10,,,,,,15]],
	[714,,'overworld',[10,10,10,10,10,5,10,10,10]],
	[605,,'overworld',[10,10,,,,,,,20]],
	[848,,'overworld',[5,,15,5]],
	[878,,'overworld',[1,5,,,,10,5]],
	[559,Sw,'overworld',[,10,,,,,,5]],
	[453,Sh,'overworld',[,10,,,,,,5]],
	[539,Sw,'overworld',[,5]],
	[538,Sh,'overworld',[,5]],
	[759,,'overworld',[,,30,35,5,,,10,5]],
	[436,,'overworld',[,,10,10]],
	[845,,'overworld',[,,2]],
	[592,,'overworld',[,,,10]],
	[556,,'overworld',[,,,,,,35]],
	[343,,'overworld',[,,,,,,10,10]],
	[613,,'overworld',[,,,,40,35]],
	[215,,'overworld',[,,,,10,40]],
	[438,,'overworld',[,,,,,,,40]],
	[517,,'overworld',[,,,,,,,,25]],

	[828,,'hidden',[28,23,,,25,,20,,5]],
	[202,,'hidden',[25]],
	[686,,'hidden',[20,,10,10,10,20,30,10]],
	[510,,'hidden',[10]],
	[536,,'hidden',[10,10,20,20,10,10,10,10,10]],
	[597,,'hidden',5],
	[175,,'hidden',[2,2,,,,,,,5]],
	[588,,'hidden',[,30]],
	[660,,'hidden',[,20]],
	[616,,'hidden',[,10]],
	[688,,'hidden',[,,30,25]],
	[alternateForm(422,1),,'hidden',[,,25,20]],
	[767,,'hidden',[,,10]],
	[714,,'hidden',[,,,20]],
	[607,,'hidden',[,,,,,,25,,25]],
	[838,,'hidden',[,,,,,,10]],
	[215,,'hidden',[,,,,30,30]],
	[582,Sw,'hidden',[,,,,20]],
	[613,Sh,'hidden',[,,,,20]],
	[613,,'hidden',[,,,,,25]],
	[303,Sw,'hidden',[,,,,,10]],
	[582,Sh,'hidden',[,,,,,10]],
	[111,,'hidden',[,,,,,,,30]],
	[627,Sw,'hidden',[,,,,,,,25]],
	[629,Sh,'hidden',[,,,,,,,25]],
	[185,,'hidden',[,,,,,,,20]],
	[868,,'hidden',[,,,,,,,,30]],
	[605,,'hidden',[,,,,,,,,20]],

	[118,,'surf',[55,40,45,30,20,10,25,35,40]],
	[211,,'surf',[30,45,40,55,15,20,60,50,45]],
	[686,,'surf',15],
	[582,,'surf',[,,,,50,55]],

	[714,,'flying',[60,50,45,70,5,10,35,10,25]],
	[527,,'flying',[35,35,20,25,30,5,15,35,65]],
	[520,,'flying',[5,15,35,5,15,35,50,55,10]],
	[582,,'flying',[,,,,50,50]],

	[820,,'shake_tree',75],
	[420,,'shake_tree',25],

	[834,,'fish',30],
	[129,,'fish',30],
	[171,,'fish',25],
	[211,,'fish',10],
	[130,,'fish',5],

	[569,,'wanderer'], //Garbodor
	[alternateForm(264,1),,'wanderer'], //Linoone
	[598,,'wanderer'], //Ferrothorn
	[820,,'wanderer'], //Greedent
	[862,,'wanderer'], //Obstagoon
	[743,,'wanderer',[100,100,,,,,100,,100]], //Ribombee
	[768,,'wanderer',[100,,100,100]], //Golisopod
	[760,,'wanderer',[100,,100,100,100,100,100,100,100]], //Bewear
	[537,,'wanderer',[100,100,100,100,,,,,100]], //Seismitoad
	[606,,'wanderer',[100,100,,,100,100,100,,100]], //Beheeyem
	[715,,'wanderer',[100,100,100,100,,100,100,100,100]], //Noivern
	[475,,'wanderer',[100,100,100,100,,,100,100]], //Gallade
	[452,,'wanderer',[,100]], //Drapion
	[675,,'wanderer',[,100,,,,,100]], //Pangoro
	[437,,'wanderer',[,,100,100]], //Bronzong
	[584,,'wanderer',[,,,,100,100]], //Vanilluxe
	[164,,'wanderer',[,,,,100]], //Noctowl
	[614,,'wanderer',[,,,,100]], //Beartic
	[461,,'wanderer',[,,,,,100]], //Weavile
	[112,,'wanderer',[,,,,,,100,100]], //Rhydon
	[344,,'wanderer',[,,,,,,,100]], //Claydol
	[778,,'wanderer',[,,,,,,,,100]], //Mimikyu
	[518,,'wanderer',[,,,,,,,,100]], //Musharna

	generateRaidDen(49, 16, 52),
	generateRaidDen(50, 13, 87),
	generateRaidDen(51, 27, 59),
	generateRaidDen(52, 8, 44),
	generateRaidDen(53, 36, 63),
	generateRaidDen(54, 4, 92),
	generateRaidDen(55, 5, 46),
	generateRaidDen(56, 40, 65),
	generateRaidDen(57, 34, 82)
]},
{name:['Stony Wilderness',,,,'Llanura Pétrea'],encounters:[
	[alternateForm(263,1),,'overworld',[35,15,10,,30,10,30,30,10]],
	[291,,'overworld',[30,,35]],
	[236,,'overworld',[15]],
	[343,,'overworld',[10,10,,,,,10,10]],
	[622,,'overworld',10],
	[67,,'overworld',[,35]],
	[559,Sw,'overworld',[,30]],
	[453,Sh,'overworld',[,30]],
	[751,,'overworld',[,,30,30]],
	[343,Sw,'overworld',[,,10,10,10,10,,,10]],
	[436,Sh,'overworld',[,,10,10,10,10,,,10]],
	[845,,'overworld',[,,5]],
	[835,,'overworld',[,,,35]],
	[848,,'overworld',[,,,10]],
	[25,,'overworld',[,,,5]],
	[556,,'overworld',[,,,,,,35]],
	[757,,'overworld',[,,,,,,15]],
	[613,,'overworld',[,,,,35,30]],
	[215,,'overworld',[,,,,15,35]],
	[597,,'overworld',[,,,,,5]],
	[438,,'overworld',[,,,,,,,35]],
	[557,,'overworld',[,,,,,,,15]],
	[856,,'overworld',[,,,,,,,,35]],
	[517,,'overworld',[,,,,,,,,30]],
	[827,,'overworld',[,,,,,,,,5]],
	
	[533,Sw,'hidden',[40,,,30,10,,30]],
	[525,Sh,'hidden',[40,,,30,10,,30,40]],
	[743,,'hidden',[30,20]],
	[859,,'hidden',[20,10,20,20,20,10,20,,20]],
	[830,,'hidden',[10]],
	[546,,'hidden',[,40]],
	[684,Sw,'hidden',[,30]],
	[682,Sh,'hidden',[,30]],
	[339,,'hidden',[,,40]],
	[alternateForm(422,1),,'hidden',[,,30]],
	[25,,'hidden',[,,10]],
	[848,,'hidden',[,,,40]],
	[840,,'hidden',[,,,10]],
	[838,,'hidden',[,,,,,,40]],
	[529,,'hidden',[,,,,,,10,30]],
	[613,,'hidden',[,,,,40,20]],
	[215,,'hidden',[,,,,30,40]],
	[624,,'hidden',[,,,,,30]],
	[111,Sw,'hidden',[,,,,,,,40]],
	[525,Sw,'hidden',[,,,,,,,20]],
	[111,Sh,'hidden',[,,,,,,,20]],
	[213,,'hidden',[,,,,,,,10]],
	[828,,'hidden',[,,,,,,,,40]],
	[825,,'hidden',[,,,,,,,,30]],
	[176,,'hidden',[,,,,,,,,10]],

	[520,,'flying',[60,60,60,60,60,60,40,40,40]],
	[561,,'flying',[40,40,40,40,40,40,60,60,60]],

	[112,,'wanderer'], //Rhydon
	[477,,'wanderer'], //Dusknoir
	[623,,'wanderer'], //Golurk
	[861,,'wanderer'], //Grimmsnarl
	[344,,'wanderer',[100,100,,,,,100,100]], //Claydol
	[763,,'wanderer',[100,100,,,100,100,100,100,100]], //Tsareena
	[558,,'wanderer',[100,100,,,100,100,100,100,100]], //Crustle
	[561,,'wanderer',[100,,100,100,100,100,100,100,100]], //Sigilyph
	[521,,'wanderer',[,100]], //Unfezant
	[437,,'wanderer',[,,100,100,100,100,,,100]], //Bronzong
	[752,,'wanderer',[,,100,100]], //Araquanid

	generateRaidDen(58, 3, 51),
	generateRaidDen(59, 12, 85),
	generateRaidDen(60, 40, 66),
	generateRaidDen(61, 2, 50),
	generateRaidDen(62, 27, 59),
	generateRaidDen(63, 35, 63),
	generateRaidDen(64, 22, 55),
	generateRaidDen(65, 14, 50),
	generateRaidDen(66, 18, 54),
	generateRaidDen(67, 1, 81),
	generateRaidDen(68, 6, 43),
	generateRaidDen(69, 19, 80)
]},
{name:['Stony Wilderness (Area 2)',,,,'Llanura Pétrea (Área 2)'],encounters:[
	[557,,'overworld',[45,15,35,,35,10,35,35,10]],
	[291,,'overworld',[35,,15]],
	[236,,'overworld',[15]],
	[627,Sw,'overworld',5],
	[629,Sh,'overworld',5],
	[67,,'overworld',[,45]],
	[559,Sw,'overworld',[,35]],
	[454,Sh,'overworld',[,35]],
	[751,,'overworld',[,,45,35]],
	[835,,'overworld',[,,,45]],
	[848,,'overworld',[,,,10]],
	[25,,'overworld',[,,,5]],
	[556,,'overworld',[,,,,,,45]],
	[524,Sw,'overworld',[,,,,,,15]],
	[757,Sh,'overworld',[,,,,,,15]],
	[613,,'overworld',[,,,,45,35]],
	[215,,'overworld',[,,,,15,45]],
	[597,,'overworld',[,,,,,5]],
	[438,,'overworld',[,,,,,,,45]],
	[524,,'overworld',[,,,,,,,15]],
	[856,,'overworld',[,,,,,,,,45]],
	[517,,'overworld',[,,,,,,,,35]],
	[827,,'overworld',[,,,,,,,,5]]
]},
{name:['Stony Wilderness (Area 3)',,,,'Llanura Pétrea (Área 3)'],encounters:[
	[761,,'overworld',[50,50,60,35,35,35,,35,35]],
	[66,,'overworld',[35,35]],
	[236,,'overworld',[15]],
	[559,Sw,'overworld',[,15]],
	[453,Sh,'overworld',[,15]],
	[751,,'overworld',[,,35]],
	[845,,'overworld',[,,5]],
	[751,Sw,'overworld',[,,,45]],
	[751,Sh,'overworld',[,,,50]],
	[848,,'overworld',[,,,10]],
	[25,Sw,'overworld',[,,,10]],
	[25,Sh,'overworld',[,,,5]],
	[556,,'overworld',[,,,,,,50]],
	[761,Sw,'overworld',[,,,,,,45]],
	[761,Sh,'overworld',[,,,,,,35]],
	[757,Sw,'overworld',[,,,,,,5]],
	[757,Sh,'overworld',[,,,,,,15]],
	[613,,'overworld',[,,,,50,10]],
	[215,,'overworld',[,,,,15,50]],
	[597,,'overworld',[,,,,,5]],
	[438,,'overworld',[,,,,,,,50]],
	[557,,'overworld',[,,,,,,,15]],
	[856,,'overworld',[,,,,,,,,50]],
	[517,,'overworld',[,,,,,,,,10]],
	[827,,'overworld',[,,,,,,,,5]]
]},
{name:['Dusty Bowl',,,,'Cuenca Polvorienta'],encounters:[
	[827,,'overworld',[50,35,10,35,,,5]],
	[109,,'overworld',[35,,5]],
	[559,Sw,'overworld',[15,60]],
	[453,Sh,'overworld',[15,60]],
	[106,Sw,'overworld',[,5]],
	[107,Sh,'overworld',[,5]],
	[309,,'overworld',[,,50,50]],
	[536,,'overworld',[,,35,15]],
	[449,,'overworld',[,,,,,,55,60]],
	[58,Sw,'overworld',[,,,,,,30]],
	[37,Sh,'overworld',[,,,,,,30]],
	[529,,'overworld',[,,,,,,10,35]],
	[613,,'overworld',[,,,,50,15]],
	[215,,'overworld',[,,,,35]],
	[583,,'overworld',[,,,,10]],
	[225,,'overworld',[,,,,5]],
	[459,,'overworld',[,,,,,50]],
	[303,Sw,'overworld',[,,,,,35]],
	[220,Sh,'overworld',[,,,,,35]],
	[213,,'overworld',[,,,,,,,5]],
	[202,,'overworld',[,,,,,,,,55]],
	[355,Sw,'overworld',[,,,,,,,,35]],
	[302,Sh,'overworld',[,,,,,,,,35]],
	[575,Sw,'overworld',[,,,,,,,,10]],
	[578,Sh,'overworld',[,,,,,,,,10]],

	[830,,'hidden',[40,30,20,10,,,,20,20]],
	[832,,'hidden',[30]],
	[857,,'hidden',[20,20,10,,,20,,10,30]],
	[840,,'hidden',[10]],
	[435,,'hidden',[,40]],
	[315,,'hidden',[,10]],
	[279,,'hidden',[,,40]],
	[689,,'hidden',[,,30]],
	[834,,'hidden',[,,,40]],
	[836,,'hidden',[,,,30]],
	[737,,'hidden',[,,,20]],
	[112,,'hidden',[,,,,,,58]],
	[alternateForm(618,1),,'hidden',[,,,,,,30]],
	[750,,'hidden',[,,,,,,10]],
	[839,,'hidden',[,,,,,,2]],
	[221,,'hidden',[,,,,40]],
	[460,,'hidden',[,,,,30]],
	[823,,'hidden',[,,,,20]],
	[533,,'hidden',[,,,,10]],
	[437,,'hidden',[,,,,,40]],
	[600,,'hidden',[,,,,,30]],
	[598,,'hidden',[,,,,,10]],
	[51,,'hidden',[,,,,,,,40]],
	[185,,'hidden',[,,,,,,,30]],
	[678,Sw,'hidden',[,,,,,,,,45]],
	[alternateForm(678,1),Sh,'hidden',[,,,,,,,,45]],
	[282,,'hidden',[,,,,,,,,5]],

	[847,,'fish',50],
	[171,,'fish',35],
	[211,,'fish',10],
	[130,,'fish',5],

	[628,Sw,'flying',[100,100,100,100,100,100,100,100,98]],
	[630,Sh,'flying',[100,100,100,100,100,100,100,100,98]],
	[468,,'flying',[,,,,,,,,2]],

	[alternateForm(422,1),,'surf',[65,50,55,65,30,20,70,60,50]],
	[592,,'surf',[35,50,45,35,,15,30,40,50]],
	[582,,'surf',[,,,,50,65]],
	[686,,'surf',[,,,,20]],

	[213,,'wanderer'], //Shuckle
	[844,,'wanderer'], //Sandaconda
	[185,,'wanderer',[100,100,,,,100,100,100,100]], //Sudowoodo
	[437,,'wanderer',[100,,100,100,100,100]], //Bronzong
	[330,,'wanderer',[100,,,,,,,100]], //Flygon
	[750,,'wanderer',[100,,,,,,100,100,100]], //Mudsdale
	[526,,'wanderer',[100,,,,,,100,100,100]], //Gigalith
	[784,Sw,'wanderer',[100,,,,100,100,100,100,100]], //Kommo-o
	[248,Sh,'wanderer',[100,,,,100,100,100,100,100]], //Tyranitar
	[344,,'wanderer',[,100,,,,,100,100,100]], //Claydol
	[689,,'wanderer',[,100,100,100]], //Barbaracle
	[561,,'wanderer',[,100,100,100,100,100,100,,100]], //Sigilyph
	[435,,'wanderer',[,100]], //Skuntank
	[623,,'wanderer',[,100,100,100,100,100]], //Golurk
	[112,,'wanderer',[,,100,100,100]], //Rhydon
	[537,,'wanderer',[,,100,100]], //Seismitoad
	[221,,'wanderer',[,,,,100,100]], //Piloswine

	generateRaidDen(70, 10, 48),
	generateRaidDen(71, 36, 88),
	generateRaidDen(72, 17, 93),
	generateRaidDen(73, 11, 49),
	generateRaidDen(74, 9, 75),
	generateRaidDen(75, 21, 55),
	generateRaidDen(76, 20, 54),
	generateRaidDen(77, 17, 52),
	generateRaidDen(78, 15, 93)
]},
{name:['Giant\'s Mirror',,,,'Espejo del Gigante'],encounters:[
	[527,,'overworld',[35]],
	[710,,'overworld',[41]],
	[520,,'overworld',[10,35,,,,,45,15]],
	[44,,'overworld',[10,10,10,10,,,10,,10]],
	[827,,'overworld',[4]],
	[12,,'overworld',[,40]],
	[539,Sw,'overworld',[,10]],
	[538,Sh,'overworld',[,10]],
	[alternateForm(83,1),Sw,'overworld',[,5]],
	[alternateForm(222,1),Sh,'overworld',[,5]],
	[767,,'overworld',[,,40]],
	[536,,'overworld',[,,35]],
	[177,,'overworld',[,,10,5,10,5,,,10]],
	[833,,'overworld',[,,5]],
	[694,,'overworld',[,,,40]],
	[595,,'overworld',[,,,35]],
	[835,,'overworld',[,,,10]],
	[632,Sw,'overworld',[,,,,,,40]],
	[631,Sh,'overworld',[,,,,,,40]],
	[631,Sw,'overworld',[,,,,,,5]],
	[632,Sh,'overworld',[,,,,,,5]],
	[582,,'overworld',[,,,,50,35]],
	[613,,'overworld',[,,,,35,10]],
	[225,,'overworld',[,,,,5]],
	[624,,'overworld',[,,,,,50]],
	[111,,'overworld',[,,,,,,,50]],
	[529,,'overworld',[,,,,,,,35]],
	[684,Sw,'overworld',[,,,,,,,,40]],
	[682,Sh,'overworld',[,,,,,,,,40]],
	[755,,'overworld',[,,,,,,,,35]],
	[742,,'overworld',[,,,,,,,,5]],

	[109,,'hidden',[30,30,20,10,10,10,20,10,20]],
	[451,,'hidden',[30,30,30,20,,,30]],
	[825,,'hidden',[20,10,10,,,,,20]],
	[406,,'hidden',[10]],
	[66,,'hidden',10],
	[315,,'hidden',[,20]],
	[alternateForm(422,1),,'hidden',[,,30]],
	[595,,'hidden',[,,,30]],
	[840,,'hidden',[,,,30]],
	[50,,'hidden',[,,,,,,30]],
	[324,,'hidden',[,,,,,,10]],
	[220,,'hidden',[,,,,30,30]],
	[613,,'hidden',[,,,,30,30]],
	[459,,'hidden',[,,,,20,20]],
	[450,,'hidden',[,,,,,,,30]],
	[660,,'hidden',[,,,,,,,30]],
	[859,,'hidden',[,,,,,,,,35]],
	[868,,'hidden',[,,,,,,,,32]],
	[778,,'hidden',[,,,,,,,,3]],

	[51,Sw,'underground',[60,60,60,60,30,30,30,30,60]],
	[51,Sh,'underground',[50,50,50,50,20,20,20,20,50]],
	[530,Sw,'underground',[30,30,30,30,60,60,60,60,30]],
	[525,Sh,'underground',30],
	[525,Sw,'underground',10],
	[530,Sh,'underground',[20,20,20,20,50,50,50,50,20]],

	[alternateForm(422,1),,'surf',[65,50,55,65,30,20,70,60,50]],
	[592,,'surf',[35,50,45,35,,15,30,40,50]],
	[582,,'surf',[,,,,50,65]],
	[686,,'surf',[,,,,20]],

	[820,,'shake_tree',75],
	[420,,'shake_tree',25],

	[834,,'fish',50],
	[747,,'fish',35],
	[170,,'fish',10],
	[130,,'fish',5],

	[520,,'flying',60],
	[822,,'flying',40],

	[208,,'wanderer'], //Steelix
	[863,,'wanderer'], //Perrserker
	[68,,'wanderer',[100,100,,100,,100,100,100,100]], //Machamp
	[182,,'wanderer',[100]], //Bellossom
	[521,,'wanderer',[100,100,,,,,100]], //Unfezant
	[45,,'wanderer',[,100,100,100,100,100,,100]], //Vileplume
	[537,,'wanderer',[,,100]], //Seismitoad
	[178,,'wanderer',[,,100,100,100,100,,100,100]], //Xatu
	[460,,'wanderer',[,,,,100]], //Abomasnow
	[738,,'wanderer',[,,,,100,100,100,100,100]], //Vikavolt
	[185,,'wanderer',[,,,,,,100,,100]], //Sudowoodo

	generateRaidDen(79, 28, 43),
	generateRaidDen(80, 42, 67),
	generateRaidDen(81, 25, 72),
	generateRaidDen(82, 36, 69),
	generateRaidDen(83, 27, 70)
]},
{name:['Hammerlocke Hills',,,,'Cornisa de Artejo'],encounters:[
	[202,,'overworld',[45,29,29,24,5,10,5,13]],
	[759,,'overworld',[29,45]],
	[185,,'overworld',[10,,,,,,40,40]],
	[67,,'overworld',[5,15,15,5,,5,10,34]],
	[710,,'overworld',[11,11,11,36,11,11,11,11,11]],
	[536,,'overworld',[,,45]],
	[767,,'overworld',[,,,35]],
	[556,,'overworld',[,,,,,,34]],
	[613,,'overworld',[,,,,40]],
	[361,,'overworld',[,,,,34,34]],
	[215,,'overworld',[,,,,10,40]],
	[610,Sw,'overworld',[,,,,,,,2]],
	[328,Sh,'overworld',[,,,,,,,2]],
	[679,,'overworld',[,,,,,,,,44]],
	[755,,'overworld',[,,,,,,,,35]],
	[92,,'overworld',[,,,,,,,,10]],

	[677,,'hidden',[40,10,,10,10,,10,10,40]],
	[686,,'hidden',[25,35,15,,25,10,15,,15]],
	[822,,'hidden',[15]],
	[832,,'hidden',[10]],
	[599,,'hidden',10],
	[67,,'hidden',[,25]],
	[828,,'hidden',[,15]],
	[701,,'hidden',[,5]],
	[279,,'hidden',[,,40]],
	[588,Sw,'hidden',[,,30,15]],
	[616,Sh,'hidden',[,,30,15]],
	[616,Sw,'hidden',[,,5]],
	[588,Sh,'hidden',[,,5]],
	[848,,'hidden',[,,,40]],
	[737,,'hidden',[,,,25]],
	[58,Sw,'hidden',[,,,,,,40]],
	[37,Sh,'hidden',[,,,,,,40]],
	[343,,'hidden',[,,,,,,25]],
	[220,,'hidden',[,,,,40]],
	[225,,'hidden',[,,,,15]],
	[361,,'hidden',[,,,,,40]],
	[582,,'hidden',[,,,,,25]],
	[679,,'hidden',[,,,,,15]],
	[51,,'hidden',[,,,,,,,40]],
	[557,,'hidden',[,,,,,,,25]],
	[529,,'hidden',[,,,,,,,15]],
	[856,,'hidden',[,,,,,,,,25]],
	[859,,'hidden',[,,,,,,,,10]],

	[820,,'shake_tree',75],
	[420,,'shake_tree',25],

	[521,,'flying',60],
	[822,,'flying',40],

	[701,,'wanderer'], //Hawlucha
	[823,,'wanderer'], //Corviknight
	[711,,'wanderer'], //Gourgeist
	[879,,'wanderer'], //Copperajah
	[45,,'wanderer',[100,,100,100,,,100,100]], //Vileplume
	[600,,'wanderer',[100,100,100,,100]], //Klang
	[407,,'wanderer',[,100,,,,,,,100]], //Roserade
	[601,,'wanderer',[,,,100,,100,100,100,100]], //Klinklang
	[460,,'wanderer',[,,,,100,100]], //Abomasnow

	generateRaidDen(84, 14, 68),
	generateRaidDen(85, 12, 45),
	generateRaidDen(86, 32, 61),
	generateRaidDen(87, 19, 53),
	generateRaidDen(88, 33, 62),
	generateRaidDen(89, 30, 57),
	generateRaidDen(90, 23, 73)
]},
{name:['Giant\'s Cap',,,,'Gorro del Gigante'],encounters:[
	[164,,'overworld',[40,5,10,5,5,,5,10,10]],
	[alternateForm(264,1),,'overworld',[35,40,5,,10,10,,,5]],
	[510,,'overworld',[10]],
	[572,,'overworld',10],
	[559,Sw,'overworld',[5,35]],
	[453,Sh,'overworld',[5,35]],
	[44,,'overworld',[,10]],
	[834,,'overworld',[,,40,35]],
	[195,,'overworld',[,,35,40]],
	[310,,'overworld',[,,,10]],
	[838,,'overworld',[,,,,,,40,40]],
	[660,,'overworld',[,,,,,,35,35]],
	[324,,'overworld',[,,,,,,10]],
	[582,,'overworld',[,,,,40,35]],
	[215,,'overworld',[,,,,35,40]],
	[447,,'overworld',[,,,,,5]],
	[213,,'overworld',[,,,,,,,5]],
	[574,Sw,'overworld',[,,,,,,,,40]],
	[577,Sh,'overworld',[,,,,,,,,40]],
	[35,,'overworld',[,,,,,,,,35]],

	[274,Sw,'hidden',[40]],
	[271,Sh,'hidden',[40]],
	[825,,'hidden',[30,30,20,10,10,10,,10,30]],
	[830,,'hidden',[20,40,10,,,,,,10]],
	[434,,'hidden',[10]],
	[517,,'hidden',[,20,,,,,,,40]],
	[588,Sw,'hidden',[,10]],
	[616,Sh,'hidden',[,10]],
	[536,,'hidden',[,,40]],
	[alternateForm(422,1),,'hidden',[,,30,20]],
	[595,,'hidden',[,,,40]],
	[848,,'hidden',[,,,30]],
	[622,,'hidden',[,,,,,,40,40]],
	[343,,'hidden',[,,,,,,30]],
	[529,,'hidden',[,,,,,,20,30]],
	[51,,'hidden',[,,,,,,10]],
	[459,,'hidden',[,,,,40]],
	[361,,'hidden',[,,,,30,40]],
	[225,,'hidden',[,,,,20,20]],
	[624,,'hidden',[,,,,,30]],
	[749,,'hidden',[,,,,,,,20]],
	[355,,'hidden',[,,,,,,,,20]],

	[837,,'underground',[60,60,,,,,60,60,60]],
	[111,Sw,'underground',[30,30,,,,,30,30,30]],
	[525,Sw,'underground',10],
	[111,,'underground',[,,60,60,60,60]],
	[837,Sw,'underground',[,,30,30,30,30]],
	[525,Sh,'underground',30],
	[111,Sh,'underground',[10,10,,,,,10,10,10]],
	[837,Sh,'underground',[,,10,10,10,10]],

	[820,,'shake_tree',75],
	[420,,'shake_tree',25],

	[118,,'fish',50],
	[98,,'fish',35],
	[341,,'fish',10],
	[130,,'fish',5],

	[834,,'wanderer'], //Drednaw
	[826,,'wanderer'], //Orbeetle
	[823,,'wanderer'], //Corviknight
	[839,,'wanderer'], //Coalossal
	[680,,'wanderer',[100,100,100,100,100,100,100,100]], //Doublade
	[573,,'wanderer',[100,100,,,,,,,100]], //Cinccino
	[94,,'wanderer',[100,100,,100,,100,100,100,100]], //Gengar
	[537,,'wanderer',[,,100]], //Seismitoad
	[768,,'wanderer',[,,100]], //Golisopod
	[596,,'wanderer',[,,,100]], //Galvantula
	[362,,'wanderer',[,,,,100,100]], //Glalie
	[614,,'wanderer',[,,,,100]], //Beartic
	[530,,'wanderer',[,,,,,,100,100]], //Excadrill
	[681,,'wanderer',[,,,,,,,,100]], //Aegislash

	generateRaidDen(91, 32, 89),
	generateRaidDen(92, 24, 78),
	generateRaidDen(93, 23, 55),
	generateRaidDen(94, 18, 71),
	generateRaidDen(95, 30, 60)
]},
{name:['Giant\'s Cap (Area 2)',,,,'Gorro del Gigante (Área 2)'],encounters:[
	[825,,'overworld',[50,50,50,50,35,35,35,35,35]],
	[824,,'overworld',[35]],
	[163,,'overworld',[10,5,10,5,5,,5,10,5]],
	[559,Sw,'overworld',[5,35]],
	[453,Sh,'overworld',[5,35]],
	[44,,'overworld',[,10]],
	[194,,'overworld',[,,35,10]],
	[833,,'overworld',[,,5,35]],
	[837,,'overworld',[,,,,,,50]],
	[324,,'overworld',[,,,,,,10]],
	[582,,'overworld',[,,,,50,10]],
	[215,,'overworld',[,,,,10,50]],
	[447,,'overworld',[,,,,,5]],
	[659,,'overworld',[,,,,,,,50]],
	[213,,'overworld',[,,,,,,,5]],
	[574,Sw,'overworld',[,,,,,,,,50]],
	[577,Sh,'overworld',[,,,,,,,,50]],
	[35,,'overworld',[,,,,,,,,10]],

	[338,Sw,'underground',100],
	[337,Sh,'underground',100]
]},
{name:['Giant\'s Cap (Area 3)',,,,'Gorro del Gigante (Área 3)'],encounters:[
	[833,,'overworld',[50,50,50,50,35,35,35,35,35]],
	[824,,'overworld',[35]],
	[alternateForm(263,1),,'overworld',[10,5,10,5,5,,5,10,5]],
	[559,Sw,'overworld',[5,35]],
	[453,Sh,'overworld',[5,35]],
	[44,,'overworld',[,10,5,35]],
	[194,,'overworld',[,,35,10]],
	[837,,'overworld',[,,,,,,50]],
	[324,,'overworld',[,,,,,,10]],
	[582,,'overworld',[,,,,50,10]],
	[215,,'overworld',[,,,,10,50]],
	[447,,'overworld',[,,,,,5]],
	[659,,'overworld',[,,,,,,,50]],
	[213,,'overworld',[,,,,,,,5]],
	[575,Sw,'overworld',[,,,,,,,,50]],
	[577,Sh,'overworld',[,,,,,,,,50]],
	[35,,'overworld',[,,,,,,,,10]]
]},
{name:['Lake of Outrage',,,,'Lago del Enfado'],encounters:[
	[606,,'overworld',[32]],
	[628,Sw,'overworld',[25]],
	[630,Sh,'overworld',[25]],
	[623,,'overworld',[20,20,20,20,20,13,20,23,20]],
	[561,,'overworld',[13]],
	[132,,'overworld',10],
	[569,,'overworld',[,30]],
	[452,,'overworld',[,24]],
	[alternateForm(110,1),,'overworld',[,13]],
	[237,,'overworld',[,2]],
	[886,,'overworld',[,1,1,2,,,,,2]],
	[537,,'overworld',[,,30]],
	[752,,'overworld',[,,25]],
	[768,,'overworld',[,,12]],
	[479,,'overworld',[,,2,2]],
	[596,Sw,'overworld',[,,,30]],
	[596,Sh,'overworld',[,,,32]],
	[715,Sw,'overworld',[,,,27]],
	[715,Sh,'overworld',[,,,29]],
	[612,Sw,'overworld',[,,,5]],
	[612,Sh,'overworld',[,,,1]],
	[877,,'overworld',[,,,4]],
	[38,Sw,'overworld',[,,,,,,25]],
	[59,Sh,'overworld',[,,,,,,25]],
	[632,Sw,'overworld',[,,,,,,25]],
	[631,Sh,'overworld',[,,,,,,25]],
	[608,Sw,'overworld',[,,,,,,14]],
	[608,Sh,'overworld',[,,,,,,10]],
	[631,Sw,'overworld',[,,,,,,5]],
	[632,Sh,'overworld',[,,,,,,5]],
	[330,Sw,'overworld',[,,,,,,1]],
	[330,Sh,'overworld',[,,,,,,5]],
	[362,,'overworld',[,,,,25]],
	[584,,'overworld',[,,,,25,20]],
	[460,,'overworld',[,,,,15]],
	[712,,'overworld',[,,,,5]],
	[601,,'overworld',[,,,,,30]],
	[625,,'overworld',[,,,,,25]],
	[879,,'overworld',[,,,,,2]],
	[530,,'overworld',[,,,,,,,35]],
	[525,,'overworld',[,,,,,,,30]],
	[634,Sw,'overworld',[,,,,,,,2]],
	[247,Sh,'overworld',[,,,,,,,2]],
	[202,,'overworld',[,,,,,,,,30]],
	[858,,'overworld',[,,,,,,,,25]],
	[576,Sw,'overworld',[,,,,,,,,13]],
	[579,Sh,'overworld',[,,,,,,,,13]],

	[823,,'hidden',[40,20,20,,20,,20,,23]],
	[862,,'hidden',[25]],
	[760,,'hidden',[20]],
	[826,,'hidden',[13]],
	[132,,'hidden',[2]],
	[435,Sw,'hidden',[,33]],
	[435,Sh,'hidden',[,30]],
	[861,,'hidden',[,25]],
	[675,Sw,'hidden',[,10]],
	[675,Sh,'hidden',[,13]],
	[870,,'hidden',[,6]],
	[782,Sw,'hidden',[,5,,,,,5]],
	[246,Sh,'hidden',[,5,,,,,5]],
	[885,,'hidden',[,1,,2,,,,,2]],
	[279,,'hidden',[,,38]],
	[845,,'hidden',[,,25]],
	[195,,'hidden',[,,13]],
	[689,,'hidden',[,,2]],
	[633,Sw,'hidden',[,,2]],
	[704,Sh,'hidden',[,,2]],
	[836,Sw,'hidden',[,,,35]],
	[836,Sh,'hidden',[,,,38]],
	[834,Sw,'hidden',[,,,23]],
	[834,Sh,'hidden',[,,,25]],
	[823,Sw,'hidden',[,,,20,,20,,20]],
	[823,Sh,'hidden',[,,,15,,15,,21]],
	[593,,'hidden',[,,,16]],
	[634,Sw,'hidden',[,,,2]],
	[780,Sh,'hidden',[,,,2]],
	[783,Sw,'hidden',[,,,2]],
	[705,Sh,'hidden',[,,,2]],
	[112,Sw,'hidden',[,,,,,,33]],
	[112,Sh,'hidden',[,,,,,,35]],
	[839,,'hidden',[,,,,,,25]],
	[844,Sw,'hidden',[,,,,,,13]],
	[844,Sh,'hidden',[,,,,,,15]],
	[776,Sw,'hidden',[,,,,,,2]],
	[875,Sh,'hidden',[,,,,2,5]],
	[874,Sw,'hidden',[,,,,,,2,5]],
	[862,Sh,'hidden',[,,,,,,,2]],
	[872,,'hidden',[,,,,40]],
	[221,,'hidden',[,,,,25]],
	[alternateForm(122,1),,'hidden',[,,,,13]],
	[862,Sw,'hidden',[,,,,2]],
	[247,Sh,'hidden',[,,,,,,,2]],
	[863,,'hidden',[,,,,,40]],
	[680,,'hidden',[,,,,,25]],
	[777,,'hidden',[,,,,,13]],
	[884,,'hidden',[,,,,,2]],
	[51,,'hidden',[,,,,,,,40]],
	[450,,'hidden',[,,,,,,,25]],
	[1642,,'hidden',[,,,,,,,10]],
	[344,,'hidden',[,,,,,,,,35]],
	[437,,'hidden',[,,,,,,,,25]],
	[876,Sw,'hidden',[,,,,,,,,14]],
	[alternateForm(876,1),Sh,'hidden',[,,,,,,,,14]],
	[282,,'hidden',[,,,,,,,,1]],


	[12,,'flying',[75,75,25,25,25,25,25]],
	[519,,'flying',[25,25,75,75,75,75,75,75,25]],

	[458,,'surf',[65,50,55,65,30,20,70,60,50]],
	[226,,'surf',[30,45,40,30,15,10,25,35,45]],
	[847,,'surf',5],
	[582,,'surf',[,,,,50,65]],

	[820,,'shake_tree',95],
	[420,,'shake_tree',5],

	[847,,'fish',50],
	[171,,'fish',35],
	[211,,'fish',10],
	[130,,'fish',5],

	[858,,'wanderer'], //Hatterene
	[853,,'wanderer'], //Grapploct
	[470,,'wanderer',[100]], //Leafeon
	[282,,'wanderer',[100,,,100,,,,,100]], //Gardevoir
	[196,,'wanderer',[,100]], //Espeon
	[756,,'wanderer',[,100,100,100]], //Shiinotic
	[134,,'wanderer',[,,100]], //Vaporeon
	[135,,'wanderer',[,,,100]], //Jolteon
	[471,,'wanderer',[,,,,100,100]], //Glaceon
	[713,,'wanderer',[,,,,100,100]], //Avalugg
	[136,,'wanderer',[,,,,,,100]], //Flareon
	[609,,'wanderer',[,,,,,,100]], //Chandelure
	[197,,'wanderer',[,,,,,,,100]], //Umbreon
	[112,,'wanderer',[,,,,,,,100]], //Rhydon
	[700,,'wanderer',[,,,,,,,,100]], //Sylveon

	generateRaidDen(96, 25, 56),
	generateRaidDen(97, 8, 44),
	generateRaidDen(98, 18, 77),
	generateRaidDen(99, 34, 74)
]},


{name:['Isle of Armor',,,,'Isla Armadura'],encounters:[
	[52,Ar,['trade',alternateForm(52,2)]],
	[83,SwAr,['trade',alternateForm(83,1)]],
	[222,ShAr,['trade',alternateForm(222,1)]],
	[77,ShAr,['trade',alternateForm(77,1)]],
	[78,Ar,['trade',alternateForm(78,1)]],
	[122,ShAr,['trade',alternateForm(122,1)]],
	[554,SwAr,['trade',alternateForm(554,1)]],
	[263,Ar,['trade',alternateForm(263,1)]],
	[618,Ar,['trade',alternateForm(618,1)]],
	[110,Ar,['trade',alternateForm(110,1)]],
	[103,Ar,['trade',alternateForm(103,1)]],
	[105,Ar,['trade',alternateForm(105,1)]]
]},
{name:['Master Dojo'],encounters:[
	[1,Ar,'gift'],
	[7,Ar,'gift'],
	[891,Ar,'gift'],
	[137,Ar,'gift']
]},
{name:['Fields of Honor',,,,'Prado Reverencia'],encounters:[ //908A64718CA374E6
	[alternateForm(52,1),Ar,'gift'],
	[alternateForm(79,0),Ar,'gift'],
	[alternateForm(37,1),Ar,'gift'],
	[alternateForm(27,1),Ar,'gift'],
	[alternateForm(26,1),Ar,'gift'],
	[alternateForm(105,1),Ar,'gift'],
	[alternateForm(103,1),Ar,'gift'],
	[722,Ar,'gift'],
	[725,Ar,'gift'],
	[728,Ar,'gift'],
	[alternateForm(50,1),,'gift'],

	[427,Ar,"overworld",[56,36,36,36,,,36,56,36]],
	[39,Ar,"overworld",32],
	[63,Ar,"overworld",5],
	[707,Ar,"overworld",5],
	[113,Ar,"overworld",[2,2,2,2,,,2,2]],
	[686,Ar,"overworld",[,20]],
	[98,Ar,"overworld",[,,20,20]],
	[753,Ar,"overworld",[,,,,,,20]],
	[280,Ar,"overworld",[,,,,,,,,20]],
	[242,Ar,"overworld",[,,,,,,,,2]],
	[824,Ar,"hidden",30],
	[427,Ar,"hidden",30],
	[39,Ar,"hidden",[30,15,15,15,,,15,30,15]],
	[440,Ar,"hidden",10],
	[686,Ar,"hidden",[,15]],
	[98,Ar,"hidden",[,,15,15]],
	[753,Ar,"hidden",[,,,,,,15]],
	[280,Ar,"hidden",[,,,,,,,,15]],
	[819,Ar,"shake_tree",70],
	[840,Ar,"shake_tree",30],
	[129,Ar,"fish",50],
	[223,Ar,"fish",40],
	[224,Ar,"fish",10],

	[72,Ar,"surf",[35,35,35,35,,,50,35,35]],
	[278,Ar,"surf",35],
	[458,Ar,"surf",[30,15,15,15,,,15,30,15]],
	[73,Ar,"surf",[,15]],
	[279,Ar,"surf",[,,15,15]],
	[425,Ar,"surf",[,,,,,,,,15]],

	[alternateForm(79,1),Ar,"underground",100],

	[99,Ar,"wanderer",[100,100,100,100,,,100,100]], //Kingler
	[744,Ar,"wanderer",[100,,,,,,100]], //Rockruff
	[428,Ar,"wanderer",[100,,,,,,100,100]], //Lopunny
	[121,Ar,"wanderer"], //Starmie
	[748,Ar,"wanderer",[100,100,,,,,,,100]], //Toxapex
	[764,Ar,"wanderer",[100,,,,,,,100]], //Comfey
	[570,Ar,"wanderer",[,100,,,,,,,100]], //Zorua
	[687,Ar,"wanderer",[,100,100]], //Malamar
	[183,Ar,"wanderer",[,,100]], //Marill
	[25,Ar,"wanderer",[,,,100]], //Pikachu
	[404,Ar,"wanderer",[,,,100]], //Luxio
	[834,Ar,"wanderer",[,,,,,,100]], //Drednaw
	[662,Ar,"wanderer",[,,,,,,100]], //Fletchinder
	[40,Ar,"wanderer",[,,,,,,,,100]], //Wigglytuff
	[64,Ar,"wanderer",[,,,,,,,,100]], //Kadabra

	generateRaidDen('A01',115,116),
	generateRaidDen('A02',125,126),
	generateRaidDen('A03',109,110),
	generateRaidDen('A04',133,134),
	generateRaidDen('A05',111,112),
	generateRaidDen('A06',113,114),
	generateRaidDen('A07',99,100),
	generateRaidDen('A08',105,106),
	generateRaidDen('A09',123,124),
	generateRaidDen('A10',137,138)	
]},
{name:['Soothing Wetlands',,,,'Humedal Frescor'],encounters:[ //908A63718CA37333
	[451,Ar,"overworld",[56,36,36,36,,,36,56,56]],
	[206,Ar,"overworld",16],
	[194,Ar,"overworld",16],
	[626,Ar,"overworld",5],
	[108,Ar,"overworld",5],
	[113,Ar,"overworld",[2,2,2,2,,,2,2]],
	[624,SwAr,"overworld",[,20]],
	[341,SwAr,"overworld",[,,20,20]],
	[753,Ar,"overworld",[,,,,,,20]],
	[242,Ar,"overworld",[,,,,,,,,2]],
	[616,Ar,"hidden",30],
	[451,Ar,"hidden",30],
	[206,Ar,"hidden",[30,15,15,15,,,15,30,30]],
	[440,Ar,"hidden",10],
	[624,Ar,"hidden",[,15]],
	[341,Ar,"hidden",[,,15,15]],
	[753,Ar,"hidden",[,,,,,,15]],
	[819,Ar,"shake_tree",70],
	[840,Ar,"shake_tree",30],
	[129,Ar,"fish",50],
	[339,Ar,"fish",40],
	[340,Ar,"fish",10],
	[624,ShAr,"overworld",[,10]],
	[453,ShAr,"overworld",[,10]],
	[341,ShAr,"overworld",[,,10,10]],
	[704,ShAr,"overworld",[,,10,10]],

	[194,Ar,"surf",50],
	[833,Ar,"surf",50],

	[626,Ar,"wanderer",[100,100,100,100,,,100,100]], //Bouffalant
	[463,Ar,"wanderer",[100,,100,,,,,100]], //Lickilicky
	[428,Ar,"wanderer",[100,,,,,,,100]], //Lopunny
	[744,Ar,"wanderer",[100]], //Rockruff
	[195,Ar,"wanderer",[100,100,100,,,,100,100,100]], //Quagsire
	[452,Ar,"wanderer",[100,100,100,,,,,100]], //Drapion
	[834,Ar,"wanderer",[100,100,,,,,100,100]], //Drednaw
	[764,Ar,"wanderer",[100,,,,,,100,100,100]], //Comfey
	[687,Ar,"wanderer",[,100,100]], //Malamar
	[570,Ar,"wanderer",[,100,,,,,,,100]], //Zorua
	[559,SwAr,"wanderer",[,100]], //Scraggy
	[453,ShAr,"wanderer",[,100]], //Croagunk
	[183,Ar,"wanderer",[,,100]], //Marill
	[61,Ar,"wanderer",[,,100,100,,,,,100]], //Poliwhirl
	[186,Ar,"wanderer",[,,100,100]], //Politoed
	[405,Ar,"wanderer",[,,,100]], //Luxray
	[404,Ar,"wanderer",[,,,100]], //Luxio
	[26,Ar,"wanderer",[,,,100]], //Raichu
	[25,Ar,"wanderer",[,,,100]], //Pikachu
	[663,Ar,"wanderer",[,,,,,,100]], //Talonflame
	[549,Ar,"wanderer",[,,,,,,100]], //Lilligant
	[662,Ar,"wanderer",[,,,,,,100]], //Fletchinder
	[64,Ar,"wanderer",[,,,,,,,,100]], //Kadabra
	[40,Ar,"wanderer",[,,,,,,,,100]], //Wigglytuff
	[242,Ar,"wanderer",[,,,,,,,,100]], //Blissey
	[184,Ar,"wanderer",[,,,,,,,,100]], //Azumarill

	generateRaidDen('A11',135,136),
	generateRaidDen('A12',111,112),
	generateRaidDen('A13',125,126),
	generateRaidDen('A14',121,122),
	generateRaidDen('A15',119,120),
	generateRaidDen('A16',117,118),
	generateRaidDen('A17',101,102),
	generateRaidDen('A18',99,100),
	generateRaidDen('A19',133,134)
]},
{name:['Forest of Focus',,,,'Bosque Concentración'],encounters:[ //908A62718CA37180
	[543,Ar,"overworld",[56,36,36,36,,,36,46,46]],
	[590,Ar,"overworld",16],
	[114,Ar,"overworld",16],
	[25,Ar,"overworld",5],
	[766,SwAr,"overworld",5],
	[113,Ar,"overworld",[2,2,2,2,,,2,2]],
	[624,SwAr,"overworld",[,20]],
	[341,Ar,"overworld",[,,20,20]],
	[753,Ar,"overworld",[,,,,,,20]],
	[843,Ar,"overworld",[,,,,,,,10]],
	[570,Ar,"overworld",[,,,,,,,,10]],
	[242,Ar,"overworld",[,,,,,,,,2]],
	[588,Ar,"hidden",30],
	[543,Ar,"hidden",30],
	[590,Ar,"hidden",[30,15,15,15,,,15,15,15]],
	[440,Ar,"hidden",10],
	[624,Ar,"hidden",[,15]],
	[341,Ar,"hidden",[,,15,15]],
	[753,Ar,"hidden",[,,,,,,15]],
	[843,Ar,"hidden",[,,,,,,,15]],
	[570,Ar,"hidden",[,,,,,,,,15]],
	[819,Ar,"shake_tree",60],
	[840,Ar,"shake_tree",30],
	[587,Ar,"shake_tree",10],
	[129,Ar,"fish",40],
	[118,Ar,"fish",40],
	[846,Ar,"fish",20],
	[765,ShAr,"overworld",5],
	[624,ShAr,"overworld",[,10]],
	[453,ShAr,"overworld",[,10]],

	[341,Ar,"surf",45],
	[846,Ar,"surf",45],
	[845,Ar,"surf",10],

	[587,Ar,"flying",100],

	[766,SwAr,"wanderer",[100]], //Passimian
	[25,Ar,"wanderer",[100,100,100,100]], //Pikachu
	[465,Ar,"wanderer",[100,,,,,,100]], //Tangrowth
	[591,Ar,"wanderer",[100,100,100,,,,100]], //Amoonguss
	[845,Ar,"wanderer",[100,,100,,,,100,,100]], //Cramorant
	[587,Ar,"wanderer",[100,100,100,100,,,100,100]], //Emolga
	[765,ShAr,"wanderer",[100]], //Oranguru
	[340,SwAr,"wanderer_surf",[100,100,,,,,100,100]], //Whiscash
	[340,ShAr,"wanderer_surf",[100,100,,,,,100]], //Whiscash
	[545,Ar,"wanderer",[,100]], //Scolipede
	[342,Ar,"wanderer",[,100,100,100]], //Crawdaunt
	[616,SwAr,"wanderer",[,,100,100]], //Shelmet
	[617,Ar,"wanderer",[,,100]], //Accelgor
	[55,Ar,"wanderer",[,,100]], //Golduck
	[704,ShAr,"wanderer",[,,100,100]], //Goomy
	[847,SwAr,"wanderer_surf",[,,100,100,,,,,100]], //Barraskewda
	[847,ShAr,"wanderer_surf",[,,100,100]], //Barraskewda
	[26,Ar,"wanderer",[,,,100]], //Raichu
	[405,Ar,"wanderer",[,,,100]], //Luxray
	[172,Ar,"wanderer",[,,,100]], //Pichu
	[127,SwAr,"wanderer",[,,,,,,100]], //Pinsir
	[754,Ar,"wanderer",[,,,,,,100]], //Lurantis
	[636,Ar,"wanderer",[,,,,,,100]], //Larvesta
	[764,Ar,"wanderer",[,,,,,,100,,100]], //Comfey
	[214,ShAr,"wanderer",[,,,,,,100]], //Heracross
	[28,Ar,"wanderer",[,,,,,,,100]], //Sandslash
	[589,Ar,"wanderer",[,,,,,,,100]], //Escavalier
	[104,Ar,"wanderer",[,,,,,,,100]], //Cubone
	[40,Ar,"wanderer",[,,,,,,,,100]], //Wigglytuff
	[570,Ar,"wanderer",[,,,,,,,,100]], //Zorua
	[184,Ar,"wanderer",[,,,,,,,,100]], //Azumarill
	[282,Ar,"wanderer",[,,,,,,,,100]], //Gardevoir
	[39,Ar,"wanderer",[,,,,,,,,100]], //Jigglypuff

	{
		group:['Area 2',,,,'Área 2'],encounters:[
			[824,Ar,"hidden",30],
			[427,Ar,"hidden",30],
			[39,Ar,"hidden",[30,15,15,15,,,15,30,30]],
			[440,Ar,"hidden",10],
			[686,Ar,"hidden",[,15]],
			[403,Ar,"hidden",[,,15,15]],
			[753,Ar,"hidden",[,,,,,,15]],
			[819,Ar,"shake_tree",70],
			[840,Ar,"shake_tree",30],
			[129,Ar,"fish",50],
			[746,Ar,"fish",40],
			[781,Ar,"fish",10]
		]
	},

	generateRaidDen('A20',109,110),
	generateRaidDen('A21',154,145),
	generateRaidDen('A22',105,106),
	generateRaidDen('A23',125,126),
	generateRaidDen('A24',119,120),
	generateRaidDen('A25',135,136)
]},
{name:['Challenge Beach',,,,'Playa Desafío'],encounters:[ //908A69718CA37D65
	[81,Ar,"overworld",[56,36,36,36,,,36,56,56]],
	[54,Ar,"overworld",32],
	[702,Ar,"overworld",5],
	[877,Ar,"overworld",5],
	[113,Ar,"overworld",[2,2,2,2,,,2,2]],
	[686,Ar,"overworld",[,20]],
	[403,Ar,"overworld",[,,20,20]],
	[753,Ar,"overworld",[,,,,,,20]],
	[242,Ar,"overworld",[,,,,,,,,2]],
	
	[120,Ar,"underground",100],

	[72,Ar,"surf",[50,35,35,35,,,50,50,35]],
	[278,Ar,"surf",50],
	[73,Ar,"surf",[,15]],
	[279,Ar,"surf",[,,15,15]],
	[425,Ar,"overworld",[,,,,,,,,15]],

	[428,Ar,"wanderer",[100,,,,,,,100,100]], //Lopunny
	[764,Ar,"wanderer",[100,,,,,,100,,100]], //Comfey
	[279,Ar,"wanderer"], //Pelipper
	[834,Ar,"wanderer",[100,100,,100,,,100,100]], //Drednaw
	[877,Ar,"wanderer",[100,100,100,100]], //Morpeko
	[702,Ar,"wanderer",[100,,100,100,,,,100]], //Dedenne
	[183,Ar,"wanderer",[100,,,,,,,100]], //Marill
	[845,Ar,"wanderer",[100,100,100,,,,100,100,100]], //Cramorant
	[99,Ar,"wanderer",[100,,100,,,,100,100]], //Kingler
	[121,Ar,"wanderer"], //Starmie
	[224,Ar,"wanderer_surf",[100,,,,,,100,100]], //Octillery
	[130,Ar,"wanderer_surf",[100,,100,,,,100,100]], //Gyarados
	[73,Ar,"wanderer_surf",[100,100,100,,,,100,100]], //Tentacruel
	[847,Ar,"wanderer_surf",[100,,100,100,,,100,100,100]], //Barraskewda
	[452,Ar,"wanderer",[,100,100]], //Drapion
	[687,Ar,"wanderer",[,100,100]], //Malamar
	[342,Ar,"wanderer",[,100,100]], //Crawdaunt
	[426,Ar,"wanderer",[,100,,,,,,,100]], //Drifblim
	[528,Ar,"wanderer",[,100]], //Swoobat
	[748,Ar,"wanderer",[,100,100,100,,,,,100]], //Toxapex
	[593,Ar,"wanderer_surf",[,100,100,,,,,,100]], //Jellicent
	[342,Ar,"wanderer_surf",[,100]], //Crawdaunt
	[768,Ar,"wanderer",[,,100]], //Golisopod
	[91,Ar,"wanderer_surf",[,,100,,,,,,100]], //Cloyster
	[82,Ar,"wanderer",[,,,100]], //Magneton
	[26,Ar,"wanderer",[,,,100]], //Raichu
	[55,Ar,"wanderer",[,,,100,,,100]], //Golduck
	[405,Ar,"wanderer",[,,,100]], //Luxray
	[462,Ar,"wanderer",[,,,100]], //Magnezone
	[171,Ar,"wanderer_surf",[,,,100,,,,,100]], //Lanturn
	[549,Ar,"wanderer",[,,,,,,100]], //Lilligant
	[754,Ar,"wanderer",[,,,,,,100]], //Lurantis
	[662,Ar,"wanderer",[,,,,,,100]], //Fletchinder
	[637,Ar,"wanderer",[,,,,,,100]], //Volcarona
	[40,Ar,"wanderer",[,,,,,,,,100]], //Wigglytuff
	[184,Ar,"wanderer",[,,,,,,,,100]], //Azumarill

	generateRaidDen('A26',113,114),
	generateRaidDen('A27',135,136),
	generateRaidDen('A28',105,106),
	generateRaidDen('A29',123,124),
	generateRaidDen('A30',117,118),
	generateRaidDen('A31',137,138),
	generateRaidDen('A32',103,104),
	generateRaidDen('A33',127,128)
]},
{name:['Brawlers\' Cave',,,,'Cueva Contienda'],encounters:[ //908A68718CA37BB2
	[293,Ar,"overworld",56],
	[527,Ar,"overworld",16],
	[60,Ar,"overworld",[16,16,16,16,,,16]],
	[298,Ar,"overworld",5],
	[108,Ar,"overworld",5],
	[113,Ar,"overworld",[2,2,2,2,,,2,2]],
	[54,Ar,"overworld",[,,,,,,,16,16]],
	[242,Ar,"overworld",[,,,,,,,,2]],

	[60,Ar,"surf",50],
	[339,Ar,"surf",50],

	[62,Ar,"wanderer"], //Poliwrath
	[294,Ar,"wanderer"], //Loudred
	[528,Ar,"wanderer"], //Swoobat
	[621,Ar,"wanderer"], //Druddigon
	[55,Ar,"wanderer"], //Golduck
	[526,Ar,"wanderer"], //Gigalith
	[340,Ar,"wanderer_surf"], //Whiscash

	generateRaidDen('A34',129,130)
]},
{name:['Challenge Road',,,,'Ruta Desafío'],encounters:[ //908A67718CA379FF
	[524,Ar,"overworld",[56,36,36,36,,,36,36,56]],
	[619,Ar,"overworld",16],
	[757,Ar,"overworld",16],
	[227,Ar,"overworld",5],
	[744,Ar,"overworld",5],
	[113,Ar,"overworld",[2,2,2,2,,,2,2]],
	[624,SwAr,"overworld",[,10]],
	[782,SwAr,"overworld",[,10]],
	[403,Ar,"overworld",[,,20,20]],
	[661,Ar,"overworld",[,,,,,,20]],
	[843,SwAr,"overworld",[,,,,,,,10]],
	[559,SwAr,"overworld",[,,,,,,,10]],
	[242,Ar,"overworld",[,,,,,,,,2]],
	[824,Ar,"hidden",30],
	[524,Ar,"hidden",30],
	[619,Ar,"hidden",[30,15,15,15,,,15,15,30]],
	[440,Ar,"hidden",10],
	[624,Ar,"hidden",[,15]],
	[403,Ar,"hidden",[,,15,15]],
	[661,Ar,"hidden",[,,,,,,15]],
	[843,Ar,"hidden",[,,,,,,,15]],
	[624,ShAr,"overworld",[,20]],
	[843,ShAr,"overworld",[,,,,,,,20]],

	[620,Ar,"wanderer",[100]], //Mienshao
	[745,Ar,"wanderer",[100,100]], //Lycanroc
	[744,SwAr,"wanderer",[100,100]], //Rockruff
	[227,Ar,"wanderer",[100,,100,,,,100,100]], //Skarmory
	[744,ShAr,"wanderer",[100,100,,,,,100,,100]], //Rockruff
	[625,Ar,"wanderer",[,100]], //Bisharp
	[628,SwAr,"wanderer",[,100]], //Braviary
	[630,ShAr,"wanderer",[,100]], //Mandibuzz
	[560,SwAr,"wanderer",[,,100,100]], //Scrafty
	[454,ShAr,"wanderer",[,,100,100]], //Toxicroak
	[82,Ar,"wanderer",[,,,100]], //Magneton
	[758,Ar,"wanderer",[,,,,,,100]], //Salazzle
	[127,SwAr,"wanderer",[,,,,,,100]], //Pinsir
	[782,SwAr,"wanderer",[,,,,,,100,100,100]], //Jangmo-o
	[214,ShAr,"wanderer",[,,,,,,100]], //Heracross
	[558,Ar,"wanderer",[,,,,,,,100]], //Crustle
	[212,Ar,"wanderer",[,,,,,,,100]], //Scizor
	[475,Ar,"wanderer",[,,,,,,,,100]], //Gallade
	[426,Ar,"wanderer",[,,,,,,,,100]], //Drifblim

	generateRaidDen('A35',123,124),
	generateRaidDen('A36',156,157),
	generateRaidDen('A37',107,108),
	generateRaidDen('A38',121,122)
]},
{name:['Courageous Cavern',,,,'Cueva Tenacidad'],encounters:[ //908A66718CA3784C
	[833,Ar,"overworld",56],
	[527,Ar,"overworld",16],
	[767,Ar,"overworld",16],
	[871,Ar,"overworld",5],
	[557,Ar,"overworld",5],
	[113,Ar,"overworld",[2,2,2,2,,,2,2]],
	[242,Ar,"overworld",[,,,,,,,,2]],
	[833,Ar,"hidden",100],
	[129,Ar,"fish",50],
	[90,Ar,"fish",40],
	[91,Ar,"fish",10],

	[72,Ar,"surf",60],
	[852,Ar,"surf",40],

	[558,Ar,"wanderer"], //Crustle
	[621,Ar,"wanderer"], //Druddigon
	[768,Ar,"wanderer"], //Golisopod
	[528,Ar,"wanderer"], //Swoobat
	[834,Ar,"wanderer"], //Drednaw
	[73,Ar,"wanderer_surf"], //Tentacruel
	[340,Ar,"wanderer_surf"], //Whiscash

	generateRaidDen('A39',103,104),
	generateRaidDen('A40',135,148),
	generateRaidDen('A41',127,128),
	generateRaidDen('A42',129,130),
	generateRaidDen('A43',133,134),
	generateRaidDen('A44',101,102)
]},
{name:['Loop Lagoon',,,,'Bahía Circular'],encounters:[ //908A6D718CA38431
	[852,Ar,"overworld",[56,36,36,36,,,36,56,36]],
	[278,Ar,"overworld",16],
	[747,Ar,"overworld",16],
	[871,Ar,"overworld",5],
	[557,Ar,"overworld",5],
	[113,Ar,"overworld",[2,2,2,2,,,2,2]],
	[686,Ar,"overworld",[,20]],
	[98,Ar,"overworld",[,,20,20]],
	[661,Ar,"overworld",[,,,,,,20]],
	[425,Ar,"overworld",[,,,,,,,,20]],
	[242,Ar,"overworld",[,,,,,,,,2]],
	[824,Ar,"hidden",30],
	[852,Ar,"hidden",30],
	[278,Ar,"hidden",[30,15,15,15,,,15,30,15]],
	[440,Ar,"hidden",10],
	[686,Ar,"hidden",[,15]],
	[98,Ar,"hidden",[,,15,15]],
	[661,Ar,"hidden",[,,,,,,15]],
	[425,Ar,"hidden",[,,,,,,,,15]],
	[819,Ar,"shake_tree",70],
	[840,Ar,"shake_tree",30],
	[129,Ar,"fish",50],
	[90,Ar,"fish",40],
	[91,Ar,"fish",10],
	
	[769,Ar,"underground",100],

	[72,Ar,"surf",[45,30,30,30,,,30,45,30]],
	[278,Ar,"surf",30],
	[852,Ar,"surf",25],
	[73,Ar,"surf",[,15]],
	[279,Ar,"surf",[,,15,15]],
	[662,Ar,"surf",[,,,,,,15]],
	[425,Ar,"surf",[,,,,,,,,15]],

	[834,Ar,"wanderer",[100,,,,,,100,100]], //Drednaw
	[871,Ar,"wanderer",[100,,100,100,,,,,100]], //Pincurchin
	[853,Ar,"wanderer",[100,100,,,,,100,100,100]], //Grapploct
	[65,Ar,"wanderer",[100,,100,,,,,100]], //Alakazam
	[744,Ar,"wanderer",[100]], //Rockruff
	[130,Ar,"wanderer_surf",[100,,100,100,,,100,100]], //Gyarados
	[73,Ar,"wanderer_surf",[100,100,100,,,,100,100]], //Tentacruel
	[224,Ar,"wanderer_surf",[100,,,,,,100,100]], //Octillery
	[687,Ar,"wanderer",[,100,100]], //Malamar
	[748,Ar,"wanderer",[,100,100,,,,,,100]], //Toxapex
	[770,Ar,"wanderer",[,100,,,,,,100,100]], //Palossand
	[571,Ar,"wanderer",[,100,,,,,,,100]], //Zoroark
	[593,Ar,"wanderer_surf",[,100,,,,,,,100]], //Jellicent
	[279,Ar,"wanderer",[,,100]], //Pelipper
	[91,Ar,"wanderer_surf",[,,100]], //Cloyster
	[404,Ar,"wanderer",[,,,100]], //Luxio
	[462,Ar,"wanderer",[,,,100]], //Magnezone
	[405,Ar,"wanderer",[,,,100]], //Luxray
	[171,Ar,"wanderer_surf",[,,,100]], //Lanturn
	[636,Ar,"wanderer",[,,,,,,100,100]], //Larvesta
	[663,Ar,"wanderer",[,,,,,,100]], //Talonflame
	[40,Ar,"wanderer",[,,,,,,,,100]], //Wigglytuff

	generateRaidDen('A45',113,114),
	generateRaidDen('A46',131,151),
	generateRaidDen('A47',137,138),
	generateRaidDen('A48',107,108)
]},
{name:['Training Lowlands',,,,'Llano Entrenamiento'],encounters:[ //908A6C718CA3827E
	[824,Ar,"hidden",30],
	[506,Ar,"hidden",[60,45,45,45,,,45,45,60]],
	[440,Ar,"hidden",10],
	[686,Ar,"hidden",[,15]],
	[403,Ar,"hidden",[,,15,15]],
	[753,Ar,"hidden",[,,,,,,15]],
	[843,Ar,"hidden",[,,,,,,,15]],
	[819,Ar,"shake_tree",70],
	[840,Ar,"shake_tree",30],
	[129,Ar,"fish",50],
	[318,Ar,"fish",40],
	[319,Ar,"fish",10],
	
	[506,Ar,"overworld",[56,36,36,36,,,36,36,56]],
	[128,Ar,"overworld",16],
	[241,Ar,"overworld",16],
	[123,Ar,"overworld",5],
	[127,SwAr,"overworld",5],
	[113,Ar,"overworld",[2,2,2,2,,,2,2]],
	[686,Ar,"overworld",[,20]],
	[403,Ar,"overworld",[,,20,20]],
	[753,Ar,"overworld",[,,,,,,20]],
	[843,Ar,"overworld",[,,,,,,,20]],
	[242,Ar,"overworld",[,,,,,,,,2]],
	[214,ShAr,"overworld",5],
	
	[120,Ar,"underground",100],

	[341,Ar,"surf",45],
	[846,Ar,"surf",45],
	[845,Ar,"surf",10],

	[508,Ar,"wanderer",[100]], //Stoutland
	[115,Ar,"wanderer",[100,100]], //Kangaskhan
	[123,Ar,"wanderer",[100,,,,,,100]], //Scyther
	[127,SwAr,"wanderer",[100,,,,,,100]], //Pinsir
	[128,Ar,"wanderer"], //Tauros
	[507,Ar,"wanderer",[100,,,,,,,,100]], //Herdier
	[55,Ar,"wanderer",[100,100,100,100,,,100]], //Golduck
	[241,Ar,"wanderer",[100,100,,,,,100]], //Miltank
	[99,Ar,"wanderer",[100,100,100,100,,,100,100]], //Kingler
	[214,ShAr,"wanderer",[100,,,,,,100]], //Heracross
	[847,Ar,"wanderer_surf",[100,,100,100,,,100,100,100]], //Barraskewda
	[625,Ar,"wanderer",[,100]], //Bisharp
	[452,Ar,"wanderer",[,100,,,,,100]], //Drapion
	[528,Ar,"wanderer",[,100]], //Swoobat
	[588,Ar,"wanderer",[,100]], //Karrablast
	[687,Ar,"wanderer",[,100,100]], //Malamar
	[342,Ar,"wanderer_surf",[,100]], //Crawdaunt
	[279,Ar,"wanderer",[,,100]], //Pelipper
	[616,Ar,"wanderer",[,,100]], //Shelmet
	[560,SwAr,"wanderer",[,,100,100]], //Scrafty
	[454,ShAr,"wanderer",[,,100,100]], //Toxicroak
	[405,Ar,"wanderer",[,,,100]], //Luxray
	[404,Ar,"wanderer",[,,,100]], //Luxio
	[82,Ar,"wanderer",[,,,100]], //Magneton
	[617,Ar,"wanderer",[,,,100]], //Accelgor
	[549,Ar,"wanderer",[,,,,,,100]], //Lilligant
	[662,Ar,"wanderer",[,,,,,,100]], //Fletchinder
	[663,Ar,"wanderer",[,,,,,,100]], //Talonflame
	[212,Ar,"wanderer",[,,,,,,,100]], //Scizor
	[558,Ar,"wanderer",[,,,,,,,100]], //Crustle
	[227,Ar,"wanderer",[,,,,,,,100]], //Skarmory
	[589,Ar,"wanderer",[,,,,,,,100]], //Escavalier
	[782,SwAr,"wanderer",[,,,,,,,100]], //Jangmo-o
	[40,Ar,"wanderer",[,,,,,,,,100]], //Wigglytuff
	[764,Ar,"wanderer",[,,,,,,,,100]], //Comfey
	[426,Ar,"wanderer",[,,,,,,,,100]], //Drifblim
	[184,Ar,"wanderer",[,,,,,,,,100]], //Azumarill
	[282,Ar,"wanderer",[,,,,,,,,100]], //Gardevoir

	generateRaidDen('A49',119,120),
	generateRaidDen('A50',154,145),
	generateRaidDen('A51',117,118),
	generateRaidDen('A52',115,116),
	generateRaidDen('A53',111,112),
	generateRaidDen('A54',109,149),
	generateRaidDen('A55',101,102)
]},
{name:['Warm-Up Tunnel',,,,'Gruta Calentamiento'],encounters:[ //90875F718CA13690
	[27,Ar,"overworld",56],
	[104,Ar,"overworld",32],
	[324,Ar,"overworld",5],
	[115,Ar,"overworld",5],
	[113,Ar,"overworld",[2,2,2,2,,,2,2]],
	[242,Ar,"overworld",[,,,,,,,,2]]
]},
{name:['Potbottom Desert',,,,'Cuenca Arenosa'],encounters:[ //908760718CA13843
	[551,Ar,"overworld",[56,36,36,56,,,36,36,56]],
	[111,Ar,"overworld",32],
	[324,Ar,"overworld",5],
	[627,SwAr,"overworld",5],
	[113,Ar,"overworld",[2,2,2,2,,,2,2]],
	[624,SwAr,"overworld",[,10]],
	[782,SwAr,"overworld",[,10]],
	[403,Ar,"overworld",[,,20]],
	[661,Ar,"overworld",[,,,,,,20]],
	[843,SwAr,"overworld",[,,,,,,,10]],
	[559,SwAr,"overworld",[,,,,,,,10]],
	[242,Ar,"overworld",[,,,,,,,,2]],
	[629,ShAr,"overworld",5],
	[624,ShAr,"overworld",[,20]],
	[843,ShAr,"overworld",[,,,,,,,20]],

	[464,Ar,"wanderer",[100,,,,,,100,100,100]], //Rhyperior
	[105,Ar,"wanderer",[100,,,,,,100,,100]], //Marowak
	[112,Ar,"wanderer",[100,,,,,,100,100]], //Rhydon
	[844,Ar,"wanderer",[100,,,,,,100,,100]], //Sandaconda
	[628,SwAr,"wanderer"], //Braviary
	[630,ShAr,"wanderer"], //Mandibuzz
	[553,Ar,"wanderer",[,100,100,100]], //Krookodile
	[552,Ar,"wanderer",[,100,100,100]], //Krokorok
	[324,Ar,"wanderer",[,,,,,,100,,100]], //Torkoal
	[637,Ar,"wanderer",[,,,,,,100]], //Volcarona
	[28,Ar,"wanderer",[,,,,,,,100]], //Sandslash

	generateRaidDen('A56',103,150),
	generateRaidDen('A57',113,114),
	generateRaidDen('A58',115,116)
]},
{name:['Workout Sea',,,,'Mar Gimnástico'],encounters:[ //909170718CA9A7F8
	[132,Ar,"overworld",82],
	[102,Ar,"overworld",16],
	[113,Ar,"overworld",[2,2,2,2,,,2,2]],
	[242,Ar,"overworld",[,,,,,,,,2]],
	[824,Ar,"hidden",30],
	[132,Ar,"hidden",30],
	[102,Ar,"hidden",30],
	[440,Ar,"hidden",10],
	[819,Ar,"shake_tree",70],
	[840,Ar,"shake_tree",30],
	[129,Ar,"fish",50],
	[223,Ar,"fish",40],
	[224,Ar,"fish",10],

	[278,Ar,"surf",30],
	[72,Ar,"surf",[28,27,28,21,,,28,28,27]],
	[458,Ar,"surf",[35,20,20,16,,,20,35,20]],
	[692,SwAr,"surf",5],
	[130,Ar,"surf",1],
	[693,SwAr,"surf",1],
	[73,Ar,"surf",[,15]],
	[593,Ar,"surf",[,1,,,,,,,1]],
	[279,Ar,"surf",[,,15,15]],
	[170,Ar,"surf",[,,,10]],
	[171,Ar,"surf",[,,,1]],
	[662,Ar,"surf",[,,,,,,15]],
	[425,Ar,"surf",[,,,,,,,,15]],
	[690,ShAr,"surf",5],
	[691,ShAr,"surf",1],
	
	[319,Ar,"surf",100],
	
	[321,Ar,"interact"], //Wailord

	[103,Ar,"wanderer",[100,,,,,,100]], //Exeggutor
	[132,Ar,"wanderer"], //Ditto
	[479,Ar,"wanderer"], //Rotom

	generateRaidDen('A59',155,146),
	generateRaidDen('A60',139,140),
	generateRaidDen('A61',152,153),
	generateRaidDen('A62',121,122),
	generateRaidDen('A63',109,110),
	generateRaidDen('A63',107,108),
	generateRaidDen('A64',131,132)
]},
{name:['Stepping-Stone Sea',,,,'Mar Andana'],encounters:[ //909173718CA9AD11
	[278,Ar,"overworld",82],
	[102,Ar,"overworld",16],
	[113,Ar,"overworld",[2,2,2,2,,,2,2]],
	[242,Ar,"overworld",[,,,,,,,,2]],
	[824,Ar,"hidden",30],
	[819,Ar,"hidden",30],
	[102,Ar,"hidden",30],
	[440,Ar,"hidden",10],
	[819,Ar,"shake_tree",60],
	[840,Ar,"shake_tree",30],
	[841,SwAr,"shake_tree",10],
	[129,Ar,"fish",60],
	[746,Ar,"fish",40],
	[842,ShAr,"shake_tree",10],
	
	[278,Ar,"surf",30],
	[72,Ar,"surf",[28,27,28,21,,,28,28,27]],
	[458,Ar,"surf",[15,,,,,,,15]],
	[592,Ar,"surf",[20,20,20,16,,,20,20,20]],
	[692,SwAr,"surf",5],
	[130,Ar,"surf",1],
	[693,SwAr,"surf",1],
	[73,Ar,"surf",[,15]],
	[593,Ar,"surf",[,1,,,,,,,1]],
	[279,Ar,"surf",[,,15,15]],
	[170,Ar,"surf",[,,,10]],
	[171,Ar,"surf",[,,,1]],
	[662,Ar,"surf",[,,,,,,15]],
	[425,Ar,"surf",[,,,,,,,,15]],
	[319,Ar,"surf",100],
	[690,ShAr,"surf",5],
	[691,ShAr,"surf",1],
	{
		group:['Area 2',,,,'Área 2'],encounters:[
			[819,Ar,"overworld",82],
			[102,Ar,"overworld",16],
			[113,Ar,"overworld",[2,2,2,2,,,2,2]],
			[242,Ar,"overworld",[,,,,,,,,2]]
		]
	},

	generateRaidDen('A65',103,104),
	generateRaidDen('A66',117,118),
	generateRaidDen('A67',155,146),
	generateRaidDen('A68',119,120),
	generateRaidDen('A69',129,130),
	generateRaidDen('A70',99,100),
	generateRaidDen('A71',127,128),
	generateRaidDen('A72',139,140),
	generateRaidDen('A73',107,108)
]},
{name:['Insular Sea',,,,'Mar Islejos'],encounters:[ //909172718CA9AB5E
	[824,Ar,"hidden",30],
	[278,Ar,"hidden",30],
	[102,Ar,"hidden",30],
	[440,Ar,"hidden",10],
	[819,Ar,"shake_tree",70],
	[840,Ar,"shake_tree",30],
	[129,Ar,"fish",60],
	[746,Ar,"fish",40],
	
	[278,Ar,"surf",30],
	[72,Ar,"surf",[28,27,28,21,,,28,28,27]],
	[458,Ar,"surf",[15,,,,,,,15]],
	[116,Ar,"surf",[20,20,20,16,,,20,20,20]],
	[692,SwAr,"surf",5],
	[130,Ar,"surf",1],
	[693,SwAr,"surf",1],
	[73,Ar,"surf",[,15]],
	[593,Ar,"surf",[,1,,,,,,,1]],
	[279,Ar,"surf",[,,15,15]],
	[170,Ar,"surf",[,,,10]],
	[171,Ar,"surf",[,,,1]],
	[662,Ar,"surf",[,,,,,,15]],
	[425,Ar,"surf",[,,,,,,,,15]],
	[319,Ar,"surf",100],
	[690,ShAr,"surf",5],
	[691,ShAr,"surf",1],

	[103,Ar,"wanderer",[100,,100,,,,100,100]], //Exeggutor
	[571,Ar,"wanderer",[,100]], //Zoroark
	[279,Ar,"wanderer",[,100,100,100]], //Pelipper
	[462,Ar,"wanderer",[,,,100]], //Magnezone
	[637,Ar,"wanderer",[,,,,,,100]], //Volcarona
	[65,Ar,"wanderer",[,,,,,,,,100]], //Alakazam
	[764,Ar,"wanderer",[,,,,,,,,100]], //Comfey

	generateRaidDen('A74',125,126),
	generateRaidDen('A75',99,100),
	generateRaidDen('A76',111,112),
	generateRaidDen('A77',139,140),
	generateRaidDen('A78',137,147)
]},
{name:['Honeycalm Sea',,,,'Mar Meloso'],encounters:[ //909175718CA9B077
	[415,Ar,"overworld",82],
	[548,Ar,"overworld",16],
	[113,Ar,"overworld",[2,2,2,2,,,2,2]],
	[242,Ar,"overworld",[,,,,,,,,2]],
	[824,Ar,"hidden",30],
	[415,Ar,"hidden",30],
	[548,Ar,"hidden",30],
	[440,Ar,"hidden",10],
	[129,Ar,"fish",60],
	[746,Ar,"fish",40],

	[278,Ar,"surf",30],
	[72,Ar,"surf",[28,27,28,21,,,28,28,27]],
	[458,Ar,"surf",[15,,,,,,,15]],
	[320,Ar,"surf",[20,20,20,16,,,20,20,20]],
	[692,SwAr,"surf",5],
	[130,Ar,"surf",1],
	[693,SwAr,"surf",1],
	[73,Ar,"surf",[,15]],
	[593,Ar,"surf",[,1,,,,,,,1]],
	[279,Ar,"surf",[,,15,15]],
	[170,Ar,"surf",[,,,10]],
	[171,Ar,"surf",[,,,1]],
	[662,Ar,"surf",[,,,,,,15]],
	[425,Ar,"surf",[,,,,,,,,15]],
	[690,ShAr,"surf",5],
	[691,ShAr,"surf",1],
	
	[117,Ar,"wanderer_surf",[100,100,100,,,,100,100,100]], //Seadra
	[230,Ar,"wanderer_surf",[,,,100]], //Kingdra

	generateRaidDen('A79',131,132),
	generateRaidDen('A80',123,124),
	generateRaidDen('A81',121,122),
	generateRaidDen('A82',139,140),
	generateRaidDen('A83',105,106)
]},
{name:['Honeycalm Island',,,,'Isla Melosa'],encounters:[ //908DEC718CA691D5
	[72,Ar,"hidden",100],
	[129,Ar,"fish",60],
	[746,Ar,"fish",40],
	
	[278,Ar,"surf",30],
	[72,Ar,"surf",[28,27,28,21,,,28,28,27]],
	[458,Ar,"surf",[15,,,,,,,15]],
	[320,Ar,"surf",[20,20,20,16,,,20,20,20]],
	[692,SwAr,"surf",5],
	[130,Ar,"surf",1],
	[693,SwAr,"surf",1],
	[73,Ar,"surf",[,15]],
	[593,Ar,"surf",[,1,,,,,,,1]],
	[279,Ar,"surf",[,,15,15]],
	[170,Ar,"surf",[,,,10]],
	[171,Ar,"surf",[,,,1]],
	[662,Ar,"surf",[,,,,,,15]],
	[425,Ar,"surf",[,,,,,,,,15]],
	[319,Ar,"surf",100],
	[690,ShAr,"surf",5],
	[691,ShAr,"surf",1],

	[549,Ar,"wanderer",[100,,,,,,100,100]], //Lilligant
	[415,Ar,"wanderer",[,100,100,100]], //Combee
	[764,Ar,"wanderer",[,,,,,,,,100]], //Comfey

	generateRaidDen('A84',143,144) //all dens here are the same
	/*generateRaidDen('A85',143,144),
	generateRaidDen('A86',143,144),
	generateRaidDen('A87',143,144),
	generateRaidDen('A88',143,144),
	generateRaidDen('A89',143,144)*/
]},
{name:['Pokémon Home'],showAsGrid:true,encounters:[
	[alternateForm(25,1),,'transfer'],
	[alternateForm(25,2),,'transfer'],
	[alternateForm(25,3),,'transfer'],
	[alternateForm(25,4),,'transfer'],
	[alternateForm(25,5),,'transfer'],
	[alternateForm(25,6),,'transfer'],
	[alternateForm(25,7),,'transfer'],
	[alternateForm(422,0),,'transfer'],
	[alternateForm(423,0),,'transfer'],
	[150,,'transfer'],
	[151,,'transfer'],
	[251,,'transfer'],
	[385,,'transfer'],
	[638,,'transfer'],
	[639,,'transfer'],
	[640,,'transfer'],
	[643,,'transfer'],
	[644,,'transfer'],
	[646,,'transfer'],
	[647,,'transfer'],
	[722,,'transfer'],
	[723,,'transfer'],
	[724,,'transfer'],
	[725,,'transfer'],
	[726,,'transfer'],
	[727,,'transfer'],
	[728,,'transfer'],
	[729,,'transfer'],
	[730,,'transfer'],
	[789,,'transfer'],
	[790,,'transfer'],
	[791,,'transfer'],
	[792,,'transfer'],
	[800,,'transfer'],
	[alternateForm(801,1),,'transfer'],
	[802,,'transfer'],
	[807,,'transfer'],
	[808,,'transfer'],
	[809,,'transfer']
]}
];

function generateRaidDen2(pool, encounterType, encounters, defaultGame){
	for(var i=0; i<pool.length; i++){
		var poke=pool[i][0];
		var ratios=pool[i];
		for(var j=1; j<ratios.length; j++){
			if(typeof ratios[j]==='number'){
				encounters.push([poke, defaultGame, encounterType+'_'+j+'s', ratios[j]])
			}else if(typeof ratios[j]!=='undefined'){
				if(ratios[j][0])
					encounters.push([poke, defaultGame|Sw, encounterType+'_'+j+'s', ratios[j][0]])
				if(ratios[j][1])
					encounters.push([poke, defaultGame|Sh, encounterType+'_'+j+'s', ratios[j][1]])
			}
		}
	}
}
function generateRaidDen(index, pool1, pool2){
	var group={group:['Raid Den #'+index,,,,'Nido #'+index], encounters:[], showAsGrid:true}

	var game=typeof index==='string'?Ar:0;
	generateRaidDen2(RAID_POOLS[pool1], 'raid', group.encounters, game);
	generateRaidDen2(RAID_POOLS[pool2], 'rare_raid', group.encounters, game);

	group.encounters=group.encounters.sort(sortDenByRate).sort(sortDenByStars);
	
	return group
}


function sortDenByRate(a,b){
	return b[3]-a[3]
}
function sortDenByStars(a,b){
	if(a[2]<b[2])
		return -1;
	if(a[2]>b[2])
		return 1;
	return 0;
}