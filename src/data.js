export const site = {
    title: "COMPOSED: Scent Identity",
    tags: ["Interactive Installation", "Scent + Game", "Multi-screen Wall"],
    contact: "sayahpark1228@gmail.com",
    subtitle:
      "An interactive game-installation that builds a self like perfume: Top (impression) / Middle (personality) / Base (memory).",
  
    what: [
      "Composed is an interactive installation that explores identity through scent. Composed provides game interaction and personal scent-making interaction. The participants are encouraged to explore three different stages of perfume - Top, middle, and base.",
      "As players select between contrasting scent families, the character and environment evolve in real time. The final output is a “Scent Identity” profile that translates choices into a narrative of impression, personality, and afterimage."
    ],
  
    why: [
      "I’m interested in how identity forms through perception—especially senses that resist visualization, like smell. Scent shifts with time and context and powerfully evokes memory, making it a strong medium for exploring the self.",
      "At each stage, participants are required to choose between two scents based on their choice of each note category. At the end of the experience, the system generates a personalized scent composition and shares recommended perfume based on the game result."
    ],
  
    how: [
      "The game progresses through Top → Middle → Base stages. The prototype is designed for a multi-screen wall, with attention to resolution and layout constraints.",
      "The scent component will expand into a sampling system aligned with the final outcome so participants leave with a sensory afterimage matching the identity they assembled."
    ],
  
    mediaNote: "Midterm: in-progress screenshots / wall test photos / short demo clips",
  
    timeline: {
        winter: [
          { week: "Week 2", text: "Concept brainstorming, research references, and define production tasks" },
          { week: "Week 3", text: "Build and validate CSV datasets + finalize concept direction and system structure" },
          { week: "Week 4–5", text: "Visual production phase: design maps, scent stages, character, and UI assets" },
          { week: "Week 6", text: "Midterm presentation + begin core game coding" },
          { week: "Week 7–9", text: "Game development phase: implement gameplay logic and visual system" },
          { week: "Week 10", text: "Debugging and Testing the Game" },
        ],
        spring: [
          { week: "Week 1–3", text: "Migrate project system from Visramp to Vispi cluster, register Raspberry Pi MAC address, and revise/debug game code" },
          { week: "Week 4", text: "Brainstorm physical interaction desk structure and user interaction flow" },
          { week: "Week 5", text: "Purchase materials for interaction desk hardware setup" },
          { week: "Week 6", text: "Create project booklet: worldbuilding, characters, and combined scent narrative" },
          { week: "Week 7", text: "Build interaction board and develop Arduino code for physical input/output" },
          { week: "Week 8", text: "Revise overall game code and integrate interaction board with the full system" },
          { week: "Week 9", text: "Final 160B critique presentation" },
          { week: "Week 10", text: "Gallery installation and exhibition" },
        ]
      },
    }     
  
  export const mediaGroups = [
    {
        title: "Game Intro",
        items: [
            {type: "Introduction", title: "Scene 1", src: "/media/intro1.png"},
            {type: "Introduction", title: "Scene 2", src: "/media/intro2.png"},
            {type: "Introduction", title: "Scene 3", src: "/media/intro3.png"},
        ],
    },
    {
        title: "Game Screens",
        items: [
          { type: "Game Illustration", title: "Stage 1: Top Note", src: "/media/composeStage1.png", note: "First impression choice screen" },
          { type: "Game Illustration", title: "Stage 2: Middle Note", src: "/media/composeStage2.png", note: "Personality choice screen" },
          { type: "Game Illustration", title: "Stage 3: Base Note", src: "/media/composeStage3.png", note: "Memory choice screen" },
        ],
      },
    {
        title: "Sub-Stage Screens",
        items: [
          { type: "Game Illustration", title: "Stage 1-1: Fruity / Playful", src: "/media/composeStage1fruity.png", note: "First impression choice screen" },
          { type: "Game Illustration", title: "Stage 1-1: Clean / Airy", src: "/media/composeStage1clean.png", note: "Personality choice screen" },
          { type: "Game Illustration", title: "Stage 2-1: Soft / Intimate", src: "/media/composeStage2soft.png", note: "Memory choice screen" },
          { type: "Game Illustration", title: "Stage 2-1: floral / Expressive", src: "/media/composeStage2floral.png", note: "Memory choice screen" },

        ],
     },

     {
        title: "Final Outcome Screens",
        items: [
        { type: "crystal", title: "Scent Crystals", src: "/media/scentCrystal.png", note: "Scents"},
        { type: "Keywords", title: "Selected Keywords and Scents + Final Top 3 Perfume Recommendation", src: "/media/finalKey.png", note: "keywords" },
        ],
     }, 
    ,

    {
        title: "Characters",
        items: [
          { type: "Character", title: "AL0 — Left", src: "/media/character_left.png", note: "Walk/pose" },
          { type: "Character", title: "AL0 — Front", src: "/media/character_front.png", note: "Starter form" },
          { type: "Character", title: "AL0 — Right", src: "/media/character_right.png", note: "Walk/pose" },
          { type: "Character", title: "AL0 — Selected", src: "/media/character_selected.png", note: "Selection feedback (sparkle)" },
        ],
      },
  ];
  
  
  