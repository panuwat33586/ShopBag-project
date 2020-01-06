import React, { Component } from 'react'
import { Row, Col, Button } from 'antd'
import {Link} from 'react-router-dom'

export default class CategorySelection extends Component {
    render() {
        return (
            <Row type='flex' align='middle' justify="center" style={{ marginLeft: '10%', marginRight: '10%', marginBottom: '10px' }}>
               
                <Col >
                    <Link to={'/home'}> <Button type="link" icon="home" size={'large'} style={{ color: 'black', fontSize: '20px' }} href='/home'>HOME</Button></Link>
                </Col>
                {this.props.maincategories.map(maincategory =>
                    <Col >
                    <Link to={`/maincategory/${maincategory.id}`} >
                        <Button type="link" icon={maincategory.icon} size={'large'} style={{ color: 'black', fontSize: '20px' }} key={maincategory.id}>{maincategory.name}</Button>
                    </Link>
                    </Col>
                )}
            </Row>
        )
    }
}
