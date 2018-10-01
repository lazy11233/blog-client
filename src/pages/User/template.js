import blog from '@/api/blog'

export default {
    name: 'user',
    data() {
        return {
            blogs: [],
            user: {},
            page: 1,
            total: 0
        }
    },
    created() {
        this.userId = this.$route.params.userId;
        this.page = this.$route.query.page || 1;
        //mark delete it
        console.log(this.page);
        blog.getBlogsByUserId(this.userId, { page: this.page })
            .then(res => {
                this.blogs = res.data;
                this.total = res.total;
                this.page = res.page;
                if (res.data.length > 0) {
                    this.user = res.data[0].user;
                }
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
            blog.getBlogsByUserId(this.userId, { page: newPage }).then(res => {
                this.blogs = res.data;
                this.total = res.total;
                this.page = res.page;
                this.$router.push({ path: `/user/${this.userId}`, query: { page: newPage } });
            })
        }
    }
}