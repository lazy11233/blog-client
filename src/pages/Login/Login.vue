<template>
    <div id="login">
        <h4>用户名</h4>
        <input type="text" v-model="username" placeholder="请输入用户名">
        <h4>密码</h4>
        <input type="password" v-model="password" placeholder="请输入密码" @keyup.enter="onLogin">
        <br>
        <el-button size="medium" @click="onLogin" >立即登录</el-button>
        <p class="notice">没有账号？<router-link to="/register">立即注册新用户</router-link></p>
    </div>
</template>
<script src="./template.js"></script>
<style lang="less" src="./template.less"></style>

