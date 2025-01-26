export interface AppOrGame {
  id: string
  name: string
  description: string
  icon: string
  category:
    | "Social"
    | "Productivity"
    | "Entertainment"
    | "Games"
    | "Education"
    | "Utility"
    | "Travel"
    | "Lifestyle"
    | "Finance"
  downloads: number
  downloadLink: string
  rating: number
}

export const appsAndGames: AppOrGame[] = [
  {
    id: "1",
    name: "WhatsApp Messenger",
    description: "Simple. Secure. Reliable messaging.",
    icon: "https://play-lh.googleusercontent.com/bYtqbOcTYOlgc6gqZ2rwb8lptHuwlNE75zYJu6Bn076-hTmvd96HH-6v7S0YUAAJXoJN=s180",
    category: "Social",
    downloads: 5000000000,
    downloadLink: "https://play.google.com/store/apps/details?id=com.whatsapp",
    rating: 4.5,
  },
  {
    id: "2",
    name: "Instagram",
    description: "Connect with friends, share what you're up to, or see what's new from others all over the world.",
    icon: "https://play-lh.googleusercontent.com/VRMWkE5p3CkWhJs6nv-9ZsLAs1QOg5ob1_3qg-rckwYW7yp1fMrYZqnEFpk0IoVP4LM=s180",
    category: "Social",
    downloads: 1000000000,
    downloadLink: "https://play.google.com/store/apps/details?id=com.instagram.android",
    rating: 4.3,
  },
  {
    id: "3",
    name: "Facebook",
    description: "Connect with friends, family and other people you know.",
    icon: "https://play-lh.googleusercontent.com/ccWDU4A7fX1R24v-vvT480ySh26AYp97g1VrIB_FIdjRcuQB2JP2WdY7h_wVVAeSpg=s180",
    category: "Social",
    downloads: 5000000000,
    downloadLink: "https://play.google.com/store/apps/details?id=com.facebook.katana",
    rating: 3.9,
  },
  {
    id: "4",
    name: "Subway Surfers",
    description: "Dash as fast as you can through the subway and dodge oncoming trains!",
    icon: "https://play-lh.googleusercontent.com/SxcXoZKoZemhsIx_FM_TGP6GjjBEjHYJjhRhiMxVqeiSXk0X_WS6qNLwBq2qzHtTmQ=s180",
    category: "Games",
    downloads: 1000000000,
    downloadLink: "https://play.google.com/store/apps/details?id=com.kiloo.subwaysurf",
    rating: 4.2,
  },
  {
    id: "5",
    name: "Candy Crush Saga",
    description: "Match candies in this tasty puzzle adventure!",
    icon: "https://play-lh.googleusercontent.com/TLUeelx8wcpEzf3hoqeLxPs3ai1tdGtAZTIFkNqy3gbDp1NPpNFTOzSFJDvZ9narFS0=s180",
    category: "Games",
    downloads: 1000000000,
    downloadLink: "https://play.google.com/store/apps/details?id=com.king.candycrushsaga",
    rating: 4.4,
  },
  {
    id: "6",
    name: "TikTok",
    description: "TikTok is THE destination for mobile videos.",
    icon: "https://play-lh.googleusercontent.com/iBYjvYuNq8BB6uQpAKtUkedDrAUHnFnqU_OgUJYUeIuLEFEgHg5OtVMk0f7HQi6KK-_m=s180",
    category: "Social",
    downloads: 1000000000,
    downloadLink: "https://play.google.com/store/apps/details?id=com.zhiliaoapp.musically",
    rating: 4.1,
  },
  {
    id: "7",
    name: "Spotify: Music and Podcasts",
    description: "Listen to songs, play podcasts, create playlists and discover music you'll love.",
    icon: "https://play-lh.googleusercontent.com/UrY7BAZ-XfXGpfkeWg0zCCeo-7ras4DCoRalC_WXXWTK9q5b0Iw7B0YQMsVxZaNB7DM=s180",
    category: "Entertainment",
    downloads: 1000000000,
    downloadLink: "https://play.google.com/store/apps/details?id=com.spotify.music",
    rating: 4.6,
  },
  {
    id: "8",
    name: "Clash of Clans",
    description: "Epic combat strategy game. Build your village, train your troops & go to battle!",
    icon: "https://play-lh.googleusercontent.com/LByrur1mTmPeNr0ljI-uAUcct1rzmTve5Esau1SwoAzjBXQUby6uHIfHbF9TAT51mgHm=s180",
    category: "Games",
    downloads: 500000000,
    downloadLink: "https://play.google.com/store/apps/details?id=com.supercell.clashofclans",
    rating: 4.3,
  },
  {
    id: "9",
    name: "Google Maps",
    description: "Navigate your world faster and easier with Google Maps.",
    icon: "https://play-lh.googleusercontent.com/Kf8WTct65hFJxBUDm5E-EpYsiDoLQiGGbnuyP6HBNax43YShXti9THPon1YKB6zPYpA=s180",
    category: "Travel",
    downloads: 5000000000,
    downloadLink: "https://play.google.com/store/apps/details?id=com.google.android.apps.maps",
    rating: 4.7,
  },
  {
    id: "10",
    name: "Netflix",
    description: "Looking for the most talked about TV shows and movies from around the world?",
    icon: "https://play-lh.googleusercontent.com/TBRwjS_qfJCSj1m7zZB93FnpJM5fSpMA_wUlFDLxWAb45T9RmwBvQd5cWR5viJJOhkI=s180",
    category: "Entertainment",
    downloads: 1000000000,
    downloadLink: "https://play.google.com/store/apps/details?id=com.netflix.mediaclient",
    rating: 4.4,
  },
  {
    id: "11",
    name: "PUBG MOBILE",
    description: "The official PLAYERUNKNOWN'S BATTLEGROUNDS designed exclusively for mobile.",
    icon: "https://play-lh.googleusercontent.com/JRd05pyBH41qjgsJuWduRJpDeZG0Hnb0yjf2nWqO7VaGKL10-G5UIygxED-WNOc3pg=s180",
    category: "Games",
    downloads: 500000000,
    downloadLink: "https://play.google.com/store/apps/details?id=com.tencent.ig",
    rating: 4.0,
  },
  {
    id: "12",
    name: "YouTube",
    description: "Get the official YouTube app on Android phones and tablets.",
    icon: "https://play-lh.googleusercontent.com/lMoItBgdPPVDJsNOVtP26EKHePkwBg-PkuY9NOrc-fumRtTFP4XhpUNk_22syN4Datc=s180",
    category: "Entertainment",
    downloads: 10000000000,
    downloadLink: "https://play.google.com/store/apps/details?id=com.google.android.youtube",
    rating: 4.5,
  },
  {
    id: "13",
    name: "Snapchat",
    description: "Snapchat is the most fun way to share the moment with friends and family.",
    icon: "https://play-lh.googleusercontent.com/KxeSAjPTKliCErbivNiXrd6cTwfbqUJcbSRPe_IBVK_YmwckfMRS1VIHz-5cgT09yMo=s180",
    category: "Social",
    downloads: 1000000000,
    downloadLink: "https://play.google.com/store/apps/details?id=com.snapchat.android",
    rating: 4.2,
  },
  {
    id: "14",
    name: "Minecraft",
    description: "Explore infinite worlds and build everything from the simplest of homes to the grandest of castles.",
    icon: "https://play-lh.googleusercontent.com/VSwHQjcAttxsLE47RuS4PqpC4LT7lCoSjE7Hx5AW_yCxtDvcnsHHvm5CTuL5BPN-uRTP=s180",
    category: "Games",
    downloads: 10000000,
    downloadLink: "https://play.google.com/store/apps/details?id=com.mojang.minecraftpe",
    rating: 4.6,
  },
  {
    id: "15",
    name: "Google Chrome",
    description: "Fast, simple, and secure. Google Chrome browser for Android phones and tablets.",
    icon: "https://play-lh.googleusercontent.com/KwUBNPbMTk9jDXYS2AeX3illtVRTkrKVh5xR1Mg4WHd0CG2tV4mrh1z3kXi5z_warlk=s180",
    category: "Utility",
    downloads: 5000000000,
    downloadLink: "https://play.google.com/store/apps/details?id=com.android.chrome",
    rating: 4.8,
  },
  {
    id: "16",
    name: "Pokémon GO",
    description: "Join Trainers across the globe who are discovering Pokémon as they explore the world around them.",
    icon: "https://play-lh.googleusercontent.com/wPfLmWBJwQZG3mOsJI8dZY0-awhXrIBzxIh2vUt7ZfOyVKRQs_Jc6JQmqXVDmGtj_5I=s180",
    category: "Games",
    downloads: 100000000,
    downloadLink: "https://play.google.com/store/apps/details?id=com.nianticlabs.pokemongo",
    rating: 4.1,
  },
  {
    id: "17",
    name: "Gmail",
    description: "The official Gmail app brings the best of Gmail to your Android phone or tablet.",
    icon: "https://play-lh.googleusercontent.com/KSuaRLiI_FlDP8cM4MzJ23ml3og5Hxb9AapaGTMZ2GgR103mvJ3AAnoOFz1yheeQBBI=s180",
    category: "Productivity",
    downloads: 5000000000,
    downloadLink: "https://play.google.com/store/apps/details?id=com.google.android.gm",
    rating: 4.6,
  },
  {
    id: "18",
    name: "Roblox",
    description: "Roblox is the ultimate virtual universe that lets you play, create, and be anything you can imagine.",
    icon: "https://play-lh.googleusercontent.com/WNWZaxi9RdJKe2GQM3vqXIAkk69mnIl4Cc8EyZcir2SKlVOxeUv9tZGfNTmNaLC717Ht=s180",
    category: "Games",
    downloads: 100000000,
    downloadLink: "https://play.google.com/store/apps/details?id=com.roblox.client",
    rating: 4.3,
  },
  {
    id: "19",
    name: "Zoom",
    description: "Zoom is a free HD meeting app with video and screen sharing for up to 100 people.",
    icon: "https://play-lh.googleusercontent.com/yZsmiNjmji3ZoOuLthoVvptLB9cZ0vCmitcky4OUXNcEFV3IEQkrBD2uu5kuWRF5_ERA=s180",
    category: "Productivity",
    downloads: 500000000,
    downloadLink: "https://play.google.com/store/apps/details?id=us.zoom.videomeetings",
    rating: 4.5,
  },
  {
    id: "20",
    name: "Garena Free Fire",
    description: "Free Fire is the ultimate survival shooter game available on mobile.",
    icon: "https://play-lh.googleusercontent.com/cw0x8EiZYDwL6x4XKKXDmfQsFDYKO4Q6xIfiyPOvgIjHCpe41QAM_rl4y0dLu0SJOdM=s180",
    category: "Games",
    downloads: 500000000,
    downloadLink: "https://play.google.com/store/apps/details?id=com.dts.freefireth",
    rating: 4.2,
  },
  {
    id: "21",
    name: "Duolingo",
    description: "Learn a new language for free.",
    icon: "https://play-lh.googleusercontent.com/hSyebBlYwtE2aMjzSIHDWNNOAYACxcEMQINvnXRl2LkWfTOik-XFsU6renVsJUwn9rs=s180",
    category: "Education",
    downloads: 100000000,
    downloadLink: "https://play.google.com/store/apps/details?id=com.duolingo",
    rating: 4.7,
  },
  {
    id: "22",
    name: "Telegram",
    description: "Pure instant messaging — simple, fast, secure, and synced across all your devices.",
    icon: "https://play-lh.googleusercontent.com/ZU9cSsyIJZo6Oy7HTHiEPwZg0m2Crep-d5ZrfajqtsH-qgUXSqKpNA2FpPDTn-7qA5Q=s180",
    category: "Social",
    downloads: 500000000,
    downloadLink: "https://play.google.com/store/apps/details?id=org.telegram.messenger",
    rating: 4.4,
  },
  {
    id: "23",
    name: "Pinterest",
    description: "Discover recipes, home ideas, style inspiration and other ideas to try.",
    icon: "https://play-lh.googleusercontent.com/dVsv8Hc4TOUeLFAahxR8KANg22W9dj2jBsTW1VHv3CV-5NCZjP9D9i2j5IpfVx2NTB8=s180",
    category: "Lifestyle",
    downloads: 500000000,
    downloadLink: "https://play.google.com/store/apps/details?id=com.pinterest",
    rating: 4.6,
  },
  {
    id: "24",
    name: "Genshin Impact",
    description: "Step into Teyvat, a vast world teeming with life and flowing with elemental energy.",
    icon: "https://play-lh.googleusercontent.com/So91qs_eRRralMxUzt_tkj4aBXvVSYqWiEJrzrk_LBd5071mSMv_gBKslyulIOrPEeY=s180",
    category: "Games",
    downloads: 50000000,
    downloadLink: "https://play.google.com/store/apps/details?id=com.miHoYo.GenshinImpact",
    rating: 4.5,
  },
  {
    id: "25",
    name: "Microsoft Office",
    description:
      "The Office app combines Word, Excel, and PowerPoint with exclusive features to make it your go-to productivity app.",
    icon: "https://play-lh.googleusercontent.com/D6XdVjo1kHWAQ2DqCVbYzOpR-Oe5bzZk0SLhVGf_sHVxDOlOoMrVnQVxM4E3TEsag_A=s180",
    category: "Productivity",
    downloads: 1000000000,
    downloadLink: "https://play.google.com/store/apps/details?id=com.microsoft.office.officehubrow",
    rating: 4.3,
  },
  {
    id: "26",
    name: "Uber",
    description: "Request a ride with the tap of a button and get picked up in minutes.",
    icon: "https://play-lh.googleusercontent.com/AQtSHZx-GflCCiPaimMQwW9qofx3X4zV1ozIFoOs3Xplg1Fx9hhsXTERi_EZuTuaFw=s180",
    category: "Travel",
    downloads: 500000000,
    downloadLink: "https://play.google.com/store/apps/details?id=com.ubercab",
    rating: 4.2,
  },
  {
    id: "27",
    name: "Airbnb",
    description: "Find vacation rentals, cabins, beach houses, unique homes and experiences around the world.",
    icon: "https://play-lh.googleusercontent.com/1zfN_BL13q20v0wvBzMWiZ_sL_t4KcCJBeAMRpOZeT3p34quM-4-pO-VcLj8PJNXPA0=s180",
    category: "Travel",
    downloads: 100000000,
    downloadLink: "https://play.google.com/store/apps/details?id=com.airbnb.android",
    rating: 4.5,
  },
  {
    id: "28",
    name: "Headspace: Meditation & Sleep",
    description: "Live a healthier, happier, more well-rested life with Headspace.",
    icon: "https://play-lh.googleusercontent.com/Pq-hUr6VG2dfxl9UZBk2qlzpRWjpNzGgk3KFIWJmJ2aNGDWKdUwSPTvRzHM_jPQVhWM=s180",
    category: "Lifestyle",
    downloads: 10000000,
    downloadLink: "https://play.google.com/store/apps/details?id=com.getsomeheadspace.android",
    rating: 4.7,
  },
  {
    id: "29",
    name: "Calm - Meditation and Sleep",
    description:
      "Join the millions experiencing lower stress, less anxiety, and more restful sleep with our guided meditations.",
    icon: "https://play-lh.googleusercontent.com/TIGjK1i8ZWjbTGjIZMZSHKGGZBhXYQpxfmjwPHPztywbZKAF5o1P7j1OKaLYQqA_Q4s=s180",
    category: "Lifestyle",
    downloads: 10000000,
    downloadLink: "https://play.google.com/store/apps/details?id=com.calm.android",
    rating: 4.6,
  },
  {
    id: "30",
    name: "Coursera: Online courses",
    description:
      "Learn online and earn valuable credentials from top universities like Yale, Michigan, Stanford, and leading companies like Google and IBM.",
    icon: "https://play-lh.googleusercontent.com/qq5__wITsoCx2kUK8TqVW2-8UDRuxET9kCzPzAPHad8umXiHRF2N0tZKuLezd0tiBQg=s180",
    category: "Education",
    downloads: 10000000,
    downloadLink: "https://play.google.com/store/apps/details?id=org.coursera.android",
    rating: 4.4,
  },
  {
    id: "31",
    name: "Evernote",
    description: "Organize your work and declutter your life. Collect, organize, and share notes from anywhere.",
    icon: "https://play-lh.googleusercontent.com/FFWZhkGl2K_53tJgzLzIoSiGvVjpmqjEqdQOYB5EgFGMOvKQu7OaCN_zqKzyjQvuEQ=s180",
    category: "Productivity",
    downloads: 100000000,
    downloadLink: "https://play.google.com/store/apps/details?id=com.evernote",
    rating: 4.3,
  },
  {
    id: "32",
    name: "Asana: Your work manager",
    description:
      "Asana is the work management platform teams use to stay focused on the goals, projects, and daily tasks that grow business.",
    icon: "https://play-lh.googleusercontent.com/nRc_34_DUoV5cZOSgOhPTkjjONdONMuoAJC_hGJGRjwf_K1vfUyJvyGU6-LXvxD9Gg=s180",
    category: "Productivity",
    downloads: 5000000,
    downloadLink: "https://play.google.com/store/apps/details?id=com.asana.app",
    rating: 4.5,
  },
  {
    id: "33",
    name: "Trello",
    description:
      "Trello's boards, lists, and cards enable you to organize and prioritize your projects in a fun, flexible, and rewarding way.",
    icon: "https://play-lh.googleusercontent.com/CiGs15N1e1tXrSnVLEY9jOnKi1oNGPsh7RgiK6BI7PF4X6s1UtYG3GVX7aaE9-kYRqg=s180",
    category: "Productivity",
    downloads: 10000000,
    downloadLink: "https://play.google.com/store/apps/details?id=com.trello",
    rating: 4.4,
  },
  {
    id: "34",
    name: "Slack",
    description:
      "Slack is where work flows. It's where the people you need, the information you share, and the tools you use come together to get things done.",
    icon: "https://play-lh.googleusercontent.com/mzJpTCsTW_FuR6YqOPaLHrSEVCSJuXzCljdxnCKhVZMcu6EESZBQTCHxMh8slVtnKqo=s180",
    category: "Productivity",
    downloads: 10000000,
    downloadLink: "https://play.google.com/store/apps/details?id=com.Slack",
    rating: 4.4,
  },
  {
    id: "35",
    name: "Notion - notes, docs, tasks",
    description: "The all-in-one workspace for your notes, tasks, wikis, and databases.",
    icon: "https://play-lh.googleusercontent.com/Ac9zapU8rN332WoJlkmiKz1-BFXXp9ZgkGfXN0F_-98Bf2oelLYyZBf7cJHXSSE7C_k=s180",
    category: "Productivity",
    downloads: 5000000,
    downloadLink: "https://play.google.com/store/apps/details?id=notion.id",
    rating: 4.6,
  },
]

