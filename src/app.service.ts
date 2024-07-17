import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hii Soldiers!';
  }

  getCommand(char: any): string {
    if (char === 'Eren') {
      return 'Tatake';
    } else {
      return 'Shinzowo Sasageyo...';
    }
  }
}
