
//####     Motivation scale ######

var atts = ['When I do mathematics, I sometimes get totally absorbed.',
'Mathematics is important to me personally',
'Because doing mathematics is fun, I wouldn’t want to give it up.']

atts = shuffle(atts);

var totalTrialsAtt = atts.length;

var numTrialsExperiment = totalTrialsAtt
var trials = [];

// first build motivation question trials
for (i = 0; i < totalTrialsAtt; i++) {
	trial = {
		sentence: atts[i],
		trial_number_block: i +1,
		trial_type: "motivations"
	}

	trials.push(trial);
}

// ###########################################################################


//####     MATH ANXIETY SCALE (MARS-B)######


var manxs = ['Taking a final exam in a mathematics course.',
'Thinking about an upcoming mathematics test one week before.',
'Thinking about an upcoming mathematics test one day before.',
'Thinking about an upcoming mathematics test one hour before.',
'Thinking about an upcoming mathematics test five minutes before.',
'Waiting to get a mathematics test returned in which you expected to do well.',
'Receiving your final mathematics grade in the mail.',
'Realizing that you have to take a number of mathematics classes to fulfill the requirements in your major.',
'Being given a "pop" quiz in a mathematics class.',
'Studying for a mathematics test.',
'Taking the mathematics section of a college entrance examination.',
'Taking an examination (quiz) in a mathematics course.',
'Picking up the mathematics textbook to begin working on a homework assignment.',
'Being given a homework assignment of many difficult problems which is due the next class meeting.',
'Getting ready to study for a mathematics test.',
'Dividing a five digit number by a two digit number in private with pencil and paper.',
'Adding 976 + 777 on paper.',
'Reading a cash register receipt.',
'Figuring the sales tax on a purchase that costs more than $1.00.',
'Figuring out your monthly budget.',
'Being given a set of numerical problems involving addition to solve on paper.',
'Having someone watch you as you total up a column of figures.',
'Totaling up a dinner bill that you think overcharged you.',
'Being responsible for collecting dues for an organization and keeping track of the amount.',
'Studying for a driver’s license test and memorizing the figures involved, such as the distances it takes to stop a car going at different speeds.',
'Totaling up the dues received and the expenses of a club you belong to.',
'Watching someone work with a calculator.',
'Being given a set of division problems to solve.',
'Being given a set of subtraction problems to solve.',
'Being given a set of multiplication problems to solve.']


manxs = shuffle(manxs);

var totalTrialsmanx = manxs.length;

var numTrialsExperiment = totalTrialsmanx
var trials = [];

// first build motivation question trials
for (i = 0; i < totalTrialsmanx; i++) {
	trial = {
		sentence: manxs[i],
		trial_number_block: i +1,
		trial_type: "math_anxs"
	}

	trials.push(trial);
}

// ############################################################################

//###################### TRAIT ANXIETY SCALE ################################


var ganxs = ['I feel pleasant.',
'I feel nervous and restless.',
'I feel satisfied with myself.',
'I wish I could be as happy as others seem to be.',
'I feel like a failure.',
'I feel rested.',
'I am "calm, cool, and collected".',
'I feel that difficulties are piling up so that I cannot overcome them.',
'I worry too much over something that really doesn’t matter.',
'I am happy.',
'I have disturbing thoughts.',
'I lack self-confidence.',
'I feel secure.',
'I make decisions easily.',
'I feel inadequate.',
'I am content.',
'Some unimportant thought runs thorugh my mind and bothers me.',
'I take disappointments so keenly that I can’t put them out of my mind.',
'I am a steady person.',
'I get in a state of tension or turmoil as I think over my recent concerns and interests.']




ganxs = shuffle(ganxs);

var totalTrialsGanx = ganxs.length;

var numTrialsExperiment = totalTrialsGanx
var trials = [];

// first build motivation question trials
for (i = 0; i < totalTrialsGanx; i++) {
	trial = {
		sentence: ganxs[i],
		trial_number_block: i +1,
		trial_type: "general_anxs"
	}

	trials.push(trial);
}
