import React, { FC } from "react";
import Heading from "src/ui/Heading";
import styled from "styled-components";
import { variables } from "src/styled/mixins";
import Paragraph from "src/ui/Paragraph";

const StyledIntroductionSection = styled.section`
  padding-block: ${variables.sectionVerticalPadding};
`;

const StyledExperienceList = styled.div`
  padding-bottom: 60px;
`;
const StyledExperienceItem = styled.div`
  margin-top: 30px;
  p {
    margin-top: 10px;
  }
`;
const StyledExperienceItemSpan = styled.span`
  color: #6a82fb;
  font-weight: 700;
`;
const ViewExperience: FC = () => {
  // TODO add description about personal projects also
  const projects = [
    {
      name: "Content management system and Landing Page for warehouse halls for rent company",
      role: "Front‐end developer",
      technologies: "HTML. CSS, Javascript, Vue, Nuxt, Pimcore",
      sector: "warehouse halls for rent",
      description:
        "Building a new company website with blog, map of warehouses, pdf generator and landing page for contests",
      accomplishments:
        "A modern and fast application, with search and filter magazines",
    },
    {
      name: "Development of new functionalities for the project based on the old version of pimcore 4.6",
      role: "Front‐end developer",
      technologies: "HTML. CSS, Javascript, Php, CoffeeScript, Pimcore 4.6",
      sector: "Financial sector",
      description: "Developing new functionalities, refactoring old code",
      accomplishments: "New functionalities",
    },
    {
      name: "Online store for the tea industry",
      role: "Front‐end developer",
      technologies: "HTML. CSS, Javascript, Shopware, Symfony, twig",
      sector: "tea industry",
      description: "Creating a Online store based on the Shopware",
      accomplishments: "Modern and fast online store",
    },
    {
      name: "Content management system for a global manufacturers of injection‐molded fittings and tools",
      role: "Front‐end developer",
      technologies: "HTML. CSS, Javascript, Vue, Pimcore",
      sector: "manufacturers of injection‐molded fittings and tools",
      description:
        "Creating a website based on the Pimcore content management system",
      accomplishments: "Extensive website with advanced animations",
    },
    {
      name: "Headless Content management system for Clinical research software company",
      role: "Front‐end developer / strapi‐node developer",
      technologies: "HTML. CSS, Javascript, Vue, Nuxt, Strapi",
      sector: "Clinical research software",
      description: "Creating a website based on the Nuxt and Strapi cms",
      accomplishments: "Modern and fast website with basic animations",
    },
    {
      name: "Business card page for it company",
      role: "Front‐end developer / strapi‐node developer",
      technologies: "HTML. CSS, Javascript, Vue, Nuxt, Strapi, Gsap",
      sector: "it solutions",
      description:
        "Creating a website based on the Nuxt and Strapi cms with advanced animations in gsap",
      accomplishments: "Modern and fast website with advanced animations",
    },
  ];
  return (
    <>
      <StyledIntroductionSection>
        <Heading tagName="h2" color="#6A82FB">
          Opis projektów w których miałem okazję uczestniczyć
        </Heading>
        <Paragraph>
          Lista komercyjnych projektów w których uczestniczyłem na przestrzeni
          ostatnich 2 lat.
        </Paragraph>
      </StyledIntroductionSection>
      <StyledExperienceList>
        {projects.map((project: any, index: number) => (
          <StyledExperienceItem key={project.name}>
            <Heading tagName="h3" color="#7928ca">
              {index + 1}. {project.name}
            </Heading>

            <Paragraph>
              <StyledExperienceItemSpan>Role: </StyledExperienceItemSpan>
              {project.role}
            </Paragraph>

            <Paragraph>
              <StyledExperienceItemSpan>
                Technologies:{" "}
              </StyledExperienceItemSpan>
              {project.technologies}
            </Paragraph>

            <Paragraph>
              <StyledExperienceItemSpan>
                Sector/ Business Domain:{" "}
              </StyledExperienceItemSpan>
              {project.sector}
            </Paragraph>

            <Paragraph>
              <StyledExperienceItemSpan>Description: </StyledExperienceItemSpan>
              {project.description}
            </Paragraph>
            <Paragraph>
              <StyledExperienceItemSpan>
                Accomplishments:{" "}
              </StyledExperienceItemSpan>
              {project.accomplishments}
            </Paragraph>
          </StyledExperienceItem>
        ))}
      </StyledExperienceList>
    </>
  );
};

export default ViewExperience;
