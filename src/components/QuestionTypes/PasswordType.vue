<script>

  import TextType from './TextType.vue'
  import { QuestionType } from '../../models/QuestionModel'

  export default {
    extends: TextType,
    name: QuestionType.Password,
    data() {
      return {
        inputType: 'password'
      }
    }
  }
</script>