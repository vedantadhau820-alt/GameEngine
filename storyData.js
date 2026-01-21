const storyData = {

start: {
    image: "opening.jpg",
    dialogue: [
        { name: "Narrator", text: "Raat ke andhere mein… Aarav apne chhote homemade lab mein ek dangerous experiment kar raha hota hai." },
        { name: "Narrator", text: "Clumsy, par hyper-intelligent Aarav ek unstable mixture se ek violent blue energy burst create kar deta hai." },
        { name: "Narrator", text: "Energy blast uske body ko hit karti hai… aur uski poori zindagi ek pal mein badal jaati hai." }
    ],
    effects: () => { player.flags.origin = true; },
    choices: [
        { text: "Powers test karo", next: "testPowers" },
        { text: "Pretend karo ki kuch nahi hua", next: "collegeStart" }
    ]
},

testPowers: {
    image: "lightburst.jpg",
    dialogue: [
        { name: "Aarav", text: "Y-yeh kya… mere haath se electricity!? Yeh kaise!?" },
        { name: "Narrator", text: "Uski speed insan ke limit se bahar ho jaati hai… senses superhuman ban jaate hain… aur dimaag pehle se bhi sharp." },
        { name: "Narrator", text: "Par clumsiness? Haan… woh aaj bhi chipki rehti hai." }
    ],
    effects: () => { player.xp += 20; player.flags.powersAwakened = true; },
    choices: [
        { text: "Shahar ki madad karo", next: "firstHeroAct" },
        { text: "Ghar bhaag jao, dar gaye ho", next: "collegeStart" }
    ]
},

collegeStart: {
    image: "college.jpg",
    dialogue: [
        { name: "Narrator", text: "Agli subah Aarav college jaata hai. Clumsy walk, zameen par girti books… sab waise hi jaise hamesha." },
        { name: "Riya", text: "Careful! Tum dobara gir gaye… tum theek ho na?" },
        { name: "Narrator", text: "Riya — calm, intelligent, sweet — Aarav ko dekh kar softly smile karti hai." }
    ],
    effects: () => { player.flags.metRiya = true; },
    choices: [
        { text: "Riya se baat karo", next: "riyaBond" },
        { text: "Ignore karke class jao", next: "firstHeroAct" }
    ]
},

riyaBond: {
    image: "riya.jpg",
    dialogue: [
        { name: "Aarav", text: "Nahi nahi, main theek ho… bas thoda clumsy hoon." },
        { name: "Riya", text: "Haan, clumsy ho… par cute bhi ho." },
        { name: "Narrator", text: "Aarav ke gaal ekdum laal ho jaate hain. Pehli baar koi usse cute bol raha tha." }
    ],
    effects: () => { player.flags.riyaBond = true; player.xp += 10; },
    choices: [
        { text: "Sharma kar halki si smile do", next: "firstHeroAct" }
    ]
},

firstHeroAct: {
    image: "bridge_accident.jpg",
    dialogue: [
        { name: "Narrator", text: "Sham ko city mein ek huge accident hota hai. Ek bus bridge se latak rahi hoti hai!" },
        { name: "Aarav", text: "Nahi… main yeh hone nahi dunga!" }
    ],
    effects: () => { player.xp += 30; player.flags.firstSave = true; },
    choices: [
        { text: "Bus ko bachao", next: "saveBus" }
    ]
},

saveBus: {
    image: "newspaper.jpg",
    dialogue: [
        { name: "Narrator", text: "Aarav blue lightning ki blur ban kar bridge tak pahuchta hai… aur poori bus ko ek haath se rok deta hai!" },
        { name: "Crowd", text: "Kaun tha yeh blue electricity wala hero!? Kis speed se aaya tha!" },
        { name: "Narrator", text: "Par Aarav… apni old habit ke saath… clumsy tarah se ek pipe par takkar kha kar disappear ho jaata hai." }
    ],
    effects: () => { player.items.push("Heroic Reputation"); },
    choices: [
        { text: "Chup chap gayab ho jao", next: "kabirIntro" }
    ]
},

kabirIntro: {
    image: "lab_dark.jpg",
    dialogue: [
        { name: "Narrator", text: "Aarav ka best friend — Kabir — hamesha se Aarav ki intelligence se overshadow feel karta tha." },
        { name: "Kabir", text: "Aarav se kam nahi hoon main… main bhi kuch ban ke dikhaunga." },
        { name: "Narrator", text: "Jealousy se bhar kar, Kabir wohi dangerous experiment secretly dobara karne lagta hai…" }
    ],
    effects: () => { player.flags.kabirShown = true; },
    choices: [
        { text: "Experiment bigadta hai", next: "kabirMonster" }
    ]
},

kabirMonster: {
    image: "dark_mutation.jpg",
    dialogue: [
        { name: "Narrator", text: "Experiment fail hota hai. Energy Kabir ke body ko tod-madod kar ek dark-energy monster mein badal deti hai." },
        { name: "Kabir", text: "Aarav… yeh sab teri wajah se hua! Tu ne meri life, mera destiny chheen li!" }
    ],
    effects: () => { player.flags.kabirTransformed = true; player.xp += 40; },
    choices: [
        { text: "Kabir ko shaant karo", next: "talkKabir" },
        { text: "Fight ke liye ready ho jao", next: "kabirFight" }
    ]
},

talkKabir: {
    image: "kabirtalk.jpg",
    dialogue: [
        { name: "Aarav", text: "Kabir, please… ruk ja! Main hoon yaha. Hum dost hain!" },
        { name: "Kabir", text: "DOST!? Tu ne mera future, meri genius, MERE sapne barbaad kiye!" }
    ],
    effects: () => { player.flags.triedPeace = true; },
    choices: [
        { text: "Fight unavoidable hai", next: "kabirFight" }
    ]
},

kabirFight: {
    image: "city_fight.jpg",
    dialogue: [
        { name: "Narrator", text: "Kabir ab ‘Ravager’ ban chuka hai. Uske dark blasts se buildings hilti hain… roads crack ho jaate hain." },
        { name: "Narrator", text: "Aarav, clumsy landings ke saath bhi, full power se Kabir ko rokne ki koshish karta hai." }
    ],
    effects: () => { player.xp += 50; player.flags.fightingKabir = true; },
    choices: [
        { text: "Final blow do", next: "kabirEnd" }
    ]
},

kabirEnd: {
    image: "kabirend.jpg",
    dialogue: [
        { name: "Kabir", text: "Aarav… mujhe… maaf kar bhai…" },
        { name: "Narrator", text: "Ravager ki dark energy dissolve ho jaati hai… aur Kabir Aarav ki baahon mein human form mein gir jaata hai." },
        { name: "Narrator", text: "Aarav toot chuka hota hai. Usne apne sabse kareebi dost ko kho diya." }
    ],
    effects: () => { player.flags.kabirDead = true; player.xp += 100; },
    choices: [
        { text: "Aakhri chapter", next: "heroRise" }
    ]
},

heroRise: {
    image: "awakening.jpg",
    dialogue: [
        { name: "Narrator", text: "City safe hai… par Aarav ka dil ab bhi Kabir ke loss se bojhil hai." },
        { name: "Riya", text: "Aarav… heroes ko kabhi-kabhi sabse painful choices karni padti hain." },
        { name: "Narrator", text: "Aarav apne dil mein vow leta hai… ki ab koi aur Kabir ki tarah girne nahi dega." }
    ],
    effects: () => { player.flags.completed = true; },
    choices: []
}

};