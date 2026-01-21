import { create } from "zustand";

interface Prize {
    id: string | number;
    label: string;
    value: string;
}

interface GlobalState {
    // State
    snackbar: {
        open: boolean;
        message: string;
        variant: "success" | "error" | "info" | "warning";
    }
    
    // Actions (Hàm cập nhật state)
    openSnackbar: (message: string, variant: "success" | "error" | "info" | "warning") => void;
    closeSnackbar: () => void;
    histories: Prize[];
    addHistory: (prize: any) => void;
}

export const useGlobalState = create<GlobalState> ((set) => ({
    snackbar: {
        open: false,
        message: '',
        variant: 'success'
    },

    openSnackbar: (message, variant) => set((state) => ({
        snackbar: {
            ...state.snackbar,
            open: true,
            message,
            variant
        }
    })),

    closeSnackbar: () => set((state) => ({
        snackbar: {
            ...state.snackbar,
            open: false
        }
    })),

    histories: JSON.parse(localStorage.getItem('rewardHistories') ?? '[]'),

    addHistory: (prize: any) => set((state: any) => {
        const newHistory = { ...prize, wonAt: new Date().toISOString() };
        const updatedHistory = [newHistory, ...state.histories].slice(0, 10);

        localStorage.setItem('rewardHistories', JSON.stringify(updatedHistory));

        return { histories: updatedHistory };
    }),
}))