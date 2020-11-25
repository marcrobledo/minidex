/* [name], type, category (0=PHYSICAL,1=SPECIAL,2=STATUS), pp, power, accuracy */const MOVES=[,[["Pound","Écras&#39;Face","Pfund","Botta","Destructor","はたく","拍击"],0,0,35,40,100],
[["Karate Chop","Poing-Karaté","Karateschlag","Colpokarate","Golpe Karate","からてチョップ","空手劈"],1,0,25,50,100],
[["Double Slap","Torgnoles","Duplexhieb","Doppiasberla","Doble Bofetón","おうふくビンタ","连环巴掌"],0,0,10,15,85],
[["Comet Punch","Poing Comète","Kometenhieb","Cometapugno","Puño Cometa","れんぞくパンチ","连续拳"],0,0,15,18,85],
[["Mega Punch","Ultimapoing","Megahieb","Megapugno","Megapuño","メガトンパンチ","百万吨重拳"],0,0,20,80,85],
[["Pay Day","Jackpot","Zahltag","Giornopaga","Día de Pago","ネコにこばん","聚宝功"],0,0,20,40,100],
[["Fire Punch","Poing de Feu","Feuerschlag","Fuocopugno","Puño Fuego","ほのおのパンチ","火焰拳"],9,0,15,75,100],
[["Ice Punch","Poing-Glace","Eishieb","Gelopugno","Puño Hielo","れいとうパンチ","冰冻拳"],14,0,15,75,100],
[["Thunder Punch","Poing-Éclair","Donnerschlag","Tuonopugno","Puño Trueno","かみなりパンチ","雷电拳"],12,0,15,75,100],
[["Scratch","Griffe","Kratzer","Graffio","Arañazo","ひっかく","抓"],0,0,35,40,100],
[["Vise Grip","Force Poigne","Klammer","Presa","Agarre","はさむ","夹住"],0,0,30,55,100],
[["Guillotine","Guillotine","Guillotine","Ghigliottina","Guillotina","ハサミギロチン","断头钳"],0,0,5,0,0],
[["Razor Wind","Coupe-Vent","Klingensturm","Ventagliente","Viento Cortante","かまいたち","旋风刀"],0,1,10,80,100],
[["Swords Dance","Danse-Lames","Schwerttanz","Danzaspada","Danza Espada","つるぎのまい","剑舞"],0,2,20,0,0],
[["Cut","Coupe","Zerschneider","Taglio","Corte","いあいぎり","居合斩"],0,0,30,50,95],
[["Gust","Tornade","Windstoß","Raffica","Tornado","かぜおこし","起风"],2,1,35,40,100],
[["Wing Attack","Cru-Aile","Flügelschlag","Attacco d&#39;Ala","Ataque Ala","つばさでうつ","翅膀攻击"],2,0,35,60,100],
[["Whirlwind","Cyclone","Wirbelwind","Turbine","Remolino","ふきとばし","吹飞"],0,2,20,0,0],
[["Fly","Vol","Fliegen","Volo","Vuelo","そらをとぶ","飞翔"],2,0,15,90,95],
[["Bind","Étreinte","Klammergriff","Legatutto","Atadura","しめつける","绑紧"],0,0,20,15,85],
[["Slam","Souplesse","Slam","Schianto","Atizar","たたきつける","摔打"],0,0,20,80,75],
[["Vine Whip","Fouet Lianes","Rankenhieb","Frustata","Látigo Cepa","つるのムチ","藤鞭"],11,0,25,45,100],
[["Stomp","Écrasement","Stampfer","Pestone","Pisotón","ふみつけ","踩踏"],0,0,20,65,100],
[["Double Kick","Double Pied","Doppelkick","Doppiocalcio","Doble Patada","にどげり","二连踢"],1,0,30,30,100],
[["Mega Kick","Ultimawashi","Megakick","Megacalcio","Megapatada","メガトンキック","百万吨重踢"],0,0,5,120,75],
[["Jump Kick","Pied Sauté","Sprungkick","Calciosalto","Patada Salto","とびげり","飞踢"],1,0,10,100,95],
[["Rolling Kick","Mawashi Geri","Fegekick","Calciorullo","Patada Giro","まわしげり","回旋踢"],1,0,15,60,85],
[["Sand Attack","Jet de Sable","Sandwirbel","Turbosabbia","Ataque Arena","すなかけ","泼沙"],4,2,15,0,100],
[["Headbutt","Coup d&#39;Boule","Kopfnuss","Bottintesta","Golpe Cabeza","ずつき","头锤"],0,0,15,70,100],
[["Horn Attack","Koud&#39;Korne","Hornattacke","Incornata","Cornada","つのでつく","角撞"],0,0,25,65,100],
[["Fury Attack","Furie","Furienschlag","Furia","Ataque Furia","みだれづき","乱击"],0,0,20,15,85],
[["Horn Drill","Empal&#39;Korne","Hornbohrer","Perforcorno","Perforador","つのドリル","角钻"],0,0,5,0,0],
[["Tackle","Charge","Tackle","Azione","Placaje","たいあたり","撞击"],0,0,35,50,100],
[["Body Slam","Plaquage","Bodyslam","Corposcontro","Golpe Cuerpo","のしかかり","泰山压顶"],0,0,15,85,100],
[["Wrap","Ligotage","Wickel","Avvolgibotta","Constricción","まきつく","紧束"],0,0,20,15,90],
[["Take Down","Bélier","Bodycheck","Riduttore","Derribo","とっしん","猛撞"],0,0,20,90,85],
[["Thrash","Mania","Fuchtler","Colpo","Golpe","あばれる","大闹一番"],0,0,10,120,100],
[["Double-Edge","Damoclès","Risikotackle","Sdoppiatore","Doble Filo","すてみタックル","舍身冲撞"],0,0,15,120,100],
[["Tail Whip","Mimi-Queue","Rutenschlag","Colpocoda","Látigo","しっぽをふる","摇尾巴"],0,2,30,0,100],
[["Poison Sting","Dard-Venin","Giftstachel","Velenospina","Picotazo Ven","どくばり","毒针"],3,0,35,15,100],
[["Twineedle","Double-Dard","Duonadel","Doppio Ago","Doble Ataque","ダブルニードル","双针"],6,0,20,25,100],
[["Pin Missile","Dard-Nuée","Nadelrakete","Missilspillo","Pin Misil","ミサイルばり","飞弹针"],6,0,20,25,95],
[["Leer","Groz&#39;Yeux","Silberblick","Fulmisguardo","Malicioso","にらみつける","瞪眼"],0,2,30,0,100],
[["Bite","Morsure","Biss","Morso","Mordisco","かみつく","咬住"],16,0,25,60,100],
[["Growl","Rugissement","Heuler","Ruggito","Gruñido","なきごえ","叫声"],0,2,40,0,100],
[["Roar","Hurlement","Brüller","Boato","Rugido","ほえる","吼叫"],0,2,20,0,0],
[["Sing","Berceuse","Gesang","Canto","Canto","うたう","唱歌"],0,2,15,0,55],
[["Supersonic","Ultrason","Superschall","Supersuono","Supersónico","ちょうおんぱ","超音波"],0,2,20,0,55],
[["Sonic Boom","Sonicboom","Ultraschall","Sonicboom","Bomba Sónica","ソニックブーム","音爆"],0,1,20,0,90],
[["Disable","Entrave","Aussetzer","Inibitore","Anulación","かなしばり","定身法"],0,2,20,0,100],
[["Acid","Acide","Säure","Acido","Ácido","ようかいえき","溶解液"],3,1,30,40,100],
[["Ember","Flammèche","Glut","Braciere","Ascuas","ひのこ","火花"],9,1,25,40,100],
[["Flamethrower","Lance-Flammes","Flammenwurf","Lanciafiamme","Lanzallamas","かえんほうしゃ","喷射火焰"],9,1,15,90,100],
[["Mist","Brume","Weißnebel","Nebbia","Neblina","しろいきり","白雾"],14,2,30,0,0],
[["Water Gun","Pistolet à O","Aquaknarre","Pistolacqua","Pistola Agua","みずでっぽう","水枪"],10,1,25,40,100],
[["Hydro Pump","Hydrocanon","Hydropumpe","Idropompa","Hidrobomba","ハイドロポンプ","水炮"],10,1,5,110,80],
[["Surf","Surf","Surfer","Surf","Surf","なみのり","冲浪"],10,1,15,90,100],
[["Ice Beam","Laser Glace","Eisstrahl","Geloraggio","Rayo Hielo","れいとうビーム","冰冻光束"],14,1,10,90,100],
[["Blizzard","Blizzard","Blizzard","Bora","Ventisca","ふぶき","暴风雪"],14,1,5,110,70],
[["Psybeam","Rafale Psy","Psystrahl","Psicoraggio","Psicorrayo","サイケこうせん","幻象光线"],13,1,20,65,100],
[["Bubble Beam","Bulles d&#39;O","Blubbstrahl","Bollaraggio","Rayo Burbuja","バブルこうせん","泡沫光线"],10,1,20,65,100],
[["Aurora Beam","Onde Boréale","Aurorastrahl","Raggiaurora","Rayo Aurora","オーロラビーム","极光束"],14,1,20,65,100],
[["Hyper Beam","Ultralaser","Hyperstrahl","Iper Raggio","Hiperrayo","はかいこうせん","破坏光线"],0,1,5,150,90],
[["Peck","Picpic","Schnabel","Beccata","Picotazo","つつく","啄"],2,0,35,35,100],
[["Drill Peck","Bec Vrille","Bohrschnabel","Perforbecco","Pico Taladro","ドリルくちばし","啄钻"],2,0,20,80,100],
[["Submission","Sacrifice","Überroller","Sottomissione","Sumisión","じごくぐるま","地狱翻滚"],1,0,20,80,80],
[["Low Kick","Balayage","Fußkick","Colpo Basso","Patada Baja","けたぐり","踢倒"],1,0,20,0,100],
[["Counter","Riposte","Konter","Contrattacco","Contraataque","カウンター","双倍奉还"],1,0,20,0,100],
[["Seismic Toss","Frappe Atlas","Geowurf","Movim. Sismico","Mov. Sísmico","ちきゅうなげ","地球上投"],1,0,20,0,100],
[["Strength","Force","Stärke","Forza","Fuerza","かいりき","怪力"],0,0,15,80,100],
[["Absorb","Vol-Vie","Absorber","Assorbimento","Absorber","すいとる","吸取"],11,1,25,20,100],
[["Mega Drain","Méga-Sangsue","Megasauger","Megassorbimento","Megaagotar","メガドレイン","超级吸取"],11,1,12,40,100],
[["Leech Seed","Vampigraine","Egelsamen","Parassiseme","Drenadoras","やどりぎのタネ","寄生种子"],11,2,10,0,90],
[["Growth","Croissance","Wachstum","Crescita","Desarrollo","せいちょう","生长"],0,2,20,0,0],
[["Razor Leaf","Tranch&#39;Herbe","Rasierblatt","Foglielama","Hoja Afilada","はっぱカッター","飞叶快刀"],11,0,25,55,95],
[["Solar Beam","Lance-Soleil","Solarstrahl","Solarraggio","Rayo Solar","ソーラービーム","日光束"],11,1,10,120,100],
[["Poison Powder","Poudre Toxik","Giftpuder","Velenpolvere","Polvo Veneno","どくのこな","毒粉"],3,2,35,0,75],
[["Stun Spore","Para-Spore","Stachelspore","Paralizzante","Paralizador","しびれごな","麻痹粉"],11,2,30,0,75],
[["Sleep Powder","Poudre Dodo","Schlafpuder","Sonnifero","Somnífero","ねむりごな","催眠粉"],11,2,15,0,75],
[["Petal Dance","Danse-Fleur","Blättertanz","Petalodanza","Danza Pétalo","はなびらのまい","花瓣舞"],11,1,10,120,100],
[["String Shot","Sécrétion","Fadenschuss","Millebave","Disp. Demora","いとをはく","吐丝"],6,2,40,0,95],
[["Dragon Rage","Draco-Rage","Drachenwut","Ira di Drago","Furia Dragón","りゅうのいかり","龙之怒"],15,1,10,0,100],
[["Fire Spin","Danse Flamme","Feuerwirbel","Turbofuoco","Giro Fuego","ほのおのうず","火焰旋涡"],9,1,15,35,85],
[["Thunder Shock","Éclair","Donnerschock","Tuonoshock","Impactrueno","でんきショック","电击"],12,1,30,40,100],
[["Thunderbolt","Tonnerre","Donnerblitz","Fulmine","Rayo","１０まんボルト","十万伏特"],12,1,15,90,100],
[["Thunder Wave","Cage-Éclair","Donnerwelle","Tuononda","Onda Trueno","でんじは","电磁波"],12,2,20,0,100],
[["Thunder","Fatal-Foudre","Donner","Tuono","Trueno","かみなり","打雷"],12,1,10,110,70],
[["Rock Throw","Jet-Pierres","Steinwurf","Sassata","Lanzarrocas","いわおとし","落石"],5,0,15,50,90],
[["Earthquake","Séisme","Erdbeben","Terremoto","Terremoto","じしん","地震"],4,0,10,100,100],
[["Fissure","Abîme","Geofissur","Abisso","Fisura","じわれ","地裂"],4,0,5,0,0],
[["Dig","Tunnel","Schaufler","Fossa","Excavar","あなをほる","挖洞"],4,0,10,80,100],
[["Toxic","Toxik","Toxin","Tossina","Tóxico","どくどく","剧毒"],3,2,10,0,90],
[["Confusion","Choc Mental","Konfusion","Confusione","Confusión","ねんりき","念力"],13,1,25,50,100],
[["Psychic","Psyko","Psychokinese","Psichico","Psíquico","サイコキネシス","精神强念"],13,1,10,90,100],
[["Hypnosis","Hypnose","Hypnose","Ipnosi","Hipnosis","さいみんじゅつ","催眠术"],13,2,20,0,60],
[["Meditate","Yoga","Meditation","Meditazione","Meditación","ヨガのポーズ","瑜伽姿势"],13,2,40,0,0],
[["Agility","Hâte","Agilität","Agilità","Agilidad","こうそくいどう","高速移动"],13,2,30,0,0],
[["Quick Attack","Vive-attaque","Ruckzuckhieb","Attacco Rapido","Ataque Rápido","でんこうせっか","电光一闪"],0,0,30,40,100],
[["Rage","Frénésie","Raserei","Ira","Furia","いかり","愤怒"],0,0,20,20,100],
[["Teleport","Téléport","Teleport","Teletrasporto","Teletransporte","テレポート","瞬间移动"],13,2,20,0,0],
[["Night Shade","Ombre Nocturne","Nachtnebel","Ombra Notturna","Tinieblas","ナイトヘッド","黑夜魔影"],7,1,15,0,100],
[["Mimic","Copie","Mimikry","Mimica","Mimético","ものまね","模仿"],0,2,10,0,0],
[["Screech","Grincement","Kreideschrei","Stridio","Chirrido","いやなおと","刺耳声"],0,2,40,0,85],
[["Double Team","Reflet","Doppelteam","Doppioteam","Doble Equipo","かげぶんしん","影子分身"],0,2,15,0,0],
[["Recover","Soin","Genesung","Ripresa","Recuperación","じこさいせい","自我再生"],0,2,10,0,0],
[["Harden","Armure","Härtner","Rafforzatore","Fortaleza","かたくなる","变硬"],0,2,30,0,0],
[["Minimize","Lilliput","Komprimator","Minimizzato","Reducción","ちいさくなる","变小"],0,2,10,0,0],
[["Smokescreen","Brouillard","Rauchwolke","Muro di Fumo","Pantalla Humo","えんまく","烟幕"],0,2,20,0,100],
[["Confuse Ray","Onde Folie","Konfustrahl","Stordiraggio","Rayo Confuso","あやしいひかり","奇异之光"],7,2,10,0,100],
[["Withdraw","Repli","Panzerschutz","Ritirata","Refugio","からにこもる","缩入壳中"],10,2,40,0,0],
[["Defense Curl","Boul&#39;Armure","Einigler","Ricciolscudo","Rizo Defensa","まるくなる","变圆"],0,2,40,0,0],
[["Barrier","Bouclier","Barriere","Barriera","Barrera","バリアー","屏障"],13,2,20,0,0],
[["Light Screen","Mur Lumière","Lichtschild","Schermoluce","Pantalla Luz","ひかりのかべ","光墙"],13,2,30,0,0],
[["Haze","Buée Noire","Dunkelnebel","Nube","Niebla","くろいきり","黑雾"],14,2,30,0,0],
[["Reflect","Protection","Reflektor","Riflesso","Reflejo","リフレクター","反射壁"],13,2,20,0,0],
[["Focus Energy","Puissance","Energiefokus","Focalenergia","Foco Energía","きあいだめ","聚气"],0,2,30,0,0],
[["Bide","Patience","Geduld","Pazienza","Venganza","がまん","忍耐"],0,0,10,0,0],
[["Metronome","Métronome","Metronom","Metronomo","Metrónomo","ゆびをふる","挥指"],0,2,10,0,0],
[["Mirror Move","Mimique","Spiegeltrick","Speculmossa","Mov. Espejo","オウムがえし","鹦鹉学舌"],2,2,20,0,0],
[["Self-Destruct","Destruction","Finale","Autodistruz.","Autodestruc","じばく","自爆"],0,0,5,200,100],
[["Egg Bomb","Bomb&#39;Œuf","Eierbombe","Uovobomba","Bomba Huevo","タマゴばくだん","炸蛋"],0,0,10,100,75],
[["Lick","Léchouille","Schlecker","Leccata","Lengüetazo","したでなめる","舌舔"],7,0,30,30,100],
[["Smog","Purédpois","Smog","Smog","Polución","スモッグ","浊雾"],3,1,20,30,70],
[["Sludge","Détritus","Schlammbad","Fango","Residuos","ヘドロこうげき","污泥攻击"],3,1,20,65,100],
[["Bone Club","Massd&#39;Os","Knochenkeule","Ossoclava","Hueso Palo","ホネこんぼう","骨棒"],4,0,20,65,85],
[["Fire Blast","Déflagration","Feuersturm","Fuocobomba","Llamarada","だいもんじ","大字爆炎"],9,1,5,110,85],
[["Waterfall","Cascade","Kaskade","Cascata","Cascada","たきのぼり","攀瀑"],10,0,15,80,100],
[["Clamp","Claquoir","Schnapper","Tenaglia","Tenaza","からではさむ","贝壳夹击"],10,0,15,35,85],
[["Swift","Météores","Sternschauer","Comete","Rapidez","スピードスター","高速星星"],0,1,20,60,0],
[["Skull Bash","Coud&#39;Krâne","Schädelwumme","Capocciata","Cabezazo","ロケットずつき","火箭头锤"],0,0,10,130,100],
[["Spike Cannon","Picanon","Dornkanone","Sparalance","Clavo Cañón","とげキャノン","尖刺加农炮"],0,0,15,20,100],
[["Constrict","Constriction","Umklammerung","Limitazione","Restricción","からみつく","缠绕"],0,0,35,10,100],
[["Amnesia","Amnésie","Amnesie","Amnesia","Amnesia","ドわすれ","瞬间失忆"],13,2,20,0,0],
[["Kinesis","Télékinésie","Psykraft","Cinèsi","Kinético","スプーンまげ","折弯汤匙"],13,2,15,0,80],
[["Soft-Boiled","E-Coque","Weichei","Covauova","Amortiguador","タマゴうみ","生蛋"],0,2,10,0,0],
[["High Jump Kick","Pied Voltige","Turmkick","Calcinvolo","Pat. Salto Alta","とびひざげり","飞膝踢"],1,0,10,130,90],
[["Glare","Regard Médusant","Giftblick","Sguardo Feroce","Deslumbrar","へびにらみ","大蛇瞪眼"],0,2,30,0,100],
[["Dream Eater","Dévorêve","Traumfresser","Mangiasogni","Come Sueños","ゆめくい","食梦"],13,1,15,100,100],
[["Poison Gas","Gaz Toxik","Giftwolke","Velenogas","Gas Venenoso","どくガス","毒瓦斯"],3,2,40,0,90],
[["Barrage","Pilonnage","Stakkato","Attacco Pioggia","Presa","たまなげ","投球"],0,0,20,15,85],
[["Leech Life","Vampirisme","Blutsauger","Sanguisuga","Chupavidas","きゅうけつ","吸血"],6,0,15,20,100],
[["Lovely Kiss","Grobisou","Todeskuss","Demonbacio","Beso Amoroso","あくまのキッス","恶魔之吻"],0,2,10,0,75],
[["Sky Attack","Piqué","Himmelsfeger","Aeroattacco","Ataque Aéreo","ゴッドバード","神鸟猛击"],2,0,5,120,90],
[["Transform","Morphing","Wandler","Trasformazione","Transformación","へんしん","变身"],0,2,10,0,0],
[["Bubble","Écume","Blubber","Bolla","Burbuja","あわ","泡沫"],10,1,30,40,100],
[["Dizzy Punch","Uppercut","Irrschlag","Stordipugno","Puño Mareo","ピヨピヨパンチ","迷昏拳"],0,0,10,70,100],
[["Spore","Spore","Pilzspore","Spora","Espora","キノコのほうし","蘑菇孢子"],11,2,15,0,100],
[["Flash","Flash","Blitz","Flash","Destello","フラッシュ","闪光"],0,2,20,0,100],
[["Psywave","Vague Psy","Psywelle","Psiconda","Psicoonda","サイコウェーブ","精神波"],13,1,15,0,100],
[["Splash","Trempette","Platscher","Splash","Salpicadura","はねる","跃起"],0,2,40,0,0],
[["Acid Armor","Acidarmure","Säurepanzer","Scudo Acido","Armadura Ácida","とける","溶化"],3,2,20,0,0],
[["Crabhammer","Pince-Masse","Krabbhammer","Martellata","Martillazo","クラブハンマー","蟹钳锤"],10,0,10,100,90],
[["Explosion","Explosion","Explosion","Esplosione","Explosión","だいばくはつ","大爆炸"],0,0,5,250,100],
[["Fury Swipes","Combo-Griffe","Kratzfurie","Sfuriate","Golpes Furia","みだれひっかき","乱抓"],0,0,15,18,80],
[["Bonemerang","Osmerang","Knochmerang","Ossomerang","Huesomerang","ホネブーメラン","骨头回力镖"],4,0,10,50,90],
[["Rest","Repos","Erholung","Riposo","Descanso","ねむる","睡觉"],13,2,10,0,0],
[["Rock Slide","Éboulement","Steinhagel","Frana","Avalancha","いわなだれ","岩崩"],5,0,10,75,90],
[["Hyper Fang","Croc de Mort","Hyperzahn","Iperzanna","Hipercolmillo","ひっさつまえば","必杀门牙"],0,0,15,80,90],
[["Sharpen","Affûtage","Schärfer","Affilatore","Afilar","かくばる","棱角化"],0,2,30,0,0],
[["Conversion",,"Umwandlung","Conversione","Conversión","テクスチャー","纹理"],0,2,30,0,0],
[["Tri Attack","Triplattaque","Triplette","Tripletta","Triataque","トライアタック","三重攻击"],0,1,10,80,100],
[["Super Fang","Croc Fatal","Superzahn","Superzanna","Superdiente","いかりのまえば","愤怒门牙"],0,0,10,0,90],
[["Slash","Tranche","Schlitzer","Lacerazione","Cuchillada","きりさく","劈开"],0,0,20,70,100],
[["Substitute","Clonage","Delegator","Sostituto","Sustituto","みがわり","替身"],0,2,10,0,0],
[["Struggle","Lutte","Verzweifler","Scontro","Combate","わるあがき","挣扎"],0,0,1,50,0],
[["Sketch","Gribouille","Nachahmer","Schizzo","Esquema","スケッチ","写生"],0,2,1,0,0],
[["Triple Kick","Triple Pied","Dreifachkick","Triplocalcio","Triple Patada","トリプルキック","三连踢"],1,0,10,10,90],
[["Thief","Larcin","Raub","Furto","Ladrón","どろぼう","小偷"],16,0,25,60,100],
[["Spider Web","Toile","Spinnennetz","Ragnatela","Telaraña","クモのす","蛛网"],6,2,10,0,0],
[["Mind Reader","Lire-Esprit","Willensleser","Leggimente","Telépata","こころのめ","心之眼"],0,2,5,0,0],
[["Nightmare","Cauchemar","Nachtmahr","Incubo","Pesadilla","あくむ","恶梦"],7,2,15,0,100],
[["Flame Wheel","Roue de Feu","Flammenrad","Ruotafuoco","Rueda Fuego","かえんぐるま","火焰轮"],9,0,25,60,100],
[["Snore","Ronflement","Schnarcher","Russare","Ronquido","いびき","打鼾"],0,1,15,50,100],
[["Curse","Malédiction","Fluch","Maledizione","Maldición","のろい","诅咒"],7,2,10,0,0],
[["Flail","Fléau","Dreschflegel","Flagello","Azote","じたばた","抓狂"],0,0,15,0,100],
[["Conversion 2","Conversion2","Umwandlung2","Conversione2","Conversión2","テクスチャー２","纹理２"],0,2,30,0,0],
[["Aeroblast","Aéroblast","Luftstoß","Aerocolpo","Aerochorro","エアロブラスト","气旋攻击"],2,1,5,100,95],
[["Cotton Spore","Spore Coton","Baumwollsaat","Cottonspora","Esporagodón","わたほうし","棉孢子"],11,2,40,0,100],
[["Reversal","Contre","Gegenschlag","Contropiede","Inversión","きしかいせい","起死回生"],1,0,15,0,100],
[["Spite","Dépit","Groll","Dispetto","Rencor","うらみ","怨恨"],7,2,10,0,100],
[["Powder Snow","Poudreuse","Pulverschnee","Polneve","Nieve Polvo","こなゆき","细雪"],14,1,25,40,100],
[["Protect","Abri","Schutzschild","Protezione","Protección","まもる","守住"],0,2,10,0,0],
[["Mach Punch","Mach Punch","Tempohieb","Pugnorapido","Ultrapuño","マッハパンチ","音速拳"],1,0,30,40,100],
[["Scary Face","Grimace","Grimasse","Visotruce","Cara Susto","こわいかお","鬼面"],0,2,10,0,100],
[["Feint Attack","Feinte","Finte","Finta","Finta","だましうち","出奇一击"],16,0,20,60,0],
[["Sweet Kiss","Doux Baiser","Bitterkuss","Dolcebacio","Beso Dulce","てんしのキッス","天使之吻"],17,2,10,0,75],
[["Belly Drum","Cognobidon","Bauchtrommel","Panciamburo","Tambor","はらだいこ","腹鼓"],0,2,10,0,0],
[["Sludge Bomb","Bomb-Beurk","Matschbombe","Fangobomba","Bomba Lodo","ヘドロばくだん","污泥炸弹"],3,1,10,90,100],
[["Mud-Slap","Coud&#39;Boue","Lehmschelle","Fangosberla","Bofetón Lodo","どろかけ","掷泥"],4,1,10,20,100],
[["Octazooka","Octazooka","Octazooka","Octazooka","Pulpocañón","オクタンほう","章鱼桶炮"],10,1,10,65,85],
[["Spikes","Picots","Stachler","Punte","Púas","まきびし","撒菱"],4,2,20,0,0],
[["Zap Cannon","Élecanon","Blitzkanone","Falcecannone","Electrocañón","でんじほう","电磁炮"],12,1,5,120,50],
[["Foresight","Clairvoyance","Gesichte","Preveggenza","Profecía","みやぶる","识破"],0,2,40,0,0],
[["Destiny Bond","Prélèvem. Destin","Abgangsbund","Destinobbligato","Mismo Destino","みちづれ","同命"],7,2,5,0,0],
[["Perish Song","Requiem","Abgesang","Ultimocanto","Canto Mortal","ほろびのうた","灭亡之歌"],0,2,5,0,0],
[["Icy Wind","Vent Glace","Eissturm","Ventogelato","Viento Hielo","こごえるかぜ","冰冻之风"],14,1,15,55,95],
[["Detect","Détection","Scanner","Individua","Detección","みきり","看穿"],1,2,5,0,0],
[["Bone Rush","Charge-Os","Knochenhatz","Ossoraffica","Ataque Óseo","ボーンラッシュ","骨棒乱打"],4,0,10,25,90],
[["Lock-On","Verrouillage","Zielschuss","Localizza","Fijar Blanco","ロックオン","锁定"],0,2,5,0,0],
[["Outrage","Colère","Wutanfall","Oltraggio","Enfado","げきりん","逆鳞"],15,0,10,120,100],
[["Sandstorm","Tempête de Sable","Sandsturm","Terrempesta","Tormenta Arena","すなあらし","沙暴"],5,2,10,0,0],
[["Giga Drain","Giga-Sangsue","Gigasauger","Gigassorbimento","Gigadrenado","ギガドレイン","终极吸取"],11,1,10,75,100],
[["Endure","Ténacité","Ausdauer","Resistenza","Aguante","こらえる","挺住"],0,2,10,0,0],
[["Charm","Charme","Charme","Fascino","Encanto","あまえる","撒娇"],17,2,20,0,100],
[["Rollout","Roulade","Walzer","Rotolamento","Desenrollar","ころがる","滚动"],5,0,20,30,90],
[["False Swipe","Faux-Chage","Trugschlag","Falsofinale","Falsotortazo","みねうち","点到为止"],0,0,40,40,100],
[["Swagger","Vantardise","Angeberei","Bullo","Contoneo","いばる","虚张声势"],0,2,15,0,90],
[["Milk Drink","Lait à Boire","Milchgetränk","Buonlatte","Batido","ミルクのみ","喝牛奶"],0,2,10,0,0],
[["Spark","Étincelle","Funkensprung","Scintilla","Chispa","スパーク","电光"],12,0,20,65,100],
[["Fury Cutter","Taillade","Zornklinge","Tagliofuria","Cortefuria","れんぞくぎり","连斩"],6,0,20,40,95],
[["Steel Wing","Aile d&#39;Acier","Stahlflügel","Alacciaio","Ala De Acero","はがねのつばさ","钢翼"],8,0,25,70,90],
[["Mean Look","Regard Noir","Horrorblick","Malosguardo","Mal De Ojo","くろいまなざし","黑色目光"],0,2,5,0,0],
[["Attract","Attraction","Anziehung","Attrazione","Atracción","メロメロ","迷人"],0,2,15,0,100],
[["Sleep Talk","Blabla Dodo","Schlafrede","Sonnolalia","Sonámbulo","ねごと","梦话"],0,2,10,0,0],
[["Heal Bell","Glas de Soin","Vitalglocke","Rintoccasana","Campana Cura","いやしのすず","治愈铃声"],0,2,5,0,0],
[["Return","Retour","Rückkehr","Ritorno","Retribución","おんがえし","报恩"],0,0,20,0,100],
[["Present","Cadeau","Geschenk","Regalino","Presente","プレゼント","礼物"],0,0,15,0,90],
[["Frustration","Frustration","Frustration","Frustrazione","Frustración","やつあたり","迁怒"],0,0,20,0,100],
[["Safeguard","Rune Protect","Bodyguard","Salvaguardia","Velo Sagrado","しんぴのまもり","神秘守护"],0,2,25,0,0],
[["Pain Split","Balance","Leidteiler","Malcomune","Divide Dolor","いたみわけ","分担痛楚"],0,2,20,0,0],
[["Sacred Fire","Feu Sacré","Läuterfeuer","Magifuoco","Fuego Sagrado","せいなるほのお","神圣之火"],9,0,5,100,95],
[["Magnitude","Ampleur","Intensität","Magnitudo","Magnitud","マグニチュード","震级"],4,0,30,0,100],
[["Dynamic Punch","Dynamopoing","Wuchtschlag","Dinamipugno","Puño Dinámico","ばくれつパンチ","爆裂拳"],1,0,5,100,50],
[["Megahorn","Mégacorne","Vielender","Megacorno","Megacuerno","メガホーン","超级角击"],6,0,10,120,85],
[["Dragon Breath","Dracosouffle","Feuerodem","Dragospiro","Dragoaliento","りゅうのいぶき","龙息"],15,1,20,60,100],
[["Baton Pass","Relais","Stafette","Staffetta","Relevo","バトンタッチ","接棒"],0,2,40,0,0],
[["Encore","Encore","Zugabe","Ripeti","Otra Vez","アンコール","再来一次"],0,2,5,0,100],
[["Pursuit","Poursuite","Verfolgung","Inseguimento","Persecución","おいうち","追打"],16,0,20,40,100],
[["Rapid Spin","Tour Rapide","Turbodreher","Rapigiro","Giro Rápido","こうそくスピン","高速旋转"],0,0,40,20,100],
[["Sweet Scent","Doux Parfum","Lockduft","Profumino","Dulce Aroma","あまいかおり","甜甜香气"],0,2,20,0,100],
[["Iron Tail","Queue de Fer","Eisenschweif","Codacciaio","Cola Férrea","アイアンテール","铁尾"],8,0,15,100,75],
[["Metal Claw","Griffe Acier","Metallklaue","Ferrartigli","Garra Metal","メタルクロー","金属爪"],8,0,35,50,95],
[["Vital Throw","Corps Perdu","Überwurf","Vitaltiro","Tiro Vital","あてみなげ","借力摔"],1,0,10,70,0],
[["Morning Sun","Aurore","Morgengrauen","Mattindoro","Sol Matinal","あさのひざし","晨光"],0,2,5,0,0],
[["Synthesis","Synthèse","Synthese","Sintesi","Síntesis","こうごうせい","光合作用"],11,2,5,0,0],
[["Moonlight","Rayon Lune","Mondschein","Lucelunare","Luz Lunar","つきのひかり","月光"],17,2,5,0,0],
[["Hidden Power","Puissance Cachée","Kraftreserve","Introforza","Poder Oculto","めざめるパワー","觉醒力量"],0,1,15,60,100],
[["Cross Chop","Coup-Croix","Kreuzhieb","Incrocolpo","Tajo Cruzado","クロスチョップ","十字劈"],1,0,5,100,80],
[["Twister","Ouragan","Windhose","Tornado","Ciclón","たつまき","龙卷风"],15,1,20,40,100],
[["Rain Dance","Danse Pluie","Regentanz","Pioggiadanza","Danza Lluvia","あまごい","求雨"],10,2,5,0,0],
[["Sunny Day","Zénith","Sonnentag","Giornodisole","Día Soleado","にほんばれ","大晴天"],9,2,5,0,0],
[["Crunch","Mâchouille","Knirscher","Sgranocchio","Triturar","かみくだく","咬碎"],16,0,15,80,100],
[["Mirror Coat","Voile Miroir","Spiegelcape","Specchiovelo","Manto Espejo","ミラーコート","镜面反射"],13,1,20,0,100],
[["Psych Up","Boost","Psycho-Plus","Psicamisù","Más Psique","じこあんじ","自我暗示"],0,2,10,0,0],
[["Extreme Speed","Vitesse Extrême","Turbotempo","Extrarapido","Veloc. Extrema","しんそく","神速"],0,0,5,80,100],
[["Ancient Power","Pouvoir Antique","Antik-Kraft","Forzantica","Poder Pasado","げんしのちから","原始之力"],5,1,5,60,100],
[["Shadow Ball","Ball&#39;Ombre","Spukball","Palla Ombra","Bola Sombra","シャドーボール","暗影球"],7,1,15,80,100],
[["Future Sight","Prescience","Seher","Divinazione","Premonición","みらいよち","预知未来"],13,1,10,120,100],
[["Rock Smash","Éclate-Roc","Zertrümmerer","Spaccaroccia","Golpe Roca","いわくだき","碎岩"],1,0,15,40,100],
[["Whirlpool","Siphon","Whirlpool","Mulinello","Torbellino","うずしお","潮旋"],10,1,15,35,85],
[["Beat Up","Baston","Prügler","Picchiaduro","Paliza","ふくろだたき","围攻"],16,0,10,0,100],
[["Fake Out","Bluff","Mogelhieb","Bruciapelo","Sorpresa","ねこだまし","击掌奇袭"],0,0,10,40,100],
[["Uproar","Brouhaha","Aufruhr","Baraonda","Alboroto","さわぐ","吵闹"],0,1,10,90,100],
[["Stockpile","Stockage","Horter","Accumulo","Reserva","たくわえる","蓄力"],0,2,20,0,0],
[["Spit Up","Relâche","Entfessler","Sfoghenergia","Escupir","はきだす","喷出"],0,1,10,0,100],
[["Swallow","Avale","Verzehrer","Intoenergia","Tragar","のみこむ","吞下"],0,2,10,0,0],
[["Heat Wave","Canicule","Hitzewelle","Ondacalda","Onda Ígnea","ねっぷう","热风"],9,1,10,95,90],
[["Hail","Grêle","Hagelsturm","Grandine","Granizo","あられ","冰雹"],14,2,10,0,0],
[["Torment","Tourmente","Folterknecht","Attaccalite","Tormento","いちゃもん","无理取闹"],16,2,15,0,100],
[["Flatter","Flatterie","Schmeichler","Adulazione","Camelo","おだてる","吹捧"],16,2,15,0,100],
[["Will-O-Wisp","Feu Follet","Irrlicht","Fuocofatuo","Fuego Fatuo","おにび","鬼火"],9,2,15,0,85],
[["Memento","Souvenir","Memento-Mori","Memento","Legado","おきみやげ","临别礼物"],16,2,10,0,100],
[["Facade","Façade","Fassade","Facciata","Imagen","からげんき","硬撑"],0,0,20,70,100],
[["Focus Punch","Mitra-Poing","Power-Punch","Centripugno","Puño Certero","きあいパンチ","真气拳"],1,0,20,150,100],
[["Smelling Salts","Stimulant","Riechsalz","Maniereforti","Estímulo","きつけ","清醒"],0,0,10,70,100],
[["Follow Me","Par Ici","Spotlight","Sonoqui","Señuelo","このゆびとまれ","看我嘛"],0,2,20,0,0],
[["Nature Power","Force-Nature","Natur-Kraft","Naturforza","Adaptación","しぜんのちから","自然之力"],0,2,20,0,0],
[["Charge","Chargeur","Ladevorgang","Sottocarica","Carga","じゅうでん","充电"],12,2,20,0,0],
[["Taunt","Provoc","Verhöhner","Provocazione","Mofa","ちょうはつ","挑衅"],16,2,20,0,100],
[["Helping Hand","Coup d&#39;Main","Rechte Hand","Altruismo","Refuerzo","てだすけ","帮助"],0,2,20,0,0],
[["Trick","Tourmagik","Trickbetrug","Raggiro","Truco","トリック","戏法"],13,2,10,0,100],
[["Role Play","Imitation","Rollentausch","Giocodiruolo","Imitación","なりきり","扮演"],13,2,10,0,0],
[["Wish","Vœu","Wunschtraum","Desiderio","Deseo","ねがいごと","祈愿"],0,2,10,0,0],
[["Assist","Assistance","Zuschuss","Assistente","Ayuda","ねこのて","借助"],0,2,20,0,0],
[["Ingrain","Racines","Verwurzler","Radicamento","Arraigo","ねをはる","扎根"],11,2,20,0,0],
[["Superpower","Surpuissance","Kraftkoloss","Troppoforte","Fuerza Bruta","ばかぢから","蛮力"],1,0,5,120,100],
[["Magic Coat","Reflet Magik","Magiemantel","Magivelo","Capa Mágica","マジックコート","魔法反射"],13,2,15,0,0],
[["Recycle","Recyclage","Aufbereitung","Riciclo","Reciclaje","リサイクル","回收利用"],0,2,10,0,0],
[["Revenge","Vendetta","Vergeltung","Vendetta","Desquite","リベンジ","报复"],1,0,10,60,100],
[["Brick Break","Casse-Brique","Durchbruch","Breccia","Demolición","かわらわり","劈瓦"],1,0,15,75,100],
[["Yawn","Bâillement","Gähner","Sbadiglio","Bostezo","あくび","哈欠"],0,2,10,0,0],
[["Knock Off","Sabotage","Abschlag","Privazione","Desarme","はたきおとす","拍落"],16,0,20,65,100],
[["Endeavor","Effort","Notsituation","Rimonta","Esfuerzo","がむしゃら","蛮干"],0,0,5,0,100],
[["Eruption","Éruption","Eruption","Eruzione","Estallido","ふんか","喷火"],9,1,5,150,100],
[["Skill Swap","Échange","Wertewechsel","Baratto","Intercambio","スキルスワップ","特性互换"],13,2,10,0,0],
[["Imprison","Possessif","Begrenzer","Esclusiva","Cerca","ふういん","封印"],13,2,10,0,0],
[["Refresh","Régénération","Heilung","Rinfrescata","Alivio","リフレッシュ","焕然一新"],0,2,20,0,0],
[["Grudge","Rancune","Nachspiel","Rancore","Rabia","おんねん","怨念"],7,2,5,0,0],
[["Snatch","Saisie","Übernahme","Scippo","Robo","よこどり","抢夺"],16,2,10,0,0],
[["Secret Power","Force Cachée","Geheimpower","Forzasegreta","Daño Secreto","ひみつのちから","秘密之力"],0,0,20,70,100],
[["Dive","Plongée","Taucher","Sub","Buceo","ダイビング","潜水"],10,0,10,80,100],
[["Arm Thrust","Cogne","Armstoß","Sberletese","Empujón","つっぱり","猛推"],1,0,20,15,100],
[["Camouflage","Camouflage","Tarnung","Camuffamento","Camuflaje","ほごしょく","保护色"],0,2,20,0,0],
[["Tail Glow","Lumiqueue","Schweifglanz","Codadiluce","Ráfaga","ほたるび","萤火"],6,2,20,0,0],
[["Luster Purge","Lumi-Éclat","Scheinwerfer","Abbagliante","Resplandor","ラスターパージ","洁净光芒"],13,1,5,70,100],
[["Mist Ball","Ball&#39;Brume","Nebelball","Foschisfera","Bola Neblina","ミストボール","薄霧球"],13,1,5,70,100],
[["Feather Dance","Danse-Plume","Daunenreigen","Danzadipiume","Danza Pluma","フェザーダンス","羽毛舞"],2,2,15,0,100],
[["Teeter Dance","Danse-Folle","Taumeltanz","Strampadanza","Danza Caos","フラフラダンス","摇晃舞"],0,2,20,0,100],
[["Blaze Kick","Pied Brûleur","Feuerfeger","Calciardente","Patada Ígnea","ブレイズキック","火焰踢"],9,0,10,85,90],
[["Mud Sport","Lance-Boue","Lehmsuhler","Fangata","Chapoteo Lodo","どろあそび","玩泥巴"],4,2,15,0,0],
[["Ice Ball","Ball&#39;Glace","Frostbeule","Palla Gelo","Bola Hielo","アイスボール","冰球"],14,0,20,30,90],
[["Needle Arm","Poing Dard","Nietenranke","Pugnospine","Brazo Pincho","ニードルアーム","尖刺臂"],11,0,15,60,100],
[["Slack Off","Paresse","Tagedieb","Pigro","Relajo","なまける","偷懒"],0,2,10,0,0],
[["Hyper Voice","Mégaphone","Schallwelle","Granvoce","Vozarrón","ハイパーボイス","巨声"],0,1,10,90,100],
[["Poison Fang","Crochet Venin","Giftzahn","Velenodenti","Colmillo Ven","どくどくのキバ","剧毒牙"],3,0,15,50,100],
[["Crush Claw","Éclate Griffe","Zermalmklaue","Tritartigli","Garra Brutal","ブレイククロー","撕裂爪"],0,0,10,75,95],
[["Blast Burn","Rafale Feu","Lohekanonade","Incendio","Anillo Ígneo","ブラストバーン","爆炸烈焰"],9,1,5,150,90],
[["Hydro Cannon","Hydroblast","Aquahaubitze","Idrocannone","Hidrocañón","ハイドロカノン","加农水炮"],10,1,5,150,90],
[["Meteor Mash","Poing Météor","Sternenhieb","Meteorpugno","Puño Meteoro","コメットパンチ","彗星拳"],8,0,10,90,90],
[["Astonish","Étonnement","Erstauner","Sgomento","Impresionar","おどろかす","惊吓"],7,0,15,30,100],
[["Weather Ball","Ball&#39;Météo","Meteorologe","Palla Clima","Meteorobola","ウェザーボール","气象球"],0,1,10,50,100],
[["Aromatherapy","Aromathérapi","Aromakur","Aromaterapia","Aromaterapia","アロマセラピー","芳香治疗"],11,2,5,0,0],
[["Fake Tears","Croco Larme","Trugträne","Falselacrime","Llanto Falso","うそなき","假哭"],16,2,20,0,100],
[["Air Cutter","Tranch&#39;Air","Windschnitt","Aerasoio","Aire Afilado","エアカッター","空气利刃"],2,1,25,60,95],
[["Overheat","Surchauffe","Hitzekoller","Vampata","Sofoco","オーバーヒート","过热"],9,1,5,130,90],
[["Odor Sleuth","Flair","Schnüffler","Segugio","Rastreo","かぎわける","气味侦测"],0,2,40,0,0],
[["Rock Tomb","Tomberoche","Felsgrab","Rocciotomba","Tumba Rocas","がんせきふうじ","岩石封锁"],5,0,15,60,95],
[["Silver Wind","Vent Argenté","Silberhauch","Ventargenteo","Viento Plata","ぎんいろのかぜ","银色旋风"],6,1,5,60,100],
[["Metal Sound","Strido-Son","Metallsound","Ferrostrido","Eco Metálico","きんぞくおん","金属音"],8,2,40,0,85],
[["Grass Whistle","Siffl&#39;Herbe","Grasflöte","Meloderba","Silbato","くさぶえ","草笛"],11,2,15,0,55],
[["Tickle","Chatouille","Spaßkanone","Solletico","Cosquillas","くすぐる","挠痒"],0,2,20,0,100],
[["Cosmic Power","Force Cosmik","Kosmik-Kraft","Cosmoforza","Masa Cósmica","コスモパワー","宇宙力量"],13,2,20,0,0],
[["Water Spout","Giclédo","Fontränen","Zampillo","Salpicar","しおふき","喷水"],10,1,5,150,100],
[["Signal Beam","Rayon Signal","Ampelleuchte","Segnoraggio","Doble Rayo","シグナルビーム","信号光束"],6,1,15,75,100],
[["Shadow Punch","Poing Ombre","Finsterfaust","Pugnodombra","Puño Sombra","シャドーパンチ","暗影拳"],7,0,20,60,0],
[["Extrasensory","Extrasenseur","Sondersensor","Extrasenso","Paranormal","じんつうりき","神通力"],13,1,20,80,100],
[["Sky Uppercut","Stratopercut","Himmelhieb","Stramontante","Gancho Alto","スカイアッパー","冲天拳"],1,0,15,85,90],
[["Sand Tomb","Tourbi-Sable","Sandgrab","Sabbiotomba","Bucle Arena","すなじごく","流沙地狱"],4,0,15,35,85],
[["Sheer Cold","Glaciation","Eiseskälte","Purogelo","Frío Polar","ぜったいれいど","绝对零度"],14,1,5,0,0],
[["Muddy Water","Ocroupi","Lehmbrühe","Fanghiglia","Agua Lodosa","だくりゅう","浊流"],10,1,10,90,85],
[["Bullet Seed","Balle Graine","Kugelsaat","Semitraglia","Recurrente","タネマシンガン","种子机关枪"],11,0,30,25,100],
[["Aerial Ace","Aéropique","Aero-Ass","Aeroassalto","Golpe Aéreo","つばめがえし","燕返"],2,0,20,60,0],
[["Icicle Spear","Stalagtite","Eisspeer","Gelolancia","Carámbano","つららばり","冰锥"],14,0,30,25,100],
[["Iron Defense","Mur de Fer","Eisenabwehr","Ferroscudo","Defensa Férrea","てっぺき","铁壁"],8,2,15,0,0],
[["Block","Barrage","Rückentzug","Blocco","Bloqueo","とおせんぼう","挡路"],0,2,5,0,0],
[["Howl","Grondement","Jauler","Gridodilotta","Aullido","とおぼえ","长嚎"],0,2,40,0,0],
[["Dragon Claw","Dracogriffe","Drachenklaue","Dragartigli","Garra Dragón","ドラゴンクロー","龙爪"],15,0,15,80,100],
[["Frenzy Plant","Végé-Attak","Fauna-Statue","Radicalbero","Planta Feroz","ハードプラント","疯狂植物"],11,1,5,150,90],
[["Bulk Up","Gonflette","Protzer","Granfisico","Corpulencia","ビルドアップ","健美"],1,2,20,0,0],
[["Bounce","Rebond","Sprungfeder","Rimbalzo","Bote","とびはねる","弹跳"],2,0,5,85,85],
[["Mud Shot","Tir de Boue","Lehmschuss","Colpodifango","Disparo Lodo","マッドショット","泥巴射击"],4,1,15,55,95],
[["Poison Tail","Queue-Poison","Giftschweif","Velenocoda","Cola Veneno","ポイズンテール","毒尾"],3,0,25,50,100],
[["Covet","Implore","Bezirzer","Supplica","Antojo","ほしがる","渴望"],0,0,25,60,100],
[["Volt Tackle","Électacle","Volttackle","Locomovolt","Placaje Eléctrico","ボルテッカー","伏特攻击"],12,0,15,120,100],
[["Magical Leaf","Feuillemagik","Zauberblatt","Fogliamagica","Hoja Mágica","マジカルリーフ","魔法叶"],11,1,20,60,0],
[["Water Sport","Tourniquet","Nassmacher","Docciascudo","Hidrochorro","みずあそび","玩水"],10,2,15,0,0],
[["Calm Mind","Plénitude","Gedankengut","Calmamente","Paz Mental","めいそう","冥想"],13,2,20,0,0],
[["Leaf Blade","Lame-Feuille","Laubklinge","Fendifoglia","Hoja Aguda","リーフブレード","叶刃"],11,0,15,90,100],
[["Dragon Dance","Danse Draco","Drachentanz","Dragodanza","Danza Dragón","りゅうのまい","龙之舞"],15,2,20,0,0],
[["Rock Blast","Boule Roc","Felswurf","Cadutamassi","Pedrada","ロックブラスト","岩石爆击"],5,0,10,25,90],
[["Shock Wave","Onde de Choc","Schockwelle","Ondashock","Onda Voltio","でんげきは","电击波"],12,1,20,60,0],
[["Water Pulse","Vibraqua","Aquawelle","Idropulsar","Hidropulso","みずのはどう","水之波动"],10,1,20,60,100],
[["Doom Desire","Carnareket","Kismetwunsch","Obbliderio","Deseo Oculto","はめつのねがい","破灭之愿"],8,1,5,140,100],
[["Psycho Boost","Psycho Boost","Psyschub","Psicoslancio","Psicoataque","サイコブースト","精神突进"],13,1,5,140,90],
[["Roost","Atterrissage","Ruheort","Trespolo","Respiro","はねやすめ","羽栖"],2,2,10,0,0],
[["Gravity","Gravité","Erdanziehung","Gravità","Gravedad","じゅうりょく","重力"],13,2,5,0,0],
[["Miracle Eye","Œil Miracle","Wunderauge","Miracolvista","Gran Ojo","ミラクルアイ","奇迹之眼"],13,2,40,0,0],
[["Wake-Up Slap","Réveil Forcé","Weckruf","Svegliopacca","Espabila","めざましビンタ","唤醒巴掌"],1,0,10,70,100],
[["Hammer Arm","Marto-Poing","Hammerarm","Martelpugno","Machada","アームハンマー","臂錘"],1,0,10,100,90],
[["Gyro Ball","Gyroballe","Gyroball","Vortexpalla","Giro Bola","ジャイロボール","陀螺球"],8,0,5,0,100],
[["Healing Wish","Vœu Soin","Heilopfer","Curardore","Deseo Cura","いやしのねがい","治愈之愿"],13,2,10,0,0],
[["Brine","Saumure","Lake","Acquadisale","Salmuera","しおみず","盐水"],10,1,10,65,100],
[["Natural Gift","Don Naturel","Beerenkräfte","Dononaturale","Don Natural","しぜんのめぐみ","自然之恩"],0,0,15,0,100],
[["Feint","Ruse","Offenlegung","Fintoattacco","Amago","フェイント","佯攻"],0,0,10,30,100],
[["Pluck","Picore","Pflücker","Spennata","Picoteo","ついばむ","啄食"],2,0,20,60,100],
[["Tailwind","Vent Arrière","Rückenwind","Ventoincoda","Viento Afín","おいかぜ","顺风"],2,2,15,0,0],
[["Acupressure","Acupression","Akupressur","Acupressione","Acupresión","つぼをつく","点穴"],0,2,30,0,0],
[["Metal Burst","Fulmifer","Metallstoß","Metalscoppio","Represión Metal","メタルバースト","金属爆炸"],8,0,10,0,100],
[["U-turn","Demi-Tour","Kehrtwende","Retromarcia","Ida y Vuelta","とんぼがえり","急速折返"],6,0,20,70,100],
[["Close Combat","Close Combat","Nahkampf","Zuffa","A Bocajarro","インファイト","近身战"],1,0,5,120,100],
[["Payback","Représailles","Gegenstoß","Rivincita","Vendetta","しっぺがえし","以牙還牙"],16,0,10,50,100],
[["Assurance","Assurance","Gewissheit","Garanzia","Buena Baza","ダメおし","恶意追击"],16,0,10,60,100],
[["Embargo","Embargo","Itemsperre","Divieto","Embargo","さしおさえ","查封"],16,2,15,0,100],
[["Fling","Dégommage","Schleuder","Lancio","Lanzamiento","なげつける","投擲"],16,0,10,0,100],
[["Psycho Shift","Échange Psy","Psybann","Psicotrasfer","Psicocambio","サイコシフト","精神转移"],13,2,10,0,100],
[["Trump Card","Atout","Trumpfkarte","Asso","As Oculto","きりふだ","王牌"],0,1,5,0,0],
[["Heal Block","Anti-Soin","Heilblockade","Anticura","Anticura","かいふくふうじ","回复封锁"],13,2,15,0,100],
[["Wring Out","Essorage","Auswringen","Strizzata","Estrujón","しぼりとる","绞紧"],0,1,5,0,100],
[["Power Trick","Astuce Force","Krafttrick","Ingannoforza","Truco Fuerza","パワートリック","力量戏法"],13,2,10,0,0],
[["Gastro Acid","Suc Digestif","Magensäfte","Gastroacido","Bilis","いえき","胃液"],3,2,10,0,100],
[["Lucky Chant","Air Veinard","Beschwörung","Fortuncanto","Conjuro","おまじない","幸运咒语"],0,2,30,0,0],
[["Me First","Moi d&#39;Abord","Egotrip","Precedenza","Yo Primero","さきどり","抢先一步"],0,2,20,0,0],
[["Copycat","Photocopie","Imitator","Copione","Copión","まねっこ","仿效"],0,2,20,0,0],
[["Power Swap","Permuforce","Krafttausch","Barattoforza","Cambia Fuerza","パワースワップ","力量互换"],13,2,10,0,0],
[["Guard Swap","Permugarde","Schutztausch","Barattoscudo","Cambia Defensa","ガードスワップ","防守互换"],13,2,10,0,0],
[["Punishment","Punition","Strafattacke","Punizione","Castigo","おしおき","懲罰"],16,0,5,0,100],
[["Last Resort","Dernier Recours","Zuflucht","Ultimascelta","Última Baza","とっておき","珍藏"],0,0,5,140,100],
[["Worry Seed","Soucigraine","Sorgensamen","Affannoseme","Abatidoras","なやみのタネ","烦恼种子"],11,2,10,0,100],
[["Sucker Punch","Coup Bas","Tiefschlag","Sbigoattacco","Golpe Bajo","ふいうち","突袭"],16,0,5,80,100],
[["Toxic Spikes","Pics Toxik","Giftspitzen","Fielepunte","Púas Tóxicas","どくびし","毒菱"],3,2,20,0,0],
[["Heart Swap","Permucœur","Statustausch","Cuorbaratto","Cambia Almas","ハートスワップ","心灵互换"],13,2,10,0,0],
[["Aqua Ring","Anneau Hydro","Wasserring","Acquanello","Acua Aro","アクアリング","水流环"],10,2,20,0,0],
[["Magnet Rise","Vol Magnétik","Magnetflug","Magnetascesa","Levitón","でんじふゆう","电磁飘浮"],12,2,10,0,0],
[["Flare Blitz","Boutefeu","Flammenblitz","Fuococarica","Envite Ígneo","フレアドライブ","闪焰冲锋"],9,0,15,120,100],
[["Force Palm","Forte-Paume","Kraftwelle","Palmoforza","Palmeo","はっけい","发劲"],1,0,10,60,100],
[["Aura Sphere","Aurasphère","Aurasphäre","Forzasfera","Esfera Aural","はどうだん","波导弹"],1,1,20,80,0],
[["Rock Polish","Poliroche","Steinpolitur","Lucidatura","Pulimento","ロックカット","岩石打磨"],5,2,20,0,0],
[["Poison Jab","Direct Toxik","Gifthieb","Velenpuntura","Puya Nociva","どくづき","毒击"],3,0,20,80,100],
[["Dark Pulse","Vibrobscur","Finsteraura","Neropulsar","Pulso Umbrío","あくのはどう","恶之波动"],16,1,15,80,100],
[["Night Slash","Tranche-Nuit","Nachthieb","Nottesferza","Tajo Umbrío","つじぎり","暗袭要害"],16,0,15,70,100],
[["Aqua Tail","Hydroqueue","Nassschweif","Idrondata","Acua Cola","アクアテール","水流尾"],10,0,10,90,90],
[["Seed Bomb","Canon Graine","Samenbomben","Semebomba","Bomba Germen","タネばくだん","种子炸弹"],11,0,15,80,100],
[["Air Slash","Lame d&#39;Air","Luftschnitt","Eterelama","Tajo Aéreo","エアスラッシュ","空气斩"],2,1,15,75,95],
[["X-Scissor","Plaie-Croix","Kreuzschere","Forbice X","Tijera X","シザークロス","十字剪"],6,0,15,80,100],
[["Bug Buzz","Bourdon","Käfergebrumm","Ronzio","Zumbido","むしのさざめき","虫鸣"],6,1,10,90,100],
[["Dragon Pulse","Dracochoc","Drachenpuls","Dragopulsar","Pulso Dragón","りゅうのはどう","龙之波动"],15,1,10,85,100],
[["Dragon Rush","Dracocharge","Drachenstoß","Dragofuria","Carga Dragón","ドラゴンダイブ","龙之俯冲"],15,0,10,100,75],
[["Power Gem","Rayon Gemme","Juwelenkraft","Gemmoforza","Joya de Luz","パワージェム","力量宝石"],5,1,20,80,100],
[["Drain Punch","Vampipoing","Ableithieb","Assorbipugno","Puño Drenaje","ドレインパンチ","吸取拳"],1,0,10,75,100],
[["Vacuum Wave","Onde Vide","Vakuumwelle","Vuotonda","Onda Vacío","しんくうは","真空波"],1,1,30,40,100],
[["Focus Blast","Exploforce","Fokusstoß","Focalcolpo","Onda Certera","きあいだま","真气弹"],1,1,5,120,70],
[["Energy Ball","Éco-Sphère","Energieball","Energipalla","Energibola","エナジーボール","能量球"],11,1,10,90,100],
[["Brave Bird","Rapace","Sturzflug","Baldeali","Pájaro Osado","ブレイブバード","勇鸟猛攻"],2,0,15,120,100],
[["Earth Power","Telluriforce","Erdkräfte","Geoforza","Tierra Viva","だいちのちから","大地之力"],4,1,10,90,100],
[["Switcheroo","Passe-Passe","Wechseldich","Rapidscambio","Trapicheo","すりかえ","掉包"],16,2,10,0,100],
[["Giga Impact","Giga Impact","Gigastoß","Gigaimpatto","Giga Impacto","ギガインパクト","终极冲击"],0,0,5,150,90],
[["Nasty Plot","Machination","Ränkeschmied","Congiura","Maquinación","わるだくみ","诡计"],16,2,20,0,0],
[["Bullet Punch","Pisto-Poing","Patronenhieb","Pugnoscarica","Puño Bala","バレットパンチ","子弹拳"],8,0,30,40,100],
[["Avalanche","Avalanche","Lawine","Slavina","Alud","ゆきなだれ","雪崩"],14,0,10,60,100],
[["Ice Shard","Éclats Glace","Eissplitter","Geloscheggia","Canto Helado","こおりのつぶて","冰砾"],14,0,30,40,100],
[["Shadow Claw","Griffe Ombre","Dunkelklaue","Ombrartigli","Garra Umbría","シャドークロー","暗影爪"],7,0,15,70,100],
[["Thunder Fang","Crocs Éclair","Donnerzahn","Fulmindenti","Colmillo Rayo","かみなりのキバ","雷电牙"],12,0,15,65,95],
[["Ice Fang","Crocs Givre","Eiszahn","Gelodenti","Colmillo Hielo","こおりのキバ","冰冻牙"],14,0,15,65,95],
[["Fire Fang","Crocs Feu","Feuerzahn","Rogodenti","Colmillo Ígneo","ほのおのキバ","火焰牙"],9,0,15,65,95],
[["Shadow Sneak","Ombre Portée","Schattenstoß","Furtivombra","Sombra Vil","かげうち","影子偷袭"],7,0,30,40,100],
[["Mud Bomb","Boue-Bombe","Schlammbombe","Pantanobomba","Bomba Fango","どろばくだん","泥巴炸弹"],4,1,10,65,85],
[["Psycho Cut","Coupe Psycho","Psychoklinge","Psicotaglio","Psicocorte","サイコカッター","精神利刃"],13,0,20,70,100],
[["Zen Headbutt","Psykoud&#39;Boul","Zen-Kopfstoß","Cozzata Zen","Cabezazo Zen","しねんのずつき","意念头锤"],13,0,15,80,90],
[["Mirror Shot","Miroi-Tir","Spiegelsalve","Cristalcolpo","Disparo Espejo","ミラーショット","镜光射击"],8,1,10,65,85],
[["Flash Cannon","Luminocanon","Lichtkanone","Cannonflash","Foco Resplandor","ラスターカノン","加农光炮"],8,1,10,80,100],
[["Rock Climb","Escalade","Kraxler","Scalaroccia","Treparrocas","ロッククライム","攀岩"],0,0,20,90,85],
[["Defog","Anti-Brume","Auflockern","Scacciabruma","Despejar","きりばらい","清除浓雾"],2,2,15,0,0],
[["Trick Room","Distorsion","Bizarroraum","Distortozona","Espacio Raro","トリックルーム","戏法空间"],13,2,5,0,0],
[["Draco Meteor","Draco Météor","Draco Meteor","Dragobolide","Cometa Draco","りゅうせいぐん","流星群"],15,1,5,130,90],
[["Discharge","Coup d&#39;Jus","Ladungsstoß","Scarica","Chispazo","ほうでん","放电"],12,1,15,80,100],
[["Lava Plume","Ébullilave","Flammensturm","Lavasbuffo","Humareda","ふんえん","喷烟"],9,1,15,80,100],
[["Leaf Storm","Tempête Verte","Blättersturm","Verdebufera","Lluevahojas","リーフストーム","飞叶风暴"],11,1,5,130,90],
[["Power Whip","Mégafouet","Blattgeißel","Vigorcolpo","Latigazo","パワーウィップ","强力鞭打"],11,0,10,120,85],
[["Rock Wrecker","Roc-Boulet","Felswerfer","Devastomasso","Romperrocas","がんせきほう","岩石炮"],5,0,5,150,90],
[["Cross Poison","Poison-Croix","Giftstreich","Velenocroce","Veneno X","クロスポイズン","十字毒刃"],3,0,20,70,100],
[["Gunk Shot","Détricanon","Mülltreffer","Sporcolancio","Lanza Mugre","ダストシュート","垃圾射击"],3,0,5,120,80],
[["Iron Head","Tête de Fer","Eisenschädel","Metaltestata","Cabeza de Hierro","アイアンヘッド","铁头"],8,0,15,80,100],
[["Magnet Bomb","Bombaimant","Magnetbombe","Bombagnete","Bomba Imán","マグネットボム","磁铁炸弹"],8,0,20,60,0],
[["Stone Edge","Lame de Roc","Steinkante","Pietrataglio","Roca Afilada","ストーンエッジ","尖石攻击"],5,0,5,100,80],
[["Captivate","Séduction","Liebreiz","Incanto","Seducción","ゆうわく","诱惑"],0,2,20,0,100],
[["Stealth Rock","Piège de Roc","Tarnsteine","Levitoroccia","Trampa Rocas","ステルスロック","隐形岩"],5,2,20,0,0],
[["Grass Knot","Nœud Herbe","Strauchler","Laccioerboso","Hierba Lazo","くさむすび","打草结"],11,1,20,0,100],
[["Chatter","Babil","Geschwätz","Schiamazzo","Cháchara","おしゃべり","喋喋不休"],2,1,20,65,100],
[["Judgment","Jugement","Urteilskraft","Giudizio","Sentencia","さばきのつぶて","制裁光砾"],0,1,10,100,100],
[["Bug Bite","Piqûre","Käferbiss","Coleomorso","Picadura","むしくい","虫咬"],6,0,20,60,100],
[["Charge Beam","Rayon Chargé","Ladestrahl","Raggioscossa","Rayo Carga","チャージビーム","充电光束"],12,1,10,50,90],
[["Wood Hammer","Martobois","Holzhammer","Mazzuolegno","Mazazo","ウッドハンマー","木槌"],11,0,15,120,100],
[["Aqua Jet","Aqua-Jet","Wasserdüse","Acquagetto","Acua Jet","アクアジェット","水流喷射"],10,0,20,40,100],
[["Attack Order","Appel Attak","Schlagbefehl","Comandourto","Al Ataque","こうげきしれい","攻击指令"],6,0,15,90,100],
[["Defend Order","Appel Défense","Blockbefehl","Comandoscudo","A Defender","ぼうぎょしれい","防御指令"],6,2,10,0,0],
[["Heal Order","Appel Soins","Heilbefehl","Comandocura","Auxilio","かいふくしれい","回复指令"],6,2,10,0,0],
[["Head Smash","Fracass&#39;Tête","Kopfstoß","Zuccata","Testarazo","もろはのずつき","双刃头锤"],5,0,5,150,80],
[["Double Hit","Coup Double","Doppelschlag","Doppiosmash","Doble Golpe","ダブルアタック","二连击"],0,0,10,35,90],
[["Roar of Time","Hurle-Temps","Zeitenlärm","Fragortempo","Distorsión","ときのほうこう","时光咆哮"],15,1,5,150,90],
[["Spacial Rend","Spatio-Rift","Raumschlag","Fendispazio","Corte Vacío","あくうせつだん","亚空裂斩"],15,1,5,100,95],
[["Lunar Dance","Danse-Lune","Lunartanz","Lunardanza","Danza Lunar","みかづきのまい","新月舞"],13,2,10,0,0],
[["Crush Grip","Presse","Quetschgriff","Sbriciolmano","Agarrón","にぎりつぶす","捏碎"],0,0,5,0,100],
[["Magma Storm","Vortex Magma","Lavasturm","Magmaclisma","Lluvia Ígnea","マグマストーム","熔岩风暴"],9,1,5,100,75],
[["Dark Void","Trou Noir","Schlummerort","Vuototetro","Brecha Negra","ダークホール","暗黑洞"],16,2,10,0,80],
[["Seed Flare","Fulmigraine","Schocksamen","Infuriaseme","Fogonazo","シードフレア","种子闪光"],11,1,5,120,85],
[["Ominous Wind","Vent Mauvais","Unheilböen","Funestovento","Viento Aciago","あやしいかぜ","奇异之风"],7,1,5,60,100],
[["Shadow Force","Revenant","Schemenkraft","Oscurotuffo","Golpe Umbrío","シャドーダイブ","暗影潜袭"],7,0,5,120,100],
[["Hone Claws","Aiguisage","Klauenwetzer","Unghiaguzze","Afilagarras","つめとぎ","磨爪"],16,2,15,0,0],
[["Wide Guard","Garde Large","Rundumschutz","Bodyguard","Vastaguardia","ワイドガード","广域防守"],5,2,10,0,0],
[["Guard Split","Partage Garde","Schutzteiler","Paridifesa","Isoguardia","ガードシェア","防守平分"],13,2,10,0,0],
[["Power Split","Partage Force","Kraftteiler","Pariattacco","Isofuerza","パワーシェア","力量平分"],13,2,10,0,0],
[["Wonder Room","Zone Étrange","Wunderraum","Mirabilzona","Zona Extraña","ワンダールーム","奇妙空间"],13,2,10,0,0],
[["Psyshock","Choc Psy","Psychoschock","Psicoshock","Psicocarga","サイコショック","精神衝擊"],13,1,10,80,100],
[["Venoshock","Choc Venin","Giftschock","Velenoshock","Carga Tóxica","ベノムショック","毒液衝擊"],3,1,10,65,100],
[["Autotomize","Allègement","Autotomie","Sganciapesi","Aligerar","ボディパージ","身体轻量化"],8,2,15,0,0],
[["Rage Powder","Poudre Fureur","Wutpulver","Polverabbia","Polvo Ira","いかりのこな","憤怒粉"],6,2,20,0,0],
[["Telekinesis","Lévikinésie","Telekinese","Telecinesi","Telequinesis","テレキネシス","意念移物"],13,2,15,0,0],
[["Magic Room","Zone Magique","Magieraum","Magicozona","Zona Mágica","マジックルーム","魔法空间"],13,2,10,0,0],
[["Smack Down","Anti-Air","Katapult","Abbattimento","Antiaéreo","うちおとす","击落"],5,0,15,50,100],
[["Storm Throw","Yama Arashi","Bergsturm","Tempestretta","Llave Corsé","やまあらし","山岚摔"],1,0,10,60,100],
[["Flame Burst","Rebondifeu","Funkenflug","Pirolancio","Pirotecnia","はじけるほのお","烈焰溅射"],9,1,15,70,100],
[["Sludge Wave","Cradovague","Schlammwoge","Fangonda","Onda Tóxica","ヘドロウェーブ","污泥波"],3,1,10,95,100],
[["Quiver Dance","Papillodanse","Falterreigen","Eledanza","Danza Aleteo","ちょうのまい","蝶舞"],6,2,20,0,0],
[["Heavy Slam","Tacle Lourd","Rammboss","Pesobomba","Cuerpo Pesado","ヘビーボンバー","重磅冲撞"],8,0,10,0,100],
[["Synchronoise","Synchropeine","Synchrolärm","Sincrumore","Sincrorruido","シンクロノイズ","同步干擾"],13,1,10,120,100],
[["Electro Ball","Boule Élek","Elektroball","Energisfera","Bola Voltio","エレキボール","电球"],12,1,10,0,100],
[["Soak","Détrempage","Überflutung","Inondazione","Anegar","みずびたし","浸水"],10,2,20,0,100],
[["Flame Charge","Nitrocharge","Nitroladung","Nitrocarica","Nitrocarga","ニトロチャージ","蓄能焰襲"],9,0,20,50,100],
[["Coil","Enroulement","Einrollen","Arrotola","Enrosque","とぐろをまく","盤蜷"],3,2,20,0,0],
[["Low Sweep","Balayette","Fußtritt","Calciobasso","Puntapié","ローキック","下盘踢"],1,0,20,65,100],
[["Acid Spray","Bombe Acide","Säurespeier","Acidobomba","Bomba Ácida","アシッドボム","酸液炸弹"],3,1,20,40,100],
[["Foul Play","Tricherie","Schmarotzer","Ripicca","Juego Sucio","イカサマ","欺诈"],16,0,15,95,100],
[["Simple Beam","Rayon Simple","Wankelstrahl","Ondisinvolta","Onda Simple","シンプルビーム","单纯光束"],0,2,15,0,100],
[["Entrainment","Ten-danse","Zwango","Saltamicizia","Danza Amiga","なかまづくり","找伙伴"],0,2,15,0,100],
[["After You","Après Vous","Galanterie","Cortesia","Cede Paso","おさきにどうぞ","您先請"],0,2,15,0,0],
[["Round","Chant Canon","Kanon","Coro","Canon","りんしょう","轮唱"],0,1,15,60,100],
[["Echoed Voice","Écho","Widerhall","Echeggiavoce","Eco Voz","エコーボイス","迴声"],0,1,15,40,100],
[["Chip Away","Attrition","Zermürben","Insidia","Guardia Baja","なしくずし","逐步击破"],0,0,20,70,100],
[["Clear Smog","Bain de Smog","Klärsmog","Pulifumo","Niebla Clara","クリアスモッグ","清除之煙"],3,1,15,50,0],
[["Stored Power","Force Ajoutée","Kraftvorrat","Veicolaforza","Poder Reserva","アシストパワー","辅助力量"],13,1,10,20,100],
[["Quick Guard","Prévention","Rapidschutz","Anticipo","Anticipo","ファストガード","快速防守"],1,2,15,0,0],
[["Ally Switch","Interversion","Seitentausch","Cambiaposto","Cambio Banda","サイドチェンジ","交换场地"],13,2,15,0,0],
[["Scald","Ébullition","Siedewasser","Idrovampata","Escaldar","ねっとう","热水"],10,1,15,80,100],
[["Shell Smash","Exuviation","Hausbruch","Gettaguscio","Rompecoraza","からをやぶる","破壳"],0,2,15,0,0],
[["Heal Pulse","Vibra Soin","Heilwoge","Ondasana","Pulso Cura","いやしのはどう","治愈波动"],13,2,10,0,0],
[["Hex","Châtiment","Bürde","Sciagura","Infortunio","たたりめ","祸不单行"],7,1,10,65,100],
[["Sky Drop","Chute Libre","Freier Fall","Cadutalibera","Caída Libre","フリーフォール","自由落体"],2,0,10,60,100],
[["Shift Gear","Changement Vitesse","Gangwechsel","Cambiomarcia","Cambio de Marcha","ギアチェンジ","换挡"],8,2,10,0,0],
[["Circle Throw","Projection","Überkopfwurf","Ribaltiro","Llave Giro","ともえなげ","巴投"],1,0,10,60,90],
[["Incinerate","Calcination","Einäschern","Bruciatutto","Calcinación","やきつくす","烧尽"],9,1,15,60,100],
[["Quash","À la Queue","Verzögerung","Spintone","Último Lugar","さきおくり","延後"],16,2,15,0,100],
[["Acrobatics","Acrobatie","Akrobatik","Acrobazia","Acróbata","アクロバット","杂技"],2,0,15,55,100],
[["Reflect Type","Copie Type","Typenspiegel","Riflettipo","Clonatipo","ミラータイプ","镜面属性"],0,2,15,0,0],
[["Retaliate","Vengeance","Heimzahlung","Nemesi","Represalia","かたきうち","報仇"],0,0,5,70,100],
[["Final Gambit","Tout ou Rien","Wagemut","Azzardo","Sacrificio","いのちがけ","搏命"],1,1,5,0,100],
[["Bestow","Passe-Cadeau","Offerte","Cediregalo","Ofrenda","ギフトパス","传递礼物"],0,2,15,0,0],
[["Inferno","Feu d&#39;Enfer","Inferno","Marchiatura","Infierno","れんごく","炼狱"],9,1,5,100,50],
[["Water Pledge","Aire d&#39;Eau","Wassersäulen","Acquapatto","Voto Agua","みずのちかい","水之誓约"],10,1,10,80,100],
[["Fire Pledge","Aire de Feu","Feuersäulen","Fiammapatto","Voto Fuego","ほのおのちかい","火之誓約"],9,1,10,80,100],
[["Grass Pledge","Aire d&#39;Herbe","Pflanzensäulen","Erbapatto","Voto Planta","くさのちかい","草之誓约"],11,1,10,80,100],
[["Volt Switch","Change Éclair","Voltwechsel","Invertivolt","Voltiocambio","ボルトチェンジ","伏特替换"],12,1,20,70,100],
[["Struggle Bug","Survinsecte","Käfertrutz","Entomoblocco","Estoicismo","むしのていこう","虫之抵抗"],6,1,20,50,100],
[["Bulldoze","Piétisol","Dampfwalze","Battiterra","Terratemblor","じならし","重踏"],4,0,20,60,100],
[["Frost Breath","Souffle Glacé","Eisesodem","Alitogelido","Vaho Gélido","こおりのいぶき","冰息"],14,1,10,60,90],
[["Dragon Tail","Draco-Queue","Drachenrute","Codadrago","Cola Dragón","ドラゴンテール","龙尾"],15,0,10,60,90],
[["Work Up","Rengorgement","Kraftschub","Cuordileone","Avivar","ふるいたてる","自我激励"],0,2,30,0,0],
[["Electroweb","Toile Élek","Elektronetz","Elettrotela","Electrotela","エレキネット","电网"],12,1,15,55,95],
[["Wild Charge","Éclair Fou","Stromstoß","Sprizzalampo","Voltio Cruel","ワイルドボルト","瘋狂伏特"],12,0,15,90,100],
[["Drill Run","Tunnelier","Schlagbohrer","Giravvita","Taladradora","ドリルライナー","直冲钻"],4,0,10,80,95],
[["Dual Chop","Double Baffe","Doppelhieb","Doppiocolpo","Golpe Bis","ダブルチョップ","二连劈"],15,0,15,40,90],
[["Heart Stamp","Crèvecœur","Herzstempel","Cuorestampo","Arrumaco","ハートスタンプ","愛心印章"],13,0,25,60,100],
[["Horn Leech","Encornebois","Holzgeweih","Legnicorno","Asta Drenaje","ウッドホーン","木角"],11,0,10,75,100],
[["Sacred Sword","Lame Sainte","Sanctoklinge","Spadasolenne","Espada Santa","せいなるつるぎ","圣剑"],1,0,15,90,100],
[["Razor Shell","Coquilame","Kalkklinge","Conchilama","Concha Filo","シェルブレード","贝壳刃"],10,0,10,75,95],
[["Heat Crash","Tacle Feu","Brandstempel","Marchiafuoco","Golpe Calor","ヒートスタンプ","高溫重压"],9,0,10,0,100],
[["Leaf Tornado","Phytomixeur","Grasmixer","Vorticerba","Ciclón de Hojas","グラスミキサー","青草搅拌器"],11,1,10,65,90],
[["Steamroller","Bulldoboule","Quetschwalze","Rulloduro","Rodillo de Púas","ハードローラー","疯狂滚压"],6,0,20,65,100],
[["Cotton Guard","Cotogarde","Watteschild","Cotonscudo","Rizo Algodón","コットンガード","棉花防守"],11,2,10,0,0],
[["Night Daze","Explonuit","Nachtflut","Urtoscuro","Pulso Noche","ナイトバースト","暗黑爆破"],16,1,10,85,95],
[["Psystrike","Frappe Psy","Psychostoß","Psicobotta","Onda Mental","サイコブレイク","精神击破"],13,1,10,100,100],
[["Tail Slap","Plumo-Queue","Kehrschelle","Spazzasberla","Plumerazo","スイープビンタ","扫尾拍打"],0,0,10,25,85],
[["Hurricane","Vent Violent","Orkan","Tifone","Vendaval","ぼうふう","暴风"],2,1,10,110,70],
[["Head Charge","Peignée","Steinschädel","Ricciolata","Ariete","アフロブレイク","爆炸头突击"],0,0,15,120,100],
[["Gear Grind","Lancécrou","Klikkdiskus","Ingracolpo","Rueda Doble","ギアソーサー","齿轮飞盘"],8,0,15,50,85],
[["Searing Shot","Incendie","Flammenball","Sparafuoco","Bomba Ígnea","かえんだん","火焰弹"],9,1,5,100,100],
[["Techno Blast","Techno-Buster","Techblaster","Tecnobotto","Tecno Shock","テクノバスター","高科技光炮"],0,1,5,120,100],
[["Relic Song","Chant Antique","Urgesang","Cantoantico","Canto Arcaico","いにしえのうた","古老之歌"],0,1,10,75,100],
[["Secret Sword","Lame Ouinte","Mystoschwert","Spadamistica","Sable Místico","しんぴのつるぎ","神秘之剑"],1,1,10,85,100],
[["Glaciate","Ère Glaciaire","Eiszeit","Gelamondo","Mundo Gélido","こごえるせかい","冰封世界"],14,1,10,65,95],
[["Bolt Strike","Charge Foudre","Blitzschlag","Lucesiluro","Ataque Fulgor","らいげき","雷击"],12,0,5,130,85],
[["Blue Flare","Flamme Bleue","Blauflammen","Fuocoblu","Llama Azul","あおいほのお","青焰"],9,1,5,130,85],
[["Fiery Dance","Danse du Feu","Feuerreigen","Voldifuoco","Danza Llama","ほのおのまい","火之舞"],9,1,10,80,100],
[["Freeze Shock","Éclair Gelé","Frostvolt","Elettrogelo","Rayo Gélido","フリーズボルト","冰冻伏特"],14,0,5,140,90],
[["Ice Burn","Feu Glacé","Frosthauch","Vampagelida","Llama Gélida","コールドフレア","极寒冷焰"],14,1,5,140,90],
[["Snarl","Aboiement","Standpauke","Urlorabbia","Alarido","バークアウト","大声咆哮"],16,1,15,55,95],
[["Icicle Crash","Chute Glace","Eiszapfhagel","Scagliagelo","Chuzos","つららおとし","冰柱坠击"],14,0,10,85,90],
[["V-create","Coup Victoire","V-Generator","Generatore V","V de Fuego","Ｖジェネレート","Ｖ熱焰"],9,0,5,180,95],
[["Fusion Flare","Flamme Croix","Kreuzflamme","Incrofiamma","Llama Fusión","クロスフレイム","交错火焰"],9,1,5,100,100],
[["Fusion Bolt","Éclair Croix","Kreuzdonner","Incrotuono","Rayo Fusión","クロスサンダー","交错闪电"],12,0,5,100,100],
[["Flying Press","Flying Press","Flying Press","Schiacciatuffo","Plancha Voladora","フライングプレス","飞身重压"],1,0,10,80,95],
[["Mat Block","Tatamigaeshi","Tatami-Schild","Ribaltappeto","Escudo Tatami","たたみがえし","掀榻榻米"],1,2,10,0,0],
[["Belch","Éructation","Rülpser","Rutto","Eructo","ゲップ","打嗝"],3,1,10,120,90],
[["Rototiller","Fertilisation","Pflüger","Aracampo","Fertilizante","たがやす","耕地"],4,2,10,0,0],
[["Sticky Web","Toile Gluante","Klebenetz","Rete Vischiosa","Red Viscosa","ねばねばネット","黏黏网"],6,2,20,0,0],
[["Fell Stinger","Dard Mortel","Stachelfinale","Pungiglione","Aguijón Letal","とどめばり","致命针刺"],6,0,25,30,100],
[["Phantom Force","Hantise","Phantomkraft","Spettrotuffo","Golpe Fantasma","ゴーストダイブ","潜灵奇袭"],7,0,10,90,100],
[["Trick-or-Treat","Halloween","Halloween","Halloween","Halloween","ハロウィン","万圣夜"],7,2,20,0,100],
[["Noble Roar","Râle Mâle","Kampfgebrüll","Urlo","Rugido de Guerra","おたけび","战吼"],0,2,30,0,100],
[["Ion Deluge","DélugePlasma","Plasmaschauer","Pioggiaplasma","Cortina Plasma","プラズマシャワー","等离子浴"],12,2,25,0,0],
[["Parabolic Charge","Parabocharge","Parabolladung","Caricaparabola","Carga Parábola","パラボラチャージ","抛物面充电"],12,1,20,50,100],
[["Forest&#39;s Curse","Maléfice Sylvain","Waldesfluch","Schiacciatuffo","Condena Silvana","もりののろい","森林诅咒"],11,2,20,0,100],
[["Petal Blizzard","Tempête Florale","Blütenwirbel","Fiortempesta","Tormenta Floral","はなふぶき","落英缤纷"],11,0,15,90,100],
[["Freeze-Dry","Lyophilisation","Gefriertrockner","Liofilizzazione","Liofilización","フリーズドライ","冷冻干燥"],14,1,20,70,100],
[["Disarming Voice","Voix Enjôleuse","Säuselstimme","Incantavoce","Voz Cautivadora","チャームボイス","魅惑之声"],17,1,15,40,0],
[["Parting Shot","Dernier Mot","Abgangstirade","Monito","Última Palabra","すてゼリフ","抛下狠话"],16,2,20,0,100],
[["Topsy-Turvy","Renversement","Invertigo","Sottosopra","Reversión","ひっくりかえす","颠倒"],16,2,20,0,100],
[["Draining Kiss","Vampibaiser","Diebeskuss","Assorbibacio","Beso Drenaje","ドレインキッス","吸取之吻"],17,1,10,50,100],
[["Crafty Shield","Vigilance","Trickschutz","Truccodifesa","Truco Defensa","トリックガード","戏法防守"],17,2,10,0,0],
[["Flower Shield","Garde Florale","Floraschutz","Fiordifesa","Defensa Floral","フラワーガード","鲜花防守"],17,2,10,0,0],
[["Grassy Terrain","Champ Herbu","Grasfeld","Campo Erboso","Campo de Hierba","グラスフィールド","青草场地"],11,2,10,0,0],
[["Misty Terrain","Champ Brumeux","Nebelfeld","Campo Nebbioso","Campo de Niebla","ミストフィールド","薄雾场地"],17,2,10,0,0],
[["Electrify","Électrisation","Elektrifizierung","Elettrocontagio","Electrificación","そうでん","输电"],12,2,20,0,0],
[["Play Rough","Câlinerie","Knuddler","Carineria","Carantoña","じゃれつく","嬉闹"],17,0,10,90,90],
[["Fairy Wind","Vent Féérique","Feenbrise","Vento di Fata","Viento Feérico","ようせいのかぜ","妖精之风"],17,1,30,40,100],
[["Moonblast","Pouvoir Lunaire","Mondgewalt","Forza Lunare","Fuerza Lunar","ムーンフォース","月亮之力"],17,1,15,95,100],
[["Boomburst","Bang Sonique","Überschallknall","Ondaboato","Estruendo","ばくおんぱ","爆音波"],0,1,10,140,100],
[["Fairy Lock","Verrou Enchanté","Feenschloss","Blocco Fatato","Cerrojo Feérico","フェアリーロック","妖精之锁"],17,2,10,0,0],
[["King&#39;s Shield","Bouclier Royal","Königsschild","Scudo Reale","Escudo Real","キングシールド","王者盾牌"],8,2,10,0,0],
[["Play Nice","Camaraderie","Kameradschaft","Simpatia","Camaradería","なかよくする","和睦相处"],0,2,20,0,0],
[["Confide","Confidence","Vertrauenssache","Confidenza","Confidencia","ないしょばなし","密语"],0,2,20,0,0],
[["Diamond Storm","Orage Adamantin","Diamantsturm","Diamantempesta","Torm. Diamantes","ダイヤストーム","钻石风暴"],5,0,5,100,95],
[["Steam Eruption","Jet de Vapeur","Dampfschwall","Vaporscoppio","Chorro de Vapor","スチームバースト","蒸汽爆炸"],10,1,5,110,95],
[["Hyperspace Hole","TrouDimensionnel","Dimensionsloch","Forodimensionale","Paso Dimensional","いじげんホール","异次元洞"],13,1,5,80,0],
[["Water Shuriken","Sheauriken","Wasser-Shuriken","Acqualame","Shuriken de Agua","みずしゅりけん","飞水手里剑"],10,0,20,15,100],
[["Mystical Fire","Feu Ensorcelé","Magieflamme","Magifiamma","Llama Embrujada","マジカルフレイム","魔法火焰"],9,1,10,65,100],
[["Spiky Shield","Pico-Défense","Schutzstacheln","Agodifesa","Barrera Espinosa","ニードルガード","尖刺防守"],11,2,10,0,0],
[["Aromatic Mist","Brume Capiteuse","Duftwolke","Nebularoma","Niebla Aromática","アロマミスト","芳香薄雾"],17,2,20,0,0],
[["Eerie Impulse","Ondes Étranges","Mystowellen","Elettromistero","Onda Anómala","かいでんぱ","怪异电波"],12,2,15,0,100],
[["Venom Drench","Piège de Venin","Giftfalle","Velenotrappola","Trampa Venenosa","ベノムトラップ","毒液陷阱"],3,2,20,0,100],
[["Powder","Nuée de Poudre","Pulverschleuder","Pulviscoppio","Polvo Explosivo","ふんじん","粉尘"],6,2,20,0,100],
[["Geomancy","Géo-Contrôle","Geokontrolle","Geocontrollo","Geocontrol","ジオコントロール","大地掌控"],17,2,10,0,0],
[["Magnetic Flux","Magné-Contrôle","Magnetregler","Controllo Polare","Aura Magnética","じばそうさ","磁场操控"],12,2,20,0,0],
[["Happy Hour","Étrennes","Goldene Zeiten","Cuccagna","Paga Extra","ハッピータイム","欢乐时光"],0,2,30,0,0],
[["Electric Terrain","Champ Électrifié","Elektrofeld","Campo Elettrico","Campo Eléctrico","エレキフィールド","电气场地"],12,2,10,0,0],
[["Dazzling Gleam","Éclat Magique","Zauberschein","Magibrillio","Brillo Mágico","マジカルシャイン","魔法闪耀"],17,1,10,80,100],
[["Celebrate","Célébration","Ehrentag","Auguri","Celebración","おいわい","庆祝"],0,2,40,0,0],
[["Hold Hands","Mains Jointes","Händchenhalten","Mano nella Mano","Manos Juntas","てをつなぐ","牵手"],0,2,40,0,0],
[["Baby-Doll Eyes","Regard Touchant","Kulleraugen","Occhioni Teneri","Ojitos Tiernos","つぶらなひとみ","圆瞳"],17,2,30,0,100],
[["Nuzzle","Frotte-Frimousse","Wangenrubbler","Elettrococcola","Moflete Estático","ほっぺすりすり","蹭蹭臉頰"],12,0,20,20,100],
[["Hold Back","Retenue","Zurückhaltung","Riguardo","Clemencia","てかげん","手下留情"],0,0,40,40,100],
[["Infestation","Harcèlement","Plage","Assillo","Acoso","まとわりつく","死缠烂打"],6,1,20,20,100],
[["Power-Up Punch","Poing Boost","Steigerungshieb","Crescipugno","Puño Incremento","グロウパンチ","增强拳"],1,0,20,40,100],
[["Oblivion Wing","Mort-Ailes","Unheilsschwingen","Ali del Fato","Ala Mortífera","デスウイング","死亡之翼"],2,1,10,80,100],
[["Thousand Arrows","Myria-Flèches","Tausend Pfeile","Mille Frecce","Mil Flechas","サウザンアロー","千箭齊發"],4,0,10,90,100],
[["Thousand Waves","Myria-Vagues","Tausend Wellen","Mille Onde","Mil Temblores","サウザンウェーブ","千波激盪"],4,0,10,90,100],
[["Land&#39;s Wrath","Force Chtonienne","Bodengewalt","Forza Tellurica","Fuerza Telúrica","グランドフォース","大地神力"],4,0,10,90,100],
[["Light of Ruin","Lumière du Néant","Lux Calamitatis","Luce Nefasta","Luz Aniquiladora","はめつのひかり","破灭之光"],17,1,5,140,90],
[["Origin Pulse","Onde Originelle","Ursprungswoge","Primopulsar","Pulso Primigenio","こんげんのはどう","根源波动"],10,1,10,110,85],
[["Precipice Blades","Lame Pangéenne","Abgrundsklinge","Spade Telluriche","Filo del Abismo","だんがいのつるぎ","断崖之剑"],4,0,10,120,85],
[["Dragon Ascent","Draco Ascension","Zenitstürmer","Ascesa del Drago","Ascenso Draco","ガリョウテンセイ","画龙点睛"],2,0,5,120,100],
[["Hyperspace Fury","Furie Dimension","Dimensionswahn","Urtodimensionale","Cerco Dimensión","いじげんラッシュ","异次元猛攻"],16,0,5,100,0]
];

const LEARNSET_GAMES=[
	['X'],
	['Y']
];
const LEARNSET_REMAKES=[
	['Omega Ruby',,,,'Rubí Omega',,'欧米伽红宝石'],
	['Alpha Sapphire',,,,'Zafiro Alfa',,'阿尔法蓝宝石']
];
const LEARNSET_GAMES_ID='xy';
const LEARNSET_REMAKES_ID='oras';
const TMs=[,468,337,473,347,46,92,258,339,474,237,241,269,58,59,63,113,182,240,355,219,218,76,479,85,87,89,216,91,94,247,280,104,115,482,53,188,201,126,317,332,259,263,488,156,213,168,490,496,497,315,211,411,412,206,503,374,451,507,510,511,261,512,373,153,421,371,514,416,397,148,444,521,86,360,14,522,244,523,524,157,404,525,611,398,138,447,207,214,369,164,430,433,528,249,555,267,399,612,605,590,290]; //TM101 -> TM94
const HMs=[,15,19,57,70,127,249,291];

/*
	l: levelup
		[moveIndex, level (all), level (oras exclusive)]
	m: machine
	e: egg moves
	t: tutors
	s: special
	-
	r: oras exclusive
*/
var LEARNSETS=[,
{//Bulbasaur
l:[[33,1],[45,3],[73,7],[22,9],[77,13],[79,13],[36,15],[75,19],[230,21],[74,25],[38,27],[388,31],[235,33],[402,37]],
m:[92,474,237,241,113,182,219,218,76,216,104,188,263,156,213,496,497,412,148,14,447,207,214,164,290,249,267,590,15,70],
e:[80,124,130,133,174,202,203,204,267,275,320,345,437,438,580],
t:[520],
tr:[20,173,202,235,282,388,402],
s:[606]
},{//Ivysaur
l:[[33,1],[45,1],[73,1],[45,3],[73,7],[22,9],[77,13],[79,13],[36,15],[75,20],[230,23],[74,28],[38,31],[388,36],[235,39],[76,44]],
m:[92,474,237,241,113,182,219,218,76,216,104,188,263,156,213,496,497,412,148,14,447,207,214,164,249,290,267,590,15,70],
t:[520],
tr:[20,173,202,235,282,388,402]
},{//Venusaur
l:[[22,1],[33,1],[45,1],[73,1],[45,3],[73,7],[22,9],[77,13],[79,13],[36,15],[75,20],[230,23],[74,28],[38,31],[80,32],[388,39],[235,45],[572,50],[76,53]],
m:[46,92,474,237,241,63,113,182,219,218,76,89,216,104,188,263,156,213,496,497,412,416,148,14,523,447,207,214,164,249,290,267,590,15,70],
t:[338,520],
tr:[20,173,200,202,235,282,335,388,402]
},{//Charmander
l:[[10,1],[45,1],[52,7],[108,10],[82,16],[184,19],[424,25],[481,28],[163,34],[53,37],[83,43],[517,46]],
m:[468,337,92,237,241,182,218,216,91,280,104,53,126,317,332,263,488,156,213,496,497,315,374,510,261,421,14,157,207,214,164,249,290,612,590,15,70],
e:[44,68,187,200,232,242,246,251,264,314,349,394,406,407],
t:[519],
tr:[7,9,173,231,257,264,406],
s:[606]
},{//Charmeleon
l:[[10,1],[45,1],[52,1],[52,7],[108,10],[82,17],[184,21],[424,28],[481,32],[163,39],[53,43],[83,50],[517,54]],
m:[468,337,92,237,241,182,218,216,91,280,104,53,126,317,332,263,488,156,213,496,497,315,374,510,261,421,14,157,207,214,164,249,290,612,590,15,70],
t:[519],
tr:[7,9,173,231,257,264,406]
},{//Charizard
l:[[10,1],[45,1],[52,1],[108,1],[257,1],[337,1],[394,1],[403,1],[421,1],[52,7],[108,10],[82,17],[184,21],[424,28],[481,32],[17,36],[163,41],[53,47],[83,56],[517,62],[257,71],[394,77]],
m:[468,337,46,92,237,241,63,182,355,218,76,89,216,91,280,104,53,126,317,332,263,488,156,213,496,497,315,211,411,374,507,510,261,421,416,14,523,157,525,207,214,164,249,290,612,590,15,19,70],
t:[307,519],
tr:[7,9,173,200,231,257,264,366,406],
s:[607]
},{//Squirtle
l:[[33,1],[39,4],[55,7],[110,10],[145,13],[44,16],[229,19],[182,22],[352,25],[401,28],[130,31],[334,34],[240,37],[56,40]],
m:[92,258,237,58,59,182,240,218,216,91,280,104,317,263,156,213,496,503,374,360,207,214,164,249,290,612,590,57,70,127,291],
e:[54,114,175,193,243,252,281,287,300,323,330,362,392,396,406,453],
t:[518],
tr:[8,173,196,231,264,334,352,401,406,428],
s:[606]
},{//Wartortle
l:[[33,1],[39,1],[55,1],[39,4],[55,7],[110,10],[145,13],[44,16],[229,20],[182,24],[352,28],[401,32],[130,36],[334,40],[240,44],[56,48]],
m:[92,258,237,58,59,182,240,218,216,91,280,104,317,263,156,213,496,503,374,360,207,214,164,249,290,612,590,57,70,127,291],
t:[518],
tr:[8,173,196,231,264,334,352,401,406,428]
},{//Blastoise
l:[[33,1],[39,1],[55,1],[110,1],[430,1],[39,4],[55,7],[110,10],[145,13],[44,16],[229,20],[182,24],[352,28],[401,32],[130,39],[334,46],[240,53],[56,60]],
m:[46,92,258,237,58,59,63,182,240,218,479,89,216,91,280,104,317,263,156,213,496,411,503,374,416,360,523,157,525,207,214,164,430,249,290,399,612,590,57,70,127,291],
t:[308,518],
tr:[8,173,196,200,231,264,324,334,352,401,406,428]
},{//Caterpie
l:[[33,1],[81,1],[450,15]],
tr:[173,450,527]
},{//Metapod
l:[[106,1],[106,7]],
tr:[334,450,527]
},{//Butterfree
l:[[93,1],[93,10],[77,12],[78,12],[79,12],[16,16],[48,18],[18,22],[60,24],[318,28],[366,30],[476,34],[219,36],[445,40],[405,42],[483,46]],
m:[92,474,237,241,63,182,240,355,219,218,76,216,94,247,104,332,263,156,213,168,496,412,512,416,148,522,244,611,138,207,214,369,164,290,590],
tr:[173,202,285,324,366,450,527]
},{//Weedle
l:[[40,1],[81,1],[450,15]],
tr:[450,527]
},{//Kakuna
l:[[106,1],[106,7]],
tr:[334,450,527]
},{//Beedrill
l:[[31,1],[31,10],[116,13],[41,16],[99,19],[228,22],[390,25],[42,28],[97,31],[372,34],[398,37],[283,40],[565,45]],
m:[92,474,237,241,63,182,355,218,76,216,280,104,188,332,263,156,213,168,496,206,512,371,416,148,14,522,404,611,398,207,214,369,164,249,290,590,15],
tr:[173,202,282,283,366,450,527,529]
},{//Pidgey
l:[[33,1],[28,5],[16,9],[98,13],[18,17],[239,21],[297,25],[97,29],[17,33],[355,37],[366,41],[119,45],[403,49],[542,53]],
m:[92,237,241,182,240,355,218,216,104,332,263,156,213,168,496,211,207,214,369,164,290,590,19],
e:[185,193,211,228,253,314,403,413,432],
tr:[143,173,253,257,366]
},{//Pidgeotto
l:[[16,1],[28,1],[33,1],[28,5],[16,9],[98,13],[18,17],[239,22],[297,27],[97,32],[17,37],[355,42],[366,47],[119,52],[403,57],[542,62]],
m:[92,237,241,182,240,355,218,216,104,332,263,156,213,168,496,211,207,214,369,164,290,590,19],
tr:[143,173,253,257,366]
},{//Pidgeot
l:[[16,1],[28,1],[33,1],[98,1],[542,1],[28,5],[16,9],[98,13],[18,17],[239,22],[297,27],[97,32],[17,38],[355,44],[366,50],[119,56],[403,62],[542,68]],
m:[92,237,241,63,182,240,355,218,216,104,332,263,156,213,168,496,211,416,207,214,369,164,290,590,19],
tr:[143,173,253,257,366]
},{//Rattata
l:[[33,1],[39,1],[98,4],[116,7],[44,10],[228,13],[158,16],[389,19],[242,22],[372,25],[162,28],[38,31],[283,34]],
m:[92,237,241,269,58,59,182,240,218,85,87,216,91,247,104,263,156,213,168,496,451,514,86,447,207,214,369,164,528,249,290,590,15],
e:[44,68,103,154,172,179,253,279,382,387,515],
tr:[162,173,196,231,253,283,343,351,387,428]
},{//Raticate
l:[[14,1],[33,1],[39,1],[98,1],[116,1],[98,4],[116,7],[44,10],[228,13],[158,16],[389,19],[184,20],[242,24],[372,29],[162,34],[38,39],[283,44]],
m:[46,92,237,241,269,58,59,63,182,240,218,85,87,216,91,247,104,263,156,213,168,496,451,514,416,86,14,447,207,214,369,164,528,249,290,590,15,70],
tr:[162,173,196,231,253,283,343,351,387,428]
},{//Spearow
l:[[45,1],[64,1],[43,5],[31,9],[228,13],[332,17],[119,21],[97,25],[372,29],[355,33],[65,37]],
m:[92,237,241,182,240,355,218,216,104,332,263,156,213,168,496,497,211,206,207,214,369,164,290,590,19],
e:[13,18,98,143,161,184,185,211,253,297,310],
tr:[143,173,253,257,366,529]
},{//Fearow
l:[[31,1],[43,1],[45,1],[64,1],[365,1],[529,1],[43,5],[31,9],[228,13],[332,17],[119,23],[97,29],[372,35],[355,41],[65,47],[529,53]],
m:[92,237,241,63,182,240,355,218,216,104,332,263,156,213,168,496,497,211,206,416,207,214,369,164,290,590,19],
tr:[143,173,253,257,366,529]
},{//Ekans
l:[[35,1],[43,1],[40,4],[44,9],[137,12],[103,17],[51,20],[254,25],[255,25],[256,25],[491,28],[426,33],[380,36],[562,38],[114,41],[489,44],[441,49]],
m:[92,474,237,241,182,240,218,89,216,91,104,482,188,317,259,263,156,213,168,496,371,523,157,611,398,207,214,164,290,399,590,70],
e:[21,50,180,184,228,231,251,289,305,342,389,415],
tr:[20,173,180,202,231,289,380,401,402,441]
},{//Arbok
l:[[35,1],[40,1],[43,1],[44,1],[422,1],[423,1],[424,1],[40,4],[44,9],[137,12],[103,17],[51,20],[242,22],[254,27],[255,27],[256,27],[491,32],[426,39],[380,44],[562,48],[114,51],[489,56],[441,63]],
m:[92,474,237,241,63,182,240,218,89,216,91,104,482,188,317,259,263,156,213,168,496,371,416,523,157,525,611,398,207,214,164,290,399,590,70],
tr:[20,173,180,202,231,289,380,401,402,441]
},{//Pikachu
l:[[39,1],[84,1],[45,5],[589,7],[98,10],[86,13,18],[486,18,13],[104,21,23],[609,23,29],[21,26,37],[209,,26],[85,29,42],[364,34,21],[97,37,45],[435,42,34],[113,45,53],[87,50,58],[528,,50]],
m:[92,237,113,182,240,218,85,87,216,91,280,104,263,156,213,496,497,374,451,148,521,86,447,207,214,164,528,249,290,590,70],
tr:[9,173,231,264,270,282,324,343,351,393,527],
s:[603,606,607],
cr:[309,556,577,604,560]
},{//Raichu
l:[[39,1],[84,1],[85,1],[98,1]],
m:[92,237,63,113,182,240,218,85,87,216,91,280,104,263,156,213,168,496,497,411,374,451,416,148,521,86,447,207,214,164,528,249,290,590,70],
tr:[9,173,231,264,270,282,324,343,351,393,527]
},{//Sandshrew
l:[[10,1],[111,1],[28,3],[40,5],[205,7],[229,9],[129,11,17],[210,14,11],[222,17,14],[154,20],[328,23],[163,26],[91,30],[360,34],[14,38],[201,42],[89,46]],
m:[468,92,237,241,182,219,218,89,216,91,280,104,201,317,332,263,156,213,168,496,374,421,360,14,523,157,404,398,207,214,164,249,290,590,15,70],
e:[68,175,203,229,232,306,341,400,431,498,563],
tr:[162,173,231,264,282,343,414,446]
},{//Sandslash
l:[[10,1],[28,1,3],[40,1,5],[111,1],[28,3],[40,5],[205,7],[229,9],[129,11,17],[210,14,11],[222,17,14],[154,20],[306,22],[328,23,24],[163,26,28],[91,30,33],[360,34,38],[14,38,43],[201,42,48],[89,46,53]],
m:[468,92,237,241,63,182,219,218,89,216,91,280,104,201,317,332,263,156,213,168,496,411,374,421,416,444,360,14,523,157,404,398,207,214,164,249,290,590,15,70],
tr:[162,173,231,264,282,343,414,446]
},{//Nidoran♀
l:[[10,1],[45,1],[39,7],[24,9],[40,13],[154,19],[44,21],[270,25],[390,31],[260,33],[242,37],[445,43],[305,45]],
m:[468,92,474,237,241,58,59,182,240,218,85,87,216,91,104,188,332,263,156,213,168,496,497,421,398,207,214,164,249,290,590,15,70],
e:[36,48,50,68,116,130,203,204,228,231,251,342,498,599],
tr:[162,173,231,270,351,352]
},{//Nidorina
l:[[10,1],[45,1],[39,7],[24,9],[40,13],[154,20],[44,23],[270,28],[390,35],[260,38],[242,43],[445,50],[305,58]],
m:[468,92,474,237,241,58,59,182,240,218,85,87,216,91,104,188,332,263,156,213,168,496,497,421,398,207,214,164,249,290,590,15,70],
tr:[162,173,231,270,351,352]
},{//Nidoqueen
l:[[10,1],[24,1],[39,1],[40,1],[276,1],[498,23],[34,35],[414,43],[276,58]],
m:[468,46,92,474,237,241,269,58,59,63,182,240,218,479,85,87,89,216,91,247,280,104,482,53,188,201,126,317,332,259,263,156,213,168,496,497,411,374,510,511,421,416,444,523,157,525,398,207,214,164,249,290,612,590,15,57,70],
tr:[7,8,9,162,173,196,200,231,253,264,270,276,351,352,401,406,414,446,529]
},{//Nidoran♂
l:[[43,1],[64,1],[116,7],[24,9],[40,13],[31,19],[30,21],[270,25],[390,31],[260,33],[398,37],[445,43],[32,45]],
m:[468,92,474,237,241,58,59,182,240,218,85,87,216,91,104,188,263,156,213,168,496,497,421,398,207,214,164,249,290,590,15,70],
e:[36,48,50,68,93,133,203,231,251,342,389,457,498,599],
tr:[162,173,231,270,351,352,529]
},{//Nidorino
l:[[43,1],[64,1],[116,7],[24,9],[40,13],[31,20],[30,23],[270,28],[390,35],[260,38],[398,43],[445,50],[32,58]],
m:[468,92,474,237,241,58,59,182,240,218,85,87,216,91,104,188,263,156,213,168,496,497,421,398,207,214,164,249,290,590,15,70],
tr:[162,173,231,270,351,352,529]
},{//Nidoking
l:[[24,1],[40,1],[64,1],[116,1],[224,1],[498,23],[37,35],[414,43],[224,58]],
m:[468,46,92,474,237,241,269,58,59,63,182,240,218,479,85,87,89,216,91,247,280,104,482,53,188,201,126,317,259,263,156,213,168,496,497,411,374,510,511,421,416,444,523,157,525,398,207,214,164,249,290,612,590,15,57,70],
tr:[7,8,9,162,173,196,200,231,253,264,270,276,351,352,401,406,414,446,529]
},{//Clefairy
l:[[1,1],[45,1],[227,1],[361,1],[495,1],[574,1],[47,7],[3,10],[111,13],[266,16],[516,19],[358,22],[107,25],[500,28],[118,31],[322,34],[381,37],[34,40],[236,43],[585,46],[356,49],[309,50],[361,55],[495,58]],
m:[473,347,92,237,241,58,59,113,182,240,219,218,76,85,87,216,91,94,247,280,104,115,53,126,263,156,213,496,497,374,451,510,514,148,86,244,138,447,207,214,164,249,290,612,605,590,70],
tr:[7,8,9,173,196,215,231,264,270,271,272,277,278,282,283,289,304,324,340,343,351,352,356,387,409,428,446,472,495]
},{//Clefable
l:[[3,1],[47,1],[107,1],[118,1],[574,1]],
m:[473,347,92,237,241,58,59,63,113,182,240,219,218,76,85,87,216,91,94,247,280,104,115,53,126,263,156,213,496,497,411,374,451,510,514,416,148,86,244,138,447,207,214,164,249,290,612,605,590,70],
tr:[7,8,9,173,196,215,231,264,270,271,272,277,278,282,283,289,304,324,340,343,351,352,356,387,409,428,446,472,495]
},{//Vulpix
l:[[52,1],[39,4],[46,7],[608,9],[98,10],[83,12,15],[109,15,12],[286,18,39],[185,20,23],[481,23,28],[261,26,20],[506,28,26],[371,31,18],[53,34,36],[219,36,34],[326,39,31],[126,42],[288,44],[445,47],[517,50]],
m:[46,92,237,241,182,219,218,216,91,104,53,126,263,488,156,213,496,315,412,510,261,371,244,207,214,164,290,399,590],
e:[50,95,175,180,185,257,290,326,336,384,394,445,506,541],
tr:[173,180,220,231,257,272,343,428,492]
},{//Ninetales
l:[[53,1],[98,1],[109,1],[219,1],[286,1],[417,1]],
m:[473,347,46,92,237,241,63,182,219,218,76,216,91,104,53,126,263,488,156,213,496,315,412,510,261,371,416,244,138,207,214,164,290,399,590],
tr:[173,180,220,231,257,272,343,428,492]
},{//Jigglypuff
l:[[47,1],[111,5,3],[1,7,5],[589,10,8],[50,13,15],[496,17,24],[205,21],[3,25,18],[156,29,32],[34,33,35],[360,37,40],[358,41,28],[102,45,37],[304,48,44],[574,50,11],[38,53,49]],
m:[92,237,241,58,59,113,182,240,219,218,76,85,87,216,91,94,247,280,104,115,53,126,263,156,213,496,497,374,451,510,514,148,86,360,244,138,447,207,214,164,528,290,612,605,590,70],
tr:[7,8,9,173,196,215,220,264,270,272,277,278,282,283,289,304,340,343,351,352,356,387,409,446]
},{//Wigglytuff
l:[[3,1],[38,1],[47,1],[50,1],[111,1],[583,1]],
m:[92,237,241,58,59,63,113,182,240,219,218,76,85,87,216,91,94,247,280,104,115,53,126,263,156,213,496,497,411,374,451,510,514,416,148,86,360,244,138,447,207,214,164,528,290,612,605,590,70],
tr:[7,8,9,173,196,215,220,264,270,272,277,278,282,283,289,304,340,343,351,352,356,387,409,446,478]
},{//Zubat
l:[[141,1],[48,4,5],[310,8,7],[44,12,11],[17,15,13],[109,19,17],[129,23],[314,26,19],[512,30,31],[212,34,29],[305,37,25],[474,,37],[114,41,35],[501,,43],[403,45,41]],
m:[92,474,237,241,269,182,240,355,218,216,247,104,188,332,259,263,156,213,168,496,211,512,371,207,214,369,164,290,590,19],
e:[16,18,95,98,174,185,202,211,228,413,417,428,432,599],
tr:[162,173,202,253,257,289,366,428]
},{//Golbat
l:[[48,1,5],[103,1],[141,1],[310,1,7],[48,4],[310,8],[44,12,11],[17,15,13],[109,19,17],[129,24],[314,28,19],[512,33,35],[212,38,32],[305,42,27],[474,,43],[114,47,40],[501,,51],[403,52,48]],
m:[92,474,237,241,269,63,182,240,355,218,216,247,104,188,332,259,263,156,213,168,496,211,512,371,416,207,214,369,164,290,590,19],
tr:[162,173,202,253,257,289,366,428]
},{//Oddish
l:[[71,1],[230,5],[51,9],[77,13],[78,15,14],[79,17,15],[72,21,19],[381,25,23],[363,29,39],[236,33,27],[92,,35],[202,37,31],[80,41,51],[585,,43],[580,45,47]],
m:[92,474,237,241,182,218,76,216,104,188,263,156,213,496,412,148,14,611,447,207,214,164,290,267,605,590,15],
e:[75,175,204,235,267,275,290,298,321,495],
tr:[173,202,235,380,388,402,495]
},{//Gloom
l:[[51,1,9],[71,1],[230,1,5],[230,5],[51,9],[77,13],[78,15,14],[79,17,15],[72,23,19],[381,29,24],[363,35,44],[92,,39],[236,41,29],[202,47,34],[572,50,49],[80,53,59],[580,56,54]],
m:[92,474,237,241,182,218,76,216,104,188,263,156,213,496,412,374,148,14,611,447,207,214,164,290,267,605,590,15],
tr:[173,202,235,380,388,402,409,495]
},{//Vileplume
l:[[72,1],[77,1],[78,1],[312,1],[572,50,49],[80,53,59],[76,65,64]],
m:[92,474,237,241,63,182,219,218,76,216,104,188,263,156,213,496,412,374,416,148,14,611,447,207,214,164,290,267,605,590,15],
tr:[173,202,235,380,388,402,409,495]
},{//Paras
l:[[10,1],[77,6],[78,6],[141,11],[210,17],[147,22],[163,27],[74,33],[202,38],[312,43],[476,49],[404,54]],
m:[468,92,474,237,241,113,182,218,76,216,91,280,104,188,332,263,156,213,168,496,412,206,148,14,522,404,447,207,214,164,249,290,267,590,15],
e:[60,68,73,97,103,175,203,228,230,232,363,440,450,469,563,565],
tr:[173,202,235,282,388,402,450,495]
},{//Parasect
l:[[10,1],[77,1],[78,1],[141,1],[440,1],[77,6],[78,6],[141,11],[210,17],[147,22],[163,29],[74,37],[202,44],[312,51],[476,59],[404,66]],
m:[468,92,474,237,241,63,113,182,218,76,216,91,280,104,188,332,263,156,213,168,496,412,206,416,148,14,522,404,447,207,214,164,249,290,267,590,15],
tr:[173,202,235,282,388,402,450,495]
},{//Venonat
l:[[33,1],[50,1],[193,1],[48,5],[93,11],[77,13],[141,17],[78,23],[60,25],[79,29],[324,35],[428,37],[305,41],[94,47]],
m:[92,474,237,241,182,218,76,216,94,104,188,263,156,213,168,496,148,522,611,207,214,164,290,590],
e:[97,103,202,226,234,285,290,324,390,450,476],
tr:[173,202,285,324,428,450]
},{//Venomoth
l:[[33,1],[48,1],[50,1],[193,1],[318,1],[405,1],[483,1],[48,5],[93,11],[77,13],[141,17],[78,23],[60,25],[79,29],[16,31],[324,37],[428,41],[305,47],[94,55],[405,59],[483,63]],
m:[92,474,237,241,63,182,355,218,76,216,94,104,188,332,263,156,213,168,496,412,512,416,148,522,611,207,214,369,164,290,590],
tr:[173,202,285,324,366,428,450]
},{//Diglett
l:[[10,1],[28,1],[45,4],[310,7],[189,12],[222,15],[523,18],[389,23],[426,26],[414,29],[91,34],[163,37],[89,40],[90,45]],
m:[468,92,237,241,182,218,89,216,91,104,188,201,317,332,263,156,213,168,496,497,421,523,157,207,214,164,249,290,590,15],
e:[29,103,179,185,203,228,246,251,253,262,310,426,515],
tr:[173,414,446]
},{//Dugtrio
l:[[10,1],[28,1],[45,1],[161,1],[400,1],[563,1],[45,4],[310,7],[189,12],[222,15],[523,18],[389,23],[328,26],[426,28],[414,33],[91,40],[163,45],[89,50],[90,57]],
m:[468,92,237,241,63,182,218,89,216,91,104,482,188,201,317,332,263,156,213,168,496,497,421,416,444,523,157,207,214,164,249,290,590,15],
tr:[173,414,446]
},{//Meowth
l:[[10,1],[45,1],[44,6],[252,9],[154,14],[103,17],[185,22],[269,25],[6,30],[163,33],[417,38],[372,41],[445,46],[400,49],[364,50]],
m:[468,92,237,241,269,182,240,218,85,87,216,91,247,104,332,259,263,156,213,168,496,497,421,371,514,148,244,138,207,214,369,164,290,399,590,15],
e:[39,95,133,175,180,204,231,274,289,316,386,387,492],
tr:[173,180,196,231,253,282,289,304,343,351,352,387,402,441,492],
s:[603]
},{//Persian
l:[[10,1],[44,1],[45,1],[252,1],[415,1],[583,1],[44,6],[252,9],[154,14],[103,17],[185,22],[269,25],[129,28],[408,32],[163,37],[417,44],[372,49],[445,56],[400,61],[364,65]],
m:[468,46,92,237,241,269,63,182,240,218,85,87,216,91,247,104,332,259,263,156,213,168,496,497,373,421,371,514,416,148,244,138,207,214,369,164,290,399,590,15],
tr:[173,180,196,231,253,282,289,304,343,351,352,387,402,441,492]
},{//Psyduck
l:[[10,1],[346,1],[39,4],[55,8],[50,11,22],[93,15,11],[352,18],[154,22,15],[103,25],[428,29,32],[401,32,29],[487,36],[244,39],[133,43],[56,46],[472,50]],
m:[468,473,347,92,258,237,58,59,113,182,240,218,216,91,94,280,104,332,263,156,213,496,503,374,421,148,244,207,214,164,249,290,612,590,57,70,127,291],
e:[60,95,109,193,214,227,238,248,281,287,290,426,485,493,499],
tr:[8,173,196,231,264,272,324,352,388,401,428,472]
},{//Golduck
l:[[10,1],[39,1,4],[55,1,8],[346,1],[453,1],[39,4],[55,8],[50,11,22],[93,15,11],[352,18],[154,22,15],[103,25,29],[428,29,25],[401,32],[487,38],[244,43],[133,49],[56,54],[472,60]],
m:[468,473,347,92,258,237,58,59,63,113,182,240,218,216,91,94,280,104,332,263,156,213,490,496,411,503,374,421,416,148,244,207,214,164,249,290,612,590,57,70,127,291],
tr:[8,67,173,196,231,264,272,324,352,388,401,428,472]
},{//Mankey
l:[[10,1],[43,1],[67,1],[116,1],[343,1],[154,9],[2,13],[69,17],[103,21],[372,25],[207,33],[238,37],[37,41],[386,45],[370,49],[515,53]],
m:[468,92,339,237,241,269,182,240,218,479,85,87,89,216,91,280,104,317,332,263,156,213,168,490,496,315,411,374,512,371,514,523,157,398,207,214,369,164,249,290,612,590,70],
e:[68,96,179,193,214,227,251,264,265,279,370,400],
tr:[7,8,9,67,173,180,200,231,253,264,270,272,283,343,402,441,530]
},{//Primeape
l:[[10,1],[43,1],[67,1],[116,1],[374,1],[515,1],[154,9],[2,13],[69,17],[103,21],[372,25],[99,28],[207,35],[238,41],[37,47],[386,53],[370,59],[515,63]],
m:[468,92,339,237,241,269,63,182,240,218,479,85,87,89,216,91,280,104,317,332,263,156,213,168,490,496,315,411,374,512,371,514,416,444,523,157,398,207,214,369,164,249,290,612,590,70],
tr:[7,8,9,67,173,180,200,231,253,264,270,272,283,343,402,441,530]
},{//Growlithe
l:[[44,1],[46,1],[52,6],[43,8],[316,10],[270,12],[172,17],[179,19],[424,21],[36,23],[481,28],[97,30],[514,32],[53,34],[242,39],[257,41],[200,43],[394,45]],
m:[46,92,237,241,182,219,218,216,91,104,53,126,332,263,488,156,213,168,496,315,510,261,514,207,214,164,528,249,290,555,590,70],
e:[24,34,37,38,83,231,234,242,257,336,343,370,394],
tr:[173,200,231,257,270,343]
},{//Arcanine
l:[[44,1],[46,1],[316,1],[422,1],[424,1],[245,34]],
m:[46,92,237,241,63,182,219,218,76,216,91,104,53,126,332,263,488,156,213,168,496,315,510,261,514,416,523,207,214,164,528,249,290,555,590,70],
tr:[173,200,231,257,270,343,406,442]
},{//Poliwag
l:[[346,1],[55,5],[95,8],[145,11],[3,15],[240,18],[34,21],[61,25],[341,28],[187,31],[358,35],[56,38],[426,41]],
m:[92,258,237,58,59,182,240,218,216,91,94,104,263,156,213,168,496,503,207,214,164,290,590,57,127,291],
e:[54,61,114,150,170,203,227,283,287,301,341,346,352],
tr:[173,196,270,283,352]
},{//Poliwhirl
l:[[55,1],[95,1],[346,1],[55,5],[95,8],[145,11],[3,15],[240,18],[34,21],[61,27],[341,32],[187,37],[358,43],[56,48],[426,53]],
m:[92,258,237,58,59,182,240,218,89,216,91,94,280,104,263,156,213,168,496,503,374,523,207,214,164,249,290,612,590,57,70,127,291],
tr:[8,173,196,264,270,283,352]
},{//Poliwrath
l:[[3,1],[61,1],[66,1],[95,1],[509,1],[223,32],[170,43],[509,53]],
m:[92,258,339,237,58,59,63,182,240,218,89,216,91,94,280,104,317,263,156,213,168,490,496,411,503,374,371,416,523,157,398,207,214,164,249,290,612,590,57,70,127,291],
tr:[8,173,196,264,270,283,352]
},{//Abra
l:[[100,1]],
m:[473,347,92,237,241,269,113,182,240,219,218,216,94,247,104,115,259,263,156,213,168,496,412,374,451,373,148,86,244,138,447,207,214,164,433,290,605,590],
e:[7,8,9,112,227,282,285,375,379,385,470,502],
tr:[7,8,9,173,231,264,271,272,277,278,282,285,289,324,351,356,409,428,472,478,492]
},{//Kadabra
l:[[93,1,16],[100,1],[134,1],[93,16],[50,18],[357,22,23],[502,24,36],[60,28,21],[115,30,26],[477,34,33],[105,36,31],[427,40,28],[272,42,41],[94,46,38],[248,48,43],[271,50,46]],
m:[473,347,92,237,241,269,113,182,240,219,218,216,94,247,104,115,259,263,156,213,168,496,412,374,451,373,148,86,244,138,447,207,214,164,433,290,605,590],
tr:[7,8,9,173,231,264,271,272,277,278,282,285,289,324,351,356,409,428,472,478,492]
},{//Alakazam
l:[[93,1,16],[100,1],[134,1],[93,16],[50,18],[357,22,23],[502,24,36],[60,28,21],[115,30,26],[477,34,33],[105,36,31],[427,40,28],[347,42,41],[94,46,38],[248,48,43],[271,50,46]],
m:[473,347,92,237,241,269,63,113,182,240,219,218,216,94,247,104,115,259,263,156,213,168,496,411,412,374,451,373,416,148,86,244,138,447,207,214,164,433,290,605,590],
tr:[7,8,9,173,231,264,271,272,277,278,282,285,289,324,351,356,409,428,472,478,492]
},{//Machop
l:[[43,1],[67,1],[116,7,3],[2,10,7],[490,13],[193,19,9],[282,,21],[69,22,15],[279,25,19],[233,31,25],[530,,31],[66,34,33],[358,37,27],[339,,37],[238,43,39],[184,46,43],[223,49,45]],
m:[92,339,237,241,113,182,240,218,479,89,216,91,280,104,53,126,317,263,156,213,168,490,496,411,374,510,371,514,523,157,398,207,214,164,249,290,612,590,70],
e:[7,8,9,27,68,96,227,265,282,321,370,379,418,484,501],
tr:[7,8,9,67,173,264,270,272,276,282,530]
},{//Machoke
l:[[2,1,7],[43,1],[67,1],[116,1,3],[116,7],[2,10],[490,13],[193,19,9],[282,,21],[69,22,15],[279,25,19],[233,32,25],[530,,33],[66,36,37],[358,40,27],[339,,43],[238,44,47],[184,51,53],[223,55,57]],
m:[92,339,237,241,113,182,240,218,479,89,216,91,280,104,53,126,317,263,156,213,168,490,496,411,374,510,371,514,523,157,398,207,214,164,249,290,612,590,70],
tr:[7,8,9,67,173,264,270,272,276,282,530]
},{//Machamp
l:[[2,1,7],[43,1],[67,1],[116,1,3],[469,1],[116,7],[2,10],[490,13],[193,19,9],[282,,21],[69,22,15],[279,25,19],[233,32,25],[530,,33],[66,36,37],[358,40,27],[339,,43],[238,44,47],[184,51,53],[223,55,57]],
m:[92,339,237,241,63,113,182,240,218,479,89,216,91,280,104,53,126,317,263,156,213,168,490,496,411,374,510,371,514,416,444,523,157,398,207,214,164,249,290,612,590,70],
tr:[7,8,9,67,173,264,270,272,276,282,530]
},{//Bellsprout
l:[[22,1],[74,7],[35,11],[79,13],[77,15],[78,17],[51,23],[282,27],[230,29],[380,35],[75,39],[21,41],[378,47]],
m:[92,474,237,241,182,218,76,216,104,115,188,263,156,213,168,496,412,148,14,611,447,207,214,164,290,267,590,15],
e:[141,202,227,235,275,311,321,331,345,363,388,438,491,499,562],
tr:[20,173,202,235,282,380,388,402]
},{//Weepinbell
l:[[22,1],[35,1],[74,1],[74,7],[35,11],[79,13],[77,15],[78,17],[51,23],[282,27],[230,29],[380,35],[75,39],[21,41],[378,47]],
m:[92,474,237,241,182,218,76,216,104,115,188,263,156,213,168,496,412,148,14,611,447,207,214,164,290,267,590,15],
tr:[20,173,202,235,282,380,388,402]
},{//Victreebel
l:[[22,1],[75,1],[79,1],[230,1],[254,1],[255,1],[256,1],[536,27],[348,47],[437,47]],
m:[92,474,237,241,63,182,218,76,216,104,115,188,263,156,213,168,496,412,416,148,14,611,447,207,214,164,290,267,590,15],
tr:[20,173,202,235,282,380,388,402]
},{//Tentacool
l:[[40,1],[48,5,4],[132,8,7],[51,12,10],[390,15,13],[61,19,25],[35,22,19],[491,26,22],[112,29,28],[352,33,16],[362,,34],[398,36,31],[103,40,37],[506,43,40],[56,47,46],[482,50,43],[378,54,49]],
m:[92,258,474,237,58,59,182,240,219,218,216,104,482,188,263,156,213,168,496,503,371,14,611,398,207,214,164,290,605,590,15,57,127,291],
e:[62,109,114,145,229,243,282,321,330,367,392],
tr:[20,173,196,202,277,282,352]
},{//Tentacruel
l:[[40,1],[48,1,4],[132,1,7],[378,1,56],[513,1],[48,5],[132,8],[51,12,10],[390,15,13],[61,19,25],[35,22,19],[491,26,22],[112,29,28],[352,34,16],[362,,36],[398,38,32],[103,43,40],[506,47,44],[56,52],[482,56,48],[378,61]],
m:[92,258,474,237,58,59,63,182,240,219,218,216,104,482,188,263,156,213,168,496,503,371,416,14,611,398,207,214,164,290,605,590,15,57,127,291],
tr:[20,173,196,202,277,282,352]
},{//Geodude
l:[[33,1],[111,1],[300,4],[397,8,6],[205,11,10],[222,15,12],[88,18,16],[350,22,30],[479,25,18],[120,29,24],[523,32,22],[446,36,28],[89,39,34],[153,43,36],[38,46,40],[444,50,42]],
m:[92,237,241,182,218,479,89,216,91,280,104,53,201,126,317,263,156,213,496,374,510,153,397,444,360,523,157,207,214,164,249,290,267,612,590,70],
e:[5,174,175,203,264,335,359,431,469,475],
tr:[7,9,173,264,276,334,335,414,446]
},{//Graveler
l:[[33,1],[111,1],[300,1,4],[397,1,6],[300,4],[397,8],[205,11,10],[222,15,12],[88,18,16],[350,22,34],[479,27,18],[120,31,24],[523,36,22],[446,42,30],[89,47,40],[153,53,44],[38,58,50],[444,64,54]],
m:[92,237,241,182,218,479,89,216,91,280,104,53,201,126,317,263,156,213,496,374,510,153,397,444,360,523,157,207,214,164,249,290,267,612,590,70],
tr:[7,9,173,264,276,334,335,414,446]
},{//Golem
l:[[33,1],[111,1],[300,1,4],[397,1,6],[484,1,60],[300,4],[397,8],[537,11,10],[222,15,12],[88,18,16],[350,22,34],[479,27,18],[120,31,24],[523,36,22],[446,42,30],[89,47,40],[153,53,44],[38,58,50],[444,64,54],[484,69]],
m:[46,92,237,241,63,182,218,479,89,216,91,280,104,53,201,126,317,263,156,213,496,411,374,510,153,416,397,444,360,523,157,207,214,164,249,290,267,612,590,70],
tr:[7,9,173,264,276,334,335,414,442,446]
},{//Ponyta
l:[[33,1],[45,1],[39,4],[52,9],[172,13],[23,17],[488,21],[83,25],[36,29],[517,33],[97,37],[126,41],[340,45],[394,49]],
m:[92,237,241,182,218,76,216,104,53,126,263,488,156,213,496,497,315,510,261,207,214,164,528,290,590,70],
e:[24,32,37,38,67,95,172,204,234,445,502],
tr:[67,173,231,257,340]
},{//Rapidash
l:[[39,1],[45,1],[52,1],[98,1],[224,1],[398,1],[39,4],[52,9],[172,13],[23,17],[488,21],[83,25],[36,29],[517,33],[97,37],[31,40],[126,41],[340,45],[394,49]],
m:[92,237,241,63,182,218,76,216,104,53,126,263,488,156,213,496,497,315,510,261,416,398,207,214,164,528,290,590,70],
tr:[67,173,231,257,340,529]
},{//Slowpoke
l:[[33,1],[174,1],[281,1],[45,5],[55,9],[93,14],[50,19],[29,23],[352,28],[428,32],[303,36],[133,41],[94,45],[240,49],[244,54],[505,58]],
m:[473,347,92,258,237,241,58,59,113,182,240,219,218,89,216,91,94,247,104,53,126,263,156,213,496,497,503,510,148,86,244,523,138,447,207,214,164,433,290,590,57,70,291],
e:[23,173,187,214,248,300,335,382,428,472,562],
tr:[173,196,231,271,277,278,285,324,335,352,401,428,472,495]
},{//Slowbro
l:[[33,1],[45,1],[174,1],[281,1],[505,1],[45,5],[55,9],[93,14],[50,19],[29,23],[352,28],[428,32],[303,36],[110,37],[133,43],[94,49],[240,55],[244,62],[505,68]],
m:[473,347,92,258,237,241,58,59,63,113,182,240,219,218,89,216,91,94,247,280,104,53,126,332,263,156,213,496,497,411,503,374,510,416,148,86,244,523,138,447,207,214,164,433,249,290,590,57,70,291],
tr:[8,173,196,231,264,271,277,278,285,324,334,335,352,401,409,428,472,492,495]
},{//Magnemite
l:[[33,1],[48,4,5],[84,7],[49,11],[86,15,13],[443,18,17],[209,21,19],[429,25,23],[319,29,25],[486,32,29],[430,35,31],[103,39,35],[435,43,37],[199,46,41],[393,49,43],[360,53,47],[192,57,49]],
m:[92,237,241,113,182,240,218,85,87,216,104,115,263,156,496,451,153,148,521,86,360,244,207,214,164,430,528,290,590],
tr:[173,277,278,324,334,351,356,393,527]
},{//Magneton
l:[[33,1],[48,1,5],[49,1,11],[84,1,7],[161,1,30],[192,1,63],[48,4],[84,7],[604,11,1],[86,15,13],[443,18,17],[209,21,19],[429,25,23],[319,29,25],[486,34,29],[430,39,33],[103,45,39],[435,51,43],[199,56,49],[393,62,53],[360,67,59],[192,73]],
m:[92,237,241,63,113,182,240,218,85,87,216,104,115,263,156,496,451,153,416,148,521,86,360,244,207,214,164,430,528,290,590],
tr:[173,277,278,324,334,351,356,393,527]
},{//Farfetch'd
l:[[28,1],[43,1],[64,1],[210,1],[398,1],[413,1],[31,7],[332,9],[282,13],[163,19],[314,21],[14,25],[97,31],[400,33],[512,37],[364,43],[206,45],[403,49],[413,55]],
m:[92,237,241,182,355,218,216,104,332,263,156,213,168,496,211,206,512,514,14,244,398,207,214,369,164,290,590,15,19],
e:[16,98,119,174,175,189,193,211,279,297,343,348,355,376,400,493],
tr:[143,173,231,253,257,270,282,343,366,387]
},{//Doduo
l:[[45,1],[64,1],[98,5],[99,10,9],[31,14,13],[228,19,17],[365,,21],[253,23,41],[367,28,29],[458,32,25],[97,37,33],[65,41,37],[283,46,45],[37,50,49]],
m:[92,237,241,182,355,218,216,104,332,263,156,213,168,496,497,211,207,214,164,290,590,19],
e:[48,98,114,119,175,185,283,363,372,413],
tr:[173,253,282,283]
},{//Dodrio
l:[[45,1],[64,1],[98,1,5],[99,1,9],[365,1,21],[98,5],[99,10],[31,14,13],[228,19,17],[253,23,47],[367,28,29],[161,34,25],[97,41,35],[65,47,41],[283,54,53],[37,60,59]],
m:[92,237,241,269,63,182,355,218,216,104,332,259,263,156,213,168,496,497,211,371,416,207,214,164,290,590,19],
tr:[143,173,253,282,283]
},{//Seel
l:[[29,1],[45,3],[346,7],[196,11],[227,13],[420,17],[156,21],[392,23],[62,27],[453,31],[362,33],[36,37],[291,41],[401,43],[58,47],[219,51],[258,53]],
m:[92,258,237,58,59,182,240,219,218,216,104,263,156,213,168,496,497,374,207,214,164,290,590,57,127,291],
e:[21,32,50,122,195,214,227,231,252,254,255,256,324,333,352,494,562],
tr:[173,196,231,324,352,401,529]
},{//Dewgong
l:[[29,1],[45,1],[196,1],[324,1],[45,3],[324,7],[196,11],[227,13],[420,17],[156,21],[392,23],[62,27],[453,31],[362,33],[329,34],[36,39],[291,45],[401,49],[58,55],[219,61],[258,65]],
m:[92,258,237,58,59,63,182,240,219,218,216,104,263,156,213,168,496,497,374,416,524,207,214,164,290,590,57,127,291],
tr:[173,196,231,324,352,401,529]
},{//Grimer
l:[[1,1],[139,1],[106,4],[189,7],[50,12],[124,15],[107,18,21],[426,21,18],[188,26,29],[374,29,26],[103,32,37],[482,37,32],[151,40,43],[441,43,40],[562,46],[262,48]],
m:[92,474,237,241,269,182,240,218,85,87,216,91,247,104,482,53,188,126,317,259,263,156,213,168,496,374,510,153,371,157,611,398,207,214,164,290,612,590,70],
e:[114,122,174,184,212,254,255,256,286,325,425,491],
tr:[7,8,9,173,202,220,351,441]
},{//Muk
l:[[1,1],[106,1,4],[139,1],[189,1,7],[106,4],[189,7],[50,12],[124,15],[107,18,21],[426,21,18],[188,26,29],[374,29,26],[103,32,37],[482,37,32],[599,,38],[151,43,46],[441,49,40],[562,53,52],[262,57]],
m:[92,474,237,241,269,63,182,240,218,85,87,216,91,247,280,104,482,53,188,126,317,259,263,156,213,168,496,411,374,510,153,371,416,157,611,398,207,214,164,249,290,399,612,590,70],
tr:[7,8,9,173,202,220,264,335,351,441]
},{//Shellder
l:[[33,1],[110,4],[48,8],[333,13],[182,16],[43,20],[128,25],[420,28],[534,32],[62,37],[250,40],[362,44],[334,49],[58,52],[504,56],[56,61]],
m:[92,258,237,58,59,182,240,218,216,104,263,156,213,496,153,371,207,214,164,290,590,57,291],
e:[36,41,61,103,112,229,333,341,350,352,392,419],
tr:[173,196,334,352]
},{//Cloyster
l:[[48,1],[56,1],[62,1],[110,1],[182,1],[390,1],[504,1],[131,13],[191,28],[556,50]],
m:[92,258,237,58,59,63,182,240,218,216,104,259,263,156,213,496,153,371,416,524,398,207,214,164,290,590,57,291],
tr:[173,196,324,334,352]
},{//Gastly
l:[[95,1],[122,1],[180,5],[212,8],[174,12],[101,15],[109,19],[389,22],[371,26],[247,29],[138,33],[399,36],[194,40],[506,43],[171,47]],
m:[92,474,237,241,269,182,240,218,85,216,94,247,104,188,259,263,156,213,168,496,412,261,373,153,371,244,611,138,207,214,164,433,290,399,605,590],
e:[7,8,9,50,114,123,149,184,195,288,310,499,513],
tr:[7,8,9,173,180,196,202,220,253,271,282,285,289,472,492]
},{//Haunter
l:[[95,1],[122,1],[180,1],[180,5],[212,8],[174,12],[101,15],[109,19],[389,22],[325,25],[371,28],[247,33],[138,39],[399,44],[194,50],[506,55],[171,61]],
m:[92,474,237,241,269,182,240,218,85,216,94,247,104,188,259,263,156,213,168,496,412,374,261,373,153,421,371,244,611,398,138,207,214,164,433,290,399,605,590],
tr:[7,8,9,173,180,196,202,220,253,271,282,285,289,472,492]
},{//Gengar
l:[[95,1],[122,1],[180,1],[180,5],[212,8],[174,12],[101,15],[109,19],[389,22],[325,25],[371,28],[247,33],[138,39],[399,44],[194,50],[506,55],[171,61]],
m:[92,474,237,241,269,63,182,240,218,85,87,216,94,247,280,104,188,259,263,156,213,168,496,411,412,374,261,373,153,421,371,416,244,611,398,138,207,214,164,433,249,290,399,612,605,590,70],
tr:[7,8,9,173,180,196,202,220,253,264,271,272,282,285,289,409,472,492]
},{//Onix
l:[[20,1],[33,1],[106,1],[300,1],[174,4],[88,7],[317,10],[99,13],[446,16],[397,19],[360,20],[479,22],[225,25],[21,28],[103,31],[157,34],[328,37],[231,40],[91,43],[444,46],[38,49],[201,52]],
m:[46,92,237,241,269,182,218,479,89,216,91,104,201,317,259,263,156,213,496,153,371,397,444,360,244,523,157,525,207,214,164,430,249,290,267,590,70],
e:[111,175,205,335,350,431,446,484,563],
tr:[20,173,231,335,406,414,442,446]
},{//Drowzee
l:[[1,1],[95,1],[50,5],[93,9],[29,13],[139,17],[96,21],[60,25],[29,29],[244,33],[485,37],[428,41],[207,45],[94,49],[417,53],[473,57],[248,61]],
m:[473,347,92,237,241,269,113,182,240,219,218,216,94,247,280,104,115,259,263,156,213,168,490,496,374,148,86,244,138,447,207,214,164,433,290,612,605,590],
e:[7,8,9,112,260,272,274,285,290,385,417,427],
tr:[7,8,9,67,173,264,271,272,277,278,285,289,324,409,428,478,492]
},{//Hypno
l:[[1,1],[50,1],[93,1],[95,1],[171,1],[248,1],[415,1],[417,1],[50,5],[93,9],[29,13],[139,17],[96,21],[60,25],[29,29],[244,33],[485,37],[428,41],[207,45],[94,49],[417,53],[473,57],[248,61]],
m:[473,347,92,237,241,269,63,113,182,240,219,218,216,94,247,280,104,115,259,263,156,213,168,490,496,411,374,416,148,86,244,138,447,207,214,164,433,290,612,605,590],
tr:[7,8,9,67,173,264,271,272,277,278,285,289,324,409,428,478,492]
},{//Krabby
l:[[145,1],[300,1],[11,5],[43,9],[106,11],[61,15],[341,19],[232,21],[23,25],[182,29],[12,31],[21,35],[362,39],[152,41],[175,45]],
m:[468,92,258,237,58,59,182,240,218,216,91,280,104,317,263,156,213,168,496,206,503,374,14,157,404,207,214,164,249,290,590,15,57,70,291],
e:[21,97,114,117,133,175,203,246,282,321,498,502],
tr:[173,196,276,282,334,352]
},{//Kingler
l:[[11,1],[43,1],[145,1],[300,1],[469,1],[11,5],[43,9],[106,11],[61,15],[341,19],[232,21],[23,25],[182,32],[12,37],[21,44],[362,51],[152,56],[175,63]],
m:[468,92,258,237,58,59,63,182,240,218,216,91,280,104,317,263,156,213,168,496,206,503,374,511,416,14,157,404,207,214,164,249,290,590,15,57,70,291],
tr:[173,196,276,282,334,352]
},{//Voltorb
l:[[268,1],[33,5,1],[49,8,4],[598,10,6],[209,12,9],[205,15,11],[103,19,13],[451,22,16],[113,26,29],[486,29,22],[120,33,26],[129,36,20],[435,,37],[393,40,34],[360,43,46],[153,47,41],[243,50,48]],
m:[92,237,269,113,182,240,218,85,87,216,104,259,263,156,168,496,451,153,148,521,86,360,207,214,164,528,290,590],
tr:[173,277,324,351,393,492]
},{//Electrode
l:[[33,1],[49,1,4],[209,1,9],[268,1],[602,1],[33,5],[598,8,6],[209,12],[205,15,11],[103,19,13],[451,22,16],[113,26,29],[486,29,22],[120,35,26],[129,40,20],[435,,41],[393,46,36],[360,51,54],[153,57,47],[243,62,58]],
m:[92,237,269,63,113,182,240,218,85,87,216,104,259,263,156,168,496,451,153,416,148,521,86,360,207,214,164,528,290,590],
tr:[173,277,324,351,393,492]
},{//Exeggcute
l:[[95,1],[140,1],[253,1],[115,7],[73,11],[331,17],[78,19],[77,21],[79,23],[93,27],[388,33],[363,37],[76,43],[326,47],[516,50]],
m:[92,237,241,113,182,218,76,216,94,104,115,188,263,156,213,168,496,412,153,148,14,244,611,138,447,207,214,164,433,290,267,590,70],
e:[174,202,235,236,246,267,275,285,335,363,381,384,437,580],
tr:[173,202,235,253,285,335,356,388,402]
},{//Exeggutor
l:[[23,1],[93,1],[95,1],[140,1],[402,1],[473,17],[121,27],[452,37],[437,47]],
m:[473,92,237,241,63,113,182,218,76,216,94,104,115,188,263,156,213,168,496,412,153,416,148,14,244,611,138,447,207,214,164,433,290,267,590,70],
tr:[67,173,202,235,285,335,356,388,402,428]
},{//Cubone
l:[[45,1],[39,3],[125,7],[29,11],[43,13],[116,17],[155,21],[99,23],[206,27],[37,31],[374,33],[198,37],[283,41],[38,43],[514,47]],
m:[92,237,241,58,59,182,218,479,89,216,91,280,104,53,201,126,317,332,263,156,213,168,496,497,206,374,510,514,14,523,157,207,214,164,249,290,612,590,70],
e:[24,103,130,187,195,197,203,246,442,498],
tr:[7,9,67,173,196,231,253,264,282,283,334,414,442,446]
},{//Marowak
l:[[29,1],[39,1],[45,1],[125,1],[39,3],[125,7],[29,11],[43,13],[116,17],[155,21],[99,23],[206,27],[37,33],[374,37],[198,43],[283,49],[38,53],[514,59]],
m:[92,237,241,58,59,63,182,218,479,89,216,91,280,104,53,201,126,317,332,263,156,213,168,496,497,411,206,374,510,514,416,444,14,523,157,207,214,164,249,290,612,590,70],
tr:[7,9,67,173,196,200,231,253,264,282,283,334,414,442,446]
},{//Hitmonlee
l:[[24,1],[25,1],[179,1],[279,1],[370,1],[96,5],[27,9],[26,13],[280,17],[116,21],[364,25],[136,29],[170,33],[193,37],[469,41],[299,45],[203,49],[25,53],[370,57],[179,61]],
m:[92,339,237,241,182,240,218,89,216,280,104,317,263,156,213,168,490,496,411,374,514,444,523,157,398,207,214,164,249,290,612,590,70],
tr:[67,173,264,270,272,276,282,340,343]
},{//Hitmonchan
l:[[4,1],[68,1],[264,1],[279,1],[370,1],[97,6],[228,11],[183,16],[418,16],[364,21],[410,26],[501,31],[7,36],[8,36],[9,36],[327,41],[5,46],[197,50],[264,56],[68,61],[370,66]],
m:[92,339,237,241,182,240,218,89,216,280,104,317,263,156,213,168,490,496,411,374,514,444,523,157,207,214,164,249,290,612,590,70],
tr:[7,8,9,67,173,264,270,272,343,409]
},{//Lickitung
l:[[122,1],[48,5],[111,9],[282,13],[35,17],[23,21],[50,25],[21,29],[205,33],[498,37],[382,41],[287,45],[103,49],[438,53],[378,57]],
m:[92,237,241,58,59,63,182,240,218,76,85,87,89,216,91,247,280,104,53,201,126,317,263,156,213,168,496,374,510,514,416,14,244,523,157,525,138,207,214,164,249,290,612,590,15,57,70],
e:[34,133,173,174,187,214,222,265,330,359,428,562],
tr:[7,8,9,20,173,196,231,264,282,351,352,401,428]
},{//Koffing
l:[[33,1],[139,1],[123,4],[108,7],[372,12],[499,15],[124,18],[120,23],[114,26],[360,29],[188,34],[153,37],[194,40],[562,42],[262,45]],
m:[92,474,237,241,269,182,240,218,85,87,216,247,104,53,188,126,259,263,156,213,168,496,510,261,153,371,148,360,611,207,214,164,290,399,590],
e:[60,103,149,174,180,194,220,254,255,256,288,390],
tr:[173,180,220,253,351]
},{//Weezing
l:[[33,1],[108,1,7],[123,1,4],[139,1],[123,4],[108,7],[372,12],[499,15],[124,18],[120,23],[114,26],[458,29],[188,34],[153,40],[194,46],[562,50,51],[262,54,57]],
m:[92,474,237,241,269,63,182,240,218,85,87,216,247,104,53,188,126,259,263,156,213,168,496,510,261,153,371,416,148,360,611,207,214,164,290,399,590],
tr:[173,180,220,253,351]
},{//Rhyhorn
l:[[30,1],[39,1],[23,8,17],[31,12,5],[479,,13],[184,19,9],[350,23,29],[523,30,21],[498,34,25],[36,41,37],[529,45,33],[444,52,41],[89,56,45],[32,63,53],[224,67,49]],
m:[46,92,237,241,58,59,182,240,218,85,87,89,216,91,104,53,201,126,317,263,156,213,168,496,510,371,397,444,14,523,157,398,207,214,164,249,290,590,70],
mr:[479],
e:[68,130,174,179,222,231,242,306,368,407,422,423,424,431,470,563],
tr:[173,180,196,231,253,276,283,351,401,406,414,446,529]
},{//Rhydon
l:[[23,1,17],[30,1],[31,1,5],[32,1,62],[39,1],[224,1,55],[23,9],[31,12],[479,,13],[184,19,9],[350,23,29],[523,30,21],[498,34,25],[36,41,37],[359,42],[529,47,33],[444,56,41],[89,62,48],[32,71],[224,77]],
m:[46,92,237,241,58,59,63,182,240,218,479,85,87,89,216,91,280,104,53,201,126,317,263,156,213,168,496,411,374,510,421,371,416,397,444,14,523,157,525,398,207,214,164,249,290,612,590,15,57,70],
tr:[7,8,9,173,180,196,200,231,253,264,276,283,335,351,401,406,414,446,529]
},{//Chansey
l:[[1,1],[38,1],[45,1],[111,1],[39,5],[287,9],[3,12],[135,16],[516,20],[107,23],[36,27],[47,31],[374,34],[505,38],[121,42],[113,46],[361,50],[38,54]],
m:[347,92,258,237,241,58,59,63,113,182,240,219,218,76,85,87,89,216,94,247,280,104,53,201,126,317,263,156,213,496,497,374,451,510,514,416,148,86,244,523,157,138,447,207,214,164,528,249,290,612,605,590,70],
e:[68,69,118,203,215,217,270,312,356,363,426],
tr:[7,8,9,173,196,215,231,264,270,278,283,285,289,304,343,351,352,356,387,409,428,446]
},{//Tangela
l:[[132,1],[275,1],[79,4],[22,7],[71,10],[77,14],[20,17],[74,20],[72,23],[282,27],[78,30],[363,33],[202,36],[246,38],[21,41],[321,44],[378,46],[580,48],[438,50]],
m:[92,237,241,63,182,218,76,216,104,115,188,263,156,213,168,496,412,416,148,14,244,611,447,207,214,164,249,290,590,15],
mr:[267],
e:[72,73,93,133,175,202,267,283,363,384,437,476],
tr:[20,173,202,220,235,282,283,351,388,402]
},{//Kangaskhan
l:[[4,1],[43,1],[252,7],[39,10],[44,13],[458,19],[99,22],[5,25],[498,31],[146,34],[242,37],[203,43],[200,46],[389,49],[179,50]],
m:[46,92,258,237,241,58,59,63,182,240,219,218,76,85,87,89,216,91,247,280,104,53,201,126,317,332,263,156,213,168,496,411,374,510,421,514,416,523,157,207,214,164,249,290,612,590,15,57,70],
e:[23,38,50,68,116,193,253,264,283,306,359,376,509],
tr:[7,8,9,67,173,180,196,200,231,253,264,270,283,343,351,352,401,409]
},{//Horsea
l:[[55,1,13],[108,4,5],[43,8,9],[145,11,1],[116,14,26],[61,18,21],[97,23,36],[239,26,17],[362,30,31],[56,35,52],[349,38,46],[406,42,41]],
m:[92,258,237,58,59,182,240,218,216,104,263,156,213,496,503,207,214,164,430,290,590,57,127,291],
e:[13,50,62,82,150,175,190,200,225,324,330,352,499],
tr:[173,196,200,324,340,352,406]
},{//Seadra
l:[[43,1,9],[55,1,13],[108,1,5],[145,1],[108,4],[43,8],[145,11],[116,14,26],[61,18,21],[97,23,38],[239,26,17],[362,30,31],[56,40,60],[349,48,52],[406,57,45]],
m:[92,258,237,58,59,63,182,240,218,216,104,263,156,213,496,503,416,207,214,164,430,290,590,57,127,291],
tr:[173,196,200,324,340,352,406]
},{//Goldeen
l:[[39,1],[64,1],[346,1],[48,7,5],[30,11,8],[352,17,16],[175,21,13],[392,27,21],[31,31,24],[127,37,32],[32,41,37],[97,47,29],[487,50,40],[224,57,45]],
m:[92,258,237,58,59,182,240,218,216,104,263,156,213,496,503,398,207,214,164,290,590,57,127,291],
e:[34,56,60,114,130,189,214,300,324,341,401],
tr:[173,196,282,324,340,352,401,529]
},{//Seaking
l:[[39,1],[48,1,5],[64,1],[224,1,54],[346,1],[398,1],[48,7],[30,11,8],[352,17,16],[175,21,13],[392,27,21],[31,31,24],[127,40,32],[32,47,40],[97,56,29],[487,63,46],[224,72]],
m:[92,258,237,58,59,63,182,240,218,216,104,263,156,213,496,503,416,398,207,214,164,290,590,57,127,291],
tr:[173,196,282,324,340,352,401,529]
},{//Staryu
l:[[33,1],[106,1],[55,6,4],[229,10,7],[105,12,10],[149,,13],[293,15,22],[129,18,16],[61,22,18],[107,25,31],[360,30,24],[113,33,46],[362,36,28],[513,40,35],[109,,40],[94,,42],[408,43,37],[322,48,49],[56,52,53]],
m:[92,258,237,58,59,113,182,240,218,85,87,216,94,104,115,263,156,496,503,148,86,360,244,207,214,164,430,290,605,590,57,127,291],
tr:[173,196,220,277,278,324,352,356]
},{//Starmie
l:[[55,1],[56,1],[105,1],[129,1],[229,1],[109,22,40]],
m:[473,92,258,237,58,59,63,113,182,240,218,85,87,216,94,104,115,263,156,496,503,416,148,86,360,244,138,447,207,214,164,430,433,290,605,590,57,127,291],
tr:[173,196,220,271,277,278,285,324,352,356,472]
},{//Mr. Mime
l:[[93,1],[112,1],[345,1],[384,1],[385,1],[469,1],[501,1],[581,1],[383,4],[96,8],[3,11],[102,15],[149,15],[227,18],[113,22],[115,22],[60,25],[164,29],[278,32],[271,36],[94,39],[272,43],[226,46],[219,50]],
m:[473,347,92,237,241,269,63,113,182,240,219,218,76,85,87,216,94,247,280,104,115,332,259,263,156,213,168,496,411,412,374,451,371,416,148,86,244,611,138,447,207,214,164,433,290,612,605,590],
e:[95,102,109,196,248,252,271,298,358,417,471,478],
tr:[7,8,9,173,196,264,270,271,272,277,278,285,289,324,334,343,351,409,428,472,478,492]
},{//Scyther
l:[[43,1],[98,1],[410,1],[116,5],[228,9],[206,13],[97,17],[17,21],[210,25],[163,29],[13,33],[104,37],[404,41],[400,45],[458,49],[403,50],[14,57],[364,61]],
m:[92,237,241,63,113,182,240,355,219,218,216,280,104,332,263,156,213,168,496,211,206,416,14,522,404,207,214,369,164,249,290,590,15],
e:[13,68,179,203,211,226,318,400,405,432,501],
tr:[173,282,366,450]
},{//Jynx
l:[[1,1],[122,1],[142,1],[181,1],[195,1],[577,1],[122,5],[142,8],[181,11],[3,15],[8,18],[531,21],[212,25],[313,28],[358,33],[419,39],[34,44],[378,49],[195,55],[59,60]],
m:[473,347,92,258,237,269,58,59,63,113,182,240,218,216,94,247,280,104,115,259,263,156,213,168,496,497,411,412,374,371,416,148,244,524,138,447,207,214,164,433,290,612,590],
tr:[8,173,196,215,264,270,271,272,277,278,285,304,324,343,352,409,428,478]
},{//Electabuzz
l:[[43,1],[84,1],[98,1],[84,5],[67,8],[129,12],[351,15],[86,19],[486,22],[113,26],[9,29],[435,36],[103,42],[85,49],[87,55]],
m:[92,237,63,113,182,240,218,85,87,216,94,280,104,263,156,213,168,490,496,411,374,451,416,148,521,86,207,214,164,528,249,290,612,590,70],
tr:[7,8,9,67,173,231,264,270,324,343,351,393,527,530]
},{//Magmar
l:[[43,1],[52,1],[123,1],[52,5],[108,8],[185,12],[83,15],[499,19],[481,22],[109,26],[7,29],[436,36],[241,42],[53,49],[126,55]],
m:[92,237,241,63,182,218,216,94,280,104,53,126,263,488,156,213,168,490,496,315,411,374,510,261,416,207,214,164,249,290,612,590,70],
tr:[7,9,67,173,231,257,264,270,343,530]
},{//Pinsir
l:[[11,1],[116,1],[20,4],[69,8],[106,11],[279,15],[280,18,26],[233,22,18],[458,,22],[66,26,29],[404,29,33],[480,33,36],[37,36,43],[14,40],[276,43,47],[12,47,50]],
m:[92,339,237,241,63,182,240,218,479,89,216,91,280,104,317,263,156,213,168,496,411,206,374,416,444,14,522,523,157,404,207,214,164,249,290,590,15,70],
e:[31,98,175,185,276,364,370,382,450],
tr:[20,173,264,276,282,334,446,450]
},{//Tauros
l:[[33,1],[39,3],[99,5],[30,8],[184,11],[228,15],[156,19],[371,24],[526,29],[428,35],[36,41],[207,48],[37,50],[416,63]],
m:[92,237,241,58,59,63,182,240,218,76,85,87,89,216,104,53,201,126,317,263,156,213,496,510,371,514,416,444,523,157,207,214,164,528,249,290,590,57,70],
tr:[173,180,196,200,231,253,270,272,283,351,352,428,442]
},{//Magikarp
l:[[150,1],[33,15],[175,30]],
tr:[340],
s:[603,606]
},{//Gyarados
l:[[37,1],[44,20],[82,23],[43,26],[239,29],[423,32],[401,35],[240,38],[56,41,44],[242,,41],[349,44,47],[63,47,50]],
m:[46,92,258,237,269,58,59,63,182,240,218,85,87,89,216,104,53,201,126,259,263,156,213,496,503,510,371,416,444,86,523,525,207,214,164,249,290,399,590,57,70,127,291],
tr:[173,180,196,200,231,253,340,352,401,406,442]
},{//Lapras
l:[[45,1],[47,1],[55,1],[54,4],[109,7],[420,10],[352,14],[34,18],[240,22],[195,27],[58,32],[362,37],[219,43],[56,47],[329,50]],
m:[46,92,258,237,58,59,63,182,240,219,218,85,87,216,94,104,263,156,213,496,497,416,523,524,138,207,214,164,249,290,590,57,70,127,291],
e:[32,90,174,193,214,246,248,250,287,321,349,406,419,573],
tr:[173,196,200,215,231,304,324,335,351,352,401,406,428,442,529]
},{//Ditto
l:[[144,1]]
},{//Eevee
l:[[33,1],[39,1],[45,1],[270,1],[28,5],[608,9],[129,10],[98,13],[44,17],[287,20],[343,23],[36,25],[204,29],[226,33],[38,37],[387,41],[376,45]],
m:[92,237,241,182,240,218,216,91,247,104,263,156,213,496,497,514,207,214,164,290,590],
e:[174,175,197,203,204,273,281,313,321,343,363,445,485,500],
tr:[173,215,231,270,304,343,387],
s:[606]
},{//Vaporeon
l:[[33,1],[39,1],[270,1],[28,5],[55,9],[98,13],[352,17],[62,20],[392,25],[151,29],[114,33],[330,37],[387,41],[56,45]],
m:[46,92,258,237,241,58,59,63,182,240,218,216,91,247,104,263,156,213,496,497,503,514,416,207,214,164,249,290,590,57,70,127,291],
tr:[173,196,215,231,270,304,324,343,352,387,401],
s:[606]
},{//Jolteon
l:[[33,1],[39,1],[270,1],[28,5],[84,9],[98,13],[24,17],[422,20],[42,25],[97,29],[86,33],[435,37],[387,41],[87,45]],
m:[46,92,237,241,63,113,182,240,218,85,87,216,91,247,104,263,156,213,496,497,451,514,416,148,521,86,207,214,164,528,249,290,590,70],
tr:[173,215,231,270,304,324,343,351,387,393],
s:[606]
},{//Flareon
l:[[33,1],[39,1],[270,1],[28,5],[52,9],[98,13],[44,17],[424,20],[83,25],[184,29],[123,33],[436,37],[387,41],[394,45]],
m:[46,92,237,241,63,182,240,218,216,91,247,104,53,126,263,488,156,213,496,497,315,510,261,514,416,207,214,164,249,290,590,70],
tr:[173,215,231,257,270,276,304,343,387],
s:[606]
},{//Porygon
l:[[33,1],[159,1],[160,1],[176,1],[60,7],[97,12],[105,18],[393,23],[324,29],[278,34],[435,40],[199,45],[161,50],[277,56],[192,62]],
m:[473,92,237,241,58,59,63,182,240,218,76,85,87,216,94,247,104,332,263,156,168,496,451,416,148,86,244,138,207,214,164,433,290,590],
tr:[173,196,220,231,271,277,278,324,351,356,387,393,428,472,492,527]
},{//Omanyte
l:[[110,1],[132,1],[44,7],[55,10],[205,16],[43,19],[341,25],[362,28],[182,34],[246,37],[321,43],[350,46],[504,50],[56,55]],
m:[92,258,237,58,59,182,240,218,479,216,104,201,317,263,156,213,168,496,503,397,360,157,207,214,164,249,290,590,57,127,291],
e:[21,48,61,62,114,117,191,250,282,330,352,378,390,513],
tr:[20,173,196,282,334,352,414,446]
},{//Omastar
l:[[44,1],[56,1],[110,1],[132,1],[44,7],[55,10],[205,16],[43,19],[341,25],[362,28],[182,34],[246,37],[131,40],[321,48],[350,56],[504,67],[56,75]],
m:[92,258,237,58,59,63,182,240,218,479,216,104,201,317,263,156,213,168,496,503,416,397,444,360,157,207,214,164,249,290,590,57,127,291],
tr:[20,173,196,282,334,352,414,446]
},{//Kabuto
l:[[10,1],[106,1],[71,6],[43,11],[341,16],[28,21],[203,26],[453,31],[72,36],[319,41],[246,46],[378,50]],
m:[468,92,258,237,58,59,182,240,218,479,216,91,104,201,317,263,156,213,168,496,503,397,157,207,214,164,249,290,590,57,127],
mr:[332],
e:[36,61,62,103,109,175,193,196,202,229,282,341],
tr:[173,196,202,282,334,352,414,446]
},{//Kabutops
l:[[10,1],[43,1],[71,1],[106,1],[364,1],[400,1],[71,6],[43,11],[341,16],[28,21],[203,26],[453,31],[72,36],[163,40],[319,45],[246,54],[378,63],[400,72]],
m:[468,92,258,237,58,59,63,182,240,218,479,216,91,280,104,201,317,332,263,156,213,168,496,503,416,397,444,14,157,404,207,214,164,249,290,267,590,15,57,127,291],
tr:[67,173,196,202,276,282,334,352,401,414,446]
},{//Aerodactyl
l:[[17,1],[44,1],[48,1],[184,1],[422,1],[423,1],[424,1],[442,1],[46,9],[97,17],[246,25],[242,33],[36,41],[507,49],[442,57],[63,65],[157,73],[416,81]],
m:[468,337,46,92,237,241,269,63,182,240,355,218,479,89,216,104,53,201,126,317,332,259,263,156,213,168,496,211,507,510,371,416,397,444,523,157,207,214,164,249,290,590,19,70],
e:[18,174,193,211,225,228,355,366,372,469],
tr:[143,173,231,257,366,401,406,414,442,446]
},{//Snorlax
l:[[33,1],[111,4],[133,9],[122,12],[498,17],[281,20],[34,25],[156,28],[173,28],[214,33],[205,36],[335,41],[187,44],[242,49],[484,50],[416,57]],
m:[92,237,241,58,59,63,182,240,218,76,479,85,87,89,216,94,247,280,104,53,201,126,317,263,156,213,496,411,374,510,514,416,523,157,207,214,164,528,249,290,612,590,57,70],
e:[18,38,68,90,122,174,204,228,363,495,562],
tr:[7,8,9,173,196,200,264,276,278,304,335,343,351,352,387,402,428,441,442,495]
},{//Articuno
l:[[16,1],[181,1],[329,1],[355,1],[366,1],[542,1],[573,1],[54,8],[420,15],[170,22],[246,29],[97,36],[58,43],[115,50],[258,57],[366,64],[59,71],[329,78],[355,85],[542,92]],
m:[46,92,258,237,241,58,59,63,182,240,355,218,216,104,115,201,332,263,156,496,211,507,416,524,207,214,369,164,249,290,590,19],
tr:[143,173,196,324,352,366]
},{//Zapdos
l:[[64,1],[65,1],[84,1],[192,1],[355,1],[86,8],[197,15],[365,22],[246,29],[268,36],[97,43],[435,50],[240,57],[113,64],[65,71],[87,78],[355,85],[192,92]],
m:[46,92,237,241,63,113,182,240,355,218,85,87,216,104,201,332,263,156,496,211,451,507,416,148,521,86,207,214,369,164,528,249,290,590,19],
tr:[143,173,257,324,351,366]
},{//Moltres
l:[[17,1],[52,1],[143,1],[257,1],[355,1],[542,1],[83,8],[97,15],[203,22],[246,29],[53,36],[219,43],[403,50],[241,57],[257,64],[76,71],[143,78],[355,85],[542,92]],
m:[46,92,237,241,63,182,240,355,219,218,76,216,104,53,201,126,332,263,488,156,496,315,211,507,510,261,416,207,214,369,164,249,290,590,19],
tr:[143,173,257,366]
},{//Dratini
l:[[35,1],[43,1],[86,5],[239,11],[82,15],[21,21],[97,25],[525,31],[401,35],[407,41],[219,45],[349,51],[200,55],[63,61]],
m:[92,258,237,241,58,59,63,113,182,240,219,218,85,87,216,104,53,126,263,156,213,496,510,86,525,207,214,164,290,590,57,127],
e:[48,54,114,225,231,245,349,352,406,407,453],
t:[434],
tr:[20,173,196,200,231,351,352,401,406]
},{//Dragonair
l:[[35,1],[43,1],[86,1],[239,1],[86,5],[239,11],[82,15],[21,21],[97,25],[525,33],[401,39],[407,47],[219,53],[349,61],[200,67],[63,75]],
m:[92,258,237,241,58,59,63,113,182,240,219,218,85,87,216,104,53,126,263,156,213,496,510,86,525,207,214,164,290,590,57,127],
t:[434],
tr:[20,173,196,200,231,351,352,401,406]
},{//Dragonite
l:[[7,1],[9,1],[35,1],[43,1],[86,1],[239,1],[355,1],[542,1],[86,5],[239,11],[82,15],[21,21],[97,25],[525,33],[401,39],[407,47],[219,53],[17,55],[349,61],[200,67],[63,75],[542,81]],
m:[468,337,46,92,258,237,241,58,59,63,113,182,240,355,219,218,85,87,89,216,280,104,53,201,126,317,332,263,156,213,496,211,411,374,507,510,416,444,86,523,157,525,207,214,164,249,290,612,590,15,19,57,70,127,291],
t:[434],
tr:[7,8,9,20,173,196,200,231,257,264,276,351,352,366,401,406,442]
},{//Mewtwo
l:[[50,1],[93,1],[219,1],[129,8],[248,15],[244,22],[357,29],[427,36],[384,43],[385,43],[105,50],[94,57],[112,64],[396,70],[133,79],[54,86],[382,93],[540,100]],
m:[473,347,92,258,339,237,241,269,58,59,63,113,182,240,219,218,76,85,87,89,216,94,247,280,104,115,53,201,126,317,332,259,263,156,490,496,411,412,374,451,510,261,373,416,148,444,86,244,523,157,398,138,447,207,214,164,433,249,290,612,590,70,291],
tr:[7,8,9,67,173,196,231,264,271,272,277,278,285,289,324,351,352,356,401,409,428,472,478,492]
},{//Mew
l:[[1,1],[144,1],[513,1],[5,10],[118,20],[94,30],[112,40],[246,50],[133,60],[382,70],[226,80],[417,90],[396,100]],
m:[468,337,473,347,46,92,258,339,474,237,241,269,58,59,63,113,182,240,355,219,218,76,479,85,87,89,216,91,94,247,280,104,115,482,53,188,201,126,317,332,259,263,488,156,213,168,490,496,497,315,211,411,412,206,503,374,451,507,510,511,261,512,373,153,421,371,514,416,397,148,444,521,86,360,14,522,244,523,524,157,404,525,611,398,138,447,207,214,369,164,430,433,528,249,290,555,267,399,612,605,590,15,19,57,70,127,291],
tr:[7,8,9,20,67,143,162,173,180,196,200,202,215,220,231,235,253,257,264,270,271,272,276,277,278,282,283,285,289,304,324,334,335,340,343,351,352,356,366,380,387,388,393,401,402,406,409,414,428,441,442,446,450,472,478,492,495,527,529,530]
},{//Chikorita
l:[[33,1],[45,1],[75,6],[77,9],[235,12],[115,17],[345,20],[363,23],[230,28],[113,31],[34,34],[219,39],[312,42],[76,45]],
m:[92,237,241,113,182,219,218,76,216,104,115,263,156,213,496,497,412,148,14,447,207,214,164,290,267,590,15],
e:[22,34,68,73,175,246,267,275,287,312,320,378,437,505,580],
t:[520],
tr:[173,202,231,235,277,388,402]
},{//Bayleef
l:[[33,1],[45,1],[75,1],[77,1],[75,6],[77,9],[235,12],[115,18],[345,22],[363,26],[230,32],[113,36],[34,40],[219,46],[312,50],[76,54]],
m:[92,237,241,113,182,219,218,76,216,104,115,263,156,213,496,497,412,148,14,447,207,214,164,249,290,267,590,15,70],
t:[520],
tr:[173,202,231,235,277,388,402]
},{//Meganium
l:[[33,1],[45,1],[75,1],[77,1],[572,1],[75,6],[77,9],[235,12],[115,18],[345,22],[363,26],[80,32],[230,34],[113,40],[34,46],[219,54],[312,60],[76,66],[572,70]],
m:[92,237,241,63,113,182,219,218,76,89,216,104,115,263,156,213,496,497,412,416,148,14,523,525,447,207,214,164,249,290,267,590,15,70],
t:[338,520],
tr:[173,200,202,231,235,277,388,402]
},{//Cyndaquil
l:[[33,1],[43,1],[108,6],[52,10],[98,13],[172,19],[111,22],[488,28],[129,31],[436,37],[53,40],[517,46],[205,49],[38,55],[284,58]],
m:[92,237,241,182,218,216,91,104,53,126,332,263,488,156,213,496,315,510,261,207,214,164,528,290,267,590,15],
e:[24,37,38,98,154,179,193,267,306,326,336,343,394,481],
t:[519],
tr:[173,257,343]
},{//Quilava
l:[[33,1],[43,1],[108,1],[108,6],[52,10],[98,13],[172,20],[111,24],[129,31],[488,35],[436,42],[53,46],[517,53],[205,57],[38,64],[284,68]],
m:[46,92,237,241,182,218,216,91,280,104,53,126,332,263,488,156,213,496,315,510,261,207,214,164,528,249,290,267,590,15,70],
t:[519],
tr:[173,257,264,343]
},{//Typhlosion
l:[[33,1],[38,1],[43,1],[52,1],[108,1],[284,1],[360,1],[108,6],[52,10],[98,13],[172,20],[111,24],[129,31],[488,35],[436,43],[53,48],[517,56],[205,61],[38,69],[284,74]],
m:[46,92,237,241,63,182,218,76,89,216,91,280,104,53,126,317,332,263,488,156,213,496,315,411,374,510,261,421,416,360,523,157,207,214,164,528,249,290,267,612,590,15,70],
t:[307,519],
tr:[7,9,67,173,257,264,343]
},{//Totodile
l:[[10,1],[43,1],[55,6],[99,8],[44,13],[184,15],[423,20],[175,22],[242,27],[498,29],[163,34],[103,36],[37,41],[401,43],[276,48],[56,50]],
m:[468,337,92,258,237,58,59,182,240,218,216,91,280,104,317,332,263,156,213,496,503,374,421,14,157,207,214,164,290,612,590,15,57,127,291],
e:[8,37,56,232,242,246,260,300,313,335,346,349,352,453],
t:[518],
tr:[8,67,173,180,196,231,253,264,276,335,352,401]
},{//Croconaw
l:[[10,1],[43,1],[55,1],[55,6],[99,8],[44,13],[184,15],[423,21],[175,24],[242,30],[498,33],[163,39],[103,42],[37,48],[401,51],[276,57],[56,60]],
m:[468,337,46,92,258,237,58,59,182,240,218,216,91,280,104,317,332,263,156,213,496,503,374,421,14,157,207,214,164,249,290,612,590,15,57,70,127,291],
t:[518],
tr:[8,67,173,180,196,231,253,264,276,335,352,401]
},{//Feraligatr
l:[[10,1],[43,1],[55,1],[99,1],[55,6],[99,8],[44,13],[184,15],[423,21],[175,24],[97,30],[242,32],[498,37],[163,45],[103,50],[37,58],[401,63],[276,71],[56,76]],
m:[468,337,46,92,258,237,58,59,63,182,240,218,89,216,91,280,104,317,332,263,156,213,496,411,503,374,421,416,14,523,157,525,207,214,164,249,290,612,590,15,57,70,127,291],
t:[308,518],
tr:[8,67,173,180,196,200,231,253,264,276,335,352,401,406]
},{//Sentret
l:[[10,1],[193,1],[111,4],[98,7],[154,13],[270,16],[266,19],[21,25],[156,28],[389,31],[133,36],[226,39],[382,42],[304,47]],
m:[468,92,237,241,58,182,240,218,76,85,216,91,247,280,104,53,263,156,213,168,496,497,374,451,421,514,447,207,214,369,164,290,612,590,15,57],
e:[38,116,163,179,204,228,231,271,274,343,363,387,445],
tr:[7,8,9,162,173,231,253,264,270,271,282,304,343,351,352,387,401]
},{//Furret
l:[[10,1],[98,1],[111,1],[193,1],[111,4],[98,7],[154,13],[270,17],[266,21],[21,28],[156,32],[389,36],[133,42],[226,46],[382,50],[304,56]],
m:[468,92,237,241,58,59,63,182,240,218,76,85,87,216,91,247,280,104,53,263,156,213,168,496,497,411,374,451,421,514,416,447,207,214,369,164,249,290,612,590,15,57,70],
tr:[7,8,9,162,173,231,253,264,270,271,282,304,343,351,352,387,401]
},{//Hoothoot
l:[[33,1],[45,1],[193,1],[95,5],[64,9],[253,13],[115,17],[93,21],[497,25],[36,29],[403,33],[428,37],[485,41],[326,45],[375,49],[355,53],[138,57]],
m:[92,237,241,182,240,355,218,216,94,247,104,115,332,263,156,213,168,496,497,211,244,138,207,214,164,290,590,19],
e:[17,18,48,97,101,119,143,185,297,432],
tr:[143,173,253,257,277,278,304,366,428]
},{//Noctowl
l:[[33,1],[45,1],[95,1],[138,1],[143,1],[193,1],[95,5],[64,9],[253,13],[115,17],[93,22],[497,27],[36,32],[403,37],[428,42],[485,47],[326,52],[375,57],[355,62],[138,67]],
m:[92,237,241,63,182,240,355,218,216,94,247,104,115,332,263,156,213,168,496,497,211,416,244,138,207,214,164,290,590,19],
tr:[143,173,253,257,277,278,304,366,428]
},{//Ledyba
l:[[33,1],[48,6],[4,9],[113,14],[115,14],[219,14],[183,17],[226,22],[318,25],[97,30],[129,33],[38,38],[405,41]],
m:[92,237,241,113,182,355,219,218,76,216,91,280,104,115,332,263,156,213,168,496,374,512,148,14,522,611,207,214,369,164,290,612,590],
e:[60,103,117,146,227,264,282,318,366,405,409,450],
tr:[8,9,173,202,253,264,282,366,409,450]
},{//Ledian
l:[[4,1],[33,1],[48,1],[48,6],[4,9],[113,14],[115,14],[219,14],[183,17],[226,24],[318,29],[97,36],[129,41],[38,48],[405,53]],
m:[92,237,241,63,113,182,355,219,218,76,216,91,280,104,115,332,263,156,213,168,496,411,374,512,416,148,14,522,611,207,214,369,164,249,290,612,590,70],
tr:[8,9,173,202,253,264,282,366,409,450]
},{//Spinarak
l:[[40,1],[81,1],[184,5],[132,8],[141,12],[101,15],[425,19],[154,22],[389,26],[169,29],[97,33],[42,36],[94,40],[398,43],[440,47],[564,50]],
m:[468,92,474,237,241,182,218,76,216,91,94,104,188,263,156,213,168,496,148,522,404,611,398,207,214,164,290,590],
e:[41,49,50,60,224,226,228,324,390,400,476,527],
tr:[173,202,324,340,450,492,527]
},{//Ariados
l:[[40,1],[81,1],[132,1],[184,1],[450,1],[565,1],[599,1],[184,5],[132,8],[141,12],[101,15],[425,19],[154,23],[389,28],[169,32],[97,37],[42,41],[94,46],[398,50],[440,55],[564,58]],
m:[468,92,474,237,241,63,182,218,76,216,91,94,104,188,263,156,213,168,496,416,148,522,404,611,398,207,214,164,290,590],
tr:[173,202,324,340,450,492,527]
},{//Crobat
l:[[48,1,5],[103,1],[141,1],[310,1,7],[440,1],[48,4],[310,8],[44,12,11],[17,15,13],[109,19,17],[129,24],[314,28,19],[512,33,35],[212,38,32],[305,42,27],[474,,43],[114,47,40],[501,,51],[403,52,48]],
m:[92,474,237,241,269,63,182,240,355,218,216,247,104,188,332,259,263,156,213,168,496,211,512,371,416,404,207,214,369,164,290,399,590,19],
tr:[143,162,173,202,253,257,289,366,428]
},{//Chinchou
l:[[48,1],[55,1,12],[86,6],[175,9,31],[145,12,1],[109,17],[209,20,23],[36,23,39],[486,28,9],[61,31,20],[324,34,28],[435,39,34],[392,42],[56,45],[569,47],[268,50]],
m:[92,258,237,58,59,182,240,218,85,87,216,104,263,156,213,496,503,451,148,521,86,207,214,164,528,290,605,590,57,127,291],
e:[54,60,97,103,133,175,250,351,352,362,487],
tr:[173,196,215,324,340,351,352]
},{//Lanturn
l:[[48,1],[55,1,12],[86,1,6],[598,1],[86,6],[175,9,33],[145,12,1],[109,17],[209,20,23],[36,23,43],[254,27],[255,27],[256,27],[486,30,9],[61,35,20],[324,40,29],[435,47,37],[392,52,47],[56,57,51],[569,60,54],[268,64,58]],
m:[92,258,237,58,59,63,182,240,218,85,87,216,104,263,156,213,496,503,451,416,148,521,86,207,214,164,528,290,605,590,57,127,291],
tr:[173,196,215,324,340,351,352,401]
},{//Pichu
l:[[84,1],[204,1],[39,5],[186,10],[86,13,18],[417,18,13]],
m:[92,237,113,182,240,218,85,87,216,104,263,156,213,496,497,374,451,148,521,86,447,207,214,164,528,290,590],
e:[3,9,117,175,179,203,217,227,252,268,273,321,344,381,516,574],
tr:[9,173,231,253,270,324,343,351,393,527]
},{//Cleffa
l:[[1,1],[204,1],[227,4],[47,7],[186,10],[383,13],[345,16]],
m:[473,92,237,241,113,182,240,219,218,76,216,91,94,247,104,115,53,126,263,156,213,496,497,374,510,148,86,244,138,447,207,214,164,290,590],
e:[102,118,133,150,187,217,273,312,313,321,343,500,505,581],
tr:[173,196,231,253,270,271,272,277,278,283,304,324,343,351,352,356,387,428,472,495]
},{//Igglybuff
l:[[47,1],[204,1],[111,5,3],[1,9,5],[186,13,9],[383,17,11]],
m:[92,237,241,113,182,240,219,218,76,216,91,94,247,104,115,53,126,263,156,213,496,497,374,510,148,86,244,138,447,207,214,164,528,290,590],
e:[185,195,214,217,273,313,343,356,386,387,445,505,581],
tr:[173,196,215,220,253,270,272,277,278,283,304,340,343,351,352,356,387]
},{//Togepi
l:[[45,1],[204,1],[118,5],[186,9],[281,13],[227,17],[266,21],[516,25],[273,29],[246,33],[219,37],[226,41],[38,45],[387,49],[495,53]],
m:[473,92,237,241,113,182,240,219,218,76,216,94,247,104,115,53,126,263,156,213,496,497,374,510,148,86,244,138,447,207,214,164,249,290,605,590],
e:[64,119,193,217,234,248,290,326,375,381,417,500],
tr:[173,215,253,271,277,283,304,324,343,351,352,387,428,495]
},{//Togetic
l:[[45,1],[118,1],[186,1],[204,1],[345,1],[118,5],[186,9],[281,13],[584,14],[227,17],[266,21],[516,25],[273,29],[246,33],[219,37],[226,41],[38,45],[387,49],[495,53]],
m:[473,92,237,241,63,113,182,240,355,219,218,76,216,94,247,280,104,115,53,126,332,263,156,213,496,497,211,374,510,514,416,148,86,244,138,447,207,214,164,249,290,605,590,19],
tr:[173,215,257,264,271,277,283,304,324,343,351,352,366,387,409,428,495]
},{//Natu
l:[[43,1],[64,1],[101,6],[100,9],[381,12],[357,17,36],[382,20,50],[109,23],[273,28],[375,33,39],[248,36,44],[500,39,17],[466,44,20],[384,47],[385,47],[94,50,33]],
m:[473,347,92,237,241,113,182,240,355,218,76,216,94,247,104,115,332,263,156,213,168,496,211,148,86,244,138,447,207,214,369,164,433,290,605,590],
e:[65,98,114,185,211,285,287,297,355,389,428,485,493,502],
tr:[143,173,202,220,257,271,277,285,324,366,428,478]
},{//Xatu
l:[[43,1],[64,1],[101,6,1],[100,9,1],[381,12],[357,17,39],[382,20,57],[109,23],[403,,25],[366,27,1],[273,30,29],[375,37,43],[248,42,49],[500,47,17],[384,54,53],[466,54,20],[385,59,53],[94,66,35]],
m:[473,347,92,237,241,63,113,182,240,355,218,76,216,94,247,104,115,332,263,156,213,168,496,211,416,148,86,244,138,447,207,214,369,164,433,290,605,590,19],
tr:[143,173,202,220,257,271,277,285,324,366,428,478,492]
},{//Mareep
l:[[33,1],[45,1],[86,4],[84,8],[178,11],[268,15],[36,18],[486,22],[109,25],[408,29],[435,32],[538,36],[324,39],[113,43],[87,46]],
m:[92,237,113,182,240,219,218,85,87,216,104,263,156,213,496,497,451,148,86,207,214,164,528,290,590],
e:[28,34,36,97,103,231,260,268,316,495,598,604],
tr:[173,215,231,324,351,393,495,527],
s:[610]
},{//Flaaffy
l:[[33,1],[45,1],[84,1],[86,1],[86,4],[84,8],[178,11],[268,16],[36,20],[486,25],[109,29],[408,34],[435,38],[538,43],[324,47],[113,52],[87,56]],
m:[92,237,113,182,240,219,218,85,87,216,280,104,263,156,213,496,497,374,451,148,521,86,207,214,164,528,249,290,612,590,70],
tr:[7,9,173,215,231,264,324,351,393,495,527]
},{//Ampharos
l:[[7,1],[33,1],[45,1],[84,1],[86,1],[192,1],[406,1],[569,1],[602,1],[86,4],[84,8],[178,11],[268,16],[36,20],[486,25],[109,29],[9,30],[408,35],[435,40],[538,46],[324,51],[113,57],[87,62],[406,65]],
m:[92,237,63,113,182,240,219,218,85,87,216,280,104,263,156,213,496,497,411,374,451,416,148,521,86,523,207,214,164,528,249,290,612,590,70],
tr:[7,9,173,200,215,231,264,324,351,393,406,495,527]
},{//Bellossom
l:[[72,1],[78,1],[230,1],[241,1],[348,1],[437,1,64],[345,23,24],[572,50,49],[437,53]],
m:[92,474,237,241,63,182,219,218,76,216,104,188,263,156,213,496,412,374,416,148,14,611,447,207,214,164,290,267,605,590,15],
tr:[173,202,235,253,380,388,402,409,495]
},{//Marill
l:[[33,1],[55,1],[39,2],[346,5],[145,7],[111,10],[205,10],[61,13],[270,16],[401,20],[38,23,37],[392,28],[240,31],[276,37,40],[56,40,47],[583,45,23]],
m:[92,258,237,58,59,113,182,240,218,216,91,280,104,263,156,213,496,503,374,447,207,214,164,249,290,612,590,57,70,127,291],
e:[34,48,133,187,195,217,248,276,287,293,330,346,453],
tr:[8,173,196,231,264,270,276,282,304,340,343,352,401]
},{//Azumarill
l:[[33,1],[39,1,2],[55,1],[346,1,5],[39,2],[346,5],[145,7],[111,10],[205,10],[61,13],[270,16],[401,21],[38,25,42],[392,31],[240,35],[276,42,46],[56,46,55],[583,50,25]],
m:[92,258,237,58,59,63,113,182,240,218,216,91,280,104,263,156,213,496,411,503,374,416,523,447,207,214,164,249,290,612,590,57,70,127,291],
tr:[8,173,196,231,264,270,276,282,304,340,343,352,401]
},{//Sudowoodo
l:[[67,1],[88,1],[175,1],[383,1],[452,1],[175,5],[67,8],[88,12],[21,15],[102,15],[185,19],[317,22],[335,26],[157,29],[68,33],[389,36],[38,40],[444,43],[359,47]],
m:[347,92,237,241,269,182,218,479,89,216,91,280,104,201,317,259,263,156,213,168,496,374,153,397,444,244,523,157,207,214,164,249,290,267,612,590,70],
e:[29,106,111,120,174,203,205,328,446],
tr:[7,8,9,67,173,264,270,272,335,343,414,446,492,495]
},{//Politoed
l:[[3,1],[61,1],[95,1],[195,1],[207,27],[340,37],[304,48]],
m:[92,258,237,58,59,63,182,240,218,89,216,91,94,280,104,263,156,213,168,496,497,411,503,374,371,416,523,207,214,164,249,290,612,590,57,70,127,291],
tr:[8,173,196,264,270,283,304,340,352]
},{//Hoppip
l:[[150,1],[235,4],[39,6],[33,8],[584,10],[77,12],[78,14],[79,16],[331,19],[73,22],[72,25],[512,28],[476,31],[178,34],[369,37],[388,40],[202,43],[340,46],[262,49]],
m:[92,237,241,182,218,76,216,104,115,332,263,156,213,496,412,512,148,14,244,611,447,207,214,369,164,290,605,590],
e:[38,93,133,203,227,270,312,388,402,538,580],
tr:[173,202,235,270,340,388,402]
},{//Skiploom
l:[[33,1],[39,1],[150,1],[235,1],[235,4],[39,6],[33,8],[584,10],[77,12],[78,14],[79,16],[331,20],[73,24],[72,28],[512,32],[476,36],[178,40],[369,44],[388,48],[202,52],[340,56],[262,60]],
m:[92,237,241,182,218,76,216,104,115,332,263,156,213,496,412,512,148,14,244,611,447,207,214,369,164,290,605,590],
tr:[173,202,235,270,340,388,402]
},{//Jumpluff
l:[[33,1],[39,1],[150,1],[235,1],[235,4],[39,6],[33,8],[584,10],[77,12],[78,14],[79,16],[331,20],[73,24],[72,29],[512,34],[476,39],[178,44],[369,49],[388,54],[202,59],[340,64],[262,69]],
m:[92,237,241,63,182,218,76,216,104,115,332,263,156,213,496,412,512,416,148,14,244,611,447,207,214,369,164,290,605,590],
tr:[173,202,235,270,340,388,402]
},{//Aipom
l:[[10,1],[39,1],[28,4],[310,8],[226,11],[321,15],[154,18],[129,22],[103,25],[97,29],[458,32],[374,36],[417,39],[387,43]],
m:[468,92,237,241,269,182,240,218,76,85,87,216,91,247,280,104,332,263,156,213,168,490,496,374,512,421,371,514,86,138,447,207,214,369,164,249,290,612,590,15,70],
e:[3,21,68,97,103,180,228,251,252,279,340,343,415,501],
tr:[7,8,9,67,173,180,231,253,264,272,282,289,340,343,351,352,387,402,441,492]
},{//Sunkern
l:[[71,1],[74,1],[275,4],[320,7],[72,10],[73,13],[75,16],[388,19],[202,22],[283,25],[235,28],[363,31],[76,34],[38,37],[241,40],[402,43]],
m:[92,237,241,113,182,219,218,76,216,104,188,263,156,213,496,412,148,14,447,207,214,164,290,267,590,15],
e:[73,117,174,203,227,230,234,267,270,275,320,363,580],
tr:[173,202,235,253,270,283,388,402,414,495]
},{//Sunflora
l:[[1,1],[71,1],[74,1],[579,1],[275,4],[320,7],[72,10],[73,13],[75,16],[388,19],[202,22],[331,25],[80,28],[363,31],[76,34],[38,37],[241,40],[437,43],[572,50]],
m:[92,237,241,63,113,182,219,218,76,216,104,188,263,156,213,496,412,416,148,14,447,207,214,164,290,267,590,15],
tr:[173,202,235,253,270,283,388,402,414,495]
},{//Yanma
l:[[33,1],[193,1],[98,6],[104,11],[49,14],[197,17],[48,22],[253,27],[228,30],[246,33],[95,38],[17,43],[103,46],[369,49],[403,54],[405,57]],
m:[92,237,241,182,355,218,76,216,94,247,104,332,263,156,213,168,496,211,148,138,207,214,369,164,290,590],
e:[18,38,141,179,185,228,290,318,324,364],
tr:[173,202,253,324,366,450]
},{//Wooper
l:[[39,1],[55,1],[300,5],[341,9],[21,15],[426,19],[133,23],[281,29],[89,33],[240,37],[54,43],[114,43],[330,47]],
m:[92,258,237,58,59,182,240,219,218,89,216,91,104,482,188,201,263,156,213,496,503,148,523,611,207,214,164,249,290,590,57,127,291],
e:[24,34,68,105,174,214,227,246,254,255,256,300,385,491,495,598],
tr:[8,173,196,231,352,401,414,495]
},{//Quagsire
l:[[39,1],[55,1],[300,1],[300,5],[341,9],[21,15],[426,19],[133,24],[281,31],[89,36],[240,41],[54,48],[114,48],[330,53]],
m:[92,258,237,58,59,63,182,240,219,218,89,216,91,280,104,482,188,201,317,263,156,213,168,496,411,503,374,416,148,444,523,157,611,207,214,164,249,290,612,590,57,70,127,291],
tr:[8,173,196,231,264,352,401,414,495]
},{//Espeon
l:[[33,1],[39,1],[270,1],[28,5],[93,9],[98,13],[129,17],[60,20],[248,25],[244,29],[234,33],[94,37],[387,41],[384,45]],
m:[473,347,92,237,241,63,113,182,240,218,216,91,94,247,104,115,263,156,213,496,497,514,416,148,244,138,447,207,214,164,433,290,605,590,15],
tr:[173,215,231,270,271,277,285,304,324,343,387,428,478],
s:[606]
},{//Umbreon
l:[[33,1],[39,1],[270,1],[28,5],[228,9],[98,13],[109,17],[185,20],[372,25],[103,29],[236,33],[212,37],[387,41],[385,45]],
m:[92,237,241,269,63,182,240,218,216,91,94,247,104,259,263,156,213,496,497,371,514,416,148,244,138,207,214,164,290,555,399,590,15],
tr:[173,180,215,231,270,289,304,343,387,472,492],
s:[606]
},{//Murkrow
l:[[64,1],[310,1],[228,5],[114,11],[17,15],[101,21],[372,25],[269,31],[185,35],[212,41],[492,45],[366,50],[389,55],[259,61],[511,65]],
m:[347,92,237,241,269,182,240,355,218,216,94,247,104,332,259,263,156,213,168,496,211,511,373,371,514,86,244,138,207,214,164,290,555,399,590,19],
e:[17,18,65,103,109,119,143,185,195,260,297,355,372,375,413],
tr:[143,173,180,196,253,257,289,366,492]
},{//Slowking
l:[[33,1],[174,1],[237,1],[281,1],[408,1],[505,1],[45,5],[55,9],[93,14],[50,19],[29,23],[352,28],[428,32],[417,36],[207,41],[94,45],[376,49],[244,54],[505,58]],
m:[473,347,92,258,237,241,58,59,63,113,182,240,219,218,89,216,91,94,247,280,104,53,126,263,156,213,496,497,411,503,374,510,511,416,148,86,244,523,525,138,447,207,214,164,433,249,290,612,590,57,70,291],
tr:[8,173,196,231,264,271,277,278,285,324,334,335,352,401,409,428,472,492,495]
},{//Misdreavus
l:[[45,1],[149,1],[180,5],[310,10],[109,14],[212,19],[506,23],[60,28],[220,32],[371,37],[247,41],[195,46],[288,50],[408,55]],
m:[347,92,237,241,269,182,240,218,85,87,216,94,247,104,332,259,263,156,213,168,496,497,451,261,373,371,148,86,244,138,207,214,164,433,290,399,605,590],
e:[103,174,180,194,262,285,286,382,389,417,425,466,472],
tr:[173,180,196,215,220,253,271,277,285,289,304,351,472,478,492]
},{//Unown
l:[[237,1]],
m:[237]
},{//Wobbuffet
l:[[68,1],[194,1],[219,1],[243,1]],
m:[219]
},{//Girafarig
l:[[33,1],[45,1],[93,1],[310,1],[384,1],[385,1],[316,5],[23,10,14],[97,14,23],[60,19],[226,23,41],[372,28,10],[458,32,28],[94,37,50],[428,41,32],[242,46,37],[417,,46]],
m:[473,347,92,237,241,113,182,240,218,85,87,89,216,94,247,104,115,263,156,213,168,496,497,412,451,514,148,86,244,523,138,447,207,214,164,433,249,290,605,590,70],
e:[13,24,36,133,193,212,243,248,251,273,277,285,290],
tr:[173,231,253,271,277,278,285,304,324,351,356,428,492]
},{//Pineco
l:[[33,1],[182,1],[120,6],[450,9],[36,12],[229,17],[117,20],[363,23],[191,28],[371,31],[153,34],[334,39],[360,42],[38,45]],
m:[92,474,237,241,113,182,218,76,89,216,91,104,115,201,317,263,156,213,496,153,371,360,522,523,157,207,214,164,249,290,590,70],
e:[38,42,68,129,175,203,279,328,379,390,446],
tr:[173,202,220,334,356,446,450,529]
},{//Forretress
l:[[33,1],[120,1],[182,1],[192,1],[390,1],[393,1],[450,1],[484,1],[36,12],[229,17],[117,20],[363,23],[191,28],[429,31],[475,32],[371,36],[153,42],[334,46],[360,50],[38,56],[393,60],[192,64],[484,70]],
m:[92,474,237,241,63,113,182,218,76,89,216,91,104,115,201,317,263,156,213,496,153,371,416,397,521,360,522,523,157,207,214,164,430,249,290,590,70],
tr:[173,202,220,324,334,335,356,393,446,450,529]
},{//Dunsparce
l:[[99,1],[111,1],[205,4],[180,7],[228,10],[103,13],[281,16],[246,19],[36,22],[355,25],[137,28],[91,31],[38,34],[489,37],[203,40],[529,43],[283,46],[175,49]],
m:[347,92,237,241,58,59,182,240,355,218,76,85,87,89,216,91,247,104,53,126,317,263,156,213,168,496,451,510,514,86,360,244,523,157,398,138,207,214,164,528,249,290,590,70],
e:[29,44,97,117,173,174,214,246,277,290,310,376,506],
tr:[20,173,180,220,231,277,283,351,352,387,401,428,446,529]
},{//Gligar
l:[[40,1],[28,4],[106,7],[282,10],[98,13],[210,16],[185,19],[512,22],[163,27],[369,30],[103,35],[404,40],[327,45],[14,50],[12,55]],
m:[468,92,474,237,241,269,182,240,355,218,89,216,91,280,104,188,201,317,332,259,263,156,213,168,496,211,206,374,512,371,397,444,14,522,523,157,404,398,207,214,369,164,249,290,399,590,15,70],
e:[13,17,38,68,97,226,232,328,342,364,379,400,431,440],
tr:[173,231,282,366,401,414,446,450]
},{//Steelix
l:[[20,1],[33,1],[106,1],[300,1],[422,1],[423,1],[424,1],[174,4],[88,7],[317,10],[99,13],[446,16],[475,19],[360,20],[479,22],[225,25],[21,28],[103,31],[157,34],[242,37],[231,40],[91,43],[444,46],[38,49],[201,52]],
m:[46,92,237,241,269,63,182,218,479,89,216,91,104,201,317,259,263,156,213,496,153,371,416,397,444,360,244,523,157,525,207,214,164,430,249,290,267,399,590,15,70],
tr:[20,173,231,335,393,401,406,414,442,446]
},{//Snubbull
l:[[33,1],[39,1],[184,1],[204,1],[422,1],[423,1],[424,1],[44,7],[122,13],[29,19],[46,25],[99,31],[583,37],[371,43],[242,49]],
m:[46,92,339,237,241,269,182,240,218,76,85,87,89,216,91,247,280,104,115,53,188,126,259,263,156,213,168,496,315,374,510,371,514,86,523,207,214,164,528,249,290,555,612,605,590,70],
e:[38,102,118,173,185,215,217,242,264,265,313,370,422,423,424],
tr:[7,8,9,67,162,173,215,264,276,304,343,351,352,387]
},{//Granbull
l:[[33,1],[39,1],[184,1],[200,1],[204,1],[422,1],[423,1],[424,1],[44,7],[122,13],[29,19],[46,27],[99,35],[583,43],[371,51],[242,59],[200,67]],
m:[46,92,339,237,241,269,63,182,240,218,76,85,87,89,216,91,247,280,104,115,53,188,126,317,259,263,156,213,168,496,315,411,374,510,371,514,416,444,86,523,157,207,214,164,528,249,290,555,612,605,590,70],
tr:[7,8,9,67,162,173,200,215,231,264,276,304,343,351,352,387]
},{//Qwilfish
l:[[33,1],[40,1],[55,1],[56,1],[191,1],[194,1],[565,1],[106,9],[107,9],[145,13],[205,17],[390,21],[254,25],[255,25],[279,29],[362,33],[42,37],[36,41],[401,45],[398,49],[194,53],[56,57],[565,60]],
m:[92,258,474,237,269,58,59,182,240,218,216,247,104,482,188,263,156,213,496,503,153,371,86,360,398,207,214,164,290,590,57,127,291],
e:[48,61,114,175,310,324,352,362,453,491],
tr:[173,196,220,324,340,351,352,401]
},{//Scizor
l:[[43,1],[98,1],[364,1],[418,1],[116,5],[228,9],[206,13],[97,17],[232,21],[210,25],[163,29],[13,33],[334,37],[404,41],[400,45],[458,49],[442,50],[14,57],[364,61]],
m:[92,474,237,241,63,113,182,240,355,219,218,216,280,104,201,332,263,156,213,168,496,211,206,374,512,416,14,522,404,207,214,369,164,430,249,290,590,15,70],
tr:[173,276,282,334,366,442,450]
},{//Shuckle
l:[[110,1],[117,1],[132,1],[205,1],[564,1],[227,5],[35,9],[522,12],[219,16],[156,20],[88,23],[380,27],[379,31],[504,34],[157,38],[450,42],[470,45],[471,45],[444,49],[564,53]],
m:[92,474,237,241,182,219,218,479,89,216,91,104,482,188,201,317,263,156,213,496,397,148,444,360,522,523,157,611,207,214,164,249,290,590,70],
e:[51,189,230,270,282,328,350,367,515],
tr:[20,173,270,282,380,414,446,450,495]
},{//Heracross
l:[[30,1],[33,1],[43,1],[203,1],[292,1],[331,1],[400,1],[31,7,25],[332,10],[498,16],[68,19],[280,25,28],[36,28,34],[42,31],[370,34,43],[364,37,7],[179,43,46],[224,46,37]],
m:[92,339,474,237,241,63,182,240,218,479,89,216,91,280,104,317,332,263,156,213,168,496,411,206,374,421,514,416,444,14,522,523,157,207,214,164,249,290,590,15,70],
e:[38,69,106,117,175,224,228,264,279,350],
tr:[67,173,264,270,282,334,450]
},{//Sneasel
l:[[10,1],[43,1],[269,1],[98,8],[185,10],[196,14],[154,16],[97,20],[232,22],[468,25],[251,28],[103,32],[163,35],[289,40],[386,44],[420,47]],
m:[468,347,92,258,237,241,269,58,59,182,240,218,216,91,247,280,104,115,332,259,263,156,213,168,490,496,206,374,373,421,371,514,14,244,404,398,138,207,214,164,249,290,555,399,612,590,15,57,70],
e:[8,44,68,180,193,228,252,274,306,364,386,419,420,458,556],
tr:[8,67,173,180,196,231,264,282,289,492]
},{//Teddiursa
l:[[10,1],[122,1],[313,1],[343,1],[374,1],[608,1],[154,8],[185,15],[230,22],[589,25],[163,29],[204,36],[156,43],[173,43],[37,50],[374,57]],
m:[468,46,92,339,237,241,269,182,240,218,89,216,91,280,104,317,332,259,263,156,213,168,496,374,421,371,514,14,523,157,207,214,164,249,290,612,590,15,70],
e:[36,38,68,69,187,214,232,238,242,281,313,370,400,498,583],
tr:[7,8,9,173,264,276,304,343,387,402,441]
},{//Ursaring
l:[[10,1],[43,1],[122,1],[313,1],[343,1],[359,1],[154,8],[185,15],[230,22],[589,25],[163,29],[184,38],[156,47],[173,49],[37,58],[359,67]],
m:[468,46,92,339,237,241,269,63,182,240,218,479,89,216,91,280,104,317,332,259,263,156,213,168,496,411,374,421,371,514,416,444,14,523,157,207,214,164,249,290,612,590,15,70],
tr:[7,8,9,67,173,253,264,276,304,343,387,402,441]
},{//Slugma
l:[[123,1],[281,1],[52,5,6],[88,10,8],[106,14,13],[510,,15],[105,19,43],[499,,20],[481,23,27],[246,28,22],[133,32,36],[436,37,34],[157,41,29],[34,46,41],[53,50,48],[414,55,50]],
m:[92,237,241,113,182,218,216,104,115,53,126,317,263,488,156,213,496,315,510,261,157,611,207,214,164,249,290,267,590],
e:[108,151,174,205,254,255,256,257,262,385,414,517],
tr:[173,220,257,334,414,495]
},{//Magcargo
l:[[52,1,6],[88,1,8],[123,1],[281,1],[414,1,58],[52,5],[88,10],[106,14,13],[510,,15],[105,19,47],[499,,20],[481,23,27],[246,28,22],[133,32,36],[436,37,34],[504,38],[157,44,29],[34,52,43],[53,59,54],[414,67]],
m:[92,237,241,63,113,182,218,76,479,89,216,104,115,53,201,126,317,263,488,156,213,496,315,510,261,153,416,397,444,360,523,157,611,207,214,164,249,290,267,590,70],
tr:[173,220,257,334,414,446,495]
},{//Swinub
l:[[33,1],[316,1],[300,5],[181,8],[189,11],[203,14],[426,18],[196,21],[420,24],[36,28],[54,35],[89,37],[175,40],[59,44],[133,48]],
m:[46,92,258,237,58,59,113,182,240,218,89,216,91,104,115,201,317,263,156,213,496,523,157,207,214,164,249,290,590,70],
e:[34,36,38,44,90,174,246,333,341,419,446,556,573],
tr:[173,196,276,283,414,446]
},{//Piloswine
l:[[64,1],[181,1],[246,1],[300,1],[316,1],[300,5],[181,8],[189,11],[203,14],[426,18],[196,21],[423,24],[36,28],[31,33],[54,37],[37,41],[89,46],[59,52],[133,58]],
m:[46,92,258,237,58,59,63,113,182,240,218,89,216,91,104,115,201,317,263,156,213,496,416,444,523,157,207,214,164,249,290,590,70],
tr:[173,196,276,283,414,446]
},{//Corsola
l:[[33,1],[106,4,1],[145,8,4],[105,10,8],[287,13],[61,17,10],[246,20,17],[381,23],[131,27,20],[362,,27],[334,29],[350,31],[203,35],[392,38],[408,41],[243,45],[414,47],[175,50]],
m:[347,92,258,237,241,58,59,113,182,240,219,218,89,216,91,94,247,104,115,201,317,263,156,213,496,503,153,397,444,523,157,207,214,164,249,290,267,590,57,70],
e:[54,103,109,112,117,133,174,267,275,293,333,352,392,457],
tr:[173,196,277,283,334,352,414,446]
},{//Remoraid
l:[[55,1],[199,6],[60,10],[62,14],[61,18],[116,22],[352,26],[324,30],[58,34],[331,38],[56,42],[63,46],[487,50]],
m:[92,237,241,58,59,63,182,240,218,479,216,94,104,53,126,263,156,213,168,496,503,451,510,86,207,214,164,290,590,57,127,291],
e:[48,62,103,114,129,173,175,190,323,341,350,352,491,494],
tr:[173,196,324,340,352,402,441]
},{//Octillery
l:[[55,1],[60,1],[62,1],[132,1],[350,1],[441,1],[132,6],[60,10],[62,14],[61,18],[116,22],[190,25],[378,28],[324,34],[58,40],[331,46],[56,52],[63,58],[487,64]],
m:[92,237,241,58,59,63,182,240,218,479,216,94,104,482,53,188,126,263,156,213,168,496,412,503,451,510,371,416,86,207,214,164,430,290,590,57,127,291],
tr:[20,173,196,324,340,352,402,441]
},{//Delibird
l:[[217,1]],
m:[92,258,237,58,59,182,240,218,216,280,104,332,263,156,213,168,496,374,524,207,214,164,290,612,590,19],
e:[8,62,98,150,191,194,196,229,248,252,301,420,516,573],
tr:[8,143,173,196,264,278,324,340,352,402,441],
s:[603]
},{//Mantine
l:[[33,1],[48,1],[60,1],[61,1],[145,1],[324,1],[331,1],[48,3],[61,7],[109,11],[17,14],[29,16],[352,19],[469,23],[36,27],[97,32],[403,36],[392,39],[340,46],[56,49]],
m:[92,258,237,58,59,63,182,240,218,89,216,104,317,332,263,156,213,496,503,512,416,523,157,207,214,164,290,590,57,127,291],
e:[21,56,114,133,150,239,243,300,346,469],
tr:[173,196,270,324,340,352,366,401,402,441,442]
},{//Skarmory
l:[[43,1],[64,1],[28,6],[129,9,23],[232,,9],[97,12,31],[31,17],[364,20],[314,23,12],[191,28],[319,31,42],[211,34],[475,39,50],[403,42,45],[163,45,39],[400,50,53]],
m:[46,92,237,241,269,182,355,218,216,104,201,317,332,259,263,156,213,168,496,211,507,371,148,14,157,404,207,214,164,430,249,290,399,590,15,19],
e:[18,65,143,174,203,228,372,385,413,446],
tr:[143,173,196,334,366,442,446]
},{//Houndour
l:[[43,1],[52,1],[336,4],[123,8],[46,13],[44,16],[316,20],[251,25],[424,28],[185,32],[373,37],[492,40],[53,44],[242,49],[417,52],[517,56]],
m:[46,92,237,241,269,182,218,76,216,247,104,53,188,126,259,263,488,156,213,168,496,315,510,261,373,371,514,138,207,214,164,249,290,555,399,590],
e:[68,83,99,179,180,194,228,251,364,386,389,417,422,424],
tr:[162,173,180,231,253,257,272,289,304,492]
},{//Houndoom
l:[[43,1],[52,1],[123,1],[336,1],[417,1],[422,1],[517,1],[336,4],[123,8],[46,13],[44,16],[316,20],[251,26],[424,30],[185,35],[373,41],[492,45],[53,50],[242,56],[417,60],[517,65]],
m:[46,92,237,241,269,63,182,218,76,216,247,104,53,188,126,259,263,488,156,213,168,496,315,510,261,373,371,514,416,138,207,214,164,249,290,555,399,590,70],
tr:[162,173,180,231,253,257,272,289,304,492]
},{//Kingdra
l:[[43,1,9],[55,1,13],[108,1,5],[145,1],[281,1],[406,1,45],[108,4],[43,8],[145,11],[116,14,26],[61,18,21],[97,23,38],[239,26,17],[362,30,31],[56,40,60],[349,48,52],[406,57]],
m:[92,258,237,58,59,63,182,240,218,216,104,263,156,213,496,503,511,416,207,214,164,430,290,590,57,127,291],
t:[434],
tr:[173,196,200,324,340,352,406,442]
},{//Phanpy
l:[[33,1],[45,1],[111,1],[316,1],[175,6],[36,10,28],[205,15,10],[363,19,15],[21,24],[203,28,19],[204,33],[387,37],[38,42]],
m:[46,92,237,241,182,218,89,216,104,201,317,263,156,213,496,497,523,157,207,214,164,249,290,590,70],
e:[34,68,90,116,173,189,246,283,420,457,484,583],
tr:[173,231,276,282,283,304,387,402,414,441,446]
},{//Donphan
l:[[30,1],[45,1],[111,1],[422,1],[424,1],[523,1],[229,6],[282,10,19],[205,15,10],[222,19,30],[21,24],[31,25],[372,31,15],[184,39,37],[89,46,43],[416,54,50]],
m:[46,92,237,241,63,182,218,89,216,104,201,317,263,156,213,496,497,416,397,444,360,523,157,398,207,214,164,249,290,590,70],
tr:[173,231,276,282,283,304,334,335,340,387,402,414,441,446]
},{//Porygon2
l:[[33,1],[111,1],[160,1],[176,1],[192,1],[277,1],[60,7],[97,12],[105,18],[393,23],[324,29],[278,34],[435,40],[199,45],[161,50],[277,56],[192,62],[63,67]],
m:[473,92,237,241,58,59,63,182,240,218,76,85,87,216,94,247,104,332,263,156,168,496,451,416,148,86,244,138,207,214,164,433,290,590],
tr:[173,196,220,231,271,277,278,324,351,356,387,393,428,472,492,527]
},{//Stantler
l:[[33,1],[382,1],[43,3],[310,7],[95,10],[23,13],[28,16],[36,21],[109,23],[347,27],[272,33],[428,38],[26,43],[286,49],[445,50],[382,55]],
m:[473,347,46,92,237,241,113,182,240,218,76,85,87,89,216,94,247,104,115,263,156,213,168,496,412,451,514,416,148,86,244,523,138,207,214,164,433,528,290,590],
e:[24,37,44,50,99,180,224,300,326,382,428],
tr:[173,180,231,253,272,285,324,340,351,356,387,428,478]
},{//Smeargle
l:[[166,1],[166,11],[166,21],[166,31],[166,41],[166,51],[166,61],[166,71],[166,81],[166,91]]
},{//Tyrogue
l:[[33,1],[193,1],[252,1],[270,1]],
m:[92,339,237,241,182,240,218,89,216,280,104,263,156,213,168,490,496,514,523,157,207,214,164,249,290,590,70],
e:[68,136,170,183,203,228,229,270,364,410,418],
tr:[67,173,253,270,272,343]
},{//Hitmontop
l:[[27,1],[279,1],[283,1],[370,1],[116,6],[228,10],[98,15],[167,19],[229,24],[68,28],[364,33],[97,37],[360,42],[469,46],[501,46],[197,50],[370,55],[283,60]],
m:[92,339,237,241,182,240,218,89,216,91,280,104,201,332,263,156,213,168,490,496,514,444,360,523,157,207,214,164,249,290,590,70],
tr:[67,173,270,272,283,343]
},{//Smoochum
l:[[1,1],[122,5],[186,8],[181,11],[93,15],[47,18],[531,21],[212,25],[313,28],[381,31],[419,35],[94,38],[383,41],[195,45],[59,48]],
m:[473,347,92,258,237,58,59,113,182,240,218,216,94,247,104,115,263,156,213,168,496,497,374,371,148,244,524,138,447,207,214,164,433,290,590],
e:[8,96,252,273,357,358,417,445],
tr:[8,173,196,215,253,270,271,272,277,278,285,324,343,352,428,478]
},{//Elekid
l:[[43,1],[98,1],[84,5],[67,8],[129,12],[351,15],[86,19],[486,22],[113,26],[9,29],[435,33],[103,36],[85,40],[87,43]],
m:[92,237,113,182,240,218,85,87,216,94,280,104,263,156,213,168,496,374,451,148,521,86,207,214,164,528,249,290,612,590],
e:[2,7,8,27,96,112,223,238,264,359,364],
tr:[7,8,9,67,173,253,264,270,324,343,351,393,527,530]
},{//Magby
l:[[43,1],[123,1],[52,5],[108,8],[185,12],[83,15],[499,19],[481,22],[109,26],[7,29],[436,33],[241,36],[53,40],[126,43]],
m:[92,237,241,182,218,216,94,280,104,53,126,263,488,156,213,168,496,315,374,510,261,207,214,164,249,290,612,590],
e:[2,5,9,103,112,116,183,187,223,231,238,384,394,562],
tr:[7,9,173,231,253,257,264,270,343,530]
},{//Miltank
l:[[33,1],[45,3],[111,5],[23,8],[208,11],[117,15],[205,19],[34,24],[428,29],[445,35],[360,41],[215,48],[358,50]],
m:[92,237,241,58,59,63,182,240,218,76,85,87,89,216,247,280,104,201,317,263,156,213,496,497,411,374,514,416,86,360,244,523,157,207,214,164,249,290,612,590,57,70],
e:[38,69,146,174,179,203,214,217,270,359,363,386,531,562],
tr:[7,8,9,173,196,215,231,264,270,335,351,352,428,442,446,495]
},{//Blissey
l:[[1,1],[38,1],[45,1],[111,1],[39,5],[287,9],[3,12],[135,16],[516,20],[107,23],[36,27],[47,31],[374,34],[505,38],[121,42],[113,46],[361,50],[38,54]],
m:[347,92,258,237,241,58,59,63,113,182,240,219,218,76,85,87,89,216,94,247,280,104,53,201,126,317,263,156,213,496,497,411,374,451,510,514,416,148,86,244,523,157,138,447,207,214,164,528,249,290,612,605,590,70],
tr:[7,8,9,173,196,215,231,264,270,278,283,285,289,304,335,343,351,352,356,387,409,428,446]
},{//Raikou
l:[[43,1],[44,1],[326,1],[435,1],[84,8],[46,15],[98,22],[209,29],[115,36],[242,43],[422,50],[435,57],[326,64],[240,71],[347,78],[87,85]],
m:[347,46,92,237,241,63,113,182,240,218,85,87,216,91,247,104,115,201,263,156,496,451,511,416,148,521,86,244,523,207,214,164,528,249,290,555,590,15,70],
tr:[173,231,324,351,393,442]
},{//Entei
l:[[43,1],[44,1],[221,1],[284,1],[326,1],[436,1],[52,8],[46,15],[83,22],[23,29],[53,36],[207,43],[424,50],[436,57],[326,64],[126,71],[347,78],[284,85]],
m:[347,46,92,237,241,63,182,240,218,76,216,91,247,104,115,53,201,126,263,488,156,496,315,510,511,261,416,148,444,244,523,207,214,164,249,290,555,590,15,70],
tr:[173,231,257,442]
},{//Suicune
l:[[43,1],[44,1],[56,1],[326,1],[366,1],[61,8],[240,15],[16,22],[62,29],[54,36],[243,43],[423,50],[366,57],[326,64],[56,71],[347,78],[59,85]],
m:[347,46,92,258,237,241,58,59,63,182,240,218,216,91,247,104,115,201,263,156,496,503,511,416,244,523,207,214,164,249,290,555,590,15,57,127,291],
tr:[173,196,231,324,352,366,442]
},{//Larvitar
l:[[43,1],[44,1],[201,5],[103,10],[498,14],[157,19],[184,23],[37,28],[399,32],[371,37],[242,41],[89,46],[444,50],[63,55]],
m:[92,237,241,269,63,182,240,218,479,89,216,91,280,104,201,317,259,263,156,213,496,371,514,397,444,523,157,207,214,164,249,290,555,399,612,590],
e:[23,116,174,200,228,231,246,334,349,372,442,446],
tr:[173,180,200,231,253,276,334,414,442,446]
},{//Pupitar
l:[[43,1],[44,1],[103,1],[201,1],[201,5],[103,10],[498,14],[157,19],[184,23],[37,28],[399,34],[371,41],[242,47],[89,54],[444,60],[63,67]],
m:[92,237,241,269,63,182,240,218,479,89,216,91,280,104,201,317,259,263,156,213,496,371,514,397,444,523,157,207,214,164,249,290,555,399,612,590],
tr:[173,180,200,231,253,276,334,414,442,446]
},{//Tyranitar
l:[[43,1],[44,1],[103,1],[201,1],[422,1],[423,1],[424,1],[201,5],[103,10],[498,14],[157,19],[184,23],[37,28],[399,34],[371,41],[242,47],[89,54],[444,63],[63,73],[416,82]],
m:[468,337,46,92,237,241,269,58,59,63,182,240,218,479,85,87,89,216,91,280,104,53,201,126,317,332,259,263,156,213,496,411,374,510,421,371,514,416,397,444,86,523,157,525,207,214,164,249,290,555,399,612,590,15,57,70],
tr:[7,8,9,67,173,180,200,231,253,264,276,334,335,351,352,401,406,414,442,446,492]
},{//Lugia
l:[[18,1],[311,1],[16,9],[407,15],[326,23],[240,29],[56,37],[177,43],[386,50],[246,57],[219,65],[105,71],[248,79],[363,85],[347,93],[143,99]],
m:[473,347,46,92,258,237,241,58,59,63,113,182,240,355,219,218,85,87,89,216,94,247,104,115,201,332,263,156,496,497,211,451,507,416,148,86,244,523,525,138,207,214,164,249,290,590,19,57,70,127,291],
tr:[143,173,196,202,231,271,285,304,324,351,352,366,401,406,414,428,442,472]
},{//Ho-Oh
l:[[18,1],[311,1],[16,9],[413,15],[326,23],[241,29],[126,37],[221,43],[386,50],[246,57],[219,65],[105,71],[248,79],[363,85],[347,93],[143,99]],
m:[347,46,92,237,241,63,113,182,240,355,219,218,76,85,87,89,216,94,247,104,115,53,201,126,332,263,488,156,496,497,315,211,451,507,510,261,416,148,86,244,523,138,207,214,164,249,290,590,19,70],
tr:[143,173,202,257,304,324,351,366,414,428,442],
s:[606]
},{//Celebi
l:[[73,1],[93,1],[105,1],[215,1],[219,10],[345,19],[246,28],[226,37],[363,46],[377,55],[248,64],[361,73],[437,82],[195,91]],
m:[347,92,237,241,63,113,182,240,219,218,76,216,94,247,104,115,201,332,263,156,496,497,412,374,451,416,148,86,14,244,138,447,207,214,369,164,433,290,267,605,590,15],
tr:[173,202,215,235,253,270,271,277,285,324,351,352,387,388,402,414,428,446,472,478],
s:[610]
},{//Treecko
l:[[1,1],[43,1],[71,6,5],[98,11,9],[228,16,17],[103,21,49],[72,26,13],[97,31,25],[21,36,29],[197,41,33],[501,,41],[283,,45],[202,46,21],[412,50,37]],
m:[92,237,241,182,219,218,76,216,91,280,104,317,332,263,156,213,496,412,374,512,148,14,157,447,207,214,164,249,290,267,612,590,15,70],
e:[13,24,73,225,235,242,283,300,306,320,331,345,363,388,437,580],
t:[520],
tr:[9,67,173,202,231,235,264,283,388,402,409]
},{//Grovyle
l:[[1,1],[43,1],[71,1,5],[98,1,9],[71,6],[98,11],[72,,13],[210,16],[228,17,18],[103,23,63],[348,29,23],[97,35,28],[21,41,33],[404,,43],[197,47,38],[206,53,48],[501,,53],[437,59,58]],
m:[92,237,241,182,219,218,76,216,91,280,104,317,332,263,156,213,490,496,412,206,374,512,148,14,157,404,447,207,214,164,249,290,267,612,590,15,70],
t:[520],
tr:[9,67,173,202,231,235,264,283,388,402,409]
},{//Sceptile
l:[[1,1],[43,1],[71,1,5],[98,1,9],[400,1],[437,1,63],[71,6],[98,11],[72,,13],[404,16,45],[210,,16],[228,17,18],[103,23,69],[348,29,23],[97,35,28],[530,,36],[21,43,33],[197,51,39],[501,,57],[206,59,51],[437,67]],
m:[468,337,46,92,237,241,63,182,219,218,76,89,216,91,280,104,317,332,263,156,213,490,496,411,412,206,374,512,416,148,14,523,157,404,447,207,214,164,249,290,267,612,590,15,70],
t:[338,520],
tr:[9,67,173,200,202,231,235,264,283,388,402,406,409,530]
},{//Torchic
l:[[10,1],[45,1],[116,7,32],[52,10,5],[64,16,14],[28,19,10],[83,25,19],[98,28,23],[481,,28],[163,34,37],[119,37,41],[53,43,46]],
m:[468,92,237,241,182,218,216,91,104,53,126,317,332,263,488,156,213,496,497,315,510,261,421,14,157,207,214,164,249,290,590,15,70],
e:[67,68,97,174,179,203,226,265,297,306,364,387,400,481],
t:[519],
tr:[67,173,257,270,340,387]
},{//Combusken
l:[[10,1],[45,1],[52,1,5],[116,1,36],[116,7],[52,13],[24,16],[64,17,14],[488,,20],[28,21,10],[339,28,31],[98,32,25],[163,39,42],[119,43,47],[327,50,53],[394,54,58]],
m:[468,92,339,237,241,182,218,216,91,280,104,53,126,317,332,263,488,156,213,490,496,497,315,411,374,510,261,421,14,157,398,207,214,164,249,290,612,590,15,70],
t:[519],
tr:[7,9,67,173,257,264,270,340,387,530]
},{//Blaziken
l:[[7,1],[10,1],[45,1],[52,1,5],[116,1,37],[136,1],[394,1,63],[116,7],[52,13],[24,16],[64,17,14],[488,,20],[28,21,10],[339,28,31],[98,32,25],[299,36],[163,42,44],[413,49,50],[327,59,57],[394,66]],
m:[468,46,92,339,237,241,63,182,218,76,89,216,91,280,104,53,126,317,332,263,488,156,213,490,496,497,315,411,374,510,261,512,421,416,444,14,523,157,398,207,214,164,249,290,612,590,15,70],
t:[307,519],
tr:[7,9,67,173,257,264,270,272,276,282,340,387,530]
},{//Mudkip
l:[[33,1],[45,1],[189,6,9],[55,10,4],[117,15,17],[193,19,12],[300,24,20],[88,,25],[36,28,36],[250,33],[182,37,28],[56,42,41],[283,46,44]],
m:[92,258,237,58,59,182,240,218,216,91,104,482,317,263,156,213,496,497,503,157,207,214,164,249,290,590,57,70,127,291],
e:[23,38,44,68,112,124,174,243,246,250,253,281,287,301,419,426,469],
t:[518],
tr:[67,173,196,231,253,276,283,352,401,414]
},{//Marshtomp
l:[[33,1],[45,1],[55,1,4],[189,1,9],[189,6],[55,10],[117,15,18],[341,16],[193,20,12],[426,25,22],[157,,28],[36,31,42],[330,37,38],[182,42,32],[89,46,48],[283,53,52]],
m:[92,258,237,58,59,182,240,218,89,216,91,280,104,482,317,263,156,213,496,497,503,374,523,157,207,214,164,249,290,612,590,57,70,127,291],
t:[518],
tr:[8,67,173,196,231,253,276,283,352,401,414,446]
},{//Swampert
l:[[33,1],[45,1],[55,1,4],[189,1,9],[359,1,63],[189,6],[55,10],[117,15,18],[341,16],[193,20,12],[426,25,22],[157,,28],[36,31,44],[330,39],[182,46,32],[89,52,51],[283,61,56],[359,69]],
m:[46,92,258,237,58,59,63,182,240,218,89,216,91,280,104,482,317,263,156,213,496,497,411,503,374,416,444,523,157,207,214,164,249,290,612,590,57,70,127,291],
t:[308,518],
tr:[8,67,173,196,200,231,253,264,276,283,352,401,414,446]
},{//Poochyena
l:[[33,1],[336,5,4],[28,9,7],[44,13,10],[316,17,13],[46,21,16],[207,25,19],[372,29,22],[184,33,25],[269,37,31],[373,41,28],[36,45,34],[389,49,40],[242,53,37]],
m:[46,92,237,241,269,182,240,218,216,91,247,104,259,263,156,213,168,496,510,373,371,514,207,214,164,249,290,555,399,590],
e:[43,214,281,289,305,310,343,382,389,422,423,424,583],
tr:[162,173,180,231,253,289,304,343,492]
},{//Mightyena
l:[[28,1,7],[33,1],[44,1,10],[242,1,44],[336,1,4],[336,5],[28,9],[44,13],[316,17,13],[555,,18],[46,22,16],[207,27,20],[372,32,24],[184,37,28],[269,42,36],[373,47,32],[36,52,40],[168,57,1],[389,62,48],[242,65]],
m:[46,92,237,241,269,63,182,240,218,216,91,247,104,259,263,156,213,168,496,510,373,371,514,416,207,214,164,249,290,555,399,590,70],
tr:[162,173,180,231,253,289,304,343,492]
},{//Zigzagoon
l:[[33,1],[45,1],[39,5],[29,9,11],[608,11,12],[28,13,7],[316,17,13],[300,21,17],[42,25,19],[343,29,23],[36,,31],[516,33,25],[175,37,29],[156,41,35],[187,45,37],[374,49,41]],
m:[468,92,237,241,58,59,182,240,218,85,87,216,91,247,104,263,156,213,168,496,497,374,451,514,86,447,207,214,164,249,290,590,15,57],
e:[189,204,214,228,270,271,321,431,493],
tr:[162,173,196,231,270,271,304,343,351,352,387,402,441]
},{//Linoone
l:[[29,1,11],[33,1],[39,1,5],[45,1],[415,1],[563,1],[583,1],[39,5],[29,9],[28,13,7],[316,17,13],[300,23,17],[154,29,19],[343,35,24],[38,,35],[516,41,27],[163,47,32],[156,53,40],[187,59,43],[374,65,48]],
m:[468,46,92,237,241,58,59,63,182,240,218,85,87,216,91,247,104,263,156,213,168,496,497,374,451,421,514,416,86,447,207,214,164,249,290,590,15,57,70],
tr:[162,173,196,231,270,271,304,343,351,352,387,402,441]
},{//Wurmple
l:[[33,1],[81,1],[40,5],[450,15]],
tr:[173,450,527]
},{//Silcoon
l:[[106,1],[106,7]],
tr:[334,450,527]
},{//Beautifly
l:[[71,1,12],[71,10],[16,13,10],[78,17,15],[234,20,17],[314,,20],[72,24,22],[18,27,30],[213,31,27],[318,34,25],[99,,37],[202,38,32],[405,41,35],[483,45,40]],
m:[92,474,237,241,63,182,355,219,218,76,216,94,247,104,332,263,156,213,168,496,412,512,416,148,522,611,207,214,369,164,290,590],
tr:[173,202,324,366,450,527]
},{//Cascoon
l:[[106,1],[106,7]],
tr:[334,450,527]
},{//Dustox
l:[[93,1,12],[93,10],[16,13,10],[77,,15],[182,17,37],[236,20,17],[474,,20],[60,24,22],[18,27,30],[113,31,27],[318,34,25],[92,38,32],[405,41,35],[483,45,40]],
m:[92,474,237,241,63,113,182,355,218,76,216,94,247,104,188,332,263,156,213,168,496,412,512,416,148,522,611,207,214,369,164,290,590],
tr:[173,202,324,366,450,527]
},{//Lotad
l:[[310,1],[45,3],[71,5,6],[267,7,24],[145,,9],[54,11,15],[363,15,12],[72,19,18],[61,25,21],[202,,30],[428,31,33],[240,37,27],[412,45,36]],
m:[92,258,237,241,58,59,182,240,218,76,216,104,263,156,213,168,496,497,412,503,148,14,447,207,214,164,290,267,590,57],
e:[55,68,73,75,175,202,230,235,298,321],
tr:[173,196,202,235,253,352,402,428]
},{//Lombre
l:[[310,1],[45,3],[71,5,6],[267,7,28],[145,,9],[252,11,16],[154,15,12],[346,19,20],[61,25,24],[428,31,40],[282,,36],[253,37,32],[56,45,44]],
m:[468,92,258,237,241,58,59,182,240,218,76,216,280,104,263,156,213,168,496,497,412,503,374,148,14,447,207,214,164,249,290,267,612,590,57,70,127,291],
tr:[7,8,9,173,196,202,235,253,282,304,352,402,409,428]
},{//Ludicolo
l:[[45,1],[72,1],[267,1],[310,1]],
m:[468,92,258,237,241,58,59,63,182,240,218,76,216,280,104,263,156,213,168,496,497,411,412,503,374,416,148,14,447,207,214,164,249,290,267,612,590,57,70,127,291],
tr:[7,8,9,173,196,202,235,253,264,282,304,352,402,409,428]
},{//Seedot
l:[[117,1],[106,3],[74,7,9],[267,13,15],[235,21],[241,31,27],[153,43,33]],
m:[92,237,241,182,218,76,216,91,247,104,263,156,213,496,412,206,153,514,148,14,447,207,214,164,249,290,267,590],
e:[13,36,73,98,133,251,331,384,388,417,432,492,580],
tr:[173,180,202,235,388,402,492]
},{//Nuzleaf
l:[[1,1],[75,1,14],[106,3],[74,7,6],[267,13,9],[252,19,12],[259,25,16],[348,,28],[185,31,24],[13,37,20],[207,43,32],[326,49,36]],
m:[92,237,241,63,182,218,76,216,91,247,280,104,317,259,263,156,213,168,490,496,412,206,374,373,153,371,514,148,14,244,157,447,207,214,164,249,290,555,267,399,612,590,15,70],
tr:[67,173,180,202,235,388,402,492]
},{//Shiftry
l:[[18,1],[75,1],[185,1],[417,1],[536,19,20],[542,,32],[437,49,44]],
m:[92,237,241,63,182,218,76,216,91,247,280,104,317,332,259,263,156,213,168,490,496,411,412,206,374,373,153,371,514,416,148,14,244,157,404,447,207,214,164,249,290,555,267,399,612,590,15,70],
tr:[67,173,180,196,202,235,282,340,366,388,402,492]
},{//Taillow
l:[[45,1],[64,1],[116,4,5],[98,7,9],[17,13],[104,19,17],[501,,25],[283,26,37],[332,34,21],[413,,41],[97,43,29],[403,53,33]],
m:[92,237,241,182,240,355,218,216,104,332,263,156,213,168,496,497,211,207,214,369,164,290,590,19],
e:[18,48,99,119,143,211,228,287,355,413,432,586],
tr:[143,173,257,283,366]
},{//Swellow
l:[[45,1],[64,1],[98,1,9],[116,1,5],[365,1],[403,1,45],[116,4],[98,7],[17,13],[104,19,17],[501,,27],[283,28,39],[332,38,21],[97,49,33],[413,,51],[403,61]],
m:[92,237,241,63,182,240,355,218,216,104,332,263,156,213,168,496,497,211,416,207,214,369,164,290,590,19],
tr:[143,173,257,283,366]
},{//Wingull
l:[[45,1],[55,1],[48,6,5],[17,9,8],[54,14,12],[352,17,15],[98,22,19],[355,26,33],[228,30,26],[314,33,22],[97,38,36],[332,42,29],[403,46,40],[542,49,43]],
m:[92,258,237,58,59,182,240,355,218,216,104,332,263,156,213,168,496,497,211,503,207,214,369,164,290,590,19],
e:[16,54,97,239,282,346,355,362,392,469,487],
tr:[143,173,196,253,282,351,352,366]
},{//Pelipper
l:[[17,1,8],[45,1],[55,1],[56,1,50],[346,1],[366,1,44],[487,1],[48,6,5],[17,9],[54,14,12],[352,17,15],[371,22,19],[182,25],[355,28,22],[362,34,28],[254,39,33],[255,39,33],[256,39,33],[374,46,39],[366,52],[56,58],[542,63,55]],
m:[92,258,237,58,59,63,182,240,355,218,216,104,332,263,156,213,168,496,497,211,503,374,507,371,416,207,214,369,164,290,590,19,57],
tr:[143,173,196,253,282,351,352,366,402,441]
},{//Ralts
l:[[45,1],[93,6,4],[104,10,6],[574,,11],[100,12,9],[381,17,14],[345,21,17],[577,,22],[505,23,19],[347,28,24],[94,32,27],[286,34,29],[248,39,32],[204,43,34],[95,45,37],[138,49,39],[500,54,42]],
m:[473,347,92,237,241,269,113,182,240,219,218,85,216,94,247,104,115,259,263,156,213,168,496,497,374,451,261,148,86,244,138,447,207,214,164,433,290,605,590],
e:[50,109,194,212,227,262,285,288,425,485,502,581],
tr:[7,8,9,173,196,220,270,271,277,278,285,289,304,324,351,428,472,478]
},{//Kirlia
l:[[45,1],[93,1,4],[100,1,9],[104,1,6],[93,6],[104,10],[574,,11],[100,12],[381,17,14],[345,22,17],[577,,23],[505,25,19],[347,31,26],[94,36,30],[286,39,33],[248,45,37],[204,50,40],[95,53,44],[138,59,47],[500,64,51]],
m:[473,347,92,237,241,269,113,182,240,219,218,85,216,94,247,104,115,259,263,156,213,168,496,497,374,451,261,148,86,244,138,447,207,214,164,433,290,605,590],
tr:[7,8,9,173,196,220,270,271,277,278,285,289,304,324,351,428,472,478]
},{//Gardevoir
l:[[45,1],[93,1,4],[100,1,9],[104,1,6],[361,1],[500,1,58],[581,1],[585,1,62],[93,6],[104,10],[574,,11],[100,12],[273,17,14],[345,22,17],[577,,23],[505,25,19],[347,33,26],[94,40,31],[286,45,35],[248,53,40],[445,60,44],[95,65,49],[138,73,53],[500,80],[585,85]],
m:[473,347,92,237,241,269,63,113,182,240,219,218,85,216,94,247,104,115,259,263,156,213,168,496,497,411,412,374,451,261,416,148,86,244,138,447,207,214,164,433,290,605,590],
tr:[7,8,9,173,196,215,220,270,271,277,278,285,289,304,324,351,428,472,478]
},{//Surskit
l:[[145,1],[98,7,6],[230,13,9],[346,19,14],[61,25,17],[453,,30],[97,31,22],[54,37,25],[114,37,25],[226,43,35],[564,46,38]],
m:[92,237,241,58,59,182,240,218,76,216,247,104,263,156,213,168,496,503,148,522,244,611,207,214,164,290,590],
e:[56,60,170,193,203,324,341,450,453,471,565],
tr:[173,196,202,324,352,450]
},{//Masquerain
l:[[18,1,48],[98,1,6],[145,1],[230,1,9],[346,1,14],[405,1,42],[466,1],[483,1,52],[98,7],[230,13],[346,19],[16,22,17],[314,,22],[184,26,22],[78,33,26],[318,40,32],[403,47,38],[18,54],[405,61],[483,68]],
m:[92,237,241,58,59,63,182,240,355,218,76,216,247,104,332,263,156,213,168,496,412,503,416,148,522,244,611,207,214,369,164,290,590],
tr:[173,196,202,324,352,366,450]
},{//Shroomish
l:[[71,1],[33,5,1],[78,9,5],[73,13,8],[72,17,12],[29,21,15],[77,25,19],[388,29,22],[74,33,29],[92,,33],[202,37,26],[402,41,36],[147,45,40]],
m:[92,474,237,241,182,219,218,76,216,104,188,263,156,213,496,412,206,148,14,447,207,214,164,290,590],
e:[204,264,270,313,331,358,363,388,402,409],
tr:[173,202,235,264,270,289,388,402,409]
},{//Breloom
l:[[33,1],[71,1],[73,1,8],[78,1,5],[33,5],[78,9],[73,13],[72,17,12],[364,,19],[29,21,15],[183,23],[68,25,22],[395,29,28],[327,33,39],[170,37,33],[402,41,44],[223,45,50]],
m:[92,339,474,237,241,63,182,219,218,76,216,280,104,188,317,263,156,213,490,496,411,412,206,374,514,416,148,444,14,157,447,207,214,164,249,290,612,590,15,70],
tr:[9,173,202,231,235,264,270,276,289,388,402,409]
},{//Slakoth
l:[[10,1],[281,1],[227,7,6],[303,13,9],[185,19,14],[133,25,17],[343,31,22],[498,37,25],[583,,38],[68,43,30],[175,49,33]],
m:[468,92,339,237,241,58,59,182,240,218,76,85,87,216,247,280,104,53,126,317,332,263,156,213,496,374,510,421,514,157,207,214,164,249,290,612,590,15,70],
e:[34,163,173,174,214,228,306,321,359,400,495],
tr:[7,8,9,173,196,264,343,351,352,441,495]
},{//Vigoroth
l:[[10,1],[116,1],[179,1,43],[227,1,6],[253,1,9],[227,7],[253,13],[154,19,14],[203,25,17],[163,31,23],[68,37,33],[498,43,27],[264,49,37],[179,55]],
m:[468,46,92,339,237,241,269,58,59,182,240,218,76,85,87,89,216,247,280,104,53,126,317,332,263,156,213,490,496,411,374,510,421,514,523,157,207,214,164,249,290,612,590,15,70],
tr:[7,8,9,67,173,196,253,264,343,351,352,441,495]
},{//Slaking
l:[[10,1],[227,1,6],[281,1],[303,1,9],[359,1,61],[374,1,47],[386,1,53],[227,7],[303,13],[185,19,14],[133,25,17],[343,31,23],[207,36],[498,37,27],[68,43,33],[175,49,39],[374,55],[386,61],[359,67]],
m:[468,46,92,339,237,241,269,58,59,63,182,240,218,76,479,85,87,89,216,247,280,104,53,126,317,332,263,156,213,490,496,411,374,510,511,421,514,416,523,157,207,214,164,249,290,612,590,15,70],
tr:[7,8,9,67,173,196,264,335,343,351,352,441,495]
},{//Nincada
l:[[10,1],[106,1],[141,5],[28,9],[154,14,13],[170,19,25],[206,25,33],[117,,29],[189,31,17],[232,38,21],[91,45,37]],
m:[468,92,237,241,182,218,76,216,91,247,104,201,332,263,156,496,206,148,522,404,207,214,164,290,590,15],
e:[16,185,203,318,400,405,450,515],
tr:[173,180,202,450]
},{//Ninjask
l:[[10,1],[28,1,9],[106,1],[141,1,5],[450,1],[141,5],[28,9],[154,14,13],[170,19,29],[103,20],[104,20],[210,20],[14,25,41],[163,31,23],[97,38,17],[226,45,35],[404,52,47]],
m:[468,92,237,241,63,182,355,218,76,216,91,247,104,201,332,263,156,213,168,496,206,416,148,14,522,404,207,214,369,164,290,590,15],
tr:[173,180,202,253,450]
},{//Shedinja
l:[[10,1],[106,1],[141,5],[28,9],[154,14,13],[170,19,25],[180,25,17],[109,31,29],[425,38,21],[288,43,37],[566,47,45],[377,50,41],[247,59,33]],
m:[468,92,237,241,63,182,218,76,216,91,247,104,201,332,263,156,168,496,206,261,421,416,148,522,404,138,207,214,164,290,590,15],
tr:[173,180,202,271,450]
},{//Whismur
l:[[1,1],[497,,4],[253,5,25],[310,11,8],[336,15,11],[48,21,18],[23,25,22],[103,31,15],[46,35,29],[485,41,43],[156,45,32],[214,45,36],[304,50,39]],
m:[46,92,237,241,58,59,182,240,218,76,216,247,104,53,126,263,156,213,496,497,374,510,514,207,214,164,290,590],
e:[36,108,173,265,283,313,326,359,509,574],
tr:[7,8,9,173,196,253,283,304,351,352,428]
},{//Loudred
l:[[1,1],[253,1,27],[310,1,9],[336,1,11],[497,,4],[253,5],[310,11],[336,15],[44,20],[48,23,18],[23,29,23],[103,37,15],[46,43,32],[485,51,50],[156,57,36],[214,57,41],[304,65,45]],
m:[46,92,237,241,269,58,59,182,240,218,76,479,89,216,247,280,104,53,126,317,259,263,156,213,496,497,315,374,510,514,523,157,207,214,164,249,290,612,590,70],
tr:[7,8,9,67,173,196,253,283,304,351,352,428]
},{//Exploud
l:[[1,1],[253,1,27],[310,1,9],[336,1,11],[422,1],[423,1],[424,1],[586,1,58],[497,,4],[253,5],[310,11],[336,15],[44,20],[48,23,18],[23,29,23],[103,37,15],[242,40],[46,45,32],[156,55,36],[485,55,53],[214,63,42],[304,71,47],[63,79,64],[586,85]],
m:[46,92,237,241,269,58,59,63,182,240,218,76,479,89,216,247,280,104,53,126,317,259,263,156,213,496,497,315,411,374,510,514,416,523,157,207,214,164,249,290,612,590,57,70],
tr:[7,8,9,67,173,196,200,253,283,304,351,352,428]
},{//Makuhita
l:[[33,1],[116,1],[28,4],[292,7],[233,10,22],[252,13,10],[18,16],[282,19],[265,22,28],[187,25],[395,28,13],[69,31],[358,34],[203,37],[370,40],[179,43],[484,46]],
m:[92,339,237,241,182,240,218,479,89,216,91,280,104,317,263,156,213,490,496,411,374,514,523,157,398,207,214,164,249,290,612,590,57,70],
e:[68,185,193,197,223,238,264,270,279,358,364,418,469,498],
tr:[7,8,9,67,173,264,270,272,276,282]
},{//Hariyama
l:[[28,1,4],[33,1],[116,1],[292,1,7],[362,1],[28,4],[292,7],[233,10,22],[252,13,10],[18,16],[282,19],[265,22,30],[187,27,26],[395,32,13],[69,37,34],[358,42,38],[203,47,42],[370,52,46],[179,57,50],[484,62,54]],
m:[92,339,237,241,63,182,240,218,479,89,216,91,280,104,317,263,156,213,490,496,411,374,371,514,416,444,523,157,398,207,214,164,249,290,612,590,57,70],
tr:[7,8,9,67,173,264,270,272,276,282,442]
},{//Azurill
l:[[55,1],[150,1],[39,2],[346,5],[145,7],[204,10],[61,13],[270,16],[21,20],[340,23]],
m:[92,258,237,58,59,113,182,240,218,216,104,263,156,213,496,503,207,214,164,290,590,57,127],
e:[21,34,47,227,287,293,313,321,330,346,383,487],
tr:[173,196,231,253,270,282,304,340,343,352]
},{//Nosepass
l:[[33,1],[106,4],[335,8,7],[88,11,10],[86,15,13],[350,18,28],[156,22,16],[209,25,19],[157,29,22],[408,32,25],[201,36,34],[435,39,31],[414,43,37],[444,46,40],[192,50,43],[199,50,43]],
m:[92,237,241,269,182,218,479,85,87,89,216,104,201,317,259,263,156,213,496,153,397,444,521,86,523,157,207,214,164,249,290,605,590,70],
e:[38,203,205,222,335,446,469],
tr:[7,8,9,173,220,277,334,335,351,356,393,414,446]
},{//Skitty
l:[[33,1],[39,1],[45,1],[252,1],[193,4],[213,8,10],[47,11,7],[574,,13],[3,15,16],[383,18,19],[274,22,31],[204,25],[185,29,22],[358,32,28],[343,36,34],[215,39,37],[38,42,40],[445,46,43],[583,49,46]],
m:[347,92,237,241,58,59,182,240,219,218,76,85,87,216,91,247,104,263,156,213,496,497,451,371,514,148,86,244,138,447,207,214,164,528,290,590],
e:[226,252,253,270,273,313,321,322,387,389,426,428,445,493],
tr:[173,196,215,231,253,270,304,343,351,352,387,428]
},{//Delcatty
l:[[3,1],[47,1],[213,1],[252,1]],
m:[347,92,237,241,58,59,63,182,240,219,218,76,85,87,216,91,247,104,263,156,213,496,497,451,371,514,416,148,86,244,138,447,207,214,164,528,249,290,590,70],
tr:[173,196,215,231,253,270,304,343,351,352,387,428]
},{//Sableye
l:[[10,1],[43,1],[212,1,46],[428,1,34],[193,4],[101,8,6],[310,11,9],[154,15,11],[252,18,21],[197,22,14],[425,25,16],[282,29,26],[185,32,19],[386,36,24],[421,39,29],[408,43,36],[511,,44],[109,46,31],[492,50,41],[428,53],[247,57,39],[212,60]],
m:[468,347,92,237,241,269,182,240,218,216,91,94,247,280,104,317,332,259,263,156,213,168,490,496,374,510,261,373,421,371,514,148,244,398,138,207,214,164,249,290,555,399,612,605,590,15],
mr:[511],
e:[105,212,236,260,271,286,364,368,389,417,445],
tr:[7,8,9,67,173,180,196,220,264,271,272,277,282,289,324,351,352,356,428,472,492]
},{//Mawile
l:[[45,1],[269,1],[310,1],[442,1,45],[583,1,49],[584,1],[313,6,5],[44,11,9],[230,16,13],[11,21,17],[185,26,21],[226,31,25],[242,36,29],[334,41,33],[389,46,37],[254,50,41],[255,50,41],[256,50,41],[442,56],[583,60]],
m:[92,237,241,269,58,63,182,240,218,76,216,247,280,104,53,188,201,126,317,259,263,156,213,496,411,206,374,451,510,373,371,416,444,14,244,157,447,207,214,164,430,249,290,399,612,590,70],
e:[21,69,246,305,321,368,385,386,389,422,423,424,445,581],
tr:[8,9,162,173,196,220,264,282,289,334,387,393,442,446,492]
},{//Aron
l:[[33,1],[106,1],[189,4],[29,8,7],[232,11,10],[317,,13],[334,15,37],[46,18,19],[36,22,28],[442,25,22],[157,,25],[182,29,16],[319,32,31],[231,36,34],[475,39,43],[484,43,46],[38,46,40],[368,50,49]],
m:[468,46,92,237,241,182,240,218,89,216,91,104,201,317,332,263,156,213,496,421,397,523,157,207,214,164,249,290,590,15,70],
e:[23,34,103,174,179,265,276,283,407,442,446,457],
tr:[173,180,231,253,276,283,334,351,352,393,414,442,446]
},{//Lairon
l:[[29,1,7],[33,1],[106,1],[189,1,4],[189,4],[29,8],[232,11,10],[317,,13],[334,15,39],[46,18,19],[36,22,28],[442,25,22],[157,,25],[182,29,16],[319,34,31],[231,40,35],[475,45,47],[484,51],[38,56,43],[368,62,55]],
m:[468,46,92,237,241,182,240,218,89,216,91,104,201,317,332,263,156,213,496,421,397,444,523,157,207,214,164,249,290,590,15,70],
tr:[173,180,231,253,276,283,334,351,352,393,414,442,446]
},{//Aggron
l:[[29,1,7],[33,1],[106,1],[189,1,4],[189,4],[29,8],[232,11,10],[317,,13],[334,15,39],[46,18,19],[36,22,28],[442,25,22],[157,,25],[182,29,16],[319,34,31],[231,40,35],[475,48,51],[484,57],[38,65,45],[368,74,63]],
m:[468,337,46,92,237,241,269,58,59,63,182,240,218,76,479,85,87,89,216,91,280,104,53,201,126,317,332,263,156,213,496,411,374,510,421,371,416,397,444,86,523,157,525,207,214,164,430,249,290,399,612,590,15,57,70],
tr:[7,8,9,67,173,180,196,200,231,253,264,276,283,334,335,351,352,393,401,406,414,442,446]
},{//Meditite
l:[[117,1],[96,4],[93,8,7],[197,11,9],[203,,12],[237,15,20],[170,18,25],[364,22,15],[347,25,23],[395,29,17],[136,32,28],[244,36,31],[367,39,33],[379,43,36],[68,,44],[179,46,39],[105,50,41]],
m:[473,347,92,339,237,241,113,182,240,218,216,94,247,280,104,115,317,263,156,213,490,496,411,374,514,148,244,157,398,138,447,207,214,164,249,290,612,590,70],
e:[7,8,9,193,223,226,252,290,384,385,409,418,427,501],
tr:[7,8,9,67,173,220,264,270,271,272,277,278,324,356,409,428]
},{//Medicham
l:[[7,1],[8,1],[9,1],[93,1,7],[96,1,4],[117,1],[197,1,9],[428,1],[96,4],[93,8],[197,11],[203,,12],[237,15,20],[170,18,25],[364,22,15],[347,25,23],[395,29,17],[136,32,28],[244,36,31],[367,42,33],[379,49,36],[68,,53],[179,55,42],[105,62,47]],
m:[473,347,92,339,237,241,63,113,182,240,218,216,94,247,280,104,115,317,263,156,213,490,496,411,412,374,514,416,148,244,157,398,138,447,207,214,164,249,290,612,590,70],
tr:[7,8,9,67,173,220,264,270,271,272,277,278,324,356,409,428]
},{//Electrike
l:[[33,1],[86,4,1],[43,9,4],[336,12,7],[98,17,10],[209,20,13],[316,25,16],[44,28,24],[422,33,19],[46,36,34],[435,41,29],[268,44],[528,49,39],[87,52,49]],
m:[46,92,237,113,182,240,218,85,87,216,104,53,263,156,213,168,496,451,148,521,86,207,214,164,528,290,555,590,70],
e:[29,129,174,242,253,351,415,422,423,424,435,481,486,598],
tr:[173,231,253,324,351,393]
},{//Manectric
l:[[33,1],[43,1,4],[86,1],[336,1,7],[424,1],[604,1,60],[86,4],[43,9],[336,12],[98,17,10],[209,20,13],[316,25,16],[44,30,24],[422,37,19],[46,42,36],[435,49,30],[268,54,48],[528,61,42],[87,66,54],[604,70]],
m:[46,92,237,63,113,182,240,218,85,87,216,104,53,263,156,213,168,496,315,451,416,148,521,86,207,214,164,528,290,555,590,70],
tr:[173,231,253,324,351,393]
},{//Plusle
l:[[45,1],[417,1,46],[494,1,49],[589,1],[609,1],[86,3,1],[98,7,1],[270,10,4],[516,,13],[209,15,7],[227,17,10],[589,21],[383,24,22],[204,,25],[486,29,19],[129,31,16],[435,,31],[313,35],[268,38,28],[87,42,43],[226,44,34],[97,48,37],[387,50,40],[417,56],[494,63]],
m:[92,237,113,182,240,218,85,87,216,104,263,156,213,496,497,374,451,148,521,86,447,207,214,164,528,290,590],
e:[47,186,273,381,435],
er:[204,313],
tr:[9,173,231,253,270,324,351,387,393,527]
},{//Minun
l:[[45,1],[417,1,46],[494,1,49],[589,1],[609,1],[86,3,1],[98,7,1],[270,10,4],[415,,13],[209,15,7],[227,17,10],[204,21],[383,24,22],[486,29,19],[129,31,16],[435,,31],[313,35,25],[268,38,28],[87,42,43],[226,44,34],[97,48,37],[376,51,40],[417,56],[494,63]],
m:[92,237,113,182,240,218,85,87,216,104,263,156,213,496,497,374,451,148,521,86,447,207,214,164,528,290,590],
e:[47,186,273,381,435],
er:[204,313],
tr:[9,173,231,253,270,324,351,387,393,527]
},{//Volbeat
l:[[33,1],[148,1],[104,5],[109,9,8],[236,13,19],[522,,15],[98,17,12],[294,21,22],[324,25,26],[182,29],[270,33,36],[428,37,33],[405,41,40],[583,,43],[38,45,47]],
m:[92,237,241,113,182,240,355,218,76,85,87,216,247,280,104,332,263,156,213,168,496,374,451,512,148,86,522,244,207,214,369,164,290,612,605,590],
e:[69,146,226,227,271,318,405],
tr:[8,9,173,202,264,270,271,324,351,352,366,428,450]
},{//Illumise
l:[[33,1],[589,1],[230,5],[204,9],[236,13,19],[522,,15],[98,17,12],[273,21,22],[227,25,26],[260,29],[270,33,36],[428,37,33],[405,41,40],[583,,43],[343,45,47]],
m:[92,237,241,113,182,240,355,218,76,85,87,216,247,280,104,332,263,156,213,168,496,374,451,512,148,86,522,244,207,214,369,164,290,612,605,590],
e:[74,109,226,227,313,318,405,445],
tr:[8,9,173,202,264,270,343,351,352,366,428,450]
},{//Roselia
l:[[71,1],[74,4],[40,7],[78,10],[72,13],[73,16],[345,19],[320,22],[202,25],[390,28],[230,31],[275,34],[80,37,50],[92,40],[312,43],[235,46],[572,50,37]],
m:[92,474,237,241,182,240,218,76,216,247,104,188,263,156,213,496,412,148,14,244,398,447,207,214,164,290,267,605,590,15],
e:[42,75,79,170,178,191,202,235,320,331,363,402,437],
tr:[173,202,235,343,388,402]
},{//Gulpin
l:[[1,1],[281,6,5],[139,9,8],[124,14,10],[133,17,12],[227,23,20],[92,28,25],[491,34,17],[254,39,28],[255,39,28],[256,39,28],[562,40,41],[188,44,33],[380,49,36],[378,54,44],[441,59,49]],
m:[92,474,237,241,58,182,240,218,76,216,247,104,482,188,263,156,213,496,153,611,138,207,214,164,249,290,612,590,70],
e:[123,151,174,189,194,220,441,599],
tr:[7,8,9,173,202,220,289,351,352,380,402,441]
},{//Swalot
l:[[1,1],[124,1,10],[139,1,8],[281,1,5],[378,1,54],[441,1,61],[281,6],[139,9],[124,14],[133,17,12],[227,23,20],[34,26],[92,30,25],[491,38,17],[254,45,30],[255,45,30],[256,45,30],[562,46,49],[188,52,37],[380,59,42],[378,66],[441,73]],
m:[92,474,237,241,58,63,182,240,218,76,89,216,247,104,482,188,263,156,213,496,153,416,523,611,138,207,214,164,249,290,612,590,70],
tr:[7,8,9,173,202,220,289,335,351,352,380,402,441]
},{//Carvanha
l:[[43,1],[44,1],[99,6,4],[116,8],[184,11,29],[423,16,25],[103,18],[207,21,22],[372,26,15],[242,28,36],[453,31,11],[305,,32],[97,36,39],[36,38,43]],
m:[92,258,237,269,58,59,182,240,218,216,104,259,263,156,213,168,496,503,371,514,207,214,164,290,555,399,590,57,127,291],
e:[37,38,56,129,194,246,362],
tr:[162,173,180,196,253,340,352,428]
},{//Sharpedo
l:[[43,1],[44,1],[99,1,4],[116,1,8],[364,1],[400,1,62],[99,6],[116,8],[184,11,29],[423,16,25],[103,18],[207,21,22],[372,26,15],[242,28,40],[163,30],[453,34,11],[305,,34],[269,40,56],[97,45],[130,50,51],[400,56]],
m:[46,92,258,237,269,58,59,63,182,240,218,89,216,104,317,259,263,156,213,168,496,503,371,514,416,523,398,207,214,164,249,290,555,399,590,57,70,127,291],
tr:[162,173,180,196,253,340,352,428]
},{//Wailmer
l:[[150,1],[45,4],[55,7],[205,11,10],[250,14,13],[310,17,16],[352,21,19],[54,24,22],[156,27,29],[362,31,25],[323,34,41],[133,37],[291,41,33],[340,44,45],[56,47,49],[484,50,53]],
m:[46,92,258,237,58,59,182,240,218,89,216,104,317,263,156,213,496,497,503,523,207,214,164,249,290,590,57,70,127,291],
e:[34,37,38,90,111,173,174,214,321,392,428,487,499],
tr:[173,196,304,340,352,428]
},{//Wailord
l:[[45,1,4],[55,1,7],[150,1],[205,1,10],[45,4],[55,7],[205,11],[250,14,13],[310,17,16],[352,21,19],[54,24,22],[156,27,25],[362,31,29],[323,34,33],[133,37],[291,46,44],[340,54,51],[56,62,58],[484,70,65]],
m:[46,92,258,237,58,59,63,182,240,218,89,216,104,317,263,156,213,496,497,503,416,523,207,214,164,249,290,590,57,70,127,291],
tr:[173,196,304,335,340,352,428,442]
},{//Numel
l:[[33,1],[45,1],[52,5],[222,8,12],[116,12,8],[481,15],[133,19],[436,22],[414,26],[174,29],[36,31],[281,36],[89,40],[53,43],[38,47]],
m:[92,237,241,182,218,89,216,91,104,53,201,126,317,263,488,156,213,496,497,315,510,261,523,157,207,214,164,249,290,267,590,70],
e:[23,34,74,111,184,203,205,246,254,255,256,257,281,336,426,442],
tr:[173,257,414,442,446,495]
},{//Camerupt
l:[[33,1],[45,1],[52,1,5],[90,1,59],[222,1,12],[284,1,52],[52,5],[222,8],[116,12,8],[481,15],[133,19],[436,22],[414,26],[174,29],[36,31],[157,33],[281,39],[89,46],[284,52],[90,59]],
m:[46,92,237,241,63,182,218,76,89,216,91,104,53,201,126,317,263,488,156,213,496,497,315,510,261,153,416,397,444,523,157,207,214,164,430,249,290,267,590,70],
tr:[173,257,414,442,446,495]
},{//Torkoal
l:[[52,1],[175,1,42],[182,1,30],[257,1,45],[504,1,47],[517,1,50],[123,4],[110,7],[174,12,22],[83,17,13],[108,20,15],[172,23,18],[229,25,10],[53,28,34],[34,33,27],[182,36],[436,39,25],[334,44,38],[133,49,40],[175,52],[257,55],[517,60],[504,65]],
m:[92,237,241,63,182,218,76,89,216,104,53,188,126,317,263,488,156,213,496,315,510,261,153,416,444,360,523,157,207,214,164,249,290,267,590,70],
e:[90,130,203,214,276,281,284,481,499],
tr:[173,231,257,276,334,414,446,495]
},{//Spoink
l:[[150,1],[149,7],[316,10],[60,14],[244,15],[109,18],[277,21],[428,26],[156,29],[173,29,33],[408,33,29],[473,38],[371,40],[94,44],[340,50]],
m:[473,347,92,237,241,269,113,182,240,218,216,94,247,104,115,259,263,156,213,168,496,451,371,148,86,244,138,447,207,214,164,433,290,590],
e:[18,133,203,243,248,271,285,326,381,428,493],
tr:[173,196,215,231,271,272,277,278,285,289,324,340,343,351,428]
},{//Grumpig
l:[[60,1,14],[149,1,7],[150,1],[316,1,10],[149,7],[316,10],[60,14],[244,15],[109,18],[277,21],[428,26],[156,29,35],[173,29,35],[298,,32],[408,35,29],[473,42],[371,46],[94,52],[340,60]],
m:[473,347,92,237,241,269,63,113,182,240,218,216,94,247,280,104,115,259,263,156,213,168,496,411,412,374,451,371,416,148,86,244,523,138,447,207,214,164,433,290,612,590],
tr:[7,8,9,173,196,215,231,264,271,272,277,278,285,289,324,340,343,351,409,428]
},{//Spinda
l:[[33,1],[253,5,37],[383,10,5],[185,14,10],[60,19,14],[95,23,19],[146,28,23],[389,32,28],[298,37,32],[244,41],[38,46],[37,50,55],[175,50]],
m:[347,92,237,241,182,240,219,218,216,91,94,247,280,104,317,263,156,213,168,496,374,514,148,244,157,138,207,164,433,528,249,290,612,590,70],
mr:[214],
e:[50,196,226,227,229,252,265,271,272,273,274,313,352,375,427,470],
tr:[7,8,9,67,173,196,253,264,270,271,272,278,285,289,304,343,351,352,387,409,428]
},{//Trapinch
l:[[44,1],[90,1,47],[276,1,40],[364,1,29],[28,4,1],[185,7,1],[328,10,12],[189,13,5],[117,17,1],[523,21,8],[157,25,15],[91,29,19],[242,34,22],[414,39,26],[201,44,36],[63,49,43],[89,55,33],[364,61],[276,67],[90,73]],
m:[92,237,241,63,182,218,76,89,216,91,104,201,317,263,156,213,496,522,523,157,207,214,164,249,290,590,70],
e:[16,98,116,175,203,210,324,341,414,450],
tr:[173,202,276,324,414,450]
},{//Vibrava
l:[[28,1],[49,1],[185,1],[328,1,12],[28,4],[185,7],[328,10],[189,13,5],[117,17,1],[523,21,8],[157,25,15],[48,29,19],[405,,29],[89,,33],[103,34,22],[225,35],[414,39,26],[253,,40],[201,44,36],[586,,47],[63,49,43]],
m:[92,237,241,63,182,355,218,76,89,216,91,104,201,317,263,156,213,496,211,522,523,157,207,214,369,164,249,290,590,19,70],
t:[434],
tr:[173,200,202,253,257,276,324,366,406,414,450]
},{//Flygon
l:[[28,1],[49,1],[185,1],[328,1,12],[28,4],[185,7],[328,10],[189,13,5],[117,17,1],[523,21,8],[157,25,15],[48,29,19],[89,,33],[103,34,22],[225,35],[414,39,26],[253,,40],[201,44,36],[525,45,29],[407,,47],[63,49,43],[337,55,45]],
m:[468,337,92,237,241,63,182,355,218,76,89,216,91,104,53,201,126,317,332,263,156,213,496,211,510,416,444,522,523,157,525,207,214,369,164,249,290,612,590,19,70],
t:[434],
tr:[7,9,173,200,202,231,253,257,276,324,366,406,414,450]
},{//Cacnea
l:[[40,1],[43,1],[71,5,4],[74,9,7],[73,13,10],[28,17,13],[42,21,38],[275,25,22],[185,29,19],[191,33,30],[389,37,34],[371,41,26],[412,,42],[302,45,16],[178,49,46],[201,53,50],[194,57,54]],
m:[92,474,237,241,182,218,76,216,280,104,201,263,156,213,496,412,374,371,148,14,398,447,207,214,164,290,267,399,612,590,15],
e:[50,51,67,68,223,265,298,320,335,345,388,402,415,417,562,563,565],
tr:[9,67,173,180,202,235,264,272,335,388,402,409]
},{//Cacturne
l:[[40,1],[43,1],[71,1,4],[74,1,7],[194,1,59],[279,1],[71,5],[74,9],[73,13,10],[28,17,13],[42,21,38],[275,25,22],[185,29,19],[596,,32],[191,35,30],[389,41,35],[412,,44],[371,47,26],[302,53,16],[178,59,49],[201,65,54],[194,71]],
m:[92,474,237,241,63,182,218,76,216,280,104,201,263,156,213,496,411,412,374,373,371,514,416,148,14,398,447,207,214,164,290,267,399,612,590,15,70],
tr:[9,67,173,180,202,235,264,272,276,335,388,402,409,492]
},{//Swablu
l:[[45,1],[64,1],[310,4,3],[47,8,5],[31,10,7],[574,,11],[219,13,9],[54,15,14],[496,18,17],[363,21,20],[36,25,23],[287,29,26],[119,34,30],[538,39,34],[406,42,38],[195,48,42],[585,50,46]],
m:[92,237,241,58,182,240,355,219,218,76,216,104,332,263,156,213,168,496,497,211,244,138,207,214,164,290,605,590,19],
e:[97,99,114,211,228,297,304,355,384,407],
tr:[143,173,200,215,253,257,304,366,406]
},{//Altaria
l:[[45,1],[47,1,5],[64,1],[143,1,59],[310,1,3],[365,1],[310,4],[47,8],[31,10,7],[574,,11],[219,13,9],[54,15,14],[496,18,17],[363,21,20],[36,25,23],[287,29,26],[349,34,30],[225,35],[538,42,34],[406,48,40],[195,57,46],[585,60,52],[143,64]],
m:[468,337,46,92,237,241,58,63,182,240,355,219,218,76,89,216,104,53,126,332,263,156,213,168,496,497,211,510,416,244,523,138,207,214,164,249,290,605,590,19],
t:[434],
tr:[143,173,200,215,231,253,257,304,366,406,472]
},{//Zangoose
l:[[10,1],[43,1],[98,5],[210,8],[228,12],[163,15,19],[468,,15],[373,19,33],[306,22,26],[279,26,22],[206,29],[197,33,36],[404,36,40],[269,40,43],[14,43,47],[370,47,50]],
m:[468,46,92,237,241,269,58,59,182,240,218,76,85,87,216,91,247,280,104,53,126,317,332,263,156,213,168,496,411,206,374,510,373,421,371,514,14,157,404,398,207,214,164,249,290,612,590,70],
e:[13,24,50,68,154,174,175,231,232,364,400,458,501,515],
tr:[7,8,9,67,173,196,202,231,264,282,283,351,352,387]
},{//Seviper
l:[[35,1],[207,1],[44,5,4],[122,9,7],[342,12,10],[103,16,13],[474,20,16],[137,23,19],[305,27,22],[599,28,25],[400,31,28],[380,34,31],[114,38,37],[398,42,34],[242,45,40],[562,46,43],[489,48,46],[378,50,49]],
m:[92,474,237,241,269,182,240,218,89,216,91,104,482,53,188,263,156,213,168,496,371,514,523,404,525,611,398,207,214,164,249,290,399,590,70],
e:[34,184,231,254,255,256,372,378,386,400,415,515],
tr:[20,173,202,231,282,289,380,401]
},{//Lunatone
l:[[33,1],[88,1],[93,1],[106,1],[478,1,49],[88,5],[95,9,5],[397,13,9],[149,17,13],[373,21,17],[157,25,21],[322,29,25],[94,33,29],[377,37,33],[444,41,37],[248,45,41],[153,49,45],[585,50,1],[478,53]],
m:[473,347,92,237,58,59,63,113,182,240,219,218,479,89,216,94,247,104,115,201,317,263,156,496,451,512,373,153,416,397,148,444,360,244,523,157,138,447,207,214,164,433,290,590],
tr:[173,196,220,270,277,278,285,324,356,414,428,442,446,478]
},{//Solrock
l:[[33,1],[88,1],[93,1],[106,1],[472,1,49],[88,5],[83,9,5],[397,13,9],[149,17,13],[373,21,17],[157,25,21],[322,29,25],[94,33,29],[377,37,33],[444,41,37],[76,45,41],[153,49,45],[472,53]],
m:[473,347,92,237,241,63,113,182,219,218,76,479,89,216,94,247,104,115,53,201,126,317,263,156,496,315,451,510,261,512,373,153,416,397,148,444,360,244,523,157,138,447,207,214,164,433,290,590],
tr:[173,220,257,270,277,278,285,324,334,356,414,428,442,446,472]
},{//Barboach
l:[[189,1],[300,6],[346,6],[55,10,9],[426,14,13],[133,18,15],[352,22,17],[222,26,20],[156,31,25],[173,31,25],[401,35,28],[330,,35],[89,39,32],[248,43,39],[90,47,44]],
m:[92,258,237,58,59,182,240,218,89,216,104,201,317,263,156,213,496,503,523,207,214,164,290,590,57,127,291],
e:[36,37,56,175,209,250,330,341,349,414],
tr:[173,196,340,352,401,414]
},{//Whiscash
l:[[189,1],[300,1,6],[321,1],[346,1,6],[428,1,30],[300,6],[346,6],[55,10,9],[426,14,13],[133,18,15],[352,22,17],[222,26,20],[156,33,25],[173,33,25],[401,39,28],[330,,39],[89,45,34],[248,51,45],[90,57,52]],
m:[92,258,237,58,59,63,182,240,218,89,216,104,201,317,263,156,213,496,503,416,444,523,157,207,214,164,249,290,590,57,70,127,291],
tr:[173,196,340,352,401,414,428]
},{//Corphish
l:[[145,1],[106,7,5],[11,10,7],[43,13,10],[61,20,14],[458,,20],[182,23,17],[282,26,23],[534,,31],[269,32,34],[400,35,26],[152,38,43],[14,44,37],[242,47,39],[12,53,48]],
m:[468,92,258,237,269,58,59,182,240,218,216,91,280,104,188,317,332,263,156,213,496,206,503,374,371,14,157,404,207,214,164,249,290,590,15,57,70,127],
e:[34,38,232,246,276,282,283,300,349,376,415,453,498],
tr:[173,180,196,276,282,283,334,352]
},{//Crawdaunt
l:[[11,1,7],[12,1,54],[43,1,10],[106,1,5],[145,1],[106,7],[11,10],[43,13],[61,20,14],[458,,20],[182,23,17],[282,26,23],[129,30],[534,,32],[269,34,36],[400,39,26],[152,44,48],[14,52,40],[242,57,43],[12,65]],
m:[468,92,258,237,269,58,59,63,182,240,218,216,91,280,104,482,188,317,332,263,156,213,496,206,503,374,371,514,416,14,157,404,207,214,164,249,290,555,267,399,590,15,57,70,127,291],
tr:[173,180,196,276,282,283,334,352]
},{//Baltoy
l:[[93,1],[106,1],[229,4],[189,7],[317,10,13],[60,13,16],[379,17,25],[246,21,19],[120,25,28],[326,28,31],[322,31,22],[470,34],[471,34],[414,37],[201,41,40],[286,,43],[377,45,10],[153,49,46]],
m:[473,347,92,237,241,58,113,182,240,219,218,76,479,89,216,91,94,247,104,115,201,317,263,156,496,451,153,397,148,360,244,523,157,138,447,207,214,164,433,290,605,590],
tr:[173,271,277,278,285,324,356,414,428,446,472,529]
},{//Claydol
l:[[93,1],[100,1],[106,1],[229,1,4],[229,4],[189,7],[317,10,13],[60,13,16],[379,17,25],[246,21,19],[120,25,28],[326,28,31],[322,31,22],[470,34],[471,34],[63,36],[414,40],[201,47,46],[286,,52],[377,54,10],[153,61,58]],
m:[473,347,92,237,241,58,63,113,182,240,219,218,76,479,89,216,91,94,247,104,115,201,317,263,156,496,451,153,416,397,148,444,360,244,523,157,138,447,207,214,164,433,249,290,605,590,70],
tr:[173,271,277,278,285,324,356,414,428,446,472,529]
},{//Lileep
l:[[132,1],[310,1],[51,8,5],[275,15,9],[362,,21],[109,22,13],[202,,26],[133,29,36],[380,36,31],[246,43,17],[412,50,41],[254,57,46],[255,57,46],[256,57,46],[378,64,52]],
m:[92,237,241,182,218,76,479,216,104,188,201,317,263,156,213,496,412,397,148,14,157,611,447,207,214,164,290,590],
e:[72,105,112,174,203,243,321,378,446],
tr:[20,173,202,220,235,380,388,402,414,446]
},{//Cradily
l:[[51,1,5],[132,1],[254,1,52],[255,1,52],[256,1,52],[275,1,9],[310,1],[378,1,61],[51,8],[275,15],[362,,21],[109,22,13],[202,,26],[133,29,36],[246,36,17],[380,46,31],[412,56,44],[254,66],[255,66],[256,66],[378,76]],
m:[92,237,241,63,182,218,76,479,89,216,104,482,188,201,317,263,156,213,496,412,416,397,148,444,14,523,157,611,447,207,214,164,249,290,590,70],
tr:[20,173,202,220,235,335,380,388,402,414,446]
},{//Anorith
l:[[10,1],[106,1],[300,7,4],[55,13,7],[479,,13],[232,19,17],[182,25,49],[450,,25],[362,,29],[246,31,21],[210,37,10],[163,43,34],[350,49,55],[306,55,39],[404,61,44]],
m:[468,92,237,241,182,218,479,216,91,280,104,201,317,332,263,156,213,496,206,397,14,522,157,404,207,214,164,249,290,590,15],
e:[28,103,174,229,282,334,352,440,453],
tr:[173,282,334,352,414,446,450]
},{//Armaldo
l:[[10,1],[55,1,7],[106,1],[300,1,4],[306,1,39],[300,7],[55,13],[479,,13],[232,19,17],[182,25,53],[362,,29],[246,31,21],[210,37,10],[163,46,34],[350,55,61],[306,67],[404,73,46]],
m:[468,92,237,241,63,182,218,479,89,216,91,280,104,201,317,332,263,156,213,496,206,416,397,444,14,522,523,157,404,207,214,164,430,249,290,590,15,70],
tr:[67,173,231,276,282,334,335,352,401,414,446,450]
},{//Feebas
l:[[150,1],[33,15],[175,30]],
m:[92,258,237,58,59,113,182,240,218,216,104,263,156,213,496,503,207,214,164,290,590,57,127,291],
e:[54,95,109,114,225,231,243,300,321,362,406,445],
tr:[173,196,231,352,406]
},{//Milotic
l:[[35,1],[55,1],[346,5,4],[287,9,7],[574,,11],[352,13,17],[239,17,14],[105,21,31],[445,25,24],[525,,27],[401,29,34],[240,33,51],[56,37,47],[213,41,37],[489,,44],[219,45,41],[392,49,21]],
m:[92,258,237,58,59,63,113,182,240,219,218,216,104,263,156,213,496,503,416,244,523,525,207,214,164,290,590,57,127,291],
tr:[20,173,196,231,277,352,401,406,442]
},{//Castform
l:[[33,1],[52,10],[55,10],[181,10],[29,15],[240,20],[241,20],[258,20],[311,30,25],[56,40,35],[59,40,35],[126,40,35],[542,,45]],
m:[92,258,237,241,58,59,182,240,218,76,85,87,216,247,104,53,201,126,263,156,213,168,496,412,503,510,514,148,86,244,207,214,164,290,590],
e:[50,133,248,322,381,385,466,499,506,513],
tr:[173,196,351,352,366,387]
},{//Kecleon
l:[[10,1],[39,1],[122,1],[168,1],[246,1,21],[310,1],[485,1,50],[20,4],[185,7,16],[154,10,13],[364,14,10],[60,18],[425,22,7],[163,27,25],[293,,30],[103,32,38],[164,37,42],[389,43,46],[421,49,33],[246,55],[485,58]],
m:[468,92,237,241,58,59,182,240,218,76,85,87,216,91,247,280,104,53,126,317,332,263,156,213,168,496,374,451,510,421,514,148,86,244,157,447,207,214,164,433,249,290,612,590,15,70],
e:[50,105,146,252,271,277,285,289,293,417,492],
tr:[7,8,9,20,67,173,196,231,264,271,272,277,278,282,285,289,351,352,387,401,409,446,472,492,495]
},{//Shuppet
l:[[282,1],[103,4],[101,7],[180,10],[261,13,16],[425,16,13],[174,19,26],[185,22,19],[506,26,22],[247,30],[389,34,38],[373,38,34],[289,42],[288,46],[271,50],[566,,54]],
m:[347,92,237,241,269,182,240,218,85,87,216,94,247,104,259,263,156,213,168,496,451,261,373,371,148,86,244,138,207,214,164,433,290,399,605,590],
e:[50,109,193,194,228,286,310,425,441,466,566],
tr:[173,180,196,220,271,272,277,282,285,289,351,478,492]
},{//Banette
l:[[101,1,7],[103,1,4],[174,1,26],[282,1],[103,4],[101,7],[180,10,1],[261,13,16],[425,16,13],[174,19],[185,22,19],[506,26,22],[247,30],[389,34,40],[373,40,34],[289,46],[288,52],[271,58],[566,,64]],
m:[347,92,237,241,269,63,182,240,218,85,87,216,94,247,104,259,263,156,213,168,496,374,451,261,373,421,371,416,148,86,244,611,138,207,214,164,433,290,399,605,590],
tr:[173,180,196,220,271,272,277,282,285,289,351,478,492]
},{//Duskull
l:[[43,1],[101,1],[50,6],[193,9,14],[310,14,9],[109,17,30],[425,22,17],[228,25,22],[174,30,33],[261,33,25],[506,38],[212,41,46],[247,,41],[371,46,49],[248,49,54]],
m:[347,92,237,241,269,58,59,182,240,218,216,94,247,104,259,263,156,213,168,496,374,451,261,373,371,148,244,611,138,207,214,164,433,290,399,590],
e:[114,185,194,220,262,285,286,288,399,466],
tr:[173,180,196,220,271,285,289,356,472]
},{//Dusclops
l:[[7,1],[8,1],[9,1],[20,1],[43,1],[50,1,6],[101,1],[356,1],[50,6],[193,9,14],[310,14,9],[109,17,30],[425,22,17],[228,25,22],[174,30,33],[261,33,25],[325,37],[506,42,40],[247,,45],[212,49,52],[371,58,57],[248,61,64]],
m:[347,92,237,241,269,58,59,63,182,240,218,89,216,94,247,280,104,317,259,263,156,213,168,496,374,451,261,373,371,416,148,244,523,157,611,138,207,214,164,433,249,290,399,612,590,70],
tr:[7,8,9,20,173,180,196,220,264,271,285,289,356,472]
},{//Tropius
l:[[16,1],[43,1],[363,1,30],[437,1,61],[516,1,46],[74,7,1],[75,11,1],[23,17,10],[230,21,6],[18,27,21],[345,31,16],[34,37,41],[235,41,50],[536,47,26],[403,50,36],[516,57],[76,61,56],[363,67],[437,71]],
m:[46,92,237,241,63,182,355,219,218,76,89,216,104,332,263,156,213,496,211,412,416,148,14,523,447,207,214,164,249,290,267,590,15,19,70],
e:[13,21,29,73,174,235,267,331,348,349,363,437],
tr:[173,200,202,235,366,388,402,406]
},{//Chimecho
l:[[35,1],[361,1,57],[485,1,52],[45,6,4],[310,9,7],[93,14,10],[253,17,32],[36,22,19],[281,25,13],[149,30,16],[38,33,42],[215,38,27],[219,41,37],[326,46,22],[505,49,47],[485,54],[361,57]],
m:[473,347,92,237,241,269,113,182,240,219,218,216,94,247,104,115,259,263,156,213,496,497,412,451,148,86,244,138,447,207,214,164,433,290,605,590],
e:[50,95,105,174,248,273,285,322,500],
tr:[20,173,196,215,253,270,271,277,278,282,285,289,304,324,351,356,387,428]
},{//Absol
l:[[10,1],[13,1,49],[195,1,57],[197,1,33],[269,1,13],[364,1],[382,1,41],[43,4,1],[98,9,7],[228,12,10],[269,17],[44,20,16],[104,25,19],[163,28,22],[14,33,25],[248,36,53],[400,41,29],[197,44],[427,47,37],[389,50,45],[13,57],[382,60],[195,65]],
m:[468,347,92,258,237,241,269,58,59,63,182,240,218,85,87,216,247,104,53,201,126,317,332,259,263,156,213,168,496,497,206,451,510,261,421,371,514,416,148,444,86,14,244,157,404,138,207,214,164,249,290,555,399,590,15,70],
e:[38,174,185,195,212,224,226,277,372,382,386,389,428,506,583],
tr:[173,180,196,231,272,276,277,282,289,340,351,352,428,492]
},{//Wynaut
l:[[150,1],[204,1],[227,1],[68,15],[194,15],[219,15],[243,15]],
m:[219]
},{//Snorunt
l:[[43,1],[181,1],[104,4,5],[44,10,19],[196,13,14],[29,19,28],[182,22,32],[423,28,23],[242,31,41],[420,37,10],[524,,37],[258,40,50],[59,46]],
m:[92,258,237,58,59,113,182,240,219,218,216,247,104,263,156,213,496,148,524,207,214,164,290,590],
e:[50,117,191,205,311,313,335,415,419,506],
tr:[173,180,196,335,352]
},{//Glalie
l:[[43,1],[44,1,19],[104,1,5],[181,1],[329,1,61],[104,4],[44,10],[420,,10],[196,13,14],[29,19,28],[182,22,32],[423,28,23],[242,31,41],[58,37],[524,,37],[258,40,54],[573,,42],[59,51,48],[329,59]],
m:[92,258,237,269,58,59,63,113,182,240,219,218,89,216,247,104,259,263,156,213,496,153,371,416,148,360,523,524,207,214,164,290,399,590],
tr:[162,173,180,196,324,335,352,442]
},{//Spheal
l:[[45,1],[55,1],[111,1],[181,1],[205,,5],[227,7,9],[301,13],[362,,17],[34,19,26],[62,25,21],[258,31,36],[156,37,31],[173,37,31],[59,43,41],[329,49,46]],
m:[92,258,237,58,59,182,240,218,89,216,104,317,263,156,213,496,497,523,524,157,207,214,164,249,290,590,57,70,127,291],
e:[90,174,187,205,214,254,255,256,281,324,346,352,392],
tr:[162,173,196,231,324,352,401]
},{//Sealeo
l:[[45,1],[55,1],[181,1],[227,1,9],[111,,1],[205,,5],[227,7],[301,13],[362,,17],[34,19,26],[62,25,21],[258,31,38],[207,32],[156,39,31],[173,39,31],[59,47,45],[329,55,52]],
m:[46,92,258,237,58,59,182,240,218,89,216,104,317,263,156,213,496,497,523,524,157,207,214,164,249,290,590,57,70,127,291],
tr:[162,173,196,231,324,352,401]
},{//Walrein
l:[[45,1],[55,1],[181,1],[227,1,7],[242,1],[111,,1],[227,7],[205,,7],[301,13],[34,19,25],[362,,19],[62,25,19],[258,31,38],[207,32],[156,39,31],[173,39,31],[423,44],[59,52,49],[329,65,60]],
m:[46,92,258,237,58,59,63,182,240,218,89,216,104,317,263,156,213,496,497,416,523,524,157,207,214,164,249,290,590,57,70,127,291],
tr:[162,173,196,231,324,335,352,401,442]
},{//Clamperl
l:[[55,1],[128,1],[250,1],[334,1],[504,50]],
m:[92,258,237,58,59,182,240,218,216,104,263,156,213,496,503,207,214,164,290,590,57,127,291],
e:[34,48,109,112,203,287,300,330,352,362,392],
tr:[173,196,334,352]
},{//Huntail
l:[[250,1],[44,6,1],[103,10,5],[185,,11],[352,15,14],[184,19,9],[389,,23],[423,24,16],[362,28,19],[226,33,29],[291,37,26],[242,42,34],[489,,45],[401,46,39],[56,50]],
m:[92,258,237,58,59,63,182,240,218,216,104,317,263,156,213,496,503,416,611,207,214,164,290,590,57,127,291],
tr:[20,162,173,196,289,340,352,401]
},{//Gorebyss
l:[[250,1],[346,,5],[93,6,1],[97,10,9],[577,,11],[352,15,14],[133,19,16],[392,24,19],[445,28,23],[226,33,29],[291,37,26],[94,42,34],[489,,45],[401,46,39],[56,50]],
m:[92,258,237,58,59,63,182,240,219,218,216,94,247,104,263,156,213,496,503,416,244,611,207,214,164,290,590,57,127,291],
tr:[20,173,196,324,340,352,401]
},{//Relicanth
l:[[33,1],[56,1,46],[106,1],[246,1,21],[300,1,6],[457,1,56],[55,8,10],[317,15],[281,22,35],[36,29,31],[300,36],[246,43],[38,50],[291,57,26],[156,64,41],[56,71],[457,78]],
m:[347,92,258,237,58,59,63,182,240,219,218,479,89,216,104,201,317,263,156,213,496,503,416,397,444,244,523,157,207,214,164,249,290,590,57,127,291],
e:[130,133,173,189,214,222,330,341,346,362,401,428],
tr:[173,196,340,352,401,414,428,446]
},{//Luvdisc
l:[[33,1],[204,4,1],[55,7,4],[97,9,7],[577,,9],[36,14,37],[381,17,14],[352,22,17],[213,27,22],[175,31,27],[186,37,31],[56,40,50],[392,46,40],[445,50,46],[219,55]],
m:[92,258,237,58,59,182,240,219,218,216,104,263,156,213,496,503,244,207,214,164,290,590,57,127,291],
e:[48,150,300,346,362,392,445,453,494,505],
tr:[173,196,340,352]
},{//Bagon
l:[[99,1],[44,5,10],[43,10,7],[29,16,17],[116,20,21],[52,25,4],[225,31,13],[428,35,34],[184,40,39],[53,,44],[242,46,25],[337,50,29],[38,55,49]],
m:[468,337,46,92,237,241,182,240,218,216,280,104,53,126,317,332,263,156,213,496,510,421,157,207,214,164,249,290,590,15,70],
e:[37,56,82,111,203,239,349,406,407,424],
t:[434],
tr:[173,200,304,406,428]
},{//Shelgon
l:[[29,1,17],[43,1,7],[44,1,10],[99,1],[44,5],[43,10],[29,16],[116,20,21],[52,25,4],[182,30],[225,32,13],[428,37,35],[184,43,42],[53,,49],[242,50,25],[337,55,29],[38,61,56]],
m:[468,337,46,92,237,241,182,240,218,216,280,104,53,126,317,332,263,156,213,496,510,421,157,207,214,164,249,290,590,15,70],
t:[434],
tr:[173,200,304,334,406,428]
},{//Salamence
l:[[29,1,17],[38,1,63],[43,1,7],[44,1,10],[99,1],[422,1],[424,1],[44,5],[43,10],[29,16],[116,20,21],[52,25,4],[182,30],[225,32,13],[428,37,35],[184,43,42],[53,,49],[19,50],[242,53,25],[337,61,29],[38,70],[525,80,1]],
m:[468,337,46,92,237,241,63,182,240,355,218,89,216,280,104,53,126,317,332,263,156,213,496,211,510,421,416,444,523,157,525,207,214,164,249,290,590,15,19,70],
t:[434],
tr:[173,200,231,257,304,366,401,406,428]
},{//Beldum
l:[[36,1]],
tr:[334,428,442],
s:[610]
},{//Metang
l:[[36,1],[93,1,20],[232,1,20],[393,1],[93,20],[232,20],[228,23],[357,26,29],[428,29,32],[418,32,26],[184,35],[97,38,41],[94,41,38],[309,44],[334,47],[63,50]],
m:[468,473,92,237,241,63,113,182,240,218,89,216,94,247,280,104,115,188,201,317,332,263,156,496,153,397,148,360,244,523,157,447,207,214,164,430,249,290,612,590,15,70],
tr:[8,9,173,196,271,324,334,356,393,428,442,446]
},{//Metagross
l:[[36,1],[93,1,20],[232,1,20],[393,1],[93,20],[232,20],[228,23],[357,26,29],[428,29,32],[418,32,26],[184,35],[97,38,41],[94,41,38],[309,44],[359,45],[334,53,52],[63,62,60]],
m:[468,473,92,237,241,63,113,182,240,218,89,216,94,247,280,104,115,188,201,317,332,263,156,496,153,416,397,148,360,244,523,157,447,207,214,164,430,249,290,612,590,15,70],
tr:[8,9,173,196,271,324,334,335,356,393,428,442,446]
},{//Regirock
l:[[23,1],[153,1],[192,1,55],[199,1,55],[359,1,49],[88,9,7],[174,17,25],[523,,19],[276,25,61],[246,33,31],[334,41,37],[451,49,13],[199,57],[192,65],[444,73,43],[359,81],[63,89,67]],
m:[92,237,241,63,182,219,218,479,85,87,89,216,91,280,104,201,317,263,156,496,411,374,451,153,416,397,444,86,244,523,157,207,214,164,249,290,612,590,70],
tr:[7,8,9,173,264,276,334,335,351,356,409,414,442,446]
},{//Regice
l:[[23,1],[153,1],[192,1,55],[199,1,55],[359,1,49],[196,9,7],[174,17,25],[523,,19],[276,25,61],[246,33,31],[133,41,37],[451,49,13],[199,57],[192,65],[58,73,43],[359,81],[63,89,67]],
m:[92,258,237,58,59,63,182,240,219,218,85,87,89,216,280,104,317,263,156,496,411,374,451,153,416,397,86,244,523,524,157,207,214,164,430,249,290,612,590,70],
tr:[8,9,173,196,264,276,324,335,351,356,442]
},{//Registeel
l:[[23,1],[153,1],[192,1,55],[199,1,55],[359,1,49],[442,1,43],[232,9,7],[174,17,25],[523,,19],[276,25,61],[246,33,31],[133,41,37],[334,41,37],[451,49,13],[199,57],[192,65],[430,73,43],[442,73],[359,81],[63,89,67]],
m:[468,92,237,241,63,182,240,219,218,85,87,89,216,280,104,201,317,332,263,156,496,411,374,451,153,421,416,397,86,244,523,157,207,214,164,430,249,290,612,590,70],
tr:[8,9,173,264,276,334,335,351,356,393,442,446]
},{//Latias
l:[[149,1],[204,1,7],[361,1,61],[406,1,56],[470,1,46],[505,1,16],[513,1,36],[273,5,1],[270,10,1],[500,,10],[219,15,1],[225,20],[346,25,4],[287,30,13],[296,35,24],[428,40,41],[105,45,32],[375,50,28],[204,55],[94,60,51],[505,65],[513,70],[470,75],[406,80],[361,85]],
m:[468,337,473,347,46,92,237,241,58,63,113,182,240,355,219,218,76,85,87,89,216,94,247,104,115,201,332,263,156,213,496,211,412,451,421,514,416,148,86,244,523,138,447,207,214,164,290,590,15,19,57,127,291],
t:[434],
tr:[173,196,200,270,271,272,277,343,351,352,366,387,406,428,478]
},{//Latios
l:[[149,1],[262,1,61],[349,1,7],[406,1,56],[471,1,46],[477,1,36],[505,1,16],[377,5,1],[270,10,1],[500,,10],[219,15,1],[225,20],[182,25,4],[287,30,13],[295,35,24],[428,40,41],[105,45,32],[375,50,28],[349,55],[94,60,51],[505,65],[477,70],[471,75],[406,80],[262,85]],
m:[468,337,473,347,46,92,237,241,58,63,113,182,240,355,219,218,76,85,87,89,216,94,247,104,115,201,332,263,156,213,496,211,412,451,421,514,416,148,86,244,523,138,447,207,214,164,290,590,15,19,57,127,291],
t:[434],
tr:[173,196,200,270,271,277,351,352,366,387,406,428,472]
},{//Kyogre
l:[[352,1],[184,5],[34,15,20],[330,20,60],[392,30],[58,35],[246,45,1],[618,,45],[323,50,90],[347,60,50],[401,65,15],[329,75,65],[38,80],[56,90,75]],
m:[347,46,92,258,237,58,59,63,182,240,219,218,85,87,89,216,280,104,317,263,156,496,503,416,86,244,523,157,207,214,164,249,290,590,57,70,127,291],
tr:[173,196,253,324,335,351,352,401,442]
},{//Groudon
l:[[341,1],[184,5],[436,15,20],[359,20,80],[156,30],[89,35],[246,45,1],[619,,45],[284,50,90],[339,60,50],[414,65,15],[90,75,65],[76,80,60],[126,90,75]],
m:[468,337,46,92,339,237,241,63,182,219,218,76,479,85,87,89,216,91,280,104,53,201,126,317,332,263,156,496,315,411,374,510,421,416,397,444,86,14,244,523,157,525,207,214,164,249,290,612,590,15,70],
tr:[7,9,173,231,253,335,351,406,414,442,446]
},{//Rayquaza
l:[[239,1],[184,5],[242,15,20],[304,20,75],[156,30,35],[403,35,30],[246,45,15],[200,50,80],[349,60],[19,65],[245,75,45],[63,80,90],[406,90,50]],
m:[468,337,46,92,339,237,241,58,59,63,182,240,218,76,85,87,89,216,280,104,53,201,126,317,332,263,156,496,497,315,411,412,374,507,510,421,416,444,86,360,14,244,523,157,525,207,214,164,249,290,590,19,57,70,127,291],
t:[434],
tr:[20,173,196,200,231,253,304,351,352,366,401,406,414,442,620],
s:[606]
},{//Jirachi
l:[[93,1],[273,1],[156,5],[129,10],[270,15],[94,20],[287,25],[156,30],[428,35],[38,40],[356,45],[361,50],[248,55],[322,60],[387,65],[353,70]],
m:[473,347,92,237,241,63,113,182,240,219,218,85,87,216,94,247,104,115,201,332,263,156,496,412,374,451,416,148,86,244,138,447,207,214,369,164,430,433,290,612,605,590],
tr:[7,8,9,173,196,253,270,271,277,278,285,324,334,351,352,356,387,409,428,442,446,478],
s:[603]
},{//Deoxys
m:[473,347,92,237,241,269,58,63,113,182,240,219,218,76,85,87,216,94,247,280,104,115,317,332,259,263,156,490,496,411,412,374,451,416,148,86,244,157,398,138,447,207,214,164,430,433,249,290,399,612,590,15,70],
tr:[20,67,173,264,271,272,277,278,285,289,324,351,352,356,409,428,446,472],
forms:[
{
	l:[[35,1],[43,1],[101,9,7],[100,17,13],[282,25,19],[228,33,25],[94,41,31],[289,49,37],[375,57,43],[428,65,49],[322,73,55],[105,81,61],[354,89,67],[63,97,73]],
	tr:[7,8,9,196,282]
},{
	l:[[35,1],[43,1],[101,9,7],[100,17,13],[269,25,19],[228,33,25],[94,41,31],[276,49,37],[375,57,43],[428,65,49],[322,73,55],[192,81,61],[354,89,67],[63,97,73]],
	tr:[276]
},{
	l:[[35,1],[43,1],[101,9,7],[100,17,13],[282,25,19],[191,33,25],[94,41,31],[289,49,37],[375,57,43],[428,65,49],[133,73,55],[334,73,55],[105,81,61],[354,89,67],[68,97,73],[243,97,73]],
	tr:[282,334]
},{
	l:[[35,1],[43,1],[101,9,7],[104,17,13],[282,25,19],[228,33,25],[94,41,31],[129,49,37],[375,57,43],[428,65,49],[97,73,55],[105,81,61],[354,89,67],[245,97,73]],
	tr:[7,8,9,282]
}]
},{//Turtwig
l:[[33,1],[110,5],[71,9],[75,13],[174,17],[44,21],[72,25],[73,29],[235,33],[242,37],[202,41],[437,45]],
m:[92,237,241,113,182,219,218,76,216,104,115,263,156,213,496,412,148,14,447,207,214,164,249,290,267,590,15,70],
e:[34,37,38,74,133,254,255,256,276,321,328,388,402,414,469,580],
t:[520],
tr:[173,202,231,235,276,388,402,414,446]
},{//Grotle
l:[[33,1],[110,1],[110,5],[71,9],[75,13],[174,17],[44,22],[72,27],[73,32],[235,37],[242,42],[202,47],[437,52]],
m:[92,237,241,113,182,219,218,76,216,104,115,263,156,213,496,412,148,14,447,207,214,164,249,290,267,590,15,70],
t:[520],
tr:[173,202,231,235,276,388,402,414,446]
},{//Torterra
l:[[33,1],[71,1],[75,1],[110,1],[452,1],[110,5],[71,9],[75,13],[174,17],[44,22],[72,27],[89,32],[73,33],[235,39],[242,45],[202,51],[437,57]],
m:[46,92,237,241,63,113,182,219,218,76,89,216,104,115,201,317,263,156,213,496,412,416,397,148,444,14,523,157,447,207,214,164,249,290,267,590,15,70],
t:[338,520],
tr:[173,200,202,231,235,276,335,388,402,414,442,446]
},{//Chimchar
l:[[10,1],[43,1],[52,7],[269,9],[154,15],[172,17],[417,23],[259,25],[263,31],[83,33],[512,39],[303,41],[53,47]],
m:[468,92,339,237,241,269,182,218,216,91,280,104,53,126,332,259,263,488,156,213,490,496,315,374,510,261,512,421,14,447,207,214,369,164,249,290,612,590,15,70],
e:[7,9,24,66,68,116,227,252,257,264,270,274,299,501],
t:[519],
tr:[7,9,67,173,231,253,257,264,270,272,283,343,441,446]
},{//Monferno
l:[[10,1],[43,1],[52,1],[52,7],[269,9],[183,14],[154,16],[172,19],[364,26],[259,29],[370,36],[83,39],[512,46],[303,49],[394,56]],
m:[468,92,339,237,241,269,182,218,216,91,280,104,53,126,317,332,259,263,488,156,213,490,496,315,411,374,510,261,512,421,514,14,157,398,447,207,214,369,164,249,290,612,590,15,70],
t:[519],
tr:[7,9,67,173,231,257,264,270,272,283,343,441,446,530]
},{//Infernape
l:[[10,1],[43,1],[52,1],[269,1],[394,1],[52,7],[269,9],[183,14],[154,16],[172,19],[364,26],[386,29],[370,36],[83,42],[512,52],[347,58],[394,68]],
m:[468,347,46,92,339,237,241,269,63,182,218,76,89,216,91,280,104,53,126,317,332,259,263,488,156,213,490,496,315,411,374,510,261,512,421,514,416,444,14,523,157,398,447,207,214,369,164,249,290,612,590,15,70],
t:[307,519],
tr:[7,9,67,173,231,257,264,270,272,283,343,441,446,530]
},{//Piplup
l:[[1,1],[45,4],[145,8],[346,11],[64,15],[61,18],[117,22],[31,25],[362,29],[250,32],[54,36],[65,39],[56,43]],
m:[92,258,237,58,59,182,240,218,216,91,280,104,317,332,263,156,213,496,497,503,374,511,447,207,214,164,290,590,15,57,127,291],
e:[48,56,97,117,173,175,189,196,281,297,300,392,458],
t:[518],
tr:[173,196,324,343,352,446]
},{//Prinplup
l:[[33,1],[45,1],[45,4],[145,8],[346,11],[64,15],[232,16],[61,19],[117,24],[31,28],[362,33],[250,37],[54,42],[65,46],[56,50]],
m:[468,92,258,237,58,59,182,240,218,216,91,280,104,317,332,263,156,213,496,497,503,374,511,421,447,207,214,164,249,290,590,15,57,70,127,291],
t:[518],
tr:[173,196,324,343,352,446]
},{//Empoleon
l:[[33,1],[45,1],[145,1],[45,4],[145,8],[14,11],[64,15],[232,16],[61,19],[207,24],[31,28],[362,33],[453,36],[250,39],[54,46],[65,52],[56,59]],
m:[468,46,92,258,237,58,59,63,182,240,218,89,216,91,280,104,317,332,263,156,213,496,497,211,503,374,511,421,416,14,523,157,447,207,214,164,430,249,290,590,15,57,70,127,291],
t:[308,518],
tr:[173,196,282,324,334,343,352,446]
},{//Starly
l:[[33,1],[45,1],[98,5],[17,9],[104,13],[283,17],[18,21],[332,25],[36,29],[97,33],[413,37],[515,41]],
m:[92,237,241,182,240,355,218,216,104,332,263,156,213,168,496,497,211,207,214,369,164,290,590,19],
e:[28,31,38,119,193,197,211,228,253,279,297,310,355],
tr:[173,253,257,283,366]
},{//Staravia
l:[[33,1],[45,1],[98,1],[98,5],[17,9],[104,13],[283,18],[18,23],[332,28],[36,33],[97,38],[413,43],[515,48]],
m:[92,237,241,182,240,355,218,216,104,332,263,156,213,168,496,497,211,514,207,214,369,164,290,590,19],
tr:[173,253,257,283,366]
},{//Staraptor
l:[[17,1],[33,1],[45,1],[98,1],[98,5],[17,9],[104,13],[283,18],[18,23],[332,28],[36,33],[370,34],[97,41],[413,49],[515,57]],
m:[92,237,241,63,182,240,355,218,216,104,332,263,156,213,168,496,497,211,514,416,207,214,369,164,290,590,19],
tr:[143,173,253,257,283,366]
},{//Bidoof
l:[[33,1],[45,5],[111,9],[205,13],[29,17],[158,21],[281,25],[133,29],[36,33],[162,37],[276,41],[174,45]],
m:[92,237,241,269,58,59,182,240,218,85,87,216,91,247,104,263,156,213,168,496,497,451,514,86,447,207,214,164,249,290,590,15],
e:[38,98,111,130,154,203,205,214,316,346,401,431],
tr:[162,173,196,231,276,343,351,387,401,446]
},{//Bibarel
l:[[33,1],[45,1],[563,1],[45,5],[111,9],[205,13],[55,15],[29,18],[158,23],[281,28],[133,33],[36,38],[162,43],[276,48],[174,53]],
m:[92,237,241,269,58,59,63,182,240,218,85,87,216,91,247,104,263,156,213,168,496,497,503,374,451,514,416,86,523,447,207,214,164,249,290,590,15,57,70,127,291],
tr:[162,173,196,231,264,276,343,351,352,387,401,446]
},{//Kricketot
l:[[45,1],[117,1],[522,6],[450,16]],
m:[522],
tr:[173,253,283,450]
},{//Kricketune
l:[[45,1],[117,1],[210,10],[141,14],[47,18],[116,22],[163,26],[404,30],[103,34],[565,36],[269,38],[400,42],[564,44],[405,46],[195,50]],
m:[468,92,237,241,269,63,182,240,218,216,280,104,332,263,156,213,496,497,206,416,148,14,522,404,611,207,214,164,249,290,612,590,15,70],
tr:[173,215,253,282,283,304,450]
},{//Shinx
l:[[33,1],[43,5],[268,9],[608,11],[209,13],[44,17],[46,21],[207,25],[422,29],[242,33],[184,37],[435,41],[528,45]],
m:[46,92,237,113,182,240,218,85,87,216,104,263,156,213,168,496,451,148,521,86,207,214,164,528,290,555,590,70],
e:[24,36,98,129,270,313,324,336,351,400,422,423,424,598],
tr:[173,231,270,324,351,393]
},{//Luxio
l:[[33,1],[43,1],[43,5],[268,9],[209,13],[44,18],[46,23],[207,28],[422,33],[242,38],[184,43],[435,48],[528,53]],
m:[46,92,237,113,182,240,218,85,87,216,104,263,156,213,168,496,451,148,521,86,207,214,164,528,290,555,590,70],
tr:[173,231,270,324,351,393]
},{//Luxray
l:[[33,1],[43,1],[268,1],[604,1],[43,5],[268,9],[209,13],[44,18],[46,23],[207,28],[422,35],[242,42],[184,49],[435,56],[528,63],[604,67]],
m:[46,92,237,63,113,182,240,218,85,87,216,104,263,156,213,168,496,451,416,148,521,86,207,214,164,528,290,555,590,70],
tr:[173,231,270,276,324,351,393]
},{//Budew
l:[[71,1],[74,4],[346,7],[78,10],[72,13],[388,16]],
m:[92,474,237,241,182,240,218,76,216,247,104,188,263,156,213,496,412,148,14,244,447,207,214,164,290,267,605,590,15],
e:[42,75,79,170,178,191,202,235,320,326,363,402,437],
tr:[173,202,235,253,343,388,402]
},{//Roserade
l:[[40,1],[72,1],[230,1],[311,1],[345,1],[580,1],[599,1]],
m:[92,474,237,241,63,182,240,218,76,216,247,104,188,263,156,213,496,412,416,148,14,244,398,447,207,214,164,290,267,605,590,15],
tr:[173,202,235,343,388,402]
},{//Cranidos
l:[[29,1],[43,1],[116,6],[228,10],[36,15],[184,19],[372,24],[498,28],[246,33],[428,37],[103,42],[457,46]],
m:[46,92,237,241,58,59,182,240,218,479,85,87,89,216,91,104,53,201,126,317,263,156,213,168,496,374,510,371,397,444,14,523,157,207,214,164,249,290,612,590,70],
e:[18,21,23,37,38,43,174,231,242,359,442],
tr:[7,9,173,180,231,253,276,283,351,406,414,428,442,446]
},{//Rampardos
l:[[29,1],[43,1],[116,6],[228,10],[36,15],[184,19],[372,24],[498,28],[283,30],[246,36],[428,43],[103,51],[457,58]],
m:[46,92,237,241,58,59,63,182,240,218,479,85,87,89,216,91,280,104,53,201,126,317,263,156,213,168,496,411,374,510,371,416,397,444,14,523,157,525,207,214,164,249,290,612,590,15,57,70],
tr:[7,9,173,180,200,220,231,253,264,276,283,351,406,414,428,442,446]
},{//Shieldon
l:[[33,1],[182,1],[269,6],[319,10],[36,15],[334,19],[207,24],[246,28],[203,33],[368,37],[442,42],[484,46]],
m:[46,92,237,241,269,58,59,182,240,218,479,85,87,89,216,91,104,53,201,126,317,259,263,156,213,496,510,397,444,523,157,207,214,164,430,249,290,590,70],
e:[29,34,38,68,90,103,116,174,184,350,446,469,470],
tr:[173,231,334,351,393,414,442,446]
},{//Bastiodon
l:[[33,1],[182,1],[269,1],[319,1],[269,6],[319,10],[36,15],[334,19],[207,24],[246,28],[335,30],[203,36],[368,43],[442,51],[484,58]],
m:[46,92,237,241,269,58,59,63,182,240,218,479,85,87,89,216,91,104,53,201,126,317,259,263,156,213,496,510,416,397,444,523,157,207,214,164,430,249,290,590,70],
tr:[173,200,231,277,334,335,351,393,414,442,446]
},{//Burmy
l:[[182,1],[33,10],[450,15],[237,20]],
m:[237,182],
tr:[173,450,527]
},{//Wormadam
m:[92,474,237,241,63,182,240,219,218,76,216,94,247,104,263,156,213,168,496,416,148,522,244,611,138,207,214,164,290,590],
tr:[173,253,283,285,324,450,527],
forms:[
{
	l:[[33,1],[182,10],[450,15],[237,20],[93,23],[75,26],[74,29],[60,32],[445,35],[175,38],[213,41],[94,44],[437,47]],
	m:[412,447],
	tr:[202,235,388,402]
},{
	l:[[33,1],[182,10],[450,15],[237,20],[93,23],[350,26],[106,29],[60,32],[445,35],[175,38],[213,41],[94,44],[90,47]],
	m:[89,91,201,207,213,214,216,218,219,237,240,241,244,247,263,317,523],
	tr:[414,446]
},{
	l:[[33,1],[182,10],[450,15],[237,20],[93,23],[429,26],[319,29],[60,32],[445,35],[175,38],[213,41],[94,44],[442,47]],
	m:[360,430],
	tr:[334,393,441,442,446]
}]
},{//Mothim
l:[[33,1],[182,10],[450,15],[237,20],[93,23],[16,26],[77,29],[60,32],[293,35],[318,38],[403,41],[94,44],[405,47],[483,50]],
m:[92,474,237,241,63,182,240,355,219,218,76,216,94,247,104,332,263,156,213,168,496,412,512,416,148,522,244,611,138,207,214,369,164,290,590],
tr:[173,202,285,324,366,450,527]
},{//Combee
l:[[16,1],[230,1],[450,13],[405,29]],
tr:[173,283,366,450]
},{//Vespiquen
l:[[16,1],[40,1],[109,1],[194,1],[230,1],[565,1],[210,5],[228,9],[154,13],[455,17],[163,21],[408,25],[456,29],[92,33],[403,37],[445,41],[454,45],[207,49],[194,53],[565,57]],
m:[468,92,474,237,241,63,182,240,355,218,216,104,188,332,263,156,213,168,496,374,511,512,416,148,522,404,611,207,214,369,164,290,590,15],
tr:[173,283,324,366,450]
},{//Pachirisu
l:[[45,1],[117,1],[98,5],[204,9],[209,13],[203,17],[609,19],[129,21],[486,25],[186,29],[86,33],[162,37],[435,41],[387,45],[158,49]],
m:[92,237,113,182,240,218,85,87,216,91,104,263,156,213,496,497,374,451,148,521,86,447,207,214,369,164,290,590,15],
e:[39,44,111,175,205,231,260,266,268,313,343,516,569],
tr:[9,162,173,231,253,270,343,351,387,393,402,441,527]
},{//Buizel
l:[[49,1],[45,4],[346,7],[98,11],[55,15],[228,18],[129,21],[453,24],[458,27],[250,31],[13,35],[401,38],[97,41],[56,45]],
m:[92,258,339,237,58,59,182,240,218,216,91,280,104,317,263,156,213,496,497,503,207,214,164,249,290,612,590,57,70,127,291],
e:[3,29,154,163,189,210,226,316,382,392,401,415,487,541],
tr:[8,173,196,231,264,352,401]
},{//Floatzel
l:[[45,1],[49,1],[98,1],[242,1],[346,1],[423,1],[45,4],[346,7],[98,11],[55,15],[228,18],[129,21],[453,24],[458,29],[250,35],[13,41],[401,46],[97,51],[56,57]],
m:[46,92,258,339,237,269,58,59,63,182,240,218,216,91,280,104,317,259,263,156,213,496,497,411,503,371,416,207,214,164,249,290,612,590,57,70,127,291],
tr:[8,67,173,196,231,264,352,401]
},{//Cherubi
l:[[33,1],[234,1],[74,7],[73,10],[270,13],[345,19],[241,22],[388,28],[36,31],[76,37],[381,40],[572,47]],
m:[92,237,241,182,219,218,76,216,104,263,156,213,496,412,148,14,447,207,214,164,290,267,605,590],
e:[75,111,205,230,267,311,312,320,321,361,363,402,505,579],
tr:[173,202,235,270,388,402]
},{//Cherrim
l:[[33,1],[74,1],[234,1],[74,7],[73,10],[270,13],[345,19],[241,22],[80,25],[388,30],[36,35],[76,43],[381,48],[572,50]],
m:[92,237,241,63,182,219,218,76,216,104,263,156,213,496,412,416,148,14,447,207,214,164,290,267,605,590],
tr:[173,202,235,270,388,402]
},{//Shellos
l:[[189,1],[300,2],[106,4],[352,7],[426,11],[237,16],[240,22],[34,29],[330,37],[105,46]],
m:[92,258,237,58,59,182,240,218,216,104,263,156,213,496,503,611,207,214,164,290,590,57,291],
e:[54,68,90,124,133,151,174,243,254,255,256,262,281,362,376,499],
tr:[173,196,220,352,414]
},{//Gastrodon
l:[[106,1],[189,1],[300,1],[352,1],[300,2],[106,4],[352,7],[426,11],[237,16],[240,22],[34,29],[330,41],[105,54]],
m:[92,258,237,58,59,63,182,240,218,89,216,91,104,482,188,201,317,263,156,213,496,503,416,148,444,523,157,611,207,214,164,249,290,590,57,70,127,291],
tr:[173,196,220,335,352,414]
},{//Ambipom
l:[[10,1],[28,1],[39,1],[310,1],[28,4],[310,8],[226,11],[321,15],[154,18],[129,22],[103,25],[97,29],[458,32],[374,36],[417,39],[387,43]],
m:[468,92,237,241,269,63,182,240,218,76,85,87,216,91,247,280,104,332,263,156,213,168,490,496,374,512,421,371,514,416,86,138,447,207,214,369,164,249,290,612,590,15,70],
tr:[7,8,9,67,173,180,231,253,264,272,282,289,340,343,351,352,387,402,441,492]
},{//Drifloon
l:[[107,1],[132,1],[310,4],[16,8],[116,13],[371,16],[466,20],[254,25],[506,27],[255,32],[256,32],[247,36],[133,40],[226,44],[153,50]],
m:[347,92,237,241,182,240,218,85,87,216,94,247,104,263,156,213,168,496,451,261,512,373,153,371,148,86,360,244,138,207,214,164,290,590,15],
e:[34,50,95,114,194,262,311,366,432,499],
tr:[20,173,180,196,220,271,277,278,282,285,351,366]
},{//Drifblim
l:[[16,1],[107,1],[132,1],[310,1],[566,1],[310,4],[16,8],[116,13],[371,16],[466,20],[254,25],[506,27],[255,34],[256,34],[247,40],[133,46],[226,52],[153,60],[566,65]],
m:[347,92,237,241,63,182,240,218,85,87,216,94,247,104,263,156,213,168,496,451,261,512,373,153,371,416,148,86,360,244,138,207,214,164,290,590,15,19],
tr:[20,173,180,196,220,271,277,278,282,285,351,366]
},{//Buneary
l:[[1,1],[111,1],[150,1],[193,1],[203,6],[608,10],[218,13],[98,16],[26,23],[226,26],[97,33],[146,36],[495,43],[204,46],[494,50],[340,56],[361,63]],
m:[92,237,241,58,182,240,218,76,85,216,91,247,104,263,156,213,496,374,451,514,86,447,207,214,164,249,290,612,590,15],
e:[7,8,9,67,175,186,227,252,264,298,300,313,322,327,383,415,458,509],
tr:[7,8,9,67,173,215,231,253,264,270,277,283,304,340,343,351,352,387,409,495]
},{//Lopunny
l:[[1,1],[111,1],[150,1],[193,1],[243,1],[277,1],[340,1,56],[361,1,63],[563,1],[203,6],[216,13],[98,16],[26,23],[226,26],[97,33],[146,36],[495,43],[204,46],[494,53],[340,56],[361,63],[136,,66]],
m:[92,237,241,58,59,63,182,240,218,76,85,87,216,91,247,104,263,156,213,490,496,411,374,451,514,416,86,447,207,214,164,249,290,612,590,15,70],
tr:[7,8,9,67,173,215,231,253,264,270,277,283,304,340,343,351,352,387,409,495]
},{//Mismagius
l:[[45,1],[149,1],[180,1],[310,1],[345,1],[381,1],[408,1],[566,1],[595,,1]],
m:[347,92,237,241,269,63,182,240,218,85,87,216,94,247,104,332,259,263,156,213,168,496,497,412,451,261,373,371,416,148,86,244,138,207,214,164,433,290,399,605,590],
tr:[173,180,196,215,220,253,271,277,285,289,304,351,472,478,492]
},{//Honchkrow
l:[[17,1],[114,1],[228,1],[310,1],[389,1],[400,1],[207,25],[417,35],[492,45],[400,55],[511,65],[399,75]],
m:[347,92,237,241,269,63,182,240,355,218,216,94,247,104,332,259,263,156,213,168,496,211,510,511,373,371,514,416,86,244,138,207,214,164,290,555,399,590,19],
tr:[143,173,180,196,253,257,276,289,366,492]
},{//Glameow
l:[[252,1],[10,5],[45,8],[95,13],[185,17],[154,20],[204,25],[274,29],[445,32],[163,37],[389,41],[213,44],[468,48],[583,50]],
m:[468,92,237,241,269,182,240,218,85,87,216,91,247,104,332,259,263,156,213,168,496,497,421,371,514,148,244,138,207,214,369,164,290,590,15],
e:[28,39,44,98,175,289,313,358,372,387],
tr:[162,173,231,282,289,304,343,351,352,387,492]
},{//Purugly
l:[[10,1],[45,1],[252,1],[10,5],[45,8],[95,13],[185,17],[154,20],[204,25],[274,29],[445,32],[163,37],[207,38],[34,45],[213,52],[468,60]],
m:[468,46,92,237,241,269,63,182,240,218,85,87,216,91,247,104,332,259,263,156,213,168,496,497,421,371,514,416,148,244,523,138,207,214,369,164,290,590,15],
tr:[162,173,231,282,289,304,343,351,352,387,492]
},{//Chingling
l:[[35,1],[45,6,4],[310,9,7],[281,,13],[93,14,10],[253,17,32],[387,22,16],[494,25,19]],
m:[473,347,92,237,241,269,113,182,240,219,218,216,94,247,104,115,259,263,156,213,496,497,451,148,86,244,138,447,207,214,164,433,290,605,590],
e:[50,95,105,174,248,273,285,322,500],
tr:[20,173,196,215,253,270,271,277,278,282,285,289,304,324,351,356,387,428]
},{//Stunky
l:[[10,1],[116,1],[139,4],[103,7],[154,10],[108,14],[364,18],[163,22],[92,27],[491,32],[400,37],[262,43],[562,46],[153,49]],
m:[468,46,92,474,237,241,269,182,240,218,216,91,247,104,53,188,126,259,263,156,213,168,496,510,153,421,371,207,214,164,249,290,555,399,590,15],
e:[38,43,114,123,184,228,231,242,310,386,481,492,583],
tr:[173,231,289,492]
},{//Skuntank
l:[[10,1],[116,1],[139,1],[139,4],[103,7],[154,10],[108,14],[364,18],[163,22],[92,27],[491,32],[53,34],[400,41],[262,51],[562,56],[153,61]],
m:[468,46,92,474,237,241,269,63,182,240,218,216,91,247,104,53,188,126,259,263,156,213,168,496,510,153,421,371,416,398,207,214,164,249,290,555,399,590,15,70],
tr:[173,231,289,492]
},{//Bronzor
l:[[33,1],[93,1],[95,5],[286,9],[109,11],[149,15],[334,19],[185,21],[219,25],[248,29],[319,31],[360,35],[326,39],[371,41],[377,45],[484,49]],
m:[473,347,92,237,241,113,182,240,219,218,76,89,216,94,247,104,115,201,317,263,156,496,451,371,397,148,360,244,523,157,138,447,207,214,164,430,433,290,590],
tr:[173,271,278,285,324,334,356,446,472]
},{//Bronzong
l:[[33,1],[93,1],[95,1],[240,1],[241,1],[286,1],[95,5],[286,9],[109,11],[149,15],[334,19],[185,21],[219,25],[248,29],[319,31],[335,33],[360,36],[326,42],[371,46],[377,52],[484,58]],
m:[473,347,92,237,241,63,113,182,240,219,218,76,89,216,94,247,104,115,201,317,263,156,496,451,153,371,416,397,148,360,244,523,157,138,447,207,214,164,430,433,249,290,590,70],
tr:[173,271,278,285,324,334,335,356,428,442,446,472]
},{//Bonsly
l:[[313,1],[383,1],[175,5],[67,8],[88,12],[102,15],[185,19],[317,22],[335,26],[157,29],[68,33],[389,36],[38,40]],
m:[347,92,237,241,182,218,479,216,91,280,104,201,317,263,156,213,168,496,153,397,244,157,207,214,164,290,267,590],
e:[29,106,111,120,174,203,205,328,446],
tr:[67,173,253,270,272,335,343,414,446,492,495]
},{//Mime Jr.
l:[[93,1],[112,1],[321,1],[383,4],[96,8],[3,11],[102,15],[227,18],[113,22],[115,22],[60,25],[164,29],[278,32],[271,36],[94,39],[272,43],[226,46],[219,50]],
m:[473,347,92,237,241,269,113,182,240,219,218,76,85,87,216,94,247,280,104,115,259,263,156,213,168,496,374,451,148,86,244,611,138,447,207,214,164,433,290,590],
e:[95,102,109,196,204,248,252,271,298,358,361,417,471,478],
tr:[173,196,253,264,270,271,272,277,278,285,289,324,343,351,409,472,478]
},{//Happiny
l:[[1,1],[204,1],[383,5],[287,9],[186,12]],
m:[92,258,237,241,113,182,240,219,218,76,216,94,247,104,53,126,263,156,213,496,497,374,510,148,86,244,138,447,207,214,164,290,590],
e:[68,118,203,215,217,270,312,356,363,387,426],
tr:[173,196,215,253,270,278,283,304,343,351,352,356,387,409,428]
},{//Chatot
l:[[64,1],[269,1],[304,1],[448,1],[590,1],[45,5],[119,9],[47,13],[31,17],[448,21],[269,25],[496,29],[102,33],[497,37],[355,41],[253,45],[485,49],[297,50],[304,57]],
m:[92,237,241,269,182,240,355,218,216,104,332,259,263,156,213,168,496,497,211,207,214,369,164,290,590,19],
e:[48,97,101,211,214,227,314,417,432,586],
tr:[143,173,253,257,272,304,366]
},{//Spiritomb
l:[[109,1],[174,1],[180,1],[228,1],[425,1],[185,7],[95,13],[138,19],[466,25],[389,31],[417,37],[262,43],[399,49]],
m:[347,92,237,241,269,63,182,240,218,216,94,247,104,317,259,263,156,213,168,496,511,261,373,514,416,148,244,611,138,207,214,164,290,555,399,590],
e:[108,171,194,220,286,288,425,445,492],
tr:[173,180,196,220,253,271,289,351,352,472,492]
},{//Gible
l:[[33,1],[28,3],[82,7],[201,13],[36,15],[328,19],[163,25],[337,27],[91,31],[407,37]],
m:[468,337,46,92,237,241,182,240,218,89,216,91,104,53,201,126,317,332,263,156,213,496,510,421,444,523,157,207,214,164,249,290,590,15,70],
e:[34,37,38,184,200,225,231,232,239,328,341,431,442],
t:[434],
tr:[173,200,231,406,414,442,446]
},{//Gabite
l:[[28,1],[33,1],[28,3],[82,7],[201,13],[36,15],[328,19],[530,24],[163,28],[337,33],[91,40],[407,49]],
m:[468,337,46,92,237,241,182,240,218,89,216,91,104,53,201,126,317,332,263,156,213,496,510,421,444,523,157,207,214,164,249,290,590,15,70],
t:[434],
tr:[173,200,231,406,414,442,446,530]
},{//Garchomp
l:[[28,1],[33,1],[82,1],[201,1],[424,1],[28,3],[82,7],[201,13],[36,15],[328,19],[530,24],[163,28],[337,33],[91,40],[242,48],[407,55]],
m:[468,337,46,92,237,241,63,182,240,218,89,216,91,280,104,53,201,126,317,332,263,156,213,496,206,374,510,421,416,444,14,523,157,525,398,207,214,164,249,290,590,15,57,70],
t:[434],
tr:[173,200,231,401,406,414,442,446,530]
},{//Munchlax
l:[[33,1],[118,1],[122,1,12],[289,1,50],[316,1],[387,1,57],[278,,1],[111,4],[133,9],[122,12],[498,17],[103,20],[34,25],[254,28],[256,33],[205,36],[374,41],[187,44],[363,49],[289,52],[387,57]],
m:[92,237,241,58,59,182,240,218,76,85,87,89,216,94,247,280,104,53,201,126,317,263,156,213,496,374,510,514,523,157,207,214,164,249,290,612,590,57,70],
e:[18,38,68,120,122,174,204,228,363,428,495,562],
tr:[7,8,9,173,196,253,264,276,278,289,304,343,351,352,387,402,428,441,495]
},{//Riolu
l:[[98,1],[193,1],[203,1],[68,6],[364,11],[395,15],[383,19],[103,24],[179,29],[417,47],[515,50]],
m:[46,92,339,237,241,182,240,218,89,216,91,280,104,317,263,156,213,490,496,411,374,421,371,514,14,523,157,398,207,214,164,249,290,612,590,70],
e:[44,67,97,136,170,197,238,242,266,299,327,334,410,418,509],
tr:[8,9,67,173,231,264,270,272,334,393,409,428,530]
},{//Lucario
l:[[98,1],[193,1],[197,1],[232,1],[245,1],[370,1],[396,1],[406,1],[68,6],[364,11],[612,15],[14,19],[319,24],[198,29],[501,33],[382,37],[396,42],[347,47],[505,51],[370,55],[406,60],[245,65]],
m:[468,347,46,92,339,237,241,63,182,240,218,89,216,91,94,247,280,104,317,263,156,213,490,496,411,374,421,371,514,416,444,14,523,157,398,207,214,164,430,249,290,399,612,590,70],
tr:[8,9,67,173,231,264,270,272,334,352,393,406,409,428,530]
},{//Hippopotas
l:[[28,1],[33,1],[44,7],[281,13],[36,19],[91,19],[328,25],[242,31],[89,37],[38,44],[90,50]],
m:[46,92,237,241,182,218,89,216,91,104,201,317,263,156,213,496,523,157,207,214,164,249,290,590,70],
e:[18,34,174,214,254,255,256,279,303,328],
tr:[173,231,276,352,414,446]
},{//Hippowdon
l:[[28,1],[33,1],[44,1],[281,1],[422,1],[423,1],[424,1],[44,7],[281,13],[36,19],[91,19],[328,25],[242,31],[89,40],[38,50],[90,60]],
m:[46,92,237,241,63,182,218,89,216,91,104,201,317,263,156,213,496,416,444,523,157,207,214,164,249,290,590,70],
tr:[173,231,276,352,414,442,446]
},{//Skorupi
l:[[40,1],[43,1],[44,1],[282,5],[42,9],[367,13],[228,16],[450,20],[305,23],[474,27],[468,30],[390,34],[400,38],[184,41],[242,45],[565,47],[440,49]],
m:[468,92,474,237,241,269,182,240,218,216,91,247,280,104,188,317,332,259,263,156,213,168,496,206,374,371,148,14,522,404,611,398,207,214,164,249,290,399,590,15,70],
e:[18,28,41,97,103,109,163,185,228,231,342,400],
tr:[173,231,282,401,450]
},{//Drapion
l:[[40,1],[43,1],[44,1],[282,1],[422,1],[423,1],[424,1],[282,5],[42,9],[367,13],[228,16],[450,20],[305,23],[474,27],[468,30],[390,34],[400,38],[184,43],[242,49],[565,53],[440,57]],
m:[468,46,92,474,237,241,269,63,182,240,218,89,216,91,247,280,104,188,317,332,259,263,156,213,168,496,206,374,371,514,416,148,14,522,523,157,404,611,398,207,214,164,249,290,555,399,590,15,70],
tr:[173,231,282,401,450]
},{//Croagunk
l:[[310,1],[189,3],[40,8],[269,10],[228,15],[185,17],[279,22],[207,24],[426,29],[389,31],[474,36],[417,38],[398,43],[188,45],[562,47],[260,50]],
m:[92,339,474,237,241,269,182,240,218,89,216,91,247,280,104,482,188,317,259,263,156,213,168,490,496,411,374,373,371,514,523,157,404,398,207,214,164,249,290,399,612,590,70],
e:[29,68,96,223,238,252,265,358,364,367,382,409,410,418,501],
tr:[8,9,67,162,173,180,196,264,270,272,282,289,340,409,441,492,530]
},{//Toxicroak
l:[[40,1],[189,1],[310,1],[189,3],[40,8],[269,10],[228,15],[185,17],[279,22],[207,24],[426,29],[389,31],[474,36],[417,41],[398,49],[188,54],[562,58],[260,62]],
m:[92,339,474,237,241,269,63,182,240,218,89,216,91,247,280,104,482,188,317,259,263,156,213,168,490,496,411,374,373,371,514,416,444,14,523,157,404,398,207,214,164,249,290,399,612,590,15,70],
tr:[8,9,67,162,173,180,196,264,270,272,282,289,340,409,441,492,530]
},{//Carnivine
l:[[20,1],[74,1],[44,7],[22,11],[230,17],[275,21],[185,27],[536,31],[254,37],[255,37],[256,37],[242,41],[378,47],[438,50]],
m:[92,237,241,63,182,218,76,216,104,188,263,156,213,168,496,412,374,371,416,148,14,611,447,207,214,164,290,267,590,15],
e:[21,73,75,78,79,202,235,320,345,388,476],
tr:[20,173,202,235,282,380,388,402,450]
},{//Finneon
l:[[1,1],[55,6],[213,10],[240,13],[16,17],[352,22],[445,26],[219,29],[392,33],[250,38],[369,42],[340,45],[318,49],[487,54]],
m:[92,258,237,58,59,182,240,219,218,216,104,263,156,213,496,503,371,148,244,207,214,369,164,290,267,590,57,127,291],
e:[60,62,97,150,175,186,204,321,324,362,401],
tr:[173,196,324,340,352,366,401]
},{//Lumineon
l:[[1,1],[16,1],[55,1],[213,1],[487,1],[55,6],[213,10],[240,13],[16,17],[352,22],[445,26],[219,29],[392,35],[250,42],[369,48],[340,53],[318,59],[487,66]],
m:[92,258,237,58,59,63,182,240,219,218,216,104,263,156,213,496,503,371,416,148,244,207,214,369,164,290,590,57,127,291],
tr:[173,196,324,340,352,366,401]
},{//Mantyke
l:[[33,1],[145,1],[48,3],[61,7],[109,11],[17,14],[29,16],[352,19],[469,23],[36,27],[97,32],[403,36],[392,39],[340,46],[56,49]],
m:[92,258,237,58,59,182,240,218,89,216,104,332,263,156,213,496,503,512,523,157,207,214,164,290,590,57,127,291],
e:[21,56,114,133,150,239,243,300,324,346,366,469],
tr:[173,196,270,324,340,352]
},{//Snover
l:[[43,1],[181,1],[75,5],[196,9],[320,13],[207,17],[54,21],[420,26],[275,31],[452,36],[59,41],[329,46]],
m:[92,258,237,58,59,113,182,240,219,218,76,216,247,104,263,156,213,496,412,148,14,524,447,207,214,164,290,590],
e:[23,38,54,73,74,130,331,345,363,402,419],
tr:[8,173,196,202,231,235,272,352,388,402]
},{//Abomasnow
l:[[8,1],[43,1],[75,1],[181,1],[196,1],[75,5],[196,9],[320,13],[207,17],[54,21],[420,26],[275,31],[452,36],[59,47],[329,58]],
m:[92,258,237,58,59,63,113,182,240,219,218,76,89,216,247,280,104,317,263,156,213,496,411,412,374,416,148,14,523,524,157,447,207,214,164,249,290,590,70],
tr:[8,173,196,200,202,231,235,264,272,335,352,388,402]
},{//Weavile
l:[[10,1],[43,1],[98,1],[269,1],[279,1],[372,1],[373,1],[98,8],[185,10],[196,14],[154,16],[417,20],[232,22],[468,25],[374,28],[103,32],[400,35],[289,40],[386,44],[399,47]],
m:[468,347,92,258,237,241,269,58,59,63,182,240,218,216,91,247,280,104,115,332,259,263,156,213,168,490,496,411,206,374,373,421,371,514,416,14,244,404,398,138,207,214,164,249,290,555,399,612,590,15,57,70],
tr:[8,67,173,180,196,231,264,282,289,492]
},{//Magnezone
l:[[33,1],[48,1,5],[49,1,11],[112,1],[192,1,63],[243,1],[602,1],[48,4],[84,7,1],[604,11,1],[86,15,13],[443,18,17],[209,21,19],[429,25,23],[319,29,25],[486,34,29],[430,39,33],[103,45,39],[435,51,43],[199,56,49],[393,62,53],[360,67,59],[192,73]],
m:[92,237,241,63,113,182,240,218,85,87,216,104,115,263,156,496,451,153,416,148,521,86,360,244,207,214,164,430,528,290,590],
tr:[173,277,278,324,334,351,356,393,442,527]
},{//Lickilicky
l:[[122,1],[378,1],[438,1],[48,5],[111,9],[282,13],[35,17],[23,21],[50,25],[21,29],[205,33],[498,37],[382,41],[287,45],[103,49],[438,53],[378,57],[360,61]],
m:[92,237,241,58,59,63,182,240,218,76,85,87,89,216,91,247,280,104,53,201,126,317,263,156,213,168,496,411,374,510,153,514,416,360,14,244,523,157,525,138,207,214,164,249,290,612,590,15,57,70],
tr:[7,8,9,20,173,196,231,264,282,335,351,352,401,428]
},{//Rhyperior
l:[[23,1,17],[30,1],[31,1,5],[32,1,62],[39,1],[224,1,55],[398,1],[439,1,69],[23,9],[479,,13],[31,19],[184,19,9],[523,,21],[350,23,29],[498,30,25],[36,41,37],[359,42],[529,47,33],[444,56,41],[89,62,48],[32,71],[224,77],[439,86]],
m:[46,92,237,241,58,59,63,182,240,218,479,85,87,89,216,91,280,104,53,201,126,317,263,156,213,168,496,411,374,510,421,371,416,397,444,14,523,157,525,398,207,214,164,430,249,290,612,590,15,57,70],
tr:[7,8,9,173,180,196,200,231,253,264,276,283,335,351,401,406,414,442,446,529]
},{//Tangrowth
l:[[132,1],[275,1],[335,1],[79,4],[22,7],[71,10],[77,14],[20,17],[74,20],[72,23],[282,27],[78,30],[363,33],[202,36],[246,40],[21,43],[321,46],[378,49],[580,50],[438,53],[335,56]],
m:[92,237,241,63,182,218,76,89,216,280,104,115,188,317,332,263,156,213,168,496,411,412,374,371,416,148,14,244,523,157,611,398,447,207,214,164,249,290,267,590,15,70],
tr:[20,173,202,220,235,282,283,335,351,388,402]
},{//Electivire
l:[[7,1],[43,1],[67,1],[84,1],[98,1],[569,1],[604,1],[84,5],[67,8],[129,12],[351,15],[86,19],[486,22],[113,26],[9,29],[435,36],[103,42],[85,49],[87,55],[416,62],[604,65]],
m:[92,237,269,63,113,182,240,218,85,87,89,216,91,94,280,104,53,317,259,263,156,213,168,490,496,411,374,451,416,148,521,86,523,157,207,214,164,528,249,290,612,590,70],
tr:[7,8,9,67,173,231,264,270,324,343,351,393,527,530]
},{//Magmortar
l:[[9,1],[43,1],[52,1],[108,1],[123,1],[52,5],[108,8],[185,12],[83,15],[499,19],[481,22],[109,26],[7,29],[436,36],[241,42],[53,49],[126,55],[63,62]],
m:[92,237,241,269,63,182,218,76,85,89,216,94,280,104,53,126,317,259,263,488,156,213,168,490,496,315,411,374,510,261,416,523,157,207,214,164,249,290,612,590,70],
tr:[7,9,67,173,231,257,264,270,343,530]
},{//Togekiss
l:[[143,1],[245,1],[396,1],[403,1],[495,1]],
m:[473,92,237,241,63,113,182,240,355,219,218,76,216,94,247,280,104,115,53,126,332,263,156,213,496,497,211,374,510,514,416,148,86,244,138,447,207,214,164,249,290,605,590,19],
tr:[143,173,215,257,264,271,277,283,304,324,343,351,352,366,387,409,428,495]
},{//Yanmega
l:[[33,1],[98,1],[104,1],[193,1],[400,1],[403,1],[405,1],[450,1],[98,6],[104,11],[49,14],[197,17],[48,22],[253,27],[228,30],[246,33],[364,38],[163,43],[103,46],[369,49],[403,54],[405,57]],
m:[92,237,241,63,182,355,218,76,216,94,247,104,332,263,156,213,168,496,211,416,148,522,244,138,207,214,369,164,290,590],
tr:[173,202,253,324,366,450]
},{//Leafeon
l:[[33,1],[39,1],[270,1],[28,5],[75,9],[98,13],[320,17],[345,20],[202,25],[14,29],[235,33],[241,37],[387,41],[348,45]],
m:[46,92,237,241,63,182,240,218,76,216,91,247,104,332,263,156,213,496,497,412,514,416,148,14,404,447,207,214,164,249,290,267,590,70],
tr:[173,202,215,231,235,270,282,304,343,387,388,402],
s:[606]
},{//Glaceon
l:[[33,1],[39,1],[270,1],[28,5],[196,9],[98,13],[44,17],[423,20],[420,25],[112,29],[243,33],[258,37],[387,41],[59,45]],
m:[46,92,258,237,241,58,59,63,182,240,218,216,91,247,104,263,156,213,496,497,514,416,524,207,214,164,249,290,590,70],
tr:[173,196,215,231,270,304,324,343,352,387,401],
s:[606]
},{//Gliscor
l:[[12,1],[28,1],[106,1],[282,1],[398,1],[422,1],[423,1],[424,1],[28,4],[106,7],[282,10],[98,13],[210,16],[185,19],[512,22],[400,27],[369,30],[103,35],[404,40],[327,45],[14,50],[12,55]],
m:[468,92,474,237,241,269,63,182,240,355,218,89,216,91,280,104,188,201,317,332,259,263,156,213,168,496,211,206,374,512,371,416,397,444,14,522,523,157,404,398,207,214,369,164,249,290,399,590,15,70],
tr:[143,173,231,282,366,401,414,446,450]
},{//Mamoswine
l:[[64,1],[181,1],[184,1],[246,1],[300,1],[316,1],[300,5],[181,8],[189,11],[203,14],[426,18],[258,21],[423,24],[36,28],[458,33],[54,37],[37,41],[89,46],[59,52],[184,58]],
m:[46,92,258,237,58,59,63,113,182,240,218,89,216,91,104,115,201,317,263,156,213,496,416,444,523,157,207,214,164,249,290,590,70],
tr:[173,196,276,282,283,335,414,442,446]
},{//Porygon-Z
l:[[33,1],[160,1],[176,1],[192,1],[277,1],[417,1],[433,1],[60,7],[97,12],[105,18],[393,23],[324,29],[373,34],[435,40],[199,45],[161,50],[277,56],[192,62],[63,67]],
m:[473,92,237,241,58,59,63,182,240,218,76,85,87,216,94,247,104,332,263,156,168,496,451,373,416,148,86,244,138,207,214,164,433,290,399,590],
tr:[173,196,220,231,253,271,277,278,324,351,356,387,393,428,492,527]
},{//Gallade
l:[[43,1],[93,1,4],[100,1,9],[104,1,6],[348,1],[370,1,53],[400,1],[500,1,58],[93,6],[104,10],[501,,11],[100,12],[210,17,14],[163,22,17],[469,,23],[505,25,19],[14,31,26],[427,36,31],[270,39,35],[364,45,40],[206,50,44],[182,53,49],[370,59],[500,64]],
m:[473,347,92,339,237,241,269,63,113,182,240,219,218,85,89,216,94,247,280,104,115,317,332,259,263,156,213,168,490,496,497,411,206,374,451,261,514,416,148,444,86,14,244,523,157,404,398,138,447,207,214,164,433,249,290,612,605,590,15,70],
tr:[7,8,9,67,173,220,264,270,271,277,278,282,285,289,304,324,351,409,428,472,478,530]
},{//Probopass
l:[[33,1],[334,1,4],[335,1,7],[356,1],[393,1],[443,1,10],[469,,1],[334,4],[335,8],[443,11],[86,15,13],[350,18,28],[156,22,16],[209,25,19],[157,29,22],[408,32,25],[201,36,34],[435,39,31],[414,43,37],[444,46,40],[192,50,43],[199,50,43]],
m:[92,237,241,269,63,182,218,479,85,87,89,216,104,201,317,259,263,156,213,496,153,416,397,444,521,86,523,157,207,214,164,430,249,290,605,590,70],
tr:[7,8,9,173,220,277,334,335,351,356,393,414,442,446]
},{//Dusknoir
l:[[7,1],[8,1],[9,1],[20,1],[43,1],[50,1,6],[101,1],[356,1],[50,6],[193,9,14],[310,14,9],[109,17,30],[425,22,17],[228,25,22],[174,30,33],[261,33,25],[325,37],[506,42,40],[247,,45],[212,49,52],[371,58,57],[248,61,64]],
m:[347,92,237,241,269,58,59,63,182,240,218,89,216,94,247,280,104,317,259,263,156,213,168,496,411,374,451,261,373,371,416,148,244,523,157,611,138,207,214,164,433,249,290,399,612,590,70],
tr:[7,8,9,20,173,180,196,220,264,271,285,289,356,472]
},{//Froslass
l:[[43,1],[104,1,5],[181,1],[194,1,61],[310,1,19],[104,4],[310,10],[196,13,14],[109,19,32],[466,22,28],[577,,23],[358,28,37],[445,31,41],[420,37,10],[258,40,54],[247,,42],[59,51,48],[194,59]],
m:[92,258,237,269,58,59,63,113,182,240,219,218,85,87,216,94,247,104,259,263,156,213,496,374,373,371,416,148,86,244,524,138,207,214,164,290,590],
tr:[8,173,180,196,220,271,289,324,335,351,352]
},{//Rotom
l:[[84,1],[86,1],[109,1],[268,1],[271,1],[310,1],[435,1],[253,8],[104,15],[351,22],[466,29],[164,36],[486,43],[506,50],[268,57],[435,64]],
m:[92,237,241,113,182,240,218,85,87,216,247,104,115,263,156,168,496,451,261,148,521,86,244,138,207,214,164,290,399,590],
tr:[173,180,220,253,271,289,324,351,492,527],
c:[84,315,56,59,403,437]
},{//Uxie
l:[[93,1],[156,1],[175,1],[262,1],[363,1],[286,6],[203,16],[129,21],[281,31],[248,36],[133,46],[326,50],[175,61],[363,66],[262,76]],
m:[473,347,92,237,241,63,113,182,240,219,218,76,85,87,216,94,247,104,115,201,263,156,496,412,374,451,512,416,148,86,244,138,447,207,214,369,164,433,290,612,605,590],
tr:[7,8,9,173,202,215,231,270,271,272,277,278,282,285,324,351,352,428,446,472,478,492]
},{//Mesprit
l:[[93,1],[156,1],[361,1],[363,1],[383,1],[286,6],[182,16],[129,21],[381,31],[248,36],[204,46],[326,50],[383,61],[363,66],[361,76]],
m:[473,347,92,237,241,58,59,63,113,182,240,219,218,85,87,216,94,247,104,115,201,263,156,496,412,374,451,512,416,148,86,244,138,447,207,214,369,164,433,290,612,605,590],
tr:[7,8,9,173,231,270,271,272,277,278,282,285,324,351,352,428,446,472,478]
},{//Azelf
l:[[93,1],[156,1],[363,1],[387,1],[286,6],[197,16],[129,21],[253,31],[248,36],[417,46],[326,50],[387,61],[363,66],[153,76]],
m:[473,347,92,237,241,269,63,113,182,240,219,218,85,87,216,94,247,104,115,53,201,126,259,263,156,496,412,374,451,510,512,153,371,416,148,86,244,138,447,207,214,369,164,433,290,612,605,590],
tr:[7,8,9,173,231,253,270,271,272,277,278,282,285,324,351,352,387,428,446,472,478]
},{//Dialga
l:[[184,1],[225,1],[232,6],[246,10],[163,15],[408,19],[368,24],[337,28],[414,33],[396,37],[231,42],[459,46],[430,50]],
m:[468,337,46,92,339,237,241,58,59,63,182,240,219,218,85,87,89,216,280,104,53,201,126,317,332,263,156,496,497,315,510,421,416,148,444,86,244,523,157,525,207,214,164,430,433,249,290,590,15,70],
t:[434],
tr:[173,200,231,304,334,351,356,393,406,414,442,446]
},{//Palkia
l:[[184,1],[225,1],[352,6],[246,10],[163,15],[408,19],[401,24],[337,28],[414,33],[396,37],[401,42],[460,46],[56,50]],
m:[468,337,46,92,258,339,237,241,58,59,63,182,240,219,218,85,87,89,216,280,104,53,201,126,317,332,263,156,496,497,411,374,510,421,416,444,86,244,523,157,525,207,214,164,433,249,290,590,15,57,70,291],
t:[434],
tr:[173,200,264,304,351,352,356,401,406,414]
},{//Heatran
l:[[83,1],[246,1],[257,1],[414,1],[442,1],[463,1],[43,9],[424,17],[319,25],[242,33],[184,41],[436,49],[83,57],[442,65],[414,73],[257,81],[444,88],[463,96]],
m:[46,92,237,241,269,63,182,218,76,89,216,91,104,53,126,317,259,263,488,156,213,496,315,510,261,153,371,416,444,523,157,207,214,164,430,249,290,267,399,590,70],
tr:[173,253,257,334,406,414,442,446,450]
},{//Regigigas
l:[[7,1],[8,1],[9,1],[109,1],[146,1],[193,1],[282,1],[462,1],[484,1],[279,25],[469,40],[428,50],[371,65],[462,75],[484,90],[416,100]],
m:[92,237,241,63,240,219,218,479,85,87,89,216,280,104,317,332,263,496,411,374,371,514,416,397,444,86,244,523,157,207,214,164,249,290,267,612,590,70],
tr:[7,8,9,173,196,264,276,282,335,351,356,409,414,428,442]
},{//Giratina
l:[[184,1],[225,1],[466,6],[246,10],[163,15],[425,19],[194,24],[337,28],[414,33],[396,37],[421,42],[467,46],[506,50]],
m:[468,337,347,46,92,237,241,63,182,240,219,218,85,87,89,216,94,247,104,332,263,156,496,497,211,412,451,261,421,371,416,444,86,244,523,525,138,207,214,164,249,290,399,590,15,19,70],
t:[434],
tr:[173,180,196,200,231,304,351,356,401,406,414,442],
forms:[
{
	tr:[220]
},{
	tr:[277,366,434]
}]
},{//Cresselia
l:[[93,1],[104,1],[236,1],[375,1],[427,1],[461,1],[219,11],[54,20],[62,29],[248,38],[163,47],[236,57],[427,66],[375,75],[461,84],[94,93],[585,99]],
m:[473,347,92,237,241,58,63,113,182,240,219,218,76,216,94,247,104,115,263,156,213,496,412,451,416,148,86,244,138,447,207,214,164,433,290,590],
tr:[173,196,270,271,277,278,285,324,356,428,478]
},{//Phione
l:[[145,1],[346,1],[204,9],[48,16],[61,24],[151,31],[250,39],[352,46],[392,54],[291,61],[240,69]],
m:[92,258,237,58,59,182,240,219,218,216,104,263,156,496,503,374,244,447,207,214,369,164,290,605,590,57,127,291],
tr:[173,196,215,253,270,282,324,340,343,352,387]
},{//Manaphy
l:[[145,1],[294,1],[346,1],[204,9],[48,16],[61,24],[151,31],[250,39],[352,46],[392,54],[291,61],[240,69],[391,76]],
m:[347,92,258,237,58,59,63,113,182,240,219,218,216,94,247,104,115,263,156,496,412,503,374,416,148,244,447,207,214,369,164,290,605,590,57,127,291],
tr:[173,196,215,253,270,282,285,324,340,343,352,387]
},{//Darkrai
l:[[50,1],[466,1],[98,11],[95,20],[185,29],[171,38],[104,47],[114,57],[464,66],[417,75],[138,84],[399,93]],
m:[347,92,237,241,269,58,59,63,182,240,218,85,87,216,94,247,280,104,188,317,332,259,263,156,168,496,411,374,451,510,261,373,421,371,514,416,148,86,14,244,157,404,398,138,207,214,164,249,290,555,399,612,590,15,70],
tr:[173,180,196,264,271,282,289,351,387,409,472,492]
},{//Shaymin
m:[92,237,241,63,182,219,218,76,216,94,104,263,156,496,412,416,148,14,244,447,207,214,164,290,267,605,590],
tr:[173,202,235,343,387,388,402,428],
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
m:[468,337,473,347,46,92,258,237,241,58,59,63,113,182,240,219,218,76,85,87,89,216,94,247,280,104,115,53,188,201,126,317,332,263,156,496,497,315,411,412,451,510,511,261,421,371,514,416,148,444,86,14,244,523,157,404,398,138,447,207,214,164,430,433,249,290,555,399,590,15,19,57,70,127,291],
t:[434],
tr:[173,196,200,202,231,257,271,277,278,304,324,334,351,352,356,366,387,401,406,414,428,442,446]
},{//Victini
l:[[93,1],[98,1],[116,1],[510,1],[545,1],[203,9],[29,17],[488,25],[179,33],[481,41],[428,49],[517,57],[38,65],[394,73],[515,81],[500,89],[315,97]],
m:[473,92,237,241,269,63,113,182,219,218,76,85,87,216,94,247,280,104,53,126,263,488,156,496,315,411,412,374,451,510,261,373,416,148,86,244,447,207,214,369,164,433,528,249,290,612,605,590],
tr:[7,9,173,253,257,270,271,272,277,285,324,340,351,387,428],
s:[557]
},{//Snivy
l:[[33,1],[43,4],[22,7],[35,10],[74,13],[536,16],[73,19],[72,22],[21,25],[348,28],[489,31],[202,34],[378,37],[380,40],[437,43]],
m:[347,92,237,241,269,113,182,219,218,76,216,104,115,332,259,263,156,213,496,412,148,14,447,207,214,164,290,267,590,15],
e:[137,212,228,230,231,239,243,345,363,445,580],
t:[520],
tr:[20,173,202,231,235,282,289,380,388,401,402]
},{//Servine
l:[[22,1],[33,1],[35,1],[43,1],[43,4],[22,7],[35,10],[74,13],[536,16],[73,20],[72,24],[21,28],[348,32],[489,36],[202,40],[378,44],[380,48],[437,52]],
m:[347,92,237,241,269,113,182,219,218,76,216,104,115,332,259,263,156,213,496,412,148,14,447,207,214,164,290,267,590,15],
t:[520],
tr:[20,173,202,231,235,282,289,380,388,401,402]
},{//Serperior
l:[[22,1],[33,1],[35,1],[43,1],[43,4],[22,7],[35,10],[74,13],[536,16],[73,20],[72,24],[21,28],[348,32],[489,38],[202,44],[378,50],[380,56],[437,62]],
m:[347,92,237,241,269,63,113,182,219,218,76,216,104,115,332,259,263,156,213,496,412,416,148,14,525,447,207,214,164,249,290,267,590,15,70],
t:[338,520],
tr:[20,173,200,202,231,235,282,289,380,388,401,402,406],
s:[610]
},{//Tepig
l:[[33,1],[39,3],[52,7],[316,9],[111,13],[488,15],[123,19],[205,21],[36,25],[535,27],[372,31],[53,33],[457,37],[46,39],[394,43]],
m:[46,92,237,241,269,182,218,76,216,104,53,126,317,263,488,156,213,496,497,315,510,261,360,447,207,214,164,528,249,290,590,70],
e:[34,37,174,214,222,276,281,283,343,389,484],
t:[519],
tr:[173,231,257,270,276,283,343,428]
},{//Pignite
l:[[33,1],[39,1],[52,1],[316,1],[39,3],[52,7],[316,9],[111,13],[488,15],[292,17],[123,20],[205,23],[36,28],[535,31],[372,36],[53,39],[457,44],[46,47],[394,52]],
m:[46,92,237,241,269,182,218,76,216,280,104,53,126,317,263,488,156,213,490,496,497,315,411,374,510,261,444,360,523,157,398,447,207,214,164,528,249,290,612,590,70],
t:[519],
tr:[7,9,67,173,231,257,264,270,276,283,343,428]
},{//Emboar
l:[[33,1],[39,1],[52,1],[316,1],[359,1],[39,3],[52,7],[316,9],[111,13],[488,15],[292,17],[123,20],[205,23],[36,28],[535,31],[372,38],[53,43],[457,50],[46,55],[394,62]],
m:[46,92,339,237,241,269,63,182,218,76,479,89,216,280,104,53,126,317,263,488,156,213,490,496,497,315,411,503,374,510,261,416,444,360,523,157,398,447,207,214,164,528,249,290,612,590,70],
t:[307,519],
tr:[7,9,67,173,231,257,264,270,276,283,335,343,428,442],
s:[610]
},{//Oshawott
l:[[33,1],[39,5],[55,7],[346,11],[116,13],[534,17],[210,19],[352,23],[279,25],[453,29],[227,31],[401,35],[514,37],[14,41],[56,43]],
m:[92,258,237,269,58,59,182,240,218,216,91,104,332,263,156,213,496,206,503,374,514,14,404,447,207,214,164,249,290,590,15,57,127,291],
e:[103,197,362,372,376,383,400,403],
t:[518],
tr:[173,196,231,270,343,352,401]
},{//Dewott
l:[[33,1],[39,1],[55,1],[346,1],[39,5],[55,7],[346,11],[116,13],[534,17],[210,20],[352,25],[279,28],[453,33],[227,36],[401,41],[514,44],[14,49],[56,52]],
m:[92,258,237,269,58,59,182,240,218,216,91,104,332,263,156,213,496,206,503,374,514,14,404,447,207,214,164,249,290,590,15,57,127,291],
t:[518],
tr:[173,196,231,270,343,352,401]
},{//Samurott
l:[[33,1],[39,1],[55,1],[224,1],[346,1],[39,5],[55,7],[346,11],[116,13],[534,17],[210,20],[352,25],[279,28],[453,33],[163,36],[227,38],[401,45],[514,50],[14,57],[56,62]],
m:[92,258,237,269,58,59,63,182,240,218,216,91,104,332,263,156,213,496,206,503,374,514,416,14,404,525,447,207,214,164,249,290,590,15,57,70,127,291],
t:[308,518],
tr:[173,196,231,270,276,282,335,343,352,401],
s:[610]
},{//Patrat
l:[[33,1],[43,3],[44,6],[117,8],[197,11],[28,13],[242,16],[95,18],[162,21],[495,23],[526,26],[158,28],[212,31],[226,33],[21,36]],
m:[92,237,241,182,240,218,85,216,91,247,104,263,156,213,496,374,514,14,447,207,214,164,290,590,15],
e:[103,175,193,228,231,279,372],
tr:[67,162,173,231,270,283,343,351,387,401,402,428,441,495]
},{//Watchog
l:[[33,1],[43,1],[44,1],[67,1],[563,1],[43,3],[44,6],[117,8],[197,11],[28,13],[242,16],[95,18],[109,20],[162,22],[495,25],[244,29],[158,32],[212,36],[226,39],[21,43]],
m:[92,237,241,63,113,182,240,218,85,87,216,91,247,104,53,263,156,213,496,411,374,514,416,148,86,14,244,138,447,207,214,164,249,290,612,590,15,70],
tr:[7,8,9,67,162,173,231,264,270,282,283,324,343,351,387,401,402,428,441,495]
},{//Lillipup
l:[[33,1],[43,1],[316,5],[44,8],[608,10],[270,12],[36,15],[526,19],[242,22],[46,26],[514,29],[179,33],[387,36],[416,40],[583,45]],
m:[46,92,237,241,182,240,218,85,216,91,247,104,317,332,263,156,213,496,514,416,86,207,214,164,528,249,290,555,590],
e:[28,122,189,203,204,228,281,336,422,423,424,495],
tr:[173,253,270,304,343,351,387,495]
},{//Herdier
l:[[33,1],[43,1],[44,1],[316,1],[316,5],[44,8],[270,12],[36,15],[526,20],[242,24],[46,29],[514,33],[179,38],[387,42],[416,47],[583,52]],
m:[46,92,237,241,182,240,218,85,216,91,247,104,317,332,263,156,213,496,371,514,416,86,207,214,164,528,249,290,555,590,57,70],
tr:[173,253,270,304,343,351,387,495]
},{//Stoutland
l:[[33,1],[43,1],[44,1],[316,1],[422,1],[423,1],[424,1],[316,5],[44,8],[270,12],[36,15],[526,20],[242,24],[46,29],[514,36],[179,42],[387,51],[416,59],[583,63]],
m:[46,92,237,241,63,182,240,218,85,87,216,91,247,104,317,332,263,156,213,496,371,514,416,86,207,214,164,528,249,290,555,590,57,70],
tr:[173,253,270,276,304,343,351,387,442,495]
},{//Purrloin
l:[[10,1],[45,3],[274,6],[28,10],[154,12],[228,15],[259,19],[252,21],[468,24],[372,28],[163,30],[445,33],[400,37],[289,39],[417,42],[389,46],[583,49]],
m:[468,92,237,241,269,182,240,218,216,247,104,332,259,263,156,213,168,496,497,373,421,371,86,244,138,447,207,214,369,164,290,555,399,590,15],
e:[6,185,204,227,281,313,343,383,492],
tr:[173,180,231,271,272,282,289,304,343,402,441,492]
},{//Liepard
l:[[10,1],[28,1],[45,1],[274,1],[45,3],[274,6],[28,10],[154,12],[228,15],[259,19],[252,22],[468,26],[372,31],[163,34],[269,38],[400,43],[289,47],[417,50],[389,55],[583,58]],
m:[468,92,237,241,269,63,182,240,218,216,247,104,332,259,263,156,213,168,496,497,373,421,371,416,86,244,138,447,207,214,369,164,249,290,555,399,590,15],
tr:[173,180,231,271,272,282,289,304,343,402,441,492]
},{//Pansage
l:[[10,1],[589,1],[43,4],[122,7],[22,10],[154,13],[73,16],[44,19],[402,22],[259,25],[374,28],[512,31],[447,34],[278,37],[363,40],[242,43]],
m:[468,92,237,241,269,182,218,76,216,91,104,317,259,263,156,213,168,490,496,412,374,512,421,371,148,447,207,214,164,249,290,267,590,15],
e:[67,272,310,320,321,331,343,345,417,437,574],
tr:[67,173,202,231,235,253,264,270,272,278,282,283,343,380,388,402,441]
},{//Simisage
l:[[43,1],[122,1],[154,1],[402,1]],
m:[468,92,237,241,269,63,182,218,76,216,91,280,104,317,259,263,156,213,168,490,496,411,412,374,512,421,371,416,148,157,447,207,214,164,249,290,267,612,590,15],
tr:[67,173,202,231,235,253,264,270,272,276,278,282,283,343,380,388,402,441]
},{//Pansear
l:[[10,1],[589,1],[43,4],[122,7],[510,10],[154,13],[281,16],[44,19],[481,22],[133,25],[374,28],[512,31],[126,34],[278,37],[363,40],[242,43]],
m:[468,92,237,241,269,182,218,76,216,91,104,53,126,317,259,263,488,156,213,168,490,496,315,374,510,261,512,421,371,447,207,214,164,249,290,590,15],
e:[7,67,83,214,257,272,310,321,343,417,574],
tr:[7,67,173,231,253,257,264,270,272,278,282,283,343,380,441]
},{//Simisear
l:[[43,1],[122,1],[154,1],[481,1]],
m:[468,92,237,241,269,63,182,218,76,216,91,280,104,53,126,317,259,263,488,156,213,168,490,496,315,411,374,510,261,512,421,371,416,157,447,207,214,164,249,290,612,590,15],
tr:[7,67,173,231,253,257,264,270,272,276,278,282,283,343,380,441]
},{//Panpour
l:[[10,1],[589,1],[43,4],[122,7],[55,10],[154,13],[346,16],[44,19],[503,22],[269,25],[374,28],[512,31],[362,34],[278,37],[363,40],[242,43]],
m:[468,92,258,237,269,58,59,182,240,218,216,91,104,317,259,263,156,213,168,490,496,503,374,512,421,371,447,207,214,164,249,290,590,15,57,127,291],
e:[56,67,272,300,310,321,343,392,401,417,574],
tr:[8,67,173,196,231,253,264,270,272,278,282,283,343,352,380,401,441]
},{//Simipour
l:[[43,1],[122,1],[154,1],[503,1]],
m:[468,92,258,237,269,58,59,63,182,240,218,216,91,280,104,317,259,263,156,213,168,490,496,411,503,374,512,421,371,416,157,447,207,214,164,249,290,612,590,15,57,127,291],
tr:[8,67,173,196,231,253,264,270,272,276,278,282,283,343,352,380,401,441]
},{//Munna
l:[[111,1],[149,1],[381,5],[281,7],[60,11],[286,13],[236,17],[95,19],[428,23],[485,25],[171,29],[248,31],[347,35],[94,37],[138,41],[477,43],[500,47]],
m:[473,347,92,237,113,182,240,219,218,216,94,247,104,115,317,259,263,156,213,496,412,451,148,86,360,244,157,138,207,214,164,433,290,605,590],
e:[49,112,129,174,214,226,270,277,290,361],
tr:[173,215,220,270,271,277,285,324,351,356,388,428,472,495]
},{//Musharna
l:[[60,1],[95,1],[111,1],[381,1]],
m:[473,347,92,237,63,113,182,240,219,218,216,94,247,104,115,317,259,263,156,213,496,412,451,416,148,86,360,244,157,138,207,214,164,433,290,605,590],
tr:[173,215,220,270,271,277,285,324,351,356,388,428,472,495]
},{//Pidove
l:[[16,1],[45,4],[43,8],[98,11],[314,15],[355,18],[197,22],[269,25],[403,29],[13,32],[297,36],[207,39],[263,43],[366,46],[143,50]],
m:[92,237,241,269,182,240,355,218,216,104,332,263,156,213,496,497,211,207,214,369,164,290,590,19],
e:[95,211,234,253,273,381,400,516],
tr:[143,173,253,257,366]
},{//Tranquill
l:[[16,1],[43,1],[45,1],[98,1],[45,4],[43,8],[98,11],[314,15],[355,18],[197,23],[269,27],[403,32],[13,36],[297,41],[207,45],[263,50],[366,54],[143,59]],
m:[92,237,241,269,182,240,355,218,216,104,332,263,156,213,496,497,211,207,214,369,164,290,590,19],
tr:[143,173,253,257,366]
},{//Unfezant
l:[[16,1],[43,1],[45,1],[98,1],[45,4],[43,8],[98,11],[314,15],[355,18],[197,23],[269,27],[403,33],[13,38],[297,44],[207,49],[263,55],[366,60],[143,66]],
m:[92,237,241,269,63,182,240,355,218,216,104,332,263,156,213,496,497,211,416,244,207,214,369,164,290,590,19],
tr:[143,173,253,257,366]
},{//Blitzle
l:[[98,1],[39,4],[268,8],[351,11],[86,15],[488,18],[228,22],[209,25],[23,29],[435,32],[97,36],[528,39],[37,43]],
m:[92,237,113,182,240,218,85,87,216,104,263,488,156,213,496,451,148,521,86,207,214,164,528,290,590],
e:[24,28,36,38,99,103,203,289,351,382],
tr:[173,289,324,340,351,393]
},{//Zebstrika
l:[[39,1],[86,1],[98,1],[268,1],[569,1],[39,4],[268,8],[351,11],[86,15],[488,18],[228,22],[209,25],[23,31],[435,36],[97,42],[528,47],[37,53],[569,58]],
m:[92,237,63,113,182,240,218,85,87,216,104,263,488,156,213,496,315,451,416,148,521,86,207,214,164,528,249,290,590],
tr:[173,289,324,340,351,393]
},{//Roggenrola
l:[[33,1],[106,4],[28,7],[29,10],[350,14],[189,17],[334,20],[479,23],[157,27],[446,30],[201,33],[444,36],[153,40]],
m:[92,237,182,218,479,89,216,104,201,317,263,156,213,496,153,397,444,523,157,207,214,164,430,249,290,267,590,70],
e:[36,174,199,222,317,356,469,475,484],
tr:[173,334,335,356,414,446]
},{//Boldore
l:[[28,1],[29,1],[33,1],[106,1],[106,4],[28,7],[29,10],[350,14],[189,17],[334,20],[479,23],[408,25],[157,30],[446,36],[201,42],[444,48],[153,55]],
m:[92,237,182,218,479,89,216,104,201,317,263,156,213,496,153,397,444,523,157,207,214,164,430,249,290,267,590,70],
tr:[173,334,335,356,414,446]
},{//Gigalith
l:[[28,1],[29,1],[33,1],[106,1],[106,4],[28,7],[29,10],[350,14],[189,17],[334,20],[479,23],[408,25],[157,30],[446,36],[201,42],[444,48],[153,55]],
m:[92,237,63,182,218,76,479,89,216,104,201,317,263,156,213,496,153,416,397,444,523,157,207,214,164,430,249,290,267,590,70],
tr:[173,276,334,335,356,414,442,446]
},{//Woobat
l:[[93,1],[316,4],[16,8],[372,12],[531,15],[286,19],[314,21],[213,25],[133,29],[347,29],[403,32],[248,36],[94,41],[283,47]],
m:[473,347,92,237,269,113,182,240,355,219,218,216,94,247,104,115,332,259,263,156,213,168,496,211,412,451,512,373,148,86,360,244,138,207,214,369,164,433,290,590,19],
e:[48,204,260,270,282,313,355,375,445,485,500,599],
tr:[162,173,202,253,257,270,271,277,282,283,285,324,351,366,428,495]
},{//Swoobat
l:[[16,1],[93,1],[316,1],[372,1],[316,4],[16,8],[372,12],[531,15],[286,19],[314,21],[213,25],[133,29],[347,29],[403,32],[248,36],[94,41],[283,47]],
m:[473,347,92,237,269,63,113,182,240,355,219,218,216,94,247,104,115,332,259,263,156,213,168,496,211,412,451,512,373,416,148,86,360,244,138,207,214,369,164,433,290,590,19],
tr:[143,162,173,202,253,257,270,271,277,282,283,285,324,351,366,428,495]
},{//Drilbur
l:[[10,1],[300,1],[229,5],[189,8],[154,12],[232,15],[91,19],[468,22],[163,26],[157,29],[89,33],[14,36],[201,40],[529,43],[90,47]],
m:[468,92,237,182,218,89,216,91,280,104,188,201,317,332,263,156,213,496,374,421,14,523,157,404,398,207,214,164,249,290,590,15,70],
e:[66,130,229,306,319,334,414,431],
tr:[173,334,414,446,529]
},{//Excadrill
l:[[10,1],[189,1],[229,1],[300,1],[563,1],[229,5],[189,8],[154,12],[232,15],[91,19],[468,22],[163,26],[157,29],[32,31],[89,36],[14,42],[201,49],[529,55],[90,62]],
m:[468,92,237,63,182,218,89,216,91,280,104,188,201,317,332,263,156,213,496,411,374,421,416,14,523,157,404,398,207,214,164,249,290,590,15,70],
tr:[173,334,393,414,442,446,529]
},{//Audino
l:[[1,1],[45,1],[270,1],[387,1,53],[589,1],[581,,1],[287,5,9],[608,,5],[3,10,17],[574,,13],[213,15,21],[290,20,25],[494,25,29],[36,30,33],[505,35,37],[495,40,41],[493,45],[38,50,49],[387,55]],
m:[473,347,92,237,241,58,59,63,113,182,240,219,218,76,85,87,216,91,94,247,104,115,53,126,263,156,213,496,497,374,451,510,514,148,86,244,138,447,207,214,164,433,528,290,612,605,590,57],
e:[133,186,214,215,227,273,281,361,381,516,577],
tr:[7,8,9,67,173,196,215,220,231,253,264,270,272,277,282,285,289,304,324,343,356,387,409,428,495]
},{//Timburr
l:[[1,1],[43,1],[116,4],[117,8],[67,12],[88,16],[358,20],[498,24],[339,28],[157,31],[223,34],[184,37],[359,40],[444,43],[264,46],[276,49]],
m:[92,339,237,241,269,182,240,218,479,216,91,280,104,317,263,156,213,490,496,411,374,371,514,444,157,398,447,207,214,164,249,290,612,590,70],
e:[4,68,179,183,193,197,203,265,395,409,469],
tr:[7,8,9,67,173,264,270,276,282,335,409]
},{//Gurdurr
l:[[1,1],[43,1],[116,1],[117,1],[116,4],[117,8],[67,12],[88,16],[358,20],[498,24],[339,29],[157,33],[223,37],[184,41],[359,45],[444,49],[264,53],[276,57]],
m:[92,339,237,241,269,182,240,218,479,216,91,280,104,317,263,156,213,490,496,411,374,371,514,444,157,398,447,207,214,164,249,290,612,590,70],
tr:[7,8,9,67,173,264,270,276,282,335,409]
},{//Conkeldurr
l:[[1,1],[43,1],[116,1],[117,1],[116,4],[117,8],[67,12],[88,16],[358,20],[498,24],[339,29],[157,33],[223,37],[184,41],[359,45],[444,49],[264,53],[276,57]],
m:[92,339,237,241,269,63,182,240,218,479,89,216,91,280,104,317,263,156,213,490,496,411,374,371,514,416,444,523,157,398,447,207,214,164,249,290,612,590,70],
tr:[7,8,9,67,173,264,270,276,282,335,409]
},{//Tympole
l:[[45,1],[145,1],[48,5],[496,9],[61,12],[341,16],[392,20],[253,23],[330,27],[240,31],[175,34],[497,38],[56,42],[304,45]],
m:[92,258,237,182,240,218,216,104,482,188,263,156,213,496,497,503,611,207,214,164,290,590,57],
e:[54,173,214,287,300,352,414,426,495],
tr:[173,196,253,283,304,340,352,414,495]
},{//Palpitoad
l:[[45,1],[48,1],[145,1],[496,1],[48,5],[496,9],[61,12],[341,16],[392,20],[253,23],[330,28],[240,33],[175,37],[497,42],[56,47],[304,51]],
m:[92,258,237,182,240,218,216,104,482,188,263,156,213,496,497,503,523,611,207,214,164,249,290,590,57],
tr:[173,196,253,264,283,304,340,352,380,414,446,495]
},{//Seismitoad
l:[[45,1],[48,1],[145,1],[496,1],[48,5],[496,9],[61,12],[341,16],[392,20],[253,23],[330,28],[240,33],[51,36],[175,39],[409,44],[497,49],[56,53],[304,59]],
m:[92,258,474,237,63,182,240,218,89,216,91,280,104,482,188,317,263,156,213,496,497,411,503,374,371,416,523,157,611,398,447,207,214,164,249,290,612,590,57,70],
tr:[8,67,173,196,253,264,282,283,304,340,352,380,409,414,446,495]
},{//Throh
l:[[20,1],[43,1],[117,5],[116,9],[69,13],[233,17],[279,21],[480,25],[34,29],[339,33],[509,37],[203,41],[469,45],[276,48],[179,50]],
m:[92,339,237,241,269,182,240,218,89,216,91,280,104,317,263,156,213,490,496,411,374,371,514,416,444,523,157,398,447,207,214,164,249,290,612,590,70],
tr:[7,8,9,20,67,173,220,264,270,276,282,335,428]
},{//Sawk
l:[[43,1],[249,1],[117,5],[116,9],[24,13],[490,17],[68,21],[2,25],[280,29],[339,33],[514,37],[203,41],[501,45],[370,48],[179,50]],
m:[92,339,237,241,269,182,240,218,89,216,91,280,104,317,263,156,213,490,496,411,374,371,514,416,444,523,157,398,447,207,214,164,249,290,612,590,70],
tr:[7,8,9,67,173,220,264,270,276,282,335,428,530]
},{//Sewaddle
l:[[33,1],[81,1],[450,8],[75,15],[522,22],[203,29],[564,31],[405,36],[175,43]],
m:[347,92,237,241,113,182,219,218,76,216,104,263,156,213,496,412,371,148,522,138,447,207,214,164,290,267,590,15],
e:[13,97,103,170,226,293,318,382,403],
tr:[173,202,235,277,324,334,388,402,450,527]
},{//Swadloon
l:[[33,1],[75,1],[81,1],[320,1],[450,1],[182,20]],
m:[347,92,237,241,113,182,219,218,76,216,104,263,156,213,496,412,371,148,522,138,447,207,214,164,290,267,590,15],
tr:[173,202,235,277,324,334,388,402,450,527]
},{//Leavanny
l:[[33,1],[75,1],[81,1],[206,1],[450,1],[450,8],[75,15],[522,22],[163,29],[270,32],[565,34],[348,36],[404,39],[494,43],[14,46],[437,50]],
m:[468,347,92,237,241,63,113,182,219,218,76,216,104,115,332,263,156,213,496,211,412,206,421,371,514,416,148,14,522,404,398,138,447,207,214,164,290,267,590,15],
tr:[173,202,215,235,270,277,282,324,334,388,402,450,527]
},{//Venipede
l:[[111,1],[205,1],[40,5],[103,8],[228,12],[182,15],[342,19],[450,22],[474,26],[97,29],[537,33],[92,36],[474,38],[431,40],[38,43]],
m:[92,474,237,241,182,218,76,216,104,188,263,156,213,496,371,360,522,611,398,207,214,164,249,290,590],
e:[36,41,42,191,390,431],
tr:[173,283,324,334,450]
},{//Whirlipede
l:[[40,1],[103,1],[111,1],[205,1],[40,5],[103,8],[228,12],[182,15],[342,19],[334,22],[450,23],[474,28],[97,32],[537,37],[92,41],[599,43],[431,46],[38,50]],
m:[92,474,237,241,182,218,76,216,104,188,263,156,213,496,371,360,522,611,398,207,214,164,249,290,590],
tr:[173,283,324,334,450]
},{//Scolipede
l:[[40,1],[103,1],[111,1],[205,1],[224,1],[40,5],[103,8],[228,12],[182,15],[342,19],[450,23],[474,28],[226,30],[97,33],[537,39],[92,44],[599,47],[431,50],[38,55],[224,65]],
m:[92,474,237,241,63,182,218,76,89,216,91,104,188,317,263,156,213,496,371,416,360,14,522,523,157,404,611,398,207,214,164,249,290,590,15,70],
tr:[173,231,276,283,289,324,334,401,450]
},{//Cottonee
l:[[71,1],[584,1],[74,4],[73,8],[78,10],[72,13],[178,17],[75,19],[77,22],[202,26],[204,28],[270,31],[412,35],[538,37],[241,40],[283,44],[76,46]],
m:[92,237,241,269,182,219,218,76,216,104,263,156,213,496,412,148,138,447,207,214,164,290,267,605,590],
e:[227,251,262,313,320,321,363,388,415,445],
tr:[173,202,270,282,283,343,366,388,402]
},{//Whimsicott
l:[[72,1],[73,1],[74,1],[178,1],[16,10],[366,28],[542,46],[585,50]],
m:[92,237,241,269,63,113,182,219,218,76,216,94,247,104,263,156,213,168,496,412,374,416,148,138,447,207,214,369,164,433,290,267,605,590],
tr:[173,202,270,282,283,343,366,388,402]
},{//Petilil
l:[[71,1],[74,4],[73,8],[79,10],[72,13],[235,17],[345,19],[78,22],[202,26],[312,28],[270,31],[412,35],[494,37],[241,40],[495,44],[437,46]],
m:[92,237,241,182,219,218,76,216,104,263,156,213,496,412,148,138,447,207,214,164,290,267,590,15],
e:[117,203,204,230,275,320,361,363,388],
tr:[173,202,215,235,270,343,388,402,495]
},{//Lilligant
l:[[72,1],[73,1],[74,1],[235,1],[298,10],[483,28],[80,46],[572,50]],
m:[92,237,241,63,113,182,219,218,76,216,104,263,156,213,496,412,416,148,14,138,447,207,214,164,290,267,590,15],
tr:[173,202,215,235,270,272,343,388,402,495]
},{//Basculin
l:[[33,1],[37,1],[39,1],[55,1],[175,1],[253,4],[29,7],[44,10],[453,13],[498,16],[36,20],[242,24],[401,28],[487,32],[38,36],[184,41],[175,46],[515,50],[37,56]],
m:[92,258,237,269,58,182,240,218,216,104,263,156,213,496,503,207,214,164,290,590,15,57,127,291],
e:[61,97,99,129,250,279,330,341,362],
tr:[173,196,253,276,283,340,401,428]
},{//Sandile
l:[[43,1],[99,1],[44,4],[28,7],[259,10],[328,13],[372,16],[189,19],[373,22],[207,25],[242,28],[91,31],[184,34],[492,37],[201,40],[89,43],[37,46]],
m:[468,46,92,237,269,182,218,89,216,91,104,188,201,317,259,263,156,213,168,496,510,373,371,514,444,523,157,207,214,164,290,555,399,590,15],
e:[38,68,116,212,228,251,253,382,422,424,431],
tr:[173,180,231,253,289,401,414,446,492]
},{//Krokorok
l:[[28,1],[43,1],[44,1],[99,1],[44,4],[28,7],[259,10],[328,13],[372,16],[189,19],[373,22],[207,25],[242,28],[91,32],[184,36],[492,40],[201,44],[89,48],[37,52]],
m:[468,46,92,237,269,182,218,89,216,91,280,104,188,201,317,259,263,156,213,168,490,496,374,510,373,421,371,514,444,523,157,447,207,214,164,249,290,555,399,612,590,15,70],
tr:[67,173,180,231,253,264,282,289,401,414,446,492]
},{//Krookodile
l:[[28,1],[43,1],[44,1],[99,1],[200,1],[44,4],[28,7],[259,10],[328,13],[372,16],[189,19],[373,22],[207,25],[242,28],[91,32],[184,36],[492,42],[201,48],[89,54],[200,60]],
m:[468,337,46,92,339,237,269,63,182,218,479,89,216,91,280,104,188,201,317,332,259,263,156,213,168,490,496,411,374,510,373,421,371,514,416,444,523,157,525,447,207,214,164,249,290,555,399,612,590,15,70],
tr:[67,173,180,200,231,253,264,276,282,289,335,401,406,414,446,492]
},{//Darumaka
l:[[33,1],[205,3],[510,6],[99,9],[424,11],[29,14],[253,17],[263,19],[7,22],[526,25],[37,27],[187,30],[394,33],[269,35],[276,39],[315,42]],
m:[46,92,237,241,269,182,218,76,216,91,280,104,53,126,317,263,488,156,213,168,496,315,374,510,261,360,157,447,207,214,369,164,249,290,612,590,70],
e:[36,116,172,203,214,227,264,281,289,359],
tr:[7,173,253,257,264,276,283,289,428]
},{//Darmanitan
l:[[33,1],[99,1],[205,1],[510,1],[205,3],[510,6],[99,9],[424,11],[29,14],[207,17],[263,19],[7,22],[526,25],[37,27],[187,30],[394,33],[359,35],[269,39],[276,47],[315,54]],
m:[46,92,339,237,241,269,63,182,218,76,479,89,216,91,94,280,104,53,126,317,259,263,488,156,213,168,496,315,411,374,510,261,371,416,444,360,523,157,447,207,214,369,164,249,290,612,590,70],
tr:[7,173,253,257,264,276,283,289,428]
},{//Maractus
l:[[64,1],[71,1],[495,1,57],[538,1,55],[596,,1],[230,3],[74,6],[42,10],[72,13],[235,15],[178,18],[302,22],[202,26],[367,29],[275,33],[80,38],[389,42],[241,45],[572,48],[76,50],[538,55],[495,57]],
m:[92,237,241,182,219,218,76,216,104,332,263,156,213,496,412,398,447,207,214,164,290,267,590],
e:[73,191,320,331,340,388,402,452,580],
tr:[173,202,235,253,270,282,283,304,340,388,402,409,495]
},{//Dwebble
l:[[210,1],[350,5],[110,7],[28,11],[185,13],[479,17],[397,19],[450,23],[446,24],[157,29],[163,31],[404,35],[504,37],[175,41],[439,43]],
m:[468,92,237,182,218,76,479,89,216,91,104,201,317,332,263,156,213,496,421,397,444,14,522,523,157,404,398,207,214,164,249,290,267,590,15,70],
e:[68,174,191,203,328,334,335,400,469,563],
tr:[173,282,334,335,446,450]
},{//Crustle
l:[[28,1],[110,1],[350,1],[504,1],[350,5],[110,7],[28,11],[185,13],[479,17],[397,19],[450,23],[446,24],[157,29],[163,31],[404,38],[504,43],[175,50],[439,55]],
m:[468,92,237,63,182,218,76,479,89,216,91,104,201,317,332,263,156,213,496,421,416,397,444,14,522,523,157,404,398,207,214,164,249,290,267,590,15,70],
tr:[173,282,334,335,446,450]
},{//Scraggy
l:[[43,1],[67,1],[28,5],[185,9],[29,12],[207,16],[280,20],[371,23],[498,27],[136,31],[184,34],[242,38],[263,42],[431,45],[264,48],[457,50]],
m:[337,46,92,339,237,241,269,182,240,218,479,216,91,280,104,188,317,259,263,156,213,490,496,411,374,510,371,514,444,157,525,398,447,207,214,164,249,290,555,399,612,590,70],
e:[7,8,9,68,133,185,197,252,349,409,428,501],
tr:[7,8,9,67,162,173,180,231,264,282,289,334,406,409,428,442,492,530]
},{//Scrafty
l:[[28,1],[43,1],[67,1],[185,1],[28,5],[185,9],[29,12],[207,16],[280,20],[371,23],[498,27],[136,31],[184,34],[242,38],[263,45],[431,51],[264,58],[457,65]],
m:[337,46,92,339,237,241,269,63,182,240,218,479,216,91,280,104,188,317,259,263,156,213,168,490,496,411,374,510,371,514,416,444,157,525,398,447,207,214,164,249,290,555,399,612,590,70],
tr:[7,8,9,67,162,173,180,200,231,264,282,289,334,406,409,428,442,492,530]
},{//Sigilyph
l:[[16,1],[357,1],[95,4],[149,8],[366,11],[18,14],[60,18],[314,21],[113,24],[115,28],[485,31],[119,34],[356,38],[403,41],[94,44],[322,48],[143,50]],
m:[473,347,92,237,58,63,113,182,240,355,219,218,76,479,216,94,247,104,115,332,263,156,213,168,496,211,412,451,148,86,244,138,207,214,164,430,433,290,399,605,590,19],
e:[211,246,248,285,355,375,500],
tr:[143,173,196,257,271,277,285,324,351,356,366,428,478]
},{//Yamask
l:[[182,1],[310,1],[50,5],[114,9],[101,13],[506,17],[261,21],[466,25],[174,29],[470,33],[471,33],[247,37],[288,41],[212,45],[194,49]],
m:[347,92,237,182,240,219,218,216,94,247,104,263,156,213,168,496,412,261,373,371,148,244,611,138,207,214,164,433,290,399,590],
e:[50,171,203,262,286,313,377,390,417,502],
tr:[173,180,220,271,272,277,282,285,289,334,335,351,428,472,495]
},{//Cofagrigus
l:[[50,1],[114,1],[182,1],[310,1],[50,5],[114,9],[101,13],[506,17],[261,21],[466,25],[174,29],[470,33],[471,33],[184,34],[247,39],[288,45],[212,51],[194,57]],
m:[347,92,237,63,182,240,219,218,216,94,247,104,263,156,213,168,496,412,261,373,371,416,148,244,611,138,447,207,214,164,433,290,399,590],
tr:[173,180,220,271,272,277,282,285,289,334,335,351,428,472,495]
},{//Tirtouga
l:[[55,1],[110,1],[117,1],[205,5],[44,8],[182,11],[453,15],[246,18],[242,21],[469,25],[362,28],[479,31],[174,35],[504,38],[401,41],[157,45],[240,48],[56,50]],
m:[92,237,58,59,182,240,218,479,89,216,91,104,201,317,263,156,213,496,503,397,444,523,157,207,214,164,249,290,590,57,70,127,291],
e:[21,34,88,117,175,250,282,334,352,385],
tr:[173,196,231,282,334,335,352,401,414,428,446]
},{//Carracosta
l:[[55,1],[110,1],[117,1],[205,1],[205,5],[44,8],[182,11],[453,15],[246,18],[242,21],[469,25],[362,28],[479,31],[174,35],[504,40],[401,45],[157,51],[240,56],[56,61]],
m:[92,237,58,59,63,182,240,218,479,89,216,91,104,201,317,263,156,213,496,411,503,416,397,444,523,157,207,214,164,249,290,590,57,70,127,291],
tr:[67,173,196,231,276,282,334,335,352,401,414,428,442,446]
},{//Archen
l:[[17,1],[43,1],[98,1],[88,5],[104,8],[184,11],[365,15],[246,18],[97,21],[501,25],[512,28],[225,31],[242,35],[283,38],[369,41],[157,45],[337,48],[37,50]],
m:[468,337,46,92,237,269,182,355,218,479,89,216,91,104,201,317,332,259,263,156,213,496,211,512,421,397,444,523,157,207,214,369,164,249,290,590,15],
e:[44,211,282,406,414,415,432,457,502],
tr:[173,231,253,257,282,283,334,340,366,401,406,414,428,446]
},{//Archeops
l:[[17,1],[43,1],[88,1],[98,1],[88,5],[104,8],[184,11],[365,15],[246,18],[97,21],[501,25],[512,28],[225,31],[242,35],[283,40],[369,45],[157,51],[337,56],[37,61]],
m:[468,337,46,92,237,269,63,182,355,218,479,89,216,91,104,201,317,332,259,263,156,213,496,211,411,512,421,416,397,444,523,157,525,207,214,369,164,249,290,590,15,19],
tr:[143,173,200,231,253,257,282,283,334,340,366,401,406,414,428,446]
},{//Trubbish
l:[[1,1],[139,1],[278,3],[390,7],[491,12],[3,14],[124,18],[254,23],[256,23],[36,25],[188,29],[499,34],[92,36],[133,40],[562,42],[441,45],[153,47]],
m:[92,474,237,241,182,240,218,216,104,482,188,263,156,213,168,496,153,371,611,207,214,164,290,399,590],
e:[28,114,120,174,191,205,300,350],
tr:[173,180,202,220,278,402,409,441]
},{//Garbodor
l:[[1,1],[139,1],[278,1],[390,1],[278,3],[390,7],[491,12],[3,14],[124,18],[254,23],[256,23],[34,25],[188,29],[499,34],[92,39],[133,46],[562,49],[441,54],[153,59]],
m:[92,474,237,241,63,182,240,218,76,479,85,216,94,104,482,188,263,156,213,168,496,411,374,153,371,416,397,611,207,214,164,290,399,590],
tr:[173,180,202,220,278,402,409,441]
},{//Zorua
l:[[10,1],[43,1],[228,5],[313,9],[154,13],[185,17],[184,21],[269,25],[492,29],[259,33],[97,37],[373,41],[386,45],[417,49],[286,53],[539,57]],
m:[468,347,46,92,237,241,269,182,240,218,216,91,247,104,332,259,263,156,213,168,496,374,510,373,371,514,14,244,447,207,214,369,164,290,555,399,590,15],
e:[68,197,262,289,326,383,389,399,445],
tr:[173,180,253,271,282,289,304,340,343,492]
},{//Zoroark
l:[[10,1],[43,1],[228,1],[286,1],[369,1],[468,1],[539,1],[228,5],[468,9],[154,13],[185,17],[184,21],[269,25],[492,29],[400,30],[259,34],[97,39],[373,44],[386,49],[417,54],[286,59],[539,64]],
m:[468,347,46,92,237,241,269,63,182,240,218,216,91,247,104,53,332,259,263,156,213,168,490,496,411,374,510,373,421,371,514,416,14,244,447,207,214,369,164,249,290,555,399,590,15],
tr:[67,173,180,253,271,282,289,304,340,343,492]
},{//Minccino
l:[[1,1],[608,3],[270,7],[321,9],[3,13],[227,15],[129,19],[47,21],[541,25],[204,27],[358,31],[497,33],[21,37],[445,39],[304,43],[387,45],[495,49]],
m:[347,92,237,241,182,240,219,218,85,216,91,104,263,156,213,168,496,497,374,514,86,447,207,214,369,164,290,605,590],
e:[39,175,189,203,214,231,282,313,401],
tr:[173,231,253,270,282,304,343,351,387,401,402,441,495]
},{//Cinccino
l:[[47,1],[270,1],[321,1],[331,1],[350,1],[541,1]],
m:[347,92,237,241,63,113,182,240,219,218,85,87,216,91,104,263,156,213,168,496,497,411,374,514,416,86,447,207,214,369,164,290,605,590],
tr:[173,231,253,270,282,304,343,351,387,401,402,441,495]
},{//Gothita
l:[[1,1],[93,3],[321,7],[589,8],[313,10],[3,14],[60,16],[373,19],[185,24],[473,25],[260,28],[248,31],[377,33],[94,37],[477,40],[204,46],[478,48]],
m:[473,347,92,237,269,113,182,240,219,218,85,216,94,247,104,115,317,259,263,156,213,168,496,412,374,451,373,371,148,86,244,157,138,447,207,214,164,433,290,590],
mr:[399],
e:[212,243,253,357,399,445,505],
tr:[173,215,253,270,271,272,277,278,285,289,324,343,351,356,428,478,492]
},{//Gothorita
l:[[1,1],[93,1],[321,1],[589,1],[93,3],[321,7],[313,10],[3,14],[60,16],[373,19],[185,24],[473,25],[260,28],[248,31],[377,34],[94,39],[477,43],[204,50],[478,53]],
m:[473,347,92,237,269,113,182,240,219,218,85,216,94,247,104,115,317,259,263,156,213,168,496,412,374,451,373,371,148,86,244,157,138,447,207,214,164,433,290,590],
mr:[399],
tr:[173,215,253,270,271,272,277,278,285,289,324,343,351,356,428,478,492]
},{//Gothitelle
l:[[1,1],[93,1],[321,1],[589,1],[93,3],[321,7],[313,10],[3,14],[60,16],[373,19],[185,24],[473,25],[260,28],[248,31],[377,34],[94,39],[477,45],[204,54],[478,59]],
m:[473,347,92,237,269,63,113,182,240,219,218,85,216,94,247,280,104,115,317,259,263,156,213,168,490,496,412,374,451,373,371,416,148,86,244,157,138,447,207,214,164,433,290,612,590],
mr:[399],
tr:[173,215,253,270,271,272,277,278,285,289,324,343,351,356,428,478,492]
},{//Solosis
l:[[149,1],[115,3],[205,7],[289,10],[237,14],[113,16],[204,19],[105,24],[473,25],[283,28],[248,31],[220,33],[94,37],[285,40],[377,46],[472,48]],
m:[473,347,92,237,113,182,240,219,218,87,216,94,247,104,115,317,263,156,213,496,412,373,153,148,86,360,244,157,611,138,207,214,164,430,433,290,590],
e:[101,109,151,270,271,286,290,310],
tr:[173,220,270,271,272,277,283,285,289,324,334,351,356,428,472,495]
},{//Duosion
l:[[115,1],[149,1],[205,1],[289,1],[115,3],[205,7],[289,10],[237,14],[113,16],[204,19],[105,24],[473,25],[283,28],[248,31],[220,34],[94,39],[285,43],[377,50],[472,53]],
m:[473,347,92,237,113,182,240,219,218,87,216,94,247,104,115,317,263,156,213,496,412,373,153,148,86,360,244,157,611,138,207,214,164,430,433,290,590],
tr:[173,220,270,271,272,277,283,285,289,324,334,351,356,428,472,495]
},{//Reuniclus
l:[[115,1],[149,1],[205,1],[289,1],[115,3],[205,7],[289,10],[237,14],[113,16],[204,19],[105,24],[473,25],[283,28],[248,31],[220,34],[94,39],[146,41],[285,45],[377,54],[472,59]],
m:[473,347,92,237,63,113,182,240,219,218,87,216,94,247,104,115,317,263,156,213,496,411,412,374,373,153,416,148,86,360,244,157,611,138,447,207,214,164,430,433,249,290,612,590,70],
tr:[7,8,9,173,220,264,270,271,272,276,277,282,283,285,289,324,334,351,356,409,428,472,495]
},{//Ducklett
l:[[55,1],[346,3],[432,6],[17,9],[352,13],[332,15],[61,19],[297,21],[392,24],[403,27],[355,30],[240,34],[366,37],[413,41],[542,46]],
m:[92,258,237,58,182,240,355,218,216,104,332,263,156,213,496,211,503,207,214,164,290,590,19,57,291],
e:[16,119,211,300,314,362,381,382],
tr:[173,196,253,283,352,366]
},{//Swanna
l:[[17,1],[55,1],[346,1],[432,1],[346,3],[432,6],[17,9],[352,13],[332,15],[61,19],[297,21],[392,24],[403,27],[355,30],[240,34],[366,40],[413,47],[542,55]],
m:[92,258,237,58,63,182,240,355,218,216,104,332,263,156,213,496,211,503,416,207,214,164,290,590,19,57,291],
tr:[143,173,196,253,283,352,366]
},{//Vanillite
l:[[333,1],[106,4],[310,7],[253,10],[196,13],[54,16],[419,19],[269,22],[429,26],[151,31],[58,35],[258,40],[243,44],[59,49],[329,53]],
m:[92,258,237,269,58,59,113,182,240,218,216,104,263,156,213,496,153,524,207,214,164,430,290,590],
e:[181,286,334,352,363,393,420,475],
tr:[173,196,253,277,324,334,352,393]
},{//Vanillish
l:[[106,1],[253,1],[310,1],[333,1],[106,4],[310,7],[253,10],[196,13],[54,16],[419,19],[269,22],[429,26],[151,31],[58,36],[258,42],[243,47],[59,53],[329,58]],
m:[92,258,237,269,58,59,113,182,240,218,216,104,263,156,213,496,153,524,207,214,164,430,290,590],
tr:[173,196,253,277,324,334,352,393]
},{//Vanilluxe
l:[[106,1],[253,1],[310,1],[311,1],[329,1],[333,1],[573,1],[106,4],[310,7],[253,10],[196,13],[54,16],[419,19],[269,22],[429,26],[151,31],[58,36],[258,42],[243,50],[59,59],[329,67]],
m:[92,258,237,269,58,59,63,113,182,240,218,216,104,263,156,213,496,153,416,524,207,214,164,430,290,590],
tr:[173,196,253,277,324,334,352,393]
},{//Deerling
l:[[33,1],[293,1],[45,4],[28,7],[24,10],[73,13],[185,16],[36,20],[26,24],[312,28],[412,32],[204,36],[267,41],[38,46],[76,51]],
m:[92,237,241,113,182,240,219,218,76,216,247,104,263,156,213,496,497,412,514,148,86,447,207,214,164,528,290,267,590],
e:[97,214,226,235,313,316,320,363,388],
tr:[173,202,235,340,387,388,402]
},{//Sawsbuck
l:[[28,1],[33,1],[45,1],[224,1],[293,1],[45,4],[28,7],[24,10],[73,13],[185,16],[36,20],[26,24],[312,28],[412,32],[204,36],[532,37],[267,44],[38,52],[76,60]],
m:[92,237,241,63,113,182,240,219,218,76,216,247,104,263,156,213,496,497,412,514,416,148,86,14,447,207,214,164,528,249,290,267,590,15],
tr:[173,202,235,340,387,388,402]
},{//Emolga
l:[[84,1],[98,4],[39,7],[268,10],[209,13],[609,15],[228,16],[104,19],[351,22],[486,26],[512,30],[113,34],[227,38],[521,42],[97,46],[435,50]],
m:[92,237,269,113,182,240,355,218,85,87,216,104,332,263,156,213,496,374,451,512,148,521,86,207,214,369,164,528,290,590,15],
e:[204,226,231,310,321,343,351,355,403,569],
tr:[173,231,270,282,324,343,351,366,387,527]
},{//Karrablast
l:[[64,1],[43,4],[203,8],[210,13],[31,16],[29,20],[206,25],[405,28],[163,32],[36,37],[184,40],[404,44],[175,49],[14,52],[38,56]],
m:[92,237,182,240,218,216,104,332,263,156,213,496,412,206,14,522,404,611,398,207,214,164,290,590,15],
e:[30,68,103,185,224,228,282,450,529],
tr:[173,202,282,324,334,450,529]
},{//Escavalier
l:[[38,1],[41,1],[43,1],[64,1],[501,1],[565,1],[43,4],[501,8],[41,13],[31,16],[29,20],[206,25],[405,28],[163,32],[442,37],[334,40],[404,44],[179,49],[14,52],[416,56],[565,60]],
m:[92,237,63,182,240,218,216,104,332,263,156,213,496,411,412,206,416,14,522,404,611,398,207,214,164,249,290,590,15],
tr:[173,202,282,324,334,442,450,529]
},{//Foongus
l:[[71,1],[74,6],[310,8],[117,12],[72,15],[275,18],[185,20],[230,24],[202,28],[92,32],[235,35],[499,39],[76,43],[476,45],[147,50]],
m:[92,474,237,241,182,240,218,76,216,104,188,263,156,213,496,412,371,148,447,207,214,164,290,267,590],
e:[34,74,77,78,111,203,205,380],
tr:[173,202,235,380,388,402,492,495]
},{//Amoonguss
l:[[71,1],[74,1],[117,1],[310,1],[74,6],[310,8],[117,12],[72,15],[275,18],[185,20],[230,24],[202,28],[92,32],[235,35],[499,43],[76,49],[476,54],[147,62]],
m:[92,474,237,241,63,182,240,218,76,216,104,188,263,156,213,496,412,371,416,148,447,207,214,164,290,267,590],
tr:[173,202,235,380,388,402,492,495]
},{//Frillish
l:[[145,1],[346,1],[71,5],[101,9],[61,13],[105,17],[352,22],[466,27],[362,32],[240,37],[506,43],[56,49],[378,55],[323,61]],
m:[92,258,237,269,58,59,182,240,219,218,216,94,247,104,482,188,263,156,213,496,412,503,261,148,244,138,207,214,164,433,290,399,605,590,57,127,291],
e:[54,105,109,132,151,220],
tr:[20,173,180,196,202,220,271,277,351,352]
},{//Jellicent
l:[[71,1],[101,1],[145,1],[323,1],[346,1],[378,1],[71,5],[101,9],[61,13],[105,17],[352,22],[466,27],[362,32],[240,37],[506,45],[56,53],[378,61],[323,69]],
m:[92,258,237,269,58,59,63,182,240,219,218,216,94,247,104,482,188,263,156,213,496,412,503,261,416,148,244,138,207,214,164,433,290,399,605,590,57,127,291],
tr:[20,173,180,196,202,220,271,277,351,352]
},{//Alomomola
l:[[1,1],[56,1],[346,1],[361,1],[469,1],[392,5],[453,9],[3,13],[505,17],[182,21],[352,25],[358,29],[487,33],[273,37],[362,41],[219,45],[270,49],[469,53],[361,57],[56,61]],
m:[347,92,258,237,58,59,113,182,240,219,218,216,94,247,104,263,156,213,496,503,244,207,214,164,290,590,57,127,291],
e:[54,203,220,243,287,321],
tr:[173,196,220,270,277,282,340,352]
},{//Joltik
l:[[81,1],[141,1],[169,1],[86,4],[103,7],[210,12],[527,15],[450,18],[380,23],[163,26],[486,29],[324,34],[97,37],[389,40],[435,45],[405,48]],
m:[92,237,113,182,240,218,85,216,104,263,156,213,168,496,412,451,148,521,86,522,404,611,398,207,214,164,528,290,590,15],
e:[40,42,50,185,228,293,431,440],
tr:[173,202,324,340,351,380,393,450,527]
},{//Galvantula
l:[[81,1],[86,1],[141,1],[169,1],[564,1],[86,4],[103,7],[210,12],[527,15],[450,18],[380,23],[163,26],[486,29],[324,34],[97,40],[389,46],[435,54],[405,60],[564,65]],
m:[92,237,63,113,182,240,218,85,87,216,104,263,156,213,168,496,412,451,416,148,521,86,522,404,611,398,207,214,164,528,290,590,15],
tr:[173,202,324,340,351,380,393,450,527]
},{//Ferroseed
l:[[33,1],[106,1],[205,6],[174,9],[232,14],[42,18],[360,21],[334,26],[429,30],[275,35],[120,38],[442,43],[371,47],[430,52],[153,55]],
m:[468,92,237,241,182,218,76,85,216,104,263,156,496,412,153,371,397,148,86,360,398,207,214,164,430,249,290,267,590],
e:[73,191,331,356,388,402,431,446,491],
tr:[173,202,282,283,334,356,388,393,402,442,446]
},{//Ferrothorn
l:[[33,1],[106,1],[174,1],[205,1],[431,1],[205,6],[174,9],[232,14],[42,18],[360,21],[334,26],[429,30],[275,35],[120,38],[438,40],[442,46],[371,53],[430,61],[153,67]],
m:[468,92,237,241,63,182,218,76,85,87,216,104,201,332,263,156,496,412,153,421,371,416,397,148,86,360,14,523,398,447,207,214,164,430,249,290,267,590,15,70],
tr:[173,202,282,283,334,335,356,388,393,402,442,446]
},{//Klink
l:[[11,1],[268,6],[84,11],[544,16],[20,21],[451,26],[475,31],[429,36],[103,39],[435,42],[319,45],[508,48],[199,50],[192,54],[63,57]],
m:[92,237,63,182,218,85,216,104,201,263,156,496,451,397,521,86,207,214,164,430,528,249,290,590],
tr:[20,173,253,277,278,324,334,351,356,393]
},{//Klang
l:[[11,1],[84,1],[268,1],[544,1],[268,6],[84,11],[544,16],[20,21],[451,26],[475,31],[429,36],[103,40],[435,44],[319,48],[508,52],[199,56],[192,60],[63,64]],
m:[92,237,63,182,218,85,216,104,201,263,156,496,451,397,521,86,207,214,164,430,528,249,290,590],
tr:[20,173,253,277,278,324,334,351,356,393]
},{//Klinklang
l:[[11,1],[84,1],[192,1],[268,1],[544,1],[602,1],[268,6],[84,11],[544,16],[20,21],[451,25],[475,31],[429,36],[103,40],[435,44],[319,48],[508,54],[199,60],[192,66],[63,72],[602,76]],
m:[92,237,63,182,218,85,87,216,104,201,263,156,496,451,416,397,521,86,207,214,164,430,433,528,249,290,590],
tr:[20,173,253,277,278,324,334,351,356,393]
},{//Tynamo
l:[[33,1],[86,1],[209,1],[451,1]],
m:[451,86],
tr:[393]
},{//Eelektrik
l:[[29,1],[86,1],[209,1],[451,1],[20,9],[51,19],[435,29],[242,39],[85,44],[491,49],[489,54],[528,59],[380,64],[192,69],[37,74]],
m:[92,237,113,182,240,218,85,87,216,104,263,156,213,496,451,512,148,521,86,207,214,369,164,430,528,290,590],
tr:[20,162,173,202,231,282,324,340,351,380,393,401]
},{//Eelektross
l:[[29,1],[37,1],[51,1],[192,1],[242,1],[306,1],[380,1],[435,1],[489,1],[569,1]],
m:[468,337,46,92,237,63,113,182,240,218,85,87,216,280,104,53,317,263,156,213,496,451,512,416,148,521,86,157,525,447,207,214,369,164,430,528,249,290,612,590,15,70],
tr:[7,9,20,162,173,200,202,231,264,276,282,324,340,351,380,393,401,406,409]
},{//Elgyem
l:[[93,1],[45,4],[377,8],[357,11],[60,15],[29,18],[237,22],[286,25],[493,29],[428,32],[244,36],[94,39],[347,43],[105,46],[470,50],[471,50],[485,53],[472,56]],
m:[473,347,92,237,113,182,240,219,218,85,216,94,247,104,115,317,263,156,213,168,496,497,211,412,451,373,148,86,244,157,138,207,214,164,433,290,399,590],
e:[50,100,112,285,310,322,384,385,417,502],
tr:[173,220,253,271,272,277,278,285,289,324,351,356,428,472,495]
},{//Beheeyem
l:[[45,1],[93,1],[357,1],[377,1],[472,1],[485,1],[45,4],[377,8],[357,11],[60,15],[29,18],[237,22],[286,25],[493,29],[428,32],[244,36],[94,39],[347,45],[105,50],[470,56],[471,58],[485,63],[472,68]],
m:[473,347,92,237,63,113,182,240,219,218,85,216,94,247,104,115,317,263,156,213,168,496,497,211,412,451,373,416,148,86,244,157,138,207,214,164,433,290,399,590],
tr:[173,220,253,271,272,277,278,285,289,324,351,356,428,472,495]
},{//Litwick
l:[[52,1],[310,1],[107,3],[123,5],[83,7],[109,10],[101,13],[261,16],[481,20],[286,24],[506,28],[262,33],[517,38],[174,43],[247,49],[220,55],[315,61]],
m:[347,92,237,241,269,182,219,218,76,216,94,247,104,53,126,263,488,156,213,168,496,315,412,510,261,373,371,148,244,138,207,214,164,433,290,399,590],
e:[51,114,151,203,257,445,471,499],
tr:[173,180,220,257,271,351]
},{//Lampent
l:[[52,1],[107,1],[123,1],[310,1],[107,3],[123,5],[83,7],[109,10],[101,13],[261,16],[481,20],[286,24],[506,28],[262,33],[517,38],[174,45],[247,53],[220,61],[315,69]],
m:[347,92,237,241,269,182,219,218,76,216,94,247,104,53,126,263,488,156,213,168,496,315,412,510,261,373,371,148,244,138,207,214,164,433,290,399,590],
tr:[173,180,220,257,271,351]
},{//Chandelure
l:[[109,1],[123,1],[220,1],[481,1],[506,1]],
m:[347,92,237,241,269,63,182,219,218,76,216,94,247,104,53,126,263,488,156,213,168,496,315,412,510,261,373,371,416,148,244,138,207,214,164,433,290,399,590],
tr:[173,180,220,257,271,351]
},{//Axew
l:[[10,1],[43,4],[372,7],[82,10],[530,13],[184,16],[163,20],[206,24],[337,28],[349,32],[269,36],[406,41],[14,46],[12,50],[200,56],[416,61]],
m:[468,337,46,92,237,241,269,182,240,218,216,91,104,317,332,263,156,213,496,206,374,510,371,416,14,404,398,207,214,164,249,290,590,15,70],
e:[13,68,106,116,179,203,231,283,400,406],
t:[434],
tr:[173,200,231,276,283,351,401,406,530]
},{//Fraxure
l:[[10,1],[43,1],[82,1],[372,1],[43,4],[372,7],[82,10],[530,13],[184,16],[163,20],[206,24],[337,28],[349,32],[269,36],[406,42],[14,48],[12,54],[200,60],[416,66]],
m:[468,337,46,92,237,241,269,182,240,218,216,91,104,317,332,263,156,213,496,206,374,510,421,371,416,14,404,525,398,207,214,164,249,290,590,15,70],
t:[434],
tr:[67,173,200,231,276,283,351,401,406,530]
},{//Haxorus
l:[[10,1],[43,1],[82,1],[200,1],[372,1],[43,4],[372,7],[82,10],[530,13],[184,16],[163,20],[206,24],[337,28],[349,32],[269,36],[406,42],[14,50],[12,58],[200,66],[416,74]],
m:[468,337,46,92,237,241,269,63,182,240,218,89,216,91,280,104,317,332,263,156,213,496,411,206,374,510,421,371,416,14,523,157,404,525,398,447,207,214,164,249,290,590,15,57,70],
t:[434],
tr:[67,173,200,231,276,283,351,401,406,530]
},{//Cubchoo
l:[[45,1],[181,5],[117,9],[196,13],[589,15],[154,17],[362,21],[203,25],[204,29],[163,33],[175,36],[156,41],[59,45],[258,49],[37,53],[329,57]],
m:[468,92,258,237,58,59,182,240,218,216,91,104,317,332,263,156,213,496,497,374,421,524,447,207,214,164,249,290,612,590,15,57,70],
e:[8,214,227,264,281,372,400,419,583],
tr:[8,67,173,196,264,276,343,352]
},{//Beartic
l:[[37,1],[45,1],[117,1],[181,1],[196,1],[276,1],[329,1],[453,1],[589,9],[196,13],[154,17],[362,21],[203,25],[207,29],[163,33],[175,36],[556,37],[156,41],[59,45],[258,53],[37,59],[329,66]],
m:[468,46,92,258,339,237,269,58,59,63,182,240,218,216,91,280,104,317,332,263,156,213,496,497,411,374,421,416,444,14,523,524,157,447,207,214,164,249,290,612,590,15,57,70,291],
tr:[8,67,173,196,264,276,343,352]
},{//Cryogonal
l:[[20,1],[54,1],[114,1],[329,1],[400,1],[420,1],[420,5],[159,9],[229,13],[196,17],[54,21],[114,21],[62,25],[151,29],[58,33],[113,37],[115,37],[163,41],[109,45],[105,49],[573,50],[76,53],[400,57],[329,61]],
m:[92,258,237,58,59,63,113,182,240,218,76,216,104,115,263,156,213,496,512,153,524,398,207,214,164,430,290,590],
tr:[20,173,196,277,282,324,334,352]
},{//Shelmet
l:[[141,1],[51,4],[117,8],[174,13],[522,16],[72,20],[281,25],[182,28],[151,32],[202,37],[34,40],[405,44],[105,49],[385,50],[515,56]],
m:[92,474,237,182,240,218,216,104,188,263,156,213,496,412,522,611,207,214,164,290,590],
e:[38,170,189,191,203,226,227,228,364,470],
tr:[173,202,324,380,450]
},{//Accelgor
l:[[98,1,13],[104,1,8],[141,1],[384,1,52],[491,1,4],[515,1,56],[594,,1],[491,4],[104,8],[98,13],[522,16],[72,20],[129,25],[382,28],[97,32],[202,37],[369,40],[405,44],[105,49],[384,52],[515,56]],
m:[92,474,237,63,182,240,218,216,104,188,201,263,156,213,496,411,412,416,522,611,207,214,369,164,290,590],
tr:[173,202,282,324,380,450]
},{//Stunfisk
l:[[33,1],[55,1],[90,1],[175,1],[189,1],[300,1],[117,5],[84,9],[341,13],[293,17],[426,21],[435,25],[203,30],[340,35],[330,40],[85,45],[279,50],[175,55],[90,61]],
m:[92,237,182,240,218,85,87,89,216,91,104,482,188,201,317,263,156,213,496,503,371,148,444,86,523,157,611,207,214,164,290,590,57],
e:[174,180,209,214,220,281,310,351,382,414,513,598],
tr:[173,180,220,253,283,340,351,352,393,401,414,446,492,527]
},{//Mienfoo
l:[[1,1],[96,5],[197,9],[252,13],[3,17],[129,21],[347,25],[395,29],[409,33],[26,37],[369,41],[501,45],[340,49],[136,50],[179,57],[396,61]],
m:[347,92,339,237,241,269,182,240,218,216,91,280,104,115,317,332,263,156,213,490,496,411,374,512,371,514,444,14,244,157,398,447,207,214,369,164,249,290,612,590,70],
e:[67,203,226,233,265,282,364,382,502],
tr:[67,173,264,270,272,282,340,409,530]
},{//Mienshao
l:[[1,1],[96,1],[179,1],[197,1],[252,1],[396,1],[96,5],[197,9],[252,13],[3,17],[129,21],[347,25],[395,29],[409,33],[26,37],[369,41],[469,45],[340,49],[136,56],[179,63],[396,70]],
m:[347,92,339,237,241,269,63,182,240,218,216,91,280,104,115,317,332,263,156,213,490,496,411,374,512,371,514,416,444,14,244,157,398,447,207,214,369,164,249,290,612,590,70],
tr:[67,173,264,270,272,282,340,409,530]
},{//Druddigon
l:[[10,1],[43,1],[468,5],[44,9],[184,13],[82,18],[163,21],[242,25],[337,27],[498,31],[279,35],[400,40],[525,45],[431,49],[276,55],[200,62]],
m:[468,337,46,92,237,241,269,63,182,240,218,479,89,216,91,104,53,188,317,332,259,263,156,213,496,411,374,451,510,421,371,514,416,523,157,525,207,214,164,430,249,290,555,399,612,590,15,57,70],
e:[137,185,228,231,232,289,306,342,389,422,424],
t:[434],
tr:[7,9,173,200,231,257,276,289,351,401,406,441,442,446]
},{//Golett
l:[[1,1],[111,1],[310,1],[189,5],[205,9],[325,13],[334,17],[5,21],[222,25],[223,30],[101,35],[174,40],[89,45],[359,50],[264,55]],
m:[92,237,58,182,240,219,218,89,216,94,247,280,104,317,263,156,168,490,496,411,374,397,148,360,523,157,447,207,214,164,249,290,612,590,70],
tr:[7,8,9,67,173,196,264,276,277,324,334,335,351,356,409,414,446]
},{//Golurk
l:[[1,1],[111,1],[189,1],[264,1],[310,1],[566,1],[189,5],[205,9],[325,13],[334,17],[5,21],[222,25],[223,30],[101,35],[174,40],[484,43],[89,50],[359,60],[264,70],[566,75]],
m:[92,237,58,63,182,240,219,218,76,85,89,216,94,247,280,104,317,263,156,168,490,496,411,374,451,416,397,148,444,360,523,157,447,207,214,164,430,249,290,612,590,19,70],
tr:[7,8,9,67,173,196,264,276,277,324,334,335,351,356,409,414,428,446]
},{//Pawniard
l:[[10,1],[43,6],[210,9],[259,14],[185,17],[184,22],[232,25],[163,30],[372,33],[319,38],[373,41],[334,46],[400,49],[442,54],[14,57],[12,62]],
m:[468,92,237,269,182,240,218,216,91,280,104,201,317,332,259,263,156,213,168,490,496,206,374,373,421,371,514,397,86,14,404,398,447,207,214,164,249,290,555,399,612,590,15],
e:[29,212,228,279,389,427,446,501],
tr:[67,173,180,272,282,289,334,393,442,446,492,530]
},{//Bisharp
l:[[10,1],[12,1],[43,1],[210,1],[259,1],[368,1],[442,1],[43,6],[210,9],[259,14],[185,17],[184,22],[232,25],[163,30],[372,33],[319,38],[373,41],[334,46],[400,49],[442,57],[14,63],[12,71]],
m:[468,92,237,269,63,182,240,218,216,91,280,104,201,317,332,259,263,156,213,168,490,496,411,206,374,373,421,371,514,416,397,444,86,14,404,398,447,207,214,164,249,290,555,399,612,590,15],
tr:[67,173,180,272,282,289,334,393,442,446,492,530]
},{//Bouffalant
l:[[43,1],[228,1],[99,6],[31,11],[30,16],[184,21],[279,26],[543,31],[116,36],[224,41],[179,46],[37,50],[14,56],[416,61]],
m:[92,237,241,269,182,240,218,89,216,104,317,332,263,156,213,496,371,514,416,444,14,523,157,398,207,214,164,528,249,290,590,15,57,70],
e:[23,29,130,133,189,341,431,442,562],
tr:[173,200,253,276,283,428,442]
},{//Rufflet
l:[[43,1],[64,1],[31,5],[17,10],[468,14],[184,19],[332,23],[163,28],[432,32],[366,37],[403,41],[306,46],[507,50],[18,55],[413,59],[37,64]],
m:[468,92,339,237,241,182,240,355,218,216,104,317,332,263,156,213,496,211,507,421,514,157,207,214,369,164,249,290,590,15,19,70],
tr:[173,257,276,366]
},{//Braviary
l:[[17,1],[18,1],[31,1],[37,1],[43,1],[64,1],[276,1],[413,1],[31,5],[17,10],[468,14],[184,19],[332,23],[163,28],[432,32],[366,37],[403,41],[306,46],[507,50],[276,51],[18,57],[413,63],[37,70]],
m:[468,92,339,237,241,63,182,240,355,218,216,104,317,332,263,156,213,496,211,507,421,514,416,157,207,214,369,164,249,290,590,15,19,70],
tr:[143,173,257,276,366,428]
},{//Vullaby
l:[[16,1],[43,1],[31,5],[365,10],[417,14],[260,19],[185,23],[386,28],[432,32],[366,37],[403,41],[399,46],[373,50],[18,55],[413,59],[119,64]],
m:[92,237,241,269,182,240,355,218,216,247,104,317,332,259,263,156,213,168,496,211,510,373,371,514,244,207,214,369,164,249,290,555,399,590,15,19],
e:[184,211,212,282,313,355,492],
tr:[173,257,282,289,335,366,492]
},{//Mandibuzz
l:[[16,1],[18,1],[31,1],[43,1],[119,1],[198,1],[365,1],[413,1],[31,5],[365,10],[417,14],[260,19],[185,23],[386,28],[432,32],[366,37],[403,41],[399,46],[373,50],[198,51],[18,57],[413,63],[119,70]],
m:[92,237,241,269,63,182,240,355,218,216,247,104,317,332,259,263,156,213,168,496,211,510,373,371,514,416,244,207,214,369,164,249,290,555,399,590,15,19],
tr:[143,173,257,282,289,335,366,492]
},{//Heatmor
l:[[33,1],[122,1],[468,1],[510,1],[517,1],[316,6],[20,11],[83,16],[154,21],[289,26],[481,31],[450,36],[163,41],[133,44],[53,47],[254,50],[255,50],[256,50],[517,61]],
m:[468,92,237,241,269,182,240,218,76,216,91,104,53,126,317,332,263,156,213,168,496,411,374,510,261,421,416,207,214,164,249,290,612,590,15],
e:[34,35,174,185,214,228,257,321,389,400,562],
tr:[7,9,20,67,173,202,257,264,276,278,282,289,380,450]
},{//Durant
l:[[11,1],[12,1],[28,1],[319,1],[334,1],[210,6],[44,11],[97,16],[232,21],[450,26],[242,31],[442,36],[91,41],[494,46],[404,51],[334,56],[12,61],[319,66]],
m:[468,92,237,182,218,216,91,104,201,317,332,263,156,213,496,412,421,514,416,397,444,86,522,157,404,207,214,164,430,249,290,590,15,70],
e:[103,185,203,226,422,431],
tr:[173,276,283,334,442,450]
},{//Deino
l:[[33,1],[82,1],[116,4],[44,9],[29,12],[225,17],[46,20],[242,25],[21,28],[406,32],[526,38],[407,42],[34,48],[184,50],[304,58],[200,62]],
m:[46,92,237,241,269,182,240,218,216,104,259,263,156,213,168,496,510,86,244,525,207,214,164,249,290,399,590,70],
e:[103,310,372,399,414,422,423,424,457,458],
t:[434],
tr:[173,180,200,253,276,304,351,401,406,414,428]
},{//Zweilous
l:[[44,1],[82,1],[116,1],[458,1],[116,4],[44,9],[29,12],[225,17],[46,20],[242,25],[21,28],[406,32],[526,38],[407,42],[34,48],[184,55],[304,64],[200,71]],
m:[46,92,237,241,269,182,240,218,216,104,259,263,156,213,168,496,510,86,244,525,207,214,164,249,290,399,590,70],
t:[434],
tr:[173,180,200,253,276,304,351,401,406,414,428]
},{//Hydreigon
l:[[44,1],[82,1],[116,1],[161,1],[200,1],[304,1],[116,4],[44,9],[29,12],[225,17],[46,20],[242,25],[21,28],[406,32],[526,38],[407,42],[34,48],[184,55],[304,68],[200,79]],
m:[46,92,237,241,269,63,182,240,355,218,89,216,104,115,53,126,317,259,263,156,213,168,496,497,211,411,451,510,512,371,416,444,86,244,523,157,525,207,214,369,164,430,249,290,399,590,19,57,70],
t:[434],
tr:[173,180,200,231,253,257,276,304,324,351,366,401,406,414,428]
},{//Larvesta
l:[[52,1],[81,1],[141,10],[36,20],[488,30],[450,40],[38,50],[172,60],[405,70],[133,80],[37,90],[394,100]],
m:[347,92,237,241,113,182,219,218,76,216,94,104,53,126,263,488,156,496,315,510,261,512,522,207,214,369,164,528,290,590],
e:[81,106,193,203,234,393,428],
tr:[173,202,257,324,393,428,450]
},{//Volcarona
l:[[16,1],[37,1],[52,1],[81,1],[133,1],[141,1],[172,1],[257,1],[394,1],[405,1],[476,1],[483,1],[542,1],[552,1],[141,10],[16,20],[83,30],[18,40],[318,50],[483,59],[257,60],[405,70],[476,80],[542,90],[552,100]],
m:[347,92,237,241,63,113,182,355,219,218,76,216,94,104,53,126,332,263,488,156,496,315,510,261,512,416,522,398,207,214,369,164,528,290,590,19],
tr:[173,202,257,324,366,393,428,450]
},{//Cobalion
l:[[43,1],[98,1],[368,1],[370,1],[501,1],[526,1],[24,7],[232,13],[36,19],[270,25],[514,31],[442,37],[533,42],[14,49],[501,55],[526,61],[368,67],[370,73]],
m:[468,347,46,92,237,269,63,182,219,218,216,104,115,201,332,263,156,496,411,206,514,416,397,444,521,86,14,244,404,398,207,214,164,430,249,290,590,15,70],
tr:[173,270,276,334,335,340,393,428,442,446]
},{//Terrakion
l:[[43,1],[98,1],[370,1],[501,1],[526,1],[24,7],[479,13],[36,19],[270,25],[514,31],[157,37],[533,42],[14,49],[501,55],[526,61],[444,67],[370,73]],
m:[347,46,92,237,269,63,182,219,218,479,89,216,104,115,201,317,332,263,156,496,411,206,514,416,397,444,14,244,523,157,404,398,207,214,164,249,290,590,15,70],
tr:[173,270,276,335,414,428,442,446]
},{//Virizion
l:[[43,1],[98,1],[348,1],[370,1],[501,1],[526,1],[24,7],[345,13],[36,19],[270,25],[514,31],[202,37],[533,42],[14,49],[501,55],[526,61],[348,67],[370,73]],
m:[347,46,92,237,241,269,63,113,182,219,218,76,216,104,115,332,263,156,496,411,412,206,514,416,148,444,14,244,404,447,207,214,164,249,290,267,590,15,70],
tr:[173,202,235,270,276,335,340,388,402,428]
},{//Tornadus
l:[[16,1],[37,1],[253,1],[310,1],[359,1],[366,1],[542,1],[207,7],[44,13],[279,19],[314,25],[326,31],[97,37],[403,43],[242,49],[366,55],[240,61],[542,67],[399,73],[359,79],[37,85]],
m:[92,339,237,269,63,182,240,218,479,216,94,280,104,482,188,332,259,263,156,213,168,496,411,374,507,510,512,373,371,416,447,207,214,369,164,249,290,399,590,19,70],
tr:[173,196,231,253,257,272,276,282,366,492]
},{//Thundurus
l:[[37,1],[84,1],[253,1],[268,1],[310,1],[359,1],[417,1],[207,7],[44,13],[279,19],[351,25],[377,31],[97,37],[435,43],[242,49],[268,55],[417,61],[87,67],[399,73],[359,79],[37,85]],
m:[92,339,237,269,63,182,240,218,479,85,87,216,94,280,104,482,188,259,263,156,213,168,496,411,374,451,507,510,373,371,416,521,86,447,207,214,369,164,430,528,249,290,399,590,19,70],
tr:[9,173,231,253,272,276,282,351,492,527]
},{//Reshiram
l:[[82,1],[424,1],[286,8],[246,15],[53,22],[225,29],[163,36],[326,43],[558,50],[406,54],[286,64],[242,71],[126,78],[200,85],[304,92],[551,100]],
m:[468,337,92,237,241,63,113,182,355,219,218,76,216,94,247,104,115,53,126,317,263,488,156,496,497,315,211,411,374,510,261,421,371,416,444,157,525,207,214,164,249,290,590,15,19,70],
t:[434],
tr:[173,200,257,304,366,406,414,428]
},{//Zekrom
l:[[82,1],[422,1],[286,8],[246,15],[85,22],[225,29],[163,36],[428,43],[559,50],[337,54],[286,64],[242,71],[87,78],[200,85],[304,92],[550,100]],
m:[468,337,92,237,63,113,182,240,355,219,218,85,87,216,94,247,104,115,317,263,156,496,497,211,411,374,451,421,371,416,148,444,521,86,157,525,207,214,164,430,528,249,290,590,15,19,70],
t:[434],
tr:[9,173,200,304,324,351,366,393,406,414,428]
},{//Landorus
l:[[90,1],[200,1],[317,1],[335,1],[341,1],[359,1],[286,7],[386,13],[523,19],[88,25],[326,31],[14,37],[414,43],[157,49],[89,55],[201,61],[90,67],[444,73],[359,79],[200,85]],
m:[347,92,339,237,63,182,218,479,89,216,91,94,280,104,482,188,201,317,263,156,213,496,411,374,153,371,416,397,444,14,523,157,447,207,214,369,164,249,290,590,19,70],
tr:[173,200,231,272,276,282,335,356,414,446]
},{//Kyurem
m:[468,337,92,258,237,241,58,59,63,113,182,240,355,219,218,216,94,247,104,115,317,263,156,496,497,211,411,374,421,371,416,444,157,525,207,214,164,430,249,290,590,15,19,70],
t:[434],
tr:[173,196,200,283,304,324,406,414,428,442],
forms:[
{
	l:[[82,1],[196,1],[286,8],[246,15],[58,22],[225,29],[163,36],[184,43],[549,50],[406,57],[286,64],[283,71],[59,78],[200,85],[304,92]]
},{
	l:[[82,1],[196,1],[286,8],[246,15],[58,22],[225,29],[163,36],[559,43],[553,50],[406,57],[286,64],[283,71],[59,78],[200,85],[304,92]]
},{
	l:[[82,1],[196,1],[286,8],[246,15],[58,22],[225,29],[163,36],[558,43],[554,50],[406,57],[286,64],[283,71],[59,78],[200,85],[304,92]]
}]
},{//Keldeo
l:[[43,1],[453,1],[24,7],[61,13],[36,19],[270,25],[514,31],[401,37],[533,43],[14,49],[501,55],[526,61],[56,67],[370,73]],
m:[347,46,92,258,237,269,63,182,240,219,218,216,104,115,332,263,156,496,411,206,503,514,416,444,14,244,404,398,207,214,164,249,290,590,15,57,70],
t:[548],
tr:[173,196,270,276,283,340,343,352,387,401]
},{//Meloetta
l:[[496,1],[98,6],[93,11],[47,16],[298,21],[512,26],[60,31],[497,36],[369,43],[358,50],[94,57],[304,64],[272,71],[370,78],[195,85]],
m:[468,473,347,92,237,241,63,113,182,240,219,218,85,87,216,94,247,280,104,263,156,490,496,497,411,412,374,451,512,373,421,371,514,416,148,444,86,244,138,447,207,214,369,164,433,249,290,612,605,590,70],
t:[547],
tr:[7,8,9,67,173,215,253,264,270,271,272,277,278,282,285,289,304,324,343,351,356,387,409,428,472,478,530]
},{//Genesect
l:[[98,1],[103,1],[232,1],[393,1],[546,1],[565,1],[210,7],[199,11],[488,18],[443,22],[163,29],[319,33],[324,40],[161,44],[404,51],[405,55],[493,62],[192,66],[63,73],[120,77]],
m:[468,92,237,58,59,63,113,182,218,76,85,87,216,94,104,115,53,332,263,488,156,496,412,451,153,421,416,397,148,86,522,404,611,207,214,369,164,430,290,399,590,19],
tr:[173,202,277,278,324,334,351,356,387,393,428,441,442,450,527]
},{//Chespin
l:[[33,1],[45,1],[22,5],[205,8],[44,11],[73,15],[42,18],[36,27],[402,32],[341,35],[339,39],[34,42],[220,45],[452,48]],
m:[46,92,339,237,241,269,182,218,76,479,216,91,280,104,115,188,317,332,263,156,213,490,496,412,374,421,371,514,148,444,360,14,523,157,398,447,207,214,164,249,290,267,612,590,15,70],
e:[111,174,187,191,205,235,501],
t:[520],
tr:[9,67,162,173,202,220,231,235,264,270,276,283,334,388,402,409,428,442,530]
},{//Quilladin
l:[[33,1],[45,1],[22,5],[205,8],[44,11],[73,15],[42,20],[302,26],[36,30],[402,35],[341,39],[339,44],[34,48],[220,52],[452,55]],
m:[468,46,92,339,237,241,269,182,218,76,479,216,91,280,104,115,188,317,332,263,156,213,490,496,412,374,421,371,514,148,444,360,14,523,157,398,447,207,214,164,249,290,267,612,590,15,70],
t:[520],
tr:[9,67,162,173,202,220,231,235,264,270,276,283,334,388,402,409,428,442,530]
},{//Chesnaught
l:[[33,1],[45,1],[187,1],[359,1],[364,1],[22,5],[205,8],[44,11],[73,15],[42,20],[302,26],[36,30],[402,35],[596,36],[341,41],[339,44],[34,48],[220,52],[452,55],[359,60],[416,70],[596,75]],
m:[468,337,46,92,339,237,241,269,63,182,218,76,479,89,216,91,280,104,115,188,317,332,263,156,213,490,496,411,412,374,421,371,514,416,148,444,360,14,523,157,398,447,207,214,164,249,290,267,612,590,15,70],
t:[338,520],
tr:[9,67,162,173,202,220,231,235,264,270,276,283,334,335,388,402,409,428,442,530]
},{//Fennekin
l:[[10,1],[39,1],[52,5],[336,11],[488,14],[60,17],[83,20],[381,25],[113,27],[473,31],[53,35],[261,38],[94,41],[241,43],[478,46],[126,48]],
m:[473,92,237,241,113,182,240,219,218,76,216,94,104,53,126,263,488,156,213,168,496,497,315,510,261,373,244,138,447,207,214,164,290,612,590,15],
e:[95,257,273,277],
t:[519],
tr:[173,231,257,277,343,478,492]
},{//Braixen
l:[[10,1],[39,1],[52,5],[336,11],[488,14],[60,18],[83,22],[381,27],[113,30],[473,34],[53,41],[261,45],[94,48],[241,51],[478,53],[126,55]],
m:[473,92,237,241,113,182,240,219,218,76,216,94,104,53,126,263,488,156,213,168,496,497,315,510,261,373,244,138,447,207,214,164,290,612,590,15],
t:[519],
tr:[7,9,67,173,231,257,271,277,278,285,289,343,351,428,472,478,492]
},{//Delphox
l:[[10,1],[39,1],[247,1],[248,1],[272,1],[415,1],[52,5],[336,11],[488,14],[60,18],[83,22],[381,27],[113,30],[473,34],[595,36],[53,42],[261,47],[94,51],[241,55],[478,58],[126,61],[248,69],[595,75]],
m:[473,347,92,237,241,63,113,182,240,219,218,76,216,94,247,104,53,126,263,488,156,213,168,496,497,315,510,261,373,416,244,138,447,207,214,164,433,290,612,590,15],
mr:[605],
t:[307,519],
tr:[7,9,67,173,231,257,271,272,277,278,285,289,324,343,351,428,472,478,492]
},{//Froakie
l:[[1,1],[45,1],[145,5],[98,8],[122,10],[352,14],[108,18],[496,21],[374,25],[479,29],[164,35],[340,39],[104,43],[56,48]],
m:[92,237,269,58,59,182,240,218,479,216,91,104,317,332,263,156,213,168,496,497,503,374,512,157,447,207,214,369,164,249,290,612,590,15,57,70,127,291],
e:[170,293,300,346,390,516],
t:[518],
tr:[173,180,196,272,289,340,352]
},{//Frogadier
l:[[1,1],[45,1],[145,5],[98,8],[122,10],[352,14],[108,20],[496,23],[374,28],[479,33],[164,38],[340,44],[104,48],[56,55]],
m:[92,237,269,58,59,182,240,218,479,216,91,104,317,332,263,156,213,168,496,497,503,374,512,157,447,207,214,369,164,249,290,399,612,590,15,57,70,127,291],
t:[518],
tr:[8,67,173,180,196,272,289,340,352,441]
},{//Greninja
l:[[1,1],[45,1],[272,1],[400,1],[561,1],[145,5],[98,8],[122,10],[352,14],[108,20],[425,23],[191,28],[185,33],[594,36],[164,43],[326,49],[104,52],[114,56],[56,60],[400,70],[594,75]],
m:[92,237,269,58,59,63,182,240,218,479,216,91,104,317,332,263,156,213,168,496,497,503,374,512,416,157,447,207,214,369,164,249,290,399,612,590,15,57,70,127,291],
t:[308,518],
tr:[8,67,173,180,196,272,289,340,352,441],
s:[603]
},{//Bunnelby
l:[[33,1],[43,1],[97,1],[98,7],[3,10],[189,13],[36,15],[341,18],[24,20],[316,25],[175,29],[91,33],[340,38],[162,42],[263,47],[89,49]],
m:[92,339,237,182,218,479,89,216,91,280,104,188,201,317,259,263,156,213,168,496,374,371,444,523,157,447,207,214,369,164,528,249,290,267,612,590,15,57,70],
e:[111,191,205],
tr:[162,173,231,278,283,340,387,442]
},{//Diggersby
l:[[14,1],[33,1],[43,1],[97,1],[359,1],[523,1],[563,1],[98,7],[189,13],[36,15],[341,18],[24,20],[316,26],[175,31],[91,37],[340,42],[162,48],[263,53],[89,57],[359,60]],
m:[92,339,237,63,182,218,479,89,216,91,280,104,188,201,317,259,263,156,213,168,496,374,371,416,444,14,523,157,447,207,214,369,164,528,249,290,267,612,590,15,57,70],
tr:[7,8,9,67,162,173,231,253,264,276,278,282,283,289,340,380,387,414,441,442,492]
},{//Fletchling
l:[[33,1],[45,1],[98,6],[64,10],[97,13],[175,16],[355,21],[13,25],[363,29],[488,34],[512,39],[382,41],[366,45],[211,48]],
m:[92,237,241,269,182,355,218,216,104,332,263,488,156,213,168,496,315,211,512,14,207,214,369,164,290,590,19],
e:[289,366,501],
tr:[173,257,289,366]
},{//Fletchinder
l:[[33,1],[45,1],[98,6],[64,10],[97,13],[175,16],[52,17],[355,25],[13,27],[363,31],[488,38],[512,42],[382,46],[366,51],[211,55]],
m:[92,237,241,269,182,355,218,216,104,53,126,332,263,488,156,213,168,496,315,211,510,261,512,14,207,214,369,164,290,590,19],
tr:[173,257,289,366]
},{//Talonflame
l:[[33,1],[45,1],[394,1],[413,1],[98,6],[64,10],[97,13],[175,16],[52,17],[355,25],[13,27],[363,31],[488,39],[512,44],[382,49],[366,55],[211,60],[413,64]],
m:[468,92,339,237,241,269,63,182,355,218,76,216,104,53,126,332,263,488,156,213,168,496,315,211,510,261,512,416,14,207,214,369,164,290,590,19],
tr:[173,257,289,366]
},{//Scatterbug
l:[[33,1],[81,1],[78,6],[450,15]],
e:[77,78,476],
tr:[450]
},{//Spewpa
l:[[106,1],[182,9]],
m:[182],
tr:[334,450,527]
},{//Vivillon
l:[[16,1],[77,1],[78,1],[79,1],[113,1],[600,1],[522,12],[60,17],[48,21],[577,25],[312,31],[405,35],[219,41],[483,45],[542,50],[600,55]],
m:[347,92,237,241,63,113,182,240,355,219,218,76,216,94,104,332,263,156,213,168,496,412,512,416,148,522,244,611,138,207,214,369,164,290,590],
tr:[173,202,283,324,366,450,527],
s:[607]
},{//Litleo
l:[[33,1],[43,1],[52,5],[526,8],[29,11],[568,15],[36,20],[424,23],[283,28],[497,33],[53,36],[242,39],[304,43],[510,46],[315,50]],
m:[46,92,237,241,269,182,240,218,76,216,91,104,53,126,263,488,156,213,168,496,497,315,510,261,371,514,523,207,214,164,528,249,290,555,399,590,70],
e:[83,281,289,494],
tr:[173,231,257,270,283,289,304]
},{//Pyroar
l:[[33,1],[43,1],[63,1],[52,5],[526,8],[29,11],[568,15],[36,20],[424,23],[283,28],[497,33],[53,38],[242,42],[304,48],[510,51],[315,57]],
m:[46,92,237,241,269,63,182,240,218,76,216,91,104,53,126,263,488,156,213,168,496,497,315,510,261,371,514,416,523,207,214,164,528,249,290,555,399,590,70],
tr:[173,231,257,270,283,289,304,340]
},{//Flabébé
l:[[22,1],[33,1],[584,6],[381,10],[75,15],[273,20],[345,22],[580,24],[572,28],[312,33],[581,37],[585,41],[80,45],[76,48]],
m:[347,92,237,241,182,240,219,218,76,216,94,104,263,156,213,496,497,412,148,447,207,214,164,290,267,605,590],
e:[293,383,445],
tr:[173,202,215,235,270,277,283,343,388,402,495]
},{//Floette
l:[[22,1],[33,1],[584,6],[381,10],[75,15],[273,20],[345,25],[580,27],[572,33],[312,38],[581,43],[585,46],[80,51],[76,58]],
m:[347,92,237,241,182,240,219,218,76,216,94,104,263,156,213,496,497,412,148,447,207,214,164,290,267,605,590],
tr:[173,202,215,235,270,277,283,343,388,402,495],
forms:[
,
,
,
,
,{
	l:[[22,1],[33,1],[584,6],[381,10],[75,15],[273,20],[345,25],[580,27],[572,33],[312,38],[581,43],[585,46],[617,50],[80,51],[76,58]]
}]
},{//Florges
l:[[80,1],[273,1],[312,1],[345,1],[381,1],[447,1],[572,1],[574,1],[579,1],[580,1],[581,1],[585,1]],
m:[347,92,237,241,63,113,182,240,219,218,76,216,94,104,263,156,213,496,497,412,416,148,447,207,214,164,290,267,605,590],
tr:[173,202,215,235,270,277,283,343,388,402,495]
},{//Skiddo
l:[[33,1],[74,1],[22,7],[39,9],[73,12],[75,13],[388,16],[235,20],[36,22],[523,26],[402,30],[339,34],[38,38],[532,42],[348,45],[208,50]],
m:[46,92,339,237,241,182,240,218,76,216,91,280,104,263,156,213,496,412,371,514,523,157,447,207,214,164,528,249,290,267,590,57,70],
e:[111,205,208],
tr:[173,202,231,235,388,402,428]
},{//Gogoat
l:[[33,1],[74,1],[332,1],[22,7],[39,9],[73,12],[75,13],[388,16],[235,20],[36,22],[523,26],[402,30],[339,34],[38,40],[532,47],[348,55],[208,58],[89,60],[332,65]],
m:[46,92,339,237,241,63,182,240,218,76,89,216,91,280,104,332,263,156,213,496,412,371,514,416,523,157,447,207,214,164,528,249,290,267,590,57,70],
tr:[173,202,231,235,276,340,388,402,428]
},{//Pancham
l:[[33,1],[43,1],[292,7],[526,10],[2,12],[4,15],[163,20],[509,25],[233,27],[34,33],[242,39],[494,42],[575,45],[327,48]],
m:[46,92,339,237,241,182,240,218,216,91,280,104,188,317,332,259,263,156,213,490,496,497,206,374,421,371,514,444,14,523,157,447,207,214,164,249,290,399,612,590,15,57,70],
e:[382,480,492,501,511],
tr:[7,8,9,67,173,180,253,264,270,276,282,283,289,304,335,343,409,428,441,442,492,530]
},{//Pangoro
l:[[33,1],[43,1],[359,1],[494,1],[292,7],[526,10],[2,12],[4,15],[163,20],[509,25],[233,27],[34,35],[242,42],[494,45],[575,48],[327,52],[359,57],[269,65],[490,70]],
m:[468,337,46,92,339,237,241,269,63,182,240,218,89,216,91,280,104,188,317,332,259,263,156,213,168,490,496,497,411,206,374,511,373,421,371,514,416,444,14,523,157,404,611,398,447,207,214,164,249,290,555,399,612,590,15,57,70],
tr:[7,8,9,67,173,180,200,253,264,270,276,282,283,289,304,335,343,409,428,441,442,492,530]
},{//Furfrou
l:[[33,1],[45,1],[28,5],[608,9],[29,12],[39,15],[44,22],[316,27],[514,33],[36,35],[204,38],[389,42],[538,48]],
m:[46,92,237,241,182,240,218,216,91,104,263,156,213,496,497,451,514,416,148,86,447,207,214,369,164,528,249,290,555,399,590,57],
e:[102,272,287,445,526],
tr:[173,231,253,270,272,283,304,387,428]
},{//Espurr
l:[[10,1],[43,1],[343,5],[93,9],[113,13],[60,17],[252,19],[574,22],[473,25]],
m:[473,347,92,237,241,113,182,240,219,218,85,216,94,104,115,259,263,156,213,496,497,412,451,371,148,86,244,138,207,214,164,433,290,399,590,15],
e:[112,271,274,281],
tr:[173,215,231,270,271,272,277,278,289,324,343,351,356,428,472,478]
},{//Meowstic
m:[473,347,92,237,241,63,113,182,240,219,218,85,216,91,94,247,104,115,259,263,156,213,496,497,412,451,371,416,148,86,244,138,207,214,164,433,290,399,612,590,15],
tr:[173,215,231,271,272,277,278,289,324,343,351,356,428,472,478],
forms:[
{
	l:[[10,1],[43,1],[212,1],[270,1],[501,1],[343,5],[93,9],[113,13],[60,17],[252,19],[574,22],[473,25],[204,28],[357,31],[115,35],[94,40],[272,43],[286,45],[389,48],[581,50],[501,53]],
	tr:[270]
},{
	l:[[10,1],[43,1],[345,1],[382,1],[500,1],[343,5],[93,9],[113,13],[60,17],[252,19],[574,22],[473,25],[451,28],[247,31],[326,35],[94,40],[272,43],[324,45],[389,48],[248,50],[500,53]]
}]
},{//Honedge
l:[[14,1],[33,1],[210,5],[319,8],[228,13],[475,18],[425,20],[332,22],[514,26],[163,29],[334,32],[400,35],[379,39],[442,42],[533,47]],
m:[92,237,182,240,218,216,280,104,115,332,263,156,213,206,421,514,360,14,157,207,214,164,430,249,290,590,15],
e:[194,319,425,469],
tr:[173,180,334,351,393,442,495]
},{//Doublade
l:[[14,1],[33,1],[210,5],[319,8],[228,13],[475,18],[425,20],[332,22],[514,26],[163,29],[334,32],[400,36],[379,41],[442,45],[533,51]],
m:[92,237,182,240,218,216,280,104,115,332,263,156,213,206,421,514,360,14,157,207,214,164,430,249,290,590,15],
tr:[173,180,334,351,393,442,495]
},{//Aegislash
l:[[14,1],[163,1],[210,1],[228,1],[332,1],[334,1],[379,1],[400,1],[425,1],[442,1],[457,1],[475,1],[533,1],[588,1]],
m:[92,237,241,63,182,240,218,216,247,280,104,115,332,263,156,213,496,206,421,514,416,360,14,157,207,214,164,430,249,290,590,15],
tr:[173,180,334,335,351,393,442,495]
},{//Spritzee
l:[[230,1],[584,1],[186,6],[316,8],[497,13],[347,17],[577,21],[312,25],[213,29],[585,31],[204,35],[175,38],[581,42],[285,44],[94,48],[574,50]],
m:[347,92,237,241,113,182,240,218,85,216,94,104,115,259,263,156,213,496,497,412,451,148,360,244,138,207,214,164,430,433,290,605,590],
e:[50,273,287,445],
tr:[173,215,270,277,283,285,343,495]
},{//Aromatisse
l:[[230,1],[505,1],[584,1],[597,1],[186,6],[316,8],[497,13],[347,17],[577,21],[312,25],[213,29],[585,31],[204,35],[175,38],[581,42],[285,44],[94,48],[574,53],[115,57],[244,64]],
m:[473,347,92,237,241,63,113,182,240,218,85,87,216,94,104,115,259,263,156,213,496,497,412,451,416,148,360,244,138,207,214,164,430,433,290,605,590],
tr:[173,215,270,277,283,285,343,409,495]
},{//Swirlix
l:[[33,1],[230,1],[584,5],[589,8],[313,10],[496,13],[178,17],[283,21],[312,26],[577,31],[412,36],[538,41],[273,45],[583,49],[113,58],[219,67]],
m:[347,92,237,241,113,182,240,219,218,85,216,94,104,53,263,156,213,168,496,412,148,244,138,207,214,164,290,605,590,57],
e:[187,281,383,495],
tr:[173,215,270,277,283,343,380,495]
},{//Slurpuff
l:[[33,1],[230,1],[584,5],[589,8],[313,10],[496,13],[178,17],[283,21],[312,26],[577,31],[412,36],[538,41],[273,45],[583,49],[113,58],[219,67]],
m:[347,92,237,241,63,113,182,240,219,218,85,216,94,104,53,263,156,213,168,496,412,416,148,244,138,207,214,164,290,605,590,57],
tr:[173,215,270,277,283,343,380,409,495]
},{//Inkay
l:[[33,1],[64,1],[132,1],[115,4],[492,8],[207,12],[149,13],[576,15],[95,18],[60,21],[415,23],[371,27],[113,31],[365,35],[427,39],[163,43],[400,46],[276,48]],
m:[347,92,237,241,269,113,182,240,218,85,216,94,104,115,53,332,259,263,156,213,168,496,374,373,371,514,148,244,157,207,214,164,433,290,399,590,15],
e:[194,260,293,471,493],
tr:[20,173,180,272,276,282,289,492],
s:[603]
},{//Malamar
l:[[33,1],[64,1],[132,1],[179,1],[276,1],[115,4],[492,8],[207,12],[149,13],[576,15],[95,18],[60,21],[415,23],[371,27],[113,31],[365,35],[427,39],[163,43],[400,46],[276,48]],
m:[473,347,92,237,241,269,63,113,182,240,218,85,216,94,104,115,53,332,259,263,156,213,168,496,374,373,371,514,416,148,244,157,207,214,164,433,290,399,590,15],
tr:[20,173,180,272,276,282,289,324,335,492]
},{//Binacle
l:[[10,1],[28,1],[504,1],[55,4],[110,7],[154,10],[163,13],[189,18],[128,20],[397,24],[246,28],[468,32],[210,37],[400,41],[534,45],[238,49]],
m:[468,92,237,269,58,59,182,240,219,218,479,89,216,91,280,104,482,188,201,317,332,259,263,156,213,168,496,206,503,374,373,421,371,397,444,14,523,157,404,611,398,447,207,214,164,249,290,267,612,590,15,57,70],
e:[270,321,346,415],
tr:[173,196,270,283,334,352,446,530]
},{//Barbaracle
l:[[10,1],[28,1],[130,1],[444,1],[504,1],[55,4],[110,7],[154,10],[163,13],[189,18],[128,20],[397,24],[246,28],[468,32],[210,37],[400,44],[534,48],[238,55],[444,60],[130,65]],
m:[468,337,92,339,237,269,58,59,63,182,240,219,218,479,89,216,91,280,104,482,188,201,317,332,259,263,156,213,168,496,411,206,503,374,373,421,371,416,397,444,14,523,157,404,611,398,447,207,214,164,249,290,267,612,590,15,57,70],
tr:[67,173,196,270,276,283,334,352,414,446,530]
},{//Skrelp
l:[[33,1],[55,1],[108,1],[185,5],[39,9],[145,12],[51,15],[293,19],[342,23],[352,25],[104,28],[92,32],[401,35],[188,38],[56,42],[406,49]],
m:[92,258,474,237,182,240,218,85,216,247,104,482,188,263,156,213,496,503,207,214,164,290,590,57,127,291],
e:[114,151,390,583,599],
tr:[173,196,200,231,340,351,352,401,406,441]
},{//Dragalge
l:[[33,1],[55,1],[108,1],[239,1],[525,1],[185,5],[39,9],[145,12],[51,15],[293,19],[342,23],[352,25],[104,28],[92,32],[401,35],[188,38],[56,42],[406,53],[525,59],[239,67]],
m:[92,258,474,237,63,182,240,218,85,87,216,247,104,482,188,263,156,213,496,411,503,416,525,207,214,164,290,590,57,127,291],
t:[434],
tr:[173,196,200,231,340,351,352,401,406,441]
},{//Clauncher
l:[[55,1],[150,1],[346,7],[11,9],[145,12],[175,16],[61,20],[14,25],[152,30],[352,34],[479,39],[453,43],[330,48]],
m:[92,474,237,58,182,240,218,479,216,104,482,188,263,156,213,496,503,14,157,207,214,369,164,430,290,590,15,57,127,291],
e:[152,203,270,453,494],
tr:[173,196,231,270,340,352,401,406]
},{//Clawitzer
l:[[55,1],[150,1],[396,1],[399,1],[406,1],[505,1],[346,7],[11,9],[145,12],[175,16],[61,20],[14,25],[152,30],[352,34],[479,42],[453,47],[330,53],[399,57],[406,63],[396,67]],
m:[92,474,237,58,63,182,240,218,479,216,247,104,482,188,263,156,213,496,411,503,416,14,157,207,214,369,164,430,290,399,590,15,57,127,291],
tr:[173,196,231,270,340,352,401,406]
},{//Helioptile
l:[[1,1],[39,1],[84,6],[268,11],[189,13],[98,17],[13,22],[570,25],[86,31],[523,35],[521,40],[582,45],[85,49]],
m:[92,237,113,182,240,218,85,87,216,91,104,201,317,263,156,213,490,496,451,148,521,86,244,523,157,525,447,207,214,369,164,528,290,399,590,15,57],
e:[97,137,293,604],
tr:[173,231,324,351,393,527]
},{//Heliolisk
l:[[13,1],[87,1],[98,1],[268,1],[570,1],[582,1],[598,1]],
m:[92,237,63,113,182,240,218,85,87,216,91,104,201,317,263,156,213,490,496,411,451,416,148,521,86,244,523,157,525,447,207,214,369,164,528,290,399,590,15,57],
tr:[7,9,67,173,231,304,324,351,393,406,527]
},{//Tyrunt
l:[[33,1],[39,1],[46,6],[23,10],[117,12],[446,15],[44,17],[204,20],[246,26],[525,30],[242,34],[337,37],[37,40],[89,44],[32,49]],
m:[468,337,46,92,237,241,182,218,89,216,91,280,104,201,317,332,263,156,213,496,397,444,523,157,525,207,214,164,249,290,399,590,70],
e:[174,305,349,397,422,423,424],
t:[434],
tr:[173,200,231,276,304,334,335,406,414,428,442,446]
},{//Tyrantrum
l:[[33,1],[39,1],[457,1],[46,6],[23,10],[117,12],[446,15],[44,17],[204,20],[246,26],[525,30],[242,34],[337,37],[37,42],[89,47],[32,53],[457,58],[157,68],[416,75]],
m:[468,337,46,92,237,241,63,182,218,89,216,91,280,104,201,317,332,263,156,213,496,416,397,444,523,157,525,207,214,164,249,290,399,590,70],
t:[434],
tr:[173,200,231,276,304,334,335,406,414,428,442,446]
},{//Amaura
l:[[45,1],[181,1],[86,5],[88,10],[196,13],[36,15],[54,18],[62,20],[246,26],[496,30],[419,34],[258,38],[267,41],[227,44],[113,47],[58,50],[63,57],[59,65]],
m:[347,46,92,258,237,58,59,63,113,182,240,219,218,85,216,104,115,201,317,263,156,213,496,497,451,397,148,444,86,244,523,524,157,525,138,207,214,164,430,249,290,267,399,590],
e:[112,114,243,393,435],
tr:[173,196,200,231,304,334,352,393,401,414,428,442,446]
},{//Aurorus
l:[[45,1],[181,1],[573,1],[86,5],[88,10],[196,13],[36,15],[54,18],[62,20],[246,26],[496,30],[419,34],[258,38],[267,43],[227,46],[113,50],[58,56],[63,63],[59,74],[573,77]],
m:[347,46,92,258,237,58,59,63,113,182,240,219,218,85,87,89,216,94,104,115,201,317,263,156,213,496,497,451,416,397,148,444,86,244,523,524,157,525,138,207,214,164,430,249,290,267,399,590],
tr:[173,196,200,231,304,334,352,393,401,414,428,442,446]
},{//Sylveon
l:[[33,1],[39,1],[270,1],[574,1],[28,5],[584,9],[98,13],[129,17],[577,20],[285,25],[581,29],[113,33],[585,37],[387,41],[244,45]],
m:[473,347,92,237,241,63,113,182,240,219,218,216,91,247,104,115,263,156,213,496,497,514,416,148,244,207,214,164,290,605,590,15],
tr:[173,215,231,270,277,285,304,343,387],
s:[606]
},{//Hawlucha
l:[[33,1],[197,1],[468,1],[2,4],[17,8],[355,12],[332,16],[227,20],[374,24],[560,28],[340,32],[283,36],[297,40],[136,44],[143,48],[507,55],[14,60]],
m:[468,92,339,237,241,269,182,240,355,218,216,91,280,104,317,332,259,263,156,213,490,496,211,411,206,374,507,512,371,514,416,444,14,157,404,398,447,207,214,369,164,249,290,612,590,15,19,70],
e:[97,226,300,382,494,501,502],
tr:[7,9,67,143,173,264,270,276,283,340,366,387,409,428,442,530]
},{//Dedenne
l:[[33,1],[39,1],[84,7],[268,11],[204,14],[570,17],[609,20],[86,23],[521,26],[156,30],[173,31],[451,34],[494,39],[583,42],[87,45],[435,50]],
m:[92,237,241,182,240,218,85,87,216,91,104,332,263,156,213,168,496,374,451,514,416,148,521,86,447,207,214,369,164,528,290,590,15],
e:[270,343,363,598],
tr:[9,162,173,231,270,278,324,343,351,387,393,527]
},{//Carbink
l:[[33,1],[106,1],[88,5],[159,8],[479,12],[115,18],[446,21],[470,27],[246,31],[175,35],[285,40],[408,46],[444,49],[585,50],[113,60],[219,70]],
m:[347,92,258,237,241,113,182,219,218,479,216,94,104,115,201,317,263,156,496,153,397,148,444,360,244,157,207,214,164,433,290,267,605,590],
tr:[173,277,285,334,343,356,393,414,446,472,495]
},{//Goomy
l:[[33,1],[145,1],[71,5],[182,9],[117,13],[225,18],[240,25],[175,28],[34,32],[330,38],[406,42]],
m:[92,237,241,182,240,218,85,216,104,482,188,263,156,213,496,157,611,207,214,164,290,590],
e:[68,151,174,203,231,342],
t:[434],
tr:[173,200,231,351,352,406]
},{//Sliggoo
l:[[33,1],[145,1],[71,5],[182,9],[117,13],[225,18],[240,25],[175,28],[34,32],[330,38],[406,47]],
m:[92,237,241,58,59,182,240,218,85,216,104,482,188,263,156,213,496,157,611,207,214,164,290,590],
t:[434],
tr:[173,200,231,351,352,406]
},{//Goodra
l:[[33,1],[145,1],[200,1],[364,1],[71,5],[182,9],[117,13],[225,18],[240,25],[175,28],[34,32],[330,38],[406,47],[401,50],[438,55],[200,63]],
m:[92,258,237,241,58,59,63,182,240,218,85,87,89,216,104,482,53,188,126,263,156,213,496,411,510,416,523,157,525,611,207,214,164,249,290,590,70],
t:[434],
tr:[7,9,173,200,231,264,276,351,352,401,406]
},{//Klefki
l:[[33,1],[587,1],[584,5],[310,8],[319,12],[191,15],[577,18],[578,23],[492,27],[259,32],[429,34],[286,36],[278,40],[583,43],[478,44],[377,50]],
m:[473,347,92,237,241,63,113,182,240,219,218,216,94,104,115,259,263,156,213,168,496,416,86,244,207,214,164,430,290,605,590,15],
e:[168,199,334,415],
tr:[173,277,278,334,343,387,393,478,492]
},{//Phantump
l:[[33,1],[109,1],[310,5],[74,8],[275,13],[185,19],[73,23],[174,28],[261,31],[571,35],[194,39],[566,45],[452,49],[532,54]],
m:[92,237,241,182,219,218,76,216,91,94,247,104,115,263,156,213,168,496,412,261,421,523,157,398,138,447,207,214,164,433,249,290,267,399,590,15,70],
e:[286,288,516,599],
tr:[173,180,202,220,271,272,277,285,388,402,492]
},{//Trevenant
l:[[33,1],[109,1],[532,1],[310,5],[74,8],[275,13],[185,19],[73,23],[174,28],[261,31],[571,35],[194,39],[566,45],[452,49],[421,55],[532,62]],
m:[468,347,92,237,241,63,182,219,218,76,89,216,91,94,247,104,115,263,156,213,168,496,411,412,261,421,416,523,157,404,398,138,447,207,214,164,433,249,290,267,399,612,590,15,70],
tr:[173,180,202,220,271,272,277,285,335,388,402,409,492]
},{//Pumpkaboo
l:[[109,1],[271,1],[310,1],[184,4],[567,6],[388,11],[75,16],[73,20],[567,23],[331,26],[425,30],[247,36],[567,40],[220,42],[402,48]],
m:[92,237,241,113,182,219,218,76,216,94,247,104,53,188,126,263,488,156,213,168,496,412,451,510,261,153,148,360,157,138,447,207,214,164,433,249,290,267,399,590],
e:[50,194,516],
tr:[180,202,220,235,271,272,277,285,388,402,492]
},{//Gourgeist
l:[[109,1],[153,1],[271,1],[310,1],[566,1],[184,4],[567,6],[388,11],[75,16],[73,20],[567,23],[331,26],[425,30],[247,36],[567,40],[220,42],[402,48],[566,57],[567,63],[247,70],[153,75]],
m:[92,237,241,63,113,182,219,218,76,216,94,247,104,53,188,126,263,488,156,213,168,496,411,412,451,510,261,153,416,148,360,157,138,447,207,214,164,433,249,290,267,399,590],
tr:[180,202,220,235,271,272,277,285,388,402,492]
},{//Bergmite
l:[[33,1],[44,1],[106,1],[181,5],[196,10],[36,15],[159,20],[174,22],[423,26],[301,30],[229,35],[419,39],[59,43],[105,47],[38,49]],
m:[92,258,237,58,59,182,240,219,218,216,104,317,263,156,213,496,397,148,444,360,524,157,207,214,164,430,249,290,590,57,70],
e:[54,105,112,243],
tr:[173,196,334,352,495]
},{//Avalugg
l:[[33,1],[44,1],[106,1],[130,1],[242,1],[334,1],[181,5],[196,10],[36,15],[159,20],[174,22],[423,26],[301,30],[229,35],[419,42],[59,46],[105,51],[38,56],[130,60],[242,65]],
m:[46,92,258,237,58,59,63,182,240,219,218,89,216,104,317,263,156,213,496,416,397,148,444,360,523,524,157,207,214,164,430,249,290,590,57,70],
tr:[173,196,276,334,335,352,442,495]
},{//Noibat
l:[[33,1],[48,1],[103,1],[141,5],[16,11],[44,13],[17,16],[97,18],[314,23],[355,27],[13,31],[366,35],[18,40],[162,43],[403,48],[542,58]],
m:[92,237,241,269,182,355,218,76,216,94,247,280,104,332,259,263,156,213,168,496,497,211,512,421,404,138,207,214,369,164,528,290,399,590,15,19],
e:[200,289,366,415],
t:[434],
tr:[143,162,173,200,231,253,257,289,304,352,366,406]
},{//Noivern
l:[[33,1],[48,1],[103,1],[236,1],[406,1],[542,1],[586,1],[141,5],[16,11],[44,13],[17,16],[97,18],[314,23],[355,27],[13,31],[366,35],[18,40],[162,43],[403,53],[542,62],[406,70],[586,75]],
m:[468,337,92,237,241,269,63,182,355,218,76,216,94,247,280,104,53,332,259,263,156,213,168,496,497,211,411,512,421,416,404,138,207,214,369,164,528,290,399,590,15,19],
t:[434],
tr:[143,162,173,200,231,253,257,289,304,352,366,406]
},{//Xerneas
l:[[36,1],[275,1],[312,1],[505,1],[113,5],[62,10],[356,18],[601,26],[585,35],[224,44],[400,51],[532,55],[244,59],[581,63],[267,72],[370,80],[416,88],[200,93]],
m:[473,347,46,92,258,237,241,63,113,182,240,218,85,87,216,94,104,115,263,156,496,497,411,416,148,86,244,157,447,207,214,164,430,290,267,605,590,15],
tr:[173,200,283,304,335,356,428,472]
},{//Yveltal
l:[[13,1],[269,1],[355,1],[542,1],[104,5],[403,10],[555,18],[613,26],[50,35],[399,44],[492,51],[566,55],[94,59],[407,63],[411,72],[389,80],[63,88],[143,93]],
m:[468,337,92,237,241,269,63,182,240,355,218,216,94,247,104,332,259,263,156,168,496,211,411,507,512,373,421,416,157,138,207,214,369,164,290,555,399,590,15,19],
tr:[143,173,257,282,304,335,366,428,492]
},{//Zygarde
l:[[44,1],[137,1],[225,1],[523,1],[219,5],[91,10],[20,18],[616,26],[201,35],[114,44],[242,51],[89,55],[293,59],[406,63],[349,72],[489,80],[245,88],[200,93]],
m:[92,237,241,63,182,219,218,89,216,91,280,104,482,201,263,156,496,411,416,444,523,157,525,447,207,214,164,249,290,590,70],
t:[434],
tr:[20,173,180,200,220,231,276,304,335,351,406,414,428]
},{//Diancie
l:[[33,1],[106,1],[88,5],[159,8],[479,12],[115,18],[446,21],[470,27],[246,31],[175,35],[285,40],[433,46],[444,49],[585,50],[591,50],[113,60],[219,70]],
m:[473,347,92,258,237,241,63,113,182,219,218,479,216,94,104,115,201,317,263,156,496,153,416,397,148,444,360,244,157,207,214,164,433,290,267,605,590],
tr:[173,215,270,283,285,334,343,356,387,393,414,446,472,495]
},{//Hoopa
m:[473,347,92,237,241,269,63,113,182,240,219,218,85,216,94,247,280,104,115,259,263,156,168,496,411,412,374,451,511,373,416,148,86,244,138,447,207,214,164,433,290,612,590],
mr:[399],
tr:[7,8,9,173,253,264,271,272,277,278,282,285,289,324,335,343,351,356,387,409,428,441,472,478,492,530],
forms:[
{
	l:[[93,1],[194,1],[271,1],[502,1],[593,1,85],[310,6],[277,10],[60,15,19],[113,19,15],[285,25],[471,29],[470,35,29],[566,46,35],[428,,46],[472,50],[433,55,50],[247,68,55],[417,,68],[94,75],[593,85]]
},{
	l:[[93,,1],[194,,1],[271,,1],[502,,1],[310,,6],[277,,10],[113,,15],[60,,19],[285,,25],[470,,29],[471,,29],[282,,46],[433,,50],[472,,50],[399,,55],[94,,75],[621,,85]]
}]
},{//Volcanion
l:[[36,1],[394,1],[592,1],[54,8],[114,11],[488,15],[352,21],[23,28],[503,32],[311,40],[34,46],[56,50],[394,58],[315,65],[153,76],[592,85]],
m:[46,92,237,241,63,182,218,76,479,89,216,280,104,482,53,188,201,126,263,488,156,496,315,411,503,374,510,261,153,416,444,360,523,157,207,214,164,430,249,290,590,15,70],
tr:[173,257,276,352,414]
}
];