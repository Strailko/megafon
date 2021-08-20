import { Injectable } from '@angular/core';
import { Entity, EntityType, User } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users: User[] = [
    {id: 0, email: 'admin@admin', password: 'admin', name: 'Super', surname: 'Admin', bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex ipsa laborum repudiandae iusto ullam culpa possimus repellat aspernatur blanditiis totam?', avatar: 'https://i.ibb.co/KF2WBB3/u1.png'},
    {id: 1, email: 'user@user', password: 'user', name: 'Default', surname: 'User', bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex ipsa laborum repudiandae iusto ullam culpa possimus repellat aspernatur blanditiis totam?', avatar: 'https://i.ibb.co/KF2WBB3/u1.png'},
    {id: 2, email: 'finki@finki', password: 'finki', name: 'Finki', surname: 'User', bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex ipsa laborum repudiandae iusto ullam culpa possimus repellat aspernatur blanditiis totam?', avatar: 'https://i.ibb.co/KF2WBB3/u1.png'}
  ];
  entities: Entity[] = [
    {id: 0, name: 'Спас за животните', date: new Date, description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex ipsa laborum repudiandae iusto ullam culpa possimus repellat aspernatur blanditiis totam?', photo: 'https://pbs.twimg.com/profile_images/902285656776433666/1_oP0zrz_400x400.jpg', type: EntityType.INITIATIVE, creator: this.users[0], members: this.users.slice(0,1), category: 'Животни'},
    {id: 1, name: 'Петоци за иднината', date: new Date, description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex ipsa laborum repudiandae iusto ullam culpa possimus repellat aspernatur blanditiis totam?', photo: 'https://assets2.rappler.com/7C068E0FF3384F06A57331B4C061494C/img/215016E61C9B46A4BDC47E95A98F926A/greta-thunberg-fridays-for-future-december-20-2019.jpg', type: EntityType.INITIATIVE, creator: this.users[1], members: this.users.slice(1,2), category: 'Активизам'},
    {id: 2, name: 'Чистење на кампус', date: new Date, description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex ipsa laborum repudiandae iusto ullam culpa possimus repellat aspernatur blanditiis totam?', photo: 'https://winonan.org/wp-content/uploads/2017/10/Garbage-900x600.jpg', type: EntityType.INITIATIVE, creator: this.users[2], members: this.users.slice(0,1), category: 'Екологија'},
    {id: 3, name: 'Критична маса #87', date: new Date, description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex ipsa laborum repudiandae iusto ullam culpa possimus repellat aspernatur blanditiis totam?', photo: 'https://scontent.fskp3-1.fna.fbcdn.net/v/t1.6435-9/219654575_4109776392423475_2387793263640062405_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=e3f864&_nc_ohc=4aZCsDb8xlEAX_a2Fe3&_nc_ht=scontent.fskp3-1.fna&oh=bc64e94b1c0b586da6301abd2beb40be&oe=61425014', type: EntityType.EVENT, creator: this.users[0], members: this.users.slice(1), category: 'Спорт'},
    {id: 4, name: 'Концерт на ФОЛТИН', date: new Date, description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex ipsa laborum repudiandae iusto ullam culpa possimus repellat aspernatur blanditiis totam?', photo: 'https://scontent.fskp3-1.fna.fbcdn.net/v/t39.30808-6/236218396_4186564634725181_1897761191640176388_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=340051&_nc_ohc=Vvvu-4q9rjwAX_6A7Dl&_nc_ht=scontent.fskp3-1.fna&oh=26f92f0d01bf18761889933b7c693cb5&oe=6123C1A0', type: EntityType.EVENT, creator: this.users[1], members: this.users.slice(2), category: 'Култура'},
    {id: 5, name: 'TrashTour MKD', date: new Date, description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex ipsa laborum repudiandae iusto ullam culpa possimus repellat aspernatur blanditiis totam?', photo: 'https://scontent.fskp3-1.fna.fbcdn.net/v/t39.30808-6/239534483_498527894572552_8696756402226965977_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=340051&_nc_ohc=si59d0TiYTMAX-75qn_&_nc_ht=scontent.fskp3-1.fna&oh=60bbaf8b27f6d6e888268693cd75e469&oe=6122AE34', type: EntityType.EVENT, creator: this.users[0], members: this.users.slice(1,2), category: 'Екологија'},
    {id: 6, name: 'Зелен хуман град', date: new Date, description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex ipsa laborum repudiandae iusto ullam culpa possimus repellat aspernatur blanditiis totam?', photo: 'https://scontent.fskp3-1.fna.fbcdn.net/v/t1.6435-9/130846929_103499558304870_2612605777190422930_n.png?_nc_cat=104&ccb=1-5&_nc_sid=e3f864&_nc_ohc=Wt6hR26LjCQAX-1WJGY&_nc_ht=scontent.fskp3-1.fna&oh=81ceeda3ffe08bdb4d25afb7a02f74f1&oe=6142C2E8', type: EntityType.ORGANISATION, creator: this.users[0], members: this.users.slice(2), category: 'Екологија'},
    {id: 7, name: 'НаТочак', date: new Date, description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex ipsa laborum repudiandae iusto ullam culpa possimus repellat aspernatur blanditiis totam?', photo: 'https://volontiraj.mk/images/organisations/natochak.jpg', type: EntityType.ORGANISATION, creator: this.users[1], members: this.users.slice(1,2), category: 'Спорт'},
    {id: 8, name: 'Гласен Текстилец', date: new Date, description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex ipsa laborum repudiandae iusto ullam culpa possimus repellat aspernatur blanditiis totam?', photo: 'https://volontiraj.mk/images/organisations/glasentekstilec.jpg', type: EntityType.ORGANISATION, creator: this.users[0], members: this.users.slice(0,1), category: 'Активизам'}
  ];

  constructor() { }

  getUsers() {
    return this.users;
  }

  getEntities() {
    return this.entities;
  }

  getUserByEmailAndPassword(email: string | undefined, password: string | undefined) : User {
    return this.users.find(x => x.email == email && x.password == password)!;
  }
  
  getUserById(id: number) {
    return this.users.find(x => x.id == id);
  }

  join(user: User, profile: Entity) {
    let id = this.entities.findIndex(x => x == profile);
    this.entities[id].members = this.entities[id].members?.filter(x => x != user);
    this.entities[id].members?.push(user);
  }

  addUser(user: User) {
    if(user.id == this.users.length + 1) {
      this.users.push(user);
    }
    else {
      user.id = this.users.length + 1;
      this.users.push(user);
    }
    this.updateLocalStorage();
    return user;
  }

  addEntity(entity: Entity) {
    if(entity.id == this.entities.length) {
      this.entities.push(entity);
    }
    else {
      entity.id = this.entities.length;
      this.entities.push(entity);
    }
    this.updateLocalStorage();
    return entity;
  }

  updateLocalStorage() {
    localStorage.removeItem("usersArray");
    localStorage.removeItem("entitiesArray");
    
    localStorage.setItem("usersArray", JSON.stringify(this.users));
    localStorage.setItem("entitiesArray", JSON.stringify(this.entities));
  }
}
