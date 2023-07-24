import { NavLink } from "@/types/types";

export const navLinks: NavLink[] = [
    { title: 'Profile', link: '/dashboard/profile' },
    { title: 'Preferences', link: '/dashboard/preferences' },
    { title: 'Subscribe', link: '/dashboard/subscribe' },
    { title: 'Orders', link: '/dashboard/orders' },
    { title: 'Help', link: '/dashboard/help' },
    { title: 'Logout', link: '/dashboard/logout' },
];

export const planOffers: string[] = [
    "No Fees",
    "No Minimums",
    "No Tipping"
]