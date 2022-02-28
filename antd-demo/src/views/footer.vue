<template>
    <div class="foot" :style="footStyle" >Copyright © 2022 Mr-A-Bit-Known All rights reserved</div>
</template>

<script>
export default {
    data() {
        return {
            footStyle :[{
                 lineHeight: 30 + 'px' 
            }]
        }
    }  
}
</script>

<style scoped>
.foot {
    font-size: 16px;
    color: rgb(0,21,41);
}
</style>