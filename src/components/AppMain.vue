<script>
import TopJumbo from '../components/sub-components/TopJumbo.vue'
import BottomJumbo from '../components/sub-components/BottomJumbo.vue'
import SectionInfo from '../components/sub-components/SectionInfo.vue'
import SectionNewsletter from '../components/sub-components/SectionNewsletter.vue'
import SectionContactUs from '../components/sub-components/SectionContactUs.vue'
import DevelopmentCourses from './sub-components/DevelopmentCourses.vue'
import RecentCourses from './sub-components/RecentCourses.vue'
import PopolarCourses from './sub-components/PopolarCourses.vue'
export default {
    components: { TopJumbo, BottomJumbo, SectionInfo, SectionNewsletter, SectionContactUs, DevelopmentCourses, RecentCourses, PopolarCourses },
    data() {
        return {

        }
    }
}
</script>

<template>
    <main>
        <TopJumbo />
        <DevelopmentCourses />
        <SectionInfo />
        <RecentCourses />
        <SectionNewsletter />
        <PopolarCourses />
        <SectionContactUs />
        <BottomJumbo />
    </main>
</template>

<style></style>