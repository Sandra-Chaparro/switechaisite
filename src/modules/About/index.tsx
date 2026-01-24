import React, { type FC } from "react";
import * as S from "./styled";
import { ServiceCards } from "@modules/ServiceCards";
import { Container } from "@components/Container";

export const About: FC = () => {
    return (<>
        <S.AboutStyled>
            <S.AboutContent>
                <p>
                    At SwitechAI we specialize in creating custom websites and web solutions built from the ground up, without relying on generic templates or platforms. With a background in software engineering, we bring technical expertise and creative problem-solving to every project, ensuring your website is uniquely yours.
                </p>
                <p>Whether you're a freelancer looking to showcase your work or a business needing custom functionality, we're here to bring your digital vision to life.</p>

            </S.AboutContent>
        </S.AboutStyled>

            <ServiceCards
                title="Our Mission & Vision"
                cards={[
                    {
                        title: "Vision",
                        description: "To empower businesses and individuals with custom web solutions that reflect their unique identity and help them succeed in the digital world."
                    },
                    {
                        title: "Mission",
                        description: "We create tailored websites and web applications that combine clean code, thoughtful design, and powerful functionality. Our mission is to deliver digital solutions that not only meet our clients' needs but exceed their expectations, providing them with the tools to grow their online presence and achieve their goals."
                    }
                ]}
            />

        <S.AboutStyled>
            <S.AboutContent>
                <p><strong>Why Choose Us?</strong>
                <ul>
                    <li>Tailored solutions designed specifically for your business needs.</li>
                    <li>Commitment to quality, security, and best practices.</li>
                    <li>Transparent communication throughout the project lifecycle.</li>
                    <li>All development is done right here in the United States by a US-based team, ensuring data security, reliable communication - no outsourcing overseas.</li>
                </ul>
                </p>
                <p style={{ textAlign: 'center', paddingTop: '40px', fontWeight: 'bold' }}>Let's build something extraordinary together.</p>
            </S.AboutContent>
        </S.AboutStyled>
        </>
    );
};
