import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../../Controller/User/create-user.dto';
import { UpdateUserDto } from '../../Controller/User/dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'; 
import { user } from '../../Model/User/entities/user.entity';
import { Observable,from, map } from 'rxjs';
import * as bcrypt from 'bcrypt';
import { HttpService} from '@nestjs/axios'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(user)
    private readonly usersRepository: Repository<user>,
    
    private httpService: HttpService
   
    ) { 
    }  
  
  async create(createUserDto: CreateUserDto) :Promise<CreateUserDto>{
    const salt = await bcrypt.genSalt(); 
    const pass = await bcrypt.hash(createUserDto.mdp,10);
       const util = new user ()
       util.nom=createUserDto.nom
       util.prenom= createUserDto.prenom
       util.email= createUserDto.email
       util.num_tel= createUserDto.num_tel
       util.mdp= pass
       this.httpService.get('http://localhost:3002/users').pipe(
        map(response => response.data))
     return this.usersRepository.save(util);
  }

 
  findAll(): Promise<user[]> {
    return this.usersRepository.find();
  }

  async findOne(condition: any) :Promise<user>{
      return this.usersRepository.findOne(condition);
     
  
  }

  
  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
  
    return this.usersRepository.delete(id);
  }
}
