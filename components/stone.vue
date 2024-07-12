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
    <el-table-column prop="name" label="符石名称" align="center" width="180"/>
    <el-table-column prop="color" label="颜色" align="center" width="180"
                     :filters="colorFilter"
                     :filter-method="filterHandler"/>
    <el-table-column prop="level" label="等级" align="center"/>
    <!--    <el-table-column prop="desc" label="描述" align="center"/>-->
    <el-table-column prop="attr1" label="属性" align="center"/>
    <el-table-column prop="value1" label="属性值" align="center"/>
    <el-table-column prop="attr2" label="效果" align="center"/>
    <el-table-column prop="value2" label="效果值" align="center"/>
  </el-table>
</template>

<script lang="ts" setup>
import {computed, ref} from 'vue'
import {Search} from "@element-plus/icons-vue"
import {stone} from "../data/stone.json"

const search = ref('')
const filterTableData = computed(() =>
    stone.filter(
        (data) =>
            !search.value ||
            data.name.includes(search.value.toLowerCase()) ||
            data.color.includes(search.value.toLowerCase()) ||
            data.attr1.includes(search.value.toLowerCase()) ||
            data.attr2.includes(search.value.toLowerCase())
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

const colorFilter = [
  {text: "红", value: "红"},
  {text: "黄", value: "黄"},
  {text: "绿", value: "绿"},
  {text: "蓝", value: "蓝"},
  {text: "黑", value: "黑"},
  {text: "白", value: "白"},
  {text: "紫", value: "紫"},
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
