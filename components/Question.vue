<template>
  <el-card style="max-width: 960px">
    <template #header>
      <el-input v-model="search"
                placeholder="请输入关键词查询"
                :prefix-icon="Search"
                style="max-width: 550px"
                size="large" @input="searchHandler"></el-input>
    </template>
    <div>
      <el-table :data="searchedData" class="vp-raw">
        <el-table-column label="类型" prop="type" width="120"></el-table-column>
        <el-table-column label="问题" min-width="300">
          <template #default="scope">
            <div v-html="scope.row.question"></div>
          </template>
        </el-table-column>
        <el-table-column label="答案" prop="answer" min-width="100">
          <template #default="scope">
            <el-space :spacer="spacer" :size="spaceSize">
              <span v-for="ans in scope.row.answer.split(',')" style="color: #0d6efd;font-weight: bold">
              {{ ans }}
              </span>
            </el-space>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </el-card>

</template>

<script setup>
import {ref, h} from "vue";
import {Search} from "@element-plus/icons-vue";
import {ElDivider} from 'element-plus'
import Fuse from "fuse.js";

const props = defineProps({
  data: {
    type: Object
  }
})

const search = ref('')
const spacer = h(ElDivider, { direction: 'vertical' })
const spaceSize = ref(1)

const fuseOptions = {
  // isCaseSensitive: false,
  includeScore: true,
  shouldSort: true,
  includeMatches: true,
  findAllMatches: true,
  // minMatchCharLength: 1,
  // location: 0,
  threshold: 0,
  // distance: 100,
  useExtendedSearch: true,
  ignoreLocation: true,
  // ignoreFieldNorm: false,
  // fieldNormWeight: 1,
  keys: [
    "question",
  ]
};

const fuse = new Fuse(props.data, fuseOptions);

const searchedData = ref([])

const searchHandler = (value) => {
  let s = [];
  fuse.search(value).forEach(function (v) {
    let q = v.item.question.replaceAll(value, `<span style='color:red;font-weight: bold'>${value}</span>`)
    s.push({
      type: v.item.type,
      question: q,
      answer: v.item.answer
    })
  })
  searchedData.value = s;
}

</script>