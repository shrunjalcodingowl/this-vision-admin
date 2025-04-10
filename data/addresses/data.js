// import img1 from "../../assets/images/users/1.jpg";
// import img2 from "../../assets/images/users/2.jpg";
// import img3 from "../../assets/images/users/3.jpg";
// import img4 from "../../assets/images/users/4.jpg";
// import img5 from "../../assets/images/users/5.jpg";

const Bookings = [
  {
    imgsrc: '/images/users/4.jpg',
    name: "Nirav Joshi",
    email: "nirav@gmail.com",
    pname: "0405895778",
    order_id: "123 George Street, Sydney NSW 2000, Australia",
    addresses: "2",
    credits: "5",
    duration: "25 Feb 2025 - 26 Feb 2025",
    teams: [
      {
        color: (theme) => theme.palette.primary.main,
        text: "Y",
      },
      {
        color: (theme) => theme.palette.error.main,
        text: "X",
      },
    ],
    status: "Active",
    weeks: "40",
    budget: "2.4",
  },
  {
    imgsrc: '/images/users/1.jpg',
    name: "Sunil Joshi",
    email: "sunil@gmail.com",
    pname: "0405895723",
    order_id: "45 Queen Street, Brisbane QLD 4000, Australia",
    addresses: "2",
    credits: "4",
    duration: "23 Feb 2025 - 23 Feb 2025",
    teams: [
      {
        color: (theme) => theme.palette.secondary.main,
        text: "S",
      },
      {
        color: (theme) => theme.palette.error.main,
        text: "D",
      },
    ],
    status: "Active",
    weeks: "11",
    budget: "3.9",
  },
  {
    imgsrc: '/images/users/2.jpg',
    name: "Andrew McDown",
    email: "andrew@gmail.com",
    pname: "0405895780",
    order_id: "78 Collins Street, Melbourne VIC 3000, Australia",
    addresses: "3",
    credits: "15",
    duration: "22 Feb 2025 - 25 Feb 2025",
    teams: [
      {
        color: (theme) => theme.palette.primary.main,
        text: "A",
      },
      {
        color: (theme) => theme.palette.success.main,
        text: "X",
      },
      {
        color: (theme) => theme.palette.secondary.main,
        text: "N",
      },
    ],
    status: "Pending",
    weeks: "19",
    budget: "24.5",
  },
  {
    imgsrc: '/images/users/3.jpg',
    name: "Christo Jamil",
    email: "jamil@gmail.com",
    pname: "0405898597",
    order_id: "12 St Georges Terrace, Perth WA 6000, Australia",
    addresses: "2",
    credits: "5",
    duration: "25 Feb 2025 - 25 Feb 2025",
    teams: [
      {
        color: (theme) => theme.palette.error.main,
        text: "X",
      },
    ],
    status: "Completed",
    weeks: "30",
    budget: "12.8",
  },

  {
    imgsrc: '/images/users/5.jpg',
    name: "Micheal Doe",
    email: "micheal@gmail.com",
    pname: "0405897894",
    order_id: "9 North Terrace, Adelaide SA 5000, Australia",
    addresses: "1",
    credits: "4",
    duration: "25 Feb 2025 - 25 Feb 2025",
    teams: [
      {
        color: (theme) => theme.palette.secondary.main,
        text: "S",
      },
    ],
    status: "Cancel",
    weeks: "1",
    budget: "9.3",
  },
];

export default Bookings;
