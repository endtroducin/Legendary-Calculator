// const onClick = (event) => {
//   console.log(event.srcElement.id);
// }
// window.addEventListener('click', onClick);


const jodah = {
  name: "jodah",
  quantity: 0,
  power: 5,
  toughness: 5,
};

const mirrorBox = {
  name: "mirrorBox",
  quantity: 0,
};

const cadric = {
  name: "cadric",
  quantity: 0,
};

const heroesPodium = {
  name: "heroesPodium",
  quantity: 0,
};

const jetmir = {
  name: "jetmir",
  quantity: 0,
};


const legendaryCreatures = {
  quantity: 0,
};

const legendaryCreatureTokens = {
  quantity: 0,
};

const legendaryRule = {
  broken: false,
};

var totalBonus = {
  jodahBonus: 0,
  heroesPodiumBonus: 0,
  jetmirBonus: 0,
  mirrorBoxBonus: 0,
  mirrorBoxCreatureBonus: 0,
  dragonThroneBonus: false,
  dragonThroneBonusPower: 0,
  dragonThroneBonusToughness: 0,
  power: 0,
  toughness: 0,
};


//basic less
function less(object, lessButton, moreButton) {

  var lessElement = document.getElementById(lessButton);
  var moreElement = document.getElementById(moreButton);

  //disable button & add quantity
  if (object.quantity > 1) {
    object.quantity -= 1;
    lessLegendaryTokens(legendaryCreatureTokens, 'legendaryCreatureTokensLess', 'legendaryCreatureTokensMore')
  } else if (object.quantity == 1) {
    lessElement.classList.add("disabled");
    moreElement.classList.remove("disabled");
    object.quantity -= 1;
    lessLegendary(legendaryCreatures, 'legendaryCreaturesLess', 'legendaryCreaturesMore')
  }

  //update HTML with new quantity
  quantityUpdate();
  //calculate total
  total();
} 

//basic more
function more(object, lessButton, moreButton) {
  
  var lessElement = document.getElementById(lessButton);
  var moreElement = document.getElementById(moreButton);
  
  //enable lessButton
  var lessElement = document.getElementById(lessButton);
  lessElement.classList.remove("disabled");
  //check legendary rule & add or diable button
  if (object.quantity == 0 && legendaryRule.broken == false) {
    object.quantity += 1;
    moreLegendary(legendaryCreatures, 'legendaryCreaturesLess', 'legendaryCreaturesMore')
    var moreElement = document.getElementById(moreButton);
    moreElement.classList.add("disabled");
  } else if(object.quantity >= 0 && legendaryRule.broken == true) {
    object.quantity += 1;
      if (object.quantity == 1) {
        moreLegendary(legendaryCreatures, 'legendaryCreaturesLess', 'legendaryCreaturesMore')
      } else {
        moreLegendaryTokens(legendaryCreatureTokens, 'legendaryCreatureTokensLess', 'legendaryCreatureTokensMore')
      }
    
  } 
  
  // if (object.quantity == 1) {
  //   moreLegendary(legendaryCreatures, 'legendaryCreaturesLess', 'legendaryCreaturesMore')
  // } else {
  //   moreLegendaryTokens(legendaryCreatureTokens, 'legendaryCreatureTokensLess', 'legendaryCreatureTokensMore')
  // }
  //update HTML with new quantity
  quantityUpdate();
  //calculate total
  total();
}

//basic less artifact
function lessArtifact(object, lessButton, moreButton) {

  var lessElement = document.getElementById(lessButton);
  var moreElement = document.getElementById(moreButton);

  //disable button & add quantity
  if (object.quantity > 1) {
    object.quantity -= 1;
  } else if (object.quantity == 1) {
    lessElement.classList.add("disabled");
    moreElement.classList.remove("disabled");
    object.quantity -= 1;
  }

  //update HTML with new quantity
  quantityUpdate();
  //calculate total
  total();
} 

//basic more artifact
function moreArtifact(object, lessButton, moreButton) {
  
  var lessElement = document.getElementById(lessButton);
  var moreElement = document.getElementById(moreButton);
  
  //enable lessButton
  var lessElement = document.getElementById(lessButton);
  lessElement.classList.remove("disabled");
  //check legendary rule & add or diable button
  if (object.quantity == 0 && legendaryRule.broken == false) {
    object.quantity += 1;
    var moreElement = document.getElementById(moreButton);
    moreElement.classList.add("disabled");
  } else if(object.quantity >= 0 && legendaryRule.broken == true) {
    object.quantity += 1;
    
  } 
  
  // if (object.quantity == 1) {
  //   moreLegendary(legendaryCreatures, 'legendaryCreaturesLess', 'legendaryCreaturesMore')
  // } else {
  //   moreLegendaryTokens(legendaryCreatureTokens, 'legendaryCreatureTokensLess', 'legendaryCreatureTokensMore')
  // }
  //update HTML with new quantity
  quantityUpdate();
  //calculate total
  total();
}


//legend less artifact
function lessRuleArtifact(object, lessButton, moreButton) {

  var lessElement = document.getElementById(lessButton);
  var moreElement = document.getElementById(moreButton);

  //disable button & add quantity
  if (object.quantity > 1) {
    object.quantity -= 1;
  } else if (object.quantity == 1) {
    lessElement.classList.add("disabled");
    moreElement.classList.remove("disabled");
////    legendaryRule.broken = false;
    object.quantity -= 1;
    legendaryRuleToggle('legendaryRuleToggle')
  } 

  //update HTML with new quantity
  quantityUpdate();
  //calculate total
  total();
} 

//legend more artifact
function moreRuleArtifact(object, lessButton) {

  var lessElement = document.getElementById(lessButton);

  //enable lessButton
  lessElement.classList.remove("disabled");

////  legendaryRule.broken = true;
object.quantity += 1;
legendaryRuleToggle('legendaryRuleToggle')
  
  //update HTML with new quantity
  quantityUpdate();
  //calculate total
  total();
}

//legend less
function lessRule(object, lessButton, moreButton) {

  var lessElement = document.getElementById(lessButton);
  var moreElement = document.getElementById(moreButton);

  //disable button & add quantity
  if (object.quantity > 1) {
    object.quantity -= 1;
    lessLegendaryTokens(legendaryCreatureTokens, 'legendaryCreatureTokensLess', 'legendaryCreatureTokensMore')
  } else if (object.quantity == 1) {
    lessElement.classList.add("disabled");
    moreElement.classList.remove("disabled");
////    legendaryRule.broken = false;
    object.quantity -= 1;
    lessLegendary(legendaryCreatures, 'legendaryCreaturesLess', 'legendaryCreaturesMore')
    legendaryRuleToggle('legendaryRuleToggle')
  } 

  //update HTML with new quantity
  quantityUpdate();
  //calculate total
  total();
} 

//legend more
function moreRule(object, lessButton) {

  var lessElement = document.getElementById(lessButton);

  //enable lessButton
  lessElement.classList.remove("disabled");

////  legendaryRule.broken = true;
  object.quantity += 1;
  legendaryRuleToggle('legendaryRuleToggle')

  if (object.quantity == 1) {
    moreLegendary(legendaryCreatures, 'legendaryCreaturesLess', 'legendaryCreaturesMore')
  } else {
    moreLegendaryTokens(legendaryCreatureTokens, 'legendaryCreatureTokensLess', 'legendaryCreatureTokensMore')
  }
  
  //update HTML with new quantity
  quantityUpdate();
  //calculate total
  total();
}



//basic less legendary - same?
function lessLegendary(object, lessButton, moreButton) {

  var lessElement = document.getElementById(lessButton);
  var moreElement = document.getElementById(moreButton);

  //disable button & add quantity
  if (object.quantity > 1) {
    object.quantity -= 1;
  } else if (object.quantity == 1) {
    lessElement.classList.add("disabled");
    moreElement.classList.remove("disabled");
    object.quantity -= 1;
  }

  //update HTML with new quantity
  quantityUpdate();
  //calculate total
  total();
} 

//basic more legendary
function moreLegendary(object, lessButton, moreButton) {
  
  var lessElement = document.getElementById(lessButton);
  var moreElement = document.getElementById(moreButton);

  
  //enable lessButton
  var lessElement = document.getElementById(lessButton);
  lessElement.classList.remove("disabled");
  object.quantity += 1;
    
  //update HTML with new quantity
  quantityUpdate();
  //calculate total
  total();
}



//basic less legendary tokens - same?
function lessLegendaryTokens(object, lessButton, moreButton) {

  var lessElement = document.getElementById(lessButton);
  var moreElement = document.getElementById(moreButton);

  //disable button & add quantity
  if (object.quantity > 1) {
    object.quantity -= 1;
  } else if (object.quantity == 1) {
    lessElement.classList.add("disabled");
    moreElement.classList.remove("disabled");
    object.quantity -= 1;
  }

  //update HTML with new quantity
  quantityUpdate();
  //calculate total
  total();
} 

//basic more legendary tokens
function moreLegendaryTokens(object, lessButton, moreButton) {
  
  var lessElement = document.getElementById(lessButton);
  var moreElement = document.getElementById(moreButton);

  
  //enable lessButton
  var lessElement = document.getElementById(lessButton);
  
  if (legendaryRule.broken == true) {
    object.quantity += 1;
    lessElement.classList.remove("disabled");
  }

  //check legendary rule & add or diable button
  // if (object.quantity == 0 && legendaryRule.broken == false) {
  //   object.quantity += 1;
  //   var moreElement = document.getElementById(moreButton);
  //   moreElement.classList.add("disabled");
  // } else if(object.quantity >= 0 && legendaryRule.broken == true) {
  //   object.quantity += 1;
  // } 
  
  //update HTML with new quantity
  quantityUpdate();
  //calculate total
  total();
}



//legendary Rule Toggle
function legendaryRuleToggle (toggleButton) {
  var toggle = document.getElementById(toggleButton);

  //not broken
  if (mirrorBox.quantity == 0 && cadric.quantity == 0) {
    legendaryRule.broken = false;
    toggle.classList.remove("fa-toggle-on");
    toggle.classList.add("fa-toggle-off");
    document.getElementById("legendaryRuleStatus").innerHTML = ("Legendary Rule is in effect.");
    
    //fix jodah
    if (jodah.quantity > 1) {
      jodah.quantity = 1;
      document.getElementById("jodahMore").classList.add("disabled");
    } else if (jodah.quantity == 1) {
      document.getElementById("jodahMore").classList.add("disabled");
    }

    //fix heroes podium
    if (heroesPodium.quantity > 1) {
      heroesPodium.quantity = 1;
      document.getElementById("heroesPodiumMore").classList.add("disabled");
    } else if (heroesPodium.quantity == 1) {
      document.getElementById("heroesPodiumMore").classList.add("disabled");
    }

    //fix jetmir
    if (jetmir.quantity > 1) {
      jetmir.quantity = 1;
      document.getElementById("jetmirMore").classList.add("disabled");
    } else if (jetmir.quantity == 1) {
      document.getElementById("jetmirMore").classList.add("disabled");
    }

    //fix legendary creature tokens
    legendaryCreatureTokens.quantity = 0;
    document.getElementById("legendaryCreatureTokensLess").classList.add("disabled");
    document.getElementById("legendaryCreatureTokensMore").classList.add("disabled");
    

    quantityUpdate();
  //broken  
  } else if (mirrorBox.quantity > 0 || cadric.quantity > 0) {
    legendaryRule.broken = true;
    toggle.classList.remove("fa-toggle-off");
    toggle.classList.add("fa-toggle-on");
    document.getElementById("jodahMore").classList.remove("disabled");
    document.getElementById("heroesPodiumMore").classList.remove("disabled");
    document.getElementById("jetmirMore").classList.remove("disabled");
    document.getElementById("legendaryCreatureTokensMore").classList.remove("disabled");
    document.getElementById("legendaryRuleStatus").innerHTML = ("Legendary Rule is broken.");

  }
  
}

function dragonThroneToggle (toggleButton) {
  var toggle = document.getElementById(toggleButton);

  if (jodah.quantity < 1) {
    totalBonus.dragonThroneBonus = false;
  } else if (jodah.quantity >= 1) {
    totalBonus.dragonThroneBonus = !totalBonus.dragonThroneBonus;
  }

  // totalBonus.dragonThroneBonus = ! totalBonus.dragonThroneBonus;

  if (totalBonus.dragonThroneBonus == false) {
    toggle.classList.remove("fa-toggle-on");
    toggle.classList.add("fa-toggle-off");
  } else if (totalBonus.dragonThroneBonus == true) {
    toggle.classList.remove("fa-toggle-off");
    toggle.classList.add("fa-toggle-on");
  }
  
  total();
}



function quantityUpdate () {
  document.getElementById("jodahQuantity").innerHTML = jodah.quantity;
  document.getElementById("mirrorBoxQuantity").innerHTML = mirrorBox.quantity;
  document.getElementById("cadricQuantity").innerHTML = cadric.quantity;
  document.getElementById("heroesPodiumQuantity").innerHTML = heroesPodium.quantity;
  document.getElementById("jetmirQuantity").innerHTML = jetmir.quantity;
  document.getElementById("legendaryCreaturesQuantity").innerHTML = legendaryCreatures.quantity;
  document.getElementById("legendaryCreatureTokensQuantity").innerHTML = legendaryCreatureTokens.quantity;
}


function total () {

  //jodah legendary bonus
  totalBonus.jodahBonus = jodah.quantity * (legendaryCreatures.quantity + legendaryCreatureTokens.quantity);  

  //heroes podium bonus
  totalBonus.heroesPodiumBonus = heroesPodium.quantity * (legendaryCreatures.quantity + legendaryCreatureTokens.quantity - 1);  
  
  //jetmir bonus
  if ((legendaryCreatures.quantity + legendaryCreatureTokens.quantity) < 3) {
    totalBonus.jetmirBonus = 0;
  } else if ((legendaryCreatures.quantity + legendaryCreatureTokens.quantity) >= 3 && (legendaryCreatures.quantity + legendaryCreatureTokens.quantity) < 6) {
    totalBonus.jetmirBonus = jetmir.quantity;
  } else if ((legendaryCreatures.quantity + legendaryCreatureTokens.quantity) >= 6 && (legendaryCreatures.quantity + legendaryCreatureTokens.quantity) < 9) {
    totalBonus.jetmirBonus = jetmir.quantity * 2;
  } else if ((legendaryCreatures.quantity + legendaryCreatureTokens.quantity) >= 9) {
    totalBonus.jetmirBonus = jetmir.quantity * 3;
  }

  //mirrorBox bonus
  totalBonus.mirrorBoxBonus = mirrorBox.quantity;


  
  //total bonus
  totalBonus.power = totalBonus.jodahBonus + totalBonus.heroesPodiumBonus + totalBonus.jetmirBonus + totalBonus.mirrorBoxBonus;
  totalBonus.toughness = totalBonus.jodahBonus + totalBonus.heroesPodiumBonus + totalBonus.mirrorBoxBonus;

  //dragon throne bonus
  totalBonus.dragonThroneBonusPower = (totalBonus.power * 2) + jodah.power + (jodah.quantity-1);
  totalBonus.dragonThroneBonusToughness = (totalBonus.toughness * 2) + jodah.toughness + (jodah.quantity-1);
  

  if (totalBonus.dragonThroneBonus == false) {
    document.getElementById("totalBonus").innerHTML = ('Total Bonus: ' + '+ ' + totalBonus.power + ' / ' + '+ ' + totalBonus.toughness);
  } else if (totalBonus.dragonThroneBonus == true) {
    document.getElementById("totalBonus").innerHTML = ('Total Bonus: ' + '+ ' + totalBonus.dragonThroneBonusPower + ' / ' + '+ ' + totalBonus.dragonThroneBonusToughness);
  }
}
