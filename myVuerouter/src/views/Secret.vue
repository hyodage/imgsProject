<template>
    <div>
        <div>{{ secret }}</div>
    </div>
</template>

<script>
    export default {
        props: {
            secret: {
                type: String,
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>