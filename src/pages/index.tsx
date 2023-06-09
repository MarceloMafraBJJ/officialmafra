import { GetStaticProps } from "next";
import Head from "next/head";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Books from "@/components/Books";

import {
  Book,
  Experience,
  PageInfo,
  Project,
  Skill,
  Social,
} from "../../typings";

import { fetchPageInfo } from "@/utils/fetchPageInfo";
import { fetchExperiences } from "@/utils/fetchExperiences";
import { fetchSkills } from "@/utils/fetchSkills";
import { fetchProjects } from "@/utils/fetchProjects";
import { fetchSocials } from "@/utils/fetchSocials";
import { fetchBooks } from "@/utils/fetchBooks";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
  books: Book[];
};

const Home = ({
  pageInfo,
  experiences,
  projects,
  skills,
  socials,
  books,
}: Props) => {
  return (
    <div className="bg-[#242424] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 pb-20 select-none scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-purple-500/80">
      <Head>
        <title className="bg-black">@officialmafra</title>
      </Head>

      <Header socials={socials} />

      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      <section id="skills" className="snap-start">
        <Books books={books} />
      </section>

      <section id="contact" className="snap-start">
        <Contact />
      </section>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();
  const books: Book[] = await fetchBooks();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
      books,
    },
    revalidate: 10,
  };
};
