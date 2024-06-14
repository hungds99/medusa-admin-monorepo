import { Store } from '@medusajs/medusa';
import { dataSource } from '@medusajs/medusa/dist/loaders/database';
import {
  // alias the core repository to not cause a naming conflict
  StoreRepository as MedusaStoreRepository,
} from '@medusajs/medusa/dist/repositories/store';

export const StoreRepository = dataSource.getRepository(Store).extend({
  // it is important to spread the existing repository here.
  //  Otherwise you will end up losing core properties
  ...Object.assign(MedusaStoreRepository, {
    target: Store,
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

export default StoreRepository;
