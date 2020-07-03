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
[["Swords Dance","Danse-Lames","Schwerttanz","Danzaspada","Danza Espada","つるぎのまい"],0,2,30,0,0],
[["Cut","Coupe","Zerschneider","Taglio","Corte","いあいぎり"],0,0,30,50,95],
[["Gust","Tornade","Windstoß","Raffica","Tornado","かぜおこし"],2,1,35,40,100],
[["Wing Attack","Cru-Aile","Flügelschlag","Attacco d&#39;Ala","Ataque Ala","つばさでうつ"],2,0,35,60,100],
[["Whirlwind","Cyclone","Wirbelwind","Turbine","Remolino","ふきとばし"],0,2,20,0,100],
[["Fly","Vol","Fliegen","Volo","Vuelo","そらをとぶ"],2,0,15,90,95],
[["Bind","Étreinte","Klammergriff","Legatutto","Atadura","しめつける"],0,0,20,15,85],
[["Slam","Souplesse","Slam","Schianto","Portazo","たたきつける"],0,0,20,80,75],
[["Vine Whip","Fouet Lianes","Rankenhieb","Frustata","Látigo Cepa","つるのムチ"],11,0,15,35,100],
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
[["Tackle","Charge","Tackle","Azione","Placaje","たいあたり"],0,0,35,50,100],
[["Body Slam","Plaquage","Bodyslam","Corposcontro","Golpe Cuerpo","のしかかり"],0,0,15,85,100],
[["Wrap","Ligotage","Wickel","Avvolgibotta","Repetición","まきつく"],0,0,20,15,90],
[["Take Down","Bélier","Bodycheck","Riduttore","Derribo","とっしん"],0,0,20,90,85],
[["Thrash","Mania","Fuchtler","Colpo","Golpe","あばれる"],0,0,10,120,100],
[["Double-Edge","Damoclès","Risikotackle","Sdoppiatore","Doble Filo","すてみタックル"],0,0,15,120,100],
[["Tail Whip","Mimi-Queue","Rutenschlag","Colpocoda","Látigo","しっぽをふる"],0,2,30,0,100],
[["Poison Sting","Dard-Venin","Giftstachel","Velenospina","Picotazo Ven","どくばり"],3,0,35,15,100],
[["Twineedle","Double-Dard","Duonadel","Doppio Ago","Doble Ataque","ダブルニードル"],6,0,20,25,100],
[["Pin Missile","Dard-Nuée","Nadelrakete","Missilspillo","Pin Misil","ミサイルばり"],6,0,20,14,85],
[["Leer","Groz&#39;Yeux","Silberblick","Fulmisguardo","Malicioso","にらみつける"],0,2,30,0,100],
[["Bite","Morsure","Biss","Morso","Mordisco","かみつく"],16,0,25,60,100],
[["Growl","Rugissement","Heuler","Ruggito","Gruñido","なきごえ"],0,2,40,0,100],
[["Roar","Hurlement","Brüller","Boato","Rugido","ほえる"],0,2,20,0,100],
[["Sing","Berceuse","Gesang","Canto","Canto","うたう"],0,2,15,0,55],
[["Supersonic","Ultrason","Superschall","Supersuono","Supersónico","ちょうおんぱ"],0,2,20,0,55],
[["Sonic Boom","Sonicboom","Ultraschall","Sonicboom","Bomba Sónica","ソニックブーム"],0,1,20,0,90],
[["Disable","Entrave","Aussetzer","Inibitore","Anulación","かなしばり"],0,2,20,0,100],
[["Acid","Acide","Säure","Acido","Ácido","ようかいえき"],3,1,30,40,100],
[["Ember","Flammèche","Glut","Braciere","Ascuas","ひのこ"],9,1,25,40,100],
[["Flamethrower","Lance-Flammes","Flammenwurf","Lanciafiamme","Lanzallamas","かえんほうしゃ"],9,1,15,95,100],
[["Mist","Brume","Weißnebel","Nebbia","Neblina","しろいきり"],14,2,30,0,0],
[["Water Gun","Pistolet à O","Aquaknarre","Pistolacqua","Pistola Agua","みずでっぽう"],10,1,25,40,100],
[["Hydro Pump","Hydrocanon","Hydropumpe","Idropompa","Hidrobomba","ハイドロポンプ"],10,1,5,120,80],
[["Surf","Surf","Surfer","Surf","Surf","なみのり"],10,1,15,95,100],
[["Ice Beam","Laser Glace","Eisstrahl","Geloraggio","Rayo Hielo","れいとうビーム"],14,1,10,95,100],
[["Blizzard","Blizzard","Blizzard","Bora","Ventisca","ふぶき"],14,1,5,120,70],
[["Psybeam","Rafale Psy","Psystrahl","Psicoraggio","Psicorrayo","サイケこうせん"],13,1,20,65,100],
[["Bubble Beam","Bulles d&#39;O","Blubbstrahl","Bollaraggio","Rayo Burbuja","バブルこうせん"],10,1,20,65,100],
[["Aurora Beam","Onde Boréale","Aurorastrahl","Raggiaurora","Rayo Aurora","オーロラビーム"],14,1,20,65,100],
[["Hyper Beam","Ultralaser","Hyperstrahl","Iper Raggio","Hiperrayo","はかいこうせん"],0,1,5,150,90],
[["Peck","Picpic","Schnabel","Beccata","Picotazo","つつく"],2,0,35,35,100],
[["Drill Peck","Bec Vrille","Bohrschnabel","Perforbecco","Pico Taladro","ドリルくちばし"],2,0,20,80,100],
[["Submission","Sacrifice","Überroller","Sottomissione","Sumisión","じごくぐるま"],1,0,25,80,80],
[["Low Kick","Balayage","Fußkick","Colpo Basso","Patada Baja","けたぐり"],1,0,20,0,100],
[["Counter","Riposte","Konter","Contatore","Contador","カウンター"],1,0,20,0,100],
[["Seismic Toss","Frappe Atlas","Geowurf","Movim. Sismico","Mov. Sísmico","ちきゅうなげ"],1,0,20,0,100],
[["Strength","Force","Stärke","Forza","Fuerza","かいりき"],0,0,15,80,100],
[["Absorb","Vol-Vie","Absorber","Assorbimento","Absorber","すいとる"],11,1,25,20,100],
[["Mega Drain","Méga-Sangsue","Megasauger","Megassorbimento","Megaagotar","メガドレイン"],11,1,12,40,100],
[["Leech Seed","Vampigraine","Egelsamen","Parassiseme","Drenadoras","やどりぎのタネ"],11,2,10,0,90],
[["Growth","Croissance","Wachstum","Crescita","Desarrollo","せいちょう"],0,2,40,0,0],
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
[["Thunderbolt","Tonnerre","Donnerblitz","Fulmine","Rayo","１０まんボルト"],12,1,15,95,100],
[["Thunder Wave","Cage-Éclair","Donnerwelle","Tuononda","Onda Trueno","でんじは"],12,2,20,0,100],
[["Thunder","Fatal-Foudre","Donner","Tuono","Trueno","かみなり"],12,1,10,120,70],
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
[["Night Shade","Ténèbres","Nachtnebel","Ombra Notturna","Tinieblas","ナイトヘッド"],7,1,15,0,100],
[["Mimic","Copie","Mimikry","Mimica","Mimético","ものまね"],0,2,10,0,0],
[["Screech","Grincement","Kreideschrei","Stridio","Chirrido","いやなおと"],0,2,40,0,85],
[["Double Team","Reflet","Doppelteam","Doppioteam","Doble Equipo","かげぶんしん"],0,2,15,0,0],
[["Recover","Soin","Genesung","Ripresa","Recuperación","じこさいせい"],0,2,10,0,0],
[["Harden","Armure","Härtner","Rafforzatore","Fortaleza","かたくなる"],0,2,30,0,0],
[["Minimize","Lilliput","Komprimator","Minimizzato","Reducción","ちいさくなる"],0,2,20,0,0],
[["Smokescreen","Brouillard","Rauchwolke","Muro di Fumo","Pantalla Humo","えんまく"],0,2,20,0,100],
[["Confuse Ray","Onde Folie","Konfustrahl","Stordiraggio","Rayo Confuso","あやしいひかり"],7,2,10,0,100],
[["Withdraw","Repli","Panzerschutz","Ritirata","Refugio","からにこもる"],10,2,40,0,0],
[["Defense Curl","Boul&#39;Armure","Einigler","Ricciolscudo","Rizo Defensa","まるくなる"],0,2,40,0,0],
[["Barrier","Bouclier","Barriere","Barriera","Barrera","バリアー"],13,2,30,0,0],
[["Light Screen","Mur Lumière","Lichtschild","Schermoluce","Pantalla Luz","ひかりのかべ"],13,2,30,0,0],
[["Haze","Buée Noire","Dunkelnebel","Nube","Niebla","くろいきり"],14,2,30,0,0],
[["Reflect","Protection","Reflektor","Riflesso","Reflejo","リフレクター"],13,2,20,0,0],
[["Focus Energy","Puissance","Energiefokus","Focalenergia","Foco Energía","きあいだめ"],0,2,30,0,0],
[["Bide","Patience","Geduld","Pazienza","Venganza","がまん"],0,0,10,0,0],
[["Metronome","Métronome","Metronom","Metronomo","Metrónomo","ゆびをふる"],0,2,10,0,0],
[["Mirror Move","Mimique","Spiegeltrick","Speculmossa","Mov. Espejo","オウムがえし"],2,2,20,0,0],
[["Self-Destruct","Destruction","Finale","Autodistruz.","Autodestruc","じばく"],0,0,5,200,100],
[["Egg Bomb","Bomb&#39;Œuf","Eierbombe","Uovobomba","Bomba Huevo","タマゴばくだん"],0,0,10,100,75],
[["Lick","Léchouille","Schlecker","Leccata","Lengüetazo","したでなめる"],7,0,30,20,100],
[["Smog","Purédpois","Smog","Smog","Polución","スモッグ"],3,1,20,20,70],
[["Sludge","Détritus","Schlammbad","Fango","Residuos","ヘドロこうげき"],3,1,20,65,100],
[["Bone Club","Massd&#39;Os","Knochenkeule","Ossoclava","Hueso Palo","ホネこんぼう"],4,0,20,65,85],
[["Fire Blast","Déflagration","Feuersturm","Fuocobomba","Llamarada","だいもんじ"],9,1,5,120,85],
[["Waterfall","Cascade","Kaskade","Cascata","Cascada","たきのぼり"],10,0,15,80,100],
[["Clamp","Claquoir","Schnapper","Tenaglia","Tenaza","からではさむ"],10,0,15,35,85],
[["Swift","Météores","Sternschauer","Comete","Rapidez","スピードスター"],0,1,20,60,0],
[["Skull Bash","Coud&#39;Krâne","Schädelwumme","Capocciata","Cabezazo","ロケットずつき"],0,0,15,100,100],
[["Spike Cannon","Picanon","Dornkanone","Sparalance","Clavo Cañón","とげキャノン"],0,0,15,20,100],
[["Constrict","Constriction","Umklammerung","Limitazione","Restricción","からみつく"],0,0,35,10,100],
[["Amnesia","Amnésie","Amnesie","Amnesia","Amnesia","ドわすれ"],13,2,20,0,0],
[["Kinesis","Télékinésie","Psykraft","Cinèsi","Kinético","スプーンまげ"],13,2,15,0,80],
[["Soft-Boiled","E-Coque","Weichei","Covauova","Amortiguador","タマゴうみ"],0,2,10,0,0],
[["High Jump Kick","Pied Voltige","Turmkick","Calcinvolo","Pat. Salto Alta","とびひざげり"],1,0,10,130,90],
[["Glare","Intimidation","Giftblick","Bagliore","Deslumbrar","へびにらみ"],0,2,30,0,90],
[["Dream Eater","Dévorêve","Traumfresser","Mangiasogni","Come Sueños","ゆめくい"],13,1,15,100,100],
[["Poison Gas","Gaz Toxik","Giftwolke","Velenogas","Gas Venenoso","どくガス"],3,2,40,0,80],
[["Barrage","Pilonnage","Stakkato","Attacco Pioggia","Presa","たまなげ"],0,0,20,15,85],
[["Leech Life","Vampirisme","Blutsauger","Sanguisuga","Chupavidas","きゅうけつ"],6,0,15,20,100],
[["Lovely Kiss","Grobisou","Todeskuss","Demonbacio","Beso Amoroso","あくまのキッス"],0,2,10,0,75],
[["Sky Attack","Piqué","Himmelsfeger","Aeroattacco","Ataque Aéreo","ゴッドバード"],2,0,5,120,90],
[["Transform","Morphing","Wandler","Trasformazione","Transformación","へんしん"],0,2,10,0,0],
[["Bubble","Écume","Blubber","Bolla","Burbuja","あわ"],10,1,30,20,100],
[["Dizzy Punch","Uppercut","Irrschlag","Stordipugno","Puño Mareo","ピヨピヨパンチ"],0,0,10,70,100],
[["Spore","Spore","Pilzspore","Spora","Espora","キノコのほうし"],11,2,15,0,100],
[["Flash","Flash","Blitz","Flash","Destello","フラッシュ"],0,2,20,0,100],
[["Psywave","Vague Psy","Psywelle","Psiconda","Psicoonda","サイコウェーブ"],13,1,15,0,80],
[["Splash","Trempette","Platscher","Splash","Salpicadura","はねる"],0,2,40,0,0],
[["Acid Armor","Acidarmure","Säurepanzer","Scudo Acido","Armadura Ácida","とける"],3,2,40,0,0],
[["Crabhammer","Pince-Masse","Krabbhammer","Martellata","Martillazo","クラブハンマー"],10,0,10,90,90],
[["Explosion","Explosion","Explosion","Esplosione","Explosión","だいばくはつ"],0,0,5,250,100],
[["Fury Swipes","Combo-Griffe","Kratzfurie","Sfuriate","Golpes Furia","みだれひっかき"],0,0,15,18,80],
[["Bonemerang","Osmerang","Knochmerang","Ossomerang","Huesomerang","ホネブーメラン"],4,0,10,50,90],
[["Rest","Repos","Erholung","Riposo","Descanso","ねむる"],13,2,10,0,0],
[["Rock Slide","Éboulement","Steinhagel","Frana","Avalancha","いわなだれ"],5,0,10,75,90],
[["Hyper Fang","Croc de Mort","Hyperzahn","Iperzanna","Hipercolmillo","ひっさつまえば"],0,0,15,80,90],
[["Sharpen","Affûtage","Schärfer","Affilatore","Afilar","かくばる"],0,2,30,0,0],
[["Conversion","Adaptation","Umwandlung","Conversione","Conversión","テクスチャー"],0,2,30,0,0],
[["Tri Attack","Triplattaque","Triplette","Tripletta","Triataque","トライアタック"],0,1,10,80,100],
[["Super Fang","Croc Fatal","Superzahn","Superzanna","Superdiente","いかりのまえば"],0,0,10,0,90],
[["Slash","Tranche","Schlitzer","Lacerazione","Cuchillada","きりさく"],0,0,20,70,100],
[["Substitute","Clonage","Delegator","Sostituto","Sustituto","みがわり"],0,2,10,0,0],
[["Struggle","Lutte","Verzweifler","Scontro","Combate","わるあがき"],0,0,1,50,0],
[["Sketch","Gribouille","Nachahmer","Schizzo","Esquema","スケッチ"],0,2,1,0,0],
[["Triple Kick","Triple Pied","Dreifachkick","Triplocalcio","Triple Patada","トリプルキック"],1,0,10,10,90],
[["Thief","Larcin","Raub","Furto","Ladrón","どろぼう"],16,0,10,40,100],
[["Spider Web","Toile","Spinnennetz","Ragnatela","Telaraña","クモのす"],6,2,10,0,0],
[["Mind Reader","Lire-Esprit","Willensleser","Leggimente","Telépata","こころのめ"],0,2,5,0,0],
[["Nightmare","Cauchemar","Nachtmahr","Incubo","Pesadilla","あくむ"],7,2,15,0,100],
[["Flame Wheel","Roue de Feu","Flammenrad","Ruotafuoco","Rueda Fuego","かえんぐるま"],9,0,25,60,100],
[["Snore","Ronflement","Schnarcher","Russare","Ronquido","いびき"],0,1,15,40,100],
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
[["Sweet Kiss","Doux Baiser","Bitterkuss","Dolcebacio","Beso Dulce","てんしのキッス"],0,2,10,0,75],
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
[["Charm","Charme","Charme","Fascino","Encanto","あまえる"],0,2,20,0,100],
[["Rollout","Roulade","Walzer","Rotolamento","Desenrollar","ころがる"],5,0,20,30,90],
[["False Swipe","Faux-Chage","Trugschlag","Falsofinale","Falsotortazo","みねうち"],0,0,40,40,100],
[["Swagger","Vantardise","Angeberei","Bullo","Contoneo","いばる"],0,2,15,0,90],
[["Milk Drink","Lait à Boire","Milchgetränk","Buonlatte","Batido","ミルクのみ"],0,2,10,0,0],
[["Spark","Étincelle","Funkensprung","Scintilla","Chispa","スパーク"],12,0,20,65,100],
[["Fury Cutter","Taillade","Zornklinge","Tagliofuria","Cortefuria","れんぞくぎり"],6,0,20,20,95],
[["Steel Wing","Aile d&#39;Acier","Stahlflügel","Alacciaio","Ala De Acero","はがねのつばさ"],8,0,25,70,90],
[["Mean Look","Regard Noir","Horrorblick","Malosguardo","Mal De Ojo","くろいまなざし"],0,2,5,0,0],
[["Attract","Attraction","Anziehung","Attrazione","Atracción","メロメロ"],0,2,15,0,100],
[["Sleep Talk","Blabla Dodo","Schlafrede","Sonnolalia","Sonámbulo","ねごと"],0,2,10,0,0],
[["Heal Bell","Glas de Soin","Vitalglocke","Rintoccasana","Campana Cura","いやしのすず"],0,2,5,0,0],
[["Return","Retour","Rückkehr","Ritorno","Retroceso","おんがえし"],0,0,20,0,100],
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
[["Moonlight","Rayon Lune","Mondschein","Lucelunare","Luz Lunar","つきのひかり"],0,2,5,0,0],
[["Hidden Power","Puissance Cachée","Kraftreserve","Introforza","Poder Oculto","めざめるパワー"],0,1,15,0,100],
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
[["Future Sight","Prescience","Seher","Divinazione","Premonición","みらいよち"],13,1,10,100,100],
[["Rock Smash","Éclate-Roc","Zertrümmerer","Spaccaroccia","Golpe Roca","いわくだき"],1,0,15,40,100],
[["Whirlpool","Siphon","Whirlpool","Mulinello","Torbellino","うずしお"],10,1,15,35,85],
[["Beat Up","Baston","Prügler","Picchiaduro","Paliza","ふくろだたき"],16,0,10,0,100],
[["Fake Out","Bluff","Mogelhieb","Bruciapelo","Sorpresa","ねこだまし"],0,0,10,40,100],
[["Uproar","Brouhaha","Aufruhr","Baraonda","Alboroto","さわぐ"],0,1,10,90,100],
[["Stockpile","Stockage","Horter","Accumulo","Reserva","たくわえる"],0,2,20,0,0],
[["Spit Up","Relâche","Entfessler","Sfoghenergia","Escupir","はきだす"],0,1,10,0,100],
[["Swallow","Avale","Verzehrer","Intoenergia","Tragar","のみこむ"],0,2,10,0,0],
[["Heat Wave","Canicule","Hitzewelle","Ondacalda","Onda Ígnea","ねっぷう"],9,1,10,100,90],
[["Hail","Grêle","Hagelsturm","Grandine","Granizo","あられ"],14,2,10,0,0],
[["Torment","Tourmente","Folterknecht","Attaccalite","Tormento","いちゃもん"],16,2,15,0,100],
[["Flatter","Flatterie","Schmeichler","Adulazione","Camelo","おだてる"],16,2,15,0,100],
[["Will-O-Wisp","Feu Follet","Irrlicht","Fuocofatuo","Fuego Fatuo","おにび"],9,2,15,0,75],
[["Memento","Souvenir","Memento-Mori","Memento","Legado","おきみやげ"],16,2,10,0,100],
[["Facade","Façade","Fassade","Facciata","Imagen","からげんき"],0,0,20,70,100],
[["Focus Punch","Mitra-Poing","Power-Punch","Centripugno","Puño Certero","きあいパンチ"],1,0,20,150,100],
[["Smelling Salts","Stimulant","Riechsalz","Maniereforti","Estímulo","きつけ"],0,0,10,60,100],
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
[["Knock Off","Sabotage","Abschlag","Privazione","Desarme","はたきおとす"],16,0,20,20,100],
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
[["Meteor Mash","Poing Météor","Sternenhieb","Meteorpugno","Puño Meteoro","コメットパンチ"],8,0,10,100,85],
[["Astonish","Étonnement","Erstauner","Sgomento","Impresionar","おどろかす"],7,0,15,30,100],
[["Weather Ball","Ball&#39;Météo","Meteorologe","Palla Clima","Meteorobola","ウェザーボール"],0,1,10,50,100],
[["Aromatherapy","Aromathérapi","Aromakur","Aromaterapia","Aromaterapia","アロマセラピー"],11,2,5,0,0],
[["Fake Tears","Croco Larme","Trugträne","Falselacrime","Llanto Falso","うそなき"],16,2,20,0,100],
[["Air Cutter","Tranch&#39;Air","Windschnitt","Aerasoio","Aire Afilado","エアカッター"],2,1,25,55,95],
[["Overheat","Surchauffe","Hitzekoller","Vampata","Sofoco","オーバーヒート"],9,1,5,140,90],
[["Odor Sleuth","Flair","Schnüffler","Segugio","Rastreo","かぎわける"],0,2,40,0,0],
[["Rock Tomb","Tomberoche","Felsgrab","Rocciotomba","Tumba Rocas","がんせきふうじ"],5,0,10,50,80],
[["Silver Wind","Vent Argenté","Silberhauch","Ventargenteo","Viento Plata","ぎんいろのかぜ"],6,1,5,60,100],
[["Metal Sound","Strido-Son","Metallsound","Ferrostrido","Eco Metálico","きんぞくおん"],8,2,40,0,85],
[["Grass Whistle","Siffl&#39;Herbe","Grasflöte","Meloderba","Silbato","くさぶえ"],11,2,15,0,55],
[["Tickle","Chatouille","Spaßkanone","Solletico","Cosquillas","くすぐる"],0,2,20,0,100],
[["Cosmic Power","Force Cosmik","Kosmik-Kraft","Cosmoforza","Masa Cósmica","コスモパワー"],13,2,20,0,0],
[["Water Spout","Giclédo","Fontränen","Zampillo","Salpicar","しおふき"],10,1,5,150,100],
[["Signal Beam","Rayon Signal","Ampelleuchte","Segnoraggio","Doble Rayo","シグナルビーム"],6,1,15,75,100],
[["Shadow Punch","Poing Ombre","Finsterfaust","Pugnodombra","Puño Sombra","シャドーパンチ"],7,0,20,60,0],
[["Extrasensory","Extrasenseur","Sondersensor","Extrasenso","Paranormal","じんつうりき"],13,1,30,80,100],
[["Sky Uppercut","Stratopercut","Himmelhieb","Stramontante","Gancho Alto","スカイアッパー"],1,0,15,85,90],
[["Sand Tomb","Tourbi-Sable","Sandgrab","Sabbiotomba","Bucle Arena","すなじごく"],4,0,15,35,85],
[["Sheer Cold","Glaciation","Eiseskälte","Purogelo","Frío Polar","ぜったいれいど"],14,1,5,0,0],
[["Muddy Water","Ocroupi","Lehmbrühe","Fanghiglia","Agua Lodosa","だくりゅう"],10,1,10,95,85],
[["Bullet Seed","Balle Graine","Kugelsaat","Semitraglia","Recurrente","タネマシンガン"],11,0,30,25,100],
[["Aerial Ace","Aéropique","Aero-Ass","Aeroassalto","Golpe Aéreo","つばめがえし"],2,0,20,60,0],
[["Icicle Spear","Stalagtite","Eisspeer","Gelolancia","Carámbano","つららばり"],14,0,30,25,100],
[["Iron Defense","Mur de Fer","Eisenabwehr","Ferroscudo","Defensa Férrea","てっぺき"],8,2,15,0,0],
[["Block","Barrage","Rückentzug","Blocco","Bloqueo","とおせんぼう"],0,2,5,0,0],
[["Howl","Grondement","Jauler","Gridodilotta","Aullido","とおぼえ"],0,2,40,0,0],
[["Dragon Claw","Dracogriffe","Drachenklaue","Dragartigli","Garra Dragón","ドラゴンクロー"],15,0,15,80,100],
[["Frenzy Plant","Végé-Attak","Fauna-Statue","Radicalbero","Planta Feroz","ハードプラント"],11,1,5,150,90],
[["Bulk Up","Gonflette","Protzer","Granfisico","Corpulencia","ビルドアップ"],1,2,20,0,0],
[["Bounce","Rebond","Sprungfeder","Rimbalzo","Bote","とびはねる"],2,0,5,85,85],
[["Mud Shot","Tir de Boue","Lehmschuss","Colpodifango","Disparo Lodo","マッドショット"],4,1,15,55,95],
[["Poison Tail","Queue-Poison","Giftschweif","Velenocoda","Cola Veneno","ポイズンテール"],3,0,25,50,100],
[["Covet","Implore","Bezirzer","Supplica","Antojo","ほしがる"],0,0,40,60,100],
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
[["Wake-Up Slap","Réveil Forcé","Weckruf","Svegliopacca","Espabila","めざましビンタ"],1,0,10,60,100],
[["Hammer Arm","Marto-Poing","Hammerarm","Martelpugno","Machada","アームハンマー"],1,0,10,100,90],
[["Gyro Ball","Gyroballe","Gyroball","Vortexpalla","Giro Bola","ジャイロボール"],8,0,5,0,100],
[["Healing Wish","Vœu Soin","Heilopfer","Curardore","Deseo Cura","いやしのねがい"],13,2,10,0,0],
[["Brine","Saumure","Lake","Acquadisale","Salmuera","しおみず"],10,1,10,65,100],
[["Natural Gift","Don Naturel","Beerenkräfte","Dononaturale","Don Natural","しぜんのめぐみ"],0,0,15,0,100],
[["Feint","Ruse","Offenlegung","Fintoattacco","Amago","フェイント"],0,0,10,30,100],
[["Pluck","Picore","Pflücker","Spennata","Picoteo","ついばむ"],2,0,20,60,100],
[["Tailwind","Vent Arrière","Rückenwind","Ventoincoda","Viento Afín","おいかぜ"],2,2,30,0,0],
[["Acupressure","Acupression","Akupressur","Acupressione","Acupresión","つぼをつく"],0,2,30,0,0],
[["Metal Burst","Fulmifer","Metallstoß","Metalscoppio","Represión Metal","メタルバースト"],8,0,10,0,100],
[["U-turn","Demi-Tour","Kehrtwende","Retromarcia","Ida y Vuelta","とんぼがえり"],6,0,20,70,100],
[["Close Combat","Close Combat","Nahkampf","Zuffa","A Bocajarro","インファイト"],1,0,5,120,100],
[["Payback","Représailles","Gegenstoß","Rivincita","Vendetta","しっぺがえし"],16,0,10,50,100],
[["Assurance","Assurance","Gewissheit","Garanzia","Buena Baza","ダメおし"],16,0,10,50,100],
[["Embargo","Embargo","Itemsperre","Divieto","Embargo","さしおさえ"],16,2,15,0,100],
[["Fling","Dégommage","Schleuder","Lancio","Lanzamiento","なげつける"],16,0,10,0,100],
[["Psycho Shift","Échange Psy","Psybann","Psicotrasfer","Psicocambio","サイコシフト"],13,2,10,0,90],
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
[["Sucker Punch","Coup Bas","Tiefschlag","Sbigoattacco","Golpe Bajo","ふいうち"],16,0,5,80,100],
[["Toxic Spikes","Pics Toxik","Giftspitzen","Fielepunte","Púas Tóxicas","どくびし"],3,2,20,0,0],
[["Heart Swap","Permucœur","Statustausch","Cuorbaratto","Cambia Almas","ハートスワップ"],13,2,10,0,0],
[["Aqua Ring","Anneau Hydro","Wasserring","Acquanello","Acua Aro","アクアリング"],10,2,20,0,0],
[["Magnet Rise","Vol Magnétik","Magnetflug","Magnetascesa","Levitón","でんじふゆう"],12,2,10,0,0],
[["Flare Blitz","Boutefeu","Flammenblitz","Fuococarica","Envite Ígneo","フレアドライブ"],9,0,15,120,100],
[["Force Palm","Forte-Paume","Kraftwelle","Palmoforza","Palmeo","はっけい"],1,0,10,60,100],
[["Aura Sphere","Aurasphère","Aurasphäre","Forzasfera","Esfera Aural","はどうだん"],1,1,20,90,0],
[["Rock Polish","Poliroche","Steinpolitur","Lucidatura","Pulimento","ロックカット"],5,2,20,0,0],
[["Poison Jab","Direct Toxik","Gifthieb","Velenpuntura","Puya Nociva","どくづき"],3,0,20,80,100],
[["Dark Pulse","Vibrobscur","Finsteraura","Neropulsar","Pulso Umbrío","あくのはどう"],16,1,15,80,100],
[["Night Slash","Tranche-Nuit","Nachthieb","Nottesferza","Tajo Umbrío","つじぎり"],16,0,15,70,100],
[["Aqua Tail","Hydroqueue","Nassschweif","Idrondata","Acua Cola","アクアテール"],10,0,10,90,90],
[["Seed Bomb","Canon Graine","Samenbomben","Semebomba","Bomba Germen","タネばくだん"],11,0,15,80,100],
[["Air Slash","Lame d&#39;Air","Luftschnitt","Eterelama","Tajo Aéreo","エアスラッシュ"],2,1,20,75,95],
[["X-Scissor","Plaie-Croix","Kreuzschere","Forbice X","Tijera X","シザークロス"],6,0,15,80,100],
[["Bug Buzz","Bourdon","Käfergebrumm","Ronzio","Zumbido","むしのさざめき"],6,1,10,90,100],
[["Dragon Pulse","Dracochoc","Drachenpuls","Dragopulsar","Pulso Dragón","りゅうのはどう"],15,1,10,90,100],
[["Dragon Rush","Dracocharge","Drachenstoß","Dragofuria","Carga Dragón","ドラゴンダイブ"],15,0,10,100,75],
[["Power Gem","Rayon Gemme","Juwelenkraft","Gemmoforza","Joya de Luz","パワージェム"],5,1,20,70,100],
[["Drain Punch","Vampipoing","Ableithieb","Assorbipugno","Puño Drenaje","ドレインパンチ"],1,0,10,75,100],
[["Vacuum Wave","Onde Vide","Vakuumwelle","Vuotonda","Onda Vacío","しんくうは"],1,1,30,40,100],
[["Focus Blast","Exploforce","Fokusstoß","Focalcolpo","Onda Certera","きあいだま"],1,1,5,120,70],
[["Energy Ball","Éco-Sphère","Energieball","Energipalla","Energibola","エナジーボール"],11,1,10,80,100],
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
[["Draco Meteor","Draco Météor","Draco Meteor","Dragobolide","Cometa Draco","りゅうせいぐん"],15,1,5,140,90],
[["Discharge","Coup d&#39;Jus","Ladungsstoß","Scarica","Chispazo","ほうでん"],12,1,15,80,100],
[["Lava Plume","Ébullilave","Flammensturm","Lavasbuffo","Humareda","ふんえん"],9,1,15,80,100],
[["Leaf Storm","Tempête Verte","Blättersturm","Verdebufera","Lluevahojas","リーフストーム"],11,1,5,140,90],
[["Power Whip","Mégafouet","Blattgeißel","Vigorcolpo","Latigazo","パワーウィップ"],11,0,10,120,85],
[["Rock Wrecker","Roc-Boulet","Felswerfer","Devastomasso","Romperrocas","がんせきほう"],5,0,5,150,90],
[["Cross Poison","Poison-Croix","Giftstreich","Velenocroce","Veneno X","クロスポイズン"],3,0,20,70,100],
[["Gunk Shot","Détricanon","Mülltreffer","Sporcolancio","Lanza Mugre","ダストシュート"],3,0,5,120,70],
[["Iron Head","Tête de Fer","Eisenschädel","Metaltestata","Cabeza de Hierro","アイアンヘッド"],8,0,15,80,100],
[["Magnet Bomb","Bombaimant","Magnetbombe","Bombagnete","Bomba Imán","マグネットボム"],8,0,20,60,0],
[["Stone Edge","Lame de Roc","Steinkante","Pietrataglio","Roca Afilada","ストーンエッジ"],5,0,5,100,80],
[["Captivate","Séduction","Liebreiz","Incanto","Seducción","ゆうわく"],0,2,20,0,100],
[["Stealth Rock","Piège de Roc","Tarnsteine","Levitoroccia","Trampa Rocas","ステルスロック"],5,2,20,0,0],
[["Grass Knot","Nœud Herbe","Strauchler","Laccioerboso","Hierba Lazo","くさむすび"],11,1,20,0,100],
[["Chatter","Babil","Geschwätz","Schiamazzo","Cháchara","おしゃべり"],2,1,20,60,100],
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
[["Magma Storm","Vortex Magma","Lavasturm","Magmaclisma","Lluvia Ígnea","マグマストーム"],9,1,5,120,75],
[["Dark Void","Trou Noir","Schlummerort","Vuototetro","Brecha Negra","ダークホール"],16,2,10,0,80],
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
[["Storm Throw","Yama Arashi","Bergsturm","Tempestretta","Llave Corsé","やまあらし"],1,0,10,40,100],
[["Flame Burst","Rebondifeu","Funkenflug","Pirolancio","Pirotecnia","はじけるほのお"],9,1,15,70,100],
[["Sludge Wave","Cradovague","Schlammwoge","Fangonda","Onda Tóxica","ヘドロウェーブ"],3,1,10,95,100],
[["Quiver Dance","Papillodanse","Falterreigen","Eledanza","Danza Aleteo","ちょうのまい"],6,2,20,0,0],
[["Heavy Slam","Tacle Lourd","Rammboss","Pesobomba","Cuerpo Pesado","ヘビーボンバー"],8,0,10,0,100],
[["Synchronoise","Synchropeine","Synchrolärm","Sincrumore","Sincrorruido","シンクロノイズ"],13,1,15,70,100],
[["Electro Ball","Boule Élek","Elektroball","Energisfera","Bola Voltio","エレキボール"],12,1,10,0,100],
[["Soak","Détrempage","Überflutung","Inondazione","Anegar","みずびたし"],10,2,20,0,100],
[["Flame Charge","Nitrocharge","Nitroladung","Nitrocarica","Nitrocarga","ニトロチャージ"],9,0,20,50,100],
[["Coil","Enroulement","Einrollen","Arrotola","Enrosque","とぐろをまく"],3,2,20,0,0],
[["Low Sweep","Balayette","Fußtritt","Calciobasso","Puntapié","ローキック"],1,0,20,60,100],
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
[["Hex","Châtiment","Bürde","Sciagura","Infortunio","たたりめ"],7,1,10,50,100],
[["Sky Drop","Chute Libre","Freier Fall","Cadutalibera","Caída Libre","フリーフォール"],2,0,10,60,100],
[["Shift Gear","Changement Vitesse","Gangwechsel","Cambiomarcia","Cambio de Marcha","ギアチェンジ"],8,2,10,0,0],
[["Circle Throw","Projection","Überkopfwurf","Ribaltiro","Llave Giro","ともえなげ"],1,0,10,60,90],
[["Incinerate","Calcination","Einäschern","Bruciatutto","Calcinación","やきつくす"],9,1,15,30,100],
[["Quash","À la Queue","Verzögerung","Spintone","Último Lugar","さきおくり"],16,2,15,0,100],
[["Acrobatics","Acrobatie","Akrobatik","Acrobazia","Acróbata","アクロバット"],2,0,15,55,100],
[["Reflect Type","Copie Type","Typenspiegel","Riflettipo","Clonatipo","ミラータイプ"],0,2,15,0,0],
[["Retaliate","Vengeance","Heimzahlung","Nemesi","Represalia","かたきうち"],0,0,5,70,100],
[["Final Gambit","Tout ou Rien","Wagemut","Azzardo","Sacrificio","いのちがけ"],1,1,5,0,100],
[["Bestow","Passe-Cadeau","Offerte","Cediregalo","Ofrenda","ギフトパス"],0,2,15,0,0],
[["Inferno","Feu d&#39;Enfer","Inferno","Marchiatura","Infierno","れんごく"],9,1,5,100,50],
[["Water Pledge","Aire d&#39;Eau","Wassersäulen","Acquapatto","Voto Agua","みずのちかい"],10,1,10,50,100],
[["Fire Pledge","Aire de Feu","Feuersäulen","Fiammapatto","Voto Fuego","ほのおのちかい"],9,1,10,50,100],
[["Grass Pledge","Aire d&#39;Herbe","Pflanzensäulen","Erbapatto","Voto Planta","くさのちかい"],11,1,10,50,100],
[["Volt Switch","Change Éclair","Voltwechsel","Invertivolt","Voltiocambio","ボルトチェンジ"],12,1,20,70,100],
[["Struggle Bug","Survinsecte","Käfertrutz","Entomoblocco","Estoicismo","むしのていこう"],6,1,20,30,100],
[["Bulldoze","Piétisol","Dampfwalze","Battiterra","Terratemblor","じならし"],4,0,20,60,100],
[["Frost Breath","Souffle Glacé","Eisesodem","Alitogelido","Vaho Gélido","こおりのいぶき"],14,1,10,40,90],
[["Dragon Tail","Draco-Queue","Drachenrute","Codadrago","Cola Dragón","ドラゴンテール"],15,0,10,60,90],
[["Work Up","Rengorgement","Kraftschub","Cuordileone","Avivar","ふるいたてる"],0,2,30,0,0],
[["Electroweb","Toile Élek","Elektronetz","Elettrotela","Electrotela","エレキネット"],12,1,15,55,95],
[["Wild Charge","Éclair Fou","Stromstoß","Sprizzalampo","Voltio Cruel","ワイルドボルト"],12,0,15,90,100],
[["Drill Run","Tunnelier","Schlagbohrer","Giravvita","Taladradora","ドリルライナー"],4,0,10,80,95],
[["Dual Chop","Double Baffe","Doppelhieb","Doppiocolpo","Golpe Bis","ダブルチョップ"],15,0,15,40,90],
[["Heart Stamp","Crèvecœur","Herzstempel","Cuorestampo","Arrumaco","ハートスタンプ"],13,0,25,60,100],
[["Horn Leech","Encornebois","Holzgeweih","Legnicorno","Asta Drenaje","ウッドホーン"],11,0,10,75,100],
[["Sacred Sword","Lame Sainte","Sanctoklinge","Spadasolenne","Espada Santa","せいなるつるぎ"],1,0,20,90,100],
[["Razor Shell","Coquilame","Kalkklinge","Conchilama","Concha Filo","シェルブレード"],10,0,10,75,95],
[["Heat Crash","Tacle Feu","Brandstempel","Marchiafuoco","Golpe Calor","ヒートスタンプ"],9,0,10,0,100],
[["Leaf Tornado","Phytomixeur","Grasmixer","Vorticerba","Ciclón de Hojas","グラスミキサー"],11,1,10,65,90],
[["Steamroller","Bulldoboule","Quetschwalze","Rulloduro","Rodillo de Púas","ハードローラー"],6,0,20,65,100],
[["Cotton Guard","Cotogarde","Watteschild","Cotonscudo","Rizo Algodón","コットンガード"],11,2,10,0,0],
[["Night Daze","Explonuit","Nachtflut","Urtoscuro","Pulso Noche","ナイトバースト"],16,1,10,85,95],
[["Psystrike","Frappe Psy","Psychostoß","Psicobotta","Onda Mental","サイコブレイク"],13,1,10,100,100],
[["Tail Slap","Plumo-Queue","Kehrschelle","Spazzasberla","Plumerazo","スイープビンタ"],0,0,10,25,85],
[["Hurricane","Vent Violent","Orkan","Tifone","Vendaval","ぼうふう"],2,1,10,120,70],
[["Head Charge","Peignée","Steinschädel","Ricciolata","Ariete","アフロブレイク"],0,0,15,120,100],
[["Gear Grind","Lancécrou","Klikkdiskus","Ingracolpo","Rueda Doble","ギアソーサー"],8,0,15,50,85],
[["Searing Shot","Incendie","Flammenball","Sparafuoco","Bomba Ígnea","かえんだん"],9,1,5,100,100],
[["Techno Blast","Techno-Buster","Techblaster","Tecnobotto","Tecno Shock","テクノバスター"],0,1,5,85,100],
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
[["Fusion Bolt","Éclair Croix","Kreuzdonner","Incrotuono","Rayo Fusión","クロスサンダー"],12,0,5,100,100]
];
const LEARNSET_GAMES=[
	['Black',,,,'Negro'],
	['White',,,,'Blanco']
];
const LEARNSET_REMAKES=[
	['Black 2',,,,'Negro 2'],
	['White 2',,,,'Blanco 2']
];
const LEARNSET_GAMES_ID='bw';
const LEARNSET_REMAKES_ID='b2w2';
const TMs=[,468,337,473,347,46,92,258,339,474,237,241,269,58,59,63,113,182,240,477,219,218,76,479,85,87,89,216,91,94,247,280,104,115,482,53,188,201,126,317,332,259,263,488,156,213,168,490,496,497,315,502,411,412,206,503,374,451,507,510,511,261,512,373,153,421,371,514,416,397,148,444,521,86,360,14,522,244,523,524,157,404,525,526,398,138,447,207,365,369,164,430,433,528,249,555];
const HMs=[,15,19,57,70,127,291];

/*
	l: levelup
		[moveIndex, level (all), level (b2w2 exclusive)]
	m: machine
	e: egg moves
	t: tutors
	s: special
	-
	r: b2w2 exclusive
*/
var LEARNSETS=[,
{//Bulbasaur
l:[[33,1],[45,3],[73,7],[22,9],[77,13],[79,13],[36,15],[75,19],[230,21],[74,25],[38,27],[388,31],[235,33],[402,37]],
m:[92,474,237,241,113,182,219,218,76,216,104,188,263,156,213,496,497,412,148,14,447,207,164,249,15,70],
e:[80,124,130,133,174,202,203,204,267,275,320,345,437,438],
t:[520],
tr:[20,173,202,214,235,282,388,402]
},{//Ivysaur
l:[[33,1],[45,1],[73,1],[45,3],[73,7],[22,9],[77,13],[79,13],[36,15],[75,20],[230,23],[74,28],[38,31],[388,36],[235,39],[76,44]],
m:[92,474,237,241,113,182,219,218,76,216,104,188,263,156,213,496,497,412,148,14,447,207,164,249,15,70],
t:[520],
tr:[20,173,202,214,235,282,388,402]
},{//Venusaur
l:[[22,1],[33,1],[45,1],[73,1],[45,3],[73,7],[22,9],[77,13],[79,13],[36,15],[75,20],[230,23],[74,28],[38,31],[80,32],[388,39],[235,45],[76,53]],
m:[46,92,474,237,241,63,113,182,219,218,76,89,216,104,188,263,156,213,496,497,412,416,148,14,523,447,207,164,249,15,70],
t:[338,520],
tr:[20,173,200,202,214,235,282,335,388,402]
},{//Charmander
l:[[10,1],[45,1],[52,7],[108,10],[82,16],[184,19],[424,25],[481,28],[163,34],[53,37],[83,43],[517,46]],
m:[468,337,92,237,241,182,218,216,91,280,104,53,126,317,332,263,488,156,213,496,497,315,374,510,261,421,14,157,207,164,249,15,70],
e:[44,68,187,200,232,242,246,251,264,349,394,406,407],
t:[519],
tr:[7,9,173,200,214,231,257]
},{//Charmeleon
l:[[10,1],[45,1],[52,1],[52,7],[108,10],[82,17],[184,21],[424,28],[481,32],[163,39],[53,43],[83,50],[517,54]],
m:[468,337,92,237,241,182,218,216,91,280,104,53,126,317,332,263,488,156,213,496,497,315,374,510,261,421,14,157,207,164,249,15,70],
t:[519],
tr:[7,9,173,200,214,231,257]
},{//Charizard
l:[[10,1],[45,1],[52,1],[108,1],[337,1],[403,1],[421,1],[52,7],[108,10],[82,17],[184,21],[424,28],[481,32],[17,36],[163,41],[53,47],[83,56],[517,62],[257,71],[394,77]],
m:[468,337,46,92,237,241,63,182,218,76,89,216,91,280,104,53,126,317,332,263,488,156,213,496,497,315,411,374,507,510,261,421,416,14,523,157,525,207,164,249,15,19,70],
t:[307,519],
tr:[7,9,173,200,214,231,257,355,366,406]
},{//Squirtle
l:[[33,1],[39,4],[145,7],[110,10],[55,13],[44,16],[229,19],[182,22],[352,25],[401,28],[130,31],[334,34],[240,37],[56,40]],
m:[92,258,237,58,59,182,240,218,216,91,280,104,317,263,156,213,496,503,374,360,207,164,249,57,70,127,291],
e:[54,114,175,193,243,252,281,287,300,323,330,362,392,453],
t:[518],
tr:[8,173,196,214,231,334,401,428]
},{//Wartortle
l:[[33,1],[39,1],[145,1],[39,4],[145,7],[110,10],[55,13],[44,16],[229,20],[182,24],[352,28],[401,32],[130,36],[334,40],[240,44],[56,48]],
m:[92,258,237,58,59,182,240,218,216,91,280,104,317,263,156,213,496,503,374,360,207,164,249,57,70,127,291],
t:[518],
tr:[8,173,196,214,231,334,401,428]
},{//Blastoise
l:[[33,1],[39,1],[110,1],[145,1],[430,1],[39,4],[145,7],[110,10],[55,13],[44,16],[229,20],[182,24],[352,28],[401,32],[130,39],[334,46],[240,53],[56,60]],
m:[46,92,258,237,58,59,63,182,240,218,479,89,216,91,280,104,317,263,156,213,496,411,503,374,416,360,523,157,525,207,164,430,249,57,70,127,291],
t:[308,518],
tr:[8,173,196,200,214,231,324,334,401,428]
},{//Caterpie
l:[[33,1],[81,1],[450,15]],
tr:[173,450,527]
},{//Metapod
l:[[106,1],[106,7]],
tr:[334,450,527]
},{//Butterfree
l:[[93,1],[93,10],[77,12],[78,12],[79,12],[16,16],[48,18],[18,22],[60,24],[318,28],[366,30],[476,34],[219,36],[445,40],[405,42],[483,46]],
m:[92,474,237,241,63,182,240,219,218,76,216,94,247,104,332,263,156,213,168,496,412,512,416,148,522,244,138,207,369,164],
tr:[173,202,214,285,324,355,366,450,527],
s:[314,93,355]
},{//Weedle
l:[[40,1],[81,1],[450,15]],
tr:[450,527]
},{//Kakuna
l:[[106,1],[106,7]],
tr:[334,450,527]
},{//Beedrill
l:[[31,1],[31,10],[116,13],[41,16],[99,19],[228,22],[390,25],[42,28],[97,31],[372,34],[398,37],[283,40]],
m:[92,474,237,241,63,182,218,76,216,280,104,188,332,263,156,213,168,496,206,512,371,416,148,14,522,404,398,207,369,164,249,15],
tr:[173,202,214,282,283,355,366,450,527,529],
s:[314,31,210]
},{//Pidgey
l:[[33,1],[28,5],[16,9],[98,13],[18,17],[239,21],[297,25],[97,29],[17,33],[355,37],[366,41],[119,45],[403,49],[542,53]],
m:[92,237,241,182,240,218,216,104,332,263,156,213,168,496,526,207,365,369,164,19],
e:[185,193,211,228,253,314,403,413,432],
tr:[173,214,253,257,355,366],
s:[16,290,211]
},{//Pidgeotto
l:[[16,1],[28,1],[33,1],[28,5],[16,9],[98,13],[18,17],[239,22],[297,27],[97,32],[17,37],[355,42],[366,47],[119,52],[403,57],[542,62]],
m:[92,237,241,182,240,218,216,104,332,263,156,213,168,496,526,207,365,369,164,19],
tr:[173,214,253,257,355,366]
},{//Pidgeot
l:[[16,1],[28,1],[33,1],[98,1],[28,5],[16,9],[98,13],[18,17],[239,22],[297,27],[97,32],[17,38],[355,44],[366,50],[119,56],[403,62],[542,68]],
m:[92,237,241,63,182,240,218,216,104,332,263,156,213,168,496,416,526,207,365,369,164,19],
tr:[143,173,214,253,257,355,366]
},{//Rattata
l:[[33,1],[39,1],[98,4],[116,7],[44,10],[228,13],[158,16],[389,19],[242,22],[372,25],[162,28],[38,31],[283,34]],
m:[92,237,241,269,58,59,182,240,218,85,87,216,91,247,104,263,156,213,168,496,451,514,86,526,447,207,365,369,164,528,249,15],
e:[44,68,103,154,172,179,253,279,382,387,515],
tr:[162,173,196,214,231,253,283,343,387,428],
s:[231,382,98]
},{//Raticate
l:[[14,1],[33,1],[39,1],[98,1],[116,1],[98,4],[116,7],[44,10],[228,13],[158,16],[389,19],[184,20],[242,24],[372,29],[162,34],[38,39],[283,44]],
m:[46,92,237,241,269,58,59,63,182,240,218,85,87,216,91,247,104,263,156,213,168,496,451,514,416,86,14,526,447,207,365,369,164,528,249,15,70],
tr:[162,173,196,214,231,253,283,343,387,428]
},{//Spearow
l:[[45,1],[64,1],[43,5],[31,9],[228,13],[332,17],[119,21],[97,25],[372,29],[355,33],[65,37]],
m:[92,237,241,182,240,218,216,104,332,263,156,213,168,496,497,206,526,207,365,369,164,19],
e:[13,18,98,143,161,184,185,211,253,297,310],
tr:[143,173,214,253,257,355,366,529],
s:[185,64,211]
},{//Fearow
l:[[31,1],[43,1],[45,1],[64,1],[365,1],[43,5],[31,9],[228,13],[332,17],[119,23],[97,29],[372,35],[355,41],[65,47],[529,53]],
m:[92,237,241,63,182,240,218,216,104,332,263,156,213,168,496,497,206,416,526,207,365,369,164,19],
tr:[143,173,214,253,257,355,366,529]
},{//Ekans
l:[[35,1],[43,1],[40,4],[44,9],[137,12],[103,17],[51,20],[254,25],[255,25],[256,25],[491,28],[426,33],[380,36],[114,41],[489,44],[441,49]],
m:[92,474,237,241,182,240,218,89,216,91,104,482,188,317,259,263,156,213,168,496,371,523,157,398,207,164,70],
e:[21,50,180,184,228,231,251,289,305,342,389,415],
tr:[20,173,180,202,214,231,289,380,399,401,402,441],
s:[251,399,40]
},{//Arbok
l:[[35,1],[40,1],[43,1],[44,1],[422,1],[423,1],[424,1],[40,4],[44,9],[137,12],[103,17],[51,20],[242,22],[254,27],[255,27],[256,27],[491,32],[426,39],[380,44],[114,51],[489,56],[441,63]],
m:[92,474,237,241,63,182,240,218,89,216,91,104,482,188,317,259,263,156,213,168,496,371,416,523,157,525,398,207,164,70],
tr:[20,173,180,202,214,231,289,380,399,401,402,441]
},{//Pikachu
l:[[45,1],[84,1],[39,5],[86,10],[98,13],[486,18],[104,21],[21,26],[85,29],[364,34],[97,37],[435,42],[113,45],[87,50]],
m:[92,237,113,182,240,218,85,87,216,91,280,104,263,156,213,496,497,374,451,148,521,86,447,207,164,528,249,70],
tr:[9,173,214,231,270,282,324,343,393]
},{//Raichu
l:[[39,1],[84,1],[85,1],[98,1]],
m:[92,237,63,113,182,240,218,85,87,216,91,280,104,263,156,213,168,496,497,411,374,451,416,148,521,86,447,207,164,528,249,70],
tr:[9,173,214,231,270,282,324,343,393]
},{//Sandshrew
l:[[10,1],[111,3,1],[28,7,3],[40,9,5],[229,13,9],[129,15,11],[222,,17],[154,19,20],[205,21,7],[210,25,14],[328,27,23],[91,,30],[163,31,26],[360,33,34],[201,37,42],[14,,38],[89,,46]],
m:[468,92,237,241,182,219,218,89,216,91,280,104,201,317,332,263,156,213,168,496,374,421,360,14,523,157,404,398,207,164,249,15,70],
e:[68,175,203,229,232,306,341,400,431,498],
tr:[162,173,214,231,282,343,414,446],
s:[68,28,162]
},{//Sandslash
l:[[10,1],[28,1,3],[111,1],[111,3],[28,7],[40,9,5],[229,13,9],[129,15,11],[222,,17],[154,19,20],[205,21,7],[306,22],[210,28,14],[91,,30],[328,33,23],[14,,38],[163,40,26],[360,45,34],[89,,46],[201,52,42]],
m:[468,92,237,241,63,182,219,218,89,216,91,280,104,201,317,332,263,156,213,168,496,411,374,421,416,444,360,14,523,157,404,398,207,164,249,15,70],
tr:[162,173,214,231,282,343,414,446]
},{//Nidoran♀
l:[[10,1],[45,1],[39,7],[24,9],[40,13],[154,19],[44,21],[270,25],[390,31],[260,33],[242,37],[445,43],[305,45]],
m:[468,92,474,237,241,58,59,182,240,218,85,87,216,91,104,188,332,263,156,213,168,496,421,398,207,164,249,15,70],
e:[36,48,50,68,116,130,203,204,228,231,251,342,498],
tr:[162,173,214,231,270],
s:[10,389,162]
},{//Nidorina
l:[[10,1],[45,1],[39,7],[24,9],[40,13],[154,20],[44,23],[270,28],[390,35],[260,38],[242,43],[445,50],[305,58]],
m:[468,92,474,237,241,58,59,182,240,218,85,87,216,91,104,188,332,263,156,213,168,496,497,421,398,207,164,249,15,70],
tr:[162,173,214,231,270]
},{//Nidoqueen
l:[[10,1],[24,1],[39,1],[40,1],[498,23],[34,35],[414,43],[276,58]],
m:[468,46,92,474,237,241,269,58,59,63,182,240,218,479,85,87,89,216,91,247,280,104,482,53,188,201,126,317,332,259,263,156,213,168,496,497,411,374,510,511,421,416,444,523,157,525,398,207,164,249,15,57,70],
tr:[7,8,9,162,173,196,200,214,231,253,270,276,401,406,414,446]
},{//Nidoran♂
l:[[43,1],[64,1],[116,7],[24,9],[40,13],[31,19],[30,21],[270,25],[390,31],[260,33],[398,37],[445,43],[32,45]],
m:[468,92,474,237,241,58,59,182,240,218,85,87,216,91,104,188,263,156,213,168,496,497,421,398,207,164,249,15,70],
e:[36,48,50,68,93,133,203,231,251,342,389,457,498],
tr:[162,173,214,231,270,529],
s:[68,64,162]
},{//Nidorino
l:[[43,1],[64,1],[116,7],[24,9],[40,13],[31,20],[30,23],[270,28],[390,35],[260,38],[398,43],[445,50],[32,58]],
m:[468,92,474,237,241,58,59,182,240,218,85,87,216,91,104,188,263,156,213,168,496,497,421,398,207,164,249,15,70],
tr:[162,173,214,231,270,529]
},{//Nidoking
l:[[24,1],[40,1],[64,1],[116,1],[498,23],[37,35],[414,43],[224,58]],
m:[468,46,92,474,237,241,269,58,59,63,182,240,218,479,85,87,89,216,91,247,280,104,482,53,188,201,126,317,259,263,156,213,168,496,497,411,374,510,511,421,416,444,523,157,525,398,207,164,249,15,57,70],
tr:[7,8,9,162,173,196,200,214,231,253,270,276,401,406,414,446,529]
},{//Clefairy
l:[[1,1],[45,1],[227,4],[47,7],[3,10],[111,13],[266,16],[107,19,25],[358,22],[516,25,19],[322,28,34],[381,31,37],[118,34,31],[356,37,49],[236,40,43],[34,,40],[500,43,28],[113,46],[361,49,55],[495,52,58],[309,55,52]],
m:[473,347,92,237,241,58,59,113,182,240,477,219,218,76,85,87,216,91,94,247,280,104,115,53,126,263,156,213,496,497,374,451,510,514,148,86,244,526,138,447,207,164,249,70],
tr:[7,8,9,173,196,214,215,231,270,271,272,277,278,282,283,289,304,324,340,343,356,387,409,428,446,472,495]
},{//Clefable
l:[[3,1],[47,1],[107,1],[118,1]],
m:[473,347,92,237,241,58,59,63,113,182,240,477,219,218,76,85,87,216,91,94,247,280,104,115,53,126,263,156,213,496,497,411,374,451,510,514,416,148,86,244,526,138,447,207,164,249,70],
tr:[7,8,9,173,196,214,215,231,270,271,272,277,278,282,283,289,304,324,340,343,356,387,409,428,446,472,495]
},{//Vulpix
l:[[52,1],[39,4],[46,7],[98,11,10],[83,14,12],[109,17,15],[185,,20],[286,21,18],[481,24,23],[219,27,36],[506,,28],[261,31,26],[371,34,31],[53,37,34],[445,41,47],[517,44,50],[288,47,44],[326,51,39],[126,54,42]],
m:[46,92,237,241,182,219,218,216,91,104,53,126,263,488,156,213,496,315,412,510,261,371,244,207,164],
e:[50,95,175,180,185,257,290,326,336,384,394,506,541],
tr:[173,180,214,220,231,257,272,343,399,428,492],
s:[399,257,46]
},{//Ninetales
l:[[52,1],[98,1],[109,1],[219,1],[417,1]],
m:[473,347,46,92,237,241,63,182,219,218,76,216,91,104,53,126,263,488,156,213,496,315,412,510,261,371,416,244,138,207,164],
tr:[173,180,214,220,231,257,272,343,399,428,492]
},{//Jigglypuff
l:[[47,1],[111,5],[1,9],[50,13],[496,17],[205,21],[3,25],[156,29],[34,33],[360,37],[358,41],[102,45],[304,49],[38,53]],
m:[92,237,241,58,59,113,182,240,219,218,76,85,87,216,91,94,247,280,104,115,53,126,263,156,213,496,497,374,451,510,514,148,86,360,244,526,138,447,207,164,528,70],
tr:[7,8,9,173,196,214,215,220,270,272,277,278,282,283,289,304,340,343,356,387,409,446]
},{//Wigglytuff
l:[[3,1],[47,1],[50,1],[111,1]],
m:[92,237,241,58,59,63,113,182,240,219,218,76,85,87,216,91,94,247,280,104,115,53,126,263,156,213,496,497,411,374,451,510,514,416,148,86,360,244,526,138,447,207,164,528,70],
tr:[7,8,9,173,196,214,215,220,270,272,277,278,282,283,289,304,340,343,356,387,409,446,478]
},{//Zubat
l:[[141,1],[48,5,4],[310,9,8],[44,13,12],[17,17,15],[109,21,19],[129,,23],[314,25,26],[212,29,34],[512,33,30],[305,37],[114,41],[403,45]],
m:[92,474,237,241,269,182,240,218,216,247,104,188,332,259,263,156,213,168,496,512,371,207,365,369,164,19],
e:[16,18,95,98,174,185,202,211,228,413,417,428,432],
tr:[162,173,202,214,253,257,289,355,366,428],
s:[95,162,48]
},{//Golbat
l:[[48,1,4],[103,1],[141,1],[310,1,8],[48,5],[310,9],[44,13,12],[17,17,15],[109,21,19],[129,,24],[314,27,28],[212,33,38],[512,39,33],[305,45,42],[114,51,47],[403,57,52]],
m:[92,474,237,241,269,63,182,240,218,216,247,104,188,332,259,263,156,213,168,496,512,371,416,207,365,369,164,19],
tr:[162,173,202,214,253,257,289,355,366,428]
},{//Oddish
l:[[71,1],[230,5],[51,9],[77,13],[78,15],[79,17],[72,21],[381,25],[363,29],[236,33],[202,37],[80,41]],
m:[92,474,237,241,182,218,76,216,104,188,263,156,213,496,412,148,14,447,207,164,15],
e:[75,175,204,235,267,275,290,298,321,495],
tr:[173,202,214,235,380,388,402,495],
s:[202,230,298]
},{//Gloom
l:[[51,1],[71,1],[230,1],[230,5],[51,9],[77,13],[78,15],[79,17],[72,23],[381,29],[363,35],[236,41],[202,47],[80,53]],
m:[92,474,237,241,182,218,76,216,104,188,263,156,213,496,412,374,148,14,447,207,164,15],
tr:[173,202,214,235,380,388,402,409,495]
},{//Vileplume
l:[[72,1],[77,1],[78,1],[312,1],[80,53],[76,65]],
m:[92,474,237,241,63,182,218,76,216,104,188,263,156,213,496,412,374,416,148,14,447,207,164,15],
tr:[173,202,214,235,380,388,402,409,495]
},{//Paras
l:[[10,1],[77,6],[78,6],[141,11],[210,17],[147,22],[163,27],[74,33],[202,38],[312,43],[476,49],[404,54]],
m:[468,92,474,237,241,113,182,218,76,216,91,280,104,188,332,263,156,213,168,496,412,206,148,14,522,404,447,207,164,249,15],
e:[60,68,73,97,103,175,203,228,230,232,363,440,450],
tr:[173,202,214,235,282,388,402,450,495],
s:[440,78,235]
},{//Parasect
l:[[10,1],[77,1],[78,1],[141,1],[440,1],[77,6],[78,6],[141,11],[210,17],[147,22],[163,29],[74,37],[202,44],[312,51],[476,59],[404,66]],
m:[468,92,474,237,241,63,113,182,218,76,216,91,280,104,188,332,263,156,213,168,496,412,206,416,148,14,522,404,447,207,164,249,15],
tr:[173,202,214,235,282,388,402,450,495]
},{//Venonat
l:[[33,1],[50,1],[193,1],[48,5],[93,11],[77,13],[141,17],[78,23],[60,25],[79,29],[324,35],[428,37],[305,41],[94,47]],
m:[92,474,237,241,182,218,76,216,94,104,188,263,156,213,168,496,148,522,207,164],
e:[97,103,202,226,234,285,290,324,390,450,476],
tr:[173,202,214,285,324,428,450],
s:[226,50,285]
},{//Venomoth
l:[[33,1],[48,1],[50,1],[193,1],[318,1],[48,5],[93,11],[77,13],[141,17],[78,23],[60,25],[79,29],[16,31],[324,37],[428,41],[305,47],[94,55],[405,59],[483,63]],
m:[92,474,237,241,63,182,218,76,216,94,104,188,332,263,156,213,168,496,412,512,416,148,522,207,369,164],
tr:[173,202,214,285,324,355,366,428,450]
},{//Diglett
l:[[10,1],[28,1],[45,4],[310,7],[189,12],[222,15],[523,18],[389,23],[426,26],[414,29],[91,34],[163,37],[89,40],[90,45]],
m:[468,92,237,241,182,218,89,216,91,104,188,201,317,332,263,156,213,168,496,497,421,523,157,207,164,249,15],
e:[29,103,179,185,203,228,246,251,253,262,310,426,515],
tr:[173,214,253,414,446],
s:[251,28,446]
},{//Dugtrio
l:[[10,1],[28,1],[45,1],[161,1],[400,1],[45,4],[310,7],[189,12],[222,15],[523,18],[389,23],[328,26],[426,28],[414,33],[91,40],[163,45],[89,50],[90,57]],
m:[468,92,237,241,63,182,218,89,216,91,104,482,188,201,317,332,263,156,213,168,496,497,421,416,444,523,157,207,164,249,15],
tr:[173,214,253,414,446]
},{//Meowth
l:[[10,1],[45,1],[44,6],[252,9],[154,14],[103,17],[185,22],[269,25],[6,30],[163,33],[417,38],[372,41],[445,46],[400,49],[364,54]],
m:[468,92,237,241,269,182,240,218,85,87,216,91,247,104,332,259,263,156,213,168,496,497,421,371,514,148,244,526,138,207,369,164,15],
e:[39,95,133,175,180,204,231,274,289,316,386,387,492],
tr:[173,180,196,214,231,253,282,289,304,343,387,399,402,441,492],
s:[95,10,290]
},{//Persian
l:[[10,1],[44,1,6],[45,1],[252,1,9],[415,1],[44,6],[252,9],[154,14],[103,17],[185,22],[269,25],[129,,28],[408,32],[163,37],[417,44],[372,49],[445,56],[400,61],[364,68]],
m:[468,46,92,237,241,269,63,182,240,218,85,87,216,91,247,104,332,259,263,156,213,168,496,497,373,421,371,514,416,148,244,526,138,207,369,164,15],
tr:[173,180,196,214,231,253,282,289,304,343,387,399,402,441,492]
},{//Psyduck
l:[[10,1],[346,1],[39,5,4],[55,9,8],[50,14,11],[93,18,15],[352,22,18],[154,27,22],[103,31,25],[401,,32],[487,35,36],[244,40,39],[428,44,29],[133,48,43],[56,53,46],[472,57,50]],
m:[468,473,347,92,258,237,58,59,113,182,240,477,218,216,91,94,280,104,332,263,156,213,496,503,374,421,148,244,207,164,249,57,70,127,291],
e:[60,95,109,193,214,227,238,248,281,287,290,426,485],
tr:[8,173,196,214,231,272,324,388,401,428,472],
s:[362,227,346]
},{//Golduck
l:[[10,1],[39,1,4],[55,1,8],[346,1],[453,1],[39,5],[55,9],[50,14,11],[93,18,15],[352,22,18],[154,27,22],[103,31,25],[401,,32],[487,37,38],[244,44,43],[428,50,29],[133,56,49],[56,63,54],[472,69,60]],
m:[468,473,347,92,258,237,58,59,63,113,182,240,477,218,216,91,94,280,104,332,263,156,213,490,496,411,503,374,421,416,148,244,207,164,249,57,70,127,291],
tr:[8,67,173,196,214,231,272,324,388,401,428,472]
},{//Mankey
l:[[10,1],[43,1],[67,1],[116,1],[343,1],[154,9],[2,13],[69,17],[103,21],[372,25],[207,33],[238,37],[37,41],[386,45],[370,49],[515,53]],
m:[468,92,339,237,241,269,182,240,218,479,85,87,89,216,91,280,104,317,332,263,156,213,168,490,496,315,411,374,512,371,514,523,157,526,398,207,369,164,249,70],
e:[68,96,179,193,214,227,251,264,265,279,370],
tr:[7,8,9,67,180,200,214,231,253,270,272,283,343,402,441,530],
s:[67,179,9]
},{//Primeape
l:[[10,1],[43,1],[67,1],[116,1],[374,1],[154,9],[2,13],[69,17],[103,21],[372,25],[99,28],[207,35],[238,41],[37,47],[386,53],[370,59],[515,63]],
m:[468,92,339,237,241,269,63,182,240,218,479,85,87,89,216,91,280,104,317,332,263,156,213,168,490,496,315,411,374,512,371,514,416,444,523,157,526,398,207,369,164,249,70],
tr:[7,8,9,67,180,200,214,231,253,270,272,283,343,402,441,530]
},{//Growlithe
l:[[44,1],[46,1],[52,6],[43,9,8],[316,14,10],[270,17,12],[172,20,17],[179,25,19],[424,28,21],[481,31,28],[36,34,23],[53,39,34],[97,42,30],[200,,43],[242,45,39],[514,48,32],[257,51,41],[394,56,45]],
m:[46,92,237,241,182,219,218,216,91,104,53,126,332,263,488,156,213,168,496,315,510,261,514,207,164,528,249,555,70],
e:[24,34,37,38,83,231,234,242,257,336,343,370,394],
tr:[173,200,214,231,257,270,343],
s:[44,34,203,46]
},{//Arcanine
l:[[44,1],[46,1],[316,1],[422,1],[424,1],[245,39,34]],
m:[46,92,237,241,63,182,219,218,76,216,91,104,53,126,332,263,488,156,213,168,496,315,510,261,514,416,523,207,164,528,249,555,70],
tr:[173,200,214,231,257,270,343,406,442]
},{//Poliwag
l:[[346,1],[145,5],[95,8],[55,11],[3,15],[240,18],[34,21],[61,25],[341,28],[187,31],[358,35],[56,38],[426,41]],
m:[92,258,237,58,59,182,240,218,216,91,94,104,263,156,213,168,496,503,207,164,57,127,291],
e:[54,61,114,150,170,203,227,283,287,301,341,346,352],
tr:[173,196,214,270,283],
s:[95,54,214]
},{//Poliwhirl
l:[[95,1],[145,1],[346,1],[145,5],[95,8],[55,11],[3,15],[240,18],[34,21],[61,27],[341,32],[187,37],[358,43],[56,48],[426,53]],
m:[92,258,237,58,59,182,240,218,89,216,91,94,280,104,263,156,213,168,496,503,374,523,207,164,249,57,70,127,291],
tr:[8,173,196,214,270,283]
},{//Poliwrath
l:[[3,1],[61,1],[66,1],[95,1],[223,32],[170,43],[509,53]],
m:[92,258,339,237,58,59,63,182,240,218,89,216,91,94,280,104,317,263,156,213,168,490,496,411,503,374,371,416,523,157,526,398,207,164,249,57,70,127,291],
tr:[8,173,196,214,270,283]
},{//Abra
l:[[100,1]],
m:[473,347,92,237,241,269,113,182,240,477,219,218,216,94,247,104,115,259,263,156,213,168,496,502,412,374,451,373,148,86,244,138,447,207,164,433],
e:[7,8,9,112,227,282,285,379,385,470],
tr:[7,8,9,173,214,231,271,272,277,278,282,285,289,324,356,409,428,472,478,492],
s:[356,285,100]
},{//Kadabra
l:[[93,1],[100,1],[134,1],[93,16],[50,18],[357,22],[502,24],[60,28],[115,30],[477,34],[105,36],[427,40],[272,42],[94,46],[248,48],[271,52]],
m:[473,347,92,237,241,269,113,182,240,477,219,218,216,94,247,104,115,259,263,156,213,168,496,502,412,374,451,373,148,86,244,138,447,207,164,433],
tr:[7,8,9,173,214,231,271,272,277,278,282,285,289,324,356,409,428,472,478,492]
},{//Alakazam
l:[[93,1],[100,1],[134,1],[93,16],[50,18],[357,22],[502,24],[60,28],[115,30],[477,34],[105,36],[427,40],[347,42],[94,46],[248,48],[271,52]],
m:[473,347,92,237,241,269,63,113,182,240,477,219,218,216,94,247,104,115,259,263,156,213,168,496,502,411,412,374,451,373,416,148,86,244,138,447,207,164,433],
tr:[7,8,9,173,214,231,271,272,277,278,282,285,289,324,356,409,428,472,478,492]
},{//Machop
l:[[43,1],[67,1],[116,7],[2,10],[490,13],[193,19],[69,22],[279,25],[233,31],[66,34],[358,37],[238,43],[184,46],[223,49]],
m:[92,339,237,241,113,182,240,218,479,89,216,91,280,104,53,126,317,263,156,213,168,490,496,411,374,510,371,514,523,157,526,398,207,164,249,70],
e:[7,8,9,27,68,96,227,265,282,321,370,379,418,484],
tr:[7,8,9,67,173,214,270,272,276,282,530],
s:[418,270,67]
},{//Machoke
l:[[2,1],[43,1],[67,1],[116,1],[116,7],[2,10],[490,13],[193,19],[69,22],[279,25],[233,32],[66,36],[358,40],[238,44],[184,51],[223,55]],
m:[92,339,237,241,113,182,240,218,479,89,216,91,280,104,53,126,317,263,156,213,168,490,496,411,374,510,371,514,523,157,526,398,207,164,249,70],
tr:[7,8,9,67,173,214,270,272,276,282,530]
},{//Machamp
l:[[2,1],[43,1],[67,1],[116,1],[469,1],[116,7],[2,10],[490,13],[193,19],[69,22],[279,25],[233,32],[66,36],[358,40],[238,44],[184,51],[223,55]],
m:[92,339,237,241,63,113,182,240,218,479,89,216,91,280,104,53,126,317,263,156,213,168,490,496,411,374,510,371,514,416,444,523,157,526,398,207,164,249,70],
tr:[7,8,9,67,173,214,270,272,276,282,530]
},{//Bellsprout
l:[[22,1],[74,7],[35,11],[79,13],[77,15],[78,17],[51,23],[282,27],[230,29],[380,35],[75,39],[21,41],[378,47]],
m:[92,474,237,241,182,218,76,216,104,115,188,263,156,213,168,496,412,148,14,447,207,164,15],
e:[141,202,227,235,275,311,321,331,345,363,388,438,499],
tr:[20,173,202,214,235,282,380,388,402],
s:[402,235,22]
},{//Weepinbell
l:[[22,1],[35,1],[74,1],[74,7],[35,11],[79,13],[77,15],[78,17],[51,23],[282,27],[230,29],[380,35],[75,39],[21,41],[378,47]],
m:[92,474,237,241,182,218,76,216,104,115,188,263,156,213,168,496,412,148,14,447,207,164,15],
tr:[20,173,202,214,235,282,380,388,402,450]
},{//Victreebel
l:[[22,1],[75,1],[79,1],[230,1],[254,1],[255,1],[256,1],[536,27],[348,47],[437,47]],
m:[92,474,237,241,63,182,218,76,216,104,115,188,263,156,213,168,496,412,416,148,14,447,207,164,15],
tr:[20,173,202,214,235,282,380,388,402,450]
},{//Tentacool
l:[[40,1],[48,5],[132,8],[51,12],[390,15],[61,19],[35,22],[491,26],[112,29],[352,33],[398,36],[103,40],[506,43],[56,47],[482,50],[378,54]],
m:[92,258,474,237,58,59,182,240,219,218,216,104,482,188,263,156,213,168,496,503,371,14,398,207,164,15,57,127,291],
e:[62,109,114,145,229,243,282,321,330,367,392],
tr:[20,173,196,202,214,277,282],
s:[367,202,48]
},{//Tentacruel
l:[[40,1],[48,1],[132,1],[48,5],[132,8],[51,12],[390,15],[61,19],[35,22],[491,26],[112,29],[352,34],[398,38],[103,43],[506,47],[56,52],[482,56],[378,61]],
m:[92,258,474,237,58,59,63,182,240,219,218,216,104,482,188,263,156,213,168,496,503,371,416,14,398,207,164,15,57,127,291],
tr:[20,173,196,202,214,277,282]
},{//Geodude
l:[[33,1],[111,1],[300,4],[397,8],[88,11],[222,15],[205,18],[350,22],[479,25],[120,29],[523,32],[446,36],[89,39],[153,43],[38,46],[444,50]],
m:[92,237,241,182,218,479,89,216,91,280,104,53,201,126,317,263,156,213,496,374,510,153,397,444,360,523,157,207,164,249,70],
e:[5,174,175,203,264,335,359,431,475],
tr:[7,9,173,214,276,334,335,414,446],
s:[111,431,446]
},{//Graveler
l:[[33,1],[111,1],[300,1],[397,1],[300,4],[397,8],[88,11],[222,15],[205,18],[350,22],[479,27],[120,31],[523,36],[446,42],[89,47],[153,53],[38,58],[444,64]],
m:[92,237,241,182,218,479,89,216,91,280,104,53,201,126,317,263,156,213,496,374,510,153,397,444,360,523,157,207,164,249,70],
tr:[7,9,173,214,276,334,335,414,446]
},{//Golem
l:[[33,1],[111,1],[300,1],[397,1],[300,4],[397,8],[88,11],[222,15],[537,18],[350,22],[479,27],[120,31],[523,36],[446,42],[89,47],[153,53],[38,58],[444,64],[484,69]],
m:[46,92,237,241,63,182,218,479,89,216,91,280,104,53,201,126,317,263,156,213,496,411,374,510,153,416,397,444,360,523,157,207,164,249,70],
tr:[7,9,173,214,276,334,335,414,442,446]
},{//Ponyta
l:[[33,1],[45,1],[39,4],[52,9],[172,13],[23,17],[488,21],[83,25],[36,29],[517,33],[97,37],[126,41],[340,45],[394,49]],
m:[92,237,241,182,218,76,216,104,53,126,263,488,156,213,496,497,315,510,261,207,164,528,70],
e:[24,32,37,38,67,95,172,204,234,445],
tr:[67,173,214,231,257,340],
s:[257,33,37]
},{//Rapidash
l:[[39,1],[45,1],[52,1],[98,1],[224,1],[398,1],[39,4],[52,9],[172,13],[23,17],[488,21],[83,25],[36,29],[517,33],[97,37],[31,40],[126,41],[340,45],[394,49]],
m:[92,237,241,63,182,218,76,216,104,53,126,263,488,156,213,496,497,315,510,261,416,398,207,164,528,70],
tr:[67,173,214,231,257,340,529]
},{//Slowpoke
l:[[33,1],[174,1],[281,1],[45,5],[55,9],[93,14],[50,19],[29,23],[352,28],[428,32],[303,36],[133,41],[94,45],[240,49],[244,54],[505,58]],
m:[473,347,92,258,237,241,58,59,113,182,240,477,219,218,89,216,91,94,247,104,53,126,263,156,213,496,497,503,510,148,86,244,523,138,447,207,164,433,57,70,291],
e:[23,173,187,214,248,300,335,382,428,472],
tr:[173,196,214,231,271,277,278,285,324,335,401,428,472,495],
s:[335,362,281]
},{//Slowbro
l:[[33,1],[45,1],[174,1],[281,1],[45,5],[55,9],[93,14],[50,19],[29,23],[352,28],[428,32],[303,36],[110,37],[133,43],[94,49],[240,55],[244,62],[505,68]],
m:[473,347,92,258,237,241,58,59,63,113,182,240,477,219,218,89,216,91,94,247,280,104,53,126,332,263,156,213,496,497,411,503,374,510,416,148,86,244,523,138,447,207,164,433,249,57,70,291],
tr:[8,173,196,214,231,271,277,278,285,324,334,335,401,409,428,472,492,495]
},{//Magnemite
l:[[33,1],[319,1,29],[84,6,7],[48,11,4],[49,14,11],[86,17,15],[209,22,21],[486,27,32],[199,30,46],[443,33,18],[430,,35],[103,38,39],[435,43],[429,46,25],[393,49],[360,54,53],[192,59,57]],
m:[92,237,241,113,182,240,218,85,87,216,104,115,263,156,496,451,153,148,521,86,360,244,207,164,430,528],
tr:[173,214,277,278,324,334,356,393,527],
s:[356,319,278,84]
},{//Magneton
l:[[33,1],[48,1,4],[84,1,7],[161,1],[319,1,29],[84,6],[48,11],[49,14,11],[86,17,15],[209,22,21],[486,27,34],[199,30,56],[443,34,18],[430,,39],[103,40,45],[435,46,51],[429,50,25],[393,54,62],[360,60,67],[192,66,73]],
m:[92,237,241,63,113,182,240,218,85,87,216,104,115,263,156,496,451,153,416,148,521,86,360,244,207,164,430,528],
tr:[173,214,277,278,324,334,356,393,527]
},{//Farfetch'd
l:[[28,1],[43,1],[64,1],[210,1],[398,1],[31,7],[282,9],[332,13],[163,19],[314,21],[14,25],[97,31],[400,33],[512,37],[364,43],[206,45],[403,49],[413,55]],
m:[92,237,241,182,218,216,104,332,263,156,213,168,496,206,512,514,14,244,526,398,207,365,369,164,15,19],
e:[16,98,119,174,175,189,193,211,279,297,343,348,355,376,400],
tr:[143,173,214,231,253,257,270,282,343,355,366,387],
s:[210,348,355]
},{//Doduo
l:[[45,1],[64,1],[98,5],[99,10],[31,14],[228,19],[253,23],[367,28],[458,32],[97,37],[65,41],[283,46],[37,50]],
m:[92,237,241,182,218,216,104,332,263,156,213,168,496,497,526,207,365,164,19],
e:[48,98,114,119,175,185,283,363,372,413],
tr:[173,214,253,282,283,355],
s:[175,45,355]
},{//Dodrio
l:[[45,1],[64,1],[98,1],[99,1],[365,1],[98,5],[99,10],[31,14],[228,19],[253,23],[367,28],[161,34],[97,41],[65,47],[283,54],[37,60]],
m:[92,237,241,269,63,182,218,216,104,332,259,263,156,213,168,496,497,371,416,526,207,365,164,19],
tr:[143,173,214,253,282,283,355]
},{//Seel
l:[[29,1],[45,3],[346,7],[196,11],[227,13],[420,17],[156,21],[392,23],[62,27],[453,31],[362,33],[36,37],[291,41],[401,43],[58,47],[219,51],[258,53]],
m:[92,258,237,58,59,182,240,219,218,216,104,263,156,213,168,496,497,374,207,164,57,127,291],
e:[21,32,50,122,195,214,227,231,252,254,255,256,324,333,352],
tr:[173,196,214,231,324,401,529],
s:[29,333,214]
},{//Dewgong
l:[[29,1],[45,1],[196,1],[324,1],[45,3],[324,7],[196,11],[227,13],[420,17],[156,21],[392,23],[62,27],[453,31],[362,33],[329,34],[36,39],[291,45],[401,49],[58,55],[219,61],[258,65]],
m:[92,258,237,58,59,63,182,240,219,218,216,104,263,156,213,168,496,497,374,416,524,207,164,57,127,291],
tr:[173,196,214,231,324,401,529]
},{//Grimer
l:[[1,1],[139,1],[106,4],[189,7],[50,12],[107,17,18],[124,20,15],[426,23,21],[374,28,29],[103,33,32],[188,36,26],[151,39,40],[482,44,37],[441,49,43],[262,52,48]],
m:[92,474,237,241,269,182,240,218,85,87,216,91,247,104,482,53,188,126,317,259,263,156,213,168,496,374,510,153,371,157,398,207,164,70],
e:[114,122,174,184,212,254,255,256,286,325,425,491],
tr:[7,8,9,173,202,214,220,441],
s:[114,139,425]
},{//Muk
l:[[1,1],[106,1,4],[139,1],[189,1,7],[106,4],[189,7],[50,12],[107,17,18],[124,20,15],[426,23,21],[374,28,29],[103,33,32],[188,36,26],[151,42,43],[482,50,37],[441,58,49],[262,64,57]],
m:[92,474,237,241,269,63,182,240,218,85,87,216,91,247,280,104,482,53,188,126,317,259,263,156,213,168,496,411,374,510,153,371,416,157,398,207,164,249,70],
tr:[7,8,9,173,202,214,220,335,399,441]
},{//Shellder
l:[[33,1],[110,4],[48,8],[333,13],[182,16],[43,20],[128,25],[420,28],[534,32],[62,37],[250,40],[362,44],[334,49],[58,52],[504,56],[56,61]],
m:[92,258,237,58,59,182,240,218,216,104,263,156,213,496,153,371,207,164,57,291],
e:[36,41,61,103,112,229,333,341,350,352,392,419],
tr:[173,196,214,334],
s:[112,196,110]
},{//Cloyster
l:[[48,1],[62,1],[110,1],[182,1],[390,1],[131,13],[191,28],[556,52]],
m:[92,258,237,58,59,63,182,240,218,216,104,259,263,156,213,496,153,371,416,524,398,207,164,57,291],
tr:[173,196,214,324,334]
},{//Gastly
l:[[95,1],[122,1],[180,5],[212,8],[174,12],[101,15],[109,19],[389,22],[371,26],[247,29],[138,33],[399,36],[194,40],[506,43],[171,47]],
m:[92,474,237,241,269,182,240,477,218,85,216,94,247,104,188,259,263,156,213,168,496,412,261,373,153,371,244,138,207,164,433],
e:[7,8,9,50,114,123,149,184,195,288,310,499],
tr:[7,8,9,173,180,196,202,214,220,253,271,282,285,289,399,472,492],
s:[50,95,482]
},{//Haunter
l:[[95,1],[122,1],[180,1],[180,5],[212,8],[174,12],[101,15],[109,19],[389,22],[325,25],[371,28],[247,33],[138,39],[399,44],[194,50],[506,55],[171,61]],
m:[92,474,237,241,269,182,240,477,218,85,216,94,247,104,188,259,263,156,213,168,496,412,374,261,373,153,421,371,244,398,138,207,164,433],
tr:[7,8,9,173,180,196,202,214,220,253,271,282,285,289,399,472,492]
},{//Gengar
l:[[95,1],[122,1],[180,1],[180,5],[212,8],[174,12],[101,15],[109,19],[389,22],[325,25],[371,28],[247,33],[138,39],[399,44],[194,50],[506,55],[171,61]],
m:[92,474,237,241,269,63,182,240,477,218,85,87,216,94,247,280,104,188,259,263,156,213,168,496,411,412,374,261,373,153,421,371,416,244,398,138,207,164,433,249,70],
tr:[7,8,9,173,180,196,202,214,220,253,271,272,282,285,289,399,409,472,492]
},{//Onix
l:[[20,1],[33,1],[106,1],[300,1],[103,6,31],[88,9,7],[99,14,10],[317,17,13],[479,22],[201,25,52],[397,30,19],[21,33,28],[157,,34],[446,38,16],[225,41,25],[91,,43],[174,46,4],[231,49,40],[328,54,37],[38,57,49],[444,62,46]],
m:[46,92,237,241,269,182,218,479,89,216,91,104,201,317,259,263,156,213,496,153,371,397,444,360,244,523,157,525,207,164,430,249,70],
e:[111,175,205,335,350,431,446,484],
tr:[20,173,214,231,335,406,414,442,446],
s:[20,431,446]
},{//Drowzee
l:[[1,1],[95,1],[50,5],[93,9],[29,13],[139,17],[96,21],[60,25],[29,29],[244,33],[485,37],[428,41],[207,45],[94,49],[417,53],[473,57],[248,61]],
m:[473,347,92,237,241,269,113,182,240,477,219,218,216,94,247,280,104,115,259,263,156,213,168,490,496,374,148,86,244,138,447,207,164,433],
e:[7,8,9,112,260,272,274,285,290,385,417,427],
tr:[7,8,9,67,214,271,272,277,278,285,289,324,409,428,478,492],
s:[409,95,427]
},{//Hypno
l:[[1,1],[50,1],[93,1],[95,1],[171,1],[415,1],[50,5],[93,9],[29,13],[139,17],[96,21],[60,25],[29,29],[244,33],[485,37],[428,41],[207,45],[94,49],[417,53],[473,57],[248,61]],
m:[473,347,92,237,241,269,63,113,182,240,477,219,218,216,94,247,280,104,115,259,263,156,213,168,490,496,411,374,416,148,86,244,138,447,207,164,433],
tr:[7,8,9,67,214,271,272,277,278,285,289,324,409,428,478,492]
},{//Krabby
l:[[145,1],[300,1],[11,5],[43,9],[106,11],[61,15],[341,19],[232,21],[23,25],[182,29],[12,31],[21,35],[362,39],[152,41],[175,45]],
m:[468,92,258,237,58,59,182,240,218,216,91,280,104,317,263,156,213,168,496,206,503,374,14,157,404,207,164,249,15,57,70,291],
e:[21,97,114,117,133,175,203,246,282,321,498],
tr:[173,196,214,276,282,334],
s:[133,290,11]
},{//Kingler
l:[[11,1],[43,1],[145,1],[300,1],[469,1],[11,5],[43,9],[106,11],[61,15],[341,19],[232,21],[23,25],[182,32],[12,37],[21,44],[362,51],[152,56],[175,63]],
m:[468,92,258,237,58,59,63,182,240,218,216,91,280,104,317,263,156,213,168,496,206,503,374,511,416,14,157,404,207,164,249,15,57,70,291],
tr:[173,196,214,276,282,334]
},{//Voltorb
l:[[268,1],[33,5],[49,8],[209,12],[205,15],[103,19],[451,22],[113,26],[486,29],[120,33],[129,36],[393,40],[360,43],[153,47],[243,50]],
m:[92,237,269,113,182,240,218,85,87,216,104,259,263,156,168,496,451,153,148,521,86,360,207,164,528],
tr:[173,214,277,324,393,492],
s:[268,363,324]
},{//Electrode
l:[[33,1],[49,1],[209,1],[268,1],[33,5],[49,8],[209,12],[205,15],[103,19],[451,22],[113,26],[486,29],[120,35],[129,40],[393,46],[360,51],[153,57],[243,62]],
m:[92,237,269,63,113,182,240,218,85,87,216,104,259,263,156,168,496,451,153,416,148,521,86,360,207,164,528],
tr:[173,214,277,324,393,492]
},{//Exeggcute
l:[[95,1],[140,1],[253,1],[115,7],[73,11],[331,17],[78,19],[77,21],[79,23],[93,27],[388,33],[363,37],[76,43],[94,47],[326,,47],[516,53]],
m:[92,237,241,113,182,477,218,76,216,94,104,115,188,263,156,213,168,496,412,153,148,14,244,138,447,207,164,433,70],
e:[174,202,235,236,246,267,275,285,335,363,381,384,437],
tr:[173,202,214,235,253,285,335,356,388,402],
s:[140,202,235]
},{//Exeggutor
l:[[23,1],[93,1],[95,1],[140,1],[402,1],[473,17],[121,27],[452,37],[437,47]],
m:[473,92,237,241,63,113,182,477,218,76,216,94,104,115,188,263,156,213,168,496,412,153,416,148,14,244,138,447,207,164,433,70],
tr:[67,173,202,214,235,285,335,356,388,402,428]
},{//Cubone
l:[[45,1],[39,3],[125,7],[29,11],[43,13],[116,17],[155,21],[99,23],[206,27],[37,31],[374,33],[198,37],[283,41],[38,43],[514,47]],
m:[92,237,241,58,59,182,218,479,89,216,91,280,104,53,201,126,317,332,263,156,213,168,496,497,206,374,510,514,14,523,157,207,164,249,70],
e:[24,103,130,187,195,197,203,246,442,498],
tr:[7,9,67,173,196,214,231,253,282,283,334,414,442,446],
s:[125,67,195]
},{//Marowak
l:[[29,1],[39,1],[45,1],[125,1],[39,3],[125,7],[29,11],[43,13],[116,17],[155,21],[99,23],[206,27],[37,33],[374,37],[198,43],[283,49],[38,53],[514,59]],
m:[92,237,241,58,59,63,182,218,479,89,216,91,280,104,53,201,126,317,332,263,156,213,168,496,497,411,206,374,510,514,416,444,14,523,157,207,164,249,70],
tr:[7,9,67,173,196,200,214,231,253,282,283,334,414,442,446]
},{//Hitmonlee
l:[[24,1],[279,1],[96,5],[27,9],[26,13],[280,17],[116,21],[364,25],[136,29],[170,33],[193,37],[469,41],[299,45],[203,49],[25,53],[370,57],[179,61]],
m:[92,339,237,241,182,240,218,89,216,280,104,317,263,156,213,168,490,496,411,374,514,444,523,157,526,398,207,164,249,70],
tr:[67,173,214,270,272,276,282,340,343]
},{//Hitmonchan
l:[[4,1],[279,1],[97,6],[228,11],[183,16],[418,16],[364,21],[410,26],[501,31],[7,36],[8,36],[9,36],[327,41],[5,46],[197,51],[264,56],[68,61],[370,66]],
m:[92,339,237,241,182,240,218,89,216,280,104,317,263,156,213,168,490,496,411,374,514,444,523,157,526,207,164,249,70],
tr:[7,8,9,67,173,214,270,272,343,409]
},{//Lickitung
l:[[122,1],[48,5],[111,9],[282,13],[35,17],[23,21],[50,25],[21,29],[205,33],[498,37],[382,41],[287,45],[103,49],[438,53],[378,57]],
m:[92,237,241,58,59,63,182,240,218,76,85,87,89,216,91,247,280,104,53,201,126,317,263,156,213,168,496,374,510,514,416,14,244,523,157,525,526,138,207,164,249,15,57,70],
e:[34,133,173,174,187,214,222,265,330,359,428],
tr:[7,8,9,20,173,196,214,231,282,401,428],
s:[122,431,214]
},{//Koffing
l:[[33,1],[139,1],[123,6,4],[108,10,7],[372,15,12],[499,19,15],[120,24,23],[124,28,18],[114,33,26],[360,37,29],[153,42,37],[188,46,34],[194,51,40],[262,55,45]],
m:[92,474,237,241,269,182,240,218,85,87,216,247,104,53,188,126,259,263,156,213,168,496,510,261,153,371,148,360,207,164],
e:[60,103,149,174,180,194,220,254,255,256,288],
tr:[173,180,214,220,253,399],
s:[399,482,123]
},{//Weezing
l:[[33,1],[108,1,7],[123,1,4],[139,1],[123,6],[108,10],[372,15,12],[499,19,15],[120,24,23],[124,28,18],[114,33,26],[458,39,29],[153,46,40],[188,52,34],[194,59,46],[262,65,54]],
m:[92,474,237,241,269,63,182,240,218,85,87,216,247,104,53,188,126,259,263,156,213,168,496,510,261,153,371,416,148,360,207,164],
tr:[173,180,214,220,253,399]
},{//Rhyhorn
l:[[30,1],[39,1],[23,8],[31,12],[184,19],[350,23],[523,30],[498,34],[36,41],[529,45],[444,52],[89,56],[32,63],[224,67]],
m:[46,92,237,241,58,59,182,240,218,85,87,89,216,91,104,53,201,126,317,263,156,213,168,496,510,371,397,444,14,523,157,398,207,164,249,70],
e:[68,130,174,179,222,231,242,306,407,422,423,424,431],
tr:[173,180,196,214,231,253,276,283,401,406,414,446,529],
s:[68,38,30]
},{//Rhydon
l:[[23,1],[30,1],[31,1],[39,1],[23,9],[31,12],[184,19],[350,23],[523,30],[498,34],[36,41],[359,42],[529,47],[444,56],[89,62],[32,71],[224,77]],
m:[46,92,237,241,58,59,63,182,240,218,479,85,87,89,216,91,280,104,53,201,126,317,263,156,213,168,496,411,374,510,421,371,416,397,444,14,523,157,525,398,207,164,249,15,57,70],
tr:[7,8,9,173,180,196,200,214,231,253,276,283,335,401,406,414,446,529]
},{//Chansey
l:[[1,1],[45,1],[111,1],[39,5],[287,9],[3,12],[135,16],[516,20],[107,23],[36,27],[47,31],[374,34],[505,38],[121,42],[113,46],[361,50],[38,54]],
m:[347,92,258,237,241,58,59,63,113,182,240,219,218,76,85,87,89,216,94,247,280,104,53,201,126,317,263,156,213,496,497,374,451,510,514,416,148,86,244,523,157,526,138,447,207,164,528,249,70],
e:[68,118,203,215,217,270,312,356,363,426],
tr:[7,8,9,173,196,214,215,231,270,278,283,285,289,304,343,356,387,409,428,446],
s:[68,45,270]
},{//Tangela
l:[[132,1],[275,1],[79,5,4],[71,8,10],[74,12,20],[77,15,14],[22,19,7],[20,22,17],[72,26,23],[78,29,30],[282,33,27],[246,36,40],[202,,36],[363,40,33],[21,43],[321,47,46],[378,50,49],[438,54,53]],
m:[92,237,241,63,182,218,76,216,104,115,188,263,156,213,168,496,412,416,148,14,244,447,207,164,249,15],
e:[72,73,93,133,175,202,267,283,363,384,437,476],
tr:[20,173,202,214,220,235,282,283,388,402],
s:[73,402,79]
},{//Kangaskhan
l:[[4,1],[43,1],[252,7],[39,10],[44,13],[458,19],[99,22],[5,25],[498,31],[146,34],[242,37],[203,43],[200,46],[389,49],[179,55]],
m:[46,92,258,237,241,58,59,63,182,240,219,218,76,85,87,89,216,91,247,280,104,53,201,126,317,332,263,156,213,168,496,411,374,510,421,514,416,523,157,526,207,164,249,15,57,70],
e:[23,38,50,68,116,193,253,264,283,306,359,376,509],
tr:[7,8,9,67,173,180,196,200,214,231,253,270,283,343,401,409],
s:[68,409,252]
},{//Horsea
l:[[145,1],[108,4],[43,8],[55,11],[116,14],[61,18],[97,23],[239,26],[362,30],[56,35],[349,38],[406,42]],
m:[92,258,237,58,59,182,240,218,216,104,263,156,213,496,503,207,164,430,57,127,291],
e:[13,50,62,82,150,175,190,200,225,324,330,352,499],
tr:[173,196,200,214,324,340,406],
s:[362,145,190]
},{//Seadra
l:[[43,1],[55,1],[108,1],[145,1],[108,4],[43,8],[55,11],[116,14],[61,18],[97,23],[239,26],[362,30],[56,40],[349,48],[406,57]],
m:[92,258,237,58,59,63,182,240,218,216,104,263,156,213,496,503,416,207,164,430,57,127,291],
tr:[173,196,200,214,324,340,406]
},{//Goldeen
l:[[39,1],[64,1],[346,1],[48,7],[30,11],[352,17],[175,21],[392,27],[31,31],[127,37],[32,41],[97,47],[487,51],[224,57]],
m:[92,258,237,58,59,182,240,218,216,104,263,156,213,496,503,398,207,164,57,127,291],
e:[34,56,60,114,130,189,214,300,324,341,401],
tr:[173,196,214,282,324,340,401,529],
s:[64,60,352]
},{//Seaking
l:[[39,1],[48,1],[64,1],[346,1],[398,1],[48,7],[30,11],[352,17],[175,21],[392,27],[31,31],[127,40],[32,47],[97,56],[487,63],[224,72]],
m:[92,258,237,58,59,63,182,240,218,216,104,263,156,213,496,503,416,398,207,164,57,127,291],
tr:[173,196,214,282,324,340,401,529],
s:[203,214,352]
},{//Staryu
l:[[33,1],[106,1],[55,6],[229,10],[105,15,12],[293,19,15],[129,24,18],[61,28,22],[107,33,25],[362,,36],[360,37,30],[113,42,33],[513,46,40],[408,51,43],[322,55,48],[56,60,52]],
m:[92,258,237,58,59,113,182,240,218,85,87,216,94,104,115,263,156,496,503,148,86,360,244,207,164,430,57,127,291],
tr:[173,196,214,220,277,278,324,356],
s:[196,278,55]
},{//Starmie
l:[[55,1],[105,1],[129,1],[229,1],[109,28,22]],
m:[473,92,258,237,58,59,63,113,182,240,477,218,85,87,216,94,104,115,263,156,496,503,416,148,86,360,244,138,447,207,164,430,433,57,127,291],
tr:[173,196,214,220,271,277,278,285,324,356,472]
},{//Mr. Mime
l:[[93,1],[112,1],[345,1],[384,1],[385,1],[469,1],[501,1],[383,4],[96,8],[227,11,18],[3,15,11],[149,,15],[102,18,15],[113,22],[115,22],[60,25],[164,29],[278,32],[271,36],[94,39],[272,43],[226,46],[219,50]],
m:[473,347,92,237,241,269,63,113,182,240,477,219,218,76,85,87,216,94,247,280,104,115,332,259,263,156,213,168,496,411,412,374,451,371,416,148,86,244,138,447,207,164,433],
e:[95,102,109,196,248,252,271,298,358,417,471,478],
tr:[7,8,9,173,196,214,270,271,272,277,278,285,289,324,334,343,409,428,472,478,492],
s:[112,285,298]
},{//Scyther
l:[[43,1],[98,1],[410,1],[116,5],[228,9],[206,13],[97,17],[17,21],[210,25],[163,29],[13,33],[104,37],[404,41],[400,45],[458,49],[403,53],[14,57],[364,61]],
m:[92,237,241,63,113,182,240,219,218,216,280,104,332,263,156,213,168,496,206,416,14,522,404,207,369,164,249,15],
e:[13,68,179,203,211,226,318,400,405,432],
tr:[173,214,282,355,366,450],
s:[226,98,366]
},{//Jynx
l:[[1,1],[122,1],[142,1],[181,1],[122,5],[142,8],[181,11],[3,15],[8,18],[531,21],[212,25],[313,28],[358,33],[419,39],[34,44],[378,49],[195,55],[59,60]],
m:[473,347,92,258,237,269,58,59,63,113,182,240,477,218,216,94,247,280,104,115,259,263,156,213,168,496,497,411,412,374,371,416,148,244,524,138,447,207,164,433],
tr:[8,173,196,214,215,270,271,272,277,278,285,304,324,343,409,428,478]
},{//Electabuzz
l:[[43,1],[84,1,5],[98,1],[84,6],[67,11,8],[129,16,12],[86,,19],[351,21,15],[113,26],[486,32,22],[9,38,29],[435,44,36],[85,50,49],[103,56,42],[87,62,55]],
m:[92,237,63,113,182,240,218,85,87,216,94,280,104,263,156,213,168,490,496,411,374,451,416,148,521,86,207,164,528,249,70],
tr:[7,8,9,67,173,214,231,270,324,343,393,527,530]
},{//Magmar
l:[[43,1],[52,1,5],[123,1],[52,6],[108,11,8],[185,16,12],[499,,19],[83,21,15],[109,26],[481,32,22],[7,38,29],[436,44,36],[53,50,49],[241,56,42],[126,62,55]],
m:[92,237,241,63,182,218,216,94,280,104,53,126,263,488,156,213,168,490,496,315,411,374,510,261,416,207,164,249,70],
tr:[7,9,67,173,214,231,257,270,343,530]
},{//Pinsir
l:[[11,1],[116,1],[20,4],[69,8],[106,13,11],[279,18,15],[280,21,18],[233,25,22],[404,30,29],[480,,33],[37,35,36],[14,38,40],[66,42,26],[12,47],[276,52,43]],
m:[92,339,237,241,63,182,240,218,479,89,216,91,280,104,317,263,156,213,168,496,411,206,374,416,444,14,522,523,157,404,207,164,249,15,70],
e:[31,98,175,185,276,364,370,382,450],
tr:[20,173,214,276,282,334,446,450],
s:[370,382,11]
},{//Tauros
l:[[33,1],[39,3],[99,5],[30,8],[184,11],[228,15],[156,19],[371,24],[526,29],[428,35],[36,41],[207,48],[37,55],[416,63]],
m:[92,237,241,58,59,63,182,240,218,76,85,87,89,216,104,53,201,126,317,263,156,213,496,510,371,514,416,444,523,157,526,207,164,528,249,57,70],
tr:[173,180,196,200,214,231,253,270,272,283,428,442],
s:[231,99,431]
},{//Magikarp
l:[[150,1],[33,15],[175,30]],
tr:[340],
s:[340,150]
},{//Gyarados
l:[[37,1],[44,20],[82,23],[43,26],[239,29],[423,32],[401,35],[240,38],[56,41],[349,44],[63,47]],
m:[46,92,258,237,269,58,59,63,182,240,218,85,87,89,216,104,53,201,126,259,263,156,213,496,503,510,371,416,444,86,523,525,207,164,249,57,70,127,291],
tr:[173,180,196,200,214,231,253,340,399,401,406,442]
},{//Lapras
l:[[45,1],[47,1],[55,1],[54,4],[109,7],[420,10],[352,14],[34,18],[240,22],[195,27],[58,32],[362,37],[219,43],[56,49],[329,55]],
m:[46,92,258,237,58,59,63,182,240,219,218,85,87,216,94,104,263,156,213,496,497,416,523,524,138,207,164,249,57,70,127,291],
e:[32,90,174,193,214,246,248,250,287,321,349,406,419],
tr:[173,196,200,214,215,231,304,324,335,401,406,428,442,529],
s:[109,32,196]
},{//Ditto
l:[[144,1]]
},{//Eevee
l:[[33,1],[39,1],[270,1],[28,8,5],[45,15,9],[343,,21],[98,22,13],[44,29,17],[204,,29],[226,36,33],[38,,37],[36,43,25],[387,50,41],[376,57,45]],
m:[92,237,241,182,240,218,216,91,247,104,263,156,213,496,497,514,526,207,164],
e:[174,175,197,203,204,273,281,313,321,343,363,485,500],
tr:[173,214,215,231,270,304,343,387],
s:[204,28,129]
},{//Vaporeon
l:[[33,1],[39,1],[270,1],[28,8,5],[55,15,9],[352,,17],[98,22,13],[44,29],[62,36,21],[392,43,25],[387,50,41],[114,57,33],[151,64,29],[56,71,45],[330,78,37]],
m:[46,92,258,237,241,58,59,63,182,240,218,216,91,247,104,263,156,213,496,497,503,514,416,526,207,164,249,57,70,127,291],
tr:[173,196,214,215,231,270,304,324,343,387,401]
},{//Jolteon
l:[[33,1],[39,1],[270,1],[28,8,5],[84,15,9],[98,22,13],[24,29,17],[42,36,25],[422,43,21],[387,50,41],[86,57,33],[97,64,29],[87,71,45],[435,78,37]],
m:[46,92,237,241,63,113,182,240,218,85,87,216,91,247,104,263,156,213,496,497,451,514,416,148,521,86,526,207,164,528,249,70],
tr:[173,214,215,231,270,304,324,343,387,393]
},{//Flareon
l:[[33,1],[39,1],[270,1],[28,8,5],[52,15,9],[98,22,13],[44,29,17],[83,36,25],[424,43,21],[387,50,41],[123,57,33],[184,64,29],[126,71,45],[436,78,37]],
m:[46,92,237,241,63,182,240,218,216,91,247,104,53,126,263,488,156,213,496,497,315,510,261,514,416,526,207,164,249,70],
tr:[173,214,215,231,257,270,276,304,343,387]
},{//Porygon
l:[[33,1],[159,1],[160,1],[176,1],[60,7],[97,12],[105,18],[393,23],[324,29],[278,34],[435,40],[199,45],[161,51],[277,56],[192,62]],
m:[473,92,237,241,58,59,63,182,240,218,76,85,87,216,94,247,104,332,263,156,168,496,451,416,148,86,244,138,207,164,433],
tr:[173,196,214,220,231,271,277,278,324,356,387,393,428,472,492,527]
},{//Omanyte
l:[[110,1],[132,1],[44,7],[55,10],[205,16],[43,19],[341,25],[362,28],[182,34],[246,37],[321,43],[350,46],[504,52],[56,55]],
m:[92,258,237,58,59,182,240,218,479,216,104,201,317,263,156,213,168,496,503,397,360,157,207,164,249,57,127,291],
e:[21,48,61,62,114,117,191,250,282,330,352,378,390],
tr:[20,173,196,214,282,334,414,446],
s:[44,196,330]
},{//Omastar
l:[[44,1],[110,1],[132,1],[44,7],[55,10],[205,16],[43,19],[341,25],[362,28],[182,34],[246,37],[131,40],[321,48],[350,56],[504,67],[56,75]],
m:[92,258,237,58,59,63,182,240,218,479,216,104,201,317,263,156,213,168,496,503,416,397,444,360,157,207,164,249,57,127,291],
tr:[20,173,196,214,282,334,414,446]
},{//Kabuto
l:[[10,1],[106,1],[71,6],[43,11],[341,16],[28,21],[203,26],[453,31],[72,36],[319,41],[246,46],[378,51]],
m:[468,92,258,237,58,59,182,240,218,479,216,91,104,201,317,263,156,213,168,496,503,397,157,207,164,249,57,127],
e:[61,62,103,109,175,193,196,202,229,282,341],
tr:[173,196,202,214,282,334,414,446],
s:[71,175,446]
},{//Kabutops
l:[[10,1],[43,1],[71,1],[106,1],[364,1],[71,6],[43,11],[341,16],[28,21],[203,26],[453,31],[72,36],[163,40],[319,45],[246,54],[378,63],[400,72]],
m:[468,92,258,237,58,59,63,182,240,218,479,216,91,280,104,201,317,332,263,156,213,168,496,503,416,397,444,14,157,404,207,164,249,15,57,127,291],
tr:[67,173,196,202,214,276,282,334,401,414,446]
},{//Aerodactyl
l:[[17,1],[44,1],[48,1],[184,1],[422,1],[423,1],[424,1],[46,9],[97,17],[246,25],[242,33],[36,41],[507,49],[442,57],[63,65],[157,73],[416,81]],
m:[468,337,46,92,237,241,269,63,182,240,218,479,89,216,104,53,201,126,317,332,259,263,156,213,168,496,507,510,371,416,397,444,523,157,207,164,249,19,70],
e:[18,174,193,211,225,228,355,366,372],
tr:[143,173,214,231,257,355,366,401,406,414,442,446],
s:[372,44,446]
},{//Snorlax
l:[[33,1],[111,4],[133,9],[122,12],[187,17],[281,20],[498,25],[156,28],[173,28],[214,33],[34,36],[335,41],[205,44],[242,49],[484,52],[416,57]],
m:[92,237,241,58,59,63,182,240,218,76,479,85,87,89,216,94,247,280,104,53,201,126,317,263,156,213,496,411,374,510,514,416,523,157,526,207,164,528,249,57,70],
e:[18,38,68,90,122,174,204,228,363,495],
tr:[7,8,9,173,196,200,214,276,278,304,335,343,387,402,428,441,442,495],
s:[133,7,278]
},{//Articuno
l:[[16,1],[181,1],[54,8],[420,15],[170,22],[246,29],[97,36],[58,43],[115,50],[355,57],[366,64],[59,71],[329,78],[258,85],[542,,92]],
m:[46,92,258,237,241,58,59,63,182,240,218,216,104,115,201,332,263,156,496,507,416,524,207,365,369,164,249,19],
tr:[143,173,196,214,324,355,366]
},{//Zapdos
l:[[64,1],[84,1],[86,8],[197,15],[365,22],[246,29],[268,36],[97,43],[435,50],[355,57],[113,64],[65,71],[87,78],[240,85],[192,,92]],
m:[46,92,237,241,63,113,182,240,218,85,87,216,104,201,332,263,156,496,451,507,416,148,521,86,207,365,369,164,528,249,19],
tr:[143,173,214,257,324,355,366]
},{//Moltres
l:[[17,1],[52,1],[83,8],[97,15],[203,22],[246,29],[53,36],[219,43],[403,50],[355,57],[257,64],[76,71],[143,78],[241,85],[542,,92]],
m:[46,92,237,241,63,182,240,219,218,76,216,104,53,201,126,332,263,488,156,496,315,507,510,261,416,207,365,369,164,249,19],
tr:[143,173,214,257,355,366]
},{//Dratini
l:[[35,1],[43,1],[86,5],[239,11],[82,15],[21,21],[97,25],[525,31],[401,35],[407,41],[219,45],[349,51],[200,55],[63,61]],
m:[92,258,237,241,58,59,63,113,182,240,219,218,85,87,216,104,53,126,263,156,213,496,510,86,525,207,164,57,127],
e:[48,54,114,225,231,245,349,352,406,407,453],
t:[434],
tr:[20,173,196,200,214,231,401,406],
s:[225,86,352]
},{//Dragonair
l:[[35,1],[43,1],[86,1],[239,1],[86,5],[239,11],[82,15],[21,21],[97,25],[525,33],[401,39],[407,47],[219,53],[349,61],[200,67],[63,75]],
m:[92,258,237,241,58,59,63,113,182,240,219,218,85,87,216,104,53,126,263,156,213,496,510,86,525,207,164,57,127],
t:[434],
tr:[20,173,196,200,214,231,401,406]
},{//Dragonite
l:[[7,1],[9,1],[35,1],[43,1],[86,1],[239,1],[355,1],[86,5],[239,11],[82,15],[21,21],[97,25],[525,33],[401,39],[407,47],[219,53],[17,55],[349,61],[200,67],[63,75],[542,81]],
m:[468,337,46,92,258,237,241,58,59,63,113,182,240,219,218,85,87,89,216,280,104,53,201,126,317,332,263,156,213,496,411,374,507,510,416,444,86,523,157,525,207,164,249,15,19,57,70,127,291],
t:[434],
tr:[7,8,9,20,173,196,200,214,231,257,276,355,366,401,406,442]
},{//Mewtwo
l:[[50,1],[93,1],[112,1],[129,8],[248,15],[244,22],[357,29],[54,36],[427,43],[133,50],[384,57],[385,57],[94,64],[382,71],[105,79],[219,86],[396,93],[540,100]],
m:[473,347,92,258,339,237,241,269,58,59,63,113,182,240,477,219,218,76,85,87,89,216,94,247,280,104,115,53,201,126,317,332,259,263,156,490,496,411,412,374,451,510,261,373,416,148,444,86,244,523,157,398,138,447,207,164,433,249,70],
tr:[7,8,9,67,173,196,214,231,271,272,277,278,285,289,324,356,401,409,428,472,478,492]
},{//Mew
l:[[1,1],[144,1],[513,1],[5,10],[118,20],[94,30],[112,40],[246,50],[133,60],[382,70],[226,80],[417,90],[396,100]],
m:[468,337,473,347,46,92,258,339,474,237,241,269,58,59,63,113,182,240,477,219,218,76,479,85,87,89,216,91,94,247,280,104,115,482,53,188,201,126,317,332,259,263,488,156,213,168,490,496,497,315,502,411,412,206,503,374,451,507,510,511,261,512,373,153,421,371,514,416,397,148,444,521,86,360,14,522,244,523,524,157,404,525,526,398,138,447,207,365,369,164,430,433,528,249,555,15,19,57,70,127,291],
tr:[7,8,9,20,67,143,162,173,180,196,200,202,214,215,220,231,235,253,257,270,271,272,276,277,278,282,283,285,289,304,324,334,335,340,343,355,356,366,380,387,388,393,399,401,402,406,409,414,428,441,442,446,450,472,478,492,495,527,529,530]
},{//Chikorita
l:[[33,1],[45,1],[75,6],[77,9],[235,12],[115,17],[345,20],[363,23],[230,28],[113,31],[34,34],[219,39],[312,42],[76,45]],
m:[92,237,241,113,182,219,218,76,216,104,115,263,156,213,496,497,412,148,14,447,207,164,15],
e:[22,34,68,73,175,246,267,275,287,312,320,378,437,505],
t:[520],
tr:[173,202,214,231,235,277,388,402]
},{//Bayleef
l:[[33,1],[45,1],[75,1],[77,1],[75,6],[77,9],[235,12],[115,18],[345,22],[363,26],[230,32],[113,36],[34,40],[219,46],[312,50],[76,54]],
m:[92,237,241,113,182,219,218,76,216,104,115,263,156,213,496,497,412,148,14,447,207,164,249,15,70],
t:[520],
tr:[173,202,214,231,235,277,388,402]
},{//Meganium
l:[[33,1],[45,1],[75,1],[77,1],[75,6],[77,9],[235,12],[115,18],[345,22],[363,26],[80,32],[230,34],[113,40],[34,46],[219,54],[312,60],[76,66]],
m:[92,237,241,63,113,182,219,218,76,89,216,104,115,263,156,213,496,497,412,416,148,14,523,525,447,207,164,249,15,70],
t:[338,520],
tr:[173,200,202,214,231,235,277,388,402]
},{//Cyndaquil
l:[[33,1],[43,1],[108,6],[52,10],[98,13],[172,19],[111,22],[488,28],[129,31],[436,37],[53,40],[517,46],[205,49],[38,55],[284,58]],
m:[92,237,241,182,218,216,91,104,53,126,332,263,488,156,213,496,315,510,261,207,164,528,15],
e:[24,37,38,98,154,179,193,267,306,326,336,343,394,481],
t:[519],
tr:[173,214,257,343]
},{//Quilava
l:[[33,1],[43,1],[108,1],[108,6],[52,10],[98,13],[172,20],[111,24],[129,31],[488,35],[436,42],[53,46],[517,53],[205,57],[38,64],[284,68]],
m:[46,92,237,241,182,218,216,91,280,104,53,126,332,263,488,156,213,496,315,510,261,207,164,528,249,15,70],
t:[519],
tr:[173,214,257,343]
},{//Typhlosion
l:[[33,1],[43,1],[52,1],[108,1],[360,1],[108,6],[52,10],[98,13],[172,20],[111,24],[129,31],[488,35],[436,43],[53,48],[517,56],[205,61],[38,69],[284,74]],
m:[46,92,237,241,63,182,218,76,89,216,91,280,104,53,126,317,332,263,488,156,213,496,315,411,374,510,261,421,416,360,523,157,207,164,528,249,15,70],
t:[307,519],
tr:[7,9,67,173,214,257,343]
},{//Totodile
l:[[10,1],[43,1],[55,6],[99,8],[44,13],[184,15],[423,20],[175,22],[242,27],[498,29],[163,34],[103,36],[37,41],[401,43],[276,48],[56,50]],
m:[468,337,92,258,237,58,59,182,240,218,216,91,280,104,317,332,263,156,213,496,503,374,421,14,157,207,164,15,57,127,291],
e:[8,37,56,232,242,246,300,313,335,346,349,352,453],
t:[518],
tr:[8,67,173,180,196,214,231,253,276,335,401]
},{//Croconaw
l:[[10,1],[43,1],[55,1],[55,6],[99,8],[44,13],[184,15],[423,21],[175,24],[242,30],[498,33],[163,39],[103,42],[37,48],[401,51],[276,57],[56,60]],
m:[468,337,46,92,258,237,58,59,182,240,218,216,91,280,104,317,332,263,156,213,496,503,374,421,14,157,207,164,249,15,57,70,127,291],
t:[518],
tr:[8,67,173,180,196,214,231,253,276,335,401]
},{//Feraligatr
l:[[10,1],[43,1],[55,1],[99,1],[55,6],[99,8],[44,13],[184,15],[423,21],[175,24],[97,30],[242,32],[498,37],[163,45],[103,50],[37,58],[401,63],[276,71],[56,76]],
m:[468,337,46,92,258,237,58,59,63,182,240,218,89,216,91,280,104,317,332,263,156,213,496,411,503,374,421,416,14,523,157,525,207,164,249,15,57,70,127,291],
t:[308,518],
tr:[8,67,173,180,196,200,214,231,253,276,335,401,406]
},{//Sentret
l:[[10,1],[193,1],[111,4],[98,7],[154,13],[270,16],[266,19],[21,25],[156,28],[389,31],[133,36],[226,39],[382,42],[304,47]],
m:[468,92,237,241,58,182,240,218,76,85,216,91,247,280,104,53,263,156,213,168,496,497,374,451,421,514,526,447,207,369,164,15,57],
e:[38,116,163,179,204,228,231,271,274,343,363,387],
tr:[7,8,9,162,173,214,231,253,270,271,282,304,343,387,401],
s:[343,203,10]
},{//Furret
l:[[10,1],[98,1],[111,1],[193,1],[111,4],[98,7],[154,13],[270,17],[266,21],[21,28],[156,32],[389,36],[133,42],[226,46],[382,50],[304,56]],
m:[468,92,237,241,58,59,63,182,240,218,76,85,87,216,91,247,280,104,53,263,156,213,168,496,497,411,374,451,421,514,416,526,447,207,369,164,249,15,57,70],
tr:[7,8,9,162,173,214,231,253,270,271,282,304,343,387,401]
},{//Hoothoot
l:[[33,1],[45,1],[193,1],[95,5],[64,9],[253,13],[115,17],[93,21],[497,25],[36,29],[403,33],[428,37],[485,41],[326,45],[375,49],[355,53],[138,57]],
m:[92,237,241,182,240,218,216,94,247,104,115,332,263,156,213,168,496,497,244,526,138,207,365,164,19],
e:[17,18,48,97,101,119,143,185,297,432],
tr:[143,214,253,257,277,278,304,355,366,428],
s:[193,101,278]
},{//Noctowl
l:[[33,1],[45,1],[95,1],[143,1],[193,1],[95,5],[64,9],[253,13],[115,17],[93,22],[497,27],[36,32],[403,37],[428,42],[485,47],[326,52],[375,57],[355,62],[138,67]],
m:[92,237,241,63,182,240,218,216,94,247,104,115,332,263,156,213,168,496,497,416,244,526,138,207,365,164,19],
tr:[143,214,253,257,277,278,304,355,366,428]
},{//Ledyba
l:[[33,1],[48,6],[4,9],[113,14],[115,14],[219,14],[183,17],[226,22],[318,25],[97,30],[129,33],[38,38],[405,41]],
m:[92,237,241,113,182,219,218,76,216,91,280,104,115,332,263,156,213,168,496,374,512,148,14,522,207,369,164],
e:[60,103,117,146,227,264,282,318,405,409,450],
tr:[8,9,173,202,214,253,282,355,366,409,450],
s:[450,4,9]
},{//Ledian
l:[[4,1],[33,1],[48,1],[48,6],[4,9],[113,14],[115,14],[219,14],[183,17],[226,24],[318,29],[97,36],[129,41],[38,48],[405,53]],
m:[92,237,241,63,113,182,219,218,76,216,91,280,104,115,332,263,156,213,168,496,411,374,512,416,148,14,522,207,369,164,249,70],
tr:[8,9,173,202,214,253,282,355,366,409,450]
},{//Spinarak
l:[[40,1],[81,1],[184,5],[132,8],[141,12],[101,15],[425,19],[154,22],[389,26],[169,29],[97,33],[42,36],[94,40],[398,43],[440,47]],
m:[468,92,474,237,241,182,218,76,216,91,94,104,188,263,156,213,168,496,148,522,404,398,207,164],
e:[41,49,50,60,226,228,324,390,400,476,527],
tr:[202,214,324,340,450,492,527],
s:[450,527,40]
},{//Ariados
l:[[40,1],[81,1],[132,1],[184,1],[450,1],[184,5],[132,8],[141,12],[101,15],[425,19],[154,23],[389,28],[169,32],[97,37],[42,41],[94,46],[398,50],[440,55]],
m:[468,92,474,237,241,63,182,218,76,216,91,94,104,188,263,156,213,168,496,416,148,522,404,398,207,164],
tr:[202,214,324,340,450,492,527]
},{//Crobat
l:[[48,1,4],[103,1],[141,1],[310,1,8],[440,1],[48,5],[310,9],[44,13,12],[17,17,15],[109,21,19],[129,,24],[314,27,28],[212,33,38],[512,39,33],[305,45,42],[114,51,47],[403,57,52]],
m:[92,474,237,241,269,63,182,240,218,216,247,104,188,332,259,263,156,213,168,496,512,371,416,404,207,365,369,164,19],
tr:[143,162,173,202,214,253,257,289,355,366,399,428]
},{//Chinchou
l:[[48,1],[145,1],[86,6],[175,9],[109,12],[55,17],[209,20],[36,23],[486,28],[61,31],[324,34],[435,39],[392,42],[56,45],[268,50]],
m:[92,258,237,58,59,182,240,218,85,87,216,104,263,156,213,496,503,451,148,521,86,207,164,528,57,127,291],
e:[54,60,97,103,133,175,250,351,352,362],
tr:[173,196,214,215,324,340],
s:[133,351,86]
},{//Lanturn
l:[[48,1],[86,1],[145,1],[86,6],[175,9],[55,12],[109,17],[209,20],[36,23],[254,27],[255,27],[256,27],[486,30],[61,35],[324,40],[435,47],[392,52],[56,57],[268,64]],
m:[92,258,237,58,59,63,182,240,218,85,87,216,104,263,156,213,496,503,451,416,148,521,86,207,164,528,57,127,291],
tr:[173,196,214,215,324,340,401]
},{//Pichu
l:[[84,1],[204,1],[39,5],[86,10],[186,13],[417,18]],
m:[92,237,113,182,240,218,85,87,216,104,263,156,213,496,497,374,451,148,521,86,447,207,164,528],
e:[3,9,117,175,179,203,217,227,252,268,273,321,344,381,516],
tr:[173,214,231,253,270,324,343,393]
},{//Cleffa
l:[[1,1],[204,1],[227,4],[47,7],[186,10],[383,13],[345,16]],
m:[473,92,237,241,113,182,240,477,219,218,76,216,91,94,247,104,115,53,126,263,156,213,496,497,374,510,148,86,244,526,138,447,207,164],
e:[102,118,133,150,187,217,273,312,313,321,343,500],
tr:[173,196,214,231,253,270,271,272,277,278,283,304,324,343,356,387,428,472,495],
s:[312,227,214]
},{//Igglybuff
l:[[47,1],[204,1],[111,5],[1,9],[186,13],[383,17]],
m:[92,237,241,113,182,240,219,218,76,216,91,94,247,104,115,53,126,263,156,213,496,497,374,510,148,86,244,526,138,447,207,164,528],
e:[185,195,214,217,273,313,343,356,386,387,445],
tr:[173,196,214,215,220,253,270,272,277,278,283,304,340,343,356,387],
s:[313,270,47]
},{//Togepi
l:[[45,1],[204,1],[118,5],[186,9],[281,13],[227,17],[266,21],[516,25],[273,29],[246,33],[219,37],[226,41],[38,45],[387,49],[495,53]],
m:[473,92,237,241,113,182,240,477,219,218,76,216,94,247,104,115,53,126,263,156,213,496,497,374,510,148,86,244,526,138,447,207,164,249],
e:[64,119,193,217,234,248,290,326,375,381,417,500],
tr:[173,214,215,253,271,277,283,304,324,343,387,428,495],
s:[381,118,253]
},{//Togetic
l:[[45,1],[118,1],[186,1],[204,1],[345,1],[118,5],[186,9],[281,13],[227,17],[266,21],[516,25],[273,29],[246,33],[219,37],[226,41],[38,45],[387,49],[495,53]],
m:[473,92,237,241,63,113,182,240,477,219,218,76,216,94,247,280,104,115,53,126,332,263,156,213,496,497,374,510,514,416,148,86,244,526,138,447,207,164,249,19],
tr:[173,214,215,257,271,277,283,304,324,343,355,366,387,409,428,495]
},{//Natu
l:[[43,1],[64,1],[101,6],[100,9],[381,12],[357,17],[382,20],[109,23],[273,28],[375,33],[248,36],[500,39],[466,44],[384,47],[385,47],[94,50]],
m:[473,347,92,237,241,113,182,240,477,218,76,216,94,247,104,115,332,263,156,213,168,496,502,148,86,244,138,447,207,365,369,164,433],
e:[65,98,114,185,211,285,287,297,355,389,428,485],
tr:[173,202,214,220,257,271,277,285,324,355,366,428,478],
s:[297,202,101]
},{//Xatu
l:[[43,1],[64,1],[101,6],[100,9],[381,12],[357,17],[382,20],[109,23],[366,27],[273,30],[375,37],[248,42],[500,47],[384,54],[466,54],[385,59],[94,66]],
m:[473,347,92,237,241,63,113,182,240,477,218,76,216,94,247,104,115,332,263,156,213,168,496,502,416,148,86,244,138,447,207,365,369,164,433,19],
tr:[143,173,202,214,220,257,271,277,285,324,355,366,428,478,492]
},{//Mareep
l:[[33,1],[45,5,1],[84,10,8],[86,14,4],[36,,18],[178,19,11],[268,23,15],[109,,25],[486,28,22],[538,32,36],[435,37,32],[324,41,39],[113,46,43],[408,50,29],[87,55,46]],
m:[92,237,113,182,240,219,218,85,87,216,104,263,156,213,496,497,451,148,86,207,164,528],
e:[28,34,36,97,103,231,260,268,316,495],
tr:[173,214,215,231,324,393,495],
s:[115,351,84]
},{//Flaaffy
l:[[33,1],[45,1],[84,1,8],[45,5],[84,10],[86,14,4],[178,20,11],[36,,20],[268,25,16],[109,,29],[486,31,25],[538,36,43],[435,42,38],[324,47],[113,53,52],[408,59,34],[87,65,56]],
m:[92,237,113,182,240,219,218,85,87,216,280,104,263,156,213,496,497,374,451,148,521,86,207,164,528,249,70],
tr:[7,9,173,214,215,231,324,393,495]
},{//Ampharos
l:[[7,1],[33,1],[45,1],[84,1,8],[86,1,4],[45,5],[84,10],[86,14],[178,20,11],[36,,20],[268,25,16],[109,,29],[9,30],[486,33,25],[538,40,46],[435,48,40],[324,55,51],[113,63,57],[408,71,35],[87,79,62]],
m:[92,237,63,113,182,240,219,218,85,87,216,280,104,263,156,213,496,497,411,374,451,416,148,521,86,523,207,164,528,249,70],
tr:[7,9,173,200,214,215,231,324,393,495]
},{//Bellossom
l:[[72,1],[78,1],[230,1],[241,1],[348,1],[345,23],[437,53]],
m:[92,474,237,241,63,182,219,218,76,216,104,188,263,156,213,496,412,374,416,148,14,447,207,164,15],
tr:[173,202,214,235,253,380,388,402,409,495]
},{//Marill
l:[[33,1],[145,,1],[111,2,10],[346,,5],[39,7,2],[55,10,7],[205,15,10],[270,,16],[61,18,13],[392,23,28],[38,27,23],[240,32,31],[401,37,20],[276,,37],[56,42,40]],
m:[92,258,237,58,59,113,182,240,218,216,91,280,104,263,156,213,496,503,374,526,447,207,164,249,57,70,127,291],
e:[34,48,133,187,195,217,248,276,287,330,346,453],
tr:[8,173,196,214,231,270,276,282,304,340,343,401],
s:[453,111,8]
},{//Azumarill
l:[[33,1],[39,1,2],[55,1,7],[111,1,10],[145,,1],[111,2],[346,,5],[39,7],[55,10],[205,15,10],[270,,16],[61,20,13],[392,27,31],[38,33,25],[240,40,35],[276,,42],[401,47,21],[56,54,46]],
m:[92,258,237,58,59,63,113,182,240,218,216,91,280,104,263,156,213,496,411,503,374,416,523,526,447,207,164,249,57,70,127,291],
tr:[8,173,196,214,231,270,276,282,304,340,343,401]
},{//Sudowoodo
l:[[67,1,8],[88,1,12],[175,1,5],[383,1],[452,1],[175,6],[67,9],[88,14],[102,17,15],[335,22,26],[185,25,19],[317,30,22],[157,33,29],[68,,33],[21,38,15],[389,41,36],[444,,43],[38,46,40],[359,49,47]],
m:[347,92,237,241,269,182,218,479,89,216,91,280,104,201,317,259,263,156,213,168,496,374,153,397,444,244,523,157,207,164,249,70],
e:[29,106,111,120,174,203,205,328,446],
tr:[7,8,9,67,173,214,270,272,335,343,414,446,492,495],
s:[175,272,205]
},{//Politoed
l:[[3,1],[61,1],[95,1],[195,1],[207,27],[340,37],[304,48]],
m:[92,258,237,58,59,63,182,240,218,89,216,91,94,280,104,263,156,213,168,496,497,411,503,374,371,416,523,207,164,249,57,70,127,291],
tr:[8,173,196,214,270,283,304,340]
},{//Hoppip
l:[[150,1],[235,4],[39,7],[33,10],[77,12],[78,14],[79,16],[331,19],[73,22],[72,25],[512,28],[476,31],[178,34],[369,37],[388,40],[202,43],[340,46],[262,49]],
m:[92,237,241,182,218,76,216,104,115,332,263,156,213,496,412,512,148,14,244,447,207,369,164],
e:[38,93,133,203,227,270,312,388,402,538],
tr:[173,202,214,235,270,340,388,402],
s:[340,331,227,270,235]
},{//Skiploom
l:[[33,1],[39,1],[150,1],[235,1],[235,4],[39,7],[33,10],[77,12],[78,14],[79,16],[331,20],[73,24],[72,28],[512,32],[476,36],[178,40],[369,44],[388,48],[202,52],[340,56],[262,60]],
m:[92,237,241,182,218,76,216,104,115,332,263,156,213,496,412,512,148,14,244,447,207,369,164],
tr:[173,202,214,235,270,340,388,402]
},{//Jumpluff
l:[[33,1],[39,1],[150,1],[235,1],[235,4],[39,7],[33,10],[77,12],[78,14],[79,16],[331,20],[73,24],[72,29],[512,34],[476,39],[178,44],[369,49],[388,54],[202,59],[340,64],[262,69]],
m:[92,237,241,63,182,218,76,216,104,115,332,263,156,213,496,412,512,416,148,14,244,447,207,369,164],
tr:[173,202,214,235,270,340,388,402]
},{//Aipom
l:[[10,1],[39,1],[28,4],[310,8],[226,11],[321,15],[154,18],[129,22],[103,25],[97,29],[458,32],[374,36],[417,39],[387,43]],
m:[468,92,237,241,269,182,240,218,76,85,87,216,91,247,280,104,332,263,156,213,168,490,496,374,512,421,371,514,86,526,138,447,207,369,164,249,15,70],
e:[3,21,68,97,103,180,228,251,252,279,340,343,415],
tr:[7,8,9,67,173,180,214,231,253,272,282,289,340,343,387,402,441,492],
s:[252,7,10]
},{//Sunkern
l:[[71,1],[74,1],[72,5,10],[275,9,4],[320,13,7],[73,17,13],[283,21,25],[388,25,19],[75,29,16],[363,,31],[235,33,28],[76,,34],[241,37,40],[38,,37],[202,41,22],[402,45,43]],
m:[92,237,241,113,182,219,218,76,216,104,188,263,156,213,496,412,148,14,447,207,164,15],
e:[73,117,174,203,227,230,234,267,270,275,320,363],
tr:[173,202,214,235,253,270,283,388,402,414,495],
s:[414,72,230]
},{//Sunflora
l:[[1,1],[71,1],[74,1],[72,5,10],[275,9,4],[320,13,7],[73,17,13],[331,21,25],[202,,22],[388,25,19],[75,29,16],[363,,31],[80,33,28],[241,37,40],[38,,37],[76,41,34],[437,45,43]],
m:[92,237,241,63,113,182,219,218,76,216,104,188,263,156,213,496,412,416,148,14,447,207,164,15],
tr:[173,202,214,235,253,270,283,388,402,414,495]
},{//Yanma
l:[[33,1],[193,1],[98,6],[104,11],[49,14],[197,17],[48,22],[253,27],[228,30],[246,33],[95,38],[17,43],[103,46],[369,49],[403,54],[405,57]],
m:[92,237,241,182,218,76,216,94,247,104,332,263,156,213,168,496,148,138,207,369,164],
e:[18,38,141,179,185,228,290,318,324,364],
tr:[173,202,214,253,324,355,366,450],
s:[364,202,98]
},{//Wooper
l:[[39,1],[55,1],[300,5],[341,9],[21,15],[426,19],[133,23],[281,29],[89,33],[240,37],[54,43],[114,43],[330,47]],
m:[92,258,237,58,59,182,240,219,218,89,216,91,104,482,188,201,263,156,213,496,503,148,523,207,164,249,57,127,291],
e:[24,34,68,105,174,214,227,246,254,255,256,300,491,495],
tr:[8,173,196,214,231,401,414,495],
s:[401,34,55]
},{//Quagsire
l:[[39,1],[55,1],[300,1],[300,5],[341,9],[21,15],[426,19],[133,24],[281,31],[89,36],[240,41],[54,48],[114,48],[330,53]],
m:[92,258,237,58,59,63,182,240,219,218,89,216,91,280,104,482,188,201,317,263,156,213,168,496,411,503,374,416,148,444,523,157,207,164,249,57,70,127,291],
tr:[8,173,196,214,231,401,414,495]
},{//Espeon
l:[[33,1],[39,1],[270,1],[28,8,5],[93,15,9],[98,22,13],[129,29,17],[60,36,21],[248,43,25],[387,50,41],[244,57,29],[94,64,37],[234,71,33],[384,78,45]],
m:[473,347,92,237,241,63,113,182,240,477,218,216,91,94,247,104,115,263,156,213,496,497,514,416,148,244,526,138,447,207,164,433,15],
tr:[173,214,215,231,270,271,277,285,304,324,343,387,428,478]
},{//Umbreon
l:[[33,1],[39,1],[270,1],[28,8,5],[228,15,9],[98,22,13],[109,29,17],[185,36,21],[372,43,25],[387,50,41],[212,57,37],[103,64,29],[236,71,33],[385,78,45]],
m:[92,237,241,269,63,182,240,218,216,91,94,247,104,259,263,156,213,496,497,371,514,416,148,244,526,138,207,164,555,15],
tr:[173,180,214,215,231,270,289,304,343,387,399,472,492]
},{//Murkrow
l:[[64,1],[310,1],[228,5],[114,11],[17,15],[101,21],[372,25],[269,31],[185,35],[212,41],[492,45],[366,51],[389,55],[259,61],[511,65]],
m:[347,92,237,241,269,182,240,218,216,94,247,104,332,259,263,156,213,168,496,511,373,371,514,86,244,138,207,365,164,555,19],
e:[17,18,65,103,109,119,143,185,195,297,355,372,375,413],
tr:[143,180,196,214,253,257,289,355,366,399,492],
s:[109,64,355]
},{//Slowking
l:[[33,1],[174,1],[237,1],[281,1],[408,1],[45,5],[55,9],[93,14],[50,19],[29,23],[352,28],[428,32],[417,36],[207,41],[94,45],[376,49],[244,54],[505,58]],
m:[473,347,92,258,237,241,58,59,63,113,182,240,477,219,218,89,216,91,94,247,280,104,53,126,263,156,213,496,497,411,503,374,510,511,416,148,86,244,523,525,138,447,207,164,433,249,57,70,291],
tr:[8,173,196,214,231,271,277,278,285,324,334,335,401,409,428,472,492,495]
},{//Misdreavus
l:[[45,1],[149,1],[180,5],[310,10],[109,14],[212,19],[506,23],[60,28],[220,32],[371,37],[247,41],[195,46],[288,50],[408,55]],
m:[347,92,237,241,269,182,240,477,218,85,87,216,94,247,104,332,259,263,156,213,168,496,497,451,261,373,371,148,86,244,138,207,164,433],
e:[103,174,180,194,262,285,286,389,417,425,466,472],
tr:[173,180,196,214,215,220,253,271,277,285,289,304,399,472,478,492],
s:[194,517,149]
},{//Unown
l:[[237,1]]
},{//Wobbuffet
l:[[68,1],[194,1],[219,1],[243,1]],
s:[204,227,243]
},{//Girafarig
l:[[33,1],[45,1],[93,1],[310,1],[384,1],[385,1],[316,5],[23,10],[97,14],[60,19],[226,23],[372,28],[458,32],[94,37],[428,41],[242,46]],
m:[473,347,92,237,241,113,182,240,477,218,85,87,89,216,94,247,104,115,263,156,213,168,496,497,412,451,514,148,86,244,523,526,138,447,207,164,433,249,70],
e:[13,24,36,133,193,212,243,248,251,273,277,285,290],
tr:[173,214,231,253,271,277,278,285,304,324,356,428,492],
s:[93,243,285]
},{//Pineco
l:[[33,1],[182,1],[120,6],[450,9],[36,12],[229,17],[117,20],[363,23],[191,28],[371,31],[153,34],[334,39],[360,42],[38,45]],
m:[92,474,237,241,113,182,218,76,89,216,91,104,115,201,317,263,156,213,496,153,371,360,522,523,157,207,164,249,70],
e:[38,42,68,129,175,203,279,328,379,390,446],
tr:[173,202,214,220,334,356,446,450,529],
s:[356,120,390]
},{//Forretress
l:[[33,1],[120,1],[182,1],[390,1],[450,1],[120,6],[450,9],[36,12],[229,17],[117,20],[363,23],[191,28],[429,31],[475,32],[371,36],[153,42],[334,46],[360,50],[38,56],[393,60],[192,64],[484,70]],
m:[92,474,237,241,63,113,182,218,76,89,216,91,104,115,201,317,263,156,213,496,153,371,416,397,521,360,522,523,157,207,164,430,249,70],
tr:[173,202,214,220,324,334,335,356,393,446,450,529]
},{//Dunsparce
l:[[99,1],[111,4,1],[281,8,16],[137,12,28],[205,16,4],[180,20,7],[228,24,10],[103,28,13],[355,33,25],[38,,34],[36,38,22],[203,,40],[489,43,37],[529,,43],[246,48,19],[91,53,31],[283,58,46],[175,63,49]],
m:[347,92,237,241,58,59,182,240,218,76,85,87,89,216,91,247,104,53,126,317,263,156,213,168,496,451,510,514,86,360,244,523,157,398,138,207,164,528,249,70],
e:[29,44,97,117,173,174,214,246,277,290,310,376,506],
tr:[20,173,180,214,220,231,277,283,355,387,401,428,446,529],
s:[111,277,446]
},{//Gligar
l:[[40,1],[28,5,4],[106,9,7],[282,12,10],[98,16,13],[210,20,16],[185,23,19],[512,27,22],[103,31,35],[163,34,27],[14,38,50],[369,42,30],[404,45,40],[327,,45],[12,49,55]],
m:[468,92,474,237,241,269,182,240,218,89,216,91,280,104,188,201,317,332,259,263,156,213,168,496,206,374,512,371,397,444,14,522,523,157,404,398,207,369,164,249,15,70],
e:[13,17,38,68,97,226,232,328,342,364,379,400,431,440],
tr:[173,214,231,282,355,366,399,401,414,446,450],
s:[364,28,366]
},{//Steelix
l:[[20,1],[33,1],[106,1],[300,1],[422,1],[423,1],[424,1],[103,6,31],[88,9,7],[99,14,10],[317,17,13],[479,22],[201,25,52],[475,30,19],[21,33,28],[157,,34],[446,38,16],[225,41,25],[91,,43],[174,46,4],[231,49,40],[242,54,37],[38,57,49],[444,62,46]],
m:[46,92,237,241,269,63,182,218,479,89,216,91,104,201,317,259,263,156,213,496,153,371,416,397,444,360,244,523,157,525,207,164,430,249,15,70],
tr:[20,173,214,231,335,393,399,401,406,414,442,446]
},{//Snubbull
l:[[33,1],[39,1],[184,1],[204,1],[422,1],[423,1],[424,1],[44,7],[122,13],[29,19],[46,25],[99,31],[36,37],[371,43],[242,49]],
m:[46,92,339,237,241,269,182,240,218,76,85,87,89,216,91,247,280,104,115,53,188,126,259,263,156,213,168,496,315,374,510,371,514,86,523,526,207,164,528,249,555,70],
e:[38,102,118,173,185,215,217,242,264,265,370,422,423,424],
tr:[7,8,9,67,162,173,214,215,276,304,343,387],
s:[204,370,38]
},{//Granbull
l:[[33,1],[39,1],[184,1],[204,1],[422,1],[423,1],[424,1],[44,7],[122,13],[29,19],[46,27],[99,35],[36,43],[371,51],[242,59],[200,67]],
m:[46,92,339,237,241,269,63,182,240,218,76,85,87,89,216,91,247,280,104,115,53,188,126,317,259,263,156,213,168,496,315,411,374,510,371,514,416,444,86,523,157,526,207,164,528,249,555,70],
tr:[7,8,9,67,162,173,200,214,215,231,276,304,343,387]
},{//Qwilfish
l:[[33,1],[40,1],[191,1],[106,9],[107,9],[55,13],[205,17],[390,21],[254,25],[255,25],[279,29],[362,33],[42,37],[36,41],[401,45],[398,49],[194,53],[56,57]],
m:[92,258,474,237,269,58,59,182,240,218,216,247,104,482,188,263,156,213,496,503,153,371,86,360,398,207,164,57,127,291],
e:[48,61,114,175,310,324,352,362,453,491],
tr:[173,196,214,220,324,340,401],
s:[453,40,290]
},{//Scizor
l:[[43,1],[98,1],[418,1],[116,5],[228,9],[206,13],[97,17],[232,21],[210,25],[163,29],[13,33],[334,37],[404,41],[400,45],[458,49],[442,53],[14,57],[364,61]],
m:[92,474,237,241,63,113,182,240,219,218,216,280,104,201,332,263,156,213,168,496,206,374,512,416,14,522,404,207,369,164,430,249,15,70],
tr:[173,214,276,282,334,355,366,442,450]
},{//Shuckle
l:[[110,1],[117,1],[132,1],[522,1,12],[227,7,5],[35,13,9],[219,19,16],[88,,23],[156,25,20],[380,31,27],[504,,34],[205,37,1],[157,,38],[379,43,31],[450,49,42],[444,,49],[470,55,45],[471,55,45]],
m:[92,474,237,241,182,219,218,479,89,216,91,104,482,188,201,317,263,156,213,496,397,148,444,360,522,523,157,207,164,249,70],
e:[51,189,230,270,282,328,350,367,515],
tr:[20,173,214,270,282,380,414,446,450,495],
s:[227,270,504]
},{//Heracross
l:[[30,1],[33,1],[43,1],[203,1],[400,1],[31,7],[332,13,10],[498,,16],[280,19,25],[68,25,19],[36,31,28],[370,37,34],[179,43],[364,49,37],[224,55,46]],
m:[92,339,474,237,241,63,182,240,218,479,89,216,91,280,104,317,332,263,156,213,168,496,411,206,374,421,514,416,444,14,522,523,157,526,207,164,249,15,70],
e:[38,69,106,117,175,224,228,264,279],
tr:[67,173,214,270,282,334,450],
s:[175,264,30]
},{//Sneasel
l:[[10,1],[43,1],[269,1],[98,8],[103,10,32],[185,14,10],[154,21,16],[97,24,20],[196,28,14],[468,35,25],[163,38,35],[289,,40],[251,42,28],[386,,44],[232,49,22],[420,51,47]],
m:[468,347,92,258,237,241,269,58,59,182,240,218,216,91,247,280,104,115,332,259,263,156,213,168,490,496,206,374,373,421,371,514,14,244,404,398,138,207,164,249,555,15,57,70],
e:[8,44,68,180,193,228,252,274,306,364,386,419,420,458],
tr:[8,67,173,180,196,214,231,282,289,399,492],
s:[8,67,269]
},{//Teddiursa
l:[[10,1],[43,1],[122,1],[313,1],[343,1],[154,8],[185,15],[230,22],[163,29],[204,36],[156,43],[173,43],[37,50],[374,57]],
m:[468,46,92,339,237,241,269,182,240,218,89,216,91,280,104,317,332,259,263,156,213,168,496,374,421,371,514,14,523,157,526,207,164,249,15,70],
e:[36,38,68,69,187,214,232,238,242,281,313,370,400,498],
tr:[7,8,9,173,214,276,304,343,387,402,441],
s:[242,313,264]
},{//Ursaring
l:[[10,1],[43,1],[122,1],[313,1],[343,1],[154,8],[185,15],[230,22],[163,29],[184,38],[156,47],[173,49],[37,58],[359,67]],
m:[468,46,92,339,237,241,269,63,182,240,218,479,89,216,91,280,104,317,332,259,263,156,213,168,496,411,374,421,371,514,416,444,14,523,157,526,207,164,249,15,70],
tr:[7,8,9,67,173,214,253,276,304,343,387,402,441]
},{//Slugma
l:[[123,1],[281,1],[52,5],[88,10],[106,14],[105,19],[481,23],[246,28],[133,32],[436,37],[157,41],[34,46],[53,50],[414,55]],
m:[92,237,241,113,182,218,216,104,115,53,126,317,263,488,156,213,496,315,510,261,157,207,164,249],
e:[108,151,174,205,254,255,256,257,262,414,517],
tr:[173,214,220,257,334,414,495],
s:[52,257,517]
},{//Magcargo
l:[[52,1],[88,1],[123,1],[281,1],[52,5],[88,10],[106,14],[105,19],[481,23],[246,28],[133,32],[436,37],[504,38],[157,44],[34,52],[53,59],[414,67]],
m:[92,237,241,63,113,182,218,76,479,89,216,104,115,53,201,126,317,263,488,156,213,496,315,510,261,153,416,397,444,360,523,157,207,164,249,70],
tr:[173,214,220,257,334,414,446,495]
},{//Swinub
l:[[33,1],[316,1],[300,4,5],[181,8],[189,13,11],[203,16,14],[426,20,18],[196,25,21],[420,28,24],[36,32,28],[89,37],[54,40,35],[175,,40],[59,44],[133,49,48]],
m:[46,92,258,237,58,59,113,182,240,218,89,216,91,104,115,201,317,263,156,213,496,523,157,207,164,249,70],
e:[34,36,38,44,90,174,246,333,341,419,446,556],
tr:[173,196,214,276,283,414,446],
s:[246,333,316]
},{//Piloswine
l:[[64,1],[181,1,8],[246,1],[300,1,5],[316,1],[300,4],[181,8],[189,13,11],[203,16,14],[426,20,18],[196,25,21],[423,28,24],[36,32,28],[31,33],[89,40,46],[37,,41],[54,48,37],[59,56,52],[133,65,58]],
m:[46,92,258,237,58,59,63,113,182,240,218,89,216,91,104,115,201,317,263,156,213,496,416,444,523,157,207,164,249,70],
tr:[173,196,214,276,283,414,446]
},{//Corsola
l:[[33,1],[106,4],[145,8],[105,13,10],[287,16,13],[350,20,31],[61,25,17],[381,28,23],[334,,29],[246,32,20],[203,,35],[392,37,38],[131,40,27],[408,44,41],[243,48,45],[175,,52],[414,53,47]],
m:[347,92,258,237,241,58,59,113,182,240,219,218,89,216,91,94,247,104,115,201,317,263,156,213,496,503,153,397,444,523,157,207,164,249,57,70],
e:[54,103,109,112,117,133,174,267,275,333,352,392,457],
tr:[173,196,214,277,283,334,414,446],
s:[145,109,446]
},{//Remoraid
l:[[55,1],[199,6],[60,10],[62,14],[61,19,18],[116,23,22],[331,27,38],[352,32,26],[324,36,30],[58,40,34],[56,,42],[63,45,46],[487,49,50]],
m:[92,237,241,58,59,63,182,240,218,479,216,94,104,53,126,263,156,213,168,496,503,451,510,86,207,164,57,127,291],
e:[48,62,103,114,129,173,175,190,323,341,350,352,491],
tr:[173,196,214,324,340,402,441],
s:[362,199,350]
},{//Octillery
l:[[55,1],[60,1,10],[62,1,14],[132,1,6],[350,1],[441,1],[132,6],[60,10],[62,14],[61,19,18],[116,23,22],[190,25],[331,29,46],[378,36,28],[324,42,34],[58,48,40],[56,,52],[63,55,58],[487,61,64]],
m:[92,237,241,58,59,63,182,240,218,479,216,94,104,482,53,188,126,263,156,213,168,496,412,503,451,510,371,416,86,207,164,430,57,127,291],
tr:[20,173,196,214,324,340,402,441]
},{//Delibird
l:[[217,1]],
m:[92,258,237,58,59,182,240,218,216,280,104,332,263,156,213,168,496,374,524,207,365,164,19],
e:[8,62,98,150,196,229,248,252,301,420,516],
tr:[8,143,196,214,278,324,340,402,441],
s:[264,420,217]
},{//Mantine
l:[[33,1],[48,1,3],[60,1],[61,1,7],[145,1],[324,1],[331,1],[48,4],[61,10],[29,13,16],[97,19,32],[17,22,14],[469,,23],[352,28,19],[36,31,27],[403,,36],[109,37,11],[340,40,46],[392,46,39],[56,49]],
m:[92,258,237,58,59,63,182,240,218,89,216,104,317,332,263,156,213,496,503,512,416,523,157,207,164,57,127,291],
e:[21,56,114,133,150,239,243,300,346,469],
tr:[173,196,214,270,324,340,366,401,402,441,442],
s:[314,243,48]
},{//Skarmory
l:[[43,1],[64,1],[28,6],[129,9],[97,12],[31,17],[364,20],[314,23],[191,28],[319,31],[211,34],[475,39],[403,42],[163,45],[400,50]],
m:[46,92,237,241,269,182,218,216,104,201,317,332,259,263,156,213,168,496,507,371,148,14,157,404,207,365,164,430,249,15,19],
e:[18,65,143,174,203,228,372,385,413,446],
tr:[143,173,196,214,334,355,366,399,442,446],
s:[65,64,355]
},{//Houndour
l:[[43,1],[52,1],[336,4],[123,8],[46,13],[44,16],[316,20],[251,25],[424,28],[185,32],[373,37],[492,40],[53,44],[242,49],[417,52],[517,56]],
m:[46,92,237,241,269,182,218,76,216,247,104,53,188,126,259,263,488,156,213,168,496,315,510,261,373,371,514,138,207,164,249,555],
e:[68,83,99,179,180,228,251,364,386,389,417,422,424],
tr:[162,173,180,214,231,253,257,272,289,304,399,492],
s:[399,364,336]
},{//Houndoom
l:[[43,1],[52,1],[123,1],[336,1],[422,1],[336,4],[123,8],[46,13],[44,16],[316,20],[251,26],[424,30],[185,35],[373,41],[492,45],[53,50],[242,56],[417,60],[517,65]],
m:[46,92,237,241,269,63,182,218,76,216,247,104,53,188,126,259,263,488,156,213,168,496,315,510,261,373,371,514,416,138,207,164,249,555,70],
tr:[162,173,180,214,231,253,257,272,289,304,399,492]
},{//Kingdra
l:[[43,1],[55,1],[108,1],[145,1],[281,1],[108,4],[43,8],[55,11],[116,14],[61,18],[97,23],[239,26],[362,30],[56,40],[349,48],[406,57]],
m:[92,258,237,58,59,63,182,240,218,216,104,263,156,213,496,503,511,416,207,164,430,57,127,291],
t:[434],
tr:[173,196,200,214,324,340,406,442]
},{//Phanpy
l:[[33,1],[45,1],[111,1],[316,1],[175,6],[36,10],[205,15],[363,19],[21,24],[203,28],[204,33],[387,37],[38,42]],
m:[46,92,237,241,182,218,89,216,104,201,317,263,156,213,496,497,523,157,207,164,249,70],
e:[34,68,90,116,173,189,246,283,420,457,484],
tr:[173,214,231,276,282,283,304,387,402,414,441,446],
s:[175,484,402]
},{//Donphan
l:[[30,1],[45,1],[111,1],[422,1],[424,1],[523,1],[229,6],[282,10],[205,15],[222,19],[21,24],[31,25],[372,31],[184,39],[89,46],[416,54]],
m:[46,92,237,241,63,182,218,89,216,104,201,317,263,156,213,496,497,416,397,444,360,523,157,398,207,164,249,70],
tr:[173,214,231,276,282,283,304,334,335,340,387,402,414,441,446]
},{//Porygon2
l:[[33,1],[111,1],[160,1],[176,1],[60,7],[97,12],[105,18],[393,23],[324,29],[278,34],[435,40],[199,45],[161,51],[277,56],[192,62],[63,67]],
m:[473,92,237,241,58,59,63,182,240,218,76,85,87,216,94,247,104,332,263,156,168,496,451,416,148,86,244,138,207,164,433],
tr:[173,196,214,220,231,271,277,278,324,356,387,393,428,472,492,527]
},{//Stantler
l:[[33,1],[43,3],[310,7],[95,10],[23,13],[28,16],[36,21],[109,23],[347,27],[272,33],[428,38],[26,43],[286,49],[445,53],[382,55]],
m:[473,347,46,92,237,241,113,182,240,218,76,85,87,89,216,94,247,104,115,263,156,213,168,496,412,451,514,416,148,86,244,523,526,138,207,164,433,528],
e:[24,37,44,50,99,180,224,300,326,382,428],
tr:[173,180,214,231,253,272,285,324,340,356,387,428,478],
s:[50,285,33]
},{//Smeargle
l:[[166,1],[166,11],[166,21],[166,31],[166,41],[166,51],[166,61],[166,71],[166,81],[166,91]],
s:[445,166,214]
},{//Tyrogue
l:[[33,1],[193,1],[252,1],[270,1]],
m:[92,339,237,241,182,240,218,89,216,280,104,263,156,213,168,490,496,514,523,157,526,207,164,249,70],
e:[68,136,170,183,203,228,229,270,364,410,418],
tr:[67,173,214,253,270,272,343],
s:[252,364,183]
},{//Hitmontop
l:[[27,1],[279,1],[116,6],[228,10],[98,15],[167,19],[229,24],[68,28],[364,33],[97,37],[360,42],[469,46],[501,46],[197,51],[370,55],[283,60]],
m:[92,339,237,241,182,240,218,89,216,91,280,104,201,332,263,156,213,168,490,496,514,444,360,523,157,526,207,164,249,70],
tr:[67,173,214,270,272,283,343,529]
},{//Smoochum
l:[[1,1],[122,5],[186,8],[181,11],[93,15],[47,18],[531,21],[212,25],[313,28],[381,31],[419,35],[94,38],[383,41],[195,45],[59,48]],
m:[473,347,92,258,237,58,59,113,182,240,218,216,94,247,104,115,263,156,213,168,496,497,374,371,148,244,524,138,447,207,164,433],
e:[8,96,252,273,357,358,417,445],
tr:[8,173,196,214,215,253,270,271,272,277,278,285,324,343,428,478],
s:[445,285,186]
},{//Elekid
l:[[43,1],[98,1],[84,6,5],[67,11,8],[129,16,12],[86,,19],[351,21,15],[113,26],[486,31,22],[9,36,29],[435,41,33],[85,46,40],[103,51,36],[87,56,43]],
m:[92,237,113,182,240,218,85,87,216,94,280,104,263,156,213,168,496,374,451,148,521,86,207,164,528,249],
e:[2,7,8,27,96,112,223,238,264,359,364],
tr:[7,8,9,67,173,214,253,270,324,343,393,527,530],
s:[238,393,84]
},{//Magby
l:[[43,1],[123,1],[52,7,5],[108,10,8],[185,16,12],[83,19,15],[499,,19],[109,25,26],[481,28,22],[7,34,29],[436,37,33],[53,43,40],[241,46,36],[126,49,43]],
m:[92,237,241,182,218,216,94,280,104,53,126,263,488,156,213,168,496,315,374,510,261,207,164,249],
e:[2,5,9,103,112,116,183,187,223,231,238,394],
tr:[7,9,173,214,231,253,257,270,343,530],
s:[52,257,9]
},{//Miltank
l:[[33,1],[45,3],[111,5],[23,8],[208,11],[117,15],[205,19],[34,24],[428,29],[445,35],[360,41],[215,48],[358,55]],
m:[92,237,241,58,59,63,182,240,218,76,85,87,89,216,247,280,104,201,317,263,156,213,496,497,411,374,514,416,86,360,244,523,157,526,207,164,249,57,70],
e:[38,69,146,174,179,203,214,217,270,359,363,386,531],
tr:[7,8,9,173,196,214,215,231,270,335,428,442,446,495],
s:[174,111,231]
},{//Blissey
l:[[1,1],[45,1],[111,1],[39,5],[287,9],[3,12],[135,16],[516,20],[107,23],[36,27],[47,31],[374,34],[505,38],[121,42],[113,46],[361,50],[38,54]],
m:[347,92,258,237,241,58,59,63,113,182,240,219,218,76,85,87,89,216,94,247,280,104,53,201,126,317,263,156,213,496,497,411,374,451,510,514,416,148,86,244,523,157,526,138,447,207,164,528,249,70],
tr:[7,8,9,173,196,214,215,231,270,278,283,285,289,304,335,343,356,387,409,428,446]
},{//Raikou
l:[[43,1],[44,1],[84,8],[46,15],[98,22],[209,29],[115,36],[242,43],[422,50],[435,57],[326,64],[240,71],[347,78],[87,85]],
m:[347,46,92,237,241,63,113,182,240,218,85,87,216,91,247,104,115,201,263,156,496,451,511,416,148,521,86,244,523,207,164,528,249,555,15,70],
tr:[173,214,231,324,393,442]
},{//Entei
l:[[43,1],[44,1],[52,8],[46,15],[83,22],[23,29],[53,36],[207,43],[424,50],[436,57],[326,64],[126,71],[347,78],[284,85]],
m:[347,46,92,237,241,63,182,240,218,76,216,91,247,104,115,53,201,126,263,488,156,496,315,510,511,261,416,148,444,244,523,207,164,249,555,15,70],
tr:[173,214,231,257,442]
},{//Suicune
l:[[43,1],[44,1],[61,8],[240,15],[16,22],[62,29],[54,36],[243,43],[423,50],[366,57],[326,64],[56,71],[347,78],[59,85]],
m:[347,46,92,258,237,241,58,59,63,182,240,218,216,91,247,104,115,201,263,156,496,503,511,416,244,523,207,164,249,555,15,57,127,291],
tr:[173,196,214,231,324,366,442]
},{//Larvitar
l:[[43,1],[44,1],[201,5],[103,10],[498,14],[157,19],[184,23],[37,28],[399,32],[371,37],[242,41],[89,46],[444,50],[63,55]],
m:[92,237,241,269,63,182,240,218,479,89,216,91,280,104,201,317,259,263,156,213,496,371,514,397,444,523,157,207,164,249,555],
e:[23,116,174,200,228,231,246,334,349,372,442,446],
tr:[173,180,200,214,231,253,276,334,399,414,442,446],
s:[44,399,446]
},{//Pupitar
l:[[43,1],[44,1],[103,1],[201,1],[201,5],[103,10],[498,14],[157,19],[184,23],[37,28],[399,34],[371,41],[242,47],[89,54],[444,60],[63,67]],
m:[92,237,241,269,63,182,240,218,479,89,216,91,280,104,201,317,259,263,156,213,496,371,514,397,444,523,157,207,164,249,555],
tr:[173,180,200,214,231,253,276,334,399,414,442,446]
},{//Tyranitar
l:[[43,1],[44,1],[103,1],[201,1],[422,1],[423,1],[424,1],[201,5],[103,10],[498,14],[157,19],[184,23],[37,28],[399,34],[371,41],[242,47],[89,54],[444,63],[63,73],[416,82]],
m:[468,337,46,92,237,241,269,58,59,63,182,240,218,479,85,87,89,216,91,280,104,53,201,126,317,332,259,263,156,213,496,411,374,510,421,371,514,416,397,444,86,523,157,525,207,164,249,555,15,57,70],
tr:[7,8,9,67,173,180,200,214,231,253,276,334,335,399,401,406,414,442,446,492]
},{//Lugia
l:[[18,1],[311,1],[16,9],[407,15],[326,23],[240,29],[56,37],[177,43],[386,50],[246,57],[219,65],[105,71],[248,79],[363,85],[347,93],[143,99]],
m:[473,347,46,92,258,237,241,58,59,63,113,182,240,477,219,218,85,87,89,216,94,247,104,115,201,332,263,156,496,497,451,507,416,148,86,244,523,525,138,207,164,249,19,57,70,127,291],
tr:[143,173,196,202,214,231,271,285,304,324,355,366,401,406,414,428,442,472]
},{//Ho-Oh
l:[[18,1],[311,1],[16,9],[413,15],[326,23],[241,29],[126,37],[221,43],[386,50],[246,57],[219,65],[105,71],[248,79],[363,85],[347,93],[143,99]],
m:[347,46,92,237,241,63,113,182,240,219,218,76,85,87,89,216,94,247,104,115,53,201,126,332,263,488,156,496,497,315,451,507,510,261,416,148,86,244,523,138,207,365,164,249,19,70],
tr:[143,173,202,214,257,304,324,355,366,414,428,442]
},{//Celebi
l:[[73,1],[93,1],[105,1],[215,1],[219,10],[345,19],[246,28],[226,37],[363,46],[377,55],[248,64],[361,73],[437,82],[195,91]],
m:[347,92,237,241,63,113,182,240,219,218,76,216,94,247,104,115,201,332,263,156,496,497,412,374,451,416,148,86,14,244,138,447,207,369,164,433,15],
tr:[173,202,214,215,235,253,270,271,277,285,324,387,388,402,414,428,446,472,478]
},{//Treecko
l:[[1,1],[43,1],[71,6],[98,11],[228,16],[103,21],[72,26],[97,31],[21,36],[197,41],[202,46],[412,51]],
m:[92,237,241,182,219,218,76,216,91,280,104,317,332,263,156,213,496,412,374,512,148,14,157,447,207,164,249,15,70],
e:[13,24,73,225,235,242,283,300,306,320,331,345,363,388,437],
t:[520],
tr:[9,67,173,202,214,231,235,283,388,402,409]
},{//Grovyle
l:[[1,1],[43,1],[71,1],[98,1],[71,6],[98,11],[210,16],[228,17],[103,23],[348,29],[97,35],[21,41],[197,47],[206,53],[437,59]],
m:[92,237,241,182,219,218,76,216,91,280,104,317,332,263,156,213,490,496,412,206,374,512,148,14,157,404,447,207,164,249,15,70],
t:[520],
tr:[9,67,173,202,214,231,235,283,388,402,409]
},{//Sceptile
l:[[1,1],[43,1],[71,1],[98,1],[400,1],[71,6],[98,11],[404,16],[228,17],[103,23],[348,29],[97,35],[21,43],[197,51],[206,59],[437,67]],
m:[468,337,46,92,237,241,63,182,219,218,76,89,216,91,280,104,317,332,263,156,213,490,496,411,412,206,374,512,416,148,14,523,157,404,447,207,164,249,15,70],
t:[338,520],
tr:[9,67,173,200,202,214,231,235,283,388,402,406,409]
},{//Torchic
l:[[10,1],[45,1],[116,7],[52,10],[64,16],[28,19],[83,25],[98,28],[163,34],[119,37],[53,43]],
m:[468,92,237,241,182,218,216,91,104,53,126,317,332,263,488,156,213,496,497,315,510,261,421,14,157,207,164,249,15,70],
e:[67,68,97,174,179,203,226,265,297,306,364,387,400,481],
t:[519],
tr:[67,173,214,257,270,340,387]
},{//Combusken
l:[[10,1],[45,1],[52,1],[116,1],[116,7],[52,13],[24,16],[64,17],[28,21],[339,28],[98,32],[163,39],[119,43],[327,50],[394,54]],
m:[468,92,339,237,241,182,218,216,91,280,104,53,126,317,332,263,488,156,213,490,496,497,315,411,374,510,261,421,14,157,526,398,207,164,249,15,70],
t:[519],
tr:[7,9,67,173,214,257,270,340,387,530]
},{//Blaziken
l:[[7,1],[10,1],[45,1],[52,1],[116,1],[136,1],[116,7],[52,13],[24,16],[64,17],[28,21],[339,28],[98,32],[299,36],[163,42],[413,49],[327,59],[394,66]],
m:[468,46,92,339,237,241,63,182,218,76,89,216,91,280,104,53,126,317,332,263,488,156,213,490,496,497,315,411,374,510,261,512,421,416,444,14,523,157,526,398,207,164,249,15,70],
t:[307,519],
tr:[7,9,67,173,214,257,270,272,276,282,340,387,530]
},{//Mudkip
l:[[33,1],[45,1],[189,6],[55,10],[117,15],[193,19],[300,24],[36,28],[250,33],[182,37],[56,42],[283,46]],
m:[92,258,237,58,59,182,240,218,216,91,104,482,317,263,156,213,496,497,503,157,207,164,249,57,70,127,291],
e:[23,38,44,68,124,174,243,246,250,253,281,287,301,419,426,469],
t:[518],
tr:[67,173,196,214,231,276,283,401,414]
},{//Marshtomp
l:[[33,1],[45,1],[55,1],[189,1],[189,6],[55,10],[117,15],[341,16],[193,20],[426,25],[36,31],[330,37],[182,42],[89,46],[283,53]],
m:[92,258,237,58,59,182,240,218,89,216,91,280,104,482,317,263,156,213,496,497,503,374,523,157,207,164,249,57,70,127,291],
t:[518],
tr:[8,67,173,196,214,231,276,283,401,414,446]
},{//Swampert
l:[[33,1],[45,1],[55,1],[189,1],[189,6],[55,10],[117,15],[341,16],[193,20],[426,25],[36,31],[330,39],[182,46],[89,52],[283,61],[359,69]],
m:[46,92,258,237,58,59,63,182,240,218,89,216,91,280,104,482,317,263,156,213,496,497,411,503,374,416,444,523,157,207,164,249,57,70,127,291],
t:[308,518],
tr:[8,67,173,196,200,214,231,276,283,401,414,446]
},{//Poochyena
l:[[33,1],[336,5],[28,9],[44,13],[316,17],[46,21],[207,25],[372,29],[184,33],[269,37],[373,41],[36,45],[389,49],[242,53]],
m:[46,92,237,241,269,182,240,218,216,91,247,104,259,263,156,213,168,496,510,373,371,514,207,164,249,555],
e:[43,214,281,289,305,310,343,382,389,422,423,424],
tr:[162,173,180,214,231,253,289,304,343,399,492],
s:[399,336,305]
},{//Mightyena
l:[[28,1],[33,1],[44,1],[336,1],[336,5],[28,9],[44,13],[316,17],[46,22],[207,27],[372,32],[184,37],[269,42],[373,47],[36,52],[168,57],[389,62]],
m:[46,92,237,241,269,63,182,240,218,216,91,247,104,259,263,156,213,168,496,510,373,371,514,416,207,164,249,555,70],
tr:[162,173,180,214,231,253,289,304,343,399,492]
},{//Zigzagoon
l:[[33,1],[45,1],[39,5],[29,9],[28,13],[316,17],[300,21],[42,25],[343,29],[516,33],[175,37],[156,41],[187,45],[374,49]],
m:[468,92,237,241,58,59,182,240,218,85,87,216,91,247,104,263,156,213,168,496,497,374,451,514,86,526,447,207,164,249,15,57],
e:[189,204,214,228,270,271,321,431,493],
tr:[162,173,196,214,231,270,271,304,343,387,402,441],
s:[387,33,271]
},{//Linoone
l:[[29,1],[33,1],[39,1],[45,1],[415,1],[39,5],[29,9],[28,13],[316,17],[300,23],[154,29],[343,35],[516,41],[163,47],[156,53],[187,59],[374,65]],
m:[468,46,92,237,241,58,59,63,182,240,218,85,87,216,91,247,104,263,156,213,168,496,497,374,451,421,514,416,86,526,447,207,164,249,15,57,70],
tr:[162,173,196,214,231,270,271,304,343,387,402,441]
},{//Wurmple
l:[[33,1],[81,1],[40,5],[450,15]],
tr:[173,450,527],
s:[450,40,173]
},{//Silcoon
l:[[106,1],[106,7]],
tr:[334,450,527]
},{//Beautifly
l:[[71,1],[71,10],[16,13],[78,17],[234,20],[72,24],[18,27],[213,31],[318,34],[202,38],[405,41],[483,45]],
m:[92,474,237,241,63,182,219,218,76,216,94,247,104,332,263,156,213,168,496,412,512,416,148,522,207,369,164],
tr:[173,202,214,324,355,366,450,527]
},{//Cascoon
l:[[106,1],[106,7]],
tr:[334,450,527]
},{//Dustox
l:[[93,1],[93,10],[16,13],[182,17],[236,20],[60,24],[18,27],[113,31],[318,34],[92,38],[405,41],[483,45]],
m:[92,474,237,241,63,113,182,218,76,216,94,247,104,188,332,263,156,213,168,496,412,512,416,148,522,207,369,164],
tr:[173,202,214,324,355,366,450,527]
},{//Lotad
l:[[310,1],[45,3],[71,5],[267,7],[54,11],[363,15],[72,19],[61,25],[428,31],[240,37],[412,45]],
m:[92,258,237,241,58,59,182,240,218,76,216,104,263,156,213,168,496,497,412,503,148,14,447,207,164,57],
e:[55,68,73,75,175,202,230,235,298,321],
tr:[173,196,202,214,235,253,402,428],
s:[71,73,352]
},{//Lombre
l:[[310,1],[45,3],[71,5],[267,7],[252,11],[154,15],[346,19],[61,25],[428,31],[253,37],[56,45]],
m:[468,92,258,237,241,58,59,182,240,218,76,216,280,104,263,156,213,168,496,497,412,503,374,148,14,447,207,164,249,57,70,127,291],
tr:[7,8,9,173,196,202,214,235,253,304,402,409,428]
},{//Ludicolo
l:[[45,1],[72,1],[267,1],[310,1]],
m:[468,92,258,237,241,58,59,63,182,240,218,76,216,280,104,263,156,213,168,496,497,411,412,503,374,416,148,14,447,207,164,249,57,70,127,291],
tr:[7,8,9,173,196,202,214,235,253,304,402,409,428]
},{//Seedot
l:[[117,1],[106,3],[74,7],[267,13],[235,21],[241,31],[153,43]],
m:[92,237,241,182,218,76,216,91,247,104,263,156,213,496,412,206,153,514,148,14,447,207,164,249],
e:[13,36,73,98,133,251,331,384,388,417,432,492],
tr:[173,180,202,214,235,388,402,492],
s:[331,492,74]
},{//Nuzleaf
l:[[1,1],[75,1],[106,3],[74,7],[267,13],[252,19],[259,25],[185,31],[13,37],[207,43],[326,49]],
m:[92,237,241,63,182,218,76,216,91,247,280,104,317,259,263,156,213,168,490,496,412,206,374,373,153,371,514,148,14,244,157,447,207,164,249,555,15,70],
tr:[67,173,180,202,214,235,388,399,402,492]
},{//Shiftry
l:[[18,1],[75,1],[185,1],[417,1],[536,19],[437,49]],
m:[92,237,241,63,182,218,76,216,91,247,280,104,317,332,259,263,156,213,168,490,496,411,412,206,374,373,153,371,514,416,148,14,244,157,404,447,207,164,249,555,15,70],
tr:[67,173,180,196,202,214,235,282,340,366,388,399,402,492]
},{//Taillow
l:[[45,1],[64,1],[116,4],[98,8],[17,13],[104,19],[283,26],[332,34],[97,43],[403,53]],
m:[92,237,241,182,240,218,216,104,332,263,156,213,168,496,497,526,207,365,369,164,19],
e:[18,48,99,119,143,211,228,287,355,413,432],
tr:[173,214,257,283,355,366],
s:[413,203,119,64,366]
},{//Swellow
l:[[45,1],[64,1],[98,1],[116,1],[365,1],[116,4],[98,8],[17,13],[104,19],[283,28],[332,38],[97,49],[403,61]],
m:[92,237,241,63,182,240,218,216,104,332,263,156,213,168,496,497,416,526,207,365,369,164,19],
tr:[143,173,214,257,283,355,366]
},{//Wingull
l:[[45,1],[55,1],[48,6],[17,11,9],[54,16,14],[352,19,17],[98,24,22],[355,29,26],[314,,33],[228,34,30],[97,37,38],[332,42],[403,47,46],[542,50,49]],
m:[92,258,237,58,59,182,240,218,216,104,332,263,156,213,168,496,497,503,207,365,369,164,19],
e:[16,54,97,239,282,346,355,362,392],
tr:[173,196,214,253,282,355,366],
s:[351,239,55]
},{//Pelipper
l:[[17,1,9],[45,1],[55,1],[346,1],[487,1],[48,6],[17,11],[54,16,14],[352,19,17],[371,24,22],[182,25],[355,31,28],[362,,34],[254,38,39],[255,38,39],[256,38,39],[374,43,46],[366,50,52],[56,57,58],[542,63]],
m:[92,258,237,58,59,63,182,240,218,216,104,332,263,156,213,168,496,497,503,374,507,371,416,207,365,369,164,19,57],
tr:[143,173,196,214,253,282,355,366,402,441]
},{//Ralts
l:[[45,1],[93,6],[104,10],[100,12],[381,17],[345,21],[505,23],[347,28],[94,32],[286,34],[248,39],[204,43],[95,45],[138,50],[500,54]],
m:[473,347,92,237,241,269,113,182,240,477,219,218,85,216,94,247,104,115,259,263,156,213,168,496,497,502,374,451,261,148,86,244,138,447,207,164,433],
e:[50,109,194,212,227,262,285,288,425,485],
tr:[7,8,9,173,196,214,220,270,271,277,278,285,289,304,324,428,472,478],
s:[93,194,270]
},{//Kirlia
l:[[45,1],[93,1],[100,1],[104,1],[93,6],[104,10],[100,12],[381,17],[345,22],[505,25],[347,31],[94,36],[286,39],[248,45],[204,50],[95,53],[138,59],[500,64]],
m:[473,347,92,237,241,269,113,182,240,477,219,218,85,216,94,247,104,115,259,263,156,213,168,496,497,502,374,451,261,148,86,244,138,447,207,164,433],
tr:[7,8,9,173,196,214,220,270,271,277,278,285,289,304,324,428,472,478]
},{//Gardevoir
l:[[45,1],[93,1],[100,1],[104,1],[361,1],[93,6],[104,10],[100,12],[273,17],[345,22],[505,25],[347,33],[94,40],[286,45],[248,53],[445,60],[95,65],[138,73],[500,80]],
m:[473,347,92,237,241,269,63,113,182,240,477,219,218,85,216,94,247,104,115,259,263,156,213,168,496,497,502,411,412,374,451,261,416,148,86,244,138,447,207,164,433],
tr:[7,8,9,173,196,214,215,220,270,271,277,278,285,289,304,324,428,472,478]
},{//Surskit
l:[[145,1],[98,7],[230,13],[346,19],[61,25],[97,31],[54,37],[114,37],[226,43]],
m:[92,237,241,58,59,182,240,218,76,216,247,104,263,156,213,168,496,503,148,522,244,207,164],
e:[56,60,170,193,203,324,341,450,453],
tr:[173,196,202,214,324,450],
s:[145,202,56]
},{//Masquerain
l:[[98,1],[145,1],[230,1],[346,1],[466,1],[98,7],[230,13],[346,19],[16,22],[184,26],[78,33],[318,40],[403,47],[18,54],[405,61],[483,68]],
m:[92,237,241,58,59,63,182,240,218,76,216,247,104,332,263,156,213,168,496,412,503,416,148,522,244,207,369,164],
tr:[173,196,202,214,324,355,366,450]
},{//Shroomish
l:[[71,1],[33,5],[78,9],[73,13],[72,17],[29,21],[77,25],[388,29],[74,33],[202,37],[402,41],[147,45]],
m:[92,474,237,241,182,219,218,76,216,104,188,263,156,213,496,412,206,148,14,447,207,164],
e:[204,264,270,313,331,358,363,388,402,409],
tr:[173,202,214,235,270,289,388,402,409],
s:[331,264,78]
},{//Breloom
l:[[33,1],[71,1],[73,1],[78,1],[33,5],[78,9],[73,13],[72,17],[29,21],[183,23],[68,25],[395,29],[327,33],[170,37],[402,41],[223,45]],
m:[92,339,474,237,241,63,182,219,218,76,216,280,104,188,317,263,156,213,490,496,411,412,206,374,514,416,148,444,14,157,526,447,207,164,249,15,70],
tr:[9,173,202,214,231,235,270,276,289,388,402,409]
},{//Slakoth
l:[[10,1],[281,1],[227,7],[303,13],[185,19],[133,25],[343,31],[498,37],[68,43],[175,49]],
m:[468,92,339,237,241,58,59,182,240,218,76,85,87,216,247,280,104,53,126,317,332,263,156,213,496,374,510,421,514,157,526,207,164,249,15,70],
e:[34,163,173,174,214,228,306,321,359,400,495],
tr:[7,8,9,173,196,214,343,441,495],
s:[400,389,281]
},{//Vigoroth
l:[[10,1],[116,1],[227,1],[253,1],[227,7],[253,13],[154,19],[203,25],[163,31],[68,37],[498,43],[264,49],[179,55]],
m:[468,46,92,339,237,241,269,58,59,182,240,218,76,85,87,89,216,247,280,104,53,126,317,332,263,156,213,490,496,411,374,510,421,514,523,157,526,207,164,249,15,70],
tr:[7,8,9,67,196,214,253,343,441,495]
},{//Slaking
l:[[10,1],[227,1],[281,1],[303,1],[227,7],[303,13],[185,19],[133,25],[343,31],[207,36],[498,37],[68,43],[175,49],[374,55],[386,61],[359,67]],
m:[468,46,92,339,237,241,269,58,59,63,182,240,218,76,479,85,87,89,216,247,280,104,53,126,317,332,263,156,213,490,496,411,374,510,511,421,514,416,523,157,526,207,164,249,15,70],
tr:[7,8,9,67,173,196,214,335,343,441,495]
},{//Nincada
l:[[10,1],[106,1],[141,5],[28,9],[154,14],[170,19],[206,25],[189,31],[232,38],[91,45]],
m:[468,92,237,241,182,218,76,216,91,247,104,201,332,263,156,496,206,148,522,404,207,164,15],
e:[16,185,203,318,400,405,450,515],
tr:[173,180,202,214,450],
s:[203,141,400]
},{//Ninjask
l:[[10,1],[28,1],[106,1],[141,1],[450,1],[141,5],[28,9],[154,14],[170,19],[103,20],[104,20],[210,20],[14,25],[163,31],[97,38],[226,45],[404,52]],
m:[468,92,237,241,63,182,218,76,216,91,247,104,201,332,263,156,213,168,496,206,416,148,14,522,404,207,369,164,15],
tr:[173,180,202,214,253,355,450]
},{//Shedinja
l:[[10,1],[106,1],[141,5],[28,9],[154,14],[170,19],[180,25],[109,31],[425,38],[288,45],[377,52],[247,59]],
m:[468,92,237,241,63,182,477,218,76,216,91,247,104,201,332,263,156,168,496,206,261,421,416,148,522,404,138,207,164,15],
tr:[173,180,202,214,271,450]
},{//Whismur
l:[[1,1],[253,5],[310,11],[336,15],[48,21],[23,25],[103,31],[46,35],[485,41],[156,45],[214,45],[304,51]],
m:[46,92,237,241,58,59,182,240,218,76,216,247,104,53,126,263,156,213,496,497,374,510,514,526,207,164],
e:[36,108,173,265,283,313,326,359,509],
tr:[7,8,9,173,196,214,253,283,304,428],
s:[283,253,428]
},{//Loudred
l:[[1,1],[253,1],[310,1],[336,1],[253,5],[310,11],[336,15],[44,20],[48,23],[23,29],[103,37],[46,43],[485,51],[156,57],[214,57],[304,65]],
m:[46,92,237,241,269,58,59,182,240,218,76,479,89,216,247,280,104,53,126,317,259,263,156,213,496,497,315,374,510,514,523,157,526,207,164,249,70],
tr:[7,8,9,67,173,196,214,253,283,304,428]
},{//Exploud
l:[[1,1],[253,1],[310,1],[336,1],[422,1],[423,1],[424,1],[253,5],[310,11],[336,15],[44,20],[48,23],[23,29],[103,37],[242,40],[46,45],[156,55],[485,55],[214,63],[304,71],[63,79]],
m:[46,92,237,241,269,58,59,63,182,240,218,76,479,89,216,247,280,104,53,126,317,259,263,156,213,496,497,315,411,374,510,514,416,523,157,526,207,164,249,57,70],
tr:[7,8,9,67,173,196,200,214,253,283,304,428]
},{//Makuhita
l:[[33,1],[116,1],[28,4],[292,7],[233,10],[252,13],[18,16],[282,19],[265,22],[187,25],[395,28],[69,31],[358,34],[203,37],[370,40],[179,43],[484,46]],
m:[92,339,237,241,182,240,218,479,89,216,91,280,104,317,263,156,213,490,496,411,374,514,523,157,526,398,207,164,249,57,70],
e:[68,185,193,197,223,238,264,270,279,358,364,418,469,498],
tr:[7,8,9,67,173,214,270,272,276,282],
s:[292,270,8]
},{//Hariyama
l:[[28,1],[33,1],[116,1],[292,1],[362,1],[28,4],[292,7],[233,10],[252,13],[18,16],[282,19],[265,22],[187,27],[395,32],[69,37],[358,42],[203,47],[370,52],[179,57],[484,62]],
m:[92,339,237,241,63,182,240,218,479,89,216,91,280,104,317,263,156,213,490,496,411,374,371,514,416,444,523,157,526,398,207,164,249,57,70],
tr:[7,8,9,67,173,214,270,272,276,282,442]
},{//Azurill
l:[[150,1],[204,2,10],[346,,5],[39,7,2],[145,10,1],[61,,13],[21,15,20],[270,,16],[55,18,7],[340,,23]],
m:[92,258,237,58,59,113,182,240,218,216,104,263,156,213,496,503,526,207,164,57,127],
e:[21,34,47,227,287,313,321,330,346,487],
tr:[173,196,214,231,253,270,282,304,340,343]
},{//Nosepass
l:[[33,1],[106,7,4],[88,13,11],[350,,18],[335,19,8],[86,25,15],[209,,25],[157,31,29],[201,37,36],[156,43,22],[408,49,32],[435,55,39],[444,61,46],[192,67,50],[199,73,50],[414,79,43]],
m:[92,237,241,269,182,218,479,85,87,89,216,104,201,317,259,263,156,213,496,153,397,444,521,86,523,157,207,164,249,70],
e:[38,203,205,222,335,446],
tr:[7,8,9,173,214,220,277,334,335,356,393,414,446],
s:[246,446,33]
},{//Skitty
l:[[33,1],[39,1],[45,1],[252,1],[193,4],[213,8],[47,11],[3,15],[383,18],[274,22],[204,25],[185,29],[358,32],[343,36],[215,39],[38,42],[445,46]],
m:[347,92,237,241,58,59,182,240,219,218,76,85,87,216,91,247,104,263,156,213,496,497,451,371,514,148,86,244,526,138,447,207,164,528],
e:[226,252,253,270,273,313,321,387,389,426,428,445,493],
tr:[173,196,214,215,231,253,270,304,343,387,428],
s:[445,193,321]
},{//Delcatty
l:[[3,1],[47,1],[213,1],[252,1]],
m:[347,92,237,241,58,59,63,182,240,219,218,76,85,87,216,91,247,104,263,156,213,496,497,451,371,514,416,148,86,244,526,138,447,207,164,528,249,70],
tr:[173,196,214,215,231,253,270,304,343,387,428]
},{//Sableye
l:[[10,1],[43,1],[193,4],[101,8],[310,11],[154,15],[252,18],[197,22],[425,25],[282,29],[185,32],[386,36],[421,39],[408,43],[109,46],[492,50],[428,53],[247,57],[212,60]],
m:[468,347,92,237,241,269,182,240,477,218,216,91,94,247,280,104,317,332,259,263,156,213,168,490,496,374,510,261,373,421,371,514,148,244,398,138,207,164,249,555,15],
e:[105,212,236,260,271,364,368,389,417,445],
tr:[7,8,9,67,173,180,196,214,271,272,277,282,289,324,356,399,428,472,492],
s:[193,180,389]
},{//Mawile
l:[[310,1],[313,6],[44,11],[230,16],[11,21],[185,26],[226,31],[242,36],[334,41],[389,46],[254,51],[255,51],[256,51],[442,56]],
m:[92,237,241,269,58,63,182,240,218,76,216,247,280,104,53,188,201,126,317,259,263,156,213,496,411,206,374,451,510,373,371,416,444,14,244,157,447,207,164,430,249,70],
e:[21,246,305,321,368,385,386,389,422,423,424,445],
tr:[8,9,162,173,196,214,220,282,289,334,387,393,399,442,446,492],
s:[313,424,8]
},{//Aron
l:[[33,1],[106,4,1],[189,8,4],[29,11,8],[232,15,11],[334,18,15],[46,22,18],[36,25,22],[442,29,25],[182,32,29],[319,36,32],[231,39,36],[475,43,39],[484,46,43],[38,50,46],[368,53,50]],
m:[468,46,92,237,241,182,240,218,89,216,91,104,201,317,332,263,156,213,496,421,397,523,157,207,164,249,15,70],
e:[23,34,103,174,265,276,283,407,442,446,457],
tr:[173,180,214,231,253,276,283,334,393,414,442,446],
s:[283,106,457]
},{//Lairon
l:[[29,1,8],[33,1],[106,1],[189,1,4],[106,4],[189,8],[29,11],[232,15,11],[334,18,15],[46,22,18],[36,25,22],[442,29,25],[182,34,29],[319,40,34],[231,45,40],[475,51,45],[484,56,51],[38,62,56],[368,67,62]],
m:[468,46,92,237,241,182,240,218,89,216,91,104,201,317,332,263,156,213,496,421,397,444,523,157,207,164,249,15,70],
tr:[173,180,214,231,253,276,283,334,393,414,442,446]
},{//Aggron
l:[[29,1,8],[33,1],[106,1],[189,1,4],[106,4],[189,8],[29,11],[232,15,11],[334,18,15],[46,22,18],[36,25,22],[442,29,25],[182,34,29],[319,40,34],[231,48,40],[475,57,48],[484,65,57],[38,74,65],[368,82,74]],
m:[468,337,46,92,237,241,269,58,59,63,182,240,218,76,479,85,87,89,216,91,280,104,53,201,126,317,332,263,156,213,496,411,374,510,421,371,416,397,444,86,523,157,525,207,164,430,249,15,57,70],
tr:[7,8,9,67,173,180,196,200,214,231,253,276,283,334,335,393,399,401,406,414,442,446]
},{//Meditite
l:[[117,1],[96,4],[93,8],[197,11],[237,15],[170,18],[364,22],[347,25],[395,29],[136,32],[244,36],[367,39],[379,43],[179,46],[105,50]],
m:[473,347,92,339,237,241,113,182,240,477,218,216,94,247,280,104,115,317,263,156,213,490,496,411,374,514,148,244,157,526,398,138,447,207,164,249,70],
e:[7,8,9,193,223,226,252,290,384,385,409,418,427],
tr:[7,8,9,67,173,214,220,270,271,272,277,278,324,356,409,428],
s:[409,203,96]
},{//Medicham
l:[[7,1],[8,1],[9,1],[93,1],[96,1],[117,1],[197,1],[96,4],[93,8],[197,11],[237,15],[170,18],[364,22],[347,25],[395,29],[136,32],[244,36],[367,42],[379,49],[179,55],[105,62]],
m:[473,347,92,339,237,241,63,113,182,240,477,218,216,94,247,280,104,115,317,263,156,213,490,496,411,412,374,514,416,148,244,157,526,398,138,447,207,164,249,70],
tr:[7,8,9,67,173,214,220,270,271,272,277,278,324,356,409,428]
},{//Electrike
l:[[33,1],[86,4],[43,9],[336,12],[98,17],[209,20],[316,25],[44,28],[422,33],[46,36],[435,41],[268,44],[528,49],[87,52]],
m:[46,92,237,113,182,240,218,85,87,216,104,53,263,156,213,168,496,451,148,521,86,207,164,528,555,70],
e:[29,129,174,242,253,351,415,422,423,424,435,481,486],
tr:[173,214,231,253,324,393],
s:[423,324,86]
},{//Manectric
l:[[33,1],[43,1],[86,1],[336,1],[424,1],[86,4],[43,9],[336,12],[98,17],[209,20],[316,25],[44,30],[422,37],[46,42],[435,49],[268,54],[528,61],[87,66]],
m:[46,92,237,63,113,182,240,218,85,87,216,104,53,263,156,213,168,496,315,451,416,148,521,86,207,164,528,555,70],
tr:[173,214,231,253,324,393]
},{//Plusle
l:[[45,1],[86,3],[98,7],[270,10],[209,15],[227,17],[313,21],[383,24],[486,29],[129,31],[313,35],[268,38],[87,42],[226,44],[97,48],[387,51],[417,56],[494,63]],
m:[92,237,113,182,240,218,85,87,216,104,263,156,213,496,497,374,451,148,521,86,447,207,164,528],
e:[47,186,273,381,435],
tr:[9,173,214,231,253,270,324,387,393],
s:[435,324,86]
},{//Minun
l:[[45,1],[86,3],[98,7],[270,10],[209,15],[227,17],[204,21],[383,24],[486,29],[129,31],[313,35],[268,38],[87,42],[226,44],[97,48],[376,51],[417,56],[494,63]],
m:[92,237,113,182,240,218,85,87,216,104,263,156,213,496,497,374,451,148,521,86,447,207,164,528],
e:[47,186,273,381,435],
tr:[9,173,214,231,253,270,324,387,393],
s:[435,324,86]
},{//Volbeat
l:[[33,1],[148,1],[104,5],[109,9],[236,13],[98,17],[294,21],[324,25],[182,29],[270,33],[428,37],[405,41],[38,45]],
m:[92,237,241,113,182,240,218,76,85,87,216,247,280,104,332,263,156,213,168,496,374,451,512,148,86,522,244,207,369,164],
e:[69,146,226,227,271,318,405],
tr:[8,9,173,202,214,270,271,324,355,366,428,450],
s:[148,366,271]
},{//Illumise
l:[[33,1],[230,5],[204,9],[236,13],[98,17],[273,21],[227,25],[260,29],[270,33],[428,37],[405,41],[343,45]],
m:[92,237,241,113,182,240,218,76,85,87,216,247,280,104,332,263,156,213,168,496,374,451,512,148,86,522,244,207,369,164],
e:[74,109,226,227,313,318,405,445],
tr:[8,9,173,202,214,270,343,355,366,428,450],
s:[204,313,366]
},{//Roselia
l:[[71,1],[74,4],[40,7],[78,10],[72,13],[73,16],[345,19],[320,22],[202,25],[390,28],[230,31],[275,34],[92,37,40],[80,40,37],[312,43],[235,46]],
m:[92,474,237,241,182,240,218,76,216,247,104,188,263,156,213,496,412,148,14,244,398,447,207,164,15],
e:[42,75,79,170,178,191,202,235,320,363,402,437],
tr:[173,202,214,235,343,388,402],
s:[74,79,129]
},{//Gulpin
l:[[1,1],[281,6],[139,9],[124,14],[133,17],[227,23],[92,28],[491,34],[254,39],[255,39],[256,39],[188,44],[380,49],[378,54],[441,59]],
m:[92,474,237,241,58,182,240,218,76,216,247,104,482,188,263,156,213,496,153,138,207,164,249,70],
e:[123,151,174,189,194,220,441],
tr:[7,8,9,173,202,214,220,289,380,402,441],
s:[151,202,139]
},{//Swalot
l:[[1,1],[124,1],[139,1],[281,1],[281,6],[139,9],[124,14],[133,17],[227,23],[34,26],[92,30],[491,38],[254,45],[255,45],[256,45],[188,52],[380,59],[378,66],[441,73]],
m:[92,474,237,241,58,63,182,240,218,76,89,216,247,104,482,188,263,156,213,496,153,416,523,138,207,164,249,70],
tr:[7,8,9,173,202,214,220,289,335,380,402,441]
},{//Carvanha
l:[[43,1],[44,1],[99,6],[116,8],[184,11],[423,16],[103,18],[207,21],[372,26],[242,28],[453,31],[97,36],[36,38]],
m:[92,258,237,269,58,59,182,240,218,216,104,259,263,156,213,168,496,503,371,514,207,164,555,57,127,291],
e:[37,38,56,129,246,362],
tr:[162,173,180,196,214,253,340,399,428],
s:[44,399,37]
},{//Sharpedo
l:[[43,1],[44,1],[99,1],[116,1],[364,1],[99,6],[116,8],[184,11],[423,16],[103,18],[207,21],[372,26],[242,28],[163,30],[453,34],[269,40],[97,45],[130,50],[400,56]],
m:[46,92,258,237,269,58,59,63,182,240,218,89,216,104,317,259,263,156,213,168,496,503,371,514,416,523,398,207,164,249,555,57,70,127,291],
tr:[162,173,180,196,214,253,340,399,428]
},{//Wailmer
l:[[150,1],[45,4],[55,7],[205,11],[250,14],[310,17],[352,21],[54,24],[156,27],[362,31],[323,34],[133,37],[291,41],[340,44],[56,47],[484,50]],
m:[46,92,258,237,58,59,182,240,218,89,216,104,317,263,156,213,496,497,503,523,207,164,249,57,70,127,291],
e:[34,37,38,90,111,173,174,214,321,392,428,487],
tr:[173,196,214,304,340,428],
s:[340,214,55]
},{//Wailord
l:[[45,1],[55,1],[150,1],[205,1],[45,4],[55,7],[205,11],[250,14],[310,17],[352,21],[54,24],[156,27],[362,31],[323,34],[133,37],[291,46],[340,54],[56,62],[484,70]],
m:[46,92,258,237,58,59,63,182,240,218,89,216,104,317,263,156,213,496,497,503,416,523,207,164,249,57,70,127,291],
tr:[173,196,214,304,335,340,428,442]
},{//Numel
l:[[33,1],[45,1],[52,5],[222,11,8],[116,15,12],[481,21,15],[36,25,31],[174,,29],[133,31,19],[436,35,22],[281,,36],[414,41,26],[89,45,40],[53,51,43],[38,55,47]],
m:[92,237,241,182,218,89,216,91,104,53,201,126,317,263,488,156,213,496,497,315,510,261,523,157,207,164,249,70],
e:[23,34,111,184,203,205,246,254,255,256,257,281,336,426,442],
tr:[173,214,257,414,442,446,495],
s:[34,52,257]
},{//Camerupt
l:[[33,1],[45,1],[52,1,5],[222,1,8],[52,5],[222,11],[116,15,12],[481,21,15],[36,25,31],[174,,29],[133,31,19],[436,33,22],[157,39,33],[281,,39],[414,49,26],[89,57,46],[284,67,52],[90,75,59]],
m:[46,92,237,241,63,182,218,76,89,216,91,104,53,201,126,317,263,488,156,213,496,497,315,510,261,153,416,397,444,523,157,207,164,430,249,70],
tr:[173,214,257,414,442,446,495]
},{//Torkoal
l:[[52,1],[123,4],[110,7],[174,12],[83,17],[108,20],[229,23],[53,28],[34,33],[182,36],[436,39],[334,44],[133,49],[175,52],[257,55],[517,60],[504,65]],
m:[92,237,241,63,182,218,76,89,216,104,53,188,126,317,263,488,156,213,496,315,510,261,153,416,444,360,523,157,207,164,249,70],
e:[90,130,203,214,281,284,481,499],
tr:[173,214,231,257,334,414,446,495],
s:[52,90,446]
},{//Spoink
l:[[150,1],[149,7],[316,10],[60,14],[244,15],[109,18],[277,21],[428,26],[156,29],[173,29],[473,34,38],[371,41,40],[94,46,44],[408,48,33],[340,53,50]],
m:[473,347,92,237,241,269,113,182,240,477,218,216,94,247,104,115,259,263,156,213,168,496,451,371,148,86,244,138,447,207,164,433],
e:[18,133,203,243,248,271,285,326,381,428],
tr:[173,196,214,215,231,271,272,277,278,285,289,324,340,343,428],
s:[149,278,285]
},{//Grumpig
l:[[60,1,14],[149,1,7],[150,1],[316,1,10],[149,7],[316,10],[60,14],[244,15],[109,18],[277,21],[428,26],[156,29],[173,29],[473,37,42],[371,47,46],[94,55,52],[408,60,35],[340,68,60]],
m:[473,347,92,237,241,269,63,113,182,240,477,218,216,94,247,280,104,115,259,263,156,213,168,496,411,412,374,451,371,416,148,86,244,523,138,447,207,164,433],
tr:[7,8,9,173,196,214,215,231,271,272,277,278,285,289,324,340,343,409,428]
},{//Spinda
l:[[33,1],[253,5],[383,10],[185,14],[60,19],[95,23],[146,28],[389,32],[298,37],[244,41],[38,46],[175,50],[37,55]],
m:[347,92,237,241,182,240,219,218,216,91,94,247,280,104,317,263,156,213,168,496,374,514,148,244,157,526,138,207,164,433,528,249,70],
e:[50,196,226,227,229,252,265,271,272,273,274,313,352,427],
tr:[7,8,9,67,173,196,214,253,270,271,272,278,285,289,304,343,387,409,428],
s:[383,252,276]
},{//Trapinch
l:[[44,1],[28,9,4],[189,,13],[185,17,7],[117,,17],[523,,21],[328,25,10],[157,,25],[242,33,34],[91,41,29],[201,49,44],[63,57,49],[414,65,39],[276,,67],[89,73,55],[364,81,61],[90,89,73]],
m:[92,237,241,63,182,218,76,89,216,91,104,201,317,263,156,213,496,522,523,157,207,164,249,70],
e:[16,98,116,175,203,210,324,341,414,450],
tr:[173,202,214,276,324,414,450],
s:[44,202,324]
},{//Vibrava
l:[[28,1,4],[49,1],[185,1,7],[328,1,10],[28,9],[189,,13],[185,17],[117,,17],[523,,21],[328,25],[157,,25],[48,33,29],[225,35],[414,,39],[103,41,34],[201,49,44],[63,57,49]],
m:[92,237,241,63,182,218,76,89,216,91,104,201,317,263,156,213,496,522,523,157,207,369,164,249,19,70],
t:[434],
tr:[173,200,202,214,257,276,324,355,366,406,414,450]
},{//Flygon
l:[[28,1,4],[49,1],[185,1,7],[328,1,10],[28,9],[189,,13],[185,17],[117,,17],[523,,21],[328,25],[157,,25],[48,33,29],[225,35],[414,,39],[103,41,34],[337,45,55],[201,49,44],[63,57,49],[525,65,45]],
m:[468,337,92,237,241,63,182,218,76,89,216,91,104,53,201,126,317,332,263,156,213,496,510,416,444,522,523,157,525,207,369,164,249,19,70],
t:[434],
tr:[7,9,173,200,202,214,231,257,276,324,355,366,406,414,450]
},{//Cacnea
l:[[40,1],[43,1],[71,5],[74,9],[73,13],[28,17],[42,21],[275,25],[185,29],[191,33],[389,37],[371,41],[302,45],[178,49],[201,53],[194,57]],
m:[92,474,237,241,182,218,76,216,280,104,201,263,156,213,496,412,374,371,148,14,398,447,207,164,15],
e:[50,51,67,68,223,265,298,320,335,345,388,402,415,417],
tr:[9,67,173,180,202,214,235,272,335,388,399,402,409],
s:[71,298,9]
},{//Cacturne
l:[[40,1],[43,1],[71,1],[74,1],[279,1],[71,5],[74,9],[73,13],[28,17],[42,21],[275,25],[185,29],[191,35],[389,41],[371,47],[302,53],[178,59],[201,65],[194,71]],
m:[92,474,237,241,63,182,218,76,216,280,104,201,263,156,213,496,411,412,374,373,371,514,416,148,14,398,447,207,164,15,70],
tr:[9,67,173,180,202,214,235,272,276,335,388,399,402,409,492]
},{//Swablu
l:[[45,1],[64,1],[310,5,4],[47,9,8],[31,13,10],[219,18,13],[496,,18],[54,23,15],[36,28,25],[363,32,21],[119,36,34],[538,40,39],[287,45,29],[406,50,42],[195,55,48]],
m:[92,237,241,58,182,240,219,218,76,216,104,332,263,156,213,168,496,497,244,138,207,365,164,19],
e:[97,99,114,211,228,297,304,355,384,407],
tr:[173,200,214,215,253,257,304,355,366,406],
s:[297,64,355]
},{//Altaria
l:[[45,1],[47,1,8],[64,1],[310,1,4],[365,1],[310,5],[47,9],[31,13,10],[219,18,13],[496,,18],[54,23,15],[36,28,25],[363,32,21],[225,35],[349,39,34],[538,46,42],[287,54,29],[406,62,48],[195,70,57],[143,77,64]],
m:[468,337,46,92,237,241,58,63,182,240,219,218,76,89,216,104,53,126,332,263,156,213,168,496,497,510,416,244,523,138,207,365,164,249,19],
t:[434],
tr:[143,173,200,214,215,231,253,257,304,355,366,406,472]
},{//Zangoose
l:[[10,1],[43,1],[98,5],[14,9,43],[210,14,8],[163,18,15],[228,22,12],[279,,26],[373,27,19],[306,31,22],[269,35,40],[197,40,33],[206,44,29],[404,48,36],[370,53,47]],
m:[468,46,92,237,241,269,58,59,182,240,218,76,85,87,216,91,247,280,104,53,126,317,332,263,156,213,168,496,411,206,374,510,373,421,371,514,14,157,404,526,398,207,164,249,70],
e:[13,24,50,68,154,174,175,231,232,364,400,458,515],
tr:[7,8,9,67,173,196,202,214,231,282,283,387],
s:[458,67,98]
},{//Seviper
l:[[35,1],[122,7,1],[44,10,5],[342,16,12],[103,19,16],[137,25,23],[242,28,45],[305,34,27],[380,,34],[207,37,9],[114,43,38],[400,46,31],[398,52,42],[474,55,20],[378,61,53],[489,64,49]],
m:[92,474,237,241,269,182,240,218,89,216,91,104,482,53,188,263,156,213,168,496,371,514,523,404,525,398,207,164,249,70],
e:[34,184,231,254,255,256,372,378,386,400,415,515],
tr:[20,173,202,214,231,282,289,380,399,401],
s:[401,44,34]
},{//Lunatone
l:[[33,1],[93,1],[106,1],[88,9,5],[95,12,9],[397,20,13],[149,23,17],[157,,25],[373,31,21],[322,34,29],[444,,41],[377,42,37],[94,45,33],[248,53,45],[153,56,49],[478,64,53]],
m:[473,347,92,237,58,59,63,113,182,240,477,219,218,479,89,216,94,247,104,115,201,317,263,156,496,451,512,373,153,416,397,148,444,360,244,523,157,138,447,207,164,433],
tr:[173,196,214,220,270,277,278,285,324,356,414,428,442,446,478],
s:[93,414,236]
},{//Solrock
l:[[33,1],[93,1],[106,1],[88,9,5],[83,12,9],[397,20,13],[149,23,17],[373,31,21],[94,,33],[322,34,29],[444,,41],[377,42,37],[157,45,25],[76,53,45],[153,56,49],[472,64,53]],
m:[473,347,92,237,241,63,113,182,477,219,218,76,479,89,216,94,247,104,115,53,201,126,317,263,156,496,315,451,510,261,512,373,153,416,397,148,444,360,244,523,157,138,447,207,164,433],
tr:[173,214,220,257,270,277,278,285,324,334,356,414,428,442,446,472],
s:[93,234,428]
},{//Barboach
l:[[189,1],[300,6],[346,6],[55,10],[426,14],[133,18],[352,22],[222,26],[156,31],[173,31],[401,35],[89,39],[248,43],[90,47]],
m:[92,258,237,58,59,182,240,218,89,216,104,201,317,263,156,213,496,503,523,207,164,57,127,291],
e:[36,37,56,175,209,250,330,341,349,414],
tr:[173,196,214,340,401,414],
s:[189,214,209]
},{//Whiscash
l:[[189,1],[300,1],[321,1],[346,1],[428,1],[300,6],[346,6],[55,10],[426,14],[133,18],[352,22],[222,26],[156,33],[173,33],[401,39],[89,45],[248,51],[90,57]],
m:[92,258,237,58,59,63,182,240,218,89,216,104,201,317,263,156,213,496,503,416,444,523,157,207,164,249,57,70,127,291],
tr:[173,196,214,340,401,414,428]
},{//Corphish
l:[[145,1],[106,7],[11,10],[43,13],[61,20],[182,23],[282,26],[269,32],[400,35],[152,38],[14,44],[242,47],[12,53]],
m:[468,92,258,237,269,58,59,182,240,218,216,91,280,104,188,317,332,263,156,213,496,206,503,374,371,14,157,404,207,164,249,15,57,70,127],
e:[34,38,232,246,276,282,283,300,349,376,498],
tr:[173,180,196,214,276,282,283,334],
s:[283,106,232]
},{//Crawdaunt
l:[[11,1],[43,1],[106,1],[145,1],[106,7],[11,10],[43,13],[61,20],[182,23],[282,26],[129,30],[269,34],[400,39],[152,44],[14,52],[242,57],[12,65]],
m:[468,92,258,237,269,58,59,63,182,240,218,216,91,280,104,482,188,317,332,263,156,213,496,206,503,374,371,514,416,14,157,404,207,164,249,555,15,57,70,127,291],
tr:[173,180,196,214,276,282,283,334,399]
},{//Baltoy
l:[[93,1],[106,4,1],[229,7,4],[189,11,7],[60,15,13],[317,18,10],[120,21,25],[246,26,21],[379,31,17],[201,34,41],[322,37,31],[326,43,28],[470,48,34],[471,48,34],[414,51,37],[377,54,45],[153,60,49]],
m:[473,347,92,237,241,58,113,182,240,477,219,218,76,479,89,216,91,94,247,104,115,201,317,263,156,496,502,451,153,397,148,360,244,523,157,138,447,207,164,433],
tr:[173,214,271,277,278,285,324,356,414,428,446,472,529],
s:[356,229,428]
},{//Claydol
l:[[93,1],[100,1],[106,1],[229,1,4],[106,4],[229,7],[189,11,7],[60,15,13],[317,18,10],[120,21,25],[246,26,21],[379,31,17],[201,34,47],[63,36],[326,39,28],[322,47,31],[470,54,34],[471,54,34],[414,59,40],[377,64,54],[153,72,61]],
m:[473,347,92,237,241,58,63,113,182,240,477,219,218,76,479,89,216,91,94,247,104,115,201,317,263,156,496,502,451,153,416,397,148,444,360,244,523,157,138,447,207,164,433,249,70],
tr:[173,214,271,277,278,285,324,356,414,428,446,472,529]
},{//Lileep
l:[[132,1],[310,1],[51,8],[275,15],[109,22],[133,29],[380,36],[246,43],[412,50],[254,57],[255,57],[256,57],[378,64]],
m:[92,237,241,182,218,76,479,216,104,188,201,317,263,156,213,496,412,397,148,14,157,447,207,164],
e:[72,105,112,174,203,243,321,378,446],
tr:[20,173,202,214,220,235,380,388,402,414,446],
s:[51,202,243]
},{//Cradily
l:[[51,1],[132,1],[275,1],[310,1],[51,8],[275,15],[109,22],[133,29],[246,36],[380,46],[412,56],[254,66],[255,66],[256,66],[378,76]],
m:[92,237,241,63,182,218,76,479,89,216,104,482,188,201,317,263,156,213,496,412,416,397,148,444,14,523,157,447,207,164,249,70],
tr:[20,173,202,214,220,235,335,380,388,402,414,446]
},{//Anorith
l:[[10,1],[106,1],[300,7],[55,13],[232,19],[182,25],[246,31],[210,37],[163,43],[350,49],[306,55],[404,61]],
m:[468,92,237,241,182,218,479,216,91,280,104,201,317,332,263,156,213,496,206,397,14,522,157,404,207,164,249,15],
e:[28,103,174,229,282,334,352,440],
tr:[173,214,282,334,414,446,450],
s:[440,10,446]
},{//Armaldo
l:[[10,1],[55,1],[106,1],[300,1],[300,7],[55,13],[232,19],[182,25],[246,31],[210,37],[163,46],[350,55],[306,67],[404,73]],
m:[468,92,237,241,63,182,218,479,89,216,91,280,104,201,317,332,263,156,213,496,206,416,397,444,14,522,523,157,404,207,164,430,249,15,70],
tr:[67,173,214,231,276,282,334,335,401,414,446,450]
},{//Feebas
l:[[150,1],[33,15],[175,30]],
m:[92,258,237,58,59,113,182,240,218,216,104,263,156,213,496,503,207,164,57,127,291],
e:[54,95,109,114,225,231,243,300,321,362,406,445],
tr:[173,196,214,231,406],
s:[445,243,150]
},{//Milotic
l:[[35,1],[55,1],[346,5],[287,9],[352,13],[239,17],[105,21],[445,25],[401,29],[240,33],[56,37],[213,41],[219,45],[392,49]],
m:[92,258,237,58,59,63,113,182,240,219,218,216,104,263,156,213,496,503,416,244,523,525,207,164,57,127,291],
tr:[20,173,196,214,231,277,401,406,442]
},{//Castform
l:[[33,1],[52,10],[55,10],[181,10],[29,20,15],[240,30,20],[241,30,20],[258,30,20],[311,40,30],[56,50,40],[59,50,40],[126,50,40]],
m:[92,258,237,241,58,59,182,240,218,76,85,87,216,247,104,53,201,126,263,156,213,168,496,412,503,510,514,148,86,244,526,207,164],
e:[50,133,248,381,466,499,506],
tr:[173,196,214,366,387],
s:[52,466,352]
},{//Kecleon
l:[[10,1],[39,1],[122,1],[168,1],[310,1],[20,4],[185,7],[154,10],[364,14],[60,18],[425,22],[163,27],[103,32],[164,37],[389,43],[421,49],[246,55],[485,58]],
m:[468,92,237,241,58,59,182,240,218,76,85,87,216,91,247,280,104,53,126,317,332,263,156,213,168,496,374,451,510,421,514,148,86,244,157,526,447,207,164,433,249,15,70],
e:[50,105,146,252,271,277,285,289,417,492],
tr:[7,8,9,20,67,173,196,214,231,271,272,277,278,282,285,289,387,401,409,446,472,492,495],
s:[185,513,285]
},{//Shuppet
l:[[282,1],[103,5,4],[101,8,7],[174,13,19],[180,16,10],[425,20,16],[261,23,13],[185,28,22],[506,31,26],[247,35,30],[389,38,34],[373,43,38],[289,46,42],[288,50,46],[271,55,50]],
m:[347,92,237,241,269,182,240,477,218,85,87,216,94,247,104,259,263,156,213,168,496,451,261,373,371,148,86,244,138,207,164,433],
e:[50,109,193,194,228,286,310,425,441,466],
tr:[180,196,214,220,271,272,277,282,285,289,399,478,492],
s:[194,101,220]
},{//Banette
l:[[101,1,7],[103,1,4],[174,1,19],[282,1],[103,5],[101,8],[174,13],[180,16,10],[425,20,16],[261,23,13],[185,28,22],[506,31,26],[247,35,30],[389,42,34],[373,51,40],[289,58,46],[288,66,52],[271,75,58]],
m:[347,92,237,241,269,63,182,240,477,218,85,87,216,94,247,104,259,263,156,213,168,496,374,451,261,373,421,371,416,148,86,244,138,207,164,433],
tr:[180,196,214,220,271,272,277,282,285,289,399,478,492]
},{//Duskull
l:[[43,1],[101,1],[50,6],[193,9],[310,14],[109,17],[425,22],[228,25],[174,30],[261,33],[506,38],[212,41],[371,46],[248,49]],
m:[347,92,237,241,269,58,59,182,240,477,218,216,94,247,104,259,263,156,213,168,496,374,451,261,373,371,148,244,138,207,164,433],
e:[185,194,220,262,285,286,288,399,466],
tr:[173,180,196,214,220,271,285,289,356,399,472],
s:[50,220,271]
},{//Dusclops
l:[[7,1],[8,1],[9,1],[20,1],[43,1],[50,1],[101,1],[356,1],[50,6],[193,9],[310,14],[109,17],[425,22],[228,25],[174,30],[261,33],[325,37],[506,42],[212,49],[371,58],[248,61]],
m:[347,92,237,241,269,58,59,63,182,240,477,218,89,216,94,247,280,104,317,259,263,156,213,168,496,374,451,261,373,371,416,148,244,523,157,138,207,164,433,249,70],
tr:[7,8,9,20,173,180,196,214,220,271,285,289,356,399,472]
},{//Tropius
l:[[16,1],[43,1],[74,7],[75,11],[23,17],[230,21],[18,27],[345,31],[34,37],[235,41],[536,47],[403,51],[516,57],[76,61],[363,67],[437,71]],
m:[46,92,237,241,63,182,219,218,76,89,216,104,332,263,156,213,496,412,416,148,14,523,447,207,164,249,15,19,70],
e:[13,21,29,73,174,235,267,331,348,349,363,437],
tr:[173,200,202,214,235,355,366,388,402,406],
s:[16,73,318]
},{//Chimecho
l:[[35,1],[45,6],[310,9],[93,14],[253,17],[36,22],[281,25],[149,30],[38,33],[215,38],[219,41],[326,46],[505,49],[485,54],[361,57]],
m:[473,347,92,237,241,269,113,182,240,477,219,218,216,94,247,104,115,259,263,156,213,496,497,412,451,148,86,244,138,447,207,164,433],
e:[50,95,174,248,273,285,500],
tr:[20,173,196,214,215,253,270,271,277,278,282,285,289,304,324,356,387,428],
s:[304,95,35]
},{//Absol
l:[[10,1],[364,1],[43,4],[269,9,17],[98,12,9],[13,17,57],[228,20,12],[14,25,33],[44,28,20],[104,33,25],[163,36,28],[248,41,36],[389,44,52],[197,49,44],[400,52,41],[382,57,60],[427,60,49],[195,65]],
m:[468,347,92,258,237,241,269,58,59,63,182,240,218,85,87,216,247,104,53,201,126,317,332,259,263,156,213,168,496,497,206,451,510,261,421,371,514,416,148,444,86,14,244,157,404,138,207,164,249,555,15,70],
e:[38,174,185,195,212,224,226,277,372,382,386,389,428,506],
tr:[173,180,196,214,231,272,276,277,282,289,340,399,428,492],
s:[364,224,276]
},{//Wynaut
l:[[150,1],[204,1],[227,1],[68,15],[194,15],[219,15],[243,15]]
},{//Snorunt
l:[[43,1],[181,1],[104,4],[44,10],[196,13],[29,19],[182,22],[423,28],[242,31],[420,37],[258,40],[59,46]],
m:[92,258,237,58,59,113,182,240,219,218,216,247,104,263,156,213,496,148,524,207,164],
e:[50,117,191,205,311,313,335,419,506],
tr:[173,180,196,214,335],
s:[181,352,311]
},{//Glalie
l:[[43,1],[44,1],[104,1],[181,1],[104,4],[44,10],[196,13],[29,19],[182,22],[423,28],[242,31],[58,37],[258,40],[59,51],[329,59]],
m:[92,258,237,269,58,59,63,113,182,240,219,218,89,216,247,104,259,263,156,213,496,153,371,416,148,360,523,524,207,164],
tr:[162,173,180,196,214,324,335,399,442]
},{//Spheal
l:[[45,1],[55,1],[111,1],[181,1],[227,7],[301,13],[34,19],[62,25],[258,31],[156,37],[173,37],[59,43],[329,49]],
m:[92,258,237,58,59,182,240,218,89,216,104,317,263,156,213,496,497,523,524,157,207,164,249,57,70,127,291],
e:[90,174,205,214,254,255,256,281,324,346,352,392],
tr:[162,173,196,214,231,324,401],
s:[401,90,181]
},{//Sealeo
l:[[45,1],[55,1],[181,1],[227,1],[227,7],[301,13],[34,19],[62,25],[258,31],[207,32],[156,39],[173,39],[59,47],[329,55]],
m:[46,92,258,237,58,59,182,240,218,89,216,104,317,263,156,213,496,497,523,524,157,207,164,249,57,70,127,291],
tr:[162,173,196,214,231,324,401]
},{//Walrein
l:[[45,1],[55,1],[181,1],[227,1],[242,1],[227,7],[301,13],[34,19],[62,25],[258,31],[207,32],[156,39],[173,39],[423,44],[59,52],[329,65]],
m:[46,92,258,237,58,59,63,182,240,218,89,216,104,317,263,156,213,496,497,416,523,524,157,207,164,249,57,70,127,291],
tr:[162,173,196,214,231,324,335,401,442]
},{//Clamperl
l:[[55,1],[128,1],[250,1],[334,1],[504,51]],
m:[92,258,237,58,59,182,240,218,216,104,263,156,213,496,503,207,164,57,127,291],
e:[34,48,109,112,203,287,300,330,352,362,392],
tr:[173,196,214,334],
s:[392,445,250]
},{//Huntail
l:[[250,1],[44,6],[103,10],[352,15],[184,19],[423,24],[362,28],[226,33],[291,37],[242,42],[401,46],[56,51]],
m:[92,258,237,58,59,63,182,240,218,216,104,317,263,156,213,496,503,416,207,164,57,127,291],
tr:[20,162,173,196,214,289,340,401]
},{//Gorebyss
l:[[250,1],[93,6],[97,10],[352,15],[133,19],[392,24],[445,28],[226,33],[291,37],[94,42],[401,46],[56,51]],
m:[92,258,237,58,59,63,182,240,219,218,216,94,247,104,263,156,213,496,503,416,244,207,164,57,127,291],
tr:[20,173,196,214,324,340,401]
},{//Relicanth
l:[[33,1],[106,1],[55,8],[317,15],[281,22],[36,29],[300,36],[246,43],[38,50],[291,57],[156,64],[56,71],[457,78]],
m:[347,92,258,237,58,59,63,182,240,219,218,479,89,216,104,201,317,263,156,213,496,503,416,397,444,244,523,157,207,164,249,57,127,291],
e:[130,133,173,189,214,222,330,341,346,362,401,428],
tr:[173,196,214,340,401,414,428,446],
s:[414,214,55]
},{//Luvdisc
l:[[33,1],[204,4],[55,7],[97,9],[36,14],[381,17],[352,22],[213,27],[175,31],[186,37],[56,40],[392,46],[445,51],[219,55]],
m:[92,258,237,58,59,182,240,219,218,216,104,263,156,213,496,503,244,207,164,57,127,291],
e:[48,150,300,346,362,392,445,453,505],
tr:[173,196,214,340],
s:[204,196,300]
},{//Bagon
l:[[99,1],[44,5],[43,10],[29,16],[116,20],[52,25],[225,31],[428,35],[184,40],[242,46],[337,50],[38,55]],
m:[468,337,46,92,237,241,182,240,218,216,280,104,53,126,317,332,263,156,213,496,510,421,157,207,164,249,15,70],
e:[37,56,82,111,203,239,349,406,407,424],
t:[434],
tr:[173,200,214,304,406,428],
s:[44,349,200]
},{//Shelgon
l:[[29,1],[43,1],[44,1],[99,1],[44,5],[43,10],[29,16],[116,20],[52,25],[182,30],[225,32],[428,37],[184,43],[242,50],[337,55],[38,61]],
m:[468,337,46,92,237,241,182,240,218,216,280,104,53,126,317,332,263,156,213,496,510,421,157,207,164,249,15,70],
t:[434],
tr:[173,200,214,304,334,406,428]
},{//Salamence
l:[[29,1],[43,1],[44,1],[99,1],[422,1],[424,1],[44,5],[43,10],[29,16],[116,20],[52,25],[182,30],[225,32],[428,37],[184,43],[19,50],[242,53],[337,61],[38,70],[525,80]],
m:[468,337,46,92,237,241,63,182,240,218,89,216,280,104,53,126,317,332,263,156,213,496,510,421,416,444,523,157,525,207,164,249,15,19,70],
t:[434],
tr:[173,200,214,231,257,304,355,366,401,406,428]
},{//Beldum
l:[[36,1]],
tr:[334,428,442],
s:[442,36,428]
},{//Metang
l:[[36,1],[93,1,20],[232,1,20],[393,1],[93,20],[232,20],[184,24,35],[357,,26],[228,28,23],[418,32],[94,36,41],[334,40,47],[97,44,38],[309,48,44],[428,52,29],[63,56,50]],
m:[468,473,92,237,241,63,113,182,240,477,218,89,216,94,247,280,104,115,188,201,317,332,263,156,496,153,397,148,360,244,523,157,447,207,164,430,249,15,70],
tr:[8,9,173,196,214,271,324,334,356,393,428,442,446]
},{//Metagross
l:[[36,1],[93,1,20],[232,1,20],[393,1],[93,20],[232,20],[184,24,35],[357,,26],[228,28,23],[418,32],[94,36,41],[334,40,53],[97,44,38],[359,45],[309,53,44],[428,62,29],[63,71,62]],
m:[468,473,92,237,241,63,113,182,240,477,218,89,216,94,247,280,104,115,188,201,317,332,263,156,496,153,416,397,148,360,244,523,157,447,207,164,430,249,15,70],
tr:[8,9,173,196,214,271,324,334,335,356,393,428,442,446]
},{//Regirock
l:[[23,1],[153,1],[88,9],[174,17],[276,25],[246,33],[334,41],[451,49],[199,57],[192,65],[444,73],[359,81],[63,89]],
m:[92,237,241,63,182,219,218,479,85,87,89,216,91,280,104,201,317,263,156,496,411,374,451,153,416,397,444,86,244,523,157,207,164,249,70],
tr:[7,8,9,173,214,276,334,335,356,409,414,442,446]
},{//Regice
l:[[23,1],[153,1],[196,9],[174,17],[276,25],[246,33],[133,41],[451,49],[199,57],[192,65],[58,73],[359,81],[63,89]],
m:[92,258,237,58,59,63,182,240,219,218,85,87,89,216,280,104,317,263,156,496,411,374,451,153,416,397,86,244,523,524,157,207,164,430,249,70],
tr:[8,9,173,196,214,276,324,335,356,442]
},{//Registeel
l:[[23,1],[153,1],[232,9],[174,17],[276,25],[246,33],[133,41],[334,41],[451,49],[199,57],[192,65],[430,73],[442,73],[359,81],[63,89]],
m:[468,92,237,241,63,182,240,219,218,85,87,89,216,280,104,201,317,332,263,156,496,411,374,451,153,421,416,397,86,244,523,157,207,164,430,249,70],
tr:[8,9,173,214,276,334,335,356,393,442,446]
},{//Latias
l:[[149,1],[273,5],[270,10],[219,15],[225,20],[346,25],[287,30],[296,35],[428,40],[105,45],[375,50],[204,55],[94,60],[505,65],[513,70],[470,75],[406,80],[361,85]],
m:[468,337,473,347,46,92,237,241,58,63,113,182,240,477,219,218,76,85,87,89,216,94,247,104,115,201,332,263,156,213,496,412,451,421,514,416,148,86,244,523,138,447,207,164,15,19,57,127,291],
t:[434],
tr:[173,196,200,214,270,271,272,277,343,355,366,387,406,428,478]
},{//Latios
l:[[149,1],[377,5],[270,10],[219,15],[225,20],[182,25],[287,30],[295,35],[428,40],[105,45],[375,50],[349,55],[94,60],[505,65],[477,70],[471,75],[406,80],[262,85]],
m:[468,337,473,347,46,92,237,241,58,63,113,182,240,477,219,218,76,85,87,89,216,94,247,104,115,201,332,263,156,213,496,412,451,421,514,416,148,86,244,523,138,447,207,164,15,19,57,127,291],
t:[434],
tr:[173,196,200,214,270,271,277,355,366,387,406,428,472]
},{//Kyogre
l:[[352,1],[184,5],[34,15],[330,20],[392,30],[58,35],[246,45],[323,50],[347,60],[401,65],[329,75],[38,80],[56,90]],
m:[347,46,92,258,237,58,59,63,182,240,219,218,85,87,89,216,280,104,317,263,156,496,503,416,86,244,523,157,207,164,249,57,70,127,291],
tr:[173,196,214,253,324,335,401,442]
},{//Groudon
l:[[341,1],[184,5],[436,15],[359,20],[156,30],[89,35],[246,45],[284,50],[339,60],[414,65],[90,75],[76,80],[126,90]],
m:[468,337,46,92,339,237,241,63,182,219,218,76,479,85,87,89,216,91,280,104,53,201,126,317,332,263,156,496,315,411,374,510,421,416,397,444,86,14,244,523,157,525,207,164,249,15,70],
tr:[7,9,173,214,231,253,335,406,414,442,446]
},{//Rayquaza
l:[[239,1],[184,5],[242,15],[304,20],[156,30],[403,35],[246,45],[200,50],[349,60],[19,65],[245,75],[63,80],[406,90]],
m:[468,337,46,92,339,237,241,58,59,63,182,240,218,76,85,87,89,216,280,104,53,201,126,317,332,263,156,496,497,315,411,412,374,507,510,421,416,444,86,360,14,244,523,157,525,207,164,249,19,57,70,127,291],
t:[434],
tr:[20,173,196,200,214,231,253,304,366,401,406,414,442],
s:[557]
},{//Jirachi
l:[[93,1],[273,1],[156,5],[129,10],[270,15],[94,20],[287,25],[156,30],[428,35],[38,40],[356,45],[361,50],[248,55],[322,60],[387,65],[353,70]],
m:[473,347,92,237,241,63,113,182,240,477,219,218,85,87,216,94,247,104,115,201,332,263,156,496,412,374,451,416,148,86,244,138,447,207,369,164,430,433],
tr:[7,8,9,173,196,214,253,270,271,277,278,285,324,334,356,387,409,428,442,446,478]
},{//Deoxys
m:[473,347,92,237,241,269,58,63,113,182,240,477,219,218,76,85,87,216,94,247,280,104,115,317,332,259,263,156,490,496,502,411,412,374,451,416,148,86,244,157,398,138,447,207,164,430,433,249,15,70],
tr:[20,67,173,214,271,272,277,278,282,285,289,324,356,409,428,446,472],
forms:[
{
	l:[[35,1],[43,1],[101,9],[100,17],[282,25],[228,33],[94,41],[289,49],[375,57],[428,65],[322,73],[105,81],[354,89],[63,97]],
	tr:[7,8,9,196,282]
},{
	l:[[35,1],[43,1],[101,9],[100,17],[269,25],[228,33],[94,41],[276,49],[375,57],[428,65],[322,73],[192,81],[354,89],[63,97]],
	tr:[276]
},{
	l:[[35,1],[43,1],[101,9],[100,17],[282,25],[191,33],[94,41],[289,49],[375,57],[428,65],[133,73],[334,73],[105,81],[354,89],[68,97],[243,97]],
	tr:[334]
},{
	l:[[35,1],[43,1],[101,9],[104,17],[282,25],[228,33],[94,41],[129,49],[375,57],[428,65],[97,73],[105,81],[354,89],[245,97]],
	tr:[7,8,9]
}]
},{//Turtwig
l:[[33,1],[110,5],[71,9],[75,13],[174,17],[44,21],[72,25],[73,29],[235,33],[242,37],[202,41],[437,45]],
m:[92,237,241,113,182,219,218,76,216,104,115,263,156,213,496,412,148,14,447,207,164,249,15,70],
e:[34,37,38,74,133,254,255,256,276,321,328,388,402,414,469],
t:[520],
tr:[173,202,214,231,235,276,388,402,414,446]
},{//Grotle
l:[[33,1],[110,1],[110,5],[71,9],[75,13],[174,17],[44,22],[72,27],[73,32],[235,37],[242,42],[202,47],[437,52]],
m:[92,237,241,113,182,219,218,76,216,104,115,263,156,213,496,412,148,14,447,207,164,249,15,70],
t:[520],
tr:[173,202,214,231,235,276,388,402,414,446]
},{//Torterra
l:[[33,1],[71,1],[75,1],[110,1],[452,1],[110,5],[71,9],[75,13],[174,17],[44,22],[72,27],[89,32],[73,33],[235,39],[242,45],[202,51],[437,57]],
m:[46,92,237,241,63,113,182,219,218,76,89,216,104,115,201,317,263,156,213,496,412,416,397,148,444,14,523,157,447,207,164,249,15,70],
t:[338,520],
tr:[173,200,202,214,231,235,276,335,388,402,414,442,446]
},{//Chimchar
l:[[10,1],[43,1],[52,7],[269,9],[154,15],[172,17],[417,23],[259,25],[263,31],[83,33],[512,39],[303,41],[53,47]],
m:[468,92,339,237,241,269,182,218,216,91,280,104,53,126,332,259,263,488,156,213,490,496,315,374,510,261,512,421,14,447,207,369,164,249,15,70],
e:[7,9,24,66,68,116,227,252,257,264,270,274,299,501],
t:[519],
tr:[7,9,67,173,214,231,253,257,270,272,283,343,441,446]
},{//Monferno
l:[[10,1],[43,1],[52,1],[52,7],[269,9],[183,14],[154,16],[172,19],[364,26],[259,29],[370,36],[83,39],[512,46],[303,49],[394,56]],
m:[468,92,339,237,241,269,182,218,216,91,280,104,53,126,317,332,259,263,488,156,213,490,496,315,411,374,510,261,512,421,514,14,157,526,398,447,207,369,164,249,15,70],
t:[519],
tr:[7,9,67,173,214,231,257,270,272,283,343,441,446,530]
},{//Infernape
l:[[10,1],[43,1],[52,1],[269,1],[52,7],[269,9],[183,14],[154,16],[172,19],[364,26],[386,29],[370,36],[83,42],[512,52],[347,58],[394,68]],
m:[468,347,46,92,339,237,241,269,63,182,218,76,89,216,91,280,104,53,126,317,332,259,263,488,156,213,490,496,315,411,374,510,261,512,421,514,416,444,14,523,157,526,398,447,207,369,164,249,15,70],
t:[307,519],
tr:[7,9,67,173,214,231,257,270,272,283,343,441,446,530]
},{//Piplup
l:[[1,1],[45,4],[145,8],[346,11],[64,15],[61,18],[117,22],[31,25],[362,29],[250,32],[54,36],[65,39],[56,43]],
m:[92,258,237,58,59,182,240,218,216,91,280,104,317,332,263,156,213,496,497,503,374,511,447,207,365,164,15,57,127,291],
e:[48,56,97,117,173,175,189,196,281,297,300,392,458],
t:[518],
tr:[173,196,214,324,343,446]
},{//Prinplup
l:[[33,1],[45,1],[45,4],[145,8],[346,11],[64,15],[232,16],[61,19],[117,24],[31,28],[362,33],[250,37],[54,42],[65,46],[56,51]],
m:[468,92,258,237,58,59,182,240,218,216,91,280,104,317,332,263,156,213,496,497,503,374,511,421,447,207,365,164,249,15,57,70,127,291],
t:[518],
tr:[173,196,214,324,343,446]
},{//Empoleon
l:[[33,1],[45,1],[145,1],[45,4],[145,8],[14,11],[64,15],[232,16],[61,19],[207,24],[31,28],[362,33],[453,36],[250,39],[54,46],[65,52],[56,59]],
m:[468,46,92,258,237,58,59,63,182,240,218,89,216,91,280,104,317,332,263,156,213,496,497,503,374,511,421,416,14,523,157,447,207,365,164,430,249,15,57,70,127,291],
t:[308,518],
tr:[173,196,214,282,324,334,343,446]
},{//Starly
l:[[33,1],[45,1],[98,5],[17,9],[104,13],[283,17],[18,21],[332,25],[36,29],[97,33],[413,37],[515,41]],
m:[92,237,241,182,240,218,216,104,332,263,156,213,168,496,497,526,207,365,369,164,19],
e:[28,31,38,193,197,211,228,253,279,297,310,355],
tr:[173,214,257,283,355,366]
},{//Staravia
l:[[33,1],[45,1],[98,1],[98,5],[17,9],[104,13],[283,18],[18,23],[332,28],[36,33],[97,38],[413,43],[515,48]],
m:[92,237,241,182,240,218,216,104,332,263,156,213,168,496,497,514,526,207,365,369,164,19],
tr:[173,214,257,283,355,366],
s:[297,366,17]
},{//Staraptor
l:[[17,1],[33,1],[45,1],[98,1],[98,5],[17,9],[104,13],[283,18],[18,23],[332,28],[36,33],[370,34],[97,41],[413,49],[515,57]],
m:[92,237,241,63,182,240,218,216,104,332,263,156,213,168,496,497,514,416,526,207,365,369,164,19],
tr:[143,173,214,257,283,355,366]
},{//Bidoof
l:[[33,1],[45,5],[111,9],[205,13],[29,17],[158,21],[281,25],[133,29],[36,33],[162,37],[276,41],[174,45]],
m:[92,237,241,269,58,59,182,240,218,85,87,216,91,247,104,263,156,213,168,496,497,451,514,86,526,447,207,365,164,249,15],
e:[38,98,111,130,154,203,205,214,316,346,401,431],
tr:[162,173,196,214,231,276,343,387,401,446],
s:[401,290,33]
},{//Bibarel
l:[[33,1],[45,1],[45,5],[111,9],[205,13],[55,15],[29,18],[158,23],[281,28],[133,33],[36,38],[162,43],[276,48],[174,53]],
m:[92,237,241,269,58,59,63,182,240,218,85,87,216,91,247,104,263,156,213,168,496,497,503,374,451,514,416,86,523,526,447,207,365,164,249,15,57,70,127,291],
tr:[162,173,196,214,231,276,343,387,401,446]
},{//Kricketot
l:[[45,1],[117,1],[522,6],[450,16]],
tr:[173,253,283,450],
s:[283,522,253]
},{//Kricketune
l:[[45,1],[117,1],[210,10],[141,14],[47,18],[116,22],[163,26],[404,30],[103,34],[269,38],[400,42],[405,46],[195,50]],
m:[468,92,237,241,269,63,182,240,218,216,280,104,332,263,156,213,496,497,206,416,148,14,522,404,207,164,249,15,70],
tr:[173,214,215,253,282,283,304,450]
},{//Shinx
l:[[33,1],[43,5],[268,9],[209,13],[44,17],[46,21],[207,25],[422,29],[242,33],[184,37],[435,41],[528,45]],
m:[46,92,237,113,182,240,218,85,87,216,104,263,156,213,168,496,451,148,521,86,207,164,528,555,70],
e:[24,36,98,129,270,324,336,351,400,422,423,424],
tr:[173,214,231,324,393],
s:[268,393,400]
},{//Luxio
l:[[33,1],[43,1],[43,5],[268,9],[209,13],[44,18],[46,23],[207,28],[422,33],[242,38],[184,43],[435,48],[528,53]],
m:[46,92,237,113,182,240,218,85,87,216,104,263,156,213,168,496,451,148,521,86,207,164,528,555,70],
tr:[173,214,231,324,393]
},{//Luxray
l:[[33,1],[43,1],[268,1],[43,5],[268,9],[209,13],[44,18],[46,23],[207,28],[422,35],[242,42],[184,49],[435,56],[528,63]],
m:[46,92,237,63,113,182,240,218,85,87,216,104,263,156,213,168,496,451,416,148,521,86,207,164,528,555,70],
tr:[173,214,231,276,324,393]
},{//Budew
l:[[71,1],[74,4],[346,7],[78,10],[72,13],[388,16]],
m:[92,474,237,241,182,240,218,76,216,247,104,188,263,156,213,496,412,148,14,244,447,207,164,15],
e:[42,75,79,170,178,191,202,235,320,326,363,402,437],
tr:[173,202,214,235,253,343,388,402]
},{//Roserade
l:[[40,1],[72,1],[230,1],[311,1],[345,1]],
m:[92,474,237,241,63,182,240,218,76,216,247,104,188,263,156,213,496,412,416,148,14,244,398,447,207,164,15],
tr:[173,202,214,235,343,388,402]
},{//Cranidos
l:[[29,1],[43,1],[116,6],[228,10],[36,15],[184,19],[372,24],[498,28],[246,33],[428,37],[103,42],[457,46]],
m:[46,92,237,241,58,59,182,240,218,479,85,87,89,216,91,104,53,201,126,317,263,156,213,168,496,374,510,371,397,444,14,523,157,207,164,249,70],
e:[18,21,23,37,38,43,174,231,242,359,442],
tr:[7,9,173,180,214,231,253,276,283,406,414,428,442,446],
s:[7,29,442]
},{//Rampardos
l:[[29,1],[43,1],[116,6],[228,10],[36,15],[184,19],[372,24],[498,28],[283,30],[246,36],[428,43],[103,51],[457,58]],
m:[46,92,237,241,58,59,63,182,240,218,479,85,87,89,216,91,280,104,53,201,126,317,263,156,213,168,496,411,374,510,371,416,397,444,14,523,157,525,207,164,249,15,57,70],
tr:[7,9,173,180,200,214,220,231,253,276,283,406,414,428,442,446]
},{//Shieldon
l:[[33,1],[182,1],[269,6],[319,10],[36,15],[334,19],[207,24],[246,28],[203,33],[368,37],[442,42],[484,46]],
m:[46,92,237,241,269,58,59,182,240,218,479,85,87,89,216,91,104,53,201,126,317,259,263,156,213,496,510,397,444,523,157,207,164,430,249,70],
e:[29,34,38,68,90,103,116,174,184,350,446,469],
tr:[173,214,231,334,393,414,442,446],
s:[68,90,182]
},{//Bastiodon
l:[[33,1],[182,1],[269,1],[319,1],[269,6],[319,10],[36,15],[334,19],[207,24],[246,28],[335,30],[203,36],[368,43],[442,51],[484,58]],
m:[46,92,237,241,269,58,59,63,182,240,218,479,85,87,89,216,91,104,53,201,126,317,259,263,156,213,496,510,416,397,444,523,157,207,164,430,249,70],
tr:[173,200,214,231,277,334,335,393,414,442,446]
},{//Burmy
l:[[182,1],[33,10],[450,15],[237,20]],
tr:[173,450,527],
s:[450,182,173]
},{//Wormadam
m:[92,474,237,241,63,182,240,219,218,216,94,247,104,263,156,213,168,496,416,148,522,244,138,207,164],
tr:[173,214,253,283,285,324,450,527],
forms:[
{
	l:[[33,1],[182,10],[450,15],[237,20],[93,23],[75,26],[74,29],[60,32],[445,35],[175,38],[213,41],[94,44],[437,47]],
	m:[76,412,447],
	tr:[202,235,388,402]
},{
	l:[[33,1],[182,10],[450,15],[237,20],[93,23],[350,26],[106,29],[60,32],[445,35],[175,38],[213,41],[94,44],[90,47]],
	m:[89,91,201,317,523],
	tr:[414,446]
},{
	l:[[33,1],[182,10],[450,15],[237,20],[93,23],[429,26],[319,29],[60,32],[445,35],[175,38],[213,41],[94,44],[442,47]],
	m:[360,430],
	tr:[334,393,441,442,446]
}]
},{//Mothim
l:[[33,1],[182,10],[450,15],[237,20],[93,23],[16,26],[77,29],[60,32],[293,35],[318,38],[403,41],[94,44],[405,47],[483,50]],
m:[92,474,237,241,63,182,240,219,218,76,216,94,247,104,332,263,156,213,168,496,412,512,416,148,522,244,138,207,369,164],
tr:[173,202,214,285,324,355,366,450,527]
},{//Combee
l:[[16,1],[230,1],[450,13],[405,,29]],
tr:[173,283,366,450],
s:[314,16,366]
},{//Vespiquen
l:[[16,1],[230,1],[40,3,1],[109,7,1],[210,9,5],[455,13,17],[228,15,9],[154,19,13],[408,21,25],[456,25,29],[92,27,33],[163,31,21],[445,33,41],[454,37,45],[403,,37],[207,39,49],[194,43,53]],
m:[468,92,474,237,241,63,182,240,218,216,104,188,332,263,156,213,168,496,374,511,512,416,148,522,404,207,369,164,15],
tr:[173,214,283,324,355,366,450]
},{//Pachirisu
l:[[45,1],[117,1],[98,5],[204,9],[209,13],[203,17],[129,21],[486,25],[186,29],[86,33],[162,37],[435,41],[387,45],[158,49]],
m:[92,237,113,182,240,218,85,87,216,91,104,263,156,213,496,497,374,451,148,521,86,447,207,369,164,15],
e:[39,44,111,175,205,231,260,266,268,313,343,516],
tr:[9,162,173,214,231,253,270,343,387,393,402,441],
s:[343,98,351]
},{//Buizel
l:[[45,1,4],[49,1],[346,1,7],[98,3,11],[55,6,15],[228,10,18],[129,15,21],[453,21,24],[458,,27],[97,28,41],[250,36,31],[13,45,35],[56,,45],[401,55,38]],
m:[92,258,339,237,58,59,182,240,218,216,91,280,104,317,263,156,213,496,497,503,207,164,249,57,70,127,291],
e:[3,29,154,163,189,210,226,316,382,392,401,415,541],
tr:[8,173,196,214,231,401],
s:[163,55,352,346]
},{//Floatzel
l:[[45,1,4],[49,1],[98,1,11],[346,1,7],[423,1],[98,3],[55,6,15],[228,10,18],[129,15,21],[453,21,24],[242,26,1],[97,29,51],[458,,29],[250,39,35],[13,50,41],[56,,57],[401,62,46]],
m:[46,92,258,339,237,269,58,59,63,182,240,218,216,91,280,104,317,259,263,156,213,496,497,411,503,371,416,207,164,249,57,70,127,291],
tr:[8,67,173,196,214,231,401]
},{//Cherubi
l:[[33,1],[234,1],[74,7],[73,10],[270,13],[345,19],[241,22],[388,28],[36,31],[76,37],[381,40]],
m:[92,237,241,182,219,218,76,216,104,263,156,213,496,412,148,14,447,207,164],
e:[75,111,205,230,267,311,312,320,321,361,363,402,505],
tr:[173,202,214,235,270,388,402],
s:[331,505,73]
},{//Cherrim
l:[[33,1],[74,1],[234,1],[74,7],[73,10],[270,13],[345,19],[241,22],[80,25],[388,30],[36,35],[76,43],[381,48]],
m:[92,237,241,63,182,219,218,76,216,104,263,156,213,496,412,416,148,14,447,207,164],
tr:[173,202,214,235,270,388,402]
},{//Shellos
l:[[189,1],[300,2],[106,4],[352,7],[426,11],[237,16],[240,22],[34,29],[330,37],[105,46]],
m:[92,258,237,58,59,182,240,218,216,104,263,156,213,496,503,207,164,57,291],
e:[54,68,90,124,133,174,243,254,255,256,262,281,362,376,499],
tr:[173,196,214,220,414],
s:[189,290,281]
},{//Gastrodon
l:[[106,1],[189,1],[300,1],[352,1],[300,2],[106,4],[352,7],[426,11],[237,16],[240,22],[34,29],[330,41],[105,54]],
m:[92,258,237,58,59,63,182,240,218,89,216,91,104,482,188,201,317,263,156,213,496,503,416,148,444,523,157,207,164,249,57,70,127,291],
tr:[173,196,214,220,335,414]
},{//Ambipom
l:[[10,1],[28,1],[39,1],[310,1],[28,4],[310,8],[226,11],[321,15],[154,18],[129,22],[103,25],[97,29],[458,32],[374,36],[417,39],[387,43]],
m:[468,92,237,241,269,63,182,240,218,76,85,87,216,91,247,280,104,332,263,156,213,168,490,496,374,512,421,371,514,416,86,526,138,447,207,369,164,249,15,70],
tr:[7,8,9,67,173,180,214,231,253,272,282,289,340,343,387,402,441,492]
},{//Drifloon
l:[[107,1],[132,1],[310,6,4],[16,11,8],[116,14,13],[371,17,16],[506,22,27],[254,27,25],[255,30,32],[256,30,32],[466,33,20],[226,38,44],[133,,40],[247,43,36],[153,46,50]],
m:[347,92,237,241,182,240,477,218,85,87,216,94,247,104,263,156,213,168,496,451,261,512,373,153,371,148,86,360,244,138,207,164,15],
e:[34,50,95,114,194,262,311,432,499],
tr:[20,173,180,196,214,220,271,277,278,282,285,366],
s:[95,107,285]
},{//Drifblim
l:[[16,1,8],[107,1],[132,1],[310,1,4],[310,6],[16,11],[116,14,13],[371,17,16],[506,22,27],[254,27,25],[255,32,34],[256,32,34],[466,37,20],[226,44,52],[133,,46],[247,51,40],[153,56,60]],
m:[347,92,237,241,63,182,240,477,218,85,87,216,94,247,104,263,156,213,168,496,451,261,512,373,153,371,416,148,86,360,244,138,207,164,15,19],
tr:[20,173,180,196,214,220,271,277,278,282,285,366]
},{//Buneary
l:[[1,1],[111,1],[150,1],[193,1],[203,6],[218,13],[98,16],[26,23],[226,26],[97,33],[146,36],[495,43],[204,46],[494,53],[340,56],[361,63]],
m:[92,237,241,58,182,240,218,76,85,216,91,247,104,263,156,213,496,374,451,514,86,526,447,207,164,249,15],
e:[7,8,9,67,175,186,227,252,264,313,327,383,415,458,509],
tr:[7,8,9,67,173,214,215,231,253,270,277,283,304,340,343,387,409,495],
s:[409,252,193]
},{//Lopunny
l:[[1,1],[111,1],[150,1],[193,1],[243,1],[277,1],[203,6],[216,13],[98,16],[26,23],[226,26],[97,33],[146,36],[495,43],[204,46],[494,53],[340,56],[361,63]],
m:[92,237,241,58,59,63,182,240,218,76,85,87,216,91,247,104,263,156,213,490,496,411,374,451,514,416,86,526,447,207,164,249,15,70],
tr:[7,8,9,67,173,214,215,231,253,270,277,283,304,340,343,387,409,495]
},{//Mismagius
l:[[45,1],[149,1],[180,1],[310,1],[345,1],[381,1]],
m:[347,92,237,241,269,63,182,240,477,218,85,87,216,94,247,104,332,259,263,156,213,168,496,497,412,451,261,373,371,416,148,86,244,138,207,164,433],
tr:[173,180,196,214,215,220,253,271,277,285,289,304,399,472,478,492]
},{//Honchkrow
l:[[17,1],[114,1],[228,1],[310,1],[207,25],[417,35],[492,45],[400,55],[511,65],[399,75]],
m:[347,92,237,241,269,63,182,240,218,216,94,247,104,332,259,263,156,213,168,496,510,511,373,371,514,416,86,244,138,207,365,164,555,19],
tr:[143,180,196,214,253,257,276,289,355,366,399,492]
},{//Glameow
l:[[252,1],[10,5],[45,8],[95,13],[185,17],[154,20],[204,25],[274,29],[445,32],[163,37],[389,41],[213,44],[468,48]],
m:[468,92,237,241,269,182,240,218,85,87,216,91,247,104,332,259,263,156,213,168,496,497,421,371,514,148,244,526,138,207,369,164,15],
e:[28,39,44,98,175,289,313,358,372,387],
tr:[162,173,214,231,282,289,304,343,387,492],
s:[372,252,290]
},{//Purugly
l:[[10,1],[45,1],[252,1],[10,5],[45,8],[95,13],[185,17],[154,20],[204,25],[274,29],[445,32],[163,37],[207,38],[34,45],[213,52],[468,60]],
m:[468,46,92,237,241,269,63,182,240,218,85,87,216,91,247,104,332,259,263,156,213,168,496,497,421,371,514,416,148,244,523,526,138,207,369,164,15],
tr:[162,173,214,231,282,289,304,343,387,492]
},{//Chingling
l:[[35,1],[45,6],[310,9],[93,14],[253,17],[387,22],[494,25]],
m:[473,347,92,237,241,269,113,182,240,477,219,218,216,94,247,104,115,259,263,156,213,496,497,451,148,86,244,138,447,207,164,433],
e:[50,95,105,174,248,273,285,500],
tr:[20,173,196,214,215,253,270,271,277,278,282,285,289,304,324,356,387,428]
},{//Stunky
l:[[10,1],[116,1],[139,4],[103,7],[154,10],[108,14],[364,18],[163,22],[92,27],[491,32],[400,37],[262,43],[153,49]],
m:[468,46,92,474,237,241,269,182,240,218,216,91,247,104,53,188,126,259,263,156,213,168,496,510,153,421,371,207,164,249,555,15],
e:[38,43,114,123,184,228,231,242,310,386,481,492],
tr:[173,214,231,289,399,492],
s:[492,103,389]
},{//Skuntank
l:[[10,1],[116,1],[139,1],[139,4],[103,7],[154,10],[108,14],[364,18],[163,22],[92,27],[491,32],[53,34],[400,41],[262,51],[153,61]],
m:[468,46,92,474,237,241,269,63,182,240,218,216,91,247,104,53,188,126,259,263,156,213,168,496,510,153,421,371,416,398,207,164,249,555,15,70],
tr:[173,214,231,289,399,492]
},{//Bronzor
l:[[33,1],[93,1],[95,7,5],[286,12,9],[109,14,11],[149,,15],[326,19,39],[334,26,19],[219,30,25],[319,,31],[360,35],[248,37,29],[185,41,21],[371,49,41],[377,52,45],[484,54,49]],
m:[473,347,92,237,241,113,182,240,477,219,218,76,89,216,94,247,104,115,201,317,263,156,496,451,371,397,148,360,244,523,157,138,447,207,164,430,433],
tr:[173,214,271,278,285,324,334,356,446,472],
s:[356,95,285]
},{//Bronzong
l:[[33,1],[93,1],[95,1,5],[240,1],[241,1],[286,1,9],[95,7],[286,12],[109,14,11],[149,,15],[326,19,42],[334,26,19],[219,30,25],[319,,31],[335,33],[360,38,36],[248,43,29],[185,50,21],[371,61,46],[377,67,52],[484,72,58]],
m:[473,347,92,237,241,63,113,182,240,477,219,218,76,89,216,94,247,104,115,201,317,263,156,496,451,153,371,416,397,148,360,244,523,157,138,447,207,164,430,433,249,70],
tr:[173,214,271,278,285,324,334,335,356,428,442,446,472]
},{//Bonsly
l:[[313,1],[383,1],[175,6,5],[67,9,8],[88,14,12],[102,17,33],[335,22,26],[185,25,19],[317,30,22],[157,33,29],[21,38,15],[389,41,36],[38,46,40]],
m:[347,92,237,241,182,218,479,216,91,280,104,201,317,263,156,213,168,496,153,397,244,157,207,164],
e:[29,106,111,120,174,203,205,328,446],
tr:[67,173,214,253,270,272,335,343,414,446,492,495]
},{//Mime Jr.
l:[[93,1],[112,1],[321,1],[383,4],[96,8],[227,11,18],[3,15,11],[102,18,15],[113,22],[115,22],[60,25],[164,29],[278,32],[271,36],[94,39],[272,43],[226,46],[219,50]],
m:[473,347,92,237,241,269,113,182,240,477,219,218,76,85,87,216,94,247,280,104,115,259,263,156,213,168,496,374,451,148,86,244,138,447,207,164,433],
e:[95,102,109,196,204,248,252,271,298,358,361,417,471,478],
tr:[173,196,214,253,270,271,272,277,278,285,289,324,343,409,472,478]
},{//Happiny
l:[[1,1],[204,1],[383,5],[287,9],[186,12]],
m:[92,258,237,241,113,182,240,219,218,76,216,94,247,104,53,126,263,156,213,496,497,374,510,148,86,244,526,138,447,207,164],
e:[68,118,203,215,217,270,312,356,363,387,426],
tr:[173,196,214,215,253,270,278,283,304,343,356,387,409,428]
},{//Chatot
l:[[64,1],[45,5],[119,9],[47,13],[31,17],[448,21],[269,25],[496,29],[102,33],[497,37],[355,41],[253,45],[485,49],[297,53],[304,57]],
m:[92,237,241,269,182,240,218,216,104,332,259,263,156,213,168,496,497,526,207,365,369,164,19],
e:[48,97,101,211,214,227,314,417,432],
tr:[143,173,214,253,257,272,304,355,366],
s:[119,417,272]
},{//Spiritomb
l:[[109,1],[174,1],[180,1],[228,1],[425,1],[185,7],[95,13],[138,19],[466,25],[389,31],[417,37],[262,43],[399,49]],
m:[347,92,237,241,269,63,182,240,477,218,216,94,247,104,317,259,263,156,213,168,496,511,261,373,514,416,148,244,138,207,164,555],
e:[108,171,194,220,286,288,425,445],
tr:[173,180,196,214,220,253,271,289,399,472,492],
s:[196,220,180]
},{//Gible
l:[[33,1],[28,3],[82,7],[201,13],[36,15],[328,19],[163,25],[337,27],[91,31],[407,37]],
m:[468,337,46,92,237,241,182,240,218,89,216,91,104,53,201,126,317,332,263,156,213,496,510,421,444,523,157,207,164,249,15,70],
e:[34,37,38,184,200,225,231,232,239,328,341,431,442],
t:[434],
tr:[173,200,214,231,406,414,442,446],
s:[82,203,200]
},{//Gabite
l:[[28,1],[33,1],[28,3],[82,7],[201,13],[36,15],[328,19],[530,24],[163,28],[337,33],[91,40],[407,49]],
m:[468,337,46,92,237,241,182,240,218,89,216,91,104,53,201,126,317,332,263,156,213,496,510,421,444,523,157,207,164,249,15,70],
t:[434],
tr:[173,200,214,231,406,414,442,446,530]
},{//Garchomp
l:[[28,1],[33,1],[82,1],[201,1],[424,1],[28,3],[82,7],[201,13],[36,15],[328,19],[530,24],[163,28],[337,33],[91,40],[242,48],[407,55]],
m:[468,337,46,92,237,241,63,182,240,218,89,216,91,280,104,53,201,126,317,332,263,156,213,496,206,374,510,421,416,444,14,523,157,525,398,207,164,249,15,57,70],
t:[434],
tr:[173,200,214,231,401,406,414,442,446,530]
},{//Munchlax
l:[[33,1],[118,1],[316,1],[111,4],[133,9],[122,12],[278,17],[103,20],[498,25],[254,28],[256,33],[34,36],[374,41],[205,44],[363,49],[289,52],[387,57]],
m:[92,237,241,58,59,182,240,218,76,85,87,89,216,94,247,280,104,53,201,126,317,263,156,213,496,374,510,514,523,157,526,207,164,249,57,70],
e:[18,38,68,120,122,174,204,228,363,428,495],
tr:[7,8,9,173,196,214,253,276,278,289,304,343,387,402,428,441,495]
},{//Riolu
l:[[98,1],[193,1],[203,1],[68,6],[395,11,15],[364,15,11],[179,19,29],[103,24],[383,29,19],[417,47],[515,55]],
m:[46,92,339,237,241,182,240,218,89,216,91,280,104,317,263,156,213,490,496,411,374,421,371,514,14,523,157,526,398,207,164,249,70],
e:[44,67,97,136,170,197,238,242,266,299,327,334,410,418,509],
tr:[8,9,67,173,214,231,270,272,334,393,409,428,530],
s:[418,203,264]
},{//Lucario
l:[[98,1],[193,1],[197,1],[232,1],[399,1],[68,6],[395,11,15],[364,15,11],[198,19,29],[319,24],[382,29,19],[501,33],[14,37],[505,42],[347,47],[396,51],[370,55],[406,60],[245,65]],
m:[468,347,46,92,339,237,241,63,182,240,218,89,216,91,94,247,280,104,317,263,156,213,490,496,411,374,421,371,514,416,444,14,523,157,526,398,207,164,430,249,70],
tr:[8,9,67,173,214,231,270,272,334,393,399,406,409,428,530]
},{//Hippopotas
l:[[28,1],[33,1],[44,7],[281,13],[36,19],[91,19],[328,25],[242,31],[89,37],[38,44],[90,50]],
m:[46,92,237,241,182,218,89,216,91,104,201,317,263,156,213,496,523,157,207,164,249,70],
e:[18,34,174,214,254,255,256,279,303,328],
tr:[173,214,231,276,414,446],
s:[44,254,276]
},{//Hippowdon
l:[[28,1],[33,1],[44,1],[281,1],[422,1],[423,1],[424,1],[44,7],[281,13],[36,19],[91,19],[328,25],[242,31],[89,40],[38,50],[90,60]],
m:[46,92,237,241,63,182,218,89,216,91,104,201,317,263,156,213,496,416,444,523,157,207,164,249,70],
tr:[173,214,231,276,414,442,446]
},{//Skorupi
l:[[40,1],[43,1],[44,1],[282,6,5],[42,12,9],[228,,16],[367,17,13],[184,23,41],[390,28,34],[450,34,20],[400,,38],[305,39,23],[468,45,30],[474,50,27],[242,56,45],[440,61,49]],
m:[468,92,474,237,241,269,182,240,218,216,91,247,280,104,188,317,332,259,263,156,213,168,496,206,374,371,148,14,522,404,398,207,164,249,15,70],
e:[18,28,41,97,103,109,163,185,228,231,342,400],
tr:[173,214,231,282,399,401,450],
s:[97,401,44]
},{//Drapion
l:[[40,1],[43,1],[44,1],[282,1,5],[422,1],[423,1],[424,1],[282,6],[42,12,9],[228,,16],[367,17,13],[184,23,43],[390,28,34],[450,34,20],[400,,38],[305,39,23],[468,48,30],[474,56,27],[242,65,49],[440,73,57]],
m:[468,46,92,474,237,241,269,63,182,240,218,89,216,91,247,280,104,188,317,332,259,263,156,213,168,496,206,374,371,514,416,148,14,522,523,157,404,398,207,164,249,555,15,70],
tr:[173,214,231,282,399,401,450]
},{//Croagunk
l:[[310,1],[189,3],[40,8],[269,10],[228,15],[185,17],[279,22],[207,24],[426,29],[389,31],[474,36],[417,38],[398,43],[188,45],[260,50]],
m:[92,339,474,237,241,269,182,240,218,89,216,91,247,280,104,482,188,317,259,263,156,213,168,490,496,411,374,373,371,514,523,157,404,526,398,207,164,249,70],
e:[29,68,96,223,238,252,265,358,364,367,382,409,410,418],
tr:[8,9,67,162,173,180,196,214,270,272,282,289,340,399,409,441,492,530],
s:[409,441,40]
},{//Toxicroak
l:[[40,1],[189,1],[310,1],[189,3],[40,8],[269,10],[228,15],[185,17],[279,22],[207,24],[426,29],[389,31],[474,36],[417,41],[398,49],[188,54],[260,62]],
m:[92,339,474,237,241,269,63,182,240,218,89,216,91,247,280,104,482,188,317,259,263,156,213,168,490,496,411,374,373,371,514,416,444,14,523,157,404,526,398,207,164,249,15,70],
tr:[8,9,67,162,173,180,196,214,270,272,282,289,340,399,409,441,492,530]
},{//Carnivine
l:[[20,1],[74,1],[44,7],[22,11],[230,17],[275,21],[185,27],[536,31],[254,37],[255,37],[256,37],[242,41],[378,47],[438,51]],
m:[92,237,241,63,182,218,76,216,104,188,263,156,213,168,496,412,374,371,416,148,14,447,207,164,15],
e:[21,73,75,78,79,202,235,320,345,388,476],
tr:[20,173,202,214,235,282,380,388,402,450],
s:[44,380,476]
},{//Finneon
l:[[1,1],[55,6],[213,10],[240,13],[16,17],[352,22],[445,26],[219,29],[392,33],[250,38],[369,42],[340,45],[318,49],[487,54]],
m:[92,258,237,58,59,182,240,219,218,216,104,263,156,213,496,503,371,148,244,207,369,164,57,127,291],
e:[60,62,97,150,175,186,204,321,324,362,401],
tr:[173,196,214,324,340,366,401],
s:[213,186,352]
},{//Lumineon
l:[[1,1],[55,1],[213,1],[55,6],[213,10],[240,13],[16,17],[352,22],[445,26],[219,29],[392,35],[250,42],[369,48],[340,53],[318,59],[487,66]],
m:[92,258,237,58,59,63,182,240,219,218,216,104,263,156,213,496,503,371,416,148,244,207,369,164,57,127,291],
tr:[173,196,214,324,340,366,401]
},{//Mantyke
l:[[33,1],[145,1],[48,4,3],[61,10,7],[29,13,16],[97,19,32],[17,22,14],[469,,23],[352,28,19],[36,31,27],[403,,36],[109,37,11],[340,40,46],[392,46,39],[56,49]],
m:[92,258,237,58,59,182,240,218,89,216,104,332,263,156,213,496,503,512,523,157,207,164,57,127,291],
e:[21,56,114,133,150,239,243,300,324,346,469],
tr:[173,196,214,270,324,340]
},{//Snover
l:[[43,1],[181,1],[75,5],[196,9],[320,13],[207,17],[54,21],[420,26],[275,31],[452,36],[59,41],[329,46]],
m:[92,258,237,58,59,113,182,240,219,218,76,216,247,104,263,156,213,496,412,148,14,524,447,207,164],
e:[23,38,54,73,74,130,331,345,363,402,419],
tr:[8,173,196,202,214,231,235,272,388,402],
s:[419,202,75]
},{//Abomasnow
l:[[8,1],[43,1],[75,1],[181,1],[196,1],[75,5],[196,9],[320,13],[207,17],[54,21],[420,26],[275,31],[452,36],[59,47],[329,58]],
m:[92,258,237,58,59,63,113,182,240,219,218,76,89,216,247,280,104,317,263,156,213,496,411,412,374,416,148,14,523,524,157,447,207,164,249,70],
tr:[8,173,196,200,202,214,231,235,272,335,388,402]
},{//Weavile
l:[[10,1],[43,1],[98,1,8],[269,1],[279,1],[372,1],[373,1],[98,8],[103,10,32],[185,14,10],[154,21,16],[417,24,20],[196,28,14],[468,35,25],[400,38,35],[289,,40],[374,42,28],[386,,44],[232,49,22],[399,51,47]],
m:[468,347,92,258,237,241,269,58,59,63,182,240,218,216,91,247,280,104,115,332,259,263,156,213,168,490,496,411,206,374,373,421,371,514,416,14,244,404,398,138,207,164,249,555,15,57,70],
tr:[8,67,173,180,196,214,231,282,289,399,492]
},{//Magnezone
l:[[33,1],[48,1,4],[84,1,7],[112,1],[243,1],[319,1,29],[84,6],[48,11],[49,14,11],[86,17,15],[209,22,21],[486,27,34],[199,30,56],[443,34,18],[430,,39],[103,40,45],[435,46,51],[429,50,25],[393,54,62],[360,60,67],[192,66,73]],
m:[92,237,241,63,113,182,240,218,85,87,216,104,115,263,156,496,451,153,416,148,521,86,360,244,207,164,430,528],
tr:[173,214,277,278,324,334,356,393,442,527]
},{//Lickilicky
l:[[122,1],[48,5],[111,9],[282,13],[35,17],[23,21],[50,25],[21,29],[205,33],[498,37],[382,41],[287,45],[103,49],[438,53],[378,57],[360,61]],
m:[92,237,241,58,59,63,182,240,218,76,85,87,89,216,91,247,280,104,53,201,126,317,263,156,213,168,496,411,374,510,153,514,416,360,14,244,523,157,525,526,138,207,164,249,15,57,70],
tr:[7,8,9,20,173,196,214,231,282,335,401,428]
},{//Rhyperior
l:[[23,1],[30,1],[31,1],[39,1],[398,1],[23,9],[31,19],[184,19],[350,23],[498,30],[36,41],[359,42],[529,47],[444,56],[89,62],[32,71],[224,77],[439,86]],
m:[46,92,237,241,58,59,63,182,240,218,479,85,87,89,216,91,280,104,53,201,126,317,263,156,213,168,496,411,374,510,421,371,416,397,444,14,523,157,525,398,207,164,430,249,15,57,70],
tr:[7,8,9,173,180,196,200,214,231,253,276,283,335,401,406,414,442,446,529]
},{//Tangrowth
l:[[132,1],[275,1],[79,5,4],[71,8,10],[74,12,20],[77,15,14],[22,19,7],[20,22,17],[72,26,23],[78,29,30],[282,33,27],[246,36,40],[202,,36],[363,40,33],[21,43],[321,47,46],[378,50,49],[438,54,53],[335,57,56]],
m:[92,237,241,63,182,218,76,89,216,280,104,115,188,317,332,263,156,213,168,496,411,412,374,371,416,148,14,244,523,157,398,447,207,164,249,15,70],
tr:[20,173,202,214,220,235,282,283,335,388,402]
},{//Electivire
l:[[7,1],[43,1],[67,1,8],[84,1,5],[98,1],[84,6],[67,11],[129,16,12],[86,,19],[351,21,15],[113,26],[486,32,22],[9,38,29],[435,44,36],[85,50,49],[103,56,42],[87,62,55],[416,68,62]],
m:[92,237,269,63,113,182,240,218,85,87,89,216,91,94,280,104,53,317,259,263,156,213,168,490,496,411,374,451,416,148,521,86,523,157,207,164,528,249,70],
tr:[7,8,9,67,173,214,231,270,324,343,393,527,530]
},{//Magmortar
l:[[9,1],[43,1],[52,1,5],[108,1,8],[123,1],[52,6],[108,11],[185,16,12],[499,,19],[83,21,15],[109,26],[481,32,22],[7,38,29],[436,44,36],[53,50,49],[241,56,42],[126,62,55],[63,68,62]],
m:[92,237,241,269,63,182,218,76,85,89,216,94,280,104,53,126,317,259,263,488,156,213,168,490,496,315,411,374,510,261,416,523,157,207,164,249,70],
tr:[7,9,67,173,214,231,257,270,343,530]
},{//Togekiss
l:[[143,1],[245,1],[396,1],[403,1]],
m:[473,92,237,241,63,113,182,240,477,219,218,76,216,94,247,280,104,115,53,126,332,263,156,213,496,497,374,510,514,416,148,86,244,526,138,447,207,365,164,249,19],
tr:[143,173,214,215,257,271,277,283,304,324,343,355,366,387,409,428]
},{//Yanmega
l:[[33,1],[98,1],[104,1],[193,1],[400,1],[450,1],[98,6],[104,11],[49,14],[197,17],[48,22],[253,27],[228,30],[246,33],[364,38],[163,43],[103,46],[369,49],[403,54],[405,57]],
m:[92,237,241,63,182,218,76,216,94,247,104,332,263,156,213,168,496,416,148,522,244,138,207,369,164],
tr:[173,202,214,253,324,355,366,450]
},{//Leafeon
l:[[33,1],[39,1],[270,1],[28,8,5],[75,15,9],[98,22,13],[235,29,33],[345,36,21],[202,43,25],[387,50,41],[320,57,17],[241,64,37],[348,71,45],[14,78,29]],
m:[46,92,237,241,63,182,240,218,76,216,91,247,104,332,263,156,213,496,497,412,514,416,148,14,404,526,447,207,164,249,70],
tr:[173,202,214,215,231,235,270,282,304,343,387,388,402]
},{//Glaceon
l:[[33,1],[39,1],[270,1],[28,8,5],[196,15,9],[98,22,13],[44,29,17],[420,36,25],[423,43,21],[387,50,41],[243,57,33],[258,64,37],[59,71,45],[112,78,29]],
m:[46,92,258,237,241,58,59,63,182,240,218,216,91,247,104,263,156,213,496,497,514,416,524,526,207,164,249,70],
tr:[173,196,214,215,231,270,304,324,343,387,401]
},{//Gliscor
l:[[28,1,4],[106,1,7],[282,1,10],[398,1],[422,1],[423,1],[424,1],[28,5],[106,9],[282,12],[98,16,13],[210,20,16],[185,23,19],[512,27,22],[103,31,35],[400,34,27],[14,38,50],[369,42,30],[404,45,40],[327,,45],[12,49,55]],
m:[468,92,474,237,241,269,63,182,240,218,89,216,91,280,104,188,201,317,332,259,263,156,213,168,496,206,374,512,371,416,397,444,14,522,523,157,404,398,207,369,164,249,15,70],
tr:[143,173,214,231,282,355,366,399,401,414,446,450]
},{//Mamoswine
l:[[64,1],[181,1,8],[246,1],[300,1,5],[316,1],[300,4],[181,8],[189,13,11],[203,16,14],[426,20,18],[258,25,21],[423,28,24],[36,32,28],[458,33],[89,40,46],[37,,41],[54,48,37],[59,56,52],[184,65,58]],
m:[46,92,258,237,58,59,63,113,182,240,218,89,216,91,104,115,201,317,263,156,213,496,416,444,523,157,207,164,249,70],
tr:[173,196,214,276,282,283,335,414,442,446]
},{//Porygon-Z
l:[[33,1],[160,1],[176,1],[417,1],[433,1],[60,7],[97,12],[105,18],[393,23],[324,29],[373,34],[435,40],[199,45],[161,51],[277,56],[192,62],[63,67]],
m:[473,92,237,241,58,59,63,182,240,218,76,85,87,216,94,247,104,332,263,156,168,496,451,373,416,148,86,244,138,207,164,433],
tr:[173,196,214,220,231,253,271,277,278,324,356,387,393,399,428,472,492,527]
},{//Gallade
l:[[43,1],[93,1],[100,1],[104,1],[348,1],[400,1],[93,6],[104,10],[100,12],[210,17],[163,22],[505,25],[14,31],[427,36],[270,39],[364,45],[206,50],[182,53],[370,59],[500,64]],
m:[473,347,92,339,237,241,269,63,113,182,240,477,219,218,85,89,216,94,247,280,104,115,317,332,259,263,156,213,168,490,496,497,502,411,206,374,451,261,514,416,148,444,86,14,244,523,157,404,526,398,138,447,207,164,433,249,15,70],
tr:[7,8,9,67,173,214,220,270,271,277,278,282,285,289,304,324,409,428,472,478,530]
},{//Probopass
l:[[33,1],[334,1,4],[335,1,8],[356,1],[393,1],[443,1,11],[334,7],[443,13],[350,,18],[335,19],[86,25,15],[209,,25],[157,31,29],[201,37,36],[156,43,22],[408,49,32],[435,55,39],[444,61,46],[192,67,50],[199,73,50],[414,79,43]],
m:[92,237,241,269,63,182,218,479,85,87,89,216,104,201,317,259,263,156,213,496,153,416,397,444,521,86,523,157,207,164,430,249,70],
tr:[7,8,9,173,214,220,277,334,335,356,393,414,442,446]
},{//Dusknoir
l:[[7,1],[8,1],[9,1],[20,1],[43,1],[50,1],[101,1],[356,1],[50,6],[193,9],[310,14],[109,17],[425,22],[228,25],[174,30],[261,33],[325,37],[506,42],[212,49],[371,58],[248,61]],
m:[347,92,237,241,269,58,59,63,182,240,477,218,89,216,94,247,280,104,317,259,263,156,213,168,496,411,374,451,261,373,371,416,148,244,523,157,138,207,164,433,249,70],
tr:[7,8,9,20,173,180,196,214,220,271,285,289,356,399]
},{//Froslass
l:[[43,1],[104,1],[181,1],[310,1],[104,4],[310,10],[196,13],[109,19],[466,22],[358,28],[445,31],[420,37],[258,40],[59,51],[194,59]],
m:[92,258,237,269,58,59,63,113,182,240,477,219,218,85,87,216,94,247,104,259,263,156,213,496,374,373,371,416,148,86,244,524,138,207,164],
tr:[8,173,180,196,214,220,271,289,324,335]
},{//Rotom
l:[[84,1],[86,1],[109,1],[271,1],[310,1],[253,8],[104,15],[351,22],[466,29],[164,36],[486,43],[506,50],[268,57],[435,64]],
m:[92,237,241,113,182,240,477,218,85,87,216,247,104,115,263,156,168,496,451,261,148,521,86,244,138,207,164],
tr:[173,180,214,220,253,271,289,324,399,527],
c:[84,315,56,59,403,437],
s:[351,324,86]
},{//Uxie
l:[[93,1],[156,1],[286,6],[203,16],[129,21],[281,31],[248,36],[133,46],[326,51],[175,61],[363,66],[262,76]],
m:[473,347,92,237,241,63,113,182,240,477,219,218,76,85,87,216,94,247,104,115,201,263,156,496,412,374,451,512,416,148,86,244,138,447,207,369,164,433],
tr:[7,8,9,173,202,214,215,231,270,271,272,277,278,282,285,324,428,446,472,478,492]
},{//Mesprit
l:[[93,1],[156,1],[286,6],[182,16],[129,21],[381,31],[248,36],[204,46],[326,51],[383,61],[363,66],[361,76]],
m:[473,347,92,237,241,58,59,63,113,182,240,477,219,218,85,87,216,94,247,104,115,201,263,156,496,412,374,451,512,416,148,86,244,138,447,207,369,164,433],
tr:[7,8,9,173,214,231,270,271,272,277,278,282,285,324,428,446,472,478]
},{//Azelf
l:[[93,1],[156,1],[286,6],[197,16],[129,21],[253,31],[248,36],[417,46],[326,51],[387,61],[363,66],[153,76]],
m:[473,347,92,237,241,269,63,113,182,240,477,219,218,85,87,216,94,247,104,115,53,201,126,259,263,156,496,412,374,451,510,512,153,371,416,148,86,244,138,447,207,369,164,433],
tr:[7,8,9,173,214,231,253,270,271,272,277,278,282,285,324,387,428,446,472,478]
},{//Dialga
l:[[184,1],[225,1],[232,6],[246,10],[163,15],[408,19],[368,24],[337,28],[414,33],[396,37],[231,42],[459,46],[430,50]],
m:[468,337,46,92,339,237,241,58,59,63,182,240,219,218,85,87,89,216,280,104,53,201,126,317,332,263,156,496,497,315,510,421,416,148,444,86,244,523,157,525,207,164,430,433,249,15,70],
t:[434],
tr:[173,200,214,231,304,334,356,393,406,414,442,446]
},{//Palkia
l:[[184,1],[225,1],[352,6],[246,10],[163,15],[408,19],[401,24],[337,28],[414,33],[396,37],[401,42],[460,46],[56,50]],
m:[468,337,46,92,258,339,237,241,58,59,63,182,240,219,218,85,87,89,216,280,104,53,201,126,317,332,263,156,496,497,411,374,510,421,416,444,86,244,523,157,525,207,164,433,249,15,57,70,291],
t:[434],
tr:[173,200,214,304,356,401,406,414]
},{//Heatran
l:[[246,1],[43,9],[424,17],[319,25],[242,33],[184,41],[436,49],[83,57],[442,65],[414,73],[257,81],[444,88],[463,96]],
m:[46,92,237,241,269,63,182,218,76,89,216,91,104,53,126,317,259,263,488,156,213,496,315,510,261,153,371,416,444,523,157,207,164,430,249,70],
tr:[173,214,253,257,334,399,406,414,442,446,450]
},{//Regigigas
l:[[7,1],[8,1],[9,1],[109,1],[146,1],[193,1],[282,1],[279,25],[469,40],[428,50],[371,65],[462,75],[484,90],[416,100]],
m:[92,237,241,63,240,219,218,479,85,87,89,216,280,104,317,332,263,496,411,374,371,514,416,397,444,86,244,523,157,207,164,249,70],
tr:[7,8,9,173,196,214,276,282,335,356,409,414,428,442]
},{//Giratina
l:[[184,1],[225,1],[466,6],[246,10],[163,15],[425,19],[194,24],[337,28],[414,33],[396,37],[421,42],[467,46],[506,50]],
m:[468,337,347,46,92,237,241,63,182,240,477,219,218,85,87,89,216,94,247,104,332,263,156,496,497,412,451,261,421,371,416,444,86,244,523,525,138,207,164,249,15,19,70],
t:[434],
tr:[173,180,196,200,214,231,304,356,399,401,406,414,442],
forms:[
{
	tr:[220]
},{
	tr:[277,366,434]
}]
},{//Cresselia
l:[[93,1],[104,1],[219,11],[54,20],[62,29],[248,38],[163,47],[236,57],[427,66],[375,75],[461,84],[94,93]],
m:[473,347,92,237,241,58,63,113,182,240,477,219,218,76,216,94,247,104,115,263,156,213,496,412,451,416,148,86,244,138,447,207,164,433],
tr:[173,196,214,270,271,277,278,285,324,356,428,478]
},{//Phione
l:[[145,1],[346,1],[204,9],[48,16],[61,24],[151,31],[250,39],[352,46],[392,54],[291,61],[240,69]],
m:[92,258,237,58,59,182,240,219,218,216,104,263,156,496,503,374,244,447,207,369,164,57,127,291],
tr:[173,196,214,215,253,270,282,324,340,343,387]
},{//Manaphy
l:[[145,1],[294,1],[346,1],[204,9],[48,16],[61,24],[151,31],[250,39],[352,46],[392,54],[291,61],[240,69],[391,76]],
m:[347,92,258,237,58,59,63,113,182,240,219,218,216,94,247,104,115,263,156,496,412,503,374,416,148,244,447,207,369,164,57,127,291],
tr:[173,196,214,215,253,270,282,285,324,340,343,387]
},{//Darkrai
l:[[50,1],[466,1],[98,11],[95,20],[185,29],[171,38],[104,47],[114,57],[464,66],[417,75],[138,84],[399,93]],
m:[347,92,237,241,269,58,59,63,182,240,218,85,87,216,94,247,280,104,188,317,332,259,263,156,168,496,411,374,451,510,261,373,421,371,514,416,148,86,14,244,157,404,398,138,207,164,249,555,15,70],
tr:[173,180,196,214,271,282,289,387,399,409,472,492]
},{//Shaymin
m:[92,237,241,63,182,219,218,76,216,94,104,263,156,496,412,416,148,14,244,447,207,164],
tr:[173,202,214,235,343,387,388,402,428],
forms:[
{
	l:[[74,1],[345,10],[73,19],[235,28],[230,37],[363,46],[388,55],[312,64],[412,73],[186,82],[361,91],[465,100]],
	tr:[283,414]
},{
	l:[[74,1],[345,10],[73,19],[98,28],[230,37],[363,46],[388,55],[403,64],[412,73],[186,82],[437,91],[465,100]],
	tr:[366]
}]
},{//Arceus
l:[[69,1],[322,1],[363,1],[386,1],[356,10],[414,20],[304,30],[245,40],[287,50],[248,60],[105,70],[63,80],[195,90],[449,100]],
m:[468,337,473,347,46,92,258,237,241,58,59,63,113,182,240,477,219,218,76,85,87,89,216,94,247,280,104,115,53,188,201,126,317,332,263,156,496,497,315,411,412,451,510,511,261,421,371,514,416,148,444,86,14,244,523,157,404,526,398,138,447,207,164,430,433,249,555,15,19,57,70,127],
t:[434],
tr:[173,196,200,202,214,231,257,271,277,278,304,324,334,356,366,387,399,401,406,414,428,442,446]
},{//Victini
l:[[93,1],[98,1],[116,1],[510,1],[545,1],[203,9],[29,17],[488,25],[179,33],[481,41],[428,49],[517,57],[38,65],[394,73],[515,81],[500,89],[315,97]],
m:[473,92,237,241,269,63,113,182,477,219,218,76,85,87,216,94,247,280,104,53,126,263,488,156,496,315,411,412,374,451,510,261,373,416,148,86,244,526,447,207,369,164,433,528,249],
tr:[7,9,173,214,253,257,270,271,272,277,285,324,340,387,428],
s:[557]
},{//Snivy
l:[[33,1],[43,4],[22,7],[35,10],[74,13],[536,16],[73,19],[72,22],[21,25],[348,28],[489,31],[202,34],[378,37],[380,40],[437,43]],
m:[347,92,237,241,269,113,182,219,218,76,216,104,115,332,259,263,156,213,496,412,148,14,447,207,164,15],
e:[137,212,228,230,231,239,243,345,363,445],
t:[520],
tr:[20,173,202,214,231,235,282,289,380,388,401,402]
},{//Servine
l:[[22,1],[33,1],[35,1],[43,1],[43,4],[22,7],[35,10],[74,13],[536,16],[73,20],[72,24],[21,28],[348,32],[489,36],[202,40],[378,44],[380,48],[437,52]],
m:[347,92,237,241,269,113,182,219,218,76,216,104,115,332,259,263,156,213,496,412,148,14,447,207,164,15],
t:[520],
tr:[20,173,202,214,231,235,282,289,380,388,401,402]
},{//Serperior
l:[[22,1],[33,1],[35,1],[43,1],[43,4],[22,7],[35,10],[74,13],[536,16],[73,20],[72,24],[21,28],[348,32],[489,38],[202,44],[378,50],[380,56],[437,62]],
m:[347,92,237,241,269,63,113,182,219,218,76,216,104,115,332,259,263,156,213,496,412,416,148,14,525,447,207,164,249,15,70],
t:[338,520],
tr:[20,173,200,202,214,231,235,282,289,380,388,401,402,406]
},{//Tepig
l:[[33,1],[39,3],[52,7],[316,9],[111,13],[488,15],[123,19],[205,21],[36,25],[535,27],[372,31],[53,33],[457,37],[46,39],[394,43]],
m:[46,92,237,241,269,182,218,76,216,104,53,126,317,263,488,156,213,496,497,315,510,261,360,447,207,164,528,249,70],
e:[34,37,174,214,222,276,281,283,343,484],
t:[519],
tr:[173,214,231,257,270,276,283,343]
},{//Pignite
l:[[33,1],[39,1],[52,1],[316,1],[39,3],[52,7],[316,9],[111,13],[488,15],[292,17],[123,20],[205,23],[36,28],[535,31],[372,36],[53,39],[457,44],[46,47],[394,52]],
m:[46,92,237,241,269,182,218,76,216,280,104,53,126,317,263,488,156,213,490,496,497,315,411,374,510,261,444,360,523,157,526,398,447,207,164,528,249,70],
t:[519],
tr:[7,9,67,173,214,231,257,270,276,283,343]
},{//Emboar
l:[[33,1],[39,1],[52,1],[316,1],[359,1],[39,3],[52,7],[316,9],[111,13],[488,15],[292,17],[123,20],[205,23],[36,28],[535,31],[372,38],[53,43],[457,50],[46,55],[394,62]],
m:[46,92,339,237,241,269,63,182,218,76,479,89,216,280,104,53,126,317,263,488,156,213,490,496,497,315,411,503,374,510,261,416,444,360,523,157,526,398,447,207,164,528,249,70],
t:[307,519],
tr:[7,9,67,173,214,231,257,270,276,283,335,343,442]
},{//Oshawott
l:[[33,1],[39,5],[55,7],[346,11],[116,13],[534,17],[210,19],[352,23],[279,25],[453,29],[227,31],[401,35],[514,37],[14,41],[56,43]],
m:[92,258,237,269,58,59,182,240,218,216,91,104,332,263,156,213,496,206,503,374,514,14,404,447,207,164,249,15,57,127,291],
e:[103,197,362,372,376,383,400,403],
t:[518],
tr:[173,196,214,231,270,343,401]
},{//Dewott
l:[[33,1],[39,1],[55,1],[346,1],[39,5],[55,7],[346,11],[116,13],[534,17],[210,20],[352,25],[279,28],[453,33],[227,36],[401,41],[514,44],[14,49],[56,52]],
m:[92,258,237,269,58,59,182,240,218,216,91,104,332,263,156,213,496,206,503,374,514,14,404,447,207,164,249,15,57,127,291],
t:[518],
tr:[173,196,214,231,270,343,401]
},{//Samurott
l:[[33,1],[39,1],[55,1],[224,1],[346,1],[39,5],[55,7],[346,11],[116,13],[534,17],[210,20],[352,25],[279,28],[453,33],[163,36],[227,38],[401,45],[514,50],[14,57],[56,62]],
m:[92,258,237,269,58,59,63,182,240,218,216,91,104,332,263,156,213,496,206,503,374,514,416,14,404,525,447,207,164,249,15,57,70,127,291],
t:[308,518],
tr:[173,196,214,231,270,276,282,335,343,401]
},{//Patrat
l:[[33,1],[43,3],[44,6],[117,8],[197,11],[28,13],[242,16],[95,18],[162,21],[495,23],[526,26],[158,28],[212,31],[226,33],[21,36]],
m:[92,237,241,182,240,218,85,216,91,247,104,263,156,213,496,374,514,14,526,447,207,164,15],
e:[103,175,193,228,231,279,372],
tr:[67,162,173,214,231,270,283,343,387,401,402,428,441,495]
},{//Watchog
l:[[33,1],[43,1],[44,1],[67,1],[43,3],[44,6],[117,8],[197,11],[28,13],[242,16],[95,18],[109,20],[162,22],[495,25],[244,29],[158,32],[212,36],[226,39],[21,43]],
m:[92,237,241,63,113,182,240,218,85,87,216,91,247,104,53,263,156,213,496,411,374,514,416,148,86,14,244,526,138,447,207,164,249,15,70],
tr:[7,8,9,67,162,173,214,231,270,282,283,324,343,387,401,402,428,441,495]
},{//Lillipup
l:[[33,1],[43,1],[316,5],[44,8],[270,12],[36,15],[526,19],[242,22],[46,26],[514,29],[179,33],[387,36],[416,40]],
m:[46,92,237,241,182,240,218,85,216,91,247,104,317,332,263,156,213,496,514,416,86,526,207,164,528,249,555],
e:[28,122,189,203,204,228,281,336,422,423,424],
tr:[173,214,253,270,304,343,387]
},{//Herdier
l:[[33,1],[43,1],[44,1],[316,1],[316,5],[44,8],[270,12],[36,15],[526,20],[242,24],[46,29],[514,33],[179,38],[387,42],[416,47]],
m:[46,92,237,241,182,240,218,85,216,91,247,104,317,332,263,156,213,496,371,514,416,86,526,207,164,528,249,555,57,70],
tr:[173,214,253,270,304,343,387]
},{//Stoutland
l:[[33,1],[43,1],[44,1],[316,1],[422,1],[423,1],[424,1],[316,5],[44,8],[270,12],[36,15],[526,20],[242,24],[46,29],[514,36],[179,42],[387,51],[416,59]],
m:[46,92,237,241,63,182,240,218,85,87,216,91,247,104,317,332,263,156,213,496,371,514,416,86,526,207,164,528,249,555,57,70],
tr:[173,214,253,270,276,304,343,387,442]
},{//Purrloin
l:[[10,1],[45,3],[274,6],[28,10],[154,12],[228,15],[259,19],[252,21],[468,24],[372,28],[163,30],[445,33],[400,37],[289,39],[417,42],[389,46]],
m:[468,92,237,241,269,182,240,218,216,247,104,332,259,263,156,213,168,496,497,373,421,371,86,244,138,447,207,164,555,15],
mr:[369],
e:[6,185,204,227,281,313,343,492],
tr:[173,180,214,231,271,272,282,289,304,343,399,402,441,492]
},{//Liepard
l:[[10,1],[28,1],[45,1],[274,1],[45,3],[274,6],[28,10],[154,12],[228,15],[259,19],[252,22],[468,26],[372,31],[163,34],[269,38],[400,43],[289,47],[417,50],[389,55]],
m:[468,92,237,241,269,63,182,240,218,216,247,104,332,259,263,156,213,168,496,497,373,421,371,416,86,244,138,447,207,164,249,555,15],
mr:[369],
tr:[173,180,214,231,271,272,282,289,304,343,399,402,441,492]
},{//Pansage
l:[[10,1],[43,4],[122,7],[22,10],[154,13],[73,16],[44,19],[402,22],[259,25],[374,28],[512,31],[447,34],[278,37],[363,40],[242,43]],
m:[468,92,237,241,269,182,218,76,216,91,104,317,259,263,156,213,168,490,496,412,374,512,421,371,148,526,447,207,164,249,15],
e:[67,272,310,320,321,331,343,345,417,437],
tr:[67,173,202,214,231,235,253,270,272,278,282,283,343,388,402,441]
},{//Simisage
l:[[43,1],[122,1],[154,1],[402,1]],
m:[468,92,237,241,269,63,182,218,76,216,91,280,104,317,259,263,156,213,168,490,496,411,412,374,512,421,371,416,148,157,526,447,207,164,249,15],
tr:[67,173,202,214,231,235,253,270,272,276,278,282,283,343,388,402,441]
},{//Pansear
l:[[10,1],[43,4],[122,7],[510,10],[154,13],[281,16],[44,19],[481,22],[133,25],[374,28],[512,31],[126,34],[278,37],[363,40],[242,43]],
m:[468,92,237,241,269,182,218,76,216,91,104,53,126,317,259,263,488,156,213,168,490,496,315,374,510,261,512,421,371,526,447,207,164,249,15],
e:[7,67,83,214,257,272,310,321,343,417],
tr:[7,67,173,214,231,253,257,270,272,278,282,283,343,441]
},{//Simisear
l:[[43,1],[122,1],[154,1],[481,1]],
m:[468,92,237,241,269,63,182,218,76,216,91,280,104,53,126,317,259,263,488,156,213,168,490,496,315,411,374,510,261,512,421,371,416,157,526,447,207,164,249,15],
tr:[7,67,173,214,231,253,257,270,272,276,278,282,283,343,441]
},{//Panpour
l:[[10,1],[43,4],[122,7],[55,10],[154,13],[346,16],[44,19],[503,22],[269,25],[374,28],[512,31],[362,34],[278,37],[363,40],[242,43]],
m:[468,92,258,237,269,58,59,182,240,218,216,91,104,317,259,263,156,213,168,490,496,503,374,512,421,371,526,447,207,164,249,15,57,127,291],
e:[56,67,272,300,310,321,343,392,401,417],
tr:[8,67,173,196,214,231,253,270,272,278,282,283,343,401,441]
},{//Simipour
l:[[43,1],[122,1],[154,1],[503,1]],
m:[468,92,258,237,269,58,59,63,182,240,218,216,91,280,104,317,259,263,156,213,168,490,496,411,503,374,512,421,371,416,157,526,447,207,164,249,15,57,127,291],
tr:[8,67,173,196,214,231,253,270,272,276,278,282,283,343,401,441]
},{//Munna
l:[[111,1],[149,1],[381,5],[281,7],[60,11],[286,13],[236,17],[95,19],[428,23],[485,25],[171,29],[248,31],[347,35],[94,37],[138,41],[477,43],[500,47]],
m:[473,347,92,237,113,182,240,477,219,218,216,94,247,104,115,317,259,263,156,213,496,412,451,148,86,360,244,157,138,207,164,433],
e:[49,112,129,174,214,226,270,277,290],
tr:[173,214,215,220,270,271,277,285,324,356,388,428,472,495]
},{//Musharna
l:[[60,1],[95,1],[111,1],[381,1]],
m:[473,347,92,237,63,113,182,240,477,219,218,216,94,247,104,115,317,259,263,156,213,496,412,451,416,148,86,360,244,157,138,207,164,433],
tr:[173,214,215,220,270,271,277,285,324,356,388,428,472,495]
},{//Pidove
l:[[16,1],[45,4],[43,8],[98,11],[314,15],[355,18],[197,22],[269,25],[403,29],[13,32],[297,36],[207,39],[263,43],[366,46],[143,50]],
m:[92,237,241,269,182,240,218,216,104,332,263,156,213,496,497,526,207,365,369,164,19],
e:[95,211,234,253,273,381,516],
tr:[143,173,214,253,257,355,366],
s:[16,95,234]
},{//Tranquill
l:[[16,1],[43,1],[45,1],[98,1],[45,4],[43,8],[98,11],[314,15],[355,18],[197,23],[269,27],[403,32],[13,36],[297,41],[207,45],[263,50],[366,54],[143,59]],
m:[92,237,241,269,182,240,218,216,104,332,263,156,213,496,497,526,207,365,369,164,19],
tr:[143,173,214,253,257,355,366]
},{//Unfezant
l:[[16,1],[43,1],[45,1],[98,1],[45,4],[43,8],[98,11],[314,15],[355,18],[197,23],[269,27],[403,33],[13,38],[297,44],[207,49],[263,55],[366,60],[143,66]],
m:[92,237,241,269,63,182,240,218,216,104,332,263,156,213,496,497,416,244,526,207,365,369,164,19],
tr:[143,173,214,253,257,355,366]
},{//Blitzle
l:[[98,1],[39,4],[268,8],[351,11],[86,15],[488,18],[228,22],[209,25],[23,29],[435,32],[97,36],[528,39],[37,43]],
m:[92,237,113,182,240,218,85,87,216,104,263,488,156,213,496,451,148,521,86,207,164,528],
e:[24,28,36,38,99,103,203,351,382],
tr:[173,214,324,340,393]
},{//Zebstrika
l:[[39,1],[86,1],[98,1],[268,1],[39,4],[268,8],[351,11],[86,15],[488,18],[228,22],[209,25],[23,31],[435,36],[97,42],[528,47],[37,53]],
m:[92,237,63,113,182,240,218,85,87,216,104,263,488,156,213,496,315,451,416,148,521,86,207,164,528,249],
tr:[173,214,324,340,393]
},{//Roggenrola
l:[[33,1],[106,4],[28,7],[29,10],[350,14],[189,17],[334,20],[479,23],[157,27],[446,30],[201,33],[444,36],[153,40]],
m:[92,237,182,218,479,89,216,104,201,317,263,156,213,496,153,397,444,523,157,207,164,430,249,70],
e:[36,174,199,222,317,356,475,484],
tr:[173,214,334,335,356,414,446]
},{//Boldore
l:[[28,1],[29,1],[33,1],[106,1],[106,4],[28,7],[29,10],[350,14],[189,17],[334,20],[479,23],[408,25],[157,30],[446,36],[201,42],[444,48],[153,55]],
m:[92,237,182,218,479,89,216,104,201,317,263,156,213,496,153,397,444,523,157,207,164,430,249,70],
tr:[173,214,334,335,356,414,446],
s:[174,484,479]
},{//Gigalith
l:[[28,1],[29,1],[33,1],[106,1],[106,4],[28,7],[29,10],[350,14],[189,17],[334,20],[479,23],[408,25],[157,30],[446,36],[201,42],[444,48],[153,55]],
m:[92,237,63,182,218,76,479,89,216,104,201,317,263,156,213,496,153,416,397,444,523,157,207,164,430,249,70],
tr:[173,214,276,334,335,356,414,442,446]
},{//Woobat
l:[[93,1],[316,4],[16,8],[372,12],[531,15],[286,19],[314,21],[213,25],[133,29],[347,29],[403,32],[248,36],[94,41],[283,47]],
m:[473,347,92,237,269,113,182,240,477,219,218,216,94,247,104,115,332,259,263,156,213,168,496,412,451,512,373,148,86,360,244,138,207,365,369,164,433,19],
e:[48,204,260,270,282,313,355,485,500],
tr:[162,173,202,214,253,257,270,271,277,282,283,285,324,355,366,428,495]
},{//Swoobat
l:[[16,1],[93,1],[316,1],[372,1],[316,4],[16,8],[372,12],[531,15],[286,19],[314,21],[213,25],[133,29],[347,29],[403,32],[248,36],[94,41],[283,47]],
m:[473,347,92,237,269,63,113,182,240,477,219,218,216,94,247,104,115,332,259,263,156,213,168,496,412,451,512,373,416,148,86,360,244,138,207,365,369,164,433,19],
tr:[143,162,173,202,214,253,257,270,271,277,282,283,285,324,355,366,428,495]
},{//Drilbur
l:[[10,1],[300,1],[229,5],[189,8],[154,12],[232,15],[91,19],[468,22],[163,26],[157,29],[89,33],[14,36],[201,40],[529,43],[90,47]],
m:[468,92,237,182,218,89,216,91,280,104,188,201,317,332,263,156,213,496,374,421,14,523,157,404,398,207,164,249,15,70],
e:[66,130,229,306,319,334,414,431],
tr:[173,214,334,414,446,529],
s:[319,229,431]
},{//Excadrill
l:[[10,1],[189,1],[229,1],[300,1],[229,5],[189,8],[154,12],[232,15],[91,19],[468,22],[163,26],[157,29],[32,31],[89,36],[14,42],[201,49],[529,55],[90,62]],
m:[468,92,237,63,182,218,89,216,91,280,104,188,201,317,332,263,156,213,496,411,374,421,416,14,523,157,404,398,207,164,249,15,70],
tr:[173,214,334,393,414,442,446,529]
},{//Audino
l:[[1,1],[45,1],[270,1],[287,5],[3,10],[213,15],[290,20],[494,25],[36,30],[505,35],[495,40],[493,45],[38,50],[387,55]],
m:[473,347,92,237,241,58,59,63,113,182,240,477,219,218,76,85,87,216,91,94,247,104,115,53,126,263,156,213,496,497,374,451,510,514,148,86,244,526,138,447,207,164,433,528,57],
e:[133,186,214,215,227,273,281,361,381,516],
tr:[7,8,9,67,173,196,214,215,220,231,253,270,272,277,282,285,289,304,324,343,356,387,409,428,495],
s:[227,270,281]
},{//Timburr
l:[[1,1],[43,1],[116,4],[117,8],[67,12],[88,16],[358,20],[498,24],[339,28],[157,31],[223,34],[184,37],[359,40],[444,43],[264,46],[276,49]],
m:[92,339,237,241,269,182,240,218,479,216,91,280,104,317,263,156,213,490,496,411,374,371,514,444,157,526,398,447,207,164,249,70],
e:[4,68,179,183,193,197,203,265,395,409,469],
tr:[7,8,9,67,173,214,270,276,282,335,409]
},{//Gurdurr
l:[[1,1],[43,1],[116,1],[117,1],[116,4],[117,8],[67,12],[88,16],[358,20],[498,24],[339,29],[157,33],[223,37],[184,41],[359,45],[444,49],[264,53],[276,57]],
m:[92,339,237,241,269,182,240,218,479,216,91,280,104,317,263,156,213,490,496,411,374,371,514,444,157,526,398,447,207,164,249,70],
tr:[7,8,9,67,173,214,270,276,282,335,409],
s:[409,67,183]
},{//Conkeldurr
l:[[1,1],[43,1],[116,1],[117,1],[116,4],[117,8],[67,12],[88,16],[358,20],[498,24],[339,29],[157,33],[223,37],[184,41],[359,45],[444,49],[264,53],[276,57]],
m:[92,339,237,241,269,63,182,240,218,479,89,216,91,280,104,317,263,156,213,490,496,411,374,371,514,416,444,523,157,526,398,447,207,164,249,70],
tr:[7,8,9,67,173,214,270,276,282,335,409]
},{//Tympole
l:[[45,1],[145,1],[48,5],[496,9],[61,12],[341,16],[392,20],[253,23],[330,27],[240,31],[175,34],[497,38],[56,42],[304,45]],
m:[92,258,237,182,240,218,216,104,482,188,263,156,213,496,497,503,207,164,57],
e:[54,173,214,287,300,352,414,426],
tr:[173,196,214,253,283,304,340,414],
s:[414,496,352]
},{//Palpitoad
l:[[45,1],[48,1],[145,1],[496,1],[48,5],[496,9],[61,12],[341,16],[392,20],[253,23],[330,28],[240,33],[175,37],[497,42],[56,47],[304,51]],
m:[92,258,237,182,240,218,216,104,482,188,263,156,213,496,497,503,523,207,164,249,57],
tr:[173,196,214,253,283,304,340,380,414,446]
},{//Seismitoad
l:[[45,1],[48,1],[145,1],[496,1],[48,5],[496,9],[61,12],[341,16],[392,20],[253,23],[330,28],[240,33],[51,36],[175,39],[409,44],[497,49],[56,53],[304,59]],
m:[92,258,474,237,63,182,240,218,89,216,91,280,104,482,188,317,263,156,213,496,497,411,503,374,371,416,523,157,398,447,207,164,249,57,70],
tr:[8,67,173,196,214,253,282,283,304,340,380,409,414,446]
},{//Throh
l:[[20,1],[43,1],[117,5],[116,9],[69,13],[233,17],[279,21],[480,25],[34,29],[339,33],[509,37],[203,41],[469,45],[276,49],[179,53]],
m:[92,339,237,241,269,182,240,218,89,216,91,280,104,317,263,156,213,490,496,411,374,371,514,416,444,523,157,526,398,447,207,164,249,70],
tr:[7,8,9,20,67,173,214,220,270,276,282,335],
s:[20,8,276]
},{//Sawk
l:[[43,1],[249,1],[117,5],[116,9],[24,13],[490,17],[68,21],[2,25],[280,29],[339,33],[514,37],[203,41],[501,45],[370,49],[179,53]],
m:[92,339,237,241,269,182,240,218,89,216,91,280,104,317,263,156,213,490,496,411,374,371,514,416,444,523,157,526,398,447,207,164,249,70],
tr:[7,8,9,67,173,214,220,270,276,282,335,530],
s:[530,249,9]
},{//Sewaddle
l:[[33,1],[81,1],[450,8],[75,15],[522,22],[203,29],[405,36],[175,43]],
m:[347,92,237,241,113,182,219,218,76,216,104,263,156,213,496,412,371,148,522,138,447,207,164,15],
e:[13,97,103,170,226,293,318,382,403],
tr:[173,202,214,235,277,324,334,388,402,450,527]
},{//Swadloon
l:[[33,1],[75,1],[81,1],[320,1],[450,1],[182,20]],
m:[347,92,237,241,113,182,219,218,76,216,104,263,156,213,496,412,371,148,522,138,447,207,164,15],
tr:[173,202,214,235,277,324,334,388,402,450,527]
},{//Leavanny
l:[[33,1],[75,1],[81,1],[206,1],[450,1],[450,8],[75,15],[522,22],[163,29],[270,32],[348,36],[404,39],[494,43],[14,46],[437,50]],
m:[468,347,92,237,241,63,113,182,219,218,76,216,104,115,332,263,156,213,496,412,206,421,371,514,416,148,14,522,404,398,138,447,207,164,15],
tr:[173,202,214,215,235,270,277,282,324,334,388,402,450,527]
},{//Venipede
l:[[111,1],[205,1],[40,5],[103,8],[228,12],[182,15],[342,19],[450,22],[474,26],[97,29],[537,33],[92,36],[431,40],[38,43]],
m:[92,474,237,241,182,218,76,216,104,188,263,156,213,496,371,360,522,398,207,164,249],
e:[36,41,42,191,390,431],
tr:[173,214,283,334,450]
},{//Whirlipede
l:[[40,1],[103,1],[111,1],[205,1],[40,5],[103,8],[228,12],[182,15],[342,19],[334,22],[450,23],[474,28],[97,32],[537,37],[92,41],[431,46],[38,50]],
m:[92,474,237,241,182,218,76,216,104,188,263,156,213,496,371,360,522,398,207,164,249],
tr:[173,214,283,334,450]
},{//Scolipede
l:[[40,1],[103,1],[111,1],[205,1],[224,1],[40,5],[103,8],[228,12],[182,15],[342,19],[450,23],[474,28],[226,30],[97,33],[537,39],[92,44],[431,50],[38,55]],
m:[92,474,237,241,63,182,218,76,89,216,91,104,188,317,263,156,213,496,371,416,360,14,522,523,157,404,398,207,164,249,15,70],
tr:[173,214,231,276,283,289,334,401,450],
s:[342,276,390]
},{//Cottonee
l:[[71,1],[74,4],[73,8],[78,10],[72,13],[178,17],[75,19],[77,22],[202,26],[204,28],[270,31],[412,35],[538,37],[241,40],[283,44],[76,46]],
m:[92,237,241,269,182,219,218,76,216,104,263,156,213,496,412,148,138,447,207,164],
e:[227,251,262,313,320,321,363,388,415],
tr:[173,202,214,270,282,283,343,366,388,402],
s:[227,73,388]
},{//Whimsicott
l:[[72,1],[73,1],[74,1],[178,1],[16,10],[366,28],[542,46]],
m:[92,237,241,269,63,113,182,219,218,76,216,94,247,104,263,156,213,168,496,412,374,416,148,138,447,207,369,164,433],
tr:[173,202,214,270,282,283,343,366,388,402]
},{//Petilil
l:[[71,1],[74,4],[73,8],[79,10],[72,13],[235,17],[345,19],[78,22],[202,26],[312,28],[270,31],[412,35],[494,37],[241,40],[495,44],[437,46]],
m:[92,237,241,182,219,218,76,216,104,263,156,213,496,412,148,138,447,207,164,15],
e:[117,203,204,230,275,320,361,363,388],
tr:[173,202,214,215,235,270,343,388,402,495],
s:[204,79,230]
},{//Lilligant
l:[[72,1],[73,1],[74,1],[235,1],[298,10],[483,28],[80,46]],
m:[92,237,241,63,113,182,219,218,76,216,104,263,156,213,496,412,416,148,14,138,447,207,164,15],
tr:[173,202,214,215,235,270,272,343,388,402,495]
},{//Basculin
l:[[33,1],[55,1],[253,4],[29,7],[44,10],[453,13],[498,16],[36,20],[242,24],[401,28],[487,32],[38,36],[184,41],[175,46],[515,51],[37,56]],
m:[92,258,237,269,58,182,240,218,216,104,263,156,213,496,503,207,164,15,57,127,291],
e:[61,97,99,129,250,279,330,341,362],
tr:[173,196,214,253,276,283,340,401,428],
s:[97,29,428]
},{//Sandile
l:[[43,1],[99,1],[44,4],[28,7],[259,10],[328,13],[372,16],[189,19],[373,22],[207,25],[242,28],[91,31],[184,34],[492,37],[201,40],[89,43],[37,46]],
m:[468,46,92,237,269,182,218,89,216,91,104,188,201,317,259,263,156,213,168,496,510,373,371,514,444,523,157,207,164,555,15],
e:[38,68,116,212,228,251,253,422,424,431],
tr:[173,180,214,231,253,289,399,401,414,446,492]
},{//Krokorok
l:[[28,1],[43,1],[44,1],[99,1],[44,4],[28,7],[259,10],[328,13],[372,16],[189,19],[373,22],[207,25],[242,28],[91,32],[184,36],[492,40],[201,44],[89,48],[37,52]],
m:[468,46,92,237,269,182,218,89,216,91,280,104,188,201,317,259,263,156,213,168,490,496,374,510,373,421,371,514,444,523,157,447,207,164,249,555,15,70],
tr:[67,173,180,214,231,253,282,289,399,401,414,446,492]
},{//Krookodile
l:[[28,1],[43,1],[44,1],[99,1],[44,4],[28,7],[259,10],[328,13],[372,16],[189,19],[373,22],[207,25],[242,28],[91,32],[184,36],[492,42],[201,48],[89,54],[200,60]],
m:[468,337,46,92,339,237,269,63,182,218,479,89,216,91,280,104,188,201,317,332,259,263,156,213,168,490,496,411,374,510,373,421,371,514,416,444,523,157,525,447,207,164,249,555,15,70],
tr:[67,173,180,200,214,231,253,276,282,289,335,399,401,406,414,446,492],
s:[68,242,212]
},{//Darumaka
l:[[33,1],[205,3],[510,6],[99,9],[424,11],[29,14],[253,17],[263,19],[7,22],[526,25],[37,27],[187,30],[394,33],[269,35],[276,39],[315,42]],
m:[46,92,237,241,269,182,218,76,216,91,280,104,53,126,317,263,488,156,213,168,496,315,374,510,261,360,157,526,447,207,369,164,249,70],
e:[36,116,172,203,214,227,264,281,359],
tr:[7,173,214,253,257,276,283,428]
},{//Darmanitan
l:[[33,1],[99,1],[205,1],[510,1],[205,3],[510,6],[99,9],[424,11],[29,14],[207,17],[263,19],[7,22],[526,25],[37,27],[187,30],[394,33],[359,35],[269,39],[276,47],[315,54]],
m:[46,92,339,237,241,269,63,182,218,76,479,89,216,91,94,280,104,53,126,317,259,263,488,156,213,168,496,315,411,374,510,261,371,416,444,360,523,157,526,447,207,369,164,249,70],
tr:[7,173,214,253,257,276,283,428]
},{//Maractus
l:[[64,1],[71,1],[230,3],[74,6],[42,10],[72,13],[235,15],[178,18],[302,22],[202,26],[367,29],[275,33],[80,38],[389,42],[241,45],[76,50],[538,55],[495,57]],
m:[92,237,241,182,219,218,76,216,104,332,263,156,213,496,412,398,447,207,164],
e:[73,191,320,331,340,388,402,452],
tr:[173,202,214,235,253,270,282,283,304,340,388,402,409,495],
s:[73,42,191]
},{//Dwebble
l:[[210,1],[350,5],[110,7],[28,11],[185,13],[479,17],[397,19],[450,23],[446,24],[157,29],[163,31],[404,35],[504,37],[175,41],[439,43]],
m:[468,92,237,182,218,76,479,89,216,91,104,201,317,332,263,156,213,496,421,397,444,14,522,523,157,404,398,207,164,249,15,70],
e:[68,174,191,203,328,334,335,400],
tr:[173,214,282,334,335,446,450]
},{//Crustle
l:[[28,1],[110,1],[350,1],[504,1],[350,5],[110,7],[28,11],[185,13],[479,17],[397,19],[450,23],[446,24],[157,29],[163,31],[404,38],[504,43],[175,50],[439,55]],
m:[468,92,237,63,182,218,76,479,89,216,91,104,201,317,332,263,156,213,496,421,416,397,444,14,522,523,157,404,398,207,164,249,15,70],
tr:[173,214,282,334,335,446,450],
s:[68,400,157]
},{//Scraggy
l:[[43,1],[67,1],[28,5],[185,9],[29,12],[207,16],[280,20],[371,23],[498,27],[136,31],[184,34],[242,38],[263,42],[431,45],[264,49],[457,53]],
m:[337,46,92,339,237,241,269,182,240,218,479,216,91,280,104,188,317,259,263,156,213,490,496,411,374,510,371,514,444,157,525,526,398,447,207,164,249,555,70],
e:[7,8,9,68,133,185,197,252,349,409,428],
tr:[7,8,9,67,162,173,180,214,231,282,289,334,399,406,409,428,442,492,530],
s:[409,252,67]
},{//Scrafty
l:[[28,1],[43,1],[67,1],[185,1],[28,5],[185,9],[29,12],[207,16],[280,20],[371,23],[498,27],[136,31],[184,34],[242,38],[263,45],[431,51],[264,58],[457,65]],
m:[337,46,92,339,237,241,269,63,182,240,218,479,216,91,280,104,188,317,259,263,156,213,168,490,496,411,374,510,371,514,416,444,157,525,526,398,447,207,164,249,555,70],
tr:[7,8,9,67,162,173,180,200,214,231,282,289,334,399,406,409,428,442,492,530]
},{//Sigilyph
l:[[16,1],[357,1],[95,4],[149,8],[366,11],[18,14],[60,18],[314,21],[113,24],[115,28],[485,31],[119,34],[356,38],[403,41],[94,44],[322,48],[143,51]],
m:[473,347,92,237,58,63,113,182,240,477,219,218,76,479,216,94,247,104,115,332,263,156,213,168,496,412,451,148,86,244,138,207,365,164,430,433,19],
e:[211,246,285,355,375,500],
tr:[143,173,196,214,257,271,277,285,324,355,356,366,399,428,478],
s:[257,95,500]
},{//Yamask
l:[[182,1],[310,1],[50,5],[114,9],[101,13],[506,17],[261,21],[466,25],[174,29],[470,33],[471,33],[247,37],[288,41],[212,45],[194,49]],
m:[347,92,237,182,240,477,219,218,216,94,247,104,263,156,213,168,496,412,261,373,371,148,244,138,207,164,433],
e:[50,171,203,262,286,313,377,417],
tr:[173,180,214,220,271,272,277,282,285,289,334,335,399,472,495]
},{//Cofagrigus
l:[[50,1],[114,1],[182,1],[310,1],[50,5],[114,9],[101,13],[506,17],[261,21],[466,25],[174,29],[470,33],[471,33],[184,34],[247,39],[288,45],[212,51],[194,57]],
m:[347,92,237,63,182,240,477,219,218,216,94,247,104,263,156,213,168,496,412,261,373,371,416,148,244,138,447,207,164,433],
tr:[173,180,214,220,271,272,277,282,285,289,334,335,399,472,495]
},{//Tirtouga
l:[[55,1],[110,1],[117,1],[205,5],[44,8],[182,11],[453,15],[246,18],[242,21],[469,25],[362,28],[479,31],[174,35],[504,38],[401,41],[157,45],[240,48],[56,51]],
m:[92,237,58,59,182,240,218,479,89,216,91,104,201,317,263,156,213,496,503,397,444,523,157,207,164,249,57,70,127,291],
e:[21,34,88,117,175,250,282,334,352],
tr:[173,196,214,231,334,335,401,414,446],
s:[175,334,205]
},{//Carracosta
l:[[55,1],[110,1],[117,1],[205,1],[205,5],[44,8],[182,11],[453,15],[246,18],[242,21],[469,25],[362,28],[479,31],[174,35],[504,40],[401,45],[157,51],[240,56],[56,61]],
m:[92,237,58,59,63,182,240,218,479,89,216,91,104,201,317,263,156,213,496,411,503,416,397,444,523,157,207,164,249,57,70,127,291],
tr:[67,173,196,214,231,276,334,335,401,414,442,446]
},{//Archen
l:[[17,1],[43,1],[98,1],[88,5],[104,8],[184,11],[365,15],[246,18],[97,21],[501,25],[512,28],[225,31],[242,35],[283,38],[369,41],[157,45],[337,48],[37,51]],
m:[468,337,46,92,237,269,182,218,479,89,216,91,104,201,317,332,259,263,156,213,496,512,421,397,444,523,157,207,365,369,164,249,15],
e:[44,211,282,406,414,432,457],
tr:[173,214,231,253,257,283,334,340,355,366,401,406,414,446]
},{//Archeops
l:[[17,1],[43,1],[88,1],[98,1],[88,5],[104,8],[184,11],[365,15],[246,18],[97,21],[501,25],[512,28],[225,31],[242,35],[283,40],[369,45],[157,51],[337,56],[37,61]],
m:[468,337,46,92,237,269,63,182,218,479,89,216,91,104,201,317,332,259,263,156,213,496,411,512,421,416,397,444,523,157,525,207,365,369,164,249,15,19],
tr:[143,173,200,214,231,253,257,283,334,340,355,366,401,406,414,446]
},{//Trubbish
l:[[1,1],[139,1],[278,3],[390,7],[491,12],[3,14],[124,18],[254,23],[256,23],[36,25],[188,29],[499,34],[92,36],[133,40],[441,45],[153,47]],
m:[92,474,237,241,182,240,218,216,104,482,188,263,156,213,168,496,153,371,207,164],
e:[28,114,120,174,191,205,300,350],
tr:[173,180,202,214,220,278,399,402,409,441]
},{//Garbodor
l:[[1,1],[139,1],[278,1],[390,1],[278,3],[390,7],[491,12],[3,14],[124,18],[254,23],[256,23],[34,25],[188,29],[499,34],[92,39],[133,46],[441,54],[153,59]],
m:[92,474,237,241,63,182,240,218,76,479,85,216,94,104,482,188,263,156,213,168,496,411,374,153,371,416,397,207,164],
tr:[173,180,202,214,220,278,399,402,409,441]
},{//Zorua
l:[[10,1],[43,1],[228,5],[313,9],[154,13],[185,17],[184,21],[269,25],[492,29],[259,33],[97,37],[373,41],[386,45],[417,49],[286,53],[539,57]],
m:[468,347,46,92,237,241,269,182,240,218,216,91,247,104,332,259,263,156,213,168,496,374,510,373,371,514,14,244,447,207,369,164,555,15],
e:[68,197,262,289,326,389,399,445],
tr:[173,180,214,253,271,282,289,304,340,343,399,492]
},{//Zoroark
l:[[10,1],[43,1],[228,1],[369,1],[468,1],[228,5],[468,9],[154,13],[185,17],[184,21],[269,25],[492,29],[400,30],[259,34],[97,39],[373,44],[386,49],[417,54],[286,59],[539,64]],
m:[468,347,46,92,237,241,269,63,182,240,218,216,91,247,104,53,332,259,263,156,213,168,490,496,411,374,510,373,421,371,514,416,14,244,447,207,369,164,249,555,15],
tr:[67,173,180,214,253,271,282,289,304,340,343,399,492]
},{//Minccino
l:[[1,1],[45,3],[270,7],[321,9],[3,13],[227,15],[129,19],[47,21],[541,25],[204,27],[358,31],[497,33],[21,37],[445,39],[304,43],[387,45],[495,49]],
m:[347,92,237,241,182,240,219,218,85,216,91,104,263,156,213,168,496,497,374,514,86,526,447,207,369,164],
e:[39,175,189,203,214,231,282,313,401],
tr:[173,214,231,253,270,282,304,343,387,401,402,441,495]
},{//Cinccino
l:[[47,1],[270,1],[321,1],[331,1],[350,1],[541,1]],
m:[347,92,237,241,63,113,182,240,219,218,85,87,216,91,104,263,156,213,496,497,411,374,514,416,86,526,447,207,369,164],
mr:[168],
tr:[173,214,231,253,270,282,304,343,387,401,402,441,495]
},{//Gothita
l:[[1,1],[93,3],[321,7],[313,10],[3,14],[60,16],[373,19],[185,24],[473,25],[260,28],[248,31],[377,33],[94,37],[477,40],[204,46],[478,48]],
m:[473,347,92,237,269,113,182,240,477,219,218,85,216,94,247,104,115,317,259,263,156,213,168,496,412,374,451,373,371,148,86,244,157,138,447,207,164,433],
e:[212,243,253,357,399,445],
tr:[173,214,215,253,270,271,272,277,278,285,289,324,343,356,428,478,492]
},{//Gothorita
l:[[1,1],[93,1],[313,1],[321,1],[93,3],[321,7],[313,10],[3,14],[60,16],[373,19],[185,24],[473,25],[260,28],[248,31],[377,34],[94,39],[477,43],[204,50],[478,53]],
m:[473,347,92,237,269,113,182,240,477,219,218,85,216,94,247,104,115,317,259,263,156,213,168,496,412,374,451,373,371,148,86,244,157,138,447,207,164,433],
tr:[173,214,215,253,270,271,272,277,278,285,289,324,343,356,428,478,492]
},{//Gothitelle
l:[[1,1],[93,1],[313,1],[321,1],[93,3],[321,7],[313,10],[3,14],[60,16],[373,19],[185,24],[473,25],[260,28],[248,31],[377,34],[94,39],[477,45],[204,54],[478,59]],
m:[473,347,92,237,269,63,113,182,240,477,219,218,85,216,94,247,280,104,115,317,259,263,156,213,168,490,496,412,374,451,373,371,416,148,86,244,157,138,447,207,164,433],
tr:[173,214,215,253,270,271,272,277,278,285,289,324,343,356,428,478,492]
},{//Solosis
l:[[149,1],[115,3],[205,7],[289,10],[237,14],[113,16],[204,19],[105,24],[473,25],[283,28],[248,31],[220,33],[94,37],[285,40],[377,46],[472,48]],
m:[473,347,92,237,113,182,240,477,219,218,87,216,94,247,104,115,317,263,156,213,496,412,373,153,148,86,360,244,157,138,207,164,430,433],
e:[101,109,151,271,286,290,310],
tr:[173,214,220,271,272,277,283,285,289,324,356,428,472,495]
},{//Duosion
l:[[115,1],[149,1],[205,1],[289,1],[115,3],[205,7],[289,10],[237,14],[113,16],[204,19],[105,24],[473,25],[283,28],[248,31],[220,34],[94,39],[285,43],[377,50],[472,53]],
m:[473,347,92,237,113,182,240,477,219,218,87,216,94,247,104,115,317,263,156,213,496,412,373,153,148,86,360,244,157,138,207,164,430,433],
tr:[173,214,220,271,272,277,283,285,289,324,356,428,472,495],
s:[286,105,271]
},{//Reuniclus
l:[[115,1],[149,1],[205,1],[289,1],[115,3],[205,7],[289,10],[237,14],[113,16],[204,19],[105,24],[473,25],[283,28],[248,31],[220,34],[94,39],[146,41],[285,45],[377,54],[472,59]],
m:[473,347,92,237,63,113,182,240,477,219,218,87,216,94,247,104,115,317,263,156,213,496,411,412,374,373,153,416,148,86,360,244,157,138,447,207,164,430,433,249,70],
tr:[7,8,9,173,214,220,270,271,272,276,277,282,283,285,289,324,356,409,428,472,495]
},{//Ducklett
l:[[55,1],[346,3],[432,6],[17,9],[352,13],[332,15],[61,19],[297,21],[392,24],[403,27],[355,30],[240,34],[366,37],[413,41],[542,46]],
m:[92,258,237,58,182,240,218,216,104,332,263,156,213,496,503,207,365,164,19,57,291],
e:[16,119,211,314,362,381,382],
tr:[173,196,214,253,283,355,366],
s:[362,432,382]
},{//Swanna
l:[[17,1],[55,1],[346,1],[432,1],[346,3],[432,6],[17,9],[352,13],[332,15],[61,19],[297,21],[392,24],[403,27],[355,30],[240,34],[366,40],[413,47],[542,55]],
m:[92,258,237,58,63,182,240,218,216,104,332,263,156,213,496,503,416,207,365,164,19,57,291],
tr:[143,173,196,214,253,283,355,366]
},{//Vanillite
l:[[333,1],[106,4],[310,7],[253,10],[196,13],[54,16],[419,19],[269,22],[429,26],[151,31],[58,35],[258,40],[243,44],[59,49],[329,53]],
m:[92,258,237,269,58,59,113,182,240,218,216,104,263,156,213,496,153,524,207,164,430],
e:[181,286,334,352,363,393,420,475],
tr:[173,196,214,253,277,324,334,393]
},{//Vanillish
l:[[106,1],[253,1],[310,1],[333,1],[106,4],[310,7],[253,10],[196,13],[54,16],[419,19],[269,22],[429,26],[151,31],[58,36],[258,42],[243,47],[59,53],[329,58]],
m:[92,258,237,269,58,59,113,182,240,218,216,104,263,156,213,496,153,524,207,164,430],
tr:[173,196,214,253,277,324,334,393],
s:[420,286,429]
},{//Vanilluxe
l:[[106,1],[253,1],[310,1],[311,1],[333,1],[106,4],[310,7],[253,10],[196,13],[54,16],[419,19],[269,22],[429,26],[151,31],[58,36],[258,42],[243,50],[59,59],[329,67]],
m:[92,258,237,269,58,59,63,113,182,240,218,216,104,263,156,213,496,153,416,524,207,164,430],
tr:[173,196,214,253,277,324,334,393]
},{//Deerling
l:[[33,1],[293,1],[45,4],[28,7],[24,10],[73,13],[185,16],[36,20],[26,24],[312,28],[412,32],[204,36],[267,41],[38,46],[76,51]],
m:[92,237,241,113,182,240,219,218,76,216,247,104,263,156,213,496,497,412,514,148,86,526,447,207,164,528],
e:[97,214,226,235,313,316,320,363,388],
tr:[173,202,214,235,340,387,388,402]
},{//Sawsbuck
l:[[28,1],[33,1],[45,1],[224,1],[293,1],[45,4],[28,7],[24,10],[73,13],[185,16],[36,20],[26,24],[312,28],[412,32],[204,36],[532,37],[267,44],[38,52],[76,60]],
m:[92,237,241,63,113,182,240,219,218,76,216,247,104,263,156,213,496,497,412,514,416,148,86,14,526,447,207,164,528,249,15],
tr:[173,202,214,235,340,387,388,402]
},{//Emolga
l:[[84,1],[98,4],[39,7],[268,10],[209,13],[228,16],[104,19],[351,22],[486,26],[512,30],[113,34],[227,38],[521,42],[97,46],[435,50]],
m:[92,237,269,113,182,240,218,85,87,216,104,332,263,156,213,496,374,451,512,148,521,86,207,369,164,528,15],
e:[204,226,231,310,321,343,351,355,403],
tr:[173,214,231,270,282,324,343,355,366,387],
s:[403,204,98]
},{//Karrablast
l:[[64,1],[43,4],[203,8],[210,13],[31,16],[29,20],[206,25],[405,28],[163,32],[36,37],[184,40],[404,44],[175,49],[14,52],[38,56]],
m:[92,237,182,240,218,216,104,332,263,156,213,496,412,206,14,522,404,398,207,164,15],
e:[30,68,103,185,224,228,282,450],
tr:[173,202,214,282,334,450],
s:[450,203,224]
},{//Escavalier
l:[[41,1],[43,1],[64,1],[501,1],[43,4],[501,8],[41,13],[31,16],[29,20],[206,25],[405,28],[163,32],[442,37],[334,40],[404,44],[179,49],[14,52],[416,56]],
m:[92,237,63,182,240,218,216,104,332,263,156,213,496,411,412,206,416,14,522,404,398,207,164,249,15],
tr:[173,202,214,282,334,442,450]
},{//Foongus
l:[[71,1],[74,6],[310,8],[117,12],[72,15],[275,18],[185,20],[230,24],[202,28],[92,32],[235,35],[499,39],[76,43],[476,45],[147,50]],
m:[92,474,237,241,182,240,218,76,216,104,188,263,156,213,496,412,371,148,447,207,164],
e:[34,74,77,78,111,203,205,380],
tr:[173,202,214,235,380,388,402,492,495]
},{//Amoonguss
l:[[71,1],[74,1],[117,1],[310,1],[74,6],[310,8],[117,12],[72,15],[275,18],[185,20],[230,24],[202,28],[92,32],[235,35],[499,43],[76,49],[476,54],[147,62]],
m:[92,474,237,241,63,182,240,218,76,216,104,188,263,156,213,496,412,371,416,148,447,207,164],
tr:[173,202,214,235,380,388,402,492,495]
},{//Frillish
l:[[145,1],[346,1],[71,5],[101,9],[61,13],[105,17],[352,22],[466,27],[362,32],[240,37],[506,43],[56,49],[378,55],[323,61]],
m:[92,258,237,269,58,59,182,240,219,218,216,94,247,104,482,188,263,156,213,496,412,503,261,148,244,138,207,164,433,57,127,291],
e:[54,105,109,132,151,220],
tr:[20,173,180,196,202,214,220,271,277,399]
},{//Jellicent
l:[[71,1],[101,1],[145,1],[346,1],[71,5],[101,9],[61,13],[105,17],[352,22],[466,27],[362,32],[240,37],[506,45],[56,53],[378,61],[323,69]],
m:[92,258,237,269,58,59,63,182,240,219,218,216,94,247,104,482,188,263,156,213,496,412,503,261,416,148,244,138,207,164,433,57,127,291],
tr:[20,173,180,196,202,214,220,271,277,399]
},{//Alomomola
l:[[1,1],[346,1],[392,5],[453,9],[3,13],[505,17],[182,21],[352,25],[358,29],[487,33],[273,37],[362,41],[219,45],[270,49],[469,53],[361,57],[56,61]],
m:[347,92,258,237,58,59,113,182,240,219,218,216,94,247,104,263,156,213,496,503,244,207,164,57,127,291],
e:[54,203,220,243,287,321],
tr:[173,196,214,220,270,277,282,340],
s:[392,243,220]
},{//Joltik
l:[[81,1],[141,1],[169,1],[86,4],[103,7],[210,12],[527,15],[450,18],[380,23],[163,26],[486,29],[324,34],[97,37],[389,40],[435,45],[405,48]],
m:[92,237,113,182,240,218,85,216,104,263,156,213,168,496,412,451,148,521,86,522,404,398,207,164,528,15],
e:[40,42,50,185,228,431,440],
tr:[173,202,214,324,340,380,393,450,527]
},{//Galvantula
l:[[81,1],[86,1],[141,1],[169,1],[86,4],[103,7],[210,12],[527,15],[450,18],[380,23],[163,26],[486,29],[324,34],[97,40],[389,46],[435,54],[405,60]],
m:[92,237,63,113,182,240,218,85,87,216,104,263,156,213,168,496,412,451,416,148,521,86,522,404,398,207,164,528,15],
tr:[173,202,214,324,340,380,393,450,527],
s:[50,486,228]
},{//Ferroseed
l:[[33,1],[106,1],[205,6],[174,9],[232,14],[42,18],[360,21],[334,26],[429,30],[275,35],[120,38],[442,43],[371,47],[430,52],[153,55]],
m:[468,92,237,241,182,218,76,85,216,104,263,156,496,412,153,371,397,148,86,360,398,207,164,430,249],
e:[73,191,331,356,388,402,431,446],
tr:[173,202,214,283,334,356,388,393,402,442,446]
},{//Ferrothorn
l:[[33,1],[106,1],[174,1],[205,1],[431,1],[205,6],[174,9],[232,14],[42,18],[360,21],[334,26],[429,30],[275,35],[120,38],[438,40],[442,46],[371,53],[430,61],[153,67]],
m:[468,92,237,241,63,182,218,76,85,87,216,104,201,332,263,156,496,412,153,421,371,416,397,148,86,360,14,523,398,447,207,164,430,249,15,70],
tr:[173,202,214,282,283,334,356,388,393,402,442,446]
},{//Klink
l:[[11,1],[268,6],[84,11],[544,16],[20,21],[451,26],[475,31],[429,36],[103,39],[435,42],[319,45],[508,48],[199,51],[192,54],[63,57]],
m:[92,237,63,182,218,85,216,104,201,263,156,496,451,397,521,86,207,164,430,249],
mr:[528],
tr:[20,173,214,253,277,278,324,334,356,393]
},{//Klang
l:[[11,1],[84,1],[268,1],[544,1],[268,6],[84,11],[544,16],[20,21],[451,26],[475,31],[429,36],[103,40],[435,44],[319,48],[508,52],[199,56],[192,60],[63,64]],
m:[92,237,63,182,218,85,216,104,201,263,156,496,451,397,521,86,207,164,430,249],
mr:[528],
tr:[20,173,214,253,277,278,324,334,356,393],
s:[451,356,393]
},{//Klinklang
l:[[11,1],[84,1],[268,1],[544,1],[268,6],[84,11],[544,16],[20,21],[451,25],[475,31],[429,36],[103,40],[435,44],[319,48],[508,54],[199,60],[192,66],[63,72]],
m:[92,237,63,182,218,85,87,216,104,201,263,156,496,451,416,397,521,86,207,164,430,433,249],
mr:[528],
tr:[20,173,214,253,277,278,324,334,356,393]
},{//Tynamo
l:[[33,1],[86,1],[209,1],[451,1]],
tr:[393]
},{//Eelektrik
l:[[29,1],[86,1],[209,1],[451,1],[20,9],[51,19],[435,29],[242,39],[85,44],[491,49],[489,54],[528,59],[380,64],[192,69],[37,74]],
m:[92,237,113,182,240,218,85,87,216,104,263,156,213,496,451,512,148,521,86,207,369,164,430,528],
tr:[20,162,173,202,214,231,282,324,340,380,393,401]
},{//Eelektross
l:[[29,1],[51,1],[242,1],[306,1],[435,1]],
m:[468,337,46,92,237,63,113,182,240,218,85,87,216,280,104,53,317,263,156,213,496,451,512,416,148,521,86,157,525,447,207,369,164,430,528,249,15,70],
tr:[7,9,20,162,173,202,214,231,276,282,324,340,380,393,401,409]
},{//Elgyem
l:[[93,1],[45,4],[377,8],[357,11],[60,15],[29,18],[237,22],[286,25],[493,29],[428,32],[244,36],[94,39],[347,43],[105,46],[470,50],[471,50],[485,53],[472,56]],
m:[473,347,92,237,113,182,240,477,219,218,85,216,94,247,104,115,317,263,156,213,168,496,497,502,412,451,373,148,86,244,157,138,207,164,433],
e:[50,100,112,285,310,384,385,417],
tr:[173,214,220,253,271,272,277,278,285,289,324,356,399,428,472,495],
s:[112,377,417]
},{//Beheeyem
l:[[45,1],[93,1],[357,1],[377,1],[45,4],[377,8],[357,11],[60,15],[29,18],[237,22],[286,25],[493,29],[428,32],[244,36],[94,39],[347,45],[105,50],[470,56],[471,58],[485,63],[472,68]],
m:[473,347,92,237,63,113,182,240,477,219,218,85,216,94,247,104,115,317,263,156,213,168,496,497,502,412,451,373,416,148,86,244,157,138,207,164,433],
tr:[173,214,220,253,271,272,277,278,285,289,324,356,399,428,472,495]
},{//Litwick
l:[[52,1],[310,1],[107,3],[123,5],[83,7],[109,10],[101,13],[261,16],[481,20],[286,24],[506,28],[262,33],[517,38],[174,43],[247,49],[220,55],[315,61]],
m:[347,92,237,241,269,182,477,219,218,76,216,94,247,104,53,126,263,488,156,213,168,496,315,412,510,261,373,371,148,244,138,207,164,433],
e:[51,114,151,203,257,445,499],
tr:[173,180,214,220,257,271,399]
},{//Lampent
l:[[52,1],[107,1],[123,1],[310,1],[107,3],[123,5],[83,7],[109,10],[101,13],[261,16],[481,20],[286,24],[506,28],[262,33],[517,38],[174,45],[247,53],[220,61],[315,69]],
m:[347,92,237,241,269,182,477,219,218,76,216,94,247,104,53,126,263,488,156,213,168,496,315,412,510,261,373,371,148,244,138,207,164,433],
tr:[173,180,214,220,257,271,399]
},{//Chandelure
l:[[109,1],[123,1],[481,1],[506,1]],
m:[347,92,237,241,269,63,182,477,219,218,76,216,94,247,104,53,126,263,488,156,213,168,496,315,412,510,261,373,371,416,148,244,138,207,164,433],
tr:[173,180,214,220,257,271,399]
},{//Axew
l:[[10,1],[43,4],[372,7],[82,10],[530,13],[184,16],[163,20],[206,24],[337,28],[349,32],[269,36],[406,41],[14,46],[12,51],[200,56],[416,61]],
m:[468,337,46,92,237,241,269,182,240,218,216,91,104,317,332,263,156,213,496,206,374,510,371,416,14,404,398,207,164,249,15,70],
e:[13,68,106,116,179,203,231,283,400,406],
t:[434],
tr:[173,200,214,231,276,283,401,406,530],
s:[68,82,400]
},{//Fraxure
l:[[10,1],[43,1],[82,1],[372,1],[43,4],[372,7],[82,10],[530,13],[184,16],[163,20],[206,24],[337,28],[349,32],[269,36],[406,42],[14,48],[12,54],[200,60],[416,66]],
m:[468,337,46,92,237,241,269,182,240,218,216,91,104,317,332,263,156,213,496,206,374,510,421,371,416,14,404,525,398,207,164,249,15,70],
t:[434],
tr:[67,173,200,214,231,276,283,401,406,530]
},{//Haxorus
l:[[10,1],[43,1],[82,1],[372,1],[43,4],[372,7],[82,10],[530,13],[184,16],[163,20],[206,24],[337,28],[349,32],[269,36],[406,42],[14,50],[12,58],[200,66],[416,74]],
m:[468,337,46,92,237,241,269,63,182,240,218,89,216,91,280,104,317,332,263,156,213,496,411,206,374,510,421,371,416,14,523,157,404,525,398,447,207,164,249,15,57,70],
t:[434],
tr:[67,173,200,214,231,276,283,401,406,530]
},{//Cubchoo
l:[[181,1],[45,5],[117,9],[196,13],[154,17],[362,21],[203,25],[204,29],[163,33],[175,36],[156,41],[59,45],[258,49],[37,53],[329,57]],
m:[468,92,258,237,58,59,182,240,218,216,91,104,317,332,263,156,213,496,497,374,421,524,447,207,164,249,15,57,70],
e:[8,214,227,264,281,372,400,419],
tr:[8,67,173,196,214,276,343]
},{//Beartic
l:[[45,1,5],[117,1,9],[181,1],[196,1,13],[276,1],[453,,1],[45,5],[117,9],[196,13],[154,17],[362,21],[203,25],[207,29],[163,33],[175,36],[556,37],[156,41],[59,45],[258,53],[37,59],[329,66]],
m:[468,46,92,258,339,237,269,58,59,63,182,240,218,216,91,280,104,317,332,263,156,213,496,497,411,374,421,416,444,14,523,524,157,447,207,164,249,15,57,70,291],
tr:[8,67,173,196,214,276,343]
},{//Cryogonal
l:[[20,1],[420,5],[159,9],[229,13],[196,17],[54,21],[114,21],[62,25],[151,29],[58,33],[113,37],[115,37],[163,41],[109,45],[105,49],[76,53],[400,57],[329,61]],
m:[92,258,237,58,59,63,113,182,240,218,76,216,104,115,263,156,213,496,512,153,524,398,207,164,430],
tr:[20,173,196,214,277,282,324,334]
},{//Shelmet
l:[[141,1],[51,4],[117,8],[174,13],[522,16],[72,20],[281,25],[182,28],[151,32],[202,37],[34,40],[405,44],[105,49],[385,52],[515,56]],
m:[92,474,237,182,240,218,216,104,188,263,156,213,496,412,522,207,164],
e:[38,170,189,191,203,226,227,228,364,470],
tr:[173,202,214,324,380,450],
s:[51,226,227]
},{//Accelgor
l:[[98,1],[104,1],[141,1],[491,1],[491,4],[104,8],[98,13],[522,16],[72,20],[129,25],[382,28],[97,32],[202,37],[369,40],[405,44],[105,49],[384,52],[515,56]],
m:[92,474,237,63,182,240,218,216,104,188,201,263,156,213,496,411,412,416,522,207,369,164],
tr:[173,202,214,282,324,380,450]
},{//Stunfisk
l:[[189,1],[300,1],[117,5],[84,9],[341,13],[293,17],[426,21],[435,25],[203,30],[340,35],[330,40],[85,45],[279,50],[175,55],[90,61]],
m:[92,237,182,240,218,85,87,89,216,91,104,482,188,201,317,263,156,213,496,503,371,148,444,86,523,157,207,164,57],
e:[174,180,209,214,220,281,310,351,414],
tr:[173,180,214,220,253,283,340,393,401,414,446,492,527],
s:[174,189,281]
},{//Mienfoo
l:[[1,1],[96,5],[197,9],[252,13],[3,17],[129,21],[347,25],[395,29],[409,33],[26,37],[369,41],[501,45],[340,49],[136,53],[179,57],[396,61]],
m:[347,92,339,237,241,269,182,240,218,216,91,280,104,115,317,332,263,156,213,490,496,411,374,512,371,514,444,14,244,157,526,398,447,207,369,164,249,70],
e:[67,203,226,233,265,282,364,382],
tr:[67,173,214,270,272,282,340,409,530]
},{//Mienshao
l:[[1,1],[96,1],[197,1],[252,1],[96,5],[197,9],[252,13],[3,17],[129,21],[347,25],[395,29],[409,33],[26,37],[369,41],[469,45],[340,49],[136,56],[179,63],[396,70]],
m:[347,92,339,237,241,269,63,182,240,218,216,91,280,104,115,317,332,263,156,213,490,496,411,374,512,371,514,416,444,14,244,157,526,398,447,207,369,164,249,70],
tr:[67,173,214,270,272,282,340,409,530]
},{//Druddigon
l:[[10,1],[43,1],[468,5],[44,9],[184,13],[82,18],[163,21],[242,25],[337,27],[498,31],[279,35],[400,40],[525,45],[431,49],[276,55],[200,62]],
m:[468,337,46,92,237,241,269,63,182,240,218,479,89,216,91,104,53,188,317,332,259,263,156,213,496,411,374,451,510,421,371,514,416,523,157,525,207,164,430,249,555,15,57,70],
e:[137,185,228,231,232,289,306,342,389,422,424],
t:[434],
tr:[7,9,173,200,214,231,257,276,289,399,401,406,441,442,446],
s:[44,424,389]
},{//Golett
l:[[1,1],[111,1],[310,1],[189,5],[205,9],[325,13],[334,17],[5,21],[222,25],[223,30],[101,35],[174,40],[89,45],[359,50],[264,55]],
m:[92,237,58,182,240,477,219,218,89,216,94,247,280,104,317,263,156,168,490,496,411,374,397,148,360,523,157,447,207,164,249,70],
tr:[7,8,9,67,173,196,214,276,277,324,334,335,356,409,414,446],
s:[7,205,9]
},{//Golurk
l:[[1,1],[111,1],[189,1],[310,1],[189,5],[205,9],[325,13],[334,17],[5,21],[222,25],[223,30],[101,35],[174,40],[484,43],[89,50],[359,60],[264,70]],
m:[92,237,58,63,182,240,477,219,218,76,85,89,216,94,247,280,104,317,263,156,168,490,496,411,374,451,416,397,148,444,360,523,157,447,207,164,430,249,19,70],
tr:[7,8,9,67,173,196,214,276,277,324,334,335,356,409,414,428,446]
},{//Pawniard
l:[[10,1],[43,6],[210,9],[259,14],[185,17],[184,22],[232,25],[163,30],[372,33],[319,38],[373,41],[334,46],[400,49],[442,54],[14,57],[12,62]],
m:[468,92,237,269,182,240,218,216,91,280,104,201,317,332,259,263,156,213,168,490,496,206,374,373,421,371,514,397,86,14,404,398,447,207,164,249,555,15],
e:[29,212,228,279,389,427,446],
tr:[67,173,180,214,272,282,289,334,393,399,442,446,492,530],
s:[210,427,389]
},{//Bisharp
l:[[10,1],[43,1],[210,1],[259,1],[368,1],[43,6],[210,9],[259,14],[185,17],[184,22],[232,25],[163,30],[372,33],[319,38],[373,41],[334,46],[400,49],[442,57],[14,63],[12,71]],
m:[468,92,237,269,63,182,240,218,216,91,280,104,201,317,332,259,263,156,213,168,490,496,411,206,374,373,421,371,514,416,397,444,86,14,404,398,447,207,164,249,555,15],
tr:[67,173,180,214,272,282,289,334,393,399,442,446,492,530]
},{//Bouffalant
l:[[43,1],[228,1],[99,6],[31,11],[30,16],[184,21],[279,26],[543,31],[116,36],[224,41],[179,46],[37,51],[14,56],[416,61]],
m:[92,237,241,269,182,240,218,89,216,104,317,332,263,156,213,496,371,514,416,444,14,523,157,526,398,207,164,528,249,15,57,70],
e:[23,29,130,133,189,341,431,442],
tr:[173,200,214,253,276,283,428,442]
},{//Rufflet
l:[[43,1],[64,1],[31,5],[17,10],[468,14],[184,19],[332,23],[163,28],[432,32],[366,37],[403,41],[306,46],[507,50],[18,55],[413,59],[37,64]],
m:[468,92,339,237,241,182,240,218,216,104,317,332,263,156,213,496,507,421,514,157,526,207,365,369,164,249,15,19,70],
tr:[173,214,257,276,355,366]
},{//Braviary
l:[[17,1],[31,1],[43,1],[64,1],[31,5],[17,10],[468,14],[184,19],[332,23],[163,28],[432,32],[366,37],[403,41],[306,46],[507,50],[276,51],[18,57],[413,63],[37,70]],
m:[468,92,339,237,241,63,182,240,218,216,104,317,332,263,156,213,496,507,421,514,416,157,526,207,365,369,164,249,15,19,70],
tr:[143,173,214,257,276,355,366]
},{//Vullaby
l:[[16,1],[43,1],[31,5],[365,10],[417,14],[260,19],[185,23],[386,28],[432,32],[366,37],[403,41],[399,46],[373,50],[18,55],[413,59],[119,64]],
m:[92,237,241,269,182,240,218,216,247,104,317,332,259,263,156,213,168,496,510,373,371,514,244,207,365,369,164,249,555,15,19],
e:[184,211,212,282,313,355],
tr:[173,214,257,282,289,334,335,355,366,399,492]
},{//Mandibuzz
l:[[16,1],[31,1],[43,1],[365,1],[31,5],[365,10],[417,14],[260,19],[185,23],[386,28],[432,32],[366,37],[403,41],[399,46],[373,50],[198,51],[18,57],[413,63],[119,70]],
m:[92,237,241,269,63,182,240,218,216,247,104,317,332,259,263,156,213,168,496,510,373,371,514,416,244,207,365,369,164,249,555,15,19],
tr:[143,173,214,257,282,289,334,335,355,366,399,492]
},{//Heatmor
l:[[122,1],[510,1],[316,6],[20,11],[83,16],[154,21],[289,26],[481,31],[450,36],[163,41],[133,46],[53,51],[254,56],[255,56],[256,56],[517,61]],
m:[468,92,237,241,269,182,240,218,76,216,91,104,53,126,317,332,263,156,213,168,496,411,374,510,261,421,416,207,164,249,15],
e:[34,35,174,185,214,228,257,321,389,400],
tr:[7,9,20,67,173,202,214,257,276,278,282,289,380,450],
s:[202,257,510]
},{//Durant
l:[[11,1],[28,1],[210,6],[44,11],[97,16],[232,21],[450,26],[242,31],[442,36],[91,41],[494,46],[404,51],[334,56],[12,61],[319,66]],
m:[468,92,237,182,218,216,91,104,201,317,332,263,156,213,496,412,421,514,416,397,444,86,522,157,404,207,164,430,249,15,70],
e:[103,185,203,226,422,431],
tr:[173,214,276,283,334,442,450],
s:[203,210,422]
},{//Deino
l:[[33,1],[82,1],[116,4],[44,9],[29,12],[225,17],[46,20],[242,25],[21,28],[406,32],[526,38],[407,42],[34,48],[184,52],[304,58],[200,62]],
m:[46,92,237,241,269,182,240,218,216,104,259,263,156,213,168,496,510,86,244,525,526,207,164,249,70],
e:[103,310,372,399,414,422,423,424,457,458],
t:[434],
tr:[173,180,200,214,253,276,304,399,401,406,414,428]
},{//Zweilous
l:[[44,1],[82,1],[116,1],[458,1],[116,4],[44,9],[29,12],[225,17],[46,20],[242,25],[21,28],[406,32],[526,38],[407,42],[34,48],[184,55],[304,64],[200,71]],
m:[46,92,237,241,269,182,240,218,216,104,259,263,156,213,168,496,510,86,244,525,526,207,164,249,70],
t:[434],
tr:[173,180,200,214,253,276,304,399,401,406,414,428]
},{//Hydreigon
l:[[44,1],[82,1],[116,1],[161,1],[116,4],[44,9],[29,12],[225,17],[46,20],[242,25],[21,28],[406,32],[526,38],[407,42],[34,48],[184,55],[304,68],[200,79]],
m:[46,92,237,241,269,63,182,240,218,89,216,104,115,53,126,317,259,263,156,213,168,496,497,411,451,510,512,371,416,444,86,244,523,157,525,526,207,369,164,430,249,19,57,70],
t:[434],
tr:[173,180,200,214,231,253,257,276,304,324,355,366,399,401,406,414,428]
},{//Larvesta
l:[[52,1],[81,1],[141,10],[36,20],[488,30],[450,40],[38,50],[172,60],[405,70],[133,80],[37,90],[394,100]],
m:[347,92,237,241,113,182,219,218,76,216,94,104,53,126,263,488,156,496,315,510,261,512,522,207,369,164,528],
e:[81,106,193,203,234,393,428],
tr:[173,202,214,257,324,393,428,450]
},{//Volcarona
l:[[16,1],[52,1],[81,1],[141,1],[141,10],[16,20],[83,30],[18,40],[318,50],[483,59],[257,60],[405,70],[476,80],[542,90],[552,100]],
m:[347,92,237,241,63,113,182,219,218,76,216,94,104,53,126,332,263,488,156,496,315,510,261,512,416,522,398,207,369,164,528,19],
tr:[173,202,214,257,324,355,366,393,428,450]
},{//Cobalion
l:[[43,1],[98,1],[24,7],[232,13],[36,19],[270,25],[514,31],[442,37],[533,42],[14,49],[501,55],[526,61],[368,67],[370,73]],
m:[468,347,46,92,237,269,63,182,219,218,216,104,115,201,332,263,156,496,411,206,514,416,397,444,521,86,14,244,404,526,398,207,164,430,249,15,70],
tr:[173,214,270,276,334,335,340,393,428,442,446]
},{//Terrakion
l:[[43,1],[98,1],[24,7],[479,13],[36,19],[270,25],[514,31],[157,37],[533,42],[14,49],[501,55],[526,61],[444,67],[370,73]],
m:[347,46,92,237,269,63,182,219,218,479,89,216,104,115,201,317,332,263,156,496,411,206,514,416,397,444,14,244,523,157,404,526,398,207,164,249,15,70],
tr:[173,214,270,276,335,414,428,442,446]
},{//Virizion
l:[[43,1],[98,1],[24,7],[345,13],[36,19],[270,25],[514,31],[202,37],[533,42],[14,49],[501,55],[526,61],[348,67],[370,73]],
m:[347,46,92,237,241,269,63,113,182,219,218,76,216,104,115,332,263,156,496,411,412,206,514,416,148,444,14,244,404,526,447,207,164,249,15,70],
tr:[173,202,214,235,270,276,335,340,388,402,428]
},{//Tornadus
l:[[16,1],[253,1],[310,1],[207,7],[44,13],[279,19],[314,25],[326,31],[97,37],[403,43],[242,49],[366,55],[240,61],[542,67],[399,73],[359,79],[37,85]],
m:[92,339,237,269,63,182,240,218,479,216,94,280,104,482,188,332,259,263,156,213,168,496,411,374,507,510,512,373,371,416,447,207,369,164,249,19,70],
tr:[173,196,214,231,253,257,272,276,282,366,399,492]
},{//Thundurus
l:[[84,1],[253,1],[310,1],[207,7],[44,13],[279,19],[351,25],[377,31],[97,37],[435,43],[242,49],[268,55],[417,61],[87,67],[399,73],[359,79],[37,85]],
m:[92,339,237,269,63,182,240,218,479,85,87,216,94,280,104,482,188,259,263,156,213,168,496,411,374,451,507,510,373,371,416,521,86,447,207,369,164,430,528,249,19,70],
tr:[9,173,214,231,253,272,276,282,399,492]
},{//Reshiram
l:[[82,1],[424,1],[286,8],[246,15],[53,22],[225,29],[163,36],[326,43],[558,50],[406,54],[286,64],[242,71],[126,78],[200,85],[304,92],[551,100]],
m:[468,337,92,237,241,63,113,182,219,218,76,216,94,247,104,115,53,126,317,263,488,156,496,497,315,411,374,510,261,421,371,416,444,157,525,207,164,249,15,19,70],
t:[434],
tr:[173,200,214,257,304,355,366,406,414,428]
},{//Zekrom
l:[[82,1],[422,1],[286,8],[246,15],[85,22],[225,29],[163,36],[428,43],[559,50],[337,54],[286,64],[242,71],[87,78],[200,85],[304,92],[550,100]],
m:[468,337,92,237,63,113,182,240,219,218,85,87,216,94,247,104,115,317,263,156,496,497,411,374,451,421,371,416,148,444,521,86,157,525,207,164,430,528,249,15,19,70],
t:[434],
tr:[9,173,200,214,304,324,355,366,393,406,414,428]
},{//Landorus
l:[[317,1],[335,1],[341,1],[286,7],[386,13],[523,19],[88,25],[326,31],[14,37],[414,43],[157,49],[89,55],[201,61],[90,67],[444,73],[359,79],[200,85]],
m:[347,92,339,237,63,182,218,479,89,216,91,94,280,104,482,188,201,317,263,156,213,496,411,374,153,371,416,397,444,14,523,157,447,207,369,164,249,19,70],
tr:[173,200,214,231,272,276,282,335,356,414,446]
},{//Kyurem
m:[468,337,92,258,237,241,58,59,63,113,182,240,219,218,216,94,247,104,115,317,263,156,496,497,411,374,421,371,416,444,157,525,207,164,430,249,15,19,70],
t:[434],
tr:[173,196,200,214,283,304,324,355,406,414,428,442],
forms:[
{
	l:[[82,1],[196,1],[286,8],[246,15],[58,22],[225,29],[163,36],[184,43],[549,50],[406,57],[286,64],[283,71],[59,78],[200,85],[304,92]]
},{
	l:[[82,,1],[196,,1],[246,,15],[58,,22],[225,,29],[163,,36],[559,,43],[553,,50],[406,,57],[286,,64],[283,,71],[59,,78],[200,,85],[304,,92]]
},{
	l:[[82,,1],[196,,1],[246,,15],[58,,22],[225,,29],[163,,36],[558,,43],[554,,50],[406,,57],[286,,64],[283,,71],[59,,78],[200,,85],[304,,92]]
}]
},{//Keldeo
l:[[43,1],[453,1],[24,7],[61,13],[36,19],[270,25],[514,31],[401,37],[533,43],[14,49],[501,55],[526,61],[56,67],[370,73]],
m:[347,46,92,258,237,269,63,182,240,219,218,216,104,115,332,263,156,496,411,206,503,514,416,444,14,244,404,526,398,207,164,249,15,57,70],
t:[548],
tr:[173,196,214,270,276,283,340,343,387,401]
},{//Meloetta
l:[[496,1],[98,6],[93,11],[47,16],[298,21],[512,26],[60,31],[497,36],[369,43],[358,50],[94,57],[304,64],[272,71],[370,78],[195,85]],
m:[468,473,347,92,237,241,63,113,182,240,477,219,218,85,87,216,94,247,280,104,263,156,490,496,497,411,412,374,451,512,373,421,371,514,416,148,444,86,244,526,138,447,207,369,164,433,249,70],
t:[547],
tr:[7,8,9,67,173,214,215,253,270,271,272,277,278,282,285,289,304,324,343,356,387,409,428,472,478,530]
},{//Genesect
l:[[98,1],[103,1],[232,1],[393,1],[546,1],[210,7],[199,11],[488,18],[443,22],[163,29],[319,33],[324,40],[161,44],[404,51],[405,55],[493,62],[192,66],[63,73],[120,77]],
m:[468,92,237,58,59,63,113,182,218,76,85,87,216,94,104,115,53,332,263,488,156,496,412,451,153,421,416,397,148,86,522,404,207,369,164,430,19],
tr:[173,202,214,277,278,324,334,356,387,393,399,428,441,442,450,527]
}
];