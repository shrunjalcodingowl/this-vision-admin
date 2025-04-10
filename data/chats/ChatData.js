import mock from "../mock";
// import user1 from "../../assets/images/users/1.jpg";
// import user2 from "../../assets/images/users/2.jpg";
// import user3 from "../../assets/images/users/3.jpg";
// import user4 from "../../assets/images/users/4.jpg";
// import user5 from "../../assets/images/users/5.jpg";
// import user6 from "../../assets/images/users/6.jpg";
// import user7 from "../../assets/images/users/7.jpg";
// import user8 from "../../assets/images/users/8.jpg";

const ChatData = [
  {
    id: 1,
    name: "James Johnson",
    status: "online",
    thumb: '/images/users/1.jpg',
    recent: false,
    excerpt: "Theme Developer",
    chatHistory: [
      {
        0: {
          from: ["Tom got a small piece of pie."],
          to: [
            "I'd rather be a bird than a fish.",
            "They got there early, and they got really good seats.",
          ],
        },
        1: {
          from: [
            "If I don’t like something, I’ll stay away from it.",
            "I want more detailed information.",
          ],
          to: ["We need to rent a room for our party."],
        },
      },
    ],
  },
  {
    id: 2,
    name: "Maria Hernandez",
    status: "away",
    thumb: '/images/users/2.jpg',
    recent: true,
    excerpt: "Doctor",
    chatHistory: [
      {
        0: {
          from: ["The sky is clear", "How was the math test?"],
          to: ["She always speaks to him in a loud voice."],
        },
        1: {
          from: [
            "The memory we used to share is no longer coherent.",
            "The mysterious diary records the voice.",
            "The old apple revels in its authority.",
          ],
          to: ["Please wait outside of the house."],
        },
      },
    ],
  },
  {
    id: 3,
    name: "David Smith",
    status: "busy",
    thumb: '/images/users/3.jpg',
    recent: false,
    excerpt: "Hacker",
    chatHistory: [
      {
        0: {
          from: ["Tom got a small piece of pie."],
          to: [
            "I'd rather be a bird than a fish.",
            "They got there early, and they got really good seats.",
          ],
        },
        1: {
          from: [
            "If I don’t like something, I’ll stay away from it.",
            "I want more detailed information.",
          ],
          to: ["We need to rent a room for our party."],
        },
      },
    ],
  },
  {
    id: 4,
    name: "Maria Rodriguez",
    status: "offline",
    thumb: '/images/users/4.jpg',
    recent: true,
    excerpt: "Accountant",
    chatHistory: [
      {
        0: {
          from: ["The sky is clear", "How was the math test?"],
          to: ["She always speaks to him in a loud voice."],
        },
        1: {
          from: [
            "The memory we used to share is no longer coherent.",
            "The mysterious diary records the voice.",
            "The old apple revels in its authority.",
          ],
          to: ["Please wait outside of the house."],
        },
      },
    ],
  },
  {
    id: 5,
    name: "Robert Smith",
    status: "online",
    thumb: '/images/users/5.jpg',
    recent: true,
    excerpt: "Front End Developer",
    chatHistory: [
      {
        0: {
          from: ["Tom got a small piece of pie."],
          to: [
            "I'd rather be a bird than a fish.",
            "They got there early, and they got really good seats.",
          ],
        },
        1: {
          from: [
            "If I don’t like something, I’ll stay away from it.",
            "I want more detailed information.",
          ],
          to: ["We need to rent a room for our party."],
        },
      },
    ],
  },
  {
    id: 6,
    name: "Joseph Sarah",
    status: "busy",
    thumb: '/images/users/6.jpg',
    recent: false,
    excerpt: "Graphics Designer",
    chatHistory: [
      {
        0: {
          from: ["The sky is clear", "How was the math test?"],
          to: ["She always speaks to him in a loud voice."],
        },
        1: {
          from: [
            "The memory we used to share is no longer coherent.",
            "The mysterious diary records the voice.",
            "The old apple revels in its authority.",
          ],
          to: ["Please wait outside of the house."],
        },
      },
    ],
  },
  {
    id: 7,
    name: "Thomas Smith",
    status: "away",
    thumb: '/images/users/7.jpg',
    recent: true,
    excerpt: "Back End Developer",
    chatHistory: [
      {
        0: {
          from: ["Tom got a small piece of pie."],
          to: [
            "I'd rather be a bird than a fish.",
            "They got there early, and they got really good seats.",
          ],
        },
        1: {
          from: [
            "If I don’t like something, I’ll stay away from it.",
            "I want more detailed information.",
          ],
          to: ["We need to rent a room for our party."],
        },
      },
    ],
  },
  {
    id: 8,
    name: "David Elizabeth",
    status: "offline",
    thumb: '/images/users/8.jpg',
    recent: false,
    excerpt: "Theme Developer",
    chatHistory: [
      {
        0: {
          from: ["The sky is clear", "How was the math test?"],
          to: ["She always speaks to him in a loud voice."],
        },
        1: {
          from: [
            "The memory we used to share is no longer coherent.",
            "The mysterious diary records the voice.",
            "The old apple revels in its authority.",
          ],
          to: ["Please wait outside of the house."],
        },
      },
    ],
  },
  {
    id: 9,
    name: "Charles Martha",
    status: "online",
    thumb: '/images/users/1.jpg',
    recent: false,
    excerpt: "Administrator",
    chatHistory: [
      {
        0: {
          from: ["Tom got a small piece of pie."],
          to: [
            "I'd rather be a bird than a fish.",
            "They got there early, and they got really good seats.",
          ],
        },
        1: {
          from: [
            "If I don’t like something, I’ll stay away from it.",
            "I want more detailed information.",
          ],
          to: ["We need to rent a room for our party."],
        },
      },
    ],
  },
  {
    id: 10,
    name: "Samuel Eliza",
    status: "online",
    thumb: '/images/users/2.jpg',
    recent: false,
    excerpt: "Doctor",
    chatHistory: [
      {
        0: {
          from: ["The sky is clear", "How was the math test?"],
          to: ["She always speaks to him in a loud voice."],
        },
        1: {
          from: [
            "The memory we used to share is no longer coherent.",
            "The mysterious diary records the voice.",
            "The old apple revels in its authority.",
          ],
          to: ["Please wait outside of the house."],
        },
      },
    ],
  },
];

mock.onGet("/api/pages/data/chat/ChatData").reply(() => [200, ChatData]);
export default ChatData;
