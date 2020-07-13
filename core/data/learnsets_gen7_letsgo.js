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
[["Absorb","Vol-Vie","Absorber","Assorbimento","Absorber","すいとる"],11,1,15,40,100],
[["Mega Drain","Méga-Sangsue","Megasauger","Megassorbimento","Megaagotar","メガドレイン"],11,1,10,75,100],
[["Leech Seed","Vampigraine","Egelsamen","Parassiseme","Drenadoras","やどりぎのタネ"],11,2,10,0,90],
[["Growth","Croissance","Wachstum","Crescita","Desarrollo","せいちょう"],0,2,20,0,0],
[["Razor Leaf","Tranch&#39;Herbe","Rasierblatt","Foglielama","Hoja Afilada","はっぱカッター"],11,0,25,55,95],
[["Solar Beam","Lance-Soleil","Solarstrahl","Solarraggio","Rayo Solar","ソーラービーム"],11,1,10,200,100],
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
[["Sky Attack","Piqué","Himmelsfeger","Aeroattacco","Ataque Aéreo","ゴッドバード"],2,0,5,200,90],
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
[["Rapid Spin","Tour Rapide","Turbodreher","Rapigiro","Giro Rápido","こうそくスピン"],0,0,40,20,100],
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
,
,
,
,
,
,
,
,
,
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
[["Multi-Attack","Coup Varia-Type","Multi-Angriff","Multiattacco","Multiataque","マルチアタック"],0,0,10,90,100],
,
[["Mind Blown","Caboche-Kaboum","Knallkopf","Sbalorditesta","Cabeza Sorpresa","ビックリヘッド"],9,1,5,150,100],
[["Plasma Fists","Plasma Punch","Plasmafäuste","Pugni Plasma","Puños Plasma","プラズマフィスト"],12,0,15,100,100],
[["Photon Geyser","Photo-Geyser","Photonen-Geysir","Geyser Fotonico","Géiser Fotónico","フォトンゲイザー"],13,1,5,100,100],
,
,
,
,
,
,
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
[["Double Iron Bash","Écrous d&#39;Poing","Panzerfäuste","Pugni Corazzati","Ferropuño Doble","ダブルパンツァー"],8,0,5,60,100]
];
const LEARNSET_GAMES=GAMES;
const LEARNSET_GAMES_ID=GAME_ID;
const TMs=[,29,269,270,100,156,113,182,164,115,91,261,263,280,19,69,86,525,369,231,399,492,157,9,404,127,398,92,161,503,339,7,605,347,406,8,85,53,87,200,94,89,120,247,583,76,126,57,63,276,355,59,188,72,430,58,446,6,529,138,224];
//const HMs;

/*
	l: levelup
		[moveIndex]
	m: machine
	e: egg moves
	t: tutors
	s: special
*/
var LEARNSETS=[,
{//Bulbasaur
l:[[33,1],[45,1],[22,5],[73,9],[77,14],[79,14],[36,18],[75,23],[74,27],[38,32]],
m:[29,156,113,182,164,115,263,92,200,76,188,72]
},{//Ivysaur
l:[[33,1],[45,1],[22,1],[73,1],[22,5],[73,9],[77,14],[79,14],[36,22],[75,31],[74,39],[38,48],[76,56]],
m:[29,156,113,182,164,115,263,92,200,76,188,72]
},{//Venusaur
l:[[80,1],[133,1],[438,1],[33,1],[45,1],[22,1],[73,1],[80,0],[22,5],[73,9],[77,14],[79,14],[36,22],[75,31],[74,44],[38,58],[76,71]],
m:[29,156,113,182,164,115,263,92,200,89,76,63,188,72]
},{//Charmander
l:[[10,1],[45,4],[108,9],[52,13],[154,18],[82,22],[83,27],[163,31],[53,36]],
m:[29,156,182,164,115,91,261,263,280,69,231,157,9,92,7,406,53,200,126]
},{//Charmeleon
l:[[10,1],[45,1],[108,1],[52,1],[45,4],[108,9],[52,13],[154,20],[82,26],[83,33],[163,39],[53,46]],
m:[29,156,182,164,115,91,261,263,280,69,231,157,9,92,7,406,53,200,126]
},{//Charizard
l:[[17,1],[68,1],[242,1],[257,1],[10,1],[45,1],[108,1],[52,1],[17,0],[45,4],[108,9],[52,13],[154,20],[82,26],[83,33],[163,43],[53,54],[403,62],[394,75]],
m:[29,156,182,164,115,91,261,263,280,19,69,525,231,157,9,92,7,406,53,200,89,76,126,63,355]
},{//Squirtle
l:[[33,1],[39,5],[145,9],[110,14],[55,18],[44,23],[61,27],[182,32],[29,36],[56,41],[130,45]],
m:[29,156,182,164,115,91,263,280,69,231,157,127,92,503,406,8,200,57,59,58]
},{//Wartortle
l:[[33,1],[39,1],[145,1],[110,1],[39,5],[145,9],[110,14],[55,20],[44,27],[61,33],[182,40],[29,46],[56,53],[130,59]],
m:[29,156,182,164,115,91,263,280,69,231,157,127,92,503,406,8,200,57,59,58]
},{//Blastoise
l:[[430,1],[252,1],[453,1],[33,1],[39,1],[145,1],[110,1],[39,5],[145,9],[110,14],[55,20],[44,27],[61,33],[182,44],[29,54],[56,65],[130,75]],
m:[29,156,182,164,115,91,263,280,69,525,231,399,157,127,92,503,406,8,200,89,57,63,59,430,58]
},{//Caterpie
l:[[33,1],[81,1]]
},{//Metapod
l:[[106,1],[106,0]]
},{//Butterfree
l:[[16,1],[93,1],[16,0],[77,13],[78,13],[79,13],[60,16],[48,19],[483,22],[18,25],[403,28],[405,31]],
m:[29,100,156,182,164,115,263,369,92,94,247,76,63,355,72,138]
},{//Weedle
l:[[40,1],[81,1]]
},{//Kakuna
l:[[106,1],[106,0]]
},{//Beedrill
l:[[41,1],[64,1],[41,0],[99,13],[31,16],[116,19],[398,22],[97,25],[42,28],[200,31]],
m:[29,156,182,164,115,263,280,369,404,398,92,200,76,63,355,188,72,529]
},{//Pidgey
l:[[33,1],[28,3],[16,5],[119,9],[98,11],[17,15],[355,17],[18,21],[97,23],[403,27],[13,29]],
m:[29,156,182,164,115,263,19,369,92,355]
},{//Pidgeotto
l:[[33,1],[28,1],[16,1],[98,1],[28,3],[16,5],[98,9],[119,11],[17,15],[355,17],[18,25],[97,31],[403,39],[13,45]],
m:[29,156,182,164,115,263,19,369,92,355]
},{//Pidgeot
l:[[143,1],[257,1],[33,1],[28,1],[16,1],[98,1],[28,3],[16,5],[98,9],[119,11],[17,15],[355,17],[18,25],[97,31],[403,43],[13,53]],
m:[29,156,182,164,115,263,19,369,92,63,355]
},{//Rattata
l:[[33,1],[39,3],[98,6],[116,9],[44,12],[162,15],[242,18],[158,21],[389,24],[38,27]],
m:[29,269,156,182,164,91,263,369,231,92,247,59,58],
forms:[
{
	m:[86,85,87]
},{
	m:[399,188]
}]
},{//Raticate
l:[[14,1],[68,1],[154,1],[33,1],[39,1],[98,1],[116,1],[39,3],[98,6],[116,9],[44,12],[162,15],[242,18],[158,26],[389,34],[38,42]],
m:[29,269,156,182,164,91,263,369,231,92,247,63,59,58],
forms:[
{
	m:[86,85,87]
},{
	m:[399,339,188]
}]
},{//Spearow
l:[[64,1],[45,3],[43,8],[116,11],[31,16],[119,19],[355,24],[97,27],[65,32]],
m:[29,156,182,164,263,19,369,92,161,355,529]
},{//Fearow
l:[[143,1],[529,1],[98,1],[64,1],[45,1],[43,1],[116,1],[45,3],[43,8],[116,11],[31,16],[119,19],[355,29],[97,37],[65,47]],
m:[29,156,182,164,263,19,369,92,161,63,355,529]
},{//Ekans
l:[[35,1],[40,1],[43,4],[51,8],[44,12],[114,16],[137,20],[398,24],[21,28],[103,32],[92,36]],
m:[29,156,182,164,91,263,231,399,157,398,92,89,188,72]
},{//Arbok
l:[[242,1],[389,1],[35,1],[40,1],[43,1],[51,1],[242,0],[43,4],[51,9],[44,12],[114,16],[137,20],[398,28],[21,36],[103,44],[92,52]],
m:[29,156,182,164,91,263,525,231,399,157,398,92,89,63,188,72]
},{//Pikachu
l:[[84,1],[45,1],[39,3],[98,6],[24,9],[104,12],[86,15],[113,18],[85,21],[21,24],[97,27],[87,30]],
m:[29,270,156,113,182,164,115,91,263,280,69,86,231,9,92,347,85,87,6],
forms:[
{
},{
},{
},{
},{
},{
},{
},{
},{
},{
},{
},{
},{
},{
	t:[729,730,731]
}]
},{//Raichu
l:[[9,1],[227,1],[252,1],[84,1],[45,1],[39,1],[98,1],[9,0]],
m:[29,270,156,113,182,164,115,91,263,280,69,86,231,9,92,347,85,87,63,6],
forms:[
{
	l:[[94,0],[94,1],[227,1],[252,1],[84,1],[45,1],[39,1],[104,1]],
	m:[100,94]
}]
},{//Sandshrew
l:[[10,1],[111,1],[40,4],[28,8],[129,12],[154,16],[91,20],[182,24],[14,28],[163,32],[89,36]],
m:[29,156,182,164,91,263,280,69,231,157,404,398,92,89,446],
forms:[
{
},{
	l:[[10,1],[111,1],[117,4],[420,8],[129,12],[243,16],[154,20],[8,24],[14,28],[163,32],[59,36]],
	m:[8,59,58]
}]
},{//Sandslash
l:[[68,1],[10,1],[111,1],[40,1],[28,1],[40,4],[28,8],[129,12],[154,16],[91,20],[182,28],[14,36],[163,44],[89,52]],
m:[29,156,182,164,91,263,280,69,231,157,404,398,92,89,63,446,529],
forms:[
{
},{
	l:[[68,1],[10,1],[111,1],[117,1],[420,1]],
	m:[8,59,58]
}]
},{//Nidoran♀
l:[[45,1],[10,1],[39,3],[40,6],[24,9],[44,12],[270,15],[92,18],[154,21],[242,24],[162,27]],
m:[29,270,156,182,164,115,91,263,231,398,92,85,87,59,188,58]
},{//Nidorina
l:[[45,1],[10,1],[39,1],[40,1],[39,3],[40,6],[24,9],[44,12],[270,15],[92,23],[154,31],[242,39],[162,47]],
m:[29,270,156,182,164,115,91,263,231,398,92,85,87,59,188,58]
},{//Nidoqueen
l:[[34,1],[48,1],[68,1],[45,1],[10,1],[39,1],[40,1],[34,0],[276,55]],
m:[29,269,270,156,182,164,115,91,263,280,69,525,231,157,9,398,92,7,406,8,85,53,87,200,89,247,126,57,63,276,59,188,58,446,6,529]
},{//Nidoran♂
l:[[43,1],[64,1],[116,3],[40,6],[24,9],[30,12],[270,15],[92,18],[31,21],[398,24],[32,27]],
m:[29,270,156,182,164,115,91,263,231,398,92,85,87,59,188,58,529]
},{//Nidorino
l:[[43,1],[64,1],[116,1],[40,1],[116,3],[40,6],[24,9],[30,12],[270,15],[92,23],[31,31],[398,39],[32,47]],
m:[29,270,156,182,164,115,91,263,231,398,92,85,87,59,188,58,529]
},{//Nidoking
l:[[37,1],[48,1],[68,1],[43,1],[64,1],[116,1],[40,1],[37,0],[224,55]],
m:[29,269,270,156,182,164,115,91,263,280,69,525,231,157,9,398,92,7,406,8,85,53,87,200,89,247,126,57,63,276,59,188,58,446,6,529,224]
},{//Clefairy
l:[[45,1],[1,1],[111,4],[47,6],[107,10],[3,12],[133,16],[118,18],[227,22],[34,24],[585,28]],
m:[29,270,100,156,113,182,164,115,91,263,280,69,86,231,9,92,161,7,605,347,8,85,53,87,94,247,583,76,126,59,58,446,138]
},{//Clefable
l:[[118,1],[45,1],[1,1],[111,1],[47,1],[118,0]],
m:[29,270,100,156,113,182,164,115,91,263,280,69,86,231,9,92,161,7,605,347,8,85,53,87,94,247,583,76,126,63,59,58,446,138]
},{//Vulpix
l:[[33,1],[39,3],[52,7],[98,10],[109,14],[261,17],[83,21],[53,24],[46,28],[126,31]],
m:[29,156,182,164,115,91,263,231,399,492,92],
forms:[
{
	m:[261,53,126]
},{
	l:[[33,1],[39,3],[54,7],[420,10],[109,14],[62,17],[605,21],[58,24],[46,28],[59,31]],
	m:[605,59,58]
}]
},{//Ninetales
l:[[95,1],[417,1],[33,1],[39,1],[52,1],[98,1]],
m:[29,156,182,164,115,91,263,231,399,492,92,347,63,138],
forms:[
{
	m:[261,53,76,126]
},{
	l:[[95,1],[417,1],[33,1],[39,1],[54,1],[420,1]],
	m:[605,59,58]
}]
},{//Jigglypuff
l:[[47,1],[1,4],[111,6],[117,10],[3,12],[50,16],[156,18],[34,22],[102,24],[38,28]],
m:[29,270,100,156,113,182,164,115,91,263,280,69,86,9,92,161,7,605,8,85,53,87,94,247,583,76,126,59,58,446,138]
},{//Wigglytuff
l:[[47,1],[1,1],[107,1],[117,1]],
m:[29,270,100,156,113,182,164,115,91,263,280,69,86,9,92,161,7,605,8,85,53,87,94,247,583,76,126,63,59,58,446,138]
},{//Zubat
l:[[71,1],[48,1],[17,4],[44,9],[129,12],[109,17],[114,20],[141,25],[92,28],[403,33]],
m:[29,269,156,182,164,263,19,369,92,247,355,188,72]
},{//Golbat
l:[[242,1],[18,1],[98,1],[71,1],[48,1],[17,1],[44,1],[242,0],[17,4],[44,8],[129,12],[109,17],[114,20],[141,31],[92,40],[403,51]],
m:[29,269,156,182,164,263,19,369,92,247,63,355,188,72]
},{//Oddish
l:[[71,1],[74,4],[51,8],[77,12],[78,13],[79,14],[75,18],[72,22],[92,26],[585,30]],
m:[29,156,182,164,115,263,92,605,76,188,72]
},{//Gloom
l:[[71,1],[74,1],[51,1],[77,1],[74,4],[51,8],[77,12],[78,13],[79,14],[75,18],[72,27],[92,36],[585,45]],
m:[29,156,182,164,115,263,92,605,76,188,72]
},{//Vileplume
l:[[76,1],[71,1],[74,1],[51,1],[77,1],[80,54]],
m:[29,156,182,164,115,263,92,605,76,63,188,72]
},{//Paras
l:[[10,1],[79,2],[78,4],[77,6],[71,9],[74,12],[154,15],[163,19],[141,23],[147,27],[404,31]],
m:[29,156,113,182,164,115,91,263,280,404,92,76,188,72]
},{//Parasect
l:[[73,1],[103,1],[10,1],[79,1],[78,1],[77,1],[79,2],[78,4],[77,6],[71,9],[74,12],[154,15],[163,19],[141,23],[147,33],[404,43]],
m:[29,156,113,182,164,115,91,263,280,404,92,76,63,188,72]
},{//Venonat
l:[[33,1],[50,4],[48,8],[93,12],[77,14],[78,16],[60,20],[79,24],[141,28],[94,32]],
m:[29,156,182,164,115,263,92,94,76,188,72]
},{//Venomoth
l:[[16,1],[16,0],[97,1],[103,1],[33,1],[50,1],[48,1],[93,1],[50,4],[48,8],[93,12],[77,14],[78,16],[60,20],[79,24],[141,28],[94,37],[405,46],[483,55]],
m:[29,100,156,182,164,115,263,369,92,94,76,63,355,188,72,138]
},{//Diglett
l:[[10,1],[28,4],[45,8],[97,12],[154,15],[91,18],[163,21],[389,25],[89,29],[90,33]],
m:[29,156,182,164,91,263,157,92,89,188,446],
forms:[
{
},{
	m:[430]
}]
},{//Dugtrio
l:[[161,1],[161,0],[103,1],[10,1],[28,1],[45,1],[97,1],[28,4],[45,8],[97,12],[154,15],[91,18],[163,21],[389,25],[89,35],[90,45]],
m:[29,156,182,164,91,263,157,92,161,89,63,188,446],
forms:[
{
},{
	m:[430]
}]
},{//Meowth
l:[[10,1],[45,1],[44,1],[252,1],[44,3],[252,6],[269,9],[6,12],[364,15],[154,19],[103,23],[163,27],[417,31],[583,35]],
m:[29,269,156,182,164,263,369,231,399,492,92,85,87,247,583,6],
forms:[
{
	m:[91]
},{
	m:[138]
}]
},{//Persian
l:[[129,1],[129,0],[133,1],[95,1],[10,1],[45,1],[44,1],[252,1],[44,3],[252,6],[269,9],[6,12],[364,15],[154,19],[103,23],[163,27],[417,37],[583,47]],
m:[29,269,156,182,164,263,369,231,399,492,92,85,87,247,583,63,6,138],
forms:[
{
	m:[91]
}]
},{//Psyduck
l:[[10,1],[39,5],[55,9],[93,14],[154,18],[50,23],[60,27],[103,32],[57,36],[133,41],[56,45]],
m:[29,156,113,182,164,91,263,280,69,231,127,92,503,347,8,94,57,59,58,6]
},{//Golduck
l:[[281,1],[227,1],[10,1],[39,1],[55,1],[93,1],[39,5],[55,9],[93,14],[154,18],[50,23],[60,27],[103,32],[57,42],[133,53],[56,63]],
m:[29,156,113,182,164,91,263,280,69,231,127,92,503,347,8,94,57,63,59,58,6]
},{//Mankey
l:[[43,1],[10,1],[116,5],[269,8],[2,13],[154,16],[67,21],[69,24],[369,29],[103,32],[37,37],[200,40]],
m:[29,269,270,156,182,164,91,263,280,69,369,231,157,9,398,92,339,7,8,85,87,200,89,6]
},{//Primeape
l:[[99,1],[99,0],[227,1],[68,1],[43,1],[10,1],[116,1],[269,1],[116,5],[269,8],[2,13],[154,16],[67,21],[69,24],[369,33],[103,40],[37,49],[200,56]],
m:[29,269,270,156,182,164,91,263,280,69,369,231,157,9,398,92,339,7,8,85,87,200,89,63,6]
},{//Growlithe
l:[[44,1],[46,1],[52,3],[43,7],[270,10],[36,14],[53,17],[97,21],[257,24],[242,28],[200,31],[583,35],[394,38]],
m:[29,270,156,182,164,115,91,261,263,231,92,53,200,583,126]
},{//Arcanine
l:[[38,1],[44,1],[46,1],[52,1],[43,1]],
m:[29,270,100,156,182,164,115,91,261,263,231,92,406,53,200,583,76,126,63,276]
},{//Poliwag
l:[[145,1],[1,4],[95,8],[55,12],[3,16],[61,21],[67,26],[34,31],[56,36]],
m:[29,270,156,182,164,91,263,127,92,503,94,57,59,58]
},{//Poliwhirl
l:[[145,1],[1,1],[95,1],[55,1],[1,4],[95,8],[55,12],[3,16],[61,21],[67,30],[34,39],[56,48]],
m:[29,270,156,182,164,91,263,280,69,127,92,503,8,94,89,57,59,58]
},{//Poliwrath
l:[[66,1],[66,0],[54,1],[114,1],[339,1],[145,1],[1,1],[95,1],[55,1],[276,57]],
m:[29,270,156,182,164,91,263,280,69,157,127,398,92,503,339,8,94,89,57,63,276,59,58]
},{//Abra
l:[[100,1]],
m:[29,269,100,156,113,182,164,115,263,69,86,231,492,9,92,161,7,605,347,8,94,247,138]
},{//Kadabra
l:[[134,1],[60,1],[134,0],[60,0],[93,1],[100,1],[50,1],[148,1],[50,6],[148,13],[101,19],[164,26],[115,32],[105,39],[94,45]],
m:[29,269,100,156,113,182,164,115,91,263,69,86,231,492,9,92,161,7,605,347,8,94,247,138]
},{//Alakazam
l:[[347,1],[347,0],[134,1],[60,1],[112,1],[227,1],[93,1],[100,1],[50,1],[148,1],[50,6],[148,13],[101,19],[164,26],[115,32],[105,39],[94,45]],
m:[29,269,100,156,113,182,164,115,91,263,69,86,231,492,9,92,161,7,605,347,8,94,247,63,138]
},{//Machop
l:[[67,1],[43,1],[116,4],[117,8],[69,12],[2,16],[280,21],[66,26],[339,31],[276,36]],
m:[29,270,156,113,182,164,91,263,280,69,157,9,398,92,339,7,8,53,89,126,276]
},{//Machoke
l:[[67,1],[43,1],[116,1],[117,1],[116,4],[117,8],[69,12],[2,16],[280,21],[66,26],[339,37],[276,48]],
m:[29,270,156,113,182,164,91,263,280,69,157,9,398,92,339,7,8,53,89,126,276]
},{//Machamp
l:[[70,1],[70,0],[227,1],[68,1],[67,1],[43,1],[116,1],[117,1],[116,4],[117,8],[69,12],[2,16],[280,21],[66,26],[339,37],[276,48]],
m:[29,270,156,113,182,164,91,263,280,69,157,9,398,92,339,7,8,53,89,126,63,276]
},{//Bellsprout
l:[[22,1],[74,4],[35,8],[51,12],[79,16],[77,17],[78,18],[75,22],[398,26],[21,30]],
m:[29,156,182,164,115,263,398,92,76,188,72]
},{//Weepinbell
l:[[22,1],[74,1],[35,1],[51,1],[74,4],[35,8],[51,12],[79,16],[77,17],[78,18],[75,27],[398,36],[21,45]],
m:[29,156,182,164,115,263,398,92,76,188,72]
},{//Victreebel
l:[[438,1],[499,1],[141,1],[14,1],[389,1],[22,1],[74,1],[35,1],[51,1],[438,54]],
m:[29,156,182,164,115,263,398,92,76,63,188,72]
},{//Tentacool
l:[[40,1],[132,4],[48,9],[51,13],[61,18],[35,22],[57,27],[112,31],[398,36],[103,40],[56,45]],
m:[29,156,182,164,115,263,127,398,92,503,605,57,59,188,72,58]
},{//Tentacruel
l:[[114,1],[243,1],[40,1],[132,1],[48,1],[51,1],[132,4],[48,9],[51,13],[61,18],[35,22],[57,27],[112,36],[398,46],[103,55],[56,65]],
m:[29,156,182,164,115,263,127,398,92,503,605,57,63,59,188,72,58]
},{//Geodude
l:[[33,1],[111,1],[84,3],[117,6],[88,9],[446,12],[36,15],[120,19],[157,23],[9,27],[38,31],[153,35]],
m:[29,156,182,164,91,263,280,69,157,9,92,7,53,89,120,126,276,446],
forms:[
{
},{
	l:[[33,1],[111,1],[84,3],[117,6],[88,9],[446,12],[36,15],[120,19],[157,23],[9,27],[38,31],[153,35]],
	m:[86,85,87]
}]
},{//Graveler
l:[[33,1],[111,1],[28,1],[117,1],[28,3],[117,6],[88,9],[446,12],[36,15],[120,19],[157,23],[89,31],[38,39],[153,47]],
m:[29,156,182,164,91,263,280,69,157,9,92,7,53,89,120,126,276,446],
forms:[
{
},{
	l:[[33,1],[111,1],[84,1],[117,1],[84,3],[117,6],[88,9],[446,12],[36,15],[120,19],[157,23],[9,31],[38,39],[153,47]],
	m:[86,85,87]
}]
},{//Golem
l:[[5,1],[33,1],[111,1],[28,1],[117,1],[28,3],[117,6],[88,9],[446,12],[36,15],[120,19],[157,23],[89,31],[38,39],[153,47]],
m:[29,156,182,164,91,263,280,69,157,9,92,7,53,89,120,126,63,276,446],
forms:[
{
},{
	l:[[5,1],[33,1],[111,1],[84,1],[117,1],[84,3],[117,6],[88,9],[446,12],[36,15],[120,19],[157,23],[9,31],[38,39],[153,47]],
	m:[86,85,87]
}]
},{//Ponyta
l:[[45,1],[33,1],[39,1],[52,5],[98,10],[24,15],[23,20],[83,26],[97,32],[126,38],[36,44],[394,51]],
m:[29,156,182,164,115,261,263,231,92,53,76,126]
},{//Rapidash
l:[[31,1],[31,0],[32,1],[95,1],[398,1],[224,1],[45,1],[33,1],[39,1],[52,1],[52,5],[98,10],[24,15],[23,20],[83,26],[97,32],[126,38],[36,51],[394,65]],
m:[29,156,182,164,115,261,263,231,398,92,53,76,126,63,529,224]
},{//Slowpoke
l:[[281,1],[33,1],[45,6],[55,12],[93,18],[50,24],[156,30],[57,36],[94,42],[133,48]],
m:[29,100,156,113,182,164,115,91,263,86,231,92,161,503,347,53,94,89,247,126,57,59,58,6,138]
},{//Slowbro
l:[[110,1],[110,0],[23,1],[281,1],[33,1],[45,1],[55,1],[45,6],[55,12],[93,18],[50,24],[156,30],[57,36],[94,49],[133,62]],
m:[29,100,156,113,182,164,115,91,263,280,69,86,231,492,92,161,503,347,8,53,94,89,247,126,57,63,59,58,6,138]
},{//Magnemite
l:[[33,1],[48,1],[84,5],[86,10],[49,15],[113,20],[85,26],[103,32],[430,38],[87,44]],
m:[29,100,156,113,182,164,115,263,86,92,85,87,430]
},{//Magneton
l:[[161,1],[161,0],[33,1],[48,1],[84,1],[86,1],[84,5],[86,10],[49,15],[113,20],[85,26],[103,36],[430,46],[87,56]],
m:[29,100,156,113,182,164,115,263,86,92,161,85,87,63,430]
},{//Farfetch'd
l:[[119,1],[98,1],[398,1],[64,1],[28,1],[43,1],[364,1],[116,4],[15,9],[75,13],[31,18],[97,22],[163,27],[403,31],[14,36],[143,40]],
m:[29,270,156,182,164,115,263,19,369,231,398,92,355]
},{//Doduo
l:[[64,1],[45,1],[98,5],[99,10],[31,16],[97,22],[65,27],[14,32],[26,38],[37,44]],
m:[29,156,182,164,115,263,19,92,355]
},{//Dodrio
l:[[161,1],[161,0],[119,1],[48,1],[64,1],[45,1],[98,1],[99,1],[98,5],[99,10],[31,16],[97,22],[65,27],[14,37],[26,48],[37,59]],
m:[29,269,156,182,164,115,263,19,92,161,63,355]
},{//Seel
l:[[29,1],[45,4],[227,8],[453,12],[420,16],[156,20],[62,26],[127,32],[36,38],[58,44],[38,50]],
m:[29,270,156,182,164,263,231,127,92,57,59,58,6,529,224]
},{//Dewgong
l:[[252,1],[32,1],[29,1],[45,1],[227,1],[453,1],[45,4],[227,8],[453,12],[420,15],[156,20],[62,26],[127,32],[36,42],[58,52],[38,62]],
m:[29,270,156,182,164,263,231,127,92,57,63,59,58,6,529,224]
},{//Grimer
l:[[1,1],[139,1],[106,6],[107,12],[50,18],[124,24],[103,30],[92,36],[151,42],[188,48]],
m:[29,269,270,156,182,164,91,263,157,9,398,92,7,8,53,120,247,126,188,72],
forms:[
{
	m:[85,87]
},{
	l:[[1,1],[139,1],[106,6],[107,12],[50,18],[44,24],[103,30],[242,36],[151,42],[188,48]]
}]
},{//Muk
l:[[114,1],[585,1],[1,1],[139,1],[106,1],[107,1],[106,6],[107,12],[50,18],[124,24],[103,30],[92,36],[151,48],[188,60]],
m:[29,269,270,156,182,164,91,263,280,399,157,9,398,92,7,8,53,120,247,126,63,188,72],
forms:[
{
	m:[85,87]
},{
	l:[[114,1],[585,1],[1,1],[139,1],[106,1],[107,1],[106,6],[107,12],[50,18],[44,24],[103,30],[242,36],[151,48],[188,60]],
	m:[492]
}]
},{//Shellder
l:[[33,1],[55,1],[110,4],[43,9],[420,13],[48,18],[128,22],[62,27],[182,31],[58,36],[504,40],[56,45]],
m:[29,100,156,182,164,115,263,92,161,120,57,59,58]
},{//Cloyster
l:[[131,1],[131,0],[112,1],[41,1],[33,1],[55,1],[110,1],[43,1]],
m:[29,100,156,182,164,115,263,398,92,161,120,57,63,59,58]
},{//Gastly
l:[[95,1],[122,1],[123,1],[109,5],[139,7],[101,12],[261,14],[389,19],[92,21],[247,26],[399,28],[138,33]],
m:[29,269,156,182,164,261,263,399,492,9,92,7,605,8,85,87,94,120,247,188,72,138]
},{//Haunter
l:[[95,1],[122,1],[123,1],[109,1],[109,5],[139,7],[101,12],[261,14],[389,19],[92,21],[247,30],[399,36],[138,45]],
m:[29,269,156,182,164,261,263,399,492,9,398,92,7,605,8,85,87,94,120,247,188,72,138]
},{//Gengar
l:[[50,1],[114,1],[95,1],[122,1],[123,1],[109,1],[109,5],[139,7],[101,12],[261,14],[389,19],[92,21],[247,30],[399,36],[138,45]],
m:[29,269,156,182,164,261,263,280,69,399,492,9,398,92,7,605,8,85,87,94,120,247,63,188,72,138]
},{//Onix
l:[[33,1],[106,1],[20,1],[88,1],[446,5],[99,10],[103,15],[91,20],[21,25],[157,30],[89,35],[231,40],[38,45]],
m:[29,269,156,182,164,91,263,525,231,157,92,406,89,120,430,446]
},{//Drowzee
l:[[1,1],[95,1],[50,4],[93,9],[139,13],[96,18],[60,22],[29,27],[94,31],[417,36],[138,40]],
m:[29,269,100,156,113,182,164,115,263,280,69,86,492,9,92,161,7,605,347,8,94,247,138]
},{//Hypno
l:[[112,1],[1,1],[95,1],[50,1],[93,1],[50,4],[93,9],[139,13],[96,18],[60,22],[29,27],[94,36],[417,46],[138,55]],
m:[29,269,100,156,113,182,164,115,263,280,69,86,492,9,92,161,7,605,347,8,94,247,63,138]
},{//Krabby
l:[[145,1],[11,5],[43,9],[106,14],[61,18],[23,23],[182,27],[21,32],[152,36],[12,41]],
m:[29,156,182,164,91,263,280,157,404,92,503,57,276,59,58]
},{//Kingler
l:[[97,1],[133,1],[145,1],[11,1],[43,1],[106,1],[11,5],[43,9],[106,14],[61,18],[23,23],[182,27],[21,37],[152,41],[12,56]],
m:[29,156,182,164,91,263,280,157,404,92,503,57,63,276,59,58]
},{//Voltorb
l:[[33,1],[113,3],[49,6],[84,9],[129,14],[120,19],[103,24],[85,31],[243,38],[153,45]],
m:[29,269,100,156,113,182,164,115,263,86,492,92,85,87,120]
},{//Electrode
l:[[33,1],[113,1],[49,1],[84,1],[113,3],[49,6],[84,9],[129,14],[120,19],[103,24],[85,36],[243,48],[153,60]],
m:[29,269,100,156,113,182,164,115,263,86,492,92,85,87,120,63]
},{//Exeggcute
l:[[140,1],[95,7],[93,14],[78,16],[77,18],[79,20],[60,27],[73,34],[115,41],[76,48]],
m:[29,100,156,113,182,164,115,263,92,94,120,76,188,72,138]
},{//Exeggutor
l:[[23,1],[23,0],[438,1],[121,1],[140,1],[95,1],[93,1],[78,1]],
m:[29,100,156,113,182,164,115,263,92,94,120,76,63,188,72,138],
forms:[
{
},{
	l:[[406,0],[406,1],[438,1],[121,1],[140,1],[95,1],[93,1],[78,1]],
	m:[280,525,231,406,53,200,89,276]
}]
},{//Cubone
l:[[45,1],[39,2],[43,6],[125,12],[29,14],[99,18],[116,24],[155,26],[37,30],[38,36]],
m:[29,156,182,164,91,263,280,69,231,157,9,92,7,53,89,126,59,58,446]
},{//Marowak
l:[[14,1],[14,0],[103,1],[45,1],[39,1],[43,1],[125,1],[39,2],[43,6],[125,12],[29,14],[99,18],[116,24],[155,26],[37,36],[38,48]],
m:[29,156,182,164,91,263,280,69,231,157,9,92,7,53,200,89,126,63,59,58,446],
forms:[
{
},{
	l:[[14,0],[14,1],[103,1],[45,1],[39,1],[43,1],[125,1],[39,2],[43,6],[125,12],[83,14],[99,18],[261,24],[155,26],[37,36],[394,48]],
	m:[261,399,85,87,247,138]
}]
},{//Hitmonlee
l:[[27,1],[96,5],[24,10],[364,15],[280,20],[263,25],[26,30],[116,35],[25,40],[136,45]],
m:[29,270,156,182,164,263,280,69,157,398,92,339,89,276]
},{//Hitmonchan
l:[[4,1],[43,5],[97,10],[364,15],[129,20],[146,25],[9,30],[8,30],[7,30],[116,35],[5,40],[68,45]],
m:[29,270,156,182,164,263,280,69,157,9,92,339,7,8,89]
},{//Lickitung
l:[[122,1],[35,5],[51,10],[23,15],[50,20],[20,25],[21,30],[103,35],[37,40],[438,45]],
m:[29,270,156,182,164,91,263,280,69,525,231,157,9,92,7,8,85,53,87,89,247,76,126,57,63,59,58,138]
},{//Koffing
l:[[139,1],[33,1],[123,6],[499,12],[124,18],[120,24],[92,30],[114,36],[188,42],[153,48]],
m:[29,269,156,182,164,261,263,399,92,85,53,87,120,247,126,188]
},{//Weezing
l:[[60,1],[103,1],[139,1],[33,1],[123,1],[499,1],[123,6],[499,12],[124,18],[120,24],[92,30],[114,40],[188,50],[153,60]],
m:[29,269,156,182,164,261,263,399,92,85,53,87,120,247,126,63,188]
},{//Rhyhorn
l:[[30,1],[39,1],[28,1],[31,7],[23,12],[88,19],[529,24],[36,31],[224,36],[157,43],[89,48],[32,55]],
m:[29,156,182,164,91,263,231,157,398,92,406,85,53,87,89,126,276,59,58,446,529,224]
},{//Rhydon
l:[[68,1],[242,1],[30,1],[39,1],[28,1],[31,1],[31,7],[23,12],[88,19],[529,24],[36,31],[224,36],[157,48],[89,54],[32,67]],
m:[29,270,156,182,164,91,263,280,69,525,231,157,9,398,92,7,406,8,85,53,87,200,89,126,57,63,276,59,58,446,6,529,224]
},{//Chansey
l:[[1,1],[45,1],[111,4],[39,8],[3,12],[135,16],[107,20],[36,25],[47,30],[121,35],[113,40],[38,45]],
m:[29,270,100,156,113,182,164,115,263,280,69,86,231,157,9,92,161,7,605,347,8,85,53,87,94,89,247,76,126,63,59,58,446,138],
s:[606]
},{//Tangela
l:[[71,1],[132,1],[79,5],[93,10],[22,15],[77,17],[20,22],[74,27],[78,29],[72,34],[73,39],[21,44],[133,49],[438,54]],
m:[29,156,182,164,115,263,92,76,63,188,72]
},{//Kangaskhan
l:[[4,1],[43,1],[252,6],[39,11],[44,17],[99,22],[5,28],[146,33],[242,39],[200,44],[389,50]],
m:[29,270,156,182,164,91,263,280,69,231,157,9,92,7,8,85,53,87,200,89,247,76,126,57,63,59,58]
},{//Horsea
l:[[145,1],[108,6],[55,9],[43,15],[61,18],[116,24],[127,27],[97,33],[406,36],[56,42]],
m:[29,156,182,164,263,127,92,503,406,200,57,59,430,58]
},{//Seadra
l:[[50,1],[499,1],[145,1],[108,1],[55,1],[43,1],[108,6],[55,9],[43,15],[61,18],[116,24],[127,27],[97,36],[406,42],[56,51]],
m:[29,156,182,164,263,127,92,503,406,200,57,63,59,430,58]
},{//Goldeen
l:[[64,1],[39,1],[48,4],[98,10],[30,14],[31,20],[127,24],[97,30],[32,34],[224,40]],
m:[29,156,182,164,263,127,398,92,503,57,59,58,529,224]
},{//Seaking
l:[[130,1],[60,1],[64,1],[39,1],[48,1],[98,1],[48,4],[98,10],[30,14],[31,20],[127,24],[97,30],[32,39],[224,50]],
m:[29,156,182,164,263,127,398,92,503,57,63,59,58,529,224]
},{//Staryu
l:[[33,1],[106,1],[149,4],[55,9],[129,13],[107,18],[109,22],[61,27],[113,31],[94,36],[105,40],[56,45]],
m:[29,100,156,113,182,164,115,263,86,127,92,161,503,605,85,87,94,57,59,430,58]
},{//Starmie
l:[[33,1],[106,1],[149,1],[55,1]],
m:[29,100,156,113,182,164,115,263,86,127,92,161,503,605,85,87,94,57,63,59,430,58,138]
},{//Mr. Mime
l:[[1,1],[112,1],[93,1],[96,6],[3,10],[102,16],[149,20],[227,26],[60,30],[113,36],[115,36],[164,40],[94,46]],
m:[29,269,270,100,156,113,182,164,115,263,280,69,86,492,9,92,7,605,347,8,85,87,94,247,76,63,138]
},{//Scyther
l:[[98,1],[43,1],[116,4],[104,8],[364,12],[17,16],[97,20],[163,26],[13,32],[403,38],[14,44],[404,50]],
m:[29,156,113,182,164,263,280,369,404,92,63,355]
},{//Jynx
l:[[1,1],[122,6],[93,12],[103,18],[3,22],[8,26],[34,30],[142,35],[94,40],[59,45]],
m:[29,269,270,100,156,113,182,164,115,263,280,69,92,347,8,94,247,63,59,58,138]
},{//Electabuzz
l:[[84,1],[43,1],[98,6],[86,11],[129,17],[67,22],[113,28],[9,33],[103,39],[85,44],[87,50]],
m:[29,269,270,100,156,113,182,164,115,263,280,69,86,231,9,92,7,8,85,87,94,63]
},{//Magmar
l:[[52,1],[43,1],[123,6],[108,11],[499,17],[67,22],[83,28],[7,33],[109,39],[53,44],[126,50]],
m:[29,269,270,100,156,182,164,261,263,280,69,231,9,92,7,53,94,126,63]
},{//Pinsir
l:[[11,1],[116,1],[20,4],[69,8],[106,12],[280,16],[404,20],[66,26],[14,32],[37,38],[276,44],[12,50]],
m:[29,270,156,182,164,91,263,280,69,157,404,92,339,200,89,63,276,446]
},{//Tauros
l:[[33,1],[39,6],[99,12],[30,18],[43,24],[156,30],[36,34],[116,38],[37,42],[38,46],[200,50]],
m:[29,270,156,182,164,263,231,157,92,85,53,87,200,89,76,126,57,63,59,58]
},{//Magikarp
l:[[150,1],[33,15]]
},{//Gyarados
l:[[44,1],[44,0],[37,1],[43,1],[82,1],[20,1],[43,6],[82,11],[20,16],[99,21],[525,26],[127,31],[242,36],[200,41],[56,46],[63,51]],
m:[29,269,156,182,164,115,263,86,525,231,399,127,92,503,406,85,53,87,200,89,126,57,63,59,58]
},{//Lapras
l:[[47,1],[55,1],[45,6],[54,13],[420,19],[109,26],[34,32],[58,39],[57,45],[406,52],[59,58],[56,65]],
m:[29,156,182,164,115,263,231,127,92,406,85,87,200,94,76,57,63,59,58,529,138,224]
},{//Ditto
l:[[144,1]]
},{//Eevee
l:[[33,1],[45,1],[39,3],[98,6],[24,10],[28,14],[44,17],[129,21],[36,24],[38,28],[270,31]],
m:[29,270,156,182,164,115,91,263,231,92,247,6],
forms:[
{
},{
	t:[733,734,735,736,737,738,739,740]
}]
},{//Vaporeon
l:[[55,1],[55,0],[281,1],[33,1],[45,1],[39,1],[28,1],[39,3],[98,6],[24,10],[28,14],[62,17],[114,21],[151,24],[270,28],[56,31]],
m:[29,270,156,182,164,115,91,263,231,127,92,503,247,57,63,59,58,6]
},{//Jolteon
l:[[84,1],[84,0],[281,1],[33,1],[45,1],[39,1],[28,1],[39,3],[98,6],[24,10],[28,14],[42,17],[86,21],[97,24],[270,28],[87,31]],
m:[29,270,156,113,182,164,115,91,263,86,231,92,85,87,247,63,6]
},{//Flareon
l:[[52,1],[52,0],[281,1],[33,1],[45,1],[39,1],[28,1],[39,3],[98,6],[24,10],[28,14],[83,17],[123,21],[116,24],[270,28],[394,31]],
m:[29,270,156,182,164,115,91,261,263,231,92,53,247,126,63,276,6]
},{//Porygon
l:[[33,1],[159,4],[60,9],[97,13],[112,18],[161,22],[86,27],[160,31],[105,36],[63,40]],
m:[29,100,156,182,164,115,263,86,231,492,92,161,85,87,94,247,76,63,59,58,138]
},{//Omanyte
l:[[132,1],[110,4],[43,11],[55,15],[44,22],[88,26],[182,33],[157,37],[56,44],[504,48]],
m:[29,156,182,164,115,263,157,127,92,503,57,59,58,446]
},{//Omastar
l:[[131,1],[131,0],[117,1],[48,1],[132,1],[110,1],[43,1],[55,1],[110,4],[43,11],[55,15],[44,22],[88,26],[182,33],[157,37],[56,50],[504,60]],
m:[29,156,182,164,115,263,69,157,127,92,503,57,63,59,58,446]
},{//Kabuto
l:[[10,1],[106,6],[43,12],[71,18],[453,24],[88,30],[28,36],[157,42],[141,48]],
m:[29,156,182,164,115,91,263,157,127,92,503,57,59,72,58,446]
},{//Kabutops
l:[[163,1],[163,0],[103,1],[109,1],[364,1],[10,1],[106,1],[43,1],[71,1],[106,6],[43,12],[71,18],[453,24],[88,30],[28,36],[157,45],[141,54],[14,63]],
m:[29,156,182,164,115,91,263,280,69,157,404,127,92,503,57,63,276,59,72,58,446]
},{//Aerodactyl
l:[[17,1],[44,1],[46,7],[48,14],[88,21],[97,28],[242,35],[157,42],[19,49],[36,56],[63,63]],
m:[29,269,156,182,164,115,263,19,231,157,92,406,53,89,126,63,355,446]
},{//Snorlax
l:[[33,1],[111,6],[281,13],[122,19],[29,26],[156,32],[103,39],[133,45],[34,52],[242,58],[276,65]],
m:[29,156,182,164,115,263,280,69,157,9,92,7,8,85,53,87,200,94,89,120,247,76,126,57,63,276,59,58,6]
},{//Articuno
l:[[16,1],[420,1],[54,8],[43,16],[243,24],[58,32],[97,40],[115,48],[355,56],[59,64],[143,72]],
m:[29,156,182,164,115,263,19,369,92,63,355,59,58]
},{//Zapdos
l:[[64,1],[84,1],[86,8],[43,16],[65,24],[85,32],[97,40],[113,48],[355,56],[87,64],[143,72]],
m:[29,156,113,182,164,115,263,19,86,369,92,85,87,63,355]
},{//Moltres
l:[[17,1],[52,1],[83,8],[43,16],[403,24],[53,32],[97,40],[257,48],[355,56],[76,64],[143,72]],
m:[29,156,182,164,115,261,263,19,369,92,53,76,126,63,355]
},{//Dratini
l:[[35,1],[43,1],[86,7],[82,14],[97,21],[525,28],[21,35],[200,42],[63,49]],
m:[29,156,113,182,164,115,263,86,525,231,127,92,406,85,53,87,200,126,57,63,59,58]
},{//Dragonair
l:[[35,1],[43,1],[86,1],[82,1],[86,7],[82,14],[97,21],[525,28],[21,40],[200,52],[63,64]],
m:[29,156,113,182,164,115,263,86,525,231,127,92,406,85,53,87,200,126,57,63,59,58]
},{//Dragonite
l:[[17,1],[17,0],[54,1],[453,1],[7,1],[9,1],[35,1],[43,1],[86,1],[82,1],[86,7],[82,14],[97,21],[525,28],[21,40],[200,52],[63,70],[355,88]],
m:[29,156,113,182,164,115,263,280,19,86,525,231,157,9,127,92,7,406,8,85,53,87,200,89,126,57,63,276,355,59,58]
},{//Mewtwo
l:[[149,1],[50,1],[93,1],[109,1],[100,1],[54,11],[60,22],[129,33],[133,44],[105,55],[94,66],[112,77],[97,88],[347,99]],
m:[29,269,100,156,113,182,164,115,261,263,280,69,86,231,492,157,9,398,92,161,339,7,347,8,85,53,87,94,89,120,247,76,126,63,59,58,6,138]
},{//Mew
l:[[1,1],[93,1],[102,1],[129,11],[133,22],[149,33],[112,44],[5,55],[118,66],[94,77],[417,88],[144,99]]
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
,
,
,
,
,
,{//Meltan
l:[[29,1],[106,1],[39,9],[86,18],[84,27],[151,36],[430,45]],
m:[29,156,182,164,86,92,85,430]
},{//Melmetal
l:[[9,1],[29,1],[106,1],[39,1],[86,1],[9,0],[39,9],[86,18],[84,27],[151,36],[430,45],[5,54],[182,63],[742,72],[276,81],[63,90]],
m:[29,156,182,164,263,280,86,157,9,92,8,85,87,89,120,76,63,276,430,58]
}
];