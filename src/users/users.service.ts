import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import ErrorObject from 'globalData';
import { log } from 'console';

var userData: any[] = [];

@Injectable()
export class UsersService {
  dump(dumpData: any) {
    var result: { message: string } = {
      message: 'Data fetched Successfully',
    };
    dumpData.map((item: object) => userData.push(item));

    result.message = `${dumpData.length} userData Dumped`;

    return result;
  }

  create(createUserDto: CreateUserDto) {
    const modUserData: CreateUserDto = {
      ...createUserDto,
      id: userData.length + 1,
    };

    // console.log(userData.length);

    userData.push(modUserData);
    var result: { message: string; value: any } = {
      message: 'User added Successfully',
      value: modUserData,
    };
    return result;
  }

  findAll() {
    var result: { message: string; value: any } = {
      message: 'Data fetched Successfully',
      value: userData,
    };

    if (userData.length === 0) {
      result.message = 'No data found';
    }

    return result;
  }

  findOne(id: number) {
    var result: { message: string; value: any } = {
      message: 'Data fetched Successfully',
      value: userData,
    };

    var foundData: any = userData.find((item: any) => item.id === id);

    if (foundData.length === 0) {
      result.message = 'No data found';
    }
    result.value = foundData;

    return result;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    var result: { message: string; oldValue: any; value: any } = {
      message: 'Data modified Successfully',
      oldValue: {},
      value: {},
    };

    var foundData: any = userData.find((item: any) => item.id === id);
    userData = userData.filter((item: any) => item.id !== id);

    userData.push(updateUserDto);
    result.oldValue = foundData;
    result.value = updateUserDto;

    return result;
  }

  remove(id: number) {
    var result: { message: string; deletedData: any } = {
      message: 'Data deleted Successfully',
      deletedData: {},
    };

    var foundData: any = userData.find((item: any) => item.id === id);
    userData = userData.filter((item: any) => item.id !== id);
    result.deletedData = foundData;

    return result;
  }
}
