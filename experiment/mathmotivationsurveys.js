// ############################## Helper functions ##############################

// Shows slides. We're using jQuery here - the **$** is the jQuery selector function, which takes as input either a DOM element or a CSS selector string.
function showSlide(id) {
  // Hide all slides
  $(".slide").hide();
  // Show just the slide we want to show
  $("#"+id).show();
}

// Get random integers.
// When called with no arguments, it returns either 0 or 1. When called with one argument, *a*, it returns a number in {*0, 1, ..., a-1*}. When called with two arguments, *a* and *b*, returns a random value in {*a*, *a + 1*, ... , *b*}.
function random(a,b) {
  if (typeof b == "undefined") {
    a = a || 2;
    return Math.floor(Math.random()*a);
  } else {
    return Math.floor(Math.random()*(b-a+1)) + a;
  }
}

// Add a random selection function to all arrays (e.g., <code>[4,8,7].random()</code> could return 4, 8, or 7). This is useful for condition randomization.
Array.prototype.random = function() {
  return this[random(this.length)];
};


// ############################## Configuration settings ##############################


//####     Motivation scale ######

var trialInfo = {
  motivationIntroATTS : [""],
  mathanxIntroATTS : [""],
  genanxIntroATTS : [""],
  PVTintro : [""],
  performanceintro: [""],
  mathMot : [ // Math motivation
    'When I do mathematics, I sometimes get totally absorbed.',
    'Mathematics is important to me personally',
    'Because doing mathematics is fun, I wouldn’t want to give it up.'],
  mathAnx : [// Math anxiety
    // 'Taking a final exam in a mathematics course.',
    // 'Thinking about an upcoming mathematics test one week before.',
    // 'Thinking about an upcoming mathematics test one day before.',
    // 'Thinking about an upcoming mathematics test one hour before.',
    // 'Thinking about an upcoming mathematics test five minutes before.',
    // 'Waiting to get a mathematics test returned in which you expected to do well.',
    // 'Receiving your final mathematics grade in the mail.',
    // 'Realizing that you have to take a number of mathematics classes to fulfill the requirements in your major.',
    // 'Being given a "pop" quiz in a mathematics class.',
    // 'Studying for a mathematics test.',
    // 'Taking the mathematics section of a college entrance examination.',
    // 'Taking an examination (quiz) in a mathematics course.',
    // 'Picking up the mathematics textbook to begin working on a homework assignment.',
    // 'Being given a homework assignment of many difficult problems which is due the next class meeting.',
    // 'Getting ready to study for a mathematics test.',
    // 'Dividing a five digit number by a two digit number in private with pencil and paper.',
    // 'Adding 976 + 777 on paper.',
    // 'Reading a cash register receipt.',
    // 'Figuring the sales tax on a purchase that costs more than $1.00.',
    // 'Figuring out your monthly budget.',
    // 'Being given a set of numerical problems involving addition to solve on paper.',
    // 'Having someone watch you as you total up a column of figures.',
    // 'Totaling up a dinner bill that you think overcharged you.',
    // 'Being responsible for collecting dues for an organization and keeping track of the amount.',
    // 'Studying for a driver’s license test and memorizing the figures involved, such as the distances it takes to stop a car going at different speeds.',
    // 'Totaling up the dues received and the expenses of a club you belong to.',
    // 'Watching someone work with a calculator.',
    // 'Being given a set of division problems to solve.',
    'Being given a set of subtraction problems to solve.',
    'Being given a set of multiplication problems to solve.'],

  genAnx : [// General anxiety
    // 'I feel pleasant.',
    // 'I feel nervous and restless.',
    // 'I feel satisfied with myself.',
    // 'I wish I could be as happy as others seem to be.',
    // 'I feel like a failure.',
    // 'I feel rested.',
    // 'I am "calm, cool, and collected".',
    // 'I feel that difficulties are piling up so that I cannot overcome them.',
    // 'I worry too much over something that really doesn’t matter.',
    // 'I am happy.',
    // 'I have disturbing thoughts.',
    // 'I lack self-confidence.',
    // 'I feel secure.',
    // 'I make decisions easily.',
    // 'I feel inadequate.',
    // 'I am content.',
    // 'Some unimportant thought runs thorugh my mind and bothers me.',
    // 'I take disappointments so keenly that I can’t put them out of my mind.',
    'I am a steady person.',
    'I get in a state of tension or turmoil as I think over my recent concerns and interests.'],

PVTpractice: [
  {problem:"2 + 2 = 4", trueAnswer: "correct"},
  {problem: "2 X 2 = 100", trueAnswer: "incorrect"},
  {problem: "253 X 42 = 10,826", trueAnswer: "incorrect"},
  {problem: "<sup>1</sup>&frasl;<sub>2</sub> = <sup>2</sup>&frasl;<sub>1</sub>", trueAnswer: "incorrect"}
  ],



  performance : [
    {problem: "13 X 4 = 47", trueAnswer: "incorrect"},
    {problem:"22 - 6 = 16", trueAnswer: "correct"},
    // {problem:"35 &divide; 5 = 7", trueAnswer: "correct"},
    // {problem:"54 + 26 = 70", trueAnswer: "incorrect"},
    // {problem: "32 - 16 = 14", trueAnswer: "incorrect"} ,
    // {problem: "39 &divide; 16 = 3", trueAnswer: "incorrect"},
    // {problem: "3 X 13 = 39", trueAnswer: "correct"},
    // {problem: "<sup>2</sup>&frasl;<sub>6</sub> = <sup>3</sup>&frasl;<sub>9</sub>",
    //  trueAnswer: "correct"},
    // {problem: "27 + 323 = 350", trueAnswer: "correct"},
    // {problem: "112 - 88 = 24", trueAnswer: "correct"},
    // {problem: "5 X 15 = 65", trueAnswer: "incorrect"},
    // {problem: "27 + 234 = 251", trueAnswer: "incorrect"},
    // {problem: "84 &divide; 4 = 21", trueAnswer: "correct"},
    // {problem: "44 - 18 = 24", trueAnswer: "incorrect"},
    // {problem: "<sup>5</sup>&frasl;<sub>12</sub> = <sup>2</sup>&frasl;<sub>6</sub>", trueAnswer: "incorrect"},
    // {problem: "14 X 5 = 70", trueAnswer: "correct"},
    // {problem: "28 &divide; 16 = 2", trueAnswer: "incorrect"},
    // {problem: "<sup>8</sup>&frasl;<sub>4</sub> = <sup>16</sup>&frasl;<sub>9</sub>", trueAnswer: "incorrect"},
    // {problem: "<sup>3</sup>&frasl;<sub>4</sub> + <sup>3</sup>&frasl;<sub>2</sub> = <sup>6</sup>&frasl;<sub>6</sub>", trueAnswer: "incorrect"},
    // {problem: "<sup>12</sup>&frasl;<sub>2</sub> = <sup>6</sup>&frasl;<sub>1</sub>", trueAnswer: "correct"},
    // {problem: "<sup>76</sup>&frasl;<sub>10</sub> = <sup>7</sup>&frasl;<sub>1</sub>", trueAnswer: "incorrect"} ,
    {problem: "<sup>8</sup>&frasl;<sub>2</sub> = <sup>6</sup>&frasl;<sub>1</sub>", trueAnswer: "incorrect"} ,
    // {problem: "<sup>4</sup>&frasl;<sub>16</sub> + <sup>3</sup>&frasl;<sub>8</sub> = <sup>1</sup>&frasl;<sub>2</sub>", trueAnswer: "incorrect"},
    // {problem: "18 + 56 = 74", trueAnswer: "correct"}
  ]
};

// Randomize block order (making sure that each block begins with intro slide
var blockOrder = _.flatten(_.shuffle([["motivationIntroATTS", "mathMot"],
				      ["mathanxIntroATTS", "mathAnx"],
				      ["genanxIntroATTS", "genAnx"]]))
      .concat(["PVTintro", "PVTpractice","performanceintro", "performance"]);

// Calculate total number of trials, for progress bar
var totalNumTrials = blockOrder.reduce(function(memo, blockName) {
  return memo + trialInfo[blockName].length;
}, 0);

// Build trials, randomizing order within each block
var trials = _.flatten(blockOrder.map(function(trialType, blockIndex) {
  var blockStimuli = _.shuffle(trialInfo[trialType]);
  return blockStimuli.map(function(stimulus, stimulusIndex) {
    return {
      stimulus: stimulus,
      block_number : blockIndex + 1,
      trial_number: stimulusIndex + 1,
      trial_type: trialType
    };
  });
}));

console.log(trials);

// Show the instructions slide -- this is what we want subjects to see first.
showSlide("instructions");

// ############################## The main event ##############################
var experiment = {
  // the time that the current trial started
  startTime : null,
  // the handle to cancel the current countdown
  countdownCounter : null,
  // The object to be submitted.
  currentTrialNum : 0,
  totalNumTrials : totalNumTrials,
  trials : trials,
  data: {
    trial_number: [],
    block_number: [],
    trial_type: [],
    stimulus: [],
    rating: [],
    rt : [],
    ladder: [],
    age: [],
    gender: [],
    education: [],
    homelang: [],
    ethnicity:[],
    race: [],
    children:[],
    childAgeYoung:[],
    childAgeOld:[],
    expt_aim: [],
    expt_gen: []
  },

  // end the experiment
  end: function() {
    showSlide("finished");
    setTimeout(function() {
      turk.submit(experiment.data);
    }, 1500);
  },

  log_stimulus : function(trial) {
    // log the stimulus for real trials
    var stim = (typeof trial.stimulus === "string" ?
		trial.stimulus : trial.stimulus.problem);
    experiment.data.stimulus.push(stim);
    experiment.data.trial_type.push(trial.trial_type);
    experiment.data.trial_number.push(trial.trial_number);
    experiment.data.block_number.push(trial.block_number);
  },

  // LOG RESPONSE
  log_response: function(trialType) {
    if (trialType.split('.')[0] === "performance") {
      var endTime = new Date().getTime();
      var buttonPress = trialType.split('.')[1];
      console.log(buttonPress);
      console.log(experiment.currTrial.stimulus.trueAnswer);
      var accuracy = (buttonPress === "notSure" ? "notSure" :
		      buttonPress === experiment.currTrial.stimulus.trueAnswer ?
		      'accurate' : 'inaccurate');
      experiment.data.rating.push(accuracy);
      experiment.data.rt.push(endTime - experiment.startTime);
      experiment.next();
    } else {
      var response_logged = false;

      //Array of radio buttons
      var radio = document.getElementsByName("judgment");

      // Loop through radio buttons
      for (i = 0; i < radio.length; i++) {
	if (radio[i].checked) {
	  experiment.data.rating.push(radio[i].value);
	  experiment.data.rt.push("NA");
	  response_logged = true;
	}
      }

      if (response_logged) {
	$('#nextButton_' + trialType).blur();

	// uncheck radio buttons
	for (i = 0; i < radio.length; i++) {
	  radio[i].checked = false;
	}
	experiment.next();
      } else {
	$("#testMessage_" + trialType).html('<font color="red">' +
					    'Please make a response' +
					    '</font>');
      }
    }
  },


  // The work horse of the sequence - what to do on every trial.
  next: function() {

    // Allow experiment to start if it's a turk worker OR if it's a test run
    if (window.self == window.top | turk.workerId.length > 0) {

      // clear the timeout interval, if it's still running
      if (experiment.countdownCounter) {
	clearInterval(experiment.countdownCounter);
      };

      if (experiment.trials.length == 0) {
	experiment.debriefing();
	return;
      } else {
	// Pop new trial info off list
	experiment.currTrial = experiment.trials.shift();
	experiment.currentTrialNum++;

	// Update progress bar
	$("#progress").attr("style","width:"
			    + String(100*(experiment.currentTrialNum/
					  experiment.totalNumTrials))
			    + "%");


	// check which trial type you're in and display correct slide
	switch(experiment.currTrial.trial_type) {
	  case "mathMot" :
	    $("#motivations").html(experiment.currTrial.stimulus);  //add stimulus to html
	    showSlide("motivation_slide");             //display slide
	    $("#testMessage_att").html(''); 	// clear the test message
	    experiment.log_stimulus(experiment.currTrial);
	    break;
	  case "mathAnx" :
  	    $("#math_anxs").html(experiment.currTrial.stimulus);  //add stimulus to html
	    showSlide("math_anxs_slide");              //display slide
	    $("#testMessage_math_anx").html(''); 	// clear the test message
	    experiment.log_stimulus(experiment.currTrial);
	    break;
	  case "genAnx" :
	    $("#general_anxs").html(experiment.currTrial.stimulus);  //add stimulus to html
	    showSlide("general_anxs_slide");              //display slide
	    $("#testMessage_general_anx").html(''); 	// clear the test message
	    experiment.log_stimulus(experiment.currTrial);
	    break;
	  case "motivationIntroATTS" :
	    showSlide("motivationIntro");              //display slide
	    break;
	  case "mathanxIntroATTS" :
	    showSlide("mathanxIntro");              //display slide
	    break;
	  case "genanxIntroATTS" :
	    showSlide("genanxIntro");              //display slide
	    break;
	  case "PVTintro" :
	    showSlide("PVTintro");
	    break;
    case "performanceintro" :
	    showSlide("performanceintro");
	    break;
    case "PVTpractice" :
	    showSlide("PVTpractice");
  	    $("#pracnumber").html(experiment.currTrial.stimulus.problem);
	    experiment.startTime = (new Date()).getTime();
	    experiment.CountdownTime();
	    experiment.countdownCounter = setInterval(experiment.CountdownTime, 1000);
	    experiment.log_stimulus(experiment.currTrial);
	    break;
	  case "performance" :
	    showSlide("performance");
  	    $("#number").html(experiment.currTrial.stimulus.problem);
	    experiment.startTime = (new Date()).getTime();
	    experiment.CountdownTime();
	    experiment.countdownCounter = setInterval(experiment.CountdownTime, 1000);
	    experiment.log_stimulus(experiment.currTrial);
	    break;
	}
      }
    }
  },

  CountdownTime: function() {
    var countDown = 10;
    var currentTime = new Date().getTime();
    var diff = currentTime - experiment.startTime;
    var seconds = countDown - Math.floor(diff / 1000);
    if (seconds >= 0) {
      var minutes = Math.floor(seconds / 60);
      seconds -= minutes * 60;
      $("#minutes").text(minutes < 10 ? "0" + minutes : minutes);
      $("#seconds").text(seconds < 12 ? "Seconds left: " + seconds : seconds);
    } else {
      experiment.data.rating.push("not responded");
      experiment.data.rt.push("not responded");
      experiment.next();
    }
  },

  //	go to debriefing slide
  debriefing: function() {
    console.log("showing debriefing slide...");
    showSlide("debriefing");
  },


  // submitcomments function
  submit_comments: function() {

    var races = document.getElementsByName("race");

    // Loop through race buttons
    for (i = 0; i < races.length; i++) {
      if (races[i].checked) {
	experiment.data.race.push(races[i].value);
      }
    }
    experiment.data.ladder.push(document.getElementById("ladder").value);
    experiment.data.age.push(document.getElementById("age").value);
    experiment.data.gender.push(document.getElementById("gender").value);
    experiment.data.education.push(document.getElementById("education").value);
    experiment.data.homelang.push(document.getElementById("homelang").value);
    experiment.data.ethnicity.push(document.getElementById("ethnicity").value);
    experiment.data.children.push(document.getElementById("children").value);
    experiment.data.childAgeYoung.push(document.getElementById("youngestAge").value);
    experiment.data.childAgeOld.push(document.getElementById("oldestAge").value);
    experiment.data.expt_aim.push(document.getElementById("expthoughts").value);
    experiment.data.expt_gen.push(document.getElementById("expcomments").value);
    experiment.end();
  }
}



// // ###########################################################################
// ### Backup comments for the anxiety scales -- just to have them written
//
// //####     MATH ANXIETY SCALE (MARS-B)######
//
//
// var manxs = ['Taking a final exam in a mathematics course.',
// 'Thinking about an upcoming mathematics test one week before.',
// 'Thinking about an upcoming mathematics test one day before.',
// 'Thinking about an upcoming mathematics test one hour before.',
// 'Thinking about an upcoming mathematics test five minutes before.',
// 'Waiting to get a mathematics test returned in which you expected to do well.',
// 'Receiving your final mathematics grade in the mail.',
// 'Realizing that you have to take a number of mathematics classes to fulfill the requirements in your major.',
// 'Being given a "pop" quiz in a mathematics class.',
// 'Studying for a mathematics test.',
// 'Taking the mathematics section of a college entrance examination.',
// 'Taking an examination (quiz) in a mathematics course.',
// 'Picking up the mathematics textbook to begin working on a homework assignment.',
// 'Being given a homework assignment of many difficult problems which is due the next class meeting.',
// 'Getting ready to study for a mathematics test.',
// 'Dividing a five digit number by a two digit number in private with pencil and paper.',
// 'Adding 976 + 777 on paper.',
// 'Reading a cash register receipt.',
// 'Figuring the sales tax on a purchase that costs more than $1.00.',
// 'Figuring out your monthly budget.',
// 'Being given a set of numerical problems involving addition to solve on paper.',
// 'Having someone watch you as you total up a column of figures.',
// 'Totaling up a dinner bill that you think overcharged you.',
// 'Being responsible for collecting dues for an organization and keeping track of the amount.',
// 'Studying for a driver’s license test and memorizing the figures involved, such as the distances it takes to stop a car going at different speeds.',
// 'Totaling up the dues received and the expenses of a club you belong to.',
// 'Watching someone work with a calculator.',
// 'Being given a set of division problems to solve.',
// 'Being given a set of subtraction problems to solve.',
// 'Being given a set of multiplication problems to solve.']
//
//
// manxs = shuffle(manxs);
//
// var totalTrialsmanx = manxs.length;
//
// // think an issue is here: calling numTrialsExperiment same thing as before for motivation###########
//
// var numTrialsExperiment = totalTrialsmanx
// var trials = [];
//
// // first build math anxiety question trials
// for (i = 0; i < totalTrialsmanx; i++) {
// 	trial = {
// 		stimulus: manxs[i],
// 		trial_number_block: i +1,
// 		trial_type: "math_anxs"
// 	}
//
// 	trials.push(trial);
// }
//
// // ############################################################################
//
// //###################### TRAIT ANXIETY SCALE ################################
//
//
// var ganxs = ['I feel pleasant.',
// 'I feel nervous and restless.',
// 'I feel satisfied with myself.',
// 'I wish I could be as happy as others seem to be.',
// 'I feel like a failure.',
// 'I feel rested.',
// 'I am "calm, cool, and collected".',
// 'I feel that difficulties are piling up so that I cannot overcome them.',
// 'I worry too much over something that really doesn’t matter.',
// 'I am happy.',
// 'I have disturbing thoughts.',
// 'I lack self-confidence.',
// 'I feel secure.',
// 'I make decisions easily.',
// 'I feel inadequate.',
// 'I am content.',
// 'Some unimportant thought runs thorugh my mind and bothers me.',
// 'I take disappointments so keenly that I can’t put them out of my mind.',
// 'I am a steady person.',
// 'I get in a state of tension or turmoil as I think over my recent concerns and interests.']
//
//
// ##################################################################
