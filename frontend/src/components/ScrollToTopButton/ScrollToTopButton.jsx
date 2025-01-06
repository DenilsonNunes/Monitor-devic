import { useState, useEffect } from "react"


import { ChevronUpIcon } from "@chakra-ui/icons"
import {  IconButton } from "@chakra-ui/react"





const ScrollToTopButton = () => {

    const [isVisible, setIsVisible] = useState(false);
    
    // Função para verificar a posição de scroll
    const handleScroll = () => {
        const scrollThreshold = 300; // Valor do scroll necessário para mostrar o botão
        setIsVisible(window.scrollY > scrollThreshold);
    };

    // Função para rolar até o topo
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        // Adiciona o evento de scroll
        window.addEventListener("scroll", handleScroll);

        // Remove o evento ao desmontar
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);




    
    return (

        isVisible && (

            <IconButton
                fontSize='32px'
                icon={<ChevronUpIcon/>}
                colorScheme='blue'
                position="fixed"
                bottom="4"
                right="4"
                zIndex="9999"
                isRound
                onClick={scrollToTop}
            />

        )

    )

}

export default ScrollToTopButton