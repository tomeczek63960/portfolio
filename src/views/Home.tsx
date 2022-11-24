import type { NextPage } from 'next'
import Button from 'src/ui/Button';
import Skills from 'src/ui/Skills';
import WorkExperience from 'src/ui/WorkExperience';
import WelcomeBox from 'src/ui/WelcomeBox/WelcomeBox';

const Home: NextPage = () => {
  return (
    // przy kazdym przejsciu strony robić auto scroll do samej góry
    // dodać sekcję about me 
    // dodać stronę cv z mozliwością pobrania jako pdf
    // do animacji głównej dodać 2 kólki (created with) (passion)
    // w głównej animacji Inicjały animować przez gsapa jako rysowane literki
    // do animacji głównej dodać opis function initialAnimation() {} z buttonem run initialAniamtion()
    // zrobić white/dark mode jako przełącznik (jako zagięta kartka w prawym górym rogu - w kolorze przeciwnym do aktualnie wyświetlanego zeby zrobić kontrast)

    // (desktop) - prawa strona (biała) - nawigacja (lista punktów nawigacji na desktopie)
    // (desktop) - lewa strona (czarna) - kontent (ograniczyć szerokość tylko do zeby było do czarnego pola)
    // (desktop) - animacja przejścia stron (mozna zrobić ze po przejsciu na inną stronę )

    // zamiast zwykłego scrolla dodać stronnicowanie tak coś w podobie do tego https://olaolu.dev/ (scroll będzie tylko na lewej stronie na czarnym tle / prawa strona biała będzie na fixed)
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
