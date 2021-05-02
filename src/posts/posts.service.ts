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
        for (let i = 0; i < response.data.posts.length; i++) {
            x.push({
                id: response.data.posts[i].id,
                name: response.data.posts[i].name,
                votes_count: response.data.posts[i].votes_count,
                day: response.data.posts[i].day
            })
        }

        return  posts=x;
    }
}
