import {create} from 'zustand';

export interface ProductState {
  term: string;
  changeProduct: (term: string) => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const useProduct = create<ProductState>()((set, get) => ({
  term: '',

  changeProduct: (term: string) => {
    set({term});
  },
}));
