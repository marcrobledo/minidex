/* [name], type, category (0=PHYSICAL,1=SPECIAL,2=STATUS), pp, power, accuracy */const MOVES=[,[["Pound","Écras&#39;Face","Pfund","Botta","Destructor","はたく"],0,0,35,40,100],
[["Karate Chop","Poing-Karaté","Karateschlag","Colpokarate","Golpe Karate","からてチョップ"],1,0,25,50,100],
[["Double Slap","Torgnoles","Duplexhieb","Doppiasberla","Doble Bofetón","おうふくビンタ"],0,0,10,15,85],
[["Comet Punch","Poing Comète","Kometenhieb","Cometapugno","Puño Cometa","れんぞくパンチ"],0,0,15,18,85],
[["Mega Punch","Ultimapoing","Megahieb","Megapugno","Megapuño","メガトンパンチ"],0,0,20,80,85],
[["Pay Day","Jackpot","Zahltag","Giornopaga","Día de Pago","ネコにこばん"],0,0,20,40,100],
[["Fire Punch","Poing de Feu","Feuerschlag","Fuocopugno","Puño Fuego","ほのおのパンチ"],9,0,15,75,100],
[["Ice Punch","Poing-Glace","Eishieb","Gelopugno","Puño Hielo","れいとうパンチ"],14,0,15,75,100],
[["Thunder Punch","Poing-Éclair","Donnerschlag","Tuonopugno","Puño Trueno","かみなりパンチ"],12,0,15,75,100],
[["Scratch","Griffe","Kratzer","Graffio","Arañazo","ひっかく"],0,0,35,40,100],
[["Vise Grip","Force Poigne","Klammer","Presa","Agarre","はさむ"],0,0,30,55,100],
[["Guillotine","Guillotine","Guillotine","Ghigliottina","Guillotina","ハサミギロチン"],0,0,5,0,0],
[["Razor Wind","Coupe-Vent","Klingensturm","Ventagliente","Viento Cortante","かまいたち"],0,1,10,80,100],
[["Swords Dance","Danse-Lames","Schwerttanz","Danzaspada","Danza Espada","つるぎのまい"],0,2,20,0,0],
[["Cut","Coupe","Zerschneider","Taglio","Corte","いあいぎり"],0,0,30,50,95],
[["Gust","Tornade","Windstoß","Raffica","Tornado","かぜおこし"],2,1,35,40,100],
[["Wing Attack","Cru-Aile","Flügelschlag","Attacco d&#39;Ala","Ataque Ala","つばさでうつ"],2,0,35,60,100],
[["Whirlwind","Cyclone","Wirbelwind","Turbine","Remolino","ふきとばし"],0,2,20,0,0],
[["Fly","Vol","Fliegen","Volo","Vuelo","そらをとぶ"],2,0,15,90,95],
[["Bind","Étreinte","Klammergriff","Legatutto","Atadura","しめつける"],0,0,20,15,85],
[["Slam","Souplesse","Slam","Schianto","Atizar","たたきつける"],0,0,20,80,75],
[["Vine Whip","Fouet Lianes","Rankenhieb","Frustata","Látigo Cepa","つるのムチ"],11,0,25,45,100],
[["Stomp","Écrasement","Stampfer","Pestone","Pisotón","ふみつけ"],0,0,20,65,100],
[["Double Kick","Double Pied","Doppelkick","Doppiocalcio","Doble Patada","にどげり"],1,0,30,30,100],
[["Mega Kick","Ultimawashi","Megakick","Megacalcio","Megapatada","メガトンキック"],0,0,5,120,75],
[["Jump Kick","Pied Sauté","Sprungkick","Calciosalto","Patada Salto","とびげり"],1,0,10,100,95],
[["Rolling Kick","Mawashi Geri","Fegekick","Calciorullo","Patada Giro","まわしげり"],1,0,15,60,85],
[["Sand Attack","Jet de Sable","Sandwirbel","Turbosabbia","Ataque Arena","すなかけ"],4,2,15,0,100],
[["Headbutt","Coup d&#39;Boule","Kopfnuss","Bottintesta","Golpe Cabeza","ずつき"],0,0,15,70,100],
[["Horn Attack","Koud&#39;Korne","Hornattacke","Incornata","Cornada","つのでつく"],0,0,25,65,100],
[["Fury Attack","Furie","Furienschlag","Furia","Ataque Furia","みだれづき"],0,0,20,15,85],
[["Horn Drill","Empal&#39;Korne","Hornbohrer","Perforcorno","Perforador","つのドリル"],0,0,5,0,0],
[["Tackle","Charge","Tackle","Azione","Placaje","たいあたり"],0,0,35,40,100],
[["Body Slam","Plaquage","Bodyslam","Corposcontro","Golpe Cuerpo","のしかかり"],0,0,15,85,100],
[["Wrap","Ligotage","Wickel","Avvolgibotta","Constricción","まきつく"],0,0,20,15,90],
[["Take Down","Bélier","Bodycheck","Riduttore","Derribo","とっしん"],0,0,20,90,85],
[["Thrash","Mania","Fuchtler","Colpo","Golpe","あばれる"],0,0,10,120,100],
[["Double-Edge","Damoclès","Risikotackle","Sdoppiatore","Doble Filo","すてみタックル"],0,0,15,120,100],
[["Tail Whip","Mimi-Queue","Rutenschlag","Colpocoda","Látigo","しっぽをふる"],0,2,30,0,100],
[["Poison Sting","Dard-Venin","Giftstachel","Velenospina","Picotazo Ven","どくばり"],3,0,35,15,100],
[["Twineedle","Double-Dard","Duonadel","Doppio Ago","Doble Ataque","ダブルニードル"],6,0,20,25,100],
[["Pin Missile","Dard-Nuée","Nadelrakete","Missilspillo","Pin Misil","ミサイルばり"],6,0,20,25,95],
[["Leer","Groz&#39;Yeux","Silberblick","Fulmisguardo","Malicioso","にらみつける"],0,2,30,0,100],
[["Bite","Morsure","Biss","Morso","Mordisco","かみつく"],16,0,25,60,100],
[["Growl","Rugissement","Heuler","Ruggito","Gruñido","なきごえ"],0,2,40,0,100],
[["Roar","Hurlement","Brüller","Boato","Rugido","ほえる"],0,2,20,0,0],
[["Sing","Berceuse","Gesang","Canto","Canto","うたう"],0,2,15,0,55],
[["Supersonic","Ultrason","Superschall","Supersuono","Supersónico","ちょうおんぱ"],0,2,20,0,55],
[["Sonic Boom","Sonicboom","Ultraschall","Sonicboom","Bomba Sónica","ソニックブーム"],0,1,20,0,90],
[["Disable","Entrave","Aussetzer","Inibitore","Anulación","かなしばり"],0,2,20,0,100],
[["Acid","Acide","Säure","Acido","Ácido","ようかいえき"],3,1,30,40,100],
[["Ember","Flammèche","Glut","Braciere","Ascuas","ひのこ"],9,1,25,40,100],
[["Flamethrower","Lance-Flammes","Flammenwurf","Lanciafiamme","Lanzallamas","かえんほうしゃ"],9,1,15,90,100],
[["Mist","Brume","Weißnebel","Nebbia","Neblina","しろいきり"],14,2,30,0,0],
[["Water Gun","Pistolet à O","Aquaknarre","Pistolacqua","Pistola Agua","みずでっぽう"],10,1,25,40,100],
[["Hydro Pump","Hydrocanon","Hydropumpe","Idropompa","Hidrobomba","ハイドロポンプ"],10,1,5,110,80],
[["Surf","Surf","Surfer","Surf","Surf","なみのり"],10,1,15,90,100],
[["Ice Beam","Laser Glace","Eisstrahl","Geloraggio","Rayo Hielo","れいとうビーム"],14,1,10,90,100],
[["Blizzard","Blizzard","Blizzard","Bora","Ventisca","ふぶき"],14,1,5,110,70],
[["Psybeam","Rafale Psy","Psystrahl","Psicoraggio","Psicorrayo","サイケこうせん"],13,1,20,65,100],
[["Bubble Beam","Bulles d&#39;O","Blubbstrahl","Bollaraggio","Rayo Burbuja","バブルこうせん"],10,1,20,65,100],
[["Aurora Beam","Onde Boréale","Aurorastrahl","Raggiaurora","Rayo Aurora","オーロラビーム"],14,1,20,65,100],
[["Hyper Beam","Ultralaser","Hyperstrahl","Iper Raggio","Hiperrayo","はかいこうせん"],0,1,5,150,90],
[["Peck","Picpic","Schnabel","Beccata","Picotazo","つつく"],2,0,35,35,100],
[["Drill Peck","Bec Vrille","Bohrschnabel","Perforbecco","Pico Taladro","ドリルくちばし"],2,0,20,80,100],
[["Submission","Sacrifice","Überroller","Sottomissione","Sumisión","じごくぐるま"],1,0,20,80,80],
[["Low Kick","Balayage","Fußkick","Colpo Basso","Patada Baja","けたぐり"],1,0,20,0,100],
[["Counter","Riposte","Konter","Contrattacco","Contraataque","カウンター"],1,0,20,0,100],
[["Seismic Toss","Frappe Atlas","Geowurf","Movim. Sismico","Mov. Sísmico","ちきゅうなげ"],1,0,20,0,100],
[["Strength","Force","Stärke","Forza","Fuerza","かいりき"],0,0,15,80,100],
[["Absorb","Vol-Vie","Absorber","Assorbimento","Absorber","すいとる"],11,1,25,20,100],
[["Mega Drain","Méga-Sangsue","Megasauger","Megassorbimento","Megaagotar","メガドレイン"],11,1,12,40,100],
[["Leech Seed","Vampigraine","Egelsamen","Parassiseme","Drenadoras","やどりぎのタネ"],11,2,10,0,90],
[["Growth","Croissance","Wachstum","Crescita","Desarrollo","せいちょう"],0,2,20,0,0],
[["Razor Leaf","Tranch&#39;Herbe","Rasierblatt","Foglielama","Hoja Afilada","はっぱカッター"],11,0,25,55,95],
[["Solar Beam","Lance-Soleil","Solarstrahl","Solarraggio","Rayo Solar","ソーラービーム"],11,1,10,120,100],
[["Poison Powder","Poudre Toxik","Giftpuder","Velenpolvere","Polvo Veneno","どくのこな"],3,2,35,0,75],
[["Stun Spore","Para-Spore","Stachelspore","Paralizzante","Paralizador","しびれごな"],11,2,30,0,75],
[["Sleep Powder","Poudre Dodo","Schlafpuder","Sonnifero","Somnífero","ねむりごな"],11,2,15,0,75],
[["Petal Dance","Danse-Fleur","Blättertanz","Petalodanza","Danza Pétalo","はなびらのまい"],11,1,10,120,100],
[["String Shot","Sécrétion","Fadenschuss","Millebave","Disp. Demora","いとをはく"],6,2,40,0,95],
[["Dragon Rage","Draco-Rage","Drachenwut","Ira di Drago","Furia Dragón","りゅうのいかり"],15,1,10,0,100],
[["Fire Spin","Danse Flamme","Feuerwirbel","Turbofuoco","Giro Fuego","ほのおのうず"],9,1,15,35,85],
[["Thunder Shock","Éclair","Donnerschock","Tuonoshock","Impactrueno","でんきショック"],12,1,30,40,100],
[["Thunderbolt","Tonnerre","Donnerblitz","Fulmine","Rayo","１０まんボルト"],12,1,15,90,100],
[["Thunder Wave","Cage-Éclair","Donnerwelle","Tuononda","Onda Trueno","でんじは"],12,2,20,0,90],
[["Thunder","Fatal-Foudre","Donner","Tuono","Trueno","かみなり"],12,1,10,110,70],
[["Rock Throw","Jet-Pierres","Steinwurf","Sassata","Lanzarrocas","いわおとし"],5,0,15,50,90],
[["Earthquake","Séisme","Erdbeben","Terremoto","Terremoto","じしん"],4,0,10,100,100],
[["Fissure","Abîme","Geofissur","Abisso","Fisura","じわれ"],4,0,5,0,0],
[["Dig","Tunnel","Schaufler","Fossa","Excavar","あなをほる"],4,0,10,80,100],
[["Toxic","Toxik","Toxin","Tossina","Tóxico","どくどく"],3,2,10,0,90],
[["Confusion","Choc Mental","Konfusion","Confusione","Confusión","ねんりき"],13,1,25,50,100],
[["Psychic","Psyko","Psychokinese","Psichico","Psíquico","サイコキネシス"],13,1,10,90,100],
[["Hypnosis","Hypnose","Hypnose","Ipnosi","Hipnosis","さいみんじゅつ"],13,2,20,0,60],
[["Meditate","Yoga","Meditation","Meditazione","Meditación","ヨガのポーズ"],13,2,40,0,0],
[["Agility","Hâte","Agilität","Agilità","Agilidad","こうそくいどう"],13,2,30,0,0],
[["Quick Attack","Vive-attaque","Ruckzuckhieb","Attacco Rapido","Ataque Rápido","でんこうせっか"],0,0,30,40,100],
[["Rage","Frénésie","Raserei","Ira","Furia","いかり"],0,0,20,20,100],
[["Teleport","Téléport","Teleport","Teletrasporto","Teletransporte","テレポート"],13,2,20,0,0],
[["Night Shade","Ombre Nocturne","Nachtnebel","Ombra Notturna","Tinieblas","ナイトヘッド"],7,1,15,0,100],
[["Mimic","Copie","Mimikry","Mimica","Mimético","ものまね"],0,2,10,0,0],
[["Screech","Grincement","Kreideschrei","Stridio","Chirrido","いやなおと"],0,2,40,0,85],
[["Double Team","Reflet","Doppelteam","Doppioteam","Doble Equipo","かげぶんしん"],0,2,15,0,0],
[["Recover","Soin","Genesung","Ripresa","Recuperación","じこさいせい"],0,2,10,0,0],
[["Harden","Armure","Härtner","Rafforzatore","Fortaleza","かたくなる"],0,2,30,0,0],
[["Minimize","Lilliput","Komprimator","Minimizzato","Reducción","ちいさくなる"],0,2,10,0,0],
[["Smokescreen","Brouillard","Rauchwolke","Muro di Fumo","Pantalla Humo","えんまく"],0,2,20,0,100],
[["Confuse Ray","Onde Folie","Konfustrahl","Stordiraggio","Rayo Confuso","あやしいひかり"],7,2,10,0,100],
[["Withdraw","Repli","Panzerschutz","Ritirata","Refugio","からにこもる"],10,2,40,0,0],
[["Defense Curl","Boul&#39;Armure","Einigler","Ricciolscudo","Rizo Defensa","まるくなる"],0,2,40,0,0],
[["Barrier","Bouclier","Barriere","Barriera","Barrera","バリアー"],13,2,20,0,0],
[["Light Screen","Mur Lumière","Lichtschild","Schermoluce","Pantalla Luz","ひかりのかべ"],13,2,30,0,0],
[["Haze","Buée Noire","Dunkelnebel","Nube","Niebla","くろいきり"],14,2,30,0,0],
[["Reflect","Protection","Reflektor","Riflesso","Reflejo","リフレクター"],13,2,20,0,0],
[["Focus Energy","Puissance","Energiefokus","Focalenergia","Foco Energía","きあいだめ"],0,2,30,0,0],
[["Bide","Patience","Geduld","Pazienza","Venganza","がまん"],0,0,10,0,0],
[["Metronome","Métronome","Metronom","Metronomo","Metrónomo","ゆびをふる"],0,2,10,0,0],
[["Mirror Move","Mimique","Spiegeltrick","Speculmossa","Mov. Espejo","オウムがえし"],2,2,20,0,0],
[["Self-Destruct","Destruction","Finale","Autodistruz.","Autodestruc","じばく"],0,0,5,200,100],
[["Egg Bomb","Bomb&#39;Œuf","Eierbombe","Uovobomba","Bomba Huevo","タマゴばくだん"],0,0,10,100,75],
[["Lick","Léchouille","Schlecker","Leccata","Lengüetazo","したでなめる"],7,0,30,30,100],
[["Smog","Purédpois","Smog","Smog","Polución","スモッグ"],3,1,20,30,70],
[["Sludge","Détritus","Schlammbad","Fango","Residuos","ヘドロこうげき"],3,1,20,65,100],
[["Bone Club","Massd&#39;Os","Knochenkeule","Ossoclava","Hueso Palo","ホネこんぼう"],4,0,20,65,85],
[["Fire Blast","Déflagration","Feuersturm","Fuocobomba","Llamarada","だいもんじ"],9,1,5,110,85],
[["Waterfall","Cascade","Kaskade","Cascata","Cascada","たきのぼり"],10,0,15,80,100],
[["Clamp","Claquoir","Schnapper","Tenaglia","Tenaza","からではさむ"],10,0,15,35,85],
[["Swift","Météores","Sternschauer","Comete","Rapidez","スピードスター"],0,1,20,60,0],
[["Skull Bash","Coud&#39;Krâne","Schädelwumme","Capocciata","Cabezazo","ロケットずつき"],0,0,10,130,100],
[["Spike Cannon","Picanon","Dornkanone","Sparalance","Clavo Cañón","とげキャノン"],0,0,15,20,100],
[["Constrict","Constriction","Umklammerung","Limitazione","Restricción","からみつく"],0,0,35,10,100],
[["Amnesia","Amnésie","Amnesie","Amnesia","Amnesia","ドわすれ"],13,2,20,0,0],
[["Kinesis","Télékinésie","Psykraft","Cinèsi","Kinético","スプーンまげ"],13,2,15,0,80],
[["Soft-Boiled","E-Coque","Weichei","Covauova","Amortiguador","タマゴうみ"],0,2,10,0,0],
[["High Jump Kick","Pied Voltige","Turmkick","Calcinvolo","Pat. Salto Alta","とびひざげり"],1,0,10,130,90],
[["Glare","Regard Médusant","Giftblick","Sguardo Feroce","Deslumbrar","へびにらみ"],0,2,30,0,100],
[["Dream Eater","Dévorêve","Traumfresser","Mangiasogni","Come Sueños","ゆめくい"],13,1,15,100,100],
[["Poison Gas","Gaz Toxik","Giftwolke","Velenogas","Gas Venenoso","どくガス"],3,2,40,0,90],
[["Barrage","Pilonnage","Stakkato","Attacco Pioggia","Presa","たまなげ"],0,0,20,15,85],
[["Leech Life","Vampirisme","Blutsauger","Sanguisuga","Chupavidas","きゅうけつ"],6,0,10,80,100],
[["Lovely Kiss","Grobisou","Todeskuss","Demonbacio","Beso Amoroso","あくまのキッス"],0,2,10,0,75],
[["Sky Attack","Piqué","Himmelsfeger","Aeroattacco","Ataque Aéreo","ゴッドバード"],2,0,5,120,90],
[["Transform","Morphing","Wandler","Trasformazione","Transformación","へんしん"],0,2,10,0,0],
[["Bubble","Écume","Blubber","Bolla","Burbuja","あわ"],10,1,30,40,100],
[["Dizzy Punch","Uppercut","Irrschlag","Stordipugno","Puño Mareo","ピヨピヨパンチ"],0,0,10,70,100],
[["Spore","Spore","Pilzspore","Spora","Espora","キノコのほうし"],11,2,15,0,100],
[["Flash","Flash","Blitz","Flash","Destello","フラッシュ"],0,2,20,0,100],
[["Psywave","Vague Psy","Psywelle","Psiconda","Psicoonda","サイコウェーブ"],13,1,15,0,100],
[["Splash","Trempette","Platscher","Splash","Salpicadura","はねる"],0,2,40,0,0],
[["Acid Armor","Acidarmure","Säurepanzer","Scudo Acido","Armadura Ácida","とける"],3,2,20,0,0],
[["Crabhammer","Pince-Masse","Krabbhammer","Martellata","Martillazo","クラブハンマー"],10,0,10,100,90],
[["Explosion","Explosion","Explosion","Esplosione","Explosión","だいばくはつ"],0,0,5,250,100],
[["Fury Swipes","Combo-Griffe","Kratzfurie","Sfuriate","Golpes Furia","みだれひっかき"],0,0,15,18,80],
[["Bonemerang","Osmerang","Knochmerang","Ossomerang","Huesomerang","ホネブーメラン"],4,0,10,50,90],
[["Rest","Repos","Erholung","Riposo","Descanso","ねむる"],13,2,10,0,0],
[["Rock Slide","Éboulement","Steinhagel","Frana","Avalancha","いわなだれ"],5,0,10,75,90],
[["Hyper Fang","Croc de Mort","Hyperzahn","Iperzanna","Hipercolmillo","ひっさつまえば"],0,0,15,80,90],
[["Sharpen","Affûtage","Schärfer","Affilatore","Afilar","かくばる"],0,2,30,0,0],
[["Conversion",,"Umwandlung","Conversione","Conversión","テクスチャー"],0,2,30,0,0],
[["Tri Attack","Triplattaque","Triplette","Tripletta","Triataque","トライアタック"],0,1,10,80,100],
[["Super Fang","Croc Fatal","Superzahn","Superzanna","Superdiente","いかりのまえば"],0,0,10,0,90],
[["Slash","Tranche","Schlitzer","Lacerazione","Cuchillada","きりさく"],0,0,20,70,100],
[["Substitute","Clonage","Delegator","Sostituto","Sustituto","みがわり"],0,2,10,0,0],
[["Struggle","Lutte","Verzweifler","Scontro","Forcejeo","わるあがき"],0,0,1,50,0],
[["Sketch","Gribouille","Nachahmer","Schizzo","Esquema","スケッチ"],0,2,1,0,0],
[["Triple Kick","Triple Pied","Dreifachkick","Triplocalcio","Triple Patada","トリプルキック"],1,0,10,10,90],
[["Thief","Larcin","Raub","Furto","Ladrón","どろぼう"],16,0,25,60,100],
[["Spider Web","Toile","Spinnennetz","Ragnatela","Telaraña","クモのす"],6,2,10,0,0],
[["Mind Reader","Lire-Esprit","Willensleser","Leggimente","Telépata","こころのめ"],0,2,5,0,0],
[["Nightmare","Cauchemar","Nachtmahr","Incubo","Pesadilla","あくむ"],7,2,15,0,100],
[["Flame Wheel","Roue de Feu","Flammenrad","Ruotafuoco","Rueda Fuego","かえんぐるま"],9,0,25,60,100],
[["Snore","Ronflement","Schnarcher","Russare","Ronquido","いびき"],0,1,15,50,100],
[["Curse","Malédiction","Fluch","Maledizione","Maldición","のろい"],7,2,10,0,0],
[["Flail","Fléau","Dreschflegel","Flagello","Azote","じたばた"],0,0,15,0,100],
[["Conversion 2","Conversion2","Umwandlung2","Conversione2","Conversión2","テクスチャー２"],0,2,30,0,0],
[["Aeroblast","Aéroblast","Luftstoß","Aerocolpo","Aerochorro","エアロブラスト"],2,1,5,100,95],
[["Cotton Spore","Spore Coton","Baumwollsaat","Cottonspora","Esporagodón","わたほうし"],11,2,40,0,100],
[["Reversal","Contre","Gegenschlag","Contropiede","Inversión","きしかいせい"],1,0,15,0,100],
[["Spite","Dépit","Groll","Dispetto","Rencor","うらみ"],7,2,10,0,100],
[["Powder Snow","Poudreuse","Pulverschnee","Polneve","Nieve Polvo","こなゆき"],14,1,25,40,100],
[["Protect","Abri","Schutzschild","Protezione","Protección","まもる"],0,2,10,0,0],
[["Mach Punch","Mach Punch","Tempohieb","Pugnorapido","Ultrapuño","マッハパンチ"],1,0,30,40,100],
[["Scary Face","Grimace","Grimasse","Visotruce","Cara Susto","こわいかお"],0,2,10,0,100],
[["Feint Attack","Feinte","Finte","Finta","Finta","だましうち"],16,0,20,60,0],
[["Sweet Kiss","Doux Baiser","Bitterkuss","Dolcebacio","Beso Dulce","てんしのキッス"],17,2,10,0,75],
[["Belly Drum","Cognobidon","Bauchtrommel","Panciamburo","Tambor","はらだいこ"],0,2,10,0,0],
[["Sludge Bomb","Bomb-Beurk","Matschbombe","Fangobomba","Bomba Lodo","ヘドロばくだん"],3,1,10,90,100],
[["Mud-Slap","Coud&#39;Boue","Lehmschelle","Fangosberla","Bofetón Lodo","どろかけ"],4,1,10,20,100],
[["Octazooka","Octazooka","Octazooka","Octazooka","Pulpocañón","オクタンほう"],10,1,10,65,85],
[["Spikes","Picots","Stachler","Punte","Púas","まきびし"],4,2,20,0,0],
[["Zap Cannon","Élecanon","Blitzkanone","Falcecannone","Electrocañón","でんじほう"],12,1,5,120,50],
[["Foresight","Clairvoyance","Gesichte","Preveggenza","Profecía","みやぶる"],0,2,40,0,0],
[["Destiny Bond","Prélèvem. Destin","Abgangsbund","Destinobbligato","Mismo Destino","みちづれ"],7,2,5,0,0],
[["Perish Song","Requiem","Abgesang","Ultimocanto","Canto Mortal","ほろびのうた"],0,2,5,0,0],
[["Icy Wind","Vent Glace","Eissturm","Ventogelato","Viento Hielo","こごえるかぜ"],14,1,15,55,95],
[["Detect","Détection","Scanner","Individua","Detección","みきり"],1,2,5,0,0],
[["Bone Rush","Charge-Os","Knochenhatz","Ossoraffica","Ataque Óseo","ボーンラッシュ"],4,0,10,25,90],
[["Lock-On","Verrouillage","Zielschuss","Localizza","Fijar Blanco","ロックオン"],0,2,5,0,0],
[["Outrage","Colère","Wutanfall","Oltraggio","Enfado","げきりん"],15,0,10,120,100],
[["Sandstorm","Tempête de Sable","Sandsturm","Terrempesta","Tormenta Arena","すなあらし"],5,2,10,0,0],
[["Giga Drain","Giga-Sangsue","Gigasauger","Gigassorbimento","Gigadrenado","ギガドレイン"],11,1,10,75,100],
[["Endure","Ténacité","Ausdauer","Resistenza","Aguante","こらえる"],0,2,10,0,0],
[["Charm","Charme","Charme","Fascino","Encanto","あまえる"],17,2,20,0,100],
[["Rollout","Roulade","Walzer","Rotolamento","Desenrollar","ころがる"],5,0,20,30,90],
[["False Swipe","Faux-Chage","Trugschlag","Falsofinale","Falsotortazo","みねうち"],0,0,40,40,100],
[["Swagger","Vantardise","Angeberei","Bullo","Contoneo","いばる"],0,2,15,0,85],
[["Milk Drink","Lait à Boire","Milchgetränk","Buonlatte","Batido","ミルクのみ"],0,2,10,0,0],
[["Spark","Étincelle","Funkensprung","Scintilla","Chispa","スパーク"],12,0,20,65,100],
[["Fury Cutter","Taillade","Zornklinge","Tagliofuria","Cortefuria","れんぞくぎり"],6,0,20,40,95],
[["Steel Wing","Aile d&#39;Acier","Stahlflügel","Alacciaio","Ala De Acero","はがねのつばさ"],8,0,25,70,90],
[["Mean Look","Regard Noir","Horrorblick","Malosguardo","Mal De Ojo","くろいまなざし"],0,2,5,0,0],
[["Attract","Attraction","Anziehung","Attrazione","Atracción","メロメロ"],0,2,15,0,100],
[["Sleep Talk","Blabla Dodo","Schlafrede","Sonnolalia","Sonámbulo","ねごと"],0,2,10,0,0],
[["Heal Bell","Glas de Soin","Vitalglocke","Rintoccasana","Campana Cura","いやしのすず"],0,2,5,0,0],
[["Return","Retour","Rückkehr","Ritorno","Retribución","おんがえし"],0,0,20,0,100],
[["Present","Cadeau","Geschenk","Regalino","Presente","プレゼント"],0,0,15,0,90],
[["Frustration","Frustration","Frustration","Frustrazione","Frustración","やつあたり"],0,0,20,0,100],
[["Safeguard","Rune Protect","Bodyguard","Salvaguardia","Velo Sagrado","しんぴのまもり"],0,2,25,0,0],
[["Pain Split","Balance","Leidteiler","Malcomune","Divide Dolor","いたみわけ"],0,2,20,0,0],
[["Sacred Fire","Feu Sacré","Läuterfeuer","Magifuoco","Fuego Sagrado","せいなるほのお"],9,0,5,100,95],
[["Magnitude","Ampleur","Intensität","Magnitudo","Magnitud","マグニチュード"],4,0,30,0,100],
[["Dynamic Punch","Dynamopoing","Wuchtschlag","Dinamipugno","Puño Dinámico","ばくれつパンチ"],1,0,5,100,50],
[["Megahorn","Mégacorne","Vielender","Megacorno","Megacuerno","メガホーン"],6,0,10,120,85],
[["Dragon Breath","Dracosouffle","Feuerodem","Dragospiro","Dragoaliento","りゅうのいぶき"],15,1,20,60,100],
[["Baton Pass","Relais","Stafette","Staffetta","Relevo","バトンタッチ"],0,2,40,0,0],
[["Encore","Encore","Zugabe","Ripeti","Otra Vez","アンコール"],0,2,5,0,100],
[["Pursuit","Poursuite","Verfolgung","Inseguimento","Persecución","おいうち"],16,0,20,40,100],
[["Rapid Spin","Tour Rapide","Turbodreher","Rapigiro","Giro Rápido","こうそくスピン"],0,0,40,50,100],
[["Sweet Scent","Doux Parfum","Lockduft","Profumino","Dulce Aroma","あまいかおり"],0,2,20,0,100],
[["Iron Tail","Queue de Fer","Eisenschweif","Codacciaio","Cola Férrea","アイアンテール"],8,0,15,100,75],
[["Metal Claw","Griffe Acier","Metallklaue","Ferrartigli","Garra Metal","メタルクロー"],8,0,35,50,95],
[["Vital Throw","Corps Perdu","Überwurf","Vitaltiro","Tiro Vital","あてみなげ"],1,0,10,70,0],
[["Morning Sun","Aurore","Morgengrauen","Mattindoro","Sol Matinal","あさのひざし"],0,2,5,0,0],
[["Synthesis","Synthèse","Synthese","Sintesi","Síntesis","こうごうせい"],11,2,5,0,0],
[["Moonlight","Rayon Lune","Mondschein","Lucelunare","Luz Lunar","つきのひかり"],17,2,5,0,0],
[["Hidden Power","Puissance Cachée","Kraftreserve","Introforza","Poder Oculto","めざめるパワー"],0,1,15,60,100],
[["Cross Chop","Coup-Croix","Kreuzhieb","Incrocolpo","Tajo Cruzado","クロスチョップ"],1,0,5,100,80],
[["Twister","Ouragan","Windhose","Tornado","Ciclón","たつまき"],15,1,20,40,100],
[["Rain Dance","Danse Pluie","Regentanz","Pioggiadanza","Danza Lluvia","あまごい"],10,2,5,0,0],
[["Sunny Day","Zénith","Sonnentag","Giornodisole","Día Soleado","にほんばれ"],9,2,5,0,0],
[["Crunch","Mâchouille","Knirscher","Sgranocchio","Triturar","かみくだく"],16,0,15,80,100],
[["Mirror Coat","Voile Miroir","Spiegelcape","Specchiovelo","Manto Espejo","ミラーコート"],13,1,20,0,100],
[["Psych Up","Boost","Psycho-Plus","Psicamisù","Más Psique","じこあんじ"],0,2,10,0,0],
[["Extreme Speed","Vitesse Extrême","Turbotempo","Extrarapido","Veloc. Extrema","しんそく"],0,0,5,80,100],
[["Ancient Power","Pouvoir Antique","Antik-Kraft","Forzantica","Poder Pasado","げんしのちから"],5,1,5,60,100],
[["Shadow Ball","Ball&#39;Ombre","Spukball","Palla Ombra","Bola Sombra","シャドーボール"],7,1,15,80,100],
[["Future Sight","Prescience","Seher","Divinazione","Premonición","みらいよち"],13,1,10,120,100],
[["Rock Smash","Éclate-Roc","Zertrümmerer","Spaccaroccia","Golpe Roca","いわくだき"],1,0,15,40,100],
[["Whirlpool","Siphon","Whirlpool","Mulinello","Torbellino","うずしお"],10,1,15,35,85],
[["Beat Up","Baston","Prügler","Picchiaduro","Paliza","ふくろだたき"],16,0,10,0,100],
[["Fake Out","Bluff","Mogelhieb","Bruciapelo","Sorpresa","ねこだまし"],0,0,10,40,100],
[["Uproar","Brouhaha","Aufruhr","Baraonda","Alboroto","さわぐ"],0,1,10,90,100],
[["Stockpile","Stockage","Horter","Accumulo","Reserva","たくわえる"],0,2,20,0,0],
[["Spit Up","Relâche","Entfessler","Sfoghenergia","Escupir","はきだす"],0,1,10,0,100],
[["Swallow","Avale","Verzehrer","Intoenergia","Tragar","のみこむ"],0,2,10,0,0],
[["Heat Wave","Canicule","Hitzewelle","Ondacalda","Onda Ígnea","ねっぷう"],9,1,10,95,90],
[["Hail","Grêle","Hagelsturm","Grandine","Granizo","あられ"],14,2,10,0,0],
[["Torment","Tourmente","Folterknecht","Attaccalite","Tormento","いちゃもん"],16,2,15,0,100],
[["Flatter","Flatterie","Schmeichler","Adulazione","Camelo","おだてる"],16,2,15,0,100],
[["Will-O-Wisp","Feu Follet","Irrlicht","Fuocofatuo","Fuego Fatuo","おにび"],9,2,15,0,85],
[["Memento","Souvenir","Memento-Mori","Memento","Legado","おきみやげ"],16,2,10,0,100],
[["Facade","Façade","Fassade","Facciata","Imagen","からげんき"],0,0,20,70,100],
[["Focus Punch","Mitra-Poing","Power-Punch","Centripugno","Puño Certero","きあいパンチ"],1,0,20,150,100],
[["Smelling Salts","Stimulant","Riechsalz","Maniereforti","Estímulo","きつけ"],0,0,10,70,100],
[["Follow Me","Par Ici","Spotlight","Sonoqui","Señuelo","このゆびとまれ"],0,2,20,0,0],
[["Nature Power","Force-Nature","Natur-Kraft","Naturforza","Adaptación","しぜんのちから"],0,2,20,0,0],
[["Charge","Chargeur","Ladevorgang","Sottocarica","Carga","じゅうでん"],12,2,20,0,0],
[["Taunt","Provoc","Verhöhner","Provocazione","Mofa","ちょうはつ"],16,2,20,0,100],
[["Helping Hand","Coup d&#39;Main","Rechte Hand","Altruismo","Refuerzo","てだすけ"],0,2,20,0,0],
[["Trick","Tourmagik","Trickbetrug","Raggiro","Truco","トリック"],13,2,10,0,100],
[["Role Play","Imitation","Rollentausch","Giocodiruolo","Imitación","なりきり"],13,2,10,0,0],
[["Wish","Vœu","Wunschtraum","Desiderio","Deseo","ねがいごと"],0,2,10,0,0],
[["Assist","Assistance","Zuschuss","Assistente","Ayuda","ねこのて"],0,2,20,0,0],
[["Ingrain","Racines","Verwurzler","Radicamento","Arraigo","ねをはる"],11,2,20,0,0],
[["Superpower","Surpuissance","Kraftkoloss","Troppoforte","Fuerza Bruta","ばかぢから"],1,0,5,120,100],
[["Magic Coat","Reflet Magik","Magiemantel","Magivelo","Capa Mágica","マジックコート"],13,2,15,0,0],
[["Recycle","Recyclage","Aufbereitung","Riciclo","Reciclaje","リサイクル"],0,2,10,0,0],
[["Revenge","Vendetta","Vergeltung","Vendetta","Desquite","リベンジ"],1,0,10,60,100],
[["Brick Break","Casse-Brique","Durchbruch","Breccia","Demolición","かわらわり"],1,0,15,75,100],
[["Yawn","Bâillement","Gähner","Sbadiglio","Bostezo","あくび"],0,2,10,0,0],
[["Knock Off","Sabotage","Abschlag","Privazione","Desarme","はたきおとす"],16,0,20,65,100],
[["Endeavor","Effort","Notsituation","Rimonta","Esfuerzo","がむしゃら"],0,0,5,0,100],
[["Eruption","Éruption","Eruption","Eruzione","Estallido","ふんか"],9,1,5,150,100],
[["Skill Swap","Échange","Wertewechsel","Baratto","Intercambio","スキルスワップ"],13,2,10,0,0],
[["Imprison","Possessif","Begrenzer","Esclusiva","Cerca","ふういん"],13,2,10,0,0],
[["Refresh","Régénération","Heilung","Rinfrescata","Alivio","リフレッシュ"],0,2,20,0,0],
[["Grudge","Rancune","Nachspiel","Rancore","Rabia","おんねん"],7,2,5,0,0],
[["Snatch","Saisie","Übernahme","Scippo","Robo","よこどり"],16,2,10,0,0],
[["Secret Power","Force Cachée","Geheimpower","Forzasegreta","Daño Secreto","ひみつのちから"],0,0,20,70,100],
[["Dive","Plongée","Taucher","Sub","Buceo","ダイビング"],10,0,10,80,100],
[["Arm Thrust","Cogne","Armstoß","Sberletese","Empujón","つっぱり"],1,0,20,15,100],
[["Camouflage","Camouflage","Tarnung","Camuffamento","Camuflaje","ほごしょく"],0,2,20,0,0],
[["Tail Glow","Lumiqueue","Schweifglanz","Codadiluce","Ráfaga","ほたるび"],6,2,20,0,0],
[["Luster Purge","Lumi-Éclat","Scheinwerfer","Abbagliante","Resplandor","ラスターパージ"],13,1,5,70,100],
[["Mist Ball","Ball&#39;Brume","Nebelball","Foschisfera","Bola Neblina","ミストボール"],13,1,5,70,100],
[["Feather Dance","Danse-Plume","Daunenreigen","Danzadipiume","Danza Pluma","フェザーダンス"],2,2,15,0,100],
[["Teeter Dance","Danse-Folle","Taumeltanz","Strampadanza","Danza Caos","フラフラダンス"],0,2,20,0,100],
[["Blaze Kick","Pied Brûleur","Feuerfeger","Calciardente","Patada Ígnea","ブレイズキック"],9,0,10,85,90],
[["Mud Sport","Lance-Boue","Lehmsuhler","Fangata","Chapoteo Lodo","どろあそび"],4,2,15,0,0],
[["Ice Ball","Ball&#39;Glace","Frostbeule","Palla Gelo","Bola Hielo","アイスボール"],14,0,20,30,90],
[["Needle Arm","Poing Dard","Nietenranke","Pugnospine","Brazo Pincho","ニードルアーム"],11,0,15,60,100],
[["Slack Off","Paresse","Tagedieb","Pigro","Relajo","なまける"],0,2,10,0,0],
[["Hyper Voice","Mégaphone","Schallwelle","Granvoce","Vozarrón","ハイパーボイス"],0,1,10,90,100],
[["Poison Fang","Crochet Venin","Giftzahn","Velenodenti","Colmillo Ven","どくどくのキバ"],3,0,15,50,100],
[["Crush Claw","Éclate Griffe","Zermalmklaue","Tritartigli","Garra Brutal","ブレイククロー"],0,0,10,75,95],
[["Blast Burn","Rafale Feu","Lohekanonade","Incendio","Anillo Ígneo","ブラストバーン"],9,1,5,150,90],
[["Hydro Cannon","Hydroblast","Aquahaubitze","Idrocannone","Hidrocañón","ハイドロカノン"],10,1,5,150,90],
[["Meteor Mash","Poing Météor","Sternenhieb","Meteorpugno","Puño Meteoro","コメットパンチ"],8,0,10,90,90],
[["Astonish","Étonnement","Erstauner","Sgomento","Impresionar","おどろかす"],7,0,15,30,100],
[["Weather Ball","Ball&#39;Météo","Meteorologe","Palla Clima","Meteorobola","ウェザーボール"],0,1,10,50,100],
[["Aromatherapy","Aromathérapi","Aromakur","Aromaterapia","Aromaterapia","アロマセラピー"],11,2,5,0,0],
[["Fake Tears","Croco Larme","Trugträne","Falselacrime","Llanto Falso","うそなき"],16,2,20,0,100],
[["Air Cutter","Tranch&#39;Air","Windschnitt","Aerasoio","Aire Afilado","エアカッター"],2,1,25,60,95],
[["Overheat","Surchauffe","Hitzekoller","Vampata","Sofoco","オーバーヒート"],9,1,5,130,90],
[["Odor Sleuth","Flair","Schnüffler","Segugio","Rastreo","かぎわける"],0,2,40,0,0],
[["Rock Tomb","Tomberoche","Felsgrab","Rocciotomba","Tumba Rocas","がんせきふうじ"],5,0,15,60,95],
[["Silver Wind","Vent Argenté","Silberhauch","Ventargenteo","Viento Plata","ぎんいろのかぜ"],6,1,5,60,100],
[["Metal Sound","Strido-Son","Metallsound","Ferrostrido","Eco Metálico","きんぞくおん"],8,2,40,0,85],
[["Grass Whistle","Siffl&#39;Herbe","Grasflöte","Meloderba","Silbato","くさぶえ"],11,2,15,0,55],
[["Tickle","Chatouille","Spaßkanone","Solletico","Cosquillas","くすぐる"],0,2,20,0,100],
[["Cosmic Power","Force Cosmik","Kosmik-Kraft","Cosmoforza","Masa Cósmica","コスモパワー"],13,2,20,0,0],
[["Water Spout","Giclédo","Fontränen","Zampillo","Salpicar","しおふき"],10,1,5,150,100],
[["Signal Beam","Rayon Signal","Ampelleuchte","Segnoraggio","Doble Rayo","シグナルビーム"],6,1,15,75,100],
[["Shadow Punch","Poing Ombre","Finsterfaust","Pugnodombra","Puño Sombra","シャドーパンチ"],7,0,20,60,0],
[["Extrasensory","Extrasenseur","Sondersensor","Extrasenso","Paranormal","じんつうりき"],13,1,20,80,100],
[["Sky Uppercut","Stratopercut","Himmelhieb","Stramontante","Gancho Alto","スカイアッパー"],1,0,15,85,90],
[["Sand Tomb","Tourbi-Sable","Sandgrab","Sabbiotomba","Bucle Arena","すなじごく"],4,0,15,35,85],
[["Sheer Cold","Glaciation","Eiseskälte","Purogelo","Frío Polar","ぜったいれいど"],14,1,5,0,0],
[["Muddy Water","Ocroupi","Lehmbrühe","Fanghiglia","Agua Lodosa","だくりゅう"],10,1,10,90,85],
[["Bullet Seed","Balle Graine","Kugelsaat","Semitraglia","Recurrente","タネマシンガン"],11,0,30,25,100],
[["Aerial Ace","Aéropique","Aero-Ass","Aeroassalto","Golpe Aéreo","つばめがえし"],2,0,20,60,0],
[["Icicle Spear","Stalagtite","Eisspeer","Gelolancia","Carámbano","つららばり"],14,0,30,25,100],
[["Iron Defense","Mur de Fer","Eisenabwehr","Ferroscudo","Defensa Férrea","てっぺき"],8,2,15,0,0],
[["Block","Barrage","Rückentzug","Blocco","Bloqueo","とおせんぼう"],0,2,5,0,0],
[["Howl","Grondement","Jauler","Gridodilotta","Aullido","とおぼえ"],0,2,40,0,0],
[["Dragon Claw","Dracogriffe","Drachenklaue","Dragartigli","Garra Dragón","ドラゴンクロー"],15,0,15,80,100],
[["Frenzy Plant","Végé-Attak","Flora-Statue","Radicalbero","Planta Feroz","ハードプラント"],11,1,5,150,90],
[["Bulk Up","Gonflette","Protzer","Granfisico","Corpulencia","ビルドアップ"],1,2,20,0,0],
[["Bounce","Rebond","Sprungfeder","Rimbalzo","Bote","とびはねる"],2,0,5,85,85],
[["Mud Shot","Tir de Boue","Lehmschuss","Colpodifango","Disparo Lodo","マッドショット"],4,1,15,55,95],
[["Poison Tail","Queue-Poison","Giftschweif","Velenocoda","Cola Veneno","ポイズンテール"],3,0,25,50,100],
[["Covet","Implore","Bezirzer","Supplica","Antojo","ほしがる"],0,0,25,60,100],
[["Volt Tackle","Électacle","Volttackle","Locomovolt","Placaje Eléctrico","ボルテッカー"],12,0,15,120,100],
[["Magical Leaf","Feuillemagik","Zauberblatt","Fogliamagica","Hoja Mágica","マジカルリーフ"],11,1,20,60,0],
[["Water Sport","Tourniquet","Nassmacher","Docciascudo","Hidrochorro","みずあそび"],10,2,15,0,0],
[["Calm Mind","Plénitude","Gedankengut","Calmamente","Paz Mental","めいそう"],13,2,20,0,0],
[["Leaf Blade","Lame-Feuille","Laubklinge","Fendifoglia","Hoja Aguda","リーフブレード"],11,0,15,90,100],
[["Dragon Dance","Danse Draco","Drachentanz","Dragodanza","Danza Dragón","りゅうのまい"],15,2,20,0,0],
[["Rock Blast","Boule Roc","Felswurf","Cadutamassi","Pedrada","ロックブラスト"],5,0,10,25,90],
[["Shock Wave","Onde de Choc","Schockwelle","Ondashock","Onda Voltio","でんげきは"],12,1,20,60,0],
[["Water Pulse","Vibraqua","Aquawelle","Idropulsar","Hidropulso","みずのはどう"],10,1,20,60,100],
[["Doom Desire","Carnareket","Kismetwunsch","Obbliderio","Deseo Oculto","はめつのねがい"],8,1,5,140,100],
[["Psycho Boost","Psycho Boost","Psyschub","Psicoslancio","Psicoataque","サイコブースト"],13,1,5,140,90],
[["Roost","Atterrissage","Ruheort","Trespolo","Respiro","はねやすめ"],2,2,10,0,0],
[["Gravity","Gravité","Erdanziehung","Gravità","Gravedad","じゅうりょく"],13,2,5,0,0],
[["Miracle Eye","Œil Miracle","Wunderauge","Miracolvista","Gran Ojo","ミラクルアイ"],13,2,40,0,0],
[["Wake-Up Slap","Réveil Forcé","Weckruf","Svegliopacca","Espabila","めざましビンタ"],1,0,10,70,100],
[["Hammer Arm","Marto-Poing","Hammerarm","Martelpugno","Machada","アームハンマー"],1,0,10,100,90],
[["Gyro Ball","Gyroballe","Gyroball","Vortexpalla","Giro Bola","ジャイロボール"],8,0,5,0,100],
[["Healing Wish","Vœu Soin","Heilopfer","Curardore","Deseo Cura","いやしのねがい"],13,2,10,0,0],
[["Brine","Saumure","Lake","Acquadisale","Salmuera","しおみず"],10,1,10,65,100],
[["Natural Gift","Don Naturel","Beerenkräfte","Dononaturale","Don Natural","しぜんのめぐみ"],0,0,15,0,100],
[["Feint","Ruse","Offenlegung","Fintoattacco","Amago","フェイント"],0,0,10,30,100],
[["Pluck","Picore","Pflücker","Spennata","Picoteo","ついばむ"],2,0,20,60,100],
[["Tailwind","Vent Arrière","Rückenwind","Ventoincoda","Viento Afín","おいかぜ"],2,2,15,0,0],
[["Acupressure","Acupression","Akupressur","Acupressione","Acupresión","つぼをつく"],0,2,30,0,0],
[["Metal Burst","Fulmifer","Metallstoß","Metalscoppio","Represión Metal","メタルバースト"],8,0,10,0,100],
[["U-turn","Demi-Tour","Kehrtwende","Retromarcia","Ida y Vuelta","とんぼがえり"],6,0,20,70,100],
[["Close Combat","Close Combat","Nahkampf","Zuffa","A Bocajarro","インファイト"],1,0,5,120,100],
[["Payback","Représailles","Gegenstoß","Rivincita","Vendetta","しっぺがえし"],16,0,10,50,100],
[["Assurance","Assurance","Gewissheit","Garanzia","Buena Baza","ダメおし"],16,0,10,60,100],
[["Embargo","Embargo","Itemsperre","Divieto","Embargo","さしおさえ"],16,2,15,0,100],
[["Fling","Dégommage","Schleuder","Lancio","Lanzamiento","なげつける"],16,0,10,0,100],
[["Psycho Shift","Échange Psy","Psybann","Psicotrasfer","Psicocambio","サイコシフト"],13,2,10,0,100],
[["Trump Card","Atout","Trumpfkarte","Asso","As Oculto","きりふだ"],0,1,5,0,0],
[["Heal Block","Anti-Soin","Heilblockade","Anticura","Anticura","かいふくふうじ"],13,2,15,0,100],
[["Wring Out","Essorage","Auswringen","Strizzata","Estrujón","しぼりとる"],0,1,5,0,100],
[["Power Trick","Astuce Force","Krafttrick","Ingannoforza","Truco Fuerza","パワートリック"],13,2,10,0,0],
[["Gastro Acid","Suc Digestif","Magensäfte","Gastroacido","Bilis","いえき"],3,2,10,0,100],
[["Lucky Chant","Air Veinard","Beschwörung","Fortuncanto","Conjuro","おまじない"],0,2,30,0,0],
[["Me First","Moi d&#39;Abord","Egotrip","Precedenza","Yo Primero","さきどり"],0,2,20,0,0],
[["Copycat","Photocopie","Imitator","Copione","Copión","まねっこ"],0,2,20,0,0],
[["Power Swap","Permuforce","Krafttausch","Barattoforza","Cambia Fuerza","パワースワップ"],13,2,10,0,0],
[["Guard Swap","Permugarde","Schutztausch","Barattoscudo","Cambia Defensa","ガードスワップ"],13,2,10,0,0],
[["Punishment","Punition","Strafattacke","Punizione","Castigo","おしおき"],16,0,5,0,100],
[["Last Resort","Dernier Recours","Zuflucht","Ultimascelta","Última Baza","とっておき"],0,0,5,140,100],
[["Worry Seed","Soucigraine","Sorgensamen","Affannoseme","Abatidoras","なやみのタネ"],11,2,10,0,100],
[["Sucker Punch","Coup Bas","Tiefschlag","Sbigoattacco","Golpe Bajo","ふいうち"],16,0,5,70,100],
[["Toxic Spikes","Pics Toxik","Giftspitzen","Fielepunte","Púas Tóxicas","どくびし"],3,2,20,0,0],
[["Heart Swap","Permucœur","Statustausch","Cuorbaratto","Cambia Almas","ハートスワップ"],13,2,10,0,0],
[["Aqua Ring","Anneau Hydro","Wasserring","Acquanello","Acua Aro","アクアリング"],10,2,20,0,0],
[["Magnet Rise","Vol Magnétik","Magnetflug","Magnetascesa","Levitón","でんじふゆう"],12,2,10,0,0],
[["Flare Blitz","Boutefeu","Flammenblitz","Fuococarica","Envite Ígneo","フレアドライブ"],9,0,15,120,100],
[["Force Palm","Forte-Paume","Kraftwelle","Palmoforza","Palmeo","はっけい"],1,0,10,60,100],
[["Aura Sphere","Aurasphère","Aurasphäre","Forzasfera","Esfera Aural","はどうだん"],1,1,20,80,0],
[["Rock Polish","Poliroche","Steinpolitur","Lucidatura","Pulimento","ロックカット"],5,2,20,0,0],
[["Poison Jab","Direct Toxik","Gifthieb","Velenpuntura","Puya Nociva","どくづき"],3,0,20,80,100],
[["Dark Pulse","Vibrobscur","Finsteraura","Neropulsar","Pulso Umbrío","あくのはどう"],16,1,15,80,100],
[["Night Slash","Tranche-Nuit","Nachthieb","Nottesferza","Tajo Umbrío","つじぎり"],16,0,15,70,100],
[["Aqua Tail","Hydroqueue","Nassschweif","Idrondata","Acua Cola","アクアテール"],10,0,10,90,90],
[["Seed Bomb","Canon Graine","Samenbomben","Semebomba","Bomba Germen","タネばくだん"],11,0,15,80,100],
[["Air Slash","Lame d&#39;Air","Luftschnitt","Eterelama","Tajo Aéreo","エアスラッシュ"],2,1,15,75,95],
[["X-Scissor","Plaie-Croix","Kreuzschere","Forbice X","Tijera X","シザークロス"],6,0,15,80,100],
[["Bug Buzz","Bourdon","Käfergebrumm","Ronzio","Zumbido","むしのさざめき"],6,1,10,90,100],
[["Dragon Pulse","Dracochoc","Drachenpuls","Dragopulsar","Pulso Dragón","りゅうのはどう"],15,1,10,85,100],
[["Dragon Rush","Dracocharge","Drachenstoß","Dragofuria","Carga Dragón","ドラゴンダイブ"],15,0,10,100,75],
[["Power Gem","Rayon Gemme","Juwelenkraft","Gemmoforza","Joya de Luz","パワージェム"],5,1,20,80,100],
[["Drain Punch","Vampipoing","Ableithieb","Assorbipugno","Puño Drenaje","ドレインパンチ"],1,0,10,75,100],
[["Vacuum Wave","Onde Vide","Vakuumwelle","Vuotonda","Onda Vacío","しんくうは"],1,1,30,40,100],
[["Focus Blast","Exploforce","Fokusstoß","Focalcolpo","Onda Certera","きあいだま"],1,1,5,120,70],
[["Energy Ball","Éco-Sphère","Energieball","Energipalla","Energibola","エナジーボール"],11,1,10,90,100],
[["Brave Bird","Rapace","Sturzflug","Baldeali","Pájaro Osado","ブレイブバード"],2,0,15,120,100],
[["Earth Power","Telluriforce","Erdkräfte","Geoforza","Tierra Viva","だいちのちから"],4,1,10,90,100],
[["Switcheroo","Passe-Passe","Wechseldich","Rapidscambio","Trapicheo","すりかえ"],16,2,10,0,100],
[["Giga Impact","Giga Impact","Gigastoß","Gigaimpatto","Giga Impacto","ギガインパクト"],0,0,5,150,90],
[["Nasty Plot","Machination","Ränkeschmied","Congiura","Maquinación","わるだくみ"],16,2,20,0,0],
[["Bullet Punch","Pisto-Poing","Patronenhieb","Pugnoscarica","Puño Bala","バレットパンチ"],8,0,30,40,100],
[["Avalanche","Avalanche","Lawine","Slavina","Alud","ゆきなだれ"],14,0,10,60,100],
[["Ice Shard","Éclats Glace","Eissplitter","Geloscheggia","Canto Helado","こおりのつぶて"],14,0,30,40,100],
[["Shadow Claw","Griffe Ombre","Dunkelklaue","Ombrartigli","Garra Umbría","シャドークロー"],7,0,15,70,100],
[["Thunder Fang","Crocs Éclair","Donnerzahn","Fulmindenti","Colmillo Rayo","かみなりのキバ"],12,0,15,65,95],
[["Ice Fang","Crocs Givre","Eiszahn","Gelodenti","Colmillo Hielo","こおりのキバ"],14,0,15,65,95],
[["Fire Fang","Crocs Feu","Feuerzahn","Rogodenti","Colmillo Ígneo","ほのおのキバ"],9,0,15,65,95],
[["Shadow Sneak","Ombre Portée","Schattenstoß","Furtivombra","Sombra Vil","かげうち"],7,0,30,40,100],
[["Mud Bomb","Boue-Bombe","Schlammbombe","Pantanobomba","Bomba Fango","どろばくだん"],4,1,10,65,85],
[["Psycho Cut","Coupe Psycho","Psychoklinge","Psicotaglio","Psicocorte","サイコカッター"],13,0,20,70,100],
[["Zen Headbutt","Psykoud&#39;Boul","Zen-Kopfstoß","Cozzata Zen","Cabezazo Zen","しねんのずつき"],13,0,15,80,90],
[["Mirror Shot","Miroi-Tir","Spiegelsalve","Cristalcolpo","Disparo Espejo","ミラーショット"],8,1,10,65,85],
[["Flash Cannon","Luminocanon","Lichtkanone","Cannonflash","Foco Resplandor","ラスターカノン"],8,1,10,80,100],
[["Rock Climb","Escalade","Kraxler","Scalaroccia","Treparrocas","ロッククライム"],0,0,20,90,85],
[["Defog","Anti-Brume","Auflockern","Scacciabruma","Despejar","きりばらい"],2,2,15,0,0],
[["Trick Room","Distorsion","Bizarroraum","Distortozona","Espacio Raro","トリックルーム"],13,2,5,0,0],
[["Draco Meteor","Draco Météor","Draco Meteor","Dragobolide","Cometa Draco","りゅうせいぐん"],15,1,5,130,90],
[["Discharge","Coup d&#39;Jus","Ladungsstoß","Scarica","Chispazo","ほうでん"],12,1,15,80,100],
[["Lava Plume","Ébullilave","Flammensturm","Lavasbuffo","Humareda","ふんえん"],9,1,15,80,100],
[["Leaf Storm","Tempête Verte","Blättersturm","Verdebufera","Lluevahojas","リーフストーム"],11,1,5,130,90],
[["Power Whip","Mégafouet","Blattgeißel","Vigorcolpo","Latigazo","パワーウィップ"],11,0,10,120,85],
[["Rock Wrecker","Roc-Boulet","Felswerfer","Devastomasso","Romperrocas","がんせきほう"],5,0,5,150,90],
[["Cross Poison","Poison-Croix","Giftstreich","Velenocroce","Veneno X","クロスポイズン"],3,0,20,70,100],
[["Gunk Shot","Détricanon","Mülltreffer","Sporcolancio","Lanza Mugre","ダストシュート"],3,0,5,120,80],
[["Iron Head","Tête de Fer","Eisenschädel","Metaltestata","Cabeza de Hierro","アイアンヘッド"],8,0,15,80,100],
[["Magnet Bomb","Bombaimant","Magnetbombe","Bombagnete","Bomba Imán","マグネットボム"],8,0,20,60,0],
[["Stone Edge","Lame de Roc","Steinkante","Pietrataglio","Roca Afilada","ストーンエッジ"],5,0,5,100,80],
[["Captivate","Séduction","Liebreiz","Incanto","Seducción","ゆうわく"],0,2,20,0,100],
[["Stealth Rock","Piège de Roc","Tarnsteine","Levitoroccia","Trampa Rocas","ステルスロック"],5,2,20,0,0],
[["Grass Knot","Nœud Herbe","Strauchler","Laccioerboso","Hierba Lazo","くさむすび"],11,1,20,0,100],
[["Chatter","Babil","Geschwätz","Schiamazzo","Cháchara","おしゃべり"],2,1,20,65,100],
[["Judgment","Jugement","Urteilskraft","Giudizio","Sentencia","さばきのつぶて"],0,1,10,100,100],
[["Bug Bite","Piqûre","Käferbiss","Coleomorso","Picadura","むしくい"],6,0,20,60,100],
[["Charge Beam","Rayon Chargé","Ladestrahl","Raggioscossa","Rayo Carga","チャージビーム"],12,1,10,50,90],
[["Wood Hammer","Martobois","Holzhammer","Mazzuolegno","Mazazo","ウッドハンマー"],11,0,15,120,100],
[["Aqua Jet","Aqua-Jet","Wasserdüse","Acquagetto","Acua Jet","アクアジェット"],10,0,20,40,100],
[["Attack Order","Appel Attak","Schlagbefehl","Comandourto","Al Ataque","こうげきしれい"],6,0,15,90,100],
[["Defend Order","Appel Défense","Blockbefehl","Comandoscudo","A Defender","ぼうぎょしれい"],6,2,10,0,0],
[["Heal Order","Appel Soins","Heilbefehl","Comandocura","Auxilio","かいふくしれい"],6,2,10,0,0],
[["Head Smash","Fracass&#39;Tête","Kopfstoß","Zuccata","Testarazo","もろはのずつき"],5,0,5,150,80],
[["Double Hit","Coup Double","Doppelschlag","Doppiosmash","Doble Golpe","ダブルアタック"],0,0,10,35,90],
[["Roar of Time","Hurle-Temps","Zeitenlärm","Fragortempo","Distorsión","ときのほうこう"],15,1,5,150,90],
[["Spacial Rend","Spatio-Rift","Raumschlag","Fendispazio","Corte Vacío","あくうせつだん"],15,1,5,100,95],
[["Lunar Dance","Danse-Lune","Lunartanz","Lunardanza","Danza Lunar","みかづきのまい"],13,2,10,0,0],
[["Crush Grip","Presse","Quetschgriff","Sbriciolmano","Agarrón","にぎりつぶす"],0,0,5,0,100],
[["Magma Storm","Vortex Magma","Lavasturm","Magmaclisma","Lluvia Ígnea","マグマストーム"],9,1,5,100,75],
[["Dark Void","Trou Noir","Schlummerort","Vuototetro","Brecha Negra","ダークホール"],16,2,10,0,50],
[["Seed Flare","Fulmigraine","Schocksamen","Infuriaseme","Fogonazo","シードフレア"],11,1,5,120,85],
[["Ominous Wind","Vent Mauvais","Unheilböen","Funestovento","Viento Aciago","あやしいかぜ"],7,1,5,60,100],
[["Shadow Force","Revenant","Schemenkraft","Oscurotuffo","Golpe Umbrío","シャドーダイブ"],7,0,5,120,100],
[["Hone Claws","Aiguisage","Klauenwetzer","Unghiaguzze","Afilagarras","つめとぎ"],16,2,15,0,0],
[["Wide Guard","Garde Large","Rundumschutz","Bodyguard","Vastaguardia","ワイドガード"],5,2,10,0,0],
[["Guard Split","Partage Garde","Schutzteiler","Paridifesa","Isoguardia","ガードシェア"],13,2,10,0,0],
[["Power Split","Partage Force","Kraftteiler","Pariattacco","Isofuerza","パワーシェア"],13,2,10,0,0],
[["Wonder Room","Zone Étrange","Wunderraum","Mirabilzona","Zona Extraña","ワンダールーム"],13,2,10,0,0],
[["Psyshock","Choc Psy","Psychoschock","Psicoshock","Psicocarga","サイコショック"],13,1,10,80,100],
[["Venoshock","Choc Venin","Giftschock","Velenoshock","Carga Tóxica","ベノムショック"],3,1,10,65,100],
[["Autotomize","Allègement","Autotomie","Sganciapesi","Aligerar","ボディパージ"],8,2,15,0,0],
[["Rage Powder","Poudre Fureur","Wutpulver","Polverabbia","Polvo Ira","いかりのこな"],6,2,20,0,0],
[["Telekinesis","Lévikinésie","Telekinese","Telecinesi","Telequinesis","テレキネシス"],13,2,15,0,0],
[["Magic Room","Zone Magique","Magieraum","Magicozona","Zona Mágica","マジックルーム"],13,2,10,0,0],
[["Smack Down","Anti-Air","Katapult","Abbattimento","Antiaéreo","うちおとす"],5,0,15,50,100],
[["Storm Throw","Yama Arashi","Bergsturm","Tempestretta","Llave Corsé","やまあらし"],1,0,10,60,100],
[["Flame Burst","Rebondifeu","Funkenflug","Pirolancio","Pirotecnia","はじけるほのお"],9,1,15,70,100],
[["Sludge Wave","Cradovague","Schlammwoge","Fangonda","Onda Tóxica","ヘドロウェーブ"],3,1,10,95,100],
[["Quiver Dance","Papillodanse","Falterreigen","Eledanza","Danza Aleteo","ちょうのまい"],6,2,20,0,0],
[["Heavy Slam","Tacle Lourd","Rammboss","Pesobomba","Cuerpo Pesado","ヘビーボンバー"],8,0,10,0,100],
[["Synchronoise","Synchropeine","Synchrolärm","Sincrumore","Sincrorruido","シンクロノイズ"],13,1,10,120,100],
[["Electro Ball","Boule Élek","Elektroball","Energisfera","Bola Voltio","エレキボール"],12,1,10,0,100],
[["Soak","Détrempage","Überflutung","Inondazione","Anegar","みずびたし"],10,2,20,0,100],
[["Flame Charge","Nitrocharge","Nitroladung","Nitrocarica","Nitrocarga","ニトロチャージ"],9,0,20,50,100],
[["Coil","Enroulement","Einrollen","Arrotola","Enrosque","とぐろをまく"],3,2,20,0,0],
[["Low Sweep","Balayette","Fußtritt","Calciobasso","Puntapié","ローキック"],1,0,20,65,100],
[["Acid Spray","Bombe Acide","Säurespeier","Acidobomba","Bomba Ácida","アシッドボム"],3,1,20,40,100],
[["Foul Play","Tricherie","Schmarotzer","Ripicca","Juego Sucio","イカサマ"],16,0,15,95,100],
[["Simple Beam","Rayon Simple","Wankelstrahl","Ondisinvolta","Onda Simple","シンプルビーム"],0,2,15,0,100],
[["Entrainment","Ten-danse","Zwango","Saltamicizia","Danza Amiga","なかまづくり"],0,2,15,0,100],
[["After You","Après Vous","Galanterie","Cortesia","Cede Paso","おさきにどうぞ"],0,2,15,0,0],
[["Round","Chant Canon","Kanon","Coro","Canon","りんしょう"],0,1,15,60,100],
[["Echoed Voice","Écho","Widerhall","Echeggiavoce","Eco Voz","エコーボイス"],0,1,15,40,100],
[["Chip Away","Attrition","Zermürben","Insidia","Guardia Baja","なしくずし"],0,0,20,70,100],
[["Clear Smog","Bain de Smog","Klärsmog","Pulifumo","Niebla Clara","クリアスモッグ"],3,1,15,50,0],
[["Stored Power","Force Ajoutée","Kraftvorrat","Veicolaforza","Poder Reserva","アシストパワー"],13,1,10,20,100],
[["Quick Guard","Prévention","Rapidschutz","Anticipo","Anticipo","ファストガード"],1,2,15,0,0],
[["Ally Switch","Interversion","Seitentausch","Cambiaposto","Cambio Banda","サイドチェンジ"],13,2,15,0,0],
[["Scald","Ébullition","Siedewasser","Idrovampata","Escaldar","ねっとう"],10,1,15,80,100],
[["Shell Smash","Exuviation","Hausbruch","Gettaguscio","Rompecoraza","からをやぶる"],0,2,15,0,0],
[["Heal Pulse","Vibra Soin","Heilwoge","Ondasana","Pulso Cura","いやしのはどう"],13,2,10,0,0],
[["Hex","Châtiment","Bürde","Sciagura","Infortunio","たたりめ"],7,1,10,65,100],
[["Sky Drop","Chute Libre","Freier Fall","Cadutalibera","Caída Libre","フリーフォール"],2,0,10,60,100],
[["Shift Gear","Changement Vitesse","Gangwechsel","Cambiomarcia","Cambio de Marcha","ギアチェンジ"],8,2,10,0,0],
[["Circle Throw","Projection","Überkopfwurf","Ribaltiro","Llave Giro","ともえなげ"],1,0,10,60,90],
[["Incinerate","Calcination","Einäschern","Bruciatutto","Calcinación","やきつくす"],9,1,15,60,100],
[["Quash","À la Queue","Verzögerung","Spintone","Último Lugar","さきおくり"],16,2,15,0,100],
[["Acrobatics","Acrobatie","Akrobatik","Acrobazia","Acróbata","アクロバット"],2,0,15,55,100],
[["Reflect Type","Copie Type","Typenspiegel","Riflettipo","Clonatipo","ミラータイプ"],0,2,15,0,0],
[["Retaliate","Vengeance","Heimzahlung","Nemesi","Represalia","かたきうち"],0,0,5,70,100],
[["Final Gambit","Tout ou Rien","Wagemut","Azzardo","Sacrificio","いのちがけ"],1,1,5,0,100],
[["Bestow","Passe-Cadeau","Offerte","Cediregalo","Ofrenda","ギフトパス"],0,2,15,0,0],
[["Inferno","Feu d&#39;Enfer","Inferno","Marchiatura","Infierno","れんごく"],9,1,5,100,50],
[["Water Pledge","Aire d&#39;Eau","Wassersäulen","Acquapatto","Voto Agua","みずのちかい"],10,1,10,80,100],
[["Fire Pledge","Aire de Feu","Feuersäulen","Fiammapatto","Voto Fuego","ほのおのちかい"],9,1,10,80,100],
[["Grass Pledge","Aire d&#39;Herbe","Pflanzensäulen","Erbapatto","Voto Planta","くさのちかい"],11,1,10,80,100],
[["Volt Switch","Change Éclair","Voltwechsel","Invertivolt","Voltiocambio","ボルトチェンジ"],12,1,20,70,100],
[["Struggle Bug","Survinsecte","Käfertrutz","Entomoblocco","Estoicismo","むしのていこう"],6,1,20,50,100],
[["Bulldoze","Piétisol","Dampfwalze","Battiterra","Terratemblor","じならし"],4,0,20,60,100],
[["Frost Breath","Souffle Glacé","Eisesodem","Alitogelido","Vaho Gélido","こおりのいぶき"],14,1,10,60,90],
[["Dragon Tail","Draco-Queue","Drachenrute","Codadrago","Cola Dragón","ドラゴンテール"],15,0,10,60,90],
[["Work Up","Rengorgement","Kraftschub","Cuordileone","Avivar","ふるいたてる"],0,2,30,0,0],
[["Electroweb","Toile Élek","Elektronetz","Elettrotela","Electrotela","エレキネット"],12,1,15,55,95],
[["Wild Charge","Éclair Fou","Stromstoß","Sprizzalampo","Voltio Cruel","ワイルドボルト"],12,0,15,90,100],
[["Drill Run","Tunnelier","Schlagbohrer","Giravvita","Taladradora","ドリルライナー"],4,0,10,80,95],
[["Dual Chop","Double Baffe","Doppelhieb","Doppiocolpo","Golpe Bis","ダブルチョップ"],15,0,15,40,90],
[["Heart Stamp","Crèvecœur","Herzstempel","Cuorestampo","Arrumaco","ハートスタンプ"],13,0,25,60,100],
[["Horn Leech","Encornebois","Holzgeweih","Legnicorno","Asta Drenaje","ウッドホーン"],11,0,10,75,100],
[["Sacred Sword","Lame Sainte","Sanctoklinge","Spadasolenne","Espada Santa","せいなるつるぎ"],1,0,15,90,100],
[["Razor Shell","Coquilame","Kalkklinge","Conchilama","Concha Filo","シェルブレード"],10,0,10,75,95],
[["Heat Crash","Tacle Feu","Brandstempel","Marchiafuoco","Golpe Calor","ヒートスタンプ"],9,0,10,0,100],
[["Leaf Tornado","Phytomixeur","Grasmixer","Vorticerba","Ciclón de Hojas","グラスミキサー"],11,1,10,65,90],
[["Steamroller","Bulldoboule","Quetschwalze","Rulloduro","Rodillo de Púas","ハードローラー"],6,0,20,65,100],
[["Cotton Guard","Cotogarde","Watteschild","Cotonscudo","Rizo Algodón","コットンガード"],11,2,10,0,0],
[["Night Daze","Explonuit","Nachtflut","Urtoscuro","Pulso Noche","ナイトバースト"],16,1,10,85,95],
[["Psystrike","Frappe Psy","Psychostoß","Psicobotta","Onda Mental","サイコブレイク"],13,1,10,100,100],
[["Tail Slap","Plumo-Queue","Kehrschelle","Spazzasberla","Plumerazo","スイープビンタ"],0,0,10,25,85],
[["Hurricane","Vent Violent","Orkan","Tifone","Vendaval","ぼうふう"],2,1,10,110,70],
[["Head Charge","Peignée","Steinschädel","Ricciolata","Ariete","アフロブレイク"],0,0,15,120,100],
[["Gear Grind","Lancécrou","Klikkdiskus","Ingracolpo","Rueda Doble","ギアソーサー"],8,0,15,50,85],
[["Searing Shot","Incendie","Flammenball","Sparafuoco","Bomba Ígnea","かえんだん"],9,1,5,100,100],
[["Techno Blast","Techno-Buster","Techblaster","Tecnobotto","Tecno Shock","テクノバスター"],0,1,5,120,100],
[["Relic Song","Chant Antique","Urgesang","Cantoantico","Canto Arcaico","いにしえのうた"],0,1,10,75,100],
[["Secret Sword","Lame Ouinte","Mystoschwert","Spadamistica","Sable Místico","しんぴのつるぎ"],1,1,10,85,100],
[["Glaciate","Ère Glaciaire","Eiszeit","Gelamondo","Mundo Gélido","こごえるせかい"],14,1,10,65,95],
[["Bolt Strike","Charge Foudre","Blitzschlag","Lucesiluro","Ataque Fulgor","らいげき"],12,0,5,130,85],
[["Blue Flare","Flamme Bleue","Blauflammen","Fuocoblu","Llama Azul","あおいほのお"],9,1,5,130,85],
[["Fiery Dance","Danse du Feu","Feuerreigen","Voldifuoco","Danza Llama","ほのおのまい"],9,1,10,80,100],
[["Freeze Shock","Éclair Gelé","Frostvolt","Elettrogelo","Rayo Gélido","フリーズボルト"],14,0,5,140,90],
[["Ice Burn","Feu Glacé","Frosthauch","Vampagelida","Llama Gélida","コールドフレア"],14,1,5,140,90],
[["Snarl","Aboiement","Standpauke","Urlorabbia","Alarido","バークアウト"],16,1,15,55,95],
[["Icicle Crash","Chute Glace","Eiszapfhagel","Scagliagelo","Chuzos","つららおとし"],14,0,10,85,90],
[["V-create","Coup Victoire","V-Generator","Generatore V","V de Fuego","Ｖジェネレート"],9,0,5,180,95],
[["Fusion Flare","Flamme Croix","Kreuzflamme","Incrofiamma","Llama Fusión","クロスフレイム"],9,1,5,100,100],
[["Fusion Bolt","Éclair Croix","Kreuzdonner","Incrotuono","Rayo Fusión","クロスサンダー"],12,0,5,100,100],
[["Flying Press","Flying Press","Flying Press","Schiacciatuffo","Plancha Voladora","フライングプレス"],1,0,10,100,95],
[["Mat Block","Tatamigaeshi","Tatami-Schild","Ribaltappeto","Escudo Tatami","たたみがえし"],1,2,10,0,0],
[["Belch","Éructation","Rülpser","Rutto","Eructo","ゲップ"],3,1,10,120,90],
[["Rototiller","Fertilisation","Pflüger","Aracampo","Fertilizante","たがやす"],4,2,10,0,0],
[["Sticky Web","Toile Gluante","Klebenetz","Rete Vischiosa","Red Viscosa","ねばねばネット"],6,2,20,0,0],
[["Fell Stinger","Dard Mortel","Stachelfinale","Pungiglione","Aguijón Letal","とどめばり"],6,0,25,50,100],
[["Phantom Force","Hantise","Phantomkraft","Spettrotuffo","Golpe Fantasma","ゴーストダイブ"],7,0,10,90,100],
[["Trick-or-Treat","Halloween","Halloween","Halloween","Halloween","ハロウィン"],7,2,20,0,100],
[["Noble Roar","Râle Mâle","Kampfgebrüll","Urlo","Rugido de Guerra","おたけび"],0,2,30,0,100],
[["Ion Deluge","DélugePlasma","Plasmaschauer","Pioggiaplasma","Cortina Plasma","プラズマシャワー"],12,2,25,0,0],
[["Parabolic Charge","Parabocharge","Parabolladung","Caricaparabola","Carga Parábola","パラボラチャージ"],12,1,20,65,100],
[["Forest&#39;s Curse","Maléfice Sylvain","Waldesfluch","Schiacciatuffo","Condena Silvana","もりののろい"],11,2,20,0,100],
[["Petal Blizzard","Tempête Florale","Blütenwirbel","Fiortempesta","Tormenta Floral","はなふぶき"],11,0,15,90,100],
[["Freeze-Dry","Lyophilisation","Gefriertrockner","Liofilizzazione","Liofilización","フリーズドライ"],14,1,20,70,100],
[["Disarming Voice","Voix Enjôleuse","Säuselstimme","Incantavoce","Voz Cautivadora","チャームボイス"],17,1,15,40,0],
[["Parting Shot","Dernier Mot","Abgangstirade","Monito","Última Palabra","すてゼリフ"],16,2,20,0,100],
[["Topsy-Turvy","Renversement","Invertigo","Sottosopra","Reversión","ひっくりかえす"],16,2,20,0,0],
[["Draining Kiss","Vampibaiser","Diebeskuss","Assorbibacio","Beso Drenaje","ドレインキッス"],17,1,10,50,100],
[["Crafty Shield","Vigilance","Trickschutz","Truccodifesa","Truco Defensa","トリックガード"],17,2,10,0,0],
[["Flower Shield","Garde Florale","Floraschutz","Fiordifesa","Defensa Floral","フラワーガード"],17,2,10,0,0],
[["Grassy Terrain","Champ Herbu","Grasfeld","Campo Erboso","Campo de Hierba","グラスフィールド"],11,2,10,0,0],
[["Misty Terrain","Champ Brumeux","Nebelfeld","Campo Nebbioso","Campo de Niebla","ミストフィールド"],17,2,10,0,0],
[["Electrify","Électrisation","Elektrifizierung","Elettrocontagio","Electrificación","そうでん"],12,2,20,0,0],
[["Play Rough","Câlinerie","Knuddler","Carineria","Carantoña","じゃれつく"],17,0,10,90,90],
[["Fairy Wind","Vent Féérique","Feenbrise","Vento di Fata","Viento Feérico","ようせいのかぜ"],17,1,30,40,100],
[["Moonblast","Pouvoir Lunaire","Mondgewalt","Forza Lunare","Fuerza Lunar","ムーンフォース"],17,1,15,95,100],
[["Boomburst","Bang Sonique","Überschallknall","Ondaboato","Estruendo","ばくおんぱ"],0,1,10,140,100],
[["Fairy Lock","Verrou Enchanté","Feenschloss","Blocco Fatato","Cerrojo Feérico","フェアリーロック"],17,2,10,0,0],
[["King&#39;s Shield","Bouclier Royal","Königsschild","Scudo Reale","Escudo Real","キングシールド"],8,2,10,0,0],
[["Play Nice","Camaraderie","Kameradschaft","Simpatia","Camaradería","なかよくする"],0,2,20,0,0],
[["Confide","Confidence","Vertrauenssache","Confidenza","Confidencia","ないしょばなし"],0,2,20,0,0],
[["Diamond Storm","Orage Adamantin","Diamantsturm","Diamantempesta","Torm. Diamantes","ダイヤストーム"],5,0,5,100,95],
[["Steam Eruption","Jet de Vapeur","Dampfschwall","Vaporscoppio","Chorro de Vapor","スチームバースト"],10,1,5,110,95],
[["Hyperspace Hole","TrouDimensionnel","Dimensionsloch","Forodimensionale","Paso Dimensional","いじげんホール"],13,1,5,80,0],
[["Water Shuriken","Sheauriken","Wasser-Shuriken","Acqualame","Shuriken de Agua","みずしゅりけん"],10,1,20,15,100],
[["Mystical Fire","Feu Ensorcelé","Magieflamme","Magifiamma","Llama Embrujada","マジカルフレイム"],9,1,10,75,100],
[["Spiky Shield","Pico-Défense","Schutzstacheln","Agodifesa","Barrera Espinosa","ニードルガード"],11,2,10,0,0],
[["Aromatic Mist","Brume Capiteuse","Duftwolke","Nebularoma","Niebla Aromática","アロマミスト"],17,2,20,0,0],
[["Eerie Impulse","Ondes Étranges","Mystowellen","Elettromistero","Onda Anómala","かいでんぱ"],12,2,15,0,100],
[["Venom Drench","Piège de Venin","Giftfalle","Velenotrappola","Trampa Venenosa","ベノムトラップ"],3,2,20,0,100],
[["Powder","Nuée de Poudre","Pulverschleuder","Pulviscoppio","Polvo Explosivo","ふんじん"],6,2,20,0,100],
[["Geomancy","Géo-Contrôle","Geokontrolle","Geocontrollo","Geocontrol","ジオコントロール"],17,2,10,0,0],
[["Magnetic Flux","Magné-Contrôle","Magnetregler","Controllo Polare","Aura Magnética","じばそうさ"],12,2,20,0,0],
[["Happy Hour","Étrennes","Goldene Zeiten","Cuccagna","Paga Extra","ハッピータイム"],0,2,30,0,0],
[["Electric Terrain","Champ Électrifié","Elektrofeld","Campo Elettrico","Campo Eléctrico","エレキフィールド"],12,2,10,0,0],
[["Dazzling Gleam","Éclat Magique","Zauberschein","Magibrillio","Brillo Mágico","マジカルシャイン"],17,1,10,80,100],
[["Celebrate","Célébration","Ehrentag","Auguri","Celebración","おいわい"],0,2,40,0,0],
[["Hold Hands","Mains Jointes","Händchenhalten","Mano nella Mano","Manos Juntas","てをつなぐ"],0,2,40,0,0],
[["Baby-Doll Eyes","Regard Touchant","Kulleraugen","Occhioni Teneri","Ojitos Tiernos","つぶらなひとみ"],17,2,30,0,100],
[["Nuzzle","Frotte-Frimousse","Wangenrubbler","Elettrococcola","Moflete Estático","ほっぺすりすり"],12,0,20,20,100],
[["Hold Back","Retenue","Zurückhaltung","Riguardo","Clemencia","てかげん"],0,0,40,40,100],
[["Infestation","Harcèlement","Plage","Assillo","Acoso","まとわりつく"],6,1,20,20,100],
[["Power-Up Punch","Poing Boost","Steigerungshieb","Crescipugno","Puño Incremento","グロウパンチ"],1,0,20,40,100],
[["Oblivion Wing","Mort-Ailes","Unheilsschwingen","Ali del Fato","Ala Mortífera","デスウイング"],2,1,10,80,100],
[["Thousand Arrows","Myria-Flèches","Tausend Pfeile","Mille Frecce","Mil Flechas","サウザンアロー"],4,0,10,90,100],
[["Thousand Waves","Myria-Vagues","Tausend Wellen","Mille Onde","Mil Temblores","サウザンウェーブ"],4,0,10,90,100],
[["Land&#39;s Wrath","Force Chtonienne","Bodengewalt","Forza Tellurica","Fuerza Telúrica","グランドフォース"],4,0,10,90,100],
[["Light of Ruin","Lumière du Néant","Lux Calamitatis","Luce Nefasta","Luz Aniquiladora","はめつのひかり"],17,1,5,140,90],
[["Origin Pulse","Onde Originelle","Ursprungswoge","Primopulsar","Pulso Primigenio","こんげんのはどう"],10,1,10,110,85],
[["Precipice Blades","Lame Pangéenne","Abgrundsklinge","Spade Telluriche","Filo del Abismo","だんがいのつるぎ"],4,0,10,120,85],
[["Dragon Ascent","Draco Ascension","Zenitstürmer","Ascesa del Drago","Ascenso Draco","ガリョウテンセイ"],2,0,5,120,100],
[["Hyperspace Fury","Furie Dimension","Dimensionswahn","Urtodimensionale","Cerco Dimensión","いじげんラッシュ"],16,0,5,100,0],
/*[["Breakneck Blitz","Turbo-Charge Bulldozer","Hyper-Sprintangriff","Carica Travolgente","Carrera Arrolladora","ウルトラダッシュアタック"],0,PHYSICAL,1,0,0]*/, //gen7
/*[["Breakneck Blitz","Turbo-Charge Bulldozer","Hyper-Sprintangriff","Carica Travolgente","Carrera Arrolladora","ウルトラダッシュアタック"],0,SPECIAL,1,0,0]*/,
/*[["All-Out Pummeling","Combo Hyper-Furie","Fulminante Faustschläge","Iperscarica Furiosa","Ráfaga Demoledora","全力無双激烈拳"],1,PHYSICAL,1,0,0]*/,
/*[["All-Out Pummeling","Combo Hyper-Furie","Fulminante Faustschläge","Iperscarica Furiosa","Ráfaga Demoledora","全力無双激烈拳"],1,SPECIAL,1,0,0]*/,
/*[["Supersonic Skystrike","Piqué Supersonique","Finaler Steilflug","Picchiata Devastante","Picado Supersónico","ファイナルダイブクラッシュ"],2,PHYSICAL,1,0,0]*/,
/*[["Supersonic Skystrike","Piqué Supersonique","Finaler Steilflug","Picchiata Devastante","Picado Supersónico","ファイナルダイブクラッシュ"],2,SPECIAL,1,0,0]*/,
/*[["Acid Downpour","Déluge Causti-Toxique","Vernichtender Säureregen","Acidiluvio Corrosivo","Diluvio Corrosivo","アシッドポイズンデリート"],3,PHYSICAL,1,0,0]*/,
/*[["Acid Downpour","Déluge Causti-Toxique","Vernichtender Säureregen","Acidiluvio Corrosivo","Diluvio Corrosivo","アシッドポイズンデリート"],3,SPECIAL,1,0,0]*/,
/*[["Tectonic Rage","Éruption Géo-Sismique","Seismische Eruption","Furore della Terra","Barrena Telúrica","ライジングランドオーバー"],4,PHYSICAL,1,0,0]*/,
/*[["Tectonic Rage","Éruption Géo-Sismique","Seismische Eruption","Furore della Terra","Barrena Telúrica","ライジングランドオーバー"],4,SPECIAL,1,0,0]*/,
/*[["Continental Crush","Apocalypse Gigalithique","Apokalyptische Steinpresse","Gigamacigno Polverizzante","Aplastamiento Gigalítico","ワールドエンドフォール"],5,PHYSICAL,1,0,0]*/,
/*[["Continental Crush","Apocalypse Gigalithique","Apokalyptische Steinpresse","Gigamacigno Polverizzante","Aplastamiento Gigalítico","ワールドエンドフォール"],5,SPECIAL,1,0,0]*/,
/*[["Savage Spin-Out","Cocon Fatal","Wirbelnder Insektenhieb","Bozzolo Fatale","Guadaña Sedosa","絶対捕食回転斬"],6,PHYSICAL,1,0,0]*/,
/*[["Savage Spin-Out","Cocon Fatal","Wirbelnder Insektenhieb","Bozzolo Fatale","Guadaña Sedosa","絶対捕食回転斬"],6,SPECIAL,1,0,0]*/,
/*[["Never-Ending Nightmare","Appel des Ombres Éternelles","Ewige Nacht","Abbraccio Spettrale","Presa Espectral","無限暗夜への誘い"],7,PHYSICAL,1,0,0]*/,
/*[["Never-Ending Nightmare","Appel des Ombres Éternelles","Ewige Nacht","Abbraccio Spettrale","Presa Espectral","無限暗夜への誘い"],7,SPECIAL,1,0,0]*/,
/*[["Corkscrew Crash","Vrille Maximum","Turbo-Spiralkombo","Spirale Perforante","Hélice Trepanadora","超絶螺旋連撃"],8,PHYSICAL,1,0,0]*/,
/*[["Corkscrew Crash","Vrille Maximum","Turbo-Spiralkombo","Spirale Perforante","Hélice Trepanadora","超絶螺旋連撃"],8,SPECIAL,1,0,0]*/,
/*[["Inferno Overdrive","Pyro-Explosion Cataclysmique","Dynamische Maxiflamme","Fiammobomba Detonante","Hecatombe Pírica","ダイナミックフルフレイム"],9,PHYSICAL,1,0,0]*/,
/*[["Inferno Overdrive","Pyro-Explosion Cataclysmique","Dynamische Maxiflamme","Fiammobomba Detonante","Hecatombe Pírica","ダイナミックフルフレイム"],9,SPECIAL,1,0,0]*/,
/*[["Hydro Vortex","Super Tourbillon Abyssal","Super-Wassertornado","Idrovortice Abissale","Hidrovórtice Abisal","スーパーアクアトルネード"],10,PHYSICAL,1,0,0]*/,
/*[["Hydro Vortex","Super Tourbillon Abyssal","Super-Wassertornado","Idrovortice Abissale","Hidrovórtice Abisal","スーパーアクアトルネード"],10,SPECIAL,1,0,0]*/,
/*[["Bloom Doom","Pétalexplosion Éblouissante","Brillante Blütenpracht","Floriscoppio Sfolgorante","Megatón Floral","ブルームシャインエクストラ"],11,PHYSICAL,1,0,0]*/,
/*[["Bloom Doom","Pétalexplosion Éblouissante","Brillante Blütenpracht","Floriscoppio Sfolgorante","Megatón Floral","ブルームシャインエクストラ"],11,SPECIAL,1,0,0]*/,
/*[["Gigavolt Havoc","Fulguro-Lance Gigavolt","Gigavolt-Funkensalve","Gigascarica Folgorante","Gigavoltio Destructor","スパーキングギガボルト"],12,PHYSICAL,1,0,0]*/,
/*[["Gigavolt Havoc","Fulguro-Lance Gigavolt","Gigavolt-Funkensalve","Gigascarica Folgorante","Gigavoltio Destructor","スパーキングギガボルト"],12,SPECIAL,1,0,0]*/,
/*[["Shattered Psyche","Psycho-Pulvérisation EX","Psycho-Schmetterschlag","Impatto Psicocinetico","Disruptor Psíquico","マキシマムサイブレイカー"],13,PHYSICAL,1,0,0]*/,
/*[["Shattered Psyche","Psycho-Pulvérisation EX","Psycho-Schmetterschlag","Impatto Psicocinetico","Disruptor Psíquico","マキシマムサイブレイカー"],13,SPECIAL,1,0,0]*/,
/*[["Subzero Slammer","Laser Cryogénique","Tobender Geofrost","Criodistruzione Polare","Crioaliento Despiadado","レイジングジオフリーズ"],14,PHYSICAL,1,0,0]*/,
/*[["Subzero Slammer","Laser Cryogénique","Tobender Geofrost","Criodistruzione Polare","Crioaliento Despiadado","レイジングジオフリーズ"],14,SPECIAL,1,0,0]*/,
/*[["Devastating Drake","Chaos Draconique","Drastisches Drachendröhnen","Dragoschianto Finale","Dracoaliento Devastador","アルティメットドラゴンバーン"],15,PHYSICAL,1,0,0]*/,
/*[["Devastating Drake","Chaos Draconique","Drastisches Drachendröhnen","Dragoschianto Finale","Dracoaliento Devastador","アルティメットドラゴンバーン"],15,SPECIAL,1,0,0]*/,
/*[["Black Hole Eclipse","Trou Noir des Ombres","Schwarzes Loch des Grauens","Buco Nero del Non Ritorno","Agujero Negro Aniquilador","ブラックホールイクリプス"],16,PHYSICAL,1,0,0]*/,
/*[["Black Hole Eclipse","Trou Noir des Ombres","Schwarzes Loch des Grauens","Buco Nero del Non Ritorno","Agujero Negro Aniquilador","ブラックホールイクリプス"],16,SPECIAL,1,0,0]*/,
/*[["Twinkle Tackle","Impact Choupinova","Entzückender Sternenstoß","Astroimpatto Fatato","Arrumaco Sideral","ラブリースターインパクト"],17,PHYSICAL,1,0,0]*/,
/*[["Twinkle Tackle","Impact Choupinova","Entzückender Sternenstoß","Astroimpatto Fatato","Arrumaco Sideral","ラブリースターインパクト"],17,SPECIAL,1,0,0]*/,
/*[["Catastropika","Pikachute Foudroyante","Perfektes Pika-Projektil","Super Pikaboom","Pikavoltio Letal","ひっさつのピカチュート"],12,PHYSICAL,1,210,0]*/,
[["Shore Up","Amass&#39;Sable","Sandsammler","Sabbiaccumulo","Recogearena","すなあつめ"],4,2,10,0,0],
[["First Impression","Escarmouche","Überrumpler","Schermaglia","Escaramuza","であいがしら"],6,0,10,90,100],
[["Baneful Bunker","Blockhaus","Bunker","Fortino","Búnker","トーチカ"],3,2,10,0,0],
[["Spirit Shackle","Tisse Ombre","Schattenfessel","Cucitura d&#39;Ombra","Puntada Sombría","かげぬい"],7,0,10,80,100],
[["Darkest Lariat","Dark Lariat","Dark Lariat","Braccioteso","Lariat Oscuro","DDラリアト"],16,0,10,85,100],
[["Sparkling Aria","Aria de l&#39;Écume","Schaumserenade","Canto Effimero","Aria Burbuja","うたかたのアリア"],10,1,10,90,100],
[["Ice Hammer","Marteau de Glace","Eishammer","Martelgelo","Martillo Hielo","アイスハンマー"],14,0,10,100,90],
[["Floral Healing","Soin Floral","Florakur","Cura Floreale","Cura Floral","フラワーヒール"],17,2,10,0,0],
[["High Horsepower","Cavalerie Lourde","Pferdestärke","Forza Equina","Fuerza Equina","１０まんばりき"],4,0,10,95,95],
[["Strength Sap","Vol-Force","Kraftabsorber","Assorbiforza","Absorbefuerza","ちからをすいとる"],11,2,10,0,100],
[["Solar Blade","Lame Solaire","Solarklinge","Lama Solare","Cuchilla Solar","ソーラーブレード"],11,0,10,125,100],
[["Leafage","Feuillage","Blattwerk","Fogliame","Follaje","このは"],11,0,40,40,100],
[["Spotlight","Projecteur","Rampenlicht","Riflettore","Foco","スポットライト"],0,2,15,0,0],
[["Toxic Thread","Fil Toxique","Giftfaden","Velenotela","Hilo Venenoso","どくのいと"],3,2,20,0,100],
[["Laser Focus","Affilage","Konzentration","Concentrazione","Aguzar","とぎすます"],0,2,30,0,0],
[["Gear Up","Engrenage","Hilfsmechanik","Marciainpiù","Piñón Auxiliar","アシストギア"],8,2,20,0,0],
[["Throat Chop","Exécu-Son","Neck Strike","Colpo Infernale","Golpe Mordaza","じごくづき"],16,0,15,80,100],
[["Pollen Puff","Boule Pollen","Pollenknödel","Sferapolline","Bola de Polen","かふんだんご"],6,1,15,90,100],
[["Anchor Shot","Ancrage","Ankerschuss","Colpo d&#39;Ancora","Anclaje","アンカーショット"],8,0,20,80,100],
[["Psychic Terrain","Champ Psychique","Psychofeld","Campo Psichico","Campo Psíquico","サイコフィールド"],13,2,10,0,0],
[["Lunge","Furie-Bond","Anfallen","Assalto","Plancha","とびかかる"],6,0,15,80,100],
[["Fire Lash","Fouet de Feu","Feuerpeitsche","Frusta di Fuoco","Látigo Ígneo","ほのおのムチ"],9,0,15,80,100],
[["Power Trip","Arrogance","Überheblichkeit","Tracotanza","Chulería","つけあがる"],16,0,10,20,100],
[["Burn Up","Flamme Ultime","Ausbrennen","Ultima Fiamma","Llama Final","もえつきる"],9,1,5,130,100],
[["Speed Swap","Permuvitesse","Initiativetausch","Velociscambio","Cambia Velocidad","スピードスワップ"],13,2,10,0,0],
[["Smart Strike","Estocorne","Schmalhorn","Sottilcorno","Cuerno Certero","スマートホーン"],8,0,10,70,0],
[["Purify","Purification","Läuterung","Purificazione","Purificación","じょうか"],3,2,20,0,0],
[["Revelation Dance","Danse Éveil","Wecktanz","Mutadanza","Danza Despertar","めざめるダンス"],0,1,15,90,100],
[["Core Enforcer","Sanction Suprême","Sanktionskern","Nucleocastigo","Núcleo Castigo","コアパニッシャー"],15,1,10,100,100],
[["Trop Kick","Botte Sucrette","Tropenkick","Tropicalcio","Patada Tropica","トロピカルキック"],11,0,15,70,100],
[["Instruct","Sommation","Kommando","Imposizione","Mandato","さいはい"],13,2,15,0,0],
[["Beak Blast","Bec-Canon","Schnabelkanone","Cannonbecco","Pico Cañón","くちばしキャノン"],2,0,15,100,100],
[["Clanging Scales","Vibrécaille","Schuppenrasseln","Clamorsquame","Fragor Escamas","スケイルノイズ"],15,1,5,110,100],
[["Dragon Hammer","Draco-Marteau","Drachenhammer","Marteldrago","Martillo Dragón","ドラゴンハンマー"],15,0,15,90,100],
[["Brutal Swing","Centrifugifle","Wirbler","Vorticolpo","Giro Vil","ぶんまわす"],16,0,20,60,100],
[["Aurora Veil","Voile Aurore","Auroraschleier","Velaurora","Velo Aurora","オーロラベール"],14,2,20,0,0],
/*[["Sinister Arrow Raid","Fureur des Plumes Spectrales","Schatten-Pfeilregen","Dardoassalto Spettrale","Aluvión de Flechas Sombrías","シャドーアローズストライク"],7,PHYSICAL,1,180,0]*/,
/*[["Malicious Moonsault","Dark Body Press","Hyper Dark Crusher","Iperschianto delle Tenebre","Hiperplancha Oscura","ハイパーダーククラッシャー"],16,PHYSICAL,1,180,0]*/,
/*[["Oceanic Operetta","Symphonie des Ondines","Grandiose Meeressymphonie","Sinfonia del Mare","Sinfonía de la Diva Marina","わだつみのシンフォニア"],10,SPECIAL,1,195,0]*/,
/*[["Guardian of Alola","Colère du Gardien d'Alola","Alolas Wächter","Collera del Guardiano","Cólera del Guardián","ガーディアン・デ・アローラ"],17,SPECIAL,1,0,0]*/,
/*[["Soul-Stealing 7-Star Strike","Fauche-Âme des Sept Étoiles","Sternbild des Seelenraubes","Colpo Eptastellare Rubanima","Constelación Robaalmas","七星奪魂腿"],7,PHYSICAL,1,195,0]*/,
/*[["Stoked Sparksurfer","Électro-Surf Survolté","Blitz-Wellenritt","Elettrosurf Folgorante","Surfeo Galvánico","ライトニングサーフライド"],12,SPECIAL,1,175,0]*/,
/*[["Pulverizing Pancake","Gare au Ronflex","Schluss mit lustig","Adesso Faccio sul Serio","Arrojo Intempestivo","ほんきをだすこうげき"],0,PHYSICAL,1,210,0]*/,
/*[["Extreme Evoboost","Neuf pour Un","Macht der Neun","Potenziamento Eevolutivo","Novena Potencia","ナインエボルブースト"],0,STATUS,1,0,0]*/,
/*[["Genesis Supernova","Supernova Originelle","Supernova des Ursprungs","Supernova delle Origini","Supernova Original","オリジンズスーパーノヴァ"],13,SPECIAL,1,185,0]*/,
[["Shell Trap","Carapiège","Panzerfalle","Gusciotrappola","Coraza Trampa","トラップシェル"],9,1,5,150,100],
[["Fleur Cannon","Canon Floral","Kanonenbouquet","Cannonfiore","Cañón Floral","フルールカノン"],17,1,5,130,90],
[["Psychic Fangs","Psycho-Croc","Psychobeißer","Psicozanna","Psicocolmillo","サイコファング"],13,0,10,85,100],
[["Stomping Tantrum","Trépignement","Fruststampfer","Battipiedi","Pataleta","じたんだ"],4,0,10,75,100],
[["Shadow Bone","Os&#39;Ombre","Schattenknochen","Ossotetro","Hueso Sombrío","シャドーボーン"],7,0,10,85,100],
[["Accelerock","Vif Roc","Turbofelsen","Rocciarapida","Roca Veloz","アクセルロック"],5,0,20,40,100],
[["Liquidation","Aqua-Brèche","Aquadurchstoß","Idrobreccia","Hidroariete","アクアブレイク"],10,0,10,85,100],
[["Prismatic Laser","Laser Prisme","Prisma-Laser","Prismalaser","Láser Prisma","プリズムレーザー"],13,1,10,160,100],
[["Spectral Thief","Clepto-Mânes","Diebesschatten","Ombrafurto","Robasombra","シャドースチール"],7,0,10,90,100],
[["Sunsteel Strike","Choc Météore","Stahlgestirn","Astrocarica","Meteoimpacto","メテオドライブ"],8,0,5,100,100],
[["Moongeist Beam","Rayon Spectral","Schattenstrahl","Raggio d&#39;Ombra","Rayo Umbrío","シャドーレイ"],7,1,5,100,100],
[["Tearful Look","Larme à l&#39;Œil","Tränendrüse","Occhionilucidi","Ojos Llorosos","なみだめ"],0,2,20,0,0],
[["Zing Zap","Électrikipik","Elektropikser","Elettropizzico","Electropunzada","びりびりちくちく"],12,0,10,80,100],
[["Nature&#39;s Madness","Ire de la Nature","Naturzorn","Ira della Natura","Furia Natural","しぜんのいかり"],17,1,10,0,90],
[["Multi-Attack","Coup Varia-Type","Multi-Angriff","Multiattacco","Multiataque","マルチアタック"],0,0,10,120,100],
/*[["10,000,000 Volt Thunderbolt","Giga-Tonnerre","Tausendfacher Donnerblitz","Iperfulmine","Gigarrayo Fulminante","1000まんボルト"],12,SPECIAL,1,195,0]*/,
[["Mind Blown","Caboche-Kaboum","Knallkopf","Sbalorditesta","Cabeza Sorpresa","ビックリヘッド"],9,1,5,150,100],
[["Plasma Fists","Plasma Punch","Plasmafäuste","Pugni Plasma","Puños Plasma","プラズマフィスト"],12,0,15,100,100],
[["Photon Geyser","Photo-Geyser","Photonen-Geysir","Geyser Fotonico","Géiser Fotónico","フォトンゲイザー"],13,1,5,100,100],
/*[["Light That Burns the Sky","Apocalypsis Luminis","Licht des Erlöschens","Fotodistruzione Apocalittica","Fotodestrucción Apocalíptica","天焦がす滅亡の光"],13,SPECIAL,1,200,0]*/,
/*[["Searing Sunraze Smash","Hélio-Choc Dévastateur","Schmetternde Sonnenwalze","Supercollisione Solare","Embestida Solar","サンシャインスマッシャー"],8,SPECIAL,1,200,0]*/,
/*[["Menacing Moonraze Maelstrom","Rayons Séléno-Explosifs","Geballter Mondlaser","Deflagrazione Lunare","Deflagración Lunar","ムーンライトブラスター"],7,SPECIAL,1,200,0]*/,
/*[["Let's Snuggle Forever","Patati-Patattrape","Herzliche Knuddelkloppe","Dolcesacco di Botte","Somanta Amistosa","ぽかぼかフレンドタイム"],17,PHYSICAL,1,190,0]*/,
/*[["Splintered Stormshards","Hurlement des Roches-Lames","Fataler Steinregen","Litotempesta Radiale","Tempestad Rocosa","ラジアルエッジストーム"],5,PHYSICAL,1,190,0]*/,
/*[["Clangorous Soulblaze","Dracacophonie Flamboyante","Rasselnder Seelentanz","Dracofonia Divampante","Estruendo Implacable","ブレイジングソウルビート"],15,SPECIAL,1,185,0]*/,
[["Zippy Zap","Pika-Sprint","Britzelturbo","Sprintaboom","Pikaturbo","ばちばちアクセル"],12,0,15,50,100],
[["Splishy Splash","Pika-Splash","Plätschersurfer","Surfasplash","Salpikasurf","ざぶざぶサーフ"],10,1,15,90,100],
[["Floaty Fall","Pika-Piqué","Schwebesturz","Piombaflap","Pikapicado","ふわふわフォール"],2,0,15,90,95],
[["Pika Papow","Pika-Fracas","Pika-Flash","Pikasaetta","Pikatormenta","ピカピカサンダー"],12,1,20,0,0],
[["Bouncy Bubble","Évo-Thalasso","Blubbsauger","Bollaslurp","Vapodrenaje","いきいきバブル"],10,1,15,90,100],
[["Buzzy Buzz","Évo-Dynamo","Knisterladung","Elettrozap","Joltioparálisis","びりびりエレキ"],12,1,15,90,100],
[["Sizzly Slide","Évo-Flambo","Flackerbrand","Fiammabam","Flarembestida","めらめらバーン"],9,0,15,90,100],
[["Glitzy Glow","Évo-Psycho","Pulsieraura","Auraswoosh","Espeaura","どばどばオーラ"],13,1,15,90,100],
[["Baddy Bad","Évo-Ténébro","Quälzone","Zona Buiabuia","Umbreozona","わるわるゾーン"],16,1,15,90,100],
[["Sappy Seed","Évo-Écolo","Sprießbomben","Bombafrush","Leafitobombas","すくすくボンバー"],11,0,15,90,100],
[["Freezy Frost","Évo-Congélo","Klirrfrost","Scricchiagelo","Glaceoprisma","こちこちフロスト"],14,1,15,90,100],
[["Sparkly Swirl","Évo-Fabulo","Glitzersturm","Sbrilluccibufera","Sylveotornado","きらきらストーム"],17,1,15,90,100],
[["Veevee Volley","Évo-Chardasso","Evo-Crash","Eeveempatto","Eevimpacto","ブイブイブレイク"],0,0,20,0,0],
[["Double Iron Bash","Écrous d&#39;Poing","Panzerfäuste","Pugni Corazzati","Ferropuño Doble","ダブルパンツァー"],8,0,5,60,100],
/*[["Max Guard","Gardomax","Dyna-Wall","Dynabarriera","Maxibarrera","ダイウォール"],0,STATUS,10,0,0]*/,//gen8
[["Dynamax Cannon","Canon Dynamax","Dynamax-Kanone","Cannone Dynamax","Cañón Dinamax","ダイマックスほう"],15,1,5,100,100],
[["Snipe Shot","Tir de Précision","Präisionsschuss","Tiromirato","Disparo Certero","ねらいうち"],10,1,15,80,100],
[["Jaw Lock","Croque Fort","Fesselbiss","Morostretto","Presa Maxilar","くらいつく"],16,0,10,80,100],
[["Stuff Cheeks","Garde-à-Joues","Backenstopfer","Riempiguance","Atiborramiento","ほおばる"],0,2,10,0,0],
[["No Retreat","Ultime Bastion","Finalformation","Spalle al Muro","Bastión Final","はいすいのじん"],1,2,5,0,0],
[["Tar Shot","Goudronnage","Teerschuss","Colpocatrame","Alquitranazo","タールショット"],5,2,15,0,100],
[["Magic Powder","Poudre Magique","Magiepuder","Magipolvere","Polvo Mágico","まほうのこな"],13,2,20,0,100],
[["Dragon Darts","Draco-Flèche","Drachenpfeile","Dragofrecce","Dracoflechas","ドラゴンアロー"],15,0,10,50,100],
[["Teatime","Thérémonie","Teatime","Ora del Tè","Hora del Té","おちゃかい"],0,2,10,0,0],
[["Octolock","Octoprise","Octoklammer","Tentacolock","Octopresa","たこがため"],1,2,15,0,100],
[["Bolt Beak","Prise de Bec","Schockschnabel","Beccoshock","Electropico","でんげきくちばし"],12,0,10,85,100],
[["Fishious Rend","Branchicrok","Kiemenbiss","Branchiomorso","Branquibocado","エラがみ"],10,0,10,85,100],
[["Court Change","Change-Côté","Seitenwechsel","Cambiocampo","Cambio de Cancha","コートチェンジ"],0,2,10,0,100],
/*[["Max Flare"],9,PHYSICAL,10,100,0]*/,
/*[["Max Flutterby"],6,PHYSICAL,10,10,0]*/,
/*[["Max Lightning"],12,PHYSICAL,10,10,0]*/,
/*[["Max Strike"],0,PHYSICAL,10,10,0]*/,
/*[["Max Knuckle"],1,PHYSICAL,10,10,0]*/,
/*[["Max Phantasm"],7,PHYSICAL,10,10,0]*/,
/*[["Max Hailstorm"],14,PHYSICAL,10,10,0]*/,
/*[["Max Ooze"],3,PHYSICAL,10,10,0]*/,
/*[["Max Geyser"],10,PHYSICAL,10,10,0]*/,
/*[["Max Airstream"],2,PHYSICAL,10,10,0]*/,
/*[["Max Starfall"],17,PHYSICAL,10,10,0]*/,
/*[["Max Wyrmwind"],15,PHYSICAL,10,10,0]*/,
/*[["Max Mindstorm"],13,PHYSICAL,10,10,0]*/,
/*[["Max Rockfall"],5,PHYSICAL,10,10,0]*/,
/*[["Max Quake"],4,PHYSICAL,10,10,0]*/,
/*[["Max Darkness"],16,PHYSICAL,10,10,0]*/,
/*[["Max Overgrowth"],11,PHYSICAL,10,10,0]*/,
/*[["Max Steelspike"],8,PHYSICAL,10,10,0]*/,
[["Clangorous Soul","Dracacophonie","Seelentanz","Dracofonia","Estruendo Escama","ソウルビート"],15,2,5,0,100],
[["Body Press","Big Splash",,"Schiacciacorpo","Plancha Corporal","ボディプレス"],1,0,10,80,100],
[["Decorate","Nappage","Verzierung","Decorazione","Decoración","デコレーション"],17,2,15,0,0],
[["Drum Beating","Tambour Battant","Trommelschläge","Tamburattacco","Batería Asalto"],11,0,10,80,100],
[["Snap Trap","Troquenard","Fangeisen","Tagliola","Cepo","トラバサミ"],11,0,15,35,100],
[["Pyro Ball","Ballon Brûlant","Feuerball","Palla Infuocata","Balón Ígneo","かえんボール"],9,0,5,120,90],
[["Behemoth Blade","Gladius Maximus","Gigantenhieb","Taglio Maestoso","Tajo Supremo","きょじゅうざん"],8,0,5,100,100],
[["Behemoth Bash","Aegis Maxima","Gigantenstoß","Colpo Maestoso","Embate Supremo"],8,0,5,100,100],
[["Aura Wheel","Roue Libre","Aura-Rad","Ruota d&#39;Aura","Rueda Aural","オーラぐるま"],12,0,10,110,100],
[["Breaking Swipe","Abattage","Breitseite","Vastoimpatto","Vasto Impacto","ワイドブレイカー"],15,0,15,60,100],
[["Branch Poke","Tapotige","Zweigstoß","Ramostoccata","Punzada Rama","えだづき"],11,0,40,40,100],
[["Overdrive",,,,"Amplificador","オーバードライブ"],12,1,10,80,100],
[["Apple Acid","Acide Malique","Apfelsäure","Acido Malico","Ácido Málico","りんごさん"],11,1,10,80,100],
[["Grav Apple","Force G","Gravitation","Forza G","Fuerza G","Ｇのちから"],11,0,10,80,100],
[["Spirit Break","Choc Émotionnel","Seelenbruch","Frantumanima","Choque Anímico","ソウルクラッシュ"],17,0,15,75,100],
[["Strange Steam","Vapeur Féérique","Wunderdampf","Vapore Incantato","Cautivapor","ワンダースチーム"],17,1,10,90,95],
[["Life Dew","Fontaine de Vie","Lebenstropfen","Goccia Vitale","Gota Vital","いのちのしずく"],10,2,10,0,0],
[["Obstruct","Blocage","Abblocker","Sbarramento","Obstrucción","ブロッキング"],16,2,10,0,100],
[["False Surrender","Fourbette","Kniefalltrick","Supplicolpo","Irreverencia","どげざつき"],16,0,10,80,0],
[["Meteor Assault","Joute Astrale","Sternensturm","Sfolgorassalto","Asalto Estelar","スターアサルト"],1,0,5,150,100],
[["Eternabeam","Laser Infinimax","Unendynastrahlen","Raggio Infinito","Rayo Infinito","ムゲンダイビーム"],15,1,5,160,90],
[["Steel Beam","Métalaser","Stahlstrahl","Raggio d&#39;Acciaio","Metaláser","てっていこうせん"],8,1,5,140,95],
[["Expanding Force","Vaste Pouvoir","Flächenmacht","Vastenergia	","Vasta Fuerza"],13,1,10,80,100],//gen8 dlc1
[["Steel Roller","Métalliroue","Eisenwalze","Ferrorullo","Allanador Férreo"],8,0,5,130,100],
[["Scale Shot","Rafale Écailles","Schuppenschuss","Squamacolpo","Ráfaga Escamas"],15,0,20,25,90],
[["Meteor Beam","Laser Météore","Meteorstrahl","Raggiometeora","Rayo Meteórico"],5,1,10,120,90],
[["Shell Side Arm","Kokiyarme","Muschelwaffe","Armaguscio","Moluscañón"],3,1,10,90,100],
[["Misty Explosion","Explo-Brume","Nebelexplosion","Nebbioscoppio","Bruma Explosiva"],17,1,10,100,100],
[["Grassy Glide","Gliss'Herbe","Grasrutsche","Erboscivolata","Fitoimpulso"],11,0,20,70,100],
[["Rising Voltage","Monte-Tension","Hochspannung","Elettroimpennata","Alto Voltaje"],12,1,20,70,100],
[["Terrain Pulse","Champlification","Feldimpuls","Campopulsar","Pulso de Campo"],0,1,10,50,100],
[["Skitter Smack","Ravage Rampant","Krabbelkracher","Strisciacolpo","Golpe Rastrero"],6,0,10,70,90],
[["Burning Jealousy","Feu Envieux","Neidflammen","Fiamminvidia","Envidia Ardiente"],9,1,5,70,100],
[["Lash Out","Cent Rancunes","Frustventil","Sfogarabbia","Desahogo"],16,0,5,75,100],
[["Poltergeist","Esprit Frappeur"],7,0,5,110,90],
[["Corrosive Gas","Gaz Corrosif","Korrosionsgas","Gas Corrosivo","Gas Corrosivo"],3,2,40,0,100],
[["Coaching",,,,"Motivación"],1,2,10,0,0],
[["Flip Turn","Eau Revoir","Rollwende","Virata","Viraje"],10,0,20,60,100],
[["Triple Axel",,"Dreifach-Axel","Triplo Axel"],14,0,10,20,90],
[["Dual Wingbeat","Double Volée","Doppelflügel","Doppia Ala","Ala Bis"],2,0,10,40,90],
[["Scorching Sands","Sable Ardent","Brandsand","Sabbiardente","Arenas Ardientes"],4,1,10,70,100],
[["Jungle Healing","Selve Salvatrice","Dschungelheilung","Giunglacura","Cura Selvática"],11,2,10,0,0],
[["Wicked Blow","Poing Obscur","Finstertreffer","Pugnotenebra","Golpe Oscuro"],1,0,5,80,100],
[["Surging Strikes","Torrent de Coups","Trefferschwall","Idroraffica","Azote Torrencial"],10,0,5,25,100]
];

const LEARNSET_GAMES=GAMES;
const LEARNSET_GAMES_ID=GAME_ID;
const TMs=[5,25,6,7,8,9,19,42,63,416,345,76,669,83,86,91,103,113,115,219,120,156,157,168,173,182,184,196,202,204,211,213,201,240,241,258,250,251,261,263,129,270,279,280,286,291,311,313,317,328,331,333,340,341,350,362,369,371,372,374,384,385,683,409,419,421,422,423,424,427,433,472,478,440,474,490,496,506,512,514,521,523,527,534,541,555,566,577,580,581,604,678,595,598,206,403,684,693,707,784];
const TRs=[14,34,53,56,57,58,59,67,85,87,89,94,97,116,118,126,127,133,141,161,164,179,188,191,200,473,203,214,224,226,227,231,242,247,248,253,257,269,271,276,285,299,304,315,322,330,334,337,339,347,348,349,360,370,390,394,396,398,399,402,404,405,406,408,411,412,413,414,417,428,430,437,438,441,442,444,446,447,482,484,486,492,500,502,503,526,528,529,535,542,583,599,605,663,667,675,676,706,710,776];

/*
	l: levelup
		[moveIndex]
	m: machine
	e: egg moves
	t: tutors
	s: special
*/
var LEARNSETS=[
,{//Bulbasaur
l:[[33,1],[45,1],[22,3],[74,6],[73,9],[75,12],[77,15],[79,15],[402,18],[36,21],[230,24],[235,27],[388,30],[38,33],[76,36]],
m:[345,76,113,219,156,173,182,202,204,213,241,263,270,311,331,474,496,580,206,14,34,133,164,188,203,214,402,412,437,438,447,526],
e:[130,80,174,275,267,92],
t:[520],
t3:[803]
},{//Ivysaur
l:[[33,1],[45,1],[22,1],[74,1],[73,9],[75,12],[77,15],[79,15],[402,20],[36,25],[230,30],[235,35],[388,40],[38,45],[76,50]],
m:[345,76,113,219,156,173,182,202,204,213,241,263,270,311,331,474,496,580,206,14,34,133,164,188,203,214,402,412,437,438,447,526],
t:[520],
t3:[803]
},{//Venusaur
l:[[572,0],[572,1],[80,1],[33,1],[45,1],[22,1],[74,1],[73,9],[75,12],[77,15],[79,15],[402,20],[36,25],[230,30],[235,37],[388,44],[38,51],[76,58]],
m:[63,416,345,76,113,219,156,173,182,202,204,213,241,263,270,311,331,474,496,523,580,206,707,14,34,89,133,164,188,200,203,214,402,412,414,437,438,447,526],
t:[338,520],
t3:[805,803]
},{//Charmander
l:[[10,1],[45,1],[52,4],[108,8],[225,12],[424,17],[163,20],[53,24],[184,28],[83,32],[517,36],[394,40]],
m:[5,25,7,9,83,91,156,157,173,182,184,213,241,251,261,263,129,270,280,311,317,374,421,424,496,512,206,14,34,53,126,164,200,203,214,231,242,257,315,337,349,394,406,526],
e:[187,246,44,407,232,68,17,525],
t:[519]
},{//Charmeleon
l:[[10,1],[45,1],[52,1],[108,1],[225,12],[424,19],[163,24],[53,30],[184,37],[83,42],[517,48],[394,54]],
m:[5,25,7,9,83,91,156,157,173,182,184,213,241,251,261,263,129,270,280,311,317,374,421,424,496,512,206,14,34,53,126,164,200,203,214,231,242,257,315,337,349,394,406,526],
t:[519]
},{//Charizard
l:[[403,0],[403,1],[337,1],[257,1],[10,1],[45,1],[52,1],[108,1],[225,12],[424,19],[163,24],[53,30],[184,39],[83,46],[517,54],[394,62]],
m:[5,25,7,9,19,63,416,76,83,91,156,157,173,182,184,211,213,241,251,261,263,129,270,280,311,317,374,421,424,496,512,523,595,206,403,693,784,14,34,53,89,126,164,200,203,214,231,242,257,299,315,337,349,394,406,411,526,535,542],
t:[307,519],
t3:[815,814,799]
},{//Squirtle
l:[[33,1],[39,1],[55,3],[110,6],[229,9],[44,12],[352,15],[182,18],[240,21],[401,24],[504,27],[334,30],[56,33],[130,36]],
m:[5,25,8,91,156,173,182,196,213,240,258,250,263,270,280,291,311,317,362,374,496,206,34,56,57,58,59,127,164,203,214,231,330,334,360,396,406,428,503,526],
e:[243,114,54,175,281,252,392,453,323,791],
t:[518],
t3:[812]
},{//Wartortle
l:[[33,1],[39,1],[55,1],[110,1],[229,9],[44,12],[352,15],[182,20],[240,25],[401,30],[504,35],[334,40],[56,45],[130,50]],
m:[5,25,8,91,156,173,182,196,213,240,258,250,263,270,280,291,311,317,362,374,496,206,34,56,57,58,59,127,164,203,214,231,330,334,360,396,406,428,503,526],
t:[518],
t3:[812]
},{//Blastoise
l:[[430,0],[430,1],[33,1],[39,1],[55,1],[110,1],[229,9],[44,12],[352,15],[182,20],[240,25],[401,30],[504,35],[334,42],[56,49],[130,56]],
m:[5,25,8,63,416,91,156,157,173,182,196,213,240,258,250,263,270,280,291,311,317,362,374,419,496,523,206,34,56,57,58,59,89,127,164,200,203,214,231,242,330,334,360,396,399,406,411,428,430,503,526,710,776],
t:[308,518],
t3:[805,812]
},{//Caterpie
l:[[33,1],[81,1],[450,9]],
m:[527]
},{//Metapod
l:[[106,0],[106,1]],
m:[527,334]
},{//Butterfree
l:[[16,0],[16,1],[106,1],[33,1],[81,1],[450,1],[48,4],[93,8],[77,12],[78,12],[79,12],[60,16],[18,20],[403,24],[219,28],[405,32],[366,36],[476,40],[483,44]],
m:[63,416,76,219,156,168,173,182,202,213,240,241,263,129,369,474,496,512,527,577,403,94,164,203,214,226,247,285,334,405,412,542,676],
t3:[814]
},
,
,
,
,
,
,
,
,
,
,
,
,{//Pikachu
l:[[589,1],[186,1],[609,1],[417,1],[204,1],[84,1],[39,1],[45,1],[98,1],[86,4],[104,8],[486,12],[364,16],[209,20],[97,24],[21,28],[435,32],[85,36],[113,40],[87,44]],
m:[5,25,6,9,86,91,113,115,156,168,173,182,204,213,240,263,129,270,280,374,496,521,527,577,604,34,57,85,87,97,164,179,203,214,227,231,253,417,447,486,528,583],
t3:[804],
s:[606]
},{//Raichu
forms:[
{
	l:[[9,0],[9,1],[589,1],[186,1],[609,1],[417,1],[204,1],[86,1],[104,1],[486,1],[364,1],[209,1],[97,1],[21,1],[435,1],[85,1],[113,1],[87,1],[84,1],[39,1],[45,1],[98,1]],
	m:[5,25,6,9,63,416,86,91,113,115,219,156,168,173,182,204,213,240,263,129,270,280,374,683,496,521,527,577,604,598,693,34,57,85,87,97,164,179,203,214,227,231,253,411,417,447,486,528,583],
	t3:[804]
},{
	l:[[94,0],[94,1],[589,1],[186,1],[609,1],[417,1],[204,1],[86,1],[104,1],[486,1],[364,1],[209,1],[97,1],[21,1],[435,1],[85,1],[113,1],[87,1],[84,1],[39,1],[45,1],[98,1]],
	m:[5,25,6,9,63,416,86,91,113,115,219,156,168,173,182,204,213,240,263,129,270,280,374,683,478,496,521,527,577,604,34,57,85,87,94,97,164,179,473,203,214,227,231,248,253,347,411,417,447,486,500,502,528,583],
	t3:[804,797]
}
]
},{//Sandshrew
forms:[
{
	l:[[10,1],[111,1],[40,3],[28,6],[205,9],[210,12],[229,15],[523,18],[129,21],[154,24],[97,27],[163,30],[91,33],[360,36],[14,39],[201,42],[89,45]],
	m:[91,219,156,157,168,173,182,213,201,241,263,129,280,317,328,341,374,421,496,523,707,14,34,89,97,133,141,164,203,214,231,360,398,404,414,446,526,675],
	e:[68,175,189,400,232,468],
	t3:[815,798]
},{
	l:[[10,1],[111,1],[54,3],[181,6],[205,9],[210,12],[229,15],[232,18],[129,21],[154,24],[334,27],[163,30],[442,33],[360,36],[14,39],[258,42],[59,45]],
	m:[8,91,219,156,157,168,173,182,196,213,241,258,263,129,280,317,333,374,419,421,496,523,14,34,59,89,133,141,164,203,214,231,334,360,398,404,442,446,526,675],
	e:[68,306,175,174,400,468],
	t3:[813,798]
}
]
},{//Sandslash
forms:[
{
	l:[[306,1],[10,1],[111,1],[40,1],[28,1],[205,9],[210,12],[229,15],[523,18],[129,21],[154,26],[328,31],[163,36],[91,41],[360,46],[14,51],[201,56],[89,61]],
	m:[42,63,416,91,219,156,157,168,173,182,213,201,241,263,129,280,317,328,341,374,421,496,523,707,14,34,89,97,133,141,164,191,203,214,231,360,398,404,411,414,444,446,526,529,675],
	t3:[815,798]
},{
	l:[[333,0],[333,1],[556,1],[368,1],[205,1],[210,1],[229,1],[232,1],[129,1],[154,1],[334,1],[163,1],[442,1],[360,1],[14,1],[258,1],[59,1],[10,1],[111,1],[54,1],[181,1]],
	m:[8,42,63,416,91,219,156,157,168,173,182,196,213,241,258,263,129,280,317,333,374,419,421,496,523,14,34,59,89,97,133,141,164,191,203,214,231,334,360,398,404,411,442,446,526,529,675],
	t3:[813,798]
}
]
},
,
,
,
,
,
,{//Clefairy
l:[[47,1],[186,1],[574,1],[227,1],[204,1],[150,1],[1,1],[383,1],[45,1],[111,1],[500,4],[107,8],[495,12],[791,16],[118,20],[236,24],[356,28],[309,32],[266,36],[322,40],[585,44],[361,48]],
m:[5,25,7,8,9,345,76,86,91,113,115,219,156,173,182,196,204,213,240,241,263,270,280,286,313,340,374,409,472,496,514,577,581,595,34,53,58,59,85,87,94,118,126,133,161,164,473,203,214,226,227,231,247,253,271,304,322,347,428,446,447,500,502,526,583,605],
t3:[814,800,802]
},{//Clefable
l:[[47,1],[186,1],[574,1],[227,1],[204,1],[500,1],[107,1],[495,1],[791,1],[118,1],[236,1],[356,1],[309,1],[266,1],[322,1],[585,1],[361,1],[150,1],[1,1],[383,1],[45,1],[111,1]],
m:[5,25,7,8,9,63,416,345,76,86,91,113,115,219,156,173,182,196,204,213,240,241,263,270,280,286,313,340,374,409,472,496,514,577,581,595,34,53,58,59,85,87,94,118,126,133,161,164,473,203,214,226,227,231,247,253,271,304,322,347,411,428,446,447,500,502,526,583,605],
t3:[814,800,802]
},{//Vulpix
forms:[
{
	l:[[52,1],[39,1],[50,4],[98,8],[180,12],[510,16],[109,20],[261,24],[326,28],[53,32],[286,36],[83,40],[219,44],[517,48],[288,52],[126,56]],
	m:[83,91,219,156,173,182,213,241,261,263,129,286,311,371,384,496,506,541,595,34,53,97,126,164,203,214,227,231,257,315,394,399,412,428,492],
	e:[95,175,336,262,608,46,488],
	t3:[807]
},{
	l:[[181,1],[39,1],[50,4],[420,8],[180,12],[196,16],[109,20],[62,24],[326,28],[58,32],[286,36],[54,40],[694,44],[329,48],[288,52],[59,56]],
	m:[91,219,156,173,182,196,204,213,240,258,263,129,286,311,371,384,496,506,541,577,34,58,59,97,164,203,214,227,231,399,428,492],
	e:[573,95,175,336,585,608,46]
}
]
},{//Ninetales
forms:[
{
	l:[[417,1],[510,1],[180,1],[510,1],[109,1],[261,1],[326,1],[53,1],[286,1],[83,1],[219,1],[517,1],[288,1],[126,1],[52,1],[39,1],[50,1],[98,1]],
	m:[63,416,76,83,91,219,156,173,182,213,241,261,263,129,286,311,313,371,384,496,506,541,595,34,53,97,126,164,473,203,214,227,231,247,257,315,347,394,399,412,417,428,492,500],
	t3:[807,815]
},{
	l:[[605,0],[605,1],[417,1],[180,1],[196,1],[109,1],[62,1],[326,1],[58,1],[286,1],[54,1],[694,1],[329,1],[288,1],[59,1],[181,1],[39,1],[50,1],[420,1]],
	m:[63,416,76,91,219,156,173,182,196,204,213,240,258,263,129,286,311,313,371,384,419,472,496,506,541,577,581,34,58,59,97,164,473,203,214,227,231,347,399,417,428,492,500,605],
	t3:[813]
}
]
},{//Jigglypuff
l:[[186,1],[574,1],[50,1],[204,1],[47,1],[1,1],[383,1],[111,1],[497,4],[343,8],[254,12],[256,12],[255,12],[496,16],[156,20],[34,24],[102,28],[360,32],[304,36],[583,40],[38,44]],
m:[5,25,7,8,9,76,86,91,103,113,115,219,120,156,173,182,196,204,213,240,241,263,270,280,313,340,374,409,496,514,577,581,34,53,58,59,85,87,94,126,161,164,203,214,226,247,253,304,360,446,447,502,526,528,583,605],
t3:[798,802]
},{//Wigglytuff
l:[[186,1],[574,1],[50,1],[204,1],[497,1],[343,1],[254,1],[256,1],[255,1],[496,1],[156,1],[34,1],[102,1],[360,1],[583,1],[304,1],[38,1],[47,1],[1,1],[383,1],[111,1]],
m:[5,25,7,8,9,63,416,76,86,91,103,113,115,219,120,156,173,182,196,204,213,240,241,263,270,280,313,340,374,409,478,496,514,577,581,34,53,58,59,85,87,94,126,161,164,203,214,226,247,253,304,360,411,446,447,502,526,528,583,605],
t3:[797,798,802]
},
,
,{//Oddish
l:[[71,1],[74,1],[51,4],[230,8],[72,12],[77,14],[78,16],[79,18],[202,20],[92,24],[585,28],[580,32],[236,36],[80,40]],
m:[76,156,173,182,202,204,213,241,263,331,474,496,580,14,164,188,203,214,402,412,447,605],
e:[75,175,235,275,321,298,267,495,668,73],
t3:[803]
},{//Gloom
l:[[71,1],[74,1],[51,1],[230,1],[72,12],[77,14],[78,16],[79,18],[202,20],[92,26],[585,32],[580,38],[236,44],[80,50]],
m:[76,156,173,182,202,204,213,241,263,331,374,409,474,496,580,14,164,188,203,214,402,412,447,605],
t3:[803]
},{//Vileplume
l:[[572,0],[572,1],[312,1],[72,1],[77,1],[78,1],[79,1],[202,1],[92,1],[585,1],[580,1],[236,1],[80,1],[71,1],[74,1],[51,1],[230,1]],
m:[63,416,76,219,156,173,182,202,204,213,241,263,331,374,409,474,496,580,14,34,164,188,203,214,402,412,447,482,605,676],
t3:[803,810]
},
,
,
,
,{//Diglett
forms:[
{
	l:[[28,1],[10,1],[45,4],[310,8],[189,12],[523,16],[389,20],[163,24],[201,28],[91,32],[414,36],[89,40],[90,44]],
	m:[91,103,156,157,168,173,182,213,201,241,251,263,317,372,421,496,523,707,34,89,97,164,179,188,203,214,253,414,446,502,526],
	e:[246,29,515,262,468]
},{
	l:[[28,1],[232,1],[45,4],[310,8],[189,12],[523,16],[389,20],[442,24],[201,28],[91,32],[414,36],[89,40],[90,44]],
	m:[91,103,156,157,168,173,182,213,201,241,251,263,317,372,421,496,523,707,34,89,97,164,179,188,203,214,253,334,414,430,442,502,526],
	e:[319,246,37,29,515,262,468],
	t:[796]
}
],
t3:[815]
},{//Dugtrio
forms:[
{
	l:[[328,0],[328,1],[400,1],[161,1],[28,1],[10,1],[45,1],[310,1],[189,12],[523,16],[389,20],[163,24],[201,30],[91,36],[414,42],[89,48],[90,54]],
	m:[63,416,91,103,156,157,168,173,182,213,201,241,251,263,317,328,372,421,496,523,707,34,89,97,161,164,179,188,203,214,253,414,444,446,482,502,526,667]
},{
	l:[[328,0],[328,1],[400,1],[161,1],[28,1],[232,1],[45,1],[310,1],[189,12],[523,16],[389,20],[442,24],[201,30],[91,36],[414,42],[89,48],[90,54]],
	m:[63,416,91,103,156,157,168,173,182,213,201,241,251,263,317,328,372,421,496,523,707,34,89,97,161,164,179,188,203,214,253,334,414,430,442,444,482,502,526,667],
	t:[796]
}
],
t3:[815]
},{//Meowth
forms:[
{
	l:[[252,1],[45,1],[364,4],[10,8],[6,12],[44,16],[269,20],[372,24],[154,29],[103,32],[163,36],[417,40],[583,44]],
	m:[6,91,103,156,168,173,182,196,204,213,240,241,263,129,369,371,372,421,496,514,34,85,87,133,164,203,214,231,247,253,269,304,399,402,417,441,492,526,583,675],
	e:[180,95,387,175,39,343]
},{
	l:[[252,1],[45,1],[364,4],[10,8],[6,12],[44,16],[269,20],[372,24],[154,29],[103,32],[400,36],[417,40],[583,44]],
	m:[6,91,103,156,168,173,182,196,204,213,240,241,263,129,369,371,372,421,496,514,34,85,87,133,164,203,214,231,247,253,269,304,399,402,417,441,492,526,583,675],
	e:[180,95,575,175,260,343]
},{
	l:[[252,1],[45,1],[468,4],[10,8],[6,12],[232,16],[269,20],[207,24],[154,29],[103,32],[163,36],[319,40],[37,44]],
	m:[6,91,103,156,168,173,182,213,240,241,263,369,371,372,421,496,514,14,34,85,87,133,164,203,214,231,242,247,253,269,304,334,360,399,402,417,441,442,492,526,583,675],
	e:[180,38,174,175,400,343],
	t:[796]
}
],
t3:[808]
},{//Persian
forms:[
{
	l:[[408,0],[408,1],[415,1],[252,1],[45,1],[364,1],[10,1],[6,12],[44,16],[269,20],[372,24],[154,31],[103,36],[163,42],[417,48],[583,54]],
	m:[6,63,416,91,103,156,168,173,182,196,204,213,240,241,263,129,369,371,372,421,496,514,34,85,87,133,164,203,214,231,247,253,269,304,399,402,408,417,441,492,526,583,675],
	t3:[806,808]
},{
	l:[[408,0],[408,1],[511,1],[415,1],[252,1],[45,1],[364,1],[10,1],[6,12],[44,16],[269,20],[372,24],[154,31],[103,36],[400,42],[417,48],[583,54]],
	m:[6,63,416,91,103,156,168,173,182,196,204,213,240,241,251,263,129,313,369,371,372,421,496,514,555,34,85,87,133,164,203,214,231,247,253,269,304,399,402,408,417,441,492,526,583,675],
	t3:[807,806,808]
}
]
},{//Psyduck
l:[[10,1],[39,1],[55,3],[93,6],[154,9],[352,12],[50,15],[428,18],[103,21],[401,24],[487,27],[244,30],[133,34],[56,36],[472,39]],
m:[5,25,6,8,91,103,113,156,173,182,196,213,240,258,250,263,129,280,291,362,374,421,472,496,34,56,57,58,59,94,127,133,164,473,203,214,227,231,248,347,428,503],
e:[499,109,238,95,60,493,281]
},{//Golduck
l:[[453,1],[10,1],[39,1],[55,1],[93,1],[154,9],[352,12],[50,15],[428,18],[103,21],[401,24],[487,27],[244,30],[133,36],[56,40],[472,45]],
m:[5,25,6,8,63,416,91,103,113,156,173,182,196,213,240,258,250,263,129,280,291,362,374,421,472,490,496,34,56,57,58,59,67,94,127,133,164,473,203,214,227,231,248,330,347,411,428,503,710],
t3:[812]
},
,
,{//Growlithe
l:[[52,1],[43,1],[336,4],[44,8],[172,12],[270,16],[97,20],[424,24],[514,28],[242,32],[36,36],[53,40],[46,44],[583,48],[179,52],[394,56]],
m:[83,91,219,156,168,173,182,213,241,261,263,129,270,424,496,514,555,34,53,97,126,164,179,200,203,214,231,242,257,315,370,394,528,583,706],
e:[37,38,234,343,24]
},{//Arcanine
l:[[245,0],[245,1],[682,1],[172,1],[270,1],[97,1],[424,1],[514,1],[242,1],[36,1],[53,1],[46,1],[583,1],[179,1],[394,1],[52,1],[43,1],[336,1],[44,1]],
m:[63,416,76,83,91,219,156,168,173,182,184,213,241,261,263,129,270,422,424,496,514,523,555,34,53,97,126,164,179,200,203,214,231,242,257,304,315,370,394,406,442,528,583,706],
t3:[815]
},{//Poliwag
l:[[55,1],[95,1],[1,6],[341,12],[61,18],[240,24],[34,30],[414,36],[56,42],[187,48],[38,54]],
m:[91,156,168,173,182,196,213,240,258,250,263,270,291,341,496,523,34,56,57,58,59,94,127,164,203,214,227,330,414,503],
e:[283,114,54,170,150,352]
},{//Poliwhirl
l:[[55,1],[95,1],[1,1],[341,1],[61,18],[240,24],[34,32],[414,40],[56,48],[187,56],[38,66]],
m:[5,25,8,91,156,168,173,182,196,213,240,258,250,263,270,280,291,341,374,496,523,34,56,57,58,59,89,94,118,127,164,203,214,227,330,414,503]
},{//Poliwrath
l:[[66,0],[66,1],[509,1],[170,1],[223,1],[61,1],[240,1],[34,1],[414,1],[56,1],[187,1],[38,1],[55,1],[95,1],[1,1],[341,1]],
m:[5,25,8,63,416,91,156,157,168,173,182,196,213,240,258,250,263,270,280,291,317,341,371,374,409,490,496,523,34,56,57,58,59,89,94,118,127,164,179,203,214,227,276,330,339,370,398,411,414,503,526,663,667,675,710],
t3:[811]
},{//Abra
l:[[100,1]],
m:[5,25,7,8,9,86,113,115,219,156,168,173,182,213,240,241,263,129,374,384,385,683,409,433,472,478,496,678,34,94,118,161,164,473,203,214,227,231,247,269,271,285,347,412,428,447,492,502,605],
e:[93,470,277]
},{//Kadabra
l:[[93,0],[93,1],[134,1],[50,1],[100,1],[60,5],[115,10],[502,15],[427,20],[105,25],[473,30],[94,35],[272,40],[248,45],[347,50]],
m:[5,25,7,8,9,86,113,115,219,156,168,173,182,213,240,241,263,129,374,384,385,683,409,427,433,472,478,496,678,34,94,118,161,164,473,203,214,227,231,247,248,269,271,285,347,412,428,447,492,502,605],
t3:[797]
},{//Alakazam
l:[[93,1],[134,1],[50,1],[100,1],[60,5],[115,10],[502,15],[427,20],[105,25],[473,30],[94,35],[272,40],[248,45],[347,50]],
m:[5,25,7,8,9,63,416,86,113,115,219,156,168,173,182,213,240,241,263,129,286,374,384,385,683,409,427,433,472,478,496,678,34,94,118,161,164,473,203,214,227,231,247,248,269,271,285,347,411,412,417,428,447,492,500,502,605],
t3:[797]
},{//Machop
l:[[67,1],[43,1],[116,4],[279,8],[490,12],[282,16],[184,20],[233,24],[70,29],[530,32],[339,36],[69,40],[223,44],[238,48],[38,52]],
m:[5,25,7,8,9,91,113,156,157,168,173,182,184,213,240,241,263,270,279,280,317,371,374,490,496,514,523,34,53,67,89,116,118,126,164,179,203,214,227,276,339,370,398,411,484,526],
e:[68,418,321,501,66],
t3:[811]
},{//Machoke
l:[[67,1],[43,1],[116,1],[279,1],[490,12],[282,16],[184,20],[233,24],[70,31],[530,36],[339,42],[69,48],[223,54],[238,60],[38,66]],
m:[5,25,7,8,9,91,113,156,157,168,173,182,184,213,240,241,263,270,279,280,317,371,374,490,496,514,523,707,34,53,67,89,116,118,126,164,179,203,214,227,276,339,370,398,411,484,526],
t3:[811]
},{//Machamp
l:[[469,1],[67,1],[43,1],[116,1],[279,1],[490,12],[282,16],[184,20],[233,24],[70,31],[530,36],[339,42],[69,48],[223,54],[238,60],[38,66]],
m:[5,25,7,8,9,63,416,91,113,156,157,168,173,182,184,213,240,241,263,270,279,280,317,350,371,372,374,440,490,496,514,523,707,34,53,67,89,116,118,126,164,179,203,214,227,276,339,370,398,411,444,484,526,663,667,675],
t3:[811]
},
,
,
,{//Tentacool
l:[[40,1],[55,1],[51,4],[35,8],[48,12],[352,16],[103,20],[61,24],[506,28],[151,32],[398,36],[57,40],[482,44],[56,48]],
m:[103,219,156,168,173,182,196,202,213,240,258,250,263,291,362,371,440,474,496,506,693,14,56,57,58,59,127,164,188,203,214,330,390,398,482,503,605],
e:[367,392,62,109,114,282,243,229,321]
},{//Tentacruel
l:[[513,1],[40,1],[55,1],[51,1],[35,1],[48,12],[352,16],[103,20],[61,24],[506,28],[151,34],[398,40],[57,46],[482,52],[56,58]],
m:[63,416,103,219,156,168,173,182,196,202,213,240,258,250,263,291,362,371,440,474,496,506,693,14,56,57,58,59,127,164,188,203,214,330,390,398,482,503,599,605],
t3:[810]
},
,
,
,{//Ponyta
forms:[
{
	l:[[33,1],[45,1],[39,5],[52,10],[488,15],[97,20],[172,25],[23,30],[83,35],[36,41],[517,45],[126,50],[394,55]],
	m:[76,669,83,156,173,182,204,213,241,261,263,129,340,496,595,34,53,67,97,126,164,203,214,231,257,315,394,502,528,583,667],
	e:[37,24,95,38,32,234]
},{
	l:[[33,1],[45,1],[39,5],[93,10],[584,15],[97,20],[60,25],[23,30],[505,35],[36,41],[605,45],[94,50],[361,55]],
	m:[156,173,182,204,213,263,129,286,340,496,595,34,67,94,97,164,203,214,231,248,347,428,500,502,528,583,605,667],
	e:[37,24,95,38,32,234],
	t3:[797]
}
]
},{//Rapidash
forms:[
{
	l:[[684,0],[684,1],[224,1],[398,1],[33,1],[98,1],[45,1],[39,1],[52,1],[488,15],[97,20],[172,25],[23,30],[83,35],[36,43],[517,49],[126,56],[394,63]],
	m:[6,63,416,76,669,83,156,173,182,204,213,241,261,263,129,340,496,595,684,14,34,53,67,97,126,164,203,214,224,226,231,257,315,394,398,502,528,529,583,667,675],
	t3:[815]
},{
	l:[[427,0],[427,1],[224,1],[33,1],[98,1],[45,1],[39,1],[93,1],[584,15],[97,20],[60,25],[23,30],[505,35],[36,43],[605,49],[94,56],[361,63]],
	m:[6,63,416,156,173,182,204,213,263,129,286,340,427,433,472,478,496,581,678,595,684,14,34,67,94,97,164,203,214,224,226,231,248,347,428,500,502,528,529,583,605,667,675],
	t3:[797]
}
]
},{//Slowpoke
forms:[
{
	l:[[33,1],[174,1],[45,3],[55,6],[281,9],[93,12],[50,15],[352,18],[29,21],[428,24],[133,27],[57,30],[303,33],[94,36],[244,39],[240,42],[505,45]],
	m:[6,86,91,113,219,156,173,182,196,213,240,241,258,250,263,129,286,291,311,341,362,433,472,496,523,678,34,53,56,57,58,59,89,94,126,133,161,164,473,203,214,231,247,248,271,285,347,428,447,500,503,710]
},{
	l:[[33,1],[174,1],[45,3],[51,6],[281,9],[93,12],[50,15],[352,18],[29,21],[428,24],[133,27],[57,30],[303,33],[94,36],[244,39],[240,42],[505,45]],
	m:[6,86,91,113,219,156,173,182,196,213,240,241,258,250,263,129,286,291,311,341,362,433,472,496,523,678,34,53,56,57,58,59,89,94,126,133,161,164,473,203,214,231,247,248,271,285,347,428,447,492,500,503,710]
}
],
e:[562,187,335,23],
t3:[797]
},{//Slowbro
forms:[
{
	l:[[110,1],[33,1],[174,1],[45,1],[55,1],[281,9],[93,12],[50,15],[352,18],[29,21],[428,24],[133,27],[57,30],[303,33],[94,36],[244,41],[240,46],[505,51]],
	m:[5,25,6,8,63,416,86,91,113,219,156,173,182,196,213,240,241,258,250,263,129,280,286,291,311,341,362,374,409,419,433,472,496,523,534,678,34,53,56,57,58,59,89,94,126,133,161,164,473,203,214,231,247,248,271,285,330,334,347,411,417,428,447,492,500,503,710,776]
},{
	l:[[801,0],[801,1],[110,1],[33,1],[174,1],[45,1],[51,1],[281,9],[93,12],[50,15],[352,18],[29,21],[428,24],[133,27],[57,30],[303,33],[94,36],[244,39],[240,42],[505,45]],
	m:[5,25,6,8,63,416,86,91,113,219,156,173,182,196,213,240,241,258,250,263,129,280,286,291,311,341,362,374,409,419,433,472,474,496,523,534,678,693,34,53,56,57,58,59,89,94,126,133,161,164,188,473,203,214,231,247,248,271,285,330,334,347,398,411,417,428,447,482,492,500,503,710]
}
],
t3:[797]
},{//Magnemite
l:[[84,1],[33,1],[48,4],[86,8],[486,12],[360,16],[209,20],[103,24],[393,28],[430,32],[435,36],[319,40],[113,44],[199,48],[192,52]],
m:[86,103,113,115,156,173,182,240,241,263,129,496,521,527,85,87,164,203,214,334,360,430,486,528],
t3:[804]
},{//Magneton
l:[[161,0],[161,1],[604,1],[84,1],[33,1],[48,1],[86,1],[486,12],[360,16],[209,20],[103,24],[393,28],[430,34],[435,40],[319,46],[113,52],[199,58],[192,64]],
m:[63,416,86,103,113,115,156,173,182,240,241,263,129,496,521,527,604,85,87,161,164,203,214,334,360,430,486,528],
t3:[804]
},{//Farfetch’d
forms:[
{
	l:[[64,1],[28,1],[43,5],[210,10],[15,15],[332,20],[314,25],[282,30],[206,35],[163,40],[14,45],[403,50],[348,55],[97,60],[413,65]],
	m:[19,669,156,168,173,182,211,213,241,263,129,270,279,369,496,512,514,206,403,693,14,34,97,116,164,203,214,226,231,253,257,348,370,398,413,526,675],
	e:[16,98,175,297,174,343,400,355,493,660,515,364,143]
},{
	l:[[64,1],[28,1],[43,5],[210,10],[249,15],[693,20],[197,25],[282,30],[432,35],[280,40],[14,45],[21,50],[348,55],[515,60],[413,65]],
	m:[669,156,173,182,211,213,241,263,270,279,280,372,496,514,693,14,34,116,164,203,214,276,348,370,398,413,526,675],
	e:[68,98,175,501,174,343,400,493,38,364,143]
}
],
t3:[814]
},
,
,
,
,
,
,{//Shellder
l:[[33,1],[55,1],[110,4],[420,8],[43,12],[250,16],[48,20],[62,24],[182,28],[534,32],[334,36],[58,40],[504,44],[56,48]],
m:[103,120,156,173,182,196,213,240,258,250,263,129,291,333,341,350,362,371,419,496,534,56,57,58,59,161,164,203,214,334,710],
e:[61,352,392,791]
},{//Cloyster
l:[[333,0],[333,1],[556,1],[390,1],[191,1],[43,1],[250,1],[48,1],[62,1],[182,1],[534,1],[334,1],[58,1],[504,1],[56,1],[33,1],[55,1],[110,1],[420,1]],
m:[42,63,416,103,113,120,156,173,182,196,213,240,258,250,263,129,291,311,333,341,350,362,371,419,496,534,684,56,57,58,59,161,164,191,203,214,334,390,398,710],
t3:[798]
},{//Gastly
l:[[122,1],[109,1],[95,4],[212,8],[371,12],[180,16],[174,20],[506,24],[101,28],[389,32],[399,36],[247,40],[194,44],[138,48]],
m:[7,8,9,120,156,168,173,182,184,196,202,213,240,241,261,263,371,433,472,474,496,506,85,94,164,188,203,214,247,253,269,271,285,398,399,412,482,492,502,605],
e:[195,114,310,288,50,499,123,513,92],
t3:[810,806,809]
},{//Haunter
l:[[325,0],[325,1],[122,1],[109,1],[95,1],[212,1],[371,12],[180,16],[174,20],[506,24],[101,30],[389,36],[399,42],[247,48],[194,54],[138,60]],
m:[7,8,9,120,156,168,173,182,184,196,202,213,240,241,261,263,371,374,421,433,472,474,496,506,85,94,164,188,203,214,227,247,253,269,271,285,398,399,412,482,492,502,605],
t3:[810,806,809]
},{//Gengar
l:[[325,1],[195,1],[513,1],[122,1],[109,1],[95,1],[212,1],[371,12],[180,16],[174,20],[506,24],[101,30],[389,36],[399,42],[247,48],[194,54],[138,60]],
m:[5,25,7,8,9,63,416,120,156,168,173,182,184,196,202,213,240,241,261,263,280,286,371,374,409,421,433,472,474,496,506,566,34,85,87,94,118,164,188,203,214,227,247,253,269,271,285,398,399,411,412,417,482,492,502,605],
t3:[810,806,809]
},{//Onix
l:[[33,1],[106,1],[20,1],[88,1],[479,4],[397,8],[225,12],[174,16],[157,20],[103,24],[328,28],[446,32],[21,36],[201,40],[91,44],[231,48],[444,52],[38,56]],
m:[91,103,120,156,157,173,182,184,213,201,241,263,317,328,350,371,496,523,693,707,784,34,89,164,203,214,231,269,349,360,406,414,430,442,444,446,484,529,667,776],
e:[175,335,111,469,205,525,457],
t3:[815,800]
},
,
,{//Krabby
l:[[55,1],[43,1],[106,4],[232,8],[341,12],[182,16],[61,20],[23,24],[175,29],[534,32],[21,36],[14,40],[152,44],[12,48]],
m:[91,156,157,168,173,182,196,213,240,258,250,263,280,291,317,341,362,374,496,534,206,14,34,57,58,59,97,133,164,203,214,276,334,404,502,503,710],
e:[282,246,359,163,400]
},{//Kingler
l:[[469,1],[359,1],[55,1],[43,1],[106,1],[232,1],[341,12],[182,16],[61,20],[23,24],[175,31],[534,36],[21,42],[14,48],[152,54],[12,60]],
m:[63,416,91,156,157,168,173,182,196,213,240,258,250,263,280,291,317,341,362,374,496,534,206,693,707,14,34,56,57,58,59,97,133,164,203,214,276,334,404,502,503,667,710]
},
,
,{//Exeggcute
l:[[71,1],[95,1],[115,5],[73,10],[72,15],[93,20],[235,25],[331,30],[202,35],[326,40],[253,45],[388,50],[76,55]],
m:[76,113,115,120,156,168,173,182,202,213,241,263,331,384,433,496,580,14,94,164,188,203,214,253,285,402,412,437,447],
e:[246,335,174,275,236,79,78,77],
t3:[803]
},{//Exeggutor
forms:[
{
	l:[[23,0],[23,1],[402,1],[473,1],[452,1],[437,1],[72,1],[93,1],[235,1],[331,1],[202,1],[326,1],[253,1],[388,1],[76,1],[71,1],[95,1],[115,1],[73,1]],
	m:[63,416,345,76,113,115,120,156,168,173,182,202,213,241,263,331,384,427,433,496,523,580,707,14,67,94,164,188,473,203,214,248,253,285,347,402,412,428,437,447],
	t3:[805,803,797]
},{
	l:[[692,0],[692,1],[402,1],[473,1],[452,1],[437,1],[72,1],[93,1],[235,1],[331,1],[202,1],[326,1],[253,1],[388,1],[76,1],[71,1],[95,1],[115,1],[73,1]],
	m:[63,416,345,76,113,115,120,156,168,173,182,202,213,241,263,280,331,384,433,496,523,580,693,707,784,14,53,67,89,94,164,188,200,473,203,214,231,253,276,285,402,406,412,428,437,438,442,447],
	t3:[805,803]
}
]
},{//Cubone
l:[[189,1],[45,1],[39,4],[206,8],[29,12],[514,16],[374,20],[707,24],[198,29],[116,32],[283,36],[155,40],[37,44],[38,48]],
m:[5,25,7,9,91,103,156,157,168,173,182,196,213,201,241,263,129,280,317,374,496,514,523,206,693,707,14,34,53,58,59,67,89,116,126,164,203,214,231,253,334,414,442,446],
e:[246,187,197,24,195,130,174,43],
t3:[815]
},{//Marowak
forms:[
{
	l:[[189,1],[45,1],[39,1],[206,1],[29,12],[514,16],[374,20],[707,24],[198,31],[116,36],[283,42],[155,48],[37,54],[38,60]],
	m:[5,25,7,9,63,416,91,103,156,157,168,173,182,196,213,201,241,263,129,280,317,374,496,514,523,206,693,707,14,34,53,58,59,67,89,116,126,164,200,203,214,231,253,334,411,414,442,444,446,675],
	t3:[815]
},{
	l:[[708,0],[206,1],[29,1],[514,1],[116,1],[38,1],[189,1],[45,1],[39,1],[83,1],[172,12],[506,16],[374,20],[707,24],[198,31],[261,36],[283,42],[155,48],[37,54],[394,60]],
	m:[5,25,7,9,63,416,83,91,103,156,157,168,173,182,196,213,201,240,241,261,263,129,280,286,317,374,496,506,514,523,206,693,707,14,34,53,58,59,67,85,87,89,116,126,164,200,203,214,231,247,253,257,334,394,399,411,414,442,444,446,502,675],
	t3:[807,815,809]
}
]
},{//Hitmonlee
l:[[280,0],[280,1],[364,1],[490,1],[33,1],[270,1],[252,1],[116,1],[24,4],[67,8],[203,12],[279,16],[469,21],[299,24],[170,28],[25,32],[370,36],[179,40],[136,44]],
m:[5,25,156,157,168,173,182,213,240,241,263,129,270,279,280,317,340,374,490,496,514,523,707,34,67,89,116,118,164,179,203,214,253,276,299,339,370,396,398,411,444,526,675],
t3:[811]
},{//Hitmonchan
l:[[409,0],[409,1],[364,1],[410,1],[418,1],[33,1],[270,1],[252,1],[116,1],[183,4],[612,8],[197,12],[279,16],[501,21],[9,24],[8,24],[7,24],[97,28],[5,32],[370,36],[68,40],[264,44]],
m:[5,25,7,8,9,156,157,168,173,182,213,240,241,263,129,270,279,280,317,374,409,490,496,514,523,34,67,89,97,116,118,164,203,214,253,339,370,396,411,444,526,675],
t3:[811]
},{//Lickitung
l:[[122,1],[111,1],[205,6],[48,12],[35,18],[50,24],[23,30],[282,36],[103,42],[21,48],[438,54],[187,60]],
m:[5,25,7,8,9,63,416,76,91,103,156,157,168,173,182,196,213,201,240,241,250,263,270,280,317,374,496,514,523,693,707,14,34,53,56,57,58,59,85,87,89,126,133,164,203,214,231,247,330,428,438,526,776],
e:[562,174,359,37],
t3:[805,798]
},{//Koffing
l:[[139,1],[33,1],[123,4],[108,8],[499,12],[372,16],[124,20],[114,24],[120,28],[188,32],[92,36],[562,40],[153,44],[262,48],[194,52]],
m:[103,120,156,168,173,182,213,240,241,261,263,371,372,474,496,53,85,87,126,164,188,203,214,247,253,269,360,390,399,482,599],
e:[60,220,288,180,174,254,256,255],
t3:[810]
},{//Weezing
forms:[
{
	l:[[458,0],[458,1],[257,1],[139,1],[33,1],[123,1],[108,1],[499,12],[372,16],[124,20],[114,24],[120,28],[188,32],[92,38],[562,44],[153,50],[262,56],[194,62]],
	m:[63,416,103,120,156,168,173,182,213,240,241,261,263,371,372,474,496,53,85,87,126,164,188,203,214,247,253,257,269,360,390,399,482,599],
	t3:[810]
},{
	l:[[458,0],[458,1],[790,1],[432,1],[257,1],[123,1],[108,1],[114,1],[139,1],[33,1],[584,1],[597,1],[499,12],[372,16],[124,20],[312,24],[120,28],[188,32],[92,38],[562,44],[153,50],[262,56],[194,62],[581,68]],
	m:[63,416,103,120,156,168,173,182,213,240,241,261,263,371,372,472,474,496,581,693,53,85,87,126,164,188,203,214,247,253,257,269,315,360,390,399,482,583,599,605],
	t3:[810,802]
}
]
},{//Rhyhorn
l:[[33,1],[39,1],[479,5],[523,10],[30,15],[184,20],[23,25],[350,30],[529,35],[36,40],[89,45],[444,50],[224,55],[32,60]],
m:[91,156,157,168,173,182,184,196,213,201,240,241,263,317,341,350,371,422,423,424,496,523,684,707,14,34,53,58,59,85,87,89,126,164,179,203,214,224,231,242,253,276,398,406,414,444,446,529,667],
e:[68,174,407,130,368,470,397],
t3:[815]
},{//Rhydon
l:[[359,0],[359,1],[33,1],[39,1],[479,1],[523,1],[30,15],[184,20],[23,25],[350,30],[529,35],[36,40],[89,47],[444,54],[224,61],[32,68]],
m:[5,25,6,7,8,9,63,416,91,156,157,168,173,182,184,196,213,201,240,241,250,263,270,280,317,341,350,371,374,419,421,422,423,424,496,523,684,693,707,784,14,34,53,56,57,58,59,85,87,89,126,164,179,200,203,214,224,231,242,253,276,334,398,406,411,414,444,446,484,529,535,667,776],
t3:[815,800]
},{//Chansey
l:[[186,1],[574,1],[343,1],[204,1],[107,1],[1,1],[383,1],[111,1],[39,4],[497,8],[791,12],[47,16],[374,20],[36,24],[505,28],[270,32],[113,36],[38,40],[135,44],[387,48],[361,52]],
m:[5,25,7,8,9,63,416,76,86,113,219,156,157,173,182,196,204,213,201,240,241,258,263,270,280,317,374,409,496,514,523,707,34,53,58,59,85,87,89,94,118,126,161,164,203,214,231,247,253,285,304,347,428,446,447,500,502,526,528,605],
e:[312,356,217,69]
},{//Tangela
l:[[71,1],[20,1],[78,4],[74,8],[72,12],[22,16],[77,20],[246,24],[282,28],[202,32],[79,36],[21,40],[321,44],[438,48],[275,52],[580,56]],
m:[63,416,76,115,156,168,173,182,202,213,241,263,331,384,496,580,14,34,133,164,188,203,214,402,412,437,438,447],
e:[93,283,175,73,267,476],
t3:[803]
},{//Kangaskhan
l:[[1,1],[39,1],[45,4],[252,8],[44,12],[23,16],[116,20],[29,24],[389,28],[458,32],[242,36],[203,40],[179,44],[200,48],[387,52]],
m:[5,25,7,8,9,63,416,76,91,219,156,157,168,173,182,196,213,201,240,241,258,250,251,263,270,280,317,372,374,409,419,421,496,514,523,34,53,56,57,58,59,67,85,87,89,116,126,164,179,200,203,214,231,242,247,253,411,526],
e:[509,68,50,38,283,359],
t3:[805]
},{//Horsea
l:[[55,1],[43,1],[108,5],[239,10],[116,15],[225,20],[61,25],[97,30],[673,35],[406,40],[56,45],[349,50],[240,55]],
m:[156,173,182,196,213,240,258,250,263,129,291,340,362,496,56,57,58,59,97,116,127,164,200,203,214,330,349,406,430,503,710],
e:[62,499,50,175,190,150,352],
t3:[812,799]
},{//Seadra
l:[[55,1],[43,1],[108,1],[239,1],[116,15],[225,20],[61,25],[97,30],[673,37],[406,44],[56,51],[349,58],[240,65]],
m:[63,416,156,173,182,196,213,240,258,250,263,129,291,340,362,496,56,57,58,59,97,116,127,164,200,203,214,330,349,406,430,503,710],
t3:[812,799]
},{//Goldeen
l:[[64,1],[39,1],[48,5],[352,10],[30,15],[97,20],[392,25],[175,30],[127,35],[487,40],[224,45],[32,50]],
m:[156,173,182,196,213,240,258,250,263,129,291,340,341,496,684,14,34,56,57,58,59,97,127,164,203,214,224,330,398,503,529,675],
e:[60,114,401,367,189],
t3:[812,799]
},{//Seaking
l:[[64,1],[39,1],[48,1],[352,1],[30,15],[97,20],[392,25],[175,30],[127,37],[487,44],[224,51],[32,58]],
m:[63,416,156,173,182,196,213,240,258,250,263,129,291,340,341,496,684,14,34,56,57,58,59,97,127,164,203,214,224,330,398,503,529,675],
t3:[812,799]
},{//Staryu
l:[[33,1],[106,1],[55,4],[109,8],[229,12],[107,16],[129,20],[60,24],[362,28],[113,32],[408,36],[94,40],[57,44],[105,48],[322,52],[56,56]],
m:[86,113,115,156,173,182,196,240,258,250,263,129,291,362,496,56,57,58,59,85,87,94,127,161,164,203,214,322,360,408,430,503,605],
t3:[812]
},{//Starmie
l:[[229,1],[107,1],[129,1],[60,1],[362,1],[113,1],[408,1],[94,1],[57,1],[105,1],[322,1],[56,1],[33,1],[106,1],[55,1],[109,1]],
m:[63,416,86,113,115,156,173,182,196,240,258,250,263,129,291,362,419,427,433,472,496,56,57,58,59,85,87,94,97,127,161,164,473,203,214,271,285,322,360,408,430,447,502,503,605],
t3:[812,797,800]
},{//Mr. Mime
forms:[
{
	l:[[501,1],[469,1],[384,1],[385,1],[1,1],[383,1],[226,1],[227,1],[93,12],[272,16],[182,20],[278,24],[60,28],[102,32],[113,36],[115,36],[219,36],[389,40],[605,44],[94,48],[298,52]],
	m:[5,25,7,8,9,63,416,345,76,86,113,115,219,156,168,173,182,196,204,213,240,241,263,270,280,371,374,384,385,409,433,472,478,496,581,678,595,34,85,87,94,118,164,473,203,214,226,227,247,248,253,269,271,285,334,347,411,412,417,428,447,492,500,502,605],
	e:[95,252,109,471,321],
	t3:[797]
},{
	l:[[383,1],[227,1],[272,1],[182,1],[278,1],[102,1],[113,1],[115,1],[219,1],[605,1],[581,1],[1,1],[229,1],[226,1],[420,1],[93,12],[502,16],[196,20],[24,24],[60,28],[95,32],[243,36],[389,40],[573,44],[94,48],[298,52]],
	m:[5,25,8,63,416,76,86,103,113,115,219,156,168,173,182,196,204,213,240,241,258,263,270,280,333,371,374,384,385,409,419,433,472,478,496,581,678,707,34,58,59,85,87,94,118,164,473,203,214,226,227,247,248,253,269,271,285,334,347,411,412,417,428,447,492,500,502,605],
	e:[252,109,471,321],
	t3:[813,797]
}
]
},{//Scyther
l:[[98,1],[43,1],[210,4],[206,8],[17,12],[104,16],[458,20],[163,24],[116,28],[97,32],[403,36],[404,40],[673,44],[14,48]],
m:[63,416,113,219,156,168,173,182,211,213,240,241,263,129,280,369,372,427,440,496,512,206,403,693,14,97,116,164,179,203,214,226,404,405],
e:[68,432,400,364,501],
t3:[814]
},
,
,
,{//Pinsir
l:[[11,1],[106,1],[116,4],[20,8],[69,12],[450,16],[480,20],[458,24],[233,28],[404,32],[70,36],[14,40],[66,44],[12,48],[276,52]],
m:[63,416,91,156,157,168,173,182,213,240,241,263,270,279,280,317,374,496,523,206,693,14,34,89,116,164,179,203,214,276,334,339,370,404,411,444,446,667,675],
e:[364,175,37,31,98]
},{//Tauros
l:[[33,1],[39,1],[526,5],[371,10],[372,15],[30,20],[184,25],[428,30],[36,35],[156,40],[207,45],[37,50],[38,55],[416,60]],
m:[63,416,76,156,157,173,182,184,196,213,201,240,241,250,263,270,279,317,371,372,496,514,523,684,707,34,53,57,58,59,85,87,89,126,164,179,200,203,214,224,231,253,370,428,442,444,526,528,667,675],
t3:[808]
},{//Magikarp
l:[[150,1],[33,15],[175,25]],
m:[340,56]
},{//Gyarados
l:[[44,0],[44,1],[175,1],[150,1],[33,1],[43,1],[239,1],[250,4],[423,8],[362,12],[184,16],[127,21],[242,24],[240,28],[401,32],[349,36],[56,40],[542,44],[37,48],[63,52]],
m:[63,416,86,156,173,182,184,196,213,201,240,258,250,263,291,340,362,371,419,423,496,523,693,34,53,56,57,58,59,85,87,89,126,127,164,200,203,214,231,242,253,269,330,349,399,406,438,442,444,503,542],
t3:[799,808]
},{//Lapras
l:[[45,1],[55,1],[47,5],[54,10],[791,15],[420,20],[109,25],[352,30],[362,35],[34,40],[58,45],[240,50],[56,55],[195,60],[329,65]],
m:[63,416,219,156,173,182,196,204,213,240,258,250,263,270,291,311,362,419,496,523,684,34,56,57,58,59,85,87,94,127,164,200,203,214,224,231,248,304,349,406,428,442,529,710,776],
e:[321,174,32,246,90,573,664]
},{//Ditto
l:[[144,1]]
},{//Eevee
l:[[343,1],[270,1],[33,1],[45,1],[39,1],[28,5],[98,10],[608,15],[129,20],[44,25],[383,30],[226,35],[36,40],[204,45],[38,50],[387,55]],
m:[6,91,156,173,182,204,213,240,241,263,129,270,311,313,496,514,34,116,164,203,214,226,231,247,304,500,526],
e:[175,174,321,281,197,24,189,273],
s:[606]
},{//Vaporeon
l:[[55,0],[55,1],[343,1],[129,1],[44,1],[383,1],[226,1],[36,1],[204,1],[38,1],[270,1],[33,1],[45,1],[39,1],[28,5],[98,10],[608,15],[114,20],[352,25],[62,30],[392,35],[330,40],[151,45],[56,50],[387,55]],
m:[6,63,416,91,156,173,182,196,204,213,240,241,258,250,263,129,270,291,311,313,362,496,514,34,56,57,58,59,116,127,164,203,214,226,231,247,304,330,500,503,526,710],
t3:[812]
},{//Jolteon
l:[[84,0],[84,1],[343,1],[129,1],[44,1],[383,1],[226,1],[36,1],[204,1],[38,1],[270,1],[33,1],[45,1],[39,1],[28,5],[98,10],[608,15],[86,20],[24,25],[422,30],[42,35],[435,40],[97,45],[87,50],[387,55]],
m:[6,42,63,416,86,91,113,156,173,182,204,213,240,241,263,129,270,311,313,422,496,514,521,34,85,87,97,116,164,203,214,226,231,247,304,486,500,526,528],
t3:[804]
},{//Flareon
l:[[52,0],[52,1],[343,1],[129,1],[383,1],[226,1],[36,1],[204,1],[38,1],[270,1],[33,1],[45,1],[39,1],[28,5],[98,10],[608,15],[123,20],[44,25],[424,30],[83,35],[436,40],[184,45],[394,50],[387,55]],
m:[6,63,416,83,91,156,173,182,184,204,213,240,241,261,263,129,270,311,313,424,496,514,595,34,53,116,126,164,203,214,226,231,247,257,276,304,315,394,500,526],
t3:[807,815]
},{//Porygon
l:[[33,1],[160,1],[278,5],[393,10],[84,15],[60,20],[176,25],[97,30],[105,35],[435,40],[161,45],[277,50],[199,55],[192,60]],
m:[63,416,76,86,156,168,173,182,196,240,241,263,129,384,385,683,433,472,496,527,598,58,59,85,87,94,97,161,164,473,203,214,231,247,271,428,492,502]
},
,
,
,
,
,{//Snorlax
l:[[278,1],[343,1],[254,1],[256,1],[103,1],[374,1],[118,1],[175,1],[387,1],[122,1],[33,1],[111,1],[335,1],[281,12],[44,16],[156,20],[173,20],[214,20],[242,24],[34,28],[484,32],[133,36],[667,40],[359,44],[187,48],[562,52],[416,56]],
m:[5,25,6,7,8,9,63,416,76,103,120,156,157,173,182,196,204,213,201,240,241,250,263,280,317,374,496,514,523,707,34,53,56,57,58,59,85,87,89,94,118,126,133,164,200,203,214,227,242,247,253,276,304,402,411,428,441,442,484,526,528,535,663,667,776],
e:[38,174,90,68,380],
t3:[805,798]
},
,
,
,
,
,
,{//Mewtwo
l:[[791,1],[673,1],[50,1],[93,1],[129,1],[246,8],[427,16],[219,24],[133,32],[396,40],[94,48],[384,56],[385,56],[54,64],[540,72],[105,80],[248,88]],
m:[5,25,6,7,8,9,63,416,76,86,113,115,219,120,156,157,173,182,196,201,240,241,258,261,263,129,280,291,317,374,384,385,683,409,419,427,433,472,478,490,496,523,678,693,34,53,58,59,67,85,87,89,94,97,118,126,133,161,164,473,203,214,231,247,248,269,271,285,339,347,396,398,411,412,417,428,444,447,486,492,500,502,542],
t3:[797]
},{//Mew
l:[[1,1],[513,1],[133,10],[226,20],[246,30],[791,40],[417,50],[118,60],[286,70],[144,80],[396,90],[94,100]],
m:[5,25,6,7,8,9,19,42,63,416,345,76,669,83,86,91,103,113,115,219,120,156,157,168,173,182,184,196,202,204,211,213,201,240,241,258,250,251,261,263,129,270,279,280,286,291,311,313,317,328,331,333,340,341,350,362,369,371,372,374,384,385,683,409,419,421,422,423,424,427,433,472,478,440,474,490,496,506,512,514,521,523,527,534,541,555,566,577,580,581,604,678,595,598,206,403,684,693,707,784,14,34,53,56,57,58,59,67,85,87,89,94,97,116,118,126,127,133,141,161,164,179,188,191,200,473,203,214,224,226,227,231,242,247,248,253,257,269,271,276,285,299,304,315,322,330,334,337,339,347,348,349,360,370,390,394,396,398,399,402,404,405,406,408,411,412,413,414,417,428,430,437,438,441,442,444,446,447,482,484,486,492,500,502,503,526,528,529,535,542,583,599,605,663,667,675,676,706,710,776],
t3:[805,807,812,804,803,813,811,810,815,814,797,806,800,809,799,808,798,802]
},
,
,
,
,
,
,
,
,
,
,
,{//Hoothoot
l:[[64,1],[45,1],[33,3],[497,6],[93,9],[115,12],[375,15],[403,18],[326,21],[36,24],[253,27],[355,30],[585,33],[95,36],[138,39]],
m:[19,103,115,156,168,173,182,211,213,240,241,263,129,286,496,403,94,97,133,164,203,214,247,253,257,304,347,417,428,500,526,542],
e:[48,17,18,297,101,432],
t3:[814]
},{//Noctowl
l:[[143,1],[64,1],[45,1],[33,1],[497,1],[93,9],[115,12],[375,15],[403,18],[326,23],[36,28],[253,33],[355,38],[585,43],[95,48],[138,53]],
m:[19,63,416,103,115,156,168,173,182,211,213,240,241,263,129,286,496,403,94,97,133,164,203,214,247,248,253,257,304,347,417,428,500,526,542],
t3:[814]
},
,
,
,
,
,{//Chinchou
l:[[55,1],[48,1],[486,4],[86,8],[61,12],[109,16],[209,20],[268,24],[435,28],[392,32],[175,36],[36,40],[56,44]],
m:[86,103,156,173,182,196,213,240,258,250,263,291,340,362,496,521,56,57,58,59,85,87,97,127,133,164,203,214,486,503,528,605],
e:[60,54,352,487],
t3:[804]
},{//Lanturn
l:[[254,0],[256,0],[255,0],[254,1],[256,1],[255,1],[598,1],[55,1],[48,1],[486,1],[86,1],[61,12],[109,16],[209,20],[268,24],[435,30],[392,36],[175,42],[36,48],[56,54]],
m:[63,416,86,103,156,173,182,196,213,240,258,250,263,291,340,362,496,521,598,56,57,58,59,85,87,97,127,133,164,203,214,486,503,528,605],
t3:[804]
},{//Pichu
l:[[84,1],[39,1],[589,4],[186,8],[609,12],[417,16],[204,20]],
m:[5,25,9,86,113,115,156,173,182,204,213,240,263,129,270,374,496,521,527,604,34,57,85,87,164,179,203,214,227,231,253,417,447,528,583],
e:[217,273,268,252,321,175,574]
},{//Cleffa
l:[[150,1],[1,1],[383,1],[47,4],[186,8],[574,12],[227,16],[204,20]],
m:[5,25,345,76,86,91,113,115,219,156,173,182,196,204,213,240,241,263,270,313,374,472,496,577,581,34,53,94,118,126,133,164,473,203,214,227,231,247,253,271,304,428,447,500,526,583],
e:[217,273,312,321,505]
},{//Igglybuff
l:[[47,1],[1,1],[383,1],[111,4],[186,8],[574,12],[50,16],[204,20]],
m:[5,25,76,86,91,103,113,115,219,156,173,182,196,204,213,240,241,263,270,313,340,374,496,577,581,34,53,94,126,164,203,214,247,253,304,447,526,528,583],
e:[343,356,505,387,195,217,273,205]
},{//Togepi
l:[[45,1],[1,1],[186,4],[791,8],[204,12],[246,16],[281,20],[118,24],[495,28],[38,32],[219,36],[266,40],[226,44],[387,48],[273,52]],
m:[5,25,76,86,113,115,219,156,173,182,204,213,240,241,263,129,270,374,496,577,595,34,53,94,118,126,161,164,473,203,214,226,227,247,248,253,271,304,417,428,447,500,526,583,605],
e:[217,64,375,326,234,332]
},{//Togetic
l:[[584,0],[584,1],[45,1],[1,1],[186,1],[791,1],[204,12],[246,16],[281,20],[118,24],[495,28],[38,32],[219,36],[266,40],[226,44],[387,48],[273,52]],
m:[5,25,19,63,416,345,76,86,113,115,219,156,173,182,204,211,213,240,241,263,129,270,280,286,374,409,496,514,577,595,684,34,53,94,118,126,161,164,473,203,214,226,227,247,248,253,257,271,304,417,428,447,500,526,583,605],
t3:[814]
},{//Natu
l:[[64,1],[43,1],[500,5],[100,10],[109,15],[101,20],[375,26],[384,30],[385,35],[94,35],[273,40],[248,45]],
m:[76,86,113,115,156,168,173,182,202,211,213,240,241,263,129,286,369,384,385,433,478,496,403,94,164,473,203,214,226,247,248,257,271,285,322,347,428,447,500,502,605],
e:[65,98,297,389,355,493],
t3:[814,797]
},{//Xatu
l:[[403,0],[403,1],[366,1],[64,1],[43,1],[500,1],[100,1],[109,15],[101,20],[375,28],[384,34],[385,34],[94,41],[273,48],[248,55]],
m:[19,63,416,76,86,113,115,156,168,173,182,202,211,213,240,241,263,129,286,369,384,385,433,478,496,403,94,164,473,203,214,226,247,248,257,271,285,322,347,428,447,492,500,502,605],
t3:[814,797]
},
,
,
,{//Bellossom
l:[[572,0],[572,1],[483,1],[72,1],[77,1],[78,1],[79,1],[202,1],[92,1],[585,1],[580,1],[236,1],[80,1],[71,1],[74,1],[51,1],[230,1]],
m:[63,416,345,76,219,156,173,182,202,204,213,241,263,270,331,374,409,474,496,580,14,164,188,203,214,226,253,348,402,412,437,447,583,605],
t3:[803]
},{//Marill
l:[[205,1],[111,1],[33,1],[55,1],[39,1],[270,1],[61,6],[204,9],[21,12],[340,15],[401,19],[583,21],[392,24],[240,27],[56,30],[38,33],[276,36]],
m:[5,25,8,91,113,156,173,182,196,204,213,240,258,250,263,129,270,280,291,313,340,341,374,496,577,581,693,34,56,57,58,59,127,133,164,203,214,227,231,248,253,276,304,330,447,503,526,583],
e:[453,187,383,195,217,47,487,48,321],
t3:[798,802]
},{//Azumarill
l:[[205,1],[111,1],[33,1],[55,1],[39,1],[270,1],[61,6],[204,9],[21,12],[340,15],[401,21],[583,25],[392,30],[240,35],[56,40],[38,45],[276,50]],
m:[5,25,8,63,416,91,113,156,173,182,196,204,213,240,258,250,263,129,270,280,291,313,340,341,374,496,523,577,581,693,34,56,57,58,59,127,133,164,203,214,227,231,248,253,276,304,330,411,447,503,526,583,710],
t3:[798,802]
},{//Sudowoodo
l:[[21,0],[21,1],[444,1],[359,1],[452,1],[313,1],[383,1],[175,1],[88,1],[335,12],[102,16],[317,20],[715,24],[389,28],[157,32],[67,36],[68,40],[38,44],[457,48]],
m:[5,25,7,8,9,91,120,156,157,168,173,182,213,201,241,263,270,280,313,317,328,350,374,496,523,707,34,67,89,164,203,214,253,269,334,347,414,444,446,492,776],
e:[29,106,111,174,205,397],
t3:[800]
},{//Politoed
l:[[340,0],[340,1],[207,1],[304,1],[195,1],[61,1],[240,1],[34,1],[414,1],[56,1],[187,1],[38,1],[55,1],[95,1],[1,1],[341,1]],
m:[5,25,8,63,416,91,103,156,168,173,182,196,213,240,258,250,263,270,280,291,311,340,341,371,374,496,523,34,56,57,58,59,89,94,118,127,164,203,214,227,253,304,330,411,414,503,710]
},
,
,
,
,
,
,
,{//Wooper
l:[[55,1],[39,1],[240,4],[341,8],[54,12],[114,12],[21,16],[281,21],[401,24],[330,28],[133,32],[92,36],[89,40]],
m:[8,91,219,156,173,182,196,213,201,240,258,250,263,291,341,385,496,523,598,707,34,56,57,58,59,89,127,133,164,188,203,214,227,231,330,414,482,503],
e:[246,174,254,256,255,68,24,105,495,491,612]
},{//Quagsire
l:[[55,1],[39,1],[240,1],[341,1],[54,12],[114,12],[21,16],[281,23],[401,28],[330,34],[133,40],[92,46],[89,52]],
m:[5,25,8,63,416,91,219,156,157,168,173,182,196,213,201,240,258,250,263,280,291,317,341,374,385,496,523,598,707,34,56,57,58,59,89,127,133,164,188,203,214,227,231,330,411,414,444,482,503,667,710]
},{//Espeon
l:[[93,0],[93,1],[343,1],[44,1],[383,1],[226,1],[36,1],[204,1],[38,1],[270,1],[33,1],[45,1],[39,1],[28,5],[98,10],[608,15],[129,20],[60,25],[234,30],[384,35],[94,40],[244,45],[248,50],[387,55]],
m:[6,63,416,91,113,115,156,173,182,204,213,240,241,263,129,270,311,313,384,433,478,496,514,34,94,116,164,473,203,214,226,231,247,248,271,285,304,347,428,447,500,502,526,605,706],
t3:[797]
},{//Umbreon
l:[[555,0],[555,1],[343,1],[129,1],[44,1],[383,1],[226,1],[36,1],[204,1],[38,1],[270,1],[33,1],[45,1],[39,1],[28,5],[98,10],[608,15],[109,20],[372,25],[236,30],[385,35],[399,40],[103,45],[212,50],[387,55]],
m:[6,63,416,91,103,156,168,173,182,204,213,240,241,263,129,270,311,313,371,372,385,472,496,514,555,34,94,116,164,203,214,226,231,242,247,269,304,399,492,500,526,675],
t3:[808]
},
,{//Slowking
l:[[408,1],[417,1],[207,1],[33,1],[174,1],[45,1],[55,1],[281,9],[93,12],[50,15],[352,18],[29,21],[428,24],[133,27],[57,30],[303,33],[94,36],[244,39],[240,42],[505,45]],
m:[5,25,6,8,63,416,86,91,113,219,156,173,182,196,213,240,241,258,250,263,129,280,286,291,311,341,362,374,409,419,433,472,496,523,534,678,34,53,56,57,58,59,89,94,126,133,161,164,473,203,214,231,247,248,271,285,330,334,347,408,411,417,428,447,492,500,503,710],
t3:[797]
},
,
,{//Wobbuffet
l:[[68,0],[243,0],[219,0],[194,0],[150,1],[204,1],[227,1],[133,1],[68,1],[243,1],[219,1],[194,1]],
m:[219,204,133,227]
},
,
,
,{//Dunsparce
l:[[175,1],[111,1],[189,4],[205,8],[137,12],[103,16],[246,20],[529,24],[281,28],[34,32],[36,36],[355,40],[407,44],[489,48],[38,52],[283,56]],
m:[76,86,91,103,156,157,168,173,182,213,240,241,263,270,317,496,506,514,523,403,707,34,53,58,59,85,87,89,97,126,133,164,203,214,226,231,247,347,360,398,428,446,500,528,529],
e:[310,44,174,29,277,401,387],
t3:[805,814,806,799]
},
,{//Steelix
l:[[242,1],[422,1],[423,1],[424,1],[397,1],[33,1],[106,1],[20,1],[88,1],[479,4],[475,8],[225,12],[174,16],[157,20],[103,24],[328,28],[446,32],[21,36],[201,40],[91,44],[231,48],[444,52],[38,56],[393,60]],
m:[63,416,91,103,120,156,157,173,182,184,213,201,241,263,317,328,350,371,422,423,424,496,523,693,707,784,34,89,164,203,214,231,242,269,334,349,360,399,406,414,430,442,444,446,484,529,667,706,776],
t:[796],
t3:[815,800,798]
},
,
,{//Qwilfish
l:[[40,1],[33,1],[106,4],[55,8],[565,12],[107,16],[191,20],[362,24],[279,28],[42,32],[390,36],[398,40],[254,44],[255,44],[36,48],[92,52],[401,56],[367,60],[194,66]],
m:[42,86,120,156,173,182,184,196,213,240,258,250,263,129,279,291,340,362,371,372,474,496,506,14,56,57,58,59,127,164,179,188,191,203,214,247,269,360,390,398,482,503,599,675,710],
e:[175,114,61,48,310,453,352,491],
t3:[799,798]
},{//Scizor
l:[[418,0],[418,1],[17,1],[97,1],[403,1],[98,1],[43,1],[210,1],[206,1],[232,12],[104,16],[458,20],[163,24],[116,28],[334,32],[442,36],[404,40],[673,44],[14,48]],
m:[63,416,113,219,156,168,173,182,211,213,201,240,241,263,129,280,328,369,372,374,427,440,474,496,512,206,403,693,14,97,116,164,179,203,214,226,276,334,404,405,430,442],
t3:[814]
},{//Shuckle
l:[[110,1],[35,1],[205,5],[522,10],[88,15],[219,20],[156,25],[450,30],[471,35],[470,35],[157,40],[380,45],[564,50],[379,55],[444,60],[504,65]],
m:[91,219,156,157,173,182,213,201,241,263,270,317,328,341,350,474,496,523,34,89,164,179,188,203,214,227,334,360,414,444,446,482],
e:[230,282,367,51,515,111,611,92,343],
t3:[806,800,798]
},{//Heracross
l:[[33,1],[43,1],[31,5],[203,10],[332,15],[30,20],[68,25],[280,30],[42,35],[675,40],[37,45],[14,50],[224,55],[370,60]],
m:[42,63,416,91,156,157,168,173,182,213,240,241,263,270,279,280,317,331,350,372,374,421,474,496,514,523,206,684,693,14,34,67,89,164,179,191,203,214,224,334,339,370,411,444,526,667,675],
e:[175,38,106,69,400,364,36],
t3:[811]
},{//Sneasel
l:[[10,1],[43,1],[269,6],[98,12],[232,18],[196,24],[154,30],[468,36],[251,42],[97,48],[103,54],[163,60]],
m:[5,25,8,91,103,115,156,168,173,182,196,213,240,241,258,250,251,263,129,280,313,371,374,419,421,427,490,496,514,555,206,14,57,58,59,67,97,164,203,214,231,247,269,347,398,399,404,492,675],
e:[68,180,44,252,458,420,364,556],
t3:[813,808]
},
,
,
,
,{//Swinub
l:[[33,1],[189,1],[181,5],[175,10],[420,15],[54,20],[203,25],[196,30],[133,35],[36,40],[89,45],[59,50]],
m:[91,113,115,156,157,173,182,184,196,213,201,240,258,263,317,328,333,341,419,496,523,34,58,59,89,133,164,203,214,276,414,446],
e:[44,246,38,90,174,556,573]
},{//Piloswine
l:[[423,0],[423,1],[246,1],[33,1],[189,1],[181,1],[175,1],[420,15],[54,20],[203,25],[196,30],[133,37],[36,44],[89,51],[59,58],[37,65]],
m:[63,416,91,113,115,156,157,173,182,184,196,213,201,240,258,263,317,328,333,341,419,423,496,523,707,34,58,59,89,133,164,203,214,276,414,444,446,667]
},{//Corsola
forms:[
{
	l:[[33,1],[106,1],[55,5],[392,10],[203,15],[246,20],[61,25],[175,30],[791,35],[408,40],[414,45],[105,50],[243,55]],
	m:[91,103,113,115,219,120,156,157,173,182,196,213,201,240,241,258,250,263,317,333,350,362,496,523,707,34,56,57,58,59,89,94,133,164,203,214,247,334,347,408,414,444,446,503,675,710],
	e:[54,109,267,174,352,457]
},{
	l:[[33,1],[106,1],[310,5],[50,10],[180,15],[246,20],[506,25],[174,30],[668,35],[408,40],[101,45],[288,50],[243,55]],
	m:[91,103,113,115,219,120,156,157,173,182,196,202,213,201,240,241,258,250,261,263,317,333,350,362,496,506,523,707,34,56,57,58,59,89,94,133,164,203,214,247,334,347,408,414,444,446,503,675,710],
	e:[114,109,267,194,352,457]
}
],
t3:[800]
},{//Remoraid
l:[[55,1],[270,1],[352,4],[116,8],[60,12],[62,16],[61,20],[199,24],[331,28],[58,32],[56,36],[487,40],[63,44]],
m:[63,86,103,156,168,173,182,196,213,240,241,250,263,129,270,291,331,340,341,350,362,372,496,53,56,57,58,59,94,116,126,127,164,203,214,402,441,503],
e:[190,48,114,175,323,491]
},{//Octillery
l:[[190,0],[190,1],[441,1],[350,1],[270,1],[55,1],[35,1],[352,1],[116,1],[60,12],[62,16],[61,20],[199,24],[331,30],[58,36],[56,42],[487,48],[63,54]],
m:[63,416,86,103,156,168,173,182,196,213,240,241,250,263,129,270,291,331,340,341,350,362,371,372,496,53,56,57,58,59,94,116,126,127,164,188,203,214,402,412,430,441,482,503,710],
t3:[806]
},{//Delibird
l:[[217,1],[65,25]],
m:[5,25,8,19,156,168,173,182,196,211,213,240,258,263,129,270,280,311,333,340,372,374,419,496,693,34,58,59,97,164,191,203,214,226,248,402,413,441,529],
e:[62,98,150,229,420,252,573,194,68,694,262],
t3:[813,814]
},{//Mantine
l:[[60,1],[331,1],[355,1],[33,1],[55,1],[48,1],[17,1],[352,12],[469,16],[97,20],[61,24],[29,28],[403,32],[392,36],[340,40],[36,44],[56,48]],
m:[63,416,156,157,173,182,196,213,240,258,250,263,129,270,291,317,331,340,350,362,372,496,512,523,403,34,56,57,58,59,89,97,127,133,164,203,214,402,441,442,503,542,710,776],
e:[239,114,21,243,150,366,109],
t3:[814]
},{//Skarmory
l:[[64,1],[43,1],[28,4],[31,8],[232,12],[97,16],[17,20],[163,24],[211,28],[475,32],[65,36],[319,40],[191,44],[334,48],[413,52]],
m:[19,156,157,168,173,182,196,211,213,201,241,263,129,317,328,371,372,385,496,403,14,97,164,191,203,214,269,334,399,404,413,430,442,446,776],
e:[174,143,18,314,400,364,355],
t3:[814]
},
,
,{//Kingdra
l:[[250,1],[281,1],[55,1],[43,1],[108,1],[239,1],[116,15],[225,20],[61,25],[97,30],[673,37],[406,44],[56,51],[349,58],[240,65]],
m:[63,416,156,173,182,196,213,240,258,250,263,129,291,340,362,496,784,34,56,57,58,59,97,116,127,164,200,203,214,330,349,406,430,442,503,542,710],
t3:[812,799]
},
,
,{//Porygon2
l:[[111,1],[33,1],[160,1],[278,1],[393,1],[84,15],[60,20],[176,25],[97,30],[105,35],[435,40],[161,45],[277,50],[199,55],[192,60],[63,65]],
m:[63,416,76,86,156,168,173,182,196,240,241,263,129,384,385,683,433,472,496,527,598,58,59,85,87,94,97,161,164,473,203,214,231,247,271,428,492,502]
},
,
,{//Tyrogue
l:[[33,1],[270,1],[252,1],[116,1]],
m:[5,25,156,157,168,173,182,213,240,241,263,129,270,280,490,496,514,523,34,67,89,116,164,203,214,253,339,526],
e:[229,136,183,170,68,410,418,364]
},{//Hitmontop
l:[[167,0],[167,1],[364,1],[229,1],[33,1],[270,1],[252,1],[116,1],[98,4],[360,8],[197,12],[279,16],[469,21],[501,21],[389,24],[97,28],[91,32],[370,36],[68,40],[283,44]],
m:[5,25,91,156,157,168,173,182,213,201,240,241,263,129,270,279,280,490,496,514,523,693,34,67,89,97,116,164,203,214,253,339,360,370,411,444,526,529],
t3:[813,811]
},
,
,
,{//Miltank
l:[[33,1],[45,1],[205,5],[111,10],[23,15],[215,20],[29,25],[428,30],[208,35],[34,40],[583,45],[204,50],[667,55]],
m:[5,25,7,8,9,63,416,76,86,156,157,173,182,196,204,213,201,240,241,250,263,270,280,317,374,496,514,523,707,34,57,58,59,85,87,89,118,164,179,203,214,231,247,360,411,428,442,446,484,526,583,667,776],
e:[562,174,38,359,217,69,264],
t3:[798]
},{//Blissey
l:[[186,1],[574,1],[343,1],[204,1],[107,1],[1,1],[383,1],[111,1],[39,4],[497,8],[791,12],[47,16],[374,20],[36,24],[505,28],[270,32],[113,36],[38,40],[135,44],[387,48],[361,52]],
m:[5,25,7,8,9,63,416,76,86,113,219,156,157,173,182,196,204,213,201,240,241,258,263,270,280,317,374,409,419,496,514,523,707,34,53,58,59,85,87,89,94,118,126,161,164,203,214,231,247,253,285,304,347,411,428,446,447,500,502,526,528,605]
},
,
,
,{//Larvitar
l:[[33,1],[43,1],[88,3],[371,6],[44,9],[184,12],[157,15],[707,18],[103,21],[399,24],[242,27],[89,31],[444,33],[37,36],[201,39],[63,42]],
m:[63,91,103,156,157,173,182,184,213,201,240,241,263,280,317,328,371,372,496,514,523,555,707,34,89,116,164,200,203,214,231,242,253,269,276,330,334,349,399,414,442,444,446],
e:[23,246,174]
},{//Pupitar
l:[[334,0],[334,1],[33,1],[43,1],[88,1],[371,1],[44,9],[184,12],[157,15],[707,18],[103,21],[399,24],[242,27],[89,33],[444,37],[37,42],[201,47],[63,52]],
m:[63,91,103,156,157,173,182,184,213,201,240,241,263,280,317,328,371,372,496,514,523,555,707,34,89,116,164,200,203,214,231,242,253,269,276,330,334,349,399,414,442,444,446]
},{//Tyranitar
l:[[334,1],[422,1],[423,1],[424,1],[33,1],[43,1],[88,1],[371,1],[44,9],[184,12],[157,15],[707,18],[103,21],[399,24],[242,27],[89,33],[444,37],[37,42],[201,47],[63,52],[416,59]],
m:[5,25,7,8,9,63,416,86,91,103,156,157,173,182,184,213,201,240,241,250,263,279,280,317,328,350,371,372,374,419,421,422,423,424,496,514,523,555,693,707,784,34,53,56,57,58,59,67,85,87,89,116,126,164,200,203,214,231,242,253,269,276,330,334,337,349,399,406,411,414,442,444,446,484,492,667,776],
t3:[808]
},
,
,{//Celebi
l:[[93,1],[215,1],[345,10],[226,20],[246,30],[791,40],[73,50],[105,60],[248,70],[361,80],[437,90],[195,100]],
m:[63,416,345,76,669,86,113,115,219,156,173,182,202,201,240,241,263,129,270,286,311,369,374,427,433,472,478,496,580,678,14,94,118,164,203,214,226,247,248,253,271,285,347,348,396,402,412,414,417,428,437,446,447,502,605,676],
t3:[803,814,797]
},
,
,
,
,
,
,
,
,
,
,
,{//Zigzagoon
forms:[
{
	l:[[33,1],[45,1],[28,3],[39,6],[343,9],[29,12],[608,15],[42,18],[156,21],[36,24],[374,27],[175,30],[187,33],[38,36]],
	m:[42,86,91,156,168,173,182,196,204,213,240,241,250,263,129,270,341,374,496,514,541,34,57,58,59,85,87,164,203,214,231,247,271,304,402,441,447,526],
	e:[321,493,245]
},{
	l:[[33,1],[43,1],[28,3],[122,6],[555,9],[29,12],[608,15],[42,18],[156,21],[36,24],[184,27],[68,30],[269,33],[38,36]],
	m:[42,86,91,103,156,168,173,182,184,196,213,240,241,250,263,129,270,313,341,371,372,374,496,514,555,34,57,58,59,85,87,164,203,214,231,247,269,271,304,402,441,447,526],
	e:[575,501,282],
	t3:[808]
}
]
},{//Linoone
forms:[
{
	l:[[163,0],[163,1],[415,1],[42,1],[608,1],[33,1],[45,1],[28,1],[39,1],[343,9],[29,12],[468,15],[154,18],[156,23],[36,28],[374,33],[175,38],[187,43],[38,48]],
	m:[42,63,416,86,91,156,168,173,182,196,204,213,240,241,250,263,129,270,341,374,421,496,514,541,707,34,57,58,59,85,87,164,203,214,231,247,271,304,402,441,447,526,583,675]
},{
	l:[[400,0],[400,1],[415,1],[42,1],[608,1],[33,1],[43,1],[28,1],[122,1],[555,9],[29,12],[468,15],[154,18],[156,23],[36,28],[184,33],[68,38],[269,43],[38,48]],
	m:[42,63,416,86,91,103,156,168,173,182,184,196,213,240,241,250,263,129,270,313,341,371,372,374,421,496,514,555,707,34,57,58,59,85,87,164,203,214,231,247,269,271,304,402,441,447,526,675,776],
	t3:[808]
}
]
},
,
,
,
,
,{//Lotad
l:[[310,1],[45,1],[71,3],[55,6],[54,9],[72,12],[175,16],[61,20],[267,24],[202,28],[240,33],[428,38],[412,43]],
m:[76,156,168,173,182,196,202,213,240,241,258,250,263,331,496,14,34,57,58,59,164,203,214,253,402,412,428,447,503],
e:[235,75,230,73,321,68,298],
t3:[803]
},{//Lombre
l:[[298,1],[252,1],[282,1],[175,1],[310,1],[45,1],[71,1],[55,1],[54,9],[72,12],[154,18],[61,24],[267,30],[202,36],[240,43],[428,50],[412,57],[56,64]],
m:[5,25,7,8,9,76,156,168,173,182,196,202,213,240,241,258,250,263,280,291,331,341,374,409,496,14,34,56,57,58,59,127,164,203,214,227,253,304,330,402,412,428,447,503],
t3:[803]
},{//Ludicolo
l:[[298,1],[252,1],[282,1],[175,1],[54,1],[72,1],[154,1],[61,1],[267,1],[202,1],[240,1],[428,1],[412,1],[56,1],[310,1],[45,1],[71,1],[55,1]],
m:[5,25,7,8,9,63,416,76,156,168,173,182,196,202,213,240,241,258,250,263,280,291,311,331,341,374,409,496,14,34,56,57,58,59,118,127,133,164,203,214,227,253,304,330,402,411,412,428,437,447,503],
t3:[803]
},{//Seedot
l:[[33,1],[106,1],[71,3],[310,6],[74,9],[205,12],[72,15],[371,18],[267,21],[241,24],[235,27],[389,30],[153,33]],
m:[76,91,120,156,173,182,202,213,241,251,263,331,371,384,496,514,580,206,14,34,133,164,203,214,247,402,412,417,447,492],
e:[73,98,36,388,432,400],
t3:[803]
},{//Nuzleaf
l:[[75,0],[75,1],[314,1],[259,1],[252,1],[207,1],[235,1],[153,1],[33,1],[106,1],[71,1],[310,1],[74,9],[205,12],[72,18],[371,24],[267,30],[241,36],[326,43],[389,50],[348,57]],
m:[25,63,76,669,91,120,156,157,168,173,182,202,213,241,251,263,129,280,317,331,371,372,374,384,490,496,514,555,580,206,14,34,67,133,164,203,214,247,348,399,402,412,417,447,492],
t3:[803,808]
},{//Shiftry
l:[[536,0],[536,1],[75,1],[314,1],[259,1],[252,1],[207,1],[18,1],[542,1],[235,1],[153,1],[74,1],[205,1],[72,1],[371,1],[267,1],[241,1],[326,1],[389,1],[348,1],[33,1],[106,1],[71,1],[310,1]],
m:[25,63,416,76,669,91,103,120,156,157,168,173,182,196,202,213,241,251,263,129,279,280,317,331,340,371,372,374,384,490,496,514,555,580,206,403,693,14,34,67,133,164,203,214,247,257,348,399,402,404,411,412,417,437,447,492,542,675],
t3:[803,808]
},
,
,{//Wingull
l:[[45,1],[55,1],[98,5],[48,10],[17,15],[352,20],[97,26],[403,30],[54,35],[355,40],[542,45]],
m:[19,156,168,173,182,196,211,213,240,258,263,129,362,369,496,403,58,59,97,164,203,214,253,503,542,710],
e:[239,16,392,282,487,469,314,332],
t3:[814]
},{//Pelipper
l:[[182,1],[487,1],[98,1],[97,1],[403,1],[45,1],[55,1],[366,1],[48,1],[17,15],[352,20],[254,28],[256,28],[255,28],[374,34],[54,41],[355,48],[542,55],[56,62]],
m:[19,63,416,156,168,173,182,196,211,213,240,258,250,263,129,311,362,369,371,374,496,403,56,57,58,59,97,164,203,214,253,402,413,441,503,542,710],
t3:[814]
},{//Ralts
l:[[45,1],[574,1],[104,3],[93,6],[95,9],[577,12],[100,15],[60,18],[791,21],[204,24],[347,27],[94,30],[505,33],[138,36],[248,39]],
m:[5,25,7,8,9,345,86,113,115,219,156,168,173,182,196,204,213,240,241,261,263,129,270,286,374,433,472,478,496,577,581,34,85,94,164,473,203,214,227,247,248,269,271,285,304,347,428,447,500,502,605],
e:[50,212,262,194,288,425,109,282],
t3:[797]
},{//Kirlia
l:[[45,1],[574,1],[104,1],[93,1],[95,9],[577,12],[100,15],[60,18],[791,23],[204,28],[347,33],[94,38],[505,43],[138,48],[248,53]],
m:[5,25,7,8,9,345,86,113,115,219,156,168,173,182,196,204,213,240,241,261,263,129,270,286,374,433,472,478,496,577,581,34,85,94,164,473,203,214,227,247,248,269,271,285,304,347,428,447,500,502,605],
t3:[813,797]
},{//Gardevoir
l:[[605,0],[605,1],[585,1],[581,1],[361,1],[204,1],[45,1],[574,1],[104,1],[93,1],[95,9],[577,12],[100,15],[60,18],[791,23],[273,28],[347,35],[94,42],[505,49],[138,56],[248,63]],
m:[5,25,7,8,9,63,416,345,86,113,115,219,156,168,173,182,196,204,213,240,241,261,263,129,270,286,374,384,385,433,472,478,496,577,581,678,595,34,85,94,164,473,203,214,227,247,248,269,271,285,304,347,411,412,428,447,500,502,605],
t3:[813,797,802]
},
,
,
,
,
,
,
,{//Nincada
l:[[28,1],[10,1],[106,5],[206,10],[189,15],[71,21],[232,25],[154,30],[170,35],[91,40]],
m:[76,91,156,173,182,202,201,241,263,496,206,141,164,203,214,247,404,405],
e:[16,400,450,515,175],
t3:[806]
},{//Ninjask
l:[[104,0],[103,0],[210,0],[104,1],[103,1],[210,1],[226,1],[332,1],[189,1],[232,1],[91,1],[28,1],[10,1],[106,1],[206,1],[97,15],[71,23],[450,29],[154,36],[170,43],[163,50],[14,57],[404,64]],
m:[63,416,76,91,103,156,168,173,182,202,201,241,263,129,369,496,512,206,403,14,97,141,164,203,214,226,247,253,404,405],
t3:[814,806]
},{//Shedinja
l:[[421,1],[288,1],[189,1],[232,1],[91,1],[10,1],[28,1],[106,1],[206,1],[109,15],[71,23],[425,29],[154,36],[170,43],[247,50],[180,57],[566,64]],
m:[63,416,76,91,156,168,173,182,202,201,241,261,263,421,496,506,566,206,97,141,164,203,214,247,271,404,405,502],
t3:[806,809]
},{//Whismur
l:[[310,1],[1,1],[497,5],[336,10],[156,15],[214,15],[23,21],[46,25],[48,30],[253,35],[103,40],[304,45]],
m:[5,25,7,8,9,76,103,156,173,182,196,213,240,241,263,313,374,496,514,34,53,58,59,126,164,203,214,247,253,304,428,526],
e:[509,574,283,326,359,108,36,18]
},{//Loudred
l:[[44,0],[44,1],[310,1],[1,1],[497,1],[336,1],[156,15],[214,15],[23,23],[46,29],[48,36],[253,43],[103,50],[304,57]],
m:[5,25,7,8,9,76,103,156,157,173,182,196,213,240,241,263,280,313,317,374,496,514,523,707,34,53,58,59,67,89,126,164,203,214,247,253,269,304,315,428,526]
},{//Exploud
l:[[242,0],[242,1],[44,1],[423,1],[424,1],[422,1],[310,1],[1,1],[497,1],[336,1],[156,15],[214,15],[23,23],[46,29],[48,36],[253,45],[103,54],[304,63],[586,72],[63,81]],
m:[5,25,7,8,9,63,416,76,103,156,157,173,182,196,213,240,241,250,263,280,313,317,374,419,422,423,424,496,514,523,707,34,53,56,57,58,59,67,89,126,164,200,203,214,242,247,253,269,304,315,411,428,526],
t3:[805]
},
,
,{//Azurill
l:[[150,1],[55,1],[39,1],[270,3],[61,6],[204,9],[21,12],[340,15]],
m:[113,156,173,182,196,204,213,240,258,250,263,270,313,340,341,496,577,693,34,57,58,59,127,164,203,214,227,231,253,304,330,503,526],
e:[453,187,383,195,217,47,487,48,321]
},
,
,
,{//Sableye
l:[[43,1],[10,1],[310,3],[109,6],[425,9],[252,12],[50,15],[197,18],[101,21],[154,24],[282,27],[511,30],[421,33],[212,36],[408,39],[428,42],[247,45],[492,48]],
m:[5,25,7,8,9,91,156,168,173,182,196,213,240,241,261,263,270,280,286,317,371,374,409,421,472,490,496,506,514,555,34,67,94,118,164,203,214,227,247,269,271,347,360,398,399,408,417,428,492,502,605],
e:[105,260,364,389,368,259],
t3:[809,808]
},{//Mawile
l:[[310,1],[45,1],[584,4],[226,8],[44,12],[254,16],[256,16],[255,16],[389,20],[334,24],[242,28],[230,32],[442,36],[269,40],[313,44],[583,48]],
m:[5,25,8,9,63,416,76,156,157,173,182,196,213,201,240,241,263,270,280,313,317,371,372,374,385,422,423,424,496,577,581,206,693,14,34,53,58,126,164,188,203,214,226,242,247,269,334,399,411,430,442,444,446,447,492,583,706],
e:[246,321,21,69,612],
t:[796]
},
,
,
,
,
,{//Electrike
l:[[33,1],[86,1],[43,4],[336,8],[98,12],[351,16],[44,20],[422,24],[46,28],[435,32],[268,36],[528,40],[87,44]],
m:[86,113,156,168,173,182,213,240,263,129,422,423,424,496,521,555,598,34,53,85,87,97,164,203,214,231,242,253,486,528,706],
e:[29,174,415,209],
t3:[804]
},{//Manectric
l:[[424,1],[33,1],[86,1],[43,1],[336,1],[98,12],[351,16],[44,20],[422,24],[46,30],[435,36],[268,42],[528,48],[87,54],[604,60]],
m:[63,416,86,113,156,168,173,182,184,213,240,263,129,422,423,424,496,521,555,604,598,34,53,85,87,97,164,203,214,231,242,253,304,315,486,528,706],
t3:[804]
},
,
,
,
,{//Roselia
l:[[40,0],[40,1],[71,1],[74,1],[78,1],[388,1],[72,5],[73,10],[345,15],[390,20],[230,25],[202,30],[235,35],[92,40],[572,45],[312,50],[275,55],[80,60]],
m:[42,345,76,156,173,182,202,213,240,241,263,129,311,331,474,496,14,34,164,188,191,203,214,247,253,390,398,402,412,437,438,447,605],
e:[178,79,75,326,791],
t3:[803]
},
,
,{//Carvanha
l:[[453,1],[43,1],[305,4],[116,8],[184,12],[44,16],[423,20],[103,24],[207,28],[242,32],[97,36],[710,40],[36,44]],
m:[103,156,168,173,182,184,196,213,240,258,250,263,129,291,340,362,371,372,423,496,514,555,56,57,58,59,97,116,127,164,203,214,242,253,269,399,428,503,706,710],
e:[246,194,38,37,352],
t3:[812,799]
},{//Sharpedo
l:[[163,0],[163,1],[400,1],[453,1],[43,1],[305,1],[116,1],[184,12],[44,16],[423,20],[103,24],[207,28],[242,34],[97,40],[710,46],[36,52]],
m:[63,416,103,156,168,173,182,184,196,213,240,258,250,263,129,291,317,340,362,371,372,419,423,496,514,523,555,56,57,58,59,89,97,116,127,164,203,214,242,253,269,370,398,399,428,503,706,710],
t3:[812,799]
},{//Wailmer
l:[[150,1],[45,3],[310,6],[55,12],[54,15],[352,18],[484,21],[362,24],[250,27],[291,30],[340,33],[34,36],[156,39],[133,42],[56,45],[323,48]],
m:[120,156,173,182,196,213,240,258,250,263,291,311,317,340,362,419,496,523,34,56,57,58,59,89,127,133,164,203,214,304,428,484,503,776],
e:[38,37,174,90,321,111,205,392,487],
t3:[798]
},{//Wailord
l:[[487,1],[568,1],[150,1],[45,1],[310,1],[55,1],[54,15],[352,18],[484,21],[362,24],[250,27],[291,30],[340,33],[34,36],[156,39],[133,44],[56,49],[323,54]],
m:[63,416,120,156,173,182,196,213,240,258,250,263,291,311,317,340,362,419,496,523,34,56,57,58,59,89,127,133,164,203,214,304,428,442,484,503,710,776],
t3:[798]
},
,
,{//Torkoal
l:[[123,1],[52,1],[110,4],[229,8],[108,12],[499,16],[172,20],[182,24],[436,28],[34,32],[334,36],[53,40],[174,44],[257,48],[133,52],[517,56],[504,60],[284,64]],
m:[63,416,76,83,120,156,157,173,182,213,241,261,263,311,317,496,523,707,34,53,89,126,133,164,188,203,214,231,257,276,315,334,360,414,444,446,535,776],
e:[281,90,130,175,246],
t3:[807,815]
},
,
,
,{//Trapinch
l:[[28,1],[310,1],[673,4],[44,8],[189,12],[328,16],[523,20],[91,24],[242,28],[201,32],[414,36],[89,40],[276,44],[90,48]],
m:[63,76,91,156,157,173,182,202,213,201,241,263,317,328,341,496,523,34,89,116,164,203,214,242,276,414],
e:[98,16,175,210,450,364,660],
t3:[815]
},{//Vibrava
l:[[225,0],[225,1],[673,1],[523,1],[91,1],[242,1],[276,1],[90,1],[28,1],[310,1],[48,1],[44,1],[189,12],[328,16],[525,20],[103,24],[405,28],[201,32],[414,38],[89,44],[253,50],[407,56],[586,62]],
m:[19,63,76,91,103,156,157,173,182,202,211,213,201,241,263,129,317,328,341,369,496,523,403,34,89,116,164,200,203,214,242,253,257,276,405,406,414,675],
t:[434],
t3:[815,814]
},{//Flygon
l:[[337,0],[337,1],[225,1],[349,1],[364,1],[673,1],[523,1],[91,1],[242,1],[276,1],[90,1],[28,1],[310,1],[48,1],[44,1],[189,12],[328,16],[525,20],[103,24],[405,28],[201,32],[414,38],[89,44],[253,52],[407,60],[586,68]],
m:[5,25,7,9,19,63,416,76,83,91,103,156,157,173,182,202,211,213,201,241,263,129,317,328,341,369,496,523,403,693,784,34,53,89,116,126,164,200,203,214,231,242,253,257,276,337,349,405,406,414,444,675],
t:[434],
t3:[815,814,799]
},
,
,
,
,
,
,{//Lunatone
l:[[585,1],[236,1],[33,1],[106,1],[93,1],[88,1],[95,5],[397,10],[157,15],[473,20],[322,25],[94,30],[444,35],[248,40],[478,45],[153,50]],
m:[63,416,113,115,219,120,156,157,173,182,196,201,240,258,263,129,270,311,317,328,350,384,433,478,496,512,523,678,707,34,58,59,89,94,164,473,203,214,226,247,248,285,322,347,360,408,414,417,428,442,444,446,447,500,502],
t3:[800]
},{//Solrock
l:[[394,1],[234,1],[33,1],[106,1],[93,1],[88,1],[95,5],[397,10],[157,15],[428,20],[322,25],[94,30],[444,35],[76,40],[472,45],[153,50]],
m:[63,416,76,83,113,115,219,120,156,157,173,182,201,240,241,261,263,129,270,311,317,328,350,384,433,472,496,512,523,678,707,14,34,53,89,94,126,164,473,203,214,226,247,257,285,315,322,334,347,360,394,414,428,442,444,446,447,500,502],
t3:[800]
},{//Barboach
l:[[189,1],[55,1],[156,6],[173,6],[352,12],[133,18],[401,24],[330,31],[89,36],[248,42],[90,48]],
m:[156,173,182,196,213,201,240,258,250,263,291,317,340,341,496,523,56,57,58,59,89,127,133,164,203,214,248,330,349,414,503],
e:[37,209,175,36]
},{//Whiscash
l:[[37,0],[37,1],[562,1],[428,1],[321,1],[189,1],[55,1],[156,1],[173,1],[352,12],[133,18],[401,24],[330,33],[89,40],[248,48],[90,56]],
m:[63,416,156,157,173,182,196,213,201,240,258,250,263,291,311,317,328,340,341,496,523,707,56,57,58,59,89,127,133,164,203,214,248,253,330,349,414,428,444,503,710]
},{//Corphish
l:[[55,1],[106,1],[43,4],[269,8],[61,12],[282,16],[458,20],[182,24],[400,28],[534,32],[14,36],[242,40],[152,44],[283,48],[12,52]],
m:[91,156,157,173,182,196,213,240,258,250,263,280,317,341,371,374,496,534,206,14,34,56,57,58,59,127,164,188,203,214,242,269,276,330,334,349,404,503],
e:[246,232,38,453,415,163]
},{//Crawdaunt
l:[[129,0],[129,1],[55,1],[106,1],[43,1],[269,1],[61,12],[282,16],[458,20],[182,24],[400,28],[534,34],[14,40],[242,46],[152,52],[283,58],[12,64]],
m:[63,416,91,156,157,173,182,196,213,240,258,250,263,129,279,280,291,317,341,371,374,419,496,514,534,555,206,14,34,56,57,58,59,127,164,188,203,214,242,269,276,330,334,349,370,399,404,417,482,503,710],
t3:[808]
},{//Baltoy
l:[[106,1],[189,1],[229,3],[93,6],[317,9],[379,12],[60,15],[246,18],[286,21],[322,24],[326,27],[414,30],[120,33],[470,36],[471,36],[201,39],[153,42]],
m:[76,91,113,115,219,120,156,157,173,182,201,240,241,263,286,317,328,384,385,433,472,496,506,523,678,598,58,89,94,164,473,203,214,247,271,285,322,347,360,414,428,446,447,502,529,605],
t3:[815,797]
},{//Claydol
l:[[63,0],[63,1],[100,1],[106,1],[189,1],[229,1],[93,1],[317,9],[379,12],[60,15],[246,18],[286,21],[322,24],[326,27],[414,30],[120,33],[470,38],[471,38],[201,43],[153,48]],
m:[63,416,76,91,113,115,219,120,156,157,173,182,201,240,241,263,286,317,328,384,385,433,472,496,506,523,678,598,58,89,94,164,473,203,214,247,248,271,285,322,334,347,360,414,417,428,444,446,447,500,502,529,605,776],
t3:[815,797]
},
,
,
,
,{//Feebas
l:[[150,1],[33,15],[175,25]],
m:[113,156,173,182,196,213,240,258,250,263,129,291,341,362,496,57,58,59,127,164,203,214,231,330,406,503],
e:[243,225,95,109,54,114,321],
t3:[799]
},{//Milotic
l:[[352,0],[352,1],[175,1],[150,1],[33,1],[35,1],[55,1],[574,4],[239,8],[392,12],[213,16],[791,20],[525,24],[105,28],[401,32],[219,36],[57,40],[240,44],[489,48],[56,52]],
m:[63,416,113,219,156,173,182,196,213,240,258,250,263,129,270,286,291,311,341,362,419,496,523,693,784,34,56,57,58,59,127,164,203,214,231,330,349,406,442,503],
t3:[812,813,806,799]
},
,
,
,
,{//Duskull
l:[[310,1],[43,1],[50,4],[425,8],[109,12],[101,16],[371,20],[261,24],[212,28],[506,32],[174,36],[247,40],[248,44]],
m:[156,168,173,182,196,213,240,241,261,263,270,279,286,371,374,433,472,496,506,34,58,59,94,164,203,214,247,248,269,271,285,347,399,502],
e:[220,288,262,114],
t3:[806,809]
},{//Dusclops
l:[[325,0],[325,1],[7,1],[8,1],[9,1],[356,1],[20,1],[310,1],[43,1],[50,1],[425,1],[109,12],[101,16],[371,20],[261,24],[212,28],[506,32],[174,36],[247,42],[248,48]],
m:[5,25,7,8,9,63,416,156,157,168,173,182,196,213,240,241,261,263,270,279,280,286,317,371,374,433,472,496,506,523,34,58,59,89,94,118,164,203,214,247,248,269,271,285,347,399,502],
t3:[806,809]
},
,
,
,{//Wynaut
l:[[68,1],[243,1],[219,1],[194,1],[150,1],[204,1],[227,1],[133,1]],
m:[219,204,133,227]
},{//Snorunt
l:[[181,1],[310,1],[43,5],[104,10],[420,15],[182,20],[196,25],[524,30],[44,35],[423,40],[258,45],[29,50],[242,55],[59,60]],
m:[113,219,156,173,182,196,213,240,258,263,311,313,419,423,496,506,34,58,59,164,191,203,214,242,247],
e:[335,50,415,205,556]
},{//Glalie
l:[[573,0],[573,1],[329,1],[181,1],[310,1],[43,1],[104,1],[420,15],[182,20],[196,25],[524,30],[44,35],[423,40],[258,47],[29,54],[242,61],[59,68]],
m:[63,416,113,219,120,156,173,182,184,196,213,240,258,263,311,313,333,371,419,423,496,506,523,34,58,59,89,164,191,203,214,242,247,269,360,399,442],
t3:[798]
},
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,{//Jirachi
l:[[93,1],[273,1],[129,7],[270,14],[791,21],[428,28],[356,35],[94,42],[309,49],[361,56],[156,63],[248,70],[38,77],[322,84],[387,91],[353,98]],
m:[5,25,7,8,9,63,416,86,113,115,219,156,173,182,196,204,201,240,241,263,129,270,286,369,374,409,433,478,496,34,85,87,94,118,133,164,473,203,214,226,227,247,248,253,271,285,322,334,347,396,412,428,430,442,446,447,500,502,583,605],
t:[796],
t3:[797,800]
},
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,{//Shinx
l:[[33,1],[43,1],[84,4],[268,8],[44,12],[209,16],[46,20],[521,24],[184,28],[86,32],[242,36],[435,40],[207,44],[528,48]],
m:[86,113,156,168,173,182,184,213,240,263,129,270,313,422,423,424,496,521,555,598,85,87,164,203,214,231,242,486,528,583,706],
e:[608,36,24,336,400,98,351],
t3:[804]
},{//Luxio
l:[[33,1],[43,1],[84,1],[268,1],[44,12],[209,18],[46,24],[521,31],[184,36],[86,42],[242,48],[435,54],[207,60],[528,68]],
m:[86,113,156,168,173,182,184,213,240,263,129,270,313,422,423,424,496,521,555,598,85,87,164,203,214,231,242,486,528,583,706],
t3:[804]
},{//Luxray
l:[[604,1],[33,1],[43,1],[84,1],[268,1],[44,12],[209,18],[46,24],[521,33],[184,40],[86,48],[242,56],[435,64],[207,72],[528,80]],
m:[63,416,86,113,156,168,173,182,184,213,240,263,129,270,313,422,423,424,496,521,555,604,598,85,87,97,164,203,214,231,242,276,486,528,583,675,706],
t3:[804]
},{//Budew
l:[[71,1],[74,1],[78,1],[388,1]],
m:[42,76,156,173,182,202,213,240,241,263,129,311,331,474,496,14,164,188,191,203,214,247,253,402,412,437,447,605],
e:[235,178,79,75,326,791],
t3:[803]
},{//Roserade
l:[[580,1],[40,1],[599,1],[72,1],[73,1],[345,1],[390,1],[230,1],[202,1],[235,1],[92,1],[572,1],[312,1],[275,1],[80,1],[71,1],[74,1],[78,1],[388,1]],
m:[42,63,416,345,76,156,173,182,202,213,240,241,263,129,311,331,474,496,580,14,34,164,188,191,203,214,247,253,390,398,402,412,437,438,447,599,605],
t3:[803]
},
,
,
,
,
,
,
,{//Combee
l:[[230,1],[16,1],[522,1],[450,1]],
m:[173,405],
t3:[814]
},{//Vespiquen
l:[[163,0],[163,1],[522,1],[450,1],[230,1],[16,1],[40,1],[109,1],[210,4],[597,8],[565,12],[154,16],[207,20],[312,24],[403,28],[408,32],[92,36],[454,40],[455,40],[194,44]],
m:[42,63,416,103,156,168,173,182,213,240,241,251,263,129,279,369,372,374,440,474,496,506,512,403,164,179,188,203,214,253,390,404,405,408],
t3:[814]
},
,
,
,{//Cherubi
l:[[234,1],[33,1],[670,5],[74,10],[270,15],[345,20],[73,26],[36,30],[572,35],[388,40],[76,45]],
m:[345,76,219,156,173,182,202,213,241,263,270,311,331,496,577,580,14,164,203,214,402,412,447,605,676],
e:[75,230,321,267,312,505,361,111,579,205],
t3:[803]
},{//Cherrim
l:[[241,0],[241,1],[579,1],[234,1],[33,1],[670,1],[74,1],[270,15],[345,20],[73,28],[36,34],[572,41],[388,48],[76,55],[80,62]],
m:[63,416,345,76,669,219,156,173,182,202,213,241,263,270,311,331,496,577,580,14,164,203,214,402,412,447,583,605,676],
t3:[803]
},{//Shellos
l:[[55,1],[189,1],[106,5],[105,10],[352,15],[246,20],[34,25],[330,31],[414,35],[240,40],[262,45]],
m:[156,173,182,196,213,240,258,250,263,291,341,362,496,34,56,57,58,59,133,164,203,214,330,414,503],
e:[68,243,254,256,255,281,174,124,499,54,151],
t3:[806]
},{//Gastrodon
l:[[55,1],[189,1],[106,1],[105,1],[352,15],[246,20],[34,25],[330,33],[414,39],[240,46],[262,53]],
m:[63,416,91,156,157,173,182,196,213,201,240,258,250,263,291,311,317,328,341,362,496,523,707,34,56,57,58,59,89,127,133,164,188,203,214,330,414,444,482,503],
t3:[806]
},
,{//Drifloon
l:[[107,1],[310,1],[16,4],[116,8],[371,12],[506,16],[247,20],[254,24],[256,24],[255,24],[120,29],[194,32],[226,36],[366,40],[153,44]],
m:[86,120,156,168,173,182,196,213,240,241,261,263,129,311,371,496,506,512,693,34,85,87,94,116,133,164,203,214,226,247,271,285,347,360,502],
e:[262,50,114,95,499,432]
},{//Drifblim
l:[[566,0],[566,1],[668,1],[107,1],[310,1],[16,1],[116,1],[371,12],[506,16],[247,20],[254,24],[256,24],[255,24],[120,31],[194,36],[226,42],[366,48],[153,54]],
m:[19,63,416,86,120,156,168,173,182,196,213,240,241,261,263,129,286,311,371,496,506,512,566,693,34,85,87,94,116,133,164,203,214,226,247,271,285,347,360,502]
},{//Buneary
l:[[150,1],[1,1],[111,4],[608,8],[495,12],[98,16],[24,20],[204,24],[226,28],[29,32],[97,36],[494,40],[260,44],[340,48],[361,52]],
m:[5,25,7,8,9,76,86,91,156,173,182,204,213,240,241,263,129,270,313,340,371,372,374,409,490,496,514,58,67,85,97,164,203,214,226,227,231,247,253,304,322,447,526,583],
e:[509,383,458,252,175,264,186,415,298],
t3:[813]
},{//Lopunny
l:[[243,1],[277,1],[150,1],[1,1],[111,1],[608,1],[495,12],[98,16],[24,20],[204,24],[226,28],[29,32],[97,36],[494,40],[260,44],[340,48],[361,52],[136,56]],
m:[5,25,7,8,9,63,416,76,86,91,156,173,182,204,213,240,241,263,129,270,313,340,369,371,372,374,409,490,496,512,514,693,58,59,67,85,87,97,164,179,203,214,226,227,231,247,253,304,322,370,396,411,447,526,583],
t3:[813]
},
,
,
,
,
,{//Stunky
l:[[139,1],[10,1],[364,3],[108,6],[491,9],[154,12],[116,15],[44,18],[474,21],[103,24],[92,27],[389,30],[262,33],[400,36],[562,39],[599,42],[153,45]],
m:[91,103,156,168,173,182,184,213,240,241,263,129,371,372,421,474,496,506,541,555,53,116,126,164,188,203,214,231,242,247,269,399,417,492,583,599,675],
e:[43,123,38,310,114,163],
t3:[810,808]
},{//Skuntank
l:[[53,0],[53,1],[139,1],[10,1],[364,1],[108,1],[491,9],[154,12],[116,15],[44,18],[474,21],[103,24],[92,27],[389,30],[262,33],[400,38],[562,43],[599,48],[153,53]],
m:[63,416,83,91,103,156,168,173,182,184,213,240,241,263,129,371,372,421,474,496,506,541,555,53,116,126,164,188,203,214,231,242,247,269,398,399,417,492,583,599,675],
t3:[807,810,808]
},{//Bronzor
l:[[33,1],[93,1],[109,4],[371,8],[286,12],[360,16],[95,20],[219,24],[326,28],[484,32],[334,36],[319,40],[248,44]],
m:[76,113,115,219,156,157,173,182,201,240,241,263,286,317,371,384,385,683,433,472,496,506,523,89,94,164,473,203,214,247,248,271,285,334,347,360,430,446,447,484,502],
t:[796],
t3:[797,798]
},{//Bronzong
l:[[335,0],[335,1],[241,1],[311,1],[33,1],[93,1],[109,1],[371,1],[286,12],[360,16],[95,20],[219,24],[326,28],[484,32],[334,38],[319,44],[248,50],[240,56]],
m:[63,416,76,113,115,219,156,157,173,182,201,240,241,263,286,311,317,371,384,385,683,433,472,496,506,523,678,89,94,164,473,203,214,247,248,271,285,334,347,360,428,430,442,446,447,484,502,776],
t:[796],
t3:[797,800,798]
},{//Bonsly
l:[[313,1],[383,1],[175,4],[88,8],[335,12],[102,16],[317,20],[715,24],[389,28],[157,32],[67,36],[68,40],[38,44]],
m:[91,120,156,157,168,173,182,213,201,241,263,270,280,313,317,328,496,707,67,164,203,214,253,347,414,446,492],
e:[29,106,111,174,205,397]
},{//Mime Jr.
l:[[1,1],[383,1],[226,4],[227,8],[93,12],[272,16],[182,20],[278,24],[60,28],[102,32],[113,36],[115,36],[219,36],[389,40],[605,44],[94,48],[298,52]],
m:[76,86,113,115,219,156,168,173,182,196,204,213,240,241,263,270,280,374,409,433,472,478,496,581,678,85,87,94,164,473,203,214,226,227,247,248,253,269,271,285,347,417,447,500,502,605],
e:[95,252,109,471,321]
},{//Happiny
l:[[107,1],[1,1],[383,1],[111,4],[186,8],[574,12],[343,16],[204,20]],
m:[76,86,113,219,156,173,182,196,204,213,240,241,258,263,270,374,409,496,53,94,118,126,164,203,214,247,253,304,428,447,500,526],
e:[312,356,217,69]
},
,
,
,
,
,{//Munchlax
l:[[122,1],[33,1],[111,4],[278,8],[343,12],[44,16],[254,20],[256,20],[103,24],[34,28],[374,32],[133,36],[118,40],[175,44],[187,48],[387,52]],
m:[5,25,6,7,8,9,76,103,120,156,157,173,182,196,204,213,201,240,241,250,263,280,317,374,496,514,523,707,34,53,56,57,58,59,85,87,89,94,118,126,133,164,203,214,227,247,253,276,304,402,428,441,526],
e:[38,174,90,68,562]
},{//Riolu
l:[[98,1],[203,1],[364,4],[232,8],[68,12],[526,16],[249,20],[417,24],[103,28],[501,32],[395,36],[14,40],[270,44],[383,48],[515,52],[179,56]],
m:[5,25,8,9,91,103,156,157,173,182,213,240,241,263,129,270,279,280,317,371,374,409,421,490,496,514,523,14,67,89,97,164,179,203,214,231,242,299,334,339,398,411,417,428,526],
e:[238,197,44,170,136,410,418,509,336],
t3:[811]
},{//Lucario
l:[[396,0],[396,1],[791,1],[526,1],[249,1],[417,1],[103,1],[395,1],[270,1],[383,1],[515,1],[179,1],[98,1],[197,1],[364,1],[232,1],[68,12],[673,16],[612,20],[347,24],[319,28],[501,32],[198,36],[14,40],[505,44],[309,48],[406,52],[245,56],[370,60]],
m:[5,25,8,9,63,416,91,103,156,157,173,182,184,213,240,241,263,129,270,279,280,317,371,374,409,421,490,496,514,523,14,67,89,94,97,116,164,179,203,214,231,242,247,299,334,339,347,370,396,398,399,406,411,417,428,430,444,526],
t:[796],
t3:[805,811]
},{//Hippopotas
l:[[33,1],[28,1],[44,4],[281,8],[328,12],[91,16],[242,20],[201,24],[36,28],[46,32],[156,36],[89,40],[38,44],[90,48],[303,52]],
m:[91,156,157,173,182,213,201,241,263,279,311,317,328,341,496,523,707,34,89,133,164,203,214,231,242,276,330,414,446,667],
e:[254,256,255,174,18],
t3:[815]
},{//Hippowdon
l:[[423,1],[424,1],[422,1],[33,1],[28,1],[44,1],[281,1],[328,12],[91,16],[242,20],[201,24],[36,28],[46,32],[156,38],[89,44],[38,50],[90,56],[303,62]],
m:[63,416,91,156,157,173,182,213,201,241,263,279,311,317,328,341,422,423,424,496,523,707,34,89,133,164,203,214,231,242,276,330,414,442,444,446,484,667,776],
t3:[815]
},{//Skorupi
l:[[40,1],[43,1],[468,3],[565,6],[305,9],[44,12],[390,15],[450,18],[474,21],[282,24],[184,27],[42,30],[92,33],[400,36],[440,39],[404,42],[367,45],[242,48]],
m:[42,91,103,156,168,173,182,184,213,240,241,263,280,317,371,372,374,440,474,496,206,14,97,164,188,203,214,231,242,247,269,390,398,399,404,405],
e:[28,163,109,18],
t3:[806]
},{//Drapion
l:[[422,1],[423,1],[424,1],[40,1],[43,1],[468,1],[565,1],[305,9],[44,12],[390,15],[450,18],[474,21],[282,24],[184,27],[42,30],[92,33],[400,36],[440,39],[404,44],[367,49],[242,54]],
m:[42,63,416,91,103,156,157,168,173,182,184,213,240,241,263,280,317,328,371,372,374,422,423,424,440,474,496,514,523,555,206,693,707,14,89,97,141,164,188,203,214,231,242,247,269,334,390,398,399,404,405,599,675],
t3:[806,808]
},{//Croagunk
l:[[40,1],[189,1],[310,4],[269,8],[260,12],[279,16],[474,20],[389,24],[207,28],[398,32],[92,36],[417,40],[188,44],[562,48]],
m:[5,25,8,9,91,103,156,157,168,173,182,196,213,240,241,263,270,279,280,317,340,371,372,374,409,474,490,496,514,523,67,89,164,188,203,214,226,227,247,269,339,398,399,404,411,417,441,482,492,526,599],
e:[364,223,29,410,252,238,418,68,501],
t3:[811,808]
},{//Toxicroak
l:[[40,1],[189,1],[310,1],[269,1],[260,12],[279,16],[474,20],[389,24],[207,28],[398,32],[92,36],[417,42],[188,48],[562,54]],
m:[5,25,8,9,63,416,91,103,156,157,168,173,182,196,213,240,241,263,270,279,280,317,340,371,372,374,409,440,474,490,496,514,523,14,67,89,164,188,203,214,226,227,247,269,339,398,399,404,411,417,441,444,482,492,526,599,675],
t3:[811,810,808]
},
,
,
,{//Mantyke
l:[[33,1],[55,1],[48,4],[17,8],[352,12],[469,16],[97,20],[61,24],[29,28],[403,32],[392,36],[340,40],[36,44],[56,48]],
m:[156,157,173,182,196,213,240,258,250,263,129,270,291,340,496,512,523,403,56,57,58,59,89,97,127,133,164,203,214,503],
e:[239,114,21,243,150,366,109]
},{//Snover
l:[[181,1],[43,1],[670,5],[54,10],[420,15],[75,20],[196,25],[207,30],[275,35],[452,41],[59,45],[329,50]],
m:[5,8,345,76,113,219,156,173,182,196,202,213,240,258,263,311,331,419,496,14,58,59,164,203,214,231,247,402,412,447],
e:[73,74,38,23,130],
t3:[803]
},{//Abomasnow
l:[[8,0],[8,1],[694,1],[181,1],[43,1],[670,1],[54,1],[420,15],[75,20],[196,25],[207,30],[275,35],[452,43],[59,49],[329,56]],
m:[5,25,8,63,416,345,76,113,219,156,157,173,182,196,202,213,240,258,263,280,311,317,331,333,374,419,496,523,707,14,58,59,89,164,200,203,214,231,247,402,411,412,414,437,447],
t3:[803]
},{//Weavile
l:[[279,1],[372,1],[98,1],[251,1],[97,1],[163,1],[10,1],[43,1],[269,1],[420,1],[232,18],[196,24],[154,30],[468,36],[374,42],[417,48],[103,54],[400,60],[399,66]],
m:[5,25,8,63,416,91,103,115,156,168,173,182,196,213,240,241,258,250,251,263,129,279,280,313,333,371,372,374,419,421,427,490,496,514,555,206,14,57,58,59,67,97,164,203,214,231,247,269,347,398,399,404,411,417,492,675],
t3:[813,808]
},{//Magnezone
l:[[161,1],[604,1],[602,1],[243,1],[84,1],[33,1],[48,1],[86,1],[486,12],[360,16],[209,20],[103,24],[393,28],[430,34],[435,40],[319,46],[113,52],[199,58],[192,64]],
m:[63,416,86,103,113,115,120,156,173,182,240,241,263,129,496,521,527,604,85,87,161,164,203,214,334,360,430,442,484,486,502,528,776],
t3:[804,798]
},{//Lickilicky
l:[[122,1],[111,1],[205,1],[48,1],[35,18],[50,24],[23,30],[282,36],[103,42],[21,48],[438,54],[187,60]],
m:[5,25,7,8,9,63,416,76,91,103,120,156,157,168,173,182,196,213,201,240,241,250,263,270,280,317,374,496,514,523,693,707,14,34,53,56,57,58,59,85,87,89,126,133,164,203,214,231,247,330,360,411,428,438,526,776],
t3:[805,798]
},{//Rhyperior
l:[[359,1],[33,1],[39,1],[479,1],[523,1],[30,15],[184,20],[23,25],[350,30],[529,35],[36,40],[89,47],[444,54],[224,61],[32,68],[439,75]],
m:[5,25,6,7,8,9,63,416,91,156,157,168,173,182,184,196,213,201,240,241,250,263,270,280,317,341,350,371,374,419,421,422,423,424,496,523,684,693,707,784,14,34,53,56,57,58,59,85,87,89,126,164,179,200,203,214,224,231,242,253,276,334,398,406,411,414,430,442,444,446,484,529,535,667,776],
t3:[815,800]
},{//Tangrowth
l:[[335,1],[71,1],[20,1],[78,1],[74,1],[72,12],[22,16],[77,20],[246,24],[282,28],[202,32],[79,36],[21,40],[321,44],[438,48],[275,52],[580,56]],
m:[63,416,76,669,115,156,157,168,173,182,202,213,241,263,280,317,331,371,374,384,496,523,580,693,707,14,34,89,133,164,188,203,214,398,402,411,412,437,438,447],
t3:[803]
},
,
,{//Togekiss
l:[[403,0],[403,1],[584,1],[143,1],[396,1],[245,1],[161,1],[204,1],[246,1],[281,1],[118,1],[495,1],[38,1],[219,1],[266,1],[226,1],[387,1],[273,1],[45,1],[1,1],[186,1],[791,1]],
m:[5,25,19,63,416,345,76,86,113,115,219,156,173,182,204,211,213,240,241,263,129,270,280,286,374,409,496,514,577,595,403,684,34,53,94,118,126,133,161,164,473,203,214,226,227,247,248,253,257,271,304,396,417,428,447,500,502,526,583,605],
t3:[814]
},
,{//Leafeon
l:[[75,0],[75,1],[343,1],[129,1],[44,1],[383,1],[226,1],[36,1],[204,1],[38,1],[270,1],[33,1],[45,1],[39,1],[28,5],[98,10],[608,15],[73,20],[345,25],[235,30],[241,35],[202,40],[14,45],[348,50],[387,55]],
m:[6,63,416,345,76,669,91,156,173,182,202,204,213,240,241,263,129,270,311,313,331,496,514,14,34,116,164,203,214,226,231,247,304,348,402,404,412,437,447,500,526],
t3:[803]
},{//Glaceon
l:[[196,0],[196,1],[343,1],[129,1],[383,1],[226,1],[36,1],[204,1],[38,1],[270,1],[33,1],[45,1],[39,1],[28,5],[98,10],[608,15],[420,20],[44,25],[423,30],[258,35],[573,40],[243,45],[59,50],[387,55]],
m:[6,63,416,91,156,173,182,196,204,213,240,241,258,263,129,270,311,313,333,419,423,496,514,34,58,59,116,164,203,214,226,231,247,304,500,526],
t3:[813]
},
,{//Mamoswine
l:[[458,0],[458,1],[423,1],[246,1],[33,1],[189,1],[181,1],[175,1],[420,15],[54,20],[203,25],[196,30],[133,37],[36,44],[89,51],[59,58],[37,65]],
m:[63,416,91,113,115,156,157,173,182,184,196,213,201,240,258,263,317,328,333,341,350,419,423,496,523,707,34,58,59,89,133,164,203,214,276,414,442,444,446,484,667,776]
},{//Porygon-Z
l:[[433,1],[417,1],[111,1],[33,1],[160,1],[278,1],[393,1],[84,15],[60,20],[176,25],[97,30],[105,35],[435,40],[161,45],[277,50],[199,55],[192,60],[63,65]],
m:[63,416,76,86,156,168,173,182,196,240,241,263,129,384,385,683,433,472,496,527,598,58,59,85,87,94,97,161,164,473,203,214,231,247,253,271,399,417,428,492,502]
},{//Gallade
l:[[163,0],[163,1],[400,1],[45,1],[574,1],[95,1],[577,1],[286,1],[60,1],[791,1],[204,1],[347,1],[94,1],[138,1],[248,1],[43,1],[210,1],[104,1],[93,1],[270,9],[364,12],[100,15],[332,18],[206,23],[182,28],[14,35],[427,42],[505,49],[501,56],[469,56],[370,63]],
m:[5,25,7,8,9,63,416,345,669,86,113,115,219,156,157,168,173,182,196,204,213,240,241,261,263,129,270,279,280,286,317,374,409,427,433,472,478,490,496,514,523,577,581,206,403,14,34,67,85,89,94,164,179,473,203,214,227,247,248,269,271,285,304,339,347,348,370,396,398,404,411,412,428,444,447,500,502,526,605,675],
t3:[813,811,797]
},
,{//Dusknoir
l:[[325,1],[7,1],[8,1],[9,1],[356,1],[20,1],[310,1],[43,1],[50,1],[425,1],[109,12],[101,16],[371,20],[261,24],[212,28],[506,32],[174,36],[247,42],[248,48],[194,54]],
m:[5,25,7,8,9,63,416,156,157,168,173,182,196,213,240,241,261,263,270,279,280,286,317,371,374,433,472,496,506,523,34,58,59,89,94,118,164,203,214,247,248,269,271,285,347,399,411,502,663],
t3:[806,809]
},{//Froslass
l:[[506,0],[506,1],[194,1],[182,1],[44,1],[423,1],[29,1],[242,1],[181,1],[310,1],[43,1],[104,1],[420,15],[577,20],[196,25],[524,30],[109,35],[258,40],[261,47],[694,54],[247,61],[59,68]],
m:[8,63,416,86,113,115,219,156,173,182,196,204,213,240,258,261,263,286,311,313,333,371,374,419,423,496,506,577,34,58,59,85,87,94,164,191,203,214,242,247,269,271,502],
t3:[813,809]
},{//Rotom
l:[[310,1],[104,1],[84,5],[109,10],[268,15],[486,20],[86,25],[351,30],[506,35],[164,40],[271,45],[435,50],[253,55]],
m:[86,113,115,156,168,173,182,240,241,261,263,129,270,496,506,521,527,604,598,85,87,164,203,214,247,253,271,304,399,417,486,492,500,502],
t3:[804,809],
c:[84,315,56,59,403,437]
},
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,{//Lillipup
l:[[33,1],[43,1],[526,4],[44,8],[514,12],[608,17],[583,20],[242,24],[36,28],[270,32],[179,36],[46,40],[387,44],[416,48]],
m:[416,86,91,156,173,182,204,213,240,241,263,270,317,371,422,423,424,496,514,555,85,164,179,203,214,242,247,253,304,526,528,583,706],
e:[495,336,122,189,281,343]
},{//Herdier
l:[[33,1],[43,1],[526,1],[44,1],[514,12],[608,19],[583,24],[242,30],[36,36],[270,42],[179,48],[46,54],[387,60],[416,66]],
m:[416,86,91,156,173,182,204,213,240,241,263,270,317,371,422,423,424,496,514,555,57,85,164,179,203,214,242,247,253,304,526,528,583,706]
},{//Stoutland
l:[[423,1],[424,1],[422,1],[33,1],[43,1],[526,1],[44,1],[514,12],[608,19],[583,24],[242,30],[36,38],[270,46],[179,54],[46,62],[387,70],[416,78]],
m:[63,416,86,91,156,173,182,204,213,240,241,263,270,317,371,422,423,424,496,514,555,707,57,85,87,164,179,203,214,242,247,253,276,304,442,526,528,583,706]
},{//Purrloin
l:[[10,1],[45,1],[28,4],[252,5],[154,12],[259,16],[372,21],[468,24],[389,28],[417,32],[400,36],[583,40]],
m:[6,86,103,156,168,173,182,204,213,240,241,263,129,313,369,371,372,421,496,555,164,203,214,226,227,231,247,269,271,304,399,402,417,441,447,492,583],
e:[281,343,383,163,104,98],
t3:[808]
},{//Liepard
l:[[10,1],[45,1],[28,1],[252,1],[154,12],[259,16],[372,23],[468,28],[389,34],[417,40],[400,46],[583,52]],
m:[6,63,416,86,103,156,168,173,182,204,213,240,241,263,129,313,369,371,372,421,427,496,555,164,203,214,226,227,231,247,269,271,304,399,402,417,441,447,492,583,675],
t3:[807,806,808]
},
,
,
,
,
,
,{//Munna
l:[[500,1],[111,1],[95,4],[60,8],[286,12],[236,16],[277,20],[428,24],[347,28],[281,32],[94,36],[585,40],[138,44],[248,48],[472,52]],
m:[86,113,115,219,156,157,173,182,213,240,263,129,270,286,317,384,385,433,472,496,94,133,164,473,203,214,247,248,271,285,347,360,412,428,500,502,605],
e:[174,361],
t3:[797]
},{//Musharna
l:[[678,1],[286,1],[236,1],[277,1],[428,1],[347,1],[281,1],[94,1],[585,1],[138,1],[248,1],[472,1],[500,1],[111,1],[95,1],[60,1]],
m:[63,416,86,113,115,219,156,157,173,182,213,240,263,129,270,286,317,384,385,433,472,496,678,94,133,164,473,203,214,247,248,271,285,347,360,412,428,500,502,605],
t3:[797,802]
},{//Pidove
l:[[16,1],[45,1],[43,4],[98,8],[269,12],[314,16],[207,20],[297,24],[197,28],[403,32],[355,36],[366,40],[143,44]],
m:[19,156,173,182,211,213,240,241,263,129,369,496,403,97,116,164,203,214,253,257,269,526],
e:[95,273,234,400,432],
t3:[814]
},{//Tranquill
l:[[16,1],[45,1],[43,1],[98,1],[269,12],[314,16],[207,20],[297,26],[197,34],[403,38],[355,44],[366,50],[143,56]],
m:[19,156,173,182,211,213,240,241,263,129,369,496,403,97,116,164,203,214,253,257,269,526],
t3:[814]
},{//Unfezant
l:[[16,1],[45,1],[43,1],[98,1],[269,12],[314,16],[207,20],[297,26],[197,36],[403,42],[355,50],[366,58],[143,66]],
m:[19,63,416,156,173,182,211,213,240,241,263,129,369,496,403,97,116,164,203,214,253,257,269,413,526,542],
t3:[814]
},
,
,{//Roggenrola
l:[[28,1],[33,1],[106,4],[446,8],[189,12],[479,16],[334,20],[29,24],[157,28],[350,32],[201,36],[444,40],[153,44]],
m:[156,157,173,182,213,201,263,317,328,350,496,523,89,164,203,214,334,414,430,444,446,484,776],
e:[174,475,36,356,469],
t3:[800]
},{//Boldore
l:[[408,0],[408,1],[28,1],[33,1],[106,1],[446,1],[189,12],[479,16],[334,20],[29,24],[157,30],[350,36],[201,42],[444,48],[153,54]],
m:[156,157,173,182,213,201,263,317,328,350,496,523,707,89,164,203,214,334,408,414,430,444,446,484,776],
t3:[800]
},{//Gigalith
l:[[408,1],[28,1],[33,1],[106,1],[446,1],[189,12],[479,16],[334,20],[29,24],[157,30],[350,36],[201,42],[444,48],[153,54]],
m:[63,416,76,120,156,157,173,182,213,201,263,311,317,328,350,496,523,707,89,164,203,214,276,334,408,414,430,442,444,446,484,675,776],
t3:[800]
},{//Woobat
l:[[16,1],[213,1],[93,5],[283,10],[314,15],[286,20],[372,25],[133,30],[403,35],[94,40],[347,45],[248,50],[493,55]],
m:[19,86,113,115,219,156,168,173,182,202,204,211,213,240,263,129,270,286,313,369,372,683,427,433,496,512,403,94,133,164,473,203,214,226,247,248,253,257,269,271,285,347,360,412,417,428,500,502,599],
e:[282,48,355,260,375],
t3:[814,797]
},{//Swoobat
l:[[16,1],[213,1],[93,1],[283,1],[314,15],[286,20],[372,25],[133,30],[403,35],[94,40],[347,45],[248,50],[493,55]],
m:[19,63,416,86,113,115,219,156,168,173,182,202,204,211,213,240,263,129,270,286,313,369,372,683,427,433,496,512,403,94,133,164,473,203,214,226,247,248,253,257,269,271,285,347,360,412,417,428,500,502,599,706],
t3:[814,797]
},{//Drilbur
l:[[189,1],[229,1],[10,4],[468,8],[154,12],[232,16],[201,20],[306,24],[157,28],[91,32],[14,36],[529,40],[89,44],[90,48]],
m:[91,156,157,173,182,213,201,263,280,317,328,341,374,421,496,523,14,89,164,188,203,214,334,398,404,414,446,529,667],
e:[319,66,163],
t3:[815]
},{//Excadrill
l:[[32,0],[32,1],[189,1],[229,1],[10,1],[468,1],[154,12],[232,16],[201,20],[306,24],[157,28],[91,34],[14,40],[529,46],[89,52],[90,58]],
m:[63,416,91,156,157,173,182,213,201,263,280,317,328,341,350,374,421,496,523,684,693,707,14,89,164,188,203,214,334,398,404,411,414,442,446,529,667],
t:[796],
t3:[815]
},
,{//Timburr
l:[[1,1],[43,1],[67,4],[88,8],[116,12],[339,16],[157,20],[21,24],[184,28],[223,32],[359,36],[444,40],[276,44],[264,48]],
m:[5,25,7,8,9,91,156,157,173,182,184,213,240,241,263,270,279,280,317,371,374,409,490,496,514,693,67,116,164,179,203,214,269,276,339,398,411,444,447,526],
e:[68,197,469,183,612,432],
t3:[811]
},{//Gurdurr
l:[[1,1],[43,1],[67,1],[88,1],[116,12],[339,16],[157,20],[21,24],[184,30],[223,36],[359,42],[444,48],[276,54],[264,60]],
m:[5,25,7,8,9,91,156,157,173,182,184,213,240,241,263,270,279,280,317,371,374,409,490,496,514,693,67,116,164,179,203,214,269,276,339,370,398,411,444,447,526,667],
t3:[811]
},{//Conkeldurr
l:[[1,1],[43,1],[67,1],[88,1],[116,12],[339,16],[157,20],[21,24],[184,30],[223,36],[359,42],[444,48],[276,54],[264,60]],
m:[5,25,7,8,9,63,416,91,156,157,173,182,184,213,240,241,263,270,279,280,317,350,371,374,409,490,496,514,523,693,707,67,89,116,164,179,203,214,269,276,339,370,398,411,444,447,526,667],
t3:[811]
},{//Tympole
l:[[497,1],[45,1],[51,4],[48,8],[341,12],[496,16],[61,20],[175,24],[253,28],[392,32],[304,36],[330,40],[240,44],[56,48]],
m:[103,156,173,182,196,213,240,258,263,311,340,341,496,56,57,164,188,203,214,253,304,330,414,482,503,599],
e:[352,54,92,189]
},{//Palpitoad
l:[[497,1],[45,1],[51,1],[48,1],[341,12],[496,16],[61,20],[175,24],[253,30],[392,37],[304,42],[330,48],[240,54],[56,60]],
m:[103,156,173,182,196,213,240,258,263,311,340,341,496,523,56,57,164,188,203,214,253,304,330,414,438,446,482,503,599]
},{//Seismitoad
l:[[409,0],[409,1],[380,1],[497,1],[45,1],[51,1],[48,1],[341,12],[496,16],[61,20],[175,24],[253,30],[392,39],[304,46],[330,54],[240,62],[56,70]],
m:[5,25,8,63,416,91,103,156,157,173,182,196,213,240,258,263,280,291,311,317,340,341,371,374,409,474,496,523,707,56,57,67,89,164,188,203,214,253,304,330,398,411,414,438,446,447,482,503,599,710]
},{//Throh
l:[[20,1],[43,1],[116,5],[509,10],[469,15],[279,20],[339,25],[480,30],[233,35],[69,40],[203,45],[179,50],[276,55]],
m:[5,25,7,8,9,416,91,156,157,173,182,184,213,240,241,263,270,279,280,317,371,374,490,496,514,523,707,34,67,89,116,164,179,203,214,269,276,339,398,411,428,444,447,526],
t3:[811]
},{//Sawk
l:[[249,1],[43,1],[116,5],[24,10],[501,15],[490,20],[339,25],[514,30],[280,35],[68,40],[203,45],[179,50],[370,55]],
m:[5,25,7,8,9,416,91,156,157,173,182,184,213,240,241,263,270,279,280,317,371,374,490,496,514,523,67,89,116,164,179,203,214,269,276,339,370,398,411,428,444,447,526,675],
t3:[811]
},
,
,
,{//Venipede
l:[[40,1],[111,1],[205,4],[182,8],[342,12],[103,16],[450,20],[474,24],[36,28],[97,32],[92,36],[599,40],[38,44]],
m:[42,76,103,156,173,182,213,241,263,371,474,496,506,97,164,188,191,203,214,334,360,390,398,599],
e:[44,210],
t3:[806,798]
},{//Whirlipede
l:[[334,0],[334,1],[40,1],[111,1],[205,1],[182,1],[342,12],[103,16],[450,20],[474,26],[36,32],[97,38],[92,44],[599,50],[38,56]],
m:[42,76,103,156,173,182,213,241,263,371,474,496,506,97,164,188,191,203,214,334,360,390,398,599],
t3:[806,798]
},{//Scolipede
l:[[334,1],[226,1],[40,1],[111,1],[205,1],[182,1],[342,12],[103,16],[450,20],[474,26],[36,34],[97,42],[92,50],[599,58],[38,66],[224,74]],
m:[42,63,416,76,91,103,156,157,173,182,213,241,263,317,371,372,440,474,496,506,523,684,707,14,89,97,164,188,191,203,214,224,226,231,276,334,360,390,398,404,599,675],
t3:[806,798]
},{//Cottonee
l:[[71,1],[270,1],[584,3],[78,6],[72,12],[75,15],[74,18],[77,21],[202,24],[204,27],[73,30],[178,33],[412,36],[241,39],[283,42],[538,45],[76,48]],
m:[76,219,156,173,182,202,204,213,241,251,263,129,270,313,496,580,581,164,203,214,227,269,402,412,447,605],
e:[321,262,415,388,267],
t3:[803]
},{//Whimsicott
l:[[16,1],[366,1],[585,1],[262,1],[542,1],[72,1],[75,1],[74,1],[77,1],[202,1],[204,1],[73,1],[178,1],[412,1],[241,1],[283,1],[538,1],[76,1],[71,1],[270,1],[584,1],[78,1]],
m:[63,416,76,113,219,156,168,173,182,202,204,213,241,251,263,129,270,313,369,374,433,496,580,581,94,164,203,214,227,247,269,402,412,447,542,583,605],
t3:[803]
},{//Petilil
l:[[71,1],[74,1],[270,3],[78,6],[72,9],[312,12],[345,15],[79,18],[202,21],[73,24],[495,27],[412,30],[235,33],[241,36],[494,39],[437,42]],
m:[345,76,219,156,173,182,202,204,213,241,263,270,496,164,203,214,227,402,412,437,447,676],
e:[275,361,230,388],
t3:[803]
},{//Lilligant
l:[[80,0],[80,1],[572,1],[483,1],[298,1],[72,1],[312,1],[345,1],[79,1],[202,1],[73,1],[495,1],[412,1],[235,1],[241,1],[494,1],[437,1],[71,1],[74,1],[270,1],[78,1]],
m:[63,416,345,76,669,113,219,156,173,182,202,204,213,241,263,270,496,580,14,164,203,214,227,348,402,412,437,447,676],
t3:[803]
},{//Basculin
l:[[55,1],[39,1],[33,4],[175,8],[453,12],[44,16],[184,20],[29,24],[487,28],[242,32],[36,36],[515,40],[401,44],[37,48],[38,52],[457,56]],
m:[156,173,182,184,196,213,240,258,250,263,129,279,291,340,341,362,372,423,496,56,57,58,97,127,164,179,203,214,242,253,269,276,330,428,503,706,710],
e:[61,283],
t3:[812,799]
},{//Sandile
l:[[681,1],[43,1],[28,3],[468,6],[328,9],[184,12],[44,15],[259,18],[91,21],[207,24],[242,27],[201,30],[492,33],[89,36],[37,39]],
m:[91,156,157,168,173,182,184,213,201,251,263,317,328,371,372,422,424,496,514,523,555,89,116,164,188,203,214,231,242,253,269,399,414,444,446,492],
e:[68,38,401,180],
t3:[815,806,808]
},{//Krokorok
l:[[681,1],[43,1],[28,1],[468,1],[328,9],[184,12],[44,15],[259,18],[91,21],[207,24],[242,27],[201,32],[492,35],[89,42],[37,47]],
m:[5,25,91,156,157,168,173,182,184,213,201,251,263,279,280,317,328,371,372,374,421,422,424,490,496,514,523,555,693,707,67,89,116,164,188,203,214,231,242,253,269,399,414,444,446,447,492],
t3:[815,806,808]
},{//Krookodile
l:[[681,1],[43,1],[28,1],[468,1],[328,9],[184,12],[44,15],[259,18],[91,21],[207,24],[242,27],[201,32],[492,35],[89,44],[37,51],[200,58]],
m:[5,25,63,416,91,156,157,168,173,182,184,213,201,251,263,279,280,317,328,371,372,374,421,422,424,490,496,514,523,555,693,707,34,67,89,116,164,188,200,203,214,231,242,253,269,276,337,339,370,399,406,411,414,444,446,447,492,663,667,675],
t3:[815,806,799,808]
},{//Darumaka
forms:[
{
	l:[[52,1],[33,1],[269,4],[44,8],[510,12],[526,16],[424,20],[29,24],[7,28],[253,32],[187,36],[394,40],[37,44],[276,48]],
	m:[5,25,7,76,83,91,156,157,168,173,182,213,241,261,263,280,317,369,374,424,496,53,116,126,164,203,214,227,253,257,269,276,315,360,394,428,447,526],
	e:[264,359,36,172,281,326]
},{
	l:[[181,1],[33,1],[269,4],[44,8],[419,12],[526,16],[423,20],[29,24],[8,28],[253,32],[187,36],[59,40],[37,44],[276,48]],
	m:[5,25,7,8,76,83,91,156,157,168,173,182,213,241,261,263,280,317,369,374,419,423,424,496,53,58,59,116,126,164,203,214,227,253,257,269,276,315,360,394,428,447,526],
	e:[264,359,36,172,281,573,510,612]
}
]
},{//Darmanitan
forms:[
{
	l:[[359,0],[359,1],[52,1],[33,1],[269,1],[44,1],[510,12],[526,16],[424,20],[29,24],[7,28],[253,32],[187,38],[394,44],[37,50],[276,56]],
	m:[5,25,7,63,416,76,83,91,156,157,168,173,182,213,241,261,263,280,317,369,371,374,384,385,424,496,523,595,34,53,89,94,116,126,164,179,203,214,227,248,253,257,269,271,276,315,334,339,360,394,411,428,442,444,447,526,776],
	t3:[807,797,808]
},{
},{
	l:[[556,0],[556,1],[181,1],[33,1],[269,1],[44,1],[419,12],[526,16],[423,20],[29,24],[8,28],[253,32],[187,38],[59,44],[37,50],[276,56]],
	m:[5,25,7,8,63,416,76,83,91,156,157,168,173,182,213,241,261,263,280,317,369,371,374,419,423,424,496,523,34,53,58,59,89,94,116,126,164,179,203,214,227,253,257,269,276,315,334,339,360,394,411,428,442,444,447,526,776],
	t3:[807,808]
}
]
},{//Maractus
l:[[596,1],[64,1],[71,1],[495,1],[275,1],[74,4],[72,8],[73,12],[389,16],[42,20],[202,24],[230,28],[235,32],[572,36],[178,40],[241,44],[76,48],[367,52],[80,56],[538,60]],
m:[42,76,103,219,156,173,182,202,213,240,241,263,270,311,331,340,372,409,496,580,164,191,203,214,253,304,398,402,412,437,447,675],
e:[388,452],
t3:[803]
},{//Dwebble
l:[[210,1],[28,1],[110,4],[479,8],[450,12],[175,16],[163,20],[157,24],[446,28],[350,32],[404,36],[397,40],[504,44],[439,48]],
m:[76,91,156,157,173,182,213,201,263,317,328,350,421,496,523,14,89,164,191,203,214,334,398,404,444,446],
e:[400,68,174,335,469,282],
t3:[806]
},{//Crustle
l:[[210,1],[28,1],[110,1],[479,1],[450,12],[175,16],[163,20],[157,24],[446,28],[350,32],[404,38],[397,44],[504,50],[439,56]],
m:[63,416,76,669,91,156,157,173,182,213,201,263,317,328,350,421,496,523,707,14,89,164,191,203,214,334,398,404,444,446,484,776],
t3:[806,800]
},{//Scraggy
l:[[67,1],[43,1],[371,4],[29,8],[28,12],[263,16],[182,20],[251,24],[184,28],[280,32],[207,36],[242,40],[136,44],[264,48],[457,52]],
m:[5,25,7,8,9,91,156,157,168,173,182,184,213,240,241,251,263,279,280,313,317,371,372,374,409,490,496,514,555,67,133,164,188,203,214,231,242,269,334,337,339,349,398,399,406,411,428,442,444,447,492,526],
e:[68,197,252,501,612,491],
t3:[811,808]
},{//Scrafty
l:[[67,1],[43,1],[371,1],[29,1],[28,12],[263,16],[182,20],[251,24],[184,28],[280,32],[207,36],[242,42],[136,48],[264,54],[457,60]],
m:[5,25,7,8,9,63,416,91,156,157,168,173,182,184,213,240,241,251,263,279,280,313,317,371,372,374,409,490,496,514,555,67,133,164,188,200,203,214,231,242,269,334,337,339,349,370,398,399,406,411,428,442,444,447,492,526,675],
t3:[811,808]
},{//Sigilyph
l:[[16,1],[93,1],[356,5],[95,10],[314,15],[60,20],[18,25],[322,30],[403,35],[94,40],[366,45],[113,50],[115,50],[143,55],[285,60]],
m:[19,63,416,76,86,113,115,219,156,168,173,182,196,211,213,240,263,129,286,384,683,427,433,478,496,403,58,94,164,473,203,214,247,248,257,271,285,322,347,399,412,428,430,500,605],
e:[375,246,355],
t3:[814,797]
},{//Yamask
		
forms:[
{
	l:[[310,1],[182,1],[114,4],[101,8],[50,12],[261,16],[578,20],[506,24],[212,28],[288,32],[174,36],[247,40],[399,44],[471,48],[470,48],[194,52]],
	m:[219,156,168,173,182,213,240,261,263,286,313,371,433,472,496,506,94,164,203,214,247,271,285,334,347,390,399,412,417,428,502]
},{
	l:[[310,1],[182,1],[114,4],[101,8],[50,12],[693,16],[578,20],[506,24],[212,28],[21,32],[174,36],[247,40],[89,44],[471,48],[470,48],[194,52]],
	m:[219,156,157,168,173,182,213,201,240,261,263,286,313,317,371,433,472,496,506,693,89,94,164,203,214,247,271,285,334,347,390,399,412,414,417,428,502]
}
],
e:[262],
t3:[809]
},{//Cofagrigus
l:[[421,0],[421,1],[184,1],[310,1],[182,1],[114,1],[101,1],[50,12],[261,16],[578,20],[506,24],[212,28],[288,32],[174,38],[247,44],[399,50],[471,56],[470,56],[194,62]],
m:[63,416,219,156,168,173,182,184,213,240,261,263,279,286,313,371,384,385,421,433,472,496,506,566,94,164,203,214,247,271,285,334,347,390,399,412,417,428,447,502,776],
t3:[809]
},
,
,
,
,{//Trubbish
l:[[1,1],[139,1],[278,3],[491,6],[133,9],[499,12],[390,15],[124,18],[254,21],[256,21],[36,24],[188,27],[92,30],[562,33],[220,37],[441,39],[153,42]],
m:[120,156,168,173,182,202,213,240,241,263,350,371,409,474,496,133,164,188,191,203,214,390,399,402,441,482,599],
e:[114,174,28,475,205],
t3:[810]
},{//Garbodor
l:[[1,1],[36,1],[232,1],[139,1],[278,1],[491,1],[133,9],[499,12],[390,15],[124,18],[254,21],[256,21],[34,24],[188,27],[92,30],[562,33],[220,39],[441,43],[153,48]],
m:[63,416,76,103,120,156,168,173,182,202,213,240,241,263,350,371,374,409,440,474,496,707,34,85,94,133,164,188,191,203,214,390,399,402,411,441,482,599,776],
t3:[810]
},{//Zorua
l:[[10,1],[43,1],[259,4],[468,8],[154,12],[184,16],[269,20],[282,24],[313,28],[97,32],[286,36],[539,40],[417,44],[492,48]],
m:[91,156,168,173,182,184,213,240,241,263,129,279,286,313,340,369,371,372,374,496,506,514,555,14,97,164,188,203,214,247,253,269,271,304,347,399,417,447,492],
e:[383,68,197,326,262,389],
t3:[807,806,808]
},{//Zoroark
l:[[400,0],[400,1],[369,1],[10,1],[43,1],[259,1],[468,1],[154,12],[184,16],[269,20],[282,24],[313,28],[97,34],[286,40],[539,46],[417,52],[492,58]],
m:[5,25,63,416,91,156,168,173,182,184,213,240,241,263,129,279,286,313,340,369,371,372,374,421,490,496,506,514,555,14,53,67,97,164,188,203,214,227,247,253,269,271,304,347,399,411,417,447,492,675],
t3:[807,806,808]
},{//Minccino
l:[[1,1],[608,1],[270,4],[497,8],[47,12],[204,16],[129,20],[227,24],[495,28],[541,32],[321,36],[21,40],[304,44],[387,48]],
m:[86,91,219,156,168,173,182,204,213,240,241,263,129,270,313,369,374,496,514,541,85,164,203,214,227,231,253,304,347,402,441,447,526,583,605],
e:[39,401,282,175],
t3:[813]
},{//Cinccino
l:[[331,1],[350,1],[47,1],[204,1],[129,1],[227,1],[495,1],[541,1],[321,1],[21,1],[304,1],[387,1],[1,1],[608,1],[270,1],[497,1]],
m:[63,416,86,91,113,219,156,168,173,182,204,213,240,241,263,129,270,313,331,350,369,374,496,514,541,85,87,164,203,214,227,231,253,304,347,402,411,441,447,526,583,605],
t3:[813]
},{//Gothita
l:[[1,1],[93,1],[589,4],[321,8],[60,12],[204,16],[473,20],[95,24],[313,28],[244,33],[94,36],[260,40],[248,44],[478,48]],
m:[86,113,115,219,156,157,168,173,182,204,213,240,263,270,313,317,371,374,385,433,478,496,85,94,164,473,203,214,247,248,253,269,271,285,347,399,412,417,428,447,492,500,502],
e:[243,212,505,259,252],
t3:[797]
},{//Gothorita
l:[[1,1],[93,1],[589,1],[321,1],[60,12],[204,16],[473,20],[95,24],[313,28],[244,35],[94,40],[260,46],[248,52],[478,58]],
m:[86,113,115,219,156,157,168,173,182,204,213,240,263,270,313,317,371,374,385,433,478,496,85,94,164,473,203,214,247,248,253,269,271,285,347,399,412,417,428,447,492,500,502],
t3:[797]
},{//Gothitelle
l:[[1,1],[93,1],[589,1],[321,1],[60,12],[204,16],[473,20],[95,24],[313,28],[244,35],[94,40],[260,48],[248,56],[478,64]],
m:[63,416,86,113,115,219,156,157,168,173,182,204,213,240,263,270,280,286,313,317,371,374,385,433,478,490,496,85,94,164,473,203,214,247,248,253,269,271,285,322,347,399,412,417,428,447,492,500,502],
t3:[797]
},{//Solosis
l:[[182,1],[93,1],[105,4],[283,8],[60,12],[204,16],[473,20],[113,24],[115,24],[502,28],[220,33],[94,36],[285,40],[248,44],[472,48]],
m:[86,113,115,219,156,157,173,182,204,213,240,263,270,286,317,384,385,433,472,496,678,87,94,164,473,203,214,227,247,248,271,285,334,347,360,412,428,430,500,502],
e:[310,109,151],
t3:[797,798]
},{//Duosion
l:[[182,1],[93,1],[105,1],[283,1],[60,12],[204,16],[473,20],[113,24],[115,24],[502,28],[220,35],[94,40],[285,46],[248,52],[472,58]],
m:[86,113,115,219,156,157,173,182,204,213,240,263,270,286,317,384,385,433,472,496,678,87,94,164,473,203,214,227,247,248,271,285,334,347,360,412,428,430,500,502],
t3:[797,798]
},{//Reuniclus
l:[[359,0],[359,1],[182,1],[93,1],[105,1],[283,1],[60,12],[204,16],[473,20],[113,24],[115,24],[502,28],[220,35],[94,40],[285,48],[248,56],[472,64]],
m:[5,7,8,9,63,416,86,113,115,219,156,157,173,182,204,213,240,263,270,286,317,374,384,385,409,433,472,496,678,87,94,164,473,203,214,227,247,248,271,276,285,334,347,360,411,412,428,430,447,500,502],
t3:[797,798]
},
,
,{//Vanillite
l:[[310,1],[106,1],[269,4],[54,8],[196,12],[419,16],[258,20],[333,24],[253,28],[151,32],[243,36],[58,40],[59,44],[329,48]],
m:[113,120,156,173,182,196,213,240,258,263,286,333,419,496,58,59,164,203,214,253,269,304,334,430,502],
e:[475,393,420,153,694,556]
},{//Vanillish
l:[[310,1],[106,1],[269,1],[54,1],[196,12],[419,16],[258,20],[333,24],[253,28],[151,32],[243,38],[58,44],[59,50],[329,56]],
m:[113,120,156,173,182,196,213,240,258,263,286,333,419,496,58,59,164,203,214,253,269,304,334,430,502]
},{//Vanilluxe
l:[[311,1],[556,1],[573,1],[310,1],[106,1],[269,1],[54,1],[196,12],[419,16],[258,20],[333,24],[253,28],[151,32],[243,38],[58,44],[59,52],[329,60]],
m:[63,416,113,120,156,173,182,196,213,240,258,251,263,286,311,333,419,496,58,59,164,203,214,253,269,304,334,430,502]
},
,
,{//Emolga
l:[[609,1],[39,1],[104,5],[98,10],[84,15],[268,20],[512,25],[209,30],[227,35],[521,40],[113,45],[435,50],[97,55]],
m:[76,86,113,156,173,182,204,213,240,263,129,270,369,374,683,496,512,521,527,598,403,85,87,97,164,203,214,226,227,231,269,412,486,528],
e:[310,343,355,351,321,432],
t3:[804,814]
},{//Karrablast
l:[[64,1],[43,1],[210,4],[203,8],[206,12],[491,16],[29,20],[175,24],[184,28],[404,32],[14,36],[36,40],[405,44],[38,48]],
m:[103,156,173,182,184,202,213,240,263,496,206,14,164,203,214,224,227,334,398,404,405,412,529],
e:[68,450,282,163,400]
},{//Escavalier
l:[[565,1],[203,1],[175,1],[184,1],[36,1],[38,1],[64,1],[43,1],[210,1],[501,1],[206,12],[491,16],[29,20],[179,24],[334,28],[404,32],[14,36],[442,40],[405,44],[416,48],[368,52]],
m:[63,416,103,156,173,182,184,202,213,240,263,279,496,534,206,684,693,14,97,164,179,203,214,224,227,269,334,370,398,404,405,411,412,442,529],
t:[796]
},{//Foongus
l:[[71,1],[310,1],[74,4],[78,8],[72,12],[235,16],[499,20],[230,24],[202,28],[275,32],[92,36],[476,40],[76,44],[147,48]],
m:[76,156,173,182,202,213,240,241,263,371,474,496,34,164,188,203,214,402,412,447,492,676],
e:[111,77,205,388]
},{//Amoonguss
l:[[71,1],[310,1],[74,1],[78,1],[72,12],[235,16],[499,20],[230,24],[202,28],[275,32],[92,36],[476,42],[76,48],[147,54]],
m:[63,416,76,156,173,182,202,213,240,241,263,371,474,496,506,580,707,34,164,188,203,214,402,412,447,492,676]
},{//Frillish
l:[[71,1],[55,1],[40,4],[101,8],[352,12],[240,16],[506,20],[362,24],[105,28],[247,32],[250,36],[56,41],[194,44],[323,48]],
m:[219,156,173,182,196,202,213,240,258,250,261,263,286,291,362,433,496,506,56,57,58,59,94,127,164,188,203,214,247,269,271,399,412,482,503,605],
e:[151,109,220,54,61,668],
t3:[809]
},{//Jellicent
l:[[151,1],[71,1],[55,1],[40,1],[101,1],[352,12],[240,16],[506,20],[362,24],[105,28],[247,32],[250,36],[56,43],[194,48],[323,54]],
m:[63,416,219,156,173,182,196,202,213,240,258,250,261,263,286,291,362,433,496,506,56,57,58,59,94,127,164,188,203,214,247,269,271,330,399,412,482,503,605],
t3:[809]
},
,{//Joltik
l:[[71,1],[210,1],[527,4],[450,8],[81,12],[86,16],[486,20],[97,24],[389,28],[163,32],[435,37],[103,40],[380,44],[405,48]],
m:[42,86,103,113,156,168,173,182,202,213,240,263,129,340,683,440,496,521,527,85,97,141,164,203,214,398,404,405,412,486,528],
e:[40,679,522,104,611],
t3:[804,806]
},{//Galvantula
l:[[564,0],[564,1],[71,1],[210,1],[527,1],[450,1],[81,12],[86,16],[486,20],[97,24],[389,28],[163,32],[435,39],[103,44],[380,50],[405,56]],
m:[42,63,416,86,103,113,156,168,173,182,202,213,240,263,129,340,683,440,496,521,527,85,87,97,141,164,203,214,398,404,405,412,486,528,675],
t3:[804,806]
},{//Ferroseed
l:[[33,1],[106,1],[232,5],[42,10],[275,15],[430,20],[442,25],[120,30],[334,35],[174,41],[360,45],[153,50]],
m:[42,76,86,120,156,173,182,202,213,241,263,279,331,371,372,496,85,164,191,203,214,334,360,398,402,412,430,442,446],
e:[73,356,491,92,282],
t:[796],
t3:[798]
},{//Ferrothorn
l:[[438,0],[438,1],[33,1],[106,1],[232,1],[42,1],[275,15],[430,20],[442,25],[120,30],[334,35],[174,43],[360,49],[153,56]],
m:[42,63,416,76,86,120,156,173,182,202,213,201,241,263,279,331,371,372,421,496,523,693,14,85,87,164,191,203,214,334,360,398,402,412,430,438,442,446,447,484,776],
t:[796],
t3:[798]
},{//Klink
l:[[84,1],[11,1],[20,4],[268,8],[451,12],[319,16],[475,20],[435,24],[103,28],[544,32],[199,36],[508,40],[192,44],[63,48]],
m:[63,86,103,156,173,182,201,263,372,496,521,85,164,203,214,253,334,408,430,528],
t:[796],
t3:[804,798]
},{//Klang
l:[[84,1],[11,1],[20,1],[268,1],[451,12],[319,16],[475,20],[435,24],[103,28],[544,32],[199,36],[508,42],[192,48],[63,54]],
m:[63,86,103,156,173,182,201,263,372,496,521,85,164,203,214,253,334,408,430,502,528],
t:[796],
t3:[804,798]
},{//Klinklang
l:[[674,1],[602,1],[84,1],[11,1],[20,1],[268,1],[451,12],[319,16],[475,20],[435,24],[103,28],[544,32],[199,36],[508,42],[192,48],[63,56],[604,64]],
m:[63,416,86,103,156,173,182,201,263,372,433,496,521,604,85,87,164,203,214,253,334,408,430,502,528],
t:[796],
t3:[804,798]
},
,
,
,{//Elgyem
l:[[93,1],[45,1],[286,6],[100,12],[60,18],[471,24],[470,24],[29,30],[428,36],[105,43],[347,48],[472,54],[94,60]],
m:[86,103,113,115,219,156,157,168,173,182,211,213,240,263,286,317,384,385,433,472,496,85,94,97,164,473,203,214,247,253,271,285,322,347,399,412,417,428,500,502],
e:[50,310,244,194],
t3:[797,800]
},{//Beheeyem
l:[[678,1],[93,1],[45,1],[286,1],[100,1],[60,18],[471,24],[470,24],[29,30],[428,36],[105,45],[347,52],[472,60],[94,68]],
m:[63,416,86,103,113,115,219,156,157,168,173,182,211,213,240,263,286,317,384,385,433,472,496,678,85,94,97,161,164,473,203,214,247,248,253,271,285,322,347,399,412,417,428,430,500,502],
t3:[797,800]
},{//Litwick
l:[[310,1],[123,1],[52,4],[107,8],[109,12],[506,16],[261,20],[83,24],[101,28],[174,32],[247,36],[517,40],[286,44],[220,48],[315,52],[262,56]],
m:[76,83,219,156,168,173,182,213,241,261,263,286,371,433,496,506,595,53,94,126,164,203,214,247,257,269,271,315,347,399,412,502],
e:[151,114,499,471],
t3:[807,806,809]
},{//Lampent
l:[[310,1],[123,1],[52,1],[107,1],[109,12],[506,16],[261,20],[83,24],[101,28],[174,32],[247,36],[517,40],[286,46],[220,52],[315,58],[262,64]],
m:[76,83,219,156,168,173,182,213,241,261,263,286,371,433,496,506,595,53,94,126,164,203,214,247,257,269,271,315,347,399,412,502],
t3:[807,806,809]
},{//Chandelure
l:[[109,1],[506,1],[261,1],[83,1],[101,1],[174,1],[247,1],[517,1],[286,1],[220,1],[315,1],[262,1],[310,1],[123,1],[52,1],[107,1]],
m:[63,416,76,83,219,156,168,173,182,213,241,261,263,286,371,433,496,506,595,53,94,126,164,203,214,247,257,269,271,315,347,399,412,502],
t3:[807,806,809]
},{//Axew
l:[[10,1],[43,1],[44,3],[206,6],[372,9],[269,12],[163,15],[337,18],[184,21],[242,24],[349,27],[530,30],[673,33],[406,36],[14,39],[200,42],[12,45],[416,48]],
m:[416,91,156,173,182,184,213,240,241,263,129,317,371,372,374,496,206,784,14,116,164,179,200,203,214,231,242,269,276,337,349,398,404,406],
e:[68,400,283,106,660,68],
t:[434],
t3:[799]
},{//Fraxure
l:[[10,1],[43,1],[44,1],[206,1],[372,9],[269,12],[163,15],[337,18],[184,21],[242,24],[349,27],[530,30],[673,33],[406,36],[14,41],[200,46],[12,51],[416,56]],
m:[416,91,156,173,182,184,213,240,241,263,129,317,371,372,374,421,496,206,707,784,14,67,116,164,179,200,203,214,231,242,269,276,337,349,398,404,406],
t:[434],
t3:[799]
},{//Haxorus
l:[[10,1],[43,1],[44,1],[206,1],[372,9],[269,12],[163,15],[337,18],[184,21],[242,24],[349,27],[530,30],[673,33],[406,36],[14,41],[200,46],[12,53],[416,60]],
m:[63,416,91,156,157,173,182,184,213,240,241,263,129,280,317,371,372,374,421,427,496,523,555,206,693,707,784,14,57,67,89,116,164,179,200,203,214,231,242,269,276,337,349,370,398,404,406,411,447],
t:[434],
t3:[799]
},{//Cubchoo
l:[[181,1],[45,1],[203,3],[154,6],[196,9],[589,12],[362,15],[524,18],[163,21],[175,24],[204,27],[258,30],[37,33],[156,36],[59,39],[329,42]],
m:[5,25,8,91,156,173,182,196,204,213,240,258,263,317,362,372,374,419,421,423,496,57,58,59,67,164,203,214,227,276,447,583],
e:[281,400,264]
},{//Beartic
l:[[556,0],[556,1],[453,1],[204,1],[181,1],[45,1],[203,1],[154,1],[196,9],[589,12],[362,15],[524,18],[163,21],[175,24],[207,27],[258,30],[37,33],[156,36],[59,41],[329,46],[276,51]],
m:[5,25,8,63,416,91,156,157,173,182,184,196,204,213,240,258,263,280,291,317,333,362,372,374,419,421,423,496,523,14,57,58,59,67,164,203,214,227,269,276,339,411,444,447,484,583,675,710,776]
},
,{//Shelmet
l:[[71,1],[182,1],[51,4],[174,8],[72,12],[522,16],[281,20],[151,24],[202,28],[385,32],[34,36],[105,40],[405,44],[515,48]],
m:[156,173,182,202,213,240,263,341,385,474,496,34,141,164,188,191,203,214,226,227,390,405,412],
e:[38,470,170,364],
t3:[806]
},{//Accelgor
l:[[594,1],[51,1],[174,1],[281,1],[151,1],[385,1],[34,1],[71,1],[104,1],[491,1],[98,1],[72,12],[522,16],[129,20],[97,24],[202,28],[384,32],[369,36],[105,40],[405,44],[515,48],[92,52]],
m:[63,416,156,173,182,202,213,201,240,263,129,341,369,384,385,409,474,496,34,97,141,164,179,188,191,203,214,226,227,390,405,411,412,599],
t3:[806]
},{//Stunfisk
forms:[
{
	l:[[189,1],[33,1],[55,1],[84,1],[203,5],[341,10],[279,15],[268,20],[389,25],[604,30],[340,35],[330,40],[435,45],[175,50],[90,55]],
	m:[86,91,156,157,173,182,213,201,240,263,279,317,340,341,371,496,523,527,604,598,707,57,85,87,89,164,188,203,214,253,330,414,444,446,482,492,503],
	e:[281,310,174,180,209,220,513],
	t3:[808]
},{
	l:[[189,1],[33,1],[55,1],[232,1],[203,5],[341,10],[279,15],[319,20],[389,25],[334,30],[340,35],[330,40],[779,45],[175,50],[90,55]],
	m:[86,91,103,156,157,173,182,213,201,240,263,279,317,340,341,371,423,496,523,707,57,89,164,188,203,214,242,253,330,334,414,430,444,446,482,492,503],
	e:[20,281,310,174,180,68,220,513],
	t:[796],
	t3:[805,808]
}
]
},{//Mienfoo
l:[[1,1],[197,1],[252,5],[179,10],[154,15],[501,20],[395,25],[369,30],[409,35],[468,40],[396,45],[340,51],[347,55],[136,60]],
m:[5,25,91,115,156,157,173,182,213,240,241,263,129,270,279,280,317,340,369,371,374,409,490,496,512,514,14,67,97,116,164,179,203,214,226,269,339,347,370,396,398,411,444,447,502,526],
e:[364,282,233,264],
t3:[811]
},{//Mienshao
l:[[501,1],[1,1],[197,1],[252,1],[179,1],[154,15],[469,20],[395,25],[369,30],[409,35],[468,40],[396,45],[340,53],[347,59],[136,66]],
m:[5,25,63,416,91,115,156,157,173,182,213,240,241,263,129,270,279,280,317,340,369,371,372,374,409,490,496,512,514,693,14,67,97,116,164,179,203,214,226,269,299,339,347,370,396,398,411,444,447,502,526],
t3:[811]
},{//Druddigon
l:[[10,1],[43,1],[44,5],[525,10],[232,15],[184,20],[163,25],[337,30],[468,35],[242,40],[442,45],[200,50],[276,55]],
m:[5,7,9,63,416,91,156,157,173,182,184,213,240,241,263,279,317,371,374,421,422,424,496,514,523,555,707,34,53,57,89,164,188,200,203,214,231,242,257,269,276,337,399,406,411,430,441,442,446],
e:[400,137,342,389],
t3:[814,799,808]
},{//Golett
l:[[189,1],[310,1],[111,4],[1,8],[325,12],[174,16],[101,20],[707,24],[334,28],[5,32],[247,36],[484,40],[566,44],[359,48],[89,52],[223,56]],
m:[5,25,7,8,9,91,219,120,156,157,168,173,182,196,240,263,270,280,286,317,374,409,490,496,523,566,707,58,67,89,94,164,203,214,247,276,334,360,411,414,446,447,484,502],
t3:[815,809]
},{//Golurk
l:[[667,1],[264,1],[189,1],[310,1],[111,1],[1,1],[325,12],[174,16],[101,20],[707,24],[334,28],[5,32],[247,36],[484,40],[566,46],[359,52],[89,58],[223,64]],
m:[5,25,7,8,9,19,63,416,76,91,219,120,156,157,168,173,182,196,240,263,270,280,286,317,374,409,490,496,523,566,707,34,58,67,85,89,94,164,203,214,247,271,276,334,360,370,411,414,428,430,444,446,447,484,502,535,663,667,776],
t3:[815,809]
},{//Pawniard
l:[[10,1],[43,1],[210,5],[232,10],[259,15],[184,20],[372,25],[319,30],[163,35],[400,40],[334,45],[673,50],[442,55],[14,60],[12,65]],
m:[86,91,103,156,168,173,182,184,213,201,240,251,263,279,280,317,371,372,374,421,427,490,496,514,555,206,14,67,164,203,214,269,334,398,399,404,442,446,447,492],
e:[389,29,212,501],
t:[796],
t3:[808]
},{//Bisharp
l:[[368,1],[10,1],[43,1],[210,1],[232,1],[259,15],[184,20],[372,25],[319,30],[163,35],[400,40],[334,45],[673,50],[442,57],[14,64],[12,71]],
m:[63,416,86,91,103,156,168,173,182,184,213,201,240,251,263,279,280,317,371,372,374,421,427,490,496,514,555,206,403,14,67,164,203,214,269,334,398,399,404,411,442,444,446,447,492,675],
t:[796],
t3:[808]
},{//Bouffalant
l:[[33,1],[43,1],[116,5],[31,10],[279,15],[184,20],[30,25],[179,30],[675,35],[543,40],[14,45],[224,50],[416,55]],
m:[416,156,157,173,182,184,213,240,241,263,279,317,341,371,372,496,514,523,684,707,14,34,57,89,116,133,164,179,200,203,214,224,253,269,276,370,398,428,442,444,526,528,667,675],
e:[562,29,189,130,23,538,283],
t3:[808]
},{//Rufflet
l:[[64,1],[43,1],[468,6],[17,12],[366,18],[184,24],[332,30],[163,36],[18,42],[306,48],[403,55],[432,60],[37,66],[413,72]],
m:[19,156,157,173,182,184,211,213,240,241,263,129,317,369,372,421,496,514,403,97,164,203,214,257,276,339,370,413,428,526,542],
t3:[814]
},{//Braviary
l:[[276,0],[276,1],[143,1],[64,1],[43,1],[468,1],[17,1],[366,18],[184,24],[332,30],[163,36],[18,42],[306,48],[403,57],[432,64],[37,72],[413,80]],
m:[19,63,416,156,157,173,182,184,211,213,240,241,263,129,317,369,372,421,496,514,403,97,164,203,214,257,276,339,370,413,428,442,526,542],
t3:[814]
},{//Vullaby
l:[[16,1],[43,1],[260,6],[365,12],[366,18],[282,24],[334,30],[18,36],[403,42],[399,48],[417,54],[432,60],[213,66],[413,72]],
m:[19,156,168,173,182,184,211,213,240,241,263,129,313,317,369,371,372,496,514,555,403,164,203,214,247,257,269,334,399,413,417,492],
e:[212,355,92],
t3:[814,808]
},{//Mandibuzz
l:[[198,0],[198,1],[143,1],[92,1],[16,1],[43,1],[260,1],[365,1],[366,18],[282,24],[334,30],[18,36],[403,42],[399,48],[417,57],[432,64],[213,72],[413,80]],
m:[19,63,416,156,168,173,182,184,211,213,240,241,263,129,313,317,369,371,372,496,514,555,403,164,203,214,247,257,269,334,399,413,417,492],
t3:[814,808]
},{//Heatmor
l:[[122,1],[33,1],[154,5],[510,10],[450,15],[254,20],[256,20],[255,20],[163,25],[20,30],[680,35],[468,40],[133,45],[83,50],[517,55],[394,60]],
m:[7,9,416,76,83,91,156,168,173,182,202,213,240,241,261,263,317,374,409,421,496,693,707,34,53,67,126,133,164,203,214,257,269,276,315,394,411,675],
e:[400,174,389,321,562],
t3:[807,815]
},{//Durant
l:[[210,1],[28,1],[11,4],[232,8],[251,12],[450,16],[44,20],[97,24],[91,28],[404,32],[242,36],[319,40],[442,44],[494,48],[334,52],[12,56]],
m:[416,86,91,103,156,157,173,182,213,201,251,263,270,317,421,422,496,514,707,97,164,203,214,226,242,276,334,404,412,430,442,444],
e:[522,660,368,611,175],
t:[796],
t3:[806]
},{//Deino
l:[[33,1],[116,1],[225,4],[44,8],[46,12],[372,16],[29,20],[526,24],[21,28],[242,32],[184,36],[406,40],[34,44],[304,48],[407,52],[417,56],[200,60]],
m:[86,103,156,168,173,182,184,213,240,241,263,372,422,423,424,496,34,116,164,200,203,214,242,253,269,276,304,399,406,414,417,428,526],
e:[458,310,457,562],
t:[434]
},{//Zweilous
l:[[33,1],[458,1],[116,1],[225,1],[44,1],[46,12],[372,16],[29,20],[526,24],[21,28],[242,32],[184,36],[406,40],[34,44],[304,48],[407,54],[417,60],[200,66]],
m:[86,103,156,168,173,182,184,213,240,241,251,263,270,372,422,423,424,496,34,116,164,200,203,214,242,253,269,276,304,399,406,414,417,428,526],
t:[434]
},{//Hydreigon
l:[[33,1],[458,1],[161,1],[116,1],[225,1],[44,1],[46,12],[372,16],[29,20],[526,24],[21,28],[242,32],[184,36],[406,40],[34,44],[304,48],[407,54],[417,60],[200,68],[63,76]],
m:[19,63,416,83,86,103,115,156,157,168,173,182,184,211,213,240,241,251,263,270,317,369,371,372,422,423,424,496,512,523,555,693,784,34,53,56,57,89,116,126,161,164,200,203,214,231,242,253,257,269,276,304,349,399,406,411,414,417,428,430,444,526,675],
t:[434],
t3:[814,799]
},{//Larvesta
l:[[52,1],[81,1],[488,6],[522,12],[172,18],[450,24],[103,30],[141,36],[405,42],[36,48],[133,54],[38,60],[394,66]],
m:[76,103,113,219,156,173,182,202,213,241,261,263,369,496,512,53,94,126,133,141,164,203,214,257,315,347,394,405,428,528],
e:[106,71,37],
t3:[806]
},{//Volcarona
l:[[483,0],[483,1],[552,1],[18,1],[52,1],[488,1],[36,1],[38,1],[394,1],[83,1],[81,1],[16,1],[522,1],[172,18],[450,24],[103,30],[141,36],[405,42],[257,48],[133,54],[542,62],[126,70],[476,78]],
m:[19,63,416,76,83,103,113,219,156,173,182,202,213,241,261,263,369,496,512,595,53,94,126,133,141,164,203,214,257,315,347,394,398,405,428,528,542],
t3:[814,806]
},{//Cobalion
l:[[98,1],[43,1],[270,1],[526,1],[232,7],[501,14],[24,21],[514,28],[368,35],[36,42],[533,49],[14,56],[442,63],[370,70]],
m:[63,416,86,115,219,156,173,182,184,201,263,129,270,279,280,340,496,514,521,206,403,684,14,164,179,203,214,224,269,276,334,347,370,398,404,411,428,430,442,444,446,526],
t:[796],
t3:[811]
},{//Terrakion
l:[[98,1],[43,1],[270,1],[526,1],[479,7],[501,14],[24,21],[514,28],[157,35],[36,42],[533,49],[14,56],[444,63],[370,70]],
m:[63,416,115,219,156,157,173,182,184,201,263,129,270,279,280,317,350,496,514,523,206,403,684,707,14,89,164,179,203,214,224,269,276,347,370,398,404,411,414,428,442,444,446,526],
t3:[811]
},{//Virizion
l:[[98,1],[43,1],[270,1],[526,1],[345,7],[501,14],[24,21],[514,28],[202,35],[36,42],[533,49],[14,56],[348,63],[370,70]],
m:[63,416,345,76,669,113,115,219,156,173,182,202,241,263,129,270,279,280,340,496,514,206,403,684,14,164,179,203,214,224,269,276,347,348,370,402,404,411,412,428,437,444,447,526],
t3:[803,811]
},
,
,{//Reshiram
l:[[225,1],[568,1],[246,1],[424,1],[163,8],[242,16],[326,24],[406,32],[53,40],[558,48],[304,56],[126,64],[286,72],[200,80],[551,88]],
m:[19,63,416,76,113,115,219,156,157,173,182,211,240,241,261,263,129,270,286,311,317,371,374,421,424,496,595,693,784,53,94,126,164,200,203,214,242,247,257,304,315,337,349,394,406,411,414,428,444,535,776],
t:[434],
t3:[815,814,799]
},{//Zekrom
l:[[225,1],[568,1],[246,1],[422,1],[163,8],[242,16],[428,24],[337,32],[85,40],[559,48],[304,56],[87,64],[286,72],[200,80],[550,88]],
m:[9,19,63,416,86,113,115,219,156,157,173,182,211,240,263,129,270,286,311,317,371,374,421,422,496,521,693,784,85,87,94,164,200,203,214,242,247,304,337,349,406,411,414,428,430,444,486,528,776],
t:[434],
t3:[804,814,799]
},
,{//Kyurem
forms:[
{
	l:[[225,1],[568,1],[246,1],[573,1],[163,8],[283,16],[406,24],[58,32],[304,40],[184,48],[59,56],[286,64],[200,72],[549,80],[329,88]],
	m:[19,63,416,113,115,219,156,157,173,182,184,196,211,240,241,258,263,129,270,286,311,317,333,371,374,421,496,693,784,58,59,94,164,200,203,214,247,304,337,349,406,411,414,428,430,442,444,776]
},{
	l:[[225,1],[568,1],[246,1],[573,1],[163,8],[283,16],[406,24],[58,32],[304,40],[558,48],[59,56],[286,64],[200,72],[554,80],[329,88]],
	m:[19,63,416,113,115,219,156,157,173,182,184,196,211,240,241,258,263,129,270,286,311,317,333,371,374,421,496,693,784,58,59,94,164,200,203,214,247,304,337,349,406,411,414,428,430,442,444,776]
},{
	l:[[225,1],[568,1],[246,1],[573,1],[163,8],[283,16],[406,24],[58,32],[304,40],[559,48],[59,56],[286,64],[200,72],[553,80],[329,88]],
	m:[19,63,416,113,115,219,156,157,173,182,184,196,211,240,241,258,263,129,270,286,311,317,333,371,374,421,496,693,784,58,59,94,164,200,203,214,247,304,337,349,406,411,414,428,430,442,444,776]
}
],
t:[434],
t3:[814,799]
},{//Keldeo
l:[[548,1],[453,1],[43,1],[270,1],[526,1],[61,7],[501,14],[24,21],[514,28],[401,35],[36,42],[533,49],[14,56],[56,63],[370,70]],
m:[63,416,115,219,156,173,182,196,240,241,258,263,129,270,279,280,340,496,514,206,403,684,14,56,57,67,164,179,203,214,224,269,276,330,347,370,396,398,404,411,444,503,526,710],
t3:[812,811]
},
,
,
,
,
,
,
,
,
,
,
,{//Bunnelby
l:[[189,1],[43,1],[33,3],[673,6],[98,9],[341,12],[175,15],[24,18],[523,21],[91,24],[340,27],[36,30],[14,33],[89,36],[162,39]],
m:[91,156,157,168,173,182,213,201,263,280,317,340,341,369,371,374,496,523,14,57,89,97,164,188,191,203,214,231,339,442,444,447,526,528],
e:[111,205]
},{//Diggersby
l:[[189,1],[43,1],[33,1],[673,1],[98,9],[341,12],[175,15],[24,18],[523,23],[91,28],[340,33],[36,38],[14,43],[89,48],[162,53],[359,58]],
m:[5,25,7,8,9,63,416,91,156,157,168,173,182,213,201,263,280,317,328,340,341,369,371,374,496,523,693,707,14,34,57,67,89,97,164,188,191,203,214,231,253,276,339,414,441,442,444,447,492,526,528,667],
t3:[815]
},{//Fletchling
l:[[64,1],[45,1],[98,5],[52,10],[175,15],[512,20],[97,25],[332,30],[366,35],[211,40],[355,45],[19,50]],
m:[19,156,168,173,182,211,213,241,261,263,129,369,496,512,14,97,164,203,214,257,269,315,526],
e:[488,501,432],
t3:[814]
},{//Fletchinder
l:[[488,0],[488,1],[364,1],[64,1],[45,1],[98,1],[52,1],[175,15],[512,22],[97,29],[332,36],[366,43],[211,50],[355,57],[19,64]],
m:[19,83,156,168,173,182,211,213,241,261,263,129,369,496,512,14,53,97,126,164,203,214,257,269,315,526],
t3:[814]
},{//Talonflame
l:[[488,1],[394,1],[364,1],[64,1],[45,1],[98,1],[52,1],[175,15],[512,22],[97,29],[332,38],[366,47],[211,56],[355,65],[19,74],[413,83]],
m:[19,63,416,76,83,156,168,173,182,211,213,241,261,263,129,369,496,512,14,53,97,126,164,203,214,257,269,315,339,394,413,526,542],
t3:[814]
},
,
,
,
,
,
,
,
,
,
,{//Pancham
l:[[33,1],[43,1],[292,4],[269,8],[509,12],[490,16],[526,20],[163,24],[233,28],[242,33],[34,36],[575,40],[494,44]],
m:[5,25,7,8,9,91,156,157,173,182,213,240,241,263,270,280,317,371,374,409,421,490,496,514,523,206,14,34,57,67,164,188,203,214,242,253,269,276,304,339,399,428,441,442,444,447,492,526],
e:[511,501,480,681,69],
t3:[811,808]
},{//Pangoro
l:[[400,0],[400,1],[418,1],[33,1],[43,1],[292,1],[269,1],[509,12],[490,16],[526,20],[163,24],[233,28],[242,35],[34,40],[575,46],[494,52],[359,58]],
m:[5,25,7,8,9,63,416,91,156,157,168,173,182,184,213,240,241,251,263,270,279,280,317,371,374,409,421,490,496,514,523,555,206,707,14,34,57,67,89,116,164,179,188,200,203,214,242,253,269,276,304,337,339,370,398,399,404,411,428,441,442,444,447,492,526,663,675],
t3:[811,808]
},
,{//Espurr
l:[[10,1],[43,1],[252,3],[574,6],[93,9],[343,18],[60,21],[113,30],[115,30],[473,33]],
m:[6,86,113,115,219,156,173,182,213,240,241,263,129,270,313,371,433,472,478,496,85,94,164,473,203,214,231,271,285,347,399,412,417,428,502,526,583],
e:[281,321],
t3:[797]
},{//Meowstic
forms:[
{
	l:[[212,1],[10,1],[43,1],[252,1],[574,1],[93,9],[270,12],[204,15],[343,18],[60,21],[389,24],[272,29],[113,34],[115,34],[473,39],[286,44],[501,49],[94,54],[581,59]],
	m:[6,63,416,86,91,113,115,219,156,173,182,204,213,240,241,263,129,270,286,313,371,433,472,478,496,541,581,678,85,94,164,473,203,214,231,247,271,285,347,399,412,417,428,502,526,583]
},{
	l:[[345,1],[10,1],[43,1],[252,1],[574,1],[93,9],[500,12],[451,15],[343,18],[60,21],[389,24],[272,29],[113,34],[115,34],[473,39],[326,44],[247,49],[94,54],[248,59]],
	m:[6,63,416,345,86,91,113,115,219,156,173,182,204,213,240,241,263,129,270,313,371,433,472,478,496,541,678,85,94,164,473,203,214,231,247,248,271,285,347,399,412,417,428,500,502,526,583]
}
],
t3:[797]
},{//Honedge
l:[[33,1],[210,1],[425,4],[475,8],[332,12],[319,16],[163,20],[400,24],[514,28],[334,32],[442,36],[379,40],[14,44],[533,48]],
m:[669,103,115,156,157,173,182,213,240,263,280,421,427,496,514,206,693,14,164,179,203,214,334,360,370,430,442],
e:[194,469,335],
t:[796]
},{//Doublade
l:[[33,1],[210,1],[425,1],[475,1],[332,12],[319,16],[163,20],[400,24],[514,28],[334,32],[442,38],[379,44],[14,50],[533,56]],
m:[669,103,115,156,157,173,182,213,240,263,280,421,427,496,514,206,693,14,164,179,203,214,334,360,370,430,442],
t:[796]
},{//Aegislash
l:[[588,0],[588,1],[457,1],[332,1],[319,1],[163,1],[400,1],[514,1],[334,1],[442,1],[379,1],[14,1],[533,1],[33,1],[210,1],[425,1],[475,1]],
m:[63,416,669,103,115,156,157,173,182,213,240,241,263,280,421,427,496,514,206,403,693,14,164,179,203,214,247,334,360,370,430,442],
t:[796]
},{//Spritzee
l:[[584,1],[230,1],[186,3],[497,6],[577,9],[312,12],[577,15],[213,18],[175,21],[581,24],[94,27],[204,30],[347,33],[585,36],[285,39]],
m:[113,115,156,173,182,204,213,240,241,263,270,313,433,496,577,581,85,94,164,203,214,227,285,347,360,412,417,430,502,605],
e:[50,273,495],
t3:[802]
},{//Aromatisse
l:[[597,1],[505,1],[584,1],[230,1],[186,1],[497,1],[574,9],[312,12],[577,15],[213,18],[175,21],[581,24],[94,27],[204,30],[347,33],[585,36],[285,39],[244,42]],
m:[63,416,113,115,156,173,182,204,213,240,241,263,270,313,409,433,496,577,581,85,87,94,118,164,473,203,214,227,285,347,360,412,417,430,502,605],
t3:[802]
},{//Swirlix
l:[[33,1],[230,1],[589,3],[584,6],[312,9],[577,12],[313,15],[496,18],[81,21],[178,24],[412,27],[273,30],[583,33],[538,36],[283,39]],
m:[113,219,156,168,173,182,204,213,240,241,263,270,313,496,577,53,57,85,94,133,164,203,214,347,412,583,605],
e:[495,281,383,564],
t3:[802]
},{//Slurpuff
l:[[33,1],[230,1],[589,1],[584,1],[312,9],[577,12],[313,15],[496,18],[81,21],[178,24],[412,27],[273,30],[583,33],[538,36],[283,39],[564,42]],
m:[63,416,113,219,156,168,173,182,204,213,240,241,263,270,313,409,496,577,53,57,85,87,94,118,133,164,203,214,347,412,583,605],
t3:[802]
},{//Inkay
l:[[64,1],[33,1],[95,3],[35,6],[371,9],[365,12],[60,15],[207,18],[163,21],[400,24],[427,27],[415,31],[492,33],[576,36],[276,39]],
m:[113,115,156,157,168,173,182,213,240,241,263,313,371,374,385,427,433,496,514,53,85,94,164,203,214,226,248,269,276,347,399,417,492,500,502,710],
e:[194,50,367],
t3:[797,808]
},{//Malamar
l:[[179,1],[64,1],[33,1],[95,1],[35,1],[371,9],[365,12],[60,15],[207,18],[163,21],[400,24],[427,27],[415,33],[492,37],[576,42],[276,47]],
m:[63,416,113,115,156,157,168,173,182,184,213,240,241,263,313,371,374,385,427,433,496,514,693,53,85,94,164,179,473,203,214,226,248,269,276,347,399,417,492,500,502,675,710],
t3:[797,808]
},{//Binacle
l:[[189,1],[10,1],[110,4],[55,8],[210,12],[154,16],[246,20],[397,24],[163,28],[468,32],[534,36],[504,40],[238,44]],
m:[91,103,219,156,157,168,173,182,196,213,201,240,251,263,270,280,317,341,350,371,372,374,421,496,523,534,206,14,57,58,59,89,164,188,203,214,253,269,334,398,404,444,446,447,482,503,710],
e:[415,400,28]
},{//Barbaracle
l:[[130,1],[189,1],[10,1],[110,1],[55,1],[210,12],[154,16],[246,20],[397,24],[163,28],[468,32],[534,36],[504,42],[238,48],[444,54]],
m:[63,416,91,103,219,156,157,168,173,182,196,213,201,240,250,251,263,270,280,291,317,341,350,371,372,374,421,496,523,534,206,693,14,57,58,59,67,89,164,188,203,214,253,269,276,330,334,337,339,398,404,411,414,444,446,447,482,503,710],
t3:[800]
},{//Skrelp
l:[[33,1],[108,1],[51,5],[55,10],[39,15],[104,20],[342,25],[352,30],[92,35],[406,40],[401,45],[188,50],[56,55]],
m:[156,173,182,196,213,240,258,263,291,340,474,496,56,57,85,127,164,188,200,203,214,231,247,390,406,441,482,503,583,599],
e:[151,114,239,525],
t3:[812,799]
},{//Dragalge
l:[[33,1],[108,1],[51,1],[55,1],[39,15],[104,20],[342,25],[352,30],[92,35],[406,40],[401,45],[188,52],[56,59],[200,66]],
m:[63,416,156,173,182,196,213,240,258,263,291,340,474,496,56,57,85,87,127,164,188,200,203,214,231,247,390,406,411,441,482,503,583,599],
t3:[812,799]
},{//Clauncher
l:[[150,1],[55,1],[11,5],[175,10],[453,15],[479,20],[468,25],[352,30],[14,35],[396,40],[340,45],[330,50],[152,55]],
m:[156,157,173,182,196,213,240,263,270,291,340,369,474,496,14,57,58,127,164,188,203,214,231,330,396,406,430,482,503],
e:[494,401,61],
t3:[805,812]
},{//Clawitzer
l:[[399,1],[406,1],[505,1],[150,1],[55,1],[11,1],[175,1],[453,15],[479,20],[468,25],[352,30],[14,35],[396,42],[340,49],[330,56],[152,63]],
m:[63,416,156,157,173,182,196,213,240,263,270,291,340,369,474,496,14,57,58,127,164,188,203,214,231,247,330,396,399,406,411,430,482,503,710],
t3:[805,812]
},{//Helioptile
l:[[189,1],[39,1],[1,4],[84,8],[98,12],[268,16],[523,20],[521,24],[570,28],[86,32],[85,36],[582,40],[87,44]],
m:[86,91,113,156,157,173,182,213,201,240,263,129,317,369,490,496,521,523,527,604,57,85,87,97,164,203,214,231,399,447,486,502,528],
e:[137,407,525],
t3:[804,799]
},{//Heliolisk
l:[[598,1],[435,1],[98,1],[268,1],[523,1],[521,1],[570,1],[86,1],[85,1],[582,1],[87,1],[189,1],[39,1],[1,1],[84,1]],
m:[5,25,7,9,63,416,76,86,91,113,156,157,173,182,213,201,240,241,263,129,311,317,369,490,496,521,523,527,604,598,693,784,57,67,85,87,97,164,203,214,231,304,399,406,411,447,486,502,528],
t3:[804,799]
},
,
,
,
,{//Sylveon
l:[[574,0],[574,1],[343,1],[44,1],[383,1],[226,1],[36,1],[204,1],[38,1],[270,1],[33,1],[45,1],[39,1],[28,5],[98,10],[608,15],[129,20],[113,25],[577,30],[581,35],[285,40],[244,45],[585,50],[387,55]],
m:[6,63,416,345,91,113,115,219,156,173,182,204,213,240,241,263,129,270,311,313,496,514,577,581,595,34,116,164,473,203,214,226,231,247,285,304,347,500,526,583,605],
t3:[802]
},{//Hawlucha
l:[[33,1],[468,1],[17,4],[197,8],[332,12],[227,16],[297,20],[66,24],[340,28],[269,32],[355,36],[14,40],[560,44],[136,48],[283,52],[143,56]],
m:[5,25,7,9,19,416,91,156,157,173,182,211,213,240,241,263,129,270,279,280,317,340,369,371,372,374,409,490,496,512,514,206,14,67,97,164,179,203,214,226,227,269,276,339,370,398,404,411,413,428,442,444,447,502,526,675,776],
e:[494,501,364,432,212,238],
t3:[811,814]
},{//Dedenne
l:[[609,1],[39,1],[33,5],[268,10],[84,15],[204,20],[570,25],[521,30],[156,35],[173,35],[435,40],[583,45],[162,50],[494,55],[87,60]],
m:[9,416,86,91,156,168,173,182,204,213,240,241,263,270,369,374,496,514,521,527,604,598,85,87,164,203,214,231,447,486,502,528,583,605],
e:[343,715,393],
t3:[804]
},
,{//Goomy
l:[[71,1],[33,1],[55,5],[225,10],[182,15],[175,20],[352,25],[240,30],[406,35],[174,41],[34,45],[330,50]],
m:[156,157,173,182,213,240,241,263,341,496,34,85,164,188,200,203,214,231,330,406,482],
e:[68,791],
t:[434],
t3:[806]
},{//Sliggoo
l:[[491,0],[491,1],[71,1],[33,1],[55,1],[225,1],[182,15],[175,20],[352,25],[240,30],[406,35],[174,43],[34,49],[330,56]],
m:[156,157,173,182,213,240,241,263,341,496,34,58,59,85,164,188,200,203,214,231,330,406,482],
t:[434],
t3:[806]
},{//Goodra
l:[[401,0],[401,1],[491,1],[342,1],[715,1],[364,1],[71,1],[33,1],[55,1],[225,1],[182,15],[175,20],[352,25],[240,30],[406,35],[174,43],[34,49],[330,58],[438,67]],
m:[5,25,7,9,63,416,156,157,173,182,213,240,241,258,263,311,341,372,496,523,693,707,784,34,53,56,57,58,59,85,87,89,126,164,188,200,203,214,231,276,330,406,411,438,482,776],
t:[434],
t3:[806]
},{//Klefki
l:[[587,1],[310,1],[33,4],[584,8],[259,12],[578,16],[319,20],[577,24],[278,28],[286,32],[430,36],[583,40],[478,44],[492,48],[387,52]],
m:[63,416,86,113,115,219,156,168,173,182,213,240,241,263,286,478,496,577,581,94,164,191,473,203,214,334,347,430,492,500,583,605],
e:[415,393]
},{//Phantump
l:[[310,1],[33,1],[785,4],[73,8],[109,12],[261,16],[506,20],[74,24],[532,28],[174,32],[566,36],[275,40],[452,44],[194,48],[571,52]],
m:[345,76,91,115,219,156,157,168,173,182,202,213,241,261,263,286,421,433,496,506,523,566,94,164,203,214,247,271,285,398,399,402,412,447,492,502,599],
e:[288,389,50],
t3:[803,806,809]
},{//Trevenant
l:[[421,0],[421,1],[310,1],[33,1],[785,1],[73,1],[109,12],[261,16],[506,20],[74,24],[532,28],[174,32],[566,36],[275,40],[452,44],[194,48],[571,52]],
m:[63,416,345,76,91,115,219,156,157,168,173,182,202,213,241,261,263,286,409,421,433,496,506,523,566,693,89,94,164,203,214,247,271,285,347,398,399,402,404,411,412,437,447,492,502,599],
t3:[803,806,809]
},{//Pumpkaboo
l:[[567,1],[310,1],[425,4],[109,8],[567,12],[75,12],[73,16],[331,20],[567,24],[184,24],[388,28],[402,32],[567,36],[247,36],[271,40],[220,44]],
m:[76,113,219,156,157,168,173,182,184,202,213,241,261,263,286,331,433,496,506,595,53,94,126,164,188,203,214,247,271,285,360,399,402,412,447,492,502],
e:[50,194,174],
t3:[803,806,809]
},{//Gourgeist
l:[[153,1],[585,1],[567,1],[310,1],[425,1],[109,1],[567,12],[75,12],[73,16],[331,20],[567,24],[184,24],[388,28],[402,32],[567,36],[247,36],[271,40],[220,44],[566,48]],
m:[63,416,76,113,219,156,157,168,173,182,184,202,213,241,261,263,286,331,433,496,506,566,595,693,53,94,126,164,188,203,214,247,271,285,360,399,402,411,412,417,438,447,492,502],
t3:[803,806,809]
},{//Bergmite
l:[[229,1],[106,1],[33,3],[181,6],[174,9],[196,12],[182,15],[419,18],[44,21],[423,24],[334,27],[105,30],[242,33],[36,36],[59,39],[38,42]],
m:[219,156,157,173,182,196,213,240,258,263,317,333,419,423,496,57,58,59,164,203,214,242,334,360,430,444],
e:[54,243,694]
},{//Avalugg
l:[[34,0],[34,1],[469,1],[229,1],[106,1],[33,1],[181,1],[174,9],[196,12],[182,15],[419,18],[44,21],[423,24],[334,27],[105,30],[242,33],[36,36],[59,41],[38,46],[130,51]],
m:[63,416,219,156,157,173,182,196,213,240,258,263,317,333,419,423,496,523,707,34,56,57,58,59,89,164,203,214,242,276,334,360,430,442,444,484,667,776]
},{//Noibat
l:[[71,1],[33,1],[16,4],[48,8],[104,12],[17,16],[44,20],[314,24],[18,28],[162,32],[403,36],[103,40],[355,44],[366,49],[542,52]],
m:[19,76,103,156,168,173,182,211,213,241,263,129,280,369,421,496,512,403,94,97,141,164,200,203,214,231,247,253,257,269,304,399,404,406,528,542],
e:[432,407],
t3:[814]
},{//Noivern
l:[[406,0],[406,1],[236,1],[71,1],[33,1],[16,1],[48,1],[104,12],[17,16],[44,20],[314,24],[18,28],[162,32],[403,36],[103,40],[355,44],[366,51],[542,56],[586,62]],
m:[19,63,416,76,103,156,168,173,182,211,213,241,263,129,280,369,421,496,512,403,53,94,97,141,164,200,203,214,231,247,253,257,269,304,337,349,399,404,406,411,528,542],
t3:[814]
},
,
,
,
,
,
,{//Rowlet
l:[[33,1],[45,1],[670,3],[310,6],[64,9],[425,12],[75,15],[235,18],[365,21],[417,24],[389,27],[348,30],[297,33],[413,36]],
m:[76,113,219,156,173,182,202,211,213,241,263,129,421,496,206,14,164,203,214,226,348,402,412,413,417,447,526],
e:[109,432,282,104],
t:[520],
t3:[803,814]
},{//Dartrix
l:[[33,1],[45,1],[670,1],[310,1],[64,9],[425,12],[75,15],[235,20],[365,25],[417,30],[389,35],[348,40],[297,45],[413,50]],
m:[76,113,219,156,173,182,202,211,213,241,263,129,421,496,206,14,164,203,214,226,348,402,412,413,417,447,526],
t:[520],
t3:[803,814]
},{//Decidueye
l:[[662,0],[662,1],[566,1],[437,1],[369,1],[180,1],[33,1],[45,1],[670,1],[310,1],[64,9],[425,12],[75,15],[235,20],[365,25],[417,30],[389,37],[348,44],[297,51],[413,58]],
m:[63,416,76,669,113,219,156,173,182,202,211,213,241,263,129,286,369,421,427,490,496,506,512,566,206,403,14,164,203,214,226,247,348,402,412,413,417,437,447,526,542],
t:[338,520],
t3:[803,814,806,809]
},{//Litten
l:[[10,1],[45,1],[52,3],[122,6],[46,9],[154,12],[44,15],[24,18],[424,21],[184,24],[207,27],[53,30],[37,33],[394,36]],
m:[6,83,156,173,182,184,213,241,261,263,279,369,421,424,496,512,14,34,53,126,141,164,200,203,214,242,257,269,315,339,394,417,526],
e:[252,681,575],
t:[519]
},{//Torracat
l:[[10,1],[45,1],[52,1],[122,1],[46,9],[154,12],[44,15],[24,20],[424,25],[184,30],[207,35],[53,40],[37,45],[394,50]],
m:[6,83,156,173,182,184,213,241,261,263,279,369,421,424,496,512,14,34,53,126,141,164,200,203,214,242,257,269,315,339,394,417,526],
t:[519]
},{//Incineroar
l:[[663,0],[663,1],[238,1],[675,1],[339,1],[10,1],[45,1],[52,1],[122,1],[46,9],[154,12],[44,15],[24,20],[424,25],[184,30],[207,32],[53,44],[37,51],[394,58]],
m:[5,25,6,7,9,63,416,83,156,173,182,184,213,241,261,263,279,280,369,372,374,409,421,424,490,496,512,523,555,693,707,14,34,53,67,89,126,141,164,179,200,203,214,242,257,269,276,299,315,339,370,394,399,411,417,442,526,535,663,675],
t:[307,519],
t3:[807,815,808]
},{//Popplio
l:[[1,1],[45,1],[55,3],[574,6],[453,9],[608,12],[196,15],[47,18],[61,21],[227,24],[581,27],[304,30],[585,33],[56,36]],
m:[156,173,182,196,204,213,240,258,250,263,270,291,362,472,496,512,577,581,56,57,58,59,127,133,164,203,214,227,231,253,304,503,526,583],
e:[392,195,791],
t:[518],
t3:[812,813]
},{//Brionne
l:[[1,1],[45,1],[55,1],[574,1],[453,9],[608,12],[196,15],[47,20],[61,25],[227,30],[581,35],[304,40],[585,45],[56,50]],
m:[156,173,182,196,204,213,240,258,250,263,270,291,362,472,496,512,577,581,56,57,58,59,127,133,164,203,214,227,231,253,304,503,526,583],
t:[518],
t3:[812,813]
},{//Primarina
l:[[664,0],[664,1],[1,1],[45,1],[55,1],[574,1],[453,9],[608,12],[196,15],[47,20],[61,25],[227,30],[581,37],[304,44],[585,51],[56,58]],
m:[63,416,113,115,156,173,182,196,204,213,240,258,250,263,270,291,311,362,472,496,512,577,581,56,57,58,59,94,127,133,164,203,214,227,231,247,253,304,347,412,500,503,526,583,605,710],
t:[308,518],
t3:[812,813,802]
},
,
,
,
,
,{//Grubbin
l:[[11,1],[189,1],[81,5],[450,10],[44,15],[209,21],[564,25],[404,30],[242,35],[91,40]],
m:[86,91,103,113,156,173,182,213,240,263,341,496,512,521,527,85,164,203,214,242,398,404,528],
e:[106,435],
t3:[804,806]
},{//Charjabug
l:[[268,0],[268,1],[11,1],[189,1],[81,1],[450,1],[44,15],[209,23],[564,29],[404,36],[242,43],[91,50],[334,57],[435,64]],
m:[86,91,103,113,156,173,182,213,240,263,341,496,512,521,527,598,85,164,203,214,242,334,398,404,486,528],
t3:[804,806]
},{//Vikavolt
l:[[85,0],[85,1],[268,1],[404,1],[242,1],[91,1],[334,1],[435,1],[11,1],[189,1],[81,1],[450,1],[44,15],[209,23],[564,29],[405,36],[12,43],[19,50],[97,57],[192,64]],
m:[19,63,416,76,86,91,103,113,156,173,182,213,240,263,341,496,512,521,527,598,403,85,87,97,164,203,214,242,334,398,404,405,412,430,486,528],
t3:[804,814,806]
},
,
,
,{//Cutiefly
l:[[71,1],[584,1],[78,6],[230,12],[577,18],[522,24],[312,30],[415,36],[605,42],[405,48],[483,54]],
m:[113,115,219,156,168,173,182,204,213,241,263,129,270,286,313,369,683,472,478,496,512,577,94,141,164,203,214,226,271,285,347,405,412,502,583,605],
e:[585,564,597],
t3:[814]
},{//Ribombee
l:[[676,0],[676,1],[343,1],[71,1],[584,1],[78,1],[230,1],[577,18],[522,24],[312,32],[415,40],[605,48],[405,56],[483,64]],
m:[63,416,345,76,113,115,219,156,168,173,182,204,213,241,263,129,270,286,313,369,683,472,478,496,512,577,94,141,164,203,214,226,271,285,347,405,412,502,583,605,676],
t3:[814]
},{//Rockruff
l:[[33,1],[43,1],[28,4],[104,8],[88,12],[336,16],[44,20],[317,24],[46,28],[157,32],[242,36],[184,40],[446,44],[444,48]],
m:[156,157,173,182,184,213,263,317,422,424,496,555,707,14,164,203,214,231,242,269,304,334,414,428,442,444,446,583],
e:[37,283,387]
},{//Lycanroc
forms:[
{
	l:[[389,0],[389,1],[709,1],[501,1],[98,1],[33,1],[43,1],[28,1],[104,1],[88,12],[336,16],[44,20],[317,24],[46,30],[157,36],[242,42],[184,48],[446,54],[444,60]],
	m:[416,156,157,173,182,184,213,201,263,129,280,317,350,372,422,424,496,541,555,707,14,97,164,203,214,231,242,269,304,334,339,370,414,428,442,444,446,529,583,706]
},{
	l:[[68,0],[68,1],[203,1],[179,1],[269,1],[33,1],[43,1],[28,1],[104,1],[88,12],[336,16],[44,20],[317,24],[46,30],[157,36],[242,42],[184,48],[446,54],[444,60]],
	m:[5,25,7,9,416,156,157,173,182,184,213,201,263,279,280,317,350,371,422,424,490,496,555,707,14,164,179,200,203,214,231,242,253,269,304,334,339,370,414,428,442,444,446,492,583,675,706],
	t3:[808]
},{
	l:[[306,0],[306,1],[389,1],[709,1],[501,1],[98,1],[68,1],[203,1],[179,1],[269,1],[33,1],[43,1],[28,1],[104,1],[88,12],[336,16],[44,20],[317,24],[46,30],[157,36],[242,42],[184,48],[446,54],[444,60]],
	m:[416,156,157,173,182,184,213,201,263,280,317,350,422,424,496,541,555,707,14,116,164,179,200,203,214,231,242,269,304,334,339,370,414,428,442,444,446,526,529,583,706]
}
]
},{//Wishiwashi
l:[[55,1],[45,1],[270,4],[251,8],[362,12],[715,16],[291,20],[487,24],[253,28],[401,32],[392,36],[283,40],[56,44],[38,48]],
m:[156,173,182,213,240,258,250,251,263,270,291,341,362,369,496,523,56,57,58,89,127,164,203,214,231,253,330,503,710],
e:[54,352,36],
t3:[812,799]
},{//Mareanie
l:[[40,1],[64,1],[469,5],[44,10],[474,15],[105,20],[42,25],[390,30],[710,35],[599,40],[398,45],[92,50]],
m:[42,219,156,173,182,196,213,240,258,263,341,362,371,474,496,56,57,58,59,164,188,203,214,330,334,390,398,441,482,503,599,710],
e:[254,256,255,114,611]
},{//Toxapex
l:[[661,0],[661,1],[40,1],[64,1],[469,1],[44,1],[474,15],[105,20],[42,25],[390,30],[710,35],[599,42],[398,49],[92,56]],
m:[42,113,219,156,173,182,196,213,240,258,263,341,362,371,440,474,496,506,56,57,58,59,164,188,203,214,330,334,390,398,441,482,503,599,710]
},{//Mudbray
l:[[189,1],[249,1],[334,4],[24,8],[523,12],[23,16],[70,20],[68,24],[667,28],[484,32],[89,36],[25,40],[276,44]],
m:[25,156,157,173,182,213,201,263,317,328,371,490,496,523,707,34,67,89,164,203,214,276,334,370,414,442,446,484,667],
e:[38,90,479,46]
},{//Mudsdale
l:[[189,1],[249,1],[334,1],[24,1],[523,12],[23,16],[70,20],[68,24],[667,28],[484,34],[89,40],[25,46],[276,52]],
m:[25,63,416,156,157,173,182,184,213,201,263,279,317,328,341,371,490,496,523,707,34,67,89,164,203,214,276,334,370,411,414,442,446,484,667,776],
t3:[808]
},{//Dewpider
l:[[55,1],[611,1],[450,4],[44,8],[61,12],[392,16],[29,20],[242,24],[487,28],[494,32],[679,36],[710,40],[141,44],[243,48]],
m:[156,173,182,196,202,213,240,263,472,478,496,57,58,59,127,141,164,203,214,242,334,398,404,405,503,710],
e:[471,254,255,564],
t3:[806]
},{//Araquanid
l:[[469,1],[55,1],[611,1],[450,1],[44,1],[61,12],[392,16],[29,20],[242,26],[487,32],[494,38],[679,44],[710,50],[141,56],[243,62]],
m:[115,219,156,173,182,196,202,213,240,263,291,472,478,496,56,57,58,59,127,141,164,203,214,242,334,398,404,405,503,710],
t3:[806]
},{//Fomantis
l:[[670,1],[210,1],[74,5],[275,10],[75,15],[230,20],[163,25],[404,30],[235,35],[348,40],[241,45],[76,50]],
m:[345,76,219,156,173,182,202,213,241,263,311,331,371,374,496,206,14,141,164,203,214,348,398,402,404,412,437,447],
e:[312,432,388],
t3:[803]
},{//Lurantis
l:[[572,0],[572,1],[400,1],[76,1],[530,1],[670,1],[210,1],[74,1],[275,1],[75,15],[230,20],[163,25],[404,30],[235,37],[348,44],[241,51],[669,63]],
m:[63,416,345,76,669,219,156,173,182,202,213,241,263,280,311,331,371,374,427,440,490,496,580,206,14,141,164,203,214,276,348,398,402,404,412,437,447],
t3:[803]
},{//Morelull
l:[[71,1],[310,1],[109,4],[275,8],[72,12],[79,16],[236,20],[668,25],[202,28],[605,32],[147,36],[585,40],[138,44]],
m:[76,86,113,219,156,173,182,202,213,241,263,472,478,496,577,133,164,188,203,214,402,412,447,605,676],
e:[77,78,74,73]
},{//Shiinotic
l:[[71,1],[310,1],[109,1],[275,1],[72,12],[79,16],[236,20],[668,27],[202,32],[605,38],[147,44],[585,50],[138,56]],
m:[63,416,76,86,113,219,156,173,182,202,213,240,241,263,311,409,472,478,496,577,133,164,188,203,214,402,412,447,605,676]
},{//Salandit
l:[[10,1],[139,1],[123,5],[52,10],[305,15],[230,20],[417,25],[510,30],[474,35],[406,40],[599,45],[53,50],[92,55],[283,60]],
m:[86,156,168,173,182,213,251,261,263,129,270,371,374,421,474,496,53,126,141,164,188,203,214,231,257,269,315,337,398,406,417,441,482,492,599],
e:[562,28,252,189],
t3:[806,799]
},{//Salazzle
l:[[680,0],[680,1],[282,1],[227,1],[259,1],[207,1],[50,1],[10,1],[283,1],[1,1],[139,1],[123,1],[52,1],[305,15],[230,20],[417,25],[510,30],[474,37],[406,44],[599,51],[53,58],[92,65]],
m:[86,156,168,173,182,213,251,261,263,129,270,313,371,374,421,440,474,496,512,784,53,126,141,164,188,203,214,227,231,257,269,315,337,349,394,398,406,417,441,482,492,599],
t3:[810,806,799]
},{//Stufful
l:[[33,1],[43,1],[608,4],[371,8],[693,12],[203,16],[70,20],[36,24],[175,28],[359,32],[37,36],[220,40],[38,44],[276,48]],
m:[5,25,8,9,156,157,173,182,204,213,263,280,317,371,374,490,496,523,693,707,14,89,164,203,214,269,276,339,411,428,442,526],
e:[395,205,111,23],
t3:[811]
},{//Bewear
l:[[20,0],[20,1],[33,1],[43,1],[608,1],[371,1],[693,12],[203,16],[70,20],[36,24],[175,30],[359,36],[37,42],[220,48],[38,54],[276,60]],
m:[5,25,8,9,63,416,156,157,173,182,204,213,263,279,280,317,371,374,409,421,490,496,523,693,707,14,34,67,89,164,179,203,214,269,276,337,339,370,411,428,442,526,663,667,776],
t3:[811]
},{//Bounsweet
l:[[150,1],[589,4],[229,8],[75,12],[230,16],[345,20],[175,24],[298,28],[597,32],[312,36]],
m:[345,76,113,115,219,156,173,182,202,204,213,241,263,270,340,496,577,164,203,214,402,412,428,447,583,605],
e:[235,367,283],
t3:[803]
},{//Steenee
l:[[175,1],[150,1],[589,1],[229,1],[75,1],[230,16],[345,22],[23,28],[298,34],[597,40],[312,46],[437,52]],
m:[345,76,113,115,219,156,173,182,202,204,213,241,263,270,340,371,374,490,496,577,164,203,214,402,412,428,437,447,583,605],
t3:[803,813]
},{//Tsareena
l:[[688,0],[688,1],[438,1],[175,1],[589,1],[150,1],[207,1],[229,1],[75,1],[230,16],[345,22],[23,28],[298,34],[597,40],[312,46],[437,52],[136,58]],
m:[25,63,416,345,76,669,113,115,219,156,173,182,202,204,213,241,263,270,340,369,371,374,490,496,512,577,67,164,203,214,269,402,412,428,437,438,447,583,605],
t3:[803,813]
},{//Comfey
l:[[35,1],[74,1],[22,3],[270,6],[577,9],[579,12],[345,15],[235,18],[73,21],[447,24],[186,27],[666,30],[572,33],[312,36],[583,39],[230,42],[80,45],[580,48]],
m:[63,345,76,113,219,156,168,173,182,202,204,213,241,263,270,331,369,374,433,496,512,577,580,133,164,203,214,227,269,271,347,402,412,447,500,502,583,605,676],
e:[495,388,536],
t3:[803]
},{//Oranguru
l:[[93,1],[269,1],[495,5],[347,10],[500,15],[244,20],[511,25],[417,30],[428,35],[433,40],[94,45],[689,50],[492,55],[248,60]],
m:[5,25,63,416,113,115,219,156,157,173,182,213,240,241,263,280,286,371,374,433,472,478,496,523,678,693,85,87,89,94,164,473,203,214,227,247,248,269,271,347,411,412,417,428,492,500,502,526],
e:[326,281,387,138],
t3:[805,797]
},{//Passimian
l:[[33,1],[43,1],[249,5],[116,10],[251,15],[184,20],[36,25],[374,30],[339,35],[37,40],[38,45],[370,50],[179,55],[416,60]],
m:[5,25,63,416,156,157,168,173,182,184,213,240,241,251,263,279,280,317,369,371,372,374,409,490,496,512,514,523,527,693,89,116,164,179,203,214,231,247,253,269,276,339,360,370,402,411,412,441,442,447,526],
e:[69,233,501,98,364,68,282],
t3:[811]
},{//Wimpod
l:[[522,1],[28,1],[111,1]],
m:[103,156,173,182,213,240,258,263,129,341,372,496,57,127,141,164,191,203,214,269,405,503],
e:[232,469,106,453,205],
t3:[806]
},{//Golisopod
l:[[660,0],[660,1],[522,1],[28,1],[111,1],[180,1],[249,4],[210,8],[341,12],[450,16],[334,20],[389,24],[163,28],[534,32],[42,36],[14,40],[710,44]],
m:[42,63,416,103,156,157,173,182,196,213,240,258,263,129,280,291,317,341,371,372,374,421,474,496,534,555,206,14,57,58,59,127,141,164,188,191,203,214,269,330,334,339,370,398,399,404,405,411,442,482,503,529,675,710],
t3:[806]
},{//Sandygast
l:[[71,1],[106,1],[310,5],[328,10],[72,15],[28,20],[523,25],[95,30],[202,35],[334,40],[247,45],[414,50],[659,55],[201,60]],
m:[156,157,173,182,202,213,201,263,317,328,341,362,496,523,89,94,133,164,188,203,214,247,271,285,334,412,414,444,446],
e:[246,194,255,254,256,174],
t3:[815,809]
},{//Palossand
l:[[71,1],[106,1],[310,1],[328,1],[72,15],[28,20],[523,25],[95,30],[202,35],[334,40],[247,47],[414,54],[659,61],[201,68]],
m:[416,156,157,173,182,202,213,201,263,317,328,341,362,374,496,523,89,94,133,164,188,203,214,247,271,285,334,412,414,444,446],
t3:[805,815,809]
},{//Pyukumuku
l:[[226,1],[106,1],[270,5],[269,10],[219,15],[68,20],[685,25],[174,30],[380,35],[220,40],[105,45],[487,50],[92,55],[262,60]],
m:[103,113,115,219,156,182,213,240,258,270,164,203,214,226,269,599],
e:[321,180,243,207]
},{//Type: Null
l:[[33,1],[286,1],[332,5],[184,10],[458,15],[319,20],[306,25],[403,30],[161,35],[404,40],[442,45],[36,50],[38,55]],
m:[63,416,86,156,157,173,182,184,196,201,240,241,258,263,129,286,369,371,421,496,403,14,161,164,203,214,334,337,404,442,526],
t3:[805]
},{//Silvally
l:[[718,0],[718,1],[153,1],[422,1],[423,1],[424,1],[305,1],[286,1],[442,1],[33,1],[44,1],[332,1],[184,1],[458,15],[319,20],[306,25],[403,30],[161,35],[404,40],[242,45],[36,50],[38,55],[575,60]],
m:[63,416,86,120,156,157,173,182,184,196,211,201,240,241,258,263,129,286,369,371,421,422,423,424,496,555,403,14,53,57,58,85,161,164,179,200,203,214,242,247,257,304,334,337,404,428,430,442,526,706],
t:[434,520,796],
t3:[805]
},
,
,{//Turtonator
l:[[123,1],[33,1],[52,4],[182,8],[203,12],[175,16],[510,20],[334,24],[406,28],[34,32],[53,36],[704,40],[504,44],[315,48],[153,52]],
m:[5,25,63,416,76,83,156,173,182,213,241,261,263,279,317,371,374,474,496,523,693,707,34,53,89,126,164,200,203,214,231,253,257,269,304,315,334,337,339,406,411,430,442,444,484,526,535,776],
e:[469,457,229,174],
t:[434],
t3:[807,815,799,808]
},{//Togedemaru
l:[[609,1],[33,1],[111,5],[268,10],[84,15],[565,20],[209,25],[42,30],[393,35],[716,40],[435,45],[604,50],[528,55],[596,60]],
m:[42,63,416,86,115,156,168,173,182,213,263,129,270,340,369,371,372,374,496,521,527,604,598,85,87,97,164,179,203,214,227,231,360,398,428,442,447,486,526,528],
e:[217,273,252,321,175,574],
t:[796],
t3:[804,798]
},{//Mimikyu
l:[[452,1],[150,1],[310,1],[10,1],[383,1],[425,6],[104,12],[608,18],[102,24],[468,30],[163,36],[421,42],[204,48],[583,54],[220,60]],
m:[63,416,86,103,113,219,156,168,173,182,202,204,213,251,261,263,371,374,409,421,433,478,496,506,566,577,14,85,87,94,141,164,203,214,247,269,271,339,399,404,526,583,605],
e:[288,194,174],
t3:[807]
},
,{//Drampa
l:[[589,1],[497,1],[239,5],[182,10],[137,15],[219,20],[225,25],[326,30],[406,35],[113,40],[19,45],[304,50],[200,55]],
m:[19,63,416,76,86,113,219,156,157,173,182,196,211,213,240,241,263,129,270,374,421,496,523,555,707,784,53,56,57,58,59,85,87,89,126,133,164,200,203,214,247,253,257,276,304,337,347,349,406,411,412,447,526,542,583],
e:[407,54,321],
t:[434],
t3:[799,808]
},{//Dhelmise
l:[[71,1],[229,1],[310,4],[35,8],[72,12],[74,16],[360,20],[415,24],[202,28],[250,32],[484,36],[21,40],[247,44],[319,48],[677,52],[412,56],[566,60],[438,64]],
m:[63,416,76,669,156,157,168,173,182,202,240,241,250,263,270,280,362,371,372,421,496,506,523,566,693,14,56,57,89,164,203,214,247,330,334,360,412,430,438,442,447,482,484,502,710,776],
t3:[803,809,798]
},{//Jangmo-o
l:[[33,1],[43,1],[182,4],[525,8],[184,12],[29,16],[526,20],[103,24],[334,28],[337,32],[568,36],[349,40],[200,44]],
m:[103,219,156,157,173,182,184,213,201,263,280,317,371,374,421,496,523,206,14,67,89,164,179,200,203,214,231,253,269,334,337,339,349,404,406,411,442,526],
e:[68,225,264],
t:[434],
t3:[799]
},{//Hakamo-o
l:[[475,1],[33,1],[43,1],[182,1],[525,1],[184,12],[29,16],[526,20],[103,24],[334,28],[337,32],[568,38],[349,44],[200,50],[370,56]],
m:[5,25,103,219,156,157,173,182,184,213,201,263,280,317,371,374,409,421,496,523,206,693,14,67,89,164,179,200,203,214,231,253,269,334,337,339,349,370,404,406,411,442,526],
t:[434],
t3:[811,799]
},{//Kommo-o
l:[[691,0],[691,1],[187,1],[475,1],[33,1],[43,1],[182,1],[525,1],[184,12],[29,16],[526,20],[103,24],[334,28],[337,32],[568,38],[349,44],[200,52],[370,60],[775,68],[586,76]],
m:[5,25,7,8,9,63,416,103,219,156,157,173,182,184,213,201,263,279,280,317,371,374,409,421,496,523,206,693,707,784,14,53,67,89,164,179,200,203,214,231,253,269,276,304,334,337,339,349,370,396,398,404,406,411,430,442,446,526,776],
t:[434],
t3:[811,799]
},
,
,
,
,{//Cosmog
l:[[150,1],[100,1]]
},{//Cosmoem
l:[[322,0],[322,1],[100,1]],
m:[322]
},{//Solgaleo
l:[[713,0],[713,1],[322,1],[100,1],[232,1],[568,1],[442,7],[319,14],[428,21],[430,28],[234,35],[242,42],[368,49],[528,56],[76,63],[394,70],[469,77],[416,84]],
m:[63,416,76,83,86,113,115,219,156,157,173,182,184,241,263,129,270,317,433,496,523,555,595,53,85,87,89,94,97,126,164,200,473,203,214,231,242,248,276,304,322,334,347,360,370,394,411,428,430,442,444,484,526,528,535,706],
t3:[797,800,798]
},{//Lunala
l:[[714,0],[714,1],[322,1],[100,1],[93,1],[95,1],[101,7],[109,14],[403,21],[247,28],[236,35],[539,42],[277,49],[585,56],[566,63],[138,70],[469,77],[63,84]],
m:[19,63,416,76,86,113,115,219,156,173,182,184,196,241,261,263,129,270,421,427,433,472,478,496,506,512,566,403,58,59,85,87,94,97,164,473,203,214,247,248,257,271,322,347,411,526,605],
t3:[814,797,800,809]
},
,
,
,
,
,
,
,{//Necrozma
forms:[
{
	l:[[236,1],[234,1],[451,1],[356,1],[232,1],[93,1],[446,8],[163,16],[400,24],[427,32],[500,40],[350,48],[334,56],[408,64],[722,72],[475,80],[711,88]]
},{
	l:[[236,1],[234,1],[451,1],[356,1],[232,1],[93,1],[446,8],[163,16],[400,24],[427,32],[500,40],[350,48],[334,56],[408,64],[722,72],[475,80],[711,88]]
},{
	l:[[236,1],[234,1],[451,1],[356,1],[232,1],[93,1],[446,8],[163,16],[400,24],[427,32],[500,40],[350,48],[334,56],[408,64],[722,72],[475,60],[711,66]]
}
],
m:[63,416,76,86,113,115,156,157,168,173,182,184,263,280,286,317,350,374,421,427,433,496,523,684,693,784,14,89,94,164,200,473,203,214,248,257,304,322,334,347,349,360,399,404,406,408,414,430,442,444,446,500,502,706],
t3:[797,800],
c:[93,713,714]
},{//Magearna
l:[[360,1],[270,1],[111,6],[205,12],[334,18],[674,24],[60,30],[62,36],[170,42],[508,48],[578,54],[442,60],[396,66],[430,72],[220,78],[192,84],[705,90]],
m:[63,416,76,86,113,115,120,156,173,182,270,280,286,384,385,683,433,496,521,527,577,598,206,58,85,97,161,164,203,226,227,247,271,334,347,360,396,411,412,428,430,442,447,486,500,605],
t3:[798,802]
},{//Marshadow
l:[[9,1],[7,1],[8,1],[383,1],[425,1],[364,1],[68,1],[272,9],[325,18],[395,27],[372,36],[389,45],[409,54],[244,63],[712,72],[673,81],[283,90],[370,99]],
m:[5,25,7,8,9,63,416,156,157,168,173,182,261,263,129,279,280,317,340,371,372,374,409,421,490,496,506,512,566,206,67,97,164,179,200,203,214,247,276,299,339,347,370,396,398,411,428,442,444,447,492,526,675],
t3:[811,806,809]
},
,
,
,
,{//Zeraora
l:[[612,1],[252,1],[10,1],[98,1],[555,1],[209,1],[154,8],[501,16],[163,24],[521,32],[268,40],[9,48],[468,56],[435,64],[528,72],[97,80],[721,88],[370,96]],
m:[5,25,6,7,9,63,416,86,156,173,182,184,263,129,270,279,280,340,372,374,409,490,496,512,521,527,555,604,206,693,67,85,87,97,164,179,200,203,214,231,269,276,299,339,347,370,396,411,447,486,526,528,583,675],
t3:[804,811]
},{//Meltan
l:[[84,1],[106,1],[39,8],[29,16],[86,24],[151,32],[430,40]],
m:[86,156,173,182,263,496,85,164,203,214,334,360,430],
t:[796]
},{//Melmetal
l:[[9,0],[9,1],[84,1],[106,1],[39,1],[29,1],[86,24],[151,32],[430,40],[5,48],[182,56],[435,64],[223,72],[276,80],[742,88],[63,96]],
m:[5,25,8,9,63,416,76,86,120,156,157,173,182,263,280,317,496,604,693,34,58,85,87,89,164,203,214,276,334,360,430,442,484,663,667,776],
t:[796],
t3:[798]
},{//Grookey
l:[[10,1],[45,1],[785,6],[269,8],[75,12],[103,17],[282,20],[21,24],[253,28],[452,32],[283,36]],
m:[5,25,345,76,669,103,156,173,182,202,213,241,263,129,369,372,374,409,496,512,206,14,67,116,164,203,214,253,269,412,447,526],
e:[74,359,252,70,267,388,73],
t:[520],
t3:[803]
},{//Thwackey
l:[[458,0],[458,1],[10,1],[45,1],[785,1],[269,1],[75,12],[103,19],[282,24],[21,30],[253,36],[452,42],[283,48]],
m:[5,25,345,76,669,103,156,173,182,202,213,241,263,129,369,372,374,409,496,512,206,14,67,116,164,203,214,253,269,412,447,526],
t:[520],
t3:[803]
},{//Rillaboom
l:[[778,0],[778,1],[458,1],[580,1],[568,1],[10,1],[45,1],[785,1],[269,1],[75,12],[103,19],[282,24],[21,30],[253,38],[452,46],[283,54],[586,62]],
m:[5,25,63,416,345,76,669,103,156,173,182,184,202,213,241,263,129,280,331,341,369,372,374,409,496,512,523,555,580,206,693,707,14,34,67,89,116,164,203,214,253,269,276,304,339,411,412,414,437,447,526,663,667,776],
t:[338,520],
t3:[803]
},{//Scorbunny
l:[[33,1],[45,1],[52,6],[98,8],[24,12],[488,17],[97,20],[29,24],[68,28],[340,32],[38,36]],
m:[25,156,173,182,213,241,263,129,340,341,369,372,424,490,496,512,53,67,97,116,126,164,179,203,214,226,257,269,299,315,441,486,502,526],
e:[136,28,389,162],
t:[519]
},{//Raboot
l:[[33,1],[45,1],[52,1],[98,1],[24,12],[488,19],[97,24],[29,30],[68,36],[340,42],[38,48]],
m:[25,156,173,182,213,241,263,129,340,341,369,372,424,490,496,512,53,67,97,116,126,164,179,203,214,226,257,269,299,315,339,394,441,486,502,526],
t:[519]
},{//Cinderace
l:[[780,0],[780,1],[364,1],[33,1],[45,1],[52,1],[98,1],[24,12],[488,19],[97,24],[29,30],[68,38],[340,46],[38,54],[756,62]],
m:[25,7,63,416,83,156,173,182,213,241,263,129,270,279,340,341,369,372,424,490,496,512,555,53,67,97,116,126,164,179,203,214,226,247,257,269,299,315,339,394,411,428,441,442,486,502,526],
t:[307,519],
t3:[811,815]
},{//Sobble
l:[[1,1],[45,1],[55,6],[20,8],[352,12],[715,17],[389,20],[369,24],[710,28],[487,32],[240,36]],
m:[113,115,219,156,173,182,213,240,250,263,129,291,311,340,341,369,496,57,164,203,214,226,330,526,710],
e:[453,104,392,54,114,420,565],
t:[518]
},{//Drizzile
l:[[1,1],[45,1],[55,1],[20,1],[352,12],[715,19],[389,24],[369,30],[710,36],[487,42],[240,48]],
m:[113,115,219,156,173,182,213,240,250,263,129,291,311,340,341,369,374,496,57,164,203,214,226,330,526,710],
t:[518]
},{//Inteleon
l:[[745,0],[745,1],[512,1],[1,1],[45,1],[55,1],[20,1],[352,12],[715,19],[389,24],[369,30],[710,38],[487,46],[240,54],[56,62]],
m:[63,416,113,115,219,156,173,182,196,213,240,250,263,129,291,311,333,340,341,369,374,496,512,403,784,14,56,57,58,59,97,116,118,127,164,203,214,226,247,330,399,503,526,710],
t:[308,518],
t3:[799]
},{//Skwovet
l:[[33,1],[39,1],[44,5],[747,10],[254,15],[256,15],[255,15],[34,20],[156,25],[68,30],[331,35],[162,40],[562,45]],
m:[91,156,168,173,182,213,263,331,341,371,372,374,496,541,693,34,133,164,203,214,231,242,253,304,360,402],
e:[205,111,387,187]
},{//Greedent
l:[[343,0],[343,1],[33,1],[39,1],[44,1],[747,1],[254,15],[256,15],[255,15],[34,20],[156,27],[68,34],[331,41],[162,48],[562,55]],
m:[63,416,91,156,168,173,182,213,263,331,341,371,372,374,422,423,424,496,541,693,707,14,34,89,133,164,203,214,231,242,253,276,304,360,402,528,706,776]
},{//Rookidee
l:[[64,1],[43,1],[681,4],[468,8],[31,12],[365,16],[269,20],[184,24],[65,28],[207,32],[413,36]],
m:[19,156,168,173,182,184,213,263,129,279,313,369,371,372,496,514,403,97,116,164,179,203,214,269,413,417,526],
e:[143,28,366,432,249,180,355],
t3:[814]
},{//Corvisquire
l:[[64,1],[43,1],[681,1],[468,1],[31,12],[365,16],[269,22],[184,28],[65,34],[207,40],[413,46]],
m:[19,156,168,173,182,184,213,263,129,279,313,369,371,372,496,514,403,97,116,164,179,203,214,269,413,417,526],
t3:[814]
},{//Corviknight
l:[[211,0],[211,1],[334,1],[319,1],[64,1],[43,1],[681,1],[468,1],[31,12],[365,16],[269,22],[184,28],[65,34],[207,42],[413,50]],
m:[19,63,416,103,113,115,156,168,173,182,184,211,213,263,129,279,313,369,371,372,496,514,403,34,97,116,164,179,203,214,269,334,339,413,417,430,442,484,526,542,776],
t:[796],
t3:[814]
},{//Blipbug
l:[[522,1]],
e:[611,48,564,105]
},{//Dottler
l:[[115,0],[113,0],[93,0],[115,1],[113,1],[93,1],[522,1]],
m:[76,113,115,219,156,173,182,213,263,270,286,371,384,385,433,472,478,496,678,94,141,164,473,203,214,247,248,271,285,334,347,405,412,428,500,502,776],
t3:[797]
},{//Orbeetle
l:[[115,1],[113,1],[93,1],[522,1],[109,4],[277,8],[97,12],[60,16],[95,20],[502,24],[405,28],[243,32],[94,36],[495,40],[347,44],[678,48]],
m:[63,416,76,113,115,219,156,173,182,202,213,263,270,286,369,371,384,385,427,433,472,478,496,678,94,97,141,164,473,203,214,226,247,248,271,285,334,347,405,412,428,500,502,776],
t3:[797]
},{//Nickit
l:[[98,1],[39,1],[251,4],[468,8],[555,12],[372,16],[417,20],[389,24],[400,28],[541,32],[492,36]],
m:[91,103,156,168,173,182,213,251,263,129,313,341,372,496,541,555,97,164,203,214,226,269,417,492,583],
e:[501,282,336,259],
t3:[808]
},{//Thievul
l:[[168,0],[168,1],[98,1],[39,1],[251,1],[468,1],[555,12],[372,16],[417,22],[389,28],[400,34],[541,40],[492,46],[575,52]],
m:[63,416,91,103,156,168,173,182,213,251,263,129,313,341,369,372,421,422,423,424,496,512,541,555,94,97,164,203,214,226,242,247,269,399,417,447,492,583],
t3:[807,808]
},{//Gossifleur
l:[[670,1],[47,1],[229,4],[230,8],[75,12],[496,16],[536,21],[235,24],[304,28],[312,32],[437,36]],
m:[345,76,113,156,173,182,202,204,213,241,263,270,331,496,580,164,203,214,304,412,437,447,676],
e:[74,73,388,77,78,79],
t3:[803]
},{//Eldegoss
l:[[178,0],[178,1],[670,1],[47,1],[229,1],[230,1],[75,12],[496,16],[536,23],[235,28],[304,34],[312,40],[437,46],[538,52]],
m:[63,416,345,76,113,156,173,182,202,204,213,241,263,270,311,331,496,580,164,203,214,304,402,412,437,447,676],
t3:[803]
},{//Wooloo
l:[[33,1],[45,1],[111,4],[383,8],[470,12],[24,16],[29,21],[36,25],[385,28],[179,32],[538,36],[38,40]],
m:[86,156,173,182,213,263,371,385,496,97,164,179,203,214,486,528],
e:[23,207,68],
t3:[803]
},{//Dubwool
l:[[33,1],[45,1],[111,1],[383,1],[470,12],[24,16],[29,21],[36,27],[385,32],[179,38],[538,44],[38,50],[387,56]],
m:[25,63,416,86,156,173,182,213,263,340,371,385,496,514,14,34,97,164,179,203,214,226,428,486,528,776],
t3:[803]
},{//Chewtle
l:[[33,1],[55,1],[44,7],[182,14],[29,21],[68,28],[746,35],[710,42],[34,49]],
m:[156,173,182,213,240,250,263,279,291,341,371,372,423,496,34,56,57,164,203,214,710],
e:[130,380,525],
t3:[806,799]
},{//Drednaw
l:[[317,0],[317,1],[534,1],[242,1],[397,1],[33,1],[55,1],[44,1],[182,1],[29,21],[68,30],[746,39],[710,48],[34,57],[457,66]],
m:[63,416,91,156,157,173,182,184,213,201,240,250,263,279,291,317,328,341,350,371,372,423,496,523,534,206,684,707,14,34,56,57,58,59,89,127,164,203,214,224,231,242,276,330,334,398,414,444,446,503,667,675,710,776],
t3:[806,800,799]
},{//Yamper
l:[[33,1],[39,1],[609,5],[44,10],[46,15],[209,20],[204,26],[242,30],[268,35],[528,40],[583,45]],
m:[86,91,156,173,182,204,213,263,129,270,422,424,496,521,555,85,87,164,203,214,242,253,486,528,583],
e:[38,28,488,435,336],
t3:[804]
},{//Boltund
l:[[582,1],[33,1],[39,1],[609,1],[44,1],[46,15],[209,20],[204,28],[242,34],[268,41],[528,48],[583,55],[604,62]],
m:[63,416,86,91,156,173,182,204,213,263,129,270,422,424,496,521,555,604,598,85,87,97,116,164,203,214,242,253,304,339,486,528,583,706],
t3:[804]
},{//Rolycoly
l:[[33,1],[108,1],[229,5],[479,10],[397,15],[246,20],[510,25],[446,30],[535,35],[350,40]],
m:[91,115,120,156,157,173,182,213,201,261,263,317,328,350,496,164,191,203,214,334,360,442,444,446,535],
e:[153,189,335],
t3:[800]
},{//Carkol
l:[[488,0],[488,1],[33,1],[108,1],[229,1],[479,1],[397,15],[246,20],[510,27],[446,35],[535,41],[350,48],[682,55]],
m:[83,91,115,120,156,157,173,182,213,201,261,263,317,328,350,496,53,126,164,191,203,214,257,315,334,360,394,442,444,446,484,503,535,667,776],
t3:[815,800]
},{//Coalossal
l:[[749,0],[749,1],[488,1],[33,1],[108,1],[229,1],[479,1],[397,15],[246,20],[510,27],[446,37],[535,45],[350,54],[682,63]],
m:[5,25,7,63,416,76,83,91,115,120,156,157,173,182,213,201,261,263,317,328,350,496,523,34,53,89,126,164,191,203,214,257,315,334,360,394,414,442,444,446,484,503,535,667,776],
t3:[815,800]
},{//Applin
l:[[110,1],[310,1]],
m:[213],
e:[389,205,111,278],
t:[434],
t3:[803]
},{//Flapple
l:[[17,0],[17,1],[278,1],[110,1],[310,1],[74,1],[239,1],[491,4],[512,8],[73,12],[182,16],[225,20],[349,24],[406,28],[788,32],[334,36],[19,40],[407,44]],
m:[19,63,416,76,156,173,182,184,202,213,241,263,331,369,496,512,403,116,164,200,203,214,334,349,402,406,412,447,484],
t:[434],
t3:[803,814]
},{//Appletun
l:[[29,0],[29,1],[278,1],[110,1],[310,1],[74,1],[230,1],[174,4],[23,8],[73,12],[182,16],[331,20],[105,24],[787,28],[34,32],[334,36],[406,40],[412,44]],
m:[63,416,76,113,115,219,156,173,182,202,213,241,263,331,371,496,523,34,89,133,164,200,203,214,276,334,360,402,406,412,447,484,667,776],
t:[434],
t3:[803]
},{//Silicobra
l:[[35,1],[28,1],[107,5],[693,10],[523,15],[29,20],[137,25],[91,30],[201,35],[21,40],[489,45],[328,50]],
m:[91,103,156,173,182,213,201,263,328,341,496,523,693,89,164,203,214,414,529],
e:[407,189,387,562,342],
t3:[815,806,799]
},{//Sandaconda
l:[[130,1],[35,1],[28,1],[107,1],[693,1],[523,15],[29,20],[137,25],[91,30],[201,35],[21,42],[489,49],[328,51]],
m:[63,416,91,103,156,157,173,182,213,201,263,317,328,341,350,424,496,523,693,89,164,200,203,214,334,414,428,442,444,446,529,542,667,776],
t3:[815,806,799]
},{//Cramorant
l:[[562,1],[64,1],[254,1],[256,1],[255,1],[55,7],[31,14],[365,21],[291,28],[65,35],[133,42],[37,49],[56,56]],
m:[19,63,416,156,168,173,182,196,211,213,240,250,263,291,311,372,496,403,56,57,58,59,97,133,164,179,203,214,253,276,413,503,542,675,710],
e:[432,332,297,392,355],
t3:[814]
},{//Arrokuda
l:[[64,1],[453,1],[31,6],[44,12],[97,18],[291,24],[673,30],[242,36],[710,42],[38,48]],
m:[156,173,182,213,240,250,263,129,280,291,340,372,423,496,97,116,127,164,203,214,242,370,398,503,529,675,706,710],
e:[37,367,163,400],
t3:[799]
},{//Barraskewda
l:[[675,1],[64,1],[453,1],[31,1],[44,1],[97,18],[291,24],[673,32],[242,40],[710,48],[38,56]],
m:[63,416,156,173,182,184,213,240,250,263,129,280,291,340,372,423,496,56,57,97,116,127,164,203,214,242,370,398,503,529,675,706,710],
t3:[812,799]
},{//Toxel
l:[[562,1],[715,1],[609,1],[45,1],[175,1],[51,1]],
m:[156,173,182,213,263,496,164,203,214,227],
e:[283,319,612]
},{//Toxtricity
forms:[
{
	l:[[209,0],[209,1],[598,1],[562,1],[715,1],[609,1],[45,1],[175,1],[51,1],[84,1],[491,1],[43,1],[568,1],[268,4],[351,8],[184,12],[269,16],[474,20],[103,24],[207,28],[92,32],[435,36],[398,40],[786,44],[586,48],[508,52]],
	m:[5,25,7,9,63,416,86,103,156,173,182,184,213,263,129,371,374,409,474,496,506,521,555,598,85,87,164,188,203,214,227,253,269,304,398,441,482,486,500,528,675],
	t3:[804]
},{
	l:[[209,0],[209,1],[598,1],[562,1],[715,1],[609,1],[45,1],[175,1],[51,1],[84,1],[491,1],[43,1],[568,1],[268,4],[351,8],[184,12],[269,16],[599,20],[103,24],[207,28],[92,32],[435,36],[398,40],[786,44],[586,48],[602,52]],
	m:[5,25,7,9,63,416,86,103,156,173,182,184,213,263,129,371,374,409,496,506,521,555,598,85,87,164,188,203,214,227,253,269,304,398,441,482,486,500,528,599,675],
	t3:[804]
}
]
},{//Sizzlipede
l:[[52,1],[108,1],[35,5],[44,10],[172,15],[450,20],[489,25],[21,30],[83,35],[242,40],[680,45],[679,50],[682,55]],
m:[83,156,173,182,213,241,263,474,496,693,141,164,203,214,242,257,405,438,503,535],
e:[282,522,205,111],
t3:[815,806]
},{//Centiskorch
l:[[517,1],[52,1],[108,1],[35,1],[44,1],[172,15],[450,20],[489,25],[21,32],[83,39],[242,46],[680,53],[679,60],[682,67]],
m:[63,416,76,83,156,173,182,213,241,261,263,422,424,474,496,595,693,53,126,141,164,203,214,242,257,315,394,404,405,438,503,535],
t3:[815,806]
},{//Clobbopus
l:[[249,1],[43,1],[364,5],[20,10],[197,15],[280,20],[339,25],[66,30],[269,35],[179,40],[276,45]],
m:[5,8,156,173,182,213,263,279,280,291,341,362,371,496,514,34,127,164,179,203,214,269,276,330,339,370,411,526,710],
e:[220,487,389,509,69,612],
t3:[811]
},{//Grapploct
l:[[753,0],[753,1],[190,1],[249,1],[43,1],[364,1],[20,1],[197,15],[280,20],[339,25],[66,30],[269,35],[179,40],[276,45],[576,50]],
m:[5,8,63,416,91,156,173,182,184,213,250,263,279,280,291,341,362,371,409,496,514,693,707,34,56,57,127,164,179,203,214,269,276,330,339,370,411,526,710],
t3:[811,806]
},{//Sinistea
l:[[310,1],[110,1],[597,6],[72,12],[182,18],[389,24],[312,30],[202,36],[417,42],[247,48],[262,54],[504,60]],
m:[156,173,182,202,261,263,286,371,472,496,506,566,94,118,164,473,203,214,226,247,271,399,417,492,500,502],
t3:[809]
},{//Polteageist
l:[[752,0],[752,1],[668,1],[310,1],[110,1],[597,1],[72,1],[182,18],[389,24],[312,30],[202,36],[417,42],[247,48],[262,54],[504,60],[174,66]],
m:[63,416,113,115,120,156,173,182,202,261,263,286,371,472,496,506,566,94,118,164,473,203,214,226,247,271,399,417,492,500,502],
t3:[809]
},{//Hatenna
l:[[93,1],[589,1],[791,5],[574,10],[312,15],[60,20],[505,25],[605,30],[347,35],[94,40],[361,45]],
m:[345,86,113,219,156,173,182,202,204,213,263,270,286,496,577,595,94,164,473,203,214,226,285,347,399,500,583,605],
e:[597,609,495,511],
t3:[797]
},{//Hattrem
l:[[693,0],[693,1],[93,1],[589,1],[791,1],[574,1],[312,15],[60,20],[505,25],[605,30],[347,37],[94,44],[361,51]],
m:[345,86,113,219,156,173,182,202,204,213,263,270,286,496,577,595,693,94,164,473,203,214,226,285,347,399,500,583,605],
t3:[797]
},{//Hatterene
l:[[427,0],[427,1],[693,1],[93,1],[589,1],[791,1],[574,1],[312,15],[60,20],[505,25],[605,30],[347,37],[94,46],[361,55],[750,64]],
m:[63,416,345,86,113,219,156,173,182,202,204,213,263,270,286,384,385,421,427,433,472,478,496,577,595,693,14,94,164,473,203,214,226,247,248,285,347,399,438,500,583,605],
t3:[797,802]
},{//Impidimp
l:[[252,1],[590,1],[44,4],[260,8],[313,12],[372,16],[207,20],[389,24],[259,28],[399,33],[417,36],[583,40],[492,44]],
m:[5,25,86,156,168,173,182,213,263,279,313,372,409,496,514,577,67,118,141,164,203,214,253,269,271,399,417,492,583,605],
t3:[807,808]
},{//Morgrem
l:[[793,0],[793,1],[252,1],[590,1],[44,1],[260,1],[313,12],[372,16],[207,20],[389,24],[259,28],[399,35],[417,40],[583,46],[492,52]],
m:[5,25,86,113,115,156,168,173,182,213,263,279,313,372,409,421,496,514,577,67,118,141,164,203,214,253,269,271,399,417,492,583,605,675],
t3:[807,808]
},{//Grimmsnarl
l:[[789,0],[789,1],[793,1],[339,1],[612,1],[252,1],[590,1],[44,1],[260,1],[313,12],[372,16],[207,20],[389,24],[259,28],[399,35],[417,40],[583,48],[492,56],[359,64]],
m:[5,25,7,8,9,63,416,86,113,115,156,168,173,182,184,213,263,279,280,313,372,384,409,421,472,490,496,514,577,707,34,67,116,118,141,164,203,214,242,253,269,271,276,339,399,411,417,438,492,583,605,663,675,776],
t3:[807,808]
},{//Obstagoon
l:[[792,0],[792,1],[238,1],[66,1],[400,1],[415,1],[42,1],[608,1],[33,1],[43,1],[28,1],[122,1],[555,9],[29,12],[468,15],[154,18],[156,23],[36,28],[184,35],[68,42],[269,49],[38,56]],
m:[5,25,7,8,9,42,63,416,86,91,103,156,168,173,182,184,196,213,240,241,250,263,129,270,279,280,313,341,371,372,374,421,440,496,514,555,707,34,57,58,59,67,85,87,116,164,179,203,214,231,247,269,271,304,334,339,370,402,404,441,447,526,675,776],
t3:[808]
},{//Perrserker
l:[[442,0],[442,1],[368,1],[334,1],[252,1],[45,1],[468,1],[10,1],[6,12],[232,16],[269,20],[207,24],[154,31],[103,36],[163,42],[319,48],[37,54]],
m:[6,63,416,91,103,156,168,173,182,213,240,241,263,369,371,372,374,421,496,514,14,34,85,87,133,164,203,214,226,231,242,247,253,269,304,334,360,370,399,402,417,441,442,484,492,526,583,675],
t:[796],
t3:[808]
},{//Cursola
l:[[195,1],[33,1],[106,1],[310,1],[50,1],[180,15],[246,20],[506,25],[174,30],[668,35],[408,40],[101,45],[288,50],[243,55]],
m:[42,63,416,91,103,113,115,219,120,156,157,173,182,196,202,213,201,240,241,258,250,261,263,279,317,333,350,362,496,506,523,707,34,56,57,58,59,89,94,133,141,164,203,214,247,334,347,408,414,444,446,503,675,710],
t3:[807,800,809]
},{//Sirfetch’d
l:[[334,0],[334,1],[660,1],[64,1],[28,1],[43,1],[210,1],[249,15],[693,20],[197,25],[282,30],[432,35],[280,40],[14,45],[21,50],[348,55],[515,60],[413,65],[794,70]],
m:[669,156,173,182,211,213,241,263,270,279,280,372,496,514,693,14,34,116,164,203,214,276,334,348,370,398,413,526,675],
t3:[803,811,814]
},{//Mr. Rime
l:[[313,1],[303,1],[495,1],[335,1],[383,1],[227,1],[272,1],[182,1],[278,1],[102,1],[113,1],[115,1],[219,1],[605,1],[581,1],[1,1],[229,1],[226,1],[420,1],[93,12],[502,16],[196,20],[24,24],[60,28],[95,32],[243,36],[389,40],[573,44],[94,48],[298,52]],
m:[5,25,8,63,416,76,86,103,113,115,219,156,168,173,182,196,204,213,240,241,258,263,270,280,313,333,371,374,384,385,409,419,433,472,478,496,581,678,707,34,58,59,85,87,94,118,164,473,203,214,226,227,247,248,253,269,271,285,334,347,411,412,417,428,447,492,500,502,605],
t3:[813,797]
},{//Runerigus
l:[[421,0],[421,1],[184,1],[310,1],[182,1],[114,1],[101,1],[50,12],[693,16],[578,20],[506,24],[212,28],[21,32],[174,38],[247,44],[89,50],[471,56],[470,56],[194,62]],
m:[63,416,219,156,157,168,173,182,184,213,201,240,261,263,279,286,313,317,328,350,371,384,385,421,433,472,496,506,523,566,693,89,94,133,164,203,214,247,269,271,285,334,347,390,399,406,412,414,417,428,444,446,447,502,776],
t3:[809]
},{//Milcery
l:[[33,1],[597,1],[186,5],[230,10],[577,15],[312,20],[213,25],[151,30],[605,35],[105,40],[581,45],[494,50]],
m:[156,173,182,204,213,263,270,374,496,577,581,164,203,214,500,605],
e:[608,387]
},{//Alcremie
l:[[777,0],[777,1],[33,1],[597,1],[186,1],[230,1],[577,15],[312,20],[213,25],[151,30],[605,35],[105,40],[581,45],[494,50]],
m:[63,416,345,76,113,219,156,173,182,202,204,213,263,270,286,313,374,409,472,478,496,577,581,595,94,118,161,164,473,203,214,227,347,412,500,583,605],
t3:[802]
},{//Falinks
l:[[33,1],[182,1],[249,5],[116,10],[29,15],[339,20],[203,25],[179,30],[660,35],[748,40],[334,45],[370,50],[224,55],[68,60]],
m:[63,416,103,156,157,173,182,251,263,270,279,280,317,371,372,496,514,206,684,14,97,116,164,179,203,214,224,276,334,339,370,398,411,428,442,675],
t3:[811]
},{//Pincurchin
l:[[64,1],[84,1],[55,5],[268,10],[31,15],[209,20],[61,25],[105,30],[174,35],[604,40],[398,45],[716,50],[367,55],[435,60]],
m:[42,86,120,156,173,182,213,240,263,362,371,372,474,496,506,604,56,57,85,87,164,179,191,203,214,330,390,398,503,599,675,710],
e:[262,389],
t3:[804]
},{//Snom
l:[[181,1],[522,1]],
m:[156,173,182,196,213,263,333,496,164,203,214,405],
e:[584,243,450],
t3:[806]
},{//Frosmoth
l:[[196,0],[196,1],[181,1],[522,1],[270,1],[213,1],[78,4],[611,8],[54,12],[432,16],[297,21],[62,24],[258,28],[405,32],[694,36],[59,40],[366,44],[469,48],[483,52]],
m:[63,416,113,115,219,156,173,182,196,202,213,258,263,270,286,311,333,369,419,496,512,403,58,59,141,164,203,214,347,405,542,583,605],
t3:[813,814,806]
},{//Stonjourner
l:[[88,1],[335,1],[397,6],[317,12],[356,18],[23,24],[446,30],[157,36],[34,42],[469,48],[484,54],[444,60],[25,66]],
m:[25,63,416,219,120,156,157,173,182,213,201,263,286,317,328,350,372,472,496,523,693,707,34,89,164,203,214,276,334,414,444,446,484,535,776],
e:[174,246],
t3:[800]
},{//Eiscue
l:[[181,1],[33,1],[54,6],[311,12],[196,18],[29,24],[133,30],[573,36],[258,42],[694,48],[57,54],[59,60]],
m:[8,115,156,173,182,196,213,258,250,263,291,311,333,362,419,496,56,57,58,59,97,127,133,164,179,203,214,334,428,442,710],
e:[487,392,187,38,556,457]
},{//Indeedee
forms:[
{
	l:[[500,1],[589,1],[227,5],[574,10],[60,15],[270,20],[495,25],[312,30],[94,35],[347,40],[471,45],[678,50],[387,55]],
	m:[6,345,156,173,182,213,263,129,270,286,384,409,433,472,478,496,577,678,595,94,118,161,164,473,203,214,227,247,248,271,304,347,412,428,500,502,583,605],
	e:[244,252,326]
},{
	l:[[500,1],[589,1],[226,5],[574,10],[60,15],[270,20],[266,25],[312,30],[94,35],[347,40],[470,45],[678,50],[361,55]],
	m:[6,345,113,115,219,156,173,182,213,263,129,270,286,385,409,496,577,678,595,94,118,164,473,203,214,226,247,248,271,304,347,412,428,500,502,583,605],
	e:[244,252,375,505]
}
],
t3:[805,797]
},{//Morpeko
l:[[84,1],[39,1],[43,5],[681,10],[98,15],[260,20],[44,25],[209,30],[259,35],[97,40],[331,45],[242,50],[783,55],[37,60]],
m:[9,86,156,168,173,182,184,213,263,129,279,280,313,331,371,372,374,422,423,424,496,521,527,555,604,707,85,87,97,164,200,203,214,242,253,269,399,402,417,486,492,528,706],
e:[207,162,268,321,229,511,575,252],
t3:[804,808]
},{//Cufant
l:[[33,1],[45,1],[205,5],[249,10],[523,15],[23,20],[334,25],[91,30],[70,35],[442,40],[583,45],[667,50],[276,55]],
m:[25,91,103,156,157,173,182,213,263,280,317,341,350,374,496,523,693,707,34,164,203,214,276,334,414,428,438,442,446,526,583,667,776],
e:[38,562,174,21,90,207,18,111],
t:[796],
t3:[798]
},{//Copperajah
l:[[484,0],[484,1],[33,1],[45,1],[205,1],[249,1],[523,15],[23,20],[334,25],[91,30],[70,37],[442,44],[583,51],[667,58],[276,65]],
m:[25,63,416,91,103,156,157,173,182,184,213,263,279,280,317,341,350,371,374,496,523,555,693,707,34,89,164,200,203,214,269,276,334,414,428,430,438,442,444,446,484,526,535,583,667,776],
t:[796],
t3:[798]
},{//Dracozolt
l:[[33,1],[84,1],[268,7],[332,14],[246,21],[365,28],[525,35],[23,42],[21,49],[435,56],[754,63],[406,70],[407,77]],
m:[5,25,9,63,416,83,86,156,157,173,182,240,241,263,317,350,422,424,496,523,693,707,784,34,53,67,85,87,89,126,164,200,203,214,231,269,337,406,414,444,486,528,667],
t:[434],
t3:[804,800]
},{//Arctozolt
l:[[181,1],[84,1],[268,7],[497,14],[246,21],[365,28],[419,35],[573,42],[21,49],[435,56],[754,63],[556,70],[59,77]],
m:[5,25,9,63,416,86,156,157,173,182,196,240,258,263,317,333,350,371,419,422,423,496,523,707,34,56,57,58,59,67,85,87,164,203,214,231,269,304,444,486,528],
t3:[804,800]
},{//Dracovish
l:[[33,1],[55,1],[182,7],[693,14],[246,21],[44,28],[225,35],[23,42],[162,49],[242,56],[755,63],[406,70],[407,77]],
m:[25,63,416,156,157,173,182,240,250,263,291,317,350,362,423,496,523,693,707,34,56,57,67,89,127,141,164,200,203,214,242,406,414,428,442,444,503,706,710],
t:[434],
t3:[800]
},{//Arctovish
l:[[181,1],[55,1],[182,7],[196,14],[246,21],[44,28],[694,35],[573,42],[162,49],[242,56],[755,63],[556,70],[59,77]],
m:[63,416,156,157,173,182,196,240,258,250,263,291,317,333,350,362,419,423,496,34,56,57,58,59,127,164,203,214,242,334,428,442,444,706,710],
t3:[800]
},{//Duraludon
l:[[232,1],[43,1],[249,6],[468,12],[319,18],[784,24],[525,30],[334,36],[673,42],[337,48],[430,54],[368,60],[63,66]],
m:[63,416,76,86,103,113,115,156,157,173,182,184,213,263,280,317,496,555,707,784,14,34,85,87,164,200,203,214,334,337,360,399,406,430,442,444,446,484,492,776],
e:[163,400,243],
t:[434,796],
t3:[798]
},{//Dreepy
l:[[310,1],[611,1],[98,1],[44,1]],
m:[86,156,173,182,213,263,129,270,496,164,203,214,226],
e:[174,288,109,104,50,525,389],
t:[434]
},{//Drakloak
l:[[406,0],[406,1],[310,1],[611,1],[98,1],[44,1],[199,6],[372,12],[506,18],[97,24],[458,30],[369,36],[349,42],[566,48],[36,54],[407,61],[38,66],[387,72]],
m:[86,156,168,173,182,211,213,251,261,263,129,270,291,362,369,372,496,506,512,566,784,53,56,57,85,87,97,126,164,200,203,214,226,247,349,406,502,503,706],
t:[434]
},{//Dragapult
l:[[751,0],[751,1],[225,1],[389,1],[310,1],[611,1],[98,1],[44,1],[199,6],[372,12],[506,18],[97,24],[458,30],[369,36],[349,42],[566,48],[36,54],[407,63],[38,70],[387,78]],
m:[19,63,416,76,86,113,115,156,168,173,182,211,213,251,261,263,129,270,291,362,369,372,496,506,512,566,784,34,53,56,57,85,87,97,126,161,164,200,203,214,226,247,337,349,406,502,503,706],
t:[434]
},{//Zacian
l:[[533,1],[501,1],[232,1],[336,1],[98,1],[44,1],[163,11],[14,22],[442,33],[673,44],[242,55],[585,66],[370,77],[416,88]],
m:[63,416,669,91,156,173,182,184,263,129,270,279,280,286,372,422,423,424,427,496,514,541,555,206,403,693,14,97,116,164,179,203,214,231,242,304,370,411,442,526,528,583,706],
t:[796]
},{//Zamazenta
l:[[368,1],[469,1],[232,1],[336,1],[98,1],[44,1],[163,11],[334,22],[442,33],[673,44],[242,55],[585,66],[370,77],[416,88]],
m:[63,416,76,91,113,115,219,156,173,182,184,263,129,270,279,286,371,384,385,422,423,424,496,514,541,555,97,116,164,179,203,214,231,242,304,334,370,411,430,442,526,528,583,605,706],
t:[796],
t3:[811]
},{//Eternatus
l:[[342,1],[109,1],[525,1],[97,1],[92,8],[474,16],[349,24],[440,32],[406,40],[53,48],[744,56],[322,64],[105,72],[63,80],[795,88]],
m:[19,63,416,76,103,113,115,156,173,182,184,263,371,372,440,474,496,595,693,53,97,164,188,203,214,247,322,349,390,398,406,430,482,599],
t:[434],
t3:[800]
},{//Kubfu
l:[[249,1],[43,1],[203,4],[116,8],[332,12],[184,16],[29,20],[280,24],[197,28],[339,32],[442,36],[223,40],[68,44],[370,48],[264,52]],
m:[5,25,7,8,9,91,156,173,182,184,213,263,270,279,280,369,490,496,512,514,34,67,116,164,179,203,214,276,339,370,428,442,526],
t3:[811]
},{//Urshifu
forms:[
{
	l:[[817,0],[817,1],[389,1],[249,1],[43,1],[203,1],[116,1],[332,12],[184,16],[29,20],[280,24],[197,28],[339,32],[442,36],[223,40],[68,44],[370,48],[264,52]],
	m:[5,25,7,8,9,416,91,156,157,173,182,184,213,251,263,129,270,279,280,317,369,371,372,374,409,490,496,512,514,555,206,34,67,116,164,179,203,214,242,269,276,334,339,370,396,398,399,411,428,442,444,492,526,663,675,776],
	t3:[811,808]
},{
	l:[[818,0],[818,1],[453,1],[249,1],[43,1],[203,1],[116,1],[332,12],[184,16],[29,20],[280,24],[197,28],[339,32],[442,36],[223,40],[68,44],[370,48],[264,52]],
	m:[5,25,7,8,9,416,91,156,157,173,182,184,213,240,250,263,129,270,279,280,291,317,362,369,409,490,496,512,514,206,34,67,116,127,164,179,203,214,269,276,334,339,370,396,398,411,428,442,444,503,526,710,776],
	t3:[811]
}
]
},{//Zarude
l:[[20,1],[10,1],[43,6],[22,12],[74,18],[154,24],[184,30],[447,36],[44,42],[369,48],[207,54],[412,60],[235,66],[359,72],[37,78],[438,84],[816,90]],
m:[5,25,63,416,345,76,669,91,156,157,168,173,182,184,202,241,263,129,279,280,317,331,341,369,371,372,374,409,496,512,555,580,693,707,34,67,164,203,214,227,231,242,269,276,304,339,370,399,402,412,417,438,447,663,675],
t3:[803,808]
}
];
