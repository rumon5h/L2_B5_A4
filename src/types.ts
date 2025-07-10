export interface IBook{
    _id: string;
    title: string;
    author: string;
    genre: string;
    isbn: string;
    copies: number;
    available: boolean;
    description: string
}

interface IBorrowItem{
    title: string,
    isbn: string
}
export interface iBorrow{
    totalQuantity: number,
    book: IBorrowItem

}
