
export type DescriptionsType = {
    id:number;
    action: string;
    title: string;
    shortText: string;
    date: string;
    img: string;
    hashtag: string;
};
export type ArticlesType = {
    paragraph: string;
    text: Array<string>;
    img: string;
}[];