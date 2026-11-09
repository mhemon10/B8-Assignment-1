____How Generics Work in TypeScript and Help with Promise<T>

---Introduction

Generics হলো TypeScript এর একটা দারুণ feature। এটা দিয়ে তুমি এমন function লিখতে পারো যেটা অনেক type এর সাথে কাজ করে, কিন্তু type safety ঠিক থাকে। string বা number hardcode না করে <T> এর মতো placeholder ব্যবহার করো। call করার সময় TypeScript নিজেই আসল type বসিয়ে দেয়।

---Generics কী?

Generic হলো একটা type placeholder। <T> শুধু একটা নাম — এটা T, U বা যেকোনো কিছু হতে পারে। এটাকে ভাবো "type variable" হিসেবে, যেটা call করার সময় আসল type দিয়ে replace হয়।

```typescript
function identity<T>(value: T): T {
  return value;
}

identity("hello");
identity(42);     
```

একটাই function string আর number দুটোর জন্যই কাজ করে, কিন্তু return type ঠিক থাকে। কোনো `any` নেই।

---Array এর সাথে Generics

```typescript
function firstItem<T>(arr: T[]): T {
  return arr[0];
}

firstItem([1, 2, 3]);        
firstItem(["a", "b", "c"]);  
```

Function array এর ভিতরের জিনিস নিয়ে ভাবে না — শুধু প্রথম item টা সঠিক type দিয়ে return করে।

----Constraint সহ Generics

extends দিয়ে T কে সীমাবদ্ধ করা যায়।

```typescript
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}

getLength("hello");    
getLength([1, 2, 3]);  
```

এখন T এর মধ্যে length থাকতেই হবে। এতে বেশি safety পাওয়া যায়।

---- Promise<T> এর সাথে Generics

Promise সবসময় generic — Promise<T> মানে "একটা promise যেটা T type এর value দিয়ে resolve হয়"।

```typescript
function fetchUser(): Promise<{ id: number; name: string }> {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id: 1, name: "Rakib" }), 1000);
  });
}

async function main() {
  const user = await fetchUser();
  console.log(user.name); 
}
```

Promise <T> typed থাকায় await এর result পুরোপুরি typed। autocomplete আর error checking দুটোই পাও।

---Generic Async Function

```typescript
async function wrapInPromise<T>(value: T): Promise<T> {
  return value;
}

const num = await wrapInPromise(100);   
const str = await wrapInPromise("hi"); 
```

Promise <T> return type TypeScript কে বলে দেয় await এর পরে কী আশা করবে।

---Async Code এ কীভাবে সাহায্য করে

----Generics ছাড়া any বা cast লাগত। Generics দিয়ে:

- await এর result automatically typed হয়।
- autocomplete** পাও।
- Error compile time এই ধরা পড়ে।
- any এড়ানো যায়।

```typescript
async function getUser(id: number): Promise<{ id: number; name: string }> {
  const res = await fetch(`/api/users/${id}`);
  return res.json();
}

const user = await getUser(1);

```

এই কারণেই Promise<T> generic — এটা async operation এর মধ্য দিয়েও ভিতরের type ধরে রাখে।

---Conclusion

Generics দিয়ে reusable code লেখা যায়, যেটা নিজের type জানে। <T>, <T extends ...>, আর Promise<T> দিয়ে TypeScript async call এর মধ্যেও type information ঠিক রাখে। এতে code নিরাপদ হয়, autocomplete ভালো হয়, আর bug কমে। API বা async function নিয়ে কাজ করলে generics essential ।