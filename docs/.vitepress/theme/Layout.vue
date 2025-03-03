<template>
  <div>
    <Content />
    <!-- 在页面底部插入广告 -->
    <div class="adsense-container">
      <ins
        class="adsbygoogle"
        style="display: block"
        data-ad-client="ca-pub-4173113313418612"
        data-ad-slot="6608465638"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  (adsbygoogle = window.adsbygoogle || []).push({});
});
</script>

<style>
/* 为广告容器添加样式 */
.adsense-container {
  margin: 20px 0;
  display: flex;
  justify-content: center;
}
</style>
