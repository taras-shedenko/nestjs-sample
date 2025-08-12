import { Test } from '@nestjs/testing';
import { CatsService } from './cats.service';

describe('CatsService', () => {
  let service: CatsService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [CatsService],
    }).compile();

    service = module.get<CatsService>(CatsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a new cat', () => {
      const res = service.create({
        name: 'Thundercracker',
        age: 1,
        breed: 'decep',
      });
      const resList = service.findAll();
      expect(res).toEqual({
        id: 1,
        name: 'Thundercracker',
        age: 1,
        breed: 'decep',
      });
      expect(resList).toEqual([
        { id: 1, name: 'Thundercracker', age: 1, breed: 'decep' },
      ]);
    });
  });

  describe('findAll', () => {
    it('should return an array of cats', () => {
      const cats = [{ id: 1, name: 'Starscreem', age: 50, breed: 'homie' }];
      (service as any).cats = cats;
      const res = service.findAll();
      expect(res).toBe(cats);
    });
  });

  describe('findOne', () => {
    it('should return specified cat', () => {
      const cats = [{ id: 1, name: 'Starscreem', age: 50, breed: 'homie' }];
      (service as any).cats = cats;
      const res = service.findOne(1);
      expect(res).toBe(cats[0]);
    });
  });

  describe('remove', () => {
    it('should return true', () => {
      const cats = [{ id: 1, name: 'Starscreem', age: 50, breed: 'homie' }];
      (service as any).cats = cats;
      const res = service.remove(1);
      const resList = service.findAll();
      expect(res).toBe(true);
      expect(resList).toEqual([]);
    });
  });
});
