const Sw=1<<0;
const Sh=1<<1;
const Ar=1<<2;
const Cr=1<<3;
const SwSh=Sw|Sh;
const SwAr=Sw|Ar;
const ShAr=Sh|Ar;
const SwCr=Sw|Cr;
const ShCr=Sh|Cr;


const RAID_POOLS=[,
[ //0x17428356dc6109f6
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
],[ //0x17428256dc610843
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
],[ //0x17428156dc610690
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
],[ //0x17428856dc611275
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
],[ //0x17428756dc6110c2
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
],[ //0x17428656dc610f0f
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
],[ //0x17428556dc610d5c
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
],[ //0x17428c56dc611941
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
],[ //0x17428b56dc61178e
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
],[ //0x173efe56dc5df220
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
],[ //0x173eff56dc5df3d3
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
],[ //0x173f0056dc5df586
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
],[ //0x173f0156dc5df739
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
],[ //0x173f0256dc5df8ec
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
],[ //0x173f0356dc5dfa9f
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
],[ //0x173f0456dc5dfc52
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
],[ //0x173f0556dc5dfe05
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
],[ //0x173f0656dc5dffb8
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
],[ //0x173f0756dc5e016b
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
],[ //0x17491056dc66653b
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
],[ //0x17490f56dc666388
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
],[ //0x17491256dc6668a1
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
],[ //0x17491156dc6666ee
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
],[ //0x17491456dc666c07
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
],[ //0x17491356dc666a54
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
],[ //0x17491656dc666f6d
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
],[ //0x17491556dc666dba
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
],[ //0x17490856dc6657a3
	[710,40,5,,,1], //Pumpkaboo
	[708,35], //Phantump
	[755,15,35], //Morelull
	[315,,25,40], //Roselia
	[756,,,20,35], //Shiinotic
	[556,,,20,25,30], //Maractus
	[709,,,20,25,30], //Trevenant
	[711,,,,15,29], //Gourgeist
	[781,,,,,10] //Dhelmise
],[ //0x17490756dc6655f0
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
],[ //0x17458a56dc634bb2
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
],[ //0x17458b56dc634d65
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
],[ //0x17458856dc63484c
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
],[ //0x17458956dc6349ff
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
],[ //0x17458656dc6344e6
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
],[ //0x17458756dc634699
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
],[ //0x17458456dc634180
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
],[ //0x17458556dc634333
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
],[ //0x17459256dc63594a
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
],[ //0x17459356dc635afd
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
],[ //0x17501c56dc6c984d
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
],[ //0x17501b56dc6c969a
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
],[ //0x17501a56dc6c94e7
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
],[ //0xba805c67100fd3f7
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
],[ //0xba805d67100fd5aa
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
],[ //0xba805e67100fd75d
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
],[ //0xba805767100fcb78
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
],[ //0xba805867100fcd2b
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
],[ //0xba805967100fcede
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
],[ //0xba805a67100fd091
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
],[ //0xba805367100fc4ac
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
],[ //0xba805467100fc65f
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
],[ //0xba83e1671012ebcd
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
],[ //0xba83e0671012ea1a
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
],[ //0xba83df671012e867
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
],[ //0xba83de671012e6b4
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
],[ //0xba83dd671012e501
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
],[ //0xba83dc671012e34e
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
],[ //0xba83db671012e19b
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
],[ //0xba83da671012dfe8
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
],[ //0xba83d9671012de35
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
],[ //0xba83d8671012dc82
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
],[ //0xba8747671015cef6
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
],[ //0xba8748671015d0a9
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
],[ //0xba8745671015cb90
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
],[ //0xba8746671015cd43
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
],[ //0xba874b671015d5c2
	[132,25,25,25,25,25] //Ditto
],[ //0xba874c671015d775
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
],[ //0xba8749671015d25c
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
],[ //0xba874a671015d40f
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
],[ //0xba874f671015dc8e
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
],[ //0xba8750671015de41
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
],[ //0xba8a4d6710180eff
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
],[ //0xba8a4c6710180d4c
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
],[ //0xba8a4f6710181265
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
],[ //0xba8a4e67101810b2
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
],[ //0xba8a496710180833
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
],[ //0x4500a0d99cf571b7
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
],[ //0x4500a1d99cf5736a
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
],[ //0x4500a2d99cf5751d
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
],[ //0x45009bd99cf56938
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
],[ //0x45009cd99cf56aeb
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
],[ //0x45009dd99cf56c9e
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
],[ //0x45009ed99cf56e51
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
],[ //0x450097d99cf5626c
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
],[ //0x450098d99cf5641f
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
],[ //0x450425d99cf8898d
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
],[ //0x450424d99cf887da
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
],[ //0x450423d99cf88627
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
],[ //0x450422d99cf88474
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
],[ //0x450421d99cf882c1
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
],[ //0x450420d99cf8810e
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
],[ //0x45041fd99cf87f5b
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
],[ //0x45041ed99cf87da8
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
],[ //0x68dd8d7d07e099d7
	[819,8,8,8,25,10] //Skwovet
],[ //0x68dd8e7d07e09b8a
	[819,8,8,8,25,10] //Skwovet
],[ //0x68dd8f7d07e09d3d
	[819,8,8,8,25,10] //Skwovet
],[ //0x68dd887d07e09158
	[819,100,100,100,25,10] //Skwovet
],[ //0x22ae28e80f536e8d
	[819,10,20,20,25,10] //Skwovet
],[ //0x21f6c965b3513d5e
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
],[ //0xd8f100cde5822516
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
],[ //0x21f6c865b3513bab
	[113,,,5,5,5], //Chansey
	[293,60,30], //Whismur
	[108,40,25,15,25], //Lickitung
	[241,,25,30,15,25], //Miltank
	[294,,20,25,25], //Loudred
	[626,,,,15,20], //Bouffalant
	[128,,,,15,20], //Tauros
	[295,,,,,15], //Exploud
	[463,,,,,15] //Lickilicky
],[ //0xd8f0ffcde5822363
	[242,,,5,5,5], //Blissey
	[293,60,30], //Whismur
	[128,40,25,,15,20], //Tauros
	[108,,25,30], //Lickitung
	[241,,20,25,25], //Miltank
	[626,,,15,25], //Bouffalant
	[295,,,,15,20], //Exploud
	[573,,,,15,20], //Cinccino
	[463,,,,,15] //Lickilicky
],[ //0x60ef1d711ae30cf0
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
],[ //0xc80756327d5de060
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
],[ //0x6e6b46639f77f0c8
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
],[ //0x1c1962488c012ee8
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
],[ //0xa178d4769765abac
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
],[ //0xf4a830850f51d034
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
],[ //0x6d015b7858eb5119
	[113,,,5,5,5], //Chansey
	[127,[60,0],[20,0],[25,0],[15,0],[20,0]], //Pinsir
	[557,40,25], //Dwebble
	[825,,25,30], //Dottler
	[558,,,15,25], //Crustle
	[123,,,,15,20], //Scyther
	[826,,,,,15], //Orbeetle
	[212,,,,,15], //Scizor
	[214,[0,60],[0,20],[0,25],[0,15],[0,20]] //Heracross
],[ //0x53441b80e563ef1f
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
],[ //0x2998f2424d0353eb
	[113,,,5,5,5], //Chansey
	[590,60,30], //Foongus
	[753,40,25], //Fomantis
	[548,,25,30], //Petilil
	[754,,20,25,15,20], //Lurantis
	[591,,,25,25,15], //Amoonguss
	[114,,,15,25], //Tangela
	[549,,,,15,20], //Lilligant
	[465,,,,,15] //Tangrowth
],[ //0xae57b2a84974c3a1
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
],[ //0x5b72bfac0ff3f885
	[113,,,5,5,5], //Chansey
	[661,60,30], //Fletchling
	[757,40,20,25], //Salandit
	[636,,25,15,25], //Larvesta
	[662,,,25,25], //Fletchinder
	[324,,,,15,15], //Torkoal
	[663,,,,15,20], //Talonflame
	[758,,,,15,20], //Salazzle
	[637,,,,,15] //Volcarona
],[ //0x316e6b5e74bc7aa3
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
],[ //0x79b25a4f80255a38
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
],[ //0xc8ea8c1618ab0a58
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
],[ //0xb8a5e528bfee71bc
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
],[ //0xdf017f3fefba2704
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
],[ //0x5c9a35ca819b38c8
	[113,,,5,5,5], //Chansey
	[543,60,30], //Venipede
	[451,40,25], //Skorupi
	[72,,20,25], //Tentacool
	[544,,,15,25], //Whirlipede
	[452,,,,15,20], //Drapion
	[73,,,,15,15], //Tentacruel
	[545,,,,,15] //Scolipede
],[ //0xf9222e1acdf486e8
	[242,,,5,5,5], //Blissey
	[747,60,30], //Mareanie
	[211,40,25,25,25], //Qwilfish
	[544,,20,25], //Whirlipede
	[591,,,15,25], //Amoonguss
	[748,,,,15,20], //Toxapex
	[545,,,,15,15], //Scolipede
	[452,,,,15,20], //Drapion
	[alternateForm(110,1),,,,,20] //Weezing-1
],[ //0xc63dec8a65b5c540
	[113,,,5,5,5], //Chansey
	[318,60,25,30], //Carvanha
	[624,40,25], //Pawniard
	[570,,20,25], //Zorua
	[319,,,25,25,15], //Sharpedo
	[687,,,15,15,20], //Malamar
	[452,,,,15,25], //Drapion
	[625,,,,15,20], //Bisharp
	[571,,,,,15] //Zoroark
],[ //0x6aebee2a2d6d8470
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
],[ //0xbc3d01fff751cde4
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
],[ //0x6f948f09933cdfc
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
],[ //0xe2c6e5e725342f4a
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
],[ //0x89955cc3a594e51a
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
],[ //0x4c12cee7784c8b8
	[113,,,5,5,5], //Chansey
	[769,60,30], //Sandygast
	[592,40,25], //Frillish
	[104,,25,30], //Cubone
	[425,,20,25], //Drifloon
	[593,,,25,15,20], //Jellicent
	[426,,,15,15,20], //Drifblim
	[770,,,,15,15], //Palossand
	[105,,,,,15] //Marowak
],[ //0x7288f0346fd3cdd8
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
],[ //0x50eaf4685fa07085
	[113,,,5,5,5], //Chansey
	[707,60,30,,15,20], //Klefki
	[81,40,20,25], //Magnemite
	[624,,25,30], //Pawniard
	[227,,,25,25,15], //Skarmory
	[82,,,15,15,25], //Magneton
	[625,,,,15,20], //Bisharp
	[462,,,,,15] //Magnezone
],[ //0xf9280759d6cc62a3
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
],[ //0xb0c9af2202b0a19e
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
],[ //0x3d6f1fcb3898d356
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
],[ //0x4257e50e1c471596
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
],[ //0xfe9697f9799c65be
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
],[ //0x4257e40e1c4713e3
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
],[ //0xfe9696f9799c640b
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
],[ //0x4257e30e1c471230
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
],[ //0xfe9695f9799c6258
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
],[ //0x4257ea0e1c471e15
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
],[ //0xfe969cf9799c6e3d
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
],[ //0xd4d5074d72c71271
	[440,25,20,25], //Happiny
	[113,,,20,15,20], //Chansey
	[242,,,,,15] //Blissey
],[ //0x9b45ce9bd57148e7
	[113,25,20,20,25], //Chansey
	[242,,,,15,15] //Blissey
],[ //0xea4c3915ea6f95a0
	[113,,,5,6,7], //Chansey
	[415,40,20,15,25], //Combee
	[416,,,,15,15] //Vespiquen
],[ //0x3ea9df3b7b2b5990
	[242,,,5,6,7], //Blissey
	[415,40,20,25], //Combee
	[416,,,15,15,15] //Vespiquen
],[ //0x4f1e561dd73ed3d8
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
],[ //0x4f1e591dd73ed8f1
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
],[ //0x4f1e581dd73ed73e
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
],[ //0x4f1e5b1dd73edc57
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
],[ //0x4f1e5a1dd73edaa4
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
],[ //0x4f1e5d1dd73edfbd
	[242,,,5,5,5], //Blissey
	[843,60,25,30], //Silicobra
	[529,40,20,25], //Drilbur
	[28,,,25,25], //Sandslash
	[552,,,15,25], //Krokorok
	[844,,,,15,25], //Sandaconda
	[553,,,,15,15], //Krookodile
	[530,,,,15,20], //Excadrill
	[alternateForm(844,1),,,,,10] //Sandaconda-1
],[ //0x4f1e5c1dd73ede0a
	[242,,,5,5,5], //Blissey
	[840,60,20,25], //Applin
	[761,40,25], //Bounsweet
	[420,,25,30], //Cherubi
	[762,,,25,25], //Steenee
	[841,,,[15,0],[15,0],[25,0]], //Flapple
	[820,,,,15,20], //Greedent
	[763,,,,,15], //Tsareena
	[alternateForm(841,1),,,,,[10,0]], //Flapple-1
	[842,,,[0,15],[0,15],[0,25]], //Appletun
	[alternateForm(842,1),,,,,[0,10]] //Appletun-1
],[ //0x40bdbe4f3bcbac86
	[113,,,5,5,5], //Chansey
	[132,25,25,20,20,20] //Ditto
],[ //0x9fdf11a0cde96b2e
	[242,,,5,5,5], //Blissey
	[132,25,25,20,20,20] //Ditto
],[ //0xdb8629cba3383296
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
],[ //0x6b37a94863bf68c0
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
],[ //0x5584521f1e549486
	[113,,,5,5,5], //Chansey
	[744,50,20,20,40], //Rockruff
	[alternateForm(744,1),,,5,5], //Rockruff-1
	[745,,,,[20,10],20], //Lycanroc
	[alternateForm(745,1),,,,[10,20],20], //Lycanroc-1
	[alternateForm(745,2),,,,,5] //Lycanroc-2
],[ //0x55846e1f1e54c41a
	[242,,,5,5,5], //Blissey
	[744,50,20,20,30], //Rockruff
	[alternateForm(744,1),,,15,15], //Rockruff-1
	[745,,,,[30,15],[40,35]], //Lycanroc
	[alternateForm(745,1),,,,[15,30],[35,40]], //Lycanroc-1
	[alternateForm(745,2),,,,5,20] //Lycanroc-2
],[ //0x2640fa844b19c3cf
	[531,,,5,5,5], //Audino
	[333,60,25,30], //Swablu
	[831,40,25], //Wooloo
	[446,,20,25], //Munchlax
	[820,,,25,25], //Greedent
	[832,,,15,15,20], //Dubwool
	[334,,,,15,20], //Altaria
	[143,,,,,15] //Snorlax
],[ //0x422f95fb66a95706
	[225,,,5,5,5], //Delibird
	[333,60,25,30], //Swablu
	[819,40,25], //Skwovet
	[820,,20,25,25], //Greedent
	[832,,,15,15,20], //Dubwool
	[334,,,,15,20], //Altaria
	[143,,,,,20], //Snorlax
	[alternateForm(143,1),,,,,15] //Snorlax-1
],[ //0x3a41c5c485d3edee
	[531,,,5,5,5], //Audino
	[240,60,25,30], //Magby
	[850,40,25], //Sizzlipede
	[631,,20,15,25], //Heatmor
	[608,,,25,25], //Lampent
	[126,,,,15,15], //Magmar
	[851,,,,15,20], //Centiskorch
	[609,,,,15,20], //Chandelure
	[467,,,,,15] //Magmortar
],[ //0x6c364ecc3616af63
	[225,,,5,5,5], //Delibird
	[240,40,25], //Magby
	[126,,25,25,25], //Magmar
	[631,,20,25], //Heatmor
	[851,,,15,25], //Centiskorch
	[609,,,,15,20], //Chandelure
	[38,,,,[15,0],[20,0]], //Ninetales
	[467,,,,15,20], //Magmortar
	[alternateForm(851,1),,,,,15], //Centiskorch-1
	[59,,,,[0,15],[0,20]] //Arcanine
],[ //0xf6389ad0bc9aaeb
	[531,,,5,5,5], //Audino
	[138,[60,0],[25,0],[30,0]], //Omanyte
	[349,40,20,25], //Feebas
	[340,,,25,25], //Whiscash
	[550,,,[15,0],[15,0],[20,0]], //Basculin
	[139,,,,[15,0],[25,0]], //Omastar
	[130,,,,15,20], //Gyarados
	[350,,,,,15], //Milotic
	[369,,,,,15], //Relicanth
	[140,[0,60],[0,25],[0,30]], //Kabuto
	[alternateForm(550,1),,,[0,15],[0,15],[0,20]], //Basculin-1
	[141,,,,[0,15],[0,25]] //Kabutops
],[ //0x277effbe0b116e4a
	[225,,,5,5,5], //Delibird
	[349,60,25,30], //Feebas
	[138,[40,0],[25,0]], //Omanyte
	[369,,20,25,15,20], //Relicanth
	[550,,,[25,0],[25,0]], //Basculin
	[99,,,15,25], //Kingler
	[139,,,,[15,0],[20,0]], //Omastar
	[350,,,,15,20], //Milotic
	[130,,,,,20], //Gyarados
	[alternateForm(99,1),,,,,15], //Kingler-1
	[140,[0,40],[0,25]], //Kabuto
	[alternateForm(550,1),,,[0,25],[0,25]], //Basculin-1
	[141,,,,[0,15],[0,20]] //Kabutops
],[ //0xe234e939402a736b
	[531,,,5,5,5], //Audino
	[239,60,25,30], //Elekid
	[595,40,25], //Joltik
	[871,,20,25,15,20], //Pincurchin
	[125,,,25,25,15], //Electabuzz
	[778,,,15,25], //Mimikyu
	[596,,,,15,25], //Galvantula
	[836,,,,15,20], //Boltund
	[466,,,,,15] //Electivire
],[ //0x3b3c0865d15b0aca
	[225,,,5,5,5], //Delibird
	[239,40,25], //Elekid
	[702,,25,30], //Dedenne
	[596,,20,25], //Galvantula
	[125,,,25,25], //Electabuzz
	[836,,,15,25], //Boltund
	[849,,,,[15,0],[20,0]], //Toxtricity
	[871,,,,15,20], //Pincurchin
	[466,,,,15,20], //Electivire
	[alternateForm(849,1),,,,[0,15],15] //Toxtricity-1
],[ //0x779e9eb99c1292c
	[531,,,5,5,5], //Audino
	[829,60,30], //Gossifleur
	[347,[40,0],[25,20],25,[25,0]], //Anorith
	[345,[0,40],[20,25],25,[0,25]], //Lileep
	[830,,,15,15,20], //Eldegoss
	[348,,,,[15,0],[25,15]], //Armaldo
	[752,,,,15,20], //Araquanid
	[598,,,,,15], //Ferrothorn
	[346,,,,[0,15],[15,25]] //Cradily
],[ //0x93a637943a964e41
	[225,,,5,5,5], //Delibird
	[347,[60,40],[25,20],[30,25]], //Anorith
	[345,[40,60],[20,25],[25,30]], //Lileep
	[752,,,25,25], //Araquanid
	[12,,,15,25], //Butterfree
	[348,,,,15,20], //Armaldo
	[346,,,,15,20], //Cradily
	[830,,,,15,20], //Eldegoss
	[alternateForm(12,1),,,,,15] //Butterfree-1
],[ //0x685db02aaedbcf61
	[531,,,5,5,5], //Audino
	[238,60,25,30], //Smoochum
	[alternateForm(554,1),[40,0],[25,0]], //Darumaka-1
	[698,,20,25], //Amaura
	[221,,,25,25], //Piloswine
	[460,,,15,25], //Abomasnow
	[124,,,,15,25], //Jynx
	[873,,,,15,20], //Frosmoth
	[alternateForm(555,2),,,,[15,0],[20,0]], //Darmanitan-2
	[699,,,,,15], //Aurorus
	[362,,,,,15], //Glalie
	[220,[0,40],[0,25]] //Swinub
],[ //0x2cd8cf9a88739f98
	[225,,,5,5,5], //Delibird
	[361,[60,40],[30,25]], //Snorunt
	[alternateForm(554,1),[40,0],[25,0]], //Darumaka-1
	[238,,25,30], //Smoochum
	[698,,20,25], //Amaura
	[362,,,25,25], //Glalie
	[460,,,15,25], //Abomasnow
	[124,,,,15,20], //Jynx
	[873,,,,15,20], //Frosmoth
	[alternateForm(555,2),,,,[15,0],[20,0]], //Darmanitan-2
	[699,,,,,20], //Aurorus
	[473,,,,,15] //Mamoswine
],[ //0x685dad2aaedbca48
	[531,,,5,5,5], //Audino
	[613,[60,0],[30,0]], //Cubchoo
	[363,40,25,30], //Spheal
	[712,,[20,0],[25,0]], //Bergmite
	[364,,,25,25], //Sealeo
	[615,,,15,25], //Cryogonal
	[584,,,,15,25], //Vanilluxe
	[614,,,,15,20], //Beartic
	[365,,,,15,20], //Walrein
	[713,,,,,15], //Avalugg
	[131,,,,,15], //Lapras
	[875,[0,60],[0,20],[0,25]] //Eiscue
],[ //0x12ad4e9a799417a5
	[225,,,5,5,5], //Delibird
	[131,60,30,,15,[15,20]], //Lapras
	[363,40,25], //Spheal
	[364,,20,25], //Sealeo
	[713,,,25,25], //Avalugg
	[615,,,15,25], //Cryogonal
	[365,,,,15,20], //Walrein
	[584,,,,15,20], //Vanilluxe
	[alternateForm(131,1),,,,,[0,15]] //Lapras-1
],[ //0x75319113c8c3b924
	[531,,,5,5,5], //Audino
	[532,60,30], //Timburr
	[622,40,25,30], //Golett
	[838,,20,25], //Carkol
	[533,,,25,25], //Gurdurr
	[623,,,15,15,15], //Golurk
	[534,,,,15,15], //Conkeldurr
	[839,,,,15,20] //Coalossal
],[ //0x314acb827c75109
	[225,,,5,5,5], //Delibird
	[870,60,30,25,25], //Falinks
	[236,40,25], //Tyrogue
	[533,,[25,20],[30,25]], //Gurdurr
	[alternateForm(83,1),,[20,0],[25,0]], //Farfetch’d-1
	[623,,,15,25], //Golurk
	[865,,,,[15,0],[20,0]], //Sirfetch’d
	[534,,,,15,20], //Conkeldurr
	[106,,,,[15,0],[20,0]], //Hitmonlee
	[237,,,,,20], //Hitmontop
	[alternateForm(68,1),,,,,[15,0]], //Machamp-1
	[107,,,,[0,15],[0,20]], //Hitmonchan
	[68,,,,,[0,15]] //Machamp
],[ //0x52a7dfe87897d15d
	[531,,,5,5,5], //Audino
	[29,[60,0],[25,20],[30,25]], //Nidoran♀
	[41,40,25], //Zubat
	[32,[0,60],[20,25],[25,30]], //Nidoran♂
	[30,,,[25,15],25], //Nidorina
	[33,,,[15,25],25], //Nidorino
	[31,,,,[15,0],15], //Nidoqueen
	[42,,,,15,20], //Golbat
	[34,,,,[0,15],15] //Nidoking
],[ //0xc88b8a5990a8ea5c
	[225,,,5,5,5], //Delibird
	[41,60,30], //Zubat
	[568,40,25], //Trubbish
	[30,,[25,0],[30,0]], //Nidorina
	[alternateForm(79,1),,20,25], //Slowpoke-1
	[42,,,25,25], //Golbat
	[569,,,15,25], //Garbodor
	[31,,,,15,20], //Nidoqueen
	[34,,,,15,20], //Nidoking
	[169,,,,,20], //Crobat
	[alternateForm(569,1),,,,,15], //Garbodor-1
	[33,,[0,25],[0,30]] //Nidorino
],[ //0x42b21efc37c7b974
	[531,,,5,5,5], //Audino
	[41,60,30], //Zubat
	[714,40,25], //Noibat
	[333,,25,30], //Swablu
	[42,,20,25,15,25], //Golbat
	[822,,,15,25], //Corvisquire
	[334,,,,15,20], //Altaria
	[715,,,,15,20], //Noivern
	[823,,,,,15], //Corviknight
	[169,,,,,15] //Crobat
],[ //0x9d415f6a7a841dd9
	[225,,,5,5,5], //Delibird
	[41,60,30], //Zubat
	[527,40,25], //Woobat
	[822,,25,30], //Corvisquire
	[42,,20,25], //Golbat
	[528,,,25,25], //Swoobat
	[823,,,15,25], //Corviknight
	[142,,,,15,20], //Aerodactyl
	[334,,,,15,20], //Altaria
	[169,,,,15,20], //Crobat
	[715,,,,,20], //Noivern
	[alternateForm(823,1),,,,,15] //Corviknight-1
],[ //0x17d327792698d15f
	[531,,,5,5,5], //Audino
	[439,60,30], //Mime Jr.
	[343,[40,0],[25,0]], //Baltoy
	[436,,25,30], //Bronzor
	[alternateForm(122,1),,20,25], //Mr. Mime-1
	[575,,,[25,0],[25,0]], //Gothorita
	[344,,,15,[15,25],[20,0]], //Claydol
	[876,,,,[15,0],[25,0]], //Indeedee
	[576,,,,[15,0],[20,0]], //Gothitelle
	[866,,,,,15], //Mr. Rime
	[437,,,,,15], //Bronzong
	[alternateForm(77,1),[0,40],[0,25]], //Ponyta-1
	[578,,,[0,25],[0,25]], //Duosion
	[alternateForm(876,1),,,,[0,15],[0,25]], //Indeedee-1
	[579,,,,[0,15],[0,20]], //Reuniclus
	[alternateForm(78,1),,,,[0,15],[0,20]] //Rapidash-1
],[ //0xb20a5ed251cd0456
	[225,,,5,5,5], //Delibird
	[876,[60,0],[30,0],[15,0],[15,0],[20,0]], //Indeedee
	[574,[40,0],[25,0]], //Gothita
	[alternateForm(122,1),,25,30], //Mr. Mime-1
	[alternateForm(79,1),,20,25], //Slowpoke-1
	[375,,,25,25], //Metang
	[866,,,,15,20], //Mr. Rime
	[576,,,,[15,0],[20,0]], //Gothitelle
	[376,,,,,15], //Metagross
	[alternateForm(876,1),[0,60],[0,30],[0,15],[0,15],[0,20]], //Indeedee-1
	[577,[0,40],[0,25]], //Solosis
	[579,,,,[0,15],[0,20]] //Reuniclus
],[ //0x55e4467f01ec60bb
	[531,,,5,5,5], //Audino
	[874,[60,0],[20,0],[25,0],[25,0]], //Stonjourner
	[304,40,25,30], //Aron
	[305,,,15,15,20], //Lairon
	[303,,,,[15,0],[25,0]], //Mawile
	[703,,,,15,20], //Carbink
	[306,,,,,15], //Aggron
	[839,,,,,15], //Coalossal
	[837,[0,60],[0,30]], //Rolycoly
	[838,,[0,20],[0,25],[0,25]], //Carkol
	[302,,,,[0,15],[0,25]] //Sableye
],[ //0xa5696e4aa8d625a
	[225,,,5,5,5], //Delibird
	[303,[60,0],[30,0],[15,0],[15,0],[20,0]], //Mawile
	[304,40,25], //Aron
	[305,,20,25], //Lairon
	[213,,,25,25], //Shuckle
	[839,,,,15,[20,15]], //Coalossal
	[306,,,,15,20], //Aggron
	[alternateForm(839,1),,,,,[15,0]], //Coalossal-1
	[302,[0,60],[0,30],[0,15],[0,15],[0,20]] //Sableye
],[ //0x47a5d8b98dd573ab
	[531,,,5,5,5], //Audino
	[885,60,30], //Dreepy
	[708,40,25], //Phantump
	[778,,25,15,25,15], //Mimikyu
	[361,,20,25], //Snorunt
	[886,,,25,25], //Drakloak
	[303,,,,[15,0],[25,0]], //Mawile
	[362,,,,15,20], //Glalie
	[478,,,,15,20], //Froslass
	[709,,,,,15], //Trevenant
	[302,,,,[0,15],[0,25]] //Sableye
],[ //0xa23ec426e4e9430a
	[225,,,5,5,5], //Delibird
	[885,40,25,30], //Dreepy
	[93,,[20,0],[25,0]], //Haunter
	[303,,,[25,0],[15,0],[20,0]], //Mawile
	[709,,,15,[15,25],[20,0]], //Trevenant
	[887,,,,15,20], //Dragapult
	[94,,,,,[15,0]], //Gengar
	[alternateForm(222,1),,[0,20],[0,25]], //Corsola-1
	[302,,,[0,25],[0,15],[0,20]], //Sableye
	[864,,,,[0,15],[0,20]], //Cursola
	[alternateForm(94,1),,,,,[0,15]] //Gengar-2
],[ //0x3d2f6b02fc6dd797
	[531,,,5,5,5], //Audino
	[621,60,30,,15,20], //Druddigon
	[371,[40,0],[25,0],[30,0]], //Bagon
	[696,,20,25], //Tyrunt
	[372,,,[25,0],[15,0],[25,0]], //Shelgon
	[147,,,15,25], //Dratini
	[697,,,,15,20], //Tyrantrum
	[373,,,,,[15,0]], //Salamence
	[443,[0,40],[0,25],[0,30]], //Gible
	[444,,,[0,25],[0,15],[0,25]], //Gabite
	[445,,,,,[0,15]] //Garchomp
],[ //0xf9d3242b837d627e
	[225,,,5,5,5], //Delibird
	[884,60,30,15,25], //Duraludon
	[371,[40,0],[25,0]], //Bagon
	[696,,25,30], //Tyrunt
	[776,,[20,0],[25,0]], //Turtonator
	[372,,,[25,0],[25,0]], //Shelgon
	[149,,,,15,20], //Dragonite
	[697,,,,15,20], //Tyrantrum
	[373,,,,[15,0],[20,0]], //Salamence
	[alternateForm(884,1),,,,,15], //Duraludon-1
	[443,[0,40],[0,25]], //Gible
	[780,,[0,20],[0,25]], //Drampa
	[444,,,[0,25],[0,25]], //Gabite
	[445,,,,[0,15],[0,20]] //Garchomp
],[ //0x9ab5727f28c3d593
	[531,,,5,5,5], //Audino
	[215,60,30,25,25], //Sneasel
	[859,40,25,30], //Impidimp
	[860,,20,25], //Morgrem
	[alternateForm(264,1),,,15,25], //Linoone-1
	[861,,,,15,25], //Grimmsnarl
	[359,,,,15,15], //Absol
	[862,,,,15,20], //Obstagoon
	[461,,,,,15] //Weavile
],[ //0x1928030ad989ad02
	[225,,,5,5,5], //Delibird
	[859,60,30], //Impidimp
	[359,40,25,,15,20], //Absol
	[215,,20,25], //Sneasel
	[828,,,25,25], //Thievul
	[510,,,15,25], //Liepard
	[861,,,,15,20], //Grimmsnarl
	[461,,,,15,20], //Weavile
	[alternateForm(861,1),,,,,15] //Grimmsnarl-1
],[ //0x7ea57d4a1ef4c796
	[531,,,5,5,5], //Audino
	[304,60,25,30], //Aron
	[632,40,25,,15,20], //Durant
	[374,,20,25], //Beldum
	[305,,,25,25], //Lairon
	[375,,,15,25], //Metang
	[823,,,,15,25], //Corviknight
	[879,,,,15,20], //Copperajah
	[306,,,,,15] //Aggron
],[ //0xe0236c3b91edbebb
	[225,,,5,5,5], //Delibird
	[304,60,30], //Aron
	[alternateForm(52,2),40,25], //Meowth-2
	[632,,25,30], //Durant
	[305,,20,25], //Lairon
	[863,,,15,25], //Perrserker
	[879,,,,15,20], //Copperajah
	[306,,,,15,20], //Aggron
	[376,,,,15,20], //Metagross
	[alternateForm(879,1),,,,,15] //Copperajah-1
],[ //0xc862667fc72ee059
	[531,,,5,5,5], //Audino
	[173,60,20,25], //Cleffa
	[703,40,25,,15,20], //Carbink
	[856,,25,30], //Hatenna
	[857,,,25,25], //Hattrem
	[35,,,15,25], //Clefairy
	[36,,,,15,20], //Clefable
	[547,,,,,15], //Whimsicott
	[858,,,,,15] //Hatterene
],[ //0x72f9d87337338120
	[225,,,5,5,5], //Delibird
	[703,60,20,25,25], //Carbink
	[546,40,25], //Cottonee
	[35,,25,30], //Clefairy
	[547,,,15,25], //Whimsicott
	[alternateForm(110,1),,,,15,20], //Weezing-1
	[858,,,,15,20], //Hatterene
	[36,,,,15,20], //Clefable
	[alternateForm(858,1),,,,,15] //Hatterene-1
],[ //0xf01dfb231a467c06
	[531,,,5,5,5], //Audino
	[854,40,20,17,10,20], //Sinistea
	[alternateForm(854,1),,,3,4,5] //Sinistea-1
],[ //0x8b5a3178ae3f236b
	[225,,,5,5,5], //Delibird
	[854,99,20,90,[15,73],[20,0]], //Sinistea
	[alternateForm(854,1),1,3,5,7], //Sinistea-1
	[855,,,,,51], //Polteageist
	[alternateForm(855,1),,,,,9], //Polteageist-1
	[alternateForm(869,9),,,,,15], //Alcremie-9
	[869,,,,[0,15],[0,20]] //Alcremie
],[ //0xe78d0a25d0c67a32
	[531,,,5,5,5], //Audino
	[133,10,20,18,10,4], //Eevee
	[136,,,4,8,11], //Flareon
	[135,,,4,8,11], //Jolteon
	[134,,,4,8,11], //Vaporeon
	[196,,,4,8,11], //Espeon
	[197,,,4,8,11], //Umbreon
	[470,,,4,8,11], //Leafeon
	[471,,,4,8,11], //Glaceon
	[700,,,4,8,11] //Sylveon
],[ //0xbdf065bb6332909f
	[225,,,5,5,5], //Delibird
	[133,10,20,18,10,4], //Eevee
	[136,,,4,8,11], //Flareon
	[135,,,4,8,11], //Jolteon
	[134,,,4,8,11], //Vaporeon
	[196,,,4,8,11], //Espeon
	[197,,,4,8,11], //Umbreon
	[470,,,4,8,11], //Leafeon
	[471,,,4,8,11], //Glaceon
	[700,,,4,8,11] //Sylveon
],[ //0x58c3011eda59ea53
	[531,,,5,5,5], //Audino
	[138,[60,0],[30,0]], //Omanyte
	[347,[40,0],[25,0]], //Anorith
	[696,,[25,20],[30,25]], //Tyrunt
	[698,,[20,25],[25,30]], //Amaura
	[348,,,[25,15],[15,25],[20,0]], //Armaldo
	[346,,,[15,25],[25,15],[0,20]], //Cradily
	[139,,,,[15,0],[25,0]], //Omastar
	[697,,,,[15,0],[20,15]], //Tyrantrum
	[699,,,,[0,15],[15,20]], //Aurorus
	[142,,,,,15], //Aerodactyl
	[140,[0,60],[0,30]], //Kabuto
	[345,[0,40],[0,25]], //Lileep
	[141,,,,[0,15],[0,25]] //Kabutops
],[ //0xb4dbd8428706d1c2
	[225,,,5,5,5], //Delibird
	[138,[100,0],[100,0]], //Omanyte
	[139,,,[15,0]], //Omastar
	[142,,,40,21,15], //Aerodactyl
	[881,,,[20,0],[30,7],[30,10]], //Arctozolt
	[880,,,[20,0],[30,7],[30,10]], //Dracozolt
	[882,,,[0,20],[7,30],[10,30]], //Dracovish
	[883,,,[0,20],[7,30],[10,30]], //Arctovish
	[140,[0,100],[0,100]], //Kabuto
	[141,,,[0,15]] //Kabutops
]];



const LOCATIONS=[
{name:['Events',,,,'Eventos',,'活动赠送'],encounters:[
	[alternateForm(52,3),,'event']
]},
{name:['Postwick',,,,'Pueblo Yarda',,'化朗镇'],encounters:[
	[810,,'starter'],
	[813,,'starter'],
	[816,,'starter'],
	[4,,['gift','postgame']]
]},
{name:['Slumbering Weald',,,,'Bosque Oniria',,'微寐森林'],encounters:[
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
{name:['Route 1',,,,'Ruta 1',,'1号道路'],encounters:[
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
{name:['Route 2',,,,'Ruta 2',,'2号道路'],encounters:[
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
	]},{group:['Water surface',,,,'Superficie del agua',,'水面'],encounters:[
		[846,,'surf',70],
		[847,,'surf',28],
		[130,,'surf',2],
		[131,,'wanderer_one']
	]},{group:['Lakeside',,,,'Por el lago',,'湖畔'],encounters:[
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
{name:['City of Motostoke',,,,'Ciudad Pistón',,'机擎市'],encounters:[
	[129,,'fish',50],
	[833,,'fish',40],
	[339,,'fish',10],
	[819,,['trade',659]]
]},
{name:['Route 3',,,,'Ruta 3',,'3号道路'],encounters:[
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
{name:['Galar Mine',,,,'Mina de Galar',,'伽勒尔矿山'],encounters:[
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
{name:['Route 4',,,,'Ruta 4',,'4号道路'],encounters:[
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
{name:['Turrfield',,,,'Pueblo Hoyuelo',,'草路镇'],encounters:[
	[342,,'wanderer_one'],
	[52,,['trade',alternateForm(52,2)]]
]},
{name:['Route 5',,,,'Ruta 5',,'5号道路'],encounters:[
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
{name:['Town of Hulbury',,,,'Pueblo Amura',,'水舟镇'],encounters:[
	[846,,'fish',50],
	[170,,'fish',20],
	[833,,'fish',15],
	[550,Sw,'fish',10],
	[746,,'fish',5],
	[alternateForm(550,1),Sh,'fish',10],
	[546,,['trade',572]]
]},
{name:['Galar Mine No. 2',,,,'Mina de Galar n.º 2',,'第二矿山'],encounters:[
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
{name:['Motostoke Outskirts',,,,'Afueras de pistón',,'机擎市郊外'],encounters:[
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
{name:['Hammerlocke',,,,'Ciudad Artejo',,'拳关丘陵'],encounters:[
	[175,,['trade',848]]
]},
{name:['Route 6',,,,'Ruta 6',,'6号道路'],encounters:[
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
{name:['Stow-on-Side',,,,'Pueblo Ladera',,'溯传镇'],encounters:[
	[856,Sw,['trade',556]],
	[859,Sh,['trade',556]]
]},
{name:['Glimwood Tangle',,,,'Bosque Lumirinto',,'迷光森林'],encounters:[
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
{name:['Ballonlea',,,,'Pueblo Plié',,'舞姿镇'],encounters:[
	[562,,['trade',alternateForm(562,1)]]
]},
{name:['Route 7',,,,'Ruta 7',,'7号道路'],encounters:[
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
{name:['Route 8',,,,'Ruta 8',,'8号道路'],encounters:[
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
	{group:['Steamdrift Way',,,,'Senda Vaporosa',,'泉烟小路'],encounters:[
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
{name:['Circhester',,,,'Pueblo Auriga',,'战竞镇'],encounters:[
	[538,Sw,['trade',583]],
	[539,Sh,['trade',583]]
]},
{name:['Route 9',,,,'Ruta 9',,'9号道路'],encounters:[
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
	{group:['Circhester Bay',,,,'Bahía de Auriga',,'战竞湾'],encounters:[
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
	{group:['Outer Spikemuth',,,,'Afueras de Crampón',,'尖钉镇郊外'],encounters:[
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
{name:['Route 10',,,,'Ruta 10',,'10号道路'],encounters:[
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
{name:['Spikemuth',,,,'Pueblo Crampón',,'尖钉镇'],encounters:[
	[122,Sw,['trade',862]]
]},
{name:['Wyndon',,,,'Ciudad Puntera',,'宫门市'],encounters:[
	[884,Sw,['trade',873]]
]},
{name:['Battle Tower',,,,'Torre Batalla',,'对战塔'],encounters:[
	[772,,['gift','postgame']]
]},	

{name:['Wild Area',,,,'Área Silvestre',,'旷野地带'],encounters:[
	[alternateForm(143,1),,'event'],
	[alternateForm(849,2),,'event'],
	
	
	[alternateForm(145,1),Cr,'roaming']
]},
{name:['Meetup Spot',,,,'Punto de Encuentro',,'集汇空地'],encounters:[
	[alternateForm(25,9),,'gift'],
	[alternateForm(133,1),,'gift'],
	[alternateForm(79,1),,'gift']
]},
{name:['Rolling Fields',,,,'Pradera Radiante',,'煦丽草原'],encounters:[
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
{name:['Rolling Fields (Area 2)',,,,'Pradera Radiante (Area 2)',,'煦丽草原(区域 2)'],encounters:[
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
{name:['Dappled Grove',,,,'Arboleda Claroscuro',,'沐光森林'],encounters:[
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
{name:['Watchtower Ruins',,,,'Antigua Atalaya',,'瞭望塔旧址'],encounters:[
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
	generateRaidDen(16, 6, 47)
]},
{name:['East Lake Axewell',,,,'Lago Axew (este)',,'牙牙湖东岸'],encounters:[
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
{name:['East Lake Axewell (Area 2)',,,,'Lago Axew (este, area 2)',,'牙牙湖东岸(区域 2)'],encounters:[
	[12,,'flying',[75,25,75,75,75,75,75,75,25]],
	[519,,'flying',[25,75,25,25,25,25,25,25,75]]
]},
{name:['West Lake Axewell',,,,'Lago Axew (oeste)',,'牙牙湖西岸'],encounters:[
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
{name:['Axew\'s Eye',,,,'Ojo de Axew',,'牙牙湖之眼'],encounters:[
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
{name:['South Lake Miloch',,,,'Lago Milotic (sur)',,'美纳斯湖南岸'],encounters:[
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
{name:['South Lake Miloch (2)',,,,'Lago Milotic (sur, area 2)',,'美纳斯湖南岸(区域 2)'],encounters:[
	[66,,'overworld',[80,60,70,60,80,35,80,60,60]],
	[434,,'overworld',[15,35,25,35]],
	[236,,'overworld',5],
	[37,Sw,'overworld',[,,,,,,15]],
	[58,Sh,'overworld',[,,,,,,15]],
	[459,,'overworld',[,,,,15,60]],
	[557,,'overworld',[,,,,,,,35]],
	[436,,'overworld',[,,,,,,,,35]]
]},
{name:['Giant\'s Seat',,,,'Silla del Gigante',,'巨人凳岩'],encounters:[
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
{name:['North Lake Miloch',,,,'Lago Milotic (norte)',,'美纳斯湖北岸'],encounters:[
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
{name:['Motostoke Riverbank',,,,'Ribera de Pistón',,'机擎河岸'],encounters:[
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
{name:['Bridge Field',,,,'Valle Entrepuentes',,'桥间空地'],encounters:[
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
{name:['Stony Wilderness',,,,'Llanura Pétrea',,'巨石原野'],encounters:[
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
{name:['Stony Wilderness (Area 2)',,,,'Llanura Pétrea (Área 2)',,'巨石原野(区域 2)'],encounters:[
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
{name:['Stony Wilderness (Area 3)',,,,'Llanura Pétrea (Área 3)',,'巨石原野(区域 3)'],encounters:[
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
{name:['Dusty Bowl',,,,'Cuenca Polvorienta',,'沙尘洼地'],encounters:[
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
{name:['Giant\'s Mirror',,,,'Espejo del Gigante',,'巨人镜池'],encounters:[
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
{name:['Hammerlocke Hills',,,,'Cornisa de Artejo',,'拳关丘陵'],encounters:[
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
{name:['Giant\'s Cap',,,,'Gorro del Gigante',,'巨人帽岩'],encounters:[
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
{name:['Giant\'s Cap (Area 2)',,,,'Gorro del Gigante (Área 2)',,'巨人帽岩(区域 2)'],encounters:[
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
{name:['Giant\'s Cap (Area 3)',,,,'Gorro del Gigante (Área 3)',,'巨人帽岩(区域 3)'],encounters:[
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
{name:['Lake of Outrage',,,,'Lago del Enfado',,'逆鳞湖'],encounters:[
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















{name:['Isle of Armor',,,,'Isla Armadura',,'铠岛'],encounters:[
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
	[105,Ar,['trade',alternateForm(105,1)]],
	
	[alternateForm(146,1),Cr,'roaming']
]},
{name:['Master Dojo',,,,,,'马师傅武馆'],encounters:[
	[1,Ar,'gift'],
	[7,Ar,'gift'],
	[891,Ar,'gift'],
	[137,Ar,'gift']
]},
{name:['Fields of Honor',,,,'Prado Reverencia',,'揖礼原野'],encounters:[ //908A64718CA374E6
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

	[427,Ar,'overworld',[56,36,36,36,,,36,56,36]],
	[39,Ar,'overworld',32],
	[63,Ar,'overworld',5],
	[707,Ar,'overworld',5],
	[113,Ar,'overworld',[2,2,2,2,,,2,2]],
	[686,Ar,'overworld',[,20]],
	[98,Ar,'overworld',[,,20,20]],
	[753,Ar,'overworld',[,,,,,,20]],
	[280,Ar,'overworld',[,,,,,,,,20]],
	[242,Ar,'overworld',[,,,,,,,,2]],
	[824,Ar,'hidden',30],
	[427,Ar,'hidden',30],
	[39,Ar,'hidden',[30,15,15,15,,,15,30,15]],
	[440,Ar,'hidden',10],
	[686,Ar,'hidden',[,15]],
	[98,Ar,'hidden',[,,15,15]],
	[753,Ar,'hidden',[,,,,,,15]],
	[280,Ar,'hidden',[,,,,,,,,15]],
	[819,Ar,'shake_tree',70],
	[840,Ar,'shake_tree',30],
	[129,Ar,'fish',50],
	[223,Ar,'fish',40],
	[224,Ar,'fish',10],

	[72,Ar,'surf',[35,35,35,35,,,50,35,35]],
	[278,Ar,'surf',35],
	[458,Ar,'surf',[30,15,15,15,,,15,30,15]],
	[73,Ar,'surf',[,15]],
	[279,Ar,'surf',[,,15,15]],
	[425,Ar,'surf',[,,,,,,,,15]],

	[alternateForm(79,1),Ar,'underground',100],

	[99,Ar,'wanderer',[100,100,100,100,,,100,100]], //Kingler
	[744,Ar,'wanderer',[100,,,,,,100]], //Rockruff
	[428,Ar,'wanderer',[100,,,,,,100,100]], //Lopunny
	[121,Ar,'wanderer'], //Starmie
	[748,Ar,'wanderer',[100,100,,,,,,,100]], //Toxapex
	[764,Ar,'wanderer',[100,,,,,,,100]], //Comfey
	[570,Ar,'wanderer',[,100,,,,,,,100]], //Zorua
	[687,Ar,'wanderer',[,100,100]], //Malamar
	[183,Ar,'wanderer',[,,100]], //Marill
	[25,Ar,'wanderer',[,,,100]], //Pikachu
	[404,Ar,'wanderer',[,,,100]], //Luxio
	[834,Ar,'wanderer',[,,,,,,100]], //Drednaw
	[662,Ar,'wanderer',[,,,,,,100]], //Fletchinder
	[40,Ar,'wanderer',[,,,,,,,,100]], //Wigglytuff
	[64,Ar,'wanderer',[,,,,,,,,100]], //Kadabra

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
{name:['Soothing Wetlands',,,,'Humedal Frescor',,'清涼湿原'],encounters:[ //908A63718CA37333
	[451,Ar,'overworld',[56,36,36,36,,,36,56,56]],
	[206,Ar,'overworld',16],
	[194,Ar,'overworld',16],
	[626,Ar,'overworld',5],
	[108,Ar,'overworld',5],
	[113,Ar,'overworld',[2,2,2,2,,,2,2]],
	[624,SwAr,'overworld',[,20]],
	[341,SwAr,'overworld',[,,20,20]],
	[753,Ar,'overworld',[,,,,,,20]],
	[242,Ar,'overworld',[,,,,,,,,2]],
	[616,Ar,'hidden',30],
	[451,Ar,'hidden',30],
	[206,Ar,'hidden',[30,15,15,15,,,15,30,30]],
	[440,Ar,'hidden',10],
	[624,Ar,'hidden',[,15]],
	[341,Ar,'hidden',[,,15,15]],
	[753,Ar,'hidden',[,,,,,,15]],
	[819,Ar,'shake_tree',70],
	[840,Ar,'shake_tree',30],
	[129,Ar,'fish',50],
	[339,Ar,'fish',40],
	[340,Ar,'fish',10],
	[624,ShAr,'overworld',[,10]],
	[453,ShAr,'overworld',[,10]],
	[341,ShAr,'overworld',[,,10,10]],
	[704,ShAr,'overworld',[,,10,10]],

	[194,Ar,'surf',50],
	[833,Ar,'surf',50],

	[626,Ar,'wanderer',[100,100,100,100,,,100,100]], //Bouffalant
	[463,Ar,'wanderer',[100,,100,,,,,100]], //Lickilicky
	[428,Ar,'wanderer',[100,,,,,,,100]], //Lopunny
	[744,Ar,'wanderer',[100]], //Rockruff
	[195,Ar,'wanderer',[100,100,100,,,,100,100,100]], //Quagsire
	[452,Ar,'wanderer',[100,100,100,,,,,100]], //Drapion
	[834,Ar,'wanderer',[100,100,,,,,100,100]], //Drednaw
	[764,Ar,'wanderer',[100,,,,,,100,100,100]], //Comfey
	[687,Ar,'wanderer',[,100,100]], //Malamar
	[570,Ar,'wanderer',[,100,,,,,,,100]], //Zorua
	[559,SwAr,'wanderer',[,100]], //Scraggy
	[453,ShAr,'wanderer',[,100]], //Croagunk
	[183,Ar,'wanderer',[,,100]], //Marill
	[61,Ar,'wanderer',[,,100,100,,,,,100]], //Poliwhirl
	[186,Ar,'wanderer',[,,100,100]], //Politoed
	[405,Ar,'wanderer',[,,,100]], //Luxray
	[404,Ar,'wanderer',[,,,100]], //Luxio
	[26,Ar,'wanderer',[,,,100]], //Raichu
	[25,Ar,'wanderer',[,,,100]], //Pikachu
	[663,Ar,'wanderer',[,,,,,,100]], //Talonflame
	[549,Ar,'wanderer',[,,,,,,100]], //Lilligant
	[662,Ar,'wanderer',[,,,,,,100]], //Fletchinder
	[64,Ar,'wanderer',[,,,,,,,,100]], //Kadabra
	[40,Ar,'wanderer',[,,,,,,,,100]], //Wigglytuff
	[242,Ar,'wanderer',[,,,,,,,,100]], //Blissey
	[184,Ar,'wanderer',[,,,,,,,,100]], //Azumarill

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
{name:['Forest of Focus',,,,'Bosque Concentración',,'专注森林'],encounters:[ //908A62718CA37180
	[543,Ar,'overworld',[56,36,36,36,,,36,46,46]],
	[590,Ar,'overworld',16],
	[114,Ar,'overworld',16],
	[25,Ar,'overworld',5],
	[766,SwAr,'overworld',5],
	[113,Ar,'overworld',[2,2,2,2,,,2,2]],
	[624,SwAr,'overworld',[,20]],
	[341,Ar,'overworld',[,,20,20]],
	[753,Ar,'overworld',[,,,,,,20]],
	[843,Ar,'overworld',[,,,,,,,10]],
	[570,Ar,'overworld',[,,,,,,,,10]],
	[242,Ar,'overworld',[,,,,,,,,2]],
	[588,Ar,'hidden',30],
	[543,Ar,'hidden',30],
	[590,Ar,'hidden',[30,15,15,15,,,15,15,15]],
	[440,Ar,'hidden',10],
	[624,Ar,'hidden',[,15]],
	[341,Ar,'hidden',[,,15,15]],
	[753,Ar,'hidden',[,,,,,,15]],
	[843,Ar,'hidden',[,,,,,,,15]],
	[570,Ar,'hidden',[,,,,,,,,15]],
	[819,Ar,'shake_tree',60],
	[840,Ar,'shake_tree',30],
	[587,Ar,'shake_tree',10],
	[129,Ar,'fish',40],
	[118,Ar,'fish',40],
	[846,Ar,'fish',20],
	[765,ShAr,'overworld',5],
	[624,ShAr,'overworld',[,10]],
	[453,ShAr,'overworld',[,10]],

	[341,Ar,'surf',45],
	[846,Ar,'surf',45],
	[845,Ar,'surf',10],

	[587,Ar,'flying',100],

	[766,SwAr,'wanderer',[100]], //Passimian
	[25,Ar,'wanderer',[100,100,100,100]], //Pikachu
	[465,Ar,'wanderer',[100,,,,,,100]], //Tangrowth
	[591,Ar,'wanderer',[100,100,100,,,,100]], //Amoonguss
	[845,Ar,'wanderer',[100,,100,,,,100,,100]], //Cramorant
	[587,Ar,'wanderer',[100,100,100,100,,,100,100]], //Emolga
	[765,ShAr,'wanderer',[100]], //Oranguru
	[340,SwAr,'wanderer_surf',[100,100,,,,,100,100]], //Whiscash
	[340,ShAr,'wanderer_surf',[100,100,,,,,100]], //Whiscash
	[545,Ar,'wanderer',[,100]], //Scolipede
	[342,Ar,'wanderer',[,100,100,100]], //Crawdaunt
	[616,SwAr,'wanderer',[,,100,100]], //Shelmet
	[617,Ar,'wanderer',[,,100]], //Accelgor
	[55,Ar,'wanderer',[,,100]], //Golduck
	[704,ShAr,'wanderer',[,,100,100]], //Goomy
	[847,SwAr,'wanderer_surf',[,,100,100,,,,,100]], //Barraskewda
	[847,ShAr,'wanderer_surf',[,,100,100]], //Barraskewda
	[26,Ar,'wanderer',[,,,100]], //Raichu
	[405,Ar,'wanderer',[,,,100]], //Luxray
	[172,Ar,'wanderer',[,,,100]], //Pichu
	[127,SwAr,'wanderer',[,,,,,,100]], //Pinsir
	[754,Ar,'wanderer',[,,,,,,100]], //Lurantis
	[636,Ar,'wanderer',[,,,,,,100]], //Larvesta
	[764,Ar,'wanderer',[,,,,,,100,,100]], //Comfey
	[214,ShAr,'wanderer',[,,,,,,100]], //Heracross
	[28,Ar,'wanderer',[,,,,,,,100]], //Sandslash
	[589,Ar,'wanderer',[,,,,,,,100]], //Escavalier
	[104,Ar,'wanderer',[,,,,,,,100]], //Cubone
	[40,Ar,'wanderer',[,,,,,,,,100]], //Wigglytuff
	[570,Ar,'wanderer',[,,,,,,,,100]], //Zorua
	[184,Ar,'wanderer',[,,,,,,,,100]], //Azumarill
	[282,Ar,'wanderer',[,,,,,,,,100]], //Gardevoir
	[39,Ar,'wanderer',[,,,,,,,,100]], //Jigglypuff

	{
		group:['Area 2',,,,'Área 2',,'区域 2'],encounters:[
			[824,Ar,'hidden',30],
			[427,Ar,'hidden',30],
			[39,Ar,'hidden',[30,15,15,15,,,15,30,30]],
			[440,Ar,'hidden',10],
			[686,Ar,'hidden',[,15]],
			[403,Ar,'hidden',[,,15,15]],
			[753,Ar,'hidden',[,,,,,,15]],
			[819,Ar,'shake_tree',70],
			[840,Ar,'shake_tree',30],
			[129,Ar,'fish',50],
			[746,Ar,'fish',40],
			[781,Ar,'fish',10]
		]
	},

	generateRaidDen('A20',109,110),
	generateRaidDen('A21',154,145),
	generateRaidDen('A22',105,106),
	generateRaidDen('A23',125,126),
	generateRaidDen('A24',119,120),
	generateRaidDen('A25',135,136)
]},
{name:['Challenge Beach',,,,'Playa Desafío',,'挑战海灘'],encounters:[ //908A69718CA37D65
	[81,Ar,'overworld',[56,36,36,36,,,36,56,56]],
	[54,Ar,'overworld',32],
	[702,Ar,'overworld',5],
	[877,Ar,'overworld',5],
	[113,Ar,'overworld',[2,2,2,2,,,2,2]],
	[686,Ar,'overworld',[,20]],
	[403,Ar,'overworld',[,,20,20]],
	[753,Ar,'overworld',[,,,,,,20]],
	[242,Ar,'overworld',[,,,,,,,,2]],
	
	[120,Ar,'underground',100],

	[72,Ar,'surf',[50,35,35,35,,,50,50,35]],
	[278,Ar,'surf',50],
	[73,Ar,'surf',[,15]],
	[279,Ar,'surf',[,,15,15]],
	[425,Ar,'overworld',[,,,,,,,,15]],

	[428,Ar,'wanderer',[100,,,,,,,100,100]], //Lopunny
	[764,Ar,'wanderer',[100,,,,,,100,,100]], //Comfey
	[279,Ar,'wanderer'], //Pelipper
	[834,Ar,'wanderer',[100,100,,100,,,100,100]], //Drednaw
	[877,Ar,'wanderer',[100,100,100,100]], //Morpeko
	[702,Ar,'wanderer',[100,,100,100,,,,100]], //Dedenne
	[183,Ar,'wanderer',[100,,,,,,,100]], //Marill
	[845,Ar,'wanderer',[100,100,100,,,,100,100,100]], //Cramorant
	[99,Ar,'wanderer',[100,,100,,,,100,100]], //Kingler
	[121,Ar,'wanderer'], //Starmie
	[224,Ar,'wanderer_surf',[100,,,,,,100,100]], //Octillery
	[130,Ar,'wanderer_surf',[100,,100,,,,100,100]], //Gyarados
	[73,Ar,'wanderer_surf',[100,100,100,,,,100,100]], //Tentacruel
	[847,Ar,'wanderer_surf',[100,,100,100,,,100,100,100]], //Barraskewda
	[452,Ar,'wanderer',[,100,100]], //Drapion
	[687,Ar,'wanderer',[,100,100]], //Malamar
	[342,Ar,'wanderer',[,100,100]], //Crawdaunt
	[426,Ar,'wanderer',[,100,,,,,,,100]], //Drifblim
	[528,Ar,'wanderer',[,100]], //Swoobat
	[748,Ar,'wanderer',[,100,100,100,,,,,100]], //Toxapex
	[593,Ar,'wanderer_surf',[,100,100,,,,,,100]], //Jellicent
	[342,Ar,'wanderer_surf',[,100]], //Crawdaunt
	[768,Ar,'wanderer',[,,100]], //Golisopod
	[91,Ar,'wanderer_surf',[,,100,,,,,,100]], //Cloyster
	[82,Ar,'wanderer',[,,,100]], //Magneton
	[26,Ar,'wanderer',[,,,100]], //Raichu
	[55,Ar,'wanderer',[,,,100,,,100]], //Golduck
	[405,Ar,'wanderer',[,,,100]], //Luxray
	[462,Ar,'wanderer',[,,,100]], //Magnezone
	[171,Ar,'wanderer_surf',[,,,100,,,,,100]], //Lanturn
	[549,Ar,'wanderer',[,,,,,,100]], //Lilligant
	[754,Ar,'wanderer',[,,,,,,100]], //Lurantis
	[662,Ar,'wanderer',[,,,,,,100]], //Fletchinder
	[637,Ar,'wanderer',[,,,,,,100]], //Volcarona
	[40,Ar,'wanderer',[,,,,,,,,100]], //Wigglytuff
	[184,Ar,'wanderer',[,,,,,,,,100]], //Azumarill

	generateRaidDen('A26',113,114),
	generateRaidDen('A27',135,136),
	generateRaidDen('A28',105,106),
	generateRaidDen('A29',123,124),
	generateRaidDen('A30',117,118),
	generateRaidDen('A31',137,138),
	generateRaidDen('A32',103,104),
	generateRaidDen('A33',127,128)
]},
{name:['Brawlers\' Cave',,,,'Cueva Contienda',,'战斗洞窟'],encounters:[ //908A68718CA37BB2
	[293,Ar,'overworld',56],
	[527,Ar,'overworld',16],
	[60,Ar,'overworld',[16,16,16,16,,,16]],
	[298,Ar,'overworld',5],
	[108,Ar,'overworld',5],
	[113,Ar,'overworld',[2,2,2,2,,,2,2]],
	[54,Ar,'overworld',[,,,,,,,16,16]],
	[242,Ar,'overworld',[,,,,,,,,2]],

	[60,Ar,'surf',50],
	[339,Ar,'surf',50],

	[62,Ar,'wanderer'], //Poliwrath
	[294,Ar,'wanderer'], //Loudred
	[528,Ar,'wanderer'], //Swoobat
	[621,Ar,'wanderer'], //Druddigon
	[55,Ar,'wanderer'], //Golduck
	[526,Ar,'wanderer'], //Gigalith
	[340,Ar,'wanderer_surf'], //Whiscash

	generateRaidDen('A34',129,130)
]},
{name:['Challenge Road',,,,'Ruta Desafío',,'挑战之路'],encounters:[ //908A67718CA379FF
	[524,Ar,'overworld',[56,36,36,36,,,36,36,56]],
	[619,Ar,'overworld',16],
	[757,Ar,'overworld',16],
	[227,Ar,'overworld',5],
	[744,Ar,'overworld',5],
	[113,Ar,'overworld',[2,2,2,2,,,2,2]],
	[624,SwAr,'overworld',[,10]],
	[782,SwAr,'overworld',[,10]],
	[403,Ar,'overworld',[,,20,20]],
	[661,Ar,'overworld',[,,,,,,20]],
	[843,SwAr,'overworld',[,,,,,,,10]],
	[559,SwAr,'overworld',[,,,,,,,10]],
	[242,Ar,'overworld',[,,,,,,,,2]],
	[824,Ar,'hidden',30],
	[524,Ar,'hidden',30],
	[619,Ar,'hidden',[30,15,15,15,,,15,15,30]],
	[440,Ar,'hidden',10],
	[624,Ar,'hidden',[,15]],
	[403,Ar,'hidden',[,,15,15]],
	[661,Ar,'hidden',[,,,,,,15]],
	[843,Ar,'hidden',[,,,,,,,15]],
	[624,ShAr,'overworld',[,20]],
	[843,ShAr,'overworld',[,,,,,,,20]],

	[620,Ar,'wanderer',[100]], //Mienshao
	[745,Ar,'wanderer',[100,100]], //Lycanroc
	[744,SwAr,'wanderer',[100,100]], //Rockruff
	[227,Ar,'wanderer',[100,,100,,,,100,100]], //Skarmory
	[744,ShAr,'wanderer',[100,100,,,,,100,,100]], //Rockruff
	[625,Ar,'wanderer',[,100]], //Bisharp
	[628,SwAr,'wanderer',[,100]], //Braviary
	[630,ShAr,'wanderer',[,100]], //Mandibuzz
	[560,SwAr,'wanderer',[,,100,100]], //Scrafty
	[454,ShAr,'wanderer',[,,100,100]], //Toxicroak
	[82,Ar,'wanderer',[,,,100]], //Magneton
	[758,Ar,'wanderer',[,,,,,,100]], //Salazzle
	[127,SwAr,'wanderer',[,,,,,,100]], //Pinsir
	[782,SwAr,'wanderer',[,,,,,,100,100,100]], //Jangmo-o
	[214,ShAr,'wanderer',[,,,,,,100]], //Heracross
	[558,Ar,'wanderer',[,,,,,,,100]], //Crustle
	[212,Ar,'wanderer',[,,,,,,,100]], //Scizor
	[475,Ar,'wanderer',[,,,,,,,,100]], //Gallade
	[426,Ar,'wanderer',[,,,,,,,,100]], //Drifblim

	generateRaidDen('A35',123,124),
	generateRaidDen('A36',156,157),
	generateRaidDen('A37',107,108),
	generateRaidDen('A38',121,122)
]},
{name:['Courageous Cavern',,,,'Cueva Tenacidad',,'斗志洞窟'],encounters:[ //908A66718CA3784C
	[833,Ar,'overworld',56],
	[527,Ar,'overworld',16],
	[767,Ar,'overworld',16],
	[871,Ar,'overworld',5],
	[557,Ar,'overworld',5],
	[113,Ar,'overworld',[2,2,2,2,,,2,2]],
	[242,Ar,'overworld',[,,,,,,,,2]],
	[833,Ar,'hidden',100],
	[129,Ar,'fish',50],
	[90,Ar,'fish',40],
	[91,Ar,'fish',10],

	[72,Ar,'surf',60],
	[852,Ar,'surf',40],

	[558,Ar,'wanderer'], //Crustle
	[621,Ar,'wanderer'], //Druddigon
	[768,Ar,'wanderer'], //Golisopod
	[528,Ar,'wanderer'], //Swoobat
	[834,Ar,'wanderer'], //Drednaw
	[73,Ar,'wanderer_surf'], //Tentacruel
	[340,Ar,'wanderer_surf'], //Whiscash

	generateRaidDen('A39',103,104),
	generateRaidDen('A40',135,148),
	generateRaidDen('A41',127,128),
	generateRaidDen('A42',129,130),
	generateRaidDen('A43',133,134),
	generateRaidDen('A44',101,102)
]},
{name:['Loop Lagoon',,,,'Bahía Circular',,'圆环海湾'],encounters:[ //908A6D718CA38431
	[852,Ar,'overworld',[56,36,36,36,,,36,56,36]],
	[278,Ar,'overworld',16],
	[747,Ar,'overworld',16],
	[871,Ar,'overworld',5],
	[557,Ar,'overworld',5],
	[113,Ar,'overworld',[2,2,2,2,,,2,2]],
	[686,Ar,'overworld',[,20]],
	[98,Ar,'overworld',[,,20,20]],
	[661,Ar,'overworld',[,,,,,,20]],
	[425,Ar,'overworld',[,,,,,,,,20]],
	[242,Ar,'overworld',[,,,,,,,,2]],
	[824,Ar,'hidden',30],
	[852,Ar,'hidden',30],
	[278,Ar,'hidden',[30,15,15,15,,,15,30,15]],
	[440,Ar,'hidden',10],
	[686,Ar,'hidden',[,15]],
	[98,Ar,'hidden',[,,15,15]],
	[661,Ar,'hidden',[,,,,,,15]],
	[425,Ar,'hidden',[,,,,,,,,15]],
	[819,Ar,'shake_tree',70],
	[840,Ar,'shake_tree',30],
	[129,Ar,'fish',50],
	[90,Ar,'fish',40],
	[91,Ar,'fish',10],
	
	[769,Ar,'underground',100],

	[72,Ar,'surf',[45,30,30,30,,,30,45,30]],
	[278,Ar,'surf',30],
	[852,Ar,'surf',25],
	[73,Ar,'surf',[,15]],
	[279,Ar,'surf',[,,15,15]],
	[662,Ar,'surf',[,,,,,,15]],
	[425,Ar,'surf',[,,,,,,,,15]],

	[834,Ar,'wanderer',[100,,,,,,100,100]], //Drednaw
	[871,Ar,'wanderer',[100,,100,100,,,,,100]], //Pincurchin
	[853,Ar,'wanderer',[100,100,,,,,100,100,100]], //Grapploct
	[65,Ar,'wanderer',[100,,100,,,,,100]], //Alakazam
	[744,Ar,'wanderer',[100]], //Rockruff
	[130,Ar,'wanderer_surf',[100,,100,100,,,100,100]], //Gyarados
	[73,Ar,'wanderer_surf',[100,100,100,,,,100,100]], //Tentacruel
	[224,Ar,'wanderer_surf',[100,,,,,,100,100]], //Octillery
	[687,Ar,'wanderer',[,100,100]], //Malamar
	[748,Ar,'wanderer',[,100,100,,,,,,100]], //Toxapex
	[770,Ar,'wanderer',[,100,,,,,,100,100]], //Palossand
	[571,Ar,'wanderer',[,100,,,,,,,100]], //Zoroark
	[593,Ar,'wanderer_surf',[,100,,,,,,,100]], //Jellicent
	[279,Ar,'wanderer',[,,100]], //Pelipper
	[91,Ar,'wanderer_surf',[,,100]], //Cloyster
	[404,Ar,'wanderer',[,,,100]], //Luxio
	[462,Ar,'wanderer',[,,,100]], //Magnezone
	[405,Ar,'wanderer',[,,,100]], //Luxray
	[171,Ar,'wanderer_surf',[,,,100]], //Lanturn
	[636,Ar,'wanderer',[,,,,,,100,100]], //Larvesta
	[663,Ar,'wanderer',[,,,,,,100]], //Talonflame
	[40,Ar,'wanderer',[,,,,,,,,100]], //Wigglytuff

	generateRaidDen('A45',113,114),
	generateRaidDen('A46',131,151),
	generateRaidDen('A47',137,138),
	generateRaidDen('A48',107,108)
]},
{name:['Training Lowlands',,,,'Llano Entrenamiento',,'锻炼平原'],encounters:[ //908A6C718CA3827E
	[824,Ar,'hidden',30],
	[506,Ar,'hidden',[60,45,45,45,,,45,45,60]],
	[440,Ar,'hidden',10],
	[686,Ar,'hidden',[,15]],
	[403,Ar,'hidden',[,,15,15]],
	[753,Ar,'hidden',[,,,,,,15]],
	[843,Ar,'hidden',[,,,,,,,15]],
	[819,Ar,'shake_tree',70],
	[840,Ar,'shake_tree',30],
	[129,Ar,'fish',50],
	[318,Ar,'fish',40],
	[319,Ar,'fish',10],
	
	[506,Ar,'overworld',[56,36,36,36,,,36,36,56]],
	[128,Ar,'overworld',16],
	[241,Ar,'overworld',16],
	[123,Ar,'overworld',5],
	[127,SwAr,'overworld',5],
	[113,Ar,'overworld',[2,2,2,2,,,2,2]],
	[686,Ar,'overworld',[,20]],
	[403,Ar,'overworld',[,,20,20]],
	[753,Ar,'overworld',[,,,,,,20]],
	[843,Ar,'overworld',[,,,,,,,20]],
	[242,Ar,'overworld',[,,,,,,,,2]],
	[214,ShAr,'overworld',5],
	
	[120,Ar,'underground',100],

	[341,Ar,'surf',45],
	[846,Ar,'surf',45],
	[845,Ar,'surf',10],

	[508,Ar,'wanderer',[100]], //Stoutland
	[115,Ar,'wanderer',[100,100]], //Kangaskhan
	[123,Ar,'wanderer',[100,,,,,,100]], //Scyther
	[127,SwAr,'wanderer',[100,,,,,,100]], //Pinsir
	[128,Ar,'wanderer'], //Tauros
	[507,Ar,'wanderer',[100,,,,,,,,100]], //Herdier
	[55,Ar,'wanderer',[100,100,100,100,,,100]], //Golduck
	[241,Ar,'wanderer',[100,100,,,,,100]], //Miltank
	[99,Ar,'wanderer',[100,100,100,100,,,100,100]], //Kingler
	[214,ShAr,'wanderer',[100,,,,,,100]], //Heracross
	[847,Ar,'wanderer_surf',[100,,100,100,,,100,100,100]], //Barraskewda
	[625,Ar,'wanderer',[,100]], //Bisharp
	[452,Ar,'wanderer',[,100,,,,,100]], //Drapion
	[528,Ar,'wanderer',[,100]], //Swoobat
	[588,Ar,'wanderer',[,100]], //Karrablast
	[687,Ar,'wanderer',[,100,100]], //Malamar
	[342,Ar,'wanderer_surf',[,100]], //Crawdaunt
	[279,Ar,'wanderer',[,,100]], //Pelipper
	[616,Ar,'wanderer',[,,100]], //Shelmet
	[560,SwAr,'wanderer',[,,100,100]], //Scrafty
	[454,ShAr,'wanderer',[,,100,100]], //Toxicroak
	[405,Ar,'wanderer',[,,,100]], //Luxray
	[404,Ar,'wanderer',[,,,100]], //Luxio
	[82,Ar,'wanderer',[,,,100]], //Magneton
	[617,Ar,'wanderer',[,,,100]], //Accelgor
	[549,Ar,'wanderer',[,,,,,,100]], //Lilligant
	[662,Ar,'wanderer',[,,,,,,100]], //Fletchinder
	[663,Ar,'wanderer',[,,,,,,100]], //Talonflame
	[212,Ar,'wanderer',[,,,,,,,100]], //Scizor
	[558,Ar,'wanderer',[,,,,,,,100]], //Crustle
	[227,Ar,'wanderer',[,,,,,,,100]], //Skarmory
	[589,Ar,'wanderer',[,,,,,,,100]], //Escavalier
	[782,SwAr,'wanderer',[,,,,,,,100]], //Jangmo-o
	[40,Ar,'wanderer',[,,,,,,,,100]], //Wigglytuff
	[764,Ar,'wanderer',[,,,,,,,,100]], //Comfey
	[426,Ar,'wanderer',[,,,,,,,,100]], //Drifblim
	[184,Ar,'wanderer',[,,,,,,,,100]], //Azumarill
	[282,Ar,'wanderer',[,,,,,,,,100]], //Gardevoir

	generateRaidDen('A49',119,120),
	generateRaidDen('A50',154,145),
	generateRaidDen('A51',117,118),
	generateRaidDen('A52',115,116),
	generateRaidDen('A53',111,112),
	generateRaidDen('A54',109,149),
	generateRaidDen('A55',101,102)
]},
{name:['Warm-Up Tunnel',,,,'Gruta Calentamiento',,'热身洞穴'],encounters:[ //90875F718CA13690
	[27,Ar,'overworld',56],
	[104,Ar,'overworld',32],
	[324,Ar,'overworld',5],
	[115,Ar,'overworld',5],
	[113,Ar,'overworld',[2,2,2,2,,,2,2]],
	[242,Ar,'overworld',[,,,,,,,,2]]
]},
{name:['Potbottom Desert',,,,'Cuenca Arenosa',,'锅底沙漠'],encounters:[ //908760718CA13843
	[551,Ar,'overworld',[56,36,36,56,,,36,36,56]],
	[111,Ar,'overworld',32],
	[324,Ar,'overworld',5],
	[627,SwAr,'overworld',5],
	[113,Ar,'overworld',[2,2,2,2,,,2,2]],
	[624,SwAr,'overworld',[,10]],
	[782,SwAr,'overworld',[,10]],
	[403,Ar,'overworld',[,,20]],
	[661,Ar,'overworld',[,,,,,,20]],
	[843,SwAr,'overworld',[,,,,,,,10]],
	[559,SwAr,'overworld',[,,,,,,,10]],
	[242,Ar,'overworld',[,,,,,,,,2]],
	[629,ShAr,'overworld',5],
	[624,ShAr,'overworld',[,20]],
	[843,ShAr,'overworld',[,,,,,,,20]],

	[464,Ar,'wanderer',[100,,,,,,100,100,100]], //Rhyperior
	[105,Ar,'wanderer',[100,,,,,,100,,100]], //Marowak
	[112,Ar,'wanderer',[100,,,,,,100,100]], //Rhydon
	[844,Ar,'wanderer',[100,,,,,,100,,100]], //Sandaconda
	[628,SwAr,'wanderer'], //Braviary
	[630,ShAr,'wanderer'], //Mandibuzz
	[553,Ar,'wanderer',[,100,100,100]], //Krookodile
	[552,Ar,'wanderer',[,100,100,100]], //Krokorok
	[324,Ar,'wanderer',[,,,,,,100,,100]], //Torkoal
	[637,Ar,'wanderer',[,,,,,,100]], //Volcarona
	[28,Ar,'wanderer',[,,,,,,,100]], //Sandslash

	generateRaidDen('A56',103,150),
	generateRaidDen('A57',113,114),
	generateRaidDen('A58',115,116)
]},
{name:['Workout Sea',,,,'Mar Gimnástico',,'健身之海'],encounters:[ //909170718CA9A7F8
	[132,Ar,'overworld',82],
	[102,Ar,'overworld',16],
	[113,Ar,'overworld',[2,2,2,2,,,2,2]],
	[242,Ar,'overworld',[,,,,,,,,2]],
	[824,Ar,'hidden',30],
	[132,Ar,'hidden',30],
	[102,Ar,'hidden',30],
	[440,Ar,'hidden',10],
	[819,Ar,'shake_tree',70],
	[840,Ar,'shake_tree',30],
	[129,Ar,'fish',50],
	[223,Ar,'fish',40],
	[224,Ar,'fish',10],

	[278,Ar,'surf',30],
	[72,Ar,'surf',[28,27,28,21,,,28,28,27]],
	[458,Ar,'surf',[35,20,20,16,,,20,35,20]],
	[692,SwAr,'surf',5],
	[130,Ar,'surf',1],
	[693,SwAr,'surf',1],
	[73,Ar,'surf',[,15]],
	[593,Ar,'surf',[,1,,,,,,,1]],
	[279,Ar,'surf',[,,15,15]],
	[170,Ar,'surf',[,,,10]],
	[171,Ar,'surf',[,,,1]],
	[662,Ar,'surf',[,,,,,,15]],
	[425,Ar,'surf',[,,,,,,,,15]],
	[690,ShAr,'surf',5],
	[691,ShAr,'surf',1],
	
	[319,Ar,'surf',100],
	
	[321,Ar,'interact'], //Wailord

	[103,Ar,'wanderer',[100,,,,,,100]], //Exeggutor
	[132,Ar,'wanderer'], //Ditto
	[479,Ar,'wanderer'], //Rotom

	generateRaidDen('A59',155,146),
	generateRaidDen('A60',139,140),
	generateRaidDen('A61',152,153),
	generateRaidDen('A62',121,122),
	generateRaidDen('A63',109,110),
	generateRaidDen('A63',107,108),
	generateRaidDen('A64',131,132)
]},
{name:['Stepping-Stone Sea',,,,'Mar Andana',,'列岛海域'],encounters:[ //909173718CA9AD11
	[278,Ar,'overworld',82],
	[102,Ar,'overworld',16],
	[113,Ar,'overworld',[2,2,2,2,,,2,2]],
	[242,Ar,'overworld',[,,,,,,,,2]],
	[824,Ar,'hidden',30],
	[819,Ar,'hidden',30],
	[102,Ar,'hidden',30],
	[440,Ar,'hidden',10],
	[819,Ar,'shake_tree',60],
	[840,Ar,'shake_tree',30],
	[841,SwAr,'shake_tree',10],
	[129,Ar,'fish',60],
	[746,Ar,'fish',40],
	[842,ShAr,'shake_tree',10],
	
	[278,Ar,'surf',30],
	[72,Ar,'surf',[28,27,28,21,,,28,28,27]],
	[458,Ar,'surf',[15,,,,,,,15]],
	[592,Ar,'surf',[20,20,20,16,,,20,20,20]],
	[692,SwAr,'surf',5],
	[130,Ar,'surf',1],
	[693,SwAr,'surf',1],
	[73,Ar,'surf',[,15]],
	[593,Ar,'surf',[,1,,,,,,,1]],
	[279,Ar,'surf',[,,15,15]],
	[170,Ar,'surf',[,,,10]],
	[171,Ar,'surf',[,,,1]],
	[662,Ar,'surf',[,,,,,,15]],
	[425,Ar,'surf',[,,,,,,,,15]],
	[319,Ar,'surf',100],
	[690,ShAr,'surf',5],
	[691,ShAr,'surf',1],
	{
		group:['Area 2',,,,'Área 2',,'区域 2'],encounters:[
			[819,Ar,'overworld',82],
			[102,Ar,'overworld',16],
			[113,Ar,'overworld',[2,2,2,2,,,2,2]],
			[242,Ar,'overworld',[,,,,,,,,2]]
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
{name:['Insular Sea',,,,'Mar Islejos',,'离岛海域'],encounters:[ //909172718CA9AB5E
	[824,Ar,'hidden',30],
	[278,Ar,'hidden',30],
	[102,Ar,'hidden',30],
	[440,Ar,'hidden',10],
	[819,Ar,'shake_tree',70],
	[840,Ar,'shake_tree',30],
	[129,Ar,'fish',60],
	[746,Ar,'fish',40],
	
	[278,Ar,'surf',30],
	[72,Ar,'surf',[28,27,28,21,,,28,28,27]],
	[458,Ar,'surf',[15,,,,,,,15]],
	[116,Ar,'surf',[20,20,20,16,,,20,20,20]],
	[692,SwAr,'surf',5],
	[130,Ar,'surf',1],
	[693,SwAr,'surf',1],
	[73,Ar,'surf',[,15]],
	[593,Ar,'surf',[,1,,,,,,,1]],
	[279,Ar,'surf',[,,15,15]],
	[170,Ar,'surf',[,,,10]],
	[171,Ar,'surf',[,,,1]],
	[662,Ar,'surf',[,,,,,,15]],
	[425,Ar,'surf',[,,,,,,,,15]],
	[319,Ar,'surf',100],
	[690,ShAr,'surf',5],
	[691,ShAr,'surf',1],

	[103,Ar,'wanderer',[100,,100,,,,100,100]], //Exeggutor
	[571,Ar,'wanderer',[,100]], //Zoroark
	[279,Ar,'wanderer',[,100,100,100]], //Pelipper
	[462,Ar,'wanderer',[,,,100]], //Magnezone
	[637,Ar,'wanderer',[,,,,,,100]], //Volcarona
	[65,Ar,'wanderer',[,,,,,,,,100]], //Alakazam
	[764,Ar,'wanderer',[,,,,,,,,100]], //Comfey

	generateRaidDen('A74',125,126),
	generateRaidDen('A75',99,100),
	generateRaidDen('A76',111,112),
	generateRaidDen('A77',139,140),
	generateRaidDen('A78',137,147)
]},
{name:['Honeycalm Sea',,,,'Mar Meloso',,'蜂巢海'],encounters:[ //909175718CA9B077
	[415,Ar,'overworld',82],
	[548,Ar,'overworld',16],
	[113,Ar,'overworld',[2,2,2,2,,,2,2]],
	[242,Ar,'overworld',[,,,,,,,,2]],
	[824,Ar,'hidden',30],
	[415,Ar,'hidden',30],
	[548,Ar,'hidden',30],
	[440,Ar,'hidden',10],
	[129,Ar,'fish',60],
	[746,Ar,'fish',40],

	[278,Ar,'surf',30],
	[72,Ar,'surf',[28,27,28,21,,,28,28,27]],
	[458,Ar,'surf',[15,,,,,,,15]],
	[320,Ar,'surf',[20,20,20,16,,,20,20,20]],
	[692,SwAr,'surf',5],
	[130,Ar,'surf',1],
	[693,SwAr,'surf',1],
	[73,Ar,'surf',[,15]],
	[593,Ar,'surf',[,1,,,,,,,1]],
	[279,Ar,'surf',[,,15,15]],
	[170,Ar,'surf',[,,,10]],
	[171,Ar,'surf',[,,,1]],
	[662,Ar,'surf',[,,,,,,15]],
	[425,Ar,'surf',[,,,,,,,,15]],
	[690,ShAr,'surf',5],
	[691,ShAr,'surf',1],
	
	[117,Ar,'wanderer_surf',[100,100,100,,,,100,100,100]], //Seadra
	[230,Ar,'wanderer_surf',[,,,100]], //Kingdra

	generateRaidDen('A79',131,132),
	generateRaidDen('A80',123,124),
	generateRaidDen('A81',121,122),
	generateRaidDen('A82',139,140),
	generateRaidDen('A83',105,106)
]},
{name:['Honeycalm Island',,,,'Isla Melosa',,'蜂巢島'],encounters:[ //908DEC718CA691D5
	[72,Ar,'hidden',100],
	[129,Ar,'fish',60],
	[746,Ar,'fish',40],
	
	[278,Ar,'surf',30],
	[72,Ar,'surf',[28,27,28,21,,,28,28,27]],
	[458,Ar,'surf',[15,,,,,,,15]],
	[320,Ar,'surf',[20,20,20,16,,,20,20,20]],
	[692,SwAr,'surf',5],
	[130,Ar,'surf',1],
	[693,SwAr,'surf',1],
	[73,Ar,'surf',[,15]],
	[593,Ar,'surf',[,1,,,,,,,1]],
	[279,Ar,'surf',[,,15,15]],
	[170,Ar,'surf',[,,,10]],
	[171,Ar,'surf',[,,,1]],
	[662,Ar,'surf',[,,,,,,15]],
	[425,Ar,'surf',[,,,,,,,,15]],
	[319,Ar,'surf',100],
	[690,ShAr,'surf',5],
	[691,ShAr,'surf',1],

	[549,Ar,'wanderer',[100,,,,,,100,100]], //Lilligant
	[415,Ar,'wanderer',[,100,100,100]], //Combee
	[764,Ar,'wanderer',[,,,,,,,,100]], //Comfey

	generateRaidDen('A84',143,144), //all dens here are the same
	/*generateRaidDen('A85',143,144),
	generateRaidDen('A86',143,144),
	generateRaidDen('A87',143,144),
	generateRaidDen('A88',143,144),
	generateRaidDen('A89',143,144)*/

	[416,Ar,'raid_special']
]},









{name:['Crown Tundra',,,,'Nieves de la Corona',,'王冠雪原'],encounters:[
	[alternateForm(144,1),Cr,'roaming']
]},
{name:['Slippery Slope',,,,'Campo Deslizante',,'起橇雪原'],encounters:[
	[832,Cr,'overworld',[30,,,,,,20]],
	[872,Cr,'overworld',[25,22,,,30,30,25,,22]],
	[221,Cr,'overworld',[24,22,,,29,29,24,,22]],
	[124,Cr,'overworld',[10,10,,,10,10,10,,10]],
	[698,Cr,'overworld',[10,10,,,10,10,10,,10]],
	[531,Cr,'overworld',[1,1,,,1,1,1,,1]],
	[333,Cr,'overworld',[,15]],
	[215,Cr,'overworld',[,10]],
	[708,Cr,'overworld',[,10]],
	[615,Cr,'overworld',[,,100,100,20,20,,100]],
	[126,Cr,'overworld',[,,,,,,10]],
	[856,Cr,'overworld',[,,,,,,,,10]],
	[859,Cr,'overworld',[,,,,,,,,10]],
	[575,SwCr,'overworld',[,,,,,,,,10]],
	[578,ShCr,'overworld',[,,,,,,,,10]],
	[778,Cr,'overworld',[,,,,,,,,5]],
	[439,Cr,'hidden',[20,20,100,100,25,25,16,100,16]],
	[872,Cr,'hidden',[20,20,,,25,25,16,,16]],
	[238,Cr,'hidden',[20,20,,,25,25,16,,16]],
	[220,Cr,'hidden',[20,20,,,25,25,16,,16]],
	[831,Cr,'hidden',[20,,,,,,18]],
	[333,Cr,'hidden',[,20]],
	[240,Cr,'hidden',[,,,,,,18]],
	[856,Cr,'hidden',[,,,,,,,,18]],
	[574,SwCr,'hidden',[,,,,,,,,18]],
	[577,ShCr,'hidden',[,,,,,,,,18]],
	[819,Cr,'shake_tree',70],
	[820,Cr,'shake_tree',30],

	[803,Cr,'gift'],

	[143,Cr,'wanderer',[100,,,,,,100]], //Snorlax
	[333,Cr,'wanderer',[,100,100,100,100]], //Swablu
	[473,Cr,'wanderer',[100,100,100,100,100,100,100,100]], //Mamoswine
	[698,Cr,'wanderer',[,100,100,100,100,100,,100]], //Amaura
	[778,Cr,'wanderer',[,,,,,,,,100]], //Mimikyu
	[124,Cr,'wanderer',[,,,,100,100,,100,100]], //Jynx
	[615,Cr,'wanderer',[,,,,100,100,,100]], //Cryogonal
	[709,Cr,'wanderer',[,100,100,100]], //Trevenant
	[832,Cr,'wanderer',[100,,,,,,100]], //Dubwool
	[857,Cr,'wanderer',[,,,,,,,,100]], //Hattrem
	[872,Cr,'wanderer',[100,,,,,,,,100]], //Snom
	[461,Cr,'wanderer',[,100,100,100]], //Weavile
	[126,Cr,'wanderer',[,,,,,,100]], //Magmar
	[861,Cr,'wanderer',[,,,,,,,,100]], //Grimmsnarl
	[362,Cr,'wanderer',[,,,,,100,,100]], //Glalie
	[460,Cr,'wanderer',[,,,,100,,,100]], //Abomasnow
	[576,Cr,'wanderer',[,,,,,,,,100]], //Gothitelle
	[579,Cr,'wanderer',[,,,,,,,,100]], //Reuniclus
	[478,Cr,'wanderer',[,,,,,100,,100]], //Froslass
	[467,Cr,'wanderer',[,,,,,,100]], //Magmortar
	[531,Cr,'wanderer'], //Audino

	generateRaidDen('C01',166,167),
	generateRaidDen('C02',180,181),
	generateRaidDen('C03',168,169),
	generateRaidDen('C04',168,169),
	generateRaidDen('C05',158,159),
	generateRaidDen('C06',182,183),

	{group:['Max Lair',,,,'Supernido Dinamax',,'极巨巢穴'],showAsGrid:true,encounters:[
		[253,Cr,'raid_special'],
		[254,Cr,'raid_special'],
		[256,Cr,'raid_special'],
		[257,Cr,'raid_special'],
		[259,Cr,'raid_special'],
		[260,Cr,'raid_special'],

		[144,Cr,'raid_special'],
		[145,Cr,'raid_special'],
		[146,Cr,'raid_special'],
		[150,Cr,'raid_special'],
		[243,Cr,'raid_special'],
		[244,Cr,'raid_special'],
		[245,Cr,'raid_special'],
		[249,Cr,'raid_special'],
		[250,Cr,'raid_special'],
		[380,Cr,'raid_special'],
		[381,Cr,'raid_special'],
		[382,Cr,'raid_special'],
		[383,SwCr,'raid_special'],
		[384,ShCr,'raid_special'],
		[480,Cr,'raid_special'],
		[481,Cr,'raid_special'],
		[482,Cr,'raid_special'],
		[483,SwCr,'raid_special'],
		[484,ShCr,'raid_special'],
		[485,Cr,'raid_special'],
		[487,Cr,'raid_special'],
		[488,Cr,'raid_special'],
		[641,SwCr,'raid_special'],
		[642,ShCr,'raid_special'],
		[643,SwCr,'raid_special'],
		[644,ShCr,'raid_special'],
		[645,Cr,'raid_special'],
		[646,Cr,'raid_special'],
		[716,SwCr,'raid_special'],
		[717,ShCr,'raid_special'],
		[718,Cr,'raid_special'],
		[785,Cr,'raid_special'],
		[786,Cr,'raid_special'],
		[787,Cr,'raid_special'],
		[788,Cr,'raid_special'],
		[791,SwCr,'raid_special'],
		[792,ShCr,'raid_special'],
		[793,Cr,'raid_special'],
		[794,Cr,'raid_special'],
		[795,Cr,'raid_special'],
		[796,Cr,'raid_special'],
		[797,Cr,'raid_special'],
		[798,Cr,'raid_special'],
		[799,Cr,'raid_special'],
		[800,Cr,'raid_special'],
		[805,Cr,'raid_special'],
		[806,Cr,'raid_special']
	]}
]},
{name:['Freezington',,,,'Villa Helada',,'冻凝村'],encounters:[
	[789,Cr,'gift']
]},
{name:['Frostpoint Field',,,,'Campo Bajocero',,'冰点雪原'],encounters:[
	[460,Cr,'overworld',[49,49,,,39,39,49,,49]],
	[832,Cr,'overworld',[30,,,,,,20]],
	[124,Cr,'overworld',[10,10,,,10,10,10,,10]],
	[698,Cr,'overworld',[10,10,,,10,10,10,,10]],
	[531,Cr,'overworld',[1,1,,,1,1,1,,1]],
	[333,Cr,'overworld',[,20]],
	[215,Cr,'overworld',[,10]],
	[615,Cr,'overworld',[,,100,100,20,20,,100]],
	[126,Cr,'overworld',[,,,,,,10]],
	[583,Cr,'overworld',[,,,,20,20]],
	[857,Cr,'overworld',[,,,,,,,,15]],
	[575,SwCr,'overworld',[,,,,,,,,10]],
	[578,ShCr,'overworld',[,,,,,,,,10]],
	[778,Cr,'overworld',[,,,,,,,,5]],
	[439,Cr,'hidden',[25,25,100,100,25,25,20,100,20]],
	[459,Cr,'hidden',[25,25,,,25,25,20,,20]],
	[238,Cr,'hidden',[25,25,,,25,25,20,,20]],
	[831,Cr,'hidden',[25,,,,,,20]],
	[333,Cr,'hidden',[,25]],
	[240,Cr,'hidden',[,,,,,,20]],
	[582,Cr,'hidden',[,,,,25,25]],
	[856,Cr,'hidden',[,,,,,,,,20]],
	[574,SwCr,'hidden',[,,,,,,,,20]],
	[577,ShCr,'hidden',[,,,,,,,,20]],
	[819,Cr,'shake_tree',70],
	[820,Cr,'shake_tree',30],

	[29,Cr,'wanderer',[100,100,100,100,100,100,100,100]], //Nidoran♀
	[32,Cr,'wanderer',[100,100,100,100,100,100,100,100]], //Nidoran♂
	[778,Cr,'wanderer',[,,,,,,,,100]], //Mimikyu
	[124,Cr,'wanderer',[,,,,100,,,,100]], //Jynx
	[143,Cr,'wanderer',[100,100,100,100,,,100]], //Snorlax
	[461,Cr,'wanderer',[,100,100,100]], //Weavile
	[584,Cr,'wanderer',[,,,,100,100,,100]], //Vanilluxe
	[698,Cr,'wanderer',[100,,,,100,100,,100]], //Amaura
	[126,Cr,'wanderer',[,,,,,,100]], //Magmar
	[333,Cr,'wanderer',[,100,100,100]], //Swablu
	[615,Cr,'wanderer',[,,,,100,100,,100]], //Cryogonal
	[832,Cr,'wanderer',[100,,,,,,100]], //Dubwool
	[460,Cr,'wanderer',[100,100,,,100,,100,100]], //Abomasnow
	[858,Cr,'wanderer',[,,,,,,,,100]], //Hatterene
	[359,Cr,'wanderer',[,,,,,100]], //Absol
	[576,SwCr,'wanderer',[,,,,,,,,100]], //Gothitelle
	[579,ShCr,'wanderer',[,,,,,,,,100]], //Reuniclus
	[133,Cr,'wanderer',[,,,,,100,,100]], //Eevee
	[531,Cr,'wanderer'], //Audino

	generateRaidDen('C07',190,191),
	generateRaidDen('C08',172,173),
	generateRaidDen('C09',176,177),
	generateRaidDen('C10',186,187),
	generateRaidDen('C11',164,165),
]},
{name:['Giant\'s Bed',,,,'Lecho del Gigante',,'巨人睡榻'],encounters:[
	[32,SwCr,'overworld',[21,21,21,21,21,19,19,100,17]],
	[29,SwCr,'overworld',[21,21,21,21,21,19,19,,17]],
	[32,ShCr,'overworld',[26,26,26,26,26,24,24,100,22]],
	[874,SwCr,'overworld',[15,15,15,15,15,15,15,,15]],
	[29,ShCr,'overworld',[26,26,26,26,26,24,24,,22]],
	[832,Cr,'overworld',[15,,,,,,15]],
	[437,SwCr,'overworld',[12,12,12,12,12,11,11,,10]],
	[437,ShCr,'overworld',[17,17,17,17,17,16,16,,15]],
	[533,Cr,'overworld',[10]],
	[133,Cr,'overworld',[5]],
	[531,Cr,'overworld',[1,1,1,1,1,1,1,,1]],
	[333,Cr,'overworld',[,15]],
	[alternateForm(264,1),Cr,'overworld',[,10]],
	[608,Cr,'overworld',[,5,,,,,,,10]],
	[752,Cr,'overworld',[,,30,10]],
	[125,Cr,'overworld',[,,,10]],
	[596,Cr,'overworld',[,,,10]],
	[126,Cr,'overworld',[,,,,,,10]],
	[631,Cr,'overworld',[,,,,,,5]],
	[632,Cr,'overworld',[,,,,,,5]],
	[615,Cr,'overworld',[,,,,10,10]],
	[583,Cr,'overworld',[,,,,10,10]],
	[361,Cr,'overworld',[,,,,10,10]],
	[359,Cr,'overworld',[,,,,,5]],
	[857,Cr,'overworld',[,,,,,,,,10]],
	[860,Cr,'overworld',[,,,,,,,,10]],
	[778,Cr,'overworld',[,,,,,,,,5]],
	[35,Cr,'overworld',[,,,,,,,,5]],
	[439,Cr,'hidden',[20,20,20,16,20,20,16,100,20]],
	[32,Cr,'hidden',[20,20,20,16,20,20,16,,20]],
	[29,Cr,'hidden',[20,20,20,16,20,20,16,,20]],
	[616,Cr,'hidden',[20,20,20,16,20,20,16,,20]],
	[831,Cr,'hidden',[20,,,,,,18]],
	[333,Cr,'hidden',[,20]],
	[751,Cr,'hidden',[,,20,18]],
	[239,Cr,'hidden',[,,,18]],
	[240,Cr,'hidden',[,,,,,,18]],
	[582,Cr,'hidden',[,,,,20,20]],
	[856,Cr,'hidden',[,,,,,,,,20]],
	[819,Cr,'shake_tree',80],
	[820,Cr,'shake_tree',20],
	[129,Cr,'fish',20],
	[339,Cr,'fish',20],
	[550,SwCr,'fish',20],
	[alternateForm(550,1),ShCr,'fish',20],
	[130,Cr,'fish',15],
	[340,Cr,'fish',15],
	[345,Cr,'fish',10],

	[339,Cr,'surf',[33,33,33,33,25,25,33,100,33]],
	[550,SwCr,'surf',[33,33,33,33,25,25,33,,33]],
	[alternateForm(550,1),ShCr,'surf',[33,33,33,33,25,25,33,,33]],
	[129,Cr,'surf',[33,33,33,33,25,25,33,,33]],
	[349,Cr,'surf',[1,1,1,1,1,1,1,,1]],
	[583,Cr,'surf',[,,,,24,24]],

	[486,Cr,'raid_special'],
	[640,Cr,'interact'],

	[437,Cr,'wanderer'], //Bronzong
	[29,Cr,'wanderer',[100,,100,100,,,100]], //Nidoran♀
	[30,Cr,'wanderer'], //Nidorina
	[32,Cr,'wanderer',[,100,,,100,100,,100]], //Nidoran♂
	[33,Cr,'wanderer'], //Nidorino
	[31,Cr,'wanderer',[100,100,100,,100,100,100,100,100]], //Nidoqueen
	[34,Cr,'wanderer',[100,100,100,100,100,100,,100,100]], //Nidoking
	[125,Cr,'wanderer',[,,,100]], //Electabuzz
	[126,Cr,'wanderer',[,,,,,,100]], //Magmar
	[359,Cr,'wanderer',[,,,,,100,,100]], //Absol
	[861,Cr,'wanderer',[,,,,,,,,100]], //Grimmsnarl
	[596,Cr,'wanderer',[,,,100]], //Galvantula
	[615,Cr,'wanderer',[,,,,100,100,,100]], //Cryogonal
	[631,Cr,'wanderer',[,,,,,,100]], //Heatmor
	[36,Cr,'wanderer',[,,,,,,,,100]], //Clefable
	[584,Cr,'wanderer',[,,,,100,100,,100]], //Vanilluxe
	[632,Cr,'wanderer',[,,,,,,100]], //Durant
	[752,Cr,'wanderer',[,,100,100]], //Araquanid
	[832,Cr,'wanderer',[100]], //Dubwool
	[862,Cr,'wanderer',[,100,100]], //Obstagoon
	[133,Cr,'wanderer',[100]], //Eevee
	[196,Cr,'wanderer',[,,,,100]], //Espeon
	[197,Cr,'wanderer',[,100]], //Umbreon
	[362,Cr,'wanderer',[,,,,100,100,,100]], //Glalie
	[471,Cr,'wanderer',[,,,,,100,,100]], //Glaceon
	[534,Cr,'wanderer',[100]], //Conkeldurr
	[609,Cr,'wanderer',[,100,,,,,,,100]], //Chandelure
	[778,Cr,'wanderer',[,,,,,,,,100]], //Mimikyu
	[874,SwCr,'wanderer'], //Stonjourner
	[143,ShCr,'wanderer'], //Snorlax
	[333,Cr,'wanderer',[,100]], //Swablu
	[820,Cr,'wanderer',[100,100,100,100,100,100,,100,100]], //Greedent
	[470,Cr,'wanderer',[100]], //Leafeon
	[478,Cr,'wanderer',[,,,,100,100,,100]], //Froslass
	[136,Cr,'wanderer',[,,,,,,100]], //Flareon
	[858,Cr,'wanderer',[,,,,,,,,100]], //Hatterene
	[134,Cr,'wanderer',[,,100]], //Vaporeon
	[466,Cr,'wanderer',[,,,100]], //Electivire
	[467,Cr,'wanderer',[,,,,,,100]], //Magmortar
	[135,Cr,'wanderer',[,,,100]], //Jolteon
	[334,Cr,'wanderer',[,100]], //Altaria
	[700,Cr,'wanderer',[,,,,,,,,100]], //Sylveon
	[340,Cr,'wanderer_surf'], //Whiscash
	[130,Cr,'wanderer_surf',[100,100,100,100,100,100,100,100]], //Gyarados
	[350,Cr,'wanderer_surf',[,,,,,,,,100]], //Milotic
	[142,Cr,'flying'], //Aerodactyl
	[531,Cr,'wanderer'], //Audino

	generateRaidDen('C12',188,189),
	generateRaidDen('C13',160,161),
	generateRaidDen('C14',180,181),
	generateRaidDen('C15',174,175),
	generateRaidDen('C16',186,187),
	generateRaidDen('C17',192,193),
	generateRaidDen('C18',174,175),
	generateRaidDen('C19',162,163),
	generateRaidDen('C20',158,159),
	generateRaidDen('C21',170,171),
	generateRaidDen('C22',184,185),
	generateRaidDen('C23',172,173),
	generateRaidDen('C24',166,167),
	generateRaidDen('C25',160,161),
	generateRaidDen('C26',178,179),
	generateRaidDen('C27',158,159),
	generateRaidDen('C28',190,191),
	generateRaidDen('C29',164,165),
	generateRaidDen('C30',176,177),
	generateRaidDen('C31',180,181),
	generateRaidDen('C32',162,163),
	generateRaidDen('C33',170,171),

	{group:['Rock Peak Ruins',,,,'Ruinas Pico Roca',,'岩山遗迹'],encounters:[
		[377,Cr,'interact']
	]},
	{group:['Iron Ruins',,,,'Ruinas Hierro',,'黑金遗迹'],encounters:[
		[379,Cr,'interact']
	]}
]},
{name:['Old Cemetery',,,,'Viejo Cementerio',,'远古墓地'],encounters:[
	[32,SwCr,'overworld',[35,20,25,20,20,20,25,,22]],
	[32,ShCr,'overworld',[35,20,25,20,20,20,25,,17]],
	[29,SwCr,'overworld',[35,20,25,20,20,20,25,,22]],
	[29,ShCr,'overworld',[35,20,25,20,20,20,25,,17]],
	[854,Cr,'overworld',[19,19,19,19,19,20,19,,20]],
	[886,Cr,'overworld',[9,9,9,9,9,9,9,100,9]],
	[531,Cr,'overworld',[1,1,1,1,1,1,1,,1]],
	[alternateForm(854,1),Cr,'overworld',[1,1,1,1,1,1,1,,1]],
	[608,Cr,'overworld',[,15,,,,,,,10]],
	[708,Cr,'overworld',[,15]],
	[752,Cr,'overworld',[,,20,10]],
	[596,Cr,'overworld',[,,,10]],
	[125,Cr,'overworld',[,,,10]],
	[126,Cr,'overworld',[,,,,,,10]],
	[631,Cr,'overworld',[,,,,,,5]],
	[632,Cr,'overworld',[,,,,,,5]],
	[615,Cr,'overworld',[,,,,15,12]],
	[583,Cr,'overworld',[,,,,15,12]],
	[359,Cr,'overworld',[,,,,,5]],
	[857,Cr,'overworld',[,,,,,,,,10]],
	[778,Cr,'overworld',[,,,,,,,,5]],
	[alternateForm(77,1),ShCr,'overworld',[,,,,,,,,10]],
	[439,Cr,'hidden',[20,16,16,14,16,16,16,100,16]],
	[32,Cr,'hidden',[20,16,16,14,16,16,16,,16]],
	[29,Cr,'hidden',[20,16,16,14,16,16,16,,16]],
	[588,Cr,'hidden',[20,16,16,14,16,16,16,,16]],
	[854,Cr,'hidden',[19,17,17,13,17,17,17,,17]],
	[alternateForm(854,1),Cr,'hidden',[1,1,1,1,1,1,1,,1]],
	[708,Cr,'hidden',[,18]],
	[751,Cr,'hidden',[,,18,15]],
	[239,Cr,'hidden',[,,,15]],
	[240,Cr,'hidden',[,,,,,,18]],
	[582,Cr,'hidden',[,,,,18,18]],
	[856,Cr,'hidden',[,,,,,,,,18]],

	[897,Cr,'interact'],
	
	[alternateForm(78,1),ShCr,'wanderer',[,,,,,,,,100]], //Rapidash-1
	[478,Cr,'wanderer',[,,,,100,100,,100]], //Froslass
	[709,Cr,'wanderer',[,100]], //Trevenant
	[778,SwCr,'wanderer',[,,,,,,,,100]], //Mimikyu
	[855,Cr,'wanderer',[100,,100,100,,100,100,100,100]], //Polteageist
	[887,Cr,'wanderer',[100,100,100,100,100,,100]], //Dragapult

	generateRaidDen('C34',182,183),
	generateRaidDen('C35',192,193)
]},
{name:['Snowslide Slope',,,,'Desfiladero Nevado',,'雪中溪谷'],encounters:[
	[872,SwCr,'overworld',[35,35,,,25,20,30,,35]],
	[872,ShCr,'overworld',[35,35,,,25,25,30,,35]],
	[374,SwCr,'overworld',[24,24,100,100,19,14,24,100,24]],
	[374,ShCr,'overworld',[24,24,100,100,19,19,24,100,24]],
	[832,Cr,'overworld',[20,,,,,,15]],
	[698,Cr,'overworld',[10,10,,,10,10,10,,10]],
	[621,Cr,'overworld',[10,,,,,,10]],
	[531,Cr,'overworld',[1,1,,,1,1,1,,1]],
	[708,Cr,'overworld',[,20]],
	[215,Cr,'overworld',[,10]],
	[126,Cr,'overworld',[,,,,,,10]],
	[615,Cr,'overworld',[,,,,10,10]],
	[361,Cr,'overworld',[,,,,10,10]],
	[583,Cr,'overworld',[,,,,10,10]],
	[614,Cr,'overworld',[,,,,10,10]],
	[225,Cr,'overworld',[,,,,5]],
	[alternateForm(554,1),SwCr,'overworld',[,,,,,10]],
	[359,Cr,'overworld',[,,,,,5]],
	[860,Cr,'overworld',[,,,,,,,,20]],
	[778,Cr,'overworld',[,,,,,,,,5]],
	[35,Cr,'overworld',[,,,,,,,,5]],
	[439,Cr,'hidden',[25,25,100,100,25,25,20,100,33]],
	[374,Cr,'hidden',[25,25,,,25,25,20,,33]],
	[872,Cr,'hidden',[25,25,,,25,25,20,,34]],
	[831,Cr,'hidden',[25,,,,,,20]],
	[708,Cr,'hidden',[,25]],
	[240,Cr,'hidden',[,,,,,,20]],
	[582,Cr,'hidden',[,,,,25,25]],
	[129,Cr,'fish',45],
	[550,SwCr,'fish',40],
	[alternateForm(550,1),ShCr,'fish',40],
	[130,Cr,'fish',15],

	[896,Cr,'interact'],

	[615,Cr,'wanderer',[,,,,100,100,,100]], //Cryogonal
	[698,Cr,'wanderer',[100,100,100,100,,,,,100]], //Amaura
	[832,Cr,'wanderer',[100,,,,,,100]], //Dubwool
	[872,Cr,'wanderer',[100,100,100,100]], //Snom
	[36,Cr,'wanderer',[,,,,,,,,100]], //Clefable
	[126,Cr,'wanderer',[,,,,,,100]], //Magmar
	[362,SwCr,'wanderer',[,,,,100]], //Glalie
	[362,ShCr,'wanderer',[,,,,100,100,,100]], //Glalie
	[584,Cr,'wanderer',[,,,,100,100,,100]], //Vanilluxe
	[359,Cr,'wanderer',[,,,,,100,,100]], //Absol
	[461,Cr,'wanderer',[,100,100,100]], //Weavile
	[621,Cr,'wanderer',[100,,,,,,100]], //Druddigon
	[778,Cr,'wanderer',[,,,,,,,,100]], //Mimikyu
	[375,Cr,'wanderer'], //Metang
	[614,Cr,'wanderer',[,,,,100,100,,100]], //Beartic
	[709,Cr,'wanderer',[,100,100,100]], //Trevenant
	[861,Cr,'wanderer',[,,,,,,,,100]], //Grimmsnarl
	[467,Cr,'wanderer',[,,,,,,100]], //Magmortar
	[478,Cr,'wanderer',[,,,,100,100,,100]], //Froslass
	[699,Cr,'wanderer',[100,100,100,100,100,100,,100,100]], //Aurorus
	[376,Cr,'wanderer'], //Metagross
	[alternateForm(555,2),SwCr,'wanderer',[,,,,,100,,100]], //Darmanitan-2

	generateRaidDen('C36',180,181),
	generateRaidDen('C37',172,173),
	generateRaidDen('C38',186,187),
	generateRaidDen('C39',190,191),
	generateRaidDen('C40',168,169),
	generateRaidDen('C41',188,189),
	generateRaidDen('C42',196,197),
	generateRaidDen('C43',160,161),
	generateRaidDen('C44',178,179),

	{group:['Iceberg Ruins',,,,'Ruinas Iceberg',,'冰山遗跡'],encounters:[
		[378,Cr,'interact']
	]}
]},
{name:['Tunnel to the Top',,,,'Túnel Ascensión',,'登顶隧道'],encounters:[
	[41,Cr,'overworld',40],
	[703,Cr,'overworld',24],
	[361,Cr,'overworld',20],
	[371,SwCr,'overworld',10],
	[443,ShCr,'overworld',10],
	[35,Cr,'overworld',5],
	[531,Cr,'overworld',1],

	[41,Cr,'wanderer'], //Zubat
	[371,SwCr,'wanderer'], //Bagon
	[443,ShCr,'wanderer'], //Gible
	[478,Cr,'wanderer'], //Froslass
	[373,SwCr,'wanderer'], //Salamence
	[445,ShCr,'wanderer'], //Garchomp
	[703,Cr,'wanderer'], //Carbink
	[42,Cr,'wanderer'], //Golbat
	[36,Cr,'wanderer'], //Clefable
	[621,Cr,'wanderer'] //Druddigon
]},
{name:['Path to the Peak',,,,'Senda Blancacima',,'通顶雪道'],encounters:[
	[873,Cr,'overworld',[70,70,100,100,80,70,70,100,80]],
	[872,Cr,'overworld',[19,19,,,19,19,19,,19]],
	[621,Cr,'overworld',[10,,,,,,10]],
	[531,Cr,'overworld',[1,1,,,1,1,1,,1]],
	[333,Cr,'overworld',[,10]],
	[359,Cr,'overworld',[,,,,,10]],

	[873,Cr,'wanderer'], //Frosmoth
	[334,Cr,'wanderer',[,100]], //Altaria
	[359,Cr,'wanderer',[,,,,,100,,100]], //Absol
	[373,SwCr,'wanderer',[,,,,,,100]], //Salamence
	[445,ShCr,'wanderer',[,,,,,,100]], //Garchomp
	[621,Cr,'wanderer',[100]], //Druddigon

	generateRaidDen('C45',188,189),
	generateRaidDen('C46',184,185),
	generateRaidDen('C47',178,179)
]},
{name:['Crown Shrine',,,,'Templo Corona',,'王冠神殿'],encounters:[
	[898,Cr,'interact'],
	
	generateRaidDen('C48',166,167)
]},
{name:['Giant\'s Foot',,,,'Suela del Gigante',,'巨人鞋底'],encounters:[
	[879,SwCr,'overworld',[24,24,24,19,22,19,24,,24]],
	[879,ShCr,'overworld',[31,31,31,26,29,26,31,,31]],
	[437,SwCr,'overworld',[15,15,15,10,12,10,15,,15]],
	[437,ShCr,'overworld',[23,23,23,18,20,18,23,,23]],
	[874,SwCr,'overworld',[15,15,15,15,15,15,15,,15]],
	[851,Cr,'overworld',[15,,,,,,15]],
	[566,Cr,'overworld',[10,10,10,10,10,10,10,100,10]],
	[344,Cr,'overworld',[10,10,10,10,10,10,10,,10]],
	[533,Cr,'overworld',[10]],
	[531,Cr,'overworld',[1,1,1,1,1,1,1,,1]],
	[333,Cr,'overworld',[,15]],
	[708,Cr,'overworld',[,10]],
	[752,Cr,'overworld',[,,25,15]],
	[596,Cr,'overworld',[,,,10]],
	[125,Cr,'overworld',[,,,10]],
	[126,Cr,'overworld',[,,,,,,10]],
	[615,Cr,'overworld',[,,,,10,10]],
	[583,Cr,'overworld',[,,,,10,10]],
	[361,Cr,'overworld',[,,,,10,10]],
	[359,Cr,'overworld',[,,,,,5]],
	[857,Cr,'overworld',[,,,,,,,,10]],
	[860,Cr,'overworld',[,,,,,,,,10]],
	[778,Cr,'overworld',[,,,,,,,,5]],
	[439,Cr,'hidden',[25,25,25,20,25,25,20,100,25]],
	[878,Cr,'hidden',[25,25,25,20,25,25,20,,25]],
	[436,Cr,'hidden',[25,25,25,20,25,25,20,,25]],
	[850,Cr,'hidden',[25,,,,,,20]],
	[708,Cr,'hidden',[,25]],
	[751,Cr,'hidden',[,,25,20]],
	[239,Cr,'hidden',[,,,20]],
	[240,Cr,'hidden',[,,,,,,20]],
	[582,Cr,'hidden',[,,,,25,25]],
	[856,Cr,'hidden',[,,,,,,,,25]],
	[819,Cr,'shake_tree',80],
	[820,Cr,'shake_tree',20],
	[129,Cr,'fish',20],
	[339,Cr,'fish',20],
	[550,SwCr,'fish',20],
	[alternateForm(550,1),ShCr,'fish',20],
	[340,Cr,'fish',15],
	[130,Cr,'fish',15],
	[345,Cr,'fish',10],

	[339,Cr,'surf',[33,33,33,33,25,25,33,100,33]],
	[550,SwCr,'surf',[33,33,33,33,25,25,33,,33]],
	[alternateForm(550,1),ShCr,'surf',[33,33,33,33,25,25,33,,33]],
	[129,Cr,'surf',[33,33,33,33,25,25,33,,33]],
	[349,Cr,'surf',[1,1,1,1,1,1,1,,1]],
	[583,Cr,'surf',[,,,,24,24]],

	[851,Cr,'wanderer',[100,,,,,,100]], //Centiskorch
	[879,Cr,'wanderer',[,100,100,100,100,100,,100,100]], //Copperajah
	[344,Cr,'wanderer',[,100,100,100,100,100,100,100,100]], //Claydol
	[437,Cr,'wanderer',[100,100]], //Bronzong
	[125,Cr,'wanderer',[,,,100]], //Electabuzz
	[126,Cr,'wanderer',[,,,,,,100]], //Magmar
	[334,Cr,'wanderer',[,100]], //Altaria
	[359,Cr,'wanderer',[,,,,,100,,100]], //Absol
	[534,Cr,'wanderer',[100]], //Conkeldurr
	[615,Cr,'wanderer',[,,,,100,100,,100]], //Cryogonal
	[752,Cr,'wanderer',[,,100]], //Araquanid
	[778,Cr,'wanderer',[,,,,,,,,100]], //Mimikyu
	[566,Cr,'wanderer'], //Archen
	[138,SwCr,'wanderer_surf'], //Omanyte
	[140,ShCr,'wanderer_surf'], //Kabuto
	[531,Cr,'wanderer'], //Audino

	generateRaidDen('C49',162,163),
	generateRaidDen('C50',166,167),
	generateRaidDen('C51',182,183),
	generateRaidDen('C52',186,187)
]},
{name:['Roaring-Sea Caves',,,,'Grutas Sonamar',,'海鸣洞窟'],encounters:[
	[41,Cr,'overworld',40],
	[703,Cr,'overworld',24],
	[221,Cr,'overworld',20],
	[633,SwCr,'overworld',10],
	[246,ShCr,'overworld',10],
	[447,Cr,'overworld',5],
	[531,Cr,'overworld',1],

	[339,Cr,'surf',[25,25,25,25,20,20,25,100,25]],
	[550,SwCr,'surf',[25,25,25,25,20,20,25,,25]],
	[alternateForm(550,1),ShCr,'surf',[25,25,25,25,20,20,25,,25]],
	[129,Cr,'surf',[25,25,25,25,20,20,25,,25]],
	[138,SwCr,'surf',[24,24,24,24,20,20,24,,24]],
	[140,ShCr,'surf',[24,24,24,24,20,20,24,,24]],
	[349,Cr,'surf',[1,1,1,1,1,1,1,,1]],
	[583,Cr,'surf',[,,,,19,19]],

	[41,Cr,'wanderer'], //Zubat
	[448,Cr,'wanderer'], //Lucario
	[42,Cr,'wanderer'], //Golbat
	[635,SwCr,'wanderer'], //Hydreigon
	[248,ShCr,'wanderer'], //Tyranitar
	[139,SwCr,'wanderer'], //Omastar
	[141,ShCr,'wanderer'] //Kabutops
]},
{name:['Frigid Sea',,,,'Mar Gélido',,'冻海'],encounters:[
	[363,SwCr,'overworld',[45,30,30,25,30,27,100,100,32]],
	[363,ShCr,'overworld',[37,22,22,17,22,20,100,100,25]],
	[713,SwCr,'overworld',[44,29,29,24,29,27,,,32]],
	[713,ShCr,'overworld',[37,22,22,17,22,19,,,24]],
	[875,ShCr,'overworld',[15,15,15,15,15,15,,,15]],
	[564,Cr,'overworld',[10,10,10,10,10,10,,,10]],
	[531,Cr,'overworld',[1,1,1,1,1,1,,,1]],
	[333,Cr,'overworld',[,15]],
	[215,Cr,'overworld',[,15]],
	[752,Cr,'overworld',[,,30,20]],
	[125,Cr,'overworld',[,,,10]],
	[871,Cr,'overworld',[,,,10]],
	[583,Cr,'overworld',[,,,,15,15]],
	[614,Cr,'overworld',[,,,,15,15]],
	[359,Cr,'overworld',[,,,,,5]],
	[857,Cr,'overworld',[,,,,,,,,20]],
	[778,Cr,'overworld',[,,,,,,,,5]],
	[712,Cr,'hidden',[34,34,25,20,25,25,,,25]],
	[439,Cr,'hidden',[33,33,25,20,25,25,100,100,25]],
	[363,Cr,'hidden',[33,33,25,20,25,25,,,25]],
	[751,Cr,'hidden',[,,25,20]],
	[239,Cr,'hidden',[,,,20]],
	[582,Cr,'hidden',[,,,,25,25]],
	[856,Cr,'hidden',[,,,,,,,,25]],
	[129,Cr,'fish',30],
	[550,SwCr,'fish',30],
	[alternateForm(550,1),ShCr,'fish',30],
	[320,Cr,'fish',20],
	[130,Cr,'fish',15],
	[781,Cr,'fish',5],
	
	[713,SwCr,'surf',[45,45,45,35,30,30,100,100,45]],
	[713,ShCr,'surf',[38,38,38,28,22,22,100,100,38]],
	[320,SwCr,'surf',[45,45,45,35,29,29,,,45]],
	[320,ShCr,'surf',[37,37,37,27,22,22,,,37]],
	[875,ShCr,'surf',[15,15,15,15,15,15,,,15]],
	[564,Cr,'surf',[10,10,10,10,10,10,,,10]],
	[871,Cr,'surf',[,,,20]],
	[615,Cr,'surf',[,,,,15,15]],
	[583,Cr,'surf',[,,,,15,15]],
	[131,Cr,'surf',[,,,,1,1]],

	[638,Cr,'interact'],

	[363,Cr,'wanderer'], //Spheal
	[564,Cr,'wanderer',[100,100,100,100,,,100,100,100]], //Tirtouga
	[334,Cr,'wanderer',[,100]], //Altaria
	[466,Cr,'wanderer',[,,,100]], //Electivire
	[467,Cr,'wanderer',[,,,,,,100]], //Magmortar
	[614,Cr,'wanderer',[,,,,100,100,,100]], //Beartic
	[713,Cr,'wanderer'], //Avalugg
	[858,Cr,'wanderer',[,,,,,,,,100]], //Hatterene
	[871,Cr,'wanderer',[,,,100]], //Pincurchin
	[364,Cr,'wanderer'], //Sealeo
	[365,Cr,'wanderer',[100,100,,,100,100,,100,100]], //Walrein
	[565,Cr,'wanderer',[100,,100,100,,,100]], //Carracosta
	[713,SwCr,'wanderer_surf'], //Avalugg
	[875,ShCr,'wanderer_surf'], //Eiscue

	generateRaidDen('C53',170,171),
	generateRaidDen('C54',184,185),
	generateRaidDen('C55',174,175),
	generateRaidDen('C56',186,187),
	generateRaidDen('C57',190,191),
	generateRaidDen('C58',162,163),
	generateRaidDen('C59',176,177),
	generateRaidDen('C60',188,189),
	generateRaidDen('C61',164,165),
	generateRaidDen('C62',170,171),
	generateRaidDen('C63',182,183),
	generateRaidDen('C64',168,169),
	generateRaidDen('C65',172,173),
	generateRaidDen('C66',170,171)
]},
{name:['Three-Point Pass',,,,'Encrucijada Tresvías',,'三岔平原'],encounters:[
	[437,Cr,'overworld',[27,27,27,27,27,30,22,100,30]],
	[713,Cr,'overworld',[27,27,27,27,27,20,22,,29]],
	[832,Cr,'overworld',[20,,,,,,10]],
	[344,Cr,'overworld',[15,15,15,15,15,15,15,,15]],
	[623,Cr,'overworld',[10,,,,,,,,10]],
	[531,Cr,'overworld',[1,1,1,1,1,20,1,,1]],
	[333,Cr,'overworld',[,15]],
	[708,Cr,'overworld',[,15]],
	[752,Cr,'overworld',[,,30,10]],
	[596,Cr,'overworld',[,,,10]],
	[125,Cr,'overworld',[,,,10]],
	[126,Cr,'overworld',[,,,,,,10]],
	[621,Cr,'overworld',[,,,,,,10]],
	[631,Cr,'overworld',[,,,,,,5]],
	[632,Cr,'overworld',[,,,,,,5]],
	[615,Cr,'overworld',[,,,,15,10]],
	[583,Cr,'overworld',[,,,,15,4]],
	[359,Cr,'overworld',[,,,,,1]],
	[857,Cr,'overworld',[,,,,,,,,10]],
	[778,Cr,'overworld',[,,,,,,,,5]],
	[439,Cr,'hidden',[25,25,25,20,25,25,20,100,25]],
	[436,Cr,'hidden',[25,25,25,20,25,25,20,,25]],
	[712,Cr,'hidden',[25,25,25,20,25,25,20,,25]],
	[831,Cr,'hidden',[25,,,,,,20]],
	[708,Cr,'hidden',[,25]],
	[751,Cr,'hidden',[,,25,20]],
	[239,Cr,'hidden',[,,,20]],
	[240,Cr,'hidden',[,,,,,,20]],
	[582,Cr,'hidden',[,,,,25,25]],
	[856,Cr,'hidden',[,,,,,,,,25]],

	[623,Cr,'wanderer'], //Golurk
	[466,Cr,'wanderer',[,,,100]], //Electivire
	[887,Cr,'wanderer',[100,100,100,,100,100,100,100,100]], //Dragapult

	{group:['Split-Decision Ruins',,,,'Ruinas del Dilema',,'抉择遗迹'],encounters:[
		[894,Cr,'interact'],
		[895,Cr,'interact']
	]},
	
	generateRaidDen('C67',184,185),
	generateRaidDen('C68',164,165)
]},
{name:['Ballimere Lake',,,,'Lago Bolaguna',,'球湖湖畔'],encounters:[
	[819,Cr,'overworld',[20,20,25,20,25,100,20,100,30]],
	[836,Cr,'overworld',[19,19,24,19,24,,19,,29]],
	[696,Cr,'overworld',[10,10,10,10,10,,10,,10]],
	[829,Cr,'overworld',[10,,,,,,10]],
	[546,Cr,'overworld',[10,,10]],
	[822,Cr,'overworld',[10,,,,10]],
	[213,Cr,'overworld',[10,,,,,,10]],
	[133,Cr,'overworld',[5]],
	[876,SwCr,'overworld',[5,,,,,,,,5]],
	[alternateForm(876,1),ShCr,'overworld',[5,,,,,,,,5]],
	[531,Cr,'overworld',[1,1,1,1,1,,1,,1]],
	[333,Cr,'overworld',[,15]],
	[alternateForm(264,1),Cr,'overworld',[,15]],
	[877,Cr,'overworld',[,10,,10]],
	[715,Cr,'overworld',[,10,10]],
	[752,Cr,'overworld',[,,20,15]],
	[596,Cr,'overworld',[,,,15]],
	[125,Cr,'overworld',[,,,10]],
	[838,Cr,'overworld',[,,,,,,20]],
	[126,Cr,'overworld',[,,,,,,10]],
	[615,Cr,'overworld',[,,,,15]],
	[583,Cr,'overworld',[,,,,15]],
	[857,Cr,'overworld',[,,,,,,,,20]],
	[778,Cr,'overworld',[,,,,,,,,5]],
	[439,Cr,'hidden',[19,31,19,19,23,100,19,100,23]],
	[819,Cr,'hidden',[19,32,19,19,24,,19,,24]],
	[835,Cr,'hidden',[19,32,19,19,24,,19,,24]],
	[829,Cr,'hidden',[19,,,,,,19]],
	[546,Cr,'hidden',[19,,19]],
	[446,Cr,'hidden',[5,5,5,5,5,,5,,5]],
	[751,Cr,'hidden',[,,19,19]],
	[239,Cr,'hidden',[,,,19]],
	[240,Cr,'hidden',[,,,,,,19]],
	[582,Cr,'hidden',[,,,,24]],
	[856,Cr,'hidden',[,,,,,,,,24]],
	[819,Cr,'shake_tree',60],
	[820,Cr,'shake_tree',30],
	[446,Cr,'shake_tree',10],
	[129,Cr,'fish',20],
	[550,SwCr,'fish',20],
	[alternateForm(550,1),ShCr,'fish',20],
	[339,Cr,'fish',20],
	[130,Cr,'fish',15],
	[340,Cr,'fish',15],
	[349,Cr,'fish',5],
	[147,Cr,'fish',5],

	[339,Cr,'surf',[27,27,27,27,20,,27,,27]],
	[129,Cr,'surf',[27,27,27,27,20,,27,,27]],
	[550,SwCr,'surf',[26,26,26,26,20,100,26,100,26]],
	[alternateForm(550,1),ShCr,'surf',[26,26,26,26,20,100,26,100,26]],
	[347,Cr,'surf',[10,10,10,10,10,,10,,10]],
	[147,Cr,'surf',[5,5,5,5,5,,5,,5]],
	[369,Cr,'surf',[5,5,5,5,5,,5,,5]],
	[583,Cr,'surf',[,,,,20]],

	[647,Cr,'interact'],

	[442,Cr,'interact'],

	[466,Cr,'wanderer',[,,,100]], //Electivire
	[467,Cr,'wanderer',[,,,,,,100]], //Magmortar
	[715,Cr,'wanderer',[,100,100]], //Noivern
	[823,Cr,'wanderer',[100,,,,100,100,,100]], //Corviknight
	[858,Cr,'wanderer',[,,,,,,,,100]], //Hatterene
	[862,Cr,'wanderer',[,100]], //Obstagoon
	[334,Cr,'wanderer',[,100]], //Altaria
	[547,Cr,'wanderer',[100,,100]], //Whimsicott
	[615,Cr,'wanderer',[,,,,100,100,,100]], //Cryogonal
	[778,Cr,'wanderer',[,,,,,,,,100]], //Mimikyu
	[830,Cr,'wanderer',[,,100,,,,100]], //Eldegoss
	[836,Cr,'wanderer',[100,,100,100,100,100,,100,100]], //Boltund
	[696,Cr,'wanderer'], //Tyrunt
	[213,Cr,'wanderer',[100,,,,,,100]], //Shuckle
	[820,Cr,'wanderer'], //Greedent
	[876,SwCr,'wanderer',[100,,,,,,,,100]], //Indeedee
	[alternateForm(876,1),ShCr,'wanderer',[100,,,,,,,,100]], //Indeedee
	[584,Cr,'wanderer',[,,,,100,100,,100]], //Vanilluxe
	[596,Cr,'wanderer',[,,,100]], //Galvantula
	[877,Cr,'wanderer',[,100,,100]], //Morpeko
	[125,Cr,'wanderer',[,,,100]], //Electabuzz
	[126,Cr,'wanderer',[,,,,,,100]], //Magmar
	[752,Cr,'wanderer',[,,100]], //Araquanid
	[839,Cr,'wanderer',[100,,,100,100,100,100,100,100]], //Coalossal
	[149,Cr,'wanderer',[,,100,100]], //Dragonite
	[697,Cr,'wanderer'], //Tyrantrum
	[348,Cr,'wanderer',[,,100,100]], //Armaldo
	[531,Cr,'wanderer'], //Audino
	[304,Cr,'wanderer'], //Aron
	[347,Cr,'wanderer_surf'], //Anorith
	[369,Cr,'wanderer_surf',[100,100,100,100,100,100,100,100]], //Relicanth
	[147,Cr,'wanderer_surf',[,,100,,,,,,100]], //Dratini
	[148,Cr,'wanderer_surf',[,,,100,,,,,100]], //Dragonair

	generateRaidDen('C69',158,159),
	generateRaidDen('C70',176,177),
	generateRaidDen('C71',174,175),
	generateRaidDen('C72',180,181),
	generateRaidDen('C73',160,161),
	generateRaidDen('C74',166,167),
	generateRaidDen('C75',160,161),
	generateRaidDen('C76',174,175),
	generateRaidDen('C77',164,165),
	generateRaidDen('C78',172,173),
	generateRaidDen('C79',190,191),
	generateRaidDen('C80',192,193),
	generateRaidDen('C81',194,195),
	generateRaidDen('C82',162,163),
	generateRaidDen('C83',178,179),
	generateRaidDen('C84',182,183),
	generateRaidDen('C85',184,185)
]},
{name:['Lakeside Cave',,,,'Gruta del Lago',,'湖畔洞窟'],encounters:[
	[41,Cr,'overworld',20],
	[304,Cr,'overworld',20],
	[703,Cr,'overworld',15],
	[838,Cr,'overworld',15],
	[597,Cr,'overworld',10],
	[303,SwCr,'overworld',10],
	[302,ShCr,'overworld',10],
	[715,Cr,'overworld',9],
	[531,Cr,'overworld',1],
	
	[639,Cr,'interact'],

	[306,Cr,'wanderer'], //Aggron
	[598,Cr,'wanderer'], //Ferrothorn
	[839,Cr,'wanderer'], //Coalossal
	[305,Cr,'wanderer'], //Lairon
	[715,Cr,'wanderer'] //Noivern
]},
{name:['Dyna Tree Hill',,,,'Colina del Maxiárbol',,'巨树丘陵'],encounters:[
	generateRaidDen('C86',176,177),

	[820,Cr,'raid_special'],
	
	[820,Cr,'wanderer'] //Greedent
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
	
	[151,,'transfer'],
	[251,,'transfer'],
	[385,,'transfer'],
	[494,,'transfer'],
	[649,,'transfer'],
	[719,,'transfer'],
	[721,,'transfer'],
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

	var game=0;
	if(typeof index==='string')
		if(/^A/.test(index))
			game=Ar;
		else if(/^C/.test(index))
			game=Cr;

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