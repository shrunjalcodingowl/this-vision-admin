const Menuitems = [
  {
    title: "Dashboard",
    icon: "pie-chart",
    href: "/dashboards/dashboard2",
  },
  {
    title: "Users",
    icon: "users",
    href: "/users/list",
  },
  {
    title: "Equipments",
    icon: "settings",
    href: "/equipments/list",
  },
  {
    title: "Bookings",
    icon: "check-circle",
    href: "/bookings/list",
  },
  {
    title: "Credits",
    icon: "dollar-sign",
    href: "/",
    collapse: true,
    children: [
      {
        title: "Transactions",
        icon: "dollar-sign",
        href: "/credits/transactions",
      },
      {
        title: "Adjustments",
        icon: "edit",
        href: "/credits/adjustments",
      },
    ],
  },
  {
    title: "Notifications",
    icon: "bell",
    href: "/notifications/list",
  },
  {
    title: "Emails",
    icon: "mail",
    href: "/emails/list",
  },
];

export default Menuitems;
