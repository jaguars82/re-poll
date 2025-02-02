<script>

  import MultipleChoiceType from './MultipleChoiceType.vue'
  import { QuestionType } from '../../models/QuestionModel'

  export default {
    extends: MultipleChoiceType,
    name: QuestionType.MultiplePictureChoice,

    data() {
      return {
        hasImages: true
      }
    }
  }
</script>