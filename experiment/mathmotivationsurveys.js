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
}

// shuffle function - from stackoverflow?
// shuffle ordering of argument array -- are we missing a parenthesis?
function shuffle (a)
{
    var o = [];

    for (var i=0; i < a.length; i++) {
	o[i] = a[i];
    }

    for (var j, x, i = o.length;
	 i;
	 j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}





// ############################## Configuration settings ##############################


//####     Motivation scale ######

var atts = {
"motivationIntroATTS": [""],
"mathanxIntroATTS": [""],
"genanxIntroATTS": [""],

"mathMot":  // Math motivation
['When I do mathematics, I sometimes get totally absorbed.',
'Mathematics is important to me personally',
'Because doing mathematics is fun, I wouldn’t want to give it up.'],

"mathAnx": // Math anxiety
['Taking a final exam in a mathematics course.',
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
'Being given a set of multiplication problems to solve.'],

"genAnx": // General anxiety
['I feel pleasant.',
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
'I get in a state of tension or turmoil as I think over my recent concerns and interests.']
}


// Shuffle all of the questions within each array
atts["mathMot"] = shuffle(atts["mathMot"]);
atts["mathAnx"] = shuffle(atts["mathAnx"]);
atts["genAnx"] = shuffle(atts["genAnx"]);

//THIS IS WHAT YOU WILL ADD ONCE YOU GET THE "intro" SLIDES SET:
var slideOrder = _.flatten(_.shuffle([["motivationIntroATTS", "mathMot"], ["mathanxIntroATTS", "mathAnx"], ["genanxIntroATTS", "genAnx"]]))

slide1 = slideOrder[0]
slide2 = slideOrder[1]
slide3 = slideOrder[2]
slide4 = slideOrder[3]
slide5 = slideOrder[4]
slide6 = slideOrder[5]

var slideType= slide1;
console.log(slideType)
var totalTrialsAtt = atts[slideType].length
var currentTrialExperiment = 0;
var numTrialsExperiment = (atts[slide1].length + atts[slide2].length + atts[slide3].length
	                        + atts[slide4].length + atts[slide5].length + atts[slide6].length);
var trials = [];

// first build motivation question trials
for (i = 0; i < totalTrialsAtt; i++) {
	trial = {
		sentence: atts[slideType][i],
		trial_number_block: i +1,
		trial_type: slideType
	}

	trials.push(trial);
}


// Show the instructions slide -- this is what we want subjects to see first.
showSlide("instructions");



// ############################## The main event ##############################
var experiment = {

    // The object to be submitted.
    data: {
    trial_number_block: [],
    trial_type: [],
	sentence: [],
	rating: [],
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
	expt_gen: [],
    },

    // end the experiment
    end: function() {
	showSlide("finished");
	setTimeout(function() {
	    turk.submit(experiment.data)
	}, 1500);
    },

    // LOG RESPONSE
    log_response: function(trialType) {

	var response_logged = false;


	//Array of radio buttons
	var radio = document.getElementsByName("judgment");

	// Loop through radio buttons
	for (i = 0; i < radio.length; i++) {
	    if (radio[i].checked) {
		experiment.data.rating.push(radio[i].value);
		response_logged = true;
	    }
	}

	if (response_logged) {
	  $('#nextButton_' + trialType).blur();

	    // uncheck radio buttons
	    for (i = 0; i < radio.length; i++) {
		radio[i].checked = false
	    }
	    experiment.next();
	} else {
	  $("#testMessage_" + trialType).html('<font color="red">' +
					      'Please make a response' +
					      '</font>');
	}
    },


    // The work horse of the sequence - what to do on every trial.
    next: function() {

	// Allow experiment to start if it's a turk worker OR if it's a test run
	if (window.self == window.top | turk.workerId.length > 0) {

		// $("#testMessage_kno").html('');
		$("#progress").attr("style","width:" +
			    String(100 * (currentTrialExperiment/numTrialsExperiment)) + "%")


 //style="width:progressTotal%"

	    // Get the current trial - <code>shift()</code> removes the first element
	    // select from our scales array and stop exp after we've exhausted all the domains
	    var trial_info = trials.shift();

	    //If the current trial is undefined, call the end function.

	    if (typeof trial_info == "undefined") { // If we're out of trials...

// ...move on to the next slide- there is certainly a more efficient way to do this.
			if(slideType == slide6){
				slideType = "debriefing";
				showSlide("debriefing");
			}
			if(slideType == slide5){
				slideType = slide6;
			}
			if(slideType == slide4){
				slideType = slide5;
			}
			if(slideType == slide3){
				slideType = slide4;
			}
			if(slideType == slide2){
				slideType = slide3;
			}
			if(slideType == slide1){
				slideType = slide2;
			}


	    	if(slideType != "debriefing") {
	    	// Then do this same loop, set up the right trials, and then deploy same a beginning
		    	totalTrialsAtt = atts[slideType].length;

		    	trials = [];

		    	// first build motivation question trials
		    	for (i = 0; i < totalTrialsAtt; i++) {
		    		trial = {
		    			sentence: atts[slideType][i],
		    			trial_number_block: i +1,
		    			trial_type: slideType

		    		}

		    		trials.push(trial);
		    	}
		    }
	    var trial_info = trials.shift();

	    }


	    // check which trial type you're in and display correct slide
	    if (trial_info.trial_type == "mathMot") {
	    	$("#motivations").html(trial_info.sentence);  //add sentence to html
	      showSlide("motivation_slide");             //display slide
	      	  $("#testMessage_att").html(''); 	// clear the test message
	    	 currentTrialExperiment ++;
	    }
	    if (trial_info.trial_type == "mathAnx") {
	    	$("#math_anxs").html(trial_info.sentence);  //add sentence to html
	      showSlide("math_anxs_slide");              //display slide
	      $("#testMessage_math_anx").html(''); 	// clear the test message
	    	 currentTrialExperiment ++;
	    }
	    if (trial_info.trial_type == "genAnx") {
	    	$("#general_anxs").html(trial_info.sentence);  //add sentence to html
	      showSlide("general_anxs_slide");              //display slide
	      $("#testMessage_general_anx").html(''); 	// clear the test message
	    	 currentTrialExperiment ++;
	    }
			if (trial_info.trial_type == "motivationIntroATTS") {
				$("#motivation_Intro_sentence").html(trial_info.sentence);  //add sentence to html
				showSlide("motivationIntro");              //display slide
				$("#testMessage_motivationIntro").html(''); 	// clear the test message
				 currentTrialExperiment ++;
			}
			if (trial_info.trial_type == "mathanxIntroATTS") {
				$("#math_anx_sentence").html(trial_info.sentence);  //add sentence to html
				showSlide("mathanxIntro");              //display slide
				$("#testMessage_mathanxIntro").html(''); 	// clear the test message
				 currentTrialExperiment ++;
			}
			if (trial_info.trial_type == "genanxIntroATTS") {
				$("#gen_anx_sentence").html(trial_info.sentence);  //add sentence to html
				showSlide("genanxIntro");              //display slide
				$("#testMessage_genanxIntro").html(''); 	// clear the test message
				 currentTrialExperiment ++;
			}
	    // log the sentence for each trial
		experiment.data.sentence.push(trial_info.sentence);
		experiment.data.trial_type.push(trial_info.trial_type)
		experiment.data.trial_number_block.push(trial_info.trial_number_block)
	}
    },


    //	go to debriefing slide
    debriefing: function() {
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
// 		sentence: manxs[i],
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
//
//
// ganxs = shuffle(ganxs);
//
// var totalTrialsGanx = ganxs.length;
//
// var numTrialsExperiment = totalTrialsGanx
// var trials = [];
//
// // first build general anxiety question trials
// for (i = 0; i < totalTrialsGanx; i++) {
// 	trial = {
// 		sentence: ganxs[i],
// 		trial_number_block: i +1,
// 		trial_type: "general_anxs"
// 	}
//
// 	trials.push(trial);
// }

// ##################################################################
