<script setup lang="ts">
import PublicHeadLine from '@/modules/users/components/PublicHeadLine/PublicHeadLine.vue'
import WidgetGroup from '@/modules/reports/components/Widget/Group/Group.vue'
import WidgetCondensed from '@/modules/reports/components/Widget/Condensed/Condensed.vue'
</script>

<template>
  <PublicHeadLine />

  <WidgetGroup>
    <WidgetCondensed :value="10" label="Gists total" />
    <WidgetCondensed :value="5" label="Gists gratuitos" />
    <WidgetCondensed :value="5" label="Gists pagos" />
  </WidgetGroup>
</template>
