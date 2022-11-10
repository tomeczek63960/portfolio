import type { NextPage } from 'next'
import Image from 'next/image'
import Button from 'src/ui/Button'
import Skills from 'src/ui/Skills'

const Home: NextPage = () => {
  return (
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

    // pierwsza opcja
    //    -- kontent idzie na opacity 0
    //    -- (pierwszy krok) lewa strona (czarna) - zostaje pokryta białym kolorem
    //    -- (pierwszy krok) prawa strona (biała) - zostaje pokryta czarnym kolorem 

    //    -- (drugi krok) lewa strona (czarna) - zostaje pokryta spowrotem pierwotnym kolorem
    //    -- (drugi krok) prawa strona (biała) - zostaje pokryta spowrotem pierwotnym kolorem 
    //    -- kontent idzie opacity 1
    
    // druga opcja 
    //    -- kontent idzie na opacity 0

    //    -- odwracamy paletę kolorów (po przejściu lewa strona zmienia się z prawą bazowym kolorem)    
    //    -- (pierwszy krok) lewa strona (czarna) - zostaje pokryta białym kolorem
    //    -- (pierwszy krok) prawa strona (biała) - zostaje pokryta czarnym kolorem 
    
    //    -- kontent idzie opacity 1
    <>
      <Image src="/tk.jpeg" width="100%" height="100%" />
      <Button />
      <h1>home page</h1>
      <h1>Stack technologiczny</h1>
      <h2>Ikonki wszystkich skillów react/next/vue/nuxt/angular/js/Typescript/html/css/scss/adobexd/figma/node.js/express.js/strapi/contentfull/redux/</h2>
      <Skills />
      <br/>
      <h1>Doświadczenie zawodowe</h1>
      <br/>
      <h1>Sekcja do pobrania cv</h1>
    </>
  )
}

export default Home
