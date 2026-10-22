// questions.<id>.options.<personalityId> is the answer that points at that personality.
// Each question has exactly the 4 options listed in src/data/questions.js (one is omitted).
export default {
  // ---- K: Kacau Level ----
  k1: {
    prompt: `Your group project is due in one hour and the file has vanished. You…`,
    options: {
      zenmeban: `Call everyone at once: "怎么办 怎么办 怎么办!"`,
      gai: `Sigh. Of course it's today. The wifi just died too.`,
      bird: `Tell the lecturer the file is "inside the cloud, but also not inside".`,
      nihenkeai: `Tell the teammate who "handled the backup": "你很可爱勒."`,
    },
  },
  k2: {
    prompt: `You're stuck in a highway jam and a wedding dinner is about to start. You…`,
    options: {
      hin: `Open Waze, Google Maps and the radio. All three disagree, and now you're lost as well.`,
      gai: `Stare at the endless red line. The dinner will be over by the time you arrive. Everything today is gai.`,
      bird: `Give your passenger a long speech on why traffic exists, ending with "so basically it's the road's fault".`,
      nihenkeai: `Message the friend who said "this route, 100% no jam": "你很可爱勒."`,
    },
  },
  k3: {
    prompt: `The restaurant brings the wrong order for the third time. You…`,
    options: {
      hin: `Are no longer sure what you ordered. Maybe this is what you ordered?`,
      zenmeban: `Think "怎么办": you're hungry and the whole table is waiting for you to speak up.`,
      bird: `Tell the waiter: "I wanted the one that's like the other one, but less wet."`,
      nihenkeai: `Smile at the waiter: "你很可爱勒, this is already the third time."`,
    },
  },
  k4: {
    prompt: `Your phone slips and lands face-down on the floor. You…`,
    options: {
      hin: `Pick it up, screen's fine. Then a crack appears on the back from nowhere and keeps spreading, and you still don't know how.`,
      zenmeban: `Pray before flipping it: "Please don't be cracked. If it's cracked, 怎么办?"`,
      gai: `Flip it. Cracked. Of course it is, this whole week has been gai.`,
      nihenkeai: `Quietly tell the phone: "你很可爱勒."`,
    },
  },
  k5: {
    prompt: `A friend says "trust me, I know the way", and now you're lost. You…`,
    options: {
      hin: `Watch everyone argue while the map points the opposite way. It keeps getting worse for reasons nobody understands.`,
      zenmeban: `Cry "怎么办", the phone is at 5%, who knows the way?!`,
      gai: `Take a wrong turn, hit a dead end, and now there's a big drain ahead. Gai.`,
      bird: `Announce the plan: "We go forward, but backwards, through a different front."`,
    },
  },
  k6: {
    prompt: `You accidentally send your private rant to the work group chat. You…`,
    options: {
      zenmeban: `Unsend! Delete! 怎么办 怎么办 怎么办.`,
      gai: `See "read by 12". Your career is gai.`,
      bird: `Send another message to explain the first one. It explains nothing.`,
      nihenkeai: `Type "Wah, everyone is so cute today, 你很可爱勒" and let them guess who it's for.`,
    },
  },
  k7: {
    prompt: `Your laptop shuts down right before you press Save. You…`,
    options: {
      hin: `Reopen it. A different file appears, and now you don't know which one is yours.`,
      gai: `Sigh. Of course. The charger is at home too.`,
      bird: `Tell your friends: "It's not lost, it's in a state of being not found."`,
      nihenkeai: `Say to the laptop: "你很可爱勒, perfect timing."`,
    },
  },
  k8: {
    prompt: `The group chat is arguing about where to eat and nobody decides. You…`,
    options: {
      hin: `Read 120 messages. Now you're not sure what anyone wants, including yourself.`,
      zenmeban: `Think "怎么办", it's already 9pm and everywhere will close!`,
      bird: `Say: "Let's go to the place that is like the other place, but nearer to here."`,
      nihenkeai: `Reply: "你们都很可爱勒, such decisive people."`,
    },
  },

  // ---- C: Cara Hidup ----
  c1: {
    prompt: `It's Friday night and you have no plans. You…`,
    options: {
      kiasu: `Check three event pages so you don't miss any free entry or promo.`,
      paiseh: `Wait for someone to invite you, then feel paiseh about saying yes too quickly.`,
      syok: `Stay home, play your own playlist and dance like nobody's watching (nobody is).`,
      steady: `Reply to everyone's plan with "can, can, I'm free" and show up on time.`,
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
      chill: `"Later lah." Teh tarik first.`,
      kiasu: `Check what's in it for you first. Then say yes.`,
      paiseh: `Say yes because you feel paiseh to say no.`,
      steady: `"Can, no problem." Done by lunch.`,
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
      paiseh: `Say yes, then feel paiseh about asking to stop for the toilet.`,
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
      errrr: `"Errrr... I think... maybe... erm..." and the sentence never lands.`,
      ehhhhh: `"Ehhhhh? That one is correct meh?" You doubt the question itself.`,
      ahhhhhh: `"Ahhhhhh!" because this is the fifth time today you've been asked the same thing.`,
      harrrrr: `"Harrrrr?" Please ask again.`,
    },
  },
  t2: {
    prompt: `A friend shares some shocking gossip. You…`,
    options: {
      hmmm: `"Hmmmm." Store it quietly for later analysis.`,
      ehhhhh: `"Ehhhhh?? Really? Cannot be one lah!"`,
      ahhhhhh: `"Ahhhhhh, again!" It's the third time they're telling you the same gossip.`,
      harrrrr: `"Harrrrr? Who? Who did what?"`,
    },
  },
  t3: {
    prompt: `The wifi dies in the middle of a video call. You…`,
    options: {
      hmmm: `"Hmmm." Check the router, check the cable, think about life.`,
      errrr: `"Errrr... can you hear me? Errr... hello?..."`,
      ahhhhhh: `"Ahhhhhh!!!" and you're ready to throw the router.`,
      harrrrr: `"Harrrrr? What? Sorry, you froze, say again?"`,
    },
  },
  t4: {
    prompt: `A friend explains a very complicated plan. You…`,
    options: {
      hmmm: `"Hmmm... interesting." You haven't understood, but you look wise.`,
      errrr: `"Errrr... so... we... go there... and...?" You keep trying to follow.`,
      ehhhhh: `"Ehhhhh? The plan has a hole! This part doesn't make sense!"`,
      harrrrr: `"Harrrrr? Start again from the beginning."`,
    },
  },
  t5: {
    prompt: `Your boss asks, "Can you finish this by tomorrow?" You…`,
    options: {
      hmmm: `"Hmmmmm." Calculate hours, coffee and sleep.`,
      errrr: `"Errrr... can... I think... let me check..."`,
      ehhhhh: `"Ehhhhh? Tomorrow? Just now you said next week!"`,
      ahhhhhh: `"Ahhhhhh." Inner scream, outer smile.`,
    },
  },
  t6: {
    prompt: `You're handed a menu with 200 items. You…`,
    options: {
      errrr: `"Errrr... I'll follow you lah."`,
      ehhhhh: `"Ehhhhh? This one so expensive meh?"`,
      ahhhhhh: `"Ahhhhhh! Why so many choices!" Hungry and annoyed.`,
      harrrrr: `"Harrrrr? What's the difference between number 17 and 18?"`,
    },
  },
  t7: {
    prompt: `Someone asks you, "Where's the nearest toilet?" You…`,
    options: {
      hmmm: `"Hmmm." You trace the route in your head before pointing.`,
      ehhhhh: `"Ehhhhh? Why ask me? I look like I live here meh?"`,
      ahhhhhh: `"Ahhhhhh!" It's the third time today someone has asked you.`,
      harrrrr: `"Harrrrr? Toilet? What toilet?"`,
    },
  },
  t8: {
    prompt: `A friend says, "Guess what happened to me yesterday." You…`,
    options: {
      hmmm: `"Hmmm..." You think of five possible answers and say none of them.`,
      errrr: `"Errrr... you got... promoted? ...no? ..."`,
      ahhhhhh: `"Ahhhhhh, just tell me lah!" You hate guessing games.`,
      harrrrr: `"Harrrrr? What happened? Say again?"`,
    },
  },

  // ---- I: Impossible Level ----
  i1: {
    prompt: `The deadline is tomorrow and you've done 10% of the work. You…`,
    options: {
      liao: `"Dah liao." It's too late and there's no way to fix it.`,
      siao: `Laugh like a madman, text the group "who needs sleep?!" and get started.`,
      biao: `"不要! Not doing it." Close the laptop.`,
      behhiao: `Accept that it's really out of your control. This report needs a miracle, not you.`,
    },
  },
  i2: {
    prompt: `Your friends dare you to talk to a famous celebrity at the mall. You…`,
    options: {
      hiao: `Know it's impossible, and walk up anyway with a pen and a dream.`,
      siao: `Run up screaming, sing their song and take a photo with the security guard.`,
      biao: `"Biao! No way!" and hide behind a pillar.`,
      behhiao: `"Can't help, I don't know them. Neither do you."`,
    },
  },
  i3: {
    prompt: `A company says "5 years of experience required" for a fresh graduate role. You…`,
    options: {
      hiao: `Apply anyway. Who knows?`,
      liao: `Close the tab. The job market is liao.`,
      biao: `"Biao." You won't even read the rest.`,
      behhiao: `Accept that you can't change the system. Beh hiao.`,
    },
  },
  i4: {
    prompt: `Your friend wants to open a durian stall in the Arctic. You…`,
    options: {
      hiao: `Impossible? Yes. Join? Also yes.`,
      liao: `"Liao lah, give up before you start. The durians will freeze."`,
      siao: `"You siao ah! Let's go!"`,
      behhiao: `Can't help with the idea. Can't help with the Arctic either.`,
    },
  },
  i5: {
    prompt: `Your flight leaves in 20 minutes and the airport is an hour away. You…`,
    options: {
      hiao: `Run through the airport anyway. Maybe the plane is delayed.`,
      liao: `"Liao." Time to rebook and cry.`,
      siao: `Laugh, call the airline, beg, and sprint through security like an action movie.`,
      biao: `"Biao. Not going." Turn the car around.`,
    },
  },
  i6: {
    prompt: `Someone says, "Let's fix this rusty old car right now with chewing gum!" You…`,
    options: {
      liao: `"Liao already." It's rusted beyond saving.`,
      siao: `"Yes! Pass me the gum!" and you even give the car a name.`,
      biao: `"不要." You're taking the bus.`,
      behhiao: `"I don't know mechanics. Can't help, sorry."`,
    },
  },
  i7: {
    prompt: `A shop says it's closed, but you really need something inside. You…`,
    options: {
      hiao: `Knock on the door anyway. Someone might still be in there.`,
      siao: `Wave at the staff through the glass and act out your emergency.`,
      biao: `"不要 bother. Biao." You walk away.`,
      behhiao: `Accept that it's not up to you. You can't force a closed shop open.`,
    },
  },
  i8: {
    prompt: `Your friend dares you to finish 10 plates of char kuey teow in 10 minutes. You…`,
    options: {
      hiao: `You know it's impossible. You pick up the fork anyway.`,
      liao: `"Liao lah." You'd be defeated by plate 3.`,
      biao: `"Biao!" You refuse before the dare is even finished.`,
      behhiao: `Your stomach says no. It's out of your power, so you can't help yourself.`,
    },
  },
};
