<template>
  <div style="margin-bottom: 10px">
    <el-input v-model="search"
              style="max-width: 200px"
              placeholder="搜索"
              class="input-with-select">
      <template #append>
        <el-button :icon="Search"/>
      </template>
    </el-input>
  </div>
  <el-table class="vp-raw"
            border
            :data="filterTableData"
            :default-sort="{ prop: 'race', order: 'ascending' }"
            :row-class-name="tableRowClassName"
            style="width: 100%">
    <el-table-column prop="race" label="种族" align="center" width="180"
                     :filters="raceFilter"
                     :filter-method="filterHandler"/>
    <el-table-column prop="attribute" label="属性" align="center" width="180"/>
    <el-table-column label="1属性点转换效果" align="center">
      <el-table-column prop="blood" label="气血" align="center"/>
      <el-table-column prop="magic" label="魔法" align="center"/>
      <el-table-column prop="damage" label="伤害" align="center"/>
      <el-table-column prop="defense" label="防御" align="center"/>
      <el-table-column prop="speed" label="速度" align="center"/>
      <el-table-column prop="spirit" label="灵力" align="center"/>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import {computed, ref} from 'vue'
import {Search} from "@element-plus/icons-vue"
import {race} from "../data/race.json"

const search = ref('')
const filterTableData = computed(() =>
    race.filter(
        (data) =>
            !search.value ||
            data.race.toLowerCase().includes(search.value.toLowerCase()) ||
            data.attribute.toLowerCase().includes(search.value.toLowerCase())
    )
)

const tableRowClassName = ({row, rowIndex}: { row, rowIndex }) => {
  if (row.race === "魔族") {
    return 'warning-row'
  } else if (row.race === "仙族") {
    return 'success-row'
  }
  return ''
}

const raceFilter = [
  {text: "人族", value: "人族"},
  {text: "魔族", value: "魔族"},
  {text: "仙族", value: "仙族"},
]

const filterHandler = (value: string, row, column) => {
  const property = column['property']
  return row[property] === value
}
</script>

<style>
.el-table .warning-row {
  --el-table-tr-bg-color: var(--el-color-warning-light-9);
}

.el-table .success-row {
  --el-table-tr-bg-color: var(--el-color-success-light-9);
}
</style>
