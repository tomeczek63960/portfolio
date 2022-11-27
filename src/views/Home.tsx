import type { NextPage } from 'next'
import Button from 'src/ui/Button';
import Skills from 'src/ui/Skills';
import WorkExperience from 'src/ui/WorkExperience';
import WelcomeBox from 'src/ui/WelcomeBox/WelcomeBox';

const Home: NextPage = () => {
  return (
    // przy kazdym przejsciu strony robić auto scroll do samej góry
    // dodać stronę cv z mozliwością pobrania jako pdf
    // do animacji głównej dodać 2 kólki (created with) (passion)
    // w głównej animacji Inicjały animować przez gsapa jako rysowane literki


    // wszystko rozdzielić na komponenty w folderach (plik tsx ze skryptami oraz oddzielny plik z deklaracjami styli dla komponentu)
    <>
      <h1>Sekcja przywitania (zdjęcie)</h1>
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
