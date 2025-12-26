import React, { type FC } from "react";
import * as S from "./styled";

export const About: FC = () => {
    return (
        <S.AboutStyled>
            <S.AboutContent>
                <p>
                    At SwitechAI, we transform complex business challenges into elegant software solutions. As a forward-thinking software consultancy, we specialize in building custom applications, designing scalable system architectures, and integrating intelligent chatbots that enhance customer engagement.
                </p>
                <p>
                    Our team of experienced developers and consultants works closely with businesses to understand their unique needs and deliver technology solutions that drive growth. From cloud infrastructure to modern web applications, we leverage cutting-edge technologies to help companies stay competitive in an ever-evolving digital landscape.
                </p>
                <p>
                    Whether you're a startup looking to build your first application or an established enterprise trying to create your first system or application, we bring the expertise, creativity, and dedication needed to bring your vision to life. We don't just write code—we build partnerships that last.
                </p>
                
                <p><strong>Our Mission</strong></p>
                <p>
                    To empower businesses with innovative technology solutions that simplify operations, enhance user experiences, and unlock new opportunities for growth.
                </p>
                
                <p><strong>Why Choose Us?</strong></p>
                <ul>
                    <li>Tailored solutions designed specifically for your business needs.</li>
                    <li>Expert team with diverse technical expertise.</li>
                    <li>Commitment to quality, security, and best practices.</li>
                    <li>Transparent communication throughout the project lifecycle.</li>
                    <li>Ongoing support and maintenance to ensure long-term success.</li>
                </ul>
                
                <p>Let's build something extraordinary together.</p>
            </S.AboutContent>
        </S.AboutStyled>
    );
};
