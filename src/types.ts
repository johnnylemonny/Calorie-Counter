export const mealOrder = ['breakfast', 'lunch', 'dinner', 'snacks'] as const

export type MealKey = (typeof mealOrder)[number]
export type ThemePreference = 'system' | 'light' | 'dark'

export interface MacroSet {
  protein: number
  carbs: number
  fat: number
}

export interface FoodItem {
  id: string
  name: string
  category: string
  mealHints: MealKey[]
  servingLabel: string
  calories: number
  macros?: MacroSet
  note?: string
}

export interface FoodSnapshot {
  sourceId?: string
  name: string
  servingLabel: string
  calories: number
  macros?: MacroSet
  note?: string
}

export interface Entry {
  id: string
  meal: MealKey
  quantity: number
  food: FoodSnapshot
  totalCalories: number
  createdAt: string
}

export interface RecentFood extends FoodSnapshot {
  usedAt: string
}

export interface AppSettings {
  dailyTarget: number
  themePreference: ThemePreference
  dismissedOnboarding: boolean
  demoLoaded: boolean
}

export interface TrackerState {
  settings: AppSettings
  entries: Entry[]
  recentFoods: RecentFood[]
  favoriteFoodIds: string[]
}

export interface MealSummary {
  key: MealKey
  label: string
  description: string
  entries: Entry[]
  totalCalories: number
}
