import { User } from '@medusajs/medusa';
import { dataSource } from '@medusajs/medusa/dist/loaders/database';
import {
  // alias the core repository to not cause a naming conflict
  UserRepository as MedusaUserRepository,
} from '@medusajs/medusa/dist/repositories/user';

export const UserRepository = dataSource.getRepository(User).extend({
  // it is important to spread the existing repository here.
  //  Otherwise you will end up losing core properties
  ...Object.assign(MedusaUserRepository, {
    target: User,
  }),

  /**
   * Here you can create your custom function
   * For example
   */
  customFunction(): void {
    // TODO add custom implementation
    return;
  },
});

export default UserRepository;
