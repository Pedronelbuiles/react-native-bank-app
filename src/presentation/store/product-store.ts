import {create} from 'zustand';

export interface ProductState {
  term: string;
  reload: boolean;
  changeProduct: (term: string) => void;
  changeReload: (reload: boolean) => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const useProduct = create<ProductState>()((set, get) => ({
  term: '',
  reload: false,

  changeProduct: (term: string) => {
    set({term});
  },
  changeReload: (reload: boolean) => {
    set({reload});
  },
}));
