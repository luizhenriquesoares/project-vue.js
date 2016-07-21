/**
 * Created by Luiz Henrique Soares on 20/07/2016.
 */

var app = new Vue({
    
    el: '#app',
    data: {
        item: [{
            "id": 1,
            "title": "Design Pattern",
            "value": 33.99,
            "description": "The book Desing pattern Essencial"
        },
            {
                "id": 2,
                "title": "Book of soul",
                "value": 23.22,
                "description": "Iron Maiden"
            },
            {
                "id": 3,
                "title": "Javascript Server-Side",
                "value": 32.99,
                "description": "The Book Serve-Side Javascript"
            }],
        books: [],
        Mysearch:'',
        orderCol:'id',
        orderInverse: 1,
        pagination:{
            maxPage:2,
            current:1,
            totalItems:0,
            totalPages:0,
            listNumber:[],
            listPagination:[]
        }
    },
    methods:{

        previous:function (e) {
            e.preventDefault();
            if (this.pagination.current === 1) {
                return false;
            }
            this.pagination.current = this.pagination.current -1;
            this.books = this.pagination.listPagination[this.pagination.current -1];
        },

        pagePaginatio:function ($event, current) {

            this.pagination.current = current + 1;
            this.books = this.pagination.listPagination[current];

        },

        next:function (e) {
            e.preventDefault();
            console.log(this.pagination.current);
            if (this.pagination.current === 1) {
                return false;
            }
            this.pagination.current = this.pagination.current + 1;
            this.books = this.pagination.listPagination[this.pagination.current -1];
        },


        filterOrderBy:function(e, col) {
            this.orderCol = col;
            this.orderInverse = this.orderInverse * -1;
            console.log(this.orderInverse);
        }
    },

    ready:function () {
        var self = this;
        self.pagination.totalItems = self.item.length;
        self.pagination.totalPages = Math.ceil(self.item.length / self.pagination.maxPage);

        var aux = [];
        for(var k in self.item){
            aux.push(self.item[k]);
            if(aux.length === self.pagination.maxPage) {
                self.pagination.listPagination.push(aux);
                aux = [];
            }
        }

        if(aux.length > 0) {
            self.pagination.listPagination.push(aux);
        }

        console.log(self.pagination.listPagination);
        self.books = self.pagination.listPagination[0];
    }
});


/*ready:function() {
 var self = this;
 self.$http.get('http://127.0.0.1:8080/apiBooks.json').then(function(response) {
 self.books = response.data;
 });
 }*/

