// questions.<id>.options.<personalityId> is the answer that points at that personality.
export default {
  // ---- K: Kacau Level ----
  k1: {
    prompt: `Your group project is due in one hour and the file has vanished. You…`,
    options: {
      hin: `Open the same folder again. And again. Why is there now a second folder with the same name?`,
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
      zenmeban: `Panic and call everyone: "怎么办?! They'll start the dinner without me!"`,
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
      gai: `Look at the wrong dish, the cold soup and your 1% battery. Today is gai.`,
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
      bird: `Tell everyone it's "a new design, called broken-but-aesthetic".`,
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
      nihenkeai: `Say sweetly: "你很可爱勒, you're so good at this."`,
    },
  },
  k6: {
    prompt: `You accidentally send your private rant to the work group chat. You…`,
    options: {
      hin: `Wonder: wait, was it the right group? Who was it meant for? You type a follow-up that makes it worse.`,
      zenmeban: `Unsend! Delete! 怎么办 怎么办 怎么办.`,
      gai: `See "read by 12". Your career is gai.`,
      bird: `Send another message to explain the first one. It explains nothing.`,
      nihenkeai: `Type "Wah, everyone is so cute today, 你很可爱勒" and let them guess who it's for.`,
    },
  },

  // ---- C: Cara Hidup ----
  c1: {
    prompt: `It's Friday night and you have no plans. You…`,
    options: {
      chill: `Lepak at the mamak until 2am. Nothing happens. Perfect.`,
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
      kiasu: `Arrive at 5.30, scout the whole table and grab a plate of everything first.`,
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
      paiseh: `Hope someone else says it first, because you feel paiseh to ask for money.`,
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
      syok: `Say yes, but do it your own way, because your way is the best way.`,
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
      steady: `Run errands, check the car and help the family. Every item on the list gets ticked.`,
    },
  },
  c6: {
    prompt: `A stranger compliments your outfit. You…`,
    options: {
      chill: `"Oh, thanks lah." Keep walking. No big deal.`,
      kiasu: `"Thanks! It was 50% off, I got the last piece!"`,
      paiseh: `"Ha?? No lah, just wear-wear only." Your face turns red.`,
      syok: `"I know, right?" and you do a little spin.`,
      steady: `"Thanks!" with a smile, then compliment theirs too.`,
    },
  },

  // ---- T: Tengah Loading ----
  t1: {
    prompt: `Someone asks you a question that needs a real answer. You…`,
    options: {
      hmmm: `"Hmmm..." and a long pause, so everyone believes you're thinking.`,
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
      errrr: `"Errr... should I say something? Maybe not."`,
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
      ehhhhh: `"Ehhhhh? Why did it freeze suddenly? It was working just now!"`,
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
      ahhhhhh: `"Ahhhhhh!" You're fed up because they changed the plan a third time.`,
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
      harrrrr: `"Harrrrr? Tomorrow? Which tomorrow?"`,
    },
  },
  t6: {
    prompt: `You're handed a menu with 200 items. You…`,
    options: {
      hmmm: `"Hmmm, let me look at each one." Ten minutes later you're still on page one.`,
      errrr: `"Errrr... I'll follow you lah."`,
      ehhhhh: `"Ehhhhh? This one so expensive meh?"`,
      ahhhhhh: `"Ahhhhhh! Why so many choices!" Hungry and annoyed.`,
      harrrrr: `"Harrrrr? What's the difference between number 17 and 18?"`,
    },
  },

  // ---- I: Impossible Level ----
  i1: {
    prompt: `The deadline is tomorrow and you've done 10% of the work. You…`,
    options: {
      hiao: `Hear everyone say it's impossible, say "watch me", and pull an all-nighter anyway.`,
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
      liao: `Find out the celebrity already left. Too late lah.`,
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
      siao: `Write "5 years of experience in being unstoppable" on your cover letter.`,
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
      biao: `"Biao! Go do it yourself."`,
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
      behhiao: `"Out of my hands." You can't push time.`,
    },
  },
  i6: {
    prompt: `Someone says, "Let's fix this rusty old car right now with chewing gum!" You…`,
    options: {
      hiao: `"Cannot? Let's try." Chewing gum, tape and hope.`,
      liao: `"Liao already." It's rusted beyond saving.`,
      siao: `"Yes! Pass me the gum!" and you even give the car a name.`,
      biao: `"不要." You're taking the bus.`,
      behhiao: `"I don't know mechanics. Can't help, sorry."`,
    },
  },
};
