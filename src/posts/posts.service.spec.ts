import { Test, TestingModule } from '@nestjs/testing';
import { PostsService } from './posts.service';
import  axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('PostsService', () => {
  let service: PostsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostsService],
    }).compile();

    service = module.get<PostsService>(PostsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  describe('getPostByDay', () => {
    it('should return an array of posts', async () => {

      const result = [{ id: 1,
        name :"46aea",
        votes_count: 152588447,
        day:"01-05-2021" },

      {  id: 1,
        name:"46aea",
        votes_count: 152588447,
        day:"string" }];
        jest.spyOn(service, 'getPosts').mockImplementation(() => Promise.resolve(result));
      expect(await service.getPosts('2021-05-01')).toEqual(result);
    });
  });
});
