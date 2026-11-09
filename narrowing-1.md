 ----Type Narrowing in TypeScript


----Introduction

TypeScript এ একটা variable একাধিক type এর হতে পারে। যেমন একটা value হয় string নয় number হতে পারে। Type narrowing মানে হলো — আমরা runtime এ check করি এটা আসলে কোন type, যাতে TypeScript ঠিকভাবে বুঝতে পারে। এতে আমরা নিরাপদে সঠিক method ব্যবহার করতে পারি।




---Type Narrowing কী?

যখন একটা variable এর একাধিক possible type থাকে, TypeScript নিশ্চিত না এটা কোনটা। Narrowing মানে আমরা একটা check যোগ করি। check এর পরে TypeScript জানে ভিতরে এটা ঠিক কোন type। তাই আমরা type-specific method নিরাপদে call করতে পারি, কোনো error ছাড়া।

---typeof ব্যবহার

typeof ব্যবহার হয় simple type এর জন্য — string, number, boolean।

```typescript
function process(value: string | number) {
  if (typeof value === "string") {
    return value.toUpperCase(); 
  }
  return value * 2; 
}
```

if এর ভিতরে TypeScript জানে value একটা string। তাই .toUpperCase() allowed। বাইরে জানে এটা number, তাই math কাজ করে।

----instanceof ব্যবহার

instanceof ব্যবহার হয় class এর সাথে।

```typescript
class Dog { bark() { return "Woof"; } }
class Cat { meow() { return "Meow"; } }

function speak(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    return animal.bark();
  }
  return animal.meow();
}
```

instanceof check এর পরে TypeScript জানে এটা কোন class। তাই bark() বা meow() call করা নিরাপদ।

----in operator ব্যবহার

in operator check করে object এ একটা property আছে কি না।

```typescript
type Admin = { name: string; role: string };
type User = { name: string; email: string };

function getInfo(person: Admin | User) {
  if ("role" in person) {
    return person.role; 
  }
  return person.email; User
}
```

যদি object এ role থাকে, TypeScript জানে এটা Admin । না থাকলে এটা User।

---Conclusion

Type narrowing TypeScript code কে নিরাপদ আর smart করে। simple value এর জন্য typeof , class এর জন্য instanceof, আর object property এর জন্য in ব্যবহার করো। এই ছোট ছোট check গুলো TypeScript কে তোমার code বুঝতে সাহায্য করে, আর অনেক error হওয়ার আগেই থামিয়ে দেয়।