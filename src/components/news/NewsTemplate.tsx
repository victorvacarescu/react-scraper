import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { DisplayItem, PageTemplateProps } from '../../types';

const NewsTemplate: React.FC<PageTemplateProps> = ({ carouselItems, listItems, loadMoreItems }) => (
    <div>
        <h1>News Page</h1>

        <Carousel showArrows={true}>
            {carouselItems.map((item: DisplayItem) => (
                <div key={item.id}>
                    <img src={item.thumbnail} alt="news-thumbnail" />
                    <p className="legend">{item.title}</p>
                </div>
            ))}
        </Carousel>

        <div>
            {listItems.map((item: DisplayItem) => (
                <div key={item.id}>
                </div>
            ))}
        </div>
        <button onClick={loadMoreItems}>Load More</button>
    </div>
);

export default NewsTemplate;
