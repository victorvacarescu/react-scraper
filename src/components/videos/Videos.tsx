import React, { useState, useEffect } from "react";
import { DisplayItem } from '../../types';
import VideosTemplate from './VideosTemplate';

const Videos: React.FC = () => {
    const carouselItemsCount = Number(process.env.REACT_APP_CAROUSEL_ITEMS || 3);
    const paginationItemsCount = Number(process.env.REACT_APP_PAGINATION_ITEMS || 5);
    
    const [carouselItems, setCarouselItems] = useState<DisplayItem[]>([]);
    const [listItems, setListItems] = useState<DisplayItem[]>([]);
    const [page, setPage] = useState<number>(1);

    const fetchVideosItems = async (page: number, limit: number) => {
        try {
            const response = await fetch(`http://192.168.100.11:3000/videos?page=${page}&limit=${limit}`);
            const data = await response.json();
            return data.data;
        } catch (error) {
            console.error('Error fetching videos items:', error);
            return [];
        }
    };

    useEffect(() => {
        fetchVideosItems(1, carouselItemsCount).then(data => setCarouselItems(data));
        fetchVideosItems(page, paginationItemsCount).then(data => setListItems(prevItems => [...prevItems, ...data]));
    }, [page, carouselItemsCount, paginationItemsCount]);

    const loadMoreItems = () => {
        setPage(prevPage => prevPage + 1);
    };

    return <VideosTemplate carouselItems={carouselItems} listItems={listItems} loadMoreItems={loadMoreItems} />;
};

export default Videos;
