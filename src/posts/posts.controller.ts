import { Controller, Get, Param,  } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
constructor (private postservice:PostsService){
    
}

@Get(':varday')
 getPostByDay(@Param() params){
    return this.postservice.getPosts(params.varday);
}

}
