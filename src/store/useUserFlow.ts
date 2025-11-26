import { create } from "zustand";

interface UserFlowState {
  avatar: string | null;
  plan: string | null;
  messenger: string | null;

  setAvatar: (v: string) => void;
  setPlan: (v: string) => void;
  setMessenger: (v: string) => void;
}

export const useUserFlow = create<UserFlowState>((set) => ({
  avatar: null,
  plan: null,
  messenger: null,

  setAvatar: (v) => set({ avatar: v }),
  setPlan: (v) => set({ plan: v }),
  setMessenger: (v) => set({ messenger: v }),
}));
