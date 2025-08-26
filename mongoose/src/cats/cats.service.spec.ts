import { Test } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { CatsService } from './cats.service';

describe('CatsService', () => {
  let service: CatsService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [CatsService, { provide: getModelToken('Cat'), useValue: {} }],
    }).compile();

    service = module.get<CatsService>(CatsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
