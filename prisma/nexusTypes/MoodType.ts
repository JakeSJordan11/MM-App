import { objectType } from '@nexus/schema';

export const Mood = objectType({
  name: 'Mood',
  definition(t) {
    t.model.id()
    t.model.createdAt();
    t.model.updatedAt();
    t.model.title()
    t.model.mood()
    t.model.intesity()
    t.model.user()
  },
});

