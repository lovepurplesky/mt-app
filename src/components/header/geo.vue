<template>
<div class="m-geo">
    <div class="position">
        <i class="el-icon-location"></i>
        北京
        <router-link :to="{name: 'changeCity'}" class='changeCity'>
            切换城市
            </router-link>
            [
            <a href="#">大厂回族自治县</a>
            <a href="#">廊坊</a>
            <a href="#">固安县</a>
            ]
    </div>
    <div class="m-user">
        <router-link :to="{name: 'login'}" class='login' >
            立即登录
        </router-link>
         <router-link :to="{name: 'register'}" class='register' >
             注册
             </router-link>
    </div>
</div>

</template>

<script>
export default {

}
</script>

