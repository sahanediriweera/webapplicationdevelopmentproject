import create from 'zustand';
//import {devtools, persist } from 'zustand/middleware';

const useStateManagement = create((set) => ({
    token: '',
    setToken: (tokernizer) => set(() => ({ token: tokernizer })),
  }))

export default useStateManagement;