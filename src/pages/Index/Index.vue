<template>
    <div id="index">
        <section class="blog-posts">
            <router-link class="item" v-for="(blog,index) in blogs" :key="index" :to="`/detail/${blog.id}`">
                <figure class="avatar">
                    <img :src="blog.user.avatar" :alt="blog.user.username" :title="blog.user.username">
                    <figcaption>{{blog.user.username}}</figcaption>
                </figure>
                <h3>{{blog.title}}<span>{{blog.createdAt | dateFormatter}}</span></h3>
                <p>{{blog.description}}</p>
            </router-link>
        </section>
        <section class="pagination">
            <el-pagination layout="prev,pager,next" :total="total" @current-change="onPageChange">

            </el-pagination>
        </section>
    </div>
</template>
<script src="./template.js"></script>
<style scoped lang="less" src="./template.less"></style>

