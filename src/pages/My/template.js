import blog from '@/api/blog'
import { mapGetters } from 'vuex'

export default {
    name: 'user',
    data() {
        return {
            blogs: [],
            page: 1,
            total: 0
        }
    },
    computed: {
        ...mapGetters(['user'])
    },
    created() {
        this.page = parseInt(this.$route.query.page) || 1;
        blog.getBlogsByUserId(this.user.id, { page: this.page })
            .then(res => {
                this.blogs = res.data;
                this.total = res.total;
                this.page = res.page;
            })
    },
    methods: {
        splitDate(dateStr) {
            let dateObj = typeof dateStr === 'object' ? dateStr : new Date(dateStr);
            return {
                date: dateObj.getDate(),
                month: dateObj.getMonth() + 1,
                year: dateObj.getFullYear()
            }
        },
        onPageChange(newPage) {
            blog.getBlogsByUserId(this.user.id, { page: newPage }).then(res => {
                this.blogs = res.data;
                this.total = res.total;
                this.page = res.page;
                this.$router.push({ path: `/my/`, query: { page: newPage } });
            })
        },
        async onDelete(blogId) {
            //首先确认是否删除blog，再发出请求删除该blog。
            await this.$confirm('次操作将永久删除该blog，是否继续？', '提示', {
                confirmButtonText: '确定',
                cancleButtonText: '取消',
                type: 'warning'
            }).then(() => {
                blog.deleteBlog({ blogId }).then(() => {
                    this.$message.success('删除成功')
                    this.blogs = this.blogs.filter(blog => {
                        blog.id != blogId
                    });
                })
            })
        }
    }
}