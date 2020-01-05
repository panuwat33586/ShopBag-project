import React, { Component } from 'react'
import { Row, Col, Button } from 'antd'

export default class CategorySelection extends Component {
    render() {
        return (
            <Row type='flex' align='middle' justify="center" style={{ marginLeft: '10%', marginRight: '10%', marginBottom: '10px' }}>
                <Col >
                    <Button type="link" icon="home" size={'large'} style={{ color: 'black', fontSize: '20px' }} href='/home'>HOME</Button>
                </Col>
                {this.props.maincategories.map(maincategory =>
                    <Col >
                        <Button type="link" icon={maincategory.icon} size={'large'} style={{ color: 'black', fontSize: '20px' }} href={`/maincategory/${maincategory.id}`} key={maincategory.id}>{maincategory.name}</Button>
                    </Col>
                )}
            </Row>
        )
    }
}
