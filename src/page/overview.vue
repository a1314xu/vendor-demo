<template>
  <div>
    <head-top></head-top>
    <el-row style="margin-top: 20px;">
      <el-col :span="12" :offset="4">
        hello world
      </el-col>
    </el-row>
  </div>
</template>

<script>
import headTop from '@/components/headTop'
export default {
  data() {
    return {
    }
  },
  components: {
    headTop,
  }
}
</script>

<style lang="less">

</style>
