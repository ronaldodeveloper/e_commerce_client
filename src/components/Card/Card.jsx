import './card.scss'
import { Card } from 'react-bootstrap'

export const CardOfertas= ()=>{


    const detailsCard= {
        // width: '10rem',
        flex: 1,
        margin: '20px'
    }

    // simular dados da api
    const produtosEmOfertas= [
        {
            nome: 'PC Gamer Intel',
            descricao: 'Vem placa mãe, HD, gabinete e processador',
            desconto: '19% OF',
            preco: '1.600,00',
            credito: '12x R$ 150,00',
            image: 'images/card-ofertas-tv.jpg'
        },
        {
            nome: 'Camera Canon XHD',
            descricao: 'Resolução em 4k',
            desconto: '25% OF',
            preco: '2.00,00',
            credito: '12x R$ 259,99',
            image: 'images/card-ofertas-tv.jpg'
        },
        {
            nome: 'IPhone Modern',
            descricao: 'Resolução em 4k',
            desconto: '15% OF',
            preco: '2.350,00',
            credito: '12x R$ 299,99',
            image: 'images/card-ofertas-tv.jpg'
        },
        {
            nome: 'TV Philips',
            descricao: 'Resolução em 4k, Youtube integrado',
            desconto: '25% OF',
            preco: '3.000,00',
            credito: '12x R$ 350,99',
            image: 'images/card-ofertas-tv.jpg'
        }
    ]

    return (

    <div className="cards">
        <div className="card-group">
        {produtosEmOfertas.map((item, idx)=>{
            return (
                <Card style={ detailsCard }  key={`indice${idx}`}>
                    <Card.Img variant="top" src={ item.image }/>
                    <Card.Body className='card-body'>
                        <Card.Title><strong>R$ { item.preco }</strong></Card.Title>
                          <p><small>{ item.credito }</small></p>
                        <Card.Text>
                            <p>{ item.nome }</p>
                            <p className='card-descricao'>{ item.descricao }</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            )
        })}
        
        </div>
        {/* <div className="row">
        <Card style={detailsCard}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Descrição do Produto
                </Card.Text>
                <Button variant="primary">Ver</Button>
            </Card.Body>
        </Card>
        <Card style={detailsCard}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Descrição do Produto
                </Card.Text>
                <Button variant="primary">Ver</Button>
            </Card.Body>
        </Card>
        <Card style={detailsCard}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Descrição do Produto
                </Card.Text>
                <Button variant="primary">Ver</Button>
            </Card.Body>
        </Card>
        <Card style={detailsCard}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Descrição do Produto
                </Card.Text>
                <Button variant="primary">Ver</Button>
            </Card.Body>
        </Card>
        </div> */}
        
    </div>
    )
}