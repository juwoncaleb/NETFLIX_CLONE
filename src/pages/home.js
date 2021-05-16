import React from 'react';
import { Feature, OptForm } from "../components";
import { HeaderContainer } from '../containers/Header'
import { JumbotronContainer } from "../containers/Jumbotron";
import { FooterContainer } from "../containers/Footer";
import FaqsContainers from '../containers/faqs';

export default function Home() {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>
                        Unlimited films, TV programmes and more
                    </Feature.Title>
                    <Feature.SubTitle>
                        Watch anywhere . Cancel at any time
                    </Feature.SubTitle>
                    <OptForm>
                        <OptForm.Input placeholder="Email address" />
                        <OptForm.Button>Try it now</OptForm.Button>
                        <OptForm.Break />
                        <OptForm.Text>ready to watch ? Enter your email to create or restart your membership</OptForm.Text>
                    </OptForm>
                </Feature>

            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainers />
            <FooterContainer />

        </>
    )
}
