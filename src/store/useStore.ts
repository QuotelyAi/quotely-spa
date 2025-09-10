import { create } from 'zustand';

interface CalculatorData {
  numAgents: number;
  quotesPerAgent: number;
  conversionRate: number;
  averagePremium: number;
  commissionRate: number;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

interface AppStore {
  calculatorData: CalculatorData;
  formData: FormData;
  selectedPlan: string | null;
  isLoading: boolean;
  
  setCalculatorData: (data: Partial<CalculatorData>) => void;
  setFormData: (data: Partial<FormData>) => void;
  setSelectedPlan: (plan: string | null) => void;
  setLoading: (loading: boolean) => void;
  resetCalculator: () => void;
  resetForm: () => void;
}

const defaultCalculatorData: CalculatorData = {
  numAgents: 1,
  quotesPerAgent: 17,
  conversionRate: 20,
  averagePremium: 1600,
  commissionRate: 12.5,
};

const defaultFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  company: '',
  message: '',
};

const useStore = create<AppStore>((set) => ({
  calculatorData: defaultCalculatorData,
  formData: defaultFormData,
  selectedPlan: null,
  isLoading: false,
  
  setCalculatorData: (data) =>
    set((state) => ({
      calculatorData: { ...state.calculatorData, ...data },
    })),
    
  setFormData: (data) =>
    set((state) => ({
      formData: { ...state.formData, ...data },
    })),
    
  setSelectedPlan: (plan) => set({ selectedPlan: plan }),
  
  setLoading: (loading) => set({ isLoading: loading }),
  
  resetCalculator: () => set({ calculatorData: defaultCalculatorData }),
  
  resetForm: () => set({ formData: defaultFormData }),
}));

export default useStore;