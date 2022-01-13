export interface IAnswer {
  answer: string
}

export interface IQuestion {
  question: string,
  answers: IAnswer[]
}

export interface IProduct {
  id: string,
  name: string,
  description: string
  image: string,
  link: string,
  email: string,
  questions: IQuestion[],
  success:
  {
    title: string
    description: string
  },
}

export interface IData {
  products: IProduct[]
}

export type ProductProps = {
  product: IProduct
}