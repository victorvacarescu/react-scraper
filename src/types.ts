export type DisplayItem = {
    id: number;
    title: string;
    thumbnail: string;
    description?: string;
    link?: string;
    publishDate?: string;
};

export type PageTemplateProps = {
    carouselItems: DisplayItem[];
    listItems: DisplayItem[];
    loadMoreItems: () => void;
};
