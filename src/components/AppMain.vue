<script>
import TopJumbo from '../components/sub-components/TopJumbo.vue'
import BottomJumbo from '../components/sub-components/BottomJumbo.vue'
import SectionInfo from '../components/sub-components/SectionInfo.vue'
import SectionNewsletter from '../components/sub-components/SectionNewsletter.vue'
import SectionContactUs from '../components/sub-components/SectionContactUs.vue'
import DevelopmentCourses from './sub-components/DevelopmentCourses.vue'
export default {
    components: { TopJumbo, BottomJumbo, SectionInfo, SectionNewsletter, SectionContactUs, DevelopmentCourses },
    data() {
        return {

        }
    }
}
</script>

<template>
    <main>
        <TopJumbo />
        <SectionInfo />
        <DevelopmentCourses />
        <SectionNewsletter />
        <SectionContactUs />
        <BottomJumbo />
    </main>
</template>

<style></style>