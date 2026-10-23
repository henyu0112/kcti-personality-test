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
      hin: `Open Waze, Google Maps and the radio. All three disagree, and now you're lost as well.`,
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
};
