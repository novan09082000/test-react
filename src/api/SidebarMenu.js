const SidebarMenu = [
    {
        id: "1",
        title: "Dashboard",
        name: "dashboard",
        parent: false,
        icon: "LayoutGrid",
        link: "/dashboard"
    },
    {
        id: "2",
        title: "Profile",
        name: "profile",
        parent: false,
        icon: "UserCircle",
        link: "/profile"
    },
    {
        id: "3",
        title: "API",
        name: "api",
        parent: true,
        icon: "Box",
        child: [
            {
              id: "1",
              title: "Create",
              name: "create",
              link: "/api/create",
              icon: "Dot"
            },
            {
              id: "2",
              title: "Route",
              name: "route",
              link: "/api/route",
              icon: "Dot"
            },
            {
              id: "3",
              title: "Upstream",
              name: "upstream",
              link: "/api/upstream",
              icon: "Dot"
            },
        ]
    },
]

export default SidebarMenu;