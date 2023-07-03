import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBeers } from '../../redux/thunks/index.js'
import { cardStyle, cardContent, paginationStyle, arrows, SelectButton } from '../../assets/styles/card.style.js'
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded'
import CloseIcon from '@mui/icons-material/Close'
import Modal from 'react-modal'
import { modalStyle } from '../../assets/styles/modal.style.js'

const Card = () => {
    const beers = useSelector((state) => state.beers.beers) // utilização do estado da store para acessar as cervejas que vieram da requisição
    const dispatch = useDispatch()

    const [currentPage, setCurrentPage] = useState(1) // estado para controlar pagina atual
    const [beersPerPage, setBeersPerPage] = useState(4) // estado para controlar o número de cervejas a serem exibidos por página
    const [modalIsOpen, setModalIsOpen] = useState(false) // controle do modal
    const [selectedBeer, setSelectedBeer] = useState(null) // controle da seleção de cerveja

    // realizar a requsição sempre que a pagina for montada, o useEffect é executado sempre que o dispatch mudar, já que ele está dentro do array.
    useEffect(() => {
        dispatch(fetchBeers());
    }, [dispatch])


    // fuseEffect para alterar a quantidade de cervejas a serem exibidas por página dependendo do tamanho da tela, ele é executado assim que o componente é montado
    useEffect(() => {

        const handleResize = () => {
            const screenWidth = window.innerWidth
            if (screenWidth <= 500) {
                setBeersPerPage(1)
            } else {
                setBeersPerPage(4)
            }
        }

        handleResize()
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const openModal = (beer) => {
        setSelectedBeer(beer)
        setModalIsOpen(true)
    }

    const closeModal = () => {
        setModalIsOpen(false)
    }

    // Cálculo dos índices das cervejas a serem exibidas na página atual
    const indexOfLastBeer = currentPage * beersPerPage
    const indexOfFirstBeer = indexOfLastBeer - beersPerPage
    const currentBeers = beers.slice(indexOfFirstBeer, indexOfLastBeer)

    // Função para mudar para a próxima página
    const nextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1)
    };

    // Função para mudar para a página anterior
    const prevPage = () => {
        setCurrentPage((prevPage) => prevPage - 1)
    };

    // Renderizar os botões de paginação
    const renderPaginationButtons = () => {
        const totalBeers = beers.length // recebe o numero total de cervejas para serem mostradas
        const totalPages = Math.ceil(totalBeers / beersPerPage) // calcula quantas paginas serão de acordo com o número de cervejas por página que foi escolhido no setBeersPerPage. ceil arredonda para cima divisões com resto
        const currentPageIndex = currentPage - 1

        if (totalPages <= 1) {
            return null // se não tiver mais páginas retorna null para não mostrar números de paginação
        }

        // Lista de botões de paginação
        const paginationButtons = []

        const maxButtons = 5 // Número máximo de botões de paginação para mostrar

        // botão inicia deve ser igual ao index da pagina atual subtraido da metade do numero máximo de botões
        let startButtonNumber = currentPageIndex - Math.floor(maxButtons / 2)
        // botão final deve ser igual a soma do index da pagina atual mais a metade do numero máximo de botões
        let endButtonNumber = currentPageIndex + Math.floor(maxButtons / 2)

        console.log('botao final',endButtonNumber)
        console.log('index da pagina atual',currentPageIndex)
        console.log('botao inicial',startButtonNumber)


        if (startButtonNumber < 0) {
            // se o botão inicial for menor que 0 ele automaticamente é o botão incial então será mudado para 0
            startButtonNumber = 0

            // botão final será o menor valor entre o valor máximo de botões menos 1 e total de paginas menos 1, dessa forma sempre mostrará os botões de paginação quando estiver na página 1
            endButtonNumber = Math.min(maxButtons - 1, totalPages - 1)

            // se o botão final for maior ou igual ao total de paginas, o botão final será alterado para o numero total de paginas menos 1, e o botão inicial será alterado para o maior valor entre 0 e o numero do botão final menos o numero máximo de botões menos 1, dessa forma sempre mostrará os botões de paginação quando estiver na ultima página.
        } else if (endButtonNumber >= totalPages) {
            endButtonNumber = totalPages - 1
            startButtonNumber = Math.max(0, endButtonNumber - (maxButtons - 1))
        }

        // Função para gerar os botões de paginação
        for (let i = startButtonNumber; i <= endButtonNumber; i++) {
            const pageNumber = i + 1
            
            // verificação se a pagina é atual
            const isCurrentPage = pageNumber === currentPage

            paginationButtons.push(
                <button
                    key={pageNumber}
                    onClick={() => setCurrentPage(pageNumber)} // quando botão é clicado ele passa a ser a página atual e desabilitado quando for a página atual
                    disabled={isCurrentPage}
                >
                    {pageNumber}
                </button>
            )
        }

        return paginationButtons;
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

            <div className={cardStyle}>
                {currentBeers.map((beer) => (
                    <div className={cardContent} key={beer.id}>
                        <h3>{beer.name}</h3>
                        <img src={beer.image_url} alt={beer.name} />
                        <p>Alcohol percentage: {beer.abv}%</p>
                        <SelectButton onClick={() => openModal(beer)}>Select</SelectButton>
                    </div>
                ))}
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Detalhes da Cerveja"
                    style={modalStyle}
                    className="custom-modal"
                >
                    {selectedBeer && (
                        <div className={modalStyle}>
                            <CloseIcon fontSize='large' onClick={closeModal}></CloseIcon>
                            <div>
                                <h2>Name: <span>{selectedBeer.name}</span></h2>
                                <p>Tagline: <span>{selectedBeer.tagline}</span></p>
                            </div>
                            <hr style={{ marginTop: 20, marginBottom: 20 }} />
                            <p>Description:</p> <span>{selectedBeer.description}</span>
                            <hr style={{ marginTop: 20, marginBottom: 20 }} />
                            <img src={selectedBeer.image_url} alt={selectedBeer.name} />
                            <hr />
                        </div>
                    )}
                </Modal>
            </div >
            <div className={paginationStyle}>
                <button className={arrows} disabled={currentPage === 1} onClick={prevPage}>
                    <ArrowBackIosNewRoundedIcon></ArrowBackIosNewRoundedIcon>
                </button>
                {renderPaginationButtons()}
                <button
                    className={arrows}
                    disabled={currentPage === Math.ceil(beers.length / beersPerPage)}
                    onClick={nextPage}
                >
                    <ArrowForwardIosRoundedIcon></ArrowForwardIosRoundedIcon>
                </button>
            </div>
        </div>
    );
};

export default Card;
