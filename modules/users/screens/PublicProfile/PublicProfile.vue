<script setup lang="ts">
import PublicHeadLine from '@/modules/users/components/PublicHeadLine/PublicHeadLine.vue'
import WidgetGroup from '@/modules/reports/components/Widget/Group/Group.vue'
import WidgetGroupLoader from '@/modules/reports/components/Widget/Group/Loader.vue'
import WidgetCondensed from '@/modules/reports/components/Widget/Condensed/Condensed.vue'
import GistsCardGroup from '@/modules/gists/components/Card/Group/Group.vue'
import GistsCardGroupLoader from '@/modules/gists/components/Card/Group/Loader.vue'
import GistsCardItem from '@/modules/gists/components/Card/Item/Item.vue'

const route = useRoute()
const router = useRouter()

const handleNavigateToDetail = (id: string) => {
  const { username } = route.params

  router.push(`/${username}/gist/${id}`)
}
</script>

<template>
  <PublicHeadLine />

  <WidgetGroup>
    <WidgetGroupLoader :loading="false" :amount="3">
      <WidgetCondensed :value="10" label="Gists total" />
      <WidgetCondensed :value="5" label="Gists gratuitos" />
      <WidgetCondensed :value="5" label="Gists pagos"
    /></WidgetGroupLoader>
  </WidgetGroup>

  <WidgetDefault title="Todos os gists">
    <GistsCardGroup>
      <GistsCardGroupLoader :loading="false">
        <GistsCardItem
          @tap="handleNavigateToDetail"
          id="1"
          title="useCurrentUser.ts"
          description="Hook para controlar o **usuário** logado"
          :price="15"
          lang="typescript"
        />
      </GistsCardGroupLoader>
    </GistsCardGroup>
  </WidgetDefault>
</template>
