console.log("script linked!")

//////////////////////////////
//          STEP 1          //
//////////////////////////////

// First build two objects 'mom' and 'dad' as object literals (e.g. 'var mom = {}'). If you have a non-traditional family structure, just use someone everybody loves, like Joe Biden or Oprah.
var mom = {};
var dad = {};





// uncomment these console.logs after you write your code
console.log('mom object after step 1:', mom)
console.log('dad object after step 1:', dad)

//////////////////////////////
//          STEP 2          //
//////////////////////////////

// Create one Physicality object and one Personality object for each parent (e.g. 'mom.physicality = {}' and 'mom.personality = {}').

mom.physicality = {};
mom.personality = {};
dad.physicality = {};
dad.personality = {};





// uncomment these console.logs after you write your code
console.log('mom object after step 2:', mom)
console.log('dad object after step 2:', dad)

//////////////////////////////
//          STEP 3          //
//////////////////////////////

// Using different data types (Number, String, Array, Object, Null, & Boolean), add **5 physical attributes** to each of your parents.

mom.physicality = {
  age: 58,
  name: 'Shephali',
  fingerLength: ['1.5inches', '2inches', '2.5inches', '2inches', '1.5inches'],
  parentNames: {
    mfather: 'mfather',
    mmother: 'mmother',
  },
  disease: null,
  isAlive: true,
};

dad.physicality = {
  age: 59,
  name: 'Ajay',
  fingerLength: ['1.7inches', '2.2inches', '2.8inches', '2.2inches', '1.7inches'],
  parentNames: {
    ffather: 'ffather',
    fmother: 'fmother',
  },
  disease: null,
  isAlive: true,
};



// uncomment these console.logs after you write your code
console.log('mom object after step 3:', mom)
console.log('dad object after step 3:', dad)

//////////////////////////////
//          STEP 4          //
//////////////////////////////

// Do the same with the personality object!

mom.personality = {
  happiness: 8,
  outlook: 'bubbly',
  moods: ['calm', 'composed'],
  angry: null,
  opinion: {
    political: 'indifferent',
    religion: 'hindu',
  },
  caring: true,
};

dad.personality = {
  happiness: 9,
  outlook: 'hearty',
  moods: ['wild', 'carefree'],
  angry: null,
  opinion: {
    political: 'opinionated',
    religion: 'hindu',
  },
  caring: true,
};



// uncomment these console.logs after you write your code
console.log('mom object after step 4:', mom)
console.log('dad object after step 4:', dad)

//////////////////////////////
//          STEP 5          //
//////////////////////////////

// Now build yourself by referencing physical and personality attributes from your folks!

var me = {};

me.physicality = {};
me.personality = {};

me.physicality = {
  age: mom.physicality.age - 30,
  name: 'Ritwik',
  fingerLength: mom.physicality.fingerLength,
  parentNames: {
    mefather: dad.physicality.name,
    memother: mom.physicality.name,
  },
  disease: dad.physicality.disease,
  isAlive: mom.physicality.isAlive,

};

me.personality = {
  happiness: dad.personality.happiness,
  outlook: dad.personality.outlook,
  moods: [dad.personality.moods[1], mom.personality.moods[1]
  ],
  angry: dad.personality.angry,
  opinion: mom.personality.opinion,
  caring: dad.personality.opinion,
  };

// uncomment this console.log after you write your code
console.log('me object after step 5:', me)

//////////////////////////////
//          STEP 6          //
//////////////////////////////

// Make 2 lists: first, what you're good at, and second, what you're bad at.

me.good = ['basicmath', 'videogames', 'marketing', 'eating'];
me.bad = ['calculus', 'JavaScript'];






// uncomment this console.log after you write your code
console.log('me object after step 6:', me)

//////////////////////////////
//          STEP 7          //
//////////////////////////////

// Age yourself.

me.age = 28;




// uncomment this console.log after you write your code
console.log('me object after step 7:', me)

//////////////////////////////
//          STEP 8          //
//////////////////////////////

// Delete half of the things you were good at.
//tried it and worked but not sure how, thought splice needs 2 values

me.good.splice(me.good.length/2);




// uncomment this console.log after you write your code
console.log('me object after step 8:', me)

//////////////////////////////
//          STEP 9          //
//////////////////////////////

me.age






// uncomment this console.log after you write your code
console.log('me object after step 9:', me)

//////////////////////////////
//          STEP 10         //
//////////////////////////////

// Add 'sitting' to the things you're good at and remove everything else from the list.

me.good.push('sitting');



// uncomment this console.log after you write your code
//console.log('me object after step 10:', me)

//////////////////////////////
//          STEP 11         //
//////////////////////////////

// Add 5 more things to the list of things you're bad at.






// uncomment this console.log after you write your code
// console.log('me object after step 11:', me)

//////////////////////////////
//           BONUS          //
//////////////////////////////

// Create a method that prints out one of your classic sayings!






// call your function :)
