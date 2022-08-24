const settingButton = document.querySelector('.setting-button');
const setting = document.querySelector('.setting-back');
const bossList = document.querySelector('.boss-list');
const difficultiesList = document.querySelector('.difficulties-list');
const bosses = document.querySelectorAll('.boss-item');
const difficulties = document.querySelectorAll('.difficulty-item');
const cardContainer = document.querySelector('.card-container');
const cardSuit = document.querySelector('.card-suit');
const card = document.querySelector('.card');
const newGame = document.querySelector('.new-game');
const bossDescription = document.querySelector('.boss-description');
const bigDescription = document.querySelector('.big-description');
const counterStage = document.querySelector('.counter-stage');
const greenCounter = document.querySelector('.green-counter');
const blueCounter = document.querySelector('.blue-counter');
const brownCounter = document.querySelector('.brown-counter');
const bossCard = document.querySelector('.boss-card');

const greenCardsData = [
    {
      id: 'green1',
      cardFace: 'assets/MythicCards/green/green1.png',
      difficulty: 'easy',
      color:'green'
    },
    {
      id: 'green2',
      cardFace: 'assets/MythicCards/green/green2.png',
      difficulty: 'hard',
      color:'green'
    },
    {
      id: 'green3',
      cardFace: 'assets/MythicCards/green/green3.png',
      difficulty: 'hard',
      color:'green'
    },
    {
      id: 'green4',
      cardFace: 'assets/MythicCards/green/green4.png',
      difficulty: 'hard',
      color:'green'
    },
    {
      id: 'green5',
      cardFace: 'assets/MythicCards/green/green5.png',
      difficulty: 'hard',
      color:'green'
    },
    {
      id: 'green6',
      cardFace: 'assets/MythicCards/green/green6.png',
      difficulty: 'hard',
      color:'green'
    },
    {
      id: 'green7',
      cardFace: 'assets/MythicCards/green/green7.png',
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green8',
      cardFace: 'assets/MythicCards/green/green8.png',
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green9',
      cardFace: 'assets/MythicCards/green/green9.png',
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green10',
      cardFace: 'assets/MythicCards/green/green10.png',
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green11',
      cardFace: 'assets/MythicCards/green/green11.png',
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green12',
      cardFace: 'assets/MythicCards/green/green12.png',
      difficulty: 'easy',
      color:'green'
    },
    {
      id: 'green13',
      cardFace: 'assets/MythicCards/green/green13.png',
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green14',
      cardFace: 'assets/MythicCards/green/green14.png',
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green15',
      cardFace: 'assets/MythicCards/green/green15.png',
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green16',
      cardFace: 'assets/MythicCards/green/green16.png',
      difficulty: 'easy',
      color:'green'
    },
    {
      id: 'green17',
      cardFace: 'assets/MythicCards/green/green17.png',
      difficulty: 'easy',
      color:'green'
    },
    {
      id: 'green18',
      cardFace: 'assets/MythicCards/green/green18.png',
      difficulty: 'easy',
      color:'green'
    },
]

const blueCardsData = [
    {
      id: 'blue1',
      cardFace: 'assets/MythicCards/blue/blue1.png',
      difficulty: 'hard',
      color:'blue'
    },
    {
      id: 'blue2',
      cardFace: 'assets/MythicCards/blue/blue2.png',
      difficulty: 'hard',
      color:'blue'
    },
    {
      id: 'blue3',
      cardFace: 'assets/MythicCards/blue/blue3.png',
      difficulty: 'easy',
      color:'blue'
    },
    {
      id: 'blue4',
      cardFace: 'assets/MythicCards/blue/blue4.png',
      difficulty: 'easy',
      color:'blue'
    },
    {
      id: 'blue5',
      cardFace: 'assets/MythicCards/blue/blue5.png',
      difficulty: 'easy',
      color:'blue'
    },
    {
      id: 'blue6',
      cardFace: 'assets/MythicCards/blue/blue6.png',
      difficulty: 'hard',
      color:'blue'
    },
    {
      id: 'blue7',
      cardFace: 'assets/MythicCards/blue/blue7.png',
      difficulty: 'normal',
      color:'blue'
    },
    {
      id: 'blue8',
      cardFace: 'assets/MythicCards/blue/blue8.png',
      difficulty: 'hard',
      color:'blue'
    },
    {
      id: 'blue9',
      cardFace: 'assets/MythicCards/blue/blue9.png',
      difficulty: 'normal',
      color:'blue'
    },
    {
      id: 'blue10',
      cardFace: 'assets/MythicCards/blue/blue10.png',
      difficulty: 'easy',
      color:'blue'
    },
    {
      id: 'blue11',
      cardFace: 'assets/MythicCards/blue/blue11.png',
      difficulty: 'normal',
      color:'blue'
    },
    {
      id: 'blue12',
      cardFace: 'assets/MythicCards/blue/blue12.png',
      difficulty: 'normal',
      color:'blue'
    },
]

const brownCardsData = [
    {
      id: 'brown1',
      cardFace: 'assets/MythicCards/brown/brown1.png',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown2',
      cardFace: 'assets/MythicCards/brown/brown2.png',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown3',
      cardFace: 'assets/MythicCards/brown/brown3.png',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown4',
      cardFace: 'assets/MythicCards/brown/brown4.png',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown5',
      cardFace: 'assets/MythicCards/brown/brown5.png',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown6',
      cardFace: 'assets/MythicCards/brown/brown6.png',
      difficulty: 'hard',
      color:'brown'
    },
    {
      id: 'brown7',
      cardFace: 'assets/MythicCards/brown/brown7.png',
      difficulty: 'hard',
      color:'brown'
    },
    {
      id: 'brown8',
      cardFace: 'assets/MythicCards/brown/brown8.png',
      difficulty: 'hard',
      color:'brown'
    },
    {
      id: 'brown9',
      cardFace: 'assets/MythicCards/brown/brown9.png',
      difficulty: 'hard',
      color:'brown'
    },
    {
      id: 'brown10',
      cardFace: 'assets/MythicCards/brown/brown10.png',
      difficulty: 'hard',
      color:'brown'
    },
    {
      id: 'brown11',
      cardFace: 'assets/MythicCards/brown/brown11.png',
      difficulty: 'easy',
      color:'brown'
    },
    {
      id: 'brown12',
      cardFace: 'assets/MythicCards/brown/brown12.png',
      difficulty: 'easy',
      color:'brown'
    },
    {
      id: 'brown13',
      cardFace: 'assets/MythicCards/brown/brown13.png',
      difficulty: 'easy',
      color:'brown'
    },
    {
      id: 'brown14',
      cardFace: 'assets/MythicCards/brown/brown14.png',
      difficulty: 'easy',
      color:'brown'
    },
    {
      id: 'brown15',
      cardFace: 'assets/MythicCards/brown/brown15.png',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown16',
      cardFace: 'assets/MythicCards/brown/brown16.png',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown17',
      cardFace: 'assets/MythicCards/brown/brown17.png',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown18',
      cardFace: 'assets/MythicCards/brown/brown18.png',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown19',
      cardFace: 'assets/MythicCards/brown/brown19.png',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown20',
      cardFace: 'assets/MythicCards/brown/brown20.png',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown21',
      cardFace: 'assets/MythicCards/brown/brown21.png',
      difficulty: 'easy',
      color:'brown'
    },
]

let greenCards = greenCardsData;
let blueCards = blueCardsData;
let brownCards = brownCardsData;
let totalCards = {};
let firstStage = {};
let secondStage = {};
let thirdStage = {};

let firstPack = [];
let secondPack = [];
let thirdPack = [];
let pack = [];

const bossData = [
    {
      id: 'Azathoth',
      name: 'azathoth',
      cardFace: 'assets/Ancient/Azathoth.png',
      firstStage: {
        greenCards: 1,
        blueCards: 1,
        brownCards: 2,
      },
      secondStage: {
        greenCards: 2,
        blueCards: 1,
        brownCards: 3,
      },
      thirdStage: {
        greenCards: 2,
        blueCards: 0,
        brownCards: 4,
      },
      totalCards: {
        greenCards: 5,
        blueCards: 2,
        brownCards: 9,
      },
    },
    {
      id: 'Cthulhu',
      name: 'cthulhu',
      cardFace: 'assets/Ancient/Cthulthu.png',
      firstStage: {
        greenCards: 0,
        blueCards: 2,
        brownCards: 2,
      },
      secondStage: {
        greenCards: 1,
        blueCards: 0,
        brownCards: 3,
      },
      thirdStage: {
        greenCards: 3,
        blueCards: 0,
        brownCards: 4,
      },
      totalCards: {
        greenCards: 4,
        blueCards: 2,
        brownCards: 9,
      },
    },
    {
      id: 'IogSothoth',
      name: 'iogSothoth',
      cardFace: 'assets/Ancient/IogSothoth.png',
      firstStage: {
        greenCards: 0,
        blueCards: 1,
        brownCards: 2,
      },
      secondStage: {
        greenCards: 2,
        blueCards: 1,
        brownCards: 3,
      },
      thirdStage: {
        greenCards: 3,
        blueCards: 0,
        brownCards: 4,
      },
      totalCards: {
        greenCards: 5,
        blueCards: 2,
        brownCards: 9,
      },
    },
    {
      id: 'ShubNiggurath',
      name: 'shubNiggurath',
      cardFace: 'assets/Ancient/ShubNiggurath.png',
      firstStage: {
        greenCards: 1,
        blueCards: 1,
        brownCards: 2,
      },
      secondStage: {
        greenCards: 3,
        blueCards: 1,
        brownCards: 2,
      },
      thirdStage: {
        greenCards: 2,
        blueCards: 0,
        brownCards: 4,
      },
      totalCards: {
        greenCards: 6,
        blueCards: 2,
        brownCards: 8,
      },
    },
]
  
let config = {
    boss: 'Azathoth',
    difficulty: 'Normal',
}

function chooseBoss (e) {
    let target = e.target;
    bosses.forEach(el => {
        el.classList.remove('active-item');
    })
    target.classList.add('active-item');
    config.boss = target.textContent;

    bossData.forEach(el => {
      if (el.id == config.boss) {
        bossDescription.src = el.cardFace;
      }
    })
}

function chooseDifficulty(e) {
    let target = e.target;
    difficulties.forEach(el => {
        el.classList.remove('active-item');
    })
    target.classList.add('active-item');
    config.difficulty = target.textContent;
}

difficultiesList.addEventListener('click', chooseDifficulty);
bossList.addEventListener('click', chooseBoss)

function startGame() {
    if (config.boss == '' || config.difficulty == '') {
      alert('Choose game config.')
    }
    else {
      setting.classList.add('after-setting');
      cardContainer.classList.remove('after-setting');
      cardSuit.classList.remove('after-setting');
      gameBoss();
      gameDifficulty();
      makePack();
      console.log(config);
      console.log(pack);
    }
}

function gameBoss() {
  bossData.forEach(el => {
    if (el.id == config.boss) {
      totalCards = el.totalCards;
      firstStage = el.firstStage;
      secondStage = el.secondStage;
      thirdStage = el.thirdStage;
      bossCard.src = `${el.cardFace}`;
    }
  })
}

function gameDifficulty() {
  if (config.difficulty == 'Easy') {
      let arr = [];
      greenCards.forEach(el => {
        if (el.difficulty != 'hard') {
          arr.push(el);
        }
      })
      greenCards = arr;

      arr = [];
      brownCards.forEach(el => {
        if (el.difficulty != 'hard') {
          arr.push(el);
        }
      })
      brownCards = arr;

      arr = [];
      blueCards.forEach(el => {
        if (el.difficulty != 'hard') {
          arr.push(el);
        }
      })
      blueCards = arr;
  }
  else if (config.difficulty == 'Hard') {
    let arr = [];
    greenCards.forEach(el => {
      if (el.difficulty != 'easy') {
        arr.push(el);
      }
    })
    greenCards = arr;

    arr = [];
    brownCards.forEach(el => {
      if (el.difficulty != 'easy') {
        arr.push(el);
      }
    })
    brownCards = arr;

    arr = [];
    blueCards.forEach(el => {
      if (el.difficulty != 'easy') {
        arr.push(el);
      }
    })
    blueCards = arr;
  }
  else if (config.difficulty == 'Very Easy') {
    function veryDifficulty(el) {
      if (arr.length < el) {
        sort(arrNormal);
        arr.push(arrNormal[0]);
        arrNormal.splice(0, 1);
        veryDifficulty(el);
      }
    }

    let arr = [];
    let arrNormal = [];
    greenCards.forEach(el => {
      if (el.difficulty == 'easy') {
        arr.push(el);
      }
      else if (el.difficulty == 'normal') {
        arrNormal.push(el);
      }
    })
   
    veryDifficulty(totalCards.greenCards);
    greenCards = arr;

    arr = [];
    arrNormal = [];
    blueCards.forEach(el => {
      if (el.difficulty == 'easy') {
        arr.push(el);
      }
      else if (el.difficulty == 'normal') {
        arrNormal.push(el);
      }
    })
    
    veryDifficulty(totalCards.blueCards);
    blueCards = arr;

    arr = [];
    arrNormal = [];
    brownCards.forEach(el => {
      if (el.difficulty == 'easy') {
        arr.push(el);
      }
      else if (el.difficulty == 'normal') {
        arrNormal.push(el);
      }
    })
    
    veryDifficulty(totalCards.brownCards);
    brownCards = arr;
  }
  else if (config.difficulty == 'Very Hard') {
    function veryDifficulty(el) {
      if (arr.length < el) {
        sort(arrNormal);
        arr.push(arrNormal[0]);
        arrNormal.splice(0, 1);
        veryDifficulty(el);
      }
    }

    let arr = [];
    let arrNormal = [];
    greenCards.forEach(el => {
      if (el.difficulty == 'hard') {
        arr.push(el);
      }
      else if (el.difficulty == 'normal') {
        arrNormal.push(el);
      }
    })
   
    veryDifficulty(totalCards.greenCards);
    greenCards = arr;

    arr = [];
    arrNormal = [];
    blueCards.forEach(el => {
      if (el.difficulty == 'hard') {
        arr.push(el);
      }
      else if (el.difficulty == 'normal') {
        arrNormal.push(el);
      }
    })
    
    veryDifficulty(totalCards.blueCards);
    blueCards = arr;

    arr = [];
    arrNormal = [];
    brownCards.forEach(el => {
      if (el.difficulty == 'hard') {
        arr.push(el);
      }
      else if (el.difficulty == 'normal') {
        arrNormal.push(el);
      }
    })
    
    veryDifficulty(totalCards.brownCards);
    brownCards = arr;
  }
  else if (config.difficulty == 'Normal') {
    let arr = [];
    greenCards.forEach(el => {
      arr.push(el);
    })
    greenCards = arr;

    arr = [];
    blueCards.forEach(el => {
      arr.push(el);
    })
    blueCards = arr;

    arr = [];
    brownCards.forEach(el => {
      arr.push(el);
    })
    brownCards = arr;
  }

  for (let i = greenCards.length; i > totalCards.greenCards; i--) {
    greenCards.splice(Math.floor(Math.random() * i), 1)
  }
  for (let i = blueCards.length; i > totalCards.blueCards; i--) {
    blueCards.splice(Math.floor(Math.random() * i), 1)
  }
  for (let i = brownCards.length; i > totalCards.brownCards; i--) {
    brownCards.splice(Math.floor(Math.random() * i), 1)
  }
}

function makePack() {
  packBuilderGreen(firstStage, firstPack);
  packBuilderBrown(firstStage, firstPack);
  packBuilderBlue(firstStage, firstPack);

  packBuilderGreen(secondStage, secondPack);
  packBuilderBrown(secondStage, secondPack);
  packBuilderBlue(secondStage, secondPack);

  packBuilderGreen(thirdStage, thirdPack);
  packBuilderBrown(thirdStage, thirdPack);
  packBuilderBlue(thirdStage, thirdPack);

  sort(firstPack);
  sort(secondPack);
  sort(thirdPack);
  
  pack.push(firstPack);
  pack.push(secondPack);
  pack.push(thirdPack);
}

function packBuilderGreen(stage, pack) {
  for (let i = 0; i < stage.greenCards; i++) {
    let n = Math.floor(Math.random() * greenCards.length);
    pack.push(greenCards[n]);
    greenCards.splice(n, 1);
  }
}

function packBuilderBrown(stage, pack) {
  for (let i = 0; i < stage.brownCards; i++) {
    let n = Math.floor(Math.random() * brownCards.length);
    pack.push(brownCards[n]);
    brownCards.splice(n, 1);
  }
}

function packBuilderBlue(stage, pack) {
  for (let i = 0; i < stage.blueCards; i++) {
    let n = Math.floor(Math.random() * blueCards.length);
    pack.push(blueCards[n]);
    blueCards.splice(n, 1);
  }
}

function sort(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let k = Math.floor(Math.random() * (i + 1));
    [array[i], array[k]] = [array[k], array[i]];
  }
}

settingButton.addEventListener('click', startGame);

function changeCard() {
  if (pack.length == 1 && pack[0].length == 1) {
    card.src = `${pack[0][0].cardFace}`;
    cardSuit.classList.add('after-setting');
    pack[0].splice(0, 1);
  }
  else if (pack[0].length > 0) {
    card.src = `${pack[0][0].cardFace}`;
    pack[0].splice(0, 1);
  }
  else if (pack[0].length == 0 && pack.length > 1) {
    pack.splice(0, 1);
    changeCard();
  }
  
  let blue = 0;
  let brown = 0;
  let green = 0
  pack[0].forEach(el => {
    if (el.color == 'green') {
      green++
    }
    else if (el.color == 'brown') {
      brown++
    }
    else {blue++}
  })

  greenCounter.textContent = `${green}`;
  blueCounter.textContent = `${blue}`;
  brownCounter.textContent = `${brown}`;
  counterStage.textContent = `${Math.abs(pack.length - 4)}`;
}

cardSuit.addEventListener('click', changeCard)

function startNewGame(){
  cardContainer.classList.add('after-setting');
  setting.classList.remove('after-setting');
  card.src = '';
  bossDescription.src = '';
  greenCards = greenCardsData;
  blueCards = blueCardsData;
  brownCards = brownCardsData;
  firstPack = [];
  secondPack = [];
  thirdPack = [];
  pack = [];
  totalCards = {};
  firstStage = {};
  secondStage = {};
  thirdStage = {};
  config = {
    boss: '',
    difficulty: '',
  }
  counterStage.textContent = '';
  greenCounter.textContent = '';
  blueCounter.textContent = '';
  brownCounter.textContent = '';

  bosses.forEach(el => {
    el.classList.remove('active-item');
  })
  difficulties.forEach(el => {
    el.classList.remove('active-item');
  })
}

newGame.addEventListener('click', startNewGame);
