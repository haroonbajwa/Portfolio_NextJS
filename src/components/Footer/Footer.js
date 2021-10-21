import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillFacebook } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+92 304 2998055">+92 304 2998055</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:haroonbajwa99@gmail.com">haroonbajwa99@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/haroonbajwa">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.facebook.com/haroonbajwa99/">
            <AiFillFacebook size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/haroonbajwa99/">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
