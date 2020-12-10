/* Minidex v20201207 - Marc Robledo 2013-2020 - http://www.marcrobledo.com/license */

/*
	to-do:
		additional translations (french, italian & japanaese)
		pokemon shadows title headers for every generation
		add pokemon base stats in learnsets.js? --> allow search bar to show uber pokemon?
		need to clean, scope and comment code (code is an unreadable mess, I can do it much better!)
*/



const IS_MOBILE=/android|blackberry|iphone|ip(a|o)d|opera m(ob|in)i|iemobile|wpdesktop|kindle|mobile|pocket|psp/i.test(navigator.userAgent||navigator.vendor||window.opera);

/* BitArray.js */
const BIT_ARRAY_SIZE=32;function BitArray(t){this.realLength=t;t%BIT_ARRAY_SIZE==0?(this._array=new Array(parseInt(t/BIT_ARRAY_SIZE)),this.length=t):(this._array=new Array(parseInt(t/BIT_ARRAY_SIZE)+1),this.length=this._array.length*BIT_ARRAY_SIZE),this.reset()}BitArray.prototype._getBitMask=function(t){return 1<<BIT_ARRAY_SIZE-t%BIT_ARRAY_SIZE-1},BitArray.prototype.reset=function(t){for(var r=0;r<this._array.length;r++)this._array[r]=0},BitArray.prototype.get=function(t){return!!(this._array[parseInt(t/BIT_ARRAY_SIZE)]&this._getBitMask(t))},BitArray.prototype.set=function(t){t<this.length&&(this._array[parseInt(t/BIT_ARRAY_SIZE)]|=this._getBitMask(t))},BitArray.prototype.unset=function(t){t<this.length&&(this._array[parseInt(t/BIT_ARRAY_SIZE)]&=~this._getBitMask(t))},BitArray.prototype.count=function(o,t){o=o||0;t=t||this.realLength;var c=0;for(var i=0;i<t;i++)c+=this.get(o+i);return c},BitArray.prototype.toggle=function(t){this.get(t)?this.unset(t):this.set(t)},BitArray.prototype.import=function(t){this.reset();for(var r=0;r<this._array.length&&r<t.length;r++)this._array[r]=t[r]>>>0};

/* String.slug */
(function(){var a=[/[\xc0\xc1\xc2\xc4\xe0\xe1\xe2\xe4]/g,"a",/[\xc8\xc9\xca\xcb\xe8\xe9\xea\xeb]/g,"e",/[\xcc\xcd\xce\xcf\xec\xed\xee\xef]/g,"i",/[\xd2\xd3\xd4\xd6\xf2\xf3\xf4\xf6]/g,"o",/[\xd9\xda\xdb\xdc\xf9\xfa\xfb\xfc]/g,"u",/[\xd1\xf1]/g,"n",/[\xc7\xe7]/g,"c",/[\xc6\xe6]/g,"ae",/\x26/g,"and",/\u20ac/g,"euro",/[^\w\- ]/g,"",/( |_)/g,"-",/-+/g,"-",/^-|-$/g,""];String.prototype.slug||(String.prototype.slug=function(){for(var b=this.toLowerCase().replace(/&.*?;/g,''),c=0;c<a.length;c+=2)b=b.replace(a[c],a[c+1]);return b})}());


function el(e){return document.getElementById(e)}
function show(e){el(e).style.display=(/sprite/.test(el(e).className))?'inline-block':'block'}
function hide(e){el(e).style.display='none'}
function show2(e){el(e).style.visibility='visible'}
function hide2(e){el(e).style.visibility='hidden'}
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
function getPokemonDexIndex(nationalId, regionalDexIndex){
	if(!nationalMode && regionalDexIndex){
		var index=currentDex.indexOf(nationalId, dexRegionalNumerationIndexes[regionalDexIndex]);
		if(index===-1)
			return getPokemonDexIndex(nationalId, regionalDexIndex-1);

		return index;
	}
	return currentDex.indexOf(nationalId)
}
function getPokemonDexIndexRegional(nationalId){
	return dexRegional.indexOf(nationalId);
}
function getCurrentDexNumber(nationalId, regionalDexIndex){
	if(nationalMode){
		return formatDexNumber(nationalId);
	}else{
		//regionalDexIndex=regionalDexIndex || 1;
		regionalDexIndex=regionalDexIndex || 0;

		if(regionalDexIndex===0 && GENERATION===5)
			return formatDexNumber(REGIONAL_DEXES[regionalDexIndex][1].indexOf(nationalId));
		else if(regionalDexIndex===0 || (GAME_ID==='xy' && regionalDexIndex<3))
			return formatDexNumber(REGIONAL_DEXES[regionalDexIndex][1].indexOf(nationalId)+1);
		else if(GAME_ID==='swsh'){
			if(regionalDexIndex===1 && REGIONAL_DEXES[regionalDexIndex][1].indexOf(nationalId)+1<=211)
				return 'A'+formatDexNumber(REGIONAL_DEXES[regionalDexIndex][1].indexOf(nationalId)+1);
			else if(regionalDexIndex===2 && REGIONAL_DEXES[regionalDexIndex][1].indexOf(nationalId)+1<=210)
				return 'C'+formatDexNumber(REGIONAL_DEXES[regionalDexIndex][1].indexOf(nationalId)+1);
		}

		return '---';
	}
}



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

function goToTop(noSmooth){
	if(document.body.scroll && !noSmooth)
		document.body.scroll({top:0, behavior:'smooth'});
	else
		document.body.scrollTop=0
}
function scrollHomeDexToTop(){
	if(document.body.scroll)
		document.body.scroll({top:el('dex-results').offsetTop-document.getElementsByTagName('nav')[0].offsetHeight, behavior:'smooth'});
	else
		document.body.scrollTop=el('dex-results').offsetTop-document.getElementsByTagName('nav')[0].offsetHeight
}



function setWindowTitle(title){document.title=title}
function setAndroidColor(c){
	//document.body.style.backgroundColor=c;
	el('mobile-header-chrome').content=el('mobile-header-safari').content=c;
}












var currentDistanceFromHome=0;
function pushState(url,doNotPush){
	url=url.toLowerCase().replace(/[^\w\-]/g,'');

	if(document.body.className==='menu-open')
		hideMenu();


	var nationalId=pokemonNameById.indexOf(url.replace(/-\d+$/,''));
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

		if(homeScroll)
			reqAnimFrame(function(){document.body.scrollTop=homeScroll;});
		else
			goToTop();

		setAndroidColor('#202b37');
	}



	if(!doNotPush && currentDistanceFromHome<49){ /* firefox and chrome (and probably others) have a 50 history limit, if limit is reached, do not push any more states so home screen can  */
		currentDistanceFromHome++;
		//history.pushState({page:url,distanceFromHome:currentDistanceFromHome}, false, url);
		history.pushState({page:url,distanceFromHome:currentDistanceFromHome}, false, '#'+url);
	}
	
	reqAnimFrame(refreshCurrentHeaders);
}





const ROMAN_NUMBERS=['I','II','III','IV','V','VI','VII','VIII'];
const MAX_NATIONAL_BY_GENERATION=[0,151,251,386,493,649,721,809,893];

var currentPoke,currentForm=0;
var currentDex, dexRegional, dexNational, regionalMode, nationalMode, dexRegionalNumerationIndexes, currentRegionalNumeration;
var homeScroll=0;
var moveInfoOverlay;
var locationsHash={};
var pokemonNameById;





function showPokemon(id,form){
	if(!(id>=1 && id<=MAX_NATIONAL) || (currentPoke===id && currentForm===form))
		return false;
	currentPoke=id;
	currentForm=form;

	hide('home');
	hide('location');
	show('pokemon');
	el('caught-button').regionalIndex=getPokemonDexIndexRegional(id);
	if(el('caught-button').regionalIndex!==-1){
		refreshCaughtButton(el('caught-button'));
	}else{
		el('caught-button').className='sprite caught0';
	}


	var poke=parsePokemon(id,form);


	if(!nationalMode){
		if(dexRegional.indexOf(id)!==-1){
			/* if regional dex is different, guess new regional numeration */
			var index=getPokemonDexIndex(id, currentRegionalNumeration);
			for(var i=dexRegionalNumerationIndexes.length-1; i>=0; i--){
				if(index>=dexRegionalNumerationIndexes[i]){
					currentRegionalNumeration=i;
					break;
				}
			}
		}else{
			for(var i=1; i<MAX_NATIONAL_BY_GENERATION.length; i++){
				if(id<=MAX_NATIONAL_BY_GENERATION[i]){
					setNationalDex(i);
					break;
				}
			}
		}
	}
	var pokeNumber=getCurrentDexNumber(id, currentRegionalNumeration);
	
	/* set window title */
	setWindowTitle('#'+pokeNumber+' '+poke.name);

	el('pokemon-title').innerHTML='<span class="mono">#'+pokeNumber+'</span> '+poke.nameHTML;

	/* set big image */
	empty('dex-img');
	el('dex-img').appendChild(generateIcon(id,form,Icons.IS_BIG? 3:4));

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
	for(var i=0; i<MORE_INFO.length; i++){
		var moreInfo=MORE_INFO[i].getInfo(currentPoke, totalEncounters);
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
			a.innerHTML+=localize(MORE_INFO[i].title);
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
	if(typeof navigator.share!=='undefined' && navigator.canShare()){
		var tr=document.createElement('tr');
		var a=document.createElement('a');
		a.target='_blank';
		a.href='#'+pokemonNameById[currentPoke];
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










function parseExclusiveGames(gameId, games, availability){
	var spans=document.createElement('span');
	spans.className='games games-'+gameId;

	if(!availability)
		return spans;

	var titles=[]
	for(var i=0; i<games.length; i++){
		if(availability & (1 << i)){
			spans.innerHTML+='<span class="game game-'+gameId+i+'"></span>';
			titles.push(localize(games[i]));
		}
	}
	spans.title=localize('exclusively_in')+' '+titles.join('/');
	return spans
}


function parseEncounterMethod(method, pokeId){
	pokeId=getPokemonId(pokeId);
	if(method==='revive_fossil'){
		return localize(method).replace('%s', STRINGS['fossil_'+pokeId]);
	}else if(typeof method==='string'){
		return localize(method);
	}else{
		var str='';

		for(var i=0; i<method.length; i++){
			str+=' + '+localize(method[i]);
			if(typeof method[i]==='string'){
				if(method[i]==='trade' || method[i]==='horde_with' || method[i]==='sos_ally'){
					i++;
					str+=generateIconClickable(getPokemonId(method[i]),getAlternateForm(method[i])).outerHTML;
				}
			}
		}
		return str.replace(' + ','');
	}
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
		if(GENERATION===2 || GENERATION===4){
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
		td2.innerHTML=parseEncounterMethod(encounters[i][2],encounters[i][0]);
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
				var currentMethod=parseEncounterMethod(encounters[i][2], encounters[i][0]);
				if(lastMethod!==currentMethod){
					lastMethod=currentMethod;
					
					var tr=createElement('tr');
					var td0=document.createElement('td');
					td0.className='text-center';
					var encounterMethodHeader=document.createElement('div');
					
					encounterMethodHeader.innerHTML=localize(currentMethod);
					
					td0.appendChild(encounterMethodHeader);
					tr.appendChild(td0);
					
					currentTable.appendChild(tr);
				}
				
				var div=createElement('div');
				div.className='grid-encounter';
				var div0=document.createElement('div');
				var div1=document.createElement('div');

				div.appendChild(generateIconClickable(getPokemonId(encounters[i][0]),getAlternateForm(encounters[i][0]),1));

				div0.innerHTML=localize(POKEMON_NAMES[getPokemonId(encounters[i][0])] || POKEMON[getPokemonId(encounters[i][0])][0]);
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
				td1.innerHTML=localize(POKEMON_NAMES[getPokemonId(encounters[i][0])] || POKEMON[getPokemonId(encounters[i][0])][0]);
				td2.innerHTML=parseEncounterMethod(encounters[i][2],encounters[i][0]);
				td3.appendChild(parseExclusiveGames(GAME_ID, GAMES, encounters[i][1]));
				td4.innerHTML=parseRateEncounter(encounters[i][3]);
				
				tr.appendChild(td0);
				tr.appendChild(td1);
				tr.appendChild(td2);
				tr.appendChild(td3);
				tr.appendChild(td4);

				currentTable.appendChild(tr);
			}

			var regionalIndex=getPokemonDexIndexRegional(getPokemonId(encounters[i][0]));
			if(regionalIndex!==-1){
				if(MinidexSettings.caughtDatabase.get(regionalIndex)){
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






function padMachine(number){
	return number<10?'0'+number:number;
}
function getMachine(moveIndex){		
	if(GENERATION===6 && (moveIndex===249 || moveIndex===290))
		return '<small>'+localize('tm')+'</small>94';

	else if(GENERATION===4 && (moveIndex===432 || moveIndex===250))
		return '<small>'+localize('hm')+'</small>05';

	else if(GENERATION>=1 && GENERATION<=6 && HMs.indexOf(moveIndex)>0)
		return '<small>'+localize('hm')+'</small>0'+HMs.indexOf(moveIndex);

	else if(GENERATION===8 && TRs.indexOf(moveIndex)>=0)
		return '<small>'+localize('tr')+'</small>'+padMachine(TRs.indexOf(moveIndex));

	else
		return '<small>'+localize('tm')+'</small>'+padMachine(TMs.indexOf(moveIndex));
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
function renderLearnsets2(nationalId, form, learnset, type, exclusiveThird, exclusiveRemake){
	var table;

	var headerTitle='';
	if(typeof form==='number' && typeof POKEMON[nationalId][5][form]!=='undefined')
		headerTitle+=' ('+localize(POKEMON[nationalId][5][form][0])+')';


	if(type==='levelup')
		table=createLearnsetTable(type, form, localize('learnset_levelup')+' '+(GAME_ID==='letsgo'?'Let\'s go!':'Gen '+ROMAN_NUMBERS[GENERATION-1])+headerTitle);
	else if(el('table-moves-'+type+'-'+form))
		table=el('table-moves-'+type+'-'+form);
	else if(type==='machine' && GENERATION>=7)
		table=createLearnsetTable(type, form, localize('learnset_machine'+GENERATION)+headerTitle);
	else
		table=createLearnsetTable(type, form, localize('learnset_'+type)+headerTitle);


	var field=type.charAt(0);
	if(exclusiveThird)
		field+='3';
	if(exclusiveRemake)
		field+='r';

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

				if(typeof moves[i][1] ==='number'){
					var span=createElement('div');
					if(typeof moves[i][2] ==='number' || typeof moves[i][3] ==='number')
						span.appendChild(parseExclusiveGames(LEARNSET_GAMES_ID, LEARNSET_GAMES, 3));
					if(moves[i][1]===0)
						span.innerHTML+='Evo.';
					else if(moves[i][1]===1)
						span.innerHTML+='-';
					else
						span.innerHTML+=moves[i][1];
					td0.appendChild(span);
				}
				if(typeof moves[i][2] ==='number'){
					var span=createElement('div');
					span.appendChild(parseExclusiveGames(LEARNSET_REMAKES_ID, LEARNSET_REMAKES, 3));
					if(moves[i][2]===0)
						span.innerHTML+='Evo.';
					else if(moves[i][2]===1)
						span.innerHTML+='-';
					else
						span.innerHTML+=moves[i][2];
					td0.appendChild(span);
				}
				if(typeof moves[i][3] ==='number'){
					var span=createElement('div');
					span.appendChild(parseExclusiveGames(LEARNSET_GAMES_ID, LEARNSET_GAMES, 4));
					if(moves[i][3]===0)
						span.innerHTML+='Evo.';
					else if(moves[i][3]===1)
						span.innerHTML+='-';
					else
						span.innerHTML+=moves[i][3];
					td0.appendChild(span);
				}
				td1.appendChild(createExternalLink(localize(MOVES[moves[i][0]][0]), getMoveLink(move)));
			}else{
				move=moves[i];

				td1.appendChild(createExternalLink(localize(MOVES[moves[i]][0]), getMoveLink(move)));

				if(type==='machine'){
					td0.innerHTML=getMachine(moves[i]);

					/* fix rb mewtwo */
					if(GENERATION===1 && move===6 && nationalId===150){
						td1.appendChild(parseExclusiveGames(LEARNSET_GAMES_ID, LEARNSET_GAMES, 3));
					}else if(GENERATION===4){
						/* fix gen4 HM05 */
						if(move===432)
							td1.appendChild(parseExclusiveGames(LEARNSET_GAMES_ID, LEARNSET_GAMES, 7));
						else if(move===250)
							td1.appendChild(parseExclusiveGames(LEARNSET_REMAKES_ID, LEARNSET_REMAKES, 3));
					}else if(GENERATION==6){
						/* fix gen6 TM94 */
						if(move===249)
							td1.appendChild(parseExclusiveGames(LEARNSET_GAMES_ID, LEARNSET_GAMES, 7));
						else if(move===290)
							td1.appendChild(parseExclusiveGames(LEARNSET_REMAKES_ID, LEARNSET_REMAKES, 3));
					}
				}else if(type==='egg' && GENERATION===2 && ((move===211 && (nationalId===16 || nationalId===83 || nationalId===142)) || (move===230 && nationalId===46))){
					/* fix gs exclusive eggs */
					td1.appendChild(parseExclusiveGames(LEARNSET_GAMES_ID, LEARNSET_GAMES, 3));
				}


				if(exclusiveThird)
					td1.appendChild(parseExclusiveGames(LEARNSET_GAMES_ID, LEARNSET_GAMES, 4));
				if(exclusiveRemake)
					td1.appendChild(parseExclusiveGames(LEARNSET_REMAKES_ID, LEARNSET_REMAKES, 3));
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

	if(!exclusiveThird && !exclusiveRemake){
		if(type!=='levelup'){
			field=type.charAt(0);
			if(typeof learnset[field+'3r']!=='undefined')
				renderLearnsets2(nationalId, form, learnset, type, true, true);
			if(typeof learnset[field+'3']!=='undefined')
				renderLearnsets2(nationalId, form, learnset, type, true, false);
			if(typeof learnset[field+'r']!=='undefined')
				renderLearnsets2(nationalId, form, learnset, type, false, true);
		}

		if(typeof learnset.forms !== 'undefined'){
			for(var i=0; i<learnset.forms.length; i++)
				if(typeof learnset.forms[i] !== 'undefined')
					renderLearnsets2(nationalId, i, learnset.forms[i], type, false, false);
		}
		
	}
}
function renderAllLearnsets(nationalId){
	var learnset=LEARNSETS[nationalId];

	if(typeof learnset === 'undefined')
		return false;

	renderLearnsets2(nationalId, false, learnset, 'levelup', false, false);
	renderLearnsets2(nationalId, false, learnset, 'machine', false, false);
	if(GENERATION>1 && GAME_ID!=='letsgo')
		renderLearnsets2(nationalId, false, learnset, 'egg', false, false);
	renderLearnsets2(nationalId, false, learnset, 'tutor', false, false);
	renderLearnsets2(nationalId, false, learnset, 'change', false, false);
	renderLearnsets2(nationalId, false, learnset, 'special', false, false);
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
	if(MinidexSettings.lang===4)
		return 'https://www.wikidex.net/wiki/'+LANGS.ABILITIES[4][abilityIndex].replace(/ /g, '_')
	else if(MinidexSettings.lang===6)
		return 'https://wiki.52poke.com/wiki/'+LANGS.ABILITIES[6][abilityIndex].replace(/ /g, '_')+'（特性）'
	else
		return 'https://bulbapedia.bulbagarden.net/wiki/'+LANGS.ABILITIES[0][abilityIndex].replace(/ /g, '_')+'_(Ability)';

}
function getMoveLink(moveIndex){
	if(MinidexSettings.lang===4)
		return 'https://www.wikidex.net/wiki/'+(MOVES[moveIndex][0][4] || MOVES[moveIndex][0][0]).replace(/ /g, '_')
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
		homeScroll=window.scrollY;

	if(typeof this.regionalDexIndex==='number')
		currentRegionalNumeration=this.regionalDexIndex;

	pushState(this.href.substring(this.href.indexOf('#')));
}
function generatePokemonLink(id,form){
	if(pokemonNameById[id]){
		if(form)
			return '#'+pokemonNameById[id]+'-'+form
		else
			return '#'+pokemonNameById[id]
	}else
		return '#home';
}
function generateIconClickable(id,form){
	var a=document.createElement('a');

	a.title=localize(POKEMON_NAMES[getPokemonId(id)] || POKEMON[getPokemonId(id)][0])
	a.href=generatePokemonLink(id, form);

	a.appendChild(generateIcon(id, form,1));
	a.children[0].className+=' clickable';

	a.addEventListener('click', _clickLink, false);

	return a
}


function generateIcon(id,form,size/*,fixedSize*/){
	form=form || 0;

	var span=createElement('span',{class:Icons.IS_BIG?'poke-icon big':'poke-icon'});

	var pos=Icons.ICONS[id];
	pos=pos || 0;


	if(form){
		pos+=form;

		if(id===25 && GENERATION===7 && GAME_ID!=='letsgo') /*gen 7 has no cosplay pikachu */
			pos+=5;
		else if(id===710 || id===711 || id===744 || id===854) // Pumpkaboo && Gourgeist, Rockruff, Sinistea
			pos-=form;
		else if(id===841) //Flapple
			pos++;
		else if(id===892) //Urshifu
			pos--;
		else if((id===6 || id===150) && GAME_ID==='letsgo') //Charizard/Mewtwo Megas Let's go!
			pos=pos-form+1;
	}


	span.style.backgroundImage='url('+Icons.IMAGE+')';
	span.style.backgroundPosition='-'+((pos%Icons.COLS)*Icons.ICON_WIDTH*size)+'px -'+(parseInt(pos/Icons.COLS)*Icons.ICON_HEIGHT*size)+'px';
	//span.style.background='url('+Icons.IMAGE+') -'+((pos%Icons.COLS)*Icons.ICON_WIDTH*size)+'px -'+(parseInt(pos/Icons.COLS)*Icons.ICON_HEIGHT*size)+'px';

	span.style.backgroundSize=(Icons.WIDTH*size)+'px '+(Icons.HEIGHT*size)+'px';
	span.style.width=(Icons.ICON_WIDTH*size)+'px';
	span.style.height=(Icons.ICON_HEIGHT*size)+'px';

	return span
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
			span.innerHTML=localize(method)+' &raquo;';

		if(/%s/.test(span.innerHTML)){
			var methodString=POKEMON[id][4][i][2];

			if(method==='levelup_move')
				methodString=localize(MOVES[methodString][0]);
			else if(method==='trade_for' || method==='breed_with')
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

	var completeId=getCurrentDexNumber(id, regionalMode-1);

	var name=POKEMON_NAMES[id] || POKEMON[id][0];
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
	if(nationalMode && nationalMode>1)
		setNationalDex(nationalMode-1);
	else if(nationalMode)
		setRegionalDex(REGIONAL_DEXES.length);
	else if(regionalMode>1)
		setRegionalDex(regionalMode-1);
}
function nextDex(){
	if(nationalMode && nationalMode<GENERATION)
		setNationalDex(nationalMode+1);
	else if(regionalMode===REGIONAL_DEXES.length && NATIONAL_DEX)
		setNationalDex(1);
	else if(!nationalMode && regionalMode<REGIONAL_DEXES.length)
		setRegionalDex(regionalMode+1);
}


function refreshDexNavScroll(selectedDex){
	var dexesWidth=el('dex-navigator').getBoundingClientRect().width;
	var dexElementWidth=el('dex-navigator').children[0].children[0].getBoundingClientRect().width;

	el('dex-navigator').children[0].style.left=parseInt((dexesWidth/2)-(dexElementWidth/2)-(selectedDex+0)*dexElementWidth)+'px';
	
}
function refreshDexNav(){	
	var nDexes=REGIONAL_DEXES.length;
	if(NATIONAL_DEX)
		nDexes+=GENERATION;
	var selectedDex;
	if(nationalMode)
		selectedDex=REGIONAL_DEXES.length+nationalMode-1;
	else
		selectedDex=regionalMode-1;

	for(var i=0; i<nDexes; i++){
		el('dex-navigator').children[0].children[i].className='clickable';
	}
	el('dex-navigator').children[0].children[selectedDex].className='selected';

	refreshDexNavScroll(selectedDex);
}
function setRegionalDex(newDex){
	var forceRefreshSearchResults=nationalMode && searchFilters.text;

	if(currentDex!==dexRegional){
		currentDex=dexRegional;
		nationalMode=0;
	}

	if(regionalMode!==newDex){
		regionalMode=newDex;
		currentRegionalNumeration=newDex-1;

		localizeOmnibarPlaceholder();

		refreshDexNav();
		refreshProgressBar();
	}

	if(forceRefreshSearchResults){
		refreshSearchResults();
	}else if(!searchFilters.text){
		homeDexReset();
		for(var i=0; i<REGIONAL_DEXES[newDex-1][1].length; i++)
			homeDexAdd(REGIONAL_DEXES[newDex-1][1][i], newDex-1);
	}
}
function setNationalDex(newDex){
	var forceRefreshSearchResults=regionalMode && searchFilters.text;
	if(currentDex!==dexNational){
		currentDex=dexNational;
		regionalMode=0;
	}

	if(nationalMode!==newDex){
		nationalMode=newDex;
		currentRegionalNumeration=0;

		localizeOmnibarPlaceholder();

		refreshDexNav();
		refreshProgressBar();
	}

	if(forceRefreshSearchResults){
		refreshSearchResults();
	}else if(!searchFilters.text){
		homeDexReset();
		var genPokemon=generateRange(MAX_NATIONAL_BY_GENERATION[nationalMode-1]+1, MAX_NATIONAL_BY_GENERATION[nationalMode]);
		for(var i=0; i<genPokemon.length; i++)
			homeDexAdd(genPokemon[i], 0);
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
	return !nationalMode && /^(locations?|routes|places?|zones?|lugar|lugares|sitios?|localizacion|localizaciones|rutas|zonas?)?$/.test(searchFilters.text);
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



function refreshCaughtButton(button){
	if(MinidexSettings.caughtDatabase.get(button.regionalIndex))
		button.className='sprite clickable caught1';
	else
		button.className='sprite clickable caught0';
}
function _clickCaughtButton(evt){
	preventDefault(evt);
	stopPropagation(evt);
	if(this.regionalIndex!==-1){
		MinidexSettings.caughtDatabase.toggle(this.regionalIndex);
		refreshCaughtButton(this);

		if(GAME_ID==='swsh' && this.regionalIndex<(400+211)){ /* to-do: crown of tundra: how many pokemon */
			/* some original Galar dex can reappear in isle of armor/crown of tundra dexes, toggle all coincidences for progress bar percentage counting purposes */
			var newValue=MinidexSettings.caughtDatabase.get(this.regionalIndex);

			for(var i=1; i<3; i++){
				var regionalIndex=getPokemonDexIndex(REGIONAL_DEXES[0][1][this.regionalIndex], i);
				if(regionalIndex!==-1){
					if(newValue)
						MinidexSettings.caughtDatabase.set(regionalIndex);
					else
						MinidexSettings.caughtDatabase.unset(regionalIndex);
				}
			}
			
			if(this!==el('caught-button') && !nationalMode && el('search').value){
				var maxMatches=3;
				for(var i=0; i<el('dex-results').children.length && maxMatches; i++){
					if(this!==el('dex-results').children[i].children[2] && this.regionalIndex===el('dex-results').children[i].children[2].regionalIndex){
						el('dex-results').children[i].children[2].className=this.className;
						maxMatches--;
					}
				}
			}
		}


		if(this===el('caught-button')){
			var maxMatches=1;
			if(GAME_ID==='swsh')
				maxMatches=3; //isle of armor and crown tundra dexes can have repeat pokemon

			for(var i=0; i<el('dex-results').children.length && maxMatches; i++){
				if(el('dex-results').children[i].children.length===3 && this.regionalIndex===el('dex-results').children[i].children[2].regionalIndex){
					el('dex-results').children[i].children[2].className=this.className;
					maxMatches--;
				}
			}
		}

		if(searchFilters.missing){
			// to-do: remove item from home dex
		}
		refreshProgressBar();
		MinidexSettings.save();
	}
}
function createCaughtButton(regionalIndex){
	var i=document.createElement('i');
	addEvent(i, 'click', _clickCaughtButton);
	if(typeof regionalIndex==='undefined'){
		addEvent(i, 'click', function(evt){
			for(var i=0; i<el('dex-results').children.length; i++){
				if(el('dex-results').children[i].children.length===3 && this.regionalIndex===el('dex-results').children[i].children[2].regionalIndex)
					refreshCaughtButton(el('dex-results').children[i].children[2]);
			}
		});		
	}else{
		i.regionalIndex=regionalIndex;
		refreshCaughtButton(i);
	}
	return i;
}


function refreshProgressBar(){
	var percentage;
	if(nationalMode){
		percentage=(
			MinidexSettings.caughtDatabase.count()
			/
			dexRegional.length
			*100
		);
	}else{
		percentage=(
			MinidexSettings.caughtDatabase.count(dexRegionalNumerationIndexes[regionalMode-1], REGIONAL_DEXES[regionalMode-1][1].length)
			/
			REGIONAL_DEXES[regionalMode-1][1].length
			*100
		);
	}
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
		caughtDatabase:null,

		save:function(){
			if(IS_STORAGE_AVAILABLE){
				localStorage.setItem('minidex', JSON.stringify({lang:this.lang,donateWarning:this.donateWarning}));
				localStorage.setItem('minidex-'+GAME_ID, JSON.stringify(this));
			}
		},
		load:function(){
			var allRegionalDexSize=0;
			for(var i=0; i<REGIONAL_DEXES.length; i++)
				allRegionalDexSize+=REGIONAL_DEXES[i][1].length;
			this.caughtDatabase=new BitArray(allRegionalDexSize);

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
					if(typeof loadedSettings.caughtDatabase==='object')
						this.caughtDatabase.import(loadedSettings.caughtDatabase._array)
				}
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
			if(!MinidexSettings.caughtDatabase.get(getPokemonDexIndexRegional(getPokemonId(encounters[i][0]))))
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
	if(checkIfLocationAllCaught(LOCATIONS[locationIndex].encounters))
		i.className='sprite location1';
	else
		i.className='sprite location0';
	a.appendChild(i);

	el('dex-results').appendChild(a);
}
function homeDexAdd(nationalId, regionalDexIndex){
	if(!POKEMON[nationalId])
		return 0;
	if(searchFilters.missing){
		if(MinidexSettings.caughtDatabase.get(getPokemonDexIndexRegional(nationalId)))
			return 0;
	}
	if(searchFilters.type){
		if(!(POKEMON[nationalId][1]===searchFilters.type-1 || (typeof POKEMON[nationalId][1]==='object' && POKEMON[nationalId][1].indexOf(searchFilters.type-1)!==-1)))
			return 0;
	}


	var form=0;
	if(!nationalMode && typeof getDefaultForm==='function')
		form=getDefaultForm(nationalId);

	var a=document.createElement('a');
	a.href=generatePokemonLink(nationalId, form);
	a.nationalId=nationalId;

	addEvent(a, 'click', _clickLink);

	a.appendChild(generateIcon(nationalId, form, 2));
	a.appendChild(createElement('span',{html:'<span class="mono">'+getCurrentDexNumber(nationalId, regionalDexIndex)+'</span> <span>'+getPokeName(nationalId)+'</span>'}));

	if(typeof regionalDexIndex==='number')
		a.regionalDexIndex=regionalDexIndex;

	var caughtIndex=dexRegional.indexOf(nationalId);
	if(caughtIndex!==-1)
		a.appendChild(createCaughtButton(caughtIndex));

	el('dex-results').appendChild(a);
	
	return 1
}
function refreshSearchResults(){
	var q=searchFilters.text.replace(/^0+/,'');
	
	if(q){
		homeDexReset();

		if(searchLocations()){
			for(var i=0; i<LOCATIONS.length; i++){
				homeLocationAdd(LOCATIONS[i].name[0].slug());
			}
		}else{
			if(/^\d+$/.test(q)){
				q=parseInt(q);

				if(nationalMode){
					if(q && POKEMON[q])
						homeDexAdd(q);
				}else{
					if(GENERATION!==5)
						q--;

					for(var i=0; i<REGIONAL_DEXES.length; i++)
						homeDexAdd(REGIONAL_DEXES[i][1][q], i);
				}
			}else if(nationalMode){
				var queryRegex=new RegExp(q);

				var results=0;
				/*var start=MAX_NATIONAL_BY_GENERATION[nationalMode-1]+1;
				var end=MAX_NATIONAL_BY_GENERATION[nationalMode]+1;
				if(end>dexNational.length)
					end=dexNational.length;
				for(var i=start; i<end && results<10; i++){*/
				for(var i=0; i<dexNational.length && results<10; i++){
					if(queryRegex.test(pokemonNameById[dexNational[i]]) || (POKEMON_NAMES[dexNational[i]] && (queryRegex.test(POKEMON_NAMES[dexNational[i]].slug()) || queryRegex.test(POKEMON_NAMES[dexNational[i]])))){
						results+=homeDexAdd(dexNational[i], 0);
					}
				}
			}else{
				var queryRegex=new RegExp(q);

				var results=0;
				for(var i=0; i<REGIONAL_DEXES.length && results<10; i++){
					var dexSearch=REGIONAL_DEXES[i][1];
					for(var j=0; j<dexSearch.length && results<10; j++){
						if(queryRegex.test(pokemonNameById[dexSearch[j]]) || (POKEMON_NAMES[dexSearch[j]] && (queryRegex.test(POKEMON_NAMES[dexSearch[j]].slug()) || queryRegex.test(POKEMON_NAMES[dexSearch[j]])))){
							results+=homeDexAdd(dexSearch[j], i);
						}
					}
				}
				
				//search region locations
				for(var i=0; i<LOCATIONS.length && results<20; i++){
					var locationSlug=MinidexSettings.lang<5?localize(LOCATIONS[i].name).slug():localize(LOCATIONS[i].name);
					if(queryRegex.test(locationSlug)){
						homeLocationAdd(LOCATIONS[i].name[0].slug());
						results++;
					}
				}
			}
		}

		//hide('dex-navigator');
	}else{
		if(nationalMode)
			setNationalDex(nationalMode);
		else
			setRegionalDex(regionalMode);

		//show('dex-navigator');
	}
}


function forceGoToHome(){
	if(currentDistanceFromHome && !currentPoke) /* location */
		window.history.go(-1);
	else if(currentDistanceFromHome>0)
		window.history.go(-currentDistanceFromHome);
	
	if(el('search').value && !searchFilters.missing && !searchFilters.type)
		reqAnimFrame(focusSearch);
}
function nextPokemon(){
	var index=getPokemonDexIndex(currentPoke, currentRegionalNumeration);
	if(index<(currentDex.length-1) && index!==-1){
		var nextPage='#'+pokemonNameById[currentDex[index+1]];
		
		if(!nationalMode && typeof getDefaultForm==='function'){
			var form=getDefaultForm(currentDex[index+1]);
			if(form)
				nextPage+='-'+form;
		}
		pushState(nextPage);
	}
}
function previousPokemon(){
	var index=getPokemonDexIndex(currentPoke, currentRegionalNumeration);
	if(index>0){
		var nextPage='#'+pokemonNameById[currentDex[index-1]];
		
		if(!nationalMode && typeof getDefaultForm==='function'){
			var form=getDefaultForm(currentDex[index-1]);
			if(form)
				nextPage+='-'+form;
		}
		pushState(nextPage);
	}
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
	
	if(typeof nationalMode==='number' || typeof regionalMode==='number')
		localizeOmnibarPlaceholder();
	

	if(el('dex-navigator').children[0].children.length){
		/* create dex selector */
		for(var i=0; i<REGIONAL_DEXES.length; i++){
			el('dex-navigator').children[0].children[i].innerHTML=localize(REGIONAL_DEXES[i][0]);
		}
		if(NATIONAL_DEX){
			for(var i=0; i<GENERATION; i++){
				el('dex-navigator').children[0].children[REGIONAL_DEXES.length+i].innerHTML=localize('national_dex').replace('%s', ROMAN_NUMBERS[i]);
			}
		}
	}
	
	/* update dex results */
	for(var i=0; i<el('dex-results').children.length; i++){
		var a=el('dex-results').children[i];
		
		if(typeof a.nationalId==='number')
			a.children[1].children[1].innerHTML=getPokeName(a.nationalId);
		else if(typeof a.locationIndex==='number')
			a.children[0].innerHTML=localize(LOCATIONS[a.locationIndex].name);
	}
	

	/* translate game selector */
	var games=[];
	var nGames=GAME_ID==='swsh'?2:GAMES.length;
	for(var i=0; i<nGames; i++){
		games.push(localize(GAMES[i]));
	}
	el('current-game').innerHTML=games.join(' / ');
}
function getRegionName(){
	if(MinidexSettings.lang===6){
		if(GENERATION===1 || GAME_ID==='frlg' || GAME_ID==='letsgo')
			return '关都地区';
		else if(GENERATION===2||GAME_ID==='hgss')
			return '城都地区';
		else if(GAME_ID==='rse'||GAME_ID==='oras')
			return '丰缘地区';
		else if(GAME_ID==='dppt')
			return '神奥地区';
		else if(GENERATION===5)
			return '合众地区';
		else if(GAME_ID==='xy')
			return '卡洛斯地区';
		else if(GENERATION===7)
			return '阿罗拉地区';
		else if(GENERATION===8)
			return '伽勒尔地区';
	}else if(GAME_ID==='xy'){
		return 'Kalos';
	}else if(GENERATION===5){
		if(MinidexSettings.lang===1)
			return 'Unys';
		else if(MinidexSettings.lang===2)
			return 'Einall';
		else if(MinidexSettings.lang===3)
			return 'Unima';
		else if(MinidexSettings.lang===4)
			return 'Teselia';
		return 'Unova';
	}else{
		return REGIONAL_DEXES[0][0][0].replace(' Pokédex', '');
	}
}
function localizeOmnibarPlaceholder(){
	if(nationalMode)
		el('search').placeholder=localize('search_in').replace('%s', 'Gen. '+ROMAN_NUMBERS[nationalMode-1]);
	else if(regionalMode===1)
		el('search').placeholder=localize('search_in').replace('%s', getRegionName());
	else
		el('search').placeholder=localize('search_in').replace('%s', localize(REGIONAL_DEXES[regionalMode-1][0]));
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








function initialize(){
	/* startup, load settings */
	MinidexSettings.load();
	el('select-language').value=MinidexSettings.lang;
	setLanguage(MinidexSettings.lang);
	if(!MinidexSettings.donateWarning || MinidexSettings.donateWarning<((new Date()).getTime()-1296000000)){
		show('donate-warning');
	}

	/* merge all regional dexes into one, for searching/navigation purposes */
	dexRegional=[];
	dexRegionalNumerationIndexes=new Array(REGIONAL_DEXES.length);
	var temp=0;
	for(var i=0; i<REGIONAL_DEXES.length; i++){
		dexRegional=dexRegional.concat(REGIONAL_DEXES[i][1]);
		dexRegionalNumerationIndexes[i]=temp;
		temp+=REGIONAL_DEXES[i][1].length;
	}

	/* create dex selector */
	for(var i=0; i<REGIONAL_DEXES.length; i++){
		var li=document.createElement('li');
		li.innerHTML=localize(REGIONAL_DEXES[i][0]);
		el('dex-navigator').children[0].appendChild(li);
		li.regionalDex=i+1;
		addEvent(li, 'click', function(){
			if(this.className==='clickable'){
				setRegionalDex(this.regionalDex);
				scrollHomeDexToTop();
			}
		});
	}
	if(NATIONAL_DEX){
		for(var i=0; i<GENERATION; i++){
			var li=document.createElement('li');
			li.innerHTML=localize('national_dex').replace('%s', ROMAN_NUMBERS[i]);
			el('dex-navigator').children[0].appendChild(li);
			li.nationalDex=i+1;
			addEvent(li, 'click', function(){
				if(this.className==='clickable'){
					setNationalDex(this.nationalDex);
					scrollHomeDexToTop();
				}
			});
		}
	}
	el('dex-navigator').children[0].style.width=el('dex-navigator').children[0].children[0].getBoundingClientRect().width*el('dex-navigator').children[0].children.length+'px';

	addEvent(window,'resize',function(evt){
			if(nationalMode)
				refreshDexNavScroll(REGIONAL_DEXES.length+nationalMode-1);
			else
				refreshDexNavScroll(regionalMode-1);
	});


	/* build pokemon names hash + national dex */
	pokemonNameById=new Array(POKEMON.length);
	dexNational=[];
	for(var i=1; i<POKEMON.length; i++){
		if(POKEMON[i]){
			pokemonNameById[i]=POKEMON[i][0].slug();

			if(i===29) /* nidoran */
				pokemonNameById[i]+='-female';
			else if(i===32)
				pokemonNameById[i]+='-male';

			dexNational.push(i);
		}
	}
	
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
		if(document.body.scrollTop>(el('dex-results').offsetTop-document.getElementsByTagName('nav')[0].offsetHeight))
			document.body.scrollTop=(el('dex-results').offsetTop-document.getElementsByTagName('nav')[0].offsetHeight);
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

	/* find evolution locations */
	if(GENERATION>3 && GENERATION<8 && GAME_ID!=='letsgo'){
		for(var i=0; i<LOCATIONS.length; i++){
			if(LOCATIONS[i].magneticField===true){
				locationsHash.magneticField=LOCATIONS[i];
			}else if(LOCATIONS[i].mossRock===true){
				locationsHash.mossRock=LOCATIONS[i];
			}else if(LOCATIONS[i].iceRock===true){
				locationsHash.iceRock=LOCATIONS[i];
			}
		}
	}

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

	/* generate locations hash */
	for(var i=0; i<LOCATIONS.length; i++){
		locationsHash[LOCATIONS[i].name[0].slug()]=i;
	}

	/* set dex */
	MAX_NATIONAL_BY_GENERATION[GENERATION]=MAX_NATIONAL;
	setRegionalDex(1);

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
	script.src='../core/data/learnsets_gen'+(GAME_ID==='letsgo'?'7_letsgo':GENERATION)+'.js';
	script.onload=function(){
		competitiveDatabaseLoaded=true;
		/* render learnsets if user is viewing a pokemon entry */
		if(currentPoke)
			renderAllLearnsets(currentPoke);
	}
	document.getElementsByTagName('head')[0].appendChild(script);
};

var competitiveDatabaseLoaded=false;
addEvent(window,'load', initialize);