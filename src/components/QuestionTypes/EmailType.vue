<script>

  import TextType from './TextType.vue'
  import { QuestionType } from '../../models/QuestionModel'

  export default {
    extends: TextType,
    name: QuestionType.Email,
    data() {
      return {
        inputType: 'email'
      }
    },
    methods: {
      validate() {
        if (this.hasValue) {
          return /^[^@]+@.+[^.]$/.test(this.dataValue)
        }

        return !this.question.required
      }
    }
  }
</script>