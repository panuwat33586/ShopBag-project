import React, { Component } from 'react'
import { Card, Col, Row } from 'antd'


export default class Productcard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [
                {
                  id: 1,
                  Mcid:1,
                  Scid: 3,
                  name: 'Samsung galaxy note 10(red)',
                  img: 'https://drive.google.com/uc?id=1Cmo2LRGSgPFSGeelKYMj8rQcv5rADCMz',
                  price: '30,000',
                  quantity: '10',
                  description: 'The Galaxy Note 10 is Samsung’s easiest to use S Pen-toting phone yet, and while there may not be any game-changing features to make this a must-buy handset, it’s a solid addition to the Note range. If you’re looking for Samsung’s ultimate top-end device you’ll want to opt for the Note 10 Plus, but if you want to save a bit of money, or you’re after a smaller phone with a stylus, this is the Note to go for.',
                },
                {
                  id: 2,
                  Mcid:3,
                  Scid: 7,
                  name: 'Unique Scraf',
                  img: 'https://drive.google.com/uc?id=1L55BDRbs42REQsnFvAeriq7VHj3xNuWu',
                  price: '6,000',
                  quantity: '5',
                  description: 'design with famous designer from Italy and made with most finnest materials. ',
                },
                {
                  id: 3,
                  Mcid:4,
                  Scid: 8,
                  name: ' JSON Tennis racket',
                  img: 'https://drive.google.com/uc?id=1yGneStfUshqQgEbLBGubXFyEFNu5KXbq',
                  price: '3,000',
                  quantity: '5',
                  description: 'You can be a pro with this racket even you are not a pro',
                },
                {
                  id: 4,
                  Mcid:2,
                  Scid: 4,
                  name: ' Channel unique perfume',
                  img: 'https://drive.google.com/uc?id=1CLlWwbA3LKKxeiEAGRKMFVmctZWHrgAg',
                  price: '10,000',
                  quantity: '5',
                  description: 'Feels good with newest odor from channel',
                },
                {
                  id: 5,
                  Mcid:1,
                  Scid: 2,
                  name: ' Nintendo switch asia(Neon blue/Neon red)',
                  img: 'https://drive.google.com/uc?id=1v-QWGntLUwnQBYdWN6NgR7WZhqkSHp5m',
                  price: '15,000',
                  quantity: '5',
                  description: 'Newest game machine from famous nintendo company',
                },
                {
                  id: 6,
                  Mcid:3,
                  Scid: 5,
                  name: ' UNIQUE dress',
                  img: 'https://drive.google.com/uc?id=1ObPqEPNjKqqYjs3ljevNFj0a1DiXX5zO',
                  price: '10,000',
                  quantity: '5',
                  description: 'Good dress from famous shirt company UNIQUE',
                },
                {
                  id: 7,
                  Mcid:1,
                  Scid: 1,
                  name: 'ASUS ROG STRIX',
                  img: 'https://drive.google.com/uc?id=1SL5oZmkIWuT2zBLQLHU-BB9Iino4ZMQi',
                  price: '10,000',
                  quantity: '5',
                  description: 'Best computer of 2019 with super high spec for gamers',
                },
                {
                  id: 8,
                  Mcid:3,
                  Scid: 6,
                  name: 'Gold bracelet',
                  img: 'https://drive.google.com/uc?id=1CZBKyUZcy3PiibQAmHSVK6SlYPktB7Fx',
                  price: '10,000',
                  quantity: '5',
                  description: 'made with 100% gold',
                },
                {
                  id: 9,
                  Mcid:1,
                  Scid: 2,
                  name: 'Zelda brerath of the wild Z3',
                  img: 'https://drive.google.com/uc?id=1gR0XLODA4laT6jBUx7yCEcHYZf9UrEw0',
                  price: '1,700',
                  quantity: '5',
                  description: 'best game of 2018',
                },
                {
                  id: 10,
                  Mcid:1,
                  Scid: 2,
                  name: 'Playstation 4 pro 1TB',
                  img: 'https://drive.google.com/uc?id=1mL86T0F8nqsqb1Wyrq2EzycsLTAAzNi7',
                  price: '1,700',
                  quantity: '5',
                  description: 'Popular console machine of this year',
                },
                {
                  id: 11,
                  Mcid:1,
                  Scid: 3,
                  name: 'IPAD PRO 2019',
                  img: 'https://drive.google.com/uc?id=1nPf-mA0ppEqBcwmqVJi2jhSsyKkUxlPT',
                  price: '1,700',
                  quantity: '5',
                  description: 'Newest IPAD model from APPLE',
                },
                {
                  id: 12,
                  Mcid:1,
                  Scid: 2,
                  name: 'Figure Alteria Ryza ',
                  img: 'https://drive.google.com/uc?id=1sI5Nq-F7bZOgzRKLD3kLL3nxvQ5usqd8',
                  price: '1,700',
                  quantity: '5',
                  description: 'Famous game character from Ryza scorn & everdarkness ',
                },
              ]
        }
    }

    render() {
        return (
            <Row gutter={[16, 48]}>
                <Col>
                    <Card title={this.props.maincategory.name} headStyle={{ border: 'none' }} style={{ height: '400px' }}>
                        <Row gutter={16}>
                            {
                                this.state.products.filter(product => product.Mcid == this.props.maincategory.id).slice(0,4).map(product =>
                                    <Col span={6}>
                                        <Card cover={<img src={product.img} style={{ height: '300px', width: '300px' }} alt='bestseller1' />} bordered={false} bodyStyle={{ padding: "0" }} />
                                    </Col>
                                )}
                        </Row>
                    </Card>
                </Col>
            </Row>
        )
    }
}
