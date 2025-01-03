
document.addEventListener('DOMContentLoaded', ()=>{

    const artistsData = [
        { name: 'Henrique & Juliano',image:'./img/album-white-noise.jpg'}, // veja isso
        { name: 'Jorge & Mateus', image:'./img/artista-luan-santana.jpg'},
        { name: 'Zé Neto & Cristiano', image:'./img/album-white-noise.jpg'},
        { name: 'Gusttavo Lima', image: './img/artista-luan-santana.jpg'},
        { name: 'Luan Santana', image: './img/album-white-noise.jpg'},
        { name: 'Matheus & Kauan', image: './img/artista-luan-santana.jpg'}
        
        ];
    
        const albumsData = [
            { name: 'White Noise (Sleep & Relaxation Sounds)', artist: 'Sleepy John', image: './img/album-white-noise.jpg' },
            { name: 'O Céu Explica Tudo (Ao Vivo)', artist: 'Henrique & Juliano', image: './img/artista-luan-santana.jpg'},
            { name: 'Nada como um dia após o outro', artist: 'Racionais', image: './img/album-white-noise.jpg'},
            { name: 'HIT ME HARD AND SOFT', artist: 'Billie Eilish', image:'./img/artista-luan-santana.jpg' },
            { name: 'CAJU', artist: 'Liniker', image: './img/album-white-noise.jpg' },
            { name: 'Escândalo Íntimo', artist: 'Luísa Sonza', image:'./img/artista-luan-santana.jpg' }
    
            ];



            const artistsGrid = document.querySelector('.artists-grid')
            const albumsGrid = document.querySelector('.albums-grid')

            artistsData.forEach( artist =>{       //perceba que aqui ele está criando 6 divs já que estamos usando forEach
                const artistCard = document.createElement('div')
                artistCard.classList.add('artist-card')

                artistCard.innerHTML = ` 
                <img src = "${artist.image}" alt = "imagem de ${artist.name}">
                <h3>${artist.name}</h3>
                <p>Artista</p>
                
                `

                artistsGrid.appendChild(artistCard)

            })


            albumsData.forEach(albums => {
                const albumCard = document.createElement('div')
                albumCard.classList.add('album-card')

                albumCard.innerHTML = `
                    <img src= "${albums.image}" alt= "imagem de ${albums.name}">
                    <p>Album</p>
                
                `

                albumsGrid.appendChild(albumCard)

            })






})







  