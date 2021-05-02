import { Test, TestingModule } from '@nestjs/testing';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { Posts } from './_models/posts';
import  axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('PostsController', () => {
  let controller: PostsController;
  let postsService: PostsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostsController],
     
    
    }).compile();

    controller = module.get<PostsController>(PostsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('PostsController', () => {
    
    beforeEach(() => {
      postsService  = new PostsService();
      controller = new PostsController(postsService);
    });
    describe('findAll', () => {
      it('should return an array of posts', async () => {

        const result = [{ id: 1,
          name :"46aea",
          votes_count: 152588447,
          day:"01-05-2021" },

        {  id: 1,
          name:"46aea",
          votes_count: 152588447,
          day:"string" }];
          mockedAxios.get.mockImplementationOnce(() => Promise.resolve(result));

        expect(await controller.getPostByDay("2021-02-04")).toBe(result);
      });
    });
  });
});
