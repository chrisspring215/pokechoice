
var bug="Bug",electric="Electric",fire="Fire",grass="Grass",normal="Normal",rock="Rock",dark="Dark",fairy="Fairy",flying="Flying",ground="Ground",poison="Poison",steel="Steel",dragon="Dragon",fighting="Fighting",ghost="Ghost",ice="Ice",psychic="Psychic",water="Water";


function popEffective(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var s=[[bug,a],[electric,b],[fire,c],[grass,d],[normal,e],[rock,f],[dark,g],[fairy,h],[flying,i],[ground,j],[poison,k],[steel,l],[dragon,m],[fighting,n],[ghost,o],[ice,p],[psychic,q],[water,r]];return s}
var pokemon = new Array();

var pokemon = [
	
	{
	      dexNumber : "001",
	           name : "Bulbasaur",
	 	       type : [poison],
	  effectiveness : popEffective(0,.8,1.25,.64,0,0,0,.8,1.25,0,0,0,0,.8,0,1.25,1.25,0),
	  strongAgainst : [grass, fairy],
	    weakAgainst : [ground, psychic],
	    popDefender : false
	},

	{
	      dexNumber : "004",
	           name : "Charmander",
	 	       type : [fire],
	  effectiveness : popEffective(0,.8,1.25,.64,0,0,0,.8,1.25,0,0,0,0,.8,0,1.25,1.25,0),
	  strongAgainst : [steel, bug, ice, grass],
	    weakAgainst : [ground, rock, water],
	    popDefender : false
	},

	{
	      dexNumber : "074",
	           name : "Geodude",
	 	       type : [rock],
	  effectiveness : popEffective(0,.8,1.25,.64,0,0,0,.8,1.25,0,0,0,0,.8,0,1.25,1.25,0),
	  strongAgainst : [fire, electric, poison, rock, steel, ice, flying, bug],
	    weakAgainst : [water, grass, ice, fighting, ground, steel],
	    popDefender : false
	},

	{
	      dexNumber : "097",
	           name : "Hypno",
	 	       type : [psychic],
	  effectiveness : popEffective(0,1.25,0.8,1.25,0,0,0,0,0,0,0,0.8,0,0,0,0.8,0,0.8),
	  strongAgainst : [fighting, poison],
	    weakAgainst : [bug, ghost, dark],
		popDefender : true
	},

	{
	      dexNumber : "119",
	           name : "Seaking",
	 	       type : [water],
	  effectiveness : popEffective(0,1.25,0.8,1.25,0,0,0,0,0,0,0,0.8,0,0,0,0.8,0,0.8),
	  strongAgainst : [fire, ground, rock],
	    weakAgainst : [electric, grass],
		popDefender : true
	},

	{
	      dexNumber : "139",
	           name : "Omastar",
	 	       type : [rock, water],
	  effectiveness : popEffective(0,1.25,0.8,1.25,0,0,0,0,0,0,0,0.8,0,0,0,0.8,0,0.8),
	  strongAgainst : [fire, ground, rock],
	    weakAgainst : [electric, grass],
		popDefender : true
	},

	{
	      dexNumber : "134",
	           name : "Vaporeon",
	 	       type : [water],
	  effectiveness : popEffective(0,1.25,0.8,1.25,0,0,0,0,0,0,0,0.8,0,0,0,0.8,0,0.8),
	  strongAgainst : [fire, ground, rock],
	    weakAgainst : [electric, grass],
		popDefender : true
	}
]

function init() {
	var defenderList = document.getElementById('defenderList');

	for (var i = 0; i <= pokemon.length - 1; i++) {
		var devenderNode = document.createElement('option');
		devenderNode.setAttribute('name',  pokemon[i].name);
		devenderNode.setAttribute('value', pokemon[i].dexNumber);
		devenderNode.setAttribute('class', pokemon[i].type);
		devenderNode.innerHTML = pokemon[i].dexNumber + ' : ' + pokemon[i].name + ' - '  + ' <i>' + pokemon[i].type + '</i>'
		defenderList.appendChild(devenderNode);
	}
}

function getList() {
	var defender = document.getElementById('defenderList').value;
	var attackerList = [];

	for (var i = 0; i <= pokemon.length - 1; i++) {
		if (pokemon[i].dexNumber === defender) {	
			var defenderTypes = pokemon[i].type
			var defenderType1 = pokemon[i].type[0]
			var defenderType2 = pokemon[i].type[1]
		}
	}

	for (var i = 0; i <= pokemon.length - 1; i++) {
		var attackerStrLength = pokemon[i].strongAgainst.length;

		for (var j = 0; j <= attackerStrLength - 1; j++) {
			if (pokemon[i].strongAgainst[j] === defenderType1) {
				attackerList.push(pokemon[i].name)
			}
		}
	}

	alert(attackerList)
}