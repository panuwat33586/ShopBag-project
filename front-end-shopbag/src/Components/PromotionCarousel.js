import React, { Component } from 'react'
import { Carousel,Card,Row,Col } from 'antd';
import styles from './PromotionCarousel.module.css'


export default class PromotionCarousel extends Component {
    render() {
        return (
          <Row gutter={[0,48]}>
            <Col>
          <Carousel autoplay>
              <Card cover={<img src='https://drive.google.com/uc?id=1xv3Z3mrTyvh9X9B_iI9sL8kPcKSumPOW' className={styles.carouselHeight} alt='carousel1'/>} bodyStyle={{ padding: "0"}} />
            <Card cover={<img src='https://drive.google.com/uc?id=14exP4qjJ6Pg3dIDCGwB7aztPjYX65nbC' className={styles.carouselHeight} alt='carousel2'/>} bodyStyle={{ padding: "0"}}/>
            <Card cover={<img src='https://drive.google.com/uc?id=1WYJVSQQZtcb2uqGTepiRR2oCXq0pWf8U' className={styles.carouselHeight} alt='carousel3'/>} bodyStyle={{ padding: "0"}}/>
            <Card cover={<img src='https://drive.google.com/uc?id=1UQpz95L3QDPYH6KIRegbeDzL6RKyRMZY' className={styles.carouselHeight} alt='carousel4'/>} bodyStyle={{ padding: "0"}}/>
          </Carousel>
          </Col>
          </Row>
            
        )
    }
}
