<script>
import TopJumbo from '../components/sub-components/TopJumbo.vue'
import BottomJumbo from '../components/sub-components/BottomJumbo.vue'
import SectionInfo from '../components/sub-components/SectionInfo.vue'
import SectionNewsletter from '../components/sub-components/SectionNewsletter.vue'
import SectionContactUs from '../components/sub-components/SectionContactUs.vue'
export default {
    components: { TopJumbo, BottomJumbo, SectionInfo, SectionNewsletter, SectionContactUs },
    data() {
        return {

        }
    }
}
</script>

<template>
    <TopJumbo />
    <SectionInfo />
    <SectionNewsletter />
    <SectionContactUs />
    <BottomJumbo />
</template>

<style></style>