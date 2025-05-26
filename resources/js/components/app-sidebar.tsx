import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { BookOpen, Folder, LayoutGrid, ListTodo, ClipboardList } from 'lucide-react';
import AppLogo from './app-logo';

interface PageProps {
  auth: {
    user: {
      role: string;
      // add other user properties if you want
    } | null;
  };
  // other shared props here if needed
}

const footerNavItems: NavItem[] = [
  {
    title: 'Repository',
    href: 'https://github.com/laravel/react-starter-kit',
    icon: Folder,
  },
  {
    title: 'Documentation',
    href: 'https://laravel.com/docs/starter-kits',
    icon: BookOpen,
  },
];

export function AppSidebar() {
  const { auth } = usePage().props as any;
const role = auth?.user?.role;

  let mainNavItems: NavItem[] = [];

  if (role === 'admin') {
    mainNavItems = [
      { title: 'Admin Dashboard', href: '/admin/dashboard', icon: LayoutGrid },
      { title: 'Manage Users', href: '/admin/users', icon: ClipboardList },

      // add more admin links here
    ];
  } else if (role === 'teacher') {
    mainNavItems = [
      { title: 'Teacher Dashboard', href: '/teacher/dashboard', icon: LayoutGrid },
      { title: 'My Classes', href: '/teacher/classes', icon: ClipboardList },
      { title: 'Lists', href: '/teacher/lists', icon: ClipboardList },
      { title: 'Tasks', href: '/teacher/tasks', icon: ListTodo },
      // add more teacher links here
    ];
  } else if (role === 'student') {
    mainNavItems = [
      { title: 'Student Dashboard', href: '/student/dashboard', icon: LayoutGrid },
      { title: 'My Assignments', href: '/student/assignments', icon: ListTodo },
     
      // add more student links here
    ];
  } else {
    // fallback links for guests or unknown roles
    mainNavItems = [
      { title: 'Home', href: '/', icon: LayoutGrid },
    ];
  }

  return (
    <Sidebar collapsible="icon" variant="inset">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href={mainNavItems[0]?.href ?? '/'} prefetch>
                <AppLogo />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={mainNavItems} />
      </SidebarContent>

      <SidebarFooter>
        <NavFooter items={footerNavItems} className="mt-auto" />
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
