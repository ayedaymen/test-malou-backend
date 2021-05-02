import { Injectable } from '@nestjs/common';

import { Posts } from './_models/posts';
import  axios from 'axios';

@Injectable()
export class PostsService {
    constructor() {
        axios.defaults.headers.common['Authorization'] = 'bearer OQ4OUThw--iqd3l8Ep3OdoQuqrqaq_oWUBln5wpRRKQ';
    }
     async getPosts(day: string): Promise<Posts[]>{
        const response = await axios.get(`https://api.producthunt.com/v1/posts?day=${day}`);
        let x=[];
        let posts:Posts[];
        response.data.posts.forEach(element => {
           x.push({ 
                id: element.id,
                name: element.name,
                votes_count: element.votes_count,
                day: element.day
            })
        }); 

        return  posts=x;
    }
}
