import {  queryType } from '@nexus/schema';


export const Query = queryType({
  definition(t) {
    t.crud.user()
    t.crud.users();
    t.crud.mood()
    t.crud.moods();

  },
});


