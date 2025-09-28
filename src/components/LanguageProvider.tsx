import { createContext, useContext, useState, useCallback, useMemo } from "react"
import esTranslations from "../locales/es.json"
import enTranslations from "../locales/en.json"

type Language = "es" | "en"

type LanguageProviderProps = {
  children: React.ReactNode
  defaultLanguage?: Language
}

type LanguageProviderState = {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string, fallback?: string) => string
}

const translations = {
  es: esTranslations,
  en: enTranslations
}

const initialState: LanguageProviderState = {
  language: "es",
  setLanguage: () => null,
  t: () => "",
}

const LanguageProviderContext = createContext<LanguageProviderState>(initialState)

export function LanguageProvider({
  children,
  defaultLanguage = "es",
  ...props
}: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>(
    () => (localStorage.getItem("language") as Language) || defaultLanguage
  )

  const t = useCallback((key: string, fallback?: string): string => {
    const keys = key.split('.')
    let value: any = translations[language]

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        return fallback || key
      }
    }

    return typeof value === 'string' ? value : fallback || key
  }, [language])

  const setLanguage = useCallback((newLanguage: Language) => {
    localStorage.setItem("language", newLanguage)
    setLanguageState(newLanguage)
  }, [])

  const value = useMemo(() => ({
    language,
    setLanguage,
    t,
  }), [language, setLanguage, t])

  return (
    <LanguageProviderContext.Provider {...props} value={value}>
      {children}
    </LanguageProviderContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageProviderContext)

  if (context === undefined)
    throw new Error("useLanguage must be used within a LanguageProvider")

  return context
}