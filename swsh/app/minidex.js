/* Minidex v20211222 - Marc Robledo 2013-2022 - http://www.marcrobledo.com/license */

/*
	to-do:
		remove item from home dex when searchFilters.missing and clicking caught
		additional translations (french, italian & japanaese)
		pokemon shadows title headers for every generation
		add pokemon base stats in learnsets.js? --> allow search bar to show uber pokemon?
		need to clean, scope and comment code (code is an unreadable mess, I can do it much better!)
*/

const IS_MOBILE=/android|blackberry|iphone|ip(a|o)d|opera m(ob|in)i|iemobile|wpdesktop|kindle|mobile|pocket|psp/i.test(navigator.userAgent||navigator.vendor||window.opera);

/* BitArray.js */
const BIT_ARRAY_SIZE=32;function BitArray(t){this.realLength=t;t%BIT_ARRAY_SIZE==0?(this._array=new Array(parseInt(t/BIT_ARRAY_SIZE)),this.length=t):(this._array=new Array(parseInt(t/BIT_ARRAY_SIZE)+1),this.length=this._array.length*BIT_ARRAY_SIZE),this.reset()}BitArray.prototype._getBitMask=function(t){return 1<<BIT_ARRAY_SIZE-t%BIT_ARRAY_SIZE-1},BitArray.prototype.reset=function(t){for(var r=0;r<this._array.length;r++)this._array[r]=0},BitArray.prototype.get=function(t){return!!(this._array[parseInt(t/BIT_ARRAY_SIZE)]&this._getBitMask(t))},BitArray.prototype.set=function(t){t<this.length&&(this._array[parseInt(t/BIT_ARRAY_SIZE)]|=this._getBitMask(t))},BitArray.prototype.unset=function(t){t<this.length&&(this._array[parseInt(t/BIT_ARRAY_SIZE)]&=~this._getBitMask(t))},BitArray.prototype.toggle=function(t){this.get(t)?this.unset(t):this.set(t)},BitArray.prototype.import=function(t){this.reset();for(var r=0;r<this._array.length&&r<t.length;r++)this._array[r]=t[r]>>>0};

/* String.slug() */
(function(){var a=[/[\xc0\xc1\xc2\xc4\xe0\xe1\xe2\xe4]/g,"a",/[\xc8\xc9\xca\xcb\xe8\xe9\xea\xeb]/g,"e",/[\xcc\xcd\xce\xcf\xec\xed\xee\xef]/g,"i",/[\xd2\xd3\xd4\xd6\xf2\xf3\xf4\xf6]/g,"o",/[\xd9\xda\xdb\xdc\xf9\xfa\xfb\xfc]/g,"u",/[\xd1\xf1]/g,"n",/[\xc7\xe7]/g,"c",/[\xc6\xe6]/g,"ae",/\x26/g,"and",/\u20ac/g,"euro",/[^\w\- ]/g,"",/( |_)/g,"-",/-+/g,"-",/^-|-$/g,""];String.prototype.slug||(String.prototype.slug=function(){for(var b=this.toLowerCase().replace(/&.*?;/g,''),c=0;c<a.length;c+=2)b=b.replace(a[c],a[c+1]);return b})}());

function el(e){return document.getElementById(e)}
function show(e){el(e).style.display=(/sprite/.test(el(e).className))?'inline-block':'block'}
function hide(e){el(e).style.display='none'}
function addEvent(e,v,f){e.addEventListener(v,f,false)}
function empty(e){var e2=(typeof e==='string')?e2=el(e):e2=e;while(e2.firstChild)e2.removeChild(e2.firstChild)}
function emptyBlock(e){var e2=(typeof e==='string')?e2=el(e):e2=e;while(e2.children.length>1)e2.removeChild(e2.lastChild)}
function createElement(t,ps){var e=document.createElement(t);for(var p in ps)if(ps.hasOwnProperty(p))if(p==='html')e.innerHTML=ps[p];else if(p==='class')e.className=ps[p];else e[p]=ps[p];return e}
function getPokeProp(pk,f,p){if(f && POKEMON[pk][5][f] && POKEMON[pk][5][f][p])return POKEMON[pk][5][f][p];else return POKEMON[pk][p]}
function localize(a){
	if(typeof a==='string')
		return STRINGS[a] || a
	else if(a[MinidexSettings.lang])
		return a[MinidexSettings.lang];
	return a[0]
}


function stopPropagation(e){if(typeof e.stopPropagation!=='undefined')e.stopPropagation();else e.cancelBubble=true}
function preventDefault(e){if(e.preventDefault)e.preventDefault();else e.returnValue=false}


const ALT_FORM_BITS=10;
function alternateForm(id,form){return id+(form<<ALT_FORM_BITS)}
const ALT_FORM_MASK=~(0x1f << ALT_FORM_BITS);
function getPokemonId(mergedId){return mergedId & ALT_FORM_MASK}
function getAlternateForm(mergedId){return mergedId>>ALT_FORM_BITS}





var searchFilters={
	text:'',
	type:false,
	missing:false
};
const SEARCH_FILTER_MISSING=/^((hide|not)-(captured|caught|obtained)|missing|pending|(ocultar|no|por|sin|falta)-(captura|caza|consegui)(do|r)s?|(me-)?faltan?|pendientes?)$/;
const SEARCH_FILTER_TYPE=/^tipo-(\S\S+)|(\S\S+)-type$/;






function markAll(caught){
	for(var i=0; i<allAvailablePokemon.length; i++){
		if(!!caught)
			MinidexSettings.caughtDatabase.set(i);
		else
			MinidexSettings.caughtDatabase.unset(i);
	}
	refreshSearchResults();
	refreshProgressBar();
	MinidexSettings.save();
}






function getPokeNameEn(nationalId){return POKEMON[nationalId][0]}
function getPokeName(nationalId){return POKEMON_NAMES[nationalId] || POKEMON[nationalId][0]}

function formatDexNumber(number){
	if(number<10)
		return '00'+number;
	else if(number<100)
		return '0'+number;
	else
		return number.toString();
}
function getPokemonDexIndex(nationalId, dex){
	if(!currentDex.national && dex){
		var index=currentDex.indexOf(nationalId, dexRegionalNumerationIndexes[regionalDexIndex]);
		if(index===-1)
			return getPokemonDexIndex(nationalId, regionalDexIndex-1);

		return index;
	}
	return currentDex.indexOf(nationalId)
}
function getCurrentDexNumber(nationalId, dexInfo){
	if(dexInfo.national){
		if(dexInfo.prefix)
			return dexInfo.prefix+formatDexNumber(nationalId);
		return formatDexNumber(nationalId);
	}else if(!dexInfo.nonNumeric){
		var index=dexInfo.ids.indexOf(nationalId)+dexInfo.start;

		if(dexInfo.prefix)
			return dexInfo.prefix+formatDexNumber(index);
		return formatDexNumber(index);
	}
	return '---';
}
const MORE_INFO_COMMON=[
	{
		title:'Serebii',
		getInfo:function(nationalId){
			if(GENERATION===1)
				return 'https://www.serebii.net/pokedex/'+formatDexNumber(nationalId)+'.shtml';
			else if(GENERATION===2)
				return 'https://www.serebii.net/pokedex-gs/'+formatDexNumber(nationalId)+'.shtml';
			else if(GENERATION===3)
				return 'https://www.serebii.net/pokedex-rs/'+formatDexNumber(nationalId)+'.shtml';
			else if(GENERATION===4)
				return 'https://www.serebii.net/pokedex-dp/'+formatDexNumber(nationalId)+'.shtml';
			else if(GENERATION===5)
				return 'https://www.serebii.net/pokedex-bw/'+formatDexNumber(nationalId)+'.shtml';
			else if(GENERATION===6)
				return 'https://www.serebii.net/pokedex-xy/'+formatDexNumber(nationalId)+'.shtml';
			else if(GENERATION===7)
				return 'https://www.serebii.net/pokedex-sm/'+formatDexNumber(nationalId)+'.shtml';
			else if(GENERATION===8){
				if(nationalId===83)
					return 'https://www.serebii.net/pokedex-swsh/farfetch\'d/';
				else if(nationalId===865)
					return 'https://www.serebii.net/pokedex-swsh/sirfetch\'d/';
				else if(nationalId===438)
					return 'https://www.serebii.net/pokedex-swsh/mimejr./';
				else if(nationalId===122)
					return 'https://www.serebii.net/pokedex-swsh/mr.mime/';
				else if(nationalId===866)
					return 'https://www.serebii.net/pokedex-swsh/mr.rime/';
				else if(nationalId===772)
					return 'https://www.serebii.net/pokedex-swsh/type:null/';
				return 'https://www.serebii.net/pokedex-swsh/'+getPokeNameEn(nationalId).slug()+'/';
			}
			return null;
		}
	},{
		title:'Bulbapedia',
		getInfo:function(nationalId){
			return 'https://bulbapedia.bulbagarden.net/wiki/'+getPokeNameEn(nationalId).replace(/ /g,'_')+'_(Pok%C3%A9mon)'
		}
	},{
		title:'Smogon',
		getInfo:function(nationalId){
			if(GENERATION===1)
				return 'https://www.smogon.com/dex/rb/pokemon/'+getPokeNameEn(nationalId).slug()+'/';
			else if(GENERATION===2)
				return 'https://www.smogon.com/dex/gs/pokemon/'+getPokeNameEn(nationalId).slug()+'/';
			else if(GENERATION===3)
				return 'https://www.smogon.com/dex/rs/pokemon/'+getPokeNameEn(nationalId).slug()+'/';
			else if(GENERATION===4)
				return 'https://www.smogon.com/dex/dp/pokemon/'+getPokeNameEn(nationalId).slug()+'/';
			else if(GENERATION===5)
				return 'https://www.smogon.com/dex/bw/pokemon/'+getPokeNameEn(nationalId).slug()+'/';
			else if(GENERATION===6)
				return 'https://www.smogon.com/dex/xy/pokemon/'+getPokeNameEn(nationalId).slug()+'/';
			else if(GENERATION===7)
				return 'https://www.smogon.com/dex/sm/pokemon/'+getPokeNameEn(nationalId).slug()+'/';
			else if(GENERATION===8)
				return 'https://www.smogon.com/dex/ss/pokemon/'+getPokeNameEn(nationalId).slug()+'/';
			return null;
		}
	},{
		title:['Other languages','Poképédia','PokéWiki','Pokémon Central Wiki','Wikidex','ポケモンWiki','中文百科52poke'],
		getInfo:function(nationalId){
			if(MinidexSettings.lang===1)
				return 'https://www.pokepedia.fr/'+getPokeName(nationalId).replace(/ /g,'_');
			else if(MinidexSettings.lang===2)
				return 'https://www.pokewiki.de/'+getPokeName(nationalId).replace(/ /g,'_');
			else if(MinidexSettings.lang===3)
				return 'https://wiki.pokemoncentral.it/'+getPokeName(nationalId).replace(/ /g,'_');
			else if(MinidexSettings.lang===4)
				return 'https://www.wikidex.net/wiki/'+getPokeName(nationalId).replace(/ /g,'_');
			else if(MinidexSettings.lang===5)
				return 'https://wiki.ポケモン.com/wiki/'+getPokeName(nationalId).replace(/ /g,'_');
			else if(MinidexSettings.lang===6)
				return 'https://wiki.52poke.com/wiki/'+getPokeName(nationalId).replace(/ /g,'_');
			return null
		}
	}
];































function reqAnimFrame(f){
	if(typeof window.requestAnimationFrame !=='undefined')
		window.requestAnimationFrame(f);
	else if(typeof window.mozRequestAnimationFrame !=='undefined') // old Firefox
		window.mozRequestAnimationFrame(f);
	else if(typeof window.msRequestAnimationFrame !=='undefined') // IE 10
		window.msRequestAnimationFrame(f);
	else if(typeof window.webkitRequestAnimationFrame !=='undefined') // old Chrome/Webkit
		window.webkitRequestAnimationFrame(f);
	else
		f.call()
}

function scrollTo(offset, noSmooth){
	if(document.documentElement.scroll && !noSmooth)
		document.documentElement.scroll({top:offset, behavior:'smooth'});
	else
		document.documentElement.scrollTop=offset
}
function goToTop(noSmooth){
	scrollTo(0, noSmooth);
}
function scrollHomeDexToTop(){
	scrollTo(el('dex-results').offsetTop-document.getElementsByTagName('nav')[0].offsetHeight, false);
}



function setWindowTitle(title){document.title=title.replace(/&#39;/g,'\'')}
function setAndroidColor(c){
	//document.body.style.backgroundColor=c;
	el('mobile-header-chrome').content=el('mobile-header-safari').content=c;
}












var currentDistanceFromHome=0;
function pushState(url,doNotPush){
	url=url.toLowerCase().replace(/[^\w\-]/g,'');

	if(document.body.className==='menu-open')
		hideMenu();


	var nationalId=pokemonNamesHash.indexOf(url.replace(/-\d+$/,''));
	if(nationalId>=1){
		var form=0;
		var matches=url.match(/-(\d+)$/);
		if(matches)
			form=parseInt(matches[1]);

		if(currentPoke===nationalId)
			doNotPush=true;

		showPokemon(nationalId, form);
		setAndroidColor('#e63636');
	}else if(typeof locationsHash[url]==='number'){
		showLocation(locationsHash[url]);
		setAndroidColor('#e63636');
	}else if(url==='menu'){
		showMenu(true);
	}else{
		url='';

		currentPoke=0;
		currentForm=0;
		currentDistanceFromHome=0;
		setWindowTitle('Minidex');
		show('home');
		hide('pokemon');
		hide('location');

		reqAnimFrame(refreshDexNavScroll);

		
		/* focus search */
		if(!IS_MOBILE && el('search').value && !searchFilters.missing && !searchFilters.type){
			reqAnimFrame(function(){
				setTimeout(focusSearch, 5);
			});
		}

		if(homeScroll)
			reqAnimFrame(function(){document.documentElement.scrollTop=homeScroll;});
		else
			goToTop();

		setAndroidColor('#202b37');
	}



	if(!doNotPush && currentDistanceFromHome<49){ /* firefox and chrome (and probably others) have a 50 history limit, if limit is reached, do not push any more states so home back stays reachable */
		currentDistanceFromHome++;
		//history.pushState({page:url,distanceFromHome:currentDistanceFromHome}, false, url);
		history.pushState({page:url,distanceFromHome:currentDistanceFromHome}, false, '#'+url);
	}
	
	reqAnimFrame(refreshCurrentHeaders);
}





const ROMAN_NUMBERS=['I','II','III','IV','V','VI','VII','VIII'];
const MAX_NATIONAL_BY_GENERATION=[0,151,251,386,493,649,721,809,893];

var currentPoke,currentForm=0;
var currentDex, allDexes, allAvailablePokemon;
var pokemonNamesHash, searchPokemonNamesHash;
var homeScroll=0;
var moveInfoOverlay;
var locationsHash;





function showPokemon(id,form){
	if(!(id>=1 && id<=MAX_NATIONAL) || (currentPoke===id && currentForm===form))
		return false;
	currentPoke=id;
	currentForm=form;

	hide('home');
	hide('location');
	show('pokemon');
	el('caught-button').pokemonIndex=allAvailablePokemon.indexOf(id);
	refreshCaughtButton(el('caught-button'));




	/* if pokemon is not available in current dex, guess its dex */
	if(currentDex.ids.indexOf(id)===-1){
		var start=0;
		if(currentDex.national){
			start=REGIONAL_DEXES.length;
		}
		for(var i=start; i<allDexes.length; i++){
			if(allDexes[i].ids.indexOf(currentPoke)!==-1){
				setDex(i);
				break;
			}
		}
	}
	
	var poke=parsePokemon(id,form);

	/* set window title */
	var pokeNumber=getCurrentDexNumber(id, currentDex);
	setWindowTitle('#'+pokeNumber+' '+poke.name);
	el('pokemon-title').innerHTML='<span class="mono">#'+pokeNumber+'</span> '+poke.nameHTML;

	/* set big image */
	empty('dex-img');
	el('dex-img').appendChild(generateIcon(id,form,Icons.ICON_HEIGHT>30? 3:4));

	/* forms */
	if(POKEMON[id][5]){
		empty('forms');
		var availableForms=0;
		for(var i=0; i<POKEMON[id][5].length; i++){
			if(typeof isFormAvailable==='undefined' || isFormAvailable(id,i)){
				el('forms').appendChild(generateIconClickable(id,i));
				if(i===currentForm){
					el('forms').children[i].className='poke-icon';
				}else{
					el('forms').children[i].className='poke-icon disabled';
				}
				availableForms++;
			}
		}
		if(availableForms)
			show('block-forms');
		else
			hide('block-forms');
	}else{
		hide('block-forms');
	}

	/* set types */
	empty('dex-types');
	for(var i=0; i<poke.types.length && i<2; i++){
		var span=document.createElement('span');
		span.className='type type-'+poke.types[i];
		span.innerHTML=TYPES[poke.types[i]];
		
		el('dex-types').appendChild(span);
	}

	/* set abilities */
	if(GENERATION>2 && GAME_ID!=='letsgo'){
		empty('abilities');
		var nAbilities=0;
		for(var i=0; i<poke.abilities.length; i++){
			if(poke.abilities[i])
				nAbilities++;
		}
		for(var i=0; i<poke.abilities.length; i++){
			if(poke.abilities[i]){				
				var td=document.createElement('td');
				if(nAbilities===1)
					td.width='100%';
				else if(nAbilities===2)
					td.width='50%';
				else if(nAbilities===3)
					td.width='33.3%';
				td.appendChild(createExternalLink(ABILITIES[poke.abilities[i]], getAbilityLink(poke.abilities[i])));
				td.appendChild(document.createElement('br'));
				if(i===2){
					var spanHidden=document.createElement('small');
					spanHidden.innerHTML=STRINGS.ability_hidden;
					td.appendChild(spanHidden);
				}
				el('abilities').appendChild(td);
			}
		}
	}

	/* evo line */
	empty('evoline');
	var ul=createElement('ul');
	var previousLi=createElement('li');
	el('evoline').appendChild(previousLi);
	var start=poke.evoLine;

	/*if(typeof POKEMON[start][4][0]==='number')
		start=POKEMON[start][4][0];
	else
		start=POKEMON[start][4][0][0];*/

	var icon;
	if(start===id){
		icon=generateIconClickable(start,currentForm)
	}else{
		icon=generateIconClickable(start,0)
	}
	previousLi.appendChild(icon);
	ul.appendChild(previousLi);
	el('evoline').appendChild(ul);

	/* generate recursive evo line */
	generateEvoBranch(start, previousLi);
	generateIncenseBreeding(POKEMON[start]);

	/* encounters */
	empty('table-encounters');
	var totalEncounters=filterEncounters(id);
	if(totalEncounters.length){
		renderEncounters(totalEncounters);
	}else if(currentPoke<=MAX_NATIONAL){
		//look for available evolutions
		var evolutionAvailability=0;
		if(POKEMON[id][4]){
			evolutionAvailability=searchBranchAvailability(id, false);

			if(evolutionAvailability && currentPoke!==790){ //cosmoem
				var icons=[];
				for(var j=0; j<POKEMON[id][4].length; j++)
					icons.push(generateIconClickable(POKEMON[id][4][j][0],0));

				renderSimpleEncounter('breed', evolutionAvailability, icons);
			}
		}

		//look for available preevos
		var preevosAvailable=0;
		if(POKEMON[id][3]!==id){
			preevosAvailable=searchBranchAvailability(POKEMON[id][3], id);

			if(preevosAvailable)
				renderSimpleEncounter('evolve', preevosAvailable, [generateIconClickable(getPreEvolution(id),0)]);
		}

		if(!evolutionAvailability && !preevosAvailable)
			renderSimpleEncounter('not_available', 0);
	}else{
		renderSimpleEncounter('not_available', 0);
	}

	/* calculate weaknesses */
	empty('dex-damages');
	calculateWeaknesses();

	/* learnset */
	empty('block-learnset');
	if(competitiveDatabaseLoaded)
		renderAllLearnsets(currentPoke);

	/* more info links */
	empty('extra-links');
	if(typeof MORE_INFO !== 'undefined'){
		for(var i=0; i<MORE_INFO.length; i++){
			buildMoreInfo(MORE_INFO[i], totalEncounters);
		}
	}
	for(var i=0; i<MORE_INFO_COMMON.length; i++){
		buildMoreInfo(MORE_INFO_COMMON[i], totalEncounters);
	}
	if(navigator.canShare){
		var tr=document.createElement('tr');
		var a=document.createElement('a');
		a.target='_blank';
		a.href='#'+pokemonNamesHash[currentPoke];
		addEvent(a, 'click', function(evt){
			preventDefault(evt);
			
			navigator.share({
				title:'#'+currentPoke+' '+POKEMON[currentPoke][0]+' - Minidex',
				text:'Learn all about '+POKEMON[currentPoke][0]+'!',
				url:window.location.href
			});
		});
		var td0=document.createElement('td');
		var sprite=document.createElement('i');
		sprite.className='sprite share';
		td0.appendChild(sprite);
		a.innerHTML+=localize('share');
		var td1=document.createElement('td');
		td1.appendChild(a);
		tr.appendChild(td0);
		tr.appendChild(td1);
		el('extra-links').appendChild(tr);
	}

	/* smooth scroll to top */
	if(currentDistanceFromHome===0)
		goToTop(true);
	else
		goToTop();
}








function buildMoreInfo(data, totalEncounters){
	var moreInfo=data.getInfo(currentPoke, totalEncounters);
	var tr=document.createElement('tr');
	if(/^(https?:|.*\/)/.test(moreInfo)){
		var a=document.createElement('a');
		a.target='_blank';
		a.href=moreInfo;
		a.innerHTML='';
		var td0=document.createElement('td');
		if(/\.(png|jpe?g)$/.test(moreInfo)){
			var sprite=document.createElement('i');
			sprite.className='sprite pic';
			td0.appendChild(sprite);
		}else{
			var sprite=document.createElement('i');
			sprite.className='sprite extlink';
			td0.appendChild(sprite);
		}
		a.innerHTML+=localize(data.title);
		var td1=document.createElement('td');
		td1.appendChild(a);
		tr.appendChild(td0);
		tr.appendChild(td1);
		el('extra-links').appendChild(tr);
	}else if(moreInfo){
		var td0=document.createElement('td');
		td0.innerHTML=localize(moreInfo);
		td0.colSpan=2;
		tr.appendChild(td0);
		el('extra-links').appendChild(tr);
	}
}




function parseExclusiveGames(gameId, games, availability){
	var spans=document.createElement('span');
	spans.className='games games-'+gameId;

	if(!availability)
		return spans;

	var titles=[];
	for(var i=0; i<games.length; i++){
		if(availability & (1 << i)){
			spans.innerHTML+='<span class="game game-'+gameId+i+'"></span>';
			titles.push(localize(games[i]));
		}
	}
	spans.title=localize('exclusively_in')+' '+titles.join('/');
	return spans
}
function parseExclusiveGamesCompetitive(availability){
	var spans=document.createElement('span');
	spans.className='games games-mixed';

	if(!availability)
		return spans;

	var titles=[];
	for(var i=0; i<LEARNSET_GAMES.length; i++){
		if(availability & (1 << i)){
			for(var j=0; j<LEARNSET_GAMES[i].icons.length; j++){
				spans.innerHTML+='<span class="game game-'+LEARNSET_GAMES[i].icons[j]+'"></span>';
			}
			titles.push(localize(LEARNSET_GAMES[i].title));
		}
	}
	spans.title=localize('exclusively_in')+' '+titles.join('/');
	return spans
}


function parseEncounterMethod(encounterMethod){
	var method=encounterMethod[2];
	var pokeId=encounterMethod[0];
	var span=document.createElement('span');

	pokeId=getPokemonId(pokeId);
	if(typeof method==='string'){
		if(method==='revive_fossil')
			span.innerHTML=localize(method).replace('%s', STRINGS['fossil_'+pokeId]);
		else
			span.innerHTML=localize(method);
	}else{
		span.innerHTML='';

		for(var i=0; i<method.length; i++){
			if(i>0)
				span.innerHTML+=' + '+localize(method[i]);
			else
				span.innerHTML+=localize(method[i]);

			if(method[i]==='trade' || method[i]==='horde_with' || method[i]==='sos_ally'){
				i++;
				span.appendChild(generateIconClickable(getPokemonId(method[i]),getAlternateForm(method[i])));
			}
		}
	}
	
	return span;
}


function mergeRates(rates, sprites){
	var validRates={};
	for(var i=0; i<rates.length; i++){
		if(rates[i]){
			if(!validRates[rates[i]])
				validRates[rates[i]]='';
			validRates[rates[i]]+='<i class="sprite encounter-condition '+sprites[i]+'" title="'+localize(sprites[i])+'"></i> ';
		}
	}

	var rateText='';
	var nRates=0;
	for(rate in validRates){
		rateText+=validRates[rate]+rate+'<small>%</small><br/>';
		nRates++;
		if(nRates%3===0)
			rateText+='<br/>';
	}	
	return rateText;
}


function parseRateEncounter(rates){
	if(typeof rates ==='number'){
		return rates+'<small>%</small>';
	}else if(typeof rates ==='string'){
		if(/^fossil_/.test(rates))
			return '';
		return localize(rates);
	}else if(typeof rates==='object'){
		if(GENERATION===2 || GENERATION===4 || GAME_ID==='bdsp'){
			return mergeRates(rates, ['morning','day','night']);
		}else if(GENERATION===5){
			return mergeRates(rates, ['spring','summer','autumn','winter']);
		}else if(GENERATION===7){
			return mergeRates(rates, ['day','night']);
		}else if(GENERATION===8){
			return mergeRates(rates, ['no_weather','overcast','raining','thunderstorm','snowing','snowstorm','intense_sun','sandstorm','heavy_fog']);
		}
	}else{
		return '';
	}
}

function equals(a,b){
	if(typeof a==='object' && typeof b==='object'){
		if(a.length!==b.length)
			return false;
		for(var i=0; i<a.length; i++)
			if (a[i]!==b[i])
				return false;
		return true;
	}else
		return a===b;
}

function renderSimpleEncounter(text, availability, icons){
	var tr=createElement('tr');
	var td0=createElement('td');
	var td1=createElement('td', {innerHTML:localize(text)});
	td1.colSpan=2;

	if(icons){
		for(var i=0; i<icons.length; i++)
			td1.appendChild(icons[i]);
	}
	var td2=createElement('td', {className:'text-center'});
	td2.appendChild(parseExclusiveGames(GAME_ID, GAMES, availability));

	tr.appendChild(td0);
	tr.appendChild(td1);
	tr.appendChild(td2);
	
	el('table-encounters').appendChild(tr);
}
function renderEncounters(encounters){
	var showFormIcons=false;
	for(var i=0; i<encounters.length; i++){
		var a=document.createElement('a');
		a.href='#'+LOCATIONS[encounters[i][4]].name[0].slug();
		a.locationGame=GAME_ID;
		a.locationId=encounters[i][4];
		a.addEventListener('click', _clickLink, false);
		a.innerHTML=localize(LOCATIONS[encounters[i][4]].name)+' ';
		if(encounters[i][5]){
			if(GAME_ID==='swsh')
				a.innerHTML+='<br/>';
			a.appendChild(createElement('small',{html:encounters[i][5]}));

		}else{
			a.appendChild(createElement('small'));
		}
		encounters[i][6]=a;

		var repeat=false;
		for(var j=i-1; j>=0 && !repeat; j--){
			if(encounters[i][0]===encounters[j][0] && encounters[i][1]===encounters[j][1] && equals(encounters[i][2],encounters[j][2]) && equals(encounters[i][3],encounters[j][3])){
				if(/*encounters[j][6].locationGame===a.locationGame && */encounters[j][6].locationId===a.locationId){
					encounters[i][6]=encounters[j][6];
					encounters[j][6].children[0].innerHTML+='/'+encounters[i][5];
				}else{
					//encounters[j][6].parentElement.appendChild(createElement('span',{html:', '}));
					encounters[j][6].parentElement.appendChild(a);
				}
				repeat=true;
			}
		}
		if(repeat)
			continue;

		var tr=createElement('tr');
		var td0=createElement('td');
		var td1=createElement('td',{className:'location-name'});
		var td2=createElement('td',{className:'text-right no-wrap'});
		var td4=createElement('td',{className:'text-right'});

		td1.appendChild(a);

		tr.form=getAlternateForm(encounters[i][0]);
		//if(currentForm!==form)
		if(tr.form || showFormIcons){
			//td0.appendChild(generateIcon(getPokemonId(encounters[i][0]),tr.form,1), td0.children[0]);
			td0.appendChild(generateIcon(getPokemonId(encounters[i][0]),tr.form,1));
			if(!showFormIcons){
				var trs=el('table-encounters').children;
				for(var j=0; j<trs.length; j++){
					trs[j].children[0].appendChild(generateIcon(getPokemonId(encounters[i][0]),trs[j].form,1));
				}
				showFormIcons=true;
			}
		}
		td2.appendChild(parseEncounterMethod(encounters[i]));
		td2.appendChild(parseExclusiveGames(GAME_ID, GAMES, encounters[i][1]));

		td4.appendChild(createElement('span', {className:'rates',html:parseRateEncounter(encounters[i][3])}));

		//tr.pokeId=encounters[i][0];
		tr.appendChild(td0);
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td4);

		el('table-encounters').appendChild(tr);
	}
	/*if(showFormIcons){
		var trs=;
		for(var i=0;
			td1.insertBefore(generateIcon(getPokemonId(encounters[i][0]),form,1), td0.children[0]);
	}*/
}



function filterEncounters(nationalId){
	var filteredEncounters=[];
	for(var i=0; i<LOCATIONS.length; i++){
		filteredEncounters=filteredEncounters.concat(filterEncountersByGroup(nationalId, LOCATIONS[i].encounters, i, null));
	}
	return filteredEncounters;
}
function filterEncountersByGroup(nationalId, encounters, locationIndex, groupName){
	var filteredEncountersByLocation=[];
	for(var i=0; i<encounters.length; i++){
		if(encounters[i].group){
			var nextGroupName;
			if(!!groupName){
				nextGroupName=groupName+' ('+localize(encounters[i].group)+')';
			}else{
				nextGroupName=localize(encounters[i].group);
			}
			filteredEncountersByLocation=filteredEncountersByLocation.concat(filterEncountersByGroup(nationalId, encounters[i].encounters, locationIndex, nextGroupName));
		}else if(getPokemonId(encounters[i][0])===nationalId){
			filteredEncountersByLocation.push([encounters[i][0], encounters[i][1], encounters[i][2], encounters[i][3], locationIndex, groupName]);
		}
	}
	return filteredEncountersByLocation
}
function getAvailability(nationalId){
	var availability=0;
	var encounters=filterEncounters(nationalId);
	for(var i=0; i<encounters.length; i++)
		availability|=encounters[i][1] || 0xff; // 0xff=all bits set to 1, make sure all non-exclusive evos/preevos are available
	return availability;
}

function searchBranchAvailability(startingId, stopAt){
	var availability=0;

	startingId=getPokemonId(startingId);

	if(stopAt)
		availability|=getAvailability(startingId);

	if(POKEMON[startingId][4]){
		for(var i=0; i<POKEMON[startingId][4].length; i++){
			var evoId=getPokemonId(POKEMON[startingId][4][i][0]);
			availability|=getAvailability(evoId);
			if(POKEMON[evoId][4] && POKEMON[evoId][4]!==stopAt){
				availability|=searchBranchAvailability(evoId, stopAt);
			}
		}
	}

	return availability;
}


function renderLocationEncounters(encounters, groupName, showAsGrid){
	var currentBlock=document.createElement('div');
	currentBlock.className='block block-red';
	var currentTable=document.createElement('table');
	if(showAsGrid)
		currentTable.className='grid-encounters';
	else
		currentTable.className='table-encounters';

	el('location-encounters').appendChild(currentBlock);
	if(groupName){
		var h2=document.createElement('h2');
		h2.innerHTML=groupName;
		currentBlock.appendChild(h2);
	}
	currentBlock.appendChild(currentTable);
	
	
	var lastMethod;
	for(var i=0; i<encounters.length; i++){
		if(encounters[i].group){
			renderLocationEncounters(encounters[i].encounters, groupName+' '+localize(encounters[i].group), encounters[i].showAsGrid);
		}else{
			if(showAsGrid){
				var currentMethod=parseEncounterMethod(encounters[i]).innerHTML;
				if(lastMethod!==currentMethod){
					lastMethod=currentMethod;
					
					var tr=createElement('tr');
					var td0=document.createElement('td');
					td0.className='text-center';
					var encounterMethodHeader=document.createElement('div');
					
					encounterMethodHeader.innerHTML=currentMethod;
					
					td0.appendChild(encounterMethodHeader);
					tr.appendChild(td0);
					
					currentTable.appendChild(tr);
				}
				
				var div=createElement('div');
				div.className='grid-encounter';
				var div0=document.createElement('div');
				var div1=document.createElement('div');

				div.appendChild(generateIconClickable(getPokemonId(encounters[i][0]),getAlternateForm(encounters[i][0]),1));

				div0.innerHTML=getPokeName(getPokemonId(encounters[i][0]));
				div1.innerHTML=parseRateEncounter(encounters[i][3]);
				if(encounters[i][1])
					div1.appendChild(parseExclusiveGames(GAME_ID, GAMES, encounters[i][1]));
				
				div.appendChild(div0);
				div.appendChild(div1);

				currentTable.lastChild.children[0].appendChild(div);
				
			}else{
				var tr=createElement('tr');
				var td0=document.createElement('td');
				var td1=document.createElement('td');
				var td2=document.createElement('td');
				var td3=document.createElement('td');
				var td4=document.createElement('td');
					
				td0.appendChild(generateIconClickable(getPokemonId(encounters[i][0]),getAlternateForm(encounters[i][0]),1));
				//td1.innerHTML=groupName;
				td1.innerHTML=getPokeName(getPokemonId(encounters[i][0]));
				td2.appendChild(parseEncounterMethod(encounters[i]));
				td3.appendChild(parseExclusiveGames(GAME_ID, GAMES, encounters[i][1]));
				td4.innerHTML=parseRateEncounter(encounters[i][3]);
				
				tr.appendChild(td0);
				tr.appendChild(td1);
				tr.appendChild(td2);
				tr.appendChild(td3);
				tr.appendChild(td4);

				currentTable.appendChild(tr);
			}

			/* check if caught */
			if(MinidexSettings.caughtDatabase.get(allAvailablePokemon.indexOf(getPokemonId(encounters[i][0])))){
				var sprite=document.createElement('i');
				sprite.className='sprite caught-mini';
				if(!showAsGrid)
					currentTable.lastChild.children[1].appendChild(sprite);
				else
					div0.appendChild(sprite);

			}else if(el('location-icon').className==='sprite location1'){
				el('location-icon').className='sprite location0';
			}
		}
	}
}


function showLocation(location){
	currentPoke=0;
	currentForm=0;
	hide('home');
	hide('pokemon');
	show('location');
	
	empty('location-encounters');
	if(LOCATIONS[location]){
		el('location-title').innerHTML=localize(LOCATIONS[location].name);
		el('location-icon').className='sprite location1';
		setWindowTitle(localize(LOCATIONS[location].name));
		renderLocationEncounters(LOCATIONS[location].encounters, '', LOCATIONS[location].showAsGrid);
	}else{
		console.error(location);
		console.error('invalid location');
	}
	goToTop(true);
}



function getMachines(moveIndex, only){
	var machines=[];
	
	for(var i=0; i<LEARNSET_GAMES.length; i++){
		var gameMask=1<<i;
		if(only && !(only & gameMask)){
			continue;
		}

		
		//HMs
		if(GENERATION<=6 && typeof LEARNSET_GAMES[i].hms!=='undefined' && LEARNSET_GAMES[i].hms.indexOf(moveIndex)!==-1){
			var found=false;
			for(var j=0; j<machines.length && !found; j++){
				if(machines[j].type==='hm' && machines[j].number===LEARNSET_GAMES[i].hms.indexOf(moveIndex)){
					machines[j].gameMask|=gameMask;
					found=true;
				}
			}
			if(!found)
				machines.push({type:'hm', number:LEARNSET_GAMES[i].hms.indexOf(moveIndex), gameMask:gameMask});
		}
		
		//TRs
		if(GENERATION>=8 && typeof LEARNSET_GAMES[i].trs!=='undefined' && LEARNSET_GAMES[i].trs.indexOf(moveIndex)!==-1){
			var found=false;
			for(var j=0; j<machines.length && !found; j++){
				if(machines[j].type==='tr' && machines[j].number===LEARNSET_GAMES[i].trs.indexOf(moveIndex)){
					machines[j].gameMask|=gameMask;
					found=true;
				}
			}
			if(!found)
				machines.push({type:'tr', number:LEARNSET_GAMES[i].trs.indexOf(moveIndex), gameMask:gameMask});
		}
		
		//TMs
		if(typeof LEARNSET_GAMES[i].tms!=='undefined' && LEARNSET_GAMES[i].tms.indexOf(moveIndex)!==-1){
			var found=false;
			for(var j=0; j<machines.length && !found; j++){
				if(machines[j].type==='tm' && machines[j].number===LEARNSET_GAMES[i].tms.indexOf(moveIndex)){
					machines[j].gameMask|=gameMask;
					found=true;
				}
			}
			if(!found)
				machines.push({type:'tm', number:LEARNSET_GAMES[i].tms.indexOf(moveIndex), gameMask:gameMask});
		}
	}


	if(!only){
		for(var j=0; j<LEARNSET_GAMES.length; j++)
			only|=(1<<j);
	}

	var ret='';
	for(var i=0; i<machines.length; i++){
		if(ret)
			ret+='<br/>';
		if(only!==machines[i].gameMask){
			ret+=parseExclusiveGamesCompetitive(machines[i].gameMask).outerHTML;
		}
		ret+='<small>'+localize(machines[i].type)+'</small>'+(machines[i].number<10?'0'+machines[i].number:machines[i].number);
	}
	return ret;
}

function createLearnsetTable(type, form, headerTitle){
	var div=document.createElement('div');
	div.className='block block-green';

	var h2=document.createElement('h2');
	h2.innerHTML=headerTitle;

	table=document.createElement('table');
	table.id='table-moves-'+type+'-'+form;
	table.className='table-moves table-moves-'+type;

	div.appendChild(h2);
	div.appendChild(table);

	return table;
}
function renderLearnsets2(nationalId, form, learnset, type, exclusive){
	if(typeof form==='number' && typeof POKEMON[nationalId][5]==='undefined'){
		if(form===0)
			form=false;
		else
			return false;
	}

	var headerTitle='';
	if(typeof form==='number' && typeof POKEMON[nationalId][5][form]!=='undefined')
		headerTitle+=' ('+localize(POKEMON[nationalId][5][form][0])+')';

	var table;
	if(type==='levelup'){
		var extraLabel;
		if(!exclusive){
			extraLabel=' Gen '+ROMAN_NUMBERS[GENERATION-1];
		}else{
			var titles=[];
			for(var i=0; i<LEARNSET_GAMES.length; i++){
				if(exclusive & (1 << i))
					titles.push(localize(LEARNSET_GAMES[i].title));
			}
			extraLabel=' '+titles.join('/');
		}

		table=createLearnsetTable(type, form, localize('learnset_levelup')+extraLabel+headerTitle);
	}else if(el('table-moves-'+type+'-'+form))
		table=el('table-moves-'+type+'-'+form);
	else if(type==='machine' && GENERATION>=7)
		table=createLearnsetTable(type, form, localize('learnset_machine'+GENERATION)+headerTitle);
	else
		table=createLearnsetTable(type, form, localize('learnset_'+type)+headerTitle);


	var field=type.charAt(0);
	if(exclusive)
		field+=exclusive;

	if(typeof learnset[field] !== 'undefined'){
		var moves=learnset[field];
		for(var i=0; i<moves.length; i++){
			var tr=document.createElement('tr');
			var td0=document.createElement('td');
			var td1=document.createElement('td');
			tr.appendChild(td0);
			tr.appendChild(td1);
			var move;
			if(type==='levelup'){
				move=moves[i][0];

				var span=createElement('div');

				if(moves[i].length===3)
					span.appendChild(parseExclusiveGamesCompetitive(moves[i][2]));
				else if(exclusive)
					span.appendChild(parseExclusiveGamesCompetitive(exclusive));

				if(moves[i][1]===0)
					span.innerHTML+='Evo.';
				else if(moves[i][1]===1)
					span.innerHTML+='-';
				else
					span.innerHTML+=moves[i][1];
				td0.appendChild(span);

				td1.appendChild(createExternalLink(localize(MOVES[moves[i][0]][0]), getMoveLink(move)));
				//td1.innerHTML+=' (#'+move+')';
			}else{
				move=moves[i];

				td1.appendChild(createExternalLink(localize(MOVES[moves[i]][0]), getMoveLink(move)));
				//td1.innerHTML+=' (#'+move+')';

				if(type==='machine')
					td0.innerHTML=getMachines(moves[i], exclusive);

				if(exclusive)
					td0.appendChild(parseExclusiveGamesCompetitive(parseInt(exclusive)));
			}

			var td2=document.createElement('td');
			var span=document.createElement('span');
			if(MOVES[move][1]!==-1){
				span.className='type type-'+MOVES[move][1];
				span.innerHTML=TYPES[MOVES[move][1]];
			}else{
				span.className='type type-unknown';
				span.innerHTML='???';
			}
			td2.appendChild(span);
			span=document.createElement('span');
			span.className='type cat-'+[MOVES[move][2]];
			span.innerHTML='<i class="sprite move-cat-'+MOVES[move][2]+'"></i>';
			td2.appendChild(span);
			tr.appendChild(td2);

			tr.moveIndex=move;
			addEvent(tr, 'mouseover', showMoveInfo);

			table.appendChild(tr);
		}
	}

	if(table.children.length)
		el('block-learnset').appendChild(table.parentElement);

	if(!exclusive){
		//if(type!=='levelup'){
			var allGameMask=0;
			for(var j=0; j<LEARNSET_GAMES.length; j++){
				allGameMask|=(1<<j);
			}
			for(var j=1; j<=allGameMask; j++){
				if(typeof learnset[field+j]!=='undefined')
					renderLearnsets2(nationalId, form, learnset, type, j);
			}
		//}

		if(typeof learnset.forms !== 'undefined'){
			for(var i=0; i<learnset.forms.length; i++)
				if(typeof learnset.forms[i] !== 'undefined')
					renderLearnsets2(nationalId, i, learnset.forms[i], type, false);
		}
	}
}

function renderAllLearnsets(nationalId){
	if(typeof LEARNSETS[nationalId] === 'undefined')
		return false;

	
	renderLearnsets2(nationalId, false, LEARNSETS[nationalId], 'levelup', false);
	renderLearnsets2(nationalId, false, LEARNSETS[nationalId], 'machine', false);
	if(GENERATION>=2 && GAME_ID!=='letsgo')
		renderLearnsets2(nationalId, false, LEARNSETS[nationalId], 'egg', false);
	renderLearnsets2(nationalId, false, LEARNSETS[nationalId], 'tutor', false);
	renderLearnsets2(nationalId, false, LEARNSETS[nationalId], 'change', false);
	renderLearnsets2(nationalId, false, LEARNSETS[nationalId], 'special', false);
}



/*function calculateStats(poke,form,iv,ev,level,nature,gen){
	//if(gen==7){...}else{...}
	var stats=[];
	var baseStats=getPokeProp(poke,form,'s');
	for(var i=0; i<6; i++){
		if(i==0){//HP
			stats[i]=parseInt((((2*baseStats[i]+iv+parseInt(ev/4))*level)/100))+level+10;
		}else{//any else
			stats[i]=parseInt(parseInt(parseInt(((2*baseStats[i]+iv+parseInt(ev/4))*level)/100)+5)*nature);
		}
	}
	return stats
}*/

function createExternalLink(title, href){
	var a=document.createElement('a');
	a.target='_blank';
	a.href=href;
	a.innerHTML=title;
	return a;
}
function getAbilityLink(abilityIndex){
	if(MinidexSettings.lang===1)
		return 'https://www.pokepedia.fr/'+LANGS.ABILITIES[1][abilityIndex].replace(/ /g, '_')+'_(talent)'
	else if(MinidexSettings.lang===2)
		return 'https://www.pokewiki.de/'+LANGS.ABILITIES[2][abilityIndex].replace(/ /g, '_')
	else if(MinidexSettings.lang===3)
		return 'https://wiki.pokemoncentral.it/'+LANGS.ABILITIES[3][abilityIndex].replace(/ /g, '_')
	else if(MinidexSettings.lang===4)
		return 'https://www.wikidex.net/wiki/'+LANGS.ABILITIES[4][abilityIndex].replace(/ /g, '_')
	else if(MinidexSettings.lang===5)
		return 'https://wiki.ポケモン.com/wiki/'+LANGS.ABILITIES[5][abilityIndex].replace(/ /g, '_')
	else if(MinidexSettings.lang===6)
		return 'https://wiki.52poke.com/wiki/'+LANGS.ABILITIES[6][abilityIndex].replace(/ /g, '_')+'（特性）'
	else
		return 'https://bulbapedia.bulbagarden.net/wiki/'+LANGS.ABILITIES[0][abilityIndex].replace(/ /g, '_')+'_(Ability)';

}
function getMoveLink(moveIndex){
	if(MinidexSettings.lang===1)
		return 'https://www.pokepedia.fr/'+(MOVES[moveIndex][0][1] || MOVES[moveIndex][0][0]).replace(/ /g, '_')
	else if(MinidexSettings.lang===2)
		return 'https://www.pokewiki.de/'+(MOVES[moveIndex][0][2] || MOVES[moveIndex][0][0]).replace(/ /g, '_')
	else if(MinidexSettings.lang===3)
		return 'https://wiki.pokemoncentral.it/'+(MOVES[moveIndex][0][3] || MOVES[moveIndex][0][0]).replace(/ /g, '_')
	else if(MinidexSettings.lang===4)
		return 'https://www.wikidex.net/wiki/'+(MOVES[moveIndex][0][4] || MOVES[moveIndex][0][0]).replace(/ /g, '_')
	else if(MinidexSettings.lang===5)
		return 'https://wiki.ポケモン.com/wiki/'+(MOVES[moveIndex][0][5] || MOVES[moveIndex][0][0]).replace(/ /g, '_')
	else if(MinidexSettings.lang===6)
		return 'https://wiki.52poke.com/wiki/'+MOVES[moveIndex][0][6].replace(/ /g, '_')+'（招式）'
	else
		return 'https://bulbapedia.bulbagarden.net/wiki/'+MOVES[moveIndex][0][0].replace(/ /g, '_')+'_(move)';
}
function showMoveInfo(){
	moveInfoOverlay.innerHTML='';

	if(MOVES[this.moveIndex][4])
		moveInfoOverlay.innerHTML+='<b>'+localize('power')+': </b>'+MOVES[this.moveIndex][4];
	if(MOVES[this.moveIndex][5])
		moveInfoOverlay.innerHTML+=' <b>'+localize('accuracy')+': </b>'+MOVES[this.moveIndex][5]+'<small>%</small>';
	if(MOVES[this.moveIndex][3])
		moveInfoOverlay.innerHTML+=' <b>'+localize('pp')+': </b>'+MOVES[this.moveIndex][3];
	
	this.appendChild(moveInfoOverlay);
}



function _clickLink(evt){
	preventDefault(evt);
	if(currentDistanceFromHome===0)
		homeScroll=window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

	if(typeof this.regionalDexIndex==='number')
		currentRegionalNumeration=this.regionalDexIndex;

	pushState(this.href.substring(this.href.indexOf('#')));
}
function generatePokemonLink(id,form){
	if(pokemonNamesHash[id]){
		if(form)
			return '#'+pokemonNamesHash[id]+'-'+form
		else
			return '#'+pokemonNamesHash[id]
	}else
		return '#home';
}
function generateIconClickable(id,form){
	var a=document.createElement('a');

	a.title=getPokeName(getPokemonId(id));
	a.href=generatePokemonLink(id, form);

	a.appendChild(generateIcon(id, form,1));
	a.children[0].className+=' clickable';

	a.addEventListener('click', _clickLink, false);

	return a
}


function generateIcon(id,form,size/*,fixedSize*/){
	form=form || 0;

	var span=createElement('span',{class:Icons.ICON_HEIGHT>30?'poke-icon big':'poke-icon'});

	var pos=Icons.ICONS[id];
	pos=pos || 0;


	if(form){
		pos+=form;

		if(id===710 || id===711 || id===744 || id===854) // skip form icons for Pumpkaboo, Gourgeist, Rockruff & Sinistea
			pos-=form;
		else if(id===841) //Gigamax Flapple
			pos++;
		else if(id===892) //Urshifu
			pos--;
		else if((id===6 || id===150) && GAME_ID==='letsgo') //Charizard and Mewtwo X/Y Megas share the same icon in Let's go
			pos=pos-form+1;
	}


	span.style.backgroundImage='url(./app/assets/'+GAME_ID+'_icons.png)';
	span.style.backgroundPosition='-'+((pos%Icons.COLS)*Icons.ICON_WIDTH*size)+'px -'+(parseInt(pos/Icons.COLS)*Icons.ICON_HEIGHT*size)+'px';
	//span.style.background='url('+Icons.IMAGE+') -'+((pos%Icons.COLS)*Icons.ICON_WIDTH*size)+'px -'+(parseInt(pos/Icons.COLS)*Icons.ICON_HEIGHT*size)+'px';

	span.style.backgroundSize=(Icons.WIDTH*size)+'px '+(Icons.HEIGHT*size)+'px';
	span.style.width=(Icons.ICON_WIDTH*size)+'px';
	span.style.height=(Icons.ICON_HEIGHT*size)+'px';

	return span
}





function generateIncenseBreeding(pokemon){
	if(pokemon[6]){
		var div=document.createElement('div');
		div.className='text-center';
		div.innerHTML='&#8592; '+localize('breed_with').replace('%s', localize(pokemon[6]));
		el('evoline').appendChild(div);
	}
}
function generateEvoBranch(id, previousLi){
	if(!POKEMON[id][4])
		return false;

	var ul=document.createElement('ul');

	// turn single evolution into array
	if(typeof POKEMON[id][4][0]==='number')
		POKEMON[id][4]=[POKEMON[id][4]];

	for(var i=0;i<POKEMON[id][4].length; i++){
		var li=document.createElement('li');
		var evoId=getPokemonId(POKEMON[id][4][i][0]);
		var icon=generateIconClickable(evoId,getAlternateForm(POKEMON[id][4][i][0]));

		var method=POKEMON[id][4][i][1];
		var span=createElement('span', {html:''});
		span.style.verticalAlign='middle';

		if(method==='breed_with')
			span.innerHTML='&laquo; '+localize(method);
		else
			span.innerHTML=localize(method)+' &#8594;';

		if(/%s/.test(span.innerHTML)){
			var methodString=POKEMON[id][4][i][2];

			if(method==='levelup_move')
				if(competitiveDatabaseLoaded)
					methodString=localize(MOVES[methodString][0]);
				else
					methodString='(move '+methodString+')'; //could not load database yet, show a placeholder
			else if(method==='trade_for' || method==='breed_with'|| method==='levelup_party')
				methodString=getPokeName(methodString);
			else if(method==='levelup_at' && locationsHash[toCamelCase(methodString)]){
				span.title=localize(locationsHash[toCamelCase(methodString)].name);
				span.className='help';
				methodString=localize(POKEMON[id][4][i][2]);
			}else if(method==='evo_cosmoem_sun')
				methodString=localize(GAMES[0]);
			else if(method==='evo_cosmoem_moon')
				methodString=localize(GAMES[1]);
			else if(STRINGS[methodString])
				methodString=STRINGS[methodString];

			span.innerHTML=span.innerHTML.replace('%s',methodString);
		}
		li.appendChild(span);
		li.appendChild(icon);

		ul.appendChild(li);
		if(POKEMON[evoId][4]){
			generateEvoBranch(evoId, li);
		}
	}
	previousLi.appendChild(ul);
}


function toCamelCase(str) {
	return str.replace(/_([a-z])/g, function(a){return a.toUpperCase()}).replace('_','')
}



/* parsers */
function parsePokemon(id, form){
	var poke=POKEMON[id];

	var completeId=getCurrentDexNumber(id, currentDex);

	var name=getPokeName(id);
	var nameHTML=name;
	if(poke[5] && (form || (form===0)) && poke[5][form] && poke[5][form][0]){
		var formName=localize(poke[5][form][0]);
		name+=' ('+formName+')';
		nameHTML+=' <small>('+formName+')</small>';
	}

	var image=id;
	if(form && (id!==710 && id!==711)) //pumpkaboo
		image+=String.fromCharCode(97+form);


	var abilities=getPokeProp(id, form, 2);
	if(typeof abilities==='number'){
		abilities=[abilities];
	}

	var types;
	var types2=getPokeProp(id, form, 1);
	if(typeof types2==='number'){
		types=[types2];
	}else{
		types=types2;
	}

	return{
		id:id,
		completeId:completeId,
		form:form,
		name:name,
		nameHTML:nameHTML,

		image:image,

		types:types,
		abilities:abilities,

		evoLine:poke[3],
		breedWith:poke[6]
	}
}


var blueHeader,greenHeader;
function refreshCurrentHeaders(){
	if(el('pokemon').style.display==='block'){
		if(el('tab-collection').style.display==='block'){
			if(el('block-forms').style.display==='block')
				blueHeader=el('block-forms');
			else
				blueHeader=el('block-location');
			greenHeader=el('block-moreinfo');
		}else if(el('tab-competitive').style.display==='block'){
			if(GENERATION>2 && GAME_ID!=='letsgo')
				blueHeader=el('block-abilities');
			else
				blueHeader=el('block-damages');
			greenHeader=el('block-learnset');
		}
	}else{
		blueHeader=null;
		greenHeader=null;
	}
	
	scrollEvent();
}
function scrollEvent(evt){
	if(currentPoke && blueHeader && greenHeader){
		if(greenHeader.getBoundingClientRect().top<=0)
			setAndroidColor('#58ae54');	
		else if(blueHeader.getBoundingClientRect().top<=0)
			setAndroidColor('#5e66e1');
		else 
			setAndroidColor('#e63636');
	}/*else if(el('location').style.display==='block'){
	}else{
	}*/
	return false;
}



function showCollection(){
	show('tab-collection');
	hide('tab-competitive');
	
	el('tabs').children[0].className='selected';
	el('tabs').children[1].className='';
	
	refreshCurrentHeaders();
}
function showCompetitive(){
	hide('tab-collection');
	show('tab-competitive');
	
	el('tabs').children[0].className='';
	el('tabs').children[1].className='selected';
	
	refreshCurrentHeaders();
}

function previousDex(){
	var currentDexIndex=allDexes.indexOf(currentDex);
	if(currentDexIndex>0){
		setDex(currentDexIndex-1);
		return true;
	}
	return false;
}
function nextDex(){
	var currentDexIndex=allDexes.indexOf(currentDex);
	if(currentDexIndex<allDexes.length-1){
		setDex(currentDexIndex+1);
		return true;
	}
	return false;
}


function refreshDexNavScroll(){
	var selectedDex=allDexes.indexOf(currentDex);
	var dexesWidth=el('dex-navigator').getBoundingClientRect().width;
	var dexElementWidth=allDexes[0].dexNavButton.getBoundingClientRect().width;

	el('dex-navigator').children[0].style.left=parseInt((dexesWidth/2)-(dexElementWidth/2)-(selectedDex+0)*dexElementWidth)+'px';
	
}
function refreshDexNav(){
	var selectedDexIndex=allDexes.indexOf(currentDex);

	for(var i=0; i<allDexes.length; i++){
		allDexes[i].dexNavButton.className=i===selectedDexIndex?'selected':'clickable';
	}

	refreshDexNavScroll();
}
function setDex(newDex){
	var toggledNationalRegional=(!currentDex || !!allDexes[newDex].national !== currentDex.national);

	if(currentDex!==newDex){
		currentDex=allDexes[newDex];

		localizeOmnibarPlaceholder();

		refreshDexNav();
		refreshProgressBar();

		refreshSearchResults();
	}
}



function createFilter(id, val){
	searchFilters[id]=val || true;

	var span=document.createElement('span');
	span.id='filter-'+id;
	if(id==='type'){
		span.className='clickable filter filter-'+id+' type type-'+(val-1);
		span.innerHTML=localize('search_filter_'+id).replace('%s', TYPES[val-1]);
	}else{
		span.className='clickable filter filter-'+id;
		span.innerHTML=localize('search_filter_'+id);
	}
	el('dex-search-filters').appendChild(span);
	
	addEvent(span, 'click', function(evt){
		removeFilter(id);
	});
	
	refreshSearchBox();
}
function removeFilter(id){
	searchFilters[id]=false;
	el('dex-search-filters').removeChild(el('filter-'+id));

	refreshSearchResults();
	refreshSearchBox();
}
function refreshSearchBox(){
	el('search').style.paddingLeft=(15+el('dex-search-filters').getBoundingClientRect().width)+'px';
}


function searchLocations(){
	return /*!currentDex.national && */ /^(locations?|routes|places?|zones?|lugar|lugares|sitios?|localizacion|localizaciones|rutas|zonas?)?$/.test(searchFilters.text);
}

function getPreEvolution(id){
	for(var i=1; i<POKEMON.length; i++){
		if(POKEMON[i] && POKEMON[i][4]){
			for(var j=0; j<POKEMON[i][4].length; j++){
				var pokeId=getPokemonId(POKEMON[i][4][j][0]);
				if(pokeId===id){
					return i;
				}
			}
		}
	}
	return 0
}

function checkIfAvailable(id,encounters){
	var available=0;
	for(var i=0; i<encounters.length; i++){
		if(encounters[i].group){
			available|=checkIfAvailable(id, encounters[i].encounters);
		}else{
			if(getPokemonId(encounters[i][0])===id){
				for(var j=0; j<encounters[i][1].length; j++){
					available|=(1 << encounters[i][1][j])
				}
			}
		}
	}
	return available;
}



function refreshLocationButton(locationButton){
	locationButton.className='sprite location location'+(checkIfLocationAllCaught(LOCATIONS[locationButton.locationIndex].encounters)? 1:0);
}
function refreshCaughtButton(caughtButton){
	caughtButton.className='sprite clickable caught caught'+(MinidexSettings.caughtDatabase.get(caughtButton.pokemonIndex)? 1:0);
}
function _clickCaughtButton(evt){
	preventDefault(evt);
	stopPropagation(evt);

	MinidexSettings.caughtDatabase.toggle(this.pokemonIndex);
	refreshCaughtButton(this);

	if(this===el('caught-button')){
		var caughtButtons=document.querySelectorAll('#dex-results i.caught');
		for(var i=0; i<caughtButtons.length; i++){
			if(this.pokemonIndex===caughtButtons[i].pokemonIndex)
				refreshCaughtButton(caughtButtons[i]);
		}

		var locationButtons=document.querySelectorAll('#dex-results i.location');
		for(var i=0; i<locationButtons.length; i++){
			refreshLocationButton(locationButtons[i]);
		}
	}

	if(searchFilters.missing){
		// to-do: remove item from home dex
	}
	refreshProgressBar();
	MinidexSettings.save();
}
function createCaughtButton(pokemonIndex){
	var caughtButton=document.createElement('i');
	addEvent(caughtButton, 'click', _clickCaughtButton);
	caughtButton.pokemonIndex=pokemonIndex;
	if(typeof pokemonIndex==='number')
		refreshCaughtButton(caughtButton);
	return caughtButton;
}


function refreshProgressBar(){
	var count=0;
	for(var i=0; i<currentDex.ids.length; i++){
		if(MinidexSettings.caughtDatabase.get(allAvailablePokemon.indexOf(currentDex.ids[i])))
			count++;
	}
	var percentage=count / currentDex.ids.length * 100;

	if(percentage>0 && percentage<1)
		percentage=1;
	else if(percentage>99 && percentage<100)
		percentage=99;

	el('progress-bar').children[0].style.width=percentage+'%';
	el('progress-bar').className=percentage===100?'complete':'';
}



const TYPE_CHART_GEN1=[
[1,1,1,1,1,0.5,1,0,null,1,1,1,1,1,1,1],
[2,1,0.5,0.5,1,2,0.5,0,null,1,1,1,1,0.5,2,1],
[1,2,1,1,1,0.5,2,1,null,1,1,2,0.5,1,1,1],
[1,1,1,0.5,0.5,0.5,2,0.5,null,1,1,2,1,1,1,1], //poison
[1,1,0,2,1,2,0.5,1,null,2,1,0.5,2,1,1,1],
[1,0.5,2,1,0.5,1,2,1,null,2,1,1,1,1,2,1],
[1,0.5,0.5,2,1,1,1,0.5,null,0.5,1,2,1,2,1,1],
[0,1,1,1,1,1,1,2,null,1,1,1,1,0,1,1],
, //steel
[1,1,1,1,1,0.5,2,1,null,0.5,0.5,2,1,1,2,0.5],
[1,1,1,1,2,2,1,1,null,2,0.5,0.5,1,1,1,0.5],
[1,1,0.5,0.5,2,2,0.5,1,null,0.5,2,0.5,1,1,1,0.5], //grass
[1,1,2,1,0,1,1,1,null,1,2,0.5,0.5,1,1,0.5],
[1,2,1,2,1,1,1,1,null,1,1,1,1,0.5,1,1],
[1,1,2,1,2,1,1,1,null,1,0.5,2,1,1,0.5,2],
[1,1,1,1,1,1,1,1,null,1,1,1,1,1,1,2]
];

const TYPE_CHART_STEEL_DARK=[
[1,1,1,1,1,0.5,1,0,0.5,1,1,1,1,1,1,1,1],
[2,1,0.5,0.5,1,2,0.5,0,2,1,1,1,1,0.5,2,1,2],
[1,2,1,1,1,0.5,2,1,0.5,1,1,2,0.5,1,1,1,1],
[1,1,1,0.5,0.5,0.5,1,0.5,0,1,1,2,1,1,1,1,1],
[1,1,0,2,1,2,0.5,1,2,2,1,0.5,2,1,1,1,1],
[1,0.5,2,1,0.5,1,2,1,0.5,2,1,1,1,1,2,1,1],
[1,0.5,0.5,0.5,1,1,1,0.5,0.5,0.5,1,2,1,2,1,1,2],
[0,1,1,1,1,1,1,2,0.5,1,1,1,1,2,1,1,0.5],
[1,1,1,1,1,2,1,1,0.5,0.5,0.5,1,0.5,1,2,1,1],
[1,1,1,1,1,0.5,2,1,2,0.5,0.5,2,1,1,2,0.5,1],
[1,1,1,1,2,2,1,1,1,2,0.5,0.5,1,1,1,0.5,1],
[1,1,0.5,0.5,2,2,0.5,1,0.5,0.5,2,0.5,1,1,1,0.5,1],
[1,1,2,1,0,1,1,1,1,1,2,0.5,0.5,1,1,0.5,1],
[1,2,1,2,1,1,1,1,0.5,1,1,1,1,0.5,1,1,0],
[1,1,2,1,2,1,1,1,0.5,0.5,0.5,2,1,1,0.5,2,1],
[1,1,1,1,1,1,1,1,0.5,1,1,1,1,1,1,2,1],
[1,0.5,1,1,1,1,1,2,0.5,1,1,1,1,2,1,1,0.5]
];

const TYPE_CHART_FAIRY=[
[1,1,1,1,1,0.5,1,0,0.5,1,1,1,1,1,1,1,1,1],
[2,1,0.5,0.5,1,2,0.5,0,2,1,1,1,1,0.5,2,1,2,0.5],
[1,2,1,1,1,0.5,2,1,0.5,1,1,2,0.5,1,1,1,1,1],
[1,1,1,0.5,0.5,0.5,1,0.5,0,1,1,2,1,1,1,1,1,2],
[1,1,0,2,1,2,0.5,1,2,2,1,0.5,2,1,1,1,1,1],
[1,0.5,2,1,0.5,1,2,1,0.5,2,1,1,1,1,2,1,1,1],
[1,0.5,0.5,0.5,1,1,1,0.5,0.5,0.5,1,2,1,2,1,1,2,0.5],
[0,1,1,1,1,1,1,2,1,1,1,1,1,2,1,1,0.5,1],
[1,1,1,1,1,2,1,1,0.5,0.5,0.5,1,0.5,1,2,1,1,2],
[1,1,1,1,1,0.5,2,1,2,0.5,0.5,2,1,1,2,0.5,1,1],
[1,1,1,1,2,2,1,1,1,2,0.5,0.5,1,1,1,0.5,1,1],
[1,1,0.5,0.5,2,2,0.5,1,0.5,0.5,2,0.5,1,1,1,0.5,1,1],
[1,1,2,1,0,1,1,1,1,1,2,0.5,0.5,1,1,0.5,1,1],
[1,2,1,2,1,1,1,1,0.5,1,1,1,1,0.5,1,1,0,1],
[1,1,2,1,2,1,1,1,0.5,0.5,0.5,2,1,1,0.5,2,1,1],
[1,1,1,1,1,1,1,1,0.5,1,1,1,1,1,1,2,1,0],
[1,0.5,1,1,1,1,1,2,1,1,1,1,1,2,1,1,0.5,0.5],
[1,2,1,0.5,1,1,1,1,0.5,0.5,1,1,1,1,1,2,2,1]
];

function calculateWeaknesses(){	
	var parsedPokemon=parsePokemon(currentPoke, currentForm);
	var types=parsedPokemon.types;
	var abilities=parsedPokemon.abilities;

	var typeChart;
	if(GENERATION===1)
		typeChart=TYPE_CHART_GEN1;
	else if(GENERATION<6)
		typeChart=TYPE_CHART_STEEL_DARK;
	else
		typeChart=TYPE_CHART_FAIRY;

	var damages=[];
	for(var i=0; i<typeChart.length; i++){
		if(GENERATION>1 || i!==8){ //ignore steel type in gen1
			if(types.length===2)
				damages[i]=typeChart[i][types[0]]*typeChart[i][types[1]];
			else
				damages[i]=typeChart[i][types[0]];
		}
	}

	/*if(abilities.indexOf(26)===0){//levitate+ground
		if(abilities.length===1)
			damages[4]=0;
		else
			damages[4]+='/0*';
	}*/

	var SORTED_DAMAGES=[4,2,0.5,0.25, 0];
	
	var tr0=document.createElement('tr');
	var tr1=document.createElement('tr');

	el('dex-damages').appendChild(tr0);
	el('dex-damages').appendChild(tr1);
	for(var i=0; i<SORTED_DAMAGES.length; i++){
		var damage=SORTED_DAMAGES[i];

		var td0=document.createElement('td');
		var span=document.createElement('span');

		span.className='weakness';
		if(damage>1)
			span.className+=' green';
		else if(damage===0)
			span.className+=' red';
		else if(damage<1)
			span.className+=' orange';

		if(damage===0.5)
			span.innerHTML='&frac12;';
		else if(damage===0.25)
			span.innerHTML='&frac14;';
		else
			span.innerHTML=damage;
		span.innerHTML+='&times;';

		td0.appendChild(span);
		var visible=false;
		for(var j=0; j<damages.length; j++){
			if(damages[j]===SORTED_DAMAGES[i]){
				tr0.appendChild(td0);
			}
		}
	}

	for(var i=0; i<SORTED_DAMAGES.length; i++){
		var damage=SORTED_DAMAGES[i];

		var td1=document.createElement('td');

		var visible=false;
		for(var j=0; j<damages.length; j++){
			if(damages[j]===SORTED_DAMAGES[i]){
				var span=document.createElement('span');
				span.className='type type-'+j;
				span.innerHTML=TYPES[j];

				td1.appendChild(span);
				visible=true;
			}
		}
		
		if(visible)
			tr1.appendChild(td1);
	}
}














function hideDonateWarning(){
	hide('donate-warning');
	MinidexSettings.donateWarning=(new Date()).getTime();
	MinidexSettings.save();
}
var MinidexSettings=(function(){
	var IS_STORAGE_AVAILABLE=typeof(Storage)!=='undefined';

	var defaultLanguage=0;
	var userLang=(navigator.language || navigator.userLanguage).substr(0,2);
	if(userLang==='fr')
		defaultLanguage=1;
	else if(userLang==='de')
		defaultLanguage=2;
	else if(userLang==='it')
		defaultLanguage=3;
	else if(userLang==='es')
		defaultLanguage=4;
	else if(userLang==='jp')
		defaultLanguage=5;
	else if(userLang==='zh')
		defaultLanguage=6;


	return{
		/* default settings */
		lang:defaultLanguage,
		donateWarning:0,
		version:1,
		caughtDatabase:null,

		save:function(){
			if(IS_STORAGE_AVAILABLE){
				localStorage.setItem('minidex', JSON.stringify({lang:this.lang,donateWarning:this.donateWarning}));
				localStorage.setItem('minidex-'+GAME_ID, JSON.stringify(this));
			}
		},
		load:function(){
			this.caughtDatabase=new BitArray(allAvailablePokemon.length);

			if(IS_STORAGE_AVAILABLE){
				if(localStorage.getItem('minidex')){
					var loadedSettings=JSON.parse(localStorage.getItem('minidex'));

					if(typeof loadedSettings.lang==='number' && loadedSettings.lang>=0 && loadedSettings.lang<=6)
						this.lang=loadedSettings.lang;

					if(typeof loadedSettings.donateWarning==='number')
						this.donateWarning=loadedSettings.donateWarning;
				}

				if(localStorage.getItem('minidex-'+GAME_ID)){
					var loadedSettings=JSON.parse(localStorage.getItem('minidex-'+GAME_ID));
					if(typeof loadedSettings.caughtDatabase==='object' && loadedSettings.version===1)
						this.caughtDatabase.import(loadedSettings.caughtDatabase._array)
				}
			}
		},
		delete:function(){
			if(IS_STORAGE_AVAILABLE){
				localStorage.removeItem('minidex');
				localStorage.removeItem('minidex-'+GAME_ID);
			}
		},
		checkUnknownLanguage:function(){
			return IS_STORAGE_AVAILABLE && !localStorage.getItem('minidex') && defaultLanguage===0;
		}
	}
}());


function checkIfLocationAllCaught(encounters){
	for(var i=0; i<encounters.length; i++){
		if(encounters[i].group){
			if(!checkIfLocationAllCaught(encounters[i].encounters))
				return false;
		}else{
			if(!MinidexSettings.caughtDatabase.get(allAvailablePokemon.indexOf(getPokemonId(encounters[i][0]))))
				return false;
		}
	}

	return true;
}




function generateRange(min,max){
	var a=[];
	for(var i=min;i<=max;i++)
		a.push(i);
	return a
}

function homeDexReset(custom){
	empty('dex-results');
}
function homeLocationAdd(locationHashId){
	var locationIndex=locationsHash[locationHashId];

	if(typeof locationIndex!=='number')
		return false;

	var a=document.createElement('a');
	a.className='location-link';
	a.href='#'+locationHashId;
	a.locationIndex=locationIndex;

	addEvent(a, 'click', _clickLink);

	a.appendChild(createElement('span',{html:localize(LOCATIONS[locationIndex].name)}));


	var i=document.createElement('i');
	i.locationIndex=locationIndex;
	refreshLocationButton(i);
	a.appendChild(i);

	el('dex-results').appendChild(a);
}
function homeDexAdd(nationalId, dexInfo){
	if(!POKEMON[nationalId])
		return 0;
	if(searchFilters.missing){
		if(MinidexSettings.caughtDatabase.get(allAvailablePokemon.indexOf(nationalId)))
			return 0;
	}
	if(searchFilters.type){
		if(!(POKEMON[nationalId][1]===searchFilters.type-1 || (typeof POKEMON[nationalId][1]==='object' && POKEMON[nationalId][1].indexOf(searchFilters.type-1)!==-1)))
			return 0;
	}


	var form=0;
	if(!dexInfo.national && typeof getDefaultForm==='function')
		form=getDefaultForm(nationalId);

	var a=document.createElement('a');
	a.href=generatePokemonLink(nationalId, form);
	a.nationalId=nationalId;

	addEvent(a, 'click', _clickLink);

	a.appendChild(generateIcon(nationalId, form, 2));
	a.appendChild(createElement('span',{html:'<span class="mono">'+getCurrentDexNumber(nationalId, dexInfo)+'</span> <span>'+getPokeName(nationalId)+'</span>'}));

	//a.dexInfo=dexInfo;

	a.appendChild(createCaughtButton(allAvailablePokemon.indexOf(nationalId)));

	el('dex-results').appendChild(a);
	
	return 1
}
function refreshSearchResults(){
	var q=searchFilters.text.replace(/^0+/,'');

	homeDexReset();
	if(q){
		if(searchLocations()){
			for(var i=0; i<LOCATIONS.length; i++){
				homeLocationAdd(LOCATIONS[i].name[0].slug());
			}
		}else if(/^[a-z]?\d+$/i.test(q)){
			q=parseInt(q.replace(/^[a-z]/,''));

			if(currentDex.national){
				if(q && POKEMON[q])
					homeDexAdd(q, currentDex);
			}else{
				var prefix=false;
				if(/^[a-z]/.test(searchFilters.text)){
					prefix=searchFilters.text.match(/^[a-z]/)[0].toUpperCase();
				}
				for(var i=0; i<allDexes.length; i++){
					if(!allDexes[i].national && !allDexes[i].nonNumeric && (!prefix || allDexes[i].prefix===prefix))
						homeDexAdd(allDexes[i].ids[q-allDexes[i].start], allDexes[i]);
				}

				if(NATIONAL_DEX && q && POKEMON[q]){
					homeDexAdd(q, {
						prefix:'N',
						national:true
					});
				}
			}
		}else{
			var queryRegex=new RegExp(q);

			var results=0;
			if(currentDex.national){
				for(var i=0; i<allAvailablePokemon.length && results<10; i++){
					if(queryRegex.test(searchPokemonNamesHash[allAvailablePokemon[i]]))
						results+=homeDexAdd(allAvailablePokemon[i], {national:true});
				}
			}else{
				var foundRegional=[];
				for(var i=0; i<REGIONAL_DEXES.length && results<10; i++){
					for(var j=0; j<REGIONAL_DEXES[i].ids.length && results<10; j++){
						if(queryRegex.test(searchPokemonNamesHash[REGIONAL_DEXES[i].ids[j]])){
							results+=homeDexAdd(REGIONAL_DEXES[i].ids[j], REGIONAL_DEXES[i]);
							foundRegional.push(REGIONAL_DEXES[i].ids[j]);
						}
					}
				}
				for(var i=0; i<allAvailablePokemon.length && results<10; i++){
					if(foundRegional.indexOf(allAvailablePokemon[i])===-1 && queryRegex.test(searchPokemonNamesHash[allAvailablePokemon[i]]))
						results+=homeDexAdd(allAvailablePokemon[i], {prefix:'N', national:true});
				}
			}
			
			//search region locations
			if(searchFilters.type===false && searchFilters.missing===false){
				for(var i=0; i<LOCATIONS.length && results<20; i++){
					var locationSlug=MinidexSettings.lang<5?localize(LOCATIONS[i].name).slug():localize(LOCATIONS[i].name);
					if(queryRegex.test(locationSlug)){
						homeLocationAdd(LOCATIONS[i].name[0].slug());
						results++;
					}
				}
			}
		}
	}else{
		//show entire currentDex
		for(var i=0; i<currentDex.ids.length; i++)
			homeDexAdd(currentDex.ids[i], currentDex);
	}
}


function forceGoToHome(){
	if(currentDistanceFromHome && !currentPoke) /* location */
		window.history.go(-1);
	else if(currentDistanceFromHome>0)
		window.history.go(-currentDistanceFromHome);
}

function nextPokemon(){
	var nextIndex=currentDex.ids.indexOf(currentPoke)+1;
	if(nextIndex===currentDex.ids.length){
		if(!nextDex())
			return false;
		nextIndex=0;
	}
	pushState(findCurrentDexPokemonHash(nextIndex));
	return true;
}
function previousPokemon(){
	var prevIndex=currentDex.ids.indexOf(currentPoke)-1;
	if(prevIndex===-1){
		if(!previousDex())
			return false;
		prevIndex=currentDex.ids.length-1;
	}
	pushState(findCurrentDexPokemonHash(prevIndex));
	return true;
}
function findCurrentDexPokemonHash(id){
	var pageHash='#'+pokemonNamesHash[currentDex.ids[id]];
	
	if(!currentDex.national && typeof getDefaultForm==='function'){
		var form=getDefaultForm(currentDex.ids[id]);
		if(form)
			pageHash+='-'+form;
	}
	return pageHash;
}

function setLanguage(l){
	MinidexSettings.lang=l;

	TYPES=LANGS.TYPES[l];
	ABILITIES=LANGS.ABILITIES[l];
	POKEMON_NAMES=LANGS.POKEMON_NAMES[l];
	STRINGS={};
	for(var str in LANGS.STRINGS){
		STRINGS[str]=localize(LANGS.STRINGS[str]);
	}

	/* reset GUI strings */
	var translatableElements=document.querySelectorAll('[data-translate]');
	for(var i=0;i<translatableElements.length;i++)
		translatableElements[i].innerHTML=localize(translatableElements[i].getAttribute('data-translate'));
	
	localizeOmnibarPlaceholder();
	
	/* prepare name slugs for search purposes */
	if(l===0){
		searchPokemonNamesHash=pokemonNamesHash;
	}else if(l<5){
		searchPokemonNamesHash=new Array();
		for(var i=0; i<allAvailablePokemon.length; i++){
			searchPokemonNamesHash[allAvailablePokemon[i]]=getPokeName(allAvailablePokemon[i]).slug();
			if(allAvailablePokemon[i]===29) /* nidoran */
				searchPokemonNamesHash[allAvailablePokemon[i]]+='-'+localize('female').slug();
			else if(allAvailablePokemon[i]===32)
				searchPokemonNamesHash[allAvailablePokemon[i]]+='-'+localize('male').slug();
		}
	}else{
		searchPokemonNamesHash=new Array();
		for(var i=0; i<allAvailablePokemon.length; i++){
			searchPokemonNamesHash[allAvailablePokemon[i]]=getPokeName(allAvailablePokemon[i]);
		}
	}
		
	/* translate dex nav */
	for(var i=0; i<allDexes.length; i++){
		if(allDexes[i].national){
			allDexes[i].dexNavButton.innerHTML=localize(allDexes[i].name).replace('%s', ROMAN_NUMBERS[allDexes[i].national-1]);
		}else{
			allDexes[i].dexNavButton.innerHTML=localize(allDexes[i].name);
		}
	}
	
	/* update dex results */
	if(currentDex)
		refreshSearchResults();
	

	/* translate game selector */
	var games=[];
	var nGames=GAME_ID==='swsh'?2:GAMES.length;
	for(var i=0; i<nGames; i++){
		games.push(localize(GAMES[i]));
	}
	el('current-game').innerHTML=games.join(' / ');
}
function localizeOmnibarPlaceholder(){
	if(currentDex && currentDex.national)
		el('search').placeholder=localize('search_in').replace('%s', localize('search_in_national'));
	else
		el('search').placeholder=localize('search_in').replace('%s', localize(REGION_NAME));
}


// credit: http://www.javascriptkit.com/javatutors/touchevents2.shtml
function addTouchEvents(){
	var THRESOLD=110, //required min distance traveled to be considered swipe
	RESTRAINT=50, // maximum distance allowed at the same time in perpendicular direction
	ALLOWED_TIME=300; // maximum time allowed to travel that distance

	var startX, startY,
	distX, distY,
	startTime;


	addEvent(el('block-top'), 'touchstart', function(evt){
		startX=evt.changedTouches[0].pageX,
		startY=evt.changedTouches[0].pageY,
		startTime=new Date().getTime(); // record time when finger first makes contact with surface
		//evt.preventDefault();
	});
	/*addEvent(el('block-top'), 'touchmove', function(evt){
		evt.preventDefault() // prevent scrolling when inside DIV
	}, false)*/
	addEvent(el('block-top'), 'touchend', function(evt){
		distX = evt.changedTouches[0].pageX - startX // get horizontal dist traveled by finger while in contact with surface
		distY = evt.changedTouches[0].pageY - startY // get vertical dist traveled by finger while in contact with surface

		if ((new Date().getTime() - startTime) <= ALLOWED_TIME){ // first condition for swipe met
			if (Math.abs(distX) >= THRESOLD && Math.abs(distY) <= RESTRAINT){ // 2nd condition for horizontal swipe met
				if(distX<0){// if dist traveled is negative, it indicates left swipe
					nextPokemon();
				}else if(distX>0){
					previousPokemon();
				}
			}
		}
		//evt.preventDefault()
	}, false);
}









function focusSearch(){
	el('search').focus();
	el('search').select();
}



function showMenu(doNotPush){
	document.body.className='menu-open';
	reqAnimFrame(goToTop);
	
	if(!doNotPush)
		pushState('menu');
}
function hideMenu(click){
	if(click)
		window.history.go(-1);
	else
		document.body.className='';
}
function toggleMenu(){
	if(/menu-open/.test(document.body.className))
		hideMenu(true);
	else
		showMenu();
}










var competitiveDatabaseLoaded=false;
addEvent(window,'load', function(evt){
	/* build all regional/national dexes and pokemon names hash */
	pokemonNamesHash=searchPokemonNamesHash=new Array(POKEMON.length);
	allAvailablePokemon=[];
	allDexes=[];
	for(var i=0; i<REGIONAL_DEXES.length; i++){
		allDexes.push(REGIONAL_DEXES[i]);
		REGIONAL_DEXES[i].national=false;
		if(typeof REGIONAL_DEXES[i].start !== 'number')
			REGIONAL_DEXES[i].start=1;
	}
	MAX_NATIONAL_BY_GENERATION[GENERATION]=MAX_NATIONAL;
	for(var i=0; i<GENERATION; i++){
		var start=MAX_NATIONAL_BY_GENERATION[i]+1;
		var ids=[];
		var genLength=MAX_NATIONAL_BY_GENERATION[i+1]-MAX_NATIONAL_BY_GENERATION[i];
		for(var j=0; j<genLength; j++){
			if(POKEMON[start+j]){
				ids.push(start+j);
				allAvailablePokemon.push(start+j);
				
				pokemonNamesHash[start+j]=getPokeNameEn(start+j).slug();
				if((start+j)===29) /* nidoran */
					pokemonNamesHash[start+j]+='-female';
				else if((start+j)===32)
					pokemonNamesHash[start+j]+='-male';
			}
		}
		
		if(NATIONAL_DEX && ids.length){
			allDexes.push({
				name:'national_dex',
				ids:ids,
				start:start,
				national:i+1
			});
		}
	}


	/* create dex selector */
	for(var i=0; i<allDexes.length; i++){
		allDexes[i].dexNavButton=document.createElement('li');
		allDexes[i].dexNavButton.className='clickable';
		allDexes[i].dexNavButton.innerHTML=allDexes[i].national? 'National Gen '+ROMAN_NUMBERS[allDexes[i].national-1]:'Regional '+(i+1);
		allDexes[i].dexNavButton.dexIndex=i;
		addEvent(allDexes[i].dexNavButton, 'click', function(){
			if(this.className==='clickable'){
				setDex(this.dexIndex);
				scrollHomeDexToTop();
			}
		});

		el('dex-navigator').children[0].appendChild(allDexes[i].dexNavButton);
	}
	el('dex-navigator').children[0].style.width=(200*10)+'px';

	/* startup, load settings */
	MinidexSettings.load();
	el('select-language').value=MinidexSettings.lang;
	setLanguage(MinidexSettings.lang);
	if(!MinidexSettings.donateWarning || MinidexSettings.donateWarning<((new Date()).getTime()-1296000000)){
		show('donate-warning');
	}


	addEvent(window,'resize', refreshDexNavScroll);


	
	/* calculate icon images columns */
	Icons.COLS=Icons.WIDTH/Icons.ICON_WIDTH;

	/* menu events */
	addEvent(el('overlay'), 'click', function(evt){
		hideMenu(true);
	});
	addEvent(el('overlay2'), 'click', stopPropagation);
	addEvent(el('button-menu'), 'click', toggleMenu);
	addEvent(el('select-language'), 'change', function(evt){
		setLanguage(this.selectedIndex);
		hideMenu(true);
		MinidexSettings.save();
	});

	/* add touch events */
	addTouchEvents();

	/* hide competitive */
	showCollection();

	/* add scroll event */
	addEvent(window,'scroll', scrollEvent);

	/* add keyboard events */
	addEvent(window,'keyup',function(evt){
		if(currentDistanceFromHome){
			if(evt.keyCode===37)
				previousPokemon();
			else if(evt.keyCode===39)
				nextPokemon()
			else if(evt.keyCode===27)
				forceGoToHome();
		}else if(document.activeElement!==el('search')){
			if(evt.keyCode===37){
				previousDex();
				scrollHomeDexToTop();
			}else if(evt.keyCode===39){
				nextDex();
				scrollHomeDexToTop();
			}
		}
	});
	addEvent(el('search'),'input',function(evt){
		searchFilters.text=MinidexSettings.lang<5?this.value.slug():this.value.toLowerCase().replace(/ /g,'-');
		if(!searchFilters.missing && SEARCH_FILTER_MISSING.test(searchFilters.text)){
			searchFilters.text=this.value=searchFilters.text.replace(SEARCH_FILTER_MISSING,'');
			createFilter('missing');
		}else if(!searchFilters.type && SEARCH_FILTER_TYPE.test(searchFilters.text)){
			var matches=searchFilters.text.match(SEARCH_FILTER_TYPE);
			if(matches){
				for(var i=0; i<TYPES.length && !searchFilters.type; i++){
					if(
						(MinidexSettings.lang<5 && (matches[1]===TYPES[i].slug() || matches[2]===TYPES[i].slug())) ||
						(MinidexSettings.lang>=5 && (matches[1]===TYPES[i].toLowerCase() || matches[2]===TYPES[i].toLowerCase()))
					){
						createFilter('type', i+1);
						searchFilters.text=this.value=searchFilters.text.replace(SEARCH_FILTER_TYPE,'');
					}
				}
			}
		}
		
		
		refreshSearchResults();
		if(document.documentElement.scrollTop>(el('dex-results').offsetTop-document.getElementsByTagName('nav')[0].offsetHeight))
			scrollHomeDexToTop();
	});
	addEvent(el('search'),'keyup',function(evt){
		if(evt.keyCode===13 && el('dex-results').children.length===1){
			el('dex-results').children[0].click();
			el('search').blur();
		}
	});
	addEvent(el('search'),'keydown',function(evt){
		if(!evt.repeat && evt.keyCode===8 && el('search').selectionStart===0 && el('dex-search-filters').lastChild){ /* backspace */
			removeFilter(el('dex-search-filters').lastChild.id.replace('filter-',''));
		}
	});
	/* add history events */
	addEvent(window,'popstate',function(evt){
		if(!evt.state || !evt.state.page){
			pushState('', true);
			currentDistanceFromHome=0;
		}else{
			pushState(evt.state.page, true);
			currentDistanceFromHome=evt.state.distanceFromHome;
		}
	});


	/* show/hide abilites */
	if(GENERATION>2 && GAME_ID!=='letsgo'){
		show('block-abilities');
	}else{
		hide('block-abilities');
	}

	/* create move info overlay */
	moveInfoOverlay=document.createElement('td');
	moveInfoOverlay.id='move-info-overlay';
	//document.body.appendChild(moveInfoOverlay);

	/* generate locations hash + find evolution locations (if available) */
	locationsHash={};
	for(var i=0; i<LOCATIONS.length; i++){
		locationsHash[LOCATIONS[i].name[0].slug()]=i;
		if(LOCATIONS[i].magneticField===true){
			locationsHash.magneticField=LOCATIONS[i];
		}else if(LOCATIONS[i].mossRock===true){
			locationsHash.mossRock=LOCATIONS[i];
		}else if(LOCATIONS[i].iceRock===true){
			locationsHash.iceRock=LOCATIONS[i];
		}
	}

	/* set dex */
	setDex(0);

	var mainCaughtButton=createCaughtButton(false);
	mainCaughtButton.id='caught-button';
	el('pokemon').children[0].appendChild(mainCaughtButton);

	
	
	
	
	
	
	
	if(MinidexSettings.checkUnknownLanguage()){
		/* if language couldn't be detected and there is no language saved in settings, show menu */
		showMenu();
		el('select-language').focus();
		MinidexSettings.save(); //force save so the nag won't appear next time

	}else if(/#(\d{1,3}([\w\-]+)?|[\w+\-]+)$/.test(window.location.href)){
		/* parse parameter */
		var url=window.location.href.substring(window.location.href.indexOf('#'));
		history.replaceState('', false, '#home');
		pushState(url);

	}else if(!IS_MOBILE){
		focusSearch();
	}
	
	
	
	
	
	/* after app is fully loaded, start downloading competitive database, which is the biggest file but not a priority */
	var script=document.createElement('script');
	script.type='text/javascript';
	script.src='./app/data/'+(GAME_ID==='letsgo'?GAME_ID:'gen'+GENERATION)+'_competitive.js';
	script.onload=function(){
		competitiveDatabaseLoaded=true;
		/* render learnsets if user is viewing a pokemon entry */
		if(currentPoke)
			renderAllLearnsets(currentPoke);
	}
	document.getElementsByTagName('head')[0].appendChild(script);
});