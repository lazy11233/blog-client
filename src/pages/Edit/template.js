import blog from '@/api/blog'
export default {
    name: 'Edit',
    data() {
        return {
            blogId: null,
            title: '',
            description: '',
            content: '',
            atIndex: false
        }
    },
    created() {
        this.blogId = this.$route.params.blogId;
        blog.getDetail({blogId: this.blogId}).then(res => {
            this.title = res.data.title;
            this.description = res.data.description;
            this.atIndex = res.data.atIndex;
            this.content = res.data.content;
        })
    },
    methods: {
        onEdit() {
            blog.updateBlog({blogId: this.blogId},{title: this.title,content: this.content,description:this.description,atIndex:this.atIndex}).then(res => {
                this.$message.success(res.msg);
                this.$router.push({
                    path: `/detail/${res.data.id}`
                })
            })
        }
    }
}