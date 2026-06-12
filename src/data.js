export const site = {
  title: "COMPOSED: Scent Identity",
  tags: ["Interactive Installation", "Scent + Game", "Multi-screen Wall"],
  contact: "sayahpark1228@gmail.com",
  subtitle:
    "An interactive game-installation that builds a self like perfume: Top (impression) / Middle (personality) / Base (memory).",

  what: [
    "Composed is an interactive installation that explores identity through scent. Composed provides game interaction and personal scent-making interaction. The participants are encouraged to explore three different stages of perfume - Top, middle, and base.",
    "As players select between contrasting scent families, the character and environment evolve in real time. The final output is a “Scent Identity” profile that translates choices into a narrative of impression, personality, and afterimage.",
  ],

  why: [
    "I’m interested in how identity forms through perception—especially senses that resist visualization, like smell. Scent shifts with time and context and powerfully evokes memory, making it a strong medium for exploring the self.",
    "At each stage, participants are required to choose between two scents based on their choice of each note category. At the end of the experience, the system generates a personalized scent composition and shares recommended perfume based on the game result.",
  ],

  how: [
    "The game progresses through Top → Middle → Base stages. The prototype is designed for a multi-screen wall, with attention to resolution and layout constraints.",
    "The scent component will expand into a sampling system aligned with the final outcome so participants leave with a sensory afterimage matching the identity they assembled.",
  ],

  mediaNote:
    "Midterm: in-progress screenshots / wall test photos / short demo clips",

  timeline: {
    winter: [
      {
        week: "Week 2",
        text: "Concept brainstorming, research references, and define production tasks",
      },
      {
        week: "Week 3",
        text: "Build and validate CSV datasets + finalize concept direction and system structure",
      },
      {
        week: "Week 4–5",
        text: "Visual production phase: design maps, scent stages, character, and UI assets",
      },
      {
        week: "Week 6",
        text: "Midterm presentation + begin core game coding",
      },
      {
        week: "Week 7–9",
        text: "Game development phase: implement gameplay logic and visual system",
      },
      {
        week: "Week 10",
        text: "Debugging and Testing the Game",
      },
    ],

    spring: [
      {
        week: "Week 1–3",
        text: "Migrate project system from Visramp to Vispi cluster, register Raspberry Pi MAC address, and revise/debug game code",
      },
      {
        week: "Week 4",
        text: "Brainstorm physical interaction desk structure and user interaction flow",
      },
      {
        week: "Week 5",
        text: "Purchase materials for interaction desk hardware setup",
      },
      {
        week: "Week 6",
        text: "Create project booklet: worldbuilding, characters, and combined scent narrative",
      },
      {
        week: "Week 7",
        text: "Build interaction board and develop Arduino code for physical input/output",
      },
      {
        week: "Week 8",
        text: "Revise overall game code and integrate interaction board with the full system",
      },
      {
        week: "Week 9",
        text: "Final 160B critique presentation",
      },
      {
        week: "Week 10",
        text: "Gallery installation and exhibition",
      },
    ],
  },
};

export const mediaGroups = [
  {
    title: "Game Intro",
    description:
      "The opening sequence introduces the world of COMPOSED and prepares the player to enter a scent-based identity system. These scenes establish the atmosphere, visual tone, and narrative invitation before the interaction begins.",

    items: [
      {
        type: "Introduction",
        title: "Scene 1",
        src: "/media/intro1.png",
        note: "Opening scene introducing the world and visual mood of the project.",
      },
      {
        type: "Introduction",
        title: "Scene 2",
        src: "/media/intro2.png",
        note: "A continuation of the introduction, guiding the player toward the scent identity experience.",
      },
      {
        type: "Introduction",
        title: "Scene 3",
        src: "/media/intro3.png",
        note: "Final intro scene before the player begins making choices.",
      },
    ],
  },

  {
    title: "Game Screens",
    description:
      "These screens show the three main stages of the game: Top Note, Middle Note, and Base Note. Each stage connects a perfume structure to a different layer of identity: first impression, personality, and memory.",

    items: [
      {
        type: "Game Illustration",
        title: "Stage 1: Top Note",
        src: "/media/composeStage1.png",
        note: "The first stage focuses on impression-based choices through the Top Note category.",
      },
      {
        type: "Game Illustration",
        title: "Stage 2: Middle Note",
        src: "/media/composeStage2.png",
        note: "The second stage explores personality through the Middle Note category.",
      },
      {
        type: "Game Illustration",
        title: "Stage 3: Base Note",
        src: "/media/composeStage3.png",
        note: "The third stage connects memory and afterimage through the Base Note category.",
      },
    ],
  },

  {
    title: "Sub-Stage Screens",
    description:
      "The sub-stage screens expand each scent category into more specific emotional and sensory directions. Players choose between contrasting scent families, and those choices gradually shape the final identity composition.",

    items: [
      {
        type: "Game Illustration",
        title: "Stage 1-1: Fruity / Playful",
        src: "/media/composeStage1fruity.png",
        note: "A Top Note sub-stage built around fruity, bright, and playful first impressions.",
      },
      {
        type: "Game Illustration",
        title: "Stage 1-1: Clean / Airy",
        src: "/media/composeStage1clean.png",
        note: "A Top Note sub-stage exploring clean, airy, and refreshing impressions.",
      },
      {
        type: "Game Illustration",
        title: "Stage 2-1: Soft / Intimate",
        src: "/media/composeStage2soft.png",
        note: "A Middle Note sub-stage focused on soft, intimate, and gentle personality traits.",
      },
      {
        type: "Game Illustration",
        title: "Stage 2-1: Floral / Expressive",
        src: "/media/composeStage2floral.png",
        note: "A Middle Note sub-stage expressing floral, vivid, and emotionally expressive qualities.",
      },
    ],
  },

  {
    title: "Final Outcome Screens",
    description:
      "The final result translates the player’s choices into a scent identity profile. The outcome includes selected keywords, scent crystals, and perfume recommendations based on the emotional structure built throughout the game.",

    items: [
      {
        type: "Crystal",
        title: "Scent Crystals",
        src: "/media/scentCrystal.png",
        note: "A visual representation of the scents collected through the player’s choices.",
      },
      {
        type: "Instruction Poster",
        title: "How to Play COMPOSED",
        src: "/media/composed_poster.jpg",
        note:
          "An introductory poster that explains the concept of COMPOSED, the structure of the experience, and how participants navigate the Top, Middle, and Base Note stages."
      },
      {
        type: "Summary Screen",
        title: "Scent Identity Summary",
        src: "/media/finalKey.png",
        note:
          "A summary screen visualizing the participant's choices throughout the experience. The selected scent traits and identity keywords are combined into a personalized profile before the final recommendation is revealed."
      },
      {
        type: "Final Experience",
        title: "Your Scent Identity Awaits",
        src: "/media/finaldirection.png",
        note:
          "The concluding screen guides participants to the physical installation. LEDs illuminate the scent boxes corresponding to their results, inviting them to collect a scent strip and experience the fragrance associated with their generated scent identity."
      },
    ],
  },

  {
    title: "Meet Olo",
    description:
      "Olo is a small scent spirit born from fragments of memory, emotion, and fragrance. Acting as both companion and guide, Olo accompanies participants throughout the COMPOSED experience and helps reveal the scent identity hidden within their choices.",
  
    items: [
      {
        type: "Olo",
        title: "Hello, I'm Olo!",
        src: "/media/character_front.png",
        note:
          "Hello! I'm Olo. I'll help you discover the scent that tells your story. Together we'll explore memories, emotions, and personality through fragrance.",
      },
      {
        type: "Olo",
        title: "Olo — Left",
        src: "/media/character_left.png",
        note:
          "Olo wanders through the world of COMPOSED, guiding participants as they explore different scent paths and identity choices.",
      },
      {
        type: "Olo",
        title: "Olo — Right",
        src: "/media/character_right.png",
        note:
          "Every choice creates a new path. Olo reacts to the participant's journey and accompanies them through each stage of the experience.",
      },
      {
        type: "Olo",
        title: "Olo — Selected",
        src: "/media/character_selected.png",
        note:
          "When an important choice is made, Olo responds with visual feedback, celebrating moments of discovery and helping guide participants toward their scent identity.",
      },
    ],
  }
]

export const installationImages = [
  // Overview
  {
    title: "Overview A",
    src: "/media/installation/installation_overviewA.png",
  },
  {
    title: "Overview 1",
    src: "/media/installation/installation_overview1.png",
  },

  // Intro
  {
    title: "Intro",
    src: "/media/installation/installation_intro.png",
  },
  {
    title: "Intro 2",
    src: "/media/installation/installation_intro2.png",
  },
  {
    title: "Intro 3",
    src: "/media/installation/installation_intro3.png",
  },

  // Top Note
  {
    title: "Top Note",
    src: "/media/installation/installation_top.png",
  },
  {
    title: "Top Clean",
    src: "/media/installation/installation_topClean.png",
  },
  {
    title: "Top Fruity",
    src: "/media/installation/installation_topfruity.png",
  },

  // Middle Note
  {
    title: "Middle Note",
    src: "/media/installation/installation_middle.png",
  },
  {
    title: "Middle Floral",
    src: "/media/installation/installation_middleFloral.png",
  },
  {
    title: "Middle Soft",
    src: "/media/installation/installation_middleSoft.png",
  },

  // Base Note
  {
    title: "Base Note",
    src: "/media/installation/installation_base.png",
  },

  // Results
  {
    title: "Result 1",
    src: "/media/installation/installation_result1.png",
  },
  {
    title: "Result 2",
    src: "/media/installation/installation_result2.png",
  },
  {
    title: "Result 3",
    src: "/media/installation/installation_result3.png",
  },

  // User Interaction
  {
    title: "User 1",
    src: "/media/installation/installation_user1.png",
  },
  {
    title: "User 2",
    src: "/media/installation/installation_user2.png",
  },
  {
    title: "User 3",
    src: "/media/installation/installation_user3.png",
  },

  // Details
  {
    title: "Installation Detail",
    src: "/media/installation/installation_detail.png",
  },

  {
    title: "Scent Detail 1",
    src: "/media/installation/installation_scent_detail.png",
  },
  {
    title: "Scent Detail 2",
    src: "/media/installation/installation_scent_detail2.png",
  },

  // Hardware
  {
    title: "Cherry Pi Setup",
    src: "/media/installation/installation_cherry.png",
  },
];