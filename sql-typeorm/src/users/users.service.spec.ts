import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';

const mockRepository = {
  save: jest
    .fn()
    .mockImplementation((user) =>
      Promise.resolve({ id: 1, isActive: true, ...user }),
    ),
  find: jest
    .fn()
    .mockResolvedValue([
      { id: 1, firstName: 'Name', lastName: 'Last', isActive: true },
    ]),
  findOneBy: jest.fn().mockResolvedValue({
    id: 1,
    firstName: 'Name',
    lastName: 'Last',
    isActive: true,
  }),
  update: jest.fn().mockResolvedValue({ affected: 1 }),
  delete: jest.fn().mockResolvedValue({ affected: 1 }),
};

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        UsersService,
        { provide: getRepositoryToken(User), useValue: mockRepository },
      ],
    }).compile();

    service = module.get(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should return created user', async () => {
      const res = await service.create({ firstName: 'Name', lastName: 'Last' });

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
      const res = await service.findAll();

      expect(res).toEqual([
        { id: 1, firstName: 'Name', lastName: 'Last', isActive: true },
      ]);
    });
  });

  describe('findOne', () => {
    it('should return a user', async () => {
      const res = await service.findOne(1);

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
      const res = await service.update(1, {});
      expect(res).toHaveProperty('affected', 1);
    });
  });

  describe('delete', () => {
    it('should return a user', async () => {
      const res = await service.delete(1);
      expect(res).toHaveProperty('affected', 1);
    });
  });
});
