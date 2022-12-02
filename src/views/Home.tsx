import type { NextPage } from 'next'
import Button from 'src/ui/Button';
import Skills from 'src/ui/Skills';
import WorkExperience from 'src/ui/WorkExperience';
import WelcomeBox from 'src/ui/WelcomeBox/WelcomeBox';
import OfficeEmployee from "../../public/svg/office-employee.svg"
import HeadingComponent from 'src/ui/Heading/Heading';

const Home: NextPage = () => {
  return (
    // dodać stronę cv z mozliwością pobrania jako pdf
    // w głównej animacji Inicjały animować przez gsapa jako rysowane literki svg

    // wszystko rozdzielić na komponenty w folderach (plik tsx ze skryptami oraz oddzielny plik z deklaracjami styli dla komponentu i testy)
    <>
      {/* spróbować dodać animacje na np. wykres który będzie się rysował, kwiatek który będzie rosnął itp. */}
      <HeadingComponent tagName='h2'>
        Hej 😊<br/>
        Jestem Tomek<br/>
        I dziś będę twoim przewodnikiem
      </HeadingComponent>
      <OfficeEmployee />
      <h4>Jezeli jesteś gotowy wypłynąć na nieznane wody 🐟, zapraszam na okręt 🚣🏻</h4>
      <h2></h2>
      {/* <p>Cześć mam na imę Tomasz i dzisiaj będę twoim przewodnikiem 😊</p> */}
      <br />
      <p>Zapraszam do zapoznania się z moją pracą w która została stworzona z pasją 💜</p>
      <br />
      <br />
      <br />
      <WelcomeBox />
      <Button />
      
      <h1>Stack technologiczny</h1>
      <Skills />
      <br/>
      <h1>Doświadczenie zawodowe</h1>
      <WorkExperience />
      <br/>
      <h1>Sekcja do pobrania cv / lub to na oddzielną stronę wrzucić</h1>
      <h2>Jeżeli spodobała się dla Ciebie moja praca i chcesz dowiedzieć się więcej pobierz moje CV.</h2>
      <a href="/cv.pdf" download>Pobierz moje CV</a>
    </>
  )
}

export default Home
