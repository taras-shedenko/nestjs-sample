import { Test, TestingModule } from '@nestjs/testing';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

describe('CatsController', () => {
  let controller: CatsController;
  let service: CatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatsController],
      providers: [CatsService],
    }).compile();

    controller = module.get<CatsController>(CatsController);
    service = module.get<CatsService>(CatsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a new cat', () => {
      const res = controller.create({
        name: 'Thundercracker',
        age: 1,
        breed: 'decep',
      });
      const resList = controller.findAll();
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
      const res = controller.findAll();
      expect(res).toBe(cats);
    });
  });

  describe('findOne', () => {
    it('should return specified cat', () => {
      const cats = [{ id: 1, name: 'Starscreem', age: 50, breed: 'homie' }];
      (service as any).cats = cats;
      const res = controller.findOne(1);
      expect(res).toBe(cats[0]);
    });
  });

  describe('remove', () => {
    it('should return true', () => {
      const cats = [{ id: 1, name: 'Starscreem', age: 50, breed: 'homie' }];
      (service as any).cats = cats;
      const res = controller.remove(1);
      const resList = controller.findAll();
      expect(res).toBe(true);
      expect(resList).toEqual([]);
    });
  });
});
