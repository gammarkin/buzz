import type { StaticImageData } from "next/image";

import alexMorgan from "@/assets/images/alex-morgan.jpg";
import avatar1 from "@/assets/images/avatar-1.jpg";
import avatar2 from "@/assets/images/avatar-2.jpg";
import avatar3 from "@/assets/images/avatar-3.jpg";
import avatar4 from "@/assets/images/avatar-4.jpg";
import featuredCourseImage from "@/assets/images/featured-course.jpg";
import heroLearner from "@/assets/images/hero-learner.jpg";
import people01 from "@/assets/images/people-01.jpg";
import people02 from "@/assets/images/people-02.jpg";
import people03 from "@/assets/images/people-03.jpg";
import people04 from "@/assets/images/people-04.jpg";
import people05 from "@/assets/images/people-05.jpg";
import people06 from "@/assets/images/people-06.jpg";
import people07 from "@/assets/images/people-07.jpg";
import people08 from "@/assets/images/people-08.jpg";
import people09 from "@/assets/images/people-09.jpg";
import people10 from "@/assets/images/people-10.jpg";

export type NavLink = { label: string; href: string };

export type Photo = { src: StaticImageData; alt: string };

export type Category = {
  number: string;
  title: string;
  description: string;
  href: string;
};

export type Course = {
  title: string;
  description: string;
  instructor: string;
  meta: string[];
  image: Photo;
  href: string;
};

export type StepIcon = "focus" | "experience" | "practice";

export type Step = {
  number: string;
  title: string;
  description: string;
  icon: StepIcon;
};

export type Stat = { value: string; label: string };

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: Photo;
};

/** Size of a collage photo in design pixels, for the mobile (362px) and desktop (530px) artboards. */
export type CollageSize = { w: number; h: number };

export type CollagePhoto = Photo & { mobile: CollageSize; desktop: CollageSize };

export type CollageColumn = {
  photos: CollagePhoto[];
  /** Top padding in design pixels (mobile / desktop). */
  offset?: { mobile: number; desktop: number };
  align?: "start" | "end";
};

export type ContactChannel = {
  icon: "email" | "clock";
  title: string;
  detail: string;
  href?: string;
};

export type FooterColumn = { title: string; links: NavLink[] };

export const sectionIds = {
  courses: "courses",
  featured: "featured-course",
  howItWorks: "how-it-works",
  community: "community",
  contact: "contact",
} as const;

export const mainNav: NavLink[] = [
  { label: "Courses", href: `#${sectionIds.courses}` },
  { label: "For Teams", href: `#${sectionIds.contact}` },
  { label: "Community", href: `#${sectionIds.community}` },
  { label: "About", href: `#${sectionIds.howItWorks}` },
];

export const learnerAvatars: Photo[] = [
  { src: avatar1, alt: "" },
  { src: avatar2, alt: "" },
  { src: avatar3, alt: "" },
  { src: avatar4, alt: "" },
];

export const hero = {
  eyebrow: "Learn at your own pace",
  title: "Build skills that actually move you forward.",
  description:
    "Practical courses taught by people who do the work every day. Learn design, technology, business and more — one focused lesson at a time.",
  image: {
    src: heroLearner,
    alt: "Smiling learner with glasses working on a laptop in front of a wall of sticky notes",
  } satisfies Photo,
  coursesCount: "120+",
  rating: "4.9",
  learners: "24,000+",
};

export const categories: Category[] = [
  {
    number: "01",
    title: "Product Design",
    description: "Turn complex problems into clear, useful experiences.",
    href: `#${sectionIds.featured}`,
  },
  {
    number: "02",
    title: "Technology",
    description: "Build a stronger understanding of the tools shaping digital products.",
    href: `#${sectionIds.contact}`,
  },
  {
    number: "03",
    title: "Business",
    description: "Develop practical skills for better decisions and stronger teams.",
    href: `#${sectionIds.contact}`,
  },
  {
    number: "04",
    title: "Creative",
    description: "Explore new ways to communicate, create and tell stories.",
    href: `#${sectionIds.contact}`,
  },
];

export const featuredCourse: Course = {
  title: "Designing products people understand.",
  description:
    "Learn how to turn complex workflows into simple, intentional product experiences through research, structure and thoughtful interaction design.",
  instructor: "with Maya Chen · Senior Product Designer",
  meta: ["8 lessons", "2h 40min", "Intermediate"],
  image: {
    src: featuredCourseImage,
    alt: "Designer arranging colour swatches and paper prototypes on a desk",
  },
  href: `#${sectionIds.contact}`,
};

export const steps: Step[] = [
  {
    number: "01",
    title: "Choose your focus",
    description: "Find courses based on the skill you want to build, not endless content categories.",
    icon: "focus",
  },
  {
    number: "02",
    title: "Learn from experience",
    description: "Follow concise lessons created by professionals who use these skills.",
    icon: "experience",
  },
  {
    number: "03",
    title: "Put it into practice",
    description: "Every course includes practical exercises designed to turn knowledge into action.",
    icon: "practice",
  },
];

export const testimonial: Testimonial = {
  quote:
    "The lessons are short enough to fit into my week, but detailed enough that I actually leave with something I can use.",
  name: "Alex Morgan",
  role: "Product Manager",
  avatar: { src: alexMorgan, alt: "" },
};

export const stats: Stat[] = [
  { value: "24K+", label: "active learners" },
  { value: "120+", label: "expert-led courses" },
  { value: "92%", label: "complete their first course" },
];

export const community = {
  eyebrow: "The people",
  title: "Meet international students & teachers",
  // The design uses lorem ipsum here; replaced with copy of a similar length.
  description:
    "Learn alongside curious people from all over the world. Our teachers are designers, engineers and founders who bring real projects into every lesson, and our community keeps you going between them.",
  cta: { label: "Explore teachers and students", href: `#${sectionIds.contact}` },
};

export const collage: CollageColumn[] = [
  {
    offset: { mobile: 48, desktop: 64 },
    align: "end",
    photos: [
      {
        src: people01,
        alt: "Girl waving at her laptop during an online class",
        mobile: { w: 72, h: 96 },
        desktop: { w: 103, h: 154 },
      },
      {
        src: people02,
        alt: "Group of colleagues laughing together around a laptop",
        mobile: { w: 94, h: 129 },
        desktop: { w: 138, h: 207 },
      },
    ],
  },
  {
    offset: { mobile: 0, desktop: 26 },
    photos: [
      {
        src: people03,
        alt: "Student in a hoodie reading a book at a desk",
        mobile: { w: 72, h: 106 },
        desktop: { w: 103, h: 170 },
      },
      {
        src: people04,
        alt: "Music teacher and student practising by a window",
        mobile: { w: 72, h: 108 },
        desktop: { w: 103, h: 173 },
      },
      {
        src: people05,
        alt: "Student reading notes next to a tablet and a cup of coffee",
        mobile: { w: 72, h: 80 },
        desktop: { w: 103, h: 128 },
      },
    ],
  },
  {
    photos: [
      {
        src: people06,
        alt: "Graduate in cap and gown holding a diploma",
        mobile: { w: 72, h: 86 },
        desktop: { w: 103, h: 137 },
      },
      {
        src: people07,
        alt: "Woman studying on a laptop in a bright room",
        mobile: { w: 72, h: 86 },
        desktop: { w: 103, h: 138 },
      },
      {
        src: people08,
        alt: "Child joining a video lesson on a desktop computer",
        mobile: { w: 72, h: 96 },
        desktop: { w: 103, h: 154 },
      },
    ],
  },
  {
    photos: [
      {
        src: people09,
        alt: "Student in a yellow shirt holding a notebook in the city",
        mobile: { w: 88, h: 128 },
        desktop: { w: 128, h: 205 },
      },
      {
        src: people10,
        alt: "Student in a hijab holding a coffee and a book outdoors",
        mobile: { w: 72, h: 83 },
        desktop: { w: 103, h: 132 },
      },
    ],
  },
];

export const contact = {
  eyebrow: "Contact",
  title: "Get in touch",
  description:
    "Have a question? We’re here to help. Whether you’re looking for the right course, learning with your team or interested in teaching with Luma, we’d love to hear from you.",
  channels: [
    { icon: "email", title: "Email", detail: "contact@luma.com", href: "mailto:contact@luma.com" },
    { icon: "clock", title: "Response Time", detail: "Up to 24 hours on business days" },
  ] satisfies ContactChannel[],
};

export const finalCta = {
  title: "What will you learn next?",
  description: "Start with one course. Build from there.",
  primary: { label: "Explore all courses", href: `#${sectionIds.courses}` },
  secondary: { label: "Join Luma", href: `#${sectionIds.contact}` },
};

export const footer = {
  tagline: "Practical learning for curious people.",
  columns: [
    {
      title: "Explore",
      links: [
        { label: "Courses", href: `#${sectionIds.courses}` },
        { label: "Categories", href: `#${sectionIds.courses}` },
        { label: "Instructors", href: `#${sectionIds.community}` },
        { label: "For Teams", href: `#${sectionIds.contact}` },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: `#${sectionIds.howItWorks}` },
        { label: "Careers", href: `#${sectionIds.contact}` },
        { label: "Journal", href: `#${sectionIds.community}` },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", href: `#${sectionIds.contact}` },
        { label: "Contact", href: `#${sectionIds.contact}` },
        { label: "Terms", href: "#" },
        { label: "Privacy", href: "#" },
      ],
    },
  ] satisfies FooterColumn[],
  copyright: "© 2026 Luma Learning",
};
