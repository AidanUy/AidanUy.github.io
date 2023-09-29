function getBoons(text) {
    let boonList = ""
    switch(text){
        case "Aphrodite":
            boonList = aphroditeBoons;
            break;
        case "Ares":
            boonList = aresBoons;
            break;
        case "Artemis":
            boonList = artemisBoons;
            break;
        case "Athena":
            boonList = athenaBoons;
            break;
        case "Demeter":
            boonList = demeterBoons;
            break;
        case "Dionysus":
            boonList = dionysusBoons;
            break;
        case "Poseidon":
            boonList = poseidonBoons;
            break;
        case "Zeus":
            boonList = zeusBoons;
            break;
    }
    document.getElementById('middleText').innerHTML = 'Click on a boon to add it to your current build';
    let button = document.createElement('button');
    button.addEventListener('click', function() {
        document.getElementById('middleText').innerHTML = 'Click on a god to access their boons';
        document.getElementById('backToGods').remove();
        arrayToTable('boonTable',godBoons);
    });
    button.setAttribute('class','centerButton');
    button.innerHTML = 'Back to gods';
    button.setAttribute('id','backToGods');
    document.getElementById('middleDiv').appendChild(button);
    arrayToTable('boonTable',boonList);
}

function addBoon(filePath,text,boonName) {
    let button = document.createElement('button');
    button.addEventListener('click', function() {
        deleteBoon(button);
    });

    let img = document.createElement('img');
    img.src = filePath;
    img.setAttribute('width', 100);
    img.setAttribute('height', 100);
    let paragraph1 = document.createElement('p');
    paragraph1.innerHTML = boonName;
    button.appendChild(paragraph1);
    button.appendChild(img);
    button.style.width = '200px';

    let paragraph = document.createElement('p');
    paragraph.innerHTML = text;

    currentBuild.push([button,paragraph]);

    arrayToTable('buildTable',currentBuild);
}

function deleteBoon(button){
    for(let i = 0; i < currentBuild.length; i++) {
        if(currentBuild[i][0] == button) {
            currentBuild.splice(i,1);
        }
    }
    arrayToTable('buildTable',currentBuild);
}

function clearBuild(){
    let table = document.getElementById("buildTable");
    currentBuild = [[currentBuildHeader,clearBuildButton]];
    arrayToTable('buildTable',currentBuild);
}

function initializeCurrentBuildHeader() {
    let tableHeader = document.createElement('th');
    tableHeader.innerHTML = 'Current Build';
    tableHeader.style.display = 'block';
    return tableHeader;
}

function initalizeClearBuildButton() {
    let button = document.createElement('button');
    button.innerHTML = 'Clear Build';
    button.addEventListener('click', function() {
        clearBuild();
    });
    return button;
}

function initializeBoons(filePath,boonArray) {
    for(let i = 0; i < filePath.length; i++){
        let button = document.createElement('button');

        let img = document.createElement('img');
        img.src = filePath[i][0];

        button.addEventListener('click',function() {
            addBoon(filePath[i][0],filePath[i][1],filePath[i][2]);
        });
        img.setAttribute('width', 100);
        img.setAttribute('height', 100);
        let boonText = document.createElement('p');
        boonText.innerHTML = filePath[i][2];
        button.appendChild(boonText);
        button.appendChild(img);
        button.style.width = '200px';

        let paragraph = document.createElement('p');
        paragraph.innerHTML = filePath[i][1];
    
        boonArray.push([button,paragraph]);

    }
}

function initializeGods(filePath,boonArray) {
    for(let i = 0; i < filePath.length; i++){
        let button = document.createElement('button');

        let img = document.createElement('img');
        img.src = filePath[i][0];

        button.addEventListener('click',function() {
            getBoons(filePath[i][1]);
        });
        img.setAttribute('width', 200);
        img.setAttribute('height', 200);

        button.appendChild(img);
        let paragraph = document.createElement('p');
        paragraph.innerHTML = filePath[i][1];
    
        boonArray.push([button,paragraph]);

    }
}

function arrayToTable(tableID,arr) {
    document.getElementById(tableID).innerHTML = "";
    for(let x = 0; x < arr.length; x++) {
        let table = document.getElementById(tableID);
        let row = table.insertRow(x);    

        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);

        cell2.setAttribute('style','width:200px');

        cell1.appendChild(arr[x][0]);
        cell2.appendChild(arr[x][1]);
    }    
}

let aphroditeBoons = [];
let aphroditePaths = [
    ["Boons/Aphrodite/Heartbreak_Strike.webp","Your Attack deals more damage and inflicts Weak.","Heartbreak Strike"],
    ["Boons/Aphrodite/Heartbreak_Flourish.webp","Your Special deals more damage and inflicts Weak.","Heartbreak Flourish"],
    ["Boons/Aphrodite/Crush_Shot.webp","Your Cast is a wide, short-range blast that inflicts Weak.","Crush Shot"],
    ["Boons/Aphrodite/Passion_Flare.webp","Your Cast damages foes around you and inflicts Weak.","Passion Flare"],
    ["Boons/Aphrodite/Passion_Dash.webp",
    "Your Dash inflicts damage where you end up, inflicting Weak.",
    "Passion Dash"],
    ["Boons/Aphrodite/Aphrodite's_Aid.webp",
    "Your Call fires a seeking projectile that inflicts Charm. Full Gauge Bonus: 2500 damage",
    "Aphrodite's Aid"],
    ["Boons/Aphrodite/Dying_Lament.webp",
    "When foes are slain, they damage nearby foes and inflict Weak.",
    "Dying Lament"],
    ["Boons/Aphrodite/Wave_of_Despair.webp",
    "After you take damage, damage nearby foes and inflict Weak.",
    "Wave of Despair"],
    ["Boons/Aphrodite/Different_League.webp",
    "Resist some damage from nearby foes' attacks.",
    "Different League"],
    ["Boons/Aphrodite/Life_Affirmation.webp","Any Health chamber rewards are worth more.","Life Affirmation"],
    ["Boons/Aphrodite/Empty_Inside.webp","Your Weak effects have a longer duration.","Empty Inside"],
    ["Boons/Aphrodite/Sweet_Surrender.webp","Weak-afflicted foes are also more susceptible to damage.","Sweet Surrender"],
    ["Boons/Aphrodite/Broken_Resolve.webp","Your Weak effects are more potent.","Broken Resolve"],
    ["Boons/Aphrodite/Blown_Kiss.webp","Your Cast shoots farther and is stronger against undamaged foes.","Blown Kiss"],
    ["Boons/Aphrodite/Unhealthy_Fixation.webp","Your Weak effects also have a 15% chance to Charm foes. Charm Duration: 4 Sec.","Unhealthy Fixation"]
];
let aresBoons = []
let aresPaths = [
    ["Boons/Ares/Curse_of_Agony.webp","Your Attack inflicts Doom.","Curse of Agony"],
    ["Boons/Ares/Curse_of_Pain.webp","Your Special inflicts Doom.","Curse of Pain"],
    ["Boons/Ares/Slicing_Shot.webp","Your Cast sends a Blade Rift hurling ahead.","Slicing Shot"],
    ["Boons/Ares/Slicing_Flare.webp","Your Cast sends a large Blade Rift hurling ahead for a brief time.","Slicing Flare"],
    ["Boons/Ares/Blade_Dash.webp","Your Dash creates a Blade Rift where you started.","Blade Dash"],
    ["Boons/Ares/Ares_Aid.webp","Your Call turns you into an Impervious Blade Rift for 1.2 Sec. Max gauge bonus: 5 sec. duration","Ares' Aid"],
    ["Boons/Ares/Curse_of_Vengeance.webp","After you take damage, inflict Doom on surrounding foes.","Curse of Vengeance"],
    ["Boons/Ares/Urge_to_Kill.webp","Your Attack, Special, and Cast deal more damage.","Urge to Kill"],
    ["Boons/Ares/Battle_Rage.webp","After slaying a foe, your next Attack or Special deals more damage.","Battle Rage"],
    ["Boons/Ares/Blood_Frenzy.webp","After using Death Defiance, deal more damage that encounter.","Blood Frenzy"],
    ["Boons/Ares/Black_Metal.webp","Your Blade Rift powers deal damage in a wider area.","Black Metal"],
    ["Boons/Ares/Engulfing_Vortex.webp","Your Blade Rift effects last longer and pull foes in.","Engulfing Vortex"],
    ["Boons/Ares/Dire_Misfortune.webp","Your Doom effects deal more damage when applied multiple times.","Dire Misfortune"],
    ["Boons/Ares/Impending_Doom.webp","Your Doom effects deal more damage, but take+0.5 Sec. to activate.","Impending Doom"],
    ["Boons/Ares/Vicious_Cycle.webp","Your Blade Rift effects deal more damage for each consecutive hit.Damage Increase per Hit: +2","Vicious Cycle"]
];
let artemisBoons=[];
let artemisPaths=[
    ["Boons/Artemis/Deadly_Strike.webp","Your Attack is stronger, with +15% chance to deal Critical damage.","Deadly Strike"],
    ["Boons/Artemis/Deadly_Flourish.webp","Your Special is stronger, with +20% chance to deal Critical Damage.","Deadly Flourish"],
    ["Boons/Artemis/True_Shot.webp","Your Cast seeks foes, with a 10% chance to deal Critical damage.","True Shot"],
    ["Boons/Artemis/Hunter's Flare.webp","Your Cast damages foes around you, with a 10% Critical chance.","Hunter's Flare"],
    ["Boons/Artemis/Hunter_Dash.webp","Your Dash-Strike deals more damage.","Hunter Dash"],
    ["Boons/Artemis/Artemis_Aid.webp","Your Call fires a seeking arrow with +35% Critical chance.","Artemis' Aid"],
    ["Boons/Artemis/Pressure_Points.webp", "Any damage you deal has a chance to be Critical.","Pressure Points"],
    ["Boons/Artemis/Exit_Wounds.webp","Your foes take damage when your Cast Ammo stuck in them is dislodged.","Exit Wounds"],
    ["Boons/Artemis/Hide_Breaker.webp","Your Critical effects deal even more damage to Armor.","Hide Breaker"],
    ["Boons/Artemis/Clean_Kill.webp","Your Critical effects deal even more damage.","Clean Kill"],
    ["Boons/Artemis/Hunter_Instinct.webp","Your God Gauge charges faster when you deal Critical damage.","Hunter Instinct"],
    ["Boons/Artemis/Hunters_Mark.webp","After you deal Critical damage to a foe, a foe near it is Marked.","Hunter's Mark"],
    ["Boons/Artemis/Support_Fire.webp","After you Cast, or hit with an Attack or Special, fire a seeking arrow.","Support Fire"],
    ["Boons/Artemis/Fully_Loaded.webp","Gain extra Cast Ammo for your Cast. Max Ammo: +2 Cast Ammo","Fully Loaded"]
];
let athenaBoons = [];
let athenaPaths = [
    ["Boons/Athena/Divine_Strike.webp","Your Attack is stronger, and can Deflect.","Divine Strike"],
    ["Boons/Athena/Divine_Flourish.webp","Your Special is stronger, and can Deflect.","Divine Flourish"],
    ["Boons/Athena/Phalanx_Shot.webp","Your Cast damages foes in a small area, and can Deflect.","Phalanx Shot"],
    ["Boons/Athena/Phalanx_Flare.webp","Your Cast damages foes around you, and can Deflect.","Phalanx Flare"],
    ["Boons/Athena/Divine_Dash.webp","Your Dash deals damage and can Deflect.","Divine Dash"],
    ["Boons/Athena/Athenas_Aid.webp","Your Call briefly makes you Invulnerable and Deflect all attacks. Max gauge bonus: 6x duration","Athena's Aid"],
    ["Boons/Athena/Holy_Shield.webp","After you take damage, damage nearby foes and briefly Deflect.","Holy Shield"],
    ["Boons/Athena/Bronze_Skin.webp","Resist damage from foes' attacks.","Bronze Skin"],
    ["Boons/Athena/Sure_Footing.webp","Resist damage from Traps.","Sure Footing"],
    ["Boons/Athena/Proud_Bearing.webp","You begin each Encounter with your God Gauge partly full.","Proud Bearing"],
    ["Boons/Athena/Blinding_Flash.webp","Your abilities that can Deflect also make foes Exposed.","Blinding Flash"],
    ["Boons/Athena/Brilliant_Riposte.webp","When you Deflect attacks, they deal more damage.","Brilliant Riposte"],
    ["Boons/Athena/Deathless_Stand.webp","Death Defiance makes you Impervious longer. Replenish 1 charge now.","Deathless Stand"],
    ["Boons/Athena/Last_Stand.webp","Death Defiance restores more Health than usual. Replenish 1 charge now.","Last Stand"],
    ["Boons/Athena/Divine_Protection.webp","You have a barrier that negates incoming damage. Barrier Cooldown: 20 Sec.","Divine Protection"]
];
let demeterBoons = [];
let demeterPaths = [
    ["Boons/Demeter/Frost_Strike.webp","Your Attack is stronger and inflicts Chill.","Frost Strike"],
    ["Boons/Demeter/Frost_Flourish.webp","Your Special is stronger and inflicts Chill.","Frost Flourish"],
    ["Boons/Demeter/Crystal_Beam.webp","Your Cast drops a crystal that fires a beam straight ahead for 5 sec.","Crystal Beam"],
    ["Boons/Demeter/Icy_Flare.webp","Your Cast damages foes around you and inflicts Chill.","Icy Flare"],
    ["Boons/Demeter/Mistral_Dash.webp","Your Dash shoots a gust ahead that inflicts Chill.","Mistral Dash"],
    ["Boons/Demeter/Demeters_Aid.webp","Your Call creates a winter vortex for 5 Sec., deals damage every 0.25 Sec inflicting Chill.","Demeter's Aid"],
    ["Boons/Demeter/Frozen_Touch.webp","After you take damage, damage and completely Chill your foe.","Frozen Touch"],
    ["Boons/Demeter/Rare_Crop.webp","Your Boons become Common, then gain Rarity every 3 Encounter(s).","Rare Crop"],
    ["Boons/Demeter/Ravenous_Will.webp","While you have no Cast Ammo, take 10% less damage and deal more.","Ravenous Will"],
    ["Boons/Demeter/Nourished_Soul.webp","Any Health effects are more potent. Restore +30% now.","Nourished Soul"],
    ["Boons/Demeter/Snow_Burst.webp","Whenever you Cast, damage nearby foes and inflict Chill.","Snow Burst"],
    ["Boons/Demeter/Arctic_Blast.webp","Applying 10 stacks of Chill causes a blast, clearing the effect.","Arctic Blast"],
    ["Boons/Demeter/Killing_Freeze.webp","When all foes are Chill afflicted, they become Slow and Decay.","Killing Freeze"],
    ["Boons/Demeter/Glacial_Glare.webp","Your Cast fires longer and inflicts Chill.","Glacial Glare"],
    ["Boons/Demeter/Winter_Harvest.webp","Chill-affected foes shatter at 10% hp, inflicting Chill nearby.Shatter Area Damage: 50","Winter Harvest"]
];
let dionysusBoons = [];
let dionysusPaths = [
    ["Boons/Dionysus/Drunken_Strike.webp","Your Attack inflicts Hangover.","Drunken Strike"],
    ["Boons/Dionysus/Drunken_Flourish.webp","Your Special inflicts Hangover.","Drunken Flourish"],
    ["Boons/Dionysus/Trippy_Shot.webp","Your Cast lobs a projectile that bursts into Festive Fog.","Trippy Shot"],
    ["Boons/Dionysus/Trippy_Flare.webp","Your Cast damages foes around you, leaving behind Festive Fog.","Trippy Flare"],
    ["Boons/Dionysus/Drunken_Dash.webp","Your Dash inflicts foes near you with Hangover.","Drunken Dash"],
    ["Boons/Dionysus/Dionysus_Aid.webp","Your Call inflicts Hangover to foes all around you for 1.5 Sec.","Dionysus' Aid"],
    ["Boons/Dionysus/After_Party.webp","If your Health is low after Encounters, restore to the threshold.","After Party"],
    ["Boons/Dionysus/Positive_Outlook.webp","Take less damage while at 40% Health or below.","Positive Outlook"],
    ["Boons/Dionysus/Premium_Vintage.webp","Gain Health when you pick up Nectar. Receive 1 Nectar now.","Premium Vintage"],
    ["Boons/Dionysus/Strong_Drink.webp","Using a Fountain restores all Health and gives you bonus damage","Boons/Dionysus/Strong_Drink.webp"],
    ["Boons/Dionysus/Bad_Influence.webp","Deal more damage while 3 foes are Hangover-afflicted.","Bad Influence"],
    ["Boons/Dionysus/Numbing_Sensation.webp","Your Hangover effects also make foes move slower.","Numbing Sensation"],
    ["Boons/Dionysus/Peer_Pressure.webp","Hangover-afflicted foes contaminate other nearby foes every 4 Sec.","Peer Pressure"],
    ["Boons/Dionysus/High_Tolerance.webp","Take less damage while standing in Festive Fog.","High Tolerance"],
    ["Boons/Dionysus/Black_Out.webp","Hangover-afflicted foes take bonus damage in Festive Fog. Fog Combo Damage: +60%","Black Out"]
];
let poseidonBoons = [];
let poseidonPaths = [
    ["Boons/Poseidon/Tempest_Strike.webp","Your Attack deals more damage and knocks foes away.","Tempest Strike"],
    ["Boons/Poseidon/Tempest_Flourish.webp","Your Special deals more damage and knocks foes away.","Tempest Flourish"],
    ["Boons/Poseidon/Flood_Shot.webp","Your Cast damages foes in an area and knocks them away.","Flood Shot"],
    ["Boons/Poseidon/Flood_Flare.webp","Your Cast damages foes around you and knocks them away.","Flood Flare"],
    ["Boons/Poseidon/Tidal_Dash.webp","Your Dash damages foes in an area and knocks them away.","Tidal Dash"],
    ["Boons/Poseidon/Poseidons_Aid.webp","Your Call makes you surge into foes while Impervious for 1.2 Sec.","Poseidon's Aid"],
    ["Boons/Poseidon/Typhoons_Fury.webp","You deal more damage when slamming foes into barriers.","Typhoon's Fury"],
    ["Boons/Poseidon/Hydraulic_Might.webp","Your Attack and Special are stronger the first 10 Sec. in Encounter(s).","Hydraulic Might"],
    ["Boons/Poseidon/Oceans_Bounty.webp","Any Gemstone, Darkness or Obols chamber rewards are worth more.","Ocean's Bounty"],
    ["Boons/Poseidon/Sunken_Treasure.webp","Gain an assortment of Gemstone, Darkness, Obols and Health.","Sunken Treasure"],
    ["Boons/Poseidon/Razor_Shoals.webp","Using knock-away effects also Rupture foes.","Razor Shoals"],
    ["Boons/Poseidon/Boiling_Point.webp","Your God Gauge charges faster when you take damage.","Boiling Point"],
    ["Boons/Poseidon/Breaking_Wave.webp","Slamming foes into walls or corners creates a watery blast in the area.","Breaking Wave"],
    ["Boons/Poseidon/Wave_Pounding.webp","Your boons with Knock-Away effects deal bonus damage to bosses.","Wave Pounding"],
    ["Boons/Poseidon/Rip_Current.webp","Your Call pulls in foes and the effect lasts longer.","Rip Current"]
];
let zeusBoons = [];
let zeusPaths = [
    ["Boons/Zeus/Lightning_Strike.webp","Your Attack emits chain-lightning when you damage a foe.","Lightning Strike"],
    ["Boons/Zeus/Thunder_Flourish.webp","Your Special causes a lightning bolt to strike nearby foes.","Thunder Flourish"],
    ["Boons/Zeus/Electric_Shot.webp","Your Cast is a burst of chain-lightning that bounces between foes.","Electric Shot"],
    ["Boons/Zeus/Thunder_Flare.webp","Your Cast causes a lightning bolt to strike nearby foes.","Thunder Flare"],
    ["Boons/Zeus/Thunder_Dash.webp","Your Dash causes a lightning bolt to strike nearby foes.","Thunder Dash"],
    ["Boons/Zeus/Zeus_Aid.webp","Your Call makes lightning strike nearby foes repeatedly for 1.5 Sec.","Zeus' Aid"],
    ["Boons/Zeus/Heavens_Vengeance.webp","After you take damage, your foe is struck by lightning.","Heaven's Vengeance"],
    ["Boons/Zeus/Lightning_Reflexes.webp","After you Dash just before getting hit, a bolt strikes a nearby foes.","Lightning Reflexes"],
    ["Boons/Zeus/Storm_Lightning.webp","Your chain-lightning effects bounce more times before expiring.","Storm Lightning"],
    ["Boons/Zeus/High_Voltage.webp","Your lightning bolt effects deal damage in a larger area.","High Voltage"],
    ["Boons/Zeus/Static_Discharge.webp","Your lightning effects also make foes Jolted.","Static Discharge"],
    ["Boons/Zeus/Clouded_Judgment.webp","Your God Gauge charges faster when you deal or take damage.","Clouded Jdugement"],
    ["Boons/Zeus/Billowing_Strength.webp","After using Call, you deal more damage for 15 Sec.","Billowing Strength"],
    ["Boons/Zeus/Splitting_Bolt.webp","All your lightning effects create an additional burst. Lightning Damage: 40","Splitting Bolt"]
];
let godBoons = [];
let godFilePath = [
    ["God Icons/Aphrodite Icon.png", "Aphrodite"],
    ["God Icons/Ares Icon.png", "Ares"],
    ["God Icons/Artemis Icon.png", "Artemis"],
    ["God Icons/Athena Icon.png", "Athena"],
    ["God Icons/Demeter Icon.png", "Demeter"],
    ["God Icons/Dionysus Icon.png", "Dionysus"],
    ["God Icons/Poseidon Icon.png", "Poseidon"],
    ["God Icons/Zeus Icon.png", "Zeus"]
];

let currentBuildHeader = initializeCurrentBuildHeader();
let clearBuildButton = initalizeClearBuildButton();
let currentBuild = [[currentBuildHeader,clearBuildButton]];
arrayToTable('buildTable',currentBuild);

initializeBoons(aphroditePaths,aphroditeBoons);
initializeBoons(aresPaths,aresBoons);
initializeBoons(artemisPaths,artemisBoons);
initializeBoons(athenaPaths,athenaBoons);
initializeBoons(demeterPaths,demeterBoons);
initializeBoons(dionysusPaths,dionysusBoons);
initializeBoons(poseidonPaths,poseidonBoons);
initializeBoons(zeusPaths,zeusBoons);

initializeGods(godFilePath,godBoons);
arrayToTable('boonTable',godBoons);