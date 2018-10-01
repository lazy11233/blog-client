<template>
    <div id="detail">
        <section class="user-info">
            <img :src="user.avatar" :alt="user.username" :title="user.username">
            <h3>{{title}}</h3>
            <p><router-link :to="`/user/${user.id}`">{{user.username}}</router-link> 发布于{{createdAt | dateFormatter}}</p>
        </section>
        <section class="article" v-html="markdown">
        </section>
    </div>
</template>
<script src="./template.js"></script>
<style lang="less" src="./template.less"></style>

