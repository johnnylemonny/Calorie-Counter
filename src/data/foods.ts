import curatedFoodCatalog from '@/data/foods.json'
import generatedFoodCatalogUrl from '@/data/foods.generated.json?url'
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

function uniqueFoods(items: FoodItem[]) {
  const seen = new Map<string, FoodItem>()

  for (const food of items) {
    const signature = `${food.name.toLowerCase()}|${food.servingLabel.toLowerCase()}|${food.calories}|${food.category.toLowerCase()}`

    if (!seen.has(signature)) {
      seen.set(signature, food)
    }
  }

  return Array.from(seen.values())
}

export function mergeFoodCatalogs(...catalogs: FoodItem[][]) {
  return uniqueFoods(catalogs.flat())
}

export const featuredFoodCatalog = curatedFoodCatalog as FoodItem[]
export { generatedFoodCatalogUrl }

export const demoEntries = [
  { meal: 'breakfast', sourceId: 'overnight-oats', quantity: 1 },
  { meal: 'breakfast', sourceId: 'banana', quantity: 1 },
  { meal: 'lunch', sourceId: 'chicken-rice-bowl', quantity: 1 },
  { meal: 'snacks', sourceId: 'protein-shake', quantity: 1 },
  { meal: 'dinner', sourceId: 'salmon-potatoes', quantity: 1 },
] as const
