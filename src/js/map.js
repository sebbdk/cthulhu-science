var scenes = {
	//scene 01
	"start":{
		graphic:"img/scene01.png",
		text:"You are standing in a jar.",
		actions:[
			{
				text:"Wait around, this seems like a nice jar.",
				goto:"waitaround"
			},
			{
				text:"Smash your head into the glass like a lunatic.",
				goto:"leavejar"
			},
			{
				text:"Dance like pretty pony.",
				goto:"prettypony"
			}
		]
	},
	"waitaround":{
		text:"You wait around, then gentleman outside pushes a few buttons and you feel a sharp burning pain in your feet.",
		actions:[
			{
				text:"Wait around, this seems like a nice jar.",
				goto:"waitaround"
			},
			{
				text:"Smash your head into the glass like a lunatic.",
				goto:"leavejar"
			},
			{
				text:"Dance like pretty pony.",
				goto:"prettypony"
			}
		]
	},
	"prettypony":{
		text:"You unebelievably nimble dance garners no attention from the scientist outside, he must not be into dancing, the insolence!",
		actions:[
			{
				text:"Wait around, this seems like a nice jar.",
				goto:"waitaround"
			},
			{
				text:"Smash your head into the glass like a lunatic.",
				goto:"leavejar"
			},
			{
				text:"Dance like pretty pony.",
				goto:"prettypony"
			}
		]
	},
	"leavejar":{
		graphic:"img/scene01.1.png",
		text:"You pummel you head against the side of the giant glass jar.. You now have a headache, and also several pieces of glass stuck on your bald head.. Also there is a large hole in the jar now.",
		actions:[
			{
				text:"Exit and talk science' to your collegue!",
				goto:"sciencejar"
			},
			{
				text:"Exit and give you collegue a hug, it's a been a while since you saw him, and he's looking a bit nervous.",
				goto:"caringcoworker"
			}
		]
	},
	"sciencejar":{
		graphic:"img/scene01.2.png",
		text:"You mutter something random, and grab the scientist by his hand, and then you proceed to pull him into the now broken glass-container, he does not seem all too thrilled about the situation, but goes along.",
		actions:[
			{
				text:"Push some buttons on that there panel, beam him up scottie!",
				goto:"sciencejarresult"
			}
		]
	},
	"sciencejarresult":{
		graphic:"img/scene01.3.png",
		text:"You co'worker starts shaking violently, the science is working! moments later he collapses, the experiment must have fatigued him greatly, how quaint!",
		actions:[
			{
				text:"Sing a random song about the old ones and spagetti.",
				goto:"noise"
			}
		]
	},
	"caringcoworker":{
		graphic:"img/scene01.4.png",
		text:"You rush towards you co'worker to give him a hug, he tries to dodge, but your unending love scoops him in and you hug him with all your might. A few seconds laters he falls asleep, he must have been narcoleptic, poor thing.",
		actions:[
			{
				text:"Sing a lullaby to your co'worker while you carress his bald head.",
				goto:"noise"
			}
		]
	},
	"noise":{
		graphic:"img/scene01.5.png",
		text:"A loud ringing noise suddenly spreads throughout the room, your ears start to leak' a bit.",
		actions:[
			{
				text:"Investigate the source of these shinanigans!",
				goto:"bellthing"
			},
			{
				text:"Leave the room, you are leaking head-fluid all over the floor, and this is exactly how you get ants!",
				goto:"donuts"
			}
		]
	},

	"bellthing":{
		text:"You find a curius looking bell-thing stuck to the wall.",
		actions:[
			{
				text:"Smash it!",
				goto:"mesmash"
			},
			{
				text:"Smash it!",
				goto:"mesmash"
			},
			{
				text:"Smash it!",
				goto:"mesmash"
			}
		]
	},
	"mesmash":{
		graphic:"img/scene01.6.png",
		text:"You pummel the bell looking thing with your fists, the bell shatters into a thousand pieces, suprised by your strength, you take a few steps back.",
		actions:[
			{
				text:"Leave the room and look for donuts, the requirement for any good science!",
				goto:"donuts"
			}
		]
	},

	//scene 02
	"donuts":{
		text:"The smell of donuts fills the hallway",
		graphic:"img/scene02.png",
		actions:[
			{
				text:"Take a deep breath!",
				goto:"dizzy"
			},
			{
				text:"Continue down the hallway, don'..eh, science! waits for no'one!",
				goto:"workwork"
			}
		]
	},
	"workwork":{
		graphic:"img/scene02_brother.png",
		text:"Your devious brother Hastur and a few of your collegues come out from the cantina.",
		actions:[
			{
				text:"Give Hastur a highfive",
				goto:"highfive"
			},
			{
				text:"Put Hastur in a ten' eh arm lock.",
				goto:"tentaclelock"
			}
		]
	},
	"dizzy":{
		graphic:"img/scene02_brother.png",
		text:"The salivating smell of the donuts enters your nose and mind and you drift off for some time, when you come too, a few of your jolly co'workers and you brother Hastur is standing infront of you, Hastur is looking devious as always.",
		actions:[
			{
				text:"Give Hastur a highfive",
				goto:"highfive"
			},
			{
				text:"Put Hastur in a ten' eh arm lock.",
				goto:"tentaclelock"
			}
		]
	},
	"highfive":{
		graphic:"img/scene02_after5.png",
		text:"You and Hastur clashes hands like never before! A moment after a hole in time and space appears, 'that must be a first' you mutter. Momentarely after you co'workers flee the room, a few cute puppies came out of the portal.",
		actions:[
			{
				text:"Go to the cantina, you have a donut craving!",
				goto:"foodtime"
			},
			{
				text:"Pet the cute puppies!",
				goto:"petthepuppies"
			}
		]
	},
	"petthepuppies":{
		text:"The cute little puppies approach you and purr like kittens, which is a bit odd, since they are dogs. Anyway you pet them on the head and after that they rush down the hallway.",
		actions:[
			{
				text:"Go to the cantina, you have a donut craving!",
				goto:"foodtime"
			}
		]
	},
	"tentaclelock":{
		graphic:"img/scene02_aftertumble.png",
		text:"You jump Hastur like a mad dog and quicky subdue him to teach him his place, as  you tumble through the room you lose sight of your co'workers, you wonder for a second where they whent, but then proceeed to give you brother a few 'coconuts' on his head.",
		actions:[
			{
				text:"Finish off your devious brother and go quest for donuts!",
				goto:"foodtime"
			}
		]
	},

	//scene 03
	"foodtime":{
		graphic:"img/scene03.png",
		text:"You enter the cantina, which is surprisingly empty. The counter has a plethora of scrumtchy edibles on it. That anyone could leave it alone, seems almost unthinkable to you.",
		actions:[
			{
				text:"gorge uppon the delicous donuts and meats laid out on the counter.",
				goto:"likeabeast"
			},
			{
				text:"grab a plate, and like a gentleman fill the plate to the utter brim.",
				goto:"likeagent"
			}
		]
	},
	"likeagent":{
		graphic:"img/scene03_gent.png",
		text:"You grap a plate or 5 and fill them as much as you can, you put them down on a table and start feasting on them. ",
		actions:[
			{
				text:"Feast!",
				goto:"feast"
			},
			{
				text:"Feast!",
				goto:"feast"
			},
			{
				text:"Feast!",
				goto:"feast"
			}
		]
	},
	"feast":{
		graphic:"img/scene03_mess_confront.png",
		text:"Suddonly one of your co'workers runs in and makes a terrible mess! Also he accidently pushes the donuts on the counter to the floor.",
		actions:[
			{
				text:"You anger knows no bounds, the waste of food is unforgivable! Tell him off!",
				goto:"bully"
			},
			{
				text:"Ignore him, you are busy eating.",
				goto:"pettingtime"
			}
		]
	},
	"likeabeast":{
		graphic:"img/scene03_mess_confront.png",
		text:"You quickly sate you hunger, and leave the counter quite a mess, a second later one of your co'workers runs into the room, looking quite distraught. Oh The hummiliation, of being discovered as the source of the messy counter!",
		actions:[
			{
				text:"Come up with a lie, the counter was obviously this way when you got here.",
				goto:"pettingtime"
			},
			{
				text:"In a commanding voice accuse your co'worker of being the source, in a attempt to confuse him.",
				goto:"bully"
			}
		]
	},
	"pettingtime":{
		graphic:"img/scene03_mess_death.png",
		text:"Your co'worker grabs a spork and runs at you like a maniac 'this is for Jhonny' he screams at you, he then trips and accidently stabs him self.. 'how unfortunate' you mutter 'and he never even got to give Jhonny his spork.'",
		actions:[
			{
				text:"Rush to the bathroom!",
				goto:"bathroom"
			}
		]
	},
	"bully":{
		graphic:"img/scene03_mess_death.png",
		text:"You co'worker looks at you funny for a moment and then in a monotone voice cries 'I am sorry master!', he then proceeds to cry so hard he throws up.",
		actions:[
			{
				text:"Rush to the bathroom, you are in urgent need!",
				goto:"bathroom"
			}
		]
	},

	//scene 04
	"bathroom":{
		graphic:"img/scene04.png",
		text:"You enter the bathroom and quickly rushe into one of the stalls, having relieved yourself, you think for a moment about what the other old ones might be doing right about now.",
		actions:[
			{
				text:"Exit to go was your hands.",
				goto:"thewashening"
			},
			{
				text:"let one rip.",
				goto:"tiiiimber!"
			}
		]
	},
	"tiiiimber!":{
		text:"A thick yellow gas fills the stall, you get out to wash you hands.",
		actions:[
			{
				text:"Go wash your hands you filthy thing!",
				goto:"thewashening"
			}
		]
	},
	"thewashening":{
		graphic:"img/scene04_revealed.png",
		text:"You step up to the wash and start scrubbing you hands, wondering a bit why people have been acting so weird today you pick a bone from one of your tentacles, darn bugger had been bothering you since you ate.",
		actions:[
			{
				text:"Head back to do some science!",
				goto:"aquicksnack"
			},
			{
				text:"Admire your majestic facial features in the mirror for a moment",
				goto:"admirable"
			}
		]
	},
	"admirable":{
		text:"Taking a good look at your face you notice the destinct features that makes for the great one that you are, 'Cthulhu the great old one' they call you, a title only granted to the best looking squidfaces, you are certain.",
		actions:[
			{
				text:"Head back to do some science!",
				goto:"aquicksnack"
			}
		]
	},

	//scene 05
	"aquicksnack":{
		graphic:"img/scene03_revealed.png",
		text:"Before hitting the desk you stop by the cafeteria to grab some coffee, someone seems to have put a cup out for you so you just grab that.",
		actions:[
			{
				text:"Head into the hallway to get back to your work.",
				goto:"hallwaychaos"
			}
		]
	},

	//scene 06
	"hallwaychaos":{
		graphic:"img/scene02_revealed.png",
		text:"You run into you collegues and you brother in the hallway, they dont seem very talkative tho.",
		actions:[
			{
				text:"Give them a hit of your coffee to freshen them up a bit",
				goto:"coffee"
			},
			{
				text:"Head into your office",
				goto:"backtowork"
			}
		]
	},
	"coffee":{
		text:'You put some coffee in them, and they imidiatly freshen up "stell\'bsna n\'ghft" they chant, "aye, that sounds like great fun!" you tell them.',
		actions:[
			{
				text:"Head into your office",
				goto:"backtowork"
			}
		]
	},

	//scene 06
	"backtowork":{
		graphic:"img/scene01_revealed.png",
		text:"The world is not ready for the science you will bring now!",
		actions:[
			{
				text:"Do some science!",
				goto:"The end!"
			}
		]
	},


	"The end!":{
		graphic:"img/end.png",
		text:"Thank you for playing, push the little like button below if you liked this short story!",
		actions:[
			{
				text:"Press the like button",
				goto:"lol"
			},
			{
				text:"Press the like button",
				goto:"lol"
			},
			{
				text:"Press the like button",
				goto:"lol"
			}
		]
	},
	"lol":{
		text:"The one BELOW the game ;)",
		actions:[
			{
				text:"Play this awesome thing again!",
				goto:"start"
			}
		]
	}
};