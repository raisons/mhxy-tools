<template>
  <div style="margin: 10px 0">
    <el-button type="primary">计算</el-button>
  </div>
  <el-tabs type="border-card" style="min-height: 320px">
    <el-tab-pane label="基础信息">
      <el-form :model="form" :inline="true" label-width="auto" style="max-width: 600px">
        <el-form-item label="等级" required>
          <el-input v-model="form.name" style="max-width: 150px"/>
        </el-form-item>
        <el-form-item label="种族" required>
          <el-select v-model="form.region" placeholder="选择种族" style="min-width: 150px">
            <el-option label="人族" value="shanghai"/>
            <el-option label="魔族" value="beijing"/>
            <el-option label="仙族" value="beijing"/>
          </el-select>
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="属性">
      <el-form :model="form" label-width="auto">
        <el-form-item label="体质" required>
          <el-input-number v-model="form.name"/>
        </el-form-item>
        <el-form-item label="魔力" required>
          <el-input-number v-model="form.name"/>
        </el-form-item>
        <el-form-item label="力量" required>
          <el-input-number v-model="form.name"/>
        </el-form-item>
        <el-form-item label="耐力" required>
          <el-input-number v-model="form.name"/>
        </el-form-item>
        <el-form-item label="敏捷" required>
          <el-input-number v-model="form.name"/>
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="技能">
      <el-form :model="form" :inline="true" label-width="auto" style="max-width: 600px">
        <el-form-item label="强身术" required>
          <el-input v-model="form.name" style="max-width: 150px"/>
        </el-form-item>
        <el-form-item label="冥想" required>
          <el-input v-model="form.name" style="max-width: 150px"/>
        </el-form-item>
        <el-form-item label="强壮" required>
          <el-input v-model="form.name" style="max-width: 150px"/>
        </el-form-item>
        <el-form-item label="神速" required>
          <el-input v-model="form.name" style="max-width: 150px"/>
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="坐骑">
      <el-form :model="form" label-width="auto">
        <el-form-item label="坐骑主属性" required>
          <el-input v-model="form.name"/>
        </el-form-item>
        <el-form-item label="坐骑成长" required>
          <el-input-number v-model="form.name" :precision="3" :step="0.001" :max="4"/>
        </el-form-item>
      </el-form>
    </el-tab-pane>
  </el-tabs>

  <el-card shadow="never" style="margin-top: 10px">
    <template #header>
      <div class="card-header">
        <span style="font-size: 10pt">人物面板模拟结果</span>
      </div>

      
    </template>
  </el-card>


</template>

<script lang="ts" setup>
import {reactive} from 'vue'

// do not use same name with ref
const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

const onSubmit = () => {
  console.log('submit!')
}
</script>
