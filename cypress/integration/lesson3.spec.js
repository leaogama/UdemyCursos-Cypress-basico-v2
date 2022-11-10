

describe('Selecionando opcoes em campos de selecao suspensa', () => {


    it('seleciona um produto (YouTube) por seu texto', () => {
        cy.visit('https://www.youtube.com/')
        cy.get('input#search').type('cypress{enter}')
       /cy.get('.title-and-badge > #video-title').select('Iniciando com Cypress em 2022').click()       
       
       //contains('#video-title', 'basicão de cypress',{matchCase: false}).click()
        //cy.get(':nth-child(4) > #content > .yt-simple-endpoint.ytd-playlist-renderer > h3.style-scope > #video-title')

    })

})
