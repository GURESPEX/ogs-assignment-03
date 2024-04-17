export interface News {
    title: string;
    sub_title: string;
    type_new: TypeNew[];
}

export interface TypeNew {
    id: number;
    name: string;
    news_type: NewsType[];
}

export interface NewsType {
    id: number;
    headline: string;
    content: string;
    date: string;
    time: string;
    category: string;
    publisher: string;
}