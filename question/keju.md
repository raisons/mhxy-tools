<script setup>
import Question from '../components/Question.vue'
import {keju} from '../data/question.json'
</script>

# 科举答题

## 答题器
<Question :data="keju" />