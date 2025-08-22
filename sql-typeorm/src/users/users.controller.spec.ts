import { Test } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

const mockService = {
  create: jest
    .fn()
    .mockImplementation((user) =>
      Promise.resolve({ id: 1, isActive: true, ...user }),
    ),
  findAll: jest
    .fn()
    .mockResolvedValue([
      { id: 1, firstName: 'Name', lastName: 'Last', isActive: true },
    ]),
  findOne: jest.fn().mockResolvedValue({
    id: 1,
    firstName: 'Name',
    lastName: 'Last',
    isActive: true,
  }),
  update: jest.fn().mockResolvedValue({ affected: 1 }),
  delete: jest.fn().mockResolvedValue({ affected: 1 }),
};

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [{ provide: UsersService, useValue: mockService }],
    }).compile();

    controller = module.get(UsersController);
    mockService.create.mockClear();
    mockService.findAll.mockClear();
    mockService.findOne.mockClear();
    mockService.update.mockClear();
    mockService.delete.mockClear();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should return created user', async () => {
      const res = await controller.create({
        firstName: 'Name',
        lastName: 'Last',
      });

      expect(mockService.create).toHaveBeenCalled();
      expect(res).toEqual({
        id: 1,
        firstName: 'Name',
        lastName: 'Last',
        isActive: true,
      });
    });
  });

  describe('findAll', () => {
    it('should return list of users', async () => {
      const res = await controller.findAll();

      expect(mockService.findAll).toHaveBeenCalled();
      expect(res).toEqual([
        { id: 1, firstName: 'Name', lastName: 'Last', isActive: true },
      ]);
    });
  });

  describe('findOne', () => {
    it('should return a user', async () => {
      const res = await controller.findOne(1);

      expect(mockService.findOne).toHaveBeenCalled();
      expect(res).toEqual({
        id: 1,
        firstName: 'Name',
        lastName: 'Last',
        isActive: true,
      });
    });
  });

  describe('update', () => {
    it('should return a user', async () => {
      const res = await controller.update(1, {
        firstName: 'Name',
        lastName: 'Last',
      });
      expect(mockService.update).toHaveBeenCalled();
      expect(res).toHaveProperty('affected', 1);
    });
  });

  describe('delete', () => {
    it('should return a user', async () => {
      const res = await controller.delete(1);
      expect(mockService.delete).toHaveBeenCalled();
      expect(res).toHaveProperty('affected', 1);
    });
  });
});
