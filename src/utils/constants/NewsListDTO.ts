export type NewListDTO={
    id:number 
    title:string 
    img:string 
    autherImg:string
    description:string
    readTime:string 
    publishedDate:string
}
export interface ArticleSourcee {
    id:string|null
    name:string|null
}
export interface Article {
    source: ArticleSourcee
    author: string | null,
    title: string | null,
    description: string | null,
    url: string,
    urlToImage: string,
    publishedAt: Date,
    content: string | null,
}