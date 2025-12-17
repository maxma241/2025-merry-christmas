import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export interface SurveyAnswer {
  happinessHighlight: string
  lovesMusic: string
}

export const useSurveyStore = defineStore('survey', () => {
  const answers = useLocalStorage<SurveyAnswer>('survey-answers', {
    happinessHighlight: 'I\'m Happy.',
    lovesMusic: '超級喜歡！'
  })

  const furthestStep = useLocalStorage<number>('survey-progress', 0)

  function markStep(stepIndex: number) {
    furthestStep.value = Math.max(furthestStep.value, stepIndex)
  }

  function reset() {
    answers.value = {
      happinessHighlight: '',
      lovesMusic: '超級喜歡！'
    }
    furthestStep.value = 0
  }

  return {
    answers,
    furthestStep,
    markStep,
    reset
  }
})
