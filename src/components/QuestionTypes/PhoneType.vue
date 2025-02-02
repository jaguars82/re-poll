<script>

  import TextType from './TextType.vue'
  import LanguageModel from '../../models/LanguageModel'
  import { QuestionType } from '../../models/QuestionModel'
  
  export default {
    extends: TextType,
    name: QuestionType.Phone,
    data() {
      return {
        inputType: 'tel', 
        canReceiveFocus: true
      }
    }
  }
</script>