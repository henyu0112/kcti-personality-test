// questions.<id>.options.<personalityId> is the answer that points at that personality.
// Each question has exactly the 4 options listed in src/data/questions.js (one is omitted).
//
// Answers describe a behaviour with the personality's energy; they never use its name or
// catchphrase (a test enforces this), so the quiz doesn't give the result away.
export default {
  // ---- K: Kacau Level ----
  k1: {
    prompt: `Your group project is due in one hour and the file has vanished. You…`,
    options: {
      zenmeban: `Phone everyone you know at once, all talking over each other, begging for help.`,
      gai: `Slump in your chair. Of course it happens today, when the wifi has died too.`,
      bird: `Tell the lecturer the file is "inside the cloud, but also not inside".`,
      nihenkeai: `Smile sweetly at the teammate who "handled the backup": "Wow, so reliable. Really impressive."`,
    },
  },
  k2: {
    prompt: `You're stuck in a highway jam and a wedding dinner is about to start. You…`,
    options: {
      hin: `Open TuJu, Google Maps and the radio. All three disagree, and now you're lost as well.`,
      gai: `Stare at the endless red line. The dinner will be over by the time you arrive, and somehow this whole day was always going to go like this.`,
      bird: `Give your passenger a long speech on why traffic exists, ending with "so basically it's the road's fault".`,
      nihenkeai: `Message the friend who swore this route had no jam: "Great navigation. Truly a talent."`,
    },
  },
  k3: {
    prompt: `The restaurant brings the wrong order for the third time. You…`,
    options: {
      hin: `Are no longer sure what you ordered. Maybe this is what you ordered?`,
      zenmeban: `Freeze. What do you do now? You're hungry and the whole table is waiting for you to speak up.`,
      bird: `Tell the waiter: "I wanted the one that's like the other one, but less wet."`,
      nihenkeai: `Smile at the waiter: "Wow, three times in a row. Such consistency."`,
    },
  },
  k4: {
    prompt: `Your phone slips and lands face-down on the floor. You…`,
    options: {
      hin: `Pick it up, screen's fine. Then a crack appears on the back from nowhere and keeps spreading, and you still don't know how.`,
      zenmeban: `Pray before flipping it: "Please don't be cracked. If it's cracked, what do I do?!"`,
      gai: `Flip it. Cracked. Naturally. This whole week has been one disaster after another.`,
      nihenkeai: `Quietly tell the phone: "Wow. Perfect timing. Thanks a lot."`,
    },
  },
  k5: {
    prompt: `A friend says "trust me, I know the way", and now you're lost. You…`,
    options: {
      hin: `Watch everyone argue while the map points the opposite way. It keeps getting worse for reasons nobody understands.`,
      zenmeban: `Cry out "What do we do?!" The phone is at 5% and nobody knows the way.`,
      gai: `Wrong turn, dead end, and now a big drain ahead. Of course. This week is cursed.`,
      bird: `Announce the plan: "We go forward, but backwards, through a different front."`,
    },
  },
  k6: {
    prompt: `You accidentally send your private rant to the work group chat. You…`,
    options: {
      zenmeban: `Unsend! Delete! Quick, think of something, anything!`,
      gai: `See "read by 12". Your career is finished. Another day, another disaster.`,
      bird: `Send another message to explain the first one. It explains nothing.`,
      nihenkeai: `Type "Wow, everyone is so thoughtful today" and let them guess who it's for.`,
    },
  },
  k7: {
    prompt: `Your laptop shuts down right before you press Save. You…`,
    options: {
      hin: `Reopen it. A different file appears, and now you don't know which one is yours.`,
      gai: `Sigh. Naturally. The charger is at home too.`,
      bird: `Tell your friends: "It's not lost, it's in a state of being not found."`,
      nihenkeai: `Say to the laptop: "Wow. Perfect timing. You're a real star."`,
    },
  },
  k8: {
    prompt: `The group chat is arguing about where to eat and nobody decides. You…`,
    options: {
      hin: `Read 120 messages. Now you're not sure what anyone wants, including yourself.`,
      zenmeban: `Panic: it's already 9pm and everywhere will close. What do we do?!`,
      bird: `Say: "Let's go to the place that is like the other place, but nearer to here."`,
      nihenkeai: `Reply: "Wow, you're all so decisive. Truly inspiring."`,
    },
  },

  k9: {
    prompt: `Your Grab driver has been "2 minutes away" for the past 15 minutes. You…`,
    options: {
      zenmeban: `Phone the driver, then the support line, then your friend, all while pacing in circles.`,
      gai: `Watch the little car circle the same block. Naturally. This is how the whole month has been going.`,
      bird: `Call the driver and give directions: "I'm standing near the thing, next to the other thing, opposite the place."`,
      nihenkeai: `Text the driver: "Amazing, so close. Maybe by next week you'll find me."`,
    },
  },
  k10: {
    prompt: `Your RM80 durian rolls out of the bag and into the drain. You…`,
    options: {
      hin: `Reach in to grab it, push it deeper, and soon you're not even sure which drain this is.`,
      gai: `Watch it float away. Of course. Even the durian has bad luck today.`,
      bird: `Tell the passers-by it's "an investment in the local ecosystem".`,
      nihenkeai: `Say to the drain: "Wow, enjoy. Hope it was worth it for you."`,
    },
  },
  k11: {
    prompt: `You walk into the meeting room and realise you brought the wrong presentation. You…`,
    options: {
      hin: `Click through the slides hoping it's the right one. Every slide makes it more confusing.`,
      zenmeban: `Whisper to the colleague next to you: help, what do I do, what do I do?!`,
      bird: `Present it anyway, calling it "a bold reinterpretation of the agenda".`,
      nihenkeai: `Smile at the colleague who "checked the file": "Wow, such great attention to detail."`,
    },
  },
  k12: {
    prompt: `You press Send on an email and spot a typo in the first line. You…`,
    options: {
      hin: `Open the sent email, then the original, then another draft. Now there are three versions and you can't tell which one went out.`,
      zenmeban: `Try to recall it, call the receiver, and panic-message everyone: "Please don't open it!"`,
      gai: `Sigh. Naturally, the typo is in the client's name. Typical.`,
      nihenkeai: `Reply to the email you just sent yourself: "Great work. So professional."`,
    },
  },
  k13: {
    prompt: `Your phone dies at 1% while you're waiting for a very important OTP. You…`,
    options: {
      hin: `Plug it in, restart it, and now it asks for a password you don't remember setting.`,
      zenmeban: `Run around the mall asking strangers for a charger, any charger, please!`,
      gai: `Watch it die. Of course. The OTP expires in 60 seconds and everything today is like this.`,
      nihenkeai: `Tell the phone sweetly: "You picked the exact worst moment. How thoughtful of you."`,
    },
  },
  k14: {
    prompt: `You and your friend reach the cinema and realise you booked the wrong date. You…`,
    options: {
      hin: `Check the tickets, the date and the app. The date is different on every screen you look at.`,
      zenmeban: `Stage-whisper at the counter: "What do we do?! Any seat? Any show? Any anything?!"`,
      gai: `Slowly close your eyes. Of course. Even the booking date has betrayed you.`,
      bird: `Explain to the staff that you "booked the correct date, just in a different timeline".`,
    },
  },
  k15: {
    prompt: `Sambal splashes onto your white shirt right before the family photo. You…`,
    options: {
      hin: `Rub it with tissue, then water, then more tissue. The stain keeps growing and now looks like a map of somewhere.`,
      zenmeban: `Run up to everyone: "Do you have stain remover? Salt? Anything?!"`,
      gai: `Stare at the red splash. Naturally. Today was the exact day the shirt had to be spotless.`,
      bird: `Tell the photographer the stain is "intentional, a design choice from the kitchen collection".`,
    },
  },

  // ---- C: Cara Hidup ----
  c1: {
    prompt: `It's Friday night and you have no plans. You…`,
    options: {
      kiasu: `Check three event pages so you don't miss any free entry or promo.`,
      paiseh: `Wait for someone to invite you, then feel too embarrassed to say yes too quickly.`,
      syok: `Stay home, play your own playlist and dance like nobody's watching (nobody is).`,
      steady: `Reply to everyone's plan with "sure, I'm free" and show up on time.`,
    },
  },
  c2: {
    prompt: `A buffet opens at 6pm. You…`,
    options: {
      chill: `Arrive at 7. The food isn't going anywhere.`,
      paiseh: `Take a small portion. Go back for more only when nobody is looking.`,
      syok: `Eat your own way: dessert first, and you're proud of it.`,
      steady: `Queue calmly, take a balanced plate and save seats for everyone.`,
    },
  },
  c3: {
    prompt: `The meal is over and someone has to settle the bill. You…`,
    options: {
      chill: `Slowly open Touch 'n Go. We'll figure it out later.`,
      kiasu: `Already calculated everyone's share to the cent, SST included.`,
      syok: `Announce you'll pay, then tell a long story about how generous you are.`,
      steady: `Pay first, collect later. "Okay okay, I settle."`,
    },
  },
  c4: {
    prompt: `A new colleague asks you for a last-minute favour. You…`,
    options: {
      chill: `"Later, later." Teh tarik first.`,
      kiasu: `Check what's in it for you first. Then say yes.`,
      paiseh: `Say yes because you're too embarrassed to say no.`,
      steady: `"No problem, leave it to me." Done by lunch.`,
    },
  },
  c5: {
    prompt: `The weekend is here. Your plan is…`,
    options: {
      chill: `Sofa, series, snacks, repeat.`,
      kiasu: `Wake up at 6 to be first in the queue at the viral new cafe.`,
      paiseh: `Stay home and avoid anyone who might say hi.`,
      syok: `Go solo, reward yourself with good food and rate it 10 out of 10.`,
    },
  },
  c6: {
    prompt: `A stranger compliments your outfit. You…`,
    options: {
      kiasu: `"Thanks! It was 50% off, I got the last piece!"`,
      paiseh: `"Ha?? No lah, just wear-wear only." Your face turns red.`,
      syok: `"I know, right?" and you do a little spin.`,
      steady: `"Thanks!" with a smile, then compliment theirs too.`,
    },
  },
  c7: {
    prompt: `A friend invites you on a long road trip. You…`,
    options: {
      chill: `"Okay lah, whenever." You pack nothing until the last hour.`,
      paiseh: `Say yes, then feel too embarrassed to ask for a toilet stop.`,
      syok: `Take charge of the playlist and sing every song at full volume.`,
      steady: `Check the tyres, bring water and offer to drive the first shift.`,
    },
  },
  c8: {
    prompt: `There's one last piece of the delicious cake on the table. You…`,
    options: {
      chill: `Don't mind. If it's still there later, nice.`,
      kiasu: `Take it immediately and tuck it away before anyone else sees.`,
      syok: `Eat it slowly with great drama, as if starring in a food ad.`,
      steady: `Cut it in half and share it with whoever is next to you.`,
    },
  },

  c9: {
    prompt: `The queue for the viral new bubble tea shop is 90 minutes long. You…`,
    options: {
      kiasu: `Were there at 8am already, and even brought a mat to sit on.`,
      paiseh: `Join the queue, find out it's not worth it, and feel too embarrassed to leave.`,
      syok: `Queue happily with your own playlist. The waiting is half the fun.`,
      steady: `Count the people, work out the wait, and tell your friends exactly when to show up.`,
    },
  },
  c10: {
    prompt: `Your neighbour invites you to a durian party where everyone brings a dish. You…`,
    options: {
      chill: `Bring nothing and arrive late. Somebody will have extra.`,
      paiseh: `Bring a huge amount of food because you'd feel too embarrassed to arrive empty-handed.`,
      syok: `Bring only your favourite dish, eat most of it yourself and feel completely happy.`,
      steady: `Ask who's bringing what, then fill in whatever is missing.`,
    },
  },
  c11: {
    prompt: `The shop has a "buy 1 free 1" sign. You…`,
    options: {
      chill: `Glance at it and keep walking. If it's still there next week, fine.`,
      kiasu: `Grab four, then work out who else you can push a free one onto.`,
      syok: `Buy it because you love the sign. You don't need it, but you feel great.`,
      steady: `Check whether you actually need it, then buy exactly what's useful.`,
    },
  },
  c12: {
    prompt: `A friend invites you to a wedding in another state and you won't know anyone there. You…`,
    options: {
      chill: `Say yes, book later and wing it.`,
      kiasu: `Book the cheapest flight the second the date is out, and try for a free hotel upgrade.`,
      paiseh: `Go, then sit quietly at the corner table apologising to everyone who walks past.`,
      steady: `Make a checklist: flights, gift, outfit, ang pow. Everything sorted weeks ahead.`,
    },
  },
  c13: {
    prompt: `You're the first to arrive at the party and the host isn't ready. You…`,
    options: {
      chill: `Sit down and scroll your phone. No rush, they'll be ready at some point.`,
      kiasu: `Check what food is out first, then take the seat nearest to it.`,
      paiseh: `Stand awkwardly at the door and apologise for being early.`,
      steady: `Offer to help set up the chairs and carry things.`,
    },
  },
  c14: {
    prompt: `It's your turn to choose where the family eats. You…`,
    options: {
      chill: `"Anywhere is fine." Your decision is that you made no decision.`,
      kiasu: `Read six reviews, then pick the place with the best promotion and the shortest queue.`,
      paiseh: `Name the cheapest place because you don't want anyone spending too much on you.`,
      syok: `Choose your favourite spot, order your favourite dish and tell everyone "trust me".`,
    },
  },
  c15: {
    prompt: `A friend lent you a book and six months later you still haven't returned it. You…`,
    options: {
      chill: `Leave it on the shelf. It'll go back when it goes back.`,
      kiasu: `Make sure you've read every page first, because a free book should never be wasted. Then return it.`,
      paiseh: `Avoid your friend completely because you're too embarrassed to bring it up.`,
      syok: `Read it for the fifth time, scribble your own theories in the margins and love every minute.`,
    },
  },

  // ---- T: Tengah Loading ----
  t1: {
    prompt: `Someone asks you a question that needs a real answer. You…`,
    options: {
      errrr: `Start to answer, trail off, restart, and never quite finish the sentence.`,
      ehhhhh: `Raise an eyebrow and ask whether that's really the right question to be asking.`,
      ahhhhhh: `Let out a long, tired groan. It's the fifth time today you've been asked the same thing.`,
      harrrrr: `Lean in and ask them to say it again.`,
    },
  },
  t2: {
    prompt: `A friend shares some shocking gossip. You…`,
    options: {
      hmmm: `Go quiet and file it away for later analysis.`,
      ehhhhh: `Eyes wide: "Really? That can't be true!"`,
      ahhhhhh: `Roll your head back with a groan. It's the third time they're telling you the same gossip.`,
      harrrrr: `Ask them to go back: who? Who did what?`,
    },
  },
  t3: {
    prompt: `The wifi dies in the middle of a video call. You…`,
    options: {
      hmmm: `Go quiet, check the router, check the cable and think about life.`,
      errrr: `Fumble for words at the frozen screen: "Can you hear me? Hello? Hello…?"`,
      ahhhhhh: `Throw your head back with a loud groan and glare at the router like it owes you money.`,
      harrrrr: `Squint at the screen: "Sorry, you froze. What did you say?"`,
    },
  },
  t4: {
    prompt: `A friend explains a very complicated plan. You…`,
    options: {
      hmmm: `Nod slowly and say "interesting". You haven't understood, but you look wise.`,
      errrr: `Try to follow and trail off mid-sentence: "So we go there, and then…?"`,
      ehhhhh: `Squint: this part doesn't add up. You spot the hole in the plan immediately.`,
      harrrrr: `Ask them to start again from the very beginning.`,
    },
  },
  t5: {
    prompt: `Your boss asks, "Can you finish this by tomorrow?" You…`,
    options: {
      hmmm: `Silently calculate hours, coffee and sleep before you answer.`,
      errrr: `"Can… I think… let me just check…" You can't commit to a yes or a no.`,
      ehhhhh: `Tilt your head: "Tomorrow? Just now you said next week!"`,
      ahhhhhh: `Inner scream, outer smile, and a very long exhale.`,
    },
  },
  t6: {
    prompt: `You're handed a menu with 200 items. You…`,
    options: {
      errrr: `"I'll… follow you lah." You can't decide, so you hand it over.`,
      ehhhhh: `Raise your eyebrows at the price of every single dish.`,
      ahhhhhh: `Groan at the menu: why so many choices? Hungry and annoyed.`,
      harrrrr: `Ask the waiter what exactly is the difference between number 17 and 18.`,
    },
  },
  t7: {
    prompt: `Someone asks you, "Where's the nearest toilet?" You…`,
    options: {
      hmmm: `Pause and trace the route in your head before you point.`,
      ehhhhh: `Look them up and down: why ask me? Do I look like I live here?`,
      ahhhhhh: `Sigh heavily. It's the third time today someone has asked you.`,
      harrrrr: `Cup your hand to your ear: "Toilet? What toilet?"`,
    },
  },
  t8: {
    prompt: `A friend says, "Guess what happened to me yesterday." You…`,
    options: {
      hmmm: `Think of five possible answers and say none of them.`,
      errrr: `Guess hesitantly: "You got… promoted? …No? …Maybe…?"`,
      ahhhhhh: `Groan: "Just tell me!" You hate guessing games.`,
      harrrrr: `Ask them to repeat themselves: what happened?`,
    },
  },

  t9: {
    prompt: `A stranger on the bus starts telling you a very long story. You…`,
    options: {
      errrr: `Try to respond but only manage half-sentences: "Oh… that must have… I mean…"`,
      ehhhhh: `Raise an eyebrow at every detail. A cat did what? Really?`,
      ahhhhhh: `Sigh quietly and stare out of the window, counting the stops left.`,
      harrrrr: `Keep leaning in: "Sorry, who? What happened to who?"`,
    },
  },
  t10: {
    prompt: `A friend shows you two photos that look identical and asks, "Which one is nicer?" You…`,
    options: {
      hmmm: `Hold the phone at arm's length, narrow your eyes and study both for a full minute.`,
      ehhhhh: `Look at them: "These are the same. Are you testing me?"`,
      ahhhhhh: `Let out a long groan: this is the tenth time today they've asked.`,
      harrrrr: `Ask: "Wait, which one is the left one? Which one is the right one?"`,
    },
  },
  t11: {
    prompt: `The aunty at the market tells you the mangoes are RM25 a kilo. You…`,
    options: {
      hmmm: `Stare at the mangoes, calculate the cost per bite and pause for a long time before moving on.`,
      errrr: `"Okay… so… maybe… one… or two…" You can't tell her what you want.`,
      ahhhhhh: `Groan and roll your eyes at the sky: why is everything so expensive now?`,
      harrrrr: `Ask her to repeat it: "How much? Per kilo or per piece?"`,
    },
  },
  t12: {
    prompt: `A friend announces they're quitting their job to become a full-time influencer. You…`,
    options: {
      hmmm: `Fold your arms and think very hard about what to say, then say nothing.`,
      errrr: `"That's… I mean… good for you… maybe…" You can't find a safe sentence.`,
      ehhhhh: `Raise both eyebrows: "You? Influencer? With how many followers?"`,
      harrrrr: `"Sorry, what? What kind of influencer?"`,
    },
  },
  t13: {
    prompt: `Your grandma asks what exactly you do for work. You…`,
    options: {
      hmmm: `Take a long time to find the simplest possible explanation, then explain it slowly.`,
      errrr: `"I… well… it's like… the computer… and… you know…" and give up halfway.`,
      ehhhhh: `Raise an eyebrow when she says: "So you just sit and click?"`,
      harrrrr: `Ask her to repeat the question twice, then realise she was the one who didn't hear.`,
    },
  },
  t14: {
    prompt: `Your phone tells you your screen time is 11 hours a day. You…`,
    options: {
      hmmm: `Stare at the number and think about where those hours went.`,
      errrr: `"That's… well… some of it was… work? Maybe?" You explain this to nobody.`,
      ehhhhh: `Squint at it: "No way. This must be wrong. I barely touched it."`,
      ahhhhhh: `Throw your head back with a groan, then pick up the phone to complain about it online.`,
    },
  },
  t15: {
    prompt: `A friend suddenly announces a surprise birthday party for you, and it's today. You…`,
    options: {
      hmmm: `Take in the room, the cake and the faces, and slowly work out what is happening.`,
      errrr: `"Oh… wow… thanks… I… didn't… you shouldn't have…" and you can't finish.`,
      ehhhhh: `Squint at the room: "Wait, is today really my birthday? Are you sure?"`,
      ahhhhhh: `Groan: you haven't even washed your hair and now everyone has a camera.`,
    },
  },

  // ---- I: Impossible Level ----
  i1: {
    prompt: `The deadline is tomorrow and you've done 10% of the work. You…`,
    options: {
      liao: `Say it's already too late and nothing can fix it.`,
      siao: `Laugh like a madman, text the group "who needs sleep?!" and get started.`,
      biao: `Shake your head, close the laptop and refuse to touch it.`,
      behhiao: `Throw up your hands. No amount of effort from you will fix this; it needs a miracle.`,
    },
  },
  i2: {
    prompt: `Your friends dare you to talk to a famous celebrity at the mall. You…`,
    options: {
      hiao: `Know it's impossible, and walk up anyway with a pen and a dream.`,
      siao: `Run up screaming, sing their song and take a photo with the security guard.`,
      biao: `Shake your head instantly and hide behind a pillar.`,
      behhiao: `Shrug: you don't know them, and nobody you know does either, so there's nothing you can do.`,
    },
  },
  i3: {
    prompt: `A company says "5 years of experience required" for a fresh graduate role. You…`,
    options: {
      hiao: `Apply anyway. Who knows?`,
      liao: `Close the tab. The job market is hopeless and it's all too late.`,
      biao: `Close the page instantly. You won't even read the rest.`,
      behhiao: `Accept that you can't change the system. It's not your fight.`,
    },
  },
  i4: {
    prompt: `Your friend wants to open a durian stall in the Arctic. You…`,
    options: {
      hiao: `Impossible? Yes. Join? Also yes.`,
      liao: `"Give up before you start. The durians will freeze."`,
      siao: `"This is insane, I love it! Let's go!"`,
      behhiao: `Can't help with the idea. Can't help with the Arctic either.`,
    },
  },
  i5: {
    prompt: `Your flight leaves in 20 minutes and the airport is an hour away. You…`,
    options: {
      hiao: `Run through the airport anyway. Maybe the plane is delayed.`,
      liao: `Slump down. It's gone. Time to rebook and cry.`,
      siao: `Laugh, call the airline, beg, and sprint through security like an action movie.`,
      biao: `Say no on the spot and turn the car around.`,
    },
  },
  i6: {
    prompt: `Someone says, "Let's fix this rusty old car right now with chewing gum!" You…`,
    options: {
      liao: `"It's rusted beyond saving." You've already given up on it.`,
      siao: `"Yes! Pass me the gum!" and you even give the car a name.`,
      biao: `Shake your head: nope. You're taking the bus.`,
      behhiao: `"I don't know mechanics. Can't help, sorry."`,
    },
  },
  i7: {
    prompt: `A shop says it's closed, but you really need something inside. You…`,
    options: {
      hiao: `Knock on the door anyway. Someone might still be in there.`,
      siao: `Wave at the staff through the glass and act out your emergency.`,
      biao: `Say "forget it" immediately and walk away.`,
      behhiao: `Accept that it's not up to you. You can't force a closed shop open.`,
    },
  },
  i8: {
    prompt: `Your friend dares you to finish 10 plates of char kuey teow in 10 minutes. You…`,
    options: {
      hiao: `You know it's impossible. You pick up the fork anyway.`,
      liao: `You'd be defeated by plate 3, so you may as well concede now.`,
      biao: `Refuse before the dare is even finished.`,
      behhiao: `Your stomach says no. It's out of your power, so you can't help yourself.`,
    },
  },
  i9: {
    prompt: `The bus driver says the last bus left 10 minutes ago and you're 20 km from home. You…`,
    options: {
      liao: `Sit on the kerb. It's gone and there's no way home now.`,
      siao: `Start walking and singing loudly, dancing at every bus stop for fun.`,
      biao: `Refuse to even think about walking and shake your head at every suggestion your friends make.`,
      behhiao: `Spread your hands: the buses aren't up to you, so there's nothing you can do.`,
    },
  },
  i10: {
    prompt: `A friend asks you to carry their sofa up five floors with no lift. You…`,
    options: {
      hiao: `Roll up your sleeves. Impossible? Yes. You're pushing from below anyway.`,
      siao: `Shout "Let's go!", put the sofa on your head and run up the stairs.`,
      biao: `Shake your head the second you hear the word "sofa".`,
      behhiao: `Lean on the wall: you can't lift it, and you can't make anyone else lift it either.`,
    },
  },
  i11: {
    prompt: `Someone says the only way to see the sunrise is to climb a mountain at 3am. You…`,
    options: {
      hiao: `Haven't exercised in a year. You go anyway, with a torch and a dream.`,
      liao: `Look at your sleepy face in the mirror. It's over before it starts.`,
      biao: `Switch off the alarm and refuse before the sentence is even finished.`,
      behhiao: `Accept that your legs and your schedule say no, and nothing you do will change that.`,
    },
  },
  i12: {
    prompt: `Your teacher says you must hand in a 5,000-word essay by tomorrow morning. You…`,
    options: {
      hiao: `Open the laptop and start typing at midnight. Possible? Unlikely. You do it anyway.`,
      liao: `Close the laptop: starting now is already too late.`,
      siao: `Laugh like a villain, make three coffees and shout "Let's write!" at the empty room.`,
      behhiao: `Accept that no amount of effort from you will finish it. Someone else will have to rescue this.`,
    },
  },
  i13: {
    prompt: `A friend suggests you learn to swim in one day so you can join tomorrow's trip. You…`,
    options: {
      hiao: `Jump in the pool. Impossible? Of course. You're swimming anyway.`,
      liao: `Look at the water. Nobody learns this in a day, so the result is already decided.`,
      siao: `Cannonball into the pool in your clothes, shouting that you're a champion.`,
      behhiao: `Shrug: you'd love to, but water isn't something you can negotiate with.`,
    },
  },
  i14: {
    prompt: `Someone asks you to cheer up an entire bus that's stuck in a jam. You…`,
    options: {
      hiao: `Stand up in the aisle with no plan. Cheering up strangers is nearly impossible, but you try.`,
      liao: `Look at the sad faces around you. Nothing will fix this jam, so you don't even try.`,
      siao: `Pull out a speaker and lead everyone in a loud sing-along, with dance moves.`,
      biao: `Shake your head: no way, you're staying in your seat.`,
    },
  },
  i15: {
    prompt: `A friend wants you up at 4am for a flash sale that sells out in seconds. You…`,
    options: {
      hiao: `Set three alarms. Everyone says the stock will vanish in 2 seconds, but you're trying anyway.`,
      liao: `Look at the clock: it's already 4:01. Too late, forget it.`,
      siao: `Spring out of bed in the dark, shouting about victory and buying everything.`,
      biao: `Refuse before the message is finished and go back to sleep.`,
    },
  },
};
