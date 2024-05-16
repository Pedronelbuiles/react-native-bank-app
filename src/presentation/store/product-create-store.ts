import {create} from 'zustand';

export interface ProductCreateState {
  id?: string;
  name?: string;
  description?: string;
  logo?: string;
  release?: string;
  revision?: string;

  idError?: boolean;
  nameError?: boolean;
  descriptionError?: boolean;
  logoError?: boolean;
  liverationError?: boolean;
  revisionError?: boolean;

  idErrorMessage?: string;
  nameErrorMessage?: string;
  descriptionErrorMessage?: string;
  logoErrorMessage?: string;
  liverationErrorMessage?: string;
  revisionErrorMessage?: string;

  changeProductCreate: (
    id?: string,
    name?: string,
    description?: string,
    logo?: string,
    release?: string,
    revision?: string,

    idError?: boolean,
    nameError?: boolean,
    descriptionError?: boolean,
    logoError?: boolean,
    liverationError?: boolean,
    revisionError?: boolean,

    idErrorMessage?: string,
    nameErrorMessage?: string,
    descriptionErrorMessage?: string,
    logoErrorMessage?: string,
    liverationErrorMessage?: string,
    revisionErrorMessage?: string,
  ) => void;
}

export const useProductCreateStore = create<ProductCreateState>()(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (set, get) => ({
    id: '',
    name: '',
    description: '',
    logo: '',
    release: '',
    revision: '',

    idError: false,
    nameError: false,
    descriptionError: false,
    logoError: false,
    liverationError: false,
    revisionError: false,

    idErrorMessage: '',
    nameErrorMessage: '',
    descriptionErrorMessage: '',
    logoErrorMessage: '',
    liverationErrorMessage: '',
    revisionErrorMessage: '',

    changeProductCreate: (
      id?: string,
      name?: string,
      description?: string,
      logo?: string,
      release?: string,
      revision?: string,

      idError?: boolean,
      nameError?: boolean,
      descriptionError?: boolean,
      logoError?: boolean,
      liverationError?: boolean,
      revisionError?: boolean,

      idErrorMessage?: string,
      nameErrorMessage?: string,
      descriptionErrorMessage?: string,
      logoErrorMessage?: string,
      liverationErrorMessage?: string,
      revisionErrorMessage?: string,
    ) => {
      set({
        id,
        name,
        description,
        logo,
        release,
        revision,
        idError,
        nameError,
        descriptionError,
        logoError,
        liverationError,
        revisionError,
        idErrorMessage,
        nameErrorMessage,
        descriptionErrorMessage,
        logoErrorMessage,
        liverationErrorMessage,
        revisionErrorMessage,
      });
    },
  }),
);
