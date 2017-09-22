<template>
  <div id="app" class="fillcontain">
    <div class="manage_page fillcontain">
      <el-row style="height: 100%;">

        <el-col :span="3" style="min-height: 100%; background-color: #324057;">

          <el-menu :default-active="defaultActive" style="min-height: 100%;" theme="dark" router>
            <template v-for="item in items">
              <template v-if="item.subs">
                <el-submenu :index="item.index">
                  <template slot="title">
                    <i :class="item.icon"></i>{{ item.title }}</template>
                  <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}
                  </el-menu-item>
                </el-submenu>
              </template>
              <template v-else>
                <el-menu-item :index="item.index">
                  <i :class="item.icon"></i>{{ item.title }}
                </el-menu-item>
              </template>
            </template>
          </el-menu>

        </el-col>
        <el-col :span="21" style="height: 100%;overflow: auto;">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

      items: [
        {
          icon: '',
          index: 'overview',
          title: '经营概览',
        },
        {
          icon: '',
          index: 'flowAnalysis',
          title: '流量分析',
        },
        {
          icon: '',
          index: 'business',
          title: '商品分析',
        },
        {
          icon: '',
          index: 'userPortrait',
          title: '用户画像',
        },
        {
          icon: '',
          index: 'service',
          title: '客服服务',
        }



      ]
    }

  },
  computed: {
    defaultActive: function() {
      var activeIndex = this.$route.path.replace('/', '');
      return activeIndex ? activeIndex : 'overview';
    }
  },

}
</script>

<style lang="less">
@import './style/common';
// @import './style/mixin';
.manage_page {}
</style>
