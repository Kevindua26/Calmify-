const reelsData = [
  {
    thumbnail:
      "https://i.pinimg.com/videos/thumbnails/originals/74/df/24/74df2476c72b3ac25441b60610bfa479.0000000.jpg",
    profileImage:
      "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg",
    // "https://scontent.fdel3-2.fna.fbcdn.net/v/t39.30808-1/295319685_360221382954934_4867433556313988669_n.jpg?stp=c0.0.200.200a_dst-jpg_p200x200&_nc_cat=107&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=3uEobPNXSKEQ7kNvgHOMriM&_nc_ht=scontent.fdel3-2.fna&oh=00_AYBnTFPFm3twWg43DCEQkDf2BhA2crYY3NRXu00I2_vOmA&oe=66A15285",

    profileName: "Alex",
    likes: 285,
    tags: ["#calm", "#peace", "#anime"],
    videoUrl:
      "https://v1.pinimg.com/videos/mc/720p/74/df/24/74df2476c72b3ac25441b60610bfa479.mp4",
  },
  {
    thumbnail: "https://i.ibb.co/4pM1MS6/2.png",
    profileImage:
      "https://scontent.fdel3-2.fna.fbcdn.net/v/t39.30808-1/295319685_360221382954934_4867433556313988669_n.jpg?stp=c0.0.200.200a_dst-jpg_p200x200&_nc_cat=107&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=3uEobPNXSKEQ7kNvgHOMriM&_nc_ht=scontent.fdel3-2.fna&oh=00_AYBnTFPFm3twWg43DCEQkDf2BhA2crYY3NRXu00I2_vOmA&oe=66A15285",
    profileName: "Lisha",
    likes: 4520,
    tags: ["#MentalHealth", "#Calm", "#Relaxation"],
    videoUrl:
      "https://v1.pinimg.com/videos/mc/720p/88/3a/10/883a10caed2cd9c86334ef164e87eaf8.mp4",
  },
  {
    thumbnail: "https://i.ibb.co/3rM03Cs/3.png",
    profileImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4DQ-tp12zlDGEUfulC2NNYwJ7vvskGXip6w&s",
    profileName: "Riley",
    likes: 9257,
    tags: ["#Mindfulness", "#SlefCare", "#StressRelief"],
    videoUrl:
      "https://v1.pinimg.com/videos/mc/720p/d8/cd/28/d8cd28a5aa32145ccea02dd7edb2ef2a.mp4",
  },
  {
    thumbnail: "https://i.ibb.co/nmXQtcW/4.png",
    profileImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjed6fqvW3kr0v-gtD6OLycMKFjaJ4A5aCWg&s",
    profileName: "Olivia",
    likes: 239085,
    tags: ["#SoothingSounds", "#CalmingVideos", "#MentalWellness"],
    videoUrl:
      "https://v1.pinimg.com/videos/mc/720p/c6/38/0b/c6380bed2ac36601f2ad118120f3fed9.mp4",
  },
  {
    thumbnail: "https://i.ibb.co/gMhMXVf/5.png",
    profileImage:
      "https://mrwallpaper.com/images/thumbnail/cool-smiley-profile-picture-6lqzc2aegkuxbini.jpg",
    profileName: "Ethan",
    likes: 6543987,
    tags: ["#InnerPeace", "#Meditation", "#Wellbeing"],
    videoUrl:
      "https://v1.pinimg.com/videos/mc/720p/ac/74/c0/ac74c07ff90e3be3bf3b54ecb6d6571a.mp4",
  },
  {
    thumbnail: "https://i.ibb.co/8rtr6MP/6.png",
    profileImage:
      "https://i.pinimg.com/736x/51/ec/d0/51ecd0532e8d08227b15fa65a55cf522.jpg",
    profileName: "Mia",
    likes: 87345,
    tags: ["#MentalHealthMatters", "#PeacefullMoments", "#RelaxAndUnwind"],
    videoUrl:
      "https://v1.pinimg.com/videos/mc/720p/ac/74/c0/ac74c07ff90e3be3bf3b54ecb6d6571a.mp4", //6
  },
  {
    thumbnail: "https://i.ibb.co/6RsvYnp/7.png",
    profileImage:
      "https://i.pinimg.com/236x/db/1f/9a/db1f9a3eaca4758faae5f83947fa807c.jpg",
    profileName: "Noah",
    likes: 13874,
    tags: ["#MentalClarity", "#EmotionalHealth", "#FindYourCalm"],
    videoUrl:
      "https://v1.pinimg.com/videos/mc/720p/e4/3e/45/e43e45439affa6af1ca02a4f3e4abbea.mp4", //7
  },
  {
    thumbnail: "https://i.ibb.co/6ymQtyW/8.png",
    profileImage:
      "https://wallpapers.com/images/featured/aesthetic-profile-picture-52t290ggbex44jma.jpg",
    profileName: "Sophia",
    likes: 2389764,
    tags: ["#Serenity", "#MindfulLiving", "#Healing"],
    videoUrl:
      "https://v1.pinimg.com/videos/iht/720p/fa/e8/4f/fae84f07b425b5ad7067981ff8cf1862.mp4", //8
  },
  {
    thumbnail: "https://i.ibb.co/QJ1s92r/9.png",
    profileImage: "https://wallpapercave.com/wp/wp7992199.jpg",
    profileName: "Jacob",
    likes: 1289,
    tags: ["#PeacefulVibes", "#Tranquility", "#WellnessJourney"],
    videoUrl:
      "https://v1.pinimg.com/videos/iht/720p/ef/99/a2/ef99a29ff8138f95ba6e6afbdaecdee7.mp4", //9
  },
  {
    thumbnail: "https://i.ibb.co/QdxGnJF/10.png",
    profileImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO5-_BieFD-yoQZu4bwI7DLnUZB8Lt6_fU6A&s",
    profileName: "Emma",
    likes: 1023,
    tags: ["#BreatheEasy", "#Zen", "#CalmMind"],
    videoUrl:
      "https://v1.pinimg.com/videos/iht/720p/82/4b/ff/824bffac9ede37fec030e3cccfba3e33.mp4", //10
  },
  {
    thumbnail: "https://i.ibb.co/JRn47qW/11.png",
    profileImage:
      "https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-man-wearing-glasses-is-wearing-colorful-background-image_2905240.jpg",
    profileName: "Willam",
    likes: 182,
    tags: ["#EmotionalWellness", "#StressManagement", "#MindBodySoul"],
    videoUrl:
      "https://v1.pinimg.com/videos/iht/720p/0d/b4/b3/0db4b334a768e5c1f193e70f6fe50dd7.mp4", //11
  },
  {
    thumbnail: "https://i.ibb.co/CJt6zmW/12.png",
    profileImage:
      "https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/e76d4296-43f3-493b-9d50-f8e5c142d06c/2117667014/boys-profile-picture-screenshot.png",
    profileName: "Ava",
    likes: 123,
    tags: ["#QuitMind", "#MentalResilience", "#WellbeingFirst"],
    videoUrl:
      "https://v1.pinimg.com/videos/iht/720p/0e/91/4d/0e914dff4ba92f6d59d55983aa9111e1.mp4", //12
  },
  {
    thumbnail: "https://i.ibb.co/rpKqZyq/13.png",
    profileImage:
      "https://play-lh.googleusercontent.com/jInS55DYPnTZq8GpylyLmK2L2cDmUoahVacfN_Js_TsOkBEoizKmAl5-p8iFeLiNjtE=w526-h296-rw",
    profileName: "Benjamin",
    likes: 523,
    tags: ["#GentleHealing", "#InnerCalm", "#MentalBalance"],
    videoUrl:
      "https://v1.pinimg.com/videos/iht/720p/74/56/b2/7456b243abe0a43c4311506ea2060c6b.mp4", //13
  },
  {
    thumbnail: "https://i.ibb.co/n3x3H3K/14.png",
    profileImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy-hgkMsQh4UtF4_-WRdZ97_y9Tjo2vCdcdA&s",
    profileName: "Charlotte",
    likes: 5243,
    tags: ["#MentalHealthSupport", "#Harmony", "#Calmness"],
    videoUrl:
      "https://v1.pinimg.com/videos/mc/720p/b8/4f/d4/b84fd4f90bc9f4a9bf5ad0ed95329d81.mp4", //14
  },
  {
    thumbnail: "https://i.ibb.co/gMhWfC1/15.png",
    profileImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrcpCajD43R9loyvMBf-NMNmO8iEsRiVyEjEmfe3q_V_iK5JLny3gz-VHWiXC3TM7Khq8&usqp=CAU",
    profileName: "Elijah",
    likes: 1342,
    tags: ["#SereneSpace", "#PeacefulMind", "#RestoreBalance"],
    videoUrl:
      "https://v1.pinimg.com/videos/mc/720p/b8/4f/d4/b84fd4f90bc9f4a9bf5ad0ed95329d81.mp4", //15
  },
  {
    thumbnail: "https://i.ibb.co/XywvMCD/16.png",
    profileImage:
      "https://i.pinimg.com/236x/85/59/09/855909df65727e5c7ba5e11a8c45849a.jpg",
    profileName: "Amelia",
    likes: 765745,
    tags: ["#EmotionalWellness", "#StressManagement", "#MindBodySoul"],
    videoUrl:
      "https://v1.pinimg.com/videos/mc/720p/6f/20/b9/6f20b944e982123bf52f54e450c7ab53.mp4", //16
  },
  {
    thumbnail: "https://i.ibb.co/tzmbghj/17.png",
    profileImage:
      "https://wallpapers.com/images/hd/instagram-profile-pictures-87zu6awgibysq1ub.jpg",
    profileName: "Daniel",
    likes: 3454532,
    tags: ["#MentalHealthSupport", "#Harmony", "#Calmness"],
    videoUrl:
      "https://v1.pinimg.com/videos/mc/720p/38/e7/93/38e7933cdf7cd359ea415ad9cfb19abd.mp4", //17
  },
  {
    thumbnail: "https://i.ibb.co/jwf1vkg/18.png",
    profileImage:
      "https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-man-is-wearing-glasses-in-silhouette-on-a-dark-background-image_2886069.jpg",
    profileName: "Isabella",
    likes: 34245,
    tags: ["#Cute", "#Funny", "#Bakchodi"],
    videoUrl:
      "https://v1.pinimg.com/videos/iht/720p/84/ca/4c/84ca4cc054f6c132ae6363e59c614384.mp4", //18
  },
  {
    thumbnail: "https://i.ibb.co/TgzGWNC/19.png",
    profileImage:
      "https://cdn.openart.ai/uploads/image_6Ehe7BE__1690816311739_raw.jpg",
    profileName: "Liam",
    likes: 21345123,
    tags: ["#SereneSpace", "#PeacefulMind", "#RestoreBalance"],
    videoUrl:
      "https://v1.pinimg.com/videos/iht/720p/cf/9f/0f/cf9f0fe9cef8f426f6a67e9430c6dcc5.mp4", //19
  },
  {
    thumbnail: "https://i.ibb.co/JsQ1r64/20.png",
    profileImage:
      "https://avatarfiles.alphacoders.com/375/thumb-350-375186.webp",
    profileName: "Emily",
    likes: 3216879,
    tags: ["#EmotionalWellness", "#StressManagement", "#MindBodySoul"],
    videoUrl:
      "https://v1.pinimg.com/videos/iht/720p/52/6d/f5/526df5b2da9da49b0e236afe1d9c6a4e.mp4", //20
  },
  {
    thumbnail: "https://i.ibb.co/4gVczFN/21.png",
    profileImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNAcflG4VJJkzo0xcxpmhXBvEBP_4Ld0lvgA&s",
    profileName: "Mason",
    likes: 3456452,
    tags: ["#PeacefulVibes", "#Tranquility", "#WellnessJourney"],
    videoUrl:
      "https://v1.pinimg.com/videos/mc/720p/a0/b3/6a/a0b36a7f8590dc98a972f0e7796acbd1.mp4", //21
  },
  {
    thumbnail:
      "https://i.pinimg.com/videos/thumbnails/originals/0a/e4/63/0ae463c2ed121f1060f04d57808699e7.0000000.jpg",
    profileImage:
      "https://mrwallpaper.com/images/thumbnail/aesthetic-profile-pictures-girl-in-black-4ev1bzoxrlk3vk3h.jpg",
    profileName: "Madison",
    likes: 3792139,
    tags: ["#MentalHealthMatters", "#PeacefullMoments", "#RelaxAndUnwind"],
    videoUrl:
      "https://v1.pinimg.com/videos/mc/720p/0a/e4/63/0ae463c2ed121f1060f04d57808699e7.mp4", //22
  },
  {
    thumbnail: "https://i.ibb.co/ZXTsnkg/23.png",
    profileImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHG0LMNUlHCIR7J4c6HkkGM4QluYVQ2yNNtA&s",
    profileName: "Logan",
    likes: 34569712,
    tags: ["#EmotionalWellness", "#StressManagement", "#MindBodySoul"],
    videoUrl:
      "https://v1.pinimg.com/videos/mc/720p/75/ac/56/75ac56007f3f3dd182843b0581ed2d17.mp4", //23
  },
  {
    thumbnail: "https://i.ibb.co/84Zv73W/24.png",
    profileImage:
      "https://i.pinimg.com/originals/46/46/48/464648c7fa1c042e22284c6f596ac9ad.jpg",
    profileName: "Deadpool",
    likes: 54337,
    tags: ["#SereneSpace", "#PeacefulMind", "#RestoreBalance"],
    videoUrl:
      "https://v1.pinimg.com/videos/mc/720p/66/5c/17/665c173d50603a0133a93c7cd7172bab.mp4", //24
  },
  {
    thumbnail: "https://i.ibb.co/YhDL7Wf/25.png",
    profileImage:
      "https://i.pinimg.com/736x/b3/04/40/b304408f6711cd1fa4fa119eacde9a6b.jpg",
    profileName: "Tom",
    likes: 1238741,
    tags: [
      "#MentalHealthMatters",
      "#PeacefullMoments",
      "#RelaxAndUnwind#SereneSpace",
      "#PeacefulMind",
      "#RestoreBalance",
    ],
    videoUrl:
      "https://v1.pinimg.com/videos/mc/720p/4b/c2/4d/4bc24d36a361b7bb6f7e5f822a02d9cb.mp4", //25
  },
  {
    thumbnail:
      "https://i.pinimg.com/videos/thumbnails/originals/0a/32/e8/0a32e817e7dda3fbae515d6ea66a5e04.0000000.jpg",
    profileImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMKWM6GDcSVc8WoQ737IGR0ZZ-2kz-GNFpZHsnZqKEpTvMNRQayqlHNsqQ-xcNR2KC6FU&usqp=CAU",
    profileName: "Chris",
    likes: 45712,
    tags: ["#EmotionalWellness", "#StressManagement", "#MindBodySoul"],
    videoUrl:
      "https://v1.pinimg.com/videos/mc/720p/0a/32/e8/0a32e817e7dda3fbae515d6ea66a5e04.mp4", //26
  },
  {
    thumbnail: "https://i.ibb.co/bWfzKKV/27.png",
    profileImage:
      "https://images.unsplash.com/photo-1526116977494-90748acc0cad?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFlc3RoZXRpY3xlbnwwfHwwfHx8MA%3D%3D",
    profileName: "Eren",
    likes: 2463423,
    tags: ["#Challenge", "#Self", "#Motivation"],
    videoUrl:
      "https://v1.pinimg.com/videos/iht/720p/bd/3c/d3/bd3cd3e7e5326caee24da2be76bc0c7c.mp4", //27
  },
  {
    thumbnail:
      "https://i.pinimg.com/videos/thumbnails/originals/ea/14/7a/ea147a3447e35fc48893c6836ba3e29f.0000000.jpg",
    profileImage:
      "https://pics.craiyon.com/2023-07-22/557a8a45723a447daef06451931edc11.webp",
    profileName: "Takimichi",
    likes: 34576856,
    tags: ["#MentalHealthMatters", "#PeacefullMoments", "#RelaxAndUnwind"],
    videoUrl:
      "https://v1.pinimg.com/videos/mc/720p/ea/14/7a/ea147a3447e35fc48893c6836ba3e29f.mp4", //28
  },
  {
    thumbnail:
      "https://i.pinimg.com/videos/thumbnails/originals/08/73/db/0873db0377ef8e3fb0f6135e988fb0af.0000000.jpg",
    profileImage:
      "https://png.pngtree.com/thumb_back/fh260/background/20230609/pngtree-in-the-style-of-dark-gray-and-light-amber-image_2935050.jpg",
    profileName: "Charlie",
    likes: 25765,
    tags: ["#PeacefulVibes", "#Tranquility", "#WellnessJourney"],
    videoUrl:
      "https://v1.pinimg.com/videos/mc/720p/08/73/db/0873db0377ef8e3fb0f6135e988fb0af.mp4", //29
  },
  {
    thumbnail: "https://i.ibb.co/kSVCSF9/30.png",
    profileImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW_HNWnhhQsroSlxc4LcoBLLVaLGOF7qvWRg&s",
    profileName: "Imosuke",
    likes: 54622245,
    tags: ["#EmotionalWellness", "#StressManagement", "#MindBodySoul"],
    videoUrl:
      "https://v1.pinimg.com/videos/iht/720p/ea/fb/b5/eafbb584464177acaf73846adc522ac9.mp4", //30
  },
];

export default reelsData;
