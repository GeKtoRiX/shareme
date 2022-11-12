// Импортирование schema-creator для создания схем.
import createSchema from 'part:@sanity/base/schema-creator';

// Импортирование schema-type для создания типов схем.
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Импортирование пользовательских схем-блоков окружения UI.
import user from './user';
import pin from './pin';
import comment from './comment';
import postedBy from './postedBy';
import save from './save';

// Конструктор создания общей схемы Sanity.
export default createSchema({
  // Имя общей схемы.
  name: 'default',
  // Конкатенирование всех схем в одну общую схему  Sanity.
  types: schemaTypes.concat([user, pin, comment, postedBy, save]),
});
