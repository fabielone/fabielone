export interface ServiceCategory {
    id:string;
    label: string;
    href: string;
  }
  
  export interface CoreService {
    id:string;
    label: string;
    categories: ServiceCategory[];
  }
  
  export const servicesData: CoreService[] = [
    {
      id:"web-development",
      label: "Web Development",
      categories: [
        {
          id:"frontend",
          label: "Frontend Development",
          href: "/services/web-development/frontend",
        },
        {
          id:"backend",
          label: "Backend Development",
          href: "/services/web-development/backend",
        },
      ],
    },
    {
      id:"app-development",
      label: "App Development",
      categories: [
        {
          id:"android",
          label: "Android Development",
          href: "/services/app-development/android",
        },
        {
          id:"ios",
          label: "iOS Development",
          href: "/services/app-development/ios",
        },
      ],
    },
    {
      id:"online-marketing",
      label: "Online Marketing",
      categories: [
        {
          id:"seo",
          label: "SEO",
          href: "/services/online-marketing/seo",
        },
        {
          id:"social-media",
          label: "Social Media Marketing",
          href: "/services/online-marketing/social-media",
        },
      ],
    },
    {
      id:"content-creation",
      label: "Content Creation",
      categories: [
        {
          id:"copywriting",
          label: "Copywriting",
          href: "/services/content-creation/copywriting",
        },
        {
          id:"graphic-design",
          label: "Graphic Design",
          href: "/services/content-creation/graphic-design",
        },
      ],
    },
  ];