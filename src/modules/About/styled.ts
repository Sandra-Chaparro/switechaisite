import styled from "@emotion/styled";
import { Theme } from "@styles/colors";
import { MediaQuery } from "@styles/mediaQuery";

export const AboutStyled = styled.section`
    background: ${Theme.primary};
    padding: 50px 0 50px;
    margin: -23px 0 10px;
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
        padding-left: 35px;
        padding-right: 35px;

        ${MediaQuery.max("lg")} {
            font-size: 16px;
            line-height: 1.6;
        }
    }
`;