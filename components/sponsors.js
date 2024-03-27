import React from 'react'
import styled from '@emotion/styled'
import { Box } from 'rebass'
import { Container } from './blocks'
import { useColorMode } from 'theme-ui'
import theme from './theme'

const data = {
  sponsors: [
    {
      name: 'Commercial Lynks Inc',
      link: 'https://commerciallynks.org',
      image:
        './static/logos/CLI_logo.png'
    },
    {
      name: 'Big Sky Venture Group',
      link: 'https://www.bigskyventuregroup.com',
      image:
        'https://static.wixstatic.com/media/31df41_c4f5a6dd327b47f8b57e31117d384521~mv2.png/v1/fill/w_291,h_291,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bsvg%20circle_edited.png'
    },
    {
      name: 'Association for Computing Machinery',
      link: 'https://www.loyola.edu/academics/computer-science/',
      image: './static/logos/acm.png'
    },

    {
      name: 'Cyberhounds',
      link: 'https://bridge.loyola.edu/cybersecurity/web_officers',
      image: './static/logos/cyberhounds.jpg'
    },
    {
      name: 'Math and Stat Club',
      link: 'https://bridge.loyola.edu/mathstat/web_officers',
      image: './static/logos/mathstat.jpeg'
    },
    {
      name: 'Women in Stem',
      link: 'https://bridge.loyola.edu/womentech/web_officers',
      image: './static/logos/Women_in_Technology_Club.png'
    },
    {
      name: 'Minorities in Stem',
      link: 'https://bridge.loyola.edu/minoritiesinstem/web_officers',
      image: './static/logos/MIS.png'
    },
    {
      name: 'NAS',
      link: 'https://www.loyola.edu/loyola-college-arts-sciences/divisions/natural-applied-sciencesc:\Users\Sajiv\Downloads\CLI_logo-removebg-preview.png',
      image: './static/logos/NAS.png'
    },
    {
      name: 'SCI&E',
      link: 'https://www.loyola.edu/department/center-innovation-entrepreneurship/',
      image: './static/logos/sci&e.png'
    }
  ],
  additionalSupport: [
    {
      name: 'IEEE',
      link: 'https://bridge.loyola.edu/ieee/home/',
      image: 'https://angelhacks.org/static/sketch-logo.png'
    },
    {
      name: 'CS Department',
      link: 'https://www.loyola.edu/academics/computer-science/',
      image: './static/logos/CS.png'
    }
  ]
}

const Base = styled(Box)`
  display: grid;
  grid-row-gap: ${theme.space[2]}px;
  grid-template-columns: repeat(
    auto-fit,
    minmax(${props => (props.section === 'sponsors' ? 256 : 192)}px, 1fr)
  );
  align-items: center;
  justify-content: center;
  margin-bottom: ${theme.space[4]}px;
  a {
    width: 100%;
  }
  img {
    max-width: 75%;
    max-height: ${props => (props.section === 'sponsors' ? 6 : 4)}rem;
    ${props =>
      props.colorMode === 'dark' && `filter: invert() hue-rotate(180deg);`}
  }
`

const Sponsors = ({ section = 'sponsors', ...props }) => {
  const [colorMode] = useColorMode()
  return (
    <Base colorMode={colorMode} section={section} {...props}>
      {data[section].map(sponsor => (
        <a href={sponsor.link} target="_blank" key={sponsor.name}>
          <img alt={sponsor.name} src={sponsor.image} />
        </a>
      ))}
    </Base>
  )
}

export default Sponsors
