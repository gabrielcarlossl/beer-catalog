import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBeers } from '../../redux/thunks/index.js'
import { cardStyle, cardContent, VerMais, paginationStyle, arrows } from '../../assets/styles/card.style.js'
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded'
import CloseIcon from '@mui/icons-material/Close'
import Modal from 'react-modal'
import { modalStyle } from '../../assets/styles/modal.style.js'

const Card = () => {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1)
    const [beersPerPage, setBeersPerPage] = useState(4)
    const beers = useSelector((state) => state.beers.beers)
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [selectedBeer, setSelectedBeer] = useState(null)

    useEffect(() => {
        dispatch(fetchBeers());
    }, [dispatch])

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth <= 500) {
                setBeersPerPage(1)
            } else {
                setBeersPerPage(4)
            }
        };

        handleResize();
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
        const totalBeers = beers.length;
        const totalPages = Math.ceil(totalBeers / beersPerPage)
        const currentPageIndex = currentPage - 1

        if (totalPages <= 1) {
            return null
        }

        const paginationButtons = []
        let leftButtonNumber = currentPageIndex - 1
        let rightButtonNumber = currentPageIndex + 1

        if (currentPageIndex === 0) {
            leftButtonNumber = currentPageIndex + 1
            rightButtonNumber = currentPageIndex + 2
        } else if (currentPageIndex === totalPages - 1) {
            leftButtonNumber = currentPageIndex - 2
            rightButtonNumber = currentPageIndex + 1
        }

        // Função para gerar os botões de páginação
        for (let i = leftButtonNumber; i <= rightButtonNumber; i++) {
            if (i >= 0 && i < totalPages) {
                const pageNumber = i + 1;
                const isCurrentPage = pageNumber === currentPage;

                paginationButtons.push(
                    <button
                        key={pageNumber}
                        onClick={() => setCurrentPage(pageNumber)}
                        disabled={isCurrentPage}
                    >
                        {pageNumber}
                    </button>
                )
            }
        }

        return paginationButtons
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>

            <div className={cardStyle}>
                {currentBeers.map((beer) => (
                    <div className={cardContent} key={beer.id}>
                        <h3>{beer.name}</h3>
                        <img src={beer.image_url} alt={beer.name} />
                        <p>Teor alcoólico: {beer.abv}%</p>
                        <VerMais onClick={() => openModal(beer)}>Selecionar</VerMais>
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
                                <h2>Nome: <span>{selectedBeer.name}</span></h2>
                                <p>Tagline: <span>{selectedBeer.tagline}</span></p>
                            </div>
                            <p>Descrição:</p> <span>{selectedBeer.description}</span>
                            <img src={selectedBeer.image_url} alt={selectedBeer.name} />
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
