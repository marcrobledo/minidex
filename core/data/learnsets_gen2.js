/* [name], type, category (0=PHYSICAL,1=SPECIAL,2=STATUS), pp, power, accuracy */const MOVES=[,[["Pound","Écras&#39;Face","Pfund","Libbra","Destructor","はたく","拍击"],0,0,35,40,100],
[["Karate Chop","Poing-Karaté","Karateschlag","Colpokarate","Golpe Karate","からてチョップ","空手劈"],1,0,25,50,100],
[["Double Slap","Torgnoles","Duplexhieb","Doppiasberla","Doble Bofetón","おうふくビンタ","连环巴掌"],0,0,10,15,85],
[["Comet Punch","Poing Comète","Kometenhieb","Cometapugno","Puño Cometa","れんぞくパンチ","连续拳"],0,0,15,18,85],
[["Mega Punch","Ultimapoing","Megahieb","Megapugno","Megapuño","メガトンパンチ","百万吨重拳"],0,0,20,80,85],
[["Pay Day","Jackpot","Zahltag","Giornopaga","Día de Pago","ネコにこばん","聚宝功"],0,0,20,40,100],
[["Fire Punch","Poing de Feu","Feuerschlag","Fuocopugno","Puño Fuego","ほのおのパンチ","火焰拳"],9,1,15,75,100],
[["Ice Punch","Poing-Glace","Eishieb","Gelopugno","Puño Hielo","れいとうパンチ","冰冻拳"],14,1,15,75,100],
[["Thunder Punch","Poing-Éclair","Donnerschlag","Tuonopugno","Puño Trueno","かみなりパンチ","雷电拳"],12,1,15,75,100],
[["Scratch","Griffe","Kratzer","Graffio","Arañazo","ひっかく","抓"],0,0,35,40,100],
[["Vise Grip","Force Poigne","Klammer","Presa","Agarre","はさむ","夹住"],0,0,30,55,100],
[["Guillotine",,,"Ghigliottina","Guillotina","ハサミギロチン","断头钳"],0,0,5,0,0],
[["Razor Wind","Coupe-Vent","Klingensturm","Ventagliente","Viento Cortante","かまいたち","旋风刀"],0,0,10,80,75],
[["Swords Dance","Danse-Lames","Schwerttanz","Danzaspada","Danza Espada","つるぎのまい","剑舞"],0,2,30,0,0],
[["Cut","Coupe","Zerschneider","Taglio","Corte","いあいぎり","居合斩"],0,0,30,50,95],
[["Gust","Tornade","Windstoß","Raffica","Tornado","かぜおこし","起风"],2,0,35,40,100],
[["Wing Attack","Cru-Aile","Flügelschlag","Attacco d&#39;Ala","Ataque Ala","つばさでうつ","翅膀攻击"],2,0,35,60,100],
[["Whirlwind","Cyclone","Wirbelwind","Turbine","Remolino","ふきとばし","吹飞"],0,2,20,0,100],
[["Fly","Vol","Fliegen","Volo","Vuelo","そらをとぶ","飞翔"],2,0,15,70,95],
[["Bind","Étreinte","Klammergriff","Legatutto","Atadura","しめつける","绑紧"],0,0,20,15,75],
[["Slam","Souplesse",,"Schianto","Portazo","たたきつける","摔打"],0,0,20,80,75],
[["Vine Whip","Fouet Lianes","Rankenhieb","Frustata","Látigo Cepa","つるのムチ","藤鞭"],11,1,10,35,100],
[["Stomp","Écrasement","Stampfer","Pestone","Pisotón","ふみつけ","踩踏"],0,0,20,65,100],
[["Double Kick","Double Pied","Doppelkick","Doppiocalcio","Doble Patada","にどげり","二连踢"],1,0,30,30,100],
[["Mega Kick","Ultimawashi","Megakick","Megacalcio","Megapatada","メガトンキック","百万吨重踢"],0,0,5,120,75],
[["Jump Kick","Pied Sauté","Sprungkick","Calciosalto","Patada Salto","とびげり","飞踢"],1,0,25,70,95],
[["Rolling Kick","Mawashi Geri","Fegekick","Calciorullo","Patada Giro","まわしげり","回旋踢"],1,0,15,60,85],
[["Sand Attack","Jet de Sable","Sandwirbel","Turbosabbia","Ataque Arena","すなかけ","泼沙"],4,2,15,0,100],
[["Headbutt","Coup d&#39;Boule","Kopfnuss","Bottintesta","Golpe Cabeza","ずつき","头锤"],0,0,15,70,100],
[["Horn Attack","Koud&#39;Korne","Hornattacke","Incornata","Cornada","つのでつく","角撞"],0,0,25,65,100],
[["Fury Attack","Furie","Furienschlag","Furia","Ataque Furia","みだれづき","乱击"],0,0,20,15,85],
[["Horn Drill","Empal&#39;Korne","Hornbohrer","Perforcorno","Perforador","つのドリル","角钻"],0,0,5,0,0],
[["Tackle","Charge",,"Azione","Placaje","たいあたり","撞击"],0,0,35,35,95],
[["Body Slam","Plaquage","Bodyslam",,"Golpe Cuerpo","のしかかり","泰山压顶"],0,0,15,85,100],
[["Wrap","Ligotage","Wickel","Avvolgibotta","Repetición","まきつく","紧束"],0,0,20,15,85],
[["Take Down","Bélier","Bodycheck","Riduttore","Derribo","とっしん","猛撞"],0,0,20,90,85],
[["Thrash","Mania","Fuchtler","Colpo","Golpe","あばれる","大闹一番"],0,0,20,90,100],
[["Double-Edge","Damoclès","Risikotackle","Sdoppiatore","Doble Filo","すてみタックル","舍身冲撞"],0,0,15,120,100],
[["Tail Whip","Mimi-Queue","Rutenschlag","Colpocoda","Látigo","しっぽをふる","摇尾巴"],0,2,30,0,100],
[["Poison Sting","Dard-Venin","Giftstachel","Velenospina","Picotazo Ven","どくばり","毒针"],3,0,35,15,100],
[["Twineedle","Double-Dard","Duonadel","Doppio Ago","Doble Ataque","ダブルニードル","双针"],6,0,20,25,100],
[["Pin Missile","Dard-Nuée","Nadelrakete","Missilspillo","Pin Misil","ミサイルばり","飞弹针"],6,0,20,14,85],
[["Leer","Groz&#39;Yeux","Silberblick","Fulmisguardo","Malicioso","にらみつける","瞪眼"],0,2,30,0,100],
[["Bite","Morsure","Biss","Morso","Mordisco","かみつく","咬住"],16,1,25,60,100],
[["Growl","Rugissement","Heuler","Ruggito","Gruñido","なきごえ","叫声"],0,2,40,0,100],
[["Roar","Hurlement","Brüller","Boato","Rugido","ほえる","吼叫"],0,2,20,0,100],
[["Sing","Berceuse","Gesang","Canto","Canto","うたう","唱歌"],0,2,15,0,55],
[["Supersonic","Ultrason","Superschall","Supersuono","Supersónico","ちょうおんぱ","超音波"],0,2,20,0,55],
[["Sonic Boom","Sonicboom","Ultraschall","Sonicboom","Bomba Sónica","ソニックブーム","音爆"],0,0,20,0,90],
[["Disable","Entrave","Aussetzer","Inibitore","Anulación","かなしばり","定身法"],0,2,20,0,55],
[["Acid","Acide","Säure","Acido","Ácido","ようかいえき","溶解液"],3,0,30,40,100],
[["Ember","Flammèche","Glut","Braciere","Ascuas","ひのこ","火花"],9,1,25,40,100],
[["Flamethrower","Lance-Flammes","Flammenwurf","Lanciafiamme","Lanzallamas","かえんほうしゃ","喷射火焰"],9,1,15,95,100],
[["Mist","Brume","Weißnebel","Nebbia","Neblina","しろいきり","白雾"],14,2,30,0,0],
[["Water Gun","Pistolet à O","Aquaknarre","Pistolacqua","Pistola Agua","みずでっぽう","水枪"],10,1,25,40,100],
[["Hydro Pump","Hydrocanon","Hydropumpe","Idropompa","Hidrobomba","ハイドロポンプ","水炮"],10,1,5,120,80],
[["Surf",,"Surfer",,,"なみのり","冲浪"],10,1,15,95,100],
[["Ice Beam","Laser Glace","Eisstrahl","Geloraggio","Rayo Hielo","れいとうビーム","冰冻光束"],14,1,10,95,100],
[["Blizzard",,,"Bora","Ventisca","ふぶき","暴风雪"],14,1,5,120,70],
[["Psybeam","Rafale Psy","Psystrahl","Psicoraggio","Psicorrayo","サイケこうせん","幻象光线"],13,1,20,65,100],
[["Bubble Beam","Bulles d&#39;O","Blubbstrahl","Bollaraggio","Rayo Burbuja","バブルこうせん","泡沫光线"],10,1,20,65,100],
[["Aurora Beam","Onde Boréale","Aurorastrahl","Raggiaurora","Rayo Aurora","オーロラビーム","极光束"],14,1,20,65,100],
[["Hyper Beam","Ultralaser","Hyperstrahl","Iper Raggio","Hiperrayo","はかいこうせん","破坏光线"],0,0,5,150,90],
[["Peck","Picpic","Schnabel","Beccata","Picotazo","つつく","啄"],2,0,35,35,100],
[["Drill Peck","Bec Vrille","Bohrschnabel","Perforbecco","Pico Taladro","ドリルくちばし","啄钻"],2,0,20,80,100],
[["Submission","Sacrifice","Überroller","Sottomissione","Sumisión","じごくぐるま","地狱翻滚"],1,0,25,80,80],
[["Low Kick","Balayage","Fußkick","Colpo Basso","Patada Baja","けたぐり","踢倒"],1,0,20,50,90],
[["Counter","Riposte","Konter","Contatore","Contador","カウンター","双倍奉还"],1,0,20,0,100],
[["Seismic Toss","Frappe Atlas","Geowurf","Movim. Sismico","Mov. Sísmico","ちきゅうなげ","地球上投"],1,0,20,0,100],
[["Strength","Force","Stärke","Forza","Fuerza","かいりき","怪力"],0,0,15,80,100],
[["Absorb","Vol-Vie","Absorber","Assorbimento","Absorber","すいとる","吸取"],11,1,20,20,100],
[["Mega Drain","Méga-Sangsue","Megasauger","Megassorbimento","Megaagotar","メガドレイン","超级吸取"],11,1,10,40,100],
[["Leech Seed","Vampigraine","Egelsamen","Parassiseme","Drenadoras","やどりぎのタネ","寄生种子"],11,2,10,0,90],
[["Growth","Croissance","Wachstum","Crescita","Desarrollo","せいちょう","生长"],0,2,40,0,0],
[["Razor Leaf","Tranch&#39;Herbe","Rasierblatt","Foglielama","Hoja Afilada","はっぱカッター","飞叶快刀"],11,1,25,55,95],
[["Solar Beam","Lance-Soleil","Solarstrahl","Solarraggio","Rayo Solar","ソーラービーム","日光束"],11,1,10,120,100],
[["Poison Powder","Poudre Toxik","Giftpuder","Velenpolvere","Polvo Veneno","どくのこな","毒粉"],3,2,35,0,75],
[["Stun Spore","Para-Spore","Stachelspore","Paralizzante","Paralizador","しびれごな","麻痹粉"],11,2,30,0,75],
[["Sleep Powder","Poudre Dodo","Schlafpuder","Sonnifero","Somnífero","ねむりごな","催眠粉"],11,2,15,0,75],
[["Petal Dance","Danse-Fleur","Blättertanz","Petalodanza","Danza Pétalo","はなびらのまい","花瓣舞"],11,1,20,70,100],
[["String Shot","Sécrétion","Fadenschuss","Millebave","Disp. Demora","いとをはく","吐丝"],6,2,40,0,95],
[["Dragon Rage","Draco-Rage","Drachenwut","Ira di Drago","Furia Dragón","りゅうのいかり","龙之怒"],15,1,10,0,100],
[["Fire Spin","Danse Flamme","Feuerwirbel","Turbofuoco","Giro Fuego","ほのおのうず","火焰旋涡"],9,1,15,15,70],
[["Thunder Shock","Éclair","Donnerschock","Tuonoshock","Impactrueno","でんきショック","电击"],12,1,30,40,100],
[["Thunderbolt","Tonnerre","Donnerblitz","Fulmine","Rayo","１０まんボルト","十万伏特"],12,1,15,95,100],
[["Thunder Wave","Cage-Éclair","Donnerwelle","Tuononda","Onda Trueno","でんじは","电磁波"],12,2,20,0,100],
[["Thunder","Fatal-Foudre","Donner","Tuono","Trueno","かみなり","打雷"],12,1,10,120,70],
[["Rock Throw","Jet-Pierres","Steinwurf","Sassata","Lanzarrocas","いわおとし","落石"],5,0,15,50,90],
[["Earthquake","Séisme","Erdbeben","Terremoto","Terremoto","じしん","地震"],4,0,10,100,100],
[["Fissure","Abîme","Geofissur","Abisso","Fisura","じわれ","地裂"],4,0,5,0,0],
[["Dig","Tunnel","Schaufler","Fossa","Excavar","あなをほる","挖洞"],4,0,10,60,100],
[["Toxic","Toxik","Toxin","Tossina","Tóxico","どくどく","剧毒"],3,2,10,0,85],
[["Confusion","Choc Mental","Konfusion","Confusione","Confusión","ねんりき","念力"],13,1,25,50,100],
[["Psychic","Psyko","Psychokinese","Psichico","Psíquico","サイコキネシス","精神强念"],13,1,10,90,100],
[["Hypnosis","Hypnose","Hypnose","Ipnosi","Hipnosis","さいみんじゅつ","催眠术"],13,2,20,0,60],
[["Meditate","Yoga","Meditation","Meditazione","Meditación","ヨガのポーズ","瑜伽姿势"],13,2,40,0,0],
[["Agility","Hâte","Agilität","Agilità","Agilidad","こうそくいどう","高速移动"],13,2,30,0,0],
[["Quick Attack","Vive-attaque","Ruckzuckhieb","Attacco Rapido","Ataque Rápido","でんこうせっか","电光一闪"],0,0,30,40,100],
[["Rage","Frénésie","Raserei","Ira","Furia","いかり","愤怒"],0,0,20,20,100],
[["Teleport","Téléport",,"Teletrasporto","Teletransporte","テレポート","瞬间移动"],13,2,20,0,0],
[["Night Shade","Ténèbres","Nachtnebel","Ombra Notturna","Tinieblas","ナイトヘッド","黑夜魔影"],7,0,15,0,100],
[["Mimic","Copie","Mimikry","Mimica","Mimético","ものまね","模仿"],0,2,10,0,100],
[["Screech","Grincement","Kreideschrei","Stridio","Chirrido","いやなおと","刺耳声"],0,2,40,0,85],
[["Double Team","Reflet","Doppelteam","Doppioteam","Doble Equipo","かげぶんしん","影子分身"],0,2,15,0,0],
[["Recover","Soin","Genesung","Ripresa","Recuperación","じこさいせい","自我再生"],0,2,20,0,0],
[["Harden","Armure","Härtner","Rafforzatore","Fortaleza","かたくなる","变硬"],0,2,30,0,0],
[["Minimize","Lilliput","Komprimator","Minimizzato","Reducción","ちいさくなる","变小"],0,2,20,0,0],
[["Smokescreen","Brouillard","Rauchwolke","Muro di Fumo","Pantalla Humo","えんまく","烟幕"],0,2,20,0,100],
[["Confuse Ray","Onde Folie","Konfustrahl","Stordiraggio","Rayo Confuso","あやしいひかり","奇异之光"],7,2,10,0,100],
[["Withdraw","Repli","Panzerschutz","Ritirata","Refugio","からにこもる","缩入壳中"],10,2,40,0,0],
[["Defense Curl","Boul&#39;Armure","Einigler","Ricciolscudo","Rizo Defensa","まるくなる","变圆"],0,2,40,0,0],
[["Barrier","Bouclier","Barriere","Barriera","Barrera","バリアー","屏障"],13,2,30,0,0],
[["Light Screen","Mur Lumière","Lichtschild","Schermoluce","Pantalla Luz","ひかりのかべ","光墙"],13,2,30,0,0],
[["Haze","Buée Noire","Dunkelnebel","Nube","Niebla","くろいきり","黑雾"],14,2,30,0,0],
[["Reflect","Protection","Reflektor","Riflesso","Reflejo","リフレクター","反射壁"],13,2,20,0,0],
[["Focus Energy","Puissance","Energiefokus","Energy Conc.","Foco Energía","きあいだめ","聚气"],0,2,30,0,0],
[["Bide","Patience","Geduld","Pazienza","Venganza","がまん","忍耐"],0,0,10,0,100],
[["Metronome","Métronome","Metronom","Metronomo","Metrónomo","ゆびをふる","挥指"],0,2,10,0,0],
[["Mirror Move","Mimique","Spiegeltrick","Speculmossa","Mov. Espejo","オウムがえし","鹦鹉学舌"],2,2,20,0,0],
[["Self-Destruct","Destruction","Finale","Autodistruz.","Autodestruc","じばく","自爆"],0,0,5,200,100],
[["Egg Bomb","Bomb&#39;Œuf","Eierbombe","Uovobomba","Bomba Huevo","タマゴばくだん","炸蛋"],0,0,10,100,75],
[["Lick","Léchouille","Schlecker","Leccata","Lengüetazo","したでなめる","舌舔"],7,0,30,20,100],
[["Smog","Purédpois",,,"Polución","スモッグ","浊雾"],3,0,20,20,70],
[["Sludge","Détritus","Schlammbad","Fango","Residuos","ヘドロこうげき","污泥攻击"],3,0,20,65,100],
[["Bone Club","Massd&#39;Os","Knochenkeule","Ossoclava","Hueso Palo","ホネこんぼう","骨棒"],4,0,20,65,85],
[["Fire Blast","Déflagration","Feuersturm","Fuocobomba","Llamarada","だいもんじ","大字爆炎"],9,1,5,120,85],
[["Waterfall","Cascade","Kaskade","Cascata","Cascada","たきのぼり","攀瀑"],10,1,15,80,100],
[["Clamp","Claquoir","Schnapper","Tenaglia","Tenaza","からではさむ","贝壳夹击"],10,1,10,35,75],
[["Swift","Météores","Sternschauer","Comete","Rapidez","スピードスター","高速星星"],0,0,20,60,0],
[["Skull Bash","Coud&#39;Krâne","Schädelwumme","Capocciata","Cabezazo","ロケットずつき","火箭头锤"],0,0,15,100,100],
[["Spike Cannon","Picanon","Dornkanone","Sparalance","Clavo Cañón","とげキャノン","尖刺加农炮"],0,0,15,20,100],
[["Constrict","Constriction","Umklammerung","Limitazione","Restricción","からみつく","缠绕"],0,0,35,10,100],
[["Amnesia","Amnésie","Amnesie",,,"ドわすれ","瞬间失忆"],13,2,20,0,0],
[["Kinesis","Télékinésie","Psykraft","Cinèsi","Kinético","スプーンまげ","折弯汤匙"],13,2,15,0,80],
[["Soft-Boiled","E-Coque","Weichei","Covauova","Amortiguador","タマゴうみ","生蛋"],0,2,10,0,0],
[["High Jump Kick","Pied Voltige","Turmkick","Calcinvolo","Pat. Salto Alta","とびひざげり","飞膝踢"],1,0,20,85,90],
[["Glare","Intimidation","Giftblick","Bagliore","Deslumbrar","へびにらみ","大蛇瞪眼"],0,2,30,0,75],
[["Dream Eater","Dévorêve","Traumfresser","Mangiasogni","Come Sueños","ゆめくい","食梦"],13,1,15,100,100],
[["Poison Gas","Gaz Toxik","Giftwolke","Velenogas","Gas Venenoso","どくガス","毒瓦斯"],3,2,40,0,55],
[["Barrage","Pilonnage","Stakkato","Attacco Pioggia","Presa","たまなげ","投球"],0,0,20,15,85],
[["Leech Life","Vampirisme","Blutsauger","Sanguisuga","Chupavidas","きゅうけつ","吸血"],6,0,15,20,100],
[["Lovely Kiss","Grobisou","Todeskuss","Demonbacio","Beso Amoroso","あくまのキッス","恶魔之吻"],0,2,10,0,75],
[["Sky Attack","Piqué","Himmelsfeger","Aeroattacco","Ataque Aéreo","ゴッドバード","神鸟猛击"],2,0,5,120,90],
[["Transform","Morphing","Wandler","Trasformazione","Transformación","へんしん","变身"],0,2,10,0,0],
[["Bubble","Écume","Blubber","Bolla","Burbuja","あわ","泡沫"],10,1,30,20,100],
[["Dizzy Punch","Uppercut","Irrschlag","Stordipugno","Puño Mareo","ピヨピヨパンチ","迷昏拳"],0,0,10,70,100],
[["Spore",,"Pilzspore","Spora","Espora","キノコのほうし","蘑菇孢子"],11,2,15,0,100],
[["Flash",,"Blitz",,"Destello","フラッシュ","闪光"],0,2,20,0,70],
[["Psywave","Vague Psy","Psywelle","Psiconda","Psicoonda","サイコウェーブ","精神波"],13,1,15,0,80],
[["Splash","Trempette","Platscher",,"Salpicadura","はねる","跃起"],0,2,40,0,0],
[["Acid Armor","Acidarmure","Säurepanzer","Scudo Acido","Armadura Ácida","とける","溶化"],3,2,40,0,0],
[["Crabhammer","Pince-Masse","Krabbhammer","Martellata","Martillazo","クラブハンマー","蟹钳锤"],10,1,10,90,85],
[["Explosion",,,"Esplosione","Explosión","だいばくはつ","大爆炸"],0,0,5,250,100],
[["Fury Swipes","Combo-Griffe","Kratzfurie","Sfuriate","Golpes Furia","みだれひっかき","乱抓"],0,0,15,18,80],
[["Bonemerang","Osmerang","Knochmerang","Ossomerang","Huesomerang","ホネブーメラン","骨头回力镖"],4,0,10,50,90],
[["Rest","Repos","Erholung","Riposo","Descanso","ねむる","睡觉"],13,2,10,0,0],
[["Rock Slide","Éboulement","Steinhagel","Frana","Avalancha","いわなだれ","岩崩"],5,0,10,75,90],
[["Hyper Fang","Croc de Mort","Hyperzahn","Iperzanna","Hipercolmillo","ひっさつまえば","必杀门牙"],0,0,15,80,90],
[["Sharpen","Affûtage","Schärfer","Affilatore","Afilar","かくばる","棱角化"],0,2,30,0,0],
[["Conversion","Adaptation","Umwandlung","Conversione","Conversión","テクスチャー","纹理"],0,2,30,0,0],
[["Tri Attack","Triplattaque","Triplette","Tripletta","Triataque","トライアタック","三重攻击"],0,0,10,80,100],
[["Super Fang","Croc Fatal","Superzahn","Superzanna","Superdiente","いかりのまえば","愤怒门牙"],0,0,10,0,90],
[["Slash","Tranche","Schlitzer","Lacerazione","Cuchillada","きりさく","劈开"],0,0,20,70,100],
[["Substitute","Clonage","Delegator","Sostituto","Sustituto","みがわり","替身"],0,2,10,0,0],
[["Struggle","Lutte","Verzweifler","Scontro","Combate","わるあがき","挣扎"],0,0,1,50,100],
[["Sketch","Gribouille","Nachahmer","Schizzo","Esquema","スケッチ","写生"],0,2,1,0,0],
[["Triple Kick","Triple Pied","Dreifachkick","Triplocalcio","Triple Patada","トリプルキック","三连踢"],1,0,10,10,90],
[["Thief","Larcin","Raub","Furto","Ladrón","どろぼう","小偷"],16,1,10,40,100],
[["Spider Web","Toile","Spinnennetz","Ragnatela","Telaraña","クモのす","蛛网"],6,2,10,0,0],
[["Mind Reader","Lire-Esprit","Willensleser","Leggimente","Telépata","こころのめ","心之眼"],0,2,5,0,100],
[["Nightmare","Cauchemar","Nachtmahr","Incubo","Pesadilla","あくむ","恶梦"],7,2,15,0,0],
[["Flame Wheel","Roue de Feu","Flammenrad","Ruotafuoco","Rueda Fuego","かえんぐるま","火焰轮"],9,1,25,60,100],
[["Snore","Ronflement","Schnarcher","Russare","Ronquido","いびき","打鼾"],0,0,15,40,100],
[["Curse","Malédiction","Fluch","Maledizione","Maldición","のろい","诅咒"],-1,2,10,0,0],
[["Flail","Fléau","Dreschflegel","Flagello","Azote","じたばた","抓狂"],0,0,15,0,100],
[["Conversion 2","Adaptation 2","Umwandlung2","Conversione2","Conversión2","テクスチャー２","纹理２"],0,2,30,0,0],
[["Aeroblast","Aéroblast","Luftstoß","Aerocolpo","Aerochorro","エアロブラスト","气旋攻击"],2,0,5,100,95],
[["Cotton Spore","Spore Coton","Baumwollsaat","Cottonspora","Esporagodón","わたほうし","棉孢子"],11,2,40,0,85],
[["Reversal","Contre","Gegenschlag","Contropiede","Inversión","きしかいせい","起死回生"],1,0,15,0,100],
[["Spite","Dépit","Groll","Dispetto","Rencor","うらみ","怨恨"],7,2,10,0,100],
[["Powder Snow","Poudreuse","Pulverschnee","Polneve","Nieve Polvo","こなゆき","细雪"],14,1,25,40,100],
[["Protect","Abri","Schutzschild","Protezione","Protección","まもる","守住"],0,2,10,0,0],
[["Mach Punch",,"Tempohieb","Pugnorapido","Ultrapuño","マッハパンチ","音速拳"],1,0,30,40,100],
[["Scary Face","Grimace","Grimasse","Visotruce","Cara Susto","こわいかお","鬼面"],0,2,10,0,90],
[["Feint Attack","Feinte","Finte","Finta","Finta","だましうち","出奇一击"],16,1,20,60,0],
[["Sweet Kiss","Doux Baiser","Bitterkuss","Dolcebacio","Beso Dulce","てんしのキッス","天使之吻"],0,2,10,0,75],
[["Belly Drum","Cognobidon","Bauchtrommel","Panciamburo","Tambor","はらだいこ","腹鼓"],0,2,10,0,0],
[["Sludge Bomb","Bomb-Beurk","Matschbombe","Fangobomba","Bomba Lodo","ヘドロばくだん","污泥炸弹"],3,0,10,90,100],
[["Mud-Slap","Coud&#39;Boue","Lehmschelle","Fangosberla","Bofetón Lodo","どろかけ","掷泥"],4,0,10,20,100],
[["Octazooka",,,,"Pulpocañón","オクタンほう","章鱼桶炮"],10,1,10,65,85],
[["Spikes","Picots","Stachler","Punte","Púas","まきびし","撒菱"],4,2,20,0,0],
[["Zap Cannon","Élecanon","Blitzkanone","Falcecannone","Electrocañón","でんじほう","电磁炮"],12,1,5,100,50],
[["Foresight","Clairvoyance","Gesichte","Preveggenza","Profecía","みやぶる","识破"],0,2,40,0,100],
[["Destiny Bond","Prélèvem. Destin","Abgangsbund","Destinobbligato","Mismo Destino","みちづれ","同命"],7,2,5,0,0],
[["Perish Song","Requiem","Abgesang","Ultimocanto","Canto Mortal","ほろびのうた","灭亡之歌"],0,2,5,0,0],
[["Icy Wind","Vent Glace","Eissturm","Ventogelato","Viento Hielo","こごえるかぜ","冰冻之风"],14,1,15,55,95],
[["Detect","Détection","Scanner","Individua","Detección","みきり","看穿"],1,2,5,0,0],
[["Bone Rush","Charge-Os","Knochenhatz","Ossoraffica","Ataque Óseo","ボーンラッシュ","骨棒乱打"],4,0,10,25,80],
[["Lock-On","Verrouillage","Zielschuss","Localizza","Fijar Blanco","ロックオン","锁定"],0,2,5,0,100],
[["Outrage","Colère","Wutanfall","Oltraggio","Enfado","げきりん","逆鳞"],15,1,15,90,100],
[["Sandstorm","Tempête de Sable","Sandsturm","Terrempesta","Tormenta Arena","すなあらし","沙暴"],5,2,10,0,0],
[["Giga Drain","Giga-Sangsue","Gigasauger","Gigassorbimento","Gigadrenado","ギガドレイン","终极吸取"],11,1,5,60,100],
[["Endure","Ténacité","Ausdauer","Resistenza","Aguante","こらえる","挺住"],0,2,10,0,0],
[["Charm","Charme","Charme","Fascino","Encanto","あまえる","撒娇"],0,2,20,0,100],
[["Rollout","Roulade","Walzer","Rotolamento","Desenrollar","ころがる","滚动"],5,0,20,30,90],
[["False Swipe","Faux-Chage","Trugschlag","Falsofinale","Falsotortazo","みねうち","点到为止"],0,0,40,40,100],
[["Swagger","Vantardise","Angeberei","Bullo","Contoneo","いばる","虚张声势"],0,2,15,0,90],
[["Milk Drink","Lait à Boire","Milchgetränk","Buonlatte","Batido","ミルクのみ","喝牛奶"],0,2,10,0,0],
[["Spark","Étincelle","Funkensprung","Scintilla","Chispa","スパーク","电光"],12,1,20,65,100],
[["Fury Cutter","Taillade","Zornklinge","Tagliofuria","Cortefuria","れんぞくぎり","连斩"],6,0,20,10,95],
[["Steel Wing","Aile d&#39;Acier","Stahlflügel","Alacciaio","Ala De Acero","はがねのつばさ","钢翼"],8,0,25,70,90],
[["Mean Look","Regard Noir","Horrorblick","Malosguardo","Mal De Ojo","くろいまなざし","黑色目光"],0,2,5,0,100],
[["Attract","Attraction","Anziehung","Attrazione","Atracción","メロメロ","迷人"],0,2,15,0,100],
[["Sleep Talk","Blabla Dodo","Schlafrede","Sonnolalia","Sonámbulo","ねごと","梦话"],0,2,10,0,0],
[["Heal Bell","Glas de Soin","Vitalglocke","Rintoccasana","Campana Cura","いやしのすず","治愈铃声"],0,2,5,0,0],
[["Return","Retour","Rückkehr","Ritorno","Retroceso","おんがえし","报恩"],0,0,20,0,100],
[["Present","Cadeau","Geschenk","Regalino","Presente","プレゼント","礼物"],0,0,15,0,90],
[["Frustration",,,"Frustrazione","Frustración","やつあたり","迁怒"],0,0,20,0,100],
[["Safeguard","Rune Protect","Bodyguard","Salvaguardia","Velo Sagrado","しんぴのまもり","神秘守护"],0,2,25,0,0],
[["Pain Split","Balance","Leidteiler","Malcomune","Divide Dolor","いたみわけ","分担痛楚"],0,2,20,0,100],
[["Sacred Fire","Feu Sacré","Läuterfeuer","Magifuoco","Fuego Sagrado","せいなるほのお","神圣之火"],9,1,5,100,95],
[["Magnitude","Ampleur","Intensität","Magnitudo","Magnitud","マグニチュード","震级"],4,0,30,0,100],
[["Dynamic Punch","Dynamopoing","Wuchtschlag","Dinamipugno","Puño Dinámico","ばくれつパンチ","爆裂拳"],1,0,5,100,50],
[["Megahorn","Mégacorne","Vielender","Megacorno","Megacuerno","メガホーン","超级角击"],6,0,10,120,85],
[["Dragon Breath","Dracosouffle","Feuerodem","Dragospiro","Dragoaliento","りゅうのいぶき","龙息"],15,1,20,60,100],
[["Baton Pass","Relais","Stafette","Staffetta","Relevo","バトンタッチ","接棒"],0,2,40,0,0],
[["Encore",,"Zugabe","Ripeti","Otra Vez","アンコール","再来一次"],0,2,5,0,100],
[["Pursuit","Poursuite","Verfolgung","Inseguimento","Persecución","おいうち","追打"],16,1,20,40,100],
[["Rapid Spin","Tour Rapide","Turbodreher","Rapigiro","Giro Rápido","こうそくスピン","高速旋转"],0,0,40,20,100],
[["Sweet Scent","Doux Parfum","Lockduft","Profumino","Dulce Aroma","あまいかおり","甜甜香气"],0,2,20,0,100],
[["Iron Tail","Queue de Fer","Eisenschweif","Codacciaio","Cola Férrea","アイアンテール","铁尾"],8,0,15,100,75],
[["Metal Claw","Griffe Acier","Metallklaue","Ferrartigli","Garra Metal","メタルクロー","金属爪"],8,0,35,50,95],
[["Vital Throw","Corps Perdu","Überwurf","Vitaltiro","Tiro Vital","あてみなげ","借力摔"],1,0,10,70,0],
[["Morning Sun","Aurore","Morgengrauen","Mattindoro","Sol Matinal","あさのひざし","晨光"],0,2,5,0,0],
[["Synthesis","Synthèse","Synthese","Sintesi","Síntesis","こうごうせい","光合作用"],11,2,5,0,0],
[["Moonlight","Rayon Lune","Mondschein","Lucelunare","Luz Lunar","つきのひかり","月光"],0,2,5,0,0],
[["Hidden Power","Puissance Cachée","Kraftreserve","Introforza","Poder Oculto","めざめるパワー","觉醒力量"],0,-1,15,0,100],
[["Cross Chop","Coup-Croix","Kreuzhieb","Incrocolpo","Tajo Cruzado","クロスチョップ","十字劈"],1,0,5,100,80],
[["Twister","Ouragan","Windhose","Tornado","Ciclón","たつまき","龙卷风"],15,1,20,40,100],
[["Rain Dance","Danse Pluie","Regentanz","Pioggiadanza","Danza Lluvia","あまごい","求雨"],10,2,5,0,0],
[["Sunny Day","Zénith","Sonnentag","Giornodisole","Día Soleado","にほんばれ","大晴天"],9,2,5,0,0],
[["Crunch","Mâchouille","Knirscher","Sgranocchio","Triturar","かみくだく","咬碎"],16,1,15,80,100],
[["Mirror Coat","Voile Miroir","Spiegelcape","Specchiovelo","Manto Espejo","ミラーコート","镜面反射"],13,1,20,0,100],
[["Psych Up","Boost","Psycho-Plus","Psicamisù","Más Psique","じこあんじ","自我暗示"],0,2,10,0,0],
[["Extreme Speed","Vitesse Extrême","Turbotempo","Extrarapido","Veloc. Extrema","しんそく","神速"],0,0,5,80,100],
[["Ancient Power","Pouvoir Antique","Antik-Kraft","Forzantica","Poder Pasado","げんしのちから","原始之力"],5,0,5,60,100],
[["Shadow Ball","Ball&#39;Ombre","Spukball","Palla Ombra","Bola Sombra","シャドーボール","暗影球"],7,0,15,80,100],
[["Future Sight","Prescience","Seher","Divinazione","Premonición","みらいよち","预知未来"],13,1,15,80,90],
[["Rock Smash","Éclate-Roc","Zertrümmerer","Spaccaroccia","Golpe Roca","いわくだき","碎岩"],1,0,15,20,100],
[["Whirlpool","Siphon",,"Mulinello","Torbellino","うずしお","潮旋"],10,1,15,15,70],
[["Beat Up","Baston","Prügler","Picchiaduro","Paliza","ふくろだたき","围攻"],16,1,10,10,100]
];
const LEARNSET_GAMES=GAMES;
const LEARNSET_GAMES_ID=GAME_ID;
const TMs=[,223,29,174,205,46,92,192,249,244,237,241,230,173,59,63,196,182,240,202,203,218,76,231,225,87,89,216,91,94,247,189,104,8,207,214,188,201,126,129,111,9,138,197,156,213,168,211,7,210,171];
const HMs=[,15,19,57,70,148,250,127];

/*
	l: levelup
		[moveIndex, level (all), , level (crystal exclusive)]
	m: machine
	e: egg moves
	t3: crystal tutors
	s: special (extreme speed dratini, crystal babies)
	-
	3: crystal exclusive
*/
var LEARNSETS=[,
{//Bulbasaur
l:[[33,1],[45,4],[73,7],[22,10],[77,15],[79,15],[75,20],[230,25],[74,32],[235,39],[76,46]],
m:[29,174,92,237,241,230,173,182,202,203,218,76,216,189,104,207,214,111,156,213,210,15,148],
e:[13,80,113,130,219]
},{//Ivysaur
l:[[33,1],[45,1],[73,1],[45,4],[73,7],[22,10],[77,15],[79,15],[75,22],[230,29],[74,38],[235,47],[76,56]],
m:[29,174,92,237,241,230,173,182,202,203,218,76,216,189,104,207,214,111,156,213,210,15,148]
},{//Venusaur
l:[[22,1],[33,1],[45,1],[73,1],[45,4],[73,7],[22,10],[77,15],[79,15],[75,22],[230,29],[74,41],[235,53],[76,65]],
m:[29,174,46,92,237,241,230,173,63,182,202,203,218,76,216,189,104,207,214,111,156,213,210,15,148]
},{//Charmander
l:[[10,1],[45,1],[52,7],[108,13],[99,19],[184,25],[53,31],[163,37],[82,43],[83,49]],
m:[223,29,174,92,249,237,241,173,182,203,218,231,225,216,91,189,104,207,214,126,129,111,156,213,7,210,15,70],
e:[44,157,187,200,246,251],
t3:[53]
},{//Charmeleon
l:[[10,1],[45,1],[52,1],[52,7],[108,13],[99,20],[184,27],[53,34],[163,41],[82,48],[83,55]],
m:[223,29,174,92,249,237,241,173,182,203,218,231,225,216,91,189,104,207,214,126,129,111,156,213,7,210,15,70],
t3:[53]
},{//Charizard
l:[[10,1],[45,1],[52,1],[108,1],[52,7],[108,13],[99,20],[184,27],[53,34],[17,36],[163,44],[82,54],[83,64]],
m:[223,29,174,46,92,249,237,241,173,63,182,203,218,231,225,89,216,91,189,104,207,214,201,126,129,111,156,213,211,7,210,15,19,70],
t3:[53]
},{//Squirtle
l:[[33,1],[39,4],[145,7],[110,10],[55,13],[44,18],[229,23],[182,28],[240,33],[130,40],[56,47]],
m:[223,29,174,205,92,249,237,173,59,196,182,240,203,218,231,216,91,189,104,8,207,214,111,156,213,57,70,250,127],
e:[54,93,114,175,193,243],
t3:[58]
},{//Wartortle
l:[[33,1],[39,1],[145,1],[39,4],[145,7],[110,10],[55,13],[44,19],[229,25],[182,31],[240,37],[130,45],[56,53]],
m:[223,29,174,205,92,249,237,173,59,196,182,240,203,218,231,216,91,189,104,8,207,214,111,156,213,57,70,250,127],
t3:[58]
},{//Blastoise
l:[[33,1],[39,1],[110,1],[145,1],[39,4],[145,7],[110,10],[55,13],[44,19],[229,25],[182,31],[240,42],[130,55],[56,68]],
m:[223,29,174,205,46,92,249,237,173,59,63,196,182,240,203,218,231,89,216,91,189,104,8,207,214,111,156,213,57,70,250,127],
t3:[58]
},{//Caterpie
l:[[33,1],[81,1]]
},{//Metapod
l:[[106,1],[106,7]]
},{//Butterfree
l:[[93,1],[93,10],[77,13],[78,14],[79,15],[48,18],[18,23],[16,28],[60,34],[219,40]],
m:[174,92,237,241,230,173,63,182,202,203,218,76,216,94,104,207,214,129,156,213,171,148]
},{//Weedle
l:[[40,1],[81,1]]
},{//Kakuna
l:[[106,1],[106,7]]
},{//Beedrill
l:[[31,1],[31,10],[116,15],[41,20],[99,25],[228,30],[42,35],[97,40]],
m:[174,92,237,241,230,173,63,182,202,203,218,216,104,207,214,188,129,156,213,210,15]
},{//Pidgey
l:[[33,1],[28,5],[16,9],[98,15],[18,21],[17,29],[97,37],[119,47]],
m:[174,92,237,241,173,182,203,218,216,189,104,207,214,129,197,156,213,168,211,19],
e:[185,193,211,228]
},{//Pidgeotto
l:[[16,1],[28,1],[33,1],[28,5],[16,9],[98,15],[18,23],[17,33],[97,43],[119,55]],
m:[174,92,237,241,173,182,203,218,216,189,104,207,214,129,197,156,213,168,211,19]
},{//Pidgeot
l:[[16,1],[28,1],[33,1],[98,1],[28,5],[16,9],[98,15],[18,23],[17,33],[97,46],[119,61]],
m:[174,92,237,241,173,63,182,203,218,216,189,104,207,214,129,197,156,213,168,211,19]
},{//Rattata
l:[[33,1],[39,1],[98,7],[158,13],[116,20],[228,27],[162,34]],
m:[29,174,92,249,237,241,173,59,196,182,203,218,231,87,216,91,247,189,104,207,214,129,111,156,213,168],
e:[44,68,103,154,172,179]
},{//Raticate
l:[[33,1],[39,1],[98,1],[98,7],[158,13],[184,20],[228,30],[162,40]],
m:[29,174,46,92,249,237,241,173,59,63,196,182,203,218,231,87,216,91,247,189,104,207,214,129,111,156,213,168,15,70],
t3:[58,85]
},{//Spearow
l:[[45,1],[64,1],[43,7],[31,13],[228,25],[119,31],[65,37],[97,43]],
m:[174,92,237,241,173,182,203,218,216,189,104,207,214,129,197,156,213,168,211,19],
e:[98,161,184,185,206]
},{//Fearow
l:[[31,1],[43,1],[45,1],[64,1],[43,7],[31,13],[228,26],[119,32],[65,40],[97,47]],
m:[174,92,237,241,173,63,182,203,218,216,189,104,207,214,129,197,156,213,168,211,19]
},{//Ekans
l:[[35,1],[43,1],[40,9],[44,15],[137,23],[103,29],[51,37],[114,43]],
m:[29,174,92,237,241,173,182,202,203,218,89,216,91,104,207,214,188,156,213,168,70],
e:[21,180,228,251],
e3:[242]
},{//Arbok
l:[[35,1],[40,1],[43,1],[44,1],[40,9],[44,15],[137,25],[103,33],[51,43],[114,51]],
m:[29,174,92,237,241,173,63,182,202,203,218,89,216,91,104,207,214,188,156,213,168,70]
},{//Pikachu
l:[[45,1],[84,1],[39,6],[86,8],[98,11],[104,15],[21,20],[85,26],[97,33],[87,41],[113,50]],
m:[223,29,174,205,92,192,237,173,182,240,203,218,231,87,216,189,104,207,214,129,111,9,197,156,213,70,148],
t3:[85]
},{//Raichu
l:[[39,1],[84,1],[85,1],[98,1]],
m:[223,29,174,205,92,192,237,173,63,182,240,203,218,231,87,216,189,104,207,214,129,111,9,197,156,213,168,70,148],
t3:[85]
},{//Sandshrew
l:[[10,1],[111,6],[28,11],[40,17],[163,23],[129,30],[154,37],[201,45]],
m:[223,29,174,205,92,249,237,241,173,182,203,218,231,89,216,91,189,104,207,214,201,129,111,197,156,213,168,210,15,70],
e:[68,175,219,229],
e3:[232]
},{//Sandslash
l:[[10,1],[28,1],[111,1],[111,6],[28,11],[40,17],[163,24],[129,33],[154,42],[201,52]],
m:[223,29,174,205,92,249,237,241,173,63,182,203,218,231,89,216,91,189,104,207,214,201,129,111,197,156,213,168,210,15,70]
},{//Nidoran♀
l:[[33,1],[45,1],[10,8],[24,12],[40,17],[39,23],[44,30],[154,38]],
m:[29,174,92,237,241,173,59,182,240,203,218,231,87,216,189,104,207,214,111,197,156,213,168],
e:[36,48,50,68,116,204,251],
t3:[85]
},{//Nidorina
l:[[33,1],[45,1],[10,8],[24,12],[40,19],[39,27],[44,36],[154,46]],
m:[29,174,92,249,237,241,173,59,182,240,203,218,231,87,216,189,104,207,214,111,197,156,213,168,70],
t3:[58,85]
},{//Nidoqueen
l:[[10,1],[24,1],[33,1],[39,1],[34,23]],
m:[223,29,174,46,92,249,237,241,173,59,63,196,182,240,203,218,231,87,89,216,247,189,104,8,207,214,201,126,111,9,197,156,213,168,7,210,57,70],
t3:[53,58,85]
},{//Nidoran♂
l:[[33,1],[43,1],[30,8],[24,12],[40,17],[116,23],[31,30],[32,38]],
m:[29,174,92,237,241,173,59,182,240,203,218,231,87,216,189,104,207,214,111,197,156,213,168],
e:[36,48,50,68,93,133,251],
t3:[85]
},{//Nidorino
l:[[33,1],[43,1],[30,8],[24,12],[40,19],[116,27],[31,36],[32,46]],
m:[29,174,92,249,237,241,173,59,182,240,203,218,231,87,216,189,104,207,214,111,197,156,213,168,70],
t3:[58,85]
},{//Nidoking
l:[[24,1],[30,1],[33,1],[40,1],[37,23]],
m:[223,29,174,46,92,249,237,241,173,59,63,196,182,240,203,218,231,87,89,216,247,189,104,8,207,214,201,126,111,9,197,156,213,168,7,210,57,70],
t3:[53,58,85]
},{//Clefairy
l:[[1,1],[45,1],[227,4],[47,8],[3,13],[107,19],[111,26],[118,34],[236,43],[113,53]],
m:[223,29,174,205,92,192,244,237,241,173,59,182,240,203,218,76,231,87,216,94,247,189,104,8,207,214,126,111,9,138,197,156,213,7,171,70,148],
t3:[53,58,85]
},{//Clefable
l:[[3,1],[47,1],[118,1],[236,1]],
m:[223,29,174,205,92,192,244,237,241,173,59,63,182,240,203,218,76,231,87,216,94,247,189,104,8,207,214,126,111,9,138,197,156,213,7,171,70,148],
t3:[53,58,85]
},{//Vulpix
l:[[39,1],[52,1],[98,7],[46,13],[109,19],[219,25],[53,31],[83,37]],
m:[29,174,92,237,241,173,182,203,218,231,216,91,104,207,214,126,129,156,213],
e:[50,95,175,180,185],
t3:[53]
},{//Ninetales
l:[[52,1],[98,1],[109,1],[219,1],[83,43]],
m:[29,174,46,92,237,241,173,63,182,203,218,231,216,91,104,207,214,126,129,156,213],
t3:[53]
},{//Jigglypuff
l:[[47,1],[111,4],[1,9],[50,14],[205,19],[3,24],[156,29],[34,34],[38,39]],
m:[223,29,174,205,92,192,244,237,241,173,59,182,240,203,218,76,87,216,94,247,189,104,8,207,214,126,111,9,138,197,156,213,7,171,70,148],
t3:[53,58,85]
},{//Wigglytuff
l:[[3,1],[47,1],[50,1],[111,1]],
m:[223,29,174,205,92,192,244,237,241,173,59,63,182,240,203,218,76,87,216,94,247,189,104,8,207,214,126,111,9,138,197,156,213,7,171,70,148],
t3:[53,58,85]
},{//Zubat
l:[[141,1],[48,6],[44,12],[109,19],[17,27],[212,36],[114,46]],
m:[174,92,237,241,173,182,202,203,218,216,104,207,214,129,197,156,213,168,211],
e:[16,18,98,185,228]
},{//Golbat
l:[[48,1],[103,1],[141,1],[48,6],[44,12],[109,19],[17,30],[212,42],[114,55]],
m:[174,92,237,241,173,63,182,202,203,218,216,104,207,214,129,197,156,213,168,211]
},{//Oddish
l:[[71,1],[230,7],[77,14],[78,16],[79,18],[51,23],[236,32],[80,39]],
m:[174,92,237,241,230,173,182,202,203,218,76,216,104,207,214,188,156,213,15,148],
e:[14,75,175,235]
},{//Gloom
l:[[71,1],[77,1],[230,1],[230,7],[77,14],[78,16],[79,18],[51,24],[236,35],[80,44]],
m:[174,92,237,241,230,173,182,202,203,218,76,216,104,207,214,188,156,213,15,148]
},{//Vileplume
l:[[71,1],[78,1],[80,1],[230,1]],
m:[174,92,237,241,230,173,63,182,202,203,218,76,216,104,207,214,188,156,213,15,148]
},{//Paras
l:[[10,1],[78,7],[77,13],[141,19],[147,25],[163,31],[74,37],[202,43]],
m:[174,92,249,237,241,230,173,182,202,203,218,76,216,91,104,207,214,188,156,213,168,210,15,148],
e:[60,68,103,113,175,206,228,230]
},{//Parasect
l:[[10,1],[77,1],[78,1],[78,7],[77,13],[141,19],[147,28],[163,37],[74,46],[202,55]],
m:[174,92,249,237,241,230,173,63,182,202,203,218,76,216,91,104,207,214,188,156,213,168,210,15,148]
},{//Venonat
l:[[33,1],[50,1],[193,1],[48,9],[93,17],[77,20],[141,25],[78,28],[60,33],[79,36],[94,41]],
m:[174,92,237,241,230,173,182,202,203,218,76,216,94,104,207,214,188,129,156,213,168],
e:[103,202,226]
},{//Venomoth
l:[[33,1],[48,1],[50,1],[193,1],[48,9],[93,17],[77,20],[141,25],[78,28],[16,31],[60,36],[79,42],[94,52]],
m:[174,92,237,241,230,173,63,182,202,203,218,76,216,94,104,207,214,188,129,156,213,168,148]
},{//Diglett
l:[[10,1],[45,5],[222,9],[91,17],[28,25],[163,33],[89,41],[90,49]],
m:[174,92,249,237,241,173,182,203,218,89,216,91,189,104,207,214,188,156,213,168,15],
e:[103,185,228,246,251]
},{//Dugtrio
l:[[10,1],[45,1,,5],[222,1,,9],[161,,,1],[45,5],[222,9],[91,17],[28,25],[163,37],[89,49],[90,61]],
m:[174,92,249,237,241,173,63,182,203,218,89,216,91,189,104,207,214,188,156,213,168,15]
},{//Meowth
l:[[10,1],[45,1],[44,11],[6,20],[185,28],[103,35],[154,41],[163,46]],
m:[29,174,92,192,244,237,241,173,196,182,203,218,231,87,216,247,189,104,207,214,129,111,138,197,156,213,168,171],
e:[95,133,180,204],
t3:[85]
},{//Persian
l:[[10,1],[44,1],[45,1],[44,11],[6,20],[185,29],[103,38],[154,46],[163,53]],
m:[29,174,46,92,192,244,237,241,173,63,196,182,203,218,231,87,216,247,189,104,207,214,129,111,138,197,156,213,168,171],
t3:[85]
},{//Psyduck
l:[[10,1],[39,5],[50,10],[93,16],[103,23],[244,31],[154,40],[56,50]],
m:[223,29,174,92,249,244,237,173,59,196,182,240,203,218,231,216,91,189,104,8,207,214,129,156,213,57,70,148,250,127],
e:[58,60,94,95,113,193,248],
e3:[238],
t3:[58]
},{//Golduck
l:[[10,1],[39,1],[50,1],[93,1],[39,5],[50,10],[93,16],[103,23],[244,31],[154,44],[56,58]],
m:[223,29,174,92,249,244,237,173,59,63,196,182,240,203,218,231,216,91,189,104,8,207,214,129,156,213,210,57,70,148,250,127],
t3:[58]
},{//Mankey
l:[[10,1],[43,1],[67,9],[2,15],[154,21],[116,27],[69,33],[238,39],[103,45],[37,51]],
m:[223,29,174,92,249,244,237,241,173,182,203,218,231,87,216,91,189,104,8,207,214,129,111,9,197,156,213,168,7,70],
e:[68,96,157,179,193,251],
t3:[85]
},{//Primeape
l:[[10,1],[43,1],[67,1],[99,1],[67,9],[2,15],[154,21],[116,27],[99,28],[69,36],[238,45],[103,54],[37,63]],
m:[223,29,174,92,249,244,237,241,173,63,182,203,218,231,87,216,91,189,104,8,207,214,129,111,9,197,156,213,168,7,70],
t3:[85]
},{//Growlithe
l:[[44,1],[46,1],[52,9],[43,18],[36,26],[172,34],[97,42],[53,50]],
m:[29,174,46,92,249,237,241,173,182,203,218,231,225,216,91,104,207,214,126,129,156,213],
e:[34,37,83,219,242],
t3:[53]
},{//Arcanine
l:[[36,1],[43,1],[46,1],[172,1],[245,50]],
m:[29,174,46,92,249,237,241,173,63,182,203,218,231,225,216,91,104,207,214,126,129,156,213],
t3:[53]
},{//Poliwag
l:[[145,1],[95,7],[55,13],[3,19],[240,25],[34,31],[187,37],[56,43]],
m:[29,174,92,237,173,59,196,182,240,203,218,216,94,104,207,214,111,156,213,168,57,250,127],
e:[54,61,114,150,170],
t3:[58]
},{//Poliwhirl
l:[[55,1],[95,1],[145,1],[95,7],[55,13],[3,19],[240,27],[34,35],[187,43],[56,51]],
m:[29,174,92,249,237,173,59,196,182,240,203,218,89,216,94,189,104,8,207,214,111,197,156,213,168,57,70,250,127],
t3:[58]
},{//Poliwrath
l:[[3,1],[55,1],[66,1],[95,1],[66,35],[170,51]],
m:[223,29,174,92,249,237,173,59,63,196,182,240,203,218,89,216,94,189,104,8,207,214,111,197,156,213,168,57,70,250,127],
t3:[58]
},{//Abra
l:[[100,1]],
m:[223,29,174,92,192,244,237,241,173,182,240,203,218,216,94,247,104,8,207,214,9,138,156,213,168,7,171,148],
e:[112,113,227]
},{//Kadabra
l:[[93,1],[100,1],[134,1],[93,16],[50,18],[60,21],[105,26],[248,31],[94,38],[115,45]],
m:[223,29,174,92,192,244,237,241,173,182,240,203,218,216,91,94,247,104,8,207,214,9,138,156,213,168,7,171,148]
},{//Alakazam
l:[[93,1],[100,1],[134,1],[93,16],[50,18],[60,21],[105,26],[248,31],[94,38],[115,45]],
m:[223,29,174,92,192,244,237,241,173,63,182,240,203,218,216,91,94,247,104,8,207,214,9,138,156,213,168,7,171,148]
},{//Machop
l:[[43,1],[67,1],[116,7],[2,13],[69,19],[193,25],[233,31],[238,37],[184,43],[66,49]],
m:[223,29,174,92,249,237,241,173,182,203,218,89,216,91,189,104,8,207,214,126,9,197,156,213,168,7,70],
e:[27,96,113,227],
t3:[53]
},{//Machoke
l:[[43,1],[67,1],[116,1],[116,8],[2,15],[69,19],[193,25],[233,34],[238,43],[184,52],[66,61]],
m:[223,29,174,92,249,237,241,173,182,203,218,89,216,91,189,104,8,207,214,126,9,197,156,213,168,7,70],
t3:[53]
},{//Machamp
l:[[43,1],[67,1],[116,1],[116,8],[2,15],[69,19],[193,25],[233,34],[238,43],[184,52],[66,61]],
m:[223,29,174,92,249,237,241,173,63,182,203,218,89,216,91,189,104,8,207,214,126,9,197,156,213,168,7,70],
t3:[53]
},{//Bellsprout
l:[[22,1],[74,6],[35,11],[79,15],[77,17],[78,19],[51,23],[230,30],[75,37],[21,45]],
m:[174,92,237,241,230,173,182,202,203,218,76,216,104,207,214,188,156,213,15,148],
e:[14,115,141,227,235]
},{//Weepinbell
l:[[22,1],[35,1],[74,1],[74,6],[35,11],[79,15],[77,17],[78,19],[51,24],[230,33],[75,42],[21,54]],
m:[174,92,237,241,230,173,182,202,203,218,76,216,104,207,214,188,156,213,15,148]
},{//Victreebel
l:[[22,1],[75,1],[79,1],[230,1]],
m:[174,92,237,241,230,173,63,182,202,203,218,76,216,104,207,214,188,156,213,15,148]
},{//Tentacool
l:[[40,1],[48,6],[132,12],[51,19],[61,25],[35,30],[112,36],[103,43],[56,49]],
m:[174,92,237,173,59,196,182,240,202,203,218,216,104,207,214,188,156,213,15,57,250],
e:[62,114,219,229,243],
t3:[58]
},{//Tentacruel
l:[[40,1],[48,1],[132,1],[48,6],[132,12],[51,19],[61,25],[35,30],[112,38],[103,47],[56,55]],
m:[174,92,237,173,59,63,196,182,240,202,203,218,216,104,207,214,188,156,213,15,57,250],
t3:[58]
},{//Geodude
l:[[33,1],[111,6],[88,11],[222,16],[120,21],[106,26],[205,31],[89,36],[153,41]],
m:[223,29,174,205,92,249,237,241,173,182,203,218,89,216,91,189,104,207,214,201,126,111,156,213,7,70],
e:[5,157],
t3:[53]
},{//Graveler
l:[[33,1],[88,1],[111,1],[111,6],[88,11],[222,16],[120,21],[106,27],[205,34],[89,41],[153,48]],
m:[223,29,174,205,92,249,237,241,173,182,203,218,89,216,91,189,104,207,214,201,126,111,156,213,7,70],
t3:[53]
},{//Golem
l:[[33,1],[88,1],[111,1],[222,1],[111,6],[88,11],[222,16],[120,21],[106,27],[205,34],[89,41],[153,48]],
m:[223,29,174,205,46,92,249,237,241,173,63,182,203,218,89,216,91,189,104,207,214,201,126,111,156,213,7,210,70],
t3:[53]
},{//Ponyta
l:[[33,1],[45,4],[39,8],[52,13],[23,19],[83,26],[36,34],[97,43],[126,53]],
m:[29,174,92,237,241,173,182,203,218,231,216,104,207,214,126,129,156,213],
e:[24,37,95,98,172,204],
t3:[53]
},{//Rapidash
l:[[33,1],[39,1],[45,1],[52,1],[45,4],[39,8],[52,13],[23,19],[83,26],[36,34],[31,40],[97,47],[126,61]],
m:[29,174,92,237,241,173,63,182,203,218,231,216,104,207,214,126,129,156,213],
t3:[53]
},{//Slowpoke
l:[[33,1],[174,1],[45,6],[55,15],[93,20],[50,29],[29,34],[133,43],[94,48]],
m:[29,174,92,192,244,237,241,173,59,196,182,240,203,218,231,89,216,91,94,247,189,104,207,214,126,129,138,156,213,171,57,70,148],
e:[23,187,219,248],
t3:[53,58]
},{//Slowbro
l:[[33,1],[45,1],[55,1],[174,1],[45,6],[55,15],[93,20],[50,29],[29,34],[110,37],[133,46],[94,54]],
m:[223,29,174,92,192,249,244,237,241,173,59,63,196,182,240,203,218,231,89,216,91,94,247,189,104,8,207,214,126,129,138,156,213,210,171,57,70,148],
t3:[53,58]
},{//Magnemite
l:[[33,1],[84,6],[48,11],[49,16],[86,21],[199,27],[129,33],[103,39],[192,45]],
m:[174,205,92,192,237,173,182,240,203,218,87,216,104,207,214,129,156,148],
t3:[85]
},{//Magneton
l:[[33,1],[48,1,,11],[49,1,,16],[84,1,,6],[84,6],[48,11],[49,16],[86,21],[199,27],[129,35],[161,,,35],[103,43],[192,53]],
m:[174,205,92,192,237,173,63,182,240,203,218,87,216,104,207,214,129,156,148],
t3:[85]
},{//Farfetch'd
l:[[64,1],[28,7],[43,13],[31,19],[14,25],[97,31],[163,37],[206,44]],
m:[29,174,92,244,237,241,173,182,203,218,231,216,189,104,207,214,129,197,156,213,168,211,15,19],
e:[16,98,119,175,193,211]
},{//Doduo
l:[[45,1],[64,1],[228,9],[31,13],[161,21],[99,25],[65,33],[97,37]],
m:[174,92,237,241,173,182,203,218,216,189,104,207,214,129,156,213,168,211,19],
e:[48,98,114,175,185]
},{//Dodrio
l:[[31,1],[45,1],[64,1],[228,1],[228,9],[31,13],[161,21],[99,25],[65,38],[97,47]],
m:[174,92,237,241,173,63,182,203,218,216,189,104,207,214,129,156,213,168,211,19]
},{//Seel
l:[[29,1],[45,5],[62,16],[156,21],[36,32],[58,37],[219,48]],
m:[29,174,92,237,173,59,196,182,240,203,218,216,104,207,214,156,213,57,250,127],
e:[21,50,64,122,195,227],
t3:[58]
},{//Dewgong
l:[[29,1],[45,1],[62,1],[45,5],[62,16],[156,21],[36,32],[58,43],[219,60]],
m:[29,174,92,237,173,59,63,196,182,240,203,218,216,104,207,214,156,213,57,250,127],
t3:[58]
},{//Grimer
l:[[1,1],[139,1],[106,5],[50,10],[124,16],[107,23],[103,31],[151,40],[188,50]],
m:[223,174,92,192,237,241,173,182,202,203,218,87,216,189,104,8,207,214,188,126,9,156,213,168,7],
e:[114,122,212],
t3:[53,85]
},{//Muk
l:[[1,1],[106,1],[139,1],[107,23],[103,31],[106,33],[50,37],[124,45],[151,45],[188,60]],
m:[223,174,92,192,237,241,173,63,182,202,203,218,87,216,189,104,8,207,214,188,126,9,156,213,168,7],
t3:[53,85]
},{//Shellder
l:[[33,1],[110,1],[48,9],[62,17],[182,25],[43,33],[128,41],[58,49]],
m:[174,92,237,173,59,196,182,240,203,218,216,104,207,214,129,156,213,57,250],
e:[36,61,103,112,229],
t3:[58]
},{//Cloyster
l:[[48,1],[62,1],[110,1],[182,1],[191,,,33],[131,41]],
m:[174,92,237,173,59,63,196,182,240,203,218,216,104,207,214,129,156,213,57,250],
t3:[58]
},{//Gastly
l:[[95,1],[122,1],[180,8],[212,13],[174,16],[101,21],[109,28],[138,33],[194,36]],
m:[174,92,192,244,237,241,173,182,240,202,203,218,87,216,94,247,104,207,214,138,156,213,168,171],
e:[114,149,195],
t3:[85]
},{//Haunter
l:[[95,1],[122,1],[180,1],[180,8],[212,13],[174,16],[101,21],[109,31],[138,39],[194,48]],
m:[174,92,192,244,237,241,173,182,240,202,203,218,87,216,94,247,104,207,214,138,156,213,168,171],
t3:[85]
},{//Gengar
l:[[95,1],[122,1],[180,1],[180,8],[212,13],[174,16],[101,21],[109,31],[138,39],[194,48]],
m:[223,29,174,92,192,249,244,237,241,173,63,182,240,202,203,218,87,216,94,247,104,8,207,214,9,138,156,213,168,7,171,70],
t3:[85]
},{//Onix
l:[[33,1],[103,1],[20,10],[88,14],[106,23],[99,27],[201,36],[21,40]],
m:[29,174,46,92,249,237,241,173,182,203,218,231,89,216,91,189,104,207,214,201,156,213,70],
e:[157,175]
},{//Drowzee
l:[[1,1],[95,1],[50,10],[93,18],[29,25],[139,31],[96,36],[94,40],[244,43],[248,45]],
m:[223,29,174,92,192,244,237,241,173,182,240,203,218,216,94,247,104,8,207,214,9,138,156,213,7,171,148],
e:[112,113]
},{//Hypno
l:[[1,1],[50,1],[93,1],[95,1],[50,10],[93,18],[29,25],[139,33],[96,40],[94,49],[244,55],[248,60]],
m:[223,29,174,92,192,244,237,241,173,63,182,240,203,218,216,94,247,104,8,207,214,9,138,156,213,7,171,148]
},{//Krabby
l:[[145,1],[43,5],[11,12],[106,16],[23,23],[12,27],[182,34],[152,41]],
m:[174,92,249,237,173,59,196,182,240,203,218,216,189,104,207,214,156,213,168,210,15,57,70,250],
e:[21,91,114,133,175],
t3:[58]
},{//Kingler
l:[[11,1],[43,1],[145,1],[43,5],[11,12],[106,16],[23,23],[12,27],[182,38],[152,49]],
m:[174,92,249,237,173,59,63,196,182,240,203,218,216,189,104,207,214,156,213,168,210,15,57,70,250],
t3:[58]
},{//Voltorb
l:[[33,1],[103,9],[49,17],[120,23],[205,29],[113,33],[129,37],[153,39],[243,41]],
m:[29,174,205,92,192,237,173,182,240,203,218,87,216,104,207,214,129,156,148],
t3:[85]
},{//Electrode
l:[[33,1],[49,1],[103,1],[120,1],[103,9],[49,17],[120,23],[205,29],[113,34],[129,40],[153,44],[243,48]],
m:[29,174,205,92,192,237,173,63,182,240,203,218,87,216,104,207,214,129,156,148],
t3:[85]
},{//Exeggcute
l:[[95,1],[140,1],[115,7],[73,13],[93,19],[78,25],[77,31],[79,37],[76,43]],
m:[174,205,92,244,237,241,173,182,202,203,218,76,216,94,104,207,214,188,138,156,213,168,171,70,148],
e:[72,115,235,236,246]
},{//Exeggutor
l:[[93,1],[95,1],[140,1],[23,19],[121,31]],
m:[29,174,205,92,244,237,241,173,63,182,202,203,218,76,216,94,104,207,214,188,138,156,213,168,171,70,148]
},{//Cubone
l:[[45,1],[39,5],[125,9],[29,13],[43,17],[116,21],[155,25],[99,29],[206,33],[37,37],[198,41]],
m:[223,29,174,92,249,237,241,173,59,196,182,203,218,231,89,216,91,189,104,207,214,201,126,9,197,156,213,168,7,70],
e:[103,130,157,187,195,246],
e3:[14],
t3:[53,58]
},{//Marowak
l:[[29,1],[39,1],[45,1],[125,1],[39,5],[125,9],[29,13],[43,17],[116,21],[155,25],[99,32],[206,39],[37,46],[198,53]],
m:[223,29,174,92,249,237,241,173,59,63,196,182,203,218,231,89,216,91,189,104,207,214,201,126,9,197,156,213,168,7,70],
t3:[53,58]
},{//Hitmonlee
l:[[24,1],[96,6],[27,11],[26,16],[116,21],[136,26],[170,31],[193,36],[203,41],[25,46],[179,51]],
m:[223,29,174,92,249,237,241,173,182,203,218,216,189,104,207,214,129,197,156,213,168,70]
},{//Hitmonchan
l:[[4,1],[97,7],[228,13],[7,26],[8,26],[9,26],[183,32],[5,38],[197,44],[68,50]],
m:[223,29,174,92,249,237,241,173,182,203,218,216,189,104,8,207,214,129,9,197,156,213,168,7,70]
},{//Lickitung
l:[[122,1],[48,7],[111,13],[23,19],[35,25],[50,31],[21,37],[103,43]],
m:[223,29,174,205,92,249,244,237,241,173,59,63,196,182,240,203,218,231,87,89,216,247,189,104,8,207,214,201,126,111,9,138,156,213,168,7,171,15,57,70],
e:[34,187,222],
t3:[53,58,85]
},{//Koffing
l:[[33,1],[139,1],[123,9],[120,17],[124,21],[108,25],[114,33],[153,41],[194,45]],
m:[174,205,92,192,237,241,173,182,203,218,87,216,104,207,214,188,126,156,213,168],
e:[60,103,149,194,220],
t3:[53,85]
},{//Weezing
l:[[33,1],[120,1],[123,1],[139,1],[123,9],[120,17],[124,21],[108,25],[114,33],[153,44],[194,51]],
m:[174,205,92,192,237,241,173,63,182,203,218,87,216,104,207,214,188,126,156,213,168],
t3:[53,85]
},{//Rhyhorn
l:[[30,1],[39,1],[23,13],[31,19],[184,31],[32,37],[36,49],[89,55]],
m:[29,174,205,46,92,192,249,237,241,173,59,196,182,203,218,231,87,89,216,91,189,104,207,214,201,126,156,213,70],
e:[37,68,157,179,222,228,242],
t3:[53,58,85]
},{//Rhydon
l:[[23,1],[30,1],[31,1],[39,1],[23,13],[31,19],[184,31],[32,37],[36,54],[89,65]],
m:[223,29,174,205,46,92,192,249,237,241,173,59,63,196,182,203,218,231,87,89,216,91,189,104,207,214,201,126,9,156,213,7,210,57,70],
t3:[53,58,85]
},{//Chansey
l:[[1,1],[45,5],[39,9],[135,13],[3,17],[107,23],[47,29],[121,35],[111,41],[113,49],[38,57]],
m:[223,29,174,205,92,192,249,244,237,241,173,59,63,196,182,240,203,218,76,231,87,216,94,247,189,104,207,214,201,126,111,138,156,213,70,148],
e:[118,215,217],
t3:[53,58,85]
},{//Tangela
l:[[132,1],[79,4],[71,10],[77,13],[22,19],[20,25],[72,31],[78,34],[21,40],[74,46]],
m:[29,174,92,244,237,241,230,173,63,182,202,203,218,76,216,104,207,214,188,156,213,168,15,148],
e:[72,93,115,133,175]
},{//Kangaskhan
l:[[4,1],[43,7],[44,13],[39,19],[5,25],[99,31],[203,37],[146,43],[179,49]],
m:[223,29,174,46,92,192,249,237,241,173,59,63,196,182,240,203,218,231,87,89,216,247,189,104,8,207,214,201,126,9,156,213,7,210,57,70],
e:[23,50,116,193,219],
t3:[53,58,85]
},{//Horsea
l:[[145,1],[108,8],[43,15],[55,22],[239,29],[97,36],[56,43]],
m:[29,174,92,237,173,59,196,182,240,203,218,225,216,104,207,214,129,156,213,57,250,127],
e:[50,62,82,150,175,190],
t3:[58]
},{//Seadra
l:[[43,1],[55,1],[108,1],[145,1],[108,8],[43,15],[55,22],[239,29],[97,40],[56,51]],
m:[29,174,92,237,173,59,63,196,182,240,203,218,225,216,104,207,214,129,156,213,57,250,127],
t3:[58]
},{//Goldeen
l:[[39,1],[64,1],[48,10],[30,15],[175,24],[31,29],[127,38],[32,43],[97,52]],
m:[174,92,237,173,59,196,182,240,203,218,216,104,207,214,129,156,213,57,127],
e:[56,60,114],
t3:[58]
},{//Seaking
l:[[39,1],[64,1],[48,10],[30,15],[175,24],[31,29],[127,41],[32,49],[97,61]],
m:[174,92,237,173,59,63,196,182,240,203,218,216,104,207,214,129,156,213,57,127],
t3:[58]
},{//Staryu
l:[[33,1],[106,1],[55,7],[229,13],[105,19],[129,25],[61,31],[107,37],[113,43],[56,50]],
m:[174,92,192,244,237,173,59,196,182,240,203,218,87,216,94,104,207,214,129,156,213,57,148,250,127],
t3:[58,85]
},{//Starmie
l:[[33,1],[61,1],[105,1],[229,1],[109,37]],
m:[174,92,192,244,237,173,59,63,196,182,240,203,218,87,216,94,104,207,214,129,138,156,213,171,57,148,250,127],
t3:[58,85]
},{//Mr. Mime
l:[[112,1],[93,6],[164,11],[96,16],[3,21],[113,26],[115,26],[227,31],[60,36],[226,41],[219,46]],
m:[223,29,174,92,192,244,237,241,173,63,182,203,218,76,87,216,94,247,189,104,8,207,214,9,138,156,213,168,7,171,148],
e:[95,102,248],
t3:[85]
},{//Scyther
l:[[43,1],[98,1],[116,6],[228,12],[206,18],[97,24],[17,30],[163,36],[14,42],[104,48]],
m:[29,174,92,249,237,241,173,63,182,203,218,216,104,207,214,129,197,156,213,168,211,210,15],
e:[13,68,113,179,219,226]
},{//Jynx
l:[[1,1],[122,1],[142,1],[181,1],[142,9],[181,13],[3,21],[8,25],[212,35],[34,41],[195,51],[59,57]],
m:[223,29,174,92,244,237,230,173,59,63,196,182,240,203,218,216,94,247,189,104,8,207,214,138,156,213,168,171],
t3:[58]
},{//Electabuzz
l:[[9,1],[43,1],[98,1],[9,9],[113,17],[129,25],[103,36],[85,47],[87,58]],
m:[223,29,174,92,192,249,237,173,63,182,240,203,218,231,87,216,94,189,104,8,207,214,129,9,197,156,213,168,7,70,148],
t3:[85]
},{//Magmar
l:[[7,1],[43,1],[52,1],[123,1],[43,7],[123,13],[7,19],[108,25],[241,33],[53,41],[109,49],[126,57]],
m:[223,29,174,92,249,237,241,173,63,182,203,218,231,216,94,189,104,207,214,126,9,197,156,213,168,7,70],
t3:[53]
},{//Pinsir
l:[[11,1],[116,7],[20,13],[69,19],[106,25],[12,31],[66,37],[14,43]],
m:[29,174,92,249,237,241,173,63,182,203,218,216,104,207,214,156,213,168,210,15,70],
e:[31,175]
},{//Tauros
l:[[33,1],[39,4],[99,8],[30,13],[184,19],[228,26],[156,34],[37,43],[36,53]],
m:[29,174,92,192,249,237,241,173,59,63,196,182,203,218,231,87,89,216,104,207,214,126,156,213,57,70],
t3:[53,58,85]
},{//Magikarp
l:[[150,1],[33,15],[175,30]]
},{//Gyarados
l:[[37,1],[44,20],[82,25],[43,30],[239,35],[56,40],[240,45],[63,50]],
m:[29,174,46,92,192,249,237,173,59,63,196,182,240,203,218,225,87,216,104,207,214,201,126,156,213,57,70,250,127],
t3:[53,58,85]
},{//Lapras
l:[[45,1],[47,1],[55,1],[54,8],[34,15],[109,22],[195,29],[58,36],[240,43],[219,50],[56,57]],
m:[29,174,92,192,249,237,173,59,63,196,182,240,203,218,231,225,87,216,94,104,207,214,138,156,213,171,57,70,250],
e:[62,193],
t3:[58,85]
},{//Ditto
l:[[144,1]]
},{//Eevee
l:[[33,1],[39,1],[28,8],[45,16],[98,23],[44,30],[116,36],[226,,,36],[36,42]],
m:[29,174,92,237,241,173,182,240,203,218,231,216,247,189,104,207,214,129,197,156,213],
e:[175,204]
},{//Vaporeon
l:[[33,1],[39,1],[28,8],[55,16],[98,23],[44,30],[62,36],[114,42],[151,47],[56,52]],
m:[29,174,46,92,237,241,173,59,63,196,182,240,203,218,231,216,247,189,104,207,214,129,197,156,213,57,250,127],
t3:[58]
},{//Jolteon
l:[[33,1],[39,1],[28,8],[84,16],[98,23],[24,30],[42,36],[86,42],[97,47],[87,52]],
m:[29,174,46,92,192,237,241,173,63,182,240,203,218,231,87,216,247,189,104,207,214,129,197,156,213,148],
t3:[85]
},{//Flareon
l:[[33,1],[39,1],[28,8],[52,16],[98,23],[44,30],[83,36],[123,42],[43,47],[53,52]],
m:[29,174,46,92,192,237,241,173,63,182,240,203,218,231,216,247,189,104,207,214,126,129,197,156,213],
t3:[53]
},{//Porygon
l:[[33,1],[160,1],[176,1],[97,9],[60,12],[105,20],[159,24],[199,32],[161,36],[192,44]],
m:[174,92,192,244,237,241,173,59,63,196,182,240,203,218,231,87,216,94,104,207,214,129,138,156,168,171,148],
t3:[58,85]
},{//Omanyte
l:[[110,1],[132,1],[44,13],[55,19],[43,31],[182,37],[246,49],[56,55]],
m:[29,174,205,92,249,237,173,59,196,182,240,203,218,216,104,207,214,201,156,213,168,57,250],
e:[21,48,61,62,114],
t3:[58]
},{//Omastar
l:[[44,1],[110,1],[132,1],[44,13],[55,19],[43,31],[182,37],[131,40],[246,54],[56,65]],
m:[29,174,205,92,249,237,173,59,63,196,182,240,203,218,216,104,207,214,201,156,213,168,57,250],
t3:[58]
},{//Kabuto
l:[[10,1],[106,1],[71,10],[43,19],[28,28],[203,37],[72,46],[246,55]],
m:[174,205,92,249,237,173,59,196,182,240,202,203,218,216,104,207,214,201,156,213,168],
e:[61,62,91,175,229],
t3:[58]
},{//Kabutops
l:[[10,1],[71,1],[106,1],[71,10],[43,19],[28,28],[203,37],[163,40],[72,51],[246,65]],
m:[29,174,205,92,249,237,173,59,63,196,182,240,202,203,218,216,104,207,214,201,156,213,168,210,15,57,250],
t3:[58]
},{//Aerodactyl
l:[[17,1],[97,8],[44,15],[48,22],[246,29],[184,36],[36,43],[63,50]],
m:[29,174,46,92,249,237,173,63,182,240,203,218,231,225,89,216,104,207,214,201,126,129,197,156,213,211,19],
e:[18,193,211,228],
t3:[53]
},{//Snorlax
l:[[33,1],[133,8],[111,15],[187,22],[29,29],[156,36],[173,36],[34,43],[205,50],[63,57]],
m:[223,29,174,205,92,192,249,244,237,241,173,59,63,196,182,240,203,218,76,87,89,216,94,247,189,104,8,207,214,201,126,111,9,156,213,7,57,70],
e:[122],
t3:[53,58,85]
},{//Articuno
l:[[16,1],[181,1],[54,13],[97,25],[170,37],[58,49],[115,61],[59,73]],
m:[174,46,92,249,237,241,173,59,63,196,182,240,203,218,216,189,104,207,214,201,129,197,156,211,19],
t3:[58]
},{//Zapdos
l:[[64,1],[84,1],[86,13],[97,25],[197,37],[65,49],[113,61],[87,73]],
m:[174,46,92,192,249,237,241,173,63,182,240,203,218,87,216,189,104,207,214,201,129,197,156,211,19,148],
t3:[85]
},{//Moltres
l:[[17,1],[52,1],[83,13],[97,25],[203,37],[53,49],[219,61],[143,73]],
m:[174,46,92,249,237,241,173,63,182,240,203,218,216,189,104,207,214,201,126,129,197,156,211,19],
t3:[53]
},{//Dratini
l:[[35,1],[43,1],[86,8],[239,15],[82,22],[21,29],[97,36],[219,43],[200,50],[63,57]],
m:[29,174,92,192,237,173,59,196,182,240,203,218,231,225,87,216,104,207,214,126,129,197,156,213,57,127],
e:[48,54,113,114],
t3:[53,58,85],
s:[245]
},{//Dragonair
l:[[35,1],[43,1],[86,1],[239,1],[86,8],[239,15],[82,22],[21,29],[97,38],[219,47],[200,56],[63,65]],
m:[29,174,92,192,237,173,59,196,182,240,203,218,231,225,87,216,104,207,214,126,129,197,156,213,57,127],
t3:[53,58,85]
},{//Dragonite
l:[[35,1],[43,1],[86,1],[239,1],[86,8],[239,15],[82,22],[21,29],[97,38],[219,47],[17,55],[200,61],[63,75]],
m:[223,29,174,92,192,249,237,173,59,63,196,182,240,203,218,231,225,87,216,189,104,8,207,214,201,126,129,9,197,156,213,211,7,210,19,57,70,250,127],
t3:[53,58,85]
},{//Mewtwo
l:[[50,1],[93,1],[112,11],[129,22],[244,33],[248,44],[54,55],[94,66],[133,77],[105,88],[219,99]],
m:[223,29,174,92,192,249,244,237,241,173,59,63,196,182,240,203,218,76,231,87,216,94,247,189,104,8,207,214,126,129,9,138,197,156,7,171,70,148],
t3:[53,58,85]
},{//Mew
l:[[1,1],[144,10],[5,20],[118,30],[94,40],[246,50]],
m:[223,29,174,205,46,92,192,249,244,237,241,230,173,59,63,196,182,240,202,203,218,76,231,225,87,89,216,91,94,247,189,104,8,207,214,188,201,126,129,111,9,138,197,156,213,168,211,7,210,171,15,19,57,70,148,250,127],
t3:[53,58,85]
},{//Chikorita
l:[[33,1],[45,1],[75,8],[115,12],[77,15],[235,22],[34,29],[113,36],[219,43],[76,50]],
m:[29,174,92,237,241,230,173,182,202,203,218,76,231,216,189,104,207,214,197,156,213,15,148],
e:[22,68,73,175,246],
e3:[14]
},{//Bayleef
l:[[33,1],[45,1],[75,1],[115,1],[75,8],[115,12],[77,15],[235,23],[34,31],[113,39],[219,47],[76,55]],
m:[29,174,92,249,237,241,230,173,182,202,203,218,76,231,216,189,104,207,214,197,156,213,210,15,70,148]
},{//Meganium
l:[[33,1],[45,1],[75,1],[115,1],[75,8],[115,12],[77,15],[235,23],[34,31],[113,41],[219,51],[76,61]],
m:[29,174,92,249,237,241,230,173,63,182,202,203,218,76,231,89,216,189,104,207,214,197,156,213,210,15,70,148]
},{//Cyndaquil
l:[[33,1],[43,1],[108,6],[52,12],[98,19],[172,27],[129,36],[53,46]],
m:[29,174,205,92,237,241,173,182,203,218,231,216,91,189,104,207,214,126,129,111,197,156,213,15],
e:[37,98,154,179,193],
e3:[66],
t3:[53]
},{//Quilava
l:[[33,1],[43,1],[108,1],[108,6],[52,12],[98,21],[172,31],[129,42],[53,54]],
m:[29,174,205,46,92,249,237,241,173,182,203,218,231,216,91,189,104,207,214,126,129,111,197,156,213,210,15,70],
t3:[53]
},{//Typhlosion
l:[[33,1],[43,1],[52,1],[108,1],[108,6],[52,12],[98,21],[172,31],[129,45],[53,60]],
m:[223,29,174,205,46,92,249,237,241,173,63,182,203,218,231,89,216,91,189,104,207,214,126,129,111,9,197,156,213,7,210,15,70],
t3:[53]
},{//Totodile
l:[[10,1],[43,1],[99,7],[55,13],[44,20],[184,27],[163,35],[103,43],[56,52]],
m:[223,29,174,92,237,173,59,196,182,240,203,218,231,216,91,189,104,8,207,214,197,156,213,15,57,250],
e:[13,37,56,157,242,246],
t3:[58]
},{//Croconaw
l:[[10,1],[43,1],[99,1],[99,7],[55,13],[44,21],[184,28],[163,37],[103,45],[56,55]],
m:[223,29,174,46,92,249,237,173,59,196,182,240,203,218,231,216,91,189,104,8,207,214,197,156,213,210,15,57,70,250],
t3:[58]
},{//Feraligatr
l:[[10,1],[43,1],[55,1],[99,1],[99,7],[55,13],[44,21],[184,28],[163,38],[103,47],[56,58]],
m:[223,29,174,46,92,249,237,173,59,63,196,182,240,203,218,231,89,216,91,189,104,8,207,214,197,156,213,210,15,57,70,250],
t3:[58]
},{//Sentret
l:[[33,1],[111,5],[98,11],[154,17],[21,25],[156,33],[133,41]],
m:[223,29,174,205,92,237,241,173,182,203,218,231,216,91,247,189,104,8,207,214,129,111,9,197,156,213,168,7,210,15,57],
e:[38,116,163,179,228]
},{//Furret
l:[[10,1],[98,1],[111,1],[111,5],[98,11],[154,18],[21,28],[156,38],[133,48]],
m:[223,29,174,205,92,237,241,173,63,182,203,218,231,216,91,247,189,104,8,207,214,129,111,9,197,156,213,168,7,210,15,57,70]
},{//Hoothoot
l:[[33,1],[45,1],[193,6],[64,11],[95,16],[115,22],[36,28],[93,34],[138,48]],
m:[174,92,237,241,173,182,203,218,216,189,104,207,214,129,138,197,156,213,168,211,171,19,148],
e:[17,18,48,119,185],
e3:[143]
},{//Noctowl
l:[[33,1],[45,1],[64,1],[193,1],[193,6],[64,11],[95,16],[115,25],[36,33],[93,41],[138,57]],
m:[174,92,237,241,173,63,182,203,218,216,189,104,207,214,129,138,197,156,213,168,211,171,19,148]
},{//Ledyba
l:[[33,1],[48,8],[4,15],[113,22],[115,22],[219,22],[226,29],[129,36],[97,43],[38,50]],
m:[223,29,174,205,92,237,241,230,173,182,202,203,218,76,216,91,104,8,207,214,129,9,156,213,168,148],
e:[60,113,117]
},{//Ledian
l:[[33,1],[48,1],[48,8],[4,15],[113,24],[115,24],[219,24],[226,33],[129,42],[97,51],[38,60]],
m:[223,29,174,205,92,237,241,230,173,63,182,202,203,218,76,216,91,104,8,207,214,129,9,156,213,168,148]
},{//Spinarak
l:[[40,1],[81,1],[184,6],[132,11],[101,17],[141,23],[154,30],[169,37],[103,45],[97,,,45],[94,53]],
m:[174,92,237,241,173,182,202,203,218,76,216,91,94,104,207,214,188,156,213,168,148],
e:[49,50,60,226,228]
},{//Ariados
l:[[40,1],[81,1],[132,1,,11],[184,1,,6],[184,6],[132,11],[101,17],[141,25],[154,34],[169,43],[103,53],[97,,,53],[94,63]],
m:[174,92,237,241,173,63,182,202,203,218,76,216,91,94,104,207,214,188,156,213,168,148]
},{//Crobat
l:[[48,1],[103,1],[141,1],[48,6],[44,12],[109,19],[17,30],[212,42],[114,55]],
m:[174,92,237,241,173,63,182,202,203,218,216,104,207,214,129,197,156,213,168,211,19]
},{//Chinchou
l:[[86,1],[145,1],[48,5],[175,13],[55,17],[209,25],[109,29],[36,37],[56,41]],
m:[174,92,192,237,173,182,240,203,218,87,216,104,207,214,156,213,57,148,250,127],
e:[48,103,175],
t3:[58,85]
},{//Lanturn
l:[[48,1],[86,1],[145,1],[48,5],[175,13],[55,17],[209,25],[109,33],[36,45],[56,53]],
m:[174,92,192,237,173,63,182,240,203,218,87,216,104,207,214,156,213,57,148,250,127],
t3:[58,85]
},{//Pichu
l:[[84,1],[204,1],[39,6],[86,8],[186,11]],
m:[29,174,205,92,192,237,173,182,240,203,218,231,87,216,189,104,207,214,129,111,197,156,213,148],
e:[3,117,179,217,227],
t3:[85],
s3:[146]
},{//Cleffa
l:[[1,1],[204,1],[227,4],[47,8],[186,13]],
m:[29,174,205,92,192,244,237,241,173,196,182,240,203,218,76,231,216,94,247,189,104,207,214,126,111,138,197,156,213,171,148],
e:[102,118,133,150,187,217],
t3:[53],
s3:[146]
},{//Igglybuff
l:[[47,1],[204,1],[111,4],[1,9],[186,14]],
m:[29,174,205,92,192,244,237,241,173,196,182,240,203,218,76,216,94,247,189,104,207,214,126,111,138,197,156,213,171,148],
e:[185,195,217],
t3:[53],
s3:[146]
},{//Togepi
l:[[45,1],[204,1],[118,7],[186,18],[227,25],[219,31],[38,38]],
m:[29,174,205,92,192,249,244,237,241,173,182,240,203,218,76,216,94,247,189,104,207,214,126,129,111,138,197,156,213,148],
e:[64,119,193,217,248],
t3:[53]
},{//Togetic
l:[[45,1],[204,1],[118,7],[186,18],[227,25],[219,31],[38,38]],
m:[29,174,205,92,192,249,244,237,241,173,63,182,240,203,218,76,216,94,247,189,104,207,214,126,129,111,138,197,156,213,211,19,148],
t3:[53]
},{//Natu
l:[[43,1],[64,1],[101,10],[100,20],[248,30],[109,40],[94,50]],
m:[174,92,244,237,241,173,182,202,203,218,76,216,94,104,207,214,129,138,197,156,213,168,171,148],
e:[65,98,114,185,211]
},{//Xatu
l:[[43,1],[64,1],[101,1],[101,10],[100,20],[248,35],[109,50],[94,65]],
m:[174,92,244,237,241,173,63,182,202,203,218,76,216,94,104,207,214,129,138,197,156,213,168,171,19,148]
},{//Mareep
l:[[33,1],[45,1],[84,9],[86,16],[178,23],[113,30],[87,37]],
m:[29,174,92,192,237,173,182,240,203,218,231,87,216,104,207,214,129,111,156,213,148],
e:[34,36,85,103,115,219],
t3:[85]
},{//Flaaffy
l:[[33,1],[45,1],[84,1],[84,9],[86,18],[178,27],[113,36],[87,45]],
m:[223,29,174,92,192,249,237,173,182,240,203,218,231,87,216,104,207,214,129,111,9,156,213,7,70,148],
t3:[85]
},{//Ampharos
l:[[33,1],[45,1],[84,1],[86,1],[84,9],[86,18],[178,27],[9,30],[113,42],[87,57]],
m:[223,29,174,92,192,249,237,173,63,182,240,203,218,231,87,216,104,207,214,129,111,9,156,213,7,70,148],
t3:[85]
},{//Bellossom
l:[[71,1],[78,1],[80,1],[230,1],[76,55]],
m:[174,92,237,241,230,173,63,182,202,203,218,76,216,104,207,214,156,213,15,148]
},{//Marill
l:[[33,1],[111,3],[39,6],[55,10],[205,15],[61,21],[38,28],[240,36]],
m:[223,29,174,205,92,237,173,59,196,182,240,203,218,231,216,189,104,8,207,214,129,111,156,213,57,250,127],
e:[48,113,133,187,193,195,217,248],
t3:[58]
},{//Azumarill
l:[[33,1],[39,1],[55,1],[111,1],[111,3],[39,6],[55,10],[205,15],[61,25],[38,36],[240,48]],
m:[223,29,174,205,92,249,237,173,59,63,196,182,240,203,218,231,216,189,104,8,207,214,129,111,156,213,57,70,250,127],
t3:[58]
},{//Sudowoodo
l:[[88,1],[102,1],[175,10],[67,19],[157,28],[185,37],[21,46]],
m:[223,29,174,205,92,249,244,237,241,173,182,203,218,89,216,91,189,104,8,207,214,201,111,9,156,213,168,7,70],
e:[120]
},{//Politoed
l:[[3,1],[55,1],[95,1],[195,1],[195,35],[207,51]],
m:[223,29,174,92,249,237,173,59,63,196,182,240,203,218,89,216,94,189,104,8,207,214,111,197,156,213,168,57,70,250,127],
t3:[58]
},{//Hoppip
l:[[150,1],[235,1,,5],[39,5],[33,10],[77,13],[78,15],[79,17],[73,20],[178,25],[72,30]],
m:[29,174,92,237,241,230,173,182,202,203,218,76,216,104,207,214,111,156,213,148],
e:[6,38,45,93,115,133,227]
},{//Skiploom
l:[[33,1,,10],[39,1,,5],[150,1],[235,1,,5],[39,5],[33,10],[77,13],[78,15],[79,17],[73,22],[178,29],[72,36]],
m:[29,174,92,237,241,230,173,182,202,203,218,76,216,104,207,214,111,156,213,148]
},{//Jumpluff
l:[[33,1,,10],[39,1,,5],[150,1],[235,1,,5],[39,5],[33,10],[77,13],[78,15],[79,17],[73,22],[178,33],[72,44]],
m:[29,174,92,237,241,230,173,63,182,202,203,218,76,216,104,207,214,111,156,213,148]
},{//Aipom
l:[[10,1],[39,1],[28,6],[226,12],[154,19],[129,27],[103,36],[97,46]],
m:[223,29,174,92,192,249,237,241,173,182,203,218,231,87,216,247,189,104,8,207,214,129,111,9,138,197,156,213,168,7,210,171,15,70],
e:[3,21,68,97,103,180,228,251],
t3:[85]
},{//Sunkern
l:[[71,1],[74,4],[72,10],[241,19],[235,31],[202,46]],
m:[174,92,237,241,230,173,182,202,203,218,76,216,104,207,214,188,156,213,15,148]
},{//Sunflora
l:[[1,1],[71,1],[74,4],[75,10],[241,19],[80,31],[76,46]],
m:[174,92,237,241,230,173,63,182,202,203,218,76,216,104,207,214,188,156,213,15,148]
},{//Yanma
l:[[33,1],[193,1],[98,7],[104,13],[49,19],[197,25],[48,31],[129,37],[17,,,37],[103,43]],
m:[29,174,92,237,241,173,182,202,203,218,76,216,104,207,214,129,197,156,213,168,148],
e:[18,141,179]
},{//Wooper
l:[[39,1],[55,1],[21,11],[133,21],[89,31],[240,41],[54,51],[114,51]],
m:[223,29,174,205,92,249,237,173,182,240,203,218,231,89,216,91,189,104,8,207,214,188,201,111,156,213,57,148,250],
e:[34,219,246],
t3:[58]
},{//Quagsire
l:[[39,1],[55,1],[21,11],[133,23],[89,35],[240,47],[54,59],[114,59]],
m:[223,29,174,205,92,249,237,173,63,182,240,203,218,231,89,216,91,189,104,8,207,214,188,201,111,156,213,57,70,148,250],
t3:[58]
},{//Espeon
l:[[33,1],[39,1],[28,8],[93,16],[98,23],[129,30],[60,36],[244,42],[94,47],[234,52]],
m:[29,174,92,192,244,237,241,173,63,182,240,203,218,231,216,94,247,189,104,207,214,129,138,197,156,213,171,15,148]
},{//Umbreon
l:[[33,1],[39,1],[28,8],[228,16],[98,23],[109,30],[185,36],[212,42],[103,47],[236,52]],
m:[29,174,92,192,244,237,241,173,63,182,240,203,218,231,216,94,247,189,104,207,214,129,138,197,156,213,171,15,148]
},{//Murkrow
l:[[64,1],[228,11],[114,16],[101,26],[185,31],[212,41]],
m:[174,92,244,237,241,173,196,182,203,218,216,247,189,104,207,214,129,138,197,156,213,168,211,171,19],
e:[17,18,65,98,119],
e3:[143]
},{//Slowking
l:[[33,1],[174,1],[45,6],[55,15],[93,20],[50,29],[29,34],[207,43],[94,48]],
m:[223,29,174,92,192,249,244,237,241,173,59,63,196,182,240,203,218,231,89,216,91,94,247,189,104,8,207,214,126,129,138,156,213,210,171,57,70,148,250],
t3:[53,58]
},{//Misdreavus
l:[[45,1],[149,1],[180,6],[109,12],[212,19],[60,27],[220,36],[195,46]],
m:[29,174,92,192,244,237,241,173,182,240,203,218,87,216,94,247,104,207,214,129,111,138,156,213,168,171,148],
e:[103,194],
t3:[85]
},{//Unown
l:[[237,1]]
},{//Wobbuffet
l:[[68,1],[194,1],[219,1],[243,1]]
},{//Girafarig
l:[[23,1],[33,1],[45,1],[93,1],[93,7],[23,13],[97,20],[226,30],[60,41],[242,54]],
m:[29,174,92,192,249,244,237,241,173,182,203,218,231,87,89,216,94,247,189,104,207,214,129,138,156,213,168,171,70],
e:[36,133,193,248,251],
t3:[85]
},{//Pineco
l:[[33,1],[182,1],[120,8],[36,15],[229,22],[117,29],[153,36],[191,43],[38,50]],
m:[29,174,205,92,249,237,241,230,173,182,202,203,218,76,216,104,207,214,111,156,213,70],
e:[42,115,129,175]
},{//Forretress
l:[[33,1],[120,1],[182,1],[120,8],[36,15],[229,22],[117,29],[153,39],[191,49],[38,59]],
m:[29,174,205,92,249,237,241,230,173,63,182,202,203,218,76,216,104,207,214,201,111,156,213,70]
},{//Dunsparce
l:[[99,1],[111,5],[137,13],[180,18],[228,26],[103,30],[36,38]],
m:[29,174,205,92,192,249,244,237,241,173,182,240,203,218,76,231,87,216,91,189,104,207,214,111,138,156,213,168,171,70],
e:[44,99,117,157,246],
t3:[53,85]
},{//Gligar
l:[[40,1],[28,6],[106,13],[98,20],[185,28],[163,36],[103,44],[12,52]],
m:[29,174,92,249,237,241,173,182,203,218,231,216,104,207,214,188,201,129,197,156,213,168,210,15,70],
e:[13,17,68,232]
},{//Steelix
l:[[33,1],[103,1],[20,10],[88,14],[106,23],[99,27],[201,36],[21,40],[242,49]],
m:[29,174,205,46,92,249,237,241,173,63,182,203,218,231,225,89,216,91,189,104,207,214,201,111,156,213,15,70]
},{//Snubbull
l:[[33,1],[184,1],[39,4],[204,8],[44,13],[122,19],[46,26],[99,34],[36,43]],
m:[223,29,174,46,92,192,249,237,241,173,182,240,203,218,87,216,247,189,104,8,207,214,188,111,9,197,156,213,168,7,70],
e:[43,115,118,122,185,215,217,242],
t3:[85]
},{//Granbull
l:[[33,1],[184,1],[39,4],[204,8],[44,13],[122,19],[46,28],[99,38],[36,51]],
m:[223,29,174,46,92,192,249,237,241,173,63,182,240,203,218,87,216,247,189,104,8,207,214,188,111,9,197,156,213,168,7,70],
t3:[85]
},{//Qwilfish
l:[[33,1],[40,1],[191,,,1],[106,10],[107,10],[55,19],[42,28],[36,37],[56,46]],
m:[29,174,205,92,237,173,59,196,182,240,203,218,216,104,207,214,188,129,111,156,213,57,250,127],
e:[48,61,114,175],
t3:[58]
},{//Scizor
l:[[43,1],[98,1],[116,6],[228,12],[206,18],[97,24],[232,30],[163,36],[14,42],[104,48]],
m:[29,174,92,249,237,241,173,63,182,203,218,216,104,207,214,201,129,197,156,213,168,211,210,15,70]
},{//Shuckle
l:[[110,1],[132,1],[35,9],[227,14],[219,23],[117,28],[156,37]],
m:[29,174,205,92,249,237,241,173,182,203,218,89,216,91,189,104,207,214,188,201,111,156,213,70,148],
e:[230]
},{//Heracross
l:[[33,1],[43,1],[30,6],[203,12],[31,19],[68,27],[36,35],[179,44],[224,54]],
m:[29,174,92,249,237,241,173,182,203,218,89,216,104,207,214,197,156,213,168,210,15,70],
e:[106,117,175]
},{//Sneasel
l:[[10,1],[43,1],[98,9],[103,17],[185,25],[154,33],[97,41],[163,49],[251,57],[232,,,65]],
m:[223,29,174,92,249,244,237,173,59,196,182,240,203,218,231,216,91,247,189,104,8,207,214,129,111,138,197,156,213,168,210,171,15,57,70],
e:[44,68,115,180,193],
t3:[58]
},{//Teddiursa
l:[[10,1],[43,1],[122,8],[154,15],[185,22],[156,29],[163,36],[173,43],[37,50]],
m:[223,29,174,205,46,92,192,249,237,241,173,182,203,218,89,216,91,189,104,8,207,214,129,111,9,156,213,168,7,210,15,70],
e:[36,68,69,116,242],
e3:[232]
},{//Ursaring
l:[[10,1],[43,1],[122,1],[154,1],[122,8],[154,15],[185,22],[156,29],[163,39],[173,49],[37,59]],
m:[223,29,174,205,46,92,192,249,237,241,173,63,182,203,218,89,216,91,189,104,8,207,214,129,111,9,156,213,168,7,210,15,70]
},{//Slugma
l:[[123,1],[52,8],[88,15],[106,22],[133,29],[53,36],[157,43],[34,50]],
m:[174,205,92,249,237,241,173,182,203,218,216,189,104,207,214,126,111,156,213],
e:[151],
t3:[53]
},{//Magcargo
l:[[52,1],[88,1],[123,1],[52,8],[88,15],[106,22],[133,29],[53,36],[157,48],[34,60]],
m:[174,205,92,249,237,241,173,63,182,203,218,89,216,189,104,207,214,126,111,156,213,70],
t3:[53]
},{//Swinub
l:[[33,1],[181,10],[203,19],[36,28],[54,37],[59,46],[133,,,55]],
m:[29,174,46,92,249,237,173,59,196,182,240,203,218,89,216,189,104,207,214,111,197,156,213,70],
e:[34,36,44,157,246],
t3:[58]
},{//Piloswine
l:[[30,1],[181,1,,10],[203,1,,19],[181,10],[203,19],[36,28],[31,33],[54,42],[59,56],[133,,,70]],
m:[29,174,46,92,249,237,173,59,63,196,182,240,203,218,89,216,189,104,207,214,111,197,156,213,70],
t3:[58]
},{//Corsola
l:[[33,1],[106,7],[145,13],[105,19],[61,25],[131,31],[243,37],[246,43]],
m:[29,174,205,92,249,237,241,173,182,240,203,218,89,216,94,189,104,207,214,201,111,156,213,57,70,250],
e:[54,103,133,157,219],
t3:[58]
},{//Remoraid
l:[[55,1],[199,11],[60,22],[61,22],[62,22],[116,33],[58,44],[63,55]],
m:[174,92,237,173,63,182,240,203,218,216,189,104,207,214,129,111,156,213,168,57,250],
e:[48,62,103,114,190],
t3:[53,58]
},{//Octillery
l:[[55,1],[132,11],[60,22],[61,22],[62,22],[190,25],[116,38],[58,54],[63,70]],
m:[174,92,237,173,63,182,240,203,218,216,189,104,207,214,129,111,156,213,168,57,250],
t3:[53,58]
},{//Delibird
l:[[217,1]],
m:[29,174,92,237,173,59,196,182,240,203,218,216,189,104,207,214,129,197,156,213,168,19],
e:[62,98,150,229,248],
t3:[58]
},{//Mantine
l:[[33,1],[145,1],[48,10],[61,18],[36,25],[97,32],[17,40],[109,49]],
m:[29,174,92,237,173,59,196,182,240,203,218,216,189,104,207,214,129,156,213,57,250,127],
e:[21,56,114,239],
t3:[58]
},{//Skarmory
l:[[43,1],[64,1],[28,13],[129,19],[97,25],[31,37],[211,49]],
m:[174,92,237,241,173,182,203,218,216,189,104,207,214,201,129,197,156,213,168,211,15,19],
e:[18,65,228],
e3:[143]
},{//Houndour
l:[[43,1],[52,1],[46,7],[123,13],[44,20],[185,27],[53,35],[242,43]],
m:[29,174,46,92,249,237,241,173,182,203,218,76,231,216,247,189,104,207,214,188,126,129,138,197,156,213,168,171],
e:[68,83,99,179,180,228,251],
t3:[53]
},{//Houndoom
l:[[43,1],[52,1],[46,7],[123,13],[44,20],[185,30],[53,41],[242,52]],
m:[29,174,46,92,249,237,241,173,63,182,203,218,76,231,216,247,189,104,207,214,188,126,129,138,197,156,213,168,171,70],
t3:[53]
},{//Kingdra
l:[[43,1],[55,1],[108,1],[145,1],[108,8],[43,15],[55,22],[239,29],[97,40],[56,51]],
m:[29,174,92,237,173,59,63,196,182,240,203,218,225,216,104,207,214,129,156,213,57,250,127],
t3:[58]
},{//Phanpy
l:[[33,1],[45,1],[111,9],[175,17],[36,25],[205,33],[203,41],[38,49]],
m:[29,174,205,46,92,249,237,241,173,182,203,218,89,216,189,104,207,214,201,111,156,213,70],
e:[34,116,246],
e3:[55]
},{//Donphan
l:[[30,1],[45,1],[111,9],[175,17],[31,25],[205,33],[229,41],[89,49]],
m:[29,174,205,46,92,249,237,241,173,63,182,203,218,89,216,189,104,207,214,201,111,156,213,70]
},{//Porygon2
l:[[33,1],[160,1],[176,1],[97,9],[60,12],[105,20],[111,24],[199,32],[161,36],[192,44]],
m:[174,92,192,244,237,241,173,59,63,196,182,240,203,218,231,87,216,94,104,207,214,129,111,138,156,168,171,148],
t3:[58,85]
},{//Stantler
l:[[33,1],[43,8],[95,15],[23,23],[28,31],[36,40],[109,49]],
m:[29,174,46,92,244,237,241,173,182,240,203,218,89,216,94,189,104,207,214,129,138,197,156,213,168,171,148],
e:[44,50,113,115,180]
},{//Smeargle
l:[[166,1],[166,11],[166,21],[166,31],[166,41],[166,51],[166,61],[166,71],[166,81],[166,91]]
},{//Tyrogue
l:[[33,1]],
m:[29,174,92,249,237,241,173,182,203,218,216,189,104,207,214,129,197,156,213,168,70],
e:[136,170,183,229],
s3:[146]
},{//Hitmontop
l:[[27,1],[116,7],[228,13],[98,19],[229,25],[68,31],[97,37],[197,43],[167,49]],
m:[29,174,92,249,237,241,173,182,203,218,216,91,189,104,207,214,129,197,156,213,168,70]
},{//Smoochum
l:[[1,1],[122,1],[186,9],[181,13],[93,21],[47,25],[212,33],[94,37],[195,45],[59,49]],
m:[223,174,92,244,237,230,173,59,196,182,240,203,218,216,94,247,189,104,8,207,214,138,156,213,168,171],
e:[96],
t3:[58],
s3:[146]
},{//Elekid
l:[[43,1],[98,1],[9,9],[113,17],[129,25],[103,33],[85,41],[87,49]],
m:[223,29,174,92,192,237,173,182,240,203,218,87,216,94,189,104,8,207,214,129,9,197,156,213,168,7,148],
e:[2,27,96,112],
e3:[238],
t3:[85],
s3:[146]
},{//Magby
l:[[52,1],[43,7],[123,13],[7,19],[108,25],[241,31],[53,37],[109,43],[126,49]],
m:[223,29,174,92,237,241,173,182,203,218,231,216,94,189,104,207,214,126,9,197,156,213,168,7],
e:[2,5,103,112],
e3:[238],
t3:[53],
s3:[146]
},{//Miltank
l:[[33,1],[45,4],[111,8],[23,13],[208,19],[117,26],[205,34],[34,43],[215,53]],
m:[223,29,174,205,92,192,249,244,237,241,230,173,59,63,196,182,240,203,218,231,87,89,216,247,189,104,8,207,214,201,111,9,156,213,7,57,70],
e:[69,179,217],
t3:[58,85]
},{//Blissey
l:[[1,1],[45,4],[39,7],[135,10],[3,13],[107,18],[47,23],[121,28],[111,33],[113,40],[38,47]],
m:[223,29,174,205,92,192,249,237,241,173,59,63,196,182,240,203,218,76,87,216,94,247,189,104,207,214,201,126,111,138,156,213,70,148],
t3:[53,58,85]
},{//Raikou
l:[[43,1],[44,1],[84,11],[46,21],[98,31],[209,41],[115,51],[242,61],[87,71]],
m:[29,174,46,92,192,249,244,237,241,173,63,182,240,203,218,231,87,216,91,189,104,207,214,201,129,197,156,15,70,148],
t3:[85]
},{//Entei
l:[[43,1],[44,1],[52,11],[46,21],[83,31],[23,41],[53,51],[207,61],[126,71]],
m:[29,174,46,92,249,244,237,241,173,63,182,240,203,218,76,231,216,91,189,104,207,214,201,126,129,197,156,15,70,148],
t3:[53]
},{//Suicune
l:[[43,1],[44,1],[55,11],[46,21],[240,,,21],[16,31],[61,41,,11],[62,,,41],[54,51],[243,61],[56,71]],
m:[29,174,46,92,249,244,237,241,173,59,63,196,182,240,203,218,231,216,91,189,104,207,214,201,129,197,156,15,57,250,127],
t3:[58]
},{//Larvitar
l:[[43,1],[44,1],[201,8],[103,15],[157,22],[37,29],[184,36],[242,43],[89,50],[63,57]],
m:[29,174,92,237,241,173,63,182,240,203,218,89,216,91,189,104,207,214,201,197,156,213],
e:[23,116,200,228,246]
},{//Pupitar
l:[[43,1],[44,1],[103,1],[201,1],[201,8],[103,15],[157,22],[37,29],[184,38],[242,47],[89,56],[63,65]],
m:[29,174,92,237,241,173,63,182,240,203,218,89,216,91,189,104,207,214,201,197,156,213]
},{//Tyranitar
l:[[43,1],[44,1],[103,1],[201,1],[201,8],[103,15],[157,22],[37,29],[184,38],[242,47],[89,61],[63,75]],
m:[223,29,174,46,92,249,237,241,173,63,182,240,203,218,231,225,89,216,91,189,104,207,214,201,126,197,156,213,7,210,171,15,57,70],
t3:[53,58,85]
},{//Lugia
l:[[177,1],[219,11],[16,22],[105,33],[56,44],[240,55],[129,66],[18,77],[246,88],[248,99]],
m:[29,174,46,92,192,249,244,237,241,173,59,63,196,182,240,202,203,218,231,225,87,89,216,94,247,189,104,207,214,201,129,138,197,156,211,171,19,57,70,250,127],
t3:[58,85]
},{//Ho-Oh
l:[[221,1],[219,11],[16,22],[105,33],[126,44],[241,55],[129,66],[18,77],[246,88],[248,99]],
m:[174,46,92,192,249,244,237,241,173,63,182,240,202,203,218,76,225,87,89,216,94,247,189,104,207,214,201,126,129,138,197,156,211,171,19,70,148],
t3:[53,85]
},{//Celebi
l:[[73,1],[93,1],[105,1],[215,1],[219,10],[246,20],[248,30],[226,40],[195,50]],
m:[174,92,244,237,241,230,173,63,182,240,202,203,218,76,216,94,247,189,104,207,214,201,129,111,138,197,156,171,148]
}];