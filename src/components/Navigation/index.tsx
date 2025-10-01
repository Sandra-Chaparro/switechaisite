import * as S from "./styled";
import { useState, type FC } from "react";
import { Hamburger } from "./components/Hamburger";
import logo from "../../static/images/logo.png";

export const Navigation: FC = () => {
    // to update values for all components, keep the state here
    const [isOpen, setIsOpen] = useState(false);

    return (
        <S.NavigationStyled>
            <S.NavigationListWrapper $isOpen={isOpen}>
                <S.NavigationList>
                    <li>
                        <a href="/services">Services</a>
                    </li>
                    <li>
                        <a
                            href="/"
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a href="/infinite">FAQ</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </S.NavigationList>
            </S.NavigationListWrapper>
            <Hamburger
                state={{
                    open: isOpen,
                    setOpen: setIsOpen,
                }}
            />
        </S.NavigationStyled>
    );
};
