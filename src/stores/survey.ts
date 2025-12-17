import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export interface SurveyAnswer {
  happinessHighlight: string
  lovesMusic: string
}

export type SurveyStage = 'intro' | 'q1' | 'q2' | 'complete'

export const useSurveyStore = defineStore('survey', () => {
  const stage = useLocalStorage<SurveyStage>('survey-stage', 'intro')
  const answers = useLocalStorage<SurveyAnswer>('survey-answers', {
    happinessHighlight: '',
    lovesMusic: '超級喜歡！'
  })

  function reset() {
    stage.value = 'intro'
    answers.value = {
      happinessHighlight: '',
      lovesMusic: '超級喜歡！'
    }
  }

  return {
    stage,
    answers,
    reset
  }
})
