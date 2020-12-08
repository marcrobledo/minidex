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
[["Tackle","Charge","Tackle","Azione","Placaje","たいあたり","撞击"],0,0,35,40,100],
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
[["Absorb","Vol-Vie","Absorber","Assorbimento","Absorber","すいとる","吸取"],11,1,15,40,100],
[["Mega Drain","Méga-Sangsue","Megasauger","Megassorbimento","Megaagotar","メガドレイン","超级吸取"],11,1,10,75,100],
[["Leech Seed","Vampigraine","Egelsamen","Parassiseme","Drenadoras","やどりぎのタネ","寄生种子"],11,2,10,0,90],
[["Growth","Croissance","Wachstum","Crescita","Desarrollo","せいちょう","生长"],0,2,20,0,0],
[["Razor Leaf","Tranch&#39;Herbe","Rasierblatt","Foglielama","Hoja Afilada","はっぱカッター","飞叶快刀"],11,0,25,55,95],
[["Solar Beam","Lance-Soleil","Solarstrahl","Solarraggio","Rayo Solar","ソーラービーム","日光束"],11,1,10,200,100],
[["Poison Powder","Poudre Toxik","Giftpuder","Velenpolvere","Polvo Veneno","どくのこな","毒粉"],3,2,35,0,75],
[["Stun Spore","Para-Spore","Stachelspore","Paralizzante","Paralizador","しびれごな","麻痹粉"],11,2,30,0,75],
[["Sleep Powder","Poudre Dodo","Schlafpuder","Sonnifero","Somnífero","ねむりごな","催眠粉"],11,2,15,0,75],
[["Petal Dance","Danse-Fleur","Blättertanz","Petalodanza","Danza Pétalo","はなびらのまい","花瓣舞"],11,1,10,120,100],
[["String Shot","Sécrétion","Fadenschuss","Millebave","Disp. Demora","いとをはく","吐丝"],6,2,40,0,95],
[["Dragon Rage","Draco-Rage","Drachenwut","Ira di Drago","Furia Dragón","りゅうのいかり","龙之怒"],15,1,10,0,100],
[["Fire Spin","Danse Flamme","Feuerwirbel","Turbofuoco","Giro Fuego","ほのおのうず","火焰旋涡"],9,1,15,35,85],
[["Thunder Shock","Éclair","Donnerschock","Tuonoshock","Impactrueno","でんきショック","电击"],12,1,30,40,100],
[["Thunderbolt","Tonnerre","Donnerblitz","Fulmine","Rayo","１０まんボルト","十万伏特"],12,1,15,90,100],
[["Thunder Wave","Cage-Éclair","Donnerwelle","Tuononda","Onda Trueno","でんじは","电磁波"],12,2,20,0,90],
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
[["Leech Life","Vampirisme","Blutsauger","Sanguisuga","Chupavidas","きゅうけつ","吸血"],6,0,10,80,100],
[["Lovely Kiss","Grobisou","Todeskuss","Demonbacio","Beso Amoroso","あくまのキッス","恶魔之吻"],0,2,10,0,75],
[["Sky Attack","Piqué","Himmelsfeger","Aeroattacco","Ataque Aéreo","ゴッドバード","神鸟猛击"],2,0,5,200,90],
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
[["Struggle","Lutte","Verzweifler","Scontro","Forcejeo","わるあがき","挣扎"],0,0,1,50,0],
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
[["Swagger","Vantardise","Angeberei","Bullo","Contoneo","いばる","虚张声势"],0,2,15,0,85],
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
[["Frenzy Plant","Végé-Attak","Flora-Statue","Radicalbero","Planta Feroz","ハードプラント","疯狂植物"],11,1,5,150,90],
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
[["Sucker Punch","Coup Bas","Tiefschlag","Sbigoattacco","Golpe Bajo","ふいうち","突袭"],16,0,5,70,100],
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
[["Dark Void","Trou Noir","Schlummerort","Vuototetro","Brecha Negra","ダークホール","暗黑洞"],16,2,10,0,50],
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
[["Flying Press","Flying Press","Flying Press","Schiacciatuffo","Plancha Voladora","フライングプレス","飞身重压"],1,0,10,100,95],
[["Mat Block","Tatamigaeshi","Tatami-Schild","Ribaltappeto","Escudo Tatami","たたみがえし","掀榻榻米"],1,2,10,0,0],
[["Belch","Éructation","Rülpser","Rutto","Eructo","ゲップ","打嗝"],3,1,10,120,90],
[["Rototiller","Fertilisation","Pflüger","Aracampo","Fertilizante","たがやす","耕地"],4,2,10,0,0],
[["Sticky Web","Toile Gluante","Klebenetz","Rete Vischiosa","Red Viscosa","ねばねばネット","黏黏网"],6,2,20,0,0],
[["Fell Stinger","Dard Mortel","Stachelfinale","Pungiglione","Aguijón Letal","とどめばり","致命针刺"],6,0,25,50,100],
[["Phantom Force","Hantise","Phantomkraft","Spettrotuffo","Golpe Fantasma","ゴーストダイブ","潜灵奇袭"],7,0,10,90,100],
[["Trick-or-Treat","Halloween","Halloween","Halloween","Halloween","ハロウィン","万圣夜"],7,2,20,0,100],
[["Noble Roar","Râle Mâle","Kampfgebrüll","Urlo","Rugido de Guerra","おたけび","战吼"],0,2,30,0,100],
[["Ion Deluge","DélugePlasma","Plasmaschauer","Pioggiaplasma","Cortina Plasma","プラズマシャワー","等离子浴"],12,2,25,0,0],
[["Parabolic Charge","Parabocharge","Parabolladung","Caricaparabola","Carga Parábola","パラボラチャージ","抛物面充电"],12,1,20,65,100],
[["Forest&#39;s Curse","Maléfice Sylvain","Waldesfluch","Schiacciatuffo","Condena Silvana","もりののろい","森林诅咒"],11,2,20,0,100],
[["Petal Blizzard","Tempête Florale","Blütenwirbel","Fiortempesta","Tormenta Floral","はなふぶき","落英缤纷"],11,0,15,90,100],
[["Freeze-Dry","Lyophilisation","Gefriertrockner","Liofilizzazione","Liofilización","フリーズドライ","冷冻干燥"],14,1,20,70,100],
[["Disarming Voice","Voix Enjôleuse","Säuselstimme","Incantavoce","Voz Cautivadora","チャームボイス","魅惑之声"],17,1,15,40,0],
[["Parting Shot","Dernier Mot","Abgangstirade","Monito","Última Palabra","すてゼリフ","抛下狠话"],16,2,20,0,100],
[["Topsy-Turvy","Renversement","Invertigo","Sottosopra","Reversión","ひっくりかえす","颠倒"],16,2,20,0,0],
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
[["Water Shuriken","Sheauriken","Wasser-Shuriken","Acqualame","Shuriken de Agua","みずしゅりけん","飞水手里剑"],10,1,20,15,100],
[["Mystical Fire","Feu Ensorcelé","Magieflamme","Magifiamma","Llama Embrujada","マジカルフレイム","魔法火焰"],9,1,10,75,100],
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
[["Hyperspace Fury","Furie Dimension","Dimensionswahn","Urtodimensionale","Cerco Dimensión","いじげんラッシュ","异次元猛攻"],16,0,5,100,0],
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
[["Shore Up","Amass&#39;Sable","Sandsammler","Sabbiaccumulo","Recogearena","すなあつめ","集沙"],4,2,10,0,0],
[["First Impression","Escarmouche","Überrumpler","Schermaglia","Escaramuza","であいがしら","迎头一击"],6,0,10,90,100],
[["Baneful Bunker","Blockhaus","Bunker","Fortino","Búnker","トーチカ","碉堡"],3,2,10,0,0],
[["Spirit Shackle","Tisse Ombre","Schattenfessel","Cucitura d&#39;Ombra","Puntada Sombría","かげぬい","缝影"],7,0,10,80,100],
[["Darkest Lariat","Dark Lariat","Dark Lariat","Braccioteso","Lariat Oscuro","DDラリアト","ＤＤ金勾臂"],16,0,10,85,100],
[["Sparkling Aria","Aria de l&#39;Écume","Schaumserenade","Canto Effimero","Aria Burbuja","うたかたのアリア","泡影的咏叹调"],10,1,10,90,100],
[["Ice Hammer","Marteau de Glace","Eishammer","Martelgelo","Martillo Hielo","アイスハンマー","冰锤"],14,0,10,100,90],
[["Floral Healing","Soin Floral","Florakur","Cura Floreale","Cura Floral","フラワーヒール","花疗"],17,2,10,0,0],
[["High Horsepower","Cavalerie Lourde","Pferdestärke","Forza Equina","Fuerza Equina","１０まんばりき","十万马力"],4,0,10,95,95],
[["Strength Sap","Vol-Force","Kraftabsorber","Assorbiforza","Absorbefuerza","ちからをすいとる","吸取力量"],11,2,10,0,100],
[["Solar Blade","Lame Solaire","Solarklinge","Lama Solare","Cuchilla Solar","ソーラーブレード","日光刃"],11,0,10,125,100],
[["Leafage","Feuillage","Blattwerk","Fogliame","Follaje","このは","树叶"],11,0,40,40,100],
[["Spotlight","Projecteur","Rampenlicht","Riflettore","Foco","スポットライト","聚光灯"],0,2,15,0,0],
[["Toxic Thread","Fil Toxique","Giftfaden","Velenotela","Hilo Venenoso","どくのいと","毒丝"],3,2,20,0,100],
[["Laser Focus","Affilage","Konzentration","Concentrazione","Aguzar","とぎすます","磨砺"],0,2,30,0,0],
[["Gear Up","Engrenage","Hilfsmechanik","Marciainpiù","Piñón Auxiliar","アシストギア","辅助齿轮"],8,2,20,0,0],
[["Throat Chop","Exécu-Son","Neck Strike","Colpo Infernale","Golpe Mordaza","じごくづき","地狱突刺"],16,0,15,80,100],
[["Pollen Puff","Boule Pollen","Pollenknödel","Sferapolline","Bola de Polen","かふんだんご","花粉团"],6,1,15,90,100],
[["Anchor Shot","Ancrage","Ankerschuss","Colpo d&#39;Ancora","Anclaje","アンカーショット","掷锚"],8,0,20,80,100],
[["Psychic Terrain","Champ Psychique","Psychofeld","Campo Psichico","Campo Psíquico","サイコフィールド","精神场地"],13,2,10,0,0],
[["Lunge","Furie-Bond","Anfallen","Assalto","Plancha","とびかかる","猛扑"],6,0,15,80,100],
[["Fire Lash","Fouet de Feu","Feuerpeitsche","Frusta di Fuoco","Látigo Ígneo","ほのおのムチ","火焰鞭"],9,0,15,80,100],
[["Power Trip","Arrogance","Überheblichkeit","Tracotanza","Chulería","つけあがる","嚣张"],16,0,10,20,100],
[["Burn Up","Flamme Ultime","Ausbrennen","Ultima Fiamma","Llama Final","もえつきる","燃尽"],9,1,5,130,100],
[["Speed Swap","Permuvitesse","Initiativetausch","Velociscambio","Cambia Velocidad","スピードスワップ","速度互换"],13,2,10,0,0],
[["Smart Strike","Estocorne","Schmalhorn","Sottilcorno","Cuerno Certero","スマートホーン","修长之角"],8,0,10,70,0],
[["Purify","Purification","Läuterung","Purificazione","Purificación","じょうか","净化"],3,2,20,0,0],
[["Revelation Dance","Danse Éveil","Wecktanz","Mutadanza","Danza Despertar","めざめるダンス","觉醒之舞"],0,1,15,90,100],
[["Core Enforcer","Sanction Suprême","Sanktionskern","Nucleocastigo","Núcleo Castigo","コアパニッシャー","核心惩罚者"],15,1,10,100,100],
[["Trop Kick","Botte Sucrette","Tropenkick","Tropicalcio","Patada Tropica","トロピカルキック","热带踢"],11,0,15,70,100],
[["Instruct","Sommation","Kommando","Imposizione","Mandato","さいはい","号令"],13,2,15,0,0],
[["Beak Blast","Bec-Canon","Schnabelkanone","Cannonbecco","Pico Cañón","くちばしキャノン","鸟嘴加农炮"],2,0,15,100,100],
[["Clanging Scales","Vibrécaille","Schuppenrasseln","Clamorsquame","Fragor Escamas","スケイルノイズ","鳞片噪音"],15,1,5,110,100],
[["Dragon Hammer","Draco-Marteau","Drachenhammer","Marteldrago","Martillo Dragón","ドラゴンハンマー","龙锤"],15,0,15,90,100],
[["Brutal Swing","Centrifugifle","Wirbler","Vorticolpo","Giro Vil","ぶんまわす","狂舞挥打"],16,0,20,60,100],
[["Aurora Veil","Voile Aurore","Auroraschleier","Velaurora","Velo Aurora","オーロラベール","极光幕"],14,2,20,0,0],
,
,
,
,
,
,
,
,
,
[["Shell Trap","Carapiège","Panzerfalle","Gusciotrappola","Coraza Trampa","トラップシェル","陷阱甲壳"],9,1,5,150,100],
[["Fleur Cannon","Canon Floral","Kanonenbouquet","Cannonfiore","Cañón Floral","フルールカノン","花朵加农炮"],17,1,5,130,90],
[["Psychic Fangs","Psycho-Croc","Psychobeißer","Psicozanna","Psicocolmillo","サイコファング","精神之牙"],13,0,10,85,100],
[["Stomping Tantrum","Trépignement","Fruststampfer","Battipiedi","Pataleta","じたんだ","跺脚"],4,0,10,75,100],
[["Shadow Bone","Os&#39;Ombre","Schattenknochen","Ossotetro","Hueso Sombrío","シャドーボーン","暗影之骨"],7,0,10,85,100],
[["Accelerock","Vif Roc","Turbofelsen","Rocciarapida","Roca Veloz","アクセルロック","冲岩"],5,0,20,40,100],
[["Liquidation","Aqua-Brèche","Aquadurchstoß","Idrobreccia","Hidroariete","アクアブレイク","水流裂破"],10,0,10,85,100],
[["Prismatic Laser","Laser Prisme","Prisma-Laser","Prismalaser","Láser Prisma","プリズムレーザー","棱镜镭射"],13,1,10,160,100],
[["Spectral Thief","Clepto-Mânes","Diebesschatten","Ombrafurto","Robasombra","シャドースチール","暗影偷盗"],7,0,10,90,100],
[["Sunsteel Strike","Choc Météore","Stahlgestirn","Astrocarica","Meteoimpacto","メテオドライブ","流星闪冲"],8,0,5,100,100],
[["Moongeist Beam","Rayon Spectral","Schattenstrahl","Raggio d&#39;Ombra","Rayo Umbrío","シャドーレイ","暗影之光"],7,1,5,100,100],
[["Tearful Look","Larme à l&#39;Œil","Tränendrüse","Occhionilucidi","Ojos Llorosos","なみだめ","泪眼汪汪"],0,2,20,0,0],
[["Zing Zap","Électrikipik","Elektropikser","Elettropizzico","Electropunzada","びりびりちくちく","麻麻刺刺"],12,0,10,80,100],
[["Nature&#39;s Madness","Ire de la Nature","Naturzorn","Ira della Natura","Furia Natural","しぜんのいかり","自然之怒"],17,1,10,0,90],
[["Multi-Attack","Coup Varia-Type","Multi-Angriff","Multiattacco","Multiataque","マルチアタック","多属性攻击"],0,0,10,90,100],
,
[["Mind Blown","Caboche-Kaboum","Knallkopf","Sbalorditesta","Cabeza Sorpresa","ビックリヘッド","惊爆大头"],9,1,5,150,100],
[["Plasma Fists","Plasma Punch","Plasmafäuste","Pugni Plasma","Puños Plasma","プラズマフィスト","等离子闪电拳"],12,0,15,100,100],
[["Photon Geyser","Photo-Geyser","Photonen-Geysir","Geyser Fotonico","Géiser Fotónico","フォトンゲイザー","光子喷涌"],13,1,5,100,100],
,
,
,
,
,
,
[["Zippy Zap","Pika-Sprint","Britzelturbo","Sprintaboom","Pikaturbo","ばちばちアクセル","电电加速"],12,0,15,50,100],
[["Splishy Splash","Pika-Splash","Plätschersurfer","Surfasplash","Salpikasurf","ざぶざぶサーフ","滔滔冲浪"],10,1,15,90,100],
[["Floaty Fall","Pika-Piqué","Schwebesturz","Piombaflap","Pikapicado","ふわふわフォール","飘飘坠落"],2,0,15,90,95],
[["Pika Papow","Pika-Fracas","Pika-Flash","Pikasaetta","Pikatormenta","ピカピカサンダー","闪闪雷光"],12,1,20,0,0],
[["Bouncy Bubble","Évo-Thalasso","Blubbsauger","Bollaslurp","Vapodrenaje","いきいきバブル","活活气泡"],10,1,15,90,100],
[["Buzzy Buzz","Évo-Dynamo","Knisterladung","Elettrozap","Joltioparálisis","びりびりエレキ","麻麻电击"],12,1,15,90,100],
[["Sizzly Slide","Évo-Flambo","Flackerbrand","Fiammabam","Flarembestida","めらめらバーン","熊熊火爆"],9,0,15,90,100],
[["Glitzy Glow","Évo-Psycho","Pulsieraura","Auraswoosh","Espeaura","どばどばオーラ","哗哗气场"],13,1,15,90,100],
[["Baddy Bad","Évo-Ténébro","Quälzone","Zona Buiabuia","Umbreozona","わるわるゾーン","坏坏领域"],16,1,15,90,100],
[["Sappy Seed","Évo-Écolo","Sprießbomben","Bombafrush","Leafitobombas","すくすくボンバー","茁茁轰炸"],11,0,15,90,100],
[["Freezy Frost","Évo-Congélo","Klirrfrost","Scricchiagelo","Glaceoprisma","こちこちフロスト","冰冰霜冻"],14,1,15,90,100],
[["Sparkly Swirl","Évo-Fabulo","Glitzersturm","Sbrilluccibufera","Sylveotornado","きらきらストーム","亮亮风暴"],17,1,15,90,100],
[["Veevee Volley","Évo-Chardasso","Evo-Crash","Eeveempatto","Eevimpacto","ブイブイブレイク","砰砰击破"],0,0,20,0,0],
[["Double Iron Bash","Écrous d&#39;Poing","Panzerfäuste","Pugni Corazzati","Ferropuño Doble","ダブルパンツァー","钢拳双击"],8,0,5,60,100]
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