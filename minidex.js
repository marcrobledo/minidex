/* Minidex v20190311 - Marc Robledo 2013-2019 - http://www.marcrobledo.com/license */

/* service worker */
const FORCE_HTTPS=true;
if(FORCE_HTTPS && location.protocol==='http:')
	location.href=window.location.href.replace('http:','https:');
else if(location.protocol==='https:' && 'serviceWorker' in navigator)
	navigator.serviceWorker.register('/minidex/_cache_service_worker.js', {scope: '/minidex/'});


const IS_MOBILE=/android|blackberry|iphone|ip(a|o)d|opera m(ob|in)i|iemobile|wpdekstop|kindle|mobile|pocket|psp/i.test(navigator.userAgent||navigator.vendor||window.opera);

/* BitArray.js */
const BIT_ARRAY_SIZE=32;function BitArray(t){t%BIT_ARRAY_SIZE==0?(this._array=new Array(parseInt(t/BIT_ARRAY_SIZE)),this.length=t):(this._array=new Array(parseInt(t/BIT_ARRAY_SIZE)+1),this.length=this._array.length*BIT_ARRAY_SIZE),this.reset()}BitArray.prototype._getBitMask=function(t){return 1<<BIT_ARRAY_SIZE-t%BIT_ARRAY_SIZE-1},BitArray.prototype.reset=function(t){for(var r=0;r<this._array.length;r++)this._array[r]=0},BitArray.prototype.get=function(t){return!!(this._array[parseInt(t/BIT_ARRAY_SIZE)]&this._getBitMask(t))},BitArray.prototype.set=function(t){t<this.length&&(this._array[parseInt(t/BIT_ARRAY_SIZE)]|=this._getBitMask(t))},BitArray.prototype.unset=function(t){t<this.length&&(this._array[parseInt(t/BIT_ARRAY_SIZE)]&=~this._getBitMask(t))},BitArray.prototype.toggle=function(t){this.get(t)?this.unset(t):this.set(t)},BitArray.prototype.import=function(t){this.reset();for(var r=0;r<this._array.length&&r<t.length;r++)this._array[r]=t[r]>>>0};

/* add String.clean to prototype */
MarcStringCleaner=function(){var a=[/[\xc0\xc1\xc2\xc4\xe0\xe1\xe2\xe4]/g,"a",/[\xc8\xc9\xca\xcb\xe8\xe9\xea\xeb]/g,"e",/[\xcc\xcd\xce\xcf\xec\xed\xee\xef]/g,"i",/[\xd2\xd3\xd4\xd6\xf2\xf3\xf4\xf6]/g,"o",/[\xd9\xda\xdb\xdc\xf9\xfa\xfb\xfc]/g,"u",/[\xd1\xf1]/g,"n",/[\xc7\xe7]/g,"c",/[\xc6\xe6]/g,"ae",/\x26/g,"and",/\u20ac/g,"euro",/[^\w- ]/g,"",/( |-)/g,"_",/_+/g,"_",/^_|_$/g,""];String.prototype.clean||(String.prototype.clean=function(){for(var b=this.toLowerCase(),c=0;c<a.length;c+=2)b=b.replace(a[c],a[c+1]);return b})}();


function el(e){return document.getElementById(e)}
function show(e){el(e).style.display=(/sprite/.test(el(e).className))?'inline-block':'block'}
function hide(e){el(e).style.display='none'}
function addEvent(e,v,f){e.addEventListener(v,f,false)}
function empty(e){var e2=(typeof e==='string')?e2=el(e):e2=e;while(e2.firstChild)e2.removeChild(e2.firstChild)}
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
const ALT_FORM_MASK=~(0x1f << ALT_FORM_BITS);
function alternateForm(id,form){return id+(form<<ALT_FORM_BITS)}
function getPokemonId(mergedId){return mergedId & ALT_FORM_MASK}
function getAlternateForm(mergedId){return mergedId>>ALT_FORM_BITS}





function getPokeName(nationalId){return POKEMON_NAMES[nationalId] || POKEMON[nationalId][0]}
function getCurrentDexNumberInt(nationalId, forceNational){
	if(nationalMode || forceNational){
		return nationalId
	}else{
		var index=getRegionalIndex(nationalId);
		if(index===-1 || index>=currentGame.regionalDex[2]){
			return -1;
		}else if(currentGame.id==='xy'){
			if(index<150){
				return index+1;
			}else if(index<303){
				return index-149;
			}else if(index<454){
				return index-302;
			}else{
				return nationalId; /* return something */
			}
		}else if(currentGame.generation===5){
			return index;
		}else{
			return index+1;
		}
	}
}
function formatDexNumber(number){
	if(number<10)
		return '00'+number;
	else if(number<100)
		return '0'+number;
	else
		return number.toString();
}
function getCurrentDexNumber(nationalId, forceNational){
	var dexIndex=forceNational?nationalId:getCurrentDexNumberInt(nationalId);

	if(dexIndex===-1)
		return '---';
	else
		return formatDexNumber(dexIndex);
}


function getCurrentDexIndex(nationalId){
	if(nationalMode){
		return nationalId-1;
	}else{
		return getRegionalIndex(nationalId);
	}
}
function getRegionalIndex(nationalId){
	return currentGame.regionalDex[1].indexOf(nationalId);
}




function getGamesAbbr(game){
	var abbr='';
	for(var i=0; i<game.games.length; i++)
		abbr+=localize(game.games[i].abbr);
	return abbr
}
function getGamesTitle(game){
	if(game.abbr){
		//return {abbr:localize(game.abbr),title:localize(game.abbr)}
		return localize(game.abbr)
	}else{
		//var abbr='';
		var title='';
			for(var i=0; i<game.games.length; i++){
			//abbr+=localize(game.games[i].abbr);
			if(title!=='')
				title+=' / ';
			title+=localize(game.games[i].name);
		}
		return title
	}
}




function goToTop(){
	if(document.body.scrollIntoView)
		document.body.scrollIntoView({behavior:'smooth'});
	else
		document.body.scrollTop=0
}
function setWindowTitle(title){document.title=title}




var currentDistanceFromHome=0;
function pushState(url,doNotPush){
	if(/^#\w+\/\d+(\/form\/\d+)?/.test(url)){
		var matches=url.match(/(\w+)\/(\d+)(\/form\/(\d+))?/);
		
		var dex=matches[1];
		var id;
		var form=0;
		if(matches[3])
			form=parseInt(matches[4]);
		if(dex==='national'){
			if(!nationalMode){
				el('select-game').value=DEFAULT_GAME;
				setGame(DEFAULT_GAME);
				el('select-dex').value='nat'+GAMES[DEFAULT_GAME].generation;
				setDex(el('select-dex').value);
			}
			id=parseInt(matches[2]);
		}else{
			var game=getGameById(matches[1]);
			if(currentGame!==game){
				el('select-game').value=i;
				setGame(GAMES.indexOf(game));
			}

			if(currentGame.generation===5)
				id=currentGame.regionalDex[1][parseInt(matches[2])];
			else
				id=currentGame.regionalDex[1][parseInt(matches[2])-1];
		}
		if(currentPoke===id)
			doNotPush=true;
		showPokemon(id, form);
	}else if(/\w+\/location\/\d+/.test(url)){
		var matches=url.match(/(\w+)\/location\/(\d+)/);
		showLocation(getGameById(matches[1]), parseInt(matches[2]));

	}else if(/settings/.test(url)){
		hide('home');
		show('settings');
	}else{
		url='';

		currentPoke=0;
		currentForm=0;
		currentDistanceFromHome=0;
		setWindowTitle('Minidex');
		focusSearch();
		show('home');
		hide('pokemon');
		hide('location');
		hide('settings');
		goToTop();
	}



	if(!doNotPush){
		currentDistanceFromHome++;
		history.pushState({page:url,distanceFromHome:currentDistanceFromHome}, false, url);

		if(currentDistanceFromHome)
			el('button-menu').className='sprite back clickable';
		else
			el('button-menu').className='sprite settings clickable';
	}
}





const ROMAN_NUMBERS=['I','II','III','IV','V','VI','VII','VIII'];
const MAX_POKEMON_BY_GENERATION=[0,151,251,386,493,649,721,809,890];
const MAX_GENERATION=8;
const MAX_POKEMON=MAX_POKEMON_BY_GENERATION[MAX_GENERATION];
const DEFAULT_GAME=13;



var currentPoke,currentForm=0;
var currentDex, currentGame, nationalMode;
var hideSearchDelay;
var loadedLearnsets=0;








function showPokemon(id,form){
	if(!(id>=1 && id<=MAX_POKEMON) || (currentPoke===id && currentForm===form))
		return false;
	currentPoke=id;
	currentForm=form;

	hide('home');
	hide('location');
	show('pokemon');
	el('caught-button').regionalIndex=getRegionalIndex(id);
	if(el('caught-button').regionalIndex!==-1){
		refreshCaughtButton(el('caught-button'));
	}else{
		el('caught-button').className='sprite caught0';
	}


	var poke=parsePokemon(id,form);


	var pokeNumber=getCurrentDexNumber(id);
	
	/* set window title */
	setWindowTitle('#'+pokeNumber+' '+poke.name);

	el('pokemon-title').innerHTML='<span class="mono">#'+pokeNumber+'</span> '+poke.nameHTML;

	/* set big image */
	empty('dex-img');
	el('dex-img').appendChild(generateIcon(id,form,4));

	/* forms */
	empty('form-cycler');
	if(POKEMON[id][5]){
		for(var i=0; i<POKEMON[id][5].length; i++){
			el('form-cycler').appendChild(generateIconClickable(id,i));
			if(i===currentForm){
				el('form-cycler').children[i].className='poke-icon crop';
			}else{
				el('form-cycler').children[i].className='poke-icon crop disabled';
			}
		}
	}

	/* set types */
	empty('dex-types');
	for(var i=0; i<poke.types.length && i<2; i++){
		var span=document.createElement('span');
		span.className='type type-'+poke.types[i];
		span.innerHTML=localize(TYPES[poke.types[i]]);
		
		el('dex-types').appendChild(span);
	}

	/* set abilities */
	if(currentGame.generation===1 || currentGame.generation===2 || currentGame.id==='letsgo'){
		el('dex-abilities').innerHTML='-';
	}else{
		el('dex-abilities').innerHTML=poke.abilities.join(', ');
	}

	/* evo line */
	empty('evoline');
	var ul=createElement('ul');
	var previousLi=createElement('li');
	el('evoline').appendChild(previousLi);
	var start=poke.evoLine;

	if(start>MAX_POKEMON_BY_GENERATION[currentGame.generation]){
		if(typeof POKEMON[start][4][0]==='number')
			start=POKEMON[start][4][0];
		else
			start=POKEMON[start][4][0][0];
	}

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
	if(POKEMON[start][6]){
		var breedDiv=document.createElement('div');
		breedDiv.innerHTML='&laquo; '+localize(STRINGS['breed_with']).replace('%s', localize(STRINGS[POKEMON[start][6]]));
		el('evoline').appendChild(breedDiv);
	}

	/* encounters */
	empty('block-location');
	var totalEncounters=filterEncounters(id, currentGame);
	if(MinidexSettings.showLocations){
		show('block-location');
		/*var h2=createElement('h2');
		h2.innerHTML=localize('location')+' '+getGamesTitle(GAMES[i]).abbr;
		el('block-location').appendChild(h2);*/
		
		var table=document.createElement('table');
		table.id='table-encounters-'+currentGame.id;
		table.className='table-encounters';
		el('block-location').appendChild(table);
		
		if(totalEncounters.length){
			renderEncounters(totalEncounters, currentGame);
		}else if(currentPoke<=MAX_POKEMON_BY_GENERATION[currentGame.generation]){
			//look for available evolutions
			var evolutionAvailability=0;
			if(POKEMON[id][4]){
				evolutionAvailability=searchBranchAvailability(id, currentGame, false);

				if(evolutionAvailability && currentPoke!==790){ //cosmoem
					var icons=[];
					for(var j=0; j<POKEMON[id][4].length; j++)
						icons.push(generateIconClickable(POKEMON[id][4][j][0],0));

					renderSimpleEncounter('breed', evolutionAvailability, currentGame, icons);
				}
			}

			//look for available preevos
			var preevosAvailable=0;
			if(POKEMON[id][3]!==id){
				preevosAvailable=searchBranchAvailability(POKEMON[id][3], currentGame, id);

				if(preevosAvailable)
					renderSimpleEncounter('evolve', preevosAvailable, currentGame, [generateIconClickable(getPreEvolution(id),0)]);
			}

			if(!evolutionAvailability && !preevosAvailable)
				renderSimpleEncounter('not_available', 0, currentGame);
		}else{
			renderSimpleEncounter('not_available', 0, currentGame);
		}
	}else{
		hide('block-location');
	}

	/* learnset */
	empty('block-learnset');
	if(MinidexSettings.showMeYourMoves){
		if(loadedLearnsets==='loaded'){
			renderAllLearnsets(currentPoke, currentGame);
		}else{
			el('block-learnset').innerHTML='<div class="block block-more-info"><h2>Loading learnsets database...</h2></div>';
			if(loadedLearnsets!=='loading'){
				loadedLearnsets='loading';

				var script=document.createElement('script');
				addEvent(script,'load',function(){
					loadedLearnsets='loaded';
					el('block-learnset').innerHTML='';
					renderAllLearnsets(currentPoke, currentGame);
				});
				script.src='./resources/data/database_learnsets.min.js';

				document.head.appendChild(script);
			}
		}
	}

	/* more info links */
	empty('extra-links');
	for(var i=0; i<MORE_INFO.length; i++){
		var moreInfo=MORE_INFO[i].getInfo(currentGame, currentPoke, getPokeName(currentPoke), totalEncounters);
		if(/^(https?:|.?\/)/.test(moreInfo)){
			var a=document.createElement('a');
			a.target='_blank';
			a.href=moreInfo;
			if(/^http/.test(moreInfo))
				a.innerHTML='<i class="sprite extlink"></i> '+localize(MORE_INFO[i].title);
			else
				a.innerHTML=localize(MORE_INFO[i].title);
			var li=document.createElement('li');
			li.appendChild(a);
			el('extra-links').appendChild(li);
		}else if(moreInfo){
			var li=document.createElement('li');
			li.innerHTML=localize(moreInfo);
			el('extra-links').appendChild(li);
		}
	}

	/* smooth scroll to top */
	goToTop();
}



function searchBranchAvailability(startingId, gameInfo, stopAt){
	var availability=0;

	startingId=getPokemonId(startingId);

	if(stopAt)
		availability|=getAvailability(startingId, gameInfo);

	if(POKEMON[startingId][4]){
		for(var i=0; i<POKEMON[startingId][4].length; i++){
			var evoId=getPokemonId(POKEMON[startingId][4][i][0]);
			availability|=getAvailability(evoId, gameInfo);
			if(POKEMON[evoId][4] && POKEMON[evoId][4]!==stopAt){
				availability|=searchBranchAvailability(evoId, gameInfo, stopAt);
			}
		}
	}

	return availability;
}







function getGameById(id){
	for(var i=0; i<GAMES.length; i++)
		if(GAMES[i].id===id)
			return GAMES[i];
	return -1;
}
function getGameTitlesByAvailability(gameInfo,available){
	var titles=[]
	for(var i=0; i<gameInfo.games.length; i++){
		if(available & (1 << i))
			titles.push(localize(gameInfo.games[i].name));
	}
	return titles.join('/')
}
function parseAvailableGames(gameInfo,available){
	var spans=document.createElement('span');
	spans.className='games games-'+gameInfo.id;

	var titles=[]
	for(var i=0; i<gameInfo.games.length; i++){
		if(available & (1 << i)){
			spans.innerHTML+='<span class="game game-'+gameInfo.games[i].abbr[0].clean()+'"></span>';
			titles.push(localize(gameInfo.games[i].name));
		}else{
			spans.innerHTML+='<span class="game game-not-available"></span>';
		}
	}
	spans.title=localize('available_in')+' '+titles.join('/');
	return spans
}


function parseEncounterMethod(method, pokeId){
	if(method==='revive_fossil'){
		return localize(STRINGS[method] || method).replace('%s', STRINGS['fossil_'+pokeId]);
	}else if(typeof method==='string'){
		return localize(STRINGS[method] || method);
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
	var rateText='';
	var validRates={};
	for(var i=0; i<rates.length; i++){
		if(rates[i]){
			if(!validRates[rates[i]])
				validRates[rates[i]]='';
			validRates[rates[i]]+='<i class="sprite '+sprites[i]+'"></i> ';
		}
	}

	for(rate in validRates){
		rateText+=validRates[rate]+rate+'<small>%</small>';
	}
	
	return rateText;
}


function parseRateEncounter(generation, rates){
	if(typeof rates ==='number'){
		return rates+'<small>%</small>';
	}else if(typeof rates ==='string'){
		return localize(rates);
	}else if(typeof rates==='object'){
		if(generation===2 || generation===4){
			return mergeRates(rates, ['morning','day','night']);
		}else if(generation===5){
			return mergeRates(rates, ['spring','summer','autumn','winter']);
		}else if(generation===7){
			return mergeRates(rates, ['day','night']);
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

function renderSimpleEncounter(text, availability, gameInfo, icons){
	var tr=createElement('tr');
	var td0=createElement('td');
	var td1=createElement('td', {innerHTML:localize(text)});
	td1.colSpan=2;

	if(icons){
		for(var i=0; i<icons.length; i++)
			td1.appendChild(icons[i]);
	}
	var td2=createElement('td', {className:'text-center'});
	td2.appendChild(parseAvailableGames(currentGame, availability));

	tr.appendChild(td0);
	tr.appendChild(td1);
	tr.appendChild(td2);
	
	el('table-encounters-'+gameInfo.id).appendChild(tr);
}
function renderEncounters(encounters, gameInfo){
	var showFormIcons=false;
	for(var i=0; i<encounters.length; i++){
		var a=document.createElement('a');
		a.href='#'+gameInfo.id+'/location/'+encounters[i][4];
		a.locationGame=gameInfo.id;
		a.locationId=encounters[i][4];
		a.addEventListener('click', _clickLink, false);
		a.innerHTML=localize(gameInfo.locations[encounters[i][4]].name)+' ';
		if(encounters[i][5]){
			if(gameInfo.id==='xy' && /typeslot_/.test(encounters[i][5])){
				var matches=encounters[i][5].match(/typeslot_(\d+)_(\d+)/);
				encounters[i][5]=localize('typeslot').replace('%s', TYPES[parseInt(matches[1])]).replace('%s', matches[2]);
			}
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
		var td3=createElement('td',{className:'text-center'});
		var td4=createElement('td',{className:'text-right'});

		td1.appendChild(a);

		tr.form=getAlternateForm(encounters[i][0]);
		//if(currentForm!==form)
		if(tr.form || showFormIcons){
			//td0.appendChild(generateIcon(getPokemonId(encounters[i][0]),tr.form,1), td0.children[0]);
			td0.appendChild(generateIcon(getPokemonId(encounters[i][0]),tr.form,1));
			if(!showFormIcons){
				var trs=el('table-encounters-'+gameInfo.id).children;
				for(var j=0; j<trs.length; j++){
					trs[j].children[0].appendChild(generateIcon(getPokemonId(encounters[i][0]),trs[j].form,1));
				}
				showFormIcons=true;
			}
		}
		td2.innerHTML=parseEncounterMethod(encounters[i][2],encounters[i][0]);


		td3.appendChild(parseAvailableGames(gameInfo, encounters[i][1]));
		td4.appendChild(createElement('span', {className:'rates',html:parseRateEncounter(gameInfo.generation, encounters[i][3])}));

		//tr.pokeId=encounters[i][0];
		tr.appendChild(td0);
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		tr.appendChild(td4);

		el('table-encounters-'+gameInfo.id).appendChild(tr);
	}
	/*if(showFormIcons){
		var trs=;
		for(var i=0;
			td1.insertBefore(generateIcon(getPokemonId(encounters[i][0]),form,1), td0.children[0]);
	}*/
}



function filterEncounters(nationalId, gameInfo){
	var filteredEncounters=[];
	for(var i=0; i<gameInfo.locations.length; i++){
		filteredEncounters=filteredEncounters.concat(filterEncountersByGroup(nationalId, gameInfo.locations[i].encounters, i, null));
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
function getAvailability(nationalId, gameInfo){
	var availability=0;
	var encounters=filterEncounters(nationalId, gameInfo);
	for(var i=0; i<encounters.length; i++)
		availability|=encounters[i][1];
	return availability;
}



function renderLocationEncounters(gameInfo, encounters, groupName){
	if(gameInfo.id==='xy' && /typeslot_/.test(groupName)){
		var matches=groupName.match(/typeslot_(\d+)_(\d+)/);
		groupName=localize('typeslot').replace('%s', TYPES[parseInt(matches[1])]).replace('%s', matches[2]);
	}

	for(var i=0; i<encounters.length; i++){
		if(encounters[i].group){
			renderLocationEncounters(gameInfo, encounters[i].encounters, groupName+' '+localize(encounters[i].group));
		}else{
			var tr=createElement('tr');
			var td0=document.createElement('td');
			var td1=document.createElement('td');
			var td2=document.createElement('td');
			var td3=document.createElement('td');
			var td4=document.createElement('td');

			td0.appendChild(generateIconClickable(getPokemonId(encounters[i][0]),getAlternateForm(encounters[i][0]),1));
			td1.className='location-name';
			td1.innerHTML=groupName;
			td2.innerHTML=parseEncounterMethod(encounters[i][2],encounters[i][0]);
			td3.appendChild(parseAvailableGames(gameInfo, encounters[i][1]));
			td4.innerHTML=parseRateEncounter(gameInfo.generation, encounters[i][3]);
			
			tr.appendChild(td0);
			tr.appendChild(td1);
			tr.appendChild(td2);
			tr.appendChild(td3);
			tr.appendChild(td4);
			
			el('table-location').appendChild(tr);
		}
	}
}


function showLocation(gameInfo, location){
	currentPoke=0;
	currentForm=0;
	hide('home');
	hide('pokemon');
	show('location');
	
	empty('table-location');
	if(gameInfo && gameInfo.locations[location]){
		setWindowTitle(localize(gameInfo.locations[location].name));
		el('location-title').innerHTML=localize(gameInfo.locations[location].name);
		renderLocationEncounters(gameInfo, gameInfo.locations[location].encounters, '');
	}else{
		console.error(gameId);
		console.error(location);
		console.error('invalid game id and/or location');
	}
	goToTop();
}





const NON_REMAKES=[,0,1,2,4,6,8,10];
const REMAKES=[,,,3,5,7,9,11];
function padMachine(number){
	return number<10?'0'+number:number;
}
function getMachine(gameInfo, moveIndex){
	if(gameInfo.generation===6 && (moveIndex===249 || moveIndex===290))
		return '<small>'+localize('tm')+'</small>94';

	else if(gameInfo.generation===4 && (moveIndex===432 || moveIndex===250))
		return '<small>'+localize('hm')+'</small>05<sup>';

	else if(gameInfo.generation>=1 && gameInfo.generation<=6 && HMs[gameInfo.generation].indexOf(moveIndex)>0)
		return '<small>'+localize('hm')+'</small>0'+HMs[gameInfo.generation].indexOf(moveIndex);

	else
		return '<small>'+localize('tm')+'</small>'+padMachine(TMs[gameInfo.id==='letsgo'?0:gameInfo.generation].indexOf(moveIndex));
}

function createLearnsetTable(type, form, headerTitle){
	var div=document.createElement('div');
	div.className='block block-moreinfo';

	var h2=document.createElement('h2');
	h2.innerHTML=headerTitle;

	table=document.createElement('table');
	table.id='table-moves-'+type+'-'+form;
	table.className='table-moves table-moves-'+type;

	div.appendChild(h2);
	div.appendChild(table);
	
	return table;
}
function renderLearnsets2(nationalId, form, gameInfo, learnset, type, exclusiveThird, exclusiveRemake){
	var table;

	var headerTitle='';
	if(typeof form==='number' && typeof POKEMON[nationalId][5][form]!=='undefined')
		headerTitle+=' ('+localize(POKEMON[nationalId][5][form][0])+')';


	if(type==='levelup'){
		table=createLearnsetTable(type, form, localize('learnset_levelup')+' '+(gameInfo.id==='letsgo'?'Let\'s go!':'Gen '+gameInfo.generation)+headerTitle);
	}else{
		if(el('table-moves-'+type+'-'+form))
			table=el('table-moves-'+type+'-'+form);
		else
			table=createLearnsetTable(type, form, localize('learnset_'+type)+headerTitle);
	}


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
						span.appendChild(parseAvailableGames(GAMES[NON_REMAKES[gameInfo.generation]], 3));
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
					span.appendChild(parseAvailableGames(GAMES[REMAKES[gameInfo.generation]], 3));
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
					span.appendChild(parseAvailableGames(GAMES[NON_REMAKES[gameInfo.generation]], 4));
					if(moves[i][3]===0)
						span.innerHTML+='Evo.';
					else if(moves[i][3]===1)
						span.innerHTML+='-';
					else
						span.innerHTML+=moves[i][3];
					td0.appendChild(span);
				}
				td1.innerHTML=localize(ALL_MOVES[moves[i][0]][0]);
			}else{
				move=moves[i];

				td1.innerHTML=localize(ALL_MOVES[moves[i]][0]);

				if(type==='machine'){
					td0.innerHTML=getMachine(gameInfo, moves[i]);

					/* fix rb mewtwo */
					if(gameInfo.generation===1 && move===6 && nationalId===150){
						td1.appendChild(parseAvailableGames(gameInfo, 3));
					}else if(gameInfo.generation===4){
						/* fix gen4 HM05 */
						if(move===432)
							td1.appendChild(parseAvailableGames(GAMES[4], 7));
						else if(move===250)
							td1.appendChild(parseAvailableGames(GAMES[5], 3));
					}else if(gameInfo.generation===6){
						/* fix gen6 TM94 */
						if(move===249)
							td1.appendChild(parseAvailableGames(GAMES[8], 3));
						else if(move===290)
							td1.appendChild(parseAvailableGames(GAMES[9], 3));
					}
				}else if(type==='egg' && gameInfo.id==='gsc' && ((move===211 && (nationalId===16 || nationalId===83 || nationalId===142)) || (move===230 && nationalId===46))){
					/* fix gs exclusive eggs */
					td1.appendChild(parseAvailableGames(gameInfo, 3));
				}


				if(exclusiveThird)
					td1.appendChild(parseAvailableGames(GAMES[NON_REMAKES[gameInfo.generation]], 4));
				if(exclusiveRemake)
					td1.appendChild(parseAvailableGames(GAMES[REMAKES[gameInfo.generation]], 3));
			}

			//type+category
			td2=document.createElement('td');
			var span=document.createElement('span');
			span.className='type type-'+ALL_MOVES[move][1];
			span.innerHTML=localize(TYPES[ALL_MOVES[move][1]]);
			td2.appendChild(span);
			span=document.createElement('span');
			span.className='type cat-'+[ALL_MOVES[move][2]];
			span.innerHTML='<i class="sprite move-cat-'+ALL_MOVES[move][2]+'"></i>';
			td2.appendChild(span);
			tr.appendChild(td2);

			//power+accuracy+pp
			td2=document.createElement('td');
			if(ALL_MOVES[move][4])
				td2.innerHTML='<b>'+localize('power')+': </b>'+ALL_MOVES[move][4];
			if(ALL_MOVES[move][5])
				td2.innerHTML+=' <b>'+localize('accuracy')+': </b>'+ALL_MOVES[move][5]+'<small>%</small>';
			if(ALL_MOVES[move][3])
				td2.innerHTML+=' <b>'+localize('pp')+': </b>'+ALL_MOVES[move][3];
			tr.appendChild(td2);


			table.appendChild(tr);
		}
	}

	if(!exclusiveThird && !exclusiveRemake){
		if(table.children.length)
			el('block-learnset').appendChild(table.parentElement);

		if(type!=='levelup'){
			field=type.charAt(0);
			if(typeof learnset[field+'3r']!=='undefined')
				renderLearnsets2(nationalId, form, gameInfo, learnset, type, true, true);
			if(typeof learnset[field+'3']!=='undefined')
				renderLearnsets2(nationalId, form, gameInfo, learnset, type, true, false);
			if(typeof learnset[field+'r']!=='undefined')
				renderLearnsets2(nationalId, form, gameInfo, learnset, type, false, true);
		}

		if(typeof learnset.forms !== 'undefined'){
			for(var i=0; i<learnset.forms.length; i++)
				if(typeof learnset.forms[i] !== 'undefined')
					renderLearnsets2(nationalId, i, gameInfo, learnset.forms[i], type, false, false);
		}
		
	}
}
function renderAllLearnsets(nationalId, gameInfo){
	var learnset;
	if(gameInfo.id==='swsh')
		return false;
	else if(gameInfo.id==='letsgo')
		learnset=LEARNSETS[nationalId][0];
	else
		learnset=LEARNSETS[nationalId][gameInfo.generation];

	if(typeof learnset === 'undefined')
		return false;

	renderLearnsets2(nationalId, false, gameInfo, learnset, 'levelup', false, false);
	renderLearnsets2(nationalId, false, gameInfo, learnset, 'machine', false, false);
	if(gameInfo.generation>1 && gameInfo.id!=='letsgo')
		renderLearnsets2(nationalId, false, gameInfo, learnset, 'egg', false, false);
	renderLearnsets2(nationalId, false, gameInfo, learnset, 'tutor', false, false);
	renderLearnsets2(nationalId, false, gameInfo, learnset, 'change', false, false);
	renderLearnsets2(nationalId, false, gameInfo, learnset, 'special', false, false);
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



function _clickLink(evt){
	preventDefault(evt);
	pushState(this.href.substring(this.href.indexOf('#')));
}
function generatePokemonLink(id,form){
	var link;
	if(nationalMode)
		link='#national/'+formatDexNumber(id);
	else{
		link='#'+currentGame.id+'/';
		if(currentGame.generation===5)
			link+=formatDexNumber(getRegionalIndex(id));
		else
			link+=formatDexNumber(getRegionalIndex(id)+1);
	}

	if(form)
		link+='/form/'+form;

	return link;
}
function generateIconClickable(id,form){
	var a=document.createElement('a');
	a.href=generatePokemonLink(id, form);

	a.appendChild(generateIcon(id,form,1));
	a.children[0].className+=' clickable';

	a.addEventListener('click', _clickLink, false);

	return a
}
function generateIcon(id,form,size/*,fixedSize*/){
	var pos=POKEMON_ICONS[id];
	if(form)
		pos+=form;

	//ICON_COLS=32,ICON_WIDTH=40,ICON_HEIGHT=30
	var span=createElement('span',{class:'poke-icon'});
	
	if(id<810){
		span.style.background='url(./resources/icons.png) -'+((pos%32)*40*size)+'px -'+(parseInt(pos/32)*30*size)+'px';
		if(size>1){
			span.style.backgroundSize=(1280*size)+'px '+(960*size)+'px';
			span.style.width=(40*size)+'px';
			span.style.height=(30*size)+'px';
		}
	}else{
		span.style.background='url(./resources/icon_unknown.png)';
		if(size>1){
			span.style.backgroundSize=(40*size)+'px '+(30*size)+'px';
			span.style.width=(40*size)+'px';
			span.style.height=(30*size)+'px';
		}
	}

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
		if(getPokemonId(POKEMON[id][4][i][0])>MAX_POKEMON_BY_GENERATION[currentGame.generation]){
			continue;
		}
		var li=document.createElement('li');
		var evoId=getPokemonId(POKEMON[id][4][i][0]);
		var icon=generateIconClickable(evoId,getAlternateForm(POKEMON[id][4][i][0]))

		var method=POKEMON[id][4][i][1];
		var span=createElement('span', {html:''});
		span.style.verticalAlign='middle';
		span.innerHTML=localize(STRINGS[method])+' &raquo;';
		if(/%s/.test(span.innerHTML)){
			var methodString=POKEMON[id][4][i][2];
			if(method==='levelup_move'){
				methodString=MOVES[methodString];
			}else if(method==='trade_for'){
				methodString=getPokeName(methodString);
			}else if(method==='levelup_at' && currentGame[toCamelCase(methodString)]){
				methodString='<span title="'+localize(currentGame.locations[currentGame[toCamelCase(methodString)]].name)+'">'+localize(POKEMON[id][4][i][2])+'</span>';
			}else if(STRINGS[methodString]){
				methodString=STRINGS[methodString];
			}
			span.innerHTML=span.innerHTML.replace('%s',methodString);
		}
		/*if(txts[1]===17){
			span.innerHTML='&laquo; '+span.innerHTML;
		}else{
			span.innerHTML+=' &raquo;';
		}*/
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

	var completeId=getCurrentDexNumber(id);

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


	var abilities=[];
	var abilitiesId=getPokeProp(id, form, 2);
	if(typeof abilitiesId==='number'){
		abilities[0]=ABILITIES[abilitiesId];
	}else{
		abilities.push(ABILITIES[abilitiesId[0]]);
		if(abilitiesId[1])
			abilities.push(ABILITIES[abilitiesId[1]]);
		if(abilitiesId[2])
			abilities.push('<span title="'+STRINGS.ability_hidden+'" class="help">'+ABILITIES[abilitiesId[2]]+'&starf;</span>');
	}

	var types;
	var types2=getPokeProp(id, form, 1);
	if(typeof types2==='number'){
		types=[types2];
	}else{
		types=types2;
	}

	if(currentGame.generation<2 && types.length===2 && types[1]===8){ /* remove 2nd steel type: magnemite */
		types=[types[0]];
	}else if(currentGame.generation<5 && id===479){ /* rotom is always electric/ghost in Gen IV regardless its form */
		types=[12,7];
	}else if(currentGame.generation<6 && types.length===1 && types[0]===17){ /* set pure fairy types to normal: cleffa/snubbull/togepi */
		types=[0];
	}else if(currentGame.generation<6 && types.length===2 && types[1]===17){ /* remove 2nd fairy type: igglybuff/mime jr/azurill/mawile/ralts/cottonee */
		types=[types[0]];
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


function setGame(gameId){
	currentGame=GAMES[gameId];
	MinidexSettings.selectedGame=gameId;

	var previousGeneration=el('generational-dexes').children.length;
	while(el('generational-dexes').children.length>currentGame.generation){
		el('generational-dexes').removeChild(el('generational-dexes').lastChild);
	}

	for(var i=previousGeneration; i<currentGame.generation; i++){
		var option=document.createElement('option');
		option.id='dex-nat'+(i+1);
		option.value='nat'+(i+1);
		option.innerHTML='Gen '+ROMAN_NUMBERS[i]+': '+getCurrentDexNumber(MAX_POKEMON_BY_GENERATION[i]+1, true)+'-'+MAX_POKEMON_BY_GENERATION[i+1];
		el('generational-dexes').appendChild(option);
	}

	el('regional-dex').innerHTML=localize(currentGame.regionalDex[0]);



	setDex(el('select-dex').value);
	
	empty('game-icons');
	for(var i=0; i<currentGame.icons.length; i++){
		el('game-icons').appendChild(generateIcon(getPokemonId(currentGame.icons[i]), getAlternateForm(currentGame.icons[i]), 1));
		el('game-icons').children[i].className='poke-icon crop2';
	}

	MinidexSettings.save();
}

function setDex(newDex){	
	if(newDex==='regional'){
		nationalMode=0;
		currentDex=currentGame.regionalDex[1].slice(0, currentGame.regionalDex[2]);
		el('search').placeholder=localize('search_regional');
	}else if(newDex==='extras'){
		nationalMode=0;
		if(currentGame.regionalDex[2] < currentGame.regionalDex[1].length){
			currentDex=currentGame.regionalDex[1].slice(currentGame.regionalDex[2], currentGame.regionalDex[1].length);
		}else{
			currentDex=[];
		}
		el('search').placeholder=localize('search_extras');
	}else if(/nat\d+/.test(newDex)){
		nationalMode=parseInt(newDex.replace('nat',''));
		currentDex=generateRange(1, MAX_POKEMON_BY_GENERATION[currentGame.generation]);
		el('search').placeholder=localize('search_national');
	}

	
	refreshSearchResults(searchPokemon(el('search').value));
	refreshDex(currentDex);
}

const ALOLAN_FORMS=[19,20,26,52,53,88,89,50,51,105,74,75,76,27,28,37,38,103];
function refreshDex(nationalIds){
	empty('dex-results');
	var start, end;
	if(nationalMode){
		start=MAX_POKEMON_BY_GENERATION[nationalMode-1];
		end=MAX_POKEMON_BY_GENERATION[nationalMode];
	}else{
		start=0;
		end=nationalIds.length;
	}
	for(var i=start; i<end; i++){
		var regionalIndex=getRegionalIndex(currentDex[i]);
		var caught=MinidexSettings.caughtDatabases[MinidexSettings.selectedGame].get(regionalIndex);
		if(el('hide-caught').checked && regionalIndex!==-1 && caught){
			continue;
		}
		var form=0;
		if(!nationalMode && (currentGame.id==='sm' || currentGame.id==='usum') && ALOLAN_FORMS.indexOf(nationalIds[i])!==-1)
			form=1;
		
		var a=document.createElement('a');
		a.href=generatePokemonLink(currentDex[i], form);


		addEvent(a, 'click', _clickLink);
		a.appendChild(generateIcon(nationalIds[i], form, 2));
		a.appendChild(createElement('span',{html:'<span class="mono">'+getCurrentDexNumber(nationalIds[i])+'</span> '+getPokeName(nationalIds[i])}));

		el('dex-results').appendChild(a);

		if(regionalIndex!==-1){
			a.appendChild(createCaughtButton(regionalIndex));
		}
	}
}

function checkBreedAvailability(game, pokeId){
	var poke=POKEMON[pokeId];
	if(poke.ev){
		var evos=POKEMON[pokeId].ev;
		var ret=0;
		for(var i=0; i<evos.length && !ret; i++){
			if(checkAvailability(game, evos[i][0]) || checkBreedAvailability(game, evos[i][0])){
				ret=evos[i][0];
			}
		}
		return ret;
	}else{
		return checkAvailability(game, pokeId);
	}
}
function checkAvailability(game, pokeId){
	for(var i=0; i<Minidex.REGIONS[game][1].length; i++){
		for(var j=1; j<Minidex.REGIONS[game][1][i].length; j++){
			if(Minidex.REGIONS[game][1][i][j][0]===pokeId)
				return true
		}
	}
	return false;
}

function getPreEvolution(id){
	for(var i=1; i<POKEMON.length; i++){
		if(POKEMON[i][4]){
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
function checkIfAvailableGame(id,game){
	var available=0;
	for(var i=0; i<game.locations.length; i++){
		available|=checkIfAvailable(id, game.locations[i].encounters);
	}
	return available;
}


function refreshCaughtButton(button){
	button.className='sprite clickable caught';
	if(MinidexSettings.caughtDatabases[MinidexSettings.selectedGame].get(button.regionalIndex)){
		button.className+='1';
	}else{
		button.className+='0';
	}
}
function toggleCaughtButton(evt){
	preventDefault(evt);
	stopPropagation(evt);
	if(this.regionalIndex!==-1){
		MinidexSettings.caughtDatabases[MinidexSettings.selectedGame].toggle(this.regionalIndex);
		refreshCaughtButton(this);
		if(el('hide-caught').checked){
			refreshDex(currentDex);
		}
		MinidexSettings.save();
	}
}
function createCaughtButton(regionalIndex){
	var i=document.createElement('i');
	addEvent(i, 'click', toggleCaughtButton);
	if(regionalIndex===false){
		addEvent(i, 'click', function(){
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







function hideDonateWarning(){
	hide('donate-warning');
	MinidexSettings.donateWarning=(new Date()).getTime();
	MinidexSettings.save();
}
var MinidexSettings=(function(){
	var IS_STORAGE_AVAILABLE=typeof(Storage)!=='undefined';
	var ITEM_NAME='minidexSettings';

	var caughtDatabases=[];
	for(var i=0; i<GAMES.length; i++){
		caughtDatabases[i]=new BitArray(GAMES[i].regionalDex[1].length);
	}

	var defaultLanguage=0;
	var userLang=(navigator.language || navigator.userLanguage).substr(0,2);
	if(userLang==='fr'){
		defaultLanguage=1;
	}else if(userLang==='de'){
		defaultLanguage=2;
	}else if(userLang==='it'){
		defaultLanguage=3;
	}else if(userLang==='es'){
		defaultLanguage=4;
	}/*else if(userLang==='ja'){
		defaultLanguage=5;
	}*/

	return{
		/* default settings */
		lang:defaultLanguage,
		selectedGame:DEFAULT_GAME,
		caughtDatabases:caughtDatabases,
		donateWarning:0,
		showLocations:true,
		showMeYourMoves:false, //haha

		save:function(){
			if(IS_STORAGE_AVAILABLE)
				localStorage.setItem(ITEM_NAME, JSON.stringify(this));
		},
		load:function(){
			if(IS_STORAGE_AVAILABLE && localStorage.getItem(ITEM_NAME)){
				var loadedSettings=JSON.parse(localStorage.getItem(ITEM_NAME));
				if(typeof loadedSettings.lang==='number' && loadedSettings.lang>=0 && loadedSettings.lang<=4){
					this.lang=loadedSettings.lang;
				}

				if(typeof loadedSettings.donateWarning==='number')
					this.donateWarning=loadedSettings.donateWarning;

				if(loadedSettings.showLocations===false)
					this.showLocations=false;

				if(loadedSettings.showMeYourMoves===true)
					this.showMeYourMoves=true;

				if(typeof loadedSettings.selectedGame==='number' && loadedSettings.selectedGame>=0 && loadedSettings.selectedGame<=12)
					this.selectedGame=loadedSettings.selectedGame;

				if(typeof loadedSettings.caughtDatabases==='object'){
					for(var i=0; i<this.caughtDatabases.length && i<loadedSettings.caughtDatabases.length; i++){
						this.caughtDatabases[i].import(loadedSettings.caughtDatabases[i]._array)
					}
				}
				
			}
		}
	}
}());







function generateRange(min,max){
	var a=[];
	for(var i=min;i<=max;i++)
		a.push(i);
	return a
}



function searchPokemon(q){
	var results=[];

	q=q.clean().replace(/^0+/,'').replace(/_0+/,'');
	if(q){
		if(/^\d+$/.test(q)){
			q=parseInt(q);
			for(var i=0; i<currentDex.length; i++)
				if(getCurrentDexNumberInt(currentDex[i], nationalMode)===q)
					results.push(currentDex[i]);
		}else{
			var queryRegex=new RegExp(q);
			for(var i=0; i<currentDex.length && results.length<5; i++){
				if(queryRegex.test(getPokeName(currentDex[i]).clean()))
					results.push(currentDex[i]);
			}
		}
	}

	return results
}


function refreshSearchResults(nationalIds){
	empty('search-results');
	for(var i=0; i<nationalIds.length; i++){
		var regionalIndex=getRegionalIndex(nationalIds[i]);
		var caught=MinidexSettings.caughtDatabases[MinidexSettings.selectedGame].get(regionalIndex);

		var form=0;
		if(!nationalMode && (currentGame.id==='sm' || currentGame.id==='usum') && ALOLAN_FORMS.indexOf(nationalIds[i])!==-1)
			form=1;

		var a=document.createElement('a');
		a.href=generatePokemonLink(nationalIds[i], form);


		addEvent(a, 'click', _clickLink);
		a.appendChild(generateIcon(nationalIds[i], form, 1));
		a.appendChild(createElement('span',{html:'<span class="mono">'+getCurrentDexNumber(nationalIds[i])+'</span> '+getPokeName(nationalIds[i])}));

		el('search-results').appendChild(a);

		if(regionalIndex!==-1 && caught)
			a.appendChild(createElement('i',{class:'sprite caught-mini'}));
	}
	if(el('search-results').children.length)
		el('search-results').className='visible';
	else
		el('search-results').className='';
}


function forceGoToHome(){
	if(currentDistanceFromHome && !currentPoke) /* location or settings */
		window.history.go(-1);
	else if(currentDistanceFromHome>0)
		window.history.go(-currentDistanceFromHome);
	else /* go to settings */
		pushState('#settings');
}
function nextPokemon(){
	var index=currentDex.indexOf(currentPoke);
	if(index<(currentDex.length-1) && index!==-1){
		if(nationalMode){
			pushState('#national/'+(currentPoke+1));
		}else{
			if(currentGame.generation!==5)
				index++;
			pushState('#'+currentGame.id+'/'+formatDexNumber(index+1));
		}
	}
}
function previousPokemon(){
	var index=currentDex.indexOf(currentPoke);
	if(index>0){
		if(nationalMode){
			pushState('#national/'+(currentPoke-1));
		}else{
			if(currentGame.generation!==5)
				index++;
			pushState('#'+currentGame.id+'/'+formatDexNumber(index-1));
		}
	}
}

function setLanguage(l){
	MinidexSettings.lang=l;

	if(l===4){
		TYPES=LANG_ES.TYPES;
		ABILITIES=LANG_ES.ABILITIES;
		MOVES=LANG_ES.MOVES;
		POKEMON_NAMES=LANG_ES.POKEMON_NAMES;
		STRINGS=LANG_ES.STRINGS;
	}else{
		TYPES=LANG_EN.TYPES;
		ABILITIES=LANG_EN.ABILITIES;
		MOVES=LANG_EN.MOVES;
		POKEMON_NAMES=LANG_EN.POKEMON_NAMES;
		STRINGS=LANG_EN.STRINGS;
	}

	resetGUIStrings(l);
}
function resetGUIStrings(l){
	var translatableElements=document.querySelectorAll('[data-translate]');
	for(var i=0;i<translatableElements.length;i++)
		translatableElements[i].innerHTML=localize(translatableElements[i].getAttribute('data-translate'));
}



// credit: http://www.javascriptkit.com/javatutors/touchevents2.shtml
function addTouchEvents(){
	var THRESOLD=120, //required min distance traveled to be considered swipe
	RESTRAINT=50, // maximum distance allowed at the same time in perpendicular direction
	ALLOWED_TIME=300; // maximum time allowed to travel that distance

	var startX, startY,
	distX, distY,
	startTime;


	addEvent(el('pokemon'), 'touchstart', function(evt){
		startX=evt.changedTouches[0].pageX,
		startY=evt.changedTouches[0].pageY,
		startTime=new Date().getTime(); // record time when finger first makes contact with surface
		//evt.preventDefault();
	});
  
	/*addEvent(el('pokemon'), 'touchmove', function(evt){
		evt.preventDefault() // prevent scrolling when inside DIV
	}, false)*/
  
	addEvent(el('pokemon'), 'touchend', function(evt){
		distX = evt.changedTouches[0].pageX - startX // get horizontal dist traveled by finger while in contact with surface
		distY = evt.changedTouches[0].pageY - startY // get vertical dist traveled by finger while in contact with surface

		if ((new Date().getTime() - startTime) <= ALLOWED_TIME){ // first condition for awipe met
			if (Math.abs(distX) >= THRESOLD && Math.abs(distY) <= RESTRAINT){ // 2nd condition for horizontal swipe met
				if(distX<0){// if dist traveled is negative, it indicates left swipe
					nextPokemon();
				}else if(distX>0){
					previousPokemon();
				}
			}
		}
		//evt.preventDefault()
	}, false)
}
  








function focusSearch(force){
	if(!IS_MOBILE || force){
		el('search').focus();
	}
}





addEvent(window,'load',function(){
	/* startup, load settings */
	MinidexSettings.load();
	el('checkbox-locations').checked=MinidexSettings.showLocations;
	el('checkbox-learnsets').checked=MinidexSettings.showMeYourMoves;
	el('select-language').value=MinidexSettings.lang;
	setLanguage(MinidexSettings.lang);
	if(!MinidexSettings.donateWarning || MinidexSettings.donateWarning<((new Date()).getTime()-1296000000)){
		show('donate-warning');
	}


	/* add touch events */
	addTouchEvents();

	/* add keyboard events */
	addEvent(window,'keyup',function(evt){
		if(currentDistanceFromHome){
			if(evt.keyCode===37)
				previousPokemon();
			else if(evt.keyCode===39)
				nextPokemon()
			else if(evt.keyCode===27)
				forceGoToHome();
		}
	});
	addEvent(el('search'),'focus',function(evt){
		if(hideSearchDelay)
			clearTimeout(hideSearchDelay);
		if(el('search-results').children.length)
			el('search-results').className='visible';
	});
	addEvent(el('search'),'blur',function(evt){
		if(hideSearchDelay)
			clearTimeout(hideSearchDelay);
		hideSearchDelay=window.setTimeout(function(){
			el('search-results').className='';
		}, 150);
	});
	addEvent(el('search'),'input',function(evt){
		refreshSearchResults(searchPokemon(this.value));
	});
	addEvent(el('search'),'keyup',function(evt){
		if(evt.keyCode===13 && el('search-results').children.length===1){
			el('search-results').children[0].click();
			el('search').blur();
		}
	});
	/* add history events */
	addEvent(window,'popstate',function(evt){
		if(!evt.state || !evt.state.page){
			pushState('', true);
			currentDistanceFromHome=0;
			focusSearch();
			el('button-menu').className='sprite settings clickable';
		}else{
			pushState(evt.state.page, true);
			currentDistanceFromHome=evt.state.distanceFromHome;
			el('button-menu').className='sprite back clickable';
		}
	});


	/* create checkboxes for games */
	var optGroups=new Array(MAX_GENERATION);
	for(var i=0; i<MAX_GENERATION; i++){
		optGroups[i]=document.createElement('optgroup');
		optGroups[i].label='Generation '+ROMAN_NUMBERS[i];
		el('select-game').appendChild(optGroups[i]);
	}
	for(var i=0; i<GAMES.length; i++){
		var option=document.createElement('option');
		option.value=i;
		option.innerHTML=getGamesTitle(GAMES[i]);
		optGroups[GAMES[i].generation-1].appendChild(option);
	}
	el('select-game').value=MinidexSettings.selectedGame;
	setGame(MinidexSettings.selectedGame);

	var caughtButton=createCaughtButton(false);
	caughtButton.id='caught-button';
	el('pokemon').children[0].appendChild(caughtButton);

	/* parse parameter */
	if(/#(\w+\/\d+(\/form\/\d+)?|\w+\/location\/\d+)$/.test(window.location.href)){
		var url=window.location.href.substring(window.location.href.indexOf('#'));
		history.replaceState('', false, '#home');
		pushState(url);
	}else{
		focusSearch();
	}
});