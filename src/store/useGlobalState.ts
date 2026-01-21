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
    }))
}))