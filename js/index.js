// context.createApp({
//     name:"index",
//     init:function(_i){
//         console.log("start"+_i);
//     }
// });

$(document).ready(() => {

    let blogHeads = [{
        title: "The security is main concern while developing applications",
        blogId: "blogId",
        headImg: "assets/img/1.jpg",
        createTime: new Date(),
        classify: "Technology",
        author: "小风",
        praise: 10,
        letdown: 31,
        abstract: marked('# Marked in the browser\n\nRendered by **marked**.')
    }]

    let pages = [{
        num: 1,
        isActive: false
    }, {
        num: 2,
        isActive: false
    }, {
        num: 3,
        isActive: true
    }]


    var app = new Vue({
        el: '#app',
        data: {
            blogHeads: blogHeads,
            pages: pages
        },
        methods: {
            query(e) {
                console.log(e);
            }
        }
    });

})