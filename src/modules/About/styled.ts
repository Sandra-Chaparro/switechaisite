import styled from "@emotion/styled";
import { Theme } from "@styles/colors";
import { MediaQuery } from "@styles/mediaQuery";

export const AboutStyled = styled.section`
    background: ${Theme.primary};
    padding: 50px 0 50px;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    margin: -43px 0 50px;
    z-index: 1;
    position: relative;
`;

export const AboutContent = styled.div`
    color: ${Theme.tertiary};
    max-width: 1200px;
    margin: 0 auto;
    text-align: justify;

    p {
        font-size: 18px;
        line-height: 1.8;
        margin-bottom: 20px;
        letter-spacing: -0.3px;
        opacity: 0.9;

        ${MediaQuery.max("lg")} {
            font-size: 16px;
            line-height: 1.6;
        }
    }
`;