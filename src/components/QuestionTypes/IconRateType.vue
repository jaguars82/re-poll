<script>

  import OpinionScaleType from './OpinionScaleType.vue'
  import { QuestionType } from '../../models/QuestionModel'

  export default {
    extends: OpinionScaleType,
    name: QuestionType.IconRate,

    data() {
      return {
        isIconScale: true
      }
    },
  }
</script>