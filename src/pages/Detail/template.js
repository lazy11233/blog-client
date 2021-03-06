import marked from 'marked';
import blog from '@/api/blog.js'

export default {
    name: 'Detail',
    data() {
        return {
            title: '',
            rawContent: '',
            user: {},
            createdAt: ''
        }
    },
    computed: {
        markdown() {
            return marked(this.rawContent);
        }
    },
    created() {
        this.blgoId = this.$route.params.blogId;
        blog.getDetail({blogId: this.blgoId}).then(res => {
            console.log(res);
            this.title = res.data.title;
            this.rawContent = res.data.content;
            this.createdAt = res.data.createdAt;
            this.user = res.data.user;
        })
    }
}