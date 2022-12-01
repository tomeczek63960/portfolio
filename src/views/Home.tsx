import type { NextPage } from 'next'
import Button from 'src/ui/Button';
import Skills from 'src/ui/Skills';
import WorkExperience from 'src/ui/WorkExperience';
import WelcomeBox from 'src/ui/WelcomeBox/WelcomeBox';
import OfficeEmployee from "../../public/svg/office-employee.svg"

const Home: NextPage = () => {
  return (
    // dodać stronę cv z mozliwością pobrania jako pdf
    // w głównej animacji Inicjały animować przez gsapa jako rysowane literki svg

    // wszystko rozdzielić na komponenty w folderach (plik tsx ze skryptami oraz oddzielny plik z deklaracjami styli dla komponentu i testy)
    <>
      {/* spróbować dodać animacje na np. wykres który będzie się rysował, kwiatek który będzie rosnął itp. */}
      <OfficeEmployee />
      <h2>🐟</h2>
      <p>Cześć mam na imę Tomasz i dzisiaj będę twoim przewodnikiem 😊</p>
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
    </>
  )
}

export default Home
