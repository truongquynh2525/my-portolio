import { openSource, showContactUs } from './constants';
import Contact from './components/Contact';
import { GithubUserType } from './types';
import Navigation from '@components/Navigation';
import Skill from '@containers/Skill';
import Education from '@components/Education';
import Experience from '@components/Experience';
import Feedback from '@components/Feedback';
import Project from '@containers/Project';
import Github from '@components/Github';


export default function Home({
  githubProfileData,
}: {
  githubProfileData?: any;
}) {
  return (
    <>
      <Navigation />
      <Skill />
      <Education />
      <Experience />
      <Feedback />
      <Project />
      {showContactUs ? <Contact /> : null}
      <Github {...githubProfileData} />
    </>
  );
}

export async function getStaticProps() {
  const githubProfileData: GithubUserType = await fetch(
    `https://api.github.com/users/${openSource.githubUserName}`
  ).then((res) => res.json());

  return {
    props: { githubProfileData },
  };
}
