import rawFoodCatalog from '@/data/foods.json'
import type { FoodItem, MealKey } from '@/types'

export const mealMeta: Record<MealKey, { label: string; description: string }> = {
  breakfast: {
    label: 'Breakfast',
    description: 'Start with steady energy and a clear plan.',
  },
  lunch: {
    label: 'Lunch',
    description: 'Keep the middle of the day balanced and focused.',
  },
  dinner: {
    label: 'Dinner',
    description: 'Wrap up the day without losing momentum.',
  },
  snacks: {
    label: 'Snacks',
    description: 'Small extras that still deserve visibility.',
  },
}

export const targetPresets = [1600, 2000, 2400]

export const foodCatalog = rawFoodCatalog as FoodItem[]

export const demoEntries = [
  { meal: 'breakfast', sourceId: 'overnight-oats', quantity: 1 },
  { meal: 'breakfast', sourceId: 'banana', quantity: 1 },
  { meal: 'lunch', sourceId: 'chicken-rice-bowl', quantity: 1 },
  { meal: 'snacks', sourceId: 'protein-shake', quantity: 1 },
  { meal: 'dinner', sourceId: 'salmon-potatoes', quantity: 1 },
] as const
