import { Test } from '@nestjs/testing';
import { PhotoController } from './photo.controller';
import { PhotoService } from './photo.service';

describe('PhotoController', () => {
  let controller: PhotoController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [PhotoController],
      providers: [{ provide: PhotoService, useValue: {} }],
    }).compile();

    controller = module.get<PhotoController>(PhotoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
