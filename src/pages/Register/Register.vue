<template>
    <div id="login">
        <h4>用户名</h4>
        <input type="text" v-model="username" placeholder="请输入用户名">
        <h4>密码</h4>
        <input type="password" v-model="password" placeholder="请输入密码" @keyup.enter="onRegister">
        <br>
        <el-button size="medium" @click="onRegister">立即注册</el-button>
    </div>
</template>
<script src="./template.js"></script>
<style lang="less" src="./template.less"></style>