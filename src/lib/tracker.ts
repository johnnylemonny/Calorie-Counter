import { demoEntries, featuredFoodCatalog, mealMeta } from '@/data/foods'
import type {
  Entry,
  FoodItem,
  FoodSnapshot,
  MealKey,
  MealSummary,
  RecentFood,
} from '@/types'

function round(value: number) {
  return Math.round(value * 10) / 10
}

export function createFoodSnapshot(food: FoodItem): FoodSnapshot {
  return {
    sourceId: food.id,
    name: food.name,
    servingLabel: food.servingLabel,
    calories: food.calories,
    macros: food.macros,
    note: food.note,
  }
}

export function createEntry(input: {
  meal: MealKey
  quantity: number
  food: FoodSnapshot
}): Entry {
  const quantity = round(input.quantity)

  return {
    id: crypto.randomUUID(),
    meal: input.meal,
    quantity,
    food: input.food,
    totalCalories: Math.round(input.food.calories * quantity),
    createdAt: new Date().toISOString(),
  }
}

export function toRecentFood(food: FoodSnapshot): RecentFood {
  return {
    ...food,
    usedAt: new Date().toISOString(),
  }
}

export function getDailyTotals(entries: Entry[], dailyTarget: number) {
  const consumed = entries.reduce((sum, entry) => sum + entry.totalCalories, 0)
  const remaining = dailyTarget - consumed
  const progress = dailyTarget > 0 ? Math.min(consumed / dailyTarget, 1.4) : 0

  return { consumed, remaining, progress }
}

export function getMealSummaries(entries: Entry[]): MealSummary[] {
  return Object.entries(mealMeta).map(([key, meta]) => {
    const mealEntries = entries
      .filter((entry) => entry.meal === key)
      .toSorted((left, right) => right.createdAt.localeCompare(left.createdAt))

    return {
      key: key as MealKey,
      label: meta.label,
      description: meta.description,
      entries: mealEntries,
      totalCalories: mealEntries.reduce((sum, entry) => sum + entry.totalCalories, 0),
    }
  })
}

export function formatMacroSummary(macros?: FoodSnapshot['macros']) {
  if (!macros) {
    return 'Calories only'
  }

  return `${macros.protein}P • ${macros.carbs}C • ${macros.fat}F`
}

export function getFoodById(foodId: string) {
  return featuredFoodCatalog.find((item: FoodItem) => item.id === foodId) ?? null
}

export function buildDemoEntries() {
  return demoEntries
    .map(({ meal, sourceId, quantity }) => {
      const food = getFoodById(sourceId)

      if (!food) {
        return null
      }

      return createEntry({
        meal,
        quantity,
        food: createFoodSnapshot(food),
      })
    })
    .filter((entry): entry is Entry => entry !== null)
}
