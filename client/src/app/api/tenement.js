import * as $ from 'jquery';

const baseUrl='http://localhost:2333';

function  post(url,item) {
       $.ajax({
            method:"POST",
            url:baseUrl+url,
            data:item
        }).done(function(data){

        });
}

function  get(url) {
       $.ajax({
            url:baseUrl+url
        }).done(function(data){

        });
}

export default{
    createTenementItem(item){
        post('/items.json',item);
    },
}