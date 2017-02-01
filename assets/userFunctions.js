
//build user JSON object

//default
function buildDefaultUser(name, userId){
	let challenges = [ {
	    "ChallengeID" : "1",
	    "CorrectAnswers" : 6,
	    "LastPlayed" : 1485521873323,
	    "Ordering" : 0,
	    "TimesPlayed" : 45
	  }, {
	    "ChallengeID" : "9",
	    "CorrectAnswers" : 0,
	    "LastPlayed" : 1485455137702,
	    "Ordering" : 1,
	    "TimesPlayed" : 1
	  }, {
	    "ChallengeID" : "2",
	    "CorrectAnswers" : 0,
	    "DataSetSize" : 10,
	    "Ordering" : 1,
	    "TimesPlayed" : 0
	  }];
	let sessions = {
		    "English" : {
		        "Intermediate" : [ {
		          "Date" : 1485298800000,
		          "SessionCount" : 2
		        }, {
		          "Date" : 1485212400000,
		          "SessionCount" : 1
		        }, {
		          "Date" : 1485126000000,
		          "SessionCount" : 1
		        }, {
		          "Date" : 1485039600000,
		          "SessionCount" : 1
		        }, {
		          "Date" : 1484953200000,
		          "SessionCount" : 1
		        }, {
		          "Date" : 1484866800000,
		          "SessionCount" : 1
		        }, {
		          "Date" : 1484780400000,
		          "SessionCount" : 1
		        }, {
		          "Date" : 1484694000000,
		          "SessionCount" : 1
		        }, {
		          "Date" : 1484607600000,
		          "SessionCount" : 1
		        }, {
		          "Date" : 1484521200000,
		          "SessionCount" : 1
		        }, {
		          "Date" : 1484434800000,
		          "SessionCount" : 1
		        } ]
		      }
			};
	let settings ={
		    "AutoPlayAudio" : true,
		    "AutoSync" : true,
		    "Vibration" : true
		  };
	let statistics = {
		    "MatchesScore" : 0,
		    "Score" : 68,
		    "TimePlayed" : 1281,
		    "TrainingsScore" : 0
		  };
	let user = {
		    "Active" : false,
		    "Character" : 7,
		    "FirebaseId" : userId,
		    "Gender" : "m",
		    "Locale" : "de",
		    "Mail" : "U2FsdGVkX1+Tj2djP32p6p1PYu3IvFHteTyeJR93eupEn+caab6zE6a6gusIinnp",
		    "Name" : name,
		    "OnboardingCompleted" : true,
		    "Provider" : "Mail"
		  };
	let userLanguages = [ {
	    "Hints" : [ {
	        "ID" : 1,
	        "Type" : "MultipleChoiceImageShot"
	      }, {
	        "ID" : 2,
	        "Type" : "DragAndDropMatch"
	      } ],
	      "ID" : 1,
	      "Language" : "English",
	      "NewSetsCount" : 0,
	      "SessionCount" : 1,
	      "Title" : "Intermediate",
	      "TitleToShow" : "Elementary"
	    } ];
    let wordsProgress = {
    	    "English" : {
    	        "Intermediate" : [ {
    	          "DueDate" : 1485521384740,
    	          "Package" : "1",
    	          "Phase" : 5,
    	          "WordID" : "1"
    	        }, {
    	          "DueDate" : 1485541206320,
    	          "Package" : "1",
    	          "Phase" : 6,
    	          "WordID" : "2"
    	        }, {
    	          "DueDate" : 1485454353068,
    	          "Package" : "1",
    	          "Phase" : 4,
    	          "WordID" : "3"
    	        }, {
    	          "DueDate" : 1485607474678,
    	          "Package" : "1",
    	          "Phase" : 6,
    	          "WordID" : "4"
    	        }, {
    	          "DueDate" : 1485541258855,
    	          "Package" : "1",
    	          "Phase" : 6,
    	          "WordID" : "5"
    	        }, {
    	          "DueDate" : 1485541212817,
    	          "Package" : "2",
    	          "Phase" : 6,
    	          "WordID" : "10"
    	        }, {
    	          "DueDate" : 1485521208109,
    	          "Package" : "2",
    	          "Phase" : 5,
    	          "WordID" : "6"
    	        }, {
    	          "DueDate" : 1485521143279,
    	          "Package" : "2",
    	          "Phase" : 5,
    	          "WordID" : "7"
    	        }, {
    	          "DueDate" : 1485454732628,
    	          "Package" : "2",
    	          "Phase" : 4,
    	          "WordID" : "8"
    	        }, {
    	          "DueDate" : 1485521434832,
    	          "Package" : "2",
    	          "Phase" : 5,
    	          "WordID" : "9"
    	        }, {
    	          "DueDate" : 1485541233723,
    	          "Package" : "3",
    	          "Phase" : 6,
    	          "WordID" : "11"
    	        }, {
    	          "DueDate" : 1485541192510,
    	          "Package" : "3",
    	          "Phase" : 6,
    	          "WordID" : "12"
    	        }, {
    	          "DueDate" : 1485541218096,
    	          "Package" : "3",
    	          "Phase" : 6,
    	          "WordID" : "13"
    	        }, {
    	          "DueDate" : 1485521191560,
    	          "Package" : "3",
    	          "Phase" : 5,
    	          "WordID" : "14"
    	        }, {
    	          "DueDate" : 1485521183656,
    	          "Package" : "3",
    	          "Phase" : 4,
    	          "WordID" : "15"
    	        }, {
    	          "DueDate" : 1485521446353,
    	          "Package" : "4",
    	          "Phase" : 5,
    	          "WordID" : "16"
    	        }, {
    	          "DueDate" : 1485521416200,
    	          "Package" : "4",
    	          "Phase" : 4,
    	          "WordID" : "17"
    	        }, {
    	          "DueDate" : 1485521441079,
    	          "Package" : "4",
    	          "Phase" : 4,
    	          "WordID" : "18"
    	        }, {
    	          "DueDate" : 1485521042217,
    	          "Package" : "4",
    	          "Phase" : 4,
    	          "WordID" : "19"
    	        }, {
    	          "DueDate" : 1485521204512,
    	          "Package" : "4",
    	          "Phase" : 4,
    	          "WordID" : "20"
    	        }, {
    	          "DueDate" : 1485521411303,
    	          "Package" : "5",
    	          "Phase" : 3,
    	          "WordID" : "21"
    	        }, {
    	          "DueDate" : 1485521233213,
    	          "Package" : "5",
    	          "Phase" : 3,
    	          "WordID" : "22"
    	        }, {
    	          "DueDate" : 1485521423782,
    	          "Package" : "5",
    	          "Phase" : 4,
    	          "WordID" : "23"
    	        }, {
    	          "DueDate" : 1485521399178,
    	          "Package" : "5",
    	          "Phase" : 4,
    	          "WordID" : "24"
    	        }, {
    	          "DueDate" : 1485521302696,
    	          "Package" : "5",
    	          "Phase" : 3,
    	          "WordID" : "25"
    	        }, {
    	          "DueDate" : 1485521483556,
    	          "Package" : "6",
    	          "Phase" : 3,
    	          "WordID" : "26"
    	        }, {
    	          "DueDate" : 1485521500706,
    	          "Package" : "6",
    	          "Phase" : 3,
    	          "WordID" : "27"
    	        }, {
    	          "DueDate" : 1485521505479,
    	          "Package" : "6",
    	          "Phase" : 3,
    	          "WordID" : "28"
    	        }, {
    	          "DueDate" : 1485521510111,
    	          "Package" : "6",
    	          "Phase" : 3,
    	          "WordID" : "29"
    	        }, {
    	          "DueDate" : 1485521515739,
    	          "Package" : "6",
    	          "Phase" : 3,
    	          "WordID" : "30"
    	        } ]
    	      }
    	    };
	return {
			"challenges": challenges,
			"sessions": sessions,
			"settings": settings,
			"statistics": statistics,
			"user": user,
			"userLanguages": userLanguages,
			"wordsProgress": wordsProgress,
	};
}

// cost
function buildCostUser(name, userId){
	return buildDefaultUser(name, userId); // TODO
}

function buildUser(datastructure, name, userId){
	switch (datastructure){
	case 'default':
		return buildDefaultUser(name, userId);
	case 'cost':
		return buildCostUser(name, userId);
	default:
		return {};
	}
}