<script>

  import TextType from './TextType.vue'
  import { QuestionType } from '../../models/QuestionModel'

  export default {
    extends: TextType,
    name: QuestionType.Url,
    data() {
      return {
        inputType: 'url'
      }
    },
    methods: {
      fixAnswer(answer) {
        if (answer && answer.indexOf('://') === -1) {
          // Insert https protocol to make it easier to enter
          // correct URLs
          answer = 'https://' + answer
        }

        return answer
      },

      validate() {
        if (this.hasValue) {
          try {
            new URL(this.fixAnswer(this.dataValue))

            return true
          } catch(_) { 
            // Invalid URL
            return false
          }
        }

        return !this.question.required
      }
    }
  }
</script>