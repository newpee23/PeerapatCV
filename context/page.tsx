"use client";
import React, { createContext, useContext, useState } from "react";

type Language = "EN" | "TH"; // Define available languages

type ContextType = {
    language: Language;
    setLanguage: React.Dispatch<React.SetStateAction<Language>>;
};

const defaultLanguage: Language = "EN"; // Default language

const AppContext = createContext<ContextType>({
    language: defaultLanguage,
    setLanguage: () => {} // Dummy setter function
});

export const AppWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>(defaultLanguage);
    
    return (
        <AppContext.Provider value={{ language, setLanguage }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = (): ContextType => {
    return useContext(AppContext);
};
