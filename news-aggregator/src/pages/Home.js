import React, { useEffect, useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import captureImage from '../assets/img/Capture.JPG';
import newsFavIcon from '../assets/img/faviconV2.png';
import Dropdown from 'react-bootstrap/Dropdown';
import { fetchFromNewsAPI } from '../services/apiService';

const Home = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getArticles = async () => {
            setLoading(true);
            const results = await fetchFromNewsAPI();
            setArticles(results.data.articles);
            setLoading(false);
        };

        getArticles();
    }, []);


    const timeAgo = (dateString) => {
        const now = new Date();
        const publishedDate = new Date(dateString);
        const differenceInSeconds = Math.floor((now - publishedDate) / 1000);
    
        const minutes = Math.floor(differenceInSeconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
    
        if (minutes < 1) {
            return 'Just now';
        } else if (minutes < 60) {
            return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
        } else if (hours < 24) {
            return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
        } else {
            return `${days} day${days !== 1 ? 's' : ''} ago`;
        }
    };

    return (
        <div className='homeMain'>
            <div className='row topDaily'>
                <h2>Your briefing</h2>
                <p>Monday, 12 August</p>
                <Row>
                    <Col md={8} xs={12}>
                        <div className='cardMain'>
                            <h2>Top stories</h2>
                            <Row>
                                <Col xl={4} lg={6} md={12} sm={12} xs={6} className='cardMainLeft'>
                                    <img src={captureImage} alt="Capture" />
                                    <h3>Iconic Statue Of Pakistan Army's 1971 Surrender Vandalised In Bangladesh</h3>
                                    <p>2 hours ago <span>. Abhimanyu Kulkarni</span></p>
                                </Col>
                                <Col xl={8} lg={6} md={12} sm={12} xs={6} className='cardMainRight'>
                                    {loading ? (
                                        <p>Loading...</p>
                                    ) : (
                                        articles?.length > 0 ? (
                                            articles.map((article, index) => (
                                                index < 3 && (
                                                    <Col key={index} className='cardMainRightBlock'>
                                                        <Col md={12} xs={12} className='cardMainRightBlock1'>
                                                            <img src={article.urlToImage} width={16} height={16}
                                                            onError={({ currentTarget }) => {
                                                                currentTarget.onerror = null; // prevents looping
                                                                currentTarget.src=newsFavIcon;
                                                              }}
                                                             alt="Icon" /><p>{article.source.name}</p>
                                                        </Col>
                                                        <Col className='cardMainRightBlock2'>
                                                            <p>{article.title}</p>
                                                        </Col>
                                                        <Col>
                                                            <span>{timeAgo(article.publishedAt)}</span>
                                                        </Col>
                                                    </Col>
                                                )
                                            ))
                                        ) : (
                                            <p>No articles available</p>
                                        )
                                    )}
                                   
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col md={4} xs={12}>
                        <div className='cardMain cardMainRight'>
                            <h2>Picks for you</h2>
                            <p>Sign in for personalised stories in your briefing and news feed</p>
                            <Button>Sign in</Button>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className='row topDaily'>
                <h2>More news</h2>
                <p>Sign in to get stories based on your interests</p>
                <Row>
                    <Col md={10} xs={12}>
                        <div className='cardMain'>
                            <h2>Top stories</h2>
                            <Row>
                                
                                <Col xl={4} lg={6} md={12} sm={12} xs={6} className='cardMainLeft'>
                                    <img src={captureImage} alt="Capture" />
                                    <h3>Iconic Statue Of Pakistan Army's 1971 Surrender Vandalised In Bangladesh</h3>
                                    <p>2 hours ago <span>. Abhimanyu Kulkarni</span></p>
                                </Col>
                                <Col xl={8} lg={6} md={12} sm={12} xs={6} className='cardMainRight'>
                                    <Col className='cardMainRightBlock'>
                                        <Col md={12} xs={12} className='cardMainRightBlock1'>
                                            <img src={newsFavIcon} /><p>SAMAA</p>
                                        </Col>
                                        <Col className='cardMainRightBlock2'>
                                            <p>Sheikh Hasina blames US of plotting her ouster</p>
                                        </Col>
                                        <Col>
                                            <span>18 hours ago</span>
                                        </Col>
                                    </Col>
                                    <Col className='cardMainRightBlock'>
                                        <Col md={12} xs={12} className='cardMainRightBlock1'>
                                            <img src={newsFavIcon} /><p>SAMAA</p>
                                        </Col>
                                        <Col className='cardMainRightBlock2'>
                                            <p>Sheikh Hasina blames US of plotting her ouster</p>
                                        </Col>
                                        <Col>
                                            <span>18 hours ago</span>
                                        </Col>
                                    </Col>
                                    <Col className='cardMainRightBlock'>
                                        <Col md={12} xs={12} className='cardMainRightBlock1'>
                                            <img src={newsFavIcon} /><p>SAMAA</p>
                                        </Col>
                                        <Col className='cardMainRightBlock2'>
                                            <p>Sheikh Hasina blames US of plotting her ouster</p>
                                        </Col>
                                        <Col>
                                            <span>18 hours ago</span>
                                        </Col>
                                    </Col>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Home;